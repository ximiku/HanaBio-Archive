# 合成生物学

合成生物学以构建为研究方法：研究者选定一种希望系统完成的行为，把它分解为可操纵的分子与细胞过程，组装出新的组合，再用实际行为检验对这些过程的理解。构建可以从现有细胞出发，重排调控线路、代谢通路或基因组；也可以从无细胞反应、膜区室和非天然分子出发，逐步重建生命系统的部分性质。Benner 和 Sismour 将这两条传统概括为“用非天然分子重现生命行为”与“用可交换的天然元件组装非天然功能”，二者共同把合成变成检验生物学原理的手段。[^synthetic-biology-scope]

工程设计为这项研究增加了明确的目标和评价尺度。一个系统需要在什么细胞或环境中工作，读取什么输入，产生什么输出，响应多快，允许多大细胞间差异，又要维持多少代；这些要求先形成设计规格，随后才进入元件选择、模型、构建和测试。Endy 将抽象、标准化和解耦视为工程生物学的重要基础，同时指出生物系统仍难以像成熟工程器件那样按部件说明书可靠预测。[^engineering-biology-foundations]

合成生物学的共同语言包括元件—装置—系统抽象层级、模块化与标准化、设计—构建—测试—学习（design–build–test–learn，DBTL）循环、宿主背景、资源竞争、噪声、鲁棒性和进化稳定。四个专题页分别进入[生物元件与合成基因线路](synthetic_circuits.md)、[基因组设计、代谢工程与生物制造](synthetic_genome_metabolic.md)、[无细胞系统、最小细胞与人工细胞](synthetic_cell_free.md)及[多细胞合成系统与空间模式](synthetic_multicellular.md)。

## 合成与设计的互补研究路径 { #synthesis-and-design }

分析天然系统通常从已有结构与现象追问机制，合成路径则从候选机制出发，判断最少需要哪些组分才能重现目标行为。若一个由少数抑制蛋白构成的人工网络产生双稳态，说明该反馈结构足以形成状态记忆；若按模型组装后没有出现预期行为，失败会暴露缺失的时间尺度、宿主耦合或分子细节。构建得到的充分性证据仍需与天然系统中的必要性证据区分，但它能把“某种回路可能做到什么”变成可测量对象。

2000 年发表的遗传双稳态开关和抑制振荡器是这一路径的经典例子。双稳态开关以相互抑制和诱导输入建立两个可保持的表达状态；抑制振荡器以三个转录抑制蛋白构成负反馈环，产生单细胞荧光振荡。两项工作没有复制某条完整天然通路，而是用经过选择的元件实现明确动力学，并由构建偏差推动对协同性、泄漏表达、蛋白质周转、拷贝数和噪声的认识。[^toggle-repressilator]

合成目标也可以位于其他尺度。重定向酵母代谢使青蒿酸前体得以积累，测试了多酶通路、前体供应与宿主代谢怎样协同；删减和重构细菌基因组追问维持自我复制细胞所需的最小基因集合；把无细胞表达封装进脂质囊泡则从另一方向探索区室、供料和基因表达能形成何种类细胞系统。合成生物学由共同的设计循环连接这些对象，其范围涵盖多种宿主与脱氧核糖核酸（deoxyribonucleic acid，DNA）组装技术。

### 行为规格与可观测量 { #behavioral-specifications }

“产生荧光”“合成某种产物”只给出目标名称，尚未构成完整规格。线路规格还要定义输入范围、基础输出、动态范围、阈值、响应时间、滞后、记忆持续时间和单细胞分布；代谢系统要定义底物、生产强度、产率、滴度、速率、副产物和培养阶段；空间系统还要定义作用距离、边界宽度、图案稳定性与细胞组成。

每项规格都应对应测量。荧光报告器可以读取转录输出，但会引入成熟延迟和稀释；代谢物滴度给出终点池量，通路流量还需要时间序列、示踪或输入输出速率；群体平均达到阈值，也可能由少数高表达细胞贡献。设计之初明确测量层，能够避免把仪器代理量、系统状态和目标功能混成同一个变量。

规格之间常有权衡。提高最大表达可能增加动态范围，也会加重翻译负担并减慢生长；快速降解标签缩短响应时间，却提高维持稳态输出所需的合成通量；高拷贝质粒增大信号，也放大拷贝数噪声和分离不稳定。工程问题因此表现为多目标设计：寻找满足关键约束的一组方案，而非只把单项输出推到最大。

