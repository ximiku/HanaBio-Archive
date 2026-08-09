# DNA复制与逆转录

复制把一套核苷酸序列转化为两套可分配的遗传材料。这个过程不仅要求碱基互补，还要在双链解开、两条反向平行模板同步合成、RNA 引物清除、DNA 拓扑变化和染色质重建之间维持连续协作。细胞因而不依靠一支孤立的 DNA 聚合酶，而是在复制起点装配复制叉，以解旋酶为前沿、以聚合酶和滑动钳为合成核心，并让核酸酶、连接酶、拓扑异构酶与组蛋白伴侣在其前后接续工作。

DNA 复制通常以 DNA 为模板；逆转录则用 RNA 指导 DNA 合成。两者共享 5′→3′ 聚合、引物—模板接头和脱氧核苷三磷酸，但启动方式、模板处理与最终产物不同。端粒酶、逆转录病毒、逆转座元件和细菌 retron 都说明 RNA 模板合成 DNA 并非中心法则的“例外”，而是核酸序列信息允许的另一种流向。

## 半保留复制保存亲代序列关系 { #semiconservative-replication }

DNA 双螺旋的每条亲代链都可作为互补链的模板，因此一次复制产生的每个双链分子通常各含一条亲代链和一条新生链。Meselson 和 Stahl 先让大肠杆菌 DNA 在 $^{15}$N 中达到重同位素密度，再转入 $^{14}$N 培养基并用 CsCl 密度梯度分离 DNA。复制一代后出现单一中间密度带，复制两代后出现中间和轻密度两带，排除了亲代双链整体保留的保守模型，并与半保留模型的代际预测相符。[^meselson-stahl]

“半保留”描述亲代链怎样进入子代双链；“半不连续”描述新链怎样合成，两者不是同一层概念。复制叉两侧的亲代链方向相反，而已知细胞复制型 DNA 聚合酶都把来袭 dNTP 加到引物的 3′-OH 上，使新链沿 5′→3′ 方向延长。与复制叉同向延伸的新链称前导链，能够连续合成；另一条新链称后随链，只能在复制叉继续暴露模板后反复重新引发，形成冈崎片段。复制叉遇到损伤、蛋白障碍或核糖核苷酸切除时，前导链也可能出现缺口或断片，但这类后续加工不改变正常复制叉的半不连续组织。[^replication-chemistry]

Okazaki 等用短脉冲标记观察到先出现、随后并入长 DNA 的短片段，建立了不连续合成的实验基础。早期实验一度显示新生 DNA 大多很短，其中一部分后来被证明来自新生前导链中误掺核糖核苷酸的切除；在抑制相应切除通路后，前导链表现为连续合成。这个历史细节说明，脉冲实验读到的是细胞中短暂存在的 DNA 末端，必须区分复制本身生成的冈崎片段和复制后加工产生的切口。[^okazaki-fragments]

## 复制叉把解链、引发和延伸耦联起来 { #replication-fork }

