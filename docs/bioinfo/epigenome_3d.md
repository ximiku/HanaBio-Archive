# 表观基因组与三维基因组分析

同一套基因组序列在不同细胞中可以呈现不同的 DNA 修饰、核小体排列、蛋白占据、染色质可及性和核内接触图样。表观基因组学把这些状态投影到参考坐标上，三维基因组学则记录相隔一定基因组距离的位点在细胞核中多常彼此接近。两类研究共同关心染色质，却产生不同的数据对象：甲基化比例、富集峰、插入位点和接触矩阵之间不能直接互换。

这些图谱始终附着于具体样本。组织中的细胞组成、发育阶段、细胞周期、刺激时间和取材过程都会改变测量结果；群体测序又把许多细胞与两个等位基因平均在一起。分析工作在寻找“信号”的同时，还要说明信号由何种分子事件产生、在哪个尺度上可比较、哪些技术偏倚已经控制，以及它能支持多强的生物学结论。

## 从染色质状态到可计算对象 { #assay-to-object }

表观遗传学讨论状态如何建立、维持和重设，细胞生物学讨论核小体、染色体疆域、区室和环挤出的分子基础；本页关注这些状态经过测定后如何成为序列数据。相关机制分别见[基因组学与表观遗传学](../genetics/genomics_epigenetics.md#epigenetic-state)和[细胞核、染色质与核糖体](../cell/nucleus_chromatin.md#three-dimensional-genome)。一次测量可以显示某种状态与表达相关，却不能单独证明它跨细胞分裂遗传或造成了表达变化。

不同测定把分子对象转换为读段的方式不同。亚硫酸氢盐或酶促转换用碱基变化报告胞嘧啶修饰；ChIP、CUT&RUN 和 CUT&Tag 通过抗体富集目标蛋白或组蛋白修饰附近的 DNA；DNase-seq、MNase-seq 和 ATAC-seq 借助核酸酶或转座酶的可接近程度报告染色质环境；3C 家族则把空间邻近转成嵌合 DNA 分子的连接。实验名称因此隐含了一套观测模型，分析必须保留未转换的原始计数、处理对照和参考坐标，不能只保留最终峰或彩色热图。

| 测定家族 | 直接形成的数据对象 | 常见分析结果 | 首要解释边界 |
| --- | --- | --- | --- |
| WGBS／RRBS／EM-seq、MBD／MeDIP | 转换后碱基计数或修饰 DNA 富集片段 | 位点甲基化比例、差异甲基化区域 | 常规 BS 与 EM-seq 通常合并读取 5mC 和 5hmC；富集法不提供逐碱基比例 |
| ChIP-seq、CUT&RUN、CUT&Tag | 目标抗体附近的 DNA 片段 | 窄峰、宽域、信号轨道 | 富集取决于抗体、表位、交联或酶切条件，不等于绝对占有量 |
| DNase-seq、ATAC-seq、MNase-seq | 酶切或 Tn5 插入的片段端点与长度 | 可及区、核小体周期、候选足迹 | 酶序列偏好和核提取条件参与信号；开放不等于正在转录 |
| 3C／4C／5C／Hi-C／Micro-C | 一对基因组坐标及其连接计数 | 接触曲线、区室、结构域、环 | 连接频率是群体和流程共同产生的相对读出，不是固定三维距离 |

## 样本、对照与参考坐标先于算法 { #study-design }

染色质状态高度依赖细胞身份。比较两个组织时，信号变化可能来自每种细胞内部真正改变，也可能只是细胞比例不同。培养密度、缺氧、消化时间、冻存、核分离、细胞周期和死亡细胞都会改变可及性或连接背景。设计阶段应尽可能取得独立生物学重复，随机化建库批次，并记录组织处理到固定或裂解的时间。技术重复可以检查建库稳定性，却不能替代来自独立生物样本的变异估计。

阳性、阴性与输入对照回答不同问题。ChIP-seq 的 input DNA 描述剪切、扩增和可比对性背景，IgG 或无抗体对照提示非特异吸附；CUT&RUN／CUT&Tag 还可使用无一抗对照或已知定位的抗体。甲基化转换需要未修饰或已修饰的外源 DNA 估计转化效率。ATAC-seq 通常没有一条能消去全部 Tn5 偏好的 input 轨道，因此更依赖高质量重复、片段分布和已知开放区域。Hi-C 对照则首先体现在有效连接比例、重复率和距离衰减等文库质量上，普通全基因组 input 不能模拟近邻连接过程。

所有轨道必须绑定明确的参考组装、染色体命名和过滤区域。结构变异、拷贝数变化及非整倍体会同时改变局部读数与三维接触数；肿瘤或细胞系中尤其不能默认每个区段有两份拷贝。重复区域的低可比对性、参考缺失序列和等位特异比对偏倚会造成假性信号差异。若研究亲本来源或等位特异状态，应先建立分相的个体基因组或经过偏倚校正的双等位参考，并把覆盖不足与真实单等位状态分开。

## DNA 甲基化读出依赖转换化学 { #dna-methylation }

### 亚硫酸氢盐测序的碱基计数 { #bisulfite-sequencing }

亚硫酸氢盐处理把未修饰胞嘧啶转为尿嘧啶，扩增和测序后主要读作胸腺嘧啶；5-methylcytosine（5mC）与 5-hydroxymethylcytosine（5hmC）在常规处理中都较多保留为胞嘧啶。WGBS 将这一转换应用到全基因组，早期人类单碱基分辨率甲基化图谱由此显示不同细胞状态具有显著不同的胞嘧啶修饰分布。[^wgbs] RRBS 先利用限制性内切酶和片段选择富集 CpG 较密集区域，能以较少测序量观察许多启动子和 CpG 岛，却不会均匀代表整个基因组。

转换后的读段不再与原始 DNA 完全互补，普通四碱基比对策略会产生大量错配。专用比对器通常把读段和参考分别转换为有限字母空间，再依据链方向恢复候选位置。每个胞嘧啶位点的修饰比例可由保留为 C 的高质量读段数除以 C 与 T 的有效总数估计；这个比例在群体样本中混合了细胞、等位基因和 DNA 分子，50% 既可能表示所有细胞在一个等位上修饰，也可能表示一半细胞的两个等位都修饰。

未修饰胞嘧啶转换不完全会制造假阳性，过度处理造成的 DNA 断裂、序列组成偏差和 PCR 选择又会使覆盖不均。分析应报告转换率、覆盖分布、重复率、链一致性和可分析胞嘧啶比例，并使用外源控制估计未转换背景。CpG、CHG 和 CHH 等序列环境应分别统计；哺乳动物与植物的修饰背景不同，不能把只适用于哺乳动物 CpG 的过滤或解释直接移植到植物。

### 5mC、5hmC 与富集法的对象不同 { #methylation-assay-boundaries }

常规 BS-seq 将 5mC 与 5hmC 合并为“未转换 C”。oxBS-seq 先把 5hmC 氧化为能在亚硫酸氢盐处理中转换的形式，结合普通 BS 数据可估计 5mC 与 5hmC；TAB-seq 则保护 5hmC，并把 5mC 进一步氧化后转换，使 5hmC 得到直接读出。两套实验相减会累积抽样误差，低覆盖位点甚至可能出现不合物理意义的负估计，因此需要联合统计模型、足够深度和独立验证。[^oxbs]

EM-seq 以 TET 氧化和 APOBEC 脱氨等酶促步骤保护 5mC／5hmC、转换未修饰 C，避免强亚硫酸氢盐处理造成的部分 DNA 损伤，适合较低输入；其标准读出仍通常是 5mC 与 5hmC 的合计。[^emseq] 原生长读段还可从纳米孔电流或 SMRT 动力学信号推断碱基修饰，并把修饰连接到长单倍型和重复序列，但调用准确度依赖化学版本、训练模型、序列环境与修饰类型。模型未训练过的信号不能自动命名为一种新修饰。

MBD-seq 与 MeDIP-seq 属于亲和富集法。前者利用 methyl-CpG-binding domain 对甲基化 CpG 片段的结合，后者用抗体富集含特定修饰的 DNA；两者产生区域富集轨道，信号同时受 CpG 密度、片段长度和结合效率影响。原素材把“MBD-seq”与亚硫酸氢盐法写在同一名称下，实际上它们的化学、分辨率和统计对象均不相同。富集法适合发现修饰丰富区域，却不能把峰高直接解释为每个胞嘧啶的甲基化百分比。

### 差异甲基化需要区域与重复证据 { #differential-methylation }

单个位点的 C/T 计数具有二项或过度离散性质，覆盖越低，比例估计越不稳定。相邻 CpG 往往共同变化，差异分析通常在控制生物学重复和协变量后整合邻近位点，定义 differentially methylated region（DMR）。只把同一样本内数百万 CpG 当作独立重复会夸大显著性；只设一个固定百分比阈值也无法表达覆盖与样本间变异。

DMR 的方向和功能须结合基因组位置。启动子 CpG 岛高甲基化常与沉默相关，但基因体、增强子、印记控制区、重复元件和非 CpG 修饰具有不同语境。分析应报告区域定义、有效覆盖、效应大小、置信区间和多重检验，并与可及性、蛋白结合或表达数据交叉验证。相关性仍不能证明甲基化是表达变化的起点；时间序列和位点特异编辑可进一步检验因果。

## 蛋白与组蛋白修饰的富集图谱 { #protein-chromatin-profiling }

### ChIP-seq 从免疫富集形成峰 { #chip-seq }

ChIP-seq 通过交联或原生条件保存蛋白—DNA 关系，将染色质片段化，以特异抗体免疫沉淀后测序。转录因子常产生相对窄的局部富集，H3K27me3、H3K9me3 等修饰可形成宽域，RNA polymerase II 和某些复合物又有各自的分布形态。峰调用器以 ChIP 与局部背景的读段分布寻找显著富集；MACS 的片段长度模型和局部背景是这一分析路线的经典实现。[^macs]

原始读段需经过接头与质量检查、参考比对、低质量和多重比对处理、重复与文库复杂度评估，再生成片段轨道。PCR 重复和真正高占据位点都能形成相同坐标的读段，是否去除需结合输入量、UMI、库复杂度和目标类型决定。比对到线粒体、异常高信号或低可比对区域的读段可能主导局部背景，通用 blacklist 可以排除已知问题区，却不能代替对当前样本的异常检查。

input、IgG 和生物学重复用于区分剪切偏好、非特异富集与可重复结合。ENCODE／modENCODE 的 ChIP-seq 实践强调抗体验证、足够复杂度、重复一致性和输入对照。[^chip-guidelines] FRiP 描述落在所定义峰内的片段比例，strand cross-correlation 可评估窄峰文库两条链的位移结构，IDR 可为可重复窄峰提供一致性选择；宽域修饰不一定适合沿用窄峰的全部阈值。任何指标都应与目标丰度和峰形共同解释，不能设成跨抗体、跨细胞通用的单一及格线。

峰代表相对于对照的统计富集，不等同于一个蛋白在每个细胞中直接接触该处 DNA。交联可以捕获同一复合物中的间接邻近，抗体会受表位遮挡和交叉反应影响，群体平均则掩盖占据比例。基序位于峰中央可加强直接结合假说，但无基序不排除通过伙伴蛋白招募；仅有基序也不证明发生结合。

### CUT&RUN 与 CUT&Tag 改变片段产生方式 { #cut-profiling }

CUT&RUN 在通透化细胞或细胞核内用抗体定位目标，再以 protein A/G—MNase 在目标附近切割并释放 DNA。它避免先把全部染色质随机打碎，可用较少细胞获得较低背景的定位图谱。[^cutrun] CUT&Tag 将抗体定位与装载接头的 protein A—Tn5 连接，目标附近的 tagmentation 直接产生可扩增文库，适合低输入和单细胞扩展。[^cuttag]

两种方法没有消除抗体与酶偏倚。MNase 的序列和可及性偏好、游离 Tn5 对开放染色质的插入、盐浓度和反应时间都会改变背景；无一抗、IgG、已知阳性抗体和适量 spike-in 有助于诊断。CUT&RUN／CUT&Tag 与 ChIP-seq 的片段端点、背景分布和动态范围不同，不能用同一读深或 FRiP 阈值机械比较。跨实验定量若使用 spike-in，外源细胞或 DNA 必须在能经历目标处理差异的阶段加入，并验证其回收没有随技术条件异常变化。

## 染色质可及性与核小体位置 { #chromatin-accessibility }

DNase I 超敏感性是开放调控区的经典读出，DNase-seq 将其扩展为全基因组图谱；FAIRE 利用交联后核小体贫乏 DNA 的相分配，MNase-seq 则依据被核小体保护的片段推断占位。ATAC-seq 用装载测序接头的 Tn5 转座酶在较可及 DNA 上同时切割和插入接头，以较少细胞快速形成文库。[^atacseq] 这些方法继承了从 DNase I 超敏感位点认识活性染色质的经典路径，又把显微和生化概念转成可计算的片段端点。

ATAC 读段分析通常先去除接头、比对并按 Tn5 插入位置校正片段端点，再检查线粒体片段比例、重复率、片段长度、TSS enrichment 和落峰比例。短片段较多来自核小体间可及 DNA，约单核小体及其倍数的长度周期可反映核小体保护，但核提取、转座强度和细胞凋亡也会改变分布。Omni-ATAC 等改良流程能在一些样本中降低背景和线粒体读段，仍需以当前组织和细胞类型的实际 QC 判断。[^omni-atac]

可及峰可与启动子、增强子候选区和转录因子基序相交。基序富集说明一类序列在开放区过度出现，不能确定是哪一个同家族因子结合；footprinting 试图从基序周围插入缺口推断蛋白保护，却同时受 Tn5 序列偏好、核小体、因子停留时间和测序深度影响。正式结合证据宜结合 ChIP／CUT、等位特异变化或扰动，而不是把每个计算足迹当作占据位点。

差异可及性分析应以样本为重复，在统一候选区间上统计片段数并建模文库大小、批次和细胞组成。分别对每组独立叫峰后只比较共有峰，会遗漏组别特异区域；把所有样本合并定义候选集或使用一致的窗口更便于计数。开放程度变化与 RNA 表达可能同向、先于或滞后，因子先结合后打开染色质也同样可能，因此时间顺序与扰动决定机制解释。

## 多轨道整合形成染色质状态模型 { #chromatin-state-integration }

单一标记很少足以命名调控元件。H3K4me3 常富集于活跃启动子，H3K27ac 常见于活跃启动子和增强子，H3K4me1 可标记许多增强子样区域，H3K27me3 与 Polycomb 抑制域相关，H3K9me3 常见于部分构成性异染色质；这些关联受细胞类型、物种和基因组环境限制。把可及性、多个修饰、CTCF 或 polymerase 占据和转录信号并置，可以比单轨道更有把握地区分候选状态。

ChromHMM 等模型把多个二值化或离散化标记视为观测，通过隐马尔可夫模型学习沿基因组相邻区间的组合状态，再依据与已知启动子、基因体或重复区的富集给状态命名。[^chromhmm] “活跃增强子”“双价启动子”等名称是对某一训练数据、状态数和标记集合的解释，不是模型直接观测到的功能。缺少某一标记、抗体批次不同或阈值变化都可能改变分段，跨研究比较时应保留原始 emission pattern 和训练设置。

群体图谱整合还需区分共定位与同细胞共存。两个标记在相同区间都有平均信号，可能来自同一细胞的同一核小体，也可能来自混合样本中的不同亚群。连续分值、峰集合和分段状态各自适合不同问题，不宜为了可视化方便把所有数据过早压成离散颜色。Roadmap Epigenomics 对多组织参考表观基因组的联合分析展示了标准化轨道和状态模型的价值，也同时说明“参考表观基因组”必须带有细胞和组织标签。[^roadmap]

## 3C 家族把空间邻近转换为连接产物 { #chromosome-conformation-capture }

3C 的基本思想是固定染色质，使空间上邻近的 DNA—蛋白复合环境得以保存，再切割 DNA、在有利于近邻片段互连的条件下连接，最后解除交联并检测嵌合连接产物。经典 3C 用一对特异引物定量两个候选片段之间的连接频率，首次把染色体构象转成可测的片段对。[^three-c] 原始连接频率还受限制片段长度、酶切效率、引物效率和基因组距离影响，需要控制模板与校准曲线。

4C 从一个预设 viewpoint 出发，用环化及反向 PCR 等步骤扫描它与全基因组的连接，形成“一对多”图谱；5C 在一个选定区域内使用许多连接介导探针对大量片段对并行检测，形成“多对多”矩阵；Hi-C 在连接端加入可富集标记并进行成对末端测序，扩展为全基因组“全对全”采样。原素材的这一方法谱系应保留，因为每一步都对应候选空间扩大和数据结构改变。Hi-C 的“全对全”表示不预先指定某个唯一位点，并不表示每对位点等概率被捕获或全无偏差。[^hic]

目标捕获可把 Hi-C／3C 文库中的探针集中到启动子或疾病区域，提高特定位点的有效深度。ChIA-PET、HiChIP 和 PLAC-seq 通过免疫富集聚焦某种蛋白或修饰相关的连接，得到的是目标依赖的接触子集；缺少一条连接可能来自目标未占据或免疫效率不足。Micro-C 以 MNase 将染色质切至核小体尺度，能够观察从核小体到整条染色体的折叠，但更细片段并不自动带来有效单碱基结构分辨率，所需读深和背景控制仍随研究尺度增加。[^microc]

## Hi-C 读段到接触矩阵 { #hic-processing }

### 有效片段对与文库质量 { #hic-valid-pairs }

Hi-C 的两个读段末端分别比对到参考基因组，连接点附近可能含有酶切—连接接头或发生分裂比对（split alignment）。流程根据方向、片段位置和连接类型识别有效片段对，并标记未切开片段、悬挂末端、自连环、相邻片段重新连接、PCR 重复和低质量多重比对。过滤规则依赖限制酶法、DNase Hi-C、in situ Hi-C 或 Micro-C 的文库结构，不能只复制另一种协议的标签。

质量报告至少应包括总读段对数、可唯一比对比例、有效连接比例、重复率、cis／trans 比例、不同基因组距离的接触衰减和每个染色体的覆盖。大量短距离 cis 接触是聚合物邻近的自然结果，trans 比例异常升高可能提示随机连接、核破裂或样本混合；但有丝分裂、物种核结构和文库方法也会改变基线。重复之间应比较距离衰减和矩阵相似性，而不只比较总读段数。

一个有效片段对贡献两个坐标。将基因组按固定分箱（bin）或限制片段分箱后，每个读段对在对称矩阵中增加一个计数，主对角线附近代表短基因组距离接触，远离对角线和染色体间区域代表长程或 trans 接触。所谓 5 kb、10 kb 或 100 kb “分辨率”首先是分箱宽度；只有在大多数目标分箱对拥有足够有效片段时，数据才具有相应的有效分析分辨率。把稀疏数据切成更小格子不会凭空增加结构信息。

### 矩阵平衡与距离背景 { #hic-normalization }

Hi-C 计数受片段长度、GC、可比对性、酶切位点密度、扩增和局部拷贝数影响。显式模型可把已知偏倚作为协变量，ICE 或 Knight—Ruiz 等矩阵平衡方法则调整每个保留分箱的可见性，使行列总量趋于一致。ICE 为从接触矩阵自身估计系统偏倚建立了经典方法。[^ice] 这种隐式校正依赖“可分析分箱在总体上具有可比可见性”等假设；极低覆盖、大片段缺失、CNV 或整条染色体剂量变化需要先掩蔽或采用相应模型。

染色质接触随基因组距离迅速衰减。检测环或比较局部结构时，常把观察计数与相同距离下的期望背景比较；区室分析则常对观察／期望（observed／expected）矩阵进行相关或特征分解。矩阵平衡、测序深度缩放和距离归一化解决的是不同问题，不能用一个“已归一化”标签概括。发布结果时应同时保存原始计数、有效分箱掩码、平衡权重和距离期望，使他人能够判断哪一步产生了图案。

## 从矩阵识别核内组织层级 { #hic-features }

### 距离衰减、染色体疆域与区室 { #compartments }

同一染色体内短距离接触普遍较多，染色体间接触又受到各条染色体疆域和核内位置影响。全基因组 Hi-C 首次系统显示人类染色质可分为与活跃、基因较丰富环境或较沉默环境相关的 A／B 区室，并提出接触概率随距离变化的折叠特征。[^hic] 区室是大尺度、连续且细胞类型相关的偏好，A 与 B 不是两种绝对封闭的核内容器。

区室通常通过 observed／expected 接触模式的第一特征向量或相近分解获得。特征向量的正负号在数学上可整体翻转，必须用基因密度、GC、复制时序、可及性或组蛋白标记确定哪一端命名为 A。某一区段从 A 转到 B 表示接触伙伴整体改变；要解释为功能转换，还需排除 CNV、批次和细胞组成，并检查独立染色质与表达证据。

### 拓扑相关结构域与边界 { #tads-boundaries }

接触矩阵中沿对角线出现的局部高接触区块常被称为 topologically associating domain（TAD）。方向性指数、insulation score、图分割和多尺度模型会给出不同的边界与层级；2012 年的哺乳动物研究把这种局部组织系统化为可比较的结构域。[^tads] TAD 的数量和边界取决于分辨率、深度、算法与阈值，不能把一套调用结果当作在每个细胞中边缘清晰的固定盒子。

在许多哺乳动物细胞中，cohesin 环挤出与相向 CTCF 位点参与形成一类边界和角峰；转录、Polycomb、区室化和核纤层等又能产生其他结构。不同物种、细胞周期和分化状态对这些机制的依赖不同。边界附近富集 CTCF 不表示所有边界由 CTCF 单独决定，删除一个边界元件造成邻域接触改变也需结合表达和救援（rescue）实验才能判断调控后果。

### 环、条纹和富集像素 { #loops-stripes }

环在矩阵中通常表现为相对于同距离局部背景显著增强的像素，条纹则显示一个锚点与一系列位置的接触富集。高深度 in situ Hi-C 在千碱基级分箱中解析了许多 CTCF／cohesin 相关环，为局部富集检测和相向基序模型提供了基础。[^kilobase-hic] loop caller 的结果受深度、bin 大小、局部背景和候选尺度影响；不同工具的“loop 数”不能脱离这些条件直接比较。

高频连接说明两段 DNA 在被采样群体和协议中更常形成可连接邻近，并不证明它们在每个细胞中持续接触、两段 DNA 直接结合，或该接触是转录的原因。增强子—启动子候选环应结合可及性、修饰、因子占据、表达和扰动。DNA FISH 或活细胞成像提供物理距离分布，CRISPR 删除锚点、急性降解结构蛋白和调控元件替换检验必要性；各方法的空间和时间平均不同，结果不必逐点完全一致。

### 三维模型是受约束的可能构象 { #three-dimensional-models }

接触矩阵可以约束聚合物模型或三维坐标重建，但一张群体矩阵通常对应许多可能构象。连接计数到距离的转换需要模型假设，缺失接触不等于两个位点必然相隔很远。群体平均模型适合显示总体组织原则，不应渲染成“这个细胞核的真实形状”；单细胞数据也常因极端稀疏而只能约束一部分距离。模型评价应说明输入接触、约束函数、随机初值、构象集合和与独立成像的验证。

## 条件比较与结构变异混杂 { #differential-epigenome-3d }

差异峰、差异甲基化和差异接触都应以独立样本为统计单位。测序深度、库复杂度和 signal-to-noise 改变时，一个样本可能普遍得到更多峰；仅比较两份阈值化峰列表会把检出能力当作生物差异。更稳健的路线是在统一区间或 bin 对上统计原始计数，建立适合其离散分布的模型，纳入批次、配对设计和细胞组成，并同时报告效应量与不确定性。

Hi-C 条件比较还需匹配基因组距离和矩阵可见性。一个 TAD 边界“变弱”可能来自局部接触重排，也可能来自覆盖下降或细胞群更异质；一个环在单组显著、另一组不显著，并不等于两组之间显著不同。正式差异检验应直接比较两组计数或富集强度，并检查重复一致性。

倒位、易位、扩增和缺失会重排参考坐标与接触机会。易位可产生强烈的异常 trans 图案，扩增会提高相关 bin 的边际计数，癌细胞中的 ecDNA 还具有不同于线性染色体的连接结构。若先按正常二倍体矩阵平衡，真实剂量可能被部分吸收为“偏倚”。结构变异与拷贝数应由匹配的基因组数据先行识别，再选择重建样本参考、分段校正或明确限制解释区域。

## 单细胞表观组学与三维组学 { #single-cell-epigenomics }

### 稀疏性改变分析单位 { #single-cell-sparsity }

单细胞 ATAC-seq 给每个细胞分配 barcode，形成 peak-by-cell 或 bin-by-cell 的稀疏矩阵。多数开放位点在一个细胞中没有被采到，零值通常表示“未观测”，不等于确定关闭。每细胞有效片段、TSS enrichment、核小体片段分布、线粒体比例和 doublet 率用于质控；低质量细胞与真实低可及细胞必须结合样本背景区分。早期 scATAC 研究已经显示群体平均下隐藏的细胞间调控变异。[^scatac]

TF–IDF 与 latent semantic indexing 常用于降低文库大小和普遍开放位点的影响，再进行邻域图、聚类和可视化。聚类结果依赖峰集合、降维维数、批次校正和分辨率，不自动等于天然细胞类型。细胞类型注释应结合标志基因附近可及性、基序活性、匹配 RNA 数据和已知谱系；由启动子和邻近峰汇总的 gene activity 只是表达潜力的近似，不能替代同一细胞的 RNA 测量。

差异可及性可先在细胞类型内按生物样本汇总为 pseudobulk，再以样本为重复检验，避免把同一个体的数千细胞当作独立生物学重复。轨迹和“chromatin potential”描述数据中的连续状态与预测方向，需要时间、谱系追踪或扰动确认真实命运顺序。

### 单细胞 Hi-C 与构象异质性 { #single-cell-hic }

单细胞 Hi-C 揭示群体接触图来自许多并不相同的染色体构象，早期研究已观察到细胞间大尺度结构差异。[^single-cell-hic] 每个二倍体细胞只有有限连接分子，接触矩阵远比 scATAC 更稀疏；单细胞中没有某条 loop 读段不能证明该环不存在。分析常聚合相似细胞、比较距离衰减、估计区室样模式或在低维空间聚类，而不是为每个细胞完整调用群体式 TAD 和 loops。

插补和深度学习可以平滑矩阵或预测高分辨率图案，但预测值包含模型先验，不能作为新测得的独立接触。细胞周期强烈改变三维结构，应在聚类和条件比较中识别。若根据同一稀疏矩阵先聚类再证明组间构象不同，需要通过留出数据、独立重复或成像避免循环论证。

### 同细胞多组学连接调控层次 { #single-cell-multiomics }

组合测定可以在同一细胞中共同读取 ATAC 与 RNA、DNA 甲基化与 Hi-C，或多个染色质标记。SHARE-seq 等方法以共享 barcode 获得同细胞可及性和表达，减少用不同细胞群匹配时的组成误差，并能提出峰—基因协变和状态先后假说。[^share-seq] 同细胞配对仍是相关证据：barcode 不能证明一个远端峰直接调控某个基因，稀疏性还会让两个模态具有不同缺失模式。

多模态整合应保留每种模态自身的质控和计数模型，再用细胞配对、共同邻域或显式潜变量连接。过强的联合嵌入可能迫使本来不同的信号看起来一致；以 RNA 标签监督 ATAC 注释时，也会降低发现真正表观先行状态的能力。最有解释力的设计把同细胞观测与独立样本、时间序列、遗传变异和干预实验结合起来。

## 从相关图谱走向调控证据 { #causal-interpretation }

表观与三维基因组图谱能够提出候选调控链：一个区域变得可及，获得 H3K27ac，与启动子接触，随后邻近基因表达升高。四种现象同时出现比任何单一轨道更有说服力，却仍可能共同响应上游转录因子，或者来自细胞组成变化。分析应先明确时间顺序、等位关系和细胞类型，再区分候选增强子、结构锚点与旁观标记。

遗传变异可提供自然扰动。若杂合 SNP 改变基序，并在同一细胞背景中产生等位特异可及性、结合、接触和表达，证据链比跨个体相关更紧；仍须校正参考比对偏倚和分相错误。CRISPR 删除元件、碱基编辑、CRISPRi／a、dCas9 表观编辑、degron 急性降解以及救援实验能分别检验序列、状态或蛋白的必要性与充分性。扰动范围、脱靶、细胞适应和邻近基因效应必须随结果报告。

可复现分析应保存样本表、实验对照、参考组装、软件与参数、过滤规则、原始计数、归一化因子、峰或分箱集合、统计设计和浏览器轨道。甲基化图还需转换率与修饰对象，富集图需抗体与批次，ATAC 需插入和片段 QC，Hi-C 需有效片段类型、矩阵分辨率、平衡权重和距离背景。只有从原始分子证据到最终状态标签的每一步都可追溯，跨实验整合才不会把不同观测模型误写成同一种“基因活性”。

## 参考资料与延伸阅读 { #references }

[^wgbs]: Lister R, Pelizzola M, Dowen RH, et al. Human DNA methylomes at base resolution show widespread epigenomic differences. *Nature*. 2009;462:315–322. [doi:10.1038/nature08514](https://doi.org/10.1038/nature08514).

[^oxbs]: Booth MJ, Branco MR, Ficz G, et al. Quantitative sequencing of 5-methylcytosine and 5-hydroxymethylcytosine at single-base resolution. *Science*. 2012;336(6083):934–937. [doi:10.1126/science.1220671](https://doi.org/10.1126/science.1220671).

[^emseq]: Vaisvila R, Ponnaluri VKC, Sun Z, et al. Enzymatic methyl sequencing detects DNA methylation at single-base resolution from picograms of DNA. *Genome Research*. 2021;31(7):1280–1289. [doi:10.1101/gr.266551.120](https://doi.org/10.1101/gr.266551.120).

[^macs]: Zhang Y, Liu T, Meyer CA, et al. Model-based analysis of ChIP-Seq (MACS). *Genome Biology*. 2008;9:R137. [doi:10.1186/gb-2008-9-9-r137](https://doi.org/10.1186/gb-2008-9-9-r137).

[^chip-guidelines]: Landt SG, Marinov GK, Kundaje A, et al. ChIP-seq guidelines and practices of the ENCODE and modENCODE consortia. *Genome Research*. 2012;22(9):1813–1831. [doi:10.1101/gr.136184.111](https://doi.org/10.1101/gr.136184.111).

[^cutrun]: Skene PJ, Henikoff S. An efficient targeted nuclease strategy for high-resolution mapping of DNA binding sites. *eLife*. 2017;6:e21856. [doi:10.7554/eLife.21856](https://doi.org/10.7554/eLife.21856).

[^cuttag]: Kaya-Okur HS, Wu SJ, Codomo CA, et al. CUT&Tag for efficient epigenomic profiling of small samples and single cells. *Nature Communications*. 2019;10:1930. [doi:10.1038/s41467-019-09982-5](https://doi.org/10.1038/s41467-019-09982-5).

[^atacseq]: Buenrostro JD, Giresi PG, Zaba LC, Chang HY, Greenleaf WJ. Transposition of native chromatin for fast and sensitive epigenomic profiling of open chromatin, DNA-binding proteins and nucleosome position. *Nature Methods*. 2013;10:1213–1218. [doi:10.1038/nmeth.2688](https://doi.org/10.1038/nmeth.2688).

[^omni-atac]: Corces MR, Trevino AE, Hamilton EG, et al. An improved ATAC-seq protocol reduces background and enables interrogation of frozen tissues. *Nature Methods*. 2017;14:959–962. [doi:10.1038/nmeth.4396](https://doi.org/10.1038/nmeth.4396).

[^chromhmm]: Ernst J, Kellis M. ChromHMM: automating chromatin-state discovery and characterization. *Nature Methods*. 2012;9:215–216. [doi:10.1038/nmeth.1906](https://doi.org/10.1038/nmeth.1906).

[^roadmap]: Roadmap Epigenomics Consortium. Integrative analysis of 111 reference human epigenomes. *Nature*. 2015;518:317–330. [doi:10.1038/nature14248](https://doi.org/10.1038/nature14248).

[^three-c]: Dekker J, Rippe K, Dekker M, Kleckner N. Capturing chromosome conformation. *Science*. 2002;295(5558):1306–1311. [doi:10.1126/science.1067799](https://doi.org/10.1126/science.1067799).

[^hic]: Lieberman-Aiden E, van Berkum NL, Williams L, et al. Comprehensive mapping of long-range interactions reveals folding principles of the human genome. *Science*. 2009;326(5950):289–293. [doi:10.1126/science.1181369](https://doi.org/10.1126/science.1181369).

[^microc]: Hsieh THS, Weiner A, Lajoie B, et al. Mapping nucleosome resolution chromosome folding in yeast by Micro-C. *Cell*. 2015;162(1):108–119. [doi:10.1016/j.cell.2015.05.048](https://doi.org/10.1016/j.cell.2015.05.048).

[^ice]: Imakaev M, Fudenberg G, McCord RP, et al. Iterative correction of Hi-C data reveals hallmarks of chromosome organization. *Nature Methods*. 2012;9:999–1003. [doi:10.1038/nmeth.2148](https://doi.org/10.1038/nmeth.2148).

[^tads]: Dixon JR, Selvaraj S, Yue F, et al. Topological domains in mammalian genomes identified by analysis of chromatin interactions. *Nature*. 2012;485:376–380. [doi:10.1038/nature11082](https://doi.org/10.1038/nature11082).

[^kilobase-hic]: Rao SSP, Huntley MH, Durand NC, et al. A 3D map of the human genome at kilobase resolution reveals principles of chromatin looping. *Cell*. 2014;159(7):1665–1680. [doi:10.1016/j.cell.2014.11.021](https://doi.org/10.1016/j.cell.2014.11.021).

[^scatac]: Buenrostro JD, Wu B, Litzenburger UM, et al. Single-cell chromatin accessibility reveals principles of regulatory variation. *Nature*. 2015;523:486–490. [doi:10.1038/nature14590](https://doi.org/10.1038/nature14590).

[^single-cell-hic]: Nagano T, Lubling Y, Stevens TJ, et al. Single-cell Hi-C reveals cell-to-cell variability in chromosome structure. *Nature*. 2013;502:59–64. [doi:10.1038/nature12593](https://doi.org/10.1038/nature12593).

[^share-seq]: Ma S, Zhang B, LaFave LM, et al. Chromatin potential identified by shared single-cell profiling of RNA and chromatin. *Cell*. 2020;183(4):1103–1116.e20. [doi:10.1016/j.cell.2020.09.056](https://doi.org/10.1016/j.cell.2020.09.056).
