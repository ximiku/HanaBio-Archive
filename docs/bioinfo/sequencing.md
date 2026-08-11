# 测序技术、读段与质量控制

测序仪并不直接交付“基因组”或“转录组”。它先让一批核酸分子经过文库构建和平台检测，把荧光、pH 或离子电流等物理信号转换为碱基序列，再为每个碱基或整条读段估计可信度。分析者得到的读段（read）只是被仪器实际观察到的一段分子记录；参考基因组上的比对、转录本丰度和变异位点，都是在这些记录之上继续推断的结果。

读段的长度、数量和质量并非三个可以互换的数字。它们由样品完整性、文库选择、扩增方式、检测化学、仪器状态和碱基判读模型共同决定。短读长平台可以用大量独立分子提供深度和统计效率，长读长平台可以跨过重复、异构体和结构变异；单分子技术又分为观察聚合酶合成和观察核酸穿孔两条不同路线。因而，比笼统地排列“第几代测序”更有解释力的做法，是追踪每个平台从分子到信号、从信号到读段的具体链条。[^sequencing-platform-review]

## 从样品分子到读段 { #molecule-to-read }

一次测序首先定义“哪些分子有机会被看到”。基因组 DNA 可以随机片段化，外显子组需要先富集目标区，常规 RNA-seq 往往先完成 RNA 选择和逆转录，扩增子、RAD-seq、CLIP-seq 与亚硫酸氢盐测序又各自选择特定分子或改变其化学状态。提取、片段化、末端修复、连接和扩增属于实验流程，具体操作见[核酸提取、质量与电泳](../exptech/biochem_molecular/nucleic_acid.md)及[扩增、克隆与基因编辑](../exptech/biochem_molecular/amplification_cloning.md)；生物信息学在接收数据时仍须知道这些步骤，因为文库选择已经决定了可观察范围和偏倚来源。

接头（adapter）是连接在插入片段两端的已知序列。它可以提供测序引物结合位点、固定或捕获分子的结构，也可以携带 index／barcode，把同一次运行中的多个文库重新分回样本。barcode 只是一个广义名称；平台 index、细胞 barcode、空间 barcode 和分子 barcode 的对象并不相同。唯一分子标识符（UMI）在扩增前标记原始分子，使后续分析能够区分“同一分子的扩增副本”和“碰巧具有相同序列的独立分子”，但 UMI 自身也会发生测序错误和碰撞，需要按实验设计校正。

插入片段（insert）是接头之间来自样品的部分，读段长度（read length）是从一端实际判读的碱基数，片段长度（fragment length）则包括两端读段之间可能未被读到的区域。双端测序（paired-end）从同一插入片段两端分别产生 R1 和 R2；两条读段的方向、间距和共同分子身份能帮助定位重复区、识别异常连接并估计片段长度。双端测序不是两个独立生物重复，R1 与 R2 也不能按行号以外的任意顺序重新配对。

这条生成链至少应保留 sample、library、lane／flow cell、run、read group 和文件之间的对应关系。合并不同 lane 可以增加同一文库的数据量，合并不同 library 却会混合不同扩增史；如果只在文件名中保存这些关系，重命名和归档之后便很难恢复。研究对象、BioSample、Experiment、Run 与文件的档案关系见[生物数据、格式与数据库](data_databases.md)，软件、参数和运行环境则应进入[命令行、工作流与可重复研究](workflows.md)所述的运行清单。

## 经典读序与片段分离 { #classical-sequencing }

### 链终止测序 { #sanger-sequencing }

Sanger、Nicklen 和 Coulson 在 1977 年发表的链终止法让 DNA 聚合酶从已知引物延伸模板，并在反应中掺入缺少 3′-OH 的双脱氧核苷三磷酸（ddNTP）。一旦 ddNTP 被接入，新形成的 3′ 端不能再生成下一条磷酸二酯键，于是反应产生一组终止于不同位置的片段。早期方法把四种终止反应分别进行，经变性聚丙烯酰胺凝胶和放射自显影按长度读序；荧光染料、循环测序和毛细管电泳后来把四类终止片段置于同一分离通道，并由峰图完成自动碱基判读。[^sanger-chain-termination]

