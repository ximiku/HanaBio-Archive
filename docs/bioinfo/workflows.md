# 命令行、工作流与可重复研究

生物信息学分析通常由下载、筛选、格式转换、计算、汇总与作图等多个步骤组成。需要保存的是从输入到结论的完整生成关系：哪些数据进入了哪一步，使用了什么代码、软件、参数和环境，运行是否成功，输出又经过了怎样的检验。

命令行、脚本、计算笔记本、Galaxy 历史和工作流引擎都是组织这条关系的工具。命令行便于把小程序组合成数据流，脚本把交互操作固定为程序，工作流系统进一步声明任务之间的依赖并管理并行、缓存和调度。图形界面和命令行都可以形成可重复研究，决定性条件是实际操作能否被准确记录、检查并在适当环境中重新执行。[^reproducible-rules]

## 从结果回溯分析过程 { #analysis-provenance }

一项分析可以看成由数据实体和计算活动组成的有向关系网。原始文件、参考序列、配置和样本表是输入，软件调用或人工判断是活动，中间文件、质量报告、统计量和图表是输出。某一步的输出又成为下一步的输入。这里既有计划层面的过程说明，也有运行层面的事实记录：工作流文件描述“准备怎样计算”，执行日志描述“这一次实际上怎样计算”。这两类信息分别称为前瞻性来源信息和回顾性来源信息（prospective and retrospective provenance）。[^workflow-run-crate]

完整记录应从研究开始时形成。分析结束后依据记忆补写方法，容易遗漏失败的尝试、临时过滤、软件默认值和后来改变的参考数据库。Sandve 等提出的可重复计算原则把“每个结果都能追踪其产生方式”放在首位，并建议以可执行脚本或工作流保持方法说明与实际操作同步。[^reproducible-rules]

对一个准备交付的结果，可以沿生成关系反向追问：输出文件由哪个任务创建；任务使用哪次代码提交、哪份配置和哪个软件环境；输入文件来自哪个样本、数据库发布版或上游任务；运行记录是否表明正常结束；质量检查是否覆盖了最终文件。保存这些层次即可维持完整的证据关系。

## Shell、进程与文件流 { #shell-streams }

### 终端、Shell 与命令 { #terminal-shell-command }

终端是呈现输入和输出的界面，Shell 是读取命令、展开参数并启动进程的解释器，具体程序才执行序列比对、格式转换或统计计算。Bash、Zsh 等 Shell 的语法存在差异；脚本若依赖某种语法，应在文件开头声明解释器，并记录执行平台。把“在终端里运行”写成方法信息仍然不充分，因为同一行文字可能受当前目录、环境变量、别名、搜索路径和文件名展开方式影响。

绝对路径从文件系统根开始，相对路径则依赖当前工作目录。项目内部使用相对路径通常更便于迁移，但脚本应从明确的项目入口解析路径，而不是假定使用者恰好站在某个目录。变量展开、空格和通配符需要正确引用；例如 `*.fastq.gz` 在程序启动前就由 Shell 展开，匹配不到文件时的行为也随 Shell 设置而异。文件处理顺序若会影响结果，还需固定排序规则和区域设置。

命令由程序名、选项和位置参数组成。长命令应把可变值放入具有字段说明的配置文件或命名参数，实验组别和关键阈值通过显式字段记录。密码、访问令牌和私钥应由受控的凭据系统或运行时环境提供，不能写进命令历史、脚本、配置模板、日志和版本库。

### 标准输入、标准输出与错误流 { #standard-streams }

Unix 程序通常接收标准输入（standard input，stdin），把主要结果写到标准输出（standard output，stdout），把诊断信息写到标准错误（standard error，stderr）。重定向可以把输出保存为文件，管道则把前一个进程的 stdout 接到下一个进程的 stdin。Software Carpentry 用“管道与过滤器”说明这种组合方式：每个程序完成一个边界清楚的转换，多个小程序由共同的数据流接口组成更大的分析。[^shell-lesson]

```bash
(
  producer --input reads.txt |
    transformer --min-quality 20
) > results/filtered.txt 2> logs/filter.stderr
```

这段形式同时展示了数据流和错误流。可靠脚本还需处理 `>` 对已有文件的覆盖、上游失败后空数据继续传递，以及 Bash 默认以最后一个命令决定管道退出状态等情况。正式脚本应明确错误策略，例如启用并理解 `pipefail`，逐步检查退出状态、输出是否存在及内容是否满足预期。退出码为零表示程序按其约定结束；样本、参数和生物学结论还需另行检查。

