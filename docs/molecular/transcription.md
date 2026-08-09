# 转录与RNA生物合成

转录把核酸模板的一段序列复制为 RNA。细胞用它生成可被翻译的 mRNA，也生成 rRNA、tRNA、snRNA、snoRNA、RNase P RNA、信号识别颗粒 RNA 等结构性或催化性 RNA。每条产物都来自有方向的转录单位：启动子规定聚合酶在何处、朝哪个方向起始，终止区和相关因子规定何处释放 RNA，而转录后的加工、修饰和降解继续决定成熟分子的边界与寿命。

DNA 依赖的 RNA 聚合酶负责细胞转录；RNA 病毒和少数细胞系统还使用 RNA 依赖的 RNA 聚合酶。两类酶都以核苷三磷酸为底物并沿模板合成 RNA，却属于不同的复制系统。这里先建立细胞转录的共同化学和跨域机制，再说明细胞器与病毒 RNA 合成的边界；RNA 加工、翻译和表达量调控分别由后续页面展开。

## RNA 聚合酶在局部转录泡中复制模板序列 { #transcription-chemistry }

RNA 聚合酶无需预先存在的引物即可从头起始。活性中心选择与模板碱基互补的 NTP，使新生 RNA 的 3′-OH 进攻进入 NTP 的 α-磷酸，释放焦磷酸并把链延长一个核苷酸。聚合方向始终为 5′→3′，因而酶沿 DNA 模板链按 3′→5′ 方向前进。催化依赖活性中心的二价金属离子、bridge helix 和 trigger loop 等结构；NTP 的 2′-OH 识别、正确碱基配对和活性中心闭合共同排斥 dNTP 及错配底物。[^multisubunit-rnap]

