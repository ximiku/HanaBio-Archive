# GitHub 共享登录

页底保留官方 giscus widget；`docs/js/comment-auth.js` 控制 iframe 初始化，侧栏与页底均经 giscus OAuth 授权。Worker 的 `POST /v1/auth/giscus/exchange` 接收 `{ "session": "giscus 的加密会话" }`，向固定的 `https://giscus.app/api/oauth/token` 兑换后，通过 GitHub `/user` 核验数字 ID，返回原格式的 `{ session: { token, expires_at, commenter } }`。它不会返回或保存 GitHub access token。

这是基于 giscus 当前实现的兼容适配，不是官方承诺的 SSO API。上游参考版本为 `3d6430237108ca4ee3eb6a1a20595201c09c72d5`，重点关注 `client.ts`、`pages/widget.tsx`、`pages/api/oauth/token.ts` 与 `lib/context.ts` 的变化。

## 会话与恢复

- iframe 的 `origin` 返回地址携带当前标签页的随机 nonce。回调仅接受 sessionStorage 中匹配、未消费、24 小时内且同页面的 nonce；`backLink` 保持正常页面地址，避免把认证参数写进 Discussion。
- 旧 giscus 存储值仍可用于页底，但不自动作为本站身份。首次衔接需从任一入口重新登录。已经绑定的会话可在本站 JWT 过期时再次核验续期。
- 身份沿用 `(github, external_id)`，不按昵称合并。带有现有 GitHub 会话而登录另一个账号时返回 409，用户需先退出再选择账号。
- 退出仅清理本站浏览器会话，不撤销 GitHub App 授权。其他本站标签页同步退出；保留草稿和单独备份的访客凭据，可通过“恢复访客身份”恢复未过期的编辑权限。
- 失败时不导入新凭据，侧栏显示“独立登录”。该入口沿用原 HanaBio OAuth；此时不承诺两处共享。

## 开关

`mkdocs.yml` 的 `extra.giscus_shared_login: false` 恢复侧栏独立 OAuth；页底仍使用安全回调适配器登录。Worker 设置 `GISCUS_SHARED_LOGIN="false"` 拒绝桥接。GitHub Actions 的仓库变量 `HANABIO_GISCUS_SHARED_LOGIN=false` 会在下一次 Worker 发布时应用该开关。两处默认开启。

运行 Node 22 以上的 `npm test`，包含真实 SQLite Worker SQL 与隔离的浏览器会话状态测试。发布前还需检查真实 OAuth 往返、两入口、退出、即时导航、移动端和 giscus 上游兼容性；单元测试不能代替真实授权验收。