标准流适合逐行或分块处理，可以减少临时文件和磁盘写入；需要随机访问、建立索引、重复检查或保留审计节点时，中间文件仍有价值。是否保留中间产物应由重算成本、审计需要和存储代价决定，并记录哪些文件可由上游重新生成。

## 项目结构、脚本与版本历史 { #projects-version-control }

一个计算项目至少要区分不可变的原始数据、人工维护的代码与配置、自动生成的中间结果和最终交付物。目录名称可以因项目而异，关键是来源数据不被就地修改、派生结果能够由代码重建、临时文件与正式结果分开。研究对象、文件格式、标识符、版本和校验和的管理原则见[生物数据、格式与数据库](data_databases.md)。Wilson 等面向科研计算给出的实践同样强调保存原始数据、记录所有处理步骤、显式声明依赖，并为程序提供小型示例数据。[^good-enough-computing]

交互探索应尽快沉淀为脚本。脚本接收显式输入和参数，把输出写到指定位置，遇到错误给出非零退出状态；重复使用的代码应拆成函数或模块。脚本既是执行工具，也是精确的方法记录。文档解释研究意图、输入字段、参数理由和输出含义，代码负责落实具体计算，两者共同构成可复核说明。

计算笔记本把代码、叙述、表格和图形放在同一文档中，适合探索数据和展示分析思路。它的交互状态也会形成风险：单元格可以乱序执行，内存中可能留有已从文档删除的变量，显示结果可能来自旧代码。准备分享时，应从干净内核按固定顺序完整执行，公开依赖和输入，把复杂、可测试的逻辑提取到普通模块，并保留便于长期阅读的静态输出。[^notebook-rules]

版本控制系统记录文件随时间的变化。Git 的一次提交保存一组相关变更及其父提交关系，使代码、配置和文档能够回到明确状态并比较差异。分析结果应引用代码提交哈希或发布标签，以取代含义会随时间变化的“最新版脚本”。提交宜小而语义完整，代码审查和自动测试应针对同一提交进行。大型测序文件、数据库快照和生成结果通常保存在合适的数据仓库或对象存储中，并由清单记录持久标识符、版本和校验和；普通 Git 历史主要承载代码、配置和文档。凭据与受限个体数据不得进入公开版本库。[^git-version-control]

## 软件环境与依赖封装 { #environments-containers }

同一脚本在不同机器上产生差异，常来自编程语言、库、底层二进制程序或系统组件的版本变化。顶层软件名称需要与传递依赖共同记录。环境描述文件声明需要哪些包和版本，求解器据此选择一组相容依赖；锁定文件进一步记录具体构建或下载对象。前者通常更便于跨平台安装，后者更接近在特定平台上精确重建。Conda 的官方文档也区分跨平台环境规格、只包含显式安装包的 `--from-history` 导出，以及面向同一平台精确重建的 explicit 规格。[^conda-environments]

环境文件必须与代码一同版本化，并在干净环境中实际创建和测试。仅保存一次 `package list` 输出，可能记录了大量偶然安装却遗漏系统库；仅给出宽泛版本下限，则可能在未来解析到行为不同的组合。稳妥的发布往往同时保存便于维护的抽象规格和经过验证的锁定结果，并说明支持的操作系统与处理器架构。

容器镜像把程序及其用户空间依赖封装起来，可减少宿主机发行版差异。镜像标签可能被重新指向，因此重要运行还应记录不可变摘要和构建配方。宿主内核、中央处理器（central processing unit，CPU）与图形处理器（graphics processing unit，GPU）指令和驱动、挂载数据、网络服务及外部数据库仍位于容器封装边界之外，需要按其对结果的影响记录。Apptainer 以单文件镜像格式（Singularity Image Format，SIF）、非特权运行和对并行文件系统、加速器的集成为高性能计算提供了常用容器路径。[^apptainer-containers]

环境管理器和容器解决的是不同层次的问题。前者便于选择语言包和生信软件版本，后者还能固定更多操作系统用户空间。工作流可以为不同任务分别声明轻量环境，也可以在统一容器基础上加载任务环境。Snakemake 文档把无环境管理、每规则 Conda 环境以及容器内 Conda 环境列为逐步增强的封装层次，同时提醒平台专用的环境模块应有可移植的替代描述。[^snakemake-deployment]

