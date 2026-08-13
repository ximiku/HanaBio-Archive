# 功能注释、富集与功能预测

功能注释把序列、结构、表达和实验观察转化为关于分子作用的可检验断言。它既可以回答一个蛋白质可能催化什么反应、结合什么对象、位于何处，也可以描述一个基因产物参与的过程和通路。不同答案来自不同证据：保守结构域支持家族归属，关键残基和底物谱支持具体分子功能，突变表型与时空表达支持生物学过程，定位实验支持细胞组分。把它们压缩成一条“功能名称”，会丢失对象、条件和证据强度。

另一类常见任务从一组基因出发，寻找其中集中出现的功能类别。富集分析解释集合构成或排序分布，结论单位是整个集合；功能预测则面向尚无充分注释的分子，综合同源、结构域、基因组语境、结构和系统数据提出候选。三者共享数据库和术语，却具有不同的统计问题与结论单位。

## 注释对象、功能层次与版本 { #annotation-objects }

开始注释前要固定实体。一个基因座可以产生多个转录本和蛋白质异构体；相同基因名在不同物种中可能指向不同谱系；组装版本变化会改变基因模型，蛋白质序列版本变化会移动位点坐标。对蛋白质作出的结构域或催化位点断言，应连接到确切的氨基酸序列；对基因作出的过程或表型断言，则要说明它由哪种基因产物、组织和条件支持。基因、转录本、蛋白质、蛋白质复合物和功能类需要分别建模和映射。

“功能”本身也有层次。三磷酸腺苷（adenosine triphosphate，ATP）结合是一种分子性质，蛋白激酶活性是一种分子功能，参与细胞周期检查点是一种过程角色，在细胞核中发挥作用是一种空间陈述。一个多结构域蛋白还可能兼具催化、支架和调控作用；同一蛋白在不同细胞状态中可改变伙伴和位置。可靠注释应尽量写成“某个实体在某种语境下以何种关系关联某个功能对象”，并保留来源、证据类型、日期和数据库发布版。

