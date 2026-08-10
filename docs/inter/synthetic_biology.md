# 合成生物学

合成生物学以构建为研究方法：研究者选定一种希望系统完成的行为，把它分解为可操纵的分子与细胞过程，组装出新的组合，再用实际行为检验对这些过程的理解。构建可以从现有细胞出发，重排调控线路、代谢通路或基因组；也可以从无细胞反应、膜区室和非天然分子出发，逐步重建生命系统的部分性质。Benner 和 Sismour 将这两条传统概括为“用非天然分子重现生命行为”与“用可交换的天然元件组装非天然功能”，二者共同把 synthesis 变成检验生物学原理的手段。[^synthetic-biology-scope]

工程设计为这项研究增加了明确的目标和评价尺度。一个系统需要在什么细胞或环境中工作，读取什么输入，产生什么输出，响应多快，允许多大细胞间差异，又要维持多少代；这些要求先形成 specification（设计规格），随后才进入元件选择、模型、构建和测试。Endy 将 abstraction、standardization 和 decoupling 视为工程生物学的重要基础，同时指出生物系统仍难以像成熟工程器件那样按部件说明书可靠预测。[^engineering-biology-foundations]

本页建立贯穿合成生物学页面组的共同语言：parts–devices–systems 抽象层级、模块化与标准化、design–build–test–learn（DBTL）循环、宿主背景、资源竞争、噪声、鲁棒性和进化稳定。四个专题页随后分别进入[生物元件与合成基因线路](synthetic_circuits.md)、[基因组设计、代谢工程与生物制造](synthetic_genome_metabolic.md)、[无细胞系统、最小细胞与人工细胞](synthetic_cell_free.md)及[多细胞合成系统与空间模式](synthetic_multicellular.md)。

## 合成与设计构成互补的研究路径 { #synthesis-and-design }

分析天然系统通常从已有结构与现象追问机制，合成路径则从候选机制出发，判断最少需要哪些组分才能重现目标行为。若一个由少数 repressors 构成的人工网络产生 bistability，说明该反馈结构足以形成状态记忆；若按模型组装后没有出现预期行为，失败会暴露缺失的时间尺度、宿主耦合或分子细节。构建得到的充分性证据仍需与天然系统中的必要性证据区分，但它能把“某种回路可能做到什么”变成可测量对象。

2000 年发表的 genetic toggle switch 和 repressilator 是这一路径的经典例子。toggle switch 以相互抑制和诱导输入建立两个可保持的表达状态；repressilator 以三个 transcriptional repressor 构成负反馈环，产生单细胞荧光振荡。两项工作没有复制某条完整天然通路，而是用经过选择的元件实现明确动力学，并由构建偏差推动对 cooperativity、leakiness、protein turnover、copy number 和 noise 的认识。[^toggle-repressilator]

合成目标也可以位于其他尺度。重定向 yeast metabolism 使 artemisinic acid precursor 得以积累，测试了多酶通路、前体供应与宿主代谢怎样协同；删减和重构 bacterial genome 追问维持自我复制细胞所需的最小基因集合；把 cell-free expression 封装进 lipid vesicle 则从另一方向探索区室、供料和基因表达能形成何种 cell-like system。合成生物学由共同的设计循环连接这些对象，并不由某一种宿主或 DNA 组装技术单独界定。

### 从行为规格回到可观测量 { #behavioral-specifications }

“产生荧光”“合成某种产物”只给出目标名称，尚未构成完整规格。线路规格还要定义 input range、basal output、dynamic range、threshold、response time、hysteresis、memory duration 和 single-cell distribution；代谢系统要定义 substrate、productivity、yield、titer、rate、by-product 和培养阶段；空间系统还要定义作用距离、边界宽度、pattern stability 与 cell composition。