一条 Sanger 峰图来自一组同起点、不同终止位置的扩增产物，而不是逐个观察一条模板分子。峰重叠可提示混合模板或杂合位点，信号在引物附近尚未充分分离、在远端又会逐渐展宽，因此可用区间应依据峰形和质量值确定，不能用固定读长代替样本级检查。它至今仍适合质粒、扩增子和少量候选位点的核验，也常用于验证高通量结果；这一用途依赖的是明确靶标和可人工复核的电泳峰图，并不意味着它对所有变异类型都是独立金标准。

Maxam–Gilbert 法在同一时期通过碱基选择性的化学修饰与链断裂生成长度梯度，再由凝胶读出序列。它不依赖 DNA 聚合酶，却需要放射性标记和具有危险性的化学试剂，操作复杂，后来没有成为常规自动测序主线。保留这条方法史有助于理解一个共同原理：无论片段由酶促终止还是化学断裂产生，只要末端类别已知，长度有序的片段集合就能恢复序列。[^maxam-gilbert]

### 同系层析与早期核酸指纹 { #homochromatography }

更早的 RNA 和 DNA 读序还依赖 oligonucleotide fingerprinting。局部酶切或受控降解产生带放射性标记的寡核苷酸，先经电泳分离，再在 DEAE-纤维素薄层上由未标记寡核苷酸混合物（homomix）竞争置换；片段的电荷、长度和组成共同影响迁移位置。这种二维分离称为 homochromatography，可译作同系层析或同系色谱。它帮助研究者分离长寡核苷酸、比较局部降解产物，并参与早期 RNA 指纹和 DNA 序列测定。[^homochromatography-history]

同系层析提供的是片段分离与人工推序证据，并非现代仪器中“一个信号对应一个碱基”的电子读出。原始方法中同位素标记、酶切、薄层分离和自显影的细节属于实验方法史；在这里保留其分析逻辑，是为了说明核酸测序长期依赖“产生可解释片段—分离—重建顺序”这一思想，而不是把它列为当前高通量平台。

## 大规模并行短读长测序 { #massively-parallel-short-reads }

Illumina sequencing by synthesis（SBS）先把带接头的单链文库固定在流动槽表面，再按平台采用的流动槽结构成簇。非图案化流动槽上的模板反复弯折、延伸和变性，以桥式扩增形成由同一模板衍生的 cluster；图案化流动槽则把模板限制在有序纳米孔中，以排他性扩增（exclusion amplification，ExAmp）近乎同时完成分子落位与扩增，降低多个文库分子共同形成一个 cluster 的机会。每个循环随后加入带荧光标记的可逆终止核苷酸；成像记录每个 cluster 本轮的颜色，去除荧光和阻断基团后进入下一轮。index read 用同一循环化学读取样本标识，paired-end 流程则在一端读完后重建模板方向并读取另一端。[^illumina-sbs]

一个 cluster 中的分子理想上同步延伸。部分分子提前或滞后会造成 phasing／prephasing，多个循环后信号混合，末端碱基质量常随之下降。低多样性文库在早期循环中呈现近乎相同的碱基组成，也会妨碍颜色矩阵和 cluster 定位；过密 cluster、成像异常、接头二聚体以及 index 误分配则产生不同层次的问题。Illumina 的主要原始错误通常表现为碱基替换，但具体错误谱随仪器、试剂、运行与碱基判读软件而变，不能用一个跨平台固定错误率概括。

短读段易于提供高深度覆盖，适合多数计数与小变异任务，遇到长重复、高度相似的旁系区域、复杂结构变异或全长转录本时却可能缺少跨越信息。双端测序和较长插入片段能增加片段约束，但两端仍无法直接给出中间未测序部分的碱基。后续比对或组装会把这种信息不足表达为多重比对、断点不确定或图结构分支；具体处理将在[序列比对与数据库搜索](sequence_analysis.md)与[基因组组装、变异与比较分析](genome_analysis.md)展开。

### 并行平台的历史分支 { #parallel-platform-history }

