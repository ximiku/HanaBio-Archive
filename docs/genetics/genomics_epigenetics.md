# 基因组学与表观遗传学

基因组学把遗传分析的对象从单个座位扩展到一整套 DNA 序列及其变异、同源关系和空间坐标；表观遗传学进一步追问：在序列基本不变时，一个基因组怎样形成可维持、可擦除或可重设的功能状态。二者相遇于“继承”这个问题。参考序列可以标出一个变异落在哪里，却不能代表物种中每一种单倍型；一次染色质测量可以显示某时刻的状态，也不能单独证明该状态会跨细胞分裂延续。因而，本页将序列、参考坐标、细胞状态和遗传证据分开讨论，再说明它们如何共同塑造表型。

## 基因组作为有边界的序列集合 { #genome-as-sequence-set }

一个生物的基因组包括某一套染色体或其他复制子所携带的全部遗传序列。对二倍体个体而言，两套同源染色体通常不是彼此相同的副本，而是由不同单倍型组成；线粒体、质体、质粒或病毒基因组还可能形成独立复制和分配的遗传系统。研究中所说的“基因组”必须同时交代对象和尺度：一个物种的参考组装、一名个体的二倍体序列、一个肿瘤克隆的体细胞基因组以及一群细胞的混合测序结果，回答的是不同问题。

真核基因组包含蛋白质编码基因、非编码 RNA 基因、顺式调控元件、内含子、重复序列、转座元件、着丝粒和端粒等成分。编码区只占其中一部分；基因也并非一律互不重叠，反义转录、嵌套基因和共享序列在多种基因组中都存在。C 值描述单倍体核 DNA 含量，物种间的 C 值与形态复杂程度不成简单比例；基因数同样不能充当复杂性的线性刻度。多倍化、重复序列和转座元件扩张可以显著改变基因组大小，而转录本选择、调控元件组合和细胞类型特异表达又使相近的基因数支持不同的生命史与形态。[^genome-complexity]

经典 DNA 复性实验曾按重新配对速度把剪切后的基因组分为快、中、慢组分：拷贝数高的重复序列在相同总 DNA 浓度下具有较高的互补序列有效浓度，通常较快复性，单拷贝或低拷贝序列较慢。复性动力学由片段长度、复杂度和实验条件共同决定，不能把每个速率组分机械等同于一种功能区域；现代组装和重复注释能够直接解析许多序列家族，却仍会在极长、高同一性的重复区受到限制。

### 基因同源关系的历史含义 { #gene-homology }

同源表示两个序列来自共同祖先，是历史关系而不是相似度等级。物种分化把祖先基因分到不同谱系时形成直系同源基因（orthologs）；同一谱系内发生基因重复后形成旁系同源基因（paralogs），其后还可随物种分化出更复杂的多对多关系；水平转移得到的同源序列有时称 xenologs。仅凭“位于不同物种”或“位于同一物种”不能判断类别，可靠判定通常需要基因树、物种树、共线性和基因组邻域共同支持。