每项规格都应对应测量。荧光 reporter 可以读取转录输出，但会引入成熟延迟和稀释；metabolite titer 给出终点池量，pathway flux 还需要时间序列、示踪或输入输出速率；群体平均达到阈值，也可能由少数高表达细胞贡献。设计之初明确测量层，能够避免把仪器代理量、系统状态和目标功能混成同一个变量。

规格之间常有 trade-off。提高最大表达可能增加 dynamic range，也会加重翻译负担并减慢生长；快速降解标签缩短响应时间，却提高维持稳态输出所需的合成通量；高 copy plasmid 增大信号，也放大 copy-number noise 和分离不稳定。工程问题因此表现为多目标设计：寻找满足关键约束的一组方案，而非只把单项输出推到最大。

## 抽象层级连接元件、装置、系统与底盘 { #abstraction-hierarchy }

abstraction hierarchy（抽象层级）把复杂构建分成可讨论的功能单位。part（元件）可以是 promoter、operator、ribosome-binding site、coding sequence、terminator、protein domain、RNA sensor 或 enzyme；device（装置）把若干元件组合成 sensing、amplification、logic、switching、oscillation、memory 或 metabolic conversion；system（系统）再把多个装置、宿主过程和外部环境连接为完整行为。chassis／host（底盘／宿主）提供转录翻译、能量、代谢、膜、分裂和选择背景，本身也是系统的一部分。

同一物理序列可在不同层级拥有不同含义。一个 promoter 在 part 层有 transcription initiation rate，在 device 层承担 sensor output，在 system 层又可能决定整个反馈回路的 threshold；一段 enzyme coding sequence 在代谢系统中还受到 protein folding、cofactor supply、compartment 和 substrate availability 约束。抽象的价值在于明确接口与测量，并不能抹去这些跨层作用。

### 模块化与可组合性 { #modularity-composability }

module 由一组共同完成某项功能的组分组成，并通过相对明确的 input 与 output 连接外部。functional modularity 要求模块接入新系统后仍大体保持已测的输入—输出关系。遗传线路常通过 promoter activity、transcription factor concentration、small-molecule signal 或 metabolite flux 作为接口；接口的分子身份、单位、动态范围和时间尺度都必须匹配，只有“上游产生某物、下游能感受某物”的文字关系还不足以预测组合行为。

模块互连会产生 retroactivity（反向负载）。下游增加大量 binding sites，可把上游 transcription factor 隔离在复合物中，改变其自由浓度和响应时间；enzyme module 接到强下游 sink 后，中间物池和 upstream flux 也会改变。Del Vecchio、Ninfa 和 Sontag 用 retroactivity 形式化这种负载，并说明 insulation 可以通过高增益、快速 turnover 或其他动态结构减弱模块间反向影响。[^retroactivity-insulation]

fan-out 描述一个输出同时驱动多少下游负载，impedance matching、buffering 和 feedback 则用于保持接口行为。生物学中的 insulation 本身要消耗转录、翻译或能量资源，并可能增加噪声与延迟；模块化评价应同时测量 isolated module 和 connected module，序列边界只作为初始模块划分。

### 标准化覆盖组装接口与功能测量 { #standardization }

physical standardization 规定 DNA parts 怎样连接、方向和 junction 怎样表示，使不同实验者能够复用 assembly workflow。BioBrick 等早期体系把 restriction-site compatibility 和 registry 作为共享接口，后来的 seamless assembly 与大规模 synthesis 扩展了可构建序列空间。不同组装方法会留下不同 scar、重复序列和结构限制，完成物理连接只说明获得了预定序列。

functional standardization 为元件建立可比较的测量单位和参考条件。Kelly 等用 in vivo reference standard 测量 BioBrick promoter activity，把样品 promoter 与同一实验中的 reference promoter 比较，形成 relative promoter unit；这种比值减少部分仪器和实验尺度差异，也显示 promoter ranking 仍会随 strain、medium、growth state 和 measurement protocol 改变。[^promoter-reference-unit]

