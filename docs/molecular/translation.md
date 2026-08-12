# 翻译与蛋白质生物合成

翻译把 mRNA 的核苷酸序列转换为多肽的氨基酸序列。两种聚合物之间的对应由分子装置建立：氨酰-tRNA 合成酶（aminoacyl-tRNA synthetase，aaRS）先把特定氨基酸连接到具有相应身份的 tRNA，tRNA 再以反密码子读取 mRNA 密码子，核糖体则选择底物、催化肽键并沿模板移动。遗传密码是 aaRS、tRNA、核糖体和辅助因子共同实现的映射关系。

翻译从 mRNA 的 5′ 端向 3′ 端读取，肽链从 N 端向 C 端延伸。起始步骤选择阅读框，延伸循环维持三核苷酸步进，终止与循环释放产物并回收核糖体；任何一步也都可以成为表达调控或质量控制的入口。多肽离开核糖体后还会继续折叠、切割、定位并接受质量控制，相关过程见[蛋白质成熟、定位与质量控制](protein_processing.md)。

## 遗传密码把连续 RNA 划分为三联体 { #genetic-code }

在标准遗传密码中，64 种三联体中的 61 种指定氨基酸，UAA、UAG 和 UGA 通常作为终止信号。密码具有简并性：多种密码子可以指定同一种氨基酸；在既定解码系统中，一个有义密码子通常又具有明确的主要含义。起始位点确定之后，核糖体以连续、不重叠的三联体读取开放阅读框，直至遇到同一阅读框中的终止密码子。ORF 是序列上具备编码潜力的开放阅读框，CDS 则是注释为实际蛋白质编码区的序列；发现一个长 ORF 并不能单独证明它被翻译。

1961 年，Nirenberg 与 Matthaei 用 poly(U) 驱动无细胞体系合成 polyphenylalanine，给出第一个密码子指派。随后，人工重复 RNA、定义明确的合成 RNA 和三核苷酸—核糖体结合实验逐步完成密码表；Holley 对 tRNA 序列与结构的研究又确立了解码适配体。Nirenberg、Khorana 与 Holley 因遗传密码及其在蛋白质合成中的作用获 1968 年诺贝尔生理学或医学奖。[^genetic-code-history]

标准密码表在生命中高度保守，同时存在线粒体、部分细菌和古菌、某些真核核基因组及病毒中的密码子重指派。同一个 UGA 在普通终止、硒代半胱氨酸插入或特定遗传密码中的色氨酸之间如何解释，取决于基因组背景、tRNA、释放因子和局部 RNA 信号。密码子的稳定含义、某条 mRNA 上的程序化重编码和偶发翻译错误处于三个不同层级，只有第一层发生稳定变化时才构成密码表改变。[^genetic-code-variation]

### 摆动配对减少所需 tRNA 种类 { #wobble-decoding }

反密码子与密码子反向平行配对。解码中心严格检查前两个碱基对的几何，第三个密码子位置允许部分非 Watson–Crick 配对；反密码子第一位的 inosine、queuosine、5-methyluridine 衍生物等修饰还可扩展或限制识别范围。具体摆动集合由碱基、修饰、tRNA 构象和核糖体环境共同决定，配对范围因而受到明确约束。

同义密码子的使用频率随基因组组成、基因类别、组织和生理状态变化。tRNA 丰度与充氨水平、mRNA 结构、新生肽序列和相邻密码子都能改变局部延伸；稀有密码子有时造成停顿，有时参与共翻译折叠或表达调节。密码子适应指数（codon adaptation index，CAI）描述相对于参考基因集的偏好，蛋白合成速率还受到起始、tRNA 供应和转录本状态等因素影响。

## tRNA 和 aaRS 在核糖体之前建立氨基酸身份 { #trna-aminoacylation }