早期大规模并行平台使用过多种信号化学，它们留下的数据仍见于公共档案，也解释了许多旧软件和格式选项。

| 平台路线 | 模板与检测信号 | 典型误差来源与分析遗产 |
| --- | --- | --- |
| Roche／454 焦磷酸测序 | 微珠上的乳液 PCR 模板；依次加入核苷酸，检测掺入反应释放的焦磷酸所驱动的发光 | 同聚物长度由连续信号强度估计，长串相同碱基较难定量；平台已停产，但旧读段和早期宏基因组研究仍需按其误差谱解释 |
| SOLiD 连接测序 | 微珠模板；荧光寡核苷酸探针反复连接，以相邻二碱基关系形成 color space | 一个颜色变化可牵连相邻碱基解释，原始 color-space 数据不宜先粗暴转换再丢弃；平台谱系已退出常规新项目 |
| Ion Torrent 半导体测序 | 微珠模板；依次加入天然核苷酸，由半导体传感器检测聚合时释放的 H$^+$ | 不使用荧光成像，但同聚物仍依赖信号幅度估计；它是半导体 SBS，不是纳米孔测序[^ion-torrent] |
| sequencing by hybridization | 固定大量已知寡核苷酸探针，依据样品与探针的杂交图样推断局部序列 | 杂交信号受错配、重复与探针设计限制；芯片在分型和表达测量中曾很重要，却不是当前逐碱基高通量测序的通用替代 |

把这些路线称为“第二代”可以提供时代背景，却会掩盖连接、合成、光学和半导体检测之间的差异。分析旧数据时，平台名称、试剂版本、single-end／paired-end、原始颜色或电压信号是否保留，比代际标签更能决定可用的质量模型。

## 单分子长读长测序 { #single-molecule-long-reads }

### PacBio SMRT 与循环一致序列 { #pacbio-smrt-hifi }

PacBio single-molecule real-time（SMRT）测序把单个 DNA 聚合酶—模板复合物置于 zero-mode waveguide（ZMW）底部。ZMW 限制有效照明体积，使检测器能够观察聚合酶掺入带磷酸端荧光标记核苷酸时释放的光脉冲。它测量的是聚合反应，不让 DNA 穿过孔道，也不通过电泳电流判断碱基。[^pacbio-hifi]

SMRTbell 文库用发夹接头把双链插入片段闭合成环。聚合酶可以多次绕过同一插入片段，连续 polymerase read 经接头识别拆成多次 subread，再把同一原始分子的重复观察合成为 circular consensus sequence（CCS）；达到相应质量标准的长 CCS 通常称 HiFi read。重复观察可以把随机错误压低，同时保留一条读段跨越较长结构的能力。读段是否形成 HiFi 共识、获得多少次有效 passes，取决于插入长度、聚合酶有效读取长度和信号质量，不能把所有 PacBio 原始数据都直接称为 HiFi。[^ccs-hifi]

SMRT 记录还包含核苷酸掺入的时间动力学。使用未扩增的 native DNA、适当化学版本和经过验证的模型时，动力学变化可以支持某些碱基修饰的判读；可识别的修饰类型、序列语境和置信度依赖训练模型与覆盖条件。PCR 文库会复制碱基序列，却通常不保留原模板上的共价修饰，因此“平台可以检测修饰”不能脱离文库制备来陈述。

### Oxford Nanopore 与离子电流 { #nanopore-sequencing }

Oxford Nanopore 的流动槽（flow cell）在电阻膜中排列蛋白纳米孔，孔两侧电位差驱动离子电流。带接头的 DNA 或 RNA 由马达蛋白（motor protein）控制通过孔道，孔内同时占据的一组相邻核苷酸改变电流；仪器记录连续的原始信号（raw signal，常形容为 squiggle），碱基判读器（basecaller）再用统计或神经网络模型把信号转换成序列。这里不存在“外切酶逐个切下碱基再逐个识别”的常规测序步骤，一次电流状态也不是只由一个孤立碱基决定。[^nanopore-principle]