## 元件、装置、系统与底盘的抽象层级 { #abstraction-hierarchy }

抽象层级把复杂构建分成可讨论的功能单位。元件可以是启动子、操纵序列、核糖体结合位点、编码序列、终止子、蛋白质结构域、核糖核酸（ribonucleic acid，RNA）传感器或酶；装置把若干元件组合成感知、放大、逻辑、开关转换、振荡、记忆或代谢转化；系统再把多个装置、宿主过程和外部环境连接为完整行为。底盘／宿主提供转录翻译、能量、代谢、膜、分裂和选择背景，本身也是系统的一部分。

同一物理序列可在不同层级拥有不同含义。一个启动子在元件层有转录起始速率，在装置层承担传感器输出，在系统层又可能决定整个反馈回路的阈值；一段酶编码序列在代谢系统中还受到蛋白质折叠、辅因子供应、区室和底物可用性约束。抽象用于明确接口与测量，同时保留这些跨层作用。

### 模块化与可组合性 { #modularity-composability }

模块由一组共同完成某项功能的组分组成，并通过相对明确的输入与输出连接外部。功能模块化要求模块接入新系统后仍大体保持已测的输入—输出关系。遗传线路常通过启动子活性、转录因子浓度、小分子信号或代谢物流量作为接口；接口的分子身份、单位、动态范围和时间尺度都必须匹配，只有“上游产生某物、下游能感受某物”的文字关系还不足以预测组合行为。

模块互连会产生反向负载效应。下游增加大量结合位点，可把上游转录因子隔离在复合物中，改变其自由浓度和响应时间；酶模块接到强下游汇后，中间物池和上游流量也会改变。Del Vecchio、Ninfa 和 Sontag 用反向负载效应形式化这种负载，并说明隔离可以通过高增益、快速周转或其他动态结构减弱模块间反向影响。[^retroactivity-insulation]

扇出描述一个输出同时驱动多少下游负载，阻抗匹配、缓冲和反馈则用于保持接口行为。生物学中的隔离本身要消耗转录、翻译或能量资源，并可能增加噪声与延迟；模块化评价应同时测量孤立的模块和连接后的模块，序列边界只作为初始模块划分。

### 组装接口与功能测量的标准化 { #standardization }

物理标准化规定 DNA 元件怎样连接、方向和接头怎样表示，使不同实验者能够复用组装流程。BioBrick 等早期体系把限制性位点兼容性和元件库作为共享接口，后来的无缝组装与大规模合成扩展了可构建序列空间。不同组装方法会留下不同疤痕序列、重复序列和结构限制，完成物理连接只说明获得了预定序列。

功能标准化为元件建立可比较的测量单位和参考条件。Kelly 等用体内参照标准测量 BioBrick 启动子活性，把样品启动子与同一实验中的参照启动子比较，形成相对启动子单位；这种比值减少部分仪器和实验尺度差异，也显示启动子排序仍会随菌株、培养基、生长状态和测量方案改变。[^promoter-reference-unit]

一份可复用的元件记录因而要同时保留序列、方向、组装接头、宿主、拷贝数、基因组位点、生长条件、输入定义、输出校准、时间点和不确定性。标准化的目标是让差异来源可见，并使别人能够重现或重新解释元件性能；背景元数据与参考材料和序列本身同样重要。

## 设计—构建—测试—学习循环 { #dbtl-cycle }

DBTL 把合成系统开发组织成闭环。设计将目标行为转成网络结构、候选元件、模型和序列方案；构建产生并确认实际构建；测试在规定宿主和环境中测量结构、状态与功能；学习比较预测和观测，判断失败来自元件参数、网络结构、宿主耦合还是测量模型，再更新下一轮设计。循环可以在单个线路上反复进行，也可并行构建文库，使序列—功能关系从多种变体中显现。

| 阶段 | 核心对象 | 关键证据 | 进入下一轮的信息 |
| --- | --- | --- | --- |
| 设计 | 规格、系统边界、网络结构、模型、候选元件与序列 | 目标行为可测，接口和约束明确，候选设计给出可区分预测 | 参数范围、敏感环节、预期失效模式与待比较变体 |
| 构建 | DNA／RNA／蛋白质／无细胞组成、宿主整合与克隆身份 | 序列、拷贝数、方向、接头和必要基因型得到确认 | 实际构建与设计文件的差异、构建成功率和偏差来源 |
| 测试 | 输入—输出曲线、时间序列、单细胞分布、生长、流量、产物与空间读出 | 生物学重复、校准、对照和正交读出共同描述行为 | 性能分布、状态变量、宿主响应和模型残差 |
| 学习 | 设计—数据映射、参数更新、候选机制和多目标评价 | 新模型能解释系统性偏差，并对未测条件给出前瞻预测 | 保留／替换的元件、结构修订和下一轮最有信息量的实验 |

