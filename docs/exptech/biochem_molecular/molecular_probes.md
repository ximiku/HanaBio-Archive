# 核酸杂交、探针与分子互作检测

核酸实验中的“识别”有两条相互关联的路径。一条利用互补碱基配对，让带有标记的核酸探针找到样品中的靶序列；另一条把蛋白与核酸的结合、染色质片段的空间邻近或随机序列库中少数分子的选择优势转成可以分离和计数的信号。两条路径都依赖特异性，却回答不同问题：杂交阳性说明样品中存在能在给定条件下与探针配对的序列，迁移变化说明复合物改变了分子的物理行为，免疫富集说明目标抗体回收了相应复合物，近距离连接则记录群体中片段靠近并被捕获的频率。

本页沿着经典实验次序保留 Southern、Northern、菌落与噬菌斑杂交、EMSA、DNase I 足迹、DGGE、TGGE、SSCP 和 DHPLC，并把 ChIP、RIP、CLIP、3C、ATAC 与 SELEX 接到同一条证据链上。核酸样品制备和凝胶基础见[核酸提取、质量与电泳](nucleic_acid.md)，微阵列、CLIP 和三维基因组的计算分析分别见[转录组测量与 RNA-seq 分析](../../bioinfo/transcriptomics.md)和[表观基因组与三维基因组分析](../../bioinfo/epigenome_3d.md)。

## 实验问题与证据层级 { #measurement-question }

方法选择始于要判定的对象，而不是始于实验室现有的试剂盒。同一个“有信号”可以来自目标序列、交叉杂交、非特异吸附、抗体共同沉淀或连接背景；不同方法之间也不能仅按新旧排序，因为它们保留的信息不同。

| 实验问题 | 典型方法 | 直接读出 | 可以支持的结论 | 仍需补足的证据 |
| --- | --- | --- | --- | --- |
| 样品中是否有某段 DNA，限制片段多大 | Southern blot、斑点杂交 | 膜上特定位置的探针信号 | 互补序列存在及所在片段的表观大小 | 序列身份、拷贝数模型和限制图谱 |
| 某种 RNA 是否存在、长度和相对丰度如何 | Northern blot | 变性胶转膜后的条带位置和强度 | 目标 RNA 的表观长度、异构体模式和相对量 | 加样／转膜归一化、序列确认与绝对定量 |
| 文库中哪个克隆携带目标序列 | 菌落、噬菌斑或文库滤膜杂交 | 与原平板坐标对应的阳性斑点 | 候选克隆含有与探针互补的片段 | 挑取、复筛、酶切和测序 |
| 蛋白能否在体外结合某段核酸 | EMSA、DNase I 足迹、核酸亲和捕获 | 迁移率、受保护切割区或被捕获蛋白 | 体外结合、占据区域或候选结合蛋白 | 突变、竞争、身份和细胞内功能验证 |
| 某蛋白在细胞中与哪些 DNA／RNA 区域共存 | ChIP、RIP、CLIP | 免疫富集的核酸及其位置 | 抗体依赖的占据或复合物关联 | 直接性、动态性和调控功能 |
| 两个染色质位点是否经常邻近，哪些区域较易接近 | 3C 家族、ATAC | 嵌合连接产物或 Tn5 插入片段 | 群体平均邻近频率或染色质可及性 | 直接接触、单细胞共存和因果调控 |
| 同长度片段是否存在序列／构象差异 | DGGE、TGGE、SSCP、DHPLC | 梯度胶、非变性胶或色谱峰型改变 | 候选变异造成熔解或构象差异 | 确认性测序和变异解释 |
| 能否从巨大随机库中获得结合分子 | SELEX | 多轮后富集的核酸序列与结合性能 | 候选核酸适配体及其选择条件下的富集 | 独立合成、亲和力、特异性和应用条件验证 |

## 杂交、熔解与严紧性 { #hybridization-stringency }