纳米孔读长主要受进入孔道的分子长度和样品完整性限制，因而可以跨越长重复、结构变异、单倍型和全长异构体。逐分子误差具有碱基判读模型和序列语境依赖性；孔蛋白、试剂、运行软件与碱基判读器更新都会改变结果。数据交付时应记录这些版本，并区分原始信号、完成碱基判读的读段、单链读段以及由互补链或多分子信息形成的共识。

native DNA 的电流信号可以同时携带某些碱基修饰信息，direct RNA 流程则让天然 RNA 分子通过孔道，避免先把所有信号压缩为 cDNA 序列。两种能力都需要相应文库、孔型、basecaller／modification model 和验证数据；修饰引起的信号差异可能与相邻序列、RNA 结构和其他化学变化混杂，direct RNA 的覆盖与定量也有明显方向性和序列偏倚。它们提供额外证据维度，并不自动给出无歧义的修饰图谱或无偏表达量。[^nanopore-direct-rna]

短读长与长读长并非固定的质量等级。短读段较高的分子计数和成熟误差模型适合深度、低频事件及成本受限的大队列；长读段的跨越信息适合从头组装、结构变异、相位和全长转录本；HiFi、纳米孔和短读段之间又有不同的长度、信号与系统误差。混合设计可以让长读段建立结构骨架、短读段提供额外深度，是否真正增益仍应由研究问题、参考质量、样本量和下游算法验证。

## 碱基判读、FASTQ 与 Phred 质量值 { #fastq-phred }

碱基判读（basecalling）是从仪器信号估计碱基序列的模型步骤。Sanger 的输入是毛细管峰图，Illumina 使用循环荧光图像，PacBio 解释 ZMW 光脉冲，纳米孔则解释连续电流。相同的原始信号在新的校准或模型下可能得到不同序列和质量值；保存许可与存储条件允许时，关键项目应保留足以重新判读的原始信号，并记录碱基判读器名称、版本、模型和参数。

FASTQ 把一条读段的序列和逐碱基质量值放在同一条记录中。现代常见写法以四行组成一条记录：

```text
@read_001
ACGTTGCA
+
IIHGFEDC
```

第一行以 `@` 开始并保存读段标识，第二行是序列，第三行以 `+` 开始，第四行用字符编码与序列等长的质量值。双端数据通常分为 R1、R2 两个文件，记录顺序和读段名必须保持对应。FASTQ 是历史形成的事实标准，早期 Sanger、Solexa 和 Illumina 变体曾使用不同的质量定义或 ASCII 偏移量；处理旧档案时应根据元数据和软件文档确认编码，不能只凭字符外观猜测。[^fastq-format]

Phred 标度把碱基判读错误概率 $p$ 写成对数值：

$$
Q=-10\log_{10}p
$$

因此，校准良好的 Q20 碱基对应约 $10^{-2}$ 的错误概率，Q30 对应约 $10^{-3}$。Q 值是模型基于信号与校准数据给出的概率估计，不是某个碱基“已经被证明正确”的百分数；整条读段的平均 Q 也不能显示低质量碱基集中在何处。不同平台、碱基判读器和序列语境的质量值还可能校准不足，重要结论需要通过已知参考、技术重复、共识或正交方法检验。[^phred-error-probability]

过滤前应先确认文件是否完整、压缩流能否读到末尾、记录是否为四行结构、序列与质量字符串是否等长、读段名是否唯一或符合预期、R1／R2 是否同步、样本条形码与样本表是否一致。校验和与文件大小检验传输完整性，FASTQ 结构检验文件语法，质量分布检验测序信号；三者回答不同问题。

## 读段质量控制 { #read-quality-control }

质量控制的目标不是让所有图标变绿，而是辨认数据生成链中哪些过程会限制当前问题。FastQC 可从 FASTQ 等文件生成模块化报告，MultiQC 再把多个样本和工具的指标汇总到同一视图，便于发现批次、lane 和异常样本。二者负责呈现诊断线索，不能依据通用阈值替研究者决定文库是否有效。小 RNA、扩增子、转录起始位点、亚硫酸氢盐和低复杂度靶向文库本来就可能偏离随机全基因组文库的碱基组成。[^fastqc-multiqc]