### 设计空间与模型 { #design-space-models }

设计空间由可选元件、连接拓扑、拷贝数、宿主、培养条件和连续参数共同组成。即使每类只选少数候选，组合数也会迅速增长。机制模型可用结合、转录、翻译、降解和代谢的速率方程预测动态；随机模型描述低拷贝分子和细胞间分布；约束模型限定代谢流量；空间模型则加入扩散、细胞位置与通信。模型类型由规格中的观测量和时间空间尺度决定。

设计阶段常先用灵敏度分析找出最影响目标的参数，再把可实现的启动子强度、核糖体结合位点（ribosome binding site，RBS）、降解标签或酶变体映射到这些参数。若多组参数都产生相似输出，文库应优先改变能区分候选机制的元件；若一个行为只存在于极窄参数区，则实际构建对变异和背景会很敏感。完整的参数推断和实验设计见[系统建模、参数推断与实验检验](systems_modeling_inference.md)。

### 构建验证与基因型身份 { #build-verification }

构建阶段的实际产物是一份物质化构建，设计软件中的序列是它的规格。组装接头、重复序列重排、点突变、质粒拷贝数、基因组整合位点和宿主基因型都可能改变系统。对关键区域做序列验证、确认克隆身份，并保存构建版本与测量批次之间的对应关系，使后续异常能够追溯到基因型或实验状态。

整合到染色体可降低拷贝数变异，却会受到位点特异性转录、邻近基因和复制时序影响；质粒便于迭代，也会产生拷贝数、分离和选择依赖的变异。不同宿主对密码子使用、RNA 加工、蛋白质成熟和膜插入的能力不同，序列相同的构建体进入新底盘后应视作新的系统条件。

### 测试、调试与学习 { #test-debug-learn }

测试应从规格出发选择输入波形、剂量、时间点和单细胞／群体读出。静态终点能筛选大量构建，阶跃、脉冲、斜坡和周期性输入则显露延迟、适应、滞后、记忆与相位响应。流式细胞术、延时成像、测序、蛋白质组学、代谢组学和流量测量读取不同层级；它们共同判断故障位于 DNA 身份、RNA 生成、翻译、蛋白质活性、代谢状态还是细胞–细胞耦合。

调试保留从序列到表型的中间读出。若报告器 RNA 正常而蛋白质输出低，应检查翻译、折叠和降解；单酶活性正常而产物低，则检查底物供应、辅因子、运输和竞争通路；线路在群体平均值上符合预期却出现双峰，需要分析细胞状态、拷贝数、噪声或反馈。学习阶段把这类结构化残差转成新假说，而不只从文库中挑出数值最高的克隆。

## 宿主资源与人工系统行为 { #host-resource-context }

宿主提供 RNA 聚合酶、核糖体、转运核糖核酸（transfer RNA，tRNA）、三磷酸腺苷（adenosine triphosphate，ATP）／三磷酸鸟苷（guanosine triphosphate，GTP）、氨基酸、核苷酸、分子伴侣、蛋白酶、膜面积、辅因子和前体。人工构建使用这些资源，也改变宿主生长、应激响应和全局调控。底盘的物种、菌株、生长速率、培养基、温度、细胞周期与分化状态共同构成运行条件；一个在 *Escherichia coli* 指数生长期表征的装置，进入酵母、哺乳动物细胞或稳定期后会遇到新的资源和调控背景。

### 资源竞争与细胞负担 { #resource-competition-burden }

对某一种有限资源 $R$，可用简化守恒关系表示其分配：

$$
R_{\mathrm{total}}=R_{\mathrm{free}}+R_{\mathrm{host}}+\sum_j R_{\mathrm{construct},j}.
$$

强启动子、高拷贝模板或大量非翻译 RNA 都可能占用转录机器，强翻译则竞争核糖体、氨酰化 tRNA 和能量。Ceroni 等用独立表达容量监测器显示，不同异源构建体会降低 E. coli 的可用表达能力，并由此识别输出相近但负担较低的设计。[^cellular-burden] Qian 等进一步说明，多个表达盒即使没有直接调控边，也会因共享资源产生耦合，改变传递曲线、逻辑响应和稳态。[^resource-competition]