复制型解旋酶消耗 ATP 沿一条模板移动并拆开双链；细菌 SSB、真核 RPA 及古菌中多样的单链 DNA 结合蛋白覆盖暴露模板，抑制二级结构和非计划降解。双链解开会在复制叉前方积累扭转应力，并在已复制区域产生前连环与姐妹分子缠结。拓扑异构酶以可逆的共价切割—重接反应改变 DNA 链的拓扑关系：细菌 DNA 旋转酶可引入负超螺旋，其他 I 型或 II 型酶松弛应力，II 型酶还可在复制结束后解开互锁的环状染色体。拓扑异构酶的分类和连接数见[核酸与核苷酸](../biochem/nucleic_acid.md#dna-topology-supercoiling)。

引发酶能够从头合成短 RNA，为复制型 DNA 聚合酶提供配对的 3′-OH。细菌 DnaG 与 DnaB 解旋酶形成动态引发体；许多古菌使用 PriS–PriL 型引发酶；真核 Pol α–primase 先合成 RNA，再由 Pol α 接上一小段 DNA。滑动钳环抱双链并把聚合酶维持在模板上，钳装载复合物消耗 ATP 在引物—模板接头装钳。细菌使用 β 钳和细菌型钳装载器，古菌与真核使用 PCNA 和 RFC 类钳装载器；结构同源并不意味着整个复制体来自同一套祖先蛋白。

### 前导链与后随链在同一复制体中同步推进 { #leading-lagging-coordination }

前导链聚合酶可随解旋酶持续前进，后随链则不断经历“引发—装钳—延伸—释放”。后随链模板在复制体内形成动态环，使两条聚合酶的总体移动方向都与复制叉一致；一个冈崎片段接近前一片段后，聚合酶离开旧接头并转到新引物。复制体的组分数目和连接方式具有动态性，不能把教科书中的单一“长号模型”理解为每个物种、每一时刻都固定存在的刚性二聚体。

冈崎片段成熟要移除 RNA–DNA 引物、补齐 DNA 并封闭最后的切口。大肠杆菌主要利用 DNA polymerase I 的 5′→3′ 核酸外切活性和聚合活性完成切口平移，再由 DNA 连接酶封口；RNase H 可辅助处理 RNA–DNA 杂交。真核后随链由 Pol δ 推开下游 5′ 端，短 flap 通常由 FEN1 切除，较长 flap 可由 Dna2 与 FEN1 协同处理，DNA ligase I 最终连接；RNase H2 参与清除 RNA。古菌常采用 RNase H、Fen1、PCNA 和 ATP 依赖连接酶的组合，但具体聚合酶与核酸酶依谱系而变。[^lagging-strand-maturation]

## 聚合酶选择、校对和错配修复逐层提高忠实性 { #replication-fidelity }

复制忠实性首先来自聚合酶活性位点对正确碱基对几何形状和反应构象的选择。错误核苷酸进入后，许多复制型聚合酶会因错配的 3′ 末端难以继续延伸，把末端转移到独立的 3′→5′ 核酸外切位点切除，再返回聚合位点。逃过校对的错配可由复制后错配修复识别并优先切除新生链。三层选择共同把总体错误压到约每 $10^9$ 个复制核苷酸一次的量级；数值随物种、位点、聚合酶和测量方法变化。[^replication-fidelity]

dNTP 浓度与比例会影响速度和误配，但“前体平衡”本身不是校对装置。RNA 引物的优势也不在于提高每次聚合的准确度：能从头起始的引发酶缺少复制型聚合酶的严格校对，RNA 身份反而使这段低可信产物可被识别并整体换成 DNA。DNA 损伤跨越、复制叉重启和修复性 DNA 合成使用的专门聚合酶另有取舍，见[DNA损伤、修复与突变](dna_repair.md)。

## 复制起点把一次性启动扩展为完整基因组复制 { #replication-origins }

复制起点是能够建立复制叉的染色体区域，一个起点及其复制覆盖范围构成复制子。起点不必在所有细胞中以同一概率或同一碱基位置启动。细菌和许多古菌常由明确的序列元件招募起始因子；出芽酵母起点也具有较强序列约束。后生动物的起始位置更常表现为较宽的起始区，受到 DNA 序列性质、核小体与开放染色质、转录活动、三维环境和发育状态共同影响，因此“所有起点都是富 AT 的短重复序列”不适用于整个生命系统。[^origin-selection]

在大肠杆菌 oriC，ATP 结合型 DnaA 在多类结合位点协同装配并促使 DNA 解链元件打开，随后装载 DnaB 解旋酶、引发酶与 DNA polymerase III 全酶，建立两个相背运行的复制叉。起始频率由 DnaA 的核苷酸状态、合成与滴定、调节性失活及起点暂时隔离共同决定；Dam 甲基化和 SeqA 对半甲基化 oriC 的作用是大肠杆菌系统的重要一层，不能概括为“DnaA 只识别全甲基化起点”，也不能外推到所有细菌。Tus–Ter 等终止元件同样是特定细菌谱系的系统，而不是细菌复制的定义。

许多古菌由 Orc1/Cdc6 类蛋白识别 origin recognition box 并招募 MCM 解旋酶，滑动钳、引发酶和多种叉蛋白与真核同源。古菌染色体可以有一个或多个起点，也存在实验上删除全部已知起点后仍可依赖重组起始复制的物种。多数含 PolD 的古菌以 D 家族聚合酶承担主要染色体复制，部分谱系主要使用 B 家族酶；把古菌统一写作“使用真核 Pol δ／ε”会抹去其独立演化和谱系差异。[^archaeal-replication]

### 真核复制许可把解旋酶装载与点火分隔到不同状态 { #eukaryotic-licensing }

晚 M 期至 G$_1$ 期 CDK 活性较低时，ORC、CDC6 和 CDT1 把两个头对头的 MCM2–7 六聚体装到双链 DNA 上，形成获得许可但尚未解链的 pre-replicative complex。进入 S 期后，DDK 与 S-CDK 促进 MCM 重排并招募 Cdc45、GINS 等因子，形成活性 Cdc45–MCM2–7–GINS（CMG）解旋酶；两个 CMG 分离后建立相反方向的复制叉。较高 CDK 活性、CDC6／CDT1 的降解或定位变化，以及后生动物 geminin 对 CDT1 的抑制阻止 S 期重新装载 MCM，使“装载一次、点火一次”成为每个细胞周期只复制一次的核心逻辑。周期控制接口见[细胞周期与细胞分裂](../cell/cell_cycle.md#replication-licensing)。

Pol α–primase 为两条链建立 RNA–DNA 引物后，复制型聚合酶接管延伸。未受扰动的真核复制叉中，Pol ε 承担大部分前导链合成，Pol δ 承担大部分后随链合成；Pol δ 也参与起点附近的前导链启动、某些复制压力状态和间隙填补，故这是一种主要分工而非互不越界的身份标签。CMG、Pol ε、Pol α、Mcm10、Ctf4／And-1、Mrc1／Claspin、Timeless–Tipin 等共同协调解链、聚合和叉保护，复制体并非简单放大的细菌 Pol III 二聚体。[^eukaryotic-replisome]

| 功能层 | 细菌代表系统 | 古菌常见系统 | 真核核基因组 |
| --- | --- | --- | --- |
| 起点识别与解旋酶装载 | DnaA；DnaC 等装载 DnaB | Orc1/Cdc6 类蛋白；MCM | ORC–CDC6–CDT1 装载 MCM2–7 双六聚体 |
| 复制型解旋酶 | DnaB | MCM，常与 GINS／Cdc45 同源蛋白协作 | CMG（Cdc45–MCM2–7–GINS） |
| 引发 | DnaG 合成 RNA | PriS–PriL 类引发酶，产物性质依谱系而异 | Pol α–primase 合成 RNA–DNA 引物 |
| 主要延伸聚合酶 | DNA polymerase III 全酶 | PolD 或 PolB，依谱系而异 | Pol ε 主要复制前导链，Pol δ 主要复制后随链 |
| 滑动钳与装载器 | β 钳；细菌型钳装载器 | PCNA；RFC 类装载器 | PCNA；RFC |
| 单链 DNA 保护 | SSB | SSB／RPA 类蛋白，依谱系而异 | RPA |
| 后随链成熟 | Pol I、RNase H、连接酶 | RNase H、Fen1、连接酶等 | RNase H2、FEN1／Dna2、Pol δ、DNA ligase I |

## 复制终止需要补齐最后的 DNA 并拆除复制体 { #replication-termination }

大多数复制叉最终通过与相向复制叉会合而终止。大肠杆菌 Tus–Ter 能以方向选择性阻挡复制叉，把多数会合事件限制在终止区，但叉会合后的最后一段合成、异常中间体处理和环状姐妹染色体解连仍需聚合酶、核酸酶、重组因子和拓扑异构酶参与。其他细菌可缺少 Tus–Ter 或采用不同的叉陷阱，因而“有专门终止序列”不是普遍规律。

真核染色体的大多数终止位置由相邻起点发出的复制叉相遇决定，而不是预先固定在一个终止序列。两叉完成最后一段前导／后随链合成并处理拓扑缠结后，终止状态的 CMG 发生 MCM7 泛素化，再由 Cdc48/p97 类 ATPase 从染色质移除；过早拆除会使复制叉不可逆丢失。核糖体 DNA、着丝粒或蛋白—DNA 障碍附近可以形成方向性复制叉屏障，但这些局部系统不能代表全基因组终止。[^replication-termination]

## 模板拓扑产生多种复制策略 { #alternative-replication-modes }

双向 θ 型复制适合许多环状细菌、古菌和质粒复制子；一条链被特异切开后，3′-OH 可沿环状模板连续延伸并逐出旧链，形成滚环复制。多类细菌质粒、单链 DNA 噬菌体和某些真核病毒采用滚环或相关机制，产物可以是单体，也可以是随后切割的串联多聚体。滚环描述模板和新链的几何关系，不等于所有噬菌体 DNA 的唯一复制方式。[^rolling-circle]

动物线粒体 DNA 常从重链起点启动并在单链区暴露轻链起点，形成异步链置换中间体；RNA 覆盖后随链模板的 RITOLS 模型以及耦联双向合成模型也得到不同实验支持。细胞类型、复制阶段和样品处理会影响观察到的中间体，因此不宜把一种“D 环模式”写成所有线粒体与叶绿体的固定路线。细胞器采用的聚合酶、引发和终止系统也具有谱系差异。[^mitochondrial-replication]

## 染色质复制同时重建核小体与姐妹关系 { #chromatin-replication }

真核复制叉接近核小体时，亲代 H3–H4 和 H2A–H2B 被局部移开并由复制体相关伴侣回收，随后大体分配到两条子代 DNA；ASF1、CAF-1 等再递送新合成组蛋白，填补核小体密度。MCM2、Pol α 相关轴与 Pol ε 辅助亚基分别影响后随链和前导链方向的亲代组蛋白转移。两条子链总体获得近似平衡的亲代组蛋白，局部区域却可因转移装置、染色质环境和测量尺度而出现偏倚。[^parental-histone-recycling]

亲代组蛋白携带的修饰可为读写酶提供重新建立局部状态的种子，新组蛋白修饰则常在复制后逐步成熟；这并不是把每个核小体的位置和标记逐个原样复制。复制叉还在新生 DNA 后方建立姐妹染色单体黏连并协调核小体装配。染色质结构、组蛋白伴侣与三维基因组的完整背景见[细胞核、染色质与核糖体](../cell/nucleus_chromatin.md)。

## 端粒酶完成线性染色体末端复制 { #telomere-replication }

线性 DNA 末端同时面临复制和保护问题。常规复制叉到达端粒后，去除最末端引物、前导链末端切除以及重新形成 3′ G-rich 单链突出端都会改变端粒长度；富 G 重复形成的二级结构和端粒结合蛋白还会影响复制叉通过。因此末端复制问题不只是“后随链少一个 RNA 引物”这一幅简图，也不能推出每个体细胞周期必定缩短固定碱基数。[^telomere-replication]

端粒酶由 telomerase reverse transcriptase（TERT）、内部 RNA 模板和辅助组分组成。它让 RNA 模板与染色体 3′ 端配对，延伸 G-rich 链并通过模板重定位连续添加重复；随后 CST–Pol α–primase 等完成互补 C-rich 链的填补。Greider 与 Blackburn 在四膜虫提取物中发现能向端粒引物特异添加重复的活性，为这种 RNP 逆转录酶建立了直接生化证据。端粒酶活性、端粒修剪、复制压力和重组型 alternative lengthening of telomeres（ALT）共同决定端粒稳态；端粒保护结构已在[细胞核、染色质与核糖体](../cell/nucleus_chromatin.md#chromosome-architecture)展开。[^telomerase-discovery]

## 逆转录把 RNA 序列写入 DNA { #reverse-transcription }

1970 年，Temin 与 Mizutani、Baltimore 分别在 RNA 肿瘤病毒颗粒中检测到 RNA 依赖的 DNA 聚合活性，为 RNA 基因组经 DNA 中间体延续提供了酶学依据。逆转录酶使用 RNA–DNA 或 DNA–DNA 引物—模板接头合成 DNA；许多逆转录病毒 RT 还含 RNase H 结构域，能切割 RNA–DNA 杂交中的 RNA。RT 完成的反应仍是核苷酸序列间的模板化传递，不涉及蛋白质序列回写。[^reverse-transcriptase-discovery]

### 逆转录病毒通过两次链转移重建完整 DNA 末端 { #retroviral-reverse-transcription }

以 HIV-1 为代表的正逆转录病毒在颗粒中携带两份相似的正链 RNA 和宿主来源 tRNA。tRNA 与 primer-binding site（PBS）配对，RT 从其 3′ 端合成短的负链强终止 DNA；RNase H 降解相应 RNA 后，DNA 借助基因组两端共同的 R 序列完成第一次链转移，继续复制负链。这里的 tRNA 种类由病毒决定，HIV-1 常用 tRNA$^{\mathrm{Lys3}}$，不能写成所有逆转录病毒的统一引物。

RNase H 在负链延伸时降解大部分 RNA，却保留合适的多聚嘌呤区（PPT）作为正链 DNA 引物。正链复制越过 PBS 附近并在 tRNA 被移除后，正负链 PBS 互补区完成第二次链转移；两条 DNA 再相互延伸，产生两端含完整 long terminal repeat（LTR）的线性双链 DNA。RT 在同一过程中执行 RNA 依赖和 DNA 依赖的 DNA 聚合，并与 RNase H 活性协调；“逆转录”不只是合成一条 cDNA 后立即结束。[^retroviral-reverse-transcription]

双链病毒 DNA 的整合由 integrase 和宿主修复反应完成，不是 RT 的聚合酶反应；病毒进入、核内运输、基因表达、装配和抗病毒药物见[病毒与亚病毒因子](../micro/viruses.md)，整合与逆转座的 DNA 重排机制见[DNA重组与转座](dna_recombination.md)。不同 RT 的亚基构成、过程性和辅助结构域随病毒与移动元件谱系而变，HIV-1 的具体结构不能代表全部逆转录酶。

### 逆转录酶分布于病毒、移动元件和细胞系统 { #reverse-transcriptase-diversity }

乙型肝炎病毒等 hepadnavirus 以 DNA 为病毒颗粒基因组，却先转录 pregenomic RNA，再在装配中的核衣壳内逆转录回 DNA；其 RT 的 terminal protein 结构域以自身 Tyr 作为负链 DNA 的蛋白引物。逆转座元件和 group II intron 以 RNA 中间体移动，其中的 RT 常与核酸内切、靶位点引发或 RNA 剪接结构耦联。它们的插入步骤属于重组与转座，而 RNA 模板合成 DNA 的共同化学留在本页。[^hepadnavirus-reverse-transcription]

细菌 retron 编码非编码 RNA 与 RT，产生 RNA–DNA 分支结构 msDNA；鸟苷的 2′-OH 可充当引发端。早期资料把 retron 简写成“提高突变率”，现代遗传与结构研究显示许多 retron 是在噬菌体感染时触发的防御系统，但不同家族的效应器、触发信号和生态功能并不相同。实验室用 RT 制备 cDNA、RT–qPCR 和转录组文库的操作与偏倚见[扩增、克隆与基因编辑](../exptech/biochem_molecular/amplification_cloning.md)。[^retron-defense]

## 参考资料与延伸阅读 { #references }

- Alberts B, Johnson A, Lewis J, et al. [DNA Replication Mechanisms](https://www.ncbi.nlm.nih.gov/books/NBK26850/). In: *Molecular Biology of the Cell*. 4th ed. Garland Science; 2002.
- Meselson M, Stahl FW. [The Replication of DNA in *Escherichia coli*](https://pmc.ncbi.nlm.nih.gov/articles/PMC528642/). *Proceedings of the National Academy of Sciences*. 1958;44:671–682.
- Okazaki R, Okazaki T, Sakabe K, Sugimoto K, Sugino A. [Discontinuous Synthesis of DNA during Replication](https://pmc.ncbi.nlm.nih.gov/articles/PMC305445/). *Proceedings of the National Academy of Sciences*. 1968;60:329–336.
- Burgers PMJ, Kunkel TA. [Eukaryotic DNA Replication Fork](https://www.annualreviews.org/doi/10.1146/annurev-biochem-061516-044709). *Annual Review of Biochemistry*. 2017;86:417–438.
- Prioleau MN, MacAlpine DM. [DNA Replication Origins—Where Do We Begin?](https://pmc.ncbi.nlm.nih.gov/articles/PMC5002974/). *Genes & Development*. 2016;30:1683–1697.
- Greci MD, Bell SD. [Archaeal DNA Replication](https://pmc.ncbi.nlm.nih.gov/articles/PMC7712474/). *Annual Review of Microbiology*. 2020;74:65–80.
- Dewar JM, Walter JC. [Mechanisms of DNA Replication Termination](https://pmc.ncbi.nlm.nih.gov/articles/PMC6386472/). *Nature Reviews Molecular Cell Biology*. 2017;18:507–516.
- Greider CW, Blackburn EH. [Identification of a Specific Telomere Terminal Transferase Activity in *Tetrahymena* Extracts](https://pubmed.ncbi.nlm.nih.gov/3907856/). *Cell*. 1985;43:405–413.
- Hu WS, Hughes SH. [HIV-1 Reverse Transcription](https://pmc.ncbi.nlm.nih.gov/articles/PMC3475395/). *Cold Spring Harbor Perspectives in Medicine*. 2012;2:a006882.

[^meselson-stahl]: $^{15}$N／$^{14}$N 转换、密度梯度结果及不同复制模型的预测见 Meselson 和 Stahl 的[原始论文](https://pmc.ncbi.nlm.nih.gov/articles/PMC528642/)。
[^replication-chemistry]: 复制叉不对称、5′→3′ 合成、引物需求、滑动钳及拓扑问题的机制框架见 Alberts 等的[教材章节](https://www.ncbi.nlm.nih.gov/books/NBK26850/)。
[^okazaki-fragments]: 短脉冲标记与不连续合成模型见 Okazaki 等的[原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC305445/)；区分冈崎片段与核糖核苷酸切除造成的前导链断片见 Williams 和 Kunkel 的[回顾与机制评述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6397534/)。
[^lagging-strand-maturation]: 真核 Pol α–primase、Pol δ、PCNA、FEN1／Dna2 和 ligase I 的多路径冈崎片段成熟见 Balakrishnan 与 Bambara 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3044941/)；跨域共同功能见 Alberts 等的[复制机制章节](https://www.ncbi.nlm.nih.gov/books/NBK26850/)。
[^replication-fidelity]: 聚合酶底物选择、3′→5′ 校对和复制后错配修复的分层贡献见 Alberts 等的[复制机制章节](https://www.ncbi.nlm.nih.gov/books/NBK26850/)及 Ganai 与 Johansson 的[校对综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6153641/)。
[^origin-selection]: 后生动物起点由序列、染色质、核内结构和发育状态共同选择的证据与方法边界见 Prioleau 与 MacAlpine 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5002974/)。
[^archaeal-replication]: 古菌起点数量、Orc1/Cdc6–MCM、PolD／PolB 分工及无起点复制的谱系差异见 Greci 与 Bell 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7712474/)。
[^eukaryotic-replisome]: CMG、Pol α、Pol δ、Pol ε、PCNA 及冈崎片段成熟在真核复制叉中的主要分工见 Burgers 与 Kunkel 的[综述](https://www.annualreviews.org/doi/10.1146/annurev-biochem-061516-044709)。
[^replication-termination]: 复制叉会合、最后片段合成、拓扑解连和终止后 CMG 卸载的机制与未解决边界见 Dewar 与 Walter 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6386472/)；MCM7 泛素化与 p97 依赖卸载的跨物种证据见 Low 等的[研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC8695382/)。
[^rolling-circle]: 细菌质粒滚环复制的切口引发、链置换和终止机制见 Khan 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC232620/)。
[^mitochondrial-replication]: 哺乳动物线粒体 DNA 的链置换、RITOLS 与链耦联模型及其证据冲突见 Falkenberg 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4964852/)。
[^parental-histone-recycling]: 亲代组蛋白近似均衡分配、MCM2 与链偏向以及新组蛋白填补的机制见 Tian 等的[研究](https://www.nature.com/articles/s41467-023-39185-y)；染色质装配背景见[细胞核、染色质与核糖体](../cell/nucleus_chromatin.md#nucleosome-chromatin)。
[^telomere-replication]: 端粒复制叉障碍、前导／后随末端加工、端粒酶延伸与 CST 介导 C 链填补见 Bonnell 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8047117/)。
[^telomerase-discovery]: 四膜虫提取物对端粒引物的序列特异延伸活性见 Greider 与 Blackburn 的[原始论文](https://pubmed.ncbi.nlm.nih.gov/3907856/)。
[^reverse-transcriptase-discovery]: RNA 肿瘤病毒颗粒中 RNA 依赖 DNA 聚合活性的两项独立原始报告见 Baltimore 的[论文](https://pubmed.ncbi.nlm.nih.gov/4316300/)以及 Temin 和 Mizutani 的[论文](https://pubmed.ncbi.nlm.nih.gov/4316301/)。
[^retroviral-reverse-transcription]: tRNA 引发、RNase H、两次链转移、PPT 正链引发及 LTR 形成见 Hu 与 Hughes 的[机制综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3475395/)。
[^hepadnavirus-reverse-transcription]: hepadnavirus 以 pregenomic RNA 为中间体及 RT 自身 Tyr 蛋白引发的机制见 Hu 与 Seeger 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3611959/)。
[^retron-defense]: retron 由非编码 RNA、RT 与 msDNA 构成并参与抗噬菌体防御的遗传证据见 Millman 等的[研究](https://doi.org/10.1016/j.cell.2020.09.065)；多组分 retron 复合体的现代结构证据见相关[研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC11974896/)。