## 从脚本串联到工作流图 { #workflow-graphs }

短分析可以用一个脚本按顺序执行；当样本增加、任务需要并行、步骤具有不同资源需求或失败后需要续跑时，隐含在脚本中的控制关系会变得难以维护。工作流系统把每个任务的输入、输出、命令、参数、环境和资源声明为节点，再依据数据依赖形成有向无环图（directed acyclic graph，DAG）。没有依赖关系的任务可以并发，依赖输出改变的任务才需要重新计算。

不同系统采用不同表达方式，但承担的核心职责相近：

| 工作方式 | 主要表达 | 可保存的关键对象 | 仍需主动核对的边界 |
| --- | --- | --- | --- |
| Shell／通用脚本 | 命令顺序、循环和条件 | 脚本、配置、stdout／stderr | 依赖常是隐式的，并行、续跑与失败传播需自行实现 |
| Snakemake | 规则的输入、输出与通配符 | Snakefile、规则环境、配置、报告 | 文件和外部状态必须完整声明，不能依赖未登记的全局环境 |
| Nextflow | 进程及数据流通道 | 流程代码、配置、trace、报告与任务缓存 | 通道配对、非确定性输入和缓存目录会影响续跑语义 |
| Galaxy | 工具、数据集、历史与可视化工作流 | 历史、工具版本、参数、工作流和数据集合 | 需导出或共享历史，并确认目标实例仍有相应工具与参考数据 |

Snakemake 以文件输入输出决定任务依赖，并可把同一工作流调度到本机、集群或云端；Nextflow 用进程和数据流通道分离计算逻辑与执行平台；Galaxy 则可以从图形用户界面（graphical user interface，GUI）的分析历史提取可重用工作流。Galaxy 历史会保存工具、版本和参数，使 GUI 操作也能形成透明记录。三者提供不同的表达与执行方式，方法科学性仍由研究设计、数据、参数与验证决定。[^snakemake-workflows][^nextflow-executors][^galaxy-histories]

缓存和续跑依赖“任务身份”的定义。Nextflow 的任务哈希会考虑脚本、输入、容器或环境等信息，并要求相应工作目录中的输出仍然存在；输入被就地修改、未声明的全局变量或非确定性配对会破坏缓存语义。缓存命中表示系统按既定规则认为任务未改变；缓存文件完整性和隐藏依赖则由校验和、完整性测试和运行清单继续验证。[^nextflow-cache]

工作流还应区分重试与检查点。重试是在相同或调整后的资源条件下重新执行失败任务；检查点保存长任务内部的进度；工作流级缓存则重用已经完成的任务输出。三者都能减少重复计算，输出有效性仍需通过完整性和语义检查确认。任务应先写入临时位置，通过检查后再原子地发布正式输出，避免下游读取未完成文件。

## 测试、日志与失败诊断 { #testing-logging }

可靠工作流把“运行成功”的含义分成多个层次。语法检查确认文件能被解释，单元测试验证小函数，集成测试检查工具之间的接口，回归测试比较已知输入的稳定输出，冒烟测试则用小数据确认整个流程能够完成。生物信息学还需要领域不变量，例如样本 ID 不应无故丢失、坐标必须落在指定组装范围、配对文件数量一致、过滤后的记录数不应超过输入。测试数据应足够小以便频繁运行，同时包含缺失值、空结果、重复记录和异常字符等真实边界情况。

连续集成可以在代码或环境变化时自动建立干净环境并运行测试。它证明的是给定测试集在给定执行条件下通过，覆盖不到的分支、真实大数据的资源瓶颈和生物学模型错误仍可能存在。升级数据库或软件时，应先在固定基准数据上比较输出变化，再决定差异来自修正、默认值改变还是新的错误。

日志要能回答任务何时开始和结束、处理了哪个输入、使用了哪些参数、运行在哪个节点、消耗多少资源以及为何失败。stdout 与 stderr 应分别捕获，任务和样本使用稳定标识符关联；日志级别既要保留诊断所需信息，也要避免写入访问令牌、个体身份、受控数据内容和不必要的绝对路径。集中式日志便于检索，但长期归档还需保存与发布结果对应的不可变运行摘要。

## 本机、高性能计算与云端执行 { #hpc-cloud }