| 观察层次 | 主要指标 | 可以提示的问题 | 不能单独证明的结论 |
| --- | --- | --- | --- |
| 运行与拆样 | 总产量、每泳道／图块质量、条形码平衡、未分配读段、对照文库表现 | 上样密度、成像、低多样性、索引读取或拆样异常 | 某个生物样本已充分覆盖目标 |
| 读段与碱基 | 读段数、总碱基数、长度分布、逐位点／逐读段质量、N 含量 | 信号衰减、截短、碱基判读或文库大小异常 | 高 Q 读段一定来自目标物种或目标分子 |
| 序列组成 | 逐位点 A/C/G/T、GC 分布、$k$-mer、过度代表序列、接头含量 | 接头读穿、引物残留、低复杂度、扩增或选择偏倚、污染候选 | GC 偏离一定是污染；所有富集序列都应删除 |
| 文库复杂度 | 唯一序列比例、重复率、UMI 家族大小 | 起始分子不足、过度扩增或高丰度生物分子 | 相同序列必为 PCR 扩增副本，或高重复文库必然失败 |
| 双端测序 | 配对保留率、方向、重叠、插入长度分布、异常配对端 | 文库片段化、接头读穿、样本或文件配对错误 | 两端均高质量就能唯一定位重复区 |
| 比对后可用性 | 比对率、多重比对、目标区比例、深度、覆盖广度、插入长度、链特异性 | 参考不匹配、污染、捕获效率、文库方向或结构异常 | 高比对率自动证明样本身份与生物学假设 |
| 长读段／原始信号 | 读段 N50 与完整分布、逐读段 Q、产量随时间、通道／ZMW 利用、长度—质量关系、模型版本 | 样品剪切、短片段过多、孔道或聚合酶利用、碱基判读器差异 | 一个 N50 足以描述长读段集合；新模型必然改善所有位点 |

逐位点质量下降常见于循环测序末端，但是否需要修剪取决于下游算法对质量值的使用方式和低质量尾部的实际长度。GC 分布应与物种、目标区和建库选择比较：外显子捕获、扩增子和 RNA-seq 不会复制全基因组的 GC 分布。重复也须结合实验解释；扩增前 UMI 可以估计原始分子，扩增后仅凭起止坐标标记重复读段会把天然高丰度 RNA、扩增子或受限片段误判为 PCR 副本。

污染检查同样需要分层。接头、引物和载体属于技术序列，宿主、共生体和环境微生物可能是实验对象的一部分，样本间串扰、错误条形码和参考数据库误注释又会产生不同模式。可先用过度代表序列和分类抽样寻找候选，再结合阴性对照、样本来源、泳道分布与独立标记判断；一次分类器命中不足以证明真实污染，更不能在未核对前删除整类读段。

## 修剪、过滤与复杂度保留 { #trimming-filtering }

接头读穿发生在插入片段短于测序循环时，仪器越过插入片段读入接头。可靠修剪利用已知接头序列、双端重叠或经过验证的自动检测，并报告每个样本中被修剪的读段、碱基数和长度分布。接头序列若恰与真实低复杂度或保守序列相似，过短匹配会误剪；参数应包含最小重叠、允许错配、最短保留长度和配对处理规则。

质量修剪和质量过滤分别改变读段边界与是否保留整条读段。过强的 3′ 修剪会缩短可唯一定位的序列，滑动窗口会让不同读段获得不同有效长度，固定 Q 阈值也没有考虑质量值的校准差异。有些现代比对器和变异模型会直接利用逐碱基质量，此时保留质量信息可能比预先删去大量碱基更合适。应在原始数据上建立基线，按明确的下游目的处理，再比较保留率、长度、比对与目标指标，而不是把修剪当作每个流程必有的仪式。

低复杂度和重复读段也不宜默认删除。低复杂度可能来自接头或测序失败，也可能是微卫星、poly(A) 尾、真实重复区或实验富集对象；重复读段可能来自 PCR，也可能来自高深度、小靶区或高表达转录本。过滤规则要区分技术伪影与研究信号，并保留未经修改的原始 FASTQ、处理后的派生文件、工具版本、参数和每类去除原因。原文件不可就地覆盖。