一份可复用的 part record 因而要同时保留 sequence、orientation、assembly junction、host、copy number、genomic locus、growth condition、input definition、output calibration、time point 和 uncertainty。标准化的目标是让差异来源可见，并使别人能够重现或重新解释元件性能；context metadata 与参考材料和序列本身同样重要。

## 设计—构建—测试—学习循环 { #dbtl-cycle }

DBTL 把合成系统开发组织成闭环。design 将目标行为转成 network architecture、candidate parts、model 和 sequence plan；build 产生并确认实际构建；test 在规定宿主和环境中测量结构、状态与功能；learn 比较 prediction 和 observation，判断失败来自元件参数、网络结构、宿主耦合还是测量模型，再更新下一轮设计。循环可以在单个线路上反复进行，也可并行构建 library，使 sequence–function relationship 从多种变体中显现。

| 阶段 | 核心对象 | 关键证据 | 进入下一轮的信息 |
| --- | --- | --- | --- |
| Design | 规格、系统边界、网络结构、模型、候选元件与序列 | 目标行为可测，接口和约束明确，候选设计给出可区分预测 | 参数范围、敏感环节、预期失效模式与待比较变体 |
| Build | DNA／RNA／protein／cell-free composition、host integration 与 clone identity | sequence、copy number、orientation、junction 和必要 genotype 得到确认 | 实际构建与设计文件的差异、构建成功率和偏差来源 |
| Test | input–output curve、time course、single-cell distribution、growth、flux、product 与空间读出 | 生物学重复、校准、对照和正交读出共同描述行为 | 性能分布、状态变量、宿主响应和模型残差 |
| Learn | 设计—数据映射、参数更新、候选机制和多目标评价 | 新模型能解释系统性偏差，并对未测条件给出前瞻预测 | 保留／替换的元件、结构修订和下一轮最有信息量的实验 |

### 设计空间与模型 { #design-space-models }

design space 由可选元件、连接拓扑、拷贝数、宿主、培养条件和连续参数共同组成。即使每类只选少数候选，组合数也会迅速增长。mechanistic model 可用 binding、transcription、translation、degradation 和 metabolism 的速率方程预测动态；stochastic model 描述低拷贝分子和细胞间分布；constraint-based model 限定 metabolic flux；spatial model 则加入 diffusion、cell position 与 communication。模型类型由规格中的观测量和时间空间尺度决定。

设计阶段常先用 sensitivity analysis 找出最影响目标的参数，再把可实现的 promoter strength、RBS、degradation tag 或 enzyme variant 映射到这些参数。若多组参数都产生相似输出，library 应优先改变能区分候选机制的元件；若一个行为只存在于极窄参数区，则实际构建对 variation 和 context 会很敏感。完整的参数推断和实验设计见[系统建模、参数推断与实验检验](systems_modeling_inference.md)。

### 构建验证与基因型身份 { #build-verification }

build 阶段的实际产物是一份物质化构建，设计软件中的序列是它的规格。assembly junction、repeat rearrangement、point mutation、plasmid copy number、genomic integration site 和 host genotype 都可能改变系统。对关键区域做 sequence verification、确认 clone identity，并保存构建版本与测量批次之间的对应关系，使后续异常能够追溯到 genotype 或实验状态。

整合到 chromosome 可降低 copy-number variation，却会受到 locus-specific transcription、neighboring genes 和 replication timing 影响；plasmid 便于迭代，也会产生 copy-number、segregation 和 selection-dependent variation。不同 host 对 codon usage、RNA processing、protein maturation 和 membrane insertion 的能力不同，sequence-identical construct 进入新底盘后应视作新的系统条件。

### 测试、调试与学习 { #test-debug-learn }

test 应从规格出发选择 input waveform、dose、time point 和 single-cell／population readout。static endpoint 能筛选大量构建，step、pulse、ramp 和 periodic input 则显露 delay、adaptation、hysteresis、memory 与 phase response。flow cytometry、time-lapse imaging、sequencing、proteomics、metabolomics 和 flux measurement 读取不同层级；它们共同判断故障位于 DNA identity、RNA production、translation、protein activity、metabolic state 还是 cell–cell coupling。