资源竞争会破坏从孤立的模块推到组合线路的预测。上游模块增强可能同时消耗更多核糖体，使下游输出下降；两个本来独立的报告器可呈负相关；拷贝数提高也可能因生长减缓而失去预期增益。测量宿主表达容量、生长、细胞大小、全局转录／翻译响应和构建体输出，能够把预期调控与资源介导的耦合分开。

### 生长反馈与稀释 { #growth-dilution-feedback }

蛋白 $X$ 的简化动态可写为

$$
\frac{dX}{dt}=v_{\mathrm{syn}}(u,X,R)-k_{\mathrm{deg}}X-\mu X,
$$

其中 $\mu$ 是生长依赖的稀释速率。人工表达降低生长时，稀释同时减弱，蛋白质和调节因子可能积累；积累又进一步增加负担，形成线路—生长反馈。某些设计因此出现原模型没有的阈值、双稳态或缓慢恢复。把实测的生长速率和细胞体积纳入模型，比把稀释当作恒定参数更接近实际运行。

不同宿主还会主动响应负担。严紧反应、热休克反应、未折叠蛋白反应、营养信号和细胞周期检查点可重新分配资源并改变启动子、翻译与降解。不同构建若都触发同一宿主响应，可能产生相似表型；仅含宿主的报告系统、空载体对照、表达容量监测器和条件匹配的转录物／蛋白质测量用于识别这类共同路径。

### 生物学上下文与接口变化 { #biological-context }

背景依赖性可沿序列、基因座、细胞和环境四层追踪。启动子会受上游转录、DNA 超螺旋和局部染色质影响，RBS 受到 5′ RNA 结构和邻近序列影响，蛋白质结构域接入新融合体后改变折叠，细胞输出又随代谢物、离子、力学环境和群体密度变化。名称相同的元件因此应关联具体物理序列和背景记录。

宿主感知设计可通过降低资源需求、使用反馈控制器、分时表达、选择不同聚合酶／核糖体池、改变基因组位点或把冲突步骤分到不同细胞来改善行为。每种方法重新分配了负担和接口，评价应回到原规格：保持了哪个输出，牺牲了多少速度、产率、生长或可组合性。

## 噪声、鲁棒性与进化稳定 { #noise-robustness-evolution }

生物系统在相同设计下仍有变异。内源噪声来自转录、翻译、结合和分配的离散事件；外源噪声来自细胞大小、核糖体丰度、细胞周期阶段、代谢状态和微环境。反馈可以压低某些波动，也可能放大接近阈值的差异；正反馈常扩大状态分离，负反馈可减小低频扰动但引入新的动态权衡。

### 扰动、保持量与鲁棒性 { #robustness-definition }

鲁棒性表示在规定扰动范围内，某个目标输出仍保持在允许区间。需要同时说明扰动是元件参数、拷贝数、温度、生长速率、宿主菌株、输入波动还是突变，保持量是平均输出、状态身份、振荡周期、产率、图案位置或群体组成。一个线路可以保持平均值，却扩大单细胞方差；也可以在单次培养中稳定，却在长期传代中迅速失效。

常见设计策略包括反馈、冗余、缓冲、前馈补偿、比率式感知、类积分控制和参数不敏感拓扑。它们各有适用扰动与代价。负反馈可稳定输出并缩短部分响应，却降低增益；冗余提高容错，也增加资源消耗；高协同性扩大状态分离，同时使系统对阈值周围参数更敏感。鲁棒性须由系统性扰动和环境条件组测量确认。

### 构建序列与群体组成的进化变化 { #evolutionary-stability }

人工系统若降低生长或存活，失活突变体会获得相对优势。突变可以发生在启动子、重复序列、编码序列、质粒复制起点、选择标记或宿主抑制突变基因；重组、移动元件插入、缺失和质粒丢失又提供结构性失效路径。群体输出下降可能来自每个细胞逐渐减弱，也可能来自少量无功能的快速生长变体接管群体，两者需要单克隆基因型与群体频率分开测量。

Sleight 等比较不同线路结构的长期稳定性，说明直接重复排列、转录方向和序列背景会塑造失效速率，并提出通过重新排列元件提高进化鲁棒性。[^evolutionary-stability] 稳定性测试应在与目标用途一致的生长条件中记录多代输出、适合度、群体分布和终点序列；短期强输出与长期可保持性属于两个性能维度。