## 覆盖度、文库偏倚与可检出性 { #coverage-bias-detectability }

对大小为 $G$ 的单倍体基因组，若 $N$ 条长度为 $L$ 的读段都来自均匀随机取样，名义平均深度可近似写成 $C=NL/G$。真实数据违反其中多个条件：读段长度不同，片段并非均匀抽取，部分碱基质量过低，重复读段被排除，参考含缺口和重复，多重比对读段不能唯一放置。报告“30×”如果没有说明分母、过滤和参考版本，只是一个不完整的平均数。

覆盖至少包含三个维度：深度（depth）是一个位置被多少有效碱基观察，广度（breadth）是目标区域中达到某个最小深度的比例，均一性（uniformity）描述深度在目标区之间是否均一。均值相同的两个样本，可以一个覆盖广而平缓，另一个在少数位点极深、许多位点空缺。用于变异检出的可调用覆盖还要同时满足碱基质量、比对质量、链与位置支持等条件；Picard 等工具因此分别报告平均深度、达到不同深度的碱基比例，以及因重复、碱基质量、比对质量和配对端重叠被排除的碱基。[^coverage-metrics]

GC 含量会影响变性、扩增、簇形成、捕获和比对；片段长度选择会排斥过短或过长分子；PCR 优先扩增某些分子并降低复杂度；杂交捕获受探针设计、同源区域和外显子边界影响；参考中的重复、替代单倍型和缺口又改变可比对性。增加总读段数只能缓解随机取样不足，不能自动填平系统性空缺。实验设计应先界定需要检测的事件大小、等位基因比例和目标区域，再据文库复杂度、平台误差和可用分子数估计深度，而不是从一个跨实验固定倍数倒推所有项目。

RNA-seq 的读段数和“覆盖”还受到表达量、转录本长度、RNA 完整性、选择方法和异构体结构控制，不能按基因组均匀抽样解释；外显子组的分母应是设计靶区、实际可捕获区还是临床报告区，也必须明确。长读段需要同时给出长度分布和有效分子数，因为相同总碱基量可能来自许多中等长度读段或少数超长读段，两者对组装和相位的贡献不同。

## 特殊文库怎样改变读段证据 { #assay-specific-read-evidence }

测序平台只负责读取被送入的分子，实验选择决定读段可以回答什么问题。

- 全外显子组测序通过杂交捕获富集设计区，未捕获的调控区和结构变异断点通常不在主要观察范围内；目标区域命中率（on-target rate）、靶区深度广度与捕获均一性比总读段数更直接。外显子组后续变异解释进入[基因组组装、变异与比较分析](genome_analysis.md)。
- RAD-seq、GBS 和其他简化基因组策略在限制性位点附近取样。酶切位点变异、甲基化敏感性、片段大小选择和等位基因 dropout 都会改变可见位点集合；它们适合在既定物种和群体设计中获得分散标记，不能等同低深度全基因组测序。
- RNA-seq 的 poly(A) 选择、rRNA 去除、链特异建库、片段化和逆转录决定哪些 RNA 及其哪一段进入读段。CLIP-seq／iCLIP／PAR-CLIP 把交联、免疫沉淀与特定截断或突变信号叠加到读段上，RIP-seq 则缺少同样的共价交联边界；信号必须结合输入、抗体和实验对照解释。定量、剪接和单细胞分析见[转录组、单细胞与空间组学](transcriptomics.md)。
- 亚硫酸氢盐测序把未修饰胞嘧啶转化后再测序，导致碱基组成和比对空间改变，常规 WGBS 又通常不能区分 5mC 与 5hmC。纳米孔和 SMRT 的 native DNA 信号提供另一类修饰证据，但依赖平台模型。相关分析和三维染色质文库见[表观基因组与三维基因组分析](epigenome_3d.md)。
- 扩增子和靶向 panel 只观察引物或探针定义的区域。引物结合位点变异、扩增效率、污染和 chimera 会造成等位基因缺失或伪变异；极高名义深度不能补回从未成功扩增的等位基因。