debugging 保留从序列到表型的中间读出。若 reporter RNA 正常而 protein output 低，应检查 translation、folding 和 degradation；单酶活性正常而 product 低，则检查 substrate supply、cofactor、transport 和 competing pathway；线路在 bulk average 上符合预期却出现双峰，需要分析 cell state、copy number、noise 或 feedback。learn 阶段把这类结构化残差转成新假说，而不只从 library 中挑出数值最高的 clone。

## 宿主资源塑造人工系统行为 { #host-resource-context }

host 提供 RNA polymerase、ribosome、tRNA、ATP／GTP、amino acid、nucleotide、chaperone、protease、membrane area、cofactor 和 precursor。人工构建使用这些资源，也改变 host growth、stress response 和 global regulation。chassis 的 species、strain、growth rate、medium、temperature、cell cycle 与 differentiation state 共同构成运行条件；一个在 E. coli exponential phase 表征的 device，进入 yeast、mammalian cell 或 stationary phase 后会遇到新的资源和调控背景。

### 资源竞争与细胞负担 { #resource-competition-burden }

对某一种有限资源 $R$，可用简化守恒关系表示其分配：

$$
R_{\mathrm{total}}=R_{\mathrm{free}}+R_{\mathrm{host}}+\sum_j R_{\mathrm{construct},j}.
$$

strong promoter、high-copy template 或大量 untranslated RNA 都可能占用 transcription machinery，强 translation 则竞争 ribosome、charged tRNA 和 energy。Ceroni 等用独立表达容量 monitor 显示，不同 heterologous construct 会降低 E. coli 的可用表达能力，并由此识别输出相近但 burden 较低的设计。[^cellular-burden] Qian 等进一步说明，多个 expression cassette 即使没有直接 regulatory edge，也会因共享 resource 产生 coupling，改变 transfer curve、逻辑响应和 steady state。[^resource-competition]

resource competition 会破坏从 isolated module 推到 combined circuit 的预测。上游模块增强可能同时消耗更多 ribosome，使下游 output 下降；两个本来独立的 reporter 可呈负相关；copy number 提高也可能因 growth reduction 而失去预期增益。测量 host capacity、growth、cell size、global transcription／translation response 和 construct output，能够把 intended regulation 与 resource-mediated coupling 分开。

### 生长反馈与稀释 { #growth-dilution-feedback }

蛋白 $X$ 的简化动态可写为

$$
\frac{dX}{dt}=v_{\mathrm{syn}}(u,X,R)-k_{\mathrm{deg}}X-\mu X,
$$

其中 $\mu$ 是 growth-dependent dilution rate。人工表达降低生长时，dilution 同时减弱，protein 和 regulator 可能积累；积累又进一步增加 burden，形成 circuit–growth feedback。某些设计因此出现原模型没有的 threshold、bistability 或 slow recovery。把 measured growth rate 和 cell volume 纳入模型，比把 dilution 当作恒定参数更接近实际运行。

不同宿主还会主动响应负担。stringent response、heat-shock、unfolded-protein response、nutrient signaling 和 cell-cycle checkpoint 可重新分配资源并改变 promoter、translation 与 degradation。不同构建若都触发同一 host response，可能产生相似表型；host-only reporter、empty-vector control、capacity monitor 和 condition-matched transcript／protein measurement 用于识别这类共同路径。

### 生物学上下文与接口变化 { #biological-context }

context dependence 可沿序列、基因座、细胞和环境四层追踪。promoter 会受 upstream transcription、DNA supercoiling 和 local chromatin 影响，RBS 受到 5′ RNA structure 和 neighboring sequence 影响，protein domain 接入新 fusion 后改变 folding，cellular output 又随 metabolite、ion、mechanical environment 和 population density 变化。字符相同的 part name 因此应关联具体 physical sequence 和 context record。