杂交先使样品核酸成为可接近的单链，再让探针与互补靶序列退火。双链的稳定性来自碱基配对、碱基堆叠、离子环境和溶剂共同作用；探针长度、GC 比例、错配的数目与位置、盐浓度、温度以及甲酰胺等变性剂都会改变熔解温度和结合动力学。长探针可积累较多稳定作用，对局部错配较宽容；短寡核苷酸更容易把单个错配转成显著的稳定性差异，却也更容易受局部二级结构和端部错配位置影响。

“严紧性”描述给定杂交和洗涤条件对不完全配对双链的容忍程度。提高温度、降低盐浓度或加入适量变性剂通常会提高严紧性，使错配双链更易解离。严紧性过低会保留同源家族和重复序列造成的交叉杂交，过高则会连低丰度真靶标一并洗去。合适条件应由探针—靶标组成和实验目的决定：跨物种同源序列筛选常有意使用较宽松条件，等位特异寡核苷酸则需要让完全匹配与单错配的稳定性差落在可分辨窗口内。

杂交信号还受动力学控制。靶序列和探针必须扩散、相遇并形成足够寿命的双链；固定在膜或芯片上的靶标可能因折叠、表面拥挤和邻近分子而不可接近。预杂交与封闭剂用于占据膜上非特异吸附位点，未标记竞争核酸可减少探针对重复序列或常见载体序列的结合。杂交体积、探针有效浓度、混合、时间和膜面积因此都要记录，不能用“过夜”代替反应条件。

## 探针设计、标记与对照 { #probe-design-labeling }

探针可以是克隆 DNA 片段、PCR 产物、体外转录 RNA 或化学合成寡核苷酸。异源探针利用跨物种保守性寻找同源基因，cDNA 探针利用已表达序列寻找相应转录本或基因组克隆；当 cDNA 探针筛出基因组克隆时，内含子、启动子和远端调控区来自被筛到的基因组片段，探针本身并不含有这些序列。合成寡核苷酸适合已知短序列、连接点或等位差异，简并探针可由保守蛋白序列反推多个可能密码子，但复杂度升高会降低每一种有效探针的浓度。

设计时应把靶基因组或转录组版本写明，并检查探针的唯一性、重复序列、旁系同源基因、转录本异构体、GC 分布、低复杂度和自身二级结构。一个探针位于共有外显子时读取的是多个异构体的合量，跨越特异剪接连接点时才可能区分相应异构体。多条短探针组成的探针组能积累空间或表达信号，但每条探针仍有各自的效率和脱靶风险。

标记可直接连接到探针，也可先引入可被第二级试剂识别的基团。放射性同位素具有灵敏、线性范围较宽和历史方法成熟的优势，同时需要辐射许可、屏蔽、污染监测和废物管理；荧光基团可直接成像并支持多色检测，但会受光漂白、光谱串扰和标记密度影响；生物素或地高辛等半抗原常经亲和蛋白或抗体偶联的酶／荧光团间接显色，信号可被放大，也多出一层非特异结合和饱和来源。

一套可解释的杂交实验通常同时包含已知含靶标的阳性样品、已知不含靶标或相应敲除样品、无探针对照和与目标无关的探针。原位杂交还常设置正义链探针、竞争探针或第二个独立探针组；定量比较需要加样或细胞数基准、内参靶标和批次平衡。阴性结果只有在探针活性、转移／固定、检测系统和样品完整性均被阳性对照证明有效后，才可解释为低于该实验检出能力。

## 膜杂交与文库筛选 { #membrane-hybridization }

### Southern 与 Northern 核酸印迹 { #southern-northern }

Southern blot 先用限制性内切酶切割 DNA，经琼脂糖凝胶按长度分离，再在胶内使 DNA 变性，将片段转移到硝酸纤维素或尼龙膜并固定。探针杂交、严紧洗涤和显影之后，膜上的信号仍保留原凝胶的迁移坐标，因此能把“序列是否互补”与“互补序列位于多大片段”结合起来。Southern 1975 年的原始工作以放射性 RNA 探针检测转移到硝酸纤维素膜的限制片段，奠定了这一思路。[^southern-original]

