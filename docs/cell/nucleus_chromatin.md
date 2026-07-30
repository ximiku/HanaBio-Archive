# 细胞核、染色质与核糖体

细胞核把基因组置于与胞质不同的反应环境中，却没有把两者隔绝。核被膜及核孔复合体控制物质交换，核纤层、染色质和无膜核体共同安排基因组在三维空间中的位置；核仁又把核糖体 RNA 的合成、加工与亚基装配接入胞质蛋白质合成。多数真核细胞在生命史的某一阶段具有细胞核，但成熟哺乳动物红细胞等细胞会失去细胞核，骨骼肌纤维等细胞则可含多个细胞核。这些变体说明，核的数量和形态服从细胞分化与功能，而不是判定活细胞的孤立标准。[^nuclear-compartment]

## 核被膜建立连续而有门控的边界 { #nuclear-envelope }

核被膜由内、外两层膜及两者之间的核周隙组成。外核膜与粗面内质网相连，核周隙也与内质网腔连续；外膜可结合核糖体，内膜则富集 lamin 受体、染色质连接蛋白和其他核内侧蛋白。两层膜在核孔处汇合，使核孔复合体成为核质与胞质之间的主要水相通道。膜的连续性把核被膜纳入内膜系统，内外膜不同的蛋白组成又维持了各自身份。分泌蛋白进入内质网的路线见[蛋白质进入内质网](endomembrane.md#er-protein-entry)。[^nuclear-envelope-source]

内核膜下方的核纤层主要由 A 型和 B 型 lamin 组成。lamin 属于中间丝超家族，但形成的网架比典型胞质中间丝更薄、更动态；它支撑核形态，连接核孔和内膜蛋白，并为部分染色质提供周边接触位点。SUN 蛋白跨越内核膜，KASH 蛋白跨越外核膜，二者在核周隙结合成 LINC 复合体，把核纤层同 actin、微管马达或中间丝连接起来。这样，细胞迁移、肌肉收缩和外界机械力可以改变核的位置、形状及染色质环境；胞质侧的骨架接口见[中间丝网络](cytoskeleton.md#intermediate-filament-networks)。[^lamina-linc]

许多动物细胞进入有丝分裂时，CDK 等激酶促使 lamin 和核孔蛋白磷酸化，核被膜解体；分裂结束后，染色质、内质网膜片和去磷酸化的核孔／lamin 组分重新装配。另一些真核生物采用封闭或半开放式有丝分裂，核被膜始终保留或只局部重构。因此，“核膜消失”是特定谱系和分裂方式的事件，完整调控属于[细胞周期与细胞分裂](cell_cycle.md)。

## 核孔复合体选择性地连接核质与胞质 { #nuclear-pore-transport }

### 核孔的支架与选择屏障 { #nuclear-pore-architecture }

核孔复合体（nuclear pore complex, NPC）具有近八重旋转对称的环状支架，胞质侧伸出丝状结构，核质侧形成核篮。膜环核孔蛋白把复合体锚定在孔膜，内环与外环构成可变形支架；含苯丙氨酸—甘氨酸重复序列的 FG-nucleoporin 在中央通道形成动态、选择性的相互作用环境。冷冻电子断层成像和结构预测已把人 NPC 描述为由多个重复亚复合体拼装的巨大机器，同时也显示不同细胞状态、物种和运输负荷下的构象并不完全相同。经典电镜中的“中央塞”常包含正在通过的货物，不能当作每个 NPC 固有的独立阀门。[^npc-architecture]

水、离子和较小溶质可在浓度梯度驱动下被动通过，分子的大小、形状、表面性质和 FG 网络状态共同影响通透性，因而不存在适用于所有货物的单一直径或相对分子质量截点。大型蛋白质与核糖核蛋白通常依赖可逆地结合 FG-nucleoporin 的运输受体；NPC 本身并不读取每一种货物，而是读取货物—受体复合体的相互作用性质。

### Ran 梯度赋予蛋白运输方向 { #ran-directed-transport }

经典核输入中，importin 在胞质识别含核定位信号（NLS）的货物，复合体穿过 FG 网络后在核内遇到 Ran-GTP；Ran-GTP 与 importin 结合，促使货物释放。经典核输出中，exportin、带核输出信号的货物和 Ran-GTP 在核内形成复合体，抵达胞质后因 Ran 水解 GTP 而解离。核内 RanGEF 维持 Ran-GTP，胞质侧 RanGAP 促进水解，由空间分隔建立方向性。NLS 或核输出信号可位于蛋白内部，也可在复合体形成、磷酸化或构象变化后才暴露，因此信号的位置和可及性都参与调控。[^nuclear-transport]

RNA 输出使用多条路线。tRNA、部分小 RNA 和前核糖体亚基可借助 exportin 与 Ran 系统；多数成熟 mRNA 则装配成 messenger ribonucleoprotein，经 NXF1—NXT1 等受体输出，并由胞质侧 ATP 依赖 RNA 解旋酶使运输获得净方向。核蛋白还会持续输入，为转录、RNA 加工和核糖体装配补充组分。核质运输的能源因而来自维持 Ran 核苷酸状态、RNA 重塑和货物装配等过程，不能概括成“通过核孔本身不耗能”。

## 核小体把长 DNA 转化为可调节的染色质 { #nucleosome-chromatin }

真核染色质的基本重复单元是核小体。约 146—147 bp DNA 绕组蛋白八聚体约 1.65 圈；八聚体由两个 H2A—H2B 二聚体和一个 $(\mathrm{H3-H4})_2$ 四聚体组成。相邻核心颗粒之间由长度可变的连接 DNA 相接，H1 等连接组蛋白可稳定 DNA 的进出端并促进更高层组织。核小体重复长度、H1 占有量和连接区长度随物种、细胞类型和基因组位置变化，不能用固定的 200 bp 重复和 60 bp 连接区描述所有染色质。[^nucleosome-structure]

组蛋白变体赋予局部核小体不同性质：例如 CENP-A 参与建立许多真核生物的着丝粒染色质，H2A.Z 与 H3.3 常见于周转活跃的区域，macroH2A 可富集于某些沉默结构。组蛋白尾部及核心表面的乙酰化、甲基化、磷酸化、泛素化等修饰，为结合蛋白提供组合性环境；修饰的意义取决于位点、修饰程度、相邻标记和细胞背景，并非一个标记永久对应一种基因状态。

新合成的 DNA 以及经历转录或修复的 DNA 都需要重新安排核小体。CAF-1、ASF1、NAP 家族等组蛋白伴侣控制组蛋白的递送和交换，ATP 依赖染色质重塑复合体则可滑动、移除或重构核小体。它们改变 DNA 对转录因子、聚合酶和修复机器的可及性，却不替代这些机器本身。DNA 与 RNA 的化学结构见[核酸与核苷酸](../biochem/nucleic_acid.md#nucleic-acid-protein-complexes)，复制、损伤修复和转录过程分别留给[DNA复制](../molecular/dna_replication.md)、[DNA损伤、修复与突变](../molecular/dna_repair.md)和[转录与RNA生物合成](../molecular/transcription.md)。

## 三维基因组由接触概率与动态约束共同形成 { #three-dimensional-genome }

分离染色质可在特定盐浓度和制样条件下形成较规则纤维，经典模型据此提出 10 nm “串珠”进一步卷成 30 nm 纤维，再逐级压缩成染色体。活细胞和原位成像显示，许多间期与分裂期染色质更接近直径和密度不均一、相互交错的核小体链；30 nm 纤维可以在某些序列、组蛋白组成或体外条件下出现，却不是所有染色质在细胞内必经的普遍层级。[^chromatin-fiber]

每条间期染色体通常占据偏好的染色体疆域，同时伸出可与同一或其他染色体接触的区域。群体 Hi-C 由连接频率揭示 A／B 区室、拓扑相关结构域（TAD）和部分受 cohesin 挤出及 CTCF 定向位点约束的环；这些名称描述不同尺度的统计组织，不意味着核内存在边界固定的实体盒子。单细胞中的具体接触具有异质性，分化、信号和细胞周期还会改变接触图谱。[^genome-folding]

核周也是三维组织的一部分。与核纤层相互作用的大片段称 lamina-associated domain（LAD），在许多哺乳动物细胞中常富含基因较少、转录较低的区域，但接触具有细胞类型差异，也会随状态重排。核仁周边、核斑和特定转录／复制环境同样能偏置基因组位置。基因组序列、核小体、环挤出、相分离倾向、转录活动和核内边界共同产生最终构象，不宜把任一因素写成唯一“染色质支架”。[^lamina-domains]

## 染色质状态是可测量的连续谱 { #chromatin-states }

“常染色质”和“异染色质”最初来自染色深浅与压缩程度的观察。常染色质通常较疏松、复制较早并富集活跃基因，异染色质通常更致密、复制较晚；但转录与压缩并非简单二分。着丝粒周边等组成型异染色质可含转座元件转录和维持结构所需的 RNA，发育中关闭的基因区则可形成兼性异染色质。一个区域是否表达取决于调控元件、转录因子、核小体占位、修饰组合、三维接触和细胞状态，显微镜下“浅染”本身不能证明转录正在发生。

组蛋白乙酰化常降低尾部正电荷并招募含 bromodomain 的蛋白，许多情况下与可及性和转录活性相关；H3K9me3—HP1、Polycomb 相关 H3K27me3 等可参与不同沉默环境。酶促“写入”、识别和移除标记，ATP 依赖重塑以及 DNA 甲基化彼此耦联。X 染色体失活显示同一条染色体可在发育过程中建立大尺度兼性异染色质，但启动、维持和逃逸基因具有物种、组织与细胞差异。完整的表观遗传调控和基因组重复序列留给[遗传重组、基因组学与表观遗传学](../genetics/genomics_epigenetics.md)。

## 染色体把复制的 DNA 组织成可分离单元 { #chromosome-architecture }

间期“染色质”和分裂期“染色体”是同一遗传材料在不同细胞状态下的组织形式。进入分裂期后，condensin、topoisomerase II、cohesin 调控及骨架化轴向组织使染色体缩短、增粗并减少相互缠结；复制后的两条姐妹染色单体由 cohesin 维持联系，直至分离。经典的主缢痕、臂长和着丝粒位置适合描述中期形态，却不能代替分子结构或覆盖所有物种的染色体类型。

着丝粒是建立动粒的染色质区域，动粒则是含 CENP 蛋白、微管结合组分和检查点蛋白的多层复合体。许多真核着丝粒的身份依赖 CENP-A 核小体及其传播，而不是由一条普遍保守的 DNA 序列单独指定；某些物种具有序列定义较强的点着丝粒，另一些具有区域性或弥散性着丝粒。动粒连接和纠错如何驱动姐妹染色单体分离，见[细胞周期与细胞分裂](cell_cycle.md)。[^centromere-kinetochore]

线性染色体末端的端粒由重复 DNA、单链末端及 shelterin 等结合蛋白构成，避免天然末端被误认作 DNA 断裂，并缓冲末端复制问题。端粒酶在许多生殖系、干细胞和癌细胞中补充末端序列，其活性、复制压力和其他维护路线共同决定端粒变化，并非每次体细胞分裂都按固定长度缩短。核仁组织区（NOR）含串联 rDNA，活跃 NOR 可汇聚 RNA polymerase I 和加工因子形成核仁。次缢痕、随体、端粒与 NOR 各有不同结构功能，不能统称为“次级着丝粒”。

多线染色体通过多轮复制而不分离形成粗大同源配对结构，灯刷染色体的侧环则显示强烈转录时伸展的染色质。它们把复制、配对或转录状态放大到显微尺度，是理解染色体可塑性的实验系统；核型与带型分析的操作、染色体数目和结构变异则由后续[突变与染色体变异](../genetics/chromosome_variation.md)展开。

## 核仁和核体组织 RNA 加工反应 { #nucleolus-nuclear-bodies }

### 核仁是耦联 rRNA 通量的多相凝聚体 { #nucleolus-organization }

哺乳动物核仁常可区分纤维中心（FC）、致密纤维组分（DFC）和颗粒组分（GC）。活跃 rDNA 位于 FC／DFC 界面附近，RNA polymerase I 合成的 47S 前体进入 DFC 接受小核仁核糖核蛋白（snoRNP）介导的修饰和早期加工，随后在 GC 逐步装配前核糖体颗粒。不同物种、细胞类型和生长状态下，这些亚区的数量与几何关系会变化。蛋白和新生 pre-rRNA 的多价相互作用形成互不完全混合、又持续交换组分的凝聚相，使反应物按加工进程重新分配；“液滴”描述其部分材料性质，不表示没有有序装配、能量消耗或质量控制。[^nucleolus-condensate]

哺乳动物 47S 前体包含 18S、5.8S 和 28S rRNA 序列及待切除的间隔区；5S rRNA 由 RNA polymerase III 在核仁外转录后进入大亚基装配。核糖体蛋白由胞质核糖体合成并输入细胞核，分别同加工中的 rRNA 形成 pre-40S 和 pre-60S 颗粒。两类前体经独立路线输出，最后加工和功能检查延伸到胞质，因此核仁生产的是逐步成熟的亚基，而不是完整 80S 核糖体。[^ribosome-biogenesis]

### 核体是动态反应环境而非固定细胞器 { #nuclear-bodies }

Cajal body 富集 small nuclear RNP 与 small nucleolar RNP 的装配和成熟因子，核斑富集剪接相关蛋白与 RNA，并能随转录需求改变形态和交换速率。PML nuclear body 等核体又连接应激、蛋白修饰和基因组维护。它们通常没有包膜，靠 RNA、蛋白互作、染色质接触和持续通量维持；富集某组分提示局部反应环境，并不自动证明全部反应都在该核体内完成。

“核基质”是在去垢剂、高盐和核酸酶抽提后留下的结构性组分集合，历史上推动了对核内支架的研究。抽提会诱导聚集并移走大量动态成分，故不能据残余网架推断活细胞内存在同形、普遍而静止的骨架。现代证据更适合分别讨论核纤层、染色质、核体、RNA—蛋白网络与机械连接，再用活细胞扰动检验它们之间的因果关系。

## 成熟核糖体以 RNA 为催化核心 { #ribosome-architecture }

细菌细胞质核糖体通常为 70S，由 30S 小亚基和 50S 大亚基组成；真核细胞质核糖体通常为 80S，由 40S 和 60S 组成。Svedberg 单位描述沉降行为，受质量、形状和水合共同影响，亚基数值不能算术相加。古菌细胞质核糖体在沉降分类上也是 70S，但许多蛋白和发生因子与真核系统更接近；线粒体和质体核糖体则因基因丢失、RNA／蛋白比例改变和谱系适应而形成多种结构，不能只用“原核型”一词覆盖。[^ribosome-structures]

| 系统 | 小亚基的代表 rRNA | 大亚基的代表 rRNA | 典型整体沉降值 | 需要注意的边界 |
| --- | --- | --- | ---: | --- |
| 细菌细胞质 | 16S | 23S、5S | 70S | 30S 与 50S 的 S 值不相加；蛋白组成随谱系变化 |
| 古菌细胞质 | 16S | 23S、5S | 70S | 沉降值似细菌，许多蛋白及发生因子更接近真核 |
| 真核细胞质 | 18S | 28S、5.8S、5S | 80S | 40S 与 60S 在胞质完成末端成熟后才进入翻译循环 |
| 线粒体与质体 | 谱系依赖 | 谱系依赖 | 谱系依赖 | 并非统一的细菌 70S 复制品；RNA／蛋白比例和 rRNA 组成可显著改变 |

小亚基负责解码中心并监测 codon—anticodon 配对，大亚基含肽酰转移酶中心和新生肽出口通道。tRNA 依次占据氨酰（A）、肽酰（P）和出口（E）位点时跨越两个亚基；这些位点是 RNA 与蛋白共同塑造的复合界面。高分辨率结构显示，肽酰转移酶中心的催化核心由 rRNA 构成，支持核糖体是核酶；核糖体蛋白稳定 rRNA 折叠、参与装配并调节界面，不能据此视为无功能外壳。[^ribosomal-rna-catalysis]

多个核糖体可同时翻译同一条 mRNA，形成多核糖体；核糖体间距由起始频率、延伸速度、停顿和碰撞质量控制共同决定，没有通用固定核苷酸间隔。胞质游离核糖体与粗面内质网结合核糖体来自同一可交换池：当正在合成的多肽暴露合适信号序列后，SRP 把核糖体—新生链复合体导向 ER，翻译完成后亚基返回胞质池。密码解读、氨酰 tRNA 合成酶、起始—延伸—终止及质量控制的完整机制见[翻译与蛋白质生物合成](../molecular/translation.md)。

## 多种证据共同约束核内结构模型 { #nuclear-evidence }

核内组织跨越埃到微米、毫秒到细胞世代，单一方法只能截取其中一层。结构成像、群体组学和活细胞动力学互相校正，才能把“共同出现”“空间接近”和“机制必需”区分开来。

| 方法 | 主要读出 | 关键解释边界 |
| --- | --- | --- |
| 电镜、冷冻电镜与断层成像 | 核孔、核小体、核糖体和染色质的结构 | 固定、纯化或平均可改变原位构象；高分辨率结构未必代表全部动态状态 |
| FISH 与活细胞标记 | 染色体疆域、位点距离和组分交换 | 标签、探针可及性与时间分辨率会改变可见群体；距离不等于直接结合 |
| MNase／DNase／ATAC 测序 | 核小体保护或染色质可及性 | 酶偏好、输入细胞组成和实验条件影响信号；“开放”不等于正在转录 |
| ChIP 类方法 | 蛋白或修饰在基因组上的富集 | 抗体、交联和群体平均影响定位；富集本身不证明该因子造成状态变化 |
| 3C／Hi-C 类方法 | 基因组位点间连接频率 | 主要给出群体接触概率；高频接触不是每个细胞都存在的固定环 |
| FRAP、单粒子追踪与急性扰动 | 交换速率、停留时间和功能响应 | 动力学模型与扰动特异性决定结论，需与结构和遗传救援配合 |

ATAC-seq 利用 Tn5 转座酶优先插入较可及 DNA，Hi-C 利用近邻连接估计接触频率，二者分别把“可及性”和“空间接近”转成可测信号；它们的读出与显微成像一致时会增强结构推断，出现差异时则常提示群体平均、细胞异质性或尺度不匹配。[^chromatin-methods]

## 参考资料与延伸阅读 { #references }

- Cooper GM. [The Nuclear Envelope and Traffic between the Nucleus and Cytoplasm](https://www.ncbi.nlm.nih.gov/books/NBK9927/). In: *The Cell: A Molecular Approach*. 2nd ed. Sinauer Associates; 2000.
- Alberts B, Johnson A, Lewis J, et al. [The Transport of Molecules between the Nucleus and the Cytosol](https://www.ncbi.nlm.nih.gov/books/NBK26932/). In: *Molecular Biology of the Cell*. 4th ed. Garland Science; 2002.
- Alberts B, Johnson A, Lewis J, et al. [Chromosomal DNA and Its Packaging in the Chromatin Fiber](https://www.ncbi.nlm.nih.gov/books/NBK26834/). In: *Molecular Biology of the Cell*. 4th ed. Garland Science; 2002.
- Cooper GM. [Chromosomes and Chromatin](https://www.ncbi.nlm.nih.gov/books/NBK9863/). In: *The Cell: A Molecular Approach*. 2nd ed. Sinauer Associates; 2000.
- Cooper GM. [Internal Organization of the Nucleus](https://www.ncbi.nlm.nih.gov/books/NBK9915/). In: *The Cell: A Molecular Approach*. 2nd ed. Sinauer Associates; 2000.
- Alberts B, Johnson A, Lewis J, et al. [From DNA to RNA](https://www.ncbi.nlm.nih.gov/books/NBK26887/). In: *Molecular Biology of the Cell*. 4th ed. Garland Science; 2002.
- Crisp M, Liu Q, Roux K, et al. [Coupling of the nucleus and cytoplasm: role of the LINC complex](https://pubmed.ncbi.nlm.nih.gov/16380439/). *Journal of Cell Biology*. 2006;172:41–53.
- Luger K, Mäder AW, Richmond RK, Sargent DF, Richmond TJ. [Crystal structure of the nucleosome core particle at 2.8 Å resolution](https://pubmed.ncbi.nlm.nih.gov/9305837/). *Nature*. 1997;389:251–260.
- Mosalaganti S, Obarska-Kosinska A, Siggel M, et al. [AI-based structure prediction empowers integrative structural analysis of human nuclear pores](https://pubmed.ncbi.nlm.nih.gov/35679397/). *Science*. 2022;376:eabm9506.
- Ou HD, Phan S, Deerinck TJ, Thor A, Ellisman MH, O'Shea CC. [ChromEMT: Visualizing 3D chromatin structure and compaction in interphase and mitotic cells](https://pubmed.ncbi.nlm.nih.gov/28751582/). *Science*. 2017;357:eaag0025.
- Lieberman-Aiden E, van Berkum NL, Williams L, et al. [Comprehensive mapping of long-range interactions reveals folding principles of the human genome](https://pubmed.ncbi.nlm.nih.gov/19815776/). *Science*. 2009;326:289–293.
- Guelen L, Pagie L, Brasset E, et al. [Domain organization of human chromosomes revealed by mapping of nuclear lamina interactions](https://pubmed.ncbi.nlm.nih.gov/18463634/). *Nature*. 2008;453:948–951.
- Feric M, Vaidya N, Harmon TS, et al. [Coexisting Liquid Phases Underlie Nucleolar Subcompartments](https://pmc.ncbi.nlm.nih.gov/articles/PMC5127388/). *Cell*. 2016;165:1686–1697.
- Yao RW, Xu G, Wang Y, et al. [Nascent Pre-rRNA Sorting via Phase Separation Drives the Assembly of Dense Fibrillar Components in the Human Nucleolus](https://pubmed.ncbi.nlm.nih.gov/31540874/). *Molecular Cell*. 2019;76:767–783.e11.
- Nissen P, Hansen J, Ban N, Moore PB, Steitz TA. [The structural basis of ribosome activity in peptide bond synthesis](https://pubmed.ncbi.nlm.nih.gov/10937990/). *Science*. 2000;289:920–930.
- Khatter H, Myasnikov AG, Natchiar SK, Klaholz BP. [Structure of the human 80S ribosome](https://pubmed.ncbi.nlm.nih.gov/25901680/). *Nature*. 2015;520:640–645.
- Buenrostro JD, Giresi PG, Zaba LC, Chang HY, Greenleaf WJ. [Transposition of native chromatin for fast and sensitive epigenomic profiling](https://pubmed.ncbi.nlm.nih.gov/24097267/). *Nature Methods*. 2013;10:1213–1218.

[^nuclear-compartment]: 细胞核作为基因组区室、核被膜及核仁的一般结构见 Cooper 的[核被膜与核质交通](https://www.ncbi.nlm.nih.gov/books/NBK9927/)和[核内组织](https://www.ncbi.nlm.nih.gov/books/NBK9915/)章节。
[^nuclear-envelope-source]: 双层核被膜、外膜与内质网连续、核孔处膜融合以及分裂期重构见 Cooper 的[核被膜章节](https://www.ncbi.nlm.nih.gov/books/NBK9927/)。
[^lamina-linc]: SUN—KASH 蛋白跨越核周隙连接核与胞质的直接证据及 LINC 命名见 Crisp 等的[研究](https://pubmed.ncbi.nlm.nih.gov/16380439/)；lamina-associated domain 的基因组尺度证据见 Guelen 等的[核纤层互作图谱](https://pubmed.ncbi.nlm.nih.gov/18463634/)。
[^npc-architecture]: 人 NPC 的重复亚复合体、近八重对称与原位整合结构见 Mosalaganti 等的[人核孔结构研究](https://pubmed.ncbi.nlm.nih.gov/35679397/)；经典结构与 FG-nucleoporin 屏障见 Cooper 的[核质交通章节](https://www.ncbi.nlm.nih.gov/books/NBK9927/)。
[^nuclear-transport]: importin／exportin、NLS／NES 与 Ran-GTP 梯度赋予运输方向的机制见 Alberts 等的[核质运输章节](https://www.ncbi.nlm.nih.gov/books/NBK26932/)。
[^nucleosome-structure]: 146 bp DNA 围绕组蛋白八聚体的高分辨率结构见 Luger 等的[核小体核心晶体结构](https://pubmed.ncbi.nlm.nih.gov/9305837/)；核小体、连接 DNA 和更高层组织的一般框架见 Alberts 等的[染色质包装章节](https://www.ncbi.nlm.nih.gov/books/NBK26834/)。
[^chromatin-fiber]: ChromEMT 对间期和分裂期染色质不规则链与局部密度的原位观察见 Ou 等的[三维染色质研究](https://pubmed.ncbi.nlm.nih.gov/28751582/)，经典核小体纤维模型的来源和适用条件见 Alberts 等的[染色质包装章节](https://www.ncbi.nlm.nih.gov/books/NBK26834/)。
[^genome-folding]: 染色体疆域、A／B 区室和全基因组接触概率的 Hi-C 证据见 Lieberman-Aiden 等的[长程相互作用图谱](https://pubmed.ncbi.nlm.nih.gov/19815776/)。
[^lamina-domains]: 人成纤维细胞中大尺度核纤层互作域及其与较低表达的关系见 Guelen 等的[LAD 图谱](https://pubmed.ncbi.nlm.nih.gov/18463634/)。
[^centromere-kinetochore]: 着丝粒、动粒、端粒、核仁组织区和特殊染色体的一般结构与实验观察见 Cooper 的[染色体与染色质章节](https://www.ncbi.nlm.nih.gov/books/NBK9863/)。
[^nucleolus-condensate]: FC、DFC 与 GC 作为共存凝聚相的材料证据见 Feric 等的[核仁亚区研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC5127388/)；新生 pre-rRNA 分选与 DFC 装配的联系见 Yao 等的[人核仁研究](https://pubmed.ncbi.nlm.nih.gov/31540874/)。
[^ribosome-biogenesis]: rDNA 转录、pre-rRNA 加工及核仁内核糖体亚基装配的经典框架见 Alberts 等的[从 DNA 到 RNA](https://www.ncbi.nlm.nih.gov/books/NBK26887/)和 Cooper 的[核内组织](https://www.ncbi.nlm.nih.gov/books/NBK9915/)章节；核仁多相组织的现代补充见 Yao 等的[研究](https://pubmed.ncbi.nlm.nih.gov/31540874/)。
[^ribosome-structures]: 细菌 70S、真核 80S、rRNA／蛋白组成及沉降单位的基本比较见 Cooper 的[核内组织章节](https://www.ncbi.nlm.nih.gov/books/NBK9915/)；人 80S 的近原子分辨率结构见 Khatter 等的[结构研究](https://pubmed.ncbi.nlm.nih.gov/25901680/)。
[^ribosomal-rna-catalysis]: 肽酰转移酶中心以 rRNA 构成催化核心的结构证据见 Nissen 等的[核糖体催化研究](https://pubmed.ncbi.nlm.nih.gov/10937990/)；人 80S 亚基、位点与出口通道的整体结构见 Khatter 等的[研究](https://pubmed.ncbi.nlm.nih.gov/25901680/)。
[^chromatin-methods]: ATAC-seq 以 Tn5 转座反应读取天然染色质可及性的原始方法见 Buenrostro 等的[研究](https://pubmed.ncbi.nlm.nih.gov/24097267/)；Hi-C 的全基因组接触概率框架见 Lieberman-Aiden 等的[研究](https://pubmed.ncbi.nlm.nih.gov/19815776/)。