降低负担、减少重复序列、染色体整合、分散功能、动态开启目标通路和把线路输出与宿主适合度耦合，都可改变进化轨迹。任何策略都可能产生新的逃逸路径，长期实验与失效测序因而也是 DBTL 的学习阶段：它们说明哪些突变在当前设计与选择环境中最容易被保留。

## 四类构建层级 { #four-topic-groups }

| 专题页 | 主要构建对象 | 经典问题 | 共同接口 |
| --- | --- | --- | --- |
| [生物元件与合成基因线路](synthetic_circuits.md) | 启动子、调节因子、传感器、逻辑、反馈、开关、振荡器和记忆 | 元件怎样组成可预测的时间输入—输出行为 | 传递曲线、负载、噪声、资源消耗与背景 |
| [基因组设计、代谢工程与生物制造](synthetic_genome_metabolic.md) | 通路、基因组、底盘、前体／辅因子供应与生产过程 | 怎样分配流量、重构遗传信息并把细胞状态连接到产物 | 宿主生理状态、多目标性能与进化稳定性 |
| [无细胞系统、最小细胞与人工细胞](synthetic_cell_free.md) | 提取物、纯化表达系统、最小基因组、膜区室与能量再生 | 生命功能能被拆到多小，又怎样在受控区室中重新组合 | 组分清单、物质／能量交换、自我维持与背景迁移 |
| [多细胞合成系统与空间模式](synthetic_multicellular.md) | 发送端–接收端、群体感应、劳动分工、合成群落和形态发生 | 细胞通信怎样形成群体决策、梯度、边界和图案 | 信号范围、组成、生长耦合、空间鲁棒性与进化 |

### 四个层级的代表性构建 { #representative-constructs }

Ro 等在酵母中引入和重排甲羟戊酸通路与青蒿酸通路，协调前体供应、异源酶和产物形成，显示通路工程需要同时处理局部反应与全细胞代谢。[^metabolic-engineering] Hutchison 等通过基因组设计、合成和移植得到 531 kb、473 个基因的最小细菌基因组；近三分之一基因当时仍缺少明确功能，说明“在规定培养条件下必需”与“机制已经理解”是不同的知识层级。[^minimal-genome]

Noireaux 和 Libchaber 把 *E. coli* 无细胞转录–翻译系统封装在磷脂囊泡中，并通过小分子跨膜交换延长内部表达，形成连接基因表达、区室和供料的囊泡生物反应器。[^vesicle-bioreactor] Basu 等则把 N-酰基高丝氨酸内酯（N-acyl homoserine lactone，AHL）发送端、扩散场和带通响应型接收端细胞组合起来，使细菌菌苔在信号源周围形成环形图案，展示细胞内线路与胞外梯度怎样共同决定多细胞几何结构。[^synthetic-pattern]

这些构建代表不同尺度，却遵循同一证据结构：定义预期行为，说明实际物质组成，测量输入—状态—输出，比较模型和观察，再追踪背景、资源和进化造成的偏差。四个专题页将在这一共同框架下展开各自的经典元件、模型和实验系统。

## 与相邻学科的接口 { #disciplinary-interfaces }

[原核与真核基因表达调控](../molecular/gene_regulation.md)说明启动子、操纵序列、增强子、RNA 加工和翻译在天然系统中的机制，合成线路页研究这些机制经过重组后怎样实现指定动态。[代谢总论](../biochem/metabolism.md)与具体代谢页面提供热力学、流量、辅因子、区室和调控的生化基础，代谢工程页聚焦如何重定向这些量并评价整体制造性能。

[系统生物学](systems_biology.md)由观测与扰动建立天然系统的可检验解释，合成生物学把候选原理转成新构建，并由构建成败反过来检验模型。[生物物理学](biophysics.md)提供能量、扩散、力、噪声和尺度约束，[化学生物学](chemical_synthetic_biology.md)提供可选择测量和急性扰动的分子工具。实验技术与生物信息学则负责构建、测量、序列验证和多组学数据处理。