重复为基因组演化提供额外拷贝。一个副本可因失活突变成为假基因，两个副本也可分担祖先功能、改变表达范围或获得新功能；串联重复、大片段重复和全基因组加倍留下的副本又经历不同的剂量约束。基因家族因而不是许多“相同基因”的清单，而是重复、丢失、转换和功能分化累积形成的谱系。血红蛋白等家族展示了重复与发育期表达分化，移动元件则能同时制造插入、重复和新的调控序列；其转座化学见[DNA 重组与转座](../molecular/dna_recombination.md#transposon-consequences)。[^gene-duplication]

## 参考序列的坐标功能与样本局限 { #reference-genome }

参考基因组把染色体序列组织为可共享的坐标系统，使基因、标记、变异和实验信号能够相互对齐。它是经过组装和校订的研究工具，不是物种的“正常基因型”，也不一定等同于任何一名完整个体。参考中缺失的序列、错误连接、重复区折叠和所选单倍型都会使一部分 reads 难以比对，进而影响变异发现与功能注释。

人类基因组计划于 1990 年启动，2001 年发表工作草图，2003 年宣布项目完成，国际联盟又在 2004 年发表完成序列分析；这些成果仍在高度重复的着丝粒、近端着丝粒和片段重复区留下缺口。T2T-CHM13 组装在 2022 年补齐了此前参考中大量未解析区域，说明“参考已完成”始终依赖当时的样本、技术和质量标准。[^human-reference] 但一条更连续的单倍型仍不能容纳人群中的全部序列。人类泛基因组参考把多个经过定相的组装共同表示；2023 年首版纳入 47 名遗传背景多样个体的二倍体组装，并在复杂区段揭示单线性参考难以呈现的结构等位。图式或多路径参考由此减少部分参考偏倚，却不会消除样本代表性、组装错误和群体命名带来的伦理问题。[^human-pangenome]

参考坐标与遗传图也应分开。物理坐标以碱基位置描述序列，遗传图以共同传递和重组概率描述标记关系；二者可互相锚定，却不存在固定的 cM—bp 换算。RFLP、微卫星、SNP、indel 和结构变异都可成为标记，是否有信息取决于亲本或群体中能否可靠分型，而不是技术名称属于哪一“代”。作图群体、LOD 与标记计分已在[连锁、交换与遗传作图](linkage_mapping.md#markers-populations)展开；测序化学、文库、组装和变异检测流程分别留给生物信息与实验栏目。

## 比较基因组学的过程推断 { #comparative-genomics }

比较两个组装时，首先要区分等位差异、旁系同源拷贝、组装错误和真正的物种间变化。保守共线区可帮助识别染色体片段的同源关系，基因树与物种树的不一致则可能来自重复—丢失、不完全谱系分选、基因渗入或水平转移。序列相似只提供候选关系，功能相似也不能反过来证明直系同源；正式推断应说明所用基因组、比对范围、树模型和替代解释。

基因组间差异跨越多个尺度，从单核苷酸、短 indel 和串联重复拷贝数，到倒位、易位、大片段重复和整套倍性变化。一个线性参考尤其容易漏掉高度分化或重复背景中的结构变异，因此长读长、单倍型分相和泛基因组会改变“可见变异”的集合。形成机制、减数行为、剂量与位置效应见[突变与染色体变异](chromosome_variation.md#variation-scales)；这里关注的是任何变异目录都受参考、样本和检测模型共同限定。

## 功能基因组学的状态与因果证据 { #functional-genomics }

基因组序列提供候选元件，功能基因组学则在细胞类型、发育阶段和环境条件下测量这些元件是否被转录、开放、结合、接触或修饰。RNA-seq 读取稳态转录本，nascent-RNA 方法更接近转录通量；ATAC-seq 或 DNase-seq 读取可及性，ChIP-seq／CUT&RUN 读取因子或组蛋白修饰富集，Hi-C 类方法读取群体中的接触频率。所谓“表观基因组”通常指某一细胞群在某一时刻的 DNA 修饰、染色质蛋白、可及性和空间组织等状态集合，不包括所有外界环境因素本身。

这些图谱之间的相关不能自动拼成因果链。开放染色质可允许因子结合，也可能由先结合的因子维持；增强子与启动子接近可促进转录，也可能是既有染色质环境的结果。细胞组成变化还能让群体测序产生虚假的状态差异。较强的机制证据需要在原位扰动候选元件或调控因子，记录分子事件的时间顺序，以 rescue、等位特异比较或正交方法排除邻近效应和技术偏倚。转录调控实验的完整证据层级见[基因表达调控](../molecular/gene_regulation.md#gene-regulation-evidence)。

## 表观遗传状态的建立、维持与读取 { #epigenetic-state }

“不改变 DNA 序列却影响表达”涵盖短暂转录因子结合、RNA 稳定性和代谢信号等大量调控，却不足以单独定义表观遗传。遗传分析中更有用的操作性定义是：某种细胞或等位状态在诱因消失后仍能通过有丝分裂维持，或者通过配子跨世代传递，同时其差异不能归因于 DNA 序列改变。建立（establishment）、读取（interpretation）、维持（maintenance）和擦除／重设（erasure or resetting）是四个可分离步骤；同一种分子标记可以参与其中某一步，却未必独自承载全部记忆。[^epigenetic-inheritance]

### DNA 甲基化的复制后不对称状态 { #dna-methylation }

哺乳动物 DNA 甲基化主要是胞嘧啶第 5 位的 5-methylcytosine（5mC），大量分布于 CpG 位点。DNMT3A／DNMT3B 参与从头建立，复制后的半甲基化 CpG 可由 UHRF1 等因子识别并招募 DNMT1，在新链上恢复局部图样。维持是概率性的区域过程，不是 DNMT1 逐位读取一条完整“甲基化模板”。TET 蛋白将 5mC 逐步氧化，氧化产物可随复制稀释，也可经 TDG 与碱基切除修复回到未修饰胞嘧啶；DNMT 维持不足则产生被动去甲基化。[^dna-methylation-memory]

甲基化的表达后果依赖位置和结合蛋白。启动子 CpG 岛的高甲基化常与稳定沉默相关，可直接妨碍一部分 DNA 结合蛋白，也可招募 methyl-CpG readers 和共抑制复合物；基因体、增强子、重复元件或基因间区的 5mC 不能沿用同一条“甲基化等于关闭”规则。植物还在 CG、CHG 和 CHH 等序列环境中利用不同维持路线及 RNA-directed DNA methylation；真菌和无脊椎动物的 DNA 甲基化量与分布高度多样。果蝇不应被概括为以 6mA 作为主要 DNA 修饰，其经典表观调控主要依赖蛋白和染色质体系，报道的痕量 6mA 还须严防细菌污染和检测特异性问题。

### 组蛋白修饰的位点、组合与读取者 { #histone-modifications }

组蛋白乙酰化、甲基化、磷酸化、泛素化等共价修饰改变核小体表面或招募特定结合蛋白。writer 加上修饰，eraser 去除修饰，reader 识别修饰并连接后续复合物。赖氨酸乙酰化常削弱正电荷并与开放、活跃染色质相关；赖氨酸甲基化本身不改变电荷，其含义随残基和甲基化级数变化，例如 H3K4me3 常富集于活跃启动子，H3K36me3 常见于转录基因体，H3K9me3 与许多构成性异染色质相连，H3K27me3 则是 Polycomb 抑制域的重要组成。H2A.X 在双链断裂附近的磷酸化首先是损伤信号，不能按“磷酸化激活或抑制”二分。[^histone-language]

“组蛋白密码”适合强调修饰组合与读取者，但不意味着一张跨细胞类型通用、单向决定表达的密码表。同一修饰既可能是酶招募后的结果，也可能帮助稳定该复合物；相邻修饰、组蛋白变体、核小体周转、DNA 序列和转录因子都会改变输出。ChIP 富集因此是状态证据，只有位点特异扰动、时间顺序和功能恢复才能检验某一修饰是否为必要或充分原因。

### 组蛋白变体与染色质重塑复合物 { #histone-variants-remodeling }

组蛋白变体通过专门伴侣在特定区域沉积，使核小体获得不同稳定性和结合界面。H3.3 常在高周转区和活跃基因富集，也参与端粒等其他环境；CENP-A 规定着丝粒核小体身份；H2A.Z 在启动子、增强子、边界和 DNA 修复中的结果取决于物种、修饰与邻近变体；H2A.X 连接 DNA 损伤响应，macroH2A 则常见于较稳定的抑制状态。变体的关联不是孤立功能标签，沉积位置和伴侣系统同样属于机制。[^histone-variants]

ATP-dependent chromatin remodelers 通过滑动、移除、重组或交换核小体改变 DNA 可及性。SWI/SNF、ISWI、CHD 和 INO80 家族共享 ATP 水解，却具有不同亚基、底物与生物学任务。它们常与转录因子、修饰酶和组蛋白伴侣协作，而不是作为一层独立于序列的万能开关。核小体和三维染色质的结构背景见[细胞核、染色质与核糖体](../cell/nucleus_chromatin.md#chromatin-states)。

## DNA 复制后的区域状态重建 { #mitotic-memory }

复制叉经过时，核小体被拆解，亲代 H3–H4 组分被回收到两条子 DNA，新组蛋白填补空缺。亲代修饰因而被稀释且空间分布并非逐核小体原样复制。某些系统通过“读—写”反馈恢复区域：结合残留 H3K9me3 或 H3K27me3 的复合物在附近新组蛋白上补写同类修饰；序列特异因子、非编码 RNA、核小体伴侣和三维邻域还可重新招募装置。DNA 甲基化的半甲基化中间态提供更直接的链间对应，但同样依赖定位、复制时序和修复。[^replication-memory]

细胞记忆因此通常由相互支持的网络保存。转录因子正反馈可在标记短暂丢失后重建表达，少数因子或染色质蛋白可在有丝分裂染色体上保留“bookmark”，局部 DNA 序列又持续提供成核位置。并非所有组蛋白修饰都跨细胞周期传递，也不能因一个修饰持续存在就断定它是记忆载体；应检验去除该修饰后状态是否丢失、恢复它能否重建状态，以及诱导信号撤除后维持多久。

## 生殖系重编程与跨世代继承边界 { #transgenerational-inheritance }

有丝分裂遗传发生在同一细胞谱系内，跨世代表观遗传则要求状态穿过减数分裂、配子发生和早期胚胎重编程。植物、真菌和部分动物中已有由 DNA 甲基化、组蛋白状态或小 RNA 支持的稳定 epiallele；哺乳动物生殖系和植入前胚胎则经历大范围甲基化与染色质重设，许多获得状态会被清除。少数位点、转座元件和配子成分可能逃逸或重新建立，但“亲代环境与子代表型相关”本身不能证明表观遗传信息直接传递。[^transgenerational-evidence]

实验必须排除 DNA 变异、持续环境、母体生理、胎盘、微生物群和行为传递。妊娠中的 F$_0$ 母体暴露会同时直接影响 F$_1$ 胚胎及其内部的 F$_2$ 生殖细胞，故 F$_3$ 才是第一个未直接暴露世代；父本受孕前暴露通常以 F$_2$ 作为首个未直接暴露世代。还须在配子中找到候选载体、跨代追踪其状态，并通过扰动与恢复连接到子代表型。这样的严格定义保留了跨世代继承的可能性，也避免把任何长期环境效应都重新命名为表观遗传。

## 基因组印记的亲本来源与状态重设 { #genomic-imprinting }

基因组印记使一小部分座位呈亲本来源特异的等位表达。关键标记在雌、雄配子发生中分别建立，受精后在相应体细胞谱系中维持，而进入下一代原始生殖细胞后又被擦除，并按该个体形成卵或精子的方向重新设定。这个循环解释了为什么来自祖母的染色体经父亲传递时可以获得父源状态；印记不是整条父源或母源染色体永久沉默，也不同于母体在卵中预装产物造成的母体效应。[^imprinting-cycle]

许多哺乳动物印记区由 imprinting control region（ICR）或 germline differentially methylated region（gDMR）协调一组编码基因和非编码 RNA。以 *H19*–*IGF2* 区为例，未甲基化的母源 ICR 可结合 CTCF 并限制共享增强子接触 *IGF2*，父源 ICR 甲基化后失去这一绝缘状态，使调控关系改写；其他印记簇则更多借助长非编码 RNA 和染色质沉默，不能把这一例外推为统一机制。印记表达还可随组织、发育时期和转录本改变，“只检测到单等位表达”也须排除随机单等位表达、顺式变异和测序比对偏倚。[^imprinting-mechanisms]

亲本来源、拷贝数和表观状态必须联合解释。Prader–Willi 与 Angelman 综合征都涉及 15q11–q13 区，但缺失、单亲二体、印记中心异常或特定基因变异可通过不同路径造成相应父源或母源功能缺失；具体检测与临床证据留给[人类遗传学](developmental_human.md)。X 染色体失活同样形成可维持的等位状态，却由染色体剂量和 *XIST* RNA 网络建立，不按每个座位的父母来源统一决定，详见[剂量补偿](sex_cytoplasmic.md#dosage-compensation)。

## 程序化基因组改变与表观遗传的边界 { #programmed-genome-change }

部分细胞通过 DNA 消除、局部扩增或重排改变自身基因组。纤毛虫体细胞核的广泛序列重排、某些线虫和昆虫的染色质消减、卵母细胞或卵巢支持细胞中的特定基因扩增、免疫细胞 V(D)J 重排和抗体类别转换都能改变可表达模板。这些变化可以受染色质和发育信号控制，但产物已经发生 DNA 序列或拷贝数改变，不能仅因其具有细胞类型特异性就归入“序列不变的表观遗传”。

经典体细胞交换、染色体丢失和单倍体化也能造成 loss of heterozygosity；其遗传读出见[连锁作图](linkage_mapping.md#recombination-landscape)，形成机制与肿瘤后果见[突变与染色体变异](chromosome_variation.md#structural-variant-formation)。程序化 DNA 消除、扩增和重排如何参与命运建立，则由[发育遗传学](developmental_genetics.md)继续承接。

## 表观遗传结论的状态、谱系与扰动证据 { #epigenetic-evidence }

一个完整结论至少应回答四个问题：测到的分子状态是什么，它位于哪些细胞和等位基因，能维持多少次分裂或多少代，以及扰动该状态是否改变表型。常规亚硫酸氢盐测序不能区分 5mC 与 5hmC；抗体富集受抗体特异性和染色质可及性影响；群体平均会掩盖少数细胞或等位混合。单细胞、多组学和长读长定相可改善空间与等位分辨率，但仍需独立验证。

最有力的设计把谱系追踪、等位特异测量、时间序列和因果扰动结合起来。研究“维持”时，应在建立信号撤除后观察多个细胞周期；研究“跨世代”时，应追踪到未直接暴露世代并控制遗传背景；研究“印记”时，应进行亲本来源可判定的互交。表观遗传学由这些严格的继承问题获得解释力，而不是把所有未找到 DNA 变异的表达差异装入同一类别。

## 参考资料与延伸阅读 { #references }

- Alberts B, Johnson A, Lewis J, et al. [How Genomes Evolve](https://www.ncbi.nlm.nih.gov/books/NBK26836/). In: *Molecular Biology of the Cell*. 4th ed. Garland Science; 2002.
- Nurk S, Koren S, Rhie A, et al. [The complete sequence of a human genome](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/). *Science*. 2022;376:44–53.
- Liao W-W, Asri M, Ebler J, et al. [A draft human pangenome reference](https://www.nature.com/articles/s41586-023-05896-x). *Nature*. 2023;617:312–324.
- Du W, Shi G, Shan C-M, et al. [Mechanisms of chromatin-based epigenetic inheritance](https://pmc.ncbi.nlm.nih.gov/articles/PMC10311375/). *Science China Life Sciences*. 2022;65:2162–2190.
- Kim M, Costello J. [DNA methylation: an epigenetic mark of cellular memory](https://pmc.ncbi.nlm.nih.gov/articles/PMC6130213/). *Experimental & Molecular Medicine*. 2017;49:e322.
- Martire S, Banaszynski LA. [The roles of histone variants in fine-tuning chromatin organization and function](https://pmc.ncbi.nlm.nih.gov/articles/PMC8245300/). *Nature Reviews Molecular Cell Biology*. 2020;21:522–541.
- Gardner KE, Allis CD, Strahl BD. [OPERating ON chromatin, a colorful language where context matters](https://pmc.ncbi.nlm.nih.gov/articles/PMC3085666/). *Journal of Molecular Biology*. 2011;409:36–46.
- Li Y, Sasaki H. [Genomic imprinting in mammals: its life cycle, molecular mechanisms and reprogramming](https://pmc.ncbi.nlm.nih.gov/articles/PMC3193417/). *Cell Research*. 2011;21:466–473.
- Bartolomei MS, Ferguson-Smith AC. [Mammalian genomic imprinting](https://pmc.ncbi.nlm.nih.gov/articles/PMC3119911/). *Cold Spring Harbor Perspectives in Biology*. 2011;3:a002592.
- Horsthemke B. [A critical view on transgenerational epigenetic inheritance in humans](https://pmc.ncbi.nlm.nih.gov/articles/PMC6065375/). *Nature Communications*. 2018;9:2973.

[^genome-complexity]: 真核基因组的编码与非编码成分、重复序列以及基因数与复杂性之间的关系，见 Alberts 等的教材章节 [How Genomes Evolve](https://www.ncbi.nlm.nih.gov/books/NBK26836/)；重复—分化也是基因家族形成的核心过程。
[^gene-duplication]: 基因重复后的丢失、假基因化、功能分担与分化见 [How Genomes Evolve](https://www.ncbi.nlm.nih.gov/books/NBK26836/)；ortholog／paralog 必须按物种分化与基因重复事件界定，而非按物种内外位置机械分类。
[^human-reference]: T2T Consortium 对 T2T-CHM13 的组装、此前缺口与新增重复区序列的报告见 Nurk 等的[研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC9186530/)；人类基因组计划的草图、完成与论文节点见 NHGRI 的[项目时间线](https://www.genome.gov/human-genome-project/timeline)。
[^human-pangenome]: 47 名个体的定相二倍体组装、图式参考和复杂结构变异改进见 Liao 等的[人类泛基因组研究](https://www.nature.com/articles/s41586-023-05896-x)；泛基因组是扩展参考而非穷尽人类多样性。
[^epigenetic-inheritance]: DNA 甲基化、组蛋白修饰／变体、染色质重塑和非编码 RNA 如何参与状态建立与复制后恢复，以及并非所有标记都可遗传，见 Du 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC10311375/)。
[^dna-methylation-memory]: DNMT1–UHRF1 维持、DNMT3 从头建立、TET 氧化及被动／修复依赖去甲基化见 Kim 与 Costello 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6130213/)；表达后果依赖基因组位置和细胞状态。
[^histone-language]: writer／reader／eraser、修饰组合及位点依赖输出见 Gardner 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3085666/)；组蛋白修饰的富集模式不能自动证明因果。
[^histone-variants]: H3.3、CENP-A、H2A.Z、H2A.X 和 macroH2A 的沉积系统、染色质环境及多重功能见 Martire 与 Banaszynski 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8245300/)。
[^replication-memory]: 复制时亲代组蛋白回收、新组蛋白填补及局部 read–write 反馈的证据和未决机制见 Du 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC10311375/)；这是一种区域重建而非逐核小体复制。
[^transgenerational-evidence]: 哺乳动物跨世代研究中重编程、直接暴露世代与遗传／环境混杂的判据见 Horsthemke 的[批判性综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6065375/)。
[^imprinting-cycle]: 哺乳动物印记在配子中建立、合子和体细胞中维持、原始生殖细胞中擦除并按性别重设的生命周期，见 Li 与 Sasaki 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3193417/)。
[^imprinting-mechanisms]: ICR／gDMR、CTCF 绝缘和长非编码 RNA 等不同印记机制见 Bartolomei 与 Ferguson-Smith 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3119911/)；单等位表达本身不足以证明亲本来源印记。