转移可利用毛细作用、电转移或真空驱动。大片段从胶中迁出较慢，过强的酸性脱嘌呤又可能把 DNA 切得过短；碱变性、胶厚、膜方向、转移时间和固定方式共同决定回收。以限制片段信号推断拷贝数时，还要考虑酶切是否完全、探针内部是否有酶切位点、同源序列、杂合位点和基因组结构变异。一个样品多出一条带可以来自额外拷贝，也可以来自限制位点改变或部分酶切。

Northern blot 把 RNA 在变性条件下按长度分离后转膜杂交。甲醛、乙二醛等体系用于削弱 RNA 二级结构，使迁移更接近长度函数；Thomas 建立的经典转膜方法说明经变性的 RNA 可稳定结合硝酸纤维素并接受重复杂交。[^northern-original] Northern 的条带位置能区分某些转录本或加工中间体，保留了 qPCR 单个短扩增子没有的长度信息。总 RNA 上样量、rRNA 图样、膜染或经验证的参考 RNA 用于判断完整性和加样，但高丰度 rRNA 不是所有生理处理下都恒定的表达内参。

斑点和狭缝杂交把核酸直接点在膜上，省去长度分离，适合快速比较许多样品的目标总量；它失去了分子大小信息，也更难区分完整靶标与降解片段。DNA 探针印迹（Southwestern blot）和 RNA 探针印迹（Northwestern blot）则先按蛋白电泳并转膜，再分别用标记 DNA 或 RNA 探针寻找能结合核酸的复性蛋白。蛋白在 SDS–PAGE 后未必恢复天然折叠，探针阳性也可能来自普遍电荷吸附，因此需要竞争核酸、突变探针、蛋白身份确认和独立结合实验。

### 菌落、噬菌斑与表达文库筛选 { #library-screening }

菌落或噬菌斑筛选先用膜从主平板取得坐标对应的复制印迹，在膜上裂解细胞或病毒颗粒，使 DNA 变性并固定，再与探针杂交。显影后的阳性位置映射回保留的主平板，挑取候选菌落或噬菌斑进行第二轮低密度复筛。邻近克隆会在膜上混叠，原始阳性点不能直接当成纯克隆；每轮都应保留膜的方向标记和不对称定位点。

基因组文库可用同源或异源 DNA／RNA 探针寻找目标基因区域，cDNA 文库可用基因片段或寡核苷酸寻找表达产物。若蛋白抗原表位能在表达文库中正确产生，也可用抗体筛选，但表达框、折叠、修饰和宿主毒性都会造成漏检。无论采用哪种筛法，阳性克隆都须通过插入片段大小、酶切、PCR 和测序确认；探针只识别互补片段，不能证明整个克隆结构正确。

## 原位杂交与微阵列 { #in-situ-microarray }

原位杂交在固定细胞、组织或染色体上保留坐标。荧光原位杂交（FISH）以荧光探针显示染色体位点、拷贝数、重排或 RNA 的亚细胞位置；多条寡核苷酸探针可共同标记一条低丰度 RNA。固定和透化既要开放靶序列，又要保留空间结构；变性不足、探针不可达、组织自发荧光和切片厚度都会改变信号。空间样品制备、成像与共定位判断由[组织学、显微与成像定量](../cell/histology_imaging.md)承接，本页只保留探针杂交与对照逻辑。