工作流描述“计算什么”，执行器描述“在哪里和怎样运行”。同一任务可以作为本机进程、集群调度作业、云端批处理任务或容器编排单元运行。工作流系统能够转换提交方式，却仍需研究者为每类任务给出合理的 CPU、内存、墙钟时间、GPU、临时磁盘和并发限制。资源估计应来自小规模试跑和历史监测，再按输入规模调整。

资源申请过小会导致内存溢出、超时和反复重跑；申请过大则延长排队、降低集群利用率并增加成本。计算密集任务关注处理器和加速器利用率，I/O 密集任务更受存储吞吐、文件数量、网络和数据位置限制。把计算移动到大型数据所在的受控平台，常比反复传输数据更有效，也能减少不必要的敏感数据副本。

云端可伸缩性仍受配额、供应和成本约束。对象存储与普通文件系统的语义不同，虚拟机和加速器型号会变化，区域影响数据驻留、延迟、价格和电力结构。访问权限遵循最小必要原则，运行身份、审计日志、加密和销毁策略应满足数据使用协议。受控人类数据可以在同样受权的安全环境中验证可重复性；公开层则提供合规的元数据、代码和申请条件。

计算的环境代价也属于方法选择。碳排放估计取决于硬件、运行时间、内存、数据中心效率和所在地能源结构。先用小数据调试、复用经过验证的缓存、减少无效参数搜索、按需申请资源、把计算靠近数据并报告核心小时和硬件信息，通常同时改善成本、速度和可追溯性。绿色计算以减少不产生科学价值的消耗为目标，研究价值则由科学问题和证据判断。[^green-algorithms]

## 运行清单与结果发布 { #run-manifest-publication }

一次运行的最小清单应连接输入、方法、环境、执行和输出。字段可以保存在工作流报告、JavaScript 对象表示法（JavaScript Object Notation，JSON）、YAML、数据库或研究对象包中；具体格式次于信息之间的稳定关联。

| 层次 | 至少记录 | 需要回答的问题 |
| --- | --- | --- |
| 研究与数据 | 项目、样本、数据许可、登录号／版本／访问日期、文件大小与校验和 | 分析对象是谁，输入是否与声明一致 |
| 代码与工作流 | 仓库地址、提交哈希／发布标签、工作流文件及配置摘要 | 哪个可执行过程生成了结果 |
| 软件环境 | 工具与工作流引擎版本、锁定文件、容器摘要、操作系统与关键驱动 | 依赖和运行语义是否可重建 |
| 参数与随机性 | 完整参数、默认值来源、随机种子、样本分组与排除清单 | 哪些选择可能改变结果 |
| 执行记录 | 运行 ID、起止时间、任务状态、日志、计算节点与资源消耗 | 这一次实际发生了什么 |
| 输出与验证 | 输出校验和、记录数、质量指标、测试结果、失败与重试 | 文件是否完整，结果经过哪些检查 |

参数需要保存具体取值及其来源，软件需要记录实际使用的默认设置及版本。默认值会随版本改变，网页服务背后的数据库和模型也会更新。对于 API 和在线分析，应记录请求参数、服务版本或访问日期、返回对象标识和必要的响应摘要；若服务无法冻结，应说明这一限制并保存允许许可范围内的原始响应。

研究成果发布时，代码仓库适合协作历史，带数字对象标识符（digital object identifier，DOI）的档案适合引用稳定版本，数据档案保存数据和元数据，容器注册表保存镜像，WorkflowHub 等注册平台则增强工作流发现。README 说明从哪里开始，许可证界定代码和数据的复用条件，引用文件把作者贡献和推荐引文机器化。Workflow Run RO-Crate 等规范还能把输入、输出、软件、参数、运行活动和容器摘要组织为机器可读的来源记录，并与面向人的方法说明互补。[^workflow-run-crate]

可查找、可访问、可互操作与可复用（Findable, Accessible, Interoperable and Reusable，FAIR）原则允许按许可和授权条件访问对象。工作流、环境和元数据同样可以获得持久标识符、标准格式、明确许可和来源关系。Galaxy Training Network 的 FAIR 路径把元数据、持久标识符、开放格式、版本维护和可重用工作流放在同一管理框架中。[^gtn-fair]

## 可重复性的层次与证据边界 { #reproducibility-levels }

“可重复”“可复现”和“可重现”在不同学科中用法并不统一，报告中应给出操作性定义。美国国家科学院 2019 年报告把 reproducibility 定义为使用相同输入数据、计算步骤、方法、代码和分析条件得到一致的计算结果，把 replicability 定义为针对同一科学问题、使用新获得数据的独立研究得到一致结果。[^nasem-reproducibility]

