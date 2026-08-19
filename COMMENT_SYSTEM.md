# HanaBio 双层评论系统运维说明

网站代码已经包含稳定页面 ID、giscus、语义块评论前端、Cloudflare Worker、
D1 schema、无损内容迁移和备份工作流。外部资源必须由仓库所有者创建；在公共
配置完整之前，构建仍会输出页面和语义块身份，但不会向读者显示未配置的评论 UI。

## 1. GitHub Discussions 与 giscus

1. 确认 `ximiku/HanaBio-Archive` 已启用 Discussions。
2. 创建类型为 Announcements 的 `页面评论` 分类；普通读者不应手工创建顶层讨论。
3. 为本仓库安装 <https://github.com/apps/giscus>。
4. 在 <https://giscus.app/zh-CN> 选择本仓库和分类，取得公开的 repository ID 与
   category ID。它们不是访问密钥，但仍统一通过 GitHub Actions Variables 注入。
5. 设置仓库 Variables：
   - `HANABIO_GISCUS_REPO_ID`
   - `HANABIO_GISCUS_CATEGORY=页面评论`
   - `HANABIO_GISCUS_CATEGORY_ID`

页面通过 `includes/hanabio_site/comment-pages.yml` 中的稳定 ID 匹配 Discussion，
不使用标题或 URL。重命名页面时运行：

```bash
python scripts/generate_comment_registry.py --move docs/old.md docs/new.md
```

删除页面时先将有效内容和评论承接位置处理完，再运行 `--retire`；tombstone ID
永不复用。普通检查直接运行 `python scripts/generate_comment_registry.py`。

## 2. Cloudflare 与 GitHub OAuth

1. 创建 D1 数据库 `hanabio-comments`、Turnstile widget 和私有 R2 备份 bucket。
2. 创建 GitHub OAuth App：主页使用正式站点 URL，callback 设置为
   `https://<worker-domain>/v1/auth/github/callback`。
3. 在 GitHub Environment `comments-production` 中配置 Secrets：
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_API_TOKEN`（仅授予 Worker、D1、R2 所需权限）
   - `HANABIO_D1_DATABASE_ID`
   - `HANABIO_COMMENT_BACKUP_KEY`
   - `HANABIO_WORKER_JWT_SECRET`
   - `HANABIO_WORKER_DEPLOY_SECRET`
   - `HANABIO_TURNSTILE_SECRET_KEY`
   - `HANABIO_GITHUB_CLIENT_SECRET`
4. 同一 Environment 配置 Variables：
   - `HANABIO_GITHUB_CLIENT_ID`
   - `HANABIO_ADMIN_GITHUB_IDS`（逗号分隔的 GitHub 数字用户 ID）
   - `HANABIO_COMMENT_BACKUP_BUCKET`
5. 如需本地调试，复制 `wrangler.toml.example` 为被 gitignore 的 `wrangler.toml`，然后设置：

```bash
wrangler secret put JWT_SECRET
wrangler secret put DEPLOY_SECRET
wrangler secret put TURNSTILE_SECRET_KEY
wrangler secret put GITHUB_CLIENT_SECRET
```

`JWT_SECRET`、`DEPLOY_SECRET` 和备份密钥应分别随机生成，不得复用。正式环境由
`Deploy Comment Worker` 的临时 secrets file 安全注入；文件仅存在于 Actions 临时目录，
不会进入仓库或日志。该手动工作流会测试 Worker、应用 schema 并部署，不会自动随
网站提交部署 Worker。

## 3. 连接网站部署

Worker 首次部署成功后，设置仓库 Variables：

- `HANABIO_COMMENT_API_URL=https://<worker-domain>`
- `HANABIO_TURNSTILE_SITE_KEY`
- `HANABIO_COMMENTS_REQUIRED=true`

设置仓库 Secret `HANABIO_COMMENT_DEPLOY_SECRET`，值必须与 Environment Secret
`HANABIO_WORKER_DEPLOY_SECRET` 相同。此后主站部署顺序为：严格构建和审计、准备评论迁移、部署
静态页面、激活评论迁移。任一步失败都会使工作流明确失败；正文变化不会删除评论。

## 4. 数据恢复

`Backup Comment Database` 每周导出 D1、使用 AES-256 加密并写入私有 R2。
在 R2 bucket 上配置 90 天对象生命周期规则。首次启用后必须下载一个备份，在临时
D1 数据库中解密并导入，以完成恢复演练；不要在公开 Actions 日志中输出明文数据库、
令牌或用户标识。
