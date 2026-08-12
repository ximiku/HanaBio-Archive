# 酶通论

细胞中的许多反应在热力学上可以发生，却不会在生命活动所需的时间尺度内自行完成。酶为这些反应提供更快的分子路径，并把底物识别、化学转化和细胞调控连接起来。一个酶分子通常经历多次结合与释放循环；它在每轮反应后回到可继续工作的状态，但循环中的构象、质子化状态或共价连接可以暂时改变。

催化体系以蛋白质酶为主，也包括具有催化能力的核糖核酸（ribonucleic acid，RNA），并常依赖金属、有机辅因子和多亚基装配。专一性和活力都需要在规定条件下描述；反应名称、酶委员会编号（Enzyme Commission number，EC number）和显色读数也应还原为可检验的催化过程。

本页讨论酶的共同性质、物质组成、命名分类、底物识别、活力测定和工程化。米氏方程及抑制动力学见[酶动力学](enzyme_dynamics.md)，活性位点的化学机制、别构调节、酶原和同工酶见[酶的催化机制与调控](enzyme_mechanism_regulation.md)，各类维生素衍生辅酶的反应化学见[维生素与辅酶](vitamin_and_coenzyme.md)。

## 催化路径与平衡终点 { #catalytic-pathway }

把单底物反应的最简循环写成

$$
E+S \rightleftharpoons ES \rightleftharpoons EP \rightleftharpoons E+P,
$$

其中 $ES$ 和 $EP$ 是底物态与产物态的酶复合物。酶通过稳定通往过渡态的分子排列，降低活化吉布斯自由能 $\Delta G^{\ddagger}$；它不改变底物与产物之间的标准反应自由能 $\Delta G^{\circ\prime}$，也不改变由后者决定的平衡常数。正、逆反应要经过同一能垒区域，所以催化剂会同时加快两个方向，体系只是更快接近平衡。[^enzyme-catalysis]

“酶不被消耗”指它不是反应方程中的净计量消耗物，不表示反应过程中始终保持同一结构。底物结合、酸碱基团的得失质子、暂时共价中间体、金属氧化态变化和亚基运动都可能是催化循环的一部分。酶也会被不可逆抑制、氧化、蛋白水解或热变性；此时失去的活力不会因为方程两侧都写着 $E$ 而自动恢复。

酶降低反应的动力学能垒；热力学上不利的过程则通过三磷酸腺苷（adenosine triphosphate，ATP）水解、离子梯度或氧化还原反应等耦联获得有利的总自由能变化。细胞还通过底物供给、区室化和酶量改变净通量。给定反应的平衡与开放系统中的代谢方向属于两个相互衔接的层次。

## 催化分子的物质组成 { #molecular-composition }

### 蛋白质与 RNA 催化中心 { #protein-rna-catalysts }

绝大多数已知细胞酶由蛋白质构成。折叠把一级序列上相隔很远的残基带到同一三维区域，使结合、酸碱催化、共价催化和金属配位能够协同发生。催化所需的完整单位可以是一条多肽，也可以由多个相同或不同亚基装配而成；“单体”或“寡聚体”只描述装配，不预先决定酶是否受调控。

RNA 也能承担真正的催化循环。1983 年的重构实验显示，细菌核糖核酸酶 P（ribonuclease P，RNase P）的 RNA 组分在适当 Mg$^{2+}$ 和多胺条件下可多轮切割前体转运 RNA（transfer RNA，tRNA），证明催化能力并非蛋白质专有。细胞内 RNase P 的蛋白质依赖程度随类群不同，核糖体肽基转移中心则是另一类 RNA 主导的催化环境。[^ribozyme-evidence]

实验室还可通过体外选择获得脱氧核酶（deoxyribozyme）。最早的代表之一能催化 RNA 磷酸二酯键断裂，但这是从随机脱氧核糖核酸（deoxyribonucleic acid，DNA）序列群体中筛选出的人工催化剂，不能据此把细胞中的 DNA 聚合酶、限制酶等称为“DNA 酶”：后者是作用于 DNA 的蛋白质酶。[^deoxyribozyme]

### 辅因子与催化化学 { #cofactors }

不少蛋白质单靠氨基酸侧链不足以完成电子转移、基团转移或强极化反应，需要非蛋白组分参与。辅因子（cofactor）是这一层次的总称，可为金属离子，也可为有机分子。缺少必需辅因子的蛋白质部分常称脱辅酶（apoenzyme），与辅因子组成的催化活性整体称全酶（holoenzyme）。[^cofactor-terms]