| 层次 | 典型检验 | 能支持的结论 |
| --- | --- | --- |
| 可重跑 | 原作者在当前环境再次启动流程 | 入口、权限和依赖此刻可用 |
| 计算可重复 | 他人以同一数据、代码和明确条件得到一致结果 | 已报告计算过程足以重建，未发现影响结果的执行差异 |
| 数值稳健 | 改变并行顺序、硬件或允许范围内的软件环境后，数值在预设容差内一致 | 结论不依赖无关的低层执行细节 |
| 统计稳健 | 合理改变随机种子、划分、模型或敏感参数后，主要推断保持稳定 | 结论对已检查的分析选择不敏感 |
| 独立重复与生物学验证 | 新样本、新队列、替代测定或扰动实验支持同一问题的结论 | 证据超出原始数据和原始计算实现 |

一致结果也需要预先定义比较尺度。位级相同适合校验归档文件，浮点计算常以绝对或相对容差比较，随机模型应比较分布和关键统计量，复杂图表则应回到生成它们的数据。为了得到相同结果而固定所有细节，与为了判断结论稳健而有计划地改变条件，是两个互补目标。

工作流能够减少遗漏、记录失败并让规模化计算更可靠；实验设计、统计假设和生物学解释仍由相应证据链承担。一个管线在容器中完整重跑，证明既定输入经过既定实现得到相容输出；样本身份、参考版本、评价数据独立性和模型假设还需分别核验。[算法、统计与计算基础](computational_foundations.md)给出算法与评估层面的判断框架，后续的[测序技术、读段与质量控制](sequencing.md)及各组学页面将把这些工作流原则应用到具体数据链。

## 参考资料与延伸阅读 { #references }