合成生物学把设计对象从单个 DNA 序列扩展到线路、基因组、无细胞区室和多细胞组织。抽象层级帮助表达意图，标准化保存接口与测量，DBTL 让假设持续接受构建检验，宿主资源与进化则说明每个设计都运行在会响应、会生长、会变化的生命系统中。把这些层面同时写入规格和证据链，才能由一次可工作的构建积累出可迁移的生物学知识。

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
[^engineering-biology-foundations]: Endy, D. [Foundations for engineering biology](https://doi.org/10.1038/nature04342). *Nature* 438, 449–453 (2005)。该文把抽象、标准化和解耦作为工程生物学的基础问题，并以系统难以可靠预测为出发点讨论所需的测量与基础技术。
[^toggle-repressilator]: Gardner, T. S., Cantor, C. R. & Collins, J. J. [Construction of a genetic toggle switch in *Escherichia coli*](https://doi.org/10.1038/35002131). *Nature* 403, 339–342 (2000)；Elowitz, M. B. & Leibler, S. [A synthetic oscillatory network of transcriptional regulators](https://doi.org/10.1038/35002125). *Nature* 403, 335–338 (2000)。两项原始研究分别以相互抑制和三节点环形抑制实现双稳态／记忆与单细胞振荡，成为按目标动态组装调控网络的经典范例。
[^retroactivity-insulation]: Del Vecchio, D., Ninfa, A. J. & Sontag, E. D. [Modular cell biology: retroactivity and insulation](https://doi.org/10.1038/msb4100204). *Molecular Systems Biology* 4, 161 (2008)。研究形式化了下游负载怎样反向改变上游模块动力学，并分析隔离装置减弱反向负载效应的条件。
[^promoter-reference-unit]: Kelly, J. R. et al. [Measuring the activity of BioBrick promoters using an in vivo reference standard](https://doi.org/10.1186/1754-1611-3-4). *Journal of Biological Engineering* 3, 4 (2009)。研究以同一实验内的参照启动子形成相对启动子单位，并系统显示仪器、实验流程和细胞背景对可比性的影响。
[^cellular-burden]: Ceroni, F. et al. [Quantifying cellular capacity identifies gene expression designs with reduced burden](https://doi.org/10.1038/nmeth.3339). *Nature Methods* 12, 415–418 (2015)。研究用能力监测器实时读取异源表达对 E. coli 可用表达资源的影响，并识别输出相近而负担不同的构建体设计。
[^resource-competition]: Qian, Y. et al. [Resource competition shapes the response of genetic circuits](https://doi.org/10.1021/acssynbio.6b00361). *ACS Synthetic Biology* 6, 1263–1272 (2017)。研究以模型和实验说明共享表达资源能使没有直接调控边的表达盒相互耦合，并改变线路的稳态与输入—输出响应。
[^evolutionary-stability]: Sleight, S. C. et al. [Designing and engineering evolutionary robust genetic circuits](https://doi.org/10.1186/1754-1611-4-12). *Journal of Biological Engineering* 4, 12 (2010)。研究比较两种 BioBrick 线路的突变与失效模式，并通过改变重复序列排列和序列背景提高长期遗传稳定性。
[^metabolic-engineering]: Ro, D.-K. et al. [Production of the antimalarial drug precursor artemisinic acid in engineered yeast](https://doi.org/10.1038/nature04640). *Nature* 440, 940–943 (2006)；Nielsen, J. & Keasling, J. D. [Engineering cellular metabolism](https://doi.org/10.1016/j.cell.2016.02.004). *Cell* 164, 1185–1197 (2016)。原始研究通过重构酵母前体与异源通路提高青蒿酸产量，综述则把通路、全细胞模型和多组学测量连接为代谢工程框架。
[^minimal-genome]: Hutchison, C. A. III et al. [Design and synthesis of a minimal bacterial genome](https://doi.org/10.1126/science.aad6253). *Science* 351, aad6253 (2016)。研究通过设计、合成与基因组移植构建可独立生长的最小细菌细胞；其 473 个基因中有 149 个当时功能未知，显示实验必需性与机制注释之间仍有距离。
[^vesicle-bioreactor]: Noireaux, V. & Libchaber, A. [A vesicle bioreactor as a step toward an artificial cell assembly](https://doi.org/10.1073/pnas.0408236101). *Proceedings of the National Academy of Sciences USA* 101, 17669–17674 (2004)。原始研究把 *E. coli* 无细胞表达系统封装于磷脂囊泡，并由小分子交换支持内部转录—翻译，连接区室与供料设计。
[^synthetic-pattern]: Basu, S. et al. [A synthetic multicellular system for programmed pattern formation](https://doi.org/10.1038/nature03461). *Nature* 434, 1130–1134 (2005)。研究将 AHL 发送端、扩散梯度与带通响应型接收端线路组合，使工程化细菌在信号源周围形成可编程环形图案。