这些文库也解释了为什么通用 QC 告警不能机械套用。若实验预期在读段起始处出现固定引物、随机引物偏好、转座酶序列或交联诱导突变，相应的碱基组成异常可能是协议留下的证据；但只有预期、对照和样本间一致性能够把它与失败区分开。

## 从质量报告到分析决策 { #qc-to-decision }

一份可审查的测序交付应把实验与计算指标连成同一条链。样品层记录材料来源、提取批次、核酸完整性、纯度和投入量；文库层记录构建方法、扩增循环、条形码／UMI 设计、片段分布与浓度；运行层记录平台、流动槽、试剂、循环数、碱基判读器和拆样版本；文件层记录读段数、总碱基、校验和、FASTQ 编码和配对关系；QC 层保存原始与处理后的报告、过滤统计、异常解释及最终纳入或排除决定。

质量阈值应由计划中的分析来定义。用于粗略物种鉴定的数据、用于低频体细胞变异的数据和用于单倍型组装的数据，即使来自同一平台，也需要不同的分子数、深度、长度与错误控制。发现异常后先定位它属于样品、文库、运行、拆样、碱基判读还是参考比对，再决定重拆样、重新进行碱基判读、修剪、过滤、补测或重建文库。只把低质量读段删除，可能让报告更整齐，却不能修复样本交换、低复杂度或捕获空缺。

最终应同时保存异常本身和处理理由。FastQC／MultiQC 的原始报告、阈值来源、处理前后读段数、未通过样本及其去向，都属于结果来源信息。一个“通过 QC”的标签只表示数据满足了已声明用途的最低标准；它不能替代后续比对、组装、变异、表达或实验验证，也不能把未被测到的分子改写为不存在。

## 参考资料与延伸阅读 { #references }