- Software Carpentry. [The Unix Shell](https://swcarpentry.github.io/shell-novice/).
- Wilson G, et al. [Good enough practices in scientific computing](https://doi.org/10.1371/journal.pcbi.1005510). *PLOS Computational Biology*. 2017;13(6):e1005510.
- Sandve GK, et al. [Ten Simple Rules for Reproducible Computational Research](https://doi.org/10.1371/journal.pcbi.1003285). *PLOS Computational Biology*. 2013;9(10):e1003285.
- Rule A, et al. [Ten simple rules for writing and sharing computational analyses in Jupyter Notebooks](https://doi.org/10.1371/journal.pcbi.1007007). *PLOS Computational Biology*. 2019;15(7):e1007007.
- Git Project. [Pro Git: About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control.html).
- Conda. [Managing environments](https://docs.conda.io/projects/conda/en/stable/user-guide/tasks/manage-environments.html).
- Mölder F, et al. [Sustainable data analysis with Snakemake](https://doi.org/10.12688/f1000research.29032.2). *F1000Research*. 2021;10:33；[Distribution and Reproducibility](https://snakemake.readthedocs.io/en/stable/snakefiles/deployment.html).
- Nextflow. [Caching and resuming](https://www.nextflow.io/docs/latest/cache-and-resume.html)；[Executors](https://www.nextflow.io/docs/latest/executor.html).
- Galaxy Training Network. [How to reproduce published Galaxy analyses](https://training.galaxyproject.org/training-material/topics/introduction/tutorials/galaxy-reproduce/tutorial.html)；[FAIR Data, Workflows, and Research](https://training.galaxyproject.org/training-material/topics/fair/index.html).
- National Academies of Sciences, Engineering, and Medicine. [*Reproducibility and Replicability in Science*](https://doi.org/10.17226/25303). National Academies Press; 2019.
- Leo S, et al. [Recording provenance of workflow runs with RO-Crate](https://doi.org/10.1371/journal.pone.0309210). *PLOS ONE*. 2024;19(9):e0309210.
- Lannelongue L, Grealey J, Inouye M. [Green Algorithms: Quantifying the Carbon Footprint of Computation](https://doi.org/10.1002/advs.202100707). *Advanced Science*. 2021;8:2100707.

[^reproducible-rules]: Sandve 等的[可重复计算研究原则](https://doi.org/10.1371/journal.pcbi.1003285)要求为每个结果保存完整生成过程、避免无法追踪的手工数据操作、归档程序版本并记录中间结果；可执行脚本和工作流能降低方法说明与实际执行脱节的风险。
[^workflow-run-crate]: Workflow Run RO-Crate 的 [Process Run Crate](https://www.researchobject.org/workflow-run-crate/profiles/process_run_crate/)区分过程计划与实际执行，并用软件、运行活动、输入、输出、环境变量和容器镜像等实体表达 provenance；Leo 等在[正式论文](https://doi.org/10.1371/journal.pone.0309210)中说明其跨工作流语言记录和再执行用途。
[^shell-lesson]: Software Carpentry 的 [Pipes and Filters](https://swcarpentry.github.io/shell-novice/instructor/04-pipefilter.html)说明 stdin、stdout、重定向、管道以及把单一功能过滤器组合为处理链的方式。
[^good-enough-computing]: Wilson 等的 [Good enough practices in scientific computing](https://doi.org/10.1371/journal.pcbi.1005510)覆盖原始数据保护、处理记录、显式依赖、示例数据、项目目录、版本控制、许可和受限数据安全等基础实践。
[^notebook-rules]: Rule 等的 [Jupyter Notebook 指南](https://doi.org/10.1371/journal.pcbi.1007007)同时说明计算叙事的价值和交互式隐藏状态、乱序执行、依赖缺失及 JSON 版本差异带来的风险，并建议从头执行、记录环境和提供可读归档。
[^git-version-control]: Git Project 的 [About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control.html)把版本控制定义为记录文件随时间变化并恢复、比较具体版本的系统；Git 提交和分支进一步提供可引用的项目历史。
[^conda-environments]: Conda 的[环境管理文档](https://docs.conda.io/projects/conda/en/stable/user-guide/tasks/manage-environments.html#sharing-an-environment)区分跨平台 YAML／JSON 环境规格、平台特定 explicit 规格和 `--from-history` 导出，并说明精确重建与跨平台可移植性具有不同要求。
[^apptainer-containers]: Apptainer [User Guide](https://apptainer.org/docs/user/latest/introduction.html)说明容器替换的是 Linux 用户空间，并介绍 SIF 镜像、签名、非特权运行以及与 GPU、高速网络和并行文件系统的集成。
[^snakemake-deployment]: Snakemake 的 [Distribution and Reproducibility](https://snakemake.readthedocs.io/en/stable/snakefiles/deployment.html)说明每规则 Conda 环境、平台锁定规格、Apptainer 容器、HPC 环境模块和可归档工作流之间的关系。
[^snakemake-workflows]: Snakemake [官方文档](https://snakemake.readthedocs.io/en/stable/)以输入输出规则描述可扩展分析，并支持把软件环境和运行报告与工作流绑定；Mölder 等的[持续更新论文](https://doi.org/10.12688/f1000research.29032.2)讨论其可持续与可重复分析设计。
[^nextflow-executors]: Nextflow 的 [Executors](https://www.nextflow.io/docs/latest/executor.html)把任务定义与本机、HPC 调度器、云批处理和 Kubernetes 等执行后端分离，使同一流程逻辑能够采用不同资源平台。
[^galaxy-histories]: Galaxy Training Network 的[分析复现教程](https://training.galaxyproject.org/training-material/topics/introduction/tutorials/galaxy-reproduce/tutorial.html)说明历史保存工具、工具版本与参数，并可从历史提取、分享和再次运行工作流。
[^nextflow-cache]: Nextflow 的 [Caching and resuming](https://www.nextflow.io/docs/latest/cache-and-resume.html)列出任务哈希考虑的脚本、输入、环境和容器等对象，并说明缓存与工作目录必须同时保留、输出存在且退出状态有效时才能续跑。
[^green-algorithms]: Lannelongue 等的 [Green Algorithms](https://doi.org/10.1002/advs.202100707)以处理器、运行时间、内存、数据中心效率和所在地能源强度估计计算碳足迹，并提出减少无效计算和合理选择资源的框架。
[^gtn-fair]: Galaxy Training Network 的 [FAIR Data, Workflows, and Research](https://training.galaxyproject.org/training-material/topics/fair/index.html)把元数据、持久标识符、访问规则、互操作格式、许可、版本维护与工作流复用纳入计算研究对象的管理。
[^nasem-reproducibility]: National Academies 的 [*Reproducibility and Replicability in Science*](https://doi.org/10.17226/25303)采用“原数据与代码的计算可重复性”和“新数据独立研究的一致性”这组操作定义；其他学科可能采用相反术语，故实际报告仍须写明比较对象和条件。