有机辅因子常称辅酶。烟酰胺腺嘌呤二核苷酸（nicotinamide adenine dinucleotide，NAD$^+$）、辅酶 A（coenzyme A，CoA）等可像共底物一样与多种酶短暂结合，在一次反应中发生化学变化，再由网络中的另一反应再生；血红素、黄素腺嘌呤二核苷酸（flavin adenine dinucleotide，FAD）或生物素也可能作为辅基长期留在同一蛋白质上。辅基可以由共价键固定，也可以靠紧密的非共价作用结合，因此不能用“辅酶一定松、辅基一定共价”作硬边界。金属结合同样形成连续谱：有的金属稳定地嵌入成熟酶，有的在测定体系中可逆结合底物或蛋白质。精确叙述应给出具体分子、结合状态和实验条件，而不是只贴“简单酶／结合酶”的标签。

### 催化实体的装配方式 { #enzyme-assemblies }

多功能酶可在同一多肽的不同催化结构域完成多个反应；多酶复合体则由不同类型的催化多肽共同组成。丙酮酸脱氢酶复合体把连续反应、摆动辅基和亚基装配组织在一起，但其各项催化活动仍可分别具有 EC 编号。国际生物化学与分子生物学联合会命名委员会（Nomenclature Committee of the International Union of Biochemistry and Molecular Biology，NC-IUBMB）因而区分“单个催化实体”“多功能酶”和由多个酶构成的酶系统（enzyme system），避免给整个模糊生理过程随意添加一个 *-ase* 名称。[^multienzyme-nomenclature]

空间邻近可以缩短中间物扩散距离，保护不稳定中间体，或使底物在相邻活性位点间直接传递。共定位或蛋白质相互作用提供空间邻近证据；底物通道化还需要动力学、同位素、结构或重构实验显示中间物未充分进入体相。细胞器、膜表面和可逆支架也能提高局部有效浓度，相关酶可以采用瞬时而非永久装配。

## 反应命名与 EC 分类 { #enzyme-nomenclature }

酶的通用名称往往由底物或反应类型加“酶”构成，便于日常交流；系统名称则尽量把供体、受体和反应写清。EC 编号按**所催化总反应**分类，与蛋白质家族和序列实体属于不同注释维度。一个 EC 条目可以对应来自不同物种、序列不同的蛋白质；同一种多功能蛋白也可能因具有多个独立催化活动而关联多个 EC 编号。[^ec-classification]

完整编号写作 `EC a.b.c.d`：第一位是反应大类，第二、三位逐级细分反应，第四位是在子子类中的序号。反应尚未精确到完整条目时会使用带短横线的不完整编号，这不是某个具体酶的永久身份证。当前体系有七个大类；2018 年增设的转位酶类把以跨膜转运为主要反应结果的催化实体从旧有水解酶等类别中重新归置。[^ec7-translocases]

| EC 大类 | 分类所依据的总反应 | 代表性例子 |
| --- | --- | --- |
| EC 1 氧化还原酶 | 电子或氢在供体与受体间转移 | 乳酸脱氢酶 |
| EC 2 转移酶 | 官能团在分子之间转移 | 己糖激酶 |
| EC 3 水解酶 | 以水解方式断键 | 胰蛋白酶 |
| EC 4 裂合酶 | 非水解、非氧化地断键，或向双键加成 | 延胡索酸水合酶 |
| EC 5 异构酶 | 分子内部重排 | 磷酸丙糖异构酶 |
| EC 6 连接酶 | 以核苷三磷酸（nucleoside triphosphate，NTP）水解等供能形成新键 | ATP 依赖的 DNA 连接酶 |
| EC 7 转位酶 | 以化学反应驱动物质跨膜或在膜内分离 | Na$^+$/K$^+$ 交换 ATP 酶 |

“合酶”“合成酶”“激酶”或“ATP 酶”可以提供名称线索，反应方程和 EC 条目则给出正式分类依据。例如旧分类曾把多种离子泵放在 ATP 水解酶下，现行 EC 7 以转位这一主要结果分类；同名酶若底物、电子受体或整体化学计量不同，也可能分属不同条目。阅读数据库注释时应同时核对反应式、物种来源、亚细胞位置和证据类型。

## 底物识别与反应专一性 { #substrate-specificity }

### 活性位点的三维反应环境 { #active-site-recognition }