host-aware design 可通过降低资源需求、使用 feedback controller、分时表达、选择不同 polymerase／ribosome pool、改变 genomic locus 或把冲突步骤分到不同细胞来改善行为。每种方法重新分配了负担和接口，评价应回到原规格：保持了哪个 output，牺牲了多少速度、产率、growth 或 composability。

## 噪声、鲁棒性与进化稳定 { #noise-robustness-evolution }

生物系统在相同设计下仍有 variation。intrinsic noise 来自 transcription、translation、binding 和 partitioning 的离散事件；extrinsic noise 来自 cell size、ribosome abundance、cell-cycle stage、metabolic state 和 microenvironment。feedback 可以压低某些 fluctuation，也可能放大接近 threshold 的差异；positive feedback 常扩大 state separation，negative feedback 可减小低频扰动但引入新的动态 trade-off。

### 鲁棒性由扰动与保持量共同定义 { #robustness-definition }

robustness 表示在规定扰动范围内，某个目标 output 仍保持在允许区间。需要同时说明扰动是 part parameter、copy number、temperature、growth rate、host strain、input fluctuation 还是 mutation，保持量是 mean output、state identity、oscillation period、yield、pattern position 或 population composition。一个线路可以保持平均值，却扩大 single-cell variance；也可以在单次培养中稳定，却在长期传代中迅速失效。

常见设计策略包括 feedback、redundancy、buffering、feed-forward compensation、ratiometric sensing、integral-like control 和 parameter-insensitive topology。它们各有适用扰动与代价。negative feedback 可稳定 output 并缩短部分响应，却降低 gain；redundancy 提高容错，也增加 resource use；high cooperativity 扩大 state separation，同时使系统对 threshold 周围参数更敏感。鲁棒性须由系统性 perturbation 和 environment panel 测量确认。

### 进化改变构建的序列与群体组成 { #evolutionary-stability }

人工系统若降低 growth 或 survival，失活突变体会获得相对优势。mutation 可以发生在 promoter、repeat、coding sequence、plasmid origin、selection marker 或 host suppressor gene；recombination、mobile element insertion、deletion 和 plasmid loss 又提供结构性失效路径。群体输出下降可能来自每个细胞逐渐减弱，也可能来自少量 nonfunctional fast-growing variant 接管群体，两者需要 single-clone genotype 与 population frequency 分开测量。

Sleight 等比较不同 circuit architecture 的长期稳定性，说明 direct repeat arrangement、transcription orientation 和 sequence context 会塑造失效速率，并提出通过重新排列元件提高 evolutionary robustness。[^evolutionary-stability] 稳定性测试应在与目标用途一致的 growth regime 中记录多代 output、fitness、population distribution 和 sequence endpoint；短期强 output 与长期可保持性属于两个性能维度。

降低 burden、减少 repeated sequence、chromosomal integration、分散功能、动态开启目标通路和把 circuit output 与 host fitness 耦合，都可改变 evolutionary trajectory。任何策略都可能产生新的 escape route，长期实验与 failure sequencing 因而也是 DBTL 的学习阶段：它们说明哪些 mutation 在当前设计与选择环境中最容易被保留。

## 四个专题页展开不同构建层级 { #four-topic-groups }