数据库记录会随审校和新证据更新。术语可能合并、改名或废止，基因模型可能拆分或合并，自动注释规则也会改变。批量注释因此应保存输入序列校验摘要、物种与组装、标识符（identifier，ID）映射、数据库和本体版本、程序与参数，使最后的描述列可以追溯到具体输入与规则。数据库对象和登录号规则见[生物数据、格式与数据库](data_databases.md#identifiers-versions)。

## 序列同源与功能转移 { #homology-transfer }

用已知蛋白质解释新序列，是功能注释最经典也最有生产力的路径。完整工作流从检查查询序列开始，经低复杂度处理、数据库搜索和比对，比较覆盖度、统计显著性、结构域架构与关键残基，再追溯命中条目的实验来源。基本局部比对搜索工具（Basic Local Alignment Search Tool，BLAST）的最高分命中提供候选参照；若高分只来自一个广泛分布的 ATP 酶（ATPase）结构域，完整蛋白质的底物、细胞位置和通路角色仍是开放问题。搜索和比对统计的细节见[序列比对与数据库搜索](sequence_analysis.md)。

同源关系提供共同祖先的证据，功能转移还需要判断基因家族历史。由物种分化分开的直系同源基因通常比未经区分的相似序列更适合作为参照，但直系同源也可能在调控、组织表达或底物范围上分化；复制产生的旁系同源可能获得新功能，也可能长期保持相近功能。双向最佳命中（reciprocal best hit，RBH）是筛选简单一对一关系的启发式方法，基因丢失、谱系特异复制、进化速率差异和数据库缺口都会使它失效。困难家族应比较基因树与物种树，并检查邻近基因或共线性。

功能转移的精度受参照证据限定。参照蛋白若只有自动赋予的宽泛术语，新序列也适合注释到相应层级；多个近邻实验蛋白具有不同底物时，还需用决定特异性的位点、结构和谱系分支进一步区分。按“家族级”“亚家族级”“具体反应级”记录注释层次，可以减少错误沿数据库传播。

## 结构域、基序与位点证据 { #domains-motifs }

结构域（domain）是可以在不同蛋白质架构中复用的演化和结构单位，基序（motif）是较短的序列或结构模式，位点（site）则落到一个或少数残基。Pfam、SMART、CDD、PROSITE、PANTHER、PIRSF 等资源分别以谱（profile）、模式、家族层级或人工规则描述这些对象；InterPro 把多个成员数据库的特征模型（signature）整合为家族、结构域、重复和位点（family、domain、repeat and site）等条目，并可将部分条目映射到 GO。多个模型一致命中能够提高家族判断的可信度，但共享训练序列会使这些证据相互相关。[^interpro-2025]

结构域注释应检查命中范围、模型阈值、序列完整性、重复单元和结构域顺序。一个蛋白质同时含催化结构域和调控结构域时，完整架构往往比单个局部命中更有辨识力；反之，基因模型截断可能让真实家族成员只留下半个结构域。短基序尤其容易在大数据库中偶然出现；它位于合理结构域、具有合适残基间距并得到保守性或结构支持时，才适合用于精细功能判断。

Pfam-A 曾用于表示人工审校家族，Pfam-B 则表示自动生成的补充集合；Pfam-B 的实现后来经历显著变化：旧版补充集合在 Pfam 28.0 前后停止，33.1 又以 MMseqs2 对未被 Pfam-A 覆盖的片段聚类而重建。Pfam 记录此后又进入 EMBL—EBI 的 InterPro 基础设施。引用 Pfam-A／B 命中时必须同时给出发布版和条目类型；自动聚类簇提供候选家族线索，功能仍待审校和验证。[^pfam-2021][^pfam-current]

结构域、信号肽、跨膜区、无序区和翻译后修饰位点的序列预测已在[序列特征、基因识别与功能位点](sequence_features.md#domains-motifs-disorder)展开。它们进入功能证据链时，结构域给出可行的化学或互作框架，关键位点缩小功能范围，完整架构和细胞位置再排除不相容解释，最终由结合、催化、遗传或细胞实验确认。

CpG 岛、聚合酶链式反应（polymerase chain reaction，PCR）引物和核糖核酸（ribonucleic acid，RNA）二级结构预测分别回答调控序列组成、扩增子设计和 RNA 构象集合问题，详见[序列特征页的调控信号](sequence_features.md#regulatory-sequence-signals)、[引物设计](sequence_features.md#primer-design)与[RNA 二级结构](sequence_features.md#rna-secondary-structure)。

## 基因组语境与系统数据 { #genomic-context }

在细菌和古菌中，邻近基因、操纵子和保守基因簇常把连续反应或同一复合物的成员放在一起。若一个未知蛋白在许多基因组中都与某代谢酶相邻，这种保守邻域可以支持它参与同一功能单元。基因融合把两个在其他物种中分开的蛋白结构域连接在一条多肽上，经典的 Rosetta Stone 思路据此推断二者可能发生功能关联；系统发育谱则比较基因在物种间共同出现和缺失的模式。这些序列之外的证据会受到水平转移、基因丢失、组装碎片和共同生态选择的影响。

真核基因邻域通常不如原核操纵子直接，表达共变、共必需性、遗传互作和蛋白质互作因而成为补充。共同表达说明两个基因在所测样本中变化相关；物理互作说明分子在某种实验条件下接近或结合；遗传互作说明双重扰动偏离独立效应。它们分别约束过程、复合物或调控关系，所支持的命题需要分开表述。网络中的邻居投票和标签传播详见[生物网络与系统生物学](phylogenetics_networks.md)。

基因组语境和系统数据对生物学过程的预测往往比对精确催化活性的预测更有帮助。一个蛋白与核糖体生物发生基因稳定共表达，可以支持其参与这一过程，底物范围则需要结合或催化证据；一个酶的活性位点、反应产物和动力学参数能直接限定分子功能，组织中的作用还需表达和细胞证据。让不同数据回答各自擅长的问题，比把所有关联压成一个综合分数更容易审查。

## 结构辅助的功能预测 { #structure-function }

三维结构把在线性序列上分散的残基组织成口袋、通道、界面和催化几何。远缘蛋白质可能在序列相似性很弱时仍保留折叠，结构比较因而可以发现候选家族；表面形状、电势、保守残基和已知配体又能提出底物或伙伴假说。整体折叠相似通常支持较宽的关系，准确的金属配位和催化残基组合才可能把范围缩小到具体反应。

结构预测扩大了可分析蛋白质的范围，状态与化学环境仍决定口袋解释。低置信环区、错误的结构域相对排布、缺失辅因子、未建模的复合物和不同构象都可能改变口袋。结构模型可以安排定点突变、结合测定和代谢产物检测的优先级；确定的酶名还需要底物、反应和关键残基等证据。结构来源、置信度、对接和实验验证见[结构生物信息学](structural_bioinformatics.md#function-variant-interpretation)。

## GO 本体与注释断言 { #go-ontology-annotation }

基因本体（Gene Ontology，GO）用三个方面组织跨物种功能语言：**分子功能**描述基因产物在分子层执行的活动，**生物学过程**描述这些活动共同推进的较大过程，**细胞组分**描述基因产物发挥作用时所在的细胞位置或复合物。GO 术语通过 `is_a`、`part_of` 等具有明确定义的关系组成有向无环图（directed acyclic graph，DAG）；一个术语可以有多个上位术语，因而形成多条父链。[^go-ontology]

GO 本体定义类及其关系，GO 注释（GO annotation）则是一条具体断言：某个基因产物以某种关系连接某个 GO 类，并带有参考文献和证据代码。正向注释会沿允许传递的关系推向较宽的上位类；`NOT` 是有明确依据的否定断言，可阻止相应及更具体的功能解释。GO 遵循开放世界假设，缺少一条正向注释通常只表示尚未收录或尚无足够证据。[^go-annotations]

证据代码说明断言怎样获得。实验类包括直接测定、突变表型、物理互作和表达模式；系统发育类依据显式的功能获得与丢失模型；计算类可来自序列或结构相似、直系同源、序列模型和基因组语境；推断自电子注释（Inferred from Electronic Annotation，IEA）表示未逐条人工审阅的电子注释。各证据代码回答不同问题：高通量定位与低通量酶学分别支持空间位置和分子活性，人工审阅也保留原始证据的直接性。使用注释时应按所需命题筛选证据，并保留其引用和生成规则。[^go-evidence]

GO 会持续修订术语、关系和注释。把不同日期的本体文件与注释文件混用，可能出现废止术语或错误的祖先传播；只保存术语名称又会在改名后失去可追踪性。分析应保留 GO ID、名称、aspect、关系传播规则、本体和注释发布日期、物种、基因产物 ID，以及是否纳入 IEA、NOT 或特定证据类。

## KEGG、Reactome 与通路对象 { #pathway-resources }

通路资源表达的对象比 GO 术语更接近反应和事件。KEGG 由 GENES、KO、PATHWAY、MODULE、REACTION、COMPOUND、BRITE 等多类记录构成。KO 的 K number 表示在 KEGG 分子网络语境中人工界定的 functional ortholog group；其“功能”粒度依节点而变，可以是近缘序列的小组，也可以覆盖较为分化的成员。把基因映射到 K number 后，可以在参考 pathway map、module 和 BRITE 层级上重建或着色，但映射结果仍受输入基因模型和 KO 赋值质量约束。[^kegg-ko]

KEGG 图中的矩形、圆形和连线分别可能表示基因或 KO、化合物、反应或关系，参考图、物种特异图与用户着色图具有不同的证据来源。一个基因出现在某张通路图（pathway map）上，说明数据库模型将其关联到该网络节点；颜色变化显示实验数据落在图中何处。节点激活、反应通量和调控方向需要相应测量支持。

Reactome 以人工审校的分子事件组织人类生物学过程，将输入、输出、催化、调控、区室和文献证据连接为反应及层级通路；许多非人类物种的事件由同源关系投影。因此，使用非人类结果时要区分物种特异审校与计算投影。BioCarta 等历史通路图、GenMAPP 的可视化映射和 Pathway Miner 的多资源检索体现了“把组学结果放回过程图”的方法路径；它们的入口、覆盖范围和版本需要逐项确认，并与当前持续审校的知识库分开定义背景集合。[^reactome]

GO、KEGG、Reactome、InterPro 和 UniProt 之间存在交叉引用，各自的数据模型仍然不同。GO 提供本体类和注释，InterPro 提供蛋白质特征模型与整合条目，KEGG 和 Reactome 提供网络化的功能对象，UniProt 知识库（UniProt Knowledgebase，UniProtKB）以蛋白质记录为中心汇集序列和证据。“GO/KEGG 分析”需要进一步说明使用了哪种对象、哪版注释、哪种检验和何种背景。

## 标识符映射与可检验背景 { #identifier-universe }

富集分析之前通常要把输入 ID 转为功能数据库能够识别的实体。一个 Ensembl 基因可映射到多个转录本和 UniProt 蛋白，同一旧 ID 可能被合并或退役，基因符号还可能成为别名。一对多映射后复制行会使含多个异构体或注释较丰富的基因获得额外权重；固定保留第一条映射则可能系统性丢掉特定蛋白。映射步骤应报告输入数、成功映射数、未映射数、多重映射数和最终去重单位。

背景集合（universe）是“本实验中原本有机会进入目标集合的实体”。RNA 测序（RNA sequencing，RNA-seq）差异基因的背景通常是通过表达和质量过滤、实际接受统计检验的基因；质谱差异蛋白的背景应接近该实验可检测并接受检验的蛋白；成簇规律间隔短回文重复序列（clustered regularly interspaced short palindromic repeats，CRISPR）筛选则应考虑文库中被有效测量的靶基因。用全基因组替代受检测限制的背景，会把组织表达、测量灵敏度和注释覆盖差异误写为功能富集。GO 官方指南也建议使用实际可能被选入列表的自定义参考集。[^go-enrichment]

背景和目标必须采用相同的物种、ID 类型、去重规则和注释快照。非模式物种常先把基因映射到近缘模式物种的直系同源；此时富集检验实际使用的是“可映射且有注释的子集”，类群特异基因更容易消失。结果中应同时列出原始输入、可映射输入、进入检验的目标和背景规模，并把跨物种转移作为不确定性来源。

## 过度代表分析 { #enrichment-background }

过度代表分析（over-representation analysis，ORA）从一个已经选定的目标列表出发，询问某功能集合在目标中所占比例是否高于背景。对某个功能集合，可把目标／非目标与属于／不属于该集合组成 $2 \times 2$ 列联表，再用单侧 Fisher 精确检验或等价的超几何尾概率计算“至少观察到如此多重叠”的概率。二项检验、卡方近似和早期 EASE 的修正 Fisher 分数也属于经典工具路径，但各自的抽样模型与小样本行为不同。[^ease]

P 值只描述给定零假设、背景和注释下的极端程度。结果还应报告目标重叠数、目标集合大小、背景重叠数、背景大小和效应量，例如富集倍数或优势比，并列出实际命中的基因。三个基因构成的小术语可能有很高倍数却很不稳定；数千基因的大术语可能获得很小 P 值却缺少具体解释。预先规定合理的集合大小范围，有助于避免两端问题，但范围应由数据库和研究目的决定。

有些早期流程还用标准分数（z-score）概括“观察到的命中数偏离期望值多少个标准差”。它便于比较方向和偏离幅度，但只有在期望值、方差与近似分布定义清楚时才有统计含义；基于确切抽样模型的 P 值、效应量和多重校正仍需另行报告。

ORA 把连续统计量切成“入选／未入选”。差异分析的 P 值或效应阈值稍有改变，边界附近基因就可能改变通路结果；上调和下调混在同一列表时，富集也没有方向。稳妥做法是分别分析有明确方向的列表、报告阈值敏感性，并用完整排序方法补充，阈值则应在看结果前确定。

## 排序型基因集检验 { #ranked-tests }

基因集富集分析（Gene Set Enrichment Analysis，GSEA）保留完整的基因排序。经典算法沿按表型关联统计量排列的列表前进，遇到集合成员就按权重增加运行和（running-sum），遇到非成员则降低；偏离零的最大幅度形成富集分数（enrichment score，ES）。得分的符号表示成员集中在排序的哪一端，前缘（leading-edge）子集指出主要推动偏离的成员。算法直接利用排序统计量，因此无需预先筛出显著基因；P 值由相应零分布计算。[^gsea]

零分布必须对应实验设计。具有足够独立样本时，置换表型标签能保留基因间相关结构；样本极少时，一些实现改用基因集或排序位置置换，检验含义随之改变。配对、批次、重复测量和连续表型也需要保持相应交换结构。报告 GSEA 结果时应给出排序统计量、重复 ID 的处理、基因集库及版本、集合大小过滤、置换单位与次数、归一化得分、原始和校正显著性以及 leading-edge 成员。

基因集检验还可按零假设分为竞争型（competitive）与自包含型（self-contained）两类。前者比较集合内基因是否比集合外更强地关联表型，后者检验集合内是否完全没有与表型关联的基因。两类问题、抽样单位和置换方式不同，同一个“显著通路”在不同方法中可能有不同含义。方法选择应从实验单位和待回答的问题出发，并据此解释软件输出的 P 值。[^geneset-null]

## 层级、拓扑与模块方法 { #topology-modules }

GO 的有向无环图使父子术语共享大量基因。逐个术语独立做 Fisher 检验，会让一个局部信号沿祖先传播成一串相似结果。topGO 的 `elim`、`weight` 等经典策略利用图结构降低局部依赖造成的重复信号；另一条路径按语义相似性聚类术语，选出代表项，再保留被合并项与代表项的映射。它们改善摘要而不增加实验信息，代表术语的选择规则应在查看结果前确定。[^topgo][^revigo]

通路拓扑方法进一步使用反应方向、上下游位置、节点度数或扰动传播，试图区分处于通路关键位置的变化。模块方法则先从共表达、互作或代谢网络中得到基因模块，再检验模块与功能集合的对应。KOBAS 从早期 KO 注释和 ORA 扩展到功能类评分、拓扑方法与结果可视化，记录了这条方法演进。[^kobas]

拓扑信息的价值取决于网络模型。许多通路图混合了结合、催化、转录调控和间接关系，方向与区室也可能不完整；高连接节点容易获得较大传播影响。拓扑显著性因此是“在给定数据库网络和模型下”的结果；它与 ORA 或排序检验使用不同信息，机制解释仍需实验支持。

## 多重检验、选择偏倚与注释偏倚 { #enrichment-bias }

一次分析往往检验数百到数千个术语或通路。逐项使用 0.05 阈值会产生大量机会性发现，必须说明检验家族并进行多重校正。Benjamini—Hochberg 方法控制的是所声明发现中假发现比例的期望，而非保证每一个校正后 P 值较小的术语都为真；Bonferroni 类方法控制更严格的族错误率，通常也更保守。不同 aspect、不同数据库或多个对比是合并为一个检验家族还是分别校正，应在分析前明确。[^bh]

基因被选入目标集合的概率常与功能无关却不均等。RNA-seq 中较长或高表达基因可能具有更高的差异检出功效，质谱中丰度、肽段数和可离子化性影响蛋白检出，CRISPR 筛选受 sgRNA 数量和基因必需性影响。若这些因素又与某些功能类相关，常规 ORA 会产生偏倚。goseq 等方法用选择概率权重校正 RNA-seq 的基因长度或检测偏倚；更一般的做法是构建合适背景，并把已知选择变量纳入模型或匹配设计。[^goseq]

注释本身也不均匀。人、鼠、酵母等模式生物和疾病相关基因拥有更多实验注释；研究较多的蛋白在 GO、互作和通路库中都更密集。一个集合若富含“研究热点基因”，可同时得到许多显著类别。分析应检查每个基因的注释数量、证据代码和物种覆盖，并用与研究命题相称的证据子集做敏感性分析。

## 结果解释与可视化 { #interpretation-visualization }

富集输出首先给出统计结果，机制解释需要从这些结果继续推进。可以从具体且证据充分的术语开始，检查贡献基因、方向和效应，再沿 GO 上下位关系或通路反应连接相邻结果。点图适合同时显示效应量、校正显著性和集合大小，网络图适合显示术语重叠或层级关系，通路着色适合定位变化节点。图形的边和颜色都应对应明确定义，避免把共享基因画出的术语网络误读为调控网络。

大量相近 GO 术语可以通过父子关系、语义相似性或共享基因进行分组，但摘要过程必须可追溯。代表术语由具体程度、证据质量、贡献基因和研究语境共同决定，未必具有最小 P 值。结果文件应保留被折叠的术语及其基因，因为它们可能包含不同的亚过程或相反方向。

显著富集意味着某类注释相对于指定背景分布不均。通路是否激活、反应通量是否改变以及它是否导致表型，仍需分别检验。表达上升可能来自细胞组成变化，多个相关基因也可能共同响应另一个上游因素。机制结论需要时间顺序、细胞类型分辨、蛋白或代谢读出、扰动与救援（rescue）实验等额外证据。

## 从功能解释到未知基因预测 { #function-prediction }

功能预测应先定义输出粒度。预测一个蛋白属于某结构域家族、具有某种酶活、参与某个过程或位于某区室，是四种不同任务。训练标签可能来自 GO、酶学委员会编号（Enzyme Commission number，EC number）、KO、家族或人工文本，各自覆盖和层级不同。多功能蛋白需要多标签输出；在开放世界假设下，无注释蛋白混合了尚未研究者和真实阴性，不能直接作为可靠阴性集。

经典预测将多条证据组合起来：序列同源和直系同源支持功能转移，结构域架构与基序限定分子机制，基因邻域、融合和系统发育谱提示过程关联，结构口袋支持化学假说，共表达、互作和表型相似度补充细胞语境。邻居投票、朴素贝叶斯、支持向量机、标签传播等方法把这些证据转为评分；现代蛋白质语言模型、图神经网络和结构表示学习又能从大规模序列或网络学习嵌入。新模型扩大了候选空间，标签质量、类群外泛化和实验验证仍决定结论可靠性。

评估最容易受到信息泄漏影响。随机拆分高度相似序列，会让训练和测试共享近重复家族；用当前数据库标签预测早已参与模型训练的蛋白，会夸大实际性能；网络边拆分若让同一复合物成员分布在两侧，也会泄漏邻域。更严格的评估按序列同源簇、物种、时间或网络模块隔离，并在预测时尚无实验注释、后来获得注释的蛋白上测试。功能注释关键评估（Critical Assessment of Functional Annotation，CAFA）的时间延迟盲评估让新实验注释充当未来真值，同时也显示分子功能与生物学过程具有不同的预测难度。[^cafa1][^cafa3]

层级本体还要求预测保持逻辑一致。若模型给出具体 GO 术语，通常也应与相应祖先类相容；预测分数需要校准，使不同术语的阈值能表达可比较的错误风险。常见总体指标会被大量宽泛术语和长尾类别影响，因此应同时查看按蛋白和按术语的精确率—召回率、信息量加权误差、不同物种和不同注释深度下的表现。

## 实验验证与可复现报告 { #validation-reporting }

预测的验证要匹配所声称的功能。酶活假说需要纯化蛋白或适当体系中的底物转化、动力学和催化残基对照；结合功能需要亲和力、特异性和竞争实验；通路角色可用遗传扰动、互补、时间顺序及下游读出；定位需在合适细胞和表达水平下用成像、分级或邻近标记确认。敲除表型支持基因参与过程，预测的分子活性则需直接生化测量；过表达救援实验也要排除剂量和异位定位效应。

一份可复现的单分子注释记录至少应保存序列与物种、基因模型和异构体、搜索库与版本、比对覆盖和统计量、结构域坐标、关键位点、同源关系、结构或语境证据、候选功能及其置信度、相互冲突的证据和计划验证的实验。结果进入公共注释时，还应附可追溯参考和合适的证据代码，使内部模型分数与实验事实保持可辨。

一份可复现的富集记录还应保存目标列表及生成规则、完整背景、ID 映射和去重表、物种、注释与基因集版本、检验和零假设、集合大小过滤、方向、置换、偏倚校正、多重检验范围，以及未经筛选的完整结果。EASE、Onto-Express、GenMAPP、Pathway Miner、KOBAS 等工具名称记录了功能解释软件的发展，但任何网页输出都只有在这些输入和版本仍可恢复时才成为证据。[^osm-functional-tools]

功能注释最终形成一组层次明确、来源可追溯、能被新数据修正的断言；富集分析则给出目标集合相对于明确背景的统计偏离及其贡献成员。二者在实验验证处汇合：计算方法负责压缩候选空间，实验和后续观察负责决定哪些候选能够进入生物学知识。

## 参考资料与延伸阅读 { #references }

[^interpro-2025]: Blum M, et al. InterPro: the protein sequence classification resource in 2025. *Nucleic Acids Research*. 2025;53(D1):D444–D456. [doi:10.1093/nar/gkae1082](https://doi.org/10.1093/nar/gkae1082)。

[^pfam-2021]: Mistry J, et al. Pfam: The protein families database in 2021. *Nucleic Acids Research*. 2021;49(D1):D412–D419. [doi:10.1093/nar/gkaa913](https://doi.org/10.1093/nar/gkaa913)。

[^pfam-current]: Mistry J, et al. The Pfam protein families database: embracing AI/ML. *Nucleic Acids Research*. 2025;53(D1):D377–D385. [doi:10.1093/nar/gkae997](https://doi.org/10.1093/nar/gkae997)。

[^go-ontology]: Gene Ontology Consortium. [Ontology documentation](https://geneontology.org/docs/ontology-documentation/)；The Gene Ontology Consortium. The Gene Ontology resource: enriching a GOld mine. *Nucleic Acids Research*. 2021;49(D1):D325–D334. [doi:10.1093/nar/gkaa1113](https://doi.org/10.1093/nar/gkaa1113)。

[^go-annotations]: Gene Ontology Consortium. [Introduction to GO annotations](https://geneontology.org/docs/go-annotations/)。该说明区分标准注释、关系、正向传播、`NOT` 和开放世界假设。

[^go-evidence]: Gene Ontology Consortium. [Guide to GO evidence codes](https://geneontology.org/docs/guide-go-evidence-codes/)。

[^kegg-ko]: KEGG. [KO (KEGG ORTHOLOGY) Database](https://www.kegg.jp/kegg/ko.html)；Kanehisa M, et al. KEGG: biological systems database as a model of the real world. *Nucleic Acids Research*. 2025;53(D1):D672–D677. [doi:10.1093/nar/gkae909](https://doi.org/10.1093/nar/gkae909)。

[^reactome]: Milacic M, et al. The Reactome Pathway Knowledgebase 2024. *Nucleic Acids Research*. 2024;52(D1):D672–D678. [doi:10.1093/nar/gkad1025](https://doi.org/10.1093/nar/gkad1025)。

[^go-enrichment]: Gene Ontology Consortium. [GO enrichment analysis](https://geneontology.org/docs/go-enrichment-analysis/)。该指南建议背景只包含在实验中有机会进入目标列表的基因，并要求关注未解析 ID 与 GO 版本。

[^ease]: Hosack DA, Dennis G Jr, Sherman BT, Lane HC, Lempicki RA. Identifying biological themes within lists of genes with EASE. *Genome Biology*. 2003;4(10):R70. [doi:10.1186/gb-2003-4-10-r70](https://doi.org/10.1186/gb-2003-4-10-r70)。

[^gsea]: Subramanian A, et al. Gene set enrichment analysis: A knowledge-based approach for interpreting genome-wide expression profiles. *PNAS*. 2005;102(43):15545–15550. [doi:10.1073/pnas.0506580102](https://doi.org/10.1073/pnas.0506580102)。

[^geneset-null]: Goeman JJ, Bühlmann P. Analyzing gene expression data in terms of gene sets: methodological issues. *Bioinformatics*. 2007;23(8):980–987. [doi:10.1093/bioinformatics/btm051](https://doi.org/10.1093/bioinformatics/btm051)。

[^topgo]: Alexa A, Rahnenführer J, Lengauer T. Improved scoring of functional groups from gene expression data by decorrelating GO graph structure. *Bioinformatics*. 2006;22(13):1600–1607. [doi:10.1093/bioinformatics/btl140](https://doi.org/10.1093/bioinformatics/btl140)。

[^revigo]: Supek F, Bošnjak M, Škunca N, Šmuc T. REVIGO summarizes and visualizes long lists of Gene Ontology terms. *PLOS ONE*. 2011;6(7):e21800. [doi:10.1371/journal.pone.0021800](https://doi.org/10.1371/journal.pone.0021800)。

[^kobas]: Bu D, et al. KOBAS-i: intelligent prioritization and exploratory visualization of biological functions for gene enrichment analysis. *Nucleic Acids Research*. 2021;49(W1):W317–W325. [doi:10.1093/nar/gkab447](https://doi.org/10.1093/nar/gkab447)。

[^bh]: Benjamini Y, Hochberg Y. Controlling the false discovery rate: a practical and powerful approach to multiple testing. *Journal of the Royal Statistical Society: Series B*. 1995;57(1):289–300. [doi:10.1111/j.2517-6161.1995.tb02031.x](https://doi.org/10.1111/j.2517-6161.1995.tb02031.x)。

[^goseq]: Young MD, Wakefield MJ, Smyth GK, Oshlack A. Gene ontology analysis for RNA-seq: accounting for selection bias. *Genome Biology*. 2010;11:R14. [doi:10.1186/gb-2010-11-2-r14](https://doi.org/10.1186/gb-2010-11-2-r14)。

[^cafa1]: Radivojac P, et al. A large-scale evaluation of computational protein function prediction. *Nature Methods*. 2013;10:221–227. [doi:10.1038/nmeth.2340](https://doi.org/10.1038/nmeth.2340)。

[^cafa3]: Zhou N, et al. The CAFA challenge reports improved protein function prediction and new functional annotations for hundreds of genes through experimental screens. *Genome Biology*. 2019;20:244. [doi:10.1186/s13059-019-1835-8](https://doi.org/10.1186/s13059-019-1835-8)。

[^osm-functional-tools]: 部分经典功能数据库、预测与富集工具线索改编自 osm.bio 的[生物信息数据库及工具简介整理](https://osm.bio/%E7%94%9F%E7%89%A9%E4%BF%A1%E6%81%AF%E6%95%B0%E6%8D%AE%E5%BA%93%E5%8F%8A%E5%B7%A5%E5%85%B7%E7%AE%80%E4%BB%8B%E6%95%B4%E7%90%86)，对象、版本和统计解释依据 GO、InterPro、KEGG、Reactome 官方资料及方法论文核对。