蛋白质酶的活性位点通常是表面沟槽、裂隙或内部口袋，只占分子的一部分，却可汇集来自不同序列区段的残基、结构水、金属和辅因子。底物先以氢键、离子作用、疏水作用和范德华接触等非共价力进入可反应排列；产物选择性还取决于哪条键被定向、哪些质子和电子能转移，以及哪一种过渡态受到稳定。结合位点负责分子识别，催化位点负责化学转化，两者可以部分或完全重叠。

专一性至少包含两个维度：**底物专一性**比较酶对不同分子的利用，**反应专一性**比较同一底物可能走向的不同化学产物。立体专一性又可使酶区分对映体、非对映体或前手性面的进攻方向。脲酶对尿素的范围很窄，许多肽酶则识别一类键及其邻近序列；同一个活性位点还可能以较低效率催化次要底物或旁反应。酶促反应的选择性因而应由同一条件下的速率常数或催化效率比较，而不是由“绝对／相对”标签独自证明。[^enzyme-promiscuity]

适度的底物或催化多能性（promiscuity）并不等同于非特异破坏。次要活性可低到对当前生理没有可测贡献，也可在基因复制、表达改变和选择作用下成为新功能的起点。反过来，检测到体外旁活性也不自动证明细胞利用了这条路线；还需比较底物浓度、竞争反应、区室和遗传扰动。

### 底物识别与构象重分布 { #induced-fit-conformational-selection }

“锁和钥匙”模型保留了形状与化学互补这一重要直觉，构象动力学则进一步描述酶在多个状态间的交换。Koshland 提出的诱导契合强调，底物接触可驱动酶和底物进入更适合催化的构象；现代构象集合观点还允许底物先选择未结合酶已短暂采样的构象，随后再发生调整。两条路径可以连续出现，其先后关系需要时间分辨的动力学和构象证据判断。[^induced-fit]

三点附着模型能直观说明一个前手性或手性底物为何以特定方向进入口袋，却不是所有酶都必须具有三个离散接触点的结构定律。更一般的解释是：多组相互作用共同限制底物的位置、取向和构象，使一种通往过渡态的微观路径比其他路径更有利。

## 结合能与过渡态选择 { #transition-state-selection }

底物与酶形成许多弱相互作用时释放的结合自由能，可以用来抵偿去溶剂化、限制平移与转动、改变构象以及组织催化基团所需的代价。若相互作用主要稳定基态复合物，$ES$ 的自由能井会加深并增加到达过渡态所需的势垒；高效酶通常让相互作用在接近过渡态的几何与电荷分布中得到更充分的满足。

稳定的过渡态类似物因此常比底物结合得更紧，可用于探测活性位点或设计抑制剂。不过类似物只近似某些几何和电荷特征，不是寿命极短的真实过渡态本身。酸碱催化、共价催化、金属离子催化、临近定向和活性位点微环境共同塑造催化路径，具体的催化化学见[酶的催化机制与调控](enzyme_mechanism_regulation.md)。

## 催化活力的实验定义 { #enzyme-activity }

酶活力是规定测量系统中，催化剂促成某一指定反应的物质转化速率。它依赖底物与辅因子浓度、酶的分子形式、温度、pH、离子强度、缓冲组分和测量时间，不能只报一个数值而省略反应条件。可靠测定通常从反应进程曲线中选择初始线性区，使底物消耗、产物抑制、逆反应、酶失活和检测器饱和尚未显著扭曲速率。[^enzyme-assay]

| 量 | 定义与常用单位 | 主要用途与边界 |
| --- | --- | --- |
| 催化活力 | 指定体系中的物质转化速率；国际单位制（International System of Units，SI）单位为开特（katal，kat） | $1\ \mathrm{kat}=1\ \mathrm{mol\,s^{-1}}$，必须连同反应与测定条件报告 |
| 酶单位（enzyme unit，U） | 每分钟转化 $1\ \mu\mathrm{mol}$ 的活力 | $1\ \mathrm{U}=16.667\ \mathrm{nkat}$；仍常用，但不是相干 SI 单位 |
| 总活力 | 样品体积或全部级分所含的活力 | 用于计算纯化回收率，会受抑制剂、失活和测定条件影响 |
| 比活力 | 活力除以总蛋白质量，常写作 U/mg | 同一纯化流程中可追踪富集；单独不能证明化学均一 |