聚合酶只在前方打开一小段 DNA，维持约一个十余碱基的 RNA–DNA hybrid，并在后方让两条 DNA 重新配对。离开酶的 RNA 不再与整段模板保持双链。DNA 开链和酶的移动会在复合物前后产生相反方向的扭转应力，由拓扑异构酶、染色质结构和相邻转录复合物共同吸收；相关拓扑概念见[核酸与核苷酸](../biochem/nucleic_acid.md#dna-topology-supercoiling)。

模板链和编码链是针对一个转录单位定义的。RNA 序列除以 U 代替 T 外，与该单位的编码链相同，并与模板链互补；相邻基因可以朝相反方向转录，同一条染色体链因而可在一个基因处是模板链，在另一个基因处是编码链。“Watson／Crick”“有意义／无意义”不能替代这种局部、方向性的定义。转录起点记为 +1，上游和下游位置也随该转录方向确定。

转录中出现的错配会降低 RNA 的当次功能，却通常不会写回基因组。聚合酶可在错配、缺少底物、DNA 损伤或核小体等障碍前暂停并 backtrack，使 RNA 3′ 端退出活性中心；细菌 Gre、古菌 TFS 和真核 TFIIS 可促进切除突出 RNA，重新产生可延伸的 3′-OH。这个以回退和切割为核心的校正提高转录忠实性，但与 DNA 复制中保留遗传信息的校对和错配修复承担不同后果。[^transcription-elongation]

## 多亚基聚合酶的共同祖先形成三域不同装置 { #rnap-across-domains }

细菌、古菌和真核细胞核的 RNA 聚合酶共享钳形构架与同源催化亚基。细菌通常以一套核心酶转录各类 RNA；古菌也以一套更接近真核 Pol II 的多亚基酶工作；真核细胞核则把祖先机器分化为 Pol I、Pol II 和 Pol III。它们使用不同启动因子选择基因，却在 RNA–DNA hybrid、bridge helix、trigger loop、暂停、回退和转录本切割等基本反应上保留共同逻辑。[^multisubunit-rnap]

聚合酶并不单独决定哪些位点成为启动子。细菌核心酶与 σ 因子组成 holoenzyme；古菌主要由 TBP、TFB 和 TFE 建立起始复合物；真核三种核内聚合酶各自借助通用转录因子和共激活复合物定位。启动子因此是一组在特定机器和细胞状态下提高定向起始概率的顺式序列，而不是跨物种通用的固定短字符串。

多聚核苷酸磷酸化酶（PNPase）可在体外用 NDP 逆向合成 RNA，但细胞内主要参与 RNA 磷酸解和代谢，不是从 DNA 启动子转录基因的 RNA 聚合酶。噬菌体 T7 类、真核线粒体和部分质体的聚合酶则属于另一支单亚基家族；它们同样催化 DNA 依赖的 RNA 合成，却不应按“没有四级结构的简化版细胞核聚合酶”理解。

## 细菌以 σ 因子选择启动子 { #bacterial-initiation }

典型细菌核心酶由 α₂ββ′ω 组成：β 与 β′ 构成催化裂隙，α 亚基参与装配并接触一部分调控因子或 upstream element，ω 有助于装配和稳定。σ 因子把核心酶带到特定启动子集合。以大肠杆菌 σ⁷⁰ 启动子为例，−35 和 −10 元件及其间距共同影响结合与开链，富 AT 的 UP element 还可由 α 亚基 C 端识别；实际启动子允许广泛变异，其他 σ 家族、σ⁵⁴ 系统和其他细菌谱系使用的元件也不同。[^bacterial-initiation]

holoenzyme 与双链启动子先形成 closed complex，再经异构化打开起点附近 DNA，生成 open complex。最初几个磷酸二酯键在仍受启动子接触约束的空间内形成，聚合酶可通过 DNA scrunching 累积应力并多次释放短 abortive transcripts。新生 RNA 增长后与 σ 的部分接触竞争，复合物完成 promoter escape，进入稳定延伸。

σ 因子的命运不是必然在某一长度瞬间完全解离。它的一部分与核心酶的接触会在逃逸时重排，部分复合物仍可把 σ 保留到早期甚至更远的延伸阶段，并在特定序列诱导 σ-dependent pause。NusA、NusG 等延伸因子的结合也不是用一个因子机械替换另一个因子的固定接力。[^bacterial-initiation]

## 延伸中的暂停把转录接到翻译、修复与调控 { #elongation-coupling }

进入延伸后，聚合酶可以连续合成长 RNA，但 DNA 序列、RNA hairpin、核苷酸供应、DNA 结合蛋白、拓扑应力和损伤都会改变速度。短暂停顿可让 RNA 折叠、转录因子装配或下游反应同步；更深的 backtrack 会遮蔽 RNA 3′ 端，需要 Gre 类切割因子复活。发夹和 U-rich RNA 可以参与某些暂停，却不是所有暂停事件的共同定义。

细菌没有核膜隔开转录和翻译，核糖体可在 mRNA 仍连接聚合酶时开始翻译。领先核糖体能阻止部分 RNA 结构或 Rho 结合，并可能推动回退的聚合酶；在一些系统中，NusG 的两端分别接触 RNA 聚合酶和核糖体蛋白 uS10，NusA 进一步改变复合物构象，形成不同状态的 expressome。物理耦联的紧密程度和普遍性随物种、基因和生理状态变化，枯草芽孢杆菌等系统可让聚合酶明显领先核糖体，因此“原核转录与翻译总是锁成一个复合物”并不成立。[^transcription-translation-coupling]

模板链上的 bulky lesion 可使聚合酶成为损伤传感器。细菌 Mfd 能推动并移走停滞复合物、招募 UvrA；哺乳动物 Pol II 停滞后由 CSB、CSA、UVSSA 等组织 transcription-coupled nucleotide excision repair。这里的共同接口是“转录停滞使模板链损伤优先进入修复”，两域装置并非简单一一同源；切除与修复反应见[DNA损伤、修复与突变](dna_repair.md#nucleotide-excision-repair)。[^transcription-coupled-repair]

## 细菌终止依赖 RNA 结构或蛋白因子 { #bacterial-termination }

intrinsic termination 通常由新生 RNA 中靠近 3′ 端的稳定发夹和随后一段 U-rich 序列共同触发。发夹在 RNA 出口附近形成，扰动延伸复合物；较弱的 rU–dA hybrid 又有利于 RNA 和 DNA 从活性中心分离。NusA、聚合酶构象、发夹长度和周围序列都会改变效率，并非见到回文序列或 poly(U) 就能单独判定必然终止。不同细菌及古菌对经典大肠杆菌终止子的响应也不相同。[^bacterial-termination]

Rho-dependent termination 由六聚体 Rho 在暴露、较少形成二级结构且常富 C 的 nascent RNA 上装载。Rho 以 RNA 依赖 ATP 水解驱动 5′→3′ 易位，并在聚合酶暂停时通过接触、构象改变或拆解 RNA–DNA hybrid 终止转录。正在翻译的核糖体可遮蔽 rut 区域，所以 Rho 同时帮助终止未翻译、异常或外源的转录。Rho 的贡献随细菌谱系而异，终止子也不能按“弱的一律依赖 Rho、强的一律不依赖”二分。[^bacterial-termination]

## 古菌组合真核型机器与自身转录周期 { #archaeal-transcription }

古菌通常只有一套由约 11–13 个亚基组成的 RNA 聚合酶，其催化亚基与真核 Pol II 同源。TBP 结合 TATA 元件，TFB 识别邻近 BRE 并定位起点，TFE 可稳定开链；这套最小系统无需细菌 σ 因子。启动子逃逸后，Spt4/5、Elf1 等延伸因子稳定下游 DNA 通道，TFS 则通过转录本切割复活 backtracked complex。[^archaeal-transcription]

许多古菌的 intrinsic termination 依赖非模板链 oligo(dT) 所对应的弱 rU–dA hybrid，不要求细菌式上游 RNA hairpin。aCPSF1／FttA 等核酸酶还能在部分谱系切割新生 RNA 并促进因子依赖终止。古菌缺少核膜，转录也可与翻译发生功能耦联；同时，古菌组蛋白或其他染色质蛋白会改变启动和延伸。由此形成的系统在聚合酶与基础因子上接近真核，在细胞空间和部分终止策略上又呈现原核式约束。

## 真核细胞核把 RNA 产物分配给三种聚合酶 { #nuclear-rna-polymerases }

Pol I 在核仁组织区转录串联 rDNA，生成包含 18S、5.8S 和 28S rRNA 的长前体；5S rRNA 另由 Pol III 合成。Pol II 产生绝大多数 pre-mRNA，也转录多类长非编码 RNA、miRNA 前体以及部分 snRNA、snoRNA。Pol III 主要生成 tRNA、5S rRNA、U6 snRNA、7SL、7SK、RNase P RNA 等较短结构性 RNA。具体分工存在谱系和基因特例，RNA 的类别仍应由产物边界、加工和功能共同界定，而不能只凭聚合酶编号推断。[^eukaryotic-rnap-division]

Pol I 的 rDNA promoter 在哺乳动物中由含 TBP 的 SL1 复合物识别，UBF 改变启动子 DNA 构象并促进 promoter escape，RRN3 把可起始的 Pol I 招募到复合物。Pol III 则有三类主要启动子架构：5S rRNA 基因需要 TFIIIA、TFIIIC 和 TFIIIB；tRNA 基因的内部 A／B boxes 由 TFIIIC 识别后在上游定位 TFIIIB；U6 等 type 3 promoter 的元件位于转录区上游。内部启动子会成为初级转录本的一部分，成熟 RNA 的边界由后续加工产生。[^pol-i-pol-iii]

陆生植物还从 Pol II 谱系分化出 Pol IV 和 Pol V。Pol IV 参与产生 RNA-directed DNA methylation 所需的小 RNA 前体，Pol V 生成有助于定位沉默复合物的 scaffold RNA；它们不取代 Pol I–III 的一般分工。snRNA、snoRNA、miRNA、piRNA、lncRNA、tmRNA、gRNA 和端粒酶 RNA 等名称也不处在同一分类层级：有的按结构命名，有的按定位或功能命名，有的还由更长前体加工而来。具体成熟路线见[RNA转录后加工](rna_processing.md)。

## Pol II 起始把启动子识别交给通用因子与 Mediator { #pol-ii-initiation }

Pol II core promoter 可以组合 TATA box、initiator、BRE、downstream promoter element 等不同元件，没有任何一个元件存在于全部启动子。TFIID 中的 TBP 和 TAFs 识别其中一部分序列，TFIIA 稳定复合物，TFIIB 连接启动子与 Pol II–TFIIF；TFIIE 和 TFIIH 随后加入，形成 preinitiation complex。远端 enhancer、序列特异性转录因子、共激活因子和 Mediator 改变这套机器装配的概率，属于[基因表达调控](gene_regulation.md)的主线。[^pol-ii-initiation]

TFIIH 的 XPB 亚基以 ATP 驱动下游 DNA 易位，帮助建立 open complex；其 CDK7 模块磷酸化 Pol II 最大亚基 RPB1 的 C-terminal domain（CTD）。最初合成的短 RNA 需要越过 TFIIB 等起始接触，随后 Pol II 完成 promoter escape。所谓“DABFEH”只是一种体外逐步组装的教学简写，细胞内可由预装复合物、不同共激活因子和无 TATA 启动子走出多种装配路径。

## Pol II 延伸与染色质和 RNA 加工同步推进 { #pol-ii-elongation }

许多后生动物基因的 Pol II 在起点下游发生 promoter-proximal pausing。DSIF 与 NELF 稳定暂停，P-TEFb 等因子的磷酸化促进进入 productive elongation。沿基因体前进时，Pol II 需要局部解开核小体 DNA；FACT、Spt6、PAF1 complex、染色质重塑因子和组蛋白修饰系统帮助越过屏障，并在酶后方重新组织组蛋白。一次转录不等同于永久清除整条基因上的核小体。[^pol-ii-chromatin]

CTD 的重复序列经动态磷酸化形成加工因子结合平台。5′ capping machinery 在新生 RNA 很短时被招募，剪接体可在内含子仍从聚合酶中输出时组装，3′ end processing factors 则在聚合酶到达末端前后工作。转录速度、暂停位置和染色质会改变这些反应的时间窗口，但共转录发生不表示每个加工步骤都必须在 Pol II 脱离 DNA 前完成。

## 三种核内聚合酶以不同方式结束转录 { #eukaryotic-termination }

多数哺乳动物 protein-coding genes 的 Pol II 先转录 polyadenylation signal 及下游序列。CPSF、CstF 等识别信号后由 CPSF73 切开新生 RNA，上游产物随后加 poly(A)；Pol II 仍可继续向下游延伸，XRN2 从切口后的 5′ 端降解 RNA 并追上聚合酶，配合延伸复合物的构象变化促成终止。因此 AAUAAA 主要是 RNA 3′ 端切割与加尾机器的识别信号，切割位点、加尾和 Pol II 从 DNA 脱离不是同一个坐标或瞬时事件。histone genes、snRNA 等 Pol II 转录单位还使用不同的 3′ 端形成装置。[^pol-ii-termination]

Pol I 在哺乳动物中可由 TTF-I 结合 rDNA 终止区并协同转录本释放与聚合酶回收，其具体因子在物种间差异很大。Pol III 自身能识别非模板链短 oligo(dT) tract 并在相应 RNA 的 U-rich 末端暂停、释放，不需要先形成细菌 intrinsic terminator 的 GC hairpin。三种聚合酶都必须结束稳定的 RNA–DNA–enzyme complex，却没有一套可互换的“真核终止机制”。

## 细胞器保留不同进化来源的转录机器 { #organelle-transcription }

哺乳动物线粒体使用噬菌体型单亚基 POLRMT。TFAM 弯曲并识别 promoter DNA，TFB2M 帮助开链和起始，TEFM 提高长距离延伸能力；两条链的启动产生长 polycistronic precursors，经切割形成 rRNA、tRNA 和 mRNA。部分从 light-strand promoter 产生的短 RNA 还能作为线粒体 DNA 复制引物，使转录与复制在同一聚合酶处发生接口。其他真核谱系的线粒体因子和转录单位组织可以不同，不能把哺乳动物 HSP／LSP 体系外推为所有线粒体。[^mitochondrial-transcription]

陆生植物质体同时使用两类酶。plastid-encoded polymerase（PEP）是细菌型多亚基核心，其 σ 因子和多种伴随蛋白由细胞核编码；nucleus-encoded polymerase（NEP）则是噬菌体型单亚基酶。PEP 与 NEP 的靶基因重叠并随质体发育和环境改变分工，不能简单归纳为“一种只转录光合基因，另一种只转录管家 RNA”。这套双聚合酶系统也不是所有藻类和质体谱系的固定配置。[^plastid-transcription]

## RNA 模板复制属于病毒与特殊细胞系统的另一条信息流 { #rna-dependent-rna-synthesis }

RNA-dependent RNA polymerase（RdRP）以 RNA 为模板按 5′→3′ 方向合成 RNA。多数 RNA 病毒依靠病毒编码 RdRP 复制基因组并产生 mRNA：positive-sense RNA genome 常可先作为 mRNA 翻译出复制机器；negative-sense 和 double-stranded RNA genome 不能直接承担这一启动步骤，病毒颗粒通常必须携带可用的聚合酶。是否生成 subgenomic RNAs、是否在衣壳内转录、是否使用蛋白引物以及 mRNA 的帽和尾结构都由病毒类群决定。[^viral-rdrp]

“复制”生成可进入后代病毒的全长基因组或互补模板，“转录”生成供翻译的 mRNA；同一 RdRP 可通过起始位点、核蛋白状态和辅助因子在两种任务间切换。细胞真核生物也有 RdRP 参与小 RNA 扩增或 RNA silencing，但动物、植物、真菌和原生生物的保留情况不同。RNA 病毒生活史、宿主范围和装配见[病毒与亚病毒因子](../micro/viruses.md)，此处只用 RdRP 说明遗传信息可以在 RNA 模板之间传递。

## 转录机制由互补证据而非单一信号重建 { #transcription-evidence }

启动子和转录单位可由 5′ end mapping、nascent RNA sequencing、polymerase occupancy、promoter mutagenesis 和体外重构共同界定。EMSA 或 DNase footprinting 能显示蛋白结合及受保护 DNA，却不能单独证明该位点在细胞内产生正确方向、正确起点的 RNA；steady-state RNA abundance 还混合了合成、加工与降解。相关实验操作和定量设计归入[核酸杂交、探针与分子互作检测](../exptech/biochem_molecular/molecular_probes.md)。

rifamycin 与细菌 RNA 聚合酶的结合、α-amanitin 对真核 Pol II 易位的抑制，以及 actinomycin D 插入 DNA 后对核酸合成的阻碍，都曾帮助定位机制。它们的敏感性受酶、物种、剂量、摄取和处理时间影响；cordycepin 还会进入腺苷代谢并扰动 RNA 3′ 端形成。药物导致 RNA 减少不能自动判定受影响的是起始、延伸、加工还是稳定性，也不宜把体外选择性改写成跨系统的固定强弱表。

## 参考资料与延伸阅读 { #references }

- Saecker RM, Record MT Jr, deHaseth PL. [Mechanism of bacterial transcription initiation: RNA polymerase–promoter binding, isomerization to initiation-competent open complexes, and initiation of RNA synthesis](https://pmc.ncbi.nlm.nih.gov/articles/PMC3440003/). *Journal of Molecular Biology*. 2011;412:754–771.
- Santangelo TJ, Artsimovitch I. [Termination and antitermination: RNA polymerase runs a stop sign](https://pmc.ncbi.nlm.nih.gov/articles/PMC3125153/). *Nature Reviews Microbiology*. 2011;9:319–329.
- Gehring AM, Walker JE, Santangelo TJ. [Transcription regulation in Archaea](https://pmc.ncbi.nlm.nih.gov/articles/PMC4936096/). *Journal of Bacteriology*. 2016;198:1906–1917.
- Archuleta SR, Goodrich JA, Kugel JF. [Mechanisms and functions of the RNA polymerase II general transcription machinery during the transcription cycle](https://pmc.ncbi.nlm.nih.gov/articles/PMC10886972/). *Biomolecules*. 2024;14:176.
- Russell J, Zomerdijk JCBM. [The RNA polymerase I transcription machinery](https://pmc.ncbi.nlm.nih.gov/articles/PMC3858827/). *Biochemical Society Symposium*. 2006;73:203–216.
- Turowski TW, Tollervey D. [Transcription by RNA polymerase III: insights into mechanism and regulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC5095917/). *Biochemical Society Transactions*. 2016;44:1367–1375.
- Eaton JD, West S. [An end in sight? Xrn2 and transcriptional termination by RNA polymerase II](https://pmc.ncbi.nlm.nih.gov/articles/PMC6150625/). *Transcription*. 2018;9:198–203.
- Webster MW, Weixlbaumer A. [Macromolecular assemblies supporting transcription–translation coupling](https://pmc.ncbi.nlm.nih.gov/articles/PMC8632081/). *Transcription*. 2021;12:103–125.
- Basu U, Bostwick AM, Das K, Dittenhafer-Reed KE, Patel SS. [Structure, mechanism, and regulation of mitochondrial DNA transcription initiation](https://pmc.ncbi.nlm.nih.gov/articles/PMC7939475/). *Journal of Biological Chemistry*. 2020;295:18406–18425.
- Yagi Y, Shiina T. [Recent advances in the study of chloroplast gene expression and its evolution](https://pmc.ncbi.nlm.nih.gov/articles/PMC3933795/). *Frontiers in Plant Science*. 2014;5:61.
- Ferrero D, Ferrer-Orta C, Verdaguer N. [Viral RNA-dependent RNA polymerases: a structural overview](https://pubmed.ncbi.nlm.nih.gov/29900492/). *Subcellular Biochemistry*. 2018;88:39–71.

[^multisubunit-rnap]: 多亚基 RNA 聚合酶的共同钳形结构、RNA–DNA hybrid、bridge helix、trigger loop 和两金属催化框架见 Archuleta 等的[机制综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC10886972/)及细菌延伸结构的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9398977/)。
[^transcription-elongation]: 暂停、backtracking、RNA 3′ 端切割及 Gre／TFS／TFIIS 的同源功能见[转录延伸综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4674076/)和[结构综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9398977/)。
[^bacterial-initiation]: σ 因子、−10／−35 元件、open complex、DNA scrunching、abortive initiation 及 σ retention 的证据见[细菌起始机制综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3440003/)和[σ 因子选择性综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7046172/)。
[^transcription-translation-coupling]: NusG／NusA expressome 的结构状态及物种间耦联差异见 Webster 与 Weixlbaumer 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8632081/)和 Wang 等的[结构研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC7566311/)。
[^transcription-coupled-repair]: 细菌 Mfd 移除停滞 RNA 聚合酶并招募 UvrA 的单分子证据见 Howan 等的[研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC3475728/)；真核 CSB 介导的 TC-NER 组织及基因组证据见[机制综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8205993/)。
[^bacterial-termination]: intrinsic terminator、Rho–rut 装载、ATP 驱动易位以及不同细菌终止信号差异见 Santangelo 与 Artsimovitch 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3125153/)及 Roberts 的[延伸与终止综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4496710/)。
[^archaeal-transcription]: TBP–TFB–TFE 起始、Spt4/5／TFS 延伸、oligo(dT) 和因子依赖终止见[古菌转录综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7714419/)及[转录调控综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4936096/)。
[^eukaryotic-rnap-division]: Pol I、II、III 的结构同源性、主要转录本和专一因子见 Archuleta 等的[Pol II 综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC10886972/)、Russell 与 Zomerdijk 的[Pol I 综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3858827/)及 Turowski 与 Tollervey 的[Pol III 综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5095917/)。
[^pol-i-pol-iii]: 哺乳动物 SL1–UBF–RRN3 组装和 Pol I promoter escape 见 Russell 与 Zomerdijk 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3858827/)；Pol III 三类启动子、TFIIIA／TFIIIC／TFIIIB 和 oligo(dT) 终止见[Pol III 机制综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4884153/)。
[^pol-ii-initiation]: Pol II core promoter 的组合多样性、TFIID–TFIIH、Mediator、XPB 开链和 CDK7–CTD 作用见 Archuleta 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC10886972/)及[共激活因子综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC11088444/)。
[^pol-ii-chromatin]: Pol II 暂停、productive elongation、FACT／Spt6 与核小体拆装的结构证据见[Pol II 转录周期综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC10886972/)和[染色质延伸结构综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC11649447/)。
[^pol-ii-termination]: CPSF73 切割、polyadenylation signal、XRN2 torpedo 与构象变化共同促进终止的证据见 Eaton 与 West 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6150625/)及 Eaton 等的[条件性耗竭研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC5830926/)。
[^mitochondrial-transcription]: 哺乳动物 POLRMT–TFAM–TFB2M 起始、TEFM 延伸、polycistronic transcription 及复制引物接口见[线粒体转录机制综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6699104/)和 Basu 等的[机制综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7939475/)。
[^plastid-transcription]: 陆生植物质体 PEP／NEP 的不同进化来源、σ 因子和发育分工见 Yagi 与 Shiina 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3933795/)及[质体基因表达综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC10504595/)。
[^viral-rdrp]: positive-sense、negative-sense 与 double-stranded RNA virus 对 RdRP、互补模板和颗粒携酶需求的共同框架及类群差异见[病毒复制教材章节](https://pmc.ncbi.nlm.nih.gov/articles/PMC7173592/)。