tRNA 的三叶草式二级结构由受体臂、D 臂、反密码子臂、可变区和 T 臂组成，长程相互作用进一步折成 L 形。反密码子位于一端，3′-CCA 末端位于另一端；氨基酸以酯键连接末端腺苷的 2′ 或 3′ 羟基，进入翻译时通常处于 3′ 位。修饰核苷会影响折叠、aaRS 识别、摆动配对和核糖体动力学，但每种修饰的效应需要针对具体 tRNA 和细胞条件判断。前体成熟过程见[RNA转录后加工](rna_processing.md#trna-processing)。

aaRS 先使氨基酸与 ATP 形成酶结合的 aminoacyl-AMP 并释放焦磷酸，再把氨酰基转移给同源 tRNA。反应消耗一个 ATP 分子而生成 AMP，相当于跨越两个磷酸酐键；焦磷酸水解把总反应推向充氨方向。氨酰-tRNA 酯键保存的自由能随后用于肽键形成，所以每次成键不需要核糖体再用一个 ATP 直接“激活”氨基酸。[^aars-chemistry]

aaRS 分为结构上独立演化的 class I 和 class II，二者从 tRNA 受体端的不同方向结合，并常偏好先把氨酰基转移到 A76 的不同羟基，但存在转酯化和酶类例外。细胞也不一定为每种氨基酸各有一套直接合成酶：一些细菌和古菌先产生误酰化的 Glu-tRNA^Gln^ 或 Asp-tRNA^Asn^，再由 amidotransferase 改成正确产物。因而“二十种标准氨基酸等于二十种 aaRS”是常见配置，不是跨生命系统的定义。

每个 aaRS 通过反密码子、受体茎、区别碱基和整体构象等身份元件（identity elements）识别一组同工受体 tRNA。活性位点的空间与动力学选择排除多数非同源氨基酸；对体积和化学性质过于接近的底物，一些 aaRS 还进行转移前或转移后校对，另有独立 trans-editing factors 清除误充氨 tRNA。核糖体主要检查密码子—反密码子几何，通常无法辨认 tRNA 上是否携带了正确氨基酸，aaRS 选择因此是遗传密码保真度的第一道关键关口。[^aars-fidelity]

## 核糖体以共同催化核心组织翻译循环 { #ribosome-translation-cycle }

小亚基形成 mRNA 解码中心，大亚基形成肽酰转移酶中心（peptidyl-transferase center, PTC）和新生肽出口通道，tRNA 的反密码子端与 CCA 端跨越两个亚基并依次使用 A、P、E 位点。PTC 的核心由 rRNA 构成，核糖体蛋白稳定整体折叠并参与装配、因子结合和构象调节。不同域和细胞器核糖体的组成、沉降值与生物发生见[细胞核、染色质与核糖体](../cell/nucleus_chromatin.md#ribosome-architecture)。[^ribosome-catalysis]

起始、延伸、终止和循环由核糖体的旋转、头部摆动、tRNA hybrid states 及多种 GTPase／ATPase 协调。GTP 水解使底物选择、方向性构象变化和因子离开具有动力学控制，却不是肽键化学能的直接来源。把一条含 $n$ 个氨基酸的蛋白写成固定“消耗 $4n$ 个 ATP”会混合 ATP 分子数、高能磷酸键当量、起始与循环费用，也忽略不同系统和质量控制的额外支出；能量核算必须先说明计数边界。

## 翻译起始选择 mRNA、起点与阅读框 { #translation-initiation }

### 细菌在多种 5′ 端结构上装配起始复合物 { #bacterial-initiation }

细菌起始 tRNA 先由 MetRS 充入 methionine，再由 transformylase 生成 fMet-tRNA^fMet^。IF2–GTP 把它送入 30S P 位，IF1 占据 A 位并帮助形成合适构象，IF3 抑制过早的亚基结合并参与起始位点选择；50S 加入和 IF2 的 GTP 水解最终形成可延伸的 70S complex。甲酰化和 initiator-tRNA identity 共同把起始底物同内部延伸用 Met-tRNA^Met^ 区分，起始 methionine／formyl group 可在蛋白成熟中被移除。

许多细菌 mRNA 以 Shine–Dalgarno sequence 与 16S rRNA 3′ 端配对，把起始密码子定位在 P 位，但序列强度、间距和结构具有变异；另一些 leadered mRNA 缺少明显 SD，leaderless mRNA 则可从接近 5′ 端的起始密码子装配。AUG 最常见，GUG、UUG 等也可在适当起始环境中被 initiator tRNA 读取为 methionine。SD 机制因此是重要范式，而不是每个细菌 ORF 都必须具有的固定 `AGGAGG` 标签。[^prokaryotic-initiation]

### 古菌以真核同源因子读取无帽 mRNA { #archaeal-initiation }

古菌核糖体沉降分类类似细菌，initiator tRNA 携带未甲酰化 methionine；aIF1、aIF1A、aIF2 和 aIF5B 等起始因子在结构和功能上更接近真核同源物。aIF2–GTP 以三亚基复合体携带 Met-tRNAi，起始密码子选择后经因子释放和大亚基加入进入延伸。古菌 mRNA 通常没有真核 m⁷G cap，可使用 SD-led 或 leaderless initiation，不同门类中两类转录本的比例差异很大。[^archaeal-initiation]

### 真核细胞质翻译多由 5′ 帽招募和扫描开始 { #eukaryotic-initiation }

cap-dependent initiation 中，eIF4E、eIF4G 与 eIF4A 组成的 eIF4F 连接 5′ cap、RNA helicase 辅助因子和 43S preinitiation complex；PABP 与 eIF4G 的相互作用可提高完整 mRNA 的招募和再起始概率，但 mRNA 并非必须形成永久闭合的几何圆环。43S complex 含 40S、eIF1、eIF1A、eIF3、eIF5 以及 eIF2–GTP–Met-tRNAi ternary complex，在 5′ leader 上扫描。适当 Kozak context 中的 AUG 促使扫描停止、eIF2 GTP 水解和因子重排，eIF5B 再促进 60S 加入形成 80S ribosome。[^eukaryotic-initiation]

第一个 AUG 是常用规则而非绝对边界。弱 context 可发生 leaky scanning，CUG、GUG 等 near-cognate codons 可在特定转录本上起始；upstream ORFs、reinitiation 和不同起始位点可改变主 ORF 输出或蛋白 N 端。IRES 又以各不相同的 RNA 结构和 trans-acting factors 招募部分或几乎全部起始装置，不能概括为“所有 IRES 都只省去 eIF4E”。这些非经典路线的存在也使 ORF 预测必须接受翻译证据检验。

## 延伸循环把选择、成键和转位分开校验 { #translation-elongation }

细菌 EF-Tu–GTP、古菌 aEF1A–GTP 或真核 eEF1A–GTP 把氨酰-tRNA 送到 A 位。初始选择排除明显不匹配的底物；接近正确的配对可触发 GTPase activation，GTP 水解后仍要经过 accommodation，近同源 tRNA 还能在肽键形成前被拒绝。这种 initial selection 加 kinetic proofreading 的分步判定提高保真度，同时造成速度与准确性的权衡。核糖体检查的是配对几何而不是简单统计氢键数，第三位摆动也处在受控结构中。[^translation-fidelity]

正确 aa-tRNA 的 CCA 端进入 PTC 后，A 位氨基的 α-amino group 进攻 P 位 peptidyl-tRNA 的 ester carbonyl，肽链整体转移到 A 位 tRNA。rRNA 和 tRNA A76 周围的氢键网络定位底物并协助 proton shuttle；反应不需要一个核糖体蛋白提供经典共价催化基团。随后小、大亚基相对旋转形成 hybrid states，EF-G／aEF2／eEF2 促进 mRNA—tRNA 向前移动一个密码子，肽酰-tRNA 进入 P 位，脱氨酰 tRNA 经 E 位离开。[^ribosome-catalysis]

多个核糖体可同时翻译一条 mRNA，形成多核糖体（polysome）。其核糖体密度由起始频率、密码子特异的延伸速度、mRNA 结构、新生链作用和碰撞共同产生，核糖体间距因而没有通用的 80-nucleotide 固定值。细菌中转录与翻译可在同一胞质空间重叠，某些基因形成 RNAP—ribosome 直接或间接耦联；真核核编码 mRNA 则先输出至胞质。核糖体占据量同时受装载和行进速度影响，蛋白产量还需结合完成翻译和降解速率判断。

## 终止释放肽链，循环回收核糖体 { #termination-recycling }

终止密码子进入 A 位后，细菌 RF1 识别 UAA／UAG，RF2 识别 UAA／UGA；它们以蛋白结构模拟 tRNA 进入解码中心，保守 GGQ motif 把水分子定位到 PTC，水解 P 位 peptidyl-tRNA。RF3–GTP 促进 class I release factor 周转。RRF 与 EF-G 随后拆分 post-termination complex，IF3 等帮助释放 mRNA、tRNA 并保持亚基可再利用。肽链水解和核糖体循环是相继耦联而不相同的反应。

真核 eRF1 识别三个终止密码子，eRF3–GTP 加速构象重排和肽链释放；ABCE1 用 ATP 驱动亚基拆分，40S 上残余 mRNA 与 tRNA 再由 initiation/recycling factors 清除。古菌 aRF1 与 ABCE1 使用同源核心，但具体辅助因子和终止信号偏好随谱系变化。正常终止效率还受 stop-codon identity、紧邻核苷酸、PABP 距离和 mRNP 状态影响，因此释放因子并非只识别孤立的三个字母。[^termination-recycling]

## 细胞器翻译由内共生核心和谱系改造共同塑造 { #organelle-translation }

线粒体与质体的翻译装置源于细菌祖先，但基因丢失、核基因接管、rRNA 缩减或扩展和新蛋白加入已产生多种 mitoribosome／plastid ribosome。哺乳动物线粒体用一套 tRNA^Met^ 经不同 formylation state 分担起始与延伸，翻译大多从 leaderless 或极短 leader mRNA 开始；密码表也有重指派。植物质体保留更多细菌型因子和 rRNA，部分转录本使用 SD-like elements，RNA editing、5′ UTR-binding proteins 和发育状态又可重塑起始。两类细胞器都高度依赖核编码蛋白输入，不能只称为“缩小的 70S 系统”。[^organelle-translation]

## 停滞核糖体把 mRNA、肽链与核糖体质控接在一起 { #ribosome-rescue }

缺失终止密码子、受损 mRNA、难解结构、稀缺底物或新生肽—出口通道相互作用都可能使核糖体长时间停滞。单个 pause 可以参与调控或共翻译折叠；当后续核糖体追上并形成特定碰撞界面时，细胞获得更强的异常信号。质量控制同时负责清除问题 mRNA、释放被占用的核糖体并处置尚连在 tRNA 上的新生链。

细菌 tmRNA 先由 alanyl-tRNA synthetase 充入 alanine，并与 SmpB 进入停滞 ribosome 的空 A site；肽链转移给 tmRNA 后，核糖体从原 mRNA 切换到 tmRNA 内部 ORF，合成含 stop codon 的 degradation tag。终止释放核糖体，tag 引导多种 protease 清除不完整蛋白，RNase R 等参与问题 mRNA 周转。不同细菌还可使用 ArfA–RF2、ArfB 等替代救援路线，所以 trans-translation 是主干系统之一，不是唯一可能。[^bacterial-ribosome-rescue]

真核碰撞核糖体可被 ZNF598 等识别并发生小亚基蛋白 ubiquitination，随后由 ASCC 等拆分；留在 60S 上的 peptidyl-tRNA 进入核糖体相关质量控制（ribosome-associated quality control，RQC），NEMF 帮助招募 LTN1 使新生链泛素化，ANKZF1 等促进 peptidyl-tRNA hydrolysis。Pelota–HBS1L–ABCE1 还可救援空 A 位的停滞复合体。no-go、non-stop 和 nonsense-mediated decay 描述不同触发语境且彼此有交叉；NMD 还调控一批正常转录本，不能把所有提前终止都写成碰撞触发的同一条 RQC 路线。RNA 周转接口见[RNA转录后加工](rna_processing.md#rna-quality-control)。[^eukaryotic-rqc]

## 程序化重编码在局部改变常规读取规则 { #translational-recoding }

程序化移框由 slippery sequence、暂停和下游 RNA structure 等信号提高核糖体进入 −1 或 +1 阅读框的概率；终止密码子通读让部分核糖体在首个终止位点插入氨基酸并延伸到后续终止位点；translational bypassing 则使 peptidyl-tRNA—ribosome complex 跳过一段 mRNA 后继续合成。它们通常产生一定比例的非标准异构体，效率依赖序列、结构、因子和细胞状态，不能把所有核糖体事件视为同步改读。[^translational-recoding]

硒代半胱氨酸（Sec）插入把特定 UGA 与 specialized tRNA^Sec^、SECIS element 和专用 elongation factor 配对。细菌 Sec 常在 tRNA 上由 serine 经中间步骤合成，SelB 同时识别 Sec-tRNA^Sec^ 和邻近 SECIS；真核 SECIS 多位于 3′ UTR，并借 SBP2、eEFSec 等远程完成递送。吡咯赖氨酸（Pyl）则先合成后由 PylRS 直接连接 tRNA^Pyl^，在部分古菌和细菌中读取 UAG；这更接近一套独立 aaRS—tRNA 对造成的 codon reassignment。Sec 与 Pyl 都扩展天然编码氨基酸集合，但生物合成和 mRNA 语境并不相同。[^genetic-code-variation]

## 翻译抑制剂揭示核糖体功能位点的条件依赖性 { #translation-inhibitors }

四环素类与 aa-tRNA 在细菌 A site 的位置冲突；多类 aminoglycosides 改变 16S rRNA decoding-center 构象并提高误读，另一些则更偏向抑制 translocation。macrolides 位于 nascent-peptide exit tunnel，许多药物只在特定新生肽和 incoming amino acid 组合下造成 context-specific arrest，而非像塞子一样阻断所有肽链。chloramphenicol、lincosamides、oxazolidinones 等在 PTC 周围占据不同位置，作用阶段和序列偏好也不同。[^ribosome-antibiotics]

puromycin 模拟 aminoacyl-tRNA 的 3′ 端并接受肽链，使细菌和真核翻译提前终止；cycloheximide 抑制真核细胞质核糖体转位，diphtheria toxin 通过 ADP-ribosylation 失活 eEF2，ricin 则去嘌呤化 sarcin–ricin loop。选择性来自靶点结构、药物进入与外排、修饰酶和旁路装置的组合，70S／80S 标签不足以预测全部物种、细胞器或剂量反应。抗菌药谱、耐药与应用见[微生物生长控制](../micro/growth_control.md)。

## 翻译证据需要区分占据、速度与完成产物 { #translation-evidence }

放射性或 stable-isotope pulse labeling 直接追踪新合成蛋白，并曾用短脉冲后肽段分布证明肽链由 N 端向 C 端延伸；polysome gradient 显示 mRNA 与不同数量核糖体共沉降，却不能区分高起始和严重停滞。reporter assays 可比较起始位点、frameshift 或 readthrough 信号，但报告序列、拷贝数和细胞背景会改变效率。

ribosome profiling 测定受核糖体保护的 mRNA fragments，可呈现三核苷酸周期、起始位点和局部暂停，并与 RNA-seq 比较形成翻译效率的近似指标。footprint density 同时由起始、延伸、终止和碰撞决定；nuclease bias、fragment-size selection、mapping、cycloheximide 等抑制剂还可重排局部峰。完整蛋白与 N 端／C 端 peptides 的 mass spectrometry、起始位点标记和遗传扰动应与 profiling 互相验证，尤其是在主张 non-AUG start、small ORF 或 recoding product 时。[^translation-evidence]

## 参考资料与延伸阅读 { #references }

- Alberts B, Johnson A, Lewis J, et al. [From RNA to Protein](https://www.ncbi.nlm.nih.gov/books/NBK26829/). In: *Molecular Biology of the Cell*. 4th ed. Garland Science; 2002.
- Rubio Gomez MA, Ibba M. [Aminoacyl-tRNA synthetases](https://pmc.ncbi.nlm.nih.gov/articles/PMC7373986/). *RNA*. 2020;26:910–936.
- Sonenberg N, Hinnebusch AG. [Regulation of translation initiation in eukaryotes: mechanisms and biological targets](https://pmc.ncbi.nlm.nih.gov/articles/PMC3610329/). *Cell*. 2009;136:731–745.
- Schmitt E, Coureux PD, Kazan R, et al. [Recent Advances in Archaeal Translation Initiation](https://pmc.ncbi.nlm.nih.gov/articles/PMC7531240/). *Frontiers in Microbiology*. 2020;11:584152.
- Hellen CUT. [Translation Termination and Ribosome Recycling in Eukaryotes](https://pmc.ncbi.nlm.nih.gov/articles/PMC6169810/). *Cold Spring Harbor Perspectives in Biology*. 2018;10:a032656.
- Ferrari A, Del'Olio S, Barrientos A. [The Diseased Mitoribosome](https://pmc.ncbi.nlm.nih.gov/articles/PMC8278227/). *FEBS Letters*. 2021;595:1025–1061.
- Janssen BD, Hayes CS. [The tmRNA ribosome-rescue system](https://pmc.ncbi.nlm.nih.gov/articles/PMC3358797/). *Advances in Protein Chemistry and Structural Biology*. 2012;86:151–191.
- McGirr T, Onar O, Jafarnejad SM. [Dysregulated ribosome quality control in human diseases](https://pmc.ncbi.nlm.nih.gov/articles/PMC11880988/). *The FEBS Journal*. 2025;292:936–959.
- Rodnina MV, Korniy N, Klimova M, et al. [Translational recoding: canonical translation mechanisms reinterpreted](https://pmc.ncbi.nlm.nih.gov/articles/PMC7026636/). *Nucleic Acids Research*. 2020;48:1056–1067.
- Mukai T, Lajoie MJ, Englert M, Söll D. [Rewriting the Genetic Code](https://pmc.ncbi.nlm.nih.gov/articles/PMC5772603/). *Annual Review of Microbiology*. 2017;71:557–577.
- Lin J, Zhou D, Steitz TA, Polikanov YS, Gagnon MG. [Ribosome-Targeting Antibiotics: Modes of Action, Mechanisms of Resistance, and Implications for Drug Design](https://pmc.ncbi.nlm.nih.gov/articles/PMC9176271/). *Annual Review of Biochemistry*. 2018;87:451–478.
- Ingolia NT, Hussmann JA, Weissman JS. [Ribosome Profiling: Global Views of Translation](https://pmc.ncbi.nlm.nih.gov/articles/PMC6496350/). *Cold Spring Harbor Perspectives in Biology*. 2019;11:a032698.

[^genetic-code-history]: 遗传密码破译、tRNA 结构及三位获奖者的贡献见 Nobel Prize Outreach 的[1968 年诺贝尔生理学或医学奖资料](https://www.nobelprize.org/prizes/medicine/1968/summary/)；标准机制见 Alberts 等的[教材章节](https://www.ncbi.nlm.nih.gov/books/NBK26829/)。
[^genetic-code-variation]: 密码子重指派、Sec／Pyl 与人工 code expansion 的机制边界见 Mukai 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5772603/)。
[^aars-chemistry]: aaRS 的两步 aminoacylation、class I／II 结构和间接氨酰化路线见 Rubio Gomez 与 Ibba 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7373986/)。
[^aars-fidelity]: tRNA identity elements、pre-／post-transfer editing 与 trans-editing factors 见 Rubio Gomez 与 Ibba 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7373986/)；双适配体逻辑见 Alberts 等的[教材章节](https://www.ncbi.nlm.nih.gov/books/NBK26829/)。
[^ribosome-catalysis]: 核糖体构造、A／P／E 位点与 elongation cycle 见 Alberts 等的[教材章节](https://www.ncbi.nlm.nih.gov/books/NBK26829/)；PTC 的 RNA 催化和 substrate-assisted chemistry 见[RNA catalysis 综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC2184879/)。
[^prokaryotic-initiation]: SD-led、SD-independent 与 leaderless bacterial／archaeal initiation 的分布和装配差异见 Schmitt 等的[古菌起始综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7531240/)及[leaderless translation 综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9031893/)。
[^archaeal-initiation]: 古菌 aIF1／aIF1A／aIF2／aIF5B、Met-tRNAi 与 mRNA recruitment 多样性见 Schmitt 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7531240/)。
[^eukaryotic-initiation]: eIF4F、43S recruitment、scanning、start-codon selection 与 mRNA closed-loop model 的证据见 Sonenberg 与 Hinnebusch 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3610329/)；non-AUG initiation 的 profiling evidence 见[方法综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4917602/)。
[^translation-fidelity]: aa-tRNA initial selection、GTPase activation、kinetic proofreading 和 accommodation 的多层选择见[翻译保真度综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3691815/)及 Lin 等的[核糖体结构综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9176271/)。
[^termination-recycling]: eRF1／eRF3 peptide release、ABCE1 splitting 与 post-termination 40S 清理见 Hellen 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6169810/)；细菌 RF／RRF 机制见 Alberts 等的[教材章节](https://www.ncbi.nlm.nih.gov/books/NBK26829/)。
[^organelle-translation]: mitoribosome 的谱系改造、单一 mt-tRNA^Met^ 的 formylation 分工和专用 translation factors 见 Ferrari 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8278227/)；细胞器核糖体组成边界见[细胞核页面](../cell/nucleus_chromatin.md#ribosome-architecture)。
[^bacterial-ribosome-rescue]: tmRNA–SmpB trans-translation、ssrA tag、mRNA turnover 与 alternative rescue factors 见 Janssen 与 Hayes 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3358797/)。
[^eukaryotic-rqc]: collision recognition、ribosome ubiquitination、splitting、NEMF–LTN1 nascent-chain disposal 及不同细胞中的依赖差异见 McGirr 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC11880988/)；NMD／NGD／NSD 的 mRNA 接口见[RNA加工页面](rna_processing.md#rna-quality-control)。
[^translational-recoding]: programmed frameshifting、stop-codon readthrough 与 translational bypassing 的动力学和结构机制见 Rodnina 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7026636/)。
[^ribosome-antibiotics]: decoding center、PTC、exit tunnel 与不同药物的结构和 context-dependent inhibition 见 Lin 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9176271/)；macrolide sequence-specific stalling 见[核糖体 profiling 研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC4234590/)。
[^translation-evidence]: ribosome profiling 的 footprint logic、三核苷酸周期、起始／停顿分析与实验偏差见 Ingolia 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6496350/)及[方法学综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5314775/)。