katal 和 U 衡量的是催化活力，不是酶分子的物质的量；不同反应或不同测定条件下的 U 不能直接横向比较。周转数 $k_{\mathrm{cat}}$ 则是在酶活性位点浓度和动力学模型明确后得到的速率常数，不应与“每毫克样品有多少 U”混用。IUPAC 推荐用 katal 表达催化活力，并保留 $1\ \mathrm{U}=1\ \mu\mathrm{mol\,min^{-1}}$ 的换算关系。[^activity-units]

连续测定可随时间追踪吸光、荧光、pH、电极或热信号；不连续测定则在多个时间点终止反应后分析底物或产物。若目标反应本身没有便于检测的信号，可用第二个酶把产物转换成可测物，但耦联酶和检测试剂必须足量，不能成为新的限速步骤。空白对照、无酶或无底物对照、已知阳性对照和检测器线性范围共同决定一个斜率能否解释为目标酶活力。

蛋白质纯化中的回收率等于纯化后总活力除以起始总活力，纯化倍数等于纯化前后比活力之比。两者必须一起看：比活力上升而总活力骤降，可能意味着目标酶富集的同时大量失活；比活力不再上升，也可能来自共纯化杂质、活性异构体或蛋白定量偏差。具体分级、色谱和纯度证据见[蛋白质研究方法](protein_methods.md)。

## 温度、pH 与分子环境 { #environmental-dependence }

升温通常使分子运动和越过能垒的速率加快，同时也可能加速酶的不可逆失活。测得的温度—活力曲线是这两种时间依赖过程与底物饱和度、缓冲液 pH 漂移共同叠加的结果，不必是对称“倒 V”形。所谓最适温度是某种底物、缓冲体系和测定时长下的速率峰值；改变孵育时间，就可能改变峰值位置。耐热性描述酶在一定温度暴露后保留活力的能力，也不等同于瞬时反应速率的最适温度。[^temperature-optimum]

$Q_{10}$ 表示某一有限温区内升高 10 ℃ 时速率的比值，可用于经验比较，却不是所有酶都恒定的倍数。跨越构象变化、失活或底物相变后，同一个 $Q_{10}$ 已失去可比意义。嗜热生物的酶可能在高温保持结构，低温适应酶则常以更高柔性换取低温活性；两者都不能由一次“最适温度”测定完整概括。

pH 同时改变酶侧链、底物、辅因子和缓冲组分的质子化状态，也可能改变蛋白质稳定性。若两个或更多必需基团的电离共同限速，曲线可能近似钟形；若只有一侧电离占主导、多个状态重叠或极端 pH 引起失活，曲线就会偏斜、出现平台或多个峰。最适 pH 因而也属于测定体系，不等于酶的等电点，更不是每种酶固定接近中性。

离子强度、特定盐、金属、还原环境、拥挤效应、膜脂和溶剂活度都能改变结合与催化。比较不同条件时应一次只改变待研究因素，并在实际测定温度校正缓冲液 pH；否则“温度效应”中可能混入 pH 变化，“金属激活”中也可能混入离子强度或底物络合变化。

## 细胞中的定位与调控层次 { #cellular-organization }

细胞通过区室化、膜、多酶复合体、瞬时酶簇和支架组织酶、底物及辅因子的局部相遇，并可把化学反应与跨膜电化学梯度耦联。底物通道化则需要中间物直接传递的证据。[^cellular-enzyme-organization]

反应通量可在多个时间尺度上调节：改变底物和产物浓度、可逆结合别构效应物、共价修饰已有酶、有限蛋白水解激活酶原、改变亚基装配，或通过转录、翻译和降解改变酶量。同工酶催化相同总反应，却可具有不同动力学、调控、组织分布或细胞定位。酶分子处于由底物、效应物、共价修饰、装配、表达和降解共同构成的细胞调控网络中；动力学定量见[酶动力学](enzyme_dynamics.md)，别构调节、共价修饰、酶原和同工酶见[酶的催化机制与调控](enzyme_mechanism_regulation.md)。

## 天然酶与工程化催化剂 { #enzyme-engineering }

酶工程的起点可以是天然样品筛选、宏基因组挖掘或重组表达，随后再按用途改变催化剂本身或其工作环境。固定化把酶连接或包埋在载体上，便于回收、连续反应和重复使用，也可能提高操作稳定性；与此同时，传质阻力、取向限制和局部微环境会降低表观速率。化学修饰改变催化剂，介质工程调整反应环境，辅因子再生维持共底物循环，三者分别作用于不同层次。