| 专题页 | 主要构建对象 | 经典问题 | 本页保留的共同接口 |
| --- | --- | --- | --- |
| [生物元件与合成基因线路](synthetic_circuits.md) | promoter、regulator、sensor、logic、feedback、switch、oscillator 和 memory | 元件怎样组成可预测的 temporal input–output behavior | transfer curve、load、noise、resource use 与 context |
| [基因组设计、代谢工程与生物制造](synthetic_genome_metabolic.md) | pathway、genome、chassis、precursor／cofactor supply 与 production process | 怎样分配 flux、重构遗传信息并把细胞状态连接到产物 | host physiology、multiobjective performance 与 evolutionary stability |
| [无细胞系统、最小细胞与人工细胞](synthetic_cell_free.md) | extract、purified expression system、minimal genome、membrane compartment 与 energy regeneration | 生命功能能被拆到多小，又怎样在受控区室中重新组合 | component inventory、mass／energy exchange、self-maintenance 与 context transfer |
| [多细胞合成系统与空间模式](synthetic_multicellular.md) | sender–receiver、quorum sensing、division of labor、synthetic consortium 和 morphogenesis | 细胞通信怎样形成 population decision、gradient、boundary 和 pattern | signal range、composition、growth coupling、spatial robustness 与 evolution |

### 代表性构建连接四个层级 { #representative-constructs }

Ro 等在 yeast 中引入和重排 mevalonate 与 artemisinic acid pathway，协调 precursor supply、heterologous enzyme 和 product formation，显示 pathway engineering 需要同时处理局部反应与 whole-cell metabolism。[^metabolic-engineering] Hutchison 等通过 genome design、synthesis 和 transplantation 得到 531 kb、473 genes 的 minimal bacterial genome；近三分之一基因当时仍缺少明确功能，说明“在规定培养条件下必需”与“机制已经理解”是不同的知识层级。[^minimal-genome]

Noireaux 和 Libchaber 把 E. coli cell-free transcription–translation system 封装在 phospholipid vesicle 中，并通过小分子跨膜交换延长内部 expression，形成连接 gene expression、compartment 和 feeding 的 vesicle bioreactor。[^vesicle-bioreactor] Basu 等则把 AHL sender、diffusion field 和 band-detecting receiver cells 组合起来，使 bacterial lawn 在 signal source 周围形成环形 pattern，展示 intracellular circuit 与 extracellular gradient 怎样共同决定 multicellular geometry。[^synthetic-pattern]

这些构建代表不同尺度，却遵循同一证据结构：定义预期行为，说明实际物质组成，测量输入—状态—输出，比较模型和观察，再追踪 context、resource 和 evolution 造成的偏差。四个专题页将在这一共同框架下展开各自的经典元件、模型和实验系统。

## 与相邻学科的接口 { #disciplinary-interfaces }

[原核与真核基因表达调控](../molecular/gene_regulation.md)说明 promoter、operator、enhancer、RNA processing 和 translation 在天然系统中的机制，合成线路页研究这些机制经过重组后怎样实现指定动态。[代谢总论](../biochem/metabolism.md)与具体代谢页面提供 thermodynamics、flux、cofactor、compartment 和 control 的生化基础，代谢工程页聚焦如何重定向这些量并评价整体制造性能。

[系统生物学](systems_biology.md)由观测与扰动建立天然系统的可检验解释，合成生物学把候选原理转成新构建，并由构建成败反过来检验模型。[生物物理学](biophysics.md)提供 energy、diffusion、force、noise 和 scale constraint，[化学生物学](chemical_synthetic_biology.md)提供可选择测量和急性扰动的分子工具。实验技术与生物信息学则负责构建、测量、sequence verification 和 multi-omics data processing。

合成生物学把设计对象从单个 DNA sequence 扩展到 circuit、genome、cell-free compartment 和 multicellular organization。抽象层级帮助表达意图，标准化保存接口与测量，DBTL 让假设持续接受构建检验，宿主资源与进化则说明每个设计都运行在会响应、会生长、会变化的生命系统中。把这些层面同时写入规格和证据链，才能由一次可工作的构建积累出可迁移的生物学知识。

## 参考资料与延伸阅读 { #references }