微阵列把成千上万条已知探针固定到同一固相，以平行杂交读取荧光强度。它把单膜上的少数靶标扩展为“探针×样本”矩阵，却仍受探针饱和、交叉杂交、背景、染料效率和旧注释影响。双通道实验还应平衡染料或安排染料互换；平台、探针序列、样本标记、杂交、扫描和原始图像属于实验记录，背景校正、探针汇总、归一化和差异分析见[微阵列的探针、杂交与归一化](../../bioinfo/transcriptomics.md#microarray-analysis)。

## 体外蛋白—核酸结合 { #in-vitro-binding }

### EMSA 与竞争实验 { #emsa }

电泳迁移率变动分析（EMSA，也称 gel shift 或凝胶阻滞）让标记核酸在非变性胶中迁移。蛋白结合通常增大复合物并改变其电荷、形状和摩擦阻力，使结合态与游离态分开；多个离散慢带可能对应不同化学计量、构象或蛋白组合，拖尾则可能来自复合物在进胶或迁移中解离。EMSA 能以很少材料灵敏检测 DNA 或 RNA 结合，但“出现慢带”本身不识别蛋白，也不定位被结合的碱基。[^emsa-protocol]

未标记的同序列竞争探针应按浓度梯度削弱特异复合物，突变或无关竞争探针用于判断序列选择性；针对候选蛋白的抗体若使复合物进一步变慢或消失，可形成 supershift 或抗体扰动证据。纯化蛋白、细胞提取物和核内提取物各回答不同问题，后两者中的复合物可能包含多种蛋白。盐、pH、二价离子、非特异竞争核酸、甘油、温度、孵育时间、胶浓度和电泳温升必须保持一致。

在可逆结合达到平衡、探针浓度相对合适且各条带能代表游离与结合物种时，可由结合分数随蛋白浓度的曲线估计表观解离常数。总蛋白浓度不一定等于有活性的自由蛋白浓度，胶内解离和多聚结合也会破坏简单一对一模型，因此单个泳道或“半数移动时的上样浓度”不能自动给出可靠 $K_d$。

### DNase I 足迹与核酸亲和捕获 { #footprint-affinity }

DNase I 足迹先在同一端标记一条 DNA 链，令蛋白与 DNA 结合，再以限制性少量 DNase I 切割，使多数分子平均只发生一次切断。变性高分辨电泳把切点排列成梯状图；与无蛋白对照相比，蛋白遮蔽的区域缺少条带，边界附近也可能出现构象改变造成的超敏切点。Galas 与 Schmitz 的经典实验正是用这一差分图样定位 lac 阻遏蛋白保护的 DNA 区域。[^footprint-original]

足迹区给出受保护范围，不等于每一个缺带核苷酸都与蛋白直接接触。蛋白聚集、DNA 弯曲、切割序列偏好和消化程度都会改变条纹；蛋白过多时整条模板普遍受保护，蛋白过少时差异又会淹没在切割噪声中。必须并列无蛋白梯、化学测序或尺寸标尺和多个蛋白浓度。足迹证明占据及其边界，不能单独证明该序列在细胞内是活跃启动子或增强子。

DNA／RNA affinity chromatography 或 pull-down 把特定核酸固定在珠子上，以目标序列、突变序列和空珠捕获并比较结合蛋白。质谱可以识别富集候选者，但高丰度、带强正电或黏附珠子的蛋白容易形成背景；盐梯度洗脱只反映在当前缓冲条件下的保留强弱。反向验证应使用独立制备的蛋白、EMSA／足迹、免疫检测和功能扰动，把“被拉下”推进为特异结合与生物学作用。

## 细胞内占据与 RNA—蛋白复合物 { #cellular-occupancy }

### ChIP { #chip }

染色质免疫沉淀（ChIP）常以甲醛固定细胞中的蛋白—DNA 和蛋白—蛋白邻近关系，剪切染色质后用目标蛋白或组蛋白修饰的抗体富集复合物，再解除交联并用 qPCR、芯片或测序定位 DNA。交联时间影响回收与背景，超声或酶切决定片段分辨率，抗体特异性和表位可接近性决定富集对象。ChIP 峰表示某一区域相对输入和对照富集；由于固定可通过蛋白复合物间接捕获 DNA，它通常被解释为细胞群体中的占据或关联，而不是蛋白与该碱基直接接触。

input DNA 记录剪切和基因组可回收背景，非特异 IgG 或无标签样品检查免疫与珠子背景，敲除／降解目标或使用经过验证的表位标签可检验抗体依赖性。生物学重复、抗体验证、片段分布和对照深度是 ChIP-seq 质量的核心；ENCODE 指南特别指出剪切并不均匀，缺少适当对照会把这种背景误认成富集。[^chip-guidelines] 条件间全局占据变化时，外源 spike-in 可提供额外标尺，但其加入时点、跨物种抗体反应和归一化假设必须报告。

### RIP、CLIP 及其衍生方法 { #rip-clip }

RNA immunoprecipitation（RIP）在保持核糖核蛋白复合物的条件下，用抗体沉淀目标 RNA-binding protein 及其伴随 RNA。它适合回答哪些 RNA 与目标复合物共同存在，也保留间接关联；裂解后复合物重排、RNA 丰度、抗体背景和 RNase 污染都会影响结果。input、IgG、目标缺失样品和独立 RNA 检测用于确认富集，不能因某 RNA 在 RIP 中出现便指定直接结合位点。

cross-linking and immunoprecipitation（CLIP）先用紫外光在活细胞或组织中把直接接近的蛋白与 RNA 共价交联，再进行有限 RNase 消化、严格免疫沉淀、复合物分离、蛋白消化、接头连接、逆转录和测序。Ule 等最初以这一途径回收小鼠脑中 Nova 蛋白的 RNA 标签。[^clip-original] 紫外交联对不同碱基、氨基酸和结构的效率并不相等，RNase 强度又决定片段边界，所以 CLIP 的单核苷酸外观也包含化学和建库偏倚。

iCLIP 利用反转录常在交联残基处停止的信息定位结合位点；PAR-CLIP 让新生 RNA 掺入 4-thiouridine 等光反应核苷，再以较长波长紫外光交联，并利用特征性碱基转换辅助定位，但只适用于能够代谢掺入这些类似物的系统。eCLIP 改进接头、重复识别和成对 size-matched input 对照，使文库背景更易估计。[^eclip] 这些变体提高了特定步骤的效率或分辨率，没有消除抗体、交联、RNase、连接、逆转录和表达量偏倚。峰调用、转录本注释和功能整合见[RNA—蛋白结合图谱](../../bioinfo/transcriptomics.md#rna-protein-binding)。

## 染色质邻近与可及性 { #chromatin-contact-accessibility }

### 3C 家族 { #three-c-family }

chromosome conformation capture（3C）先固定染色质，切割 DNA，在促进同一交联复合环境内近邻片段连接的条件下生成嵌合 DNA，解除交联后用特异 PCR 检测候选片段对。原始 3C 将两个位点在细胞群体中的相对接近频率转成可定量连接产物；4C 从一个 viewpoint 扫描全基因组，5C 在选定区域检测许多片段对，Hi-C 则以成对测序扩展到全基因组接触矩阵。[^three-c-original]

连接频率同时受真实空间邻近、固定、酶切、片段长度、连接、PCR、可比对性和基因组距离影响。相邻线性位点天然较常碰撞，细胞群体中的一个高频信号也不说明每个细胞都形成同一条稳定环。3C 家族测得的是被该化学流程捕获的群体邻近频率，不能单独证明两个 DNA 分子直接接触、某个蛋白位于接点或该接触驱动转录。实验操作之外的有效片段对、矩阵归一化和结构特征解释见[3C 家族与 Hi-C 分析](../../bioinfo/epigenome_3d.md#chromosome-conformation-capture)。

### ATAC-seq { #atac-seq }

ATAC-seq 以装载测序接头的 Tn5 转座酶接近细胞核中的 DNA，并在插入时同时切割和加接头，即 tagmentation。核小体缺失或结合较松的区域通常更易插入，较长片段还可携带单核小体或多核小体周期信息。Buenrostro 等建立的原始方法把低细胞数样品的可及染色质快速转成测序文库。[^atac-original]

细胞或细胞核完整性、去污剂、反应时间、Tn5 批次、输入量和 PCR 循环都会改变文库。线粒体 DNA 高拷贝且易接近，常占用大量读段；坏死细胞、过度裂解和细胞类型比例变化也可制造表观可及性差异。开放区域表示 Tn5 在给定样品中较易进入，不自动等于增强子活跃；区域中的 motif 只说明存在候选序列，不证明相应转录因子已结合。条件比较和峰／footprint 分析必须回到[染色质可及性与核小体位置](../../bioinfo/epigenome_3d.md#chromatin-accessibility)的统计边界。

## 构象与熔解差异筛查 { #conformation-variant-scanning }

测序普及之前，许多变异先由分子构象或部分熔解造成的迁移差异发现；这些方法现在仍能帮助理解“一处碱基改变如何放大为可见物性”。它们是筛查法：异常图样提示样品与参照不同，最终序列和临床／生物学意义仍须由确认性测序及独立解释给出。

denaturing gradient gel electrophoresis（DGGE）让等长双链 DNA 在尿素／甲酰胺等变性剂梯度中迁移。片段进入其最低熔解结构域对应条件后会部分解链，迁移显著减慢；序列差异改变局部熔解稳定性，从而改变停止位置。temperature gradient gel electrophoresis（TGGE）用温度梯度完成同一逻辑。GC clamp 把一段高 GC 序列加到扩增子一端，使目标区域在片段完全分开之前经历可检测的部分熔解，扩大可扫描范围。单碱基差异能够改变 DGGE 迁移，但每个变异的分辨率依赖熔解结构域和梯度条件。[^dgge]

single-strand conformation polymorphism（SSCP）将 PCR 产物变性为单链，在非变性聚丙烯酰胺胶中分离。单链核酸按序列形成分子内结构，同长度分子也可能因构象不同而迁移不同；温度、胶组成、离子和片段长度会改变构象集合，所以同一变异在某套条件下可能不可见。Orita 等的原始研究即以中性 PAGE 上的单链迁移变化检测多态性。[^sscp]

denaturing high-performance liquid chromatography（DHPLC）先把样品与参照扩增子混合、变性并复性，使杂合样品形成同源双链和含错配的异源双链；在部分变性温度下，异源双链通常较早从疏水固定相洗脱，形成异常峰型。柱温偏离目标熔解窗口、PCR 非特异产物和变异比例过低都会造成漏检或复杂峰。DGGE、TGGE、SSCP 和 DHPLC 都不从图样直接给出碱基身份，也不能把“未见异常”解释为整段序列完全正常。

## SELEX 与核酸适配体 { #selex-aptamers }

systematic evolution of ligands by exponential enrichment（SELEX）从含固定引物区和随机区的巨大单链 DNA 或 RNA 库开始，使库与固定靶标、溶液靶标、细胞或其他选择对象接触，分离结合与未结合分子，扩增被保留的序列，再把产物带入下一轮。RNA SELEX 还包含逆转录和体外转录。反复选择—分离—扩增使少数在当前条件下具有保留优势的序列逐轮富集；Tuerk 与 Gold 以这种循环获得了结合 T4 DNA polymerase 的 RNA 配体。[^selex-original]

选择压力来自靶标呈递方式、缓冲液、温度、竞争物、洗涤和分离阈值。固定到珠子上的靶标可能暴露非天然表面，富集序列也可能结合珠子、连接臂或标签；counter-selection 用空载体、相似分子或非靶细胞去除这些序列。PCR、逆转录、转录和二级结构恢复效率会让扩增快的序列冒充结合强的序列，因此应保存各轮样品、监测库复杂度，并在独立合成候选后重新测量亲和力和特异性。

核酸适配体与单克隆抗体属于不同分子平台，不能用一张无条件的“适配体全面优于抗体”表概括。DNA／RNA 候选可由体外循环扩增并进行多种化学修饰，抗体则依赖 B-cell／hybridoma 或重组展示与表达体系；适配体的折叠、核酸酶稳定性和靶标呈递可能限制应用，抗体的表位、构象依赖、批次与表达也需验证。有毒或低免疫原性靶标有时更适合体外选择，但并非所有靶标都能在纯化或固定后保持天然构象。两者都必须在实际基质中测亲和力、选择性、稳定性和非特异结合，制造路线和用途决定哪一种更合适。

## 故障定位与结果报告 { #troubleshooting-reporting }

| 观察 | 优先检查 | 不能直接下的结论 |
| --- | --- | --- |
| 杂交背景遍布整膜 | 探针浓度、封闭、洗涤严紧性、膜是否干污、重复序列和检测试剂 | 不能只凭提高洗涤温度认定问题已解决；真靶标也可能同时丢失 |
| 阳性对照有信号而样品全阴性 | 样品完整性、转移方向、靶标丰度、探针覆盖和等位差异 | 只能说明低于当前检出能力，不能证明绝对不存在 |
| Southern／Northern 条带大小异常 | ladder、变性、酶切、RNA 完整性、转移、剪接或多聚腺苷酸化 | 不能在排除部分酶切和降解前宣称出现新异构体 |
| EMSA 多条慢带或拖尾 | 蛋白纯度、化学计量、非特异竞争、复合物稳定性和胶温 | 慢带数不等于结合蛋白种类数 |
| 足迹区过宽或整条梯子消失 | 蛋白过量、DNase I 剂量、模板完整性和反应离子 | 广泛保护不等于每个碱基都被直接识别 |
| ChIP／CLIP 富集高但重复不一致 | 抗体、交联、片段化、输入、PCR 重复、样品状态与批次 | 单次高峰不能代替生物学重复和对照 |
| 3C／Hi-C 候选接触很强 | 酶切与引物效率、距离背景、CNV、重复序列和随机连接 | 接触频率不能单独证明直接结合或调控因果 |
| ATAC 文库线粒体读段高、片段谱异常 | 核提取、细胞死亡、Tn5 条件、输入和扩增 | 峰少不自动说明全基因组关闭 |
| DGGE／SSCP／DHPLC 出现异常图样 | PCR 纯度、梯度／温度、参照混合和重复性 | 异常峰或带不能指定变异碱基或致病性 |
| SELEX 少数序列迅速占优 | 空珠选择、扩增偏倚、靶标构象、库污染和跨轮携带 | 富集倍数不等于低 $K_d$ 或高应用特异性 |

结果报告至少应包括样品来源与处理、目标分子、探针序列或可追溯编号、参考基因组／转录本版本、标记方法、探针比活性或浓度、杂交和洗涤条件、膜与固定方式、曝光／扫描设置、完整原图及未裁剪泳道。结合实验还需记录蛋白来源和有效浓度、缓冲液、竞争物、孵育、电泳或消化条件；免疫富集实验记录抗体、批号、验证、交联、片段分布、input／IgG／目标缺失对照和重复；3C、ATAC、CLIP 与 SELEX 文库则保留分离、接头、扩增、批次及关键过程质量指标。

结论应紧贴直接读出：写成“在这些严紧条件下与探针杂交”“在体外形成可竞争的迁移复合物”“在 ChIP 中相对 input 富集”“在群体 3C 文库中接触频率升高”或“在该轮选择条件下富集”。这类限定不是削弱结果，而是给后续测序、突变、功能扰动和独立方法留下清楚的验证接口。

## 参考资料与延伸阅读 { #references }

- Southern, E. M. [Detection of specific sequences among DNA fragments separated by gel electrophoresis](https://pubmed.ncbi.nlm.nih.gov/1195397/). *Journal of Molecular Biology* 98, 503–517 (1975).
- Hellman, L. M. & Fried, M. G. [Electrophoretic mobility shift assay for detecting protein–nucleic acid interactions](https://www.nature.com/articles/nprot.2007.249). *Nature Protocols* 2, 1849–1861 (2007).
- Landt, S. G. et al. [ChIP-seq guidelines and practices of the ENCODE and modENCODE consortia](https://pmc.ncbi.nlm.nih.gov/articles/PMC3431496/). *Genome Research* 22, 1813–1831 (2012).
- Ule, J. et al. [CLIP identifies Nova-regulated RNA networks in the brain](https://pubmed.ncbi.nlm.nih.gov/14615540/). *Science* 302, 1212–1215 (2003).
- Dekker, J. et al. [Capturing chromosome conformation](https://pubmed.ncbi.nlm.nih.gov/11847345/). *Science* 295, 1306–1311 (2002).
- Buenrostro, J. D. et al. [Transposition of native chromatin for fast and sensitive epigenomic profiling](https://www.nature.com/articles/nmeth.2688). *Nature Methods* 10, 1213–1218 (2013).
- Tuerk, C. & Gold, L. [Systematic evolution of ligands by exponential enrichment](https://pubmed.ncbi.nlm.nih.gov/2200121/). *Science* 249, 505–510 (1990).

[^southern-original]: Southern, E. M. [Detection of specific sequences among DNA fragments separated by gel electrophoresis](https://pubmed.ncbi.nlm.nih.gov/1195397/). *Journal of Molecular Biology* 98, 503–517 (1975), doi:10.1016/S0022-2836(75)80083-0。
[^northern-original]: Thomas, P. S. [Hybridization of denatured RNA and small DNA fragments transferred to nitrocellulose](https://www.pnas.org/doi/10.1073/pnas.77.9.5201). *Proceedings of the National Academy of Sciences USA* 77, 5201–5205 (1980)。
[^emsa-protocol]: Hellman, L. M. & Fried, M. G. [Electrophoretic mobility shift assay for detecting protein–nucleic acid interactions](https://www.nature.com/articles/nprot.2007.249). *Nature Protocols* 2, 1849–1861 (2007), doi:10.1038/nprot.2007.249。
[^footprint-original]: Galas, D. J. & Schmitz, A. [DNAase footprinting: a simple method for the detection of protein-DNA binding specificity](https://academic.oup.com/nar/article/5/9/3157/2380868). *Nucleic Acids Research* 5, 3157–3170 (1978), doi:10.1093/nar/5.9.3157。
[^chip-guidelines]: Landt, S. G. et al. [ChIP-seq guidelines and practices of the ENCODE and modENCODE consortia](https://pmc.ncbi.nlm.nih.gov/articles/PMC3431496/). *Genome Research* 22, 1813–1831 (2012), doi:10.1101/gr.136184.111。正文据此保留抗体验证、重复、input／对照和片段化背景的证据边界。
[^clip-original]: Ule, J. et al. [CLIP identifies Nova-regulated RNA networks in the brain](https://pubmed.ncbi.nlm.nih.gov/14615540/). *Science* 302, 1212–1215 (2003), doi:10.1126/science.1090095。
[^eclip]: Van Nostrand, E. L. et al. [Robust transcriptome-wide discovery of RNA-binding protein binding sites with enhanced CLIP](https://pubmed.ncbi.nlm.nih.gov/27018577/). *Nature Methods* 13, 508–514 (2016), doi:10.1038/nmeth.3810。
[^three-c-original]: Dekker, J. et al. [Capturing chromosome conformation](https://pubmed.ncbi.nlm.nih.gov/11847345/). *Science* 295, 1306–1311 (2002), doi:10.1126/science.1067799；实验控制的系统讨论见 Dekker, [The three ‘C’s of chromosome conformation capture](https://www.nature.com/articles/nmeth823). *Nature Methods* 3, 17–21 (2006)。
[^atac-original]: Buenrostro, J. D. et al. [Transposition of native chromatin for fast and sensitive epigenomic profiling of open chromatin, DNA-binding proteins and nucleosome position](https://www.nature.com/articles/nmeth.2688). *Nature Methods* 10, 1213–1218 (2013), doi:10.1038/nmeth.2688。
[^dgge]: Noll, W. W. & Collins, M. [Detection of human DNA polymorphisms with a simplified denaturing gradient gel electrophoresis technique](https://pubmed.ncbi.nlm.nih.gov/2883652/). *Proceedings of the National Academy of Sciences USA* 84, 3339–3343 (1987), doi:10.1073/pnas.84.10.3339；Collins, M. & Myers, R. M. [Alterations in DNA helix stability due to base modifications can be evaluated using DGGE](https://pubmed.ncbi.nlm.nih.gov/3430628/). *Journal of Molecular Biology* 198, 737–744 (1987)。
[^sscp]: Orita, M. et al. [Detection of polymorphisms of human DNA by gel electrophoresis as single-strand conformation polymorphisms](https://pubmed.ncbi.nlm.nih.gov/2565038/). *Proceedings of the National Academy of Sciences USA* 86, 2766–2770 (1989), doi:10.1073/pnas.86.8.2766。
[^selex-original]: Tuerk, C. & Gold, L. [Systematic evolution of ligands by exponential enrichment: RNA ligands to bacteriophage T4 DNA polymerase](https://pubmed.ncbi.nlm.nih.gov/2200121/). *Science* 249, 505–510 (1990), doi:10.1126/science.2200121。