序列层面的改造包括基于结构和机制的理性设计、围绕候选位点构建的小型库、随机突变与筛选组成的定向进化，以及不同程度的计算设计。定向进化反复执行“产生变异—表达—筛选或选择—扩增优良变体”，在不要求预先理解每个突变作用的情况下积累性能。它改变的是实验设定的适应度目标，不保证同时改善活力、选择性、稳定性、可表达性和底物范围；这些指标往往需要共同测量。[^directed-evolution]

催化抗体展示了另一条设计路径：用稳定的过渡态类似物作半抗原诱导抗体，筛得能优先结合相似电荷和几何状态的结合位点。1986 年的实验由此获得可催化羧酸酯水解的单克隆抗体。它证明结合能可以被重定向为催化，但抗体对类似物的高亲和力并不自动等于高周转，产物释放和催化基团的布置仍可能限速。[^catalytic-antibodies]

酶工程可按改造对象分为序列、辅因子、装配、固定化载体和代谢网络等层次。评价工程结果时，应在相同反应式、测定条件和误差控制下比较改造前后的催化表现；这种分类也比按“第几代”排列工具更能说明尺度和目标。

## 参考资料与延伸阅读

- Nelson, D. L., Cox, M. M. & Hoskins, A. A. *Lehninger Principles of Biochemistry*, 8th ed., Chapter 6. Macmillan Learning, 2021.
- Cooper, G. M. [The Central Role of Enzymes as Biological Catalysts](https://www.ncbi.nlm.nih.gov/books/NBK9921/). *The Cell: A Molecular Approach*, 2nd ed.
- NC-IUBMB. [Classification and Nomenclature of Enzymes by the Reactions they Catalyse](https://iubmb.qmul.ac.uk/enzyme/rules.html)；[Enzyme Nomenclature](https://iubmb.qmul.ac.uk/enzyme/)。
- IUPAC Gold Book. [Cofactors](https://goldbook.iupac.org/terms/view/C01128)；[Katal](https://goldbook.iupac.org/terms/view/K03372)。
- NCBI Assay Guidance Manual. [Basics of Enzymatic Assays for HTS](https://www.ncbi.nlm.nih.gov/books/NBK92007/).
- Koshland, D. E. Jr. [Application of a Theory of Enzyme Specificity to Protein Synthesis](https://pubmed.ncbi.nlm.nih.gov/16590179/). *Proceedings of the National Academy of Sciences USA* 44, 98–104 (1958).
- Guerrier-Takada, C. et al. [The RNA moiety of ribonuclease P is the catalytic subunit of the enzyme](https://pubmed.ncbi.nlm.nih.gov/6197186/). *Cell* 35, 849–857 (1983).
- Pandya, C. et al. [Enzyme promiscuity: engine of evolutionary innovation](https://pmc.ncbi.nlm.nih.gov/articles/PMC4215207/). *Journal of Biological Chemistry* 289, 30229–30236 (2014).
- Nobel Prize Outreach. [The Nobel Prize in Chemistry 2018: Popular Information](https://www.nobelprize.org/prizes/chemistry/2018/popular-information/).

[^enzyme-catalysis]: Cooper, G. M., [The Central Role of Enzymes as Biological Catalysts](https://www.ncbi.nlm.nih.gov/books/NBK9921/)。该教材页区分活化能垒与反应自由能，并说明催化同时加快正、逆方向而不改变平衡。
[^ribozyme-evidence]: Guerrier-Takada, C. et al., [The RNA moiety of ribonuclease P is the catalytic subunit of the enzyme](https://pubmed.ncbi.nlm.nih.gov/6197186/). *Cell* 35, 849–857 (1983)。实验条件决定 RNA 单独催化或 RNA—蛋白复合物共同工作的状态，一种体外条件所得结论不能外推为所有生物 RNase P 的组成。
[^deoxyribozyme]: Breaker, R. R. & Joyce, G. F., [A DNA enzyme that cleaves RNA](https://pubmed.ncbi.nlm.nih.gov/9383394/). *Chemistry & Biology* 1, 223–229 (1994)。该催化 DNA 由体外选择获得，区别于天然细胞中以 DNA 为底物的蛋白质酶。
[^cofactor-terms]: IUPAC Gold Book, [Cofactors](https://goldbook.iupac.org/terms/view/C01128)。IUPAC 把必需的有机分子或离子纳入辅因子，并允许其与蛋白质松散或紧密结合；具体辅酶化学见[维生素与辅酶](vitamin_and_coenzyme.md)。
[^multienzyme-nomenclature]: NC-IUBMB, [Nomenclature for multienzymes](https://iubmb.qmul.ac.uk/misc/menz.html)及 [Classification and Nomenclature of Enzymes](https://iubmb.qmul.ac.uk/enzyme/rules.html)。前者区分多功能多肽与多酶复合体，后者要求把多个酶组成的整体称为 system，而不把总过程误作单酶。
[^ec-classification]: NC-IUBMB, [Classification and Nomenclature of Enzymes by the Reactions they Catalyse](https://iubmb.qmul.ac.uk/enzyme/rules.html)与[命名申请指南](https://iubmb.qmul.ac.uk/enzyme/advice.html)。EC 编号以总反应而非蛋白质结构或中间机制分类，完整编号含四级数字。
[^ec7-translocases]: NC-IUBMB, [Translocases (EC 7): A new EC Class](https://iubmb.qmul.ac.uk/newsletter/2018.html#translocases)及 [EC 7](https://iubmb.qmul.ac.uk/enzyme/EC7/)。转位酶按跨膜移动的物质及驱动反应继续细分；Na$^+$/K$^+$ 交换 ATP 酶现列为 [EC 7.2.2.13](https://iubmb.qmul.ac.uk/enzyme/EC7/2/2/13.html)。
[^enzyme-promiscuity]: Pandya, C. et al., [Enzyme promiscuity: engine of evolutionary innovation](https://pmc.ncbi.nlm.nih.gov/articles/PMC4215207/). *Journal of Biological Chemistry* 289, 30229–30236 (2014)。该综述区分底物范围与次要催化活动，并讨论多能性在代谢与功能演化中的证据。
[^induced-fit]: Koshland, D. E. Jr., [Application of a Theory of Enzyme Specificity to Protein Synthesis](https://pubmed.ncbi.nlm.nih.gov/16590179/). *Proceedings of the National Academy of Sciences USA* 44, 98–104 (1958)；构象选择与诱导契合并存的现代框架另见[蛋白质功能](protein_function.md#binding-conformational-redistribution)。
[^enzyme-assay]: NCBI Assay Guidance Manual, [Basics of Enzymatic Assays for HTS](https://www.ncbi.nlm.nih.gov/books/NBK92007/)。该章要求先建立检测线性范围和反应进程曲线，再在低底物耗竭的初始线性区测量速率，并保持温度、pH、离子强度与缓冲组成可比。
[^activity-units]: IUPAC Gold Book, [Katal](https://goldbook.iupac.org/terms/view/K03372)与 [International unit](https://goldbook.iupac.org/terms/view/I03114)；Dybkaer, R., [Unit “katal” for catalytic activity](https://publications.iupac.org/publications/pac/2001/pdf/7306x0927.pdf). *Pure and Applied Chemistry* 73, 927–931 (2001)。
[^temperature-optimum]: Eisenthal, R., Peterson, M. E., Daniel, R. M. & Danson, M. J., [The thermal behaviour of enzyme activity: implications for biotechnology](https://pmc.ncbi.nlm.nih.gov/articles/PMC1798444/). *Trends in Biotechnology* 24, 289–292 (2006)；同一框架的实验讨论见[Optimum temperature may be a misleading parameter in enzyme characterization and application](https://pmc.ncbi.nlm.nih.gov/articles/PMC6386375/)。
[^cellular-enzyme-organization]: Alberts, B. et al., [Protein Function](https://www.ncbi.nlm.nih.gov/books/NBK26911/). *Molecular Biology of the Cell*, 4th ed.；NC-IUBMB, [Nomenclature for multienzymes](https://iubmb.qmul.ac.uk/misc/menz.html)。空间组织可提高局部有效浓度，但是否发生底物通道化仍需直接证据。
[^directed-evolution]: Nobel Prize Outreach, [The Nobel Prize in Chemistry 2018: Popular Information](https://www.nobelprize.org/prizes/chemistry/2018/popular-information/)。该资料以枯草杆菌蛋白酶在有机溶剂中的定向进化为例，说明反复变异与筛选如何改造酶，而不是把工程方法排列成固定“代际”。
[^catalytic-antibodies]: Tramontano, A., Janda, K. D. & Lerner, R. A., [Catalytic antibodies](https://pubmed.ncbi.nlm.nih.gov/3787261/). *Science* 234, 1566–1570 (1986)。研究用过渡态类似物半抗原获得催化羧酸酯水解的单克隆抗体，并以类似物抑制验证其设计逻辑。