- Benner, S. A. & Sismour, A. M. [Synthetic biology](https://doi.org/10.1038/nrg1637). *Nature Reviews Genetics* 6, 533–543 (2005).
- Endy, D. [Foundations for engineering biology](https://doi.org/10.1038/nature04342). *Nature* 438, 449–453 (2005).
- Cameron, D. E., Bashor, C. J. & Collins, J. J. [A brief history of synthetic biology](https://doi.org/10.1038/nrmicro3239). *Nature Reviews Microbiology* 12, 381–390 (2014).
- Gardner, T. S., Cantor, C. R. & Collins, J. J. [Construction of a genetic toggle switch in *Escherichia coli*](https://doi.org/10.1038/35002131). *Nature* 403, 339–342 (2000).
- Elowitz, M. B. & Leibler, S. [A synthetic oscillatory network of transcriptional regulators](https://doi.org/10.1038/35002125). *Nature* 403, 335–338 (2000).
- Del Vecchio, D., Ninfa, A. J. & Sontag, E. D. [Modular cell biology: retroactivity and insulation](https://doi.org/10.1038/msb4100204). *Molecular Systems Biology* 4, 161 (2008).
- Kelly, J. R. et al. [Measuring the activity of BioBrick promoters using an in vivo reference standard](https://doi.org/10.1186/1754-1611-3-4). *Journal of Biological Engineering* 3, 4 (2009).
- Ceroni, F. et al. [Quantifying cellular capacity identifies gene expression designs with reduced burden](https://doi.org/10.1038/nmeth.3339). *Nature Methods* 12, 415–418 (2015).
- Qian, Y. et al. [Resource competition shapes the response of genetic circuits](https://doi.org/10.1021/acssynbio.6b00361). *ACS Synthetic Biology* 6, 1263–1272 (2017).
- Sleight, S. C. et al. [Designing and engineering evolutionary robust genetic circuits](https://doi.org/10.1186/1754-1611-4-12). *Journal of Biological Engineering* 4, 12 (2010).
- Nielsen, J. & Keasling, J. D. [Engineering cellular metabolism](https://doi.org/10.1016/j.cell.2016.02.004). *Cell* 164, 1185–1197 (2016).
- Ro, D.-K. et al. [Production of the antimalarial drug precursor artemisinic acid in engineered yeast](https://doi.org/10.1038/nature04640). *Nature* 440, 940–943 (2006).
- Hutchison, C. A. III et al. [Design and synthesis of a minimal bacterial genome](https://doi.org/10.1126/science.aad6253). *Science* 351, aad6253 (2016).
- Noireaux, V. & Libchaber, A. [A vesicle bioreactor as a step toward an artificial cell assembly](https://doi.org/10.1073/pnas.0408236101). *Proceedings of the National Academy of Sciences USA* 101, 17669–17674 (2004).
- Basu, S. et al. [A synthetic multicellular system for programmed pattern formation](https://doi.org/10.1038/nature03461). *Nature* 434, 1130–1134 (2005).

[^synthetic-biology-scope]: Benner, S. A. & Sismour, A. M. [Synthetic biology](https://doi.org/10.1038/nrg1637). *Nature Reviews Genetics* 6, 533–543 (2005)；Cameron, D. E., Bashor, C. J. & Collins, J. J. [A brief history of synthetic biology](https://doi.org/10.1038/nrmicro3239). *Nature Reviews Microbiology* 12, 381–390 (2014)。两项综述分别从非天然分子／可交换元件两条路径及微生物工程的历史发展界定学科范围。
[^engineering-biology-foundations]: Endy, D. [Foundations for engineering biology](https://doi.org/10.1038/nature04342). *Nature* 438, 449–453 (2005)。该文把 abstraction、standardization 和 decoupling 作为工程生物学的基础问题，并以系统难以可靠预测为出发点讨论所需的测量与基础技术。
[^toggle-repressilator]: Gardner, T. S., Cantor, C. R. & Collins, J. J. [Construction of a genetic toggle switch in *Escherichia coli*](https://doi.org/10.1038/35002131). *Nature* 403, 339–342 (2000)；Elowitz, M. B. & Leibler, S. [A synthetic oscillatory network of transcriptional regulators](https://doi.org/10.1038/35002125). *Nature* 403, 335–338 (2000)。两项原始研究分别以相互抑制和三节点环形抑制实现 bistability／memory 与 single-cell oscillation，成为按目标动态组装调控网络的经典范例。
[^retroactivity-insulation]: Del Vecchio, D., Ninfa, A. J. & Sontag, E. D. [Modular cell biology: retroactivity and insulation](https://doi.org/10.1038/msb4100204). *Molecular Systems Biology* 4, 161 (2008)。研究形式化了下游负载怎样反向改变上游模块动力学，并分析 insulation device 减弱 retroactivity 的条件。
[^promoter-reference-unit]: Kelly, J. R. et al. [Measuring the activity of BioBrick promoters using an in vivo reference standard](https://doi.org/10.1186/1754-1611-3-4). *Journal of Biological Engineering* 3, 4 (2009)。研究以同一实验内的 reference promoter 形成 relative promoter unit，并系统显示 instrument、protocol 和 cellular context 对可比性的影响。
[^cellular-burden]: Ceroni, F. et al. [Quantifying cellular capacity identifies gene expression designs with reduced burden](https://doi.org/10.1038/nmeth.3339). *Nature Methods* 12, 415–418 (2015)。研究用 capacity monitor 实时读取 heterologous expression 对 E. coli 可用表达资源的影响，并识别 output 相近而 burden 不同的 construct design。
[^resource-competition]: Qian, Y. et al. [Resource competition shapes the response of genetic circuits](https://doi.org/10.1021/acssynbio.6b00361). *ACS Synthetic Biology* 6, 1263–1272 (2017)。研究以模型和实验说明共享 expression resource 能使没有直接调控边的 cassette 相互耦合，并改变线路的 steady state 与 input–output response。
[^evolutionary-stability]: Sleight, S. C. et al. [Designing and engineering evolutionary robust genetic circuits](https://doi.org/10.1186/1754-1611-4-12). *Journal of Biological Engineering* 4, 12 (2010)。研究比较两种 BioBrick circuit 的 mutation 与失效模式，并通过改变 repeat arrangement 和 sequence context 提高长期遗传稳定性。
[^metabolic-engineering]: Ro, D.-K. et al. [Production of the antimalarial drug precursor artemisinic acid in engineered yeast](https://doi.org/10.1038/nature04640). *Nature* 440, 940–943 (2006)；Nielsen, J. & Keasling, J. D. [Engineering cellular metabolism](https://doi.org/10.1016/j.cell.2016.02.004). *Cell* 164, 1185–1197 (2016)。原始研究通过重构 yeast precursor 与 heterologous pathway 提高 artemisinic acid production，综述则把通路、全细胞模型和多组学测量连接为代谢工程框架。
[^minimal-genome]: Hutchison, C. A. III et al. [Design and synthesis of a minimal bacterial genome](https://doi.org/10.1126/science.aad6253). *Science* 351, aad6253 (2016)。研究通过设计、合成与 genome transplantation 构建可独立生长的 minimal bacterial cell；其 473 个基因中有 149 个当时功能未知，显示实验必需性与机制注释之间仍有距离。
[^vesicle-bioreactor]: Noireaux, V. & Libchaber, A. [A vesicle bioreactor as a step toward an artificial cell assembly](https://doi.org/10.1073/pnas.0408236101). *Proceedings of the National Academy of Sciences USA* 101, 17669–17674 (2004)。原始研究把 E. coli cell-free expression system 封装于 phospholipid vesicle，并由小分子交换支持内部 transcription–translation，连接区室与供料设计。
[^synthetic-pattern]: Basu, S. et al. [A synthetic multicellular system for programmed pattern formation](https://doi.org/10.1038/nature03461). *Nature* 434, 1130–1134 (2005)。研究将 AHL sender、diffusion gradient 与 band-detecting receiver circuit 组合，使 engineered bacteria 在 signal source 周围形成可编程环形 pattern。