- Sanger F, Nicklen S, Coulson AR. [DNA sequencing with chain-terminating inhibitors](https://doi.org/10.1073/pnas.74.12.5463). *PNAS*. 1977;74:5463–5467.
- Metzker ML. [Sequencing technologies—the next generation](https://doi.org/10.1038/nrg2626). *Nature Reviews Genetics*. 2010;11:31–46.
- Cock PJA, et al. [The Sanger FASTQ file format for sequences with quality scores, and the Solexa/Illumina FASTQ variants](https://doi.org/10.1093/nar/gkp1137). *Nucleic Acids Research*. 2010;38:1767–1771.
- Ewing B, Green P. [Base-calling of automated sequencer traces using Phred. II. Error probabilities](https://doi.org/10.1101/gr.8.3.186). *Genome Research*. 1998;8:186–194.
- Wenger AM, et al. [Accurate circular consensus long-read sequencing improves variant detection and assembly of a human genome](https://doi.org/10.1038/s41587-019-0217-9). *Nature Biotechnology*. 2019;37:1155–1162.
- Illumina. [Sequencing by synthesis technology](https://www.illumina.com/science/technology/next-generation-sequencing/sequencing-technology.html).
- PacBio. [How HiFi sequencing works](https://www.pacb.com/technology/hifi-sequencing/how-it-works/).
- Oxford Nanopore Technologies. [How nanopore sequencing works](https://nanoporetech.com/platform/technology/)；[How basecalling works](https://nanoporetech.com/platform/technology/basecalling).
- Babraham Bioinformatics. [FastQC](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/)；Ewels P, et al. [MultiQC](https://doi.org/10.1093/bioinformatics/btw354). *Bioinformatics*. 2016;32:3047–3048.

[^sequencing-platform-review]: Metzker 对 [大规模并行测序平台](https://doi.org/10.1038/nrg2626)的比较展示了模板制备、扩增、测序化学与成像方式如何共同塑造 read 和错误谱；本文使用平台原理组织内容，不把历史“代际”当作性能等级。
[^sanger-chain-termination]: Sanger、Nicklen 与 Coulson 的[原始论文](https://doi.org/10.1073/pnas.74.12.5463)说明 2′,3′-双脱氧核苷酸和相关类似物如何作为 DNA 聚合酶的特异链终止抑制剂。
[^maxam-gilbert]: Maxam 与 Gilbert 的[化学裂解测序论文](https://doi.org/10.1073/pnas.74.2.560)描述末端标记 DNA 的碱基选择性修饰、断裂与凝胶分离。
[^homochromatography-history]: Sanger 等 1973 年以引物延伸测定噬菌体 f1 DNA 片段时，明确使用二维 [homochromatography 分离聚合产物](https://pmc.ncbi.nlm.nih.gov/articles/PMC433459/)；早期 RNA 序列工作也以 DEAE-纤维素薄层和寡核苷酸混合物完成长片段分离。
[^illumina-sbs]: Illumina 的 [SBS 技术说明](https://www.illumina.com/science/technology/next-generation-sequencing/sequencing-technology.html)描述可逆终止核苷酸逐循环成像及 single-read／paired-end 路线；其[术语表](https://www.illumina.com/science/technology/next-generation-sequencing/beginners/tutorials/glossary.html)说明模板弯折、延伸与变性构成的桥式扩增。[图案化流动槽说明](https://www.illumina.com/science/technology/next-generation-sequencing/sequencing-technology/patterned-flow-cells.html)与 [ExAmp 课程讲稿](https://jp.illumina.com/content/dam/illumina-support/courses/examp-cluster-workflow/story_content/external_files/ExAmp_Transcript.pdf)则说明纳米孔、同时落位—扩增和排他性成簇。
[^ion-torrent]: Rothberg 等的[半导体测序原始论文](https://doi.org/10.1038/nature10242)说明芯片直接感知模板指导的聚合反应所释放的离子，因而属于非光学 sequencing by synthesis。
[^pacbio-hifi]: PacBio 的 [HiFi 原理页](https://www.pacb.com/technology/hifi-sequencing/how-it-works/)说明 ZMW 中锚定聚合酶、带标记核苷酸和环形模板的重复读取；平台可提供的修饰信息以 native 分子、具体化学和模型为前提。
[^ccs-hifi]: Wenger 等通过优化 [circular consensus sequencing](https://doi.org/10.1038/s41587-019-0217-9)，把同一 SMRTbell 分子的多次 subread 合成为高准确度长 read；CCS 质量来自重复观察形成的分子内共识。
[^nanopore-principle]: Oxford Nanopore 的[技术原理](https://nanoporetech.com/platform/technology/)说明蛋白孔、电阻膜、离子电流和连续信号；[basecalling 文档](https://nanoporetech.com/platform/technology/basecalling)说明 raw signal 由模型转换为 FASTQ／BAM 中的碱基序列。
[^nanopore-direct-rna]: Soneson 等对 [native RNA nanopore sequencing](https://doi.org/10.1038/s41467-019-11272-z)的系统评估表明，长 read 和天然 RNA 信号带来异构体与修饰研究机会，同时存在多重比对、覆盖和定量偏倚；这些限制需与具体 basecaller 和分析模型共同评估。
[^fastq-format]: Cock 等整理了 [FASTQ 四行记录、逐碱基质量和历史编码变体](https://doi.org/10.1093/nar/gkp1137)，说明旧 Solexa／Illumina 文件的质量定义与 ASCII offset 不能默认等同现代 Sanger FASTQ。
[^phred-error-probability]: Ewing 与 Green 的 [Phred 错误概率论文](https://doi.org/10.1101/gr.8.3.186)把 trace 特征转化为逐碱基错误概率，并以实际错误率检验其校准；Phred 标度后来被不同平台沿用，但平台模型仍需各自验证。
[^fastqc-multiqc]: [FastQC 官方说明](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/)将其定位为发现原始序列潜在问题的模块化检查；Ewels 等的 [MultiQC](https://doi.org/10.1093/bioinformatics/btw354)把多工具、多样本结果汇总以发现全局趋势和偏倚。告警阈值仍须按文库类型解释。
[^coverage-metrics]: Picard 的 [WGS metrics 定义](https://broadinstitute.github.io/picard/javadoc/picard/picard/analysis/CollectWgsMetrics.WgsMetrics.html)区分 mean coverage、达到不同深度的碱基比例，以及因 duplicate、base quality、mapping quality、mate overlap 等原因排除的碱基，体现“总产量”与“可用覆盖”并非同一对象。
