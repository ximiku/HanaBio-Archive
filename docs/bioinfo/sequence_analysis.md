# 序列比对与数据库搜索

序列比对把两个或多个脱氧核糖核酸（deoxyribonucleic acid，DNA）、核糖核酸（ribonucleic acid，RNA）或蛋白质序列排成可以逐列比较的形式。这个排列是在字符顺序、替换得分、空位代价和边界条件共同限定下提出的对应关系。它可以提示结构域、催化残基、调控元件和共同祖先，也可以暴露插入缺失、重复和重排；祖先状态、功能关系以及相似来自共同祖先、趋同、低复杂度或偶然匹配，则需要其他证据继续判断。

数据库搜索是在更大的候选集合中反复进行这种比较。实际工作在找到高分候选后，还要依次回答：查询对象是否正确，比较的是整条序列还是一个结构域，搜索空间怎样构成，命中的统计显著性和覆盖范围如何，候选序列在物种树、基因家族和实验注释中处于什么位置。序列相似性由此成为功能推断证据链的入口。

## 对应关系与生物学命题 { #alignment-objects }

**一致性**（identity）是既定比对中字符完全相同的比例，**相似性**（similarity）还可把理化性质或替换概率相近的氨基酸计作正得分配对。二者都依赖比对范围、计分矩阵和分母：同一对蛋白质按完整长度、按某个结构域或只按局部高分区计算，会得到不同数值。因此，报告“序列一致性 42%”时还要给出比对长度、查询覆盖度、目标覆盖度、空位和所用方法。

**同源**（homology）描述共同祖先关系，是定性的历史命题。证据支持两条序列来自共同祖先时，可以称它们同源；证据不足时则报告相似程度。基因谱系中的复制和物种分化还会产生不同关系：由物种分化事件分开的同源基因称为直系同源基因（ortholog），由基因复制事件分开的同源基因称为旁系同源基因（paralog）。这两类关系由基因树相对于物种树的事件解释来定义；物种分布和功能异同本身不足以定义二者。直系同源通常是功能转移的重要线索，但功能仍可能发生分化；古老复制产生的旁系同源也可以分布在不同物种中。[^fitch-homology]

另一些相似来自共同结构域，而整条蛋白质的架构可能不同。结构域融合、片段缺失、可变剪接和低复杂度尾部都可能使一条查询同时命中多个家族。局部比对可以找出保守区，完整蛋白质的功能关系则要先检查结构域架构、序列长度和覆盖是否相称，再结合系统发育、基因邻域、结构和实验资料。

编辑距离和最长公共子序列有助于理解字符串算法，但它们只是生物序列比对的特殊简化。Hamming 距离只计算等长、无空位字符串中不同字符的个数；通常所说的 Levenshtein 编辑距离允许替换、插入和删除。生物序列比对则为不同替换赋予不同得分，并对空位的开启和延伸分别计价。它优化指定计分模型下的目标函数；最长公共子序列和真实进化史分别属于不同问题。动态规划的一般思想见[算法、统计与计算基础](computational_foundations.md)。

## 点阵图与比对形态 { #dotplot }

点阵图把一条序列放在横轴，另一条放在纵轴；两个位置满足字符匹配或窗口相似阈值时就在交点作标记。连续的正向相似区形成同方向对角线，平行对角线提示重复，断裂或平移可对应插入缺失，反向对角线可提示反向互补片段或倒位。它不必先承诺一条唯一最优路径，因此很适合在精细计算前查看串联重复、结构域重复和大尺度重排。

真实序列中的随机匹配会产生密集噪声。窗口长度越大、阈值越高，图形越稀疏而偏向强相似；阈值越宽松，弱信号和噪声都会增加。蛋白质点阵图还可在标记完全相同残基的基础上，用替换矩阵累计窗口得分。点阵图给出的是形态线索，具体断点和同源关系仍要通过可重复的比对、统计检验与基因组背景确认。

## 替换得分与空位模型 { #scoring-models }

一个比对的原始得分通常由各列替换得分与空位得分相加而成。核酸的简单模型可给匹配正分、错配负分；若问题需要，还可区分转换与颠换、背景碱基频率或不同位置的替换率。早期蛋白质计分曾从遗传密码中单碱基变化的可达性、氨基酸理化性质和经验交换频率等角度设计权重。现行常用矩阵多从已知同源序列统计对数优势：某一残基对在相关序列中出现得比按背景频率偶然配对更频繁时得到正分，反之得到负分。得分表达一个替换模型中的相对证据，化学相似度只是其可能依据之一。

可接受点突变（point accepted mutation，PAM）与区块替换矩阵（BLOcks SUbstitution Matrix，BLOSUM）是两条常用矩阵谱系。PAM 矩阵从较近缘蛋白质的可接受点突变出发，并借助模型外推到更长的演化距离；PAM 编号越大，代表模型中的替换距离越长。BLOSUM 从保守蛋白质区块直接统计，先按给定一致性阈值聚类近似序列；BLOSUM 编号越低，聚类阈值越低，通常用于表示较为分化的关系。二者的编号方向相反，且都不是固定的物种距离。矩阵的选择会改变弱匹配的排序，应依据核酸或蛋白质对象、预期分化程度、局部或全局目标以及工具的统计标定来决定。[^blosum]

插入和缺失在比对中表现为空位，但只凭两个现生序列常无法判断事件方向。线性空位代价使长度为 \(k\) 的空位付出 \(kg\)；更常见的仿射代价写作

\[
G(k)=g_{\mathrm{open}}+(k-1)g_{\mathrm{extend}},
\]

其中开启新空位通常比延长已有空位代价更大。这让一段连续缺失比许多彼此分散的单残基空位更容易被接受。不同软件也可能采用 \(g_{\mathrm{open}}+kg_{\mathrm{extend}}\) 的记账约定，所以复现实验时既要记录两个数值，也要记录软件采用的具体定义。仿射空位可由多状态动态规划高效求解，是 Gotoh 算法的重要贡献。[^gotoh]

计分模型会塑造最终排列。错配代价过重可能制造许多空位，空位开启过轻可能拆散本应连续的结构域，末端空位是否计分则会影响片段与全长序列的比较。编码序列还要留意移码和密码子边界；蛋白质结构域、信号肽或无序尾部则可能需要分区比对和不同参数。

## 成对序列比对 { #pairwise-alignment }

成对比对把两个序列前缀的最优解组织成矩阵。矩阵中的每一步可对应两个字符相配、在第一条序列中放置空位，或在第二条序列中放置空位；递推填表后再沿满足最优得分的路径回溯，得到具体排列。若存在并列路径，同一最优得分可以对应多个比对。算法保证指定计分、空位与边界条件下的数学最优，生物学解释还要结合这些模型条件。

| 比对方式 | 边界条件的核心含义 | 适合的问题 | 主要风险 |
| --- | --- | --- | --- |
| 全局比对 | 两条序列都从端到端进入目标函数 | 长度相近、整体同源的基因或蛋白质 | 非同源尾部和结构域差异会牵动整条比对 |
| 局部比对 | 允许从得分下降处重新开始，只保留最高分局部区 | 结构域、外显子、保守片段和数据库搜索 | 强局部命中只支持其覆盖区域，全长关系需另行检查 |
| 半全局／重叠比对 | 选择性免除一端或两端的末端空位代价 | 片段对全长、重叠序列、接头或边界比较 | 免罚的端点必须与实验设计相符 |
| glocal 比对 | 一方整体对齐到另一方的局部区域 | profile／结构域对序列、基因模型对基因组 | 查询模型错误会强迫不合理的完整覆盖 |

Needleman—Wunsch 算法奠定了全局动态规划比对的形式，Smith—Waterman 算法通过局部重新起始找到最高分局部比对。[^needleman-wunsch][^smith-waterman] 在实际软件中，两者常与仿射空位、带状计算、线性空间回溯和序列特异的边界条件结合。若只需要很近缘序列的编辑距离，专用算法可以更快；若要比较一个查询与数亿条数据库序列，逐条完成精确局部动态规划通常代价过高，于是需要候选生成和启发式过滤。

## FASTA、BLAST 与启发式搜索 { #heuristic-search }

启发式搜索先找可能产生高分比对的种子，再对种子附近做扩展和精化。它用一部分敏感性换取数量级上的速度提升，使大型数据库搜索成为日常操作。未命中表示当前参数和候选生成过程没有报告结果；种子长度、替换矩阵、空位、掩蔽、组成校正和报告阈值都可能影响远缘候选能否进入精化阶段。

FASTA 是早期广泛使用并延续至今的序列相似性搜索体系。其流程先以短词（k-tuple）寻找对角线上的密集匹配，连接或重评分候选区，再对最有希望的区域进行局部比对。较小的词长通常增加候选和灵敏度，也增加计算量；实际效果还取决于序列类型、矩阵和程序版本。FASTA 与 BLAST 采用不同的候选与精化策略，应按任务分别评价。[^fasta]

基本局部比对搜索工具（Basic Local Alignment Search Tool，BLAST）先寻找达到阈值的词邻域命中，再沿命中向两侧延伸形成高分片段对（high-scoring segment pair，HSP）。1990 年的原始算法突出无空位 HSP；后续带空位 BLAST（gapped BLAST）把带空位的精化与更高效的种子策略纳入标准实现，位置特异性迭代 BLAST（Position-Specific Iterated BLAST，PSI-BLAST）则进一步引入位置特异性序列谱。[^blast-original][^gapped-blast] 当前 BLAST 程序仍遵循“候选种子—延伸—统计报告”的总体框架，不同任务使用的种子、索引、过滤和统计模型可以不同。

### BLAST 程序方向 { #blast-programs }

程序名中的翻译方向按查询和数据库分别定义，蛋白质查询与翻译后的核酸数据库对应不同程序方向。

| 程序 | 查询 | 数据库侧 | 常见用途 |
| --- | --- | --- | --- |
| `blastn` | 核酸 | 核酸 | 转录本、基因、基因组片段和近缘核酸序列 |
| `blastp` | 蛋白质 | 蛋白质 | 蛋白质同源候选、结构域和已注释蛋白检索 |
| `blastx` | 核酸按六个阅读框翻译 | 蛋白质 | 在未注释核酸片段中寻找潜在编码产物 |
| `tblastn` | 蛋白质 | 核酸按六个阅读框动态翻译 | 用已知蛋白寻找基因组或转录组中的编码区 |
| `tblastx` | 核酸按六个阅读框翻译 | 核酸按六个阅读框动态翻译 | 对分化较大的潜在编码核酸进行蛋白质层比较 |

美国国家生物技术信息中心（National Center for Biotechnology Information，NCBI）还为不同相似程度和数据规模提供 megablast、discontiguous megablast 等变体。选择程序时应先确定生物学对象，再考虑预期分化、查询长度和数据库规模；这些前提共同赋予程序名具体含义。各方向和当前参数定义以 NCBI BLAST 官方指南为准。[^ncbi-blast-programs]

词长减小、邻域阈值放宽或更换适合远缘关系的蛋白质矩阵，通常会增加候选，同时延长运行并引入更多随机匹配。X-drop 一类规则在延伸得分从历史最高点下降过多时停止扩展。低复杂度掩蔽可阻止单一残基、短周期重复或组成极端区制造大量种子；soft masking 可以只阻止这些位置启动种子而允许可靠比对跨过它们。所有这些参数都影响“看见什么”，因此阴性结果也应保留数据库、版本、程序和关键参数。

## 得分、E-value 与命中解释 { #alignment-statistics }

局部比对的 Karlin—Altschul 理论在随机序列模型和特定计分条件下，描述机会性高分局部匹配的极值分布。若原始得分为 \(S\)，查询与数据库的有效搜索空间近似为 \(mn\)，则常写作

\[
E \approx Kmn e^{-\lambda S},
\qquad
S'=\frac{\lambda S-\ln K}{\ln 2},
\]

其中 \(E\) 是在该搜索空间中，随机情况下预期出现得分至少如此高的命中数；\(S'\) 是按计分系统标定后的比特得分（bit score）。参数 \(K\) 和 \(\lambda\) 取决于替换与空位模型。期望值（expect value，E-value）可以大于 1，其定义是随机命中数期望，而非“该命中为假”或“同源命题为真”的概率。在近似 Poisson 条件下，至少出现一次这类随机命中的概率为 \(1-e^{-E}\)，只有当 \(E\) 很小时才与 \(E\) 数值接近。[^karlin-altschul][^ncbi-blast-faq]

数据库越大，随机机会越多，同一原始比对的 E-value 通常越大；查询长度和实际搜索空间也参与计算。因此，跨数据库、跨版本比较时，bit score 往往比原始得分更容易比较，但仍需保留搜索背景。数据库搜索本身已经进行了大量候选比较，E-value 正是在模型中对搜索空间作出的校正；若研究者随后又在许多查询、参数和数据库间挑选最理想结果，还会产生额外的选择与多重比较问题。

显著命中还要回到比对本身检查：

- 查询覆盖度和目标覆盖度是否足以支持全长关系，还是只覆盖一个短结构域；
- 一致位点、正得分保守替换、空位和比对长度怎样分布，关键催化或结合位点是否落在可靠区域；
- 命中是否由跨膜螺旋、卷曲螺旋、信号肽、富含单一残基的区段或重复单元主导；
- 数据库条目是实验审定、计算预测、环境组装片段还是低质量基因模型，物种和污染信息是否可信；
- 长度、结构域顺序、亚细胞位置、基因邻域和物种分布能否共同支持同一解释。

百分一致性很高但只覆盖十几个残基的匹配，证据可能弱于一致性较低却覆盖完整保守结构域的匹配。反过来，极长核酸序列中的短而完全一致片段也可能具有重要诊断价值。阈值必须由任务、序列长度、背景组成和可容忍的假阴性（false negative，FN）／假阳性（false positive，FP）共同决定，不同对象需要各自适用的 E-value 与一致性阈值。

在两个物种间互换查询并寻找互为最佳命中（reciprocal best hit，RBH），可以快速筛选可能的一对一直系同源候选。“彼此排名第一”是筛选规则，直系同源则由物种分化事件定义。谱系特异复制、基因丢失、数据库缺失、不同进化速率和结构域融合都可能让真实关系不呈现互为第一，或让旁系同源误入候选。可靠判断仍需更完整的家族采样、基因树—物种树协调和必要的共线性证据。

低复杂度与组成偏倚尤其需要单独诊断。掩蔽和 composition-based statistics 能减少一部分非特异高分，但也可能遮住真实的生物学低复杂度区。稳妥做法是比较掩蔽前后结果，必要时只查询结构域，检查命中是否跨越信息丰富的区域，并在后续结构、系统发育或实验层面验证。[^ncbi-blast-parameters]

## 从单条命中到家族模型 { #profile-search }

一条查询只携带自身每个位点的残基。多条可信同源序列的比对则能显示哪些位置高度保守、哪些位置允许一组替换、哪些区域经常插入或缺失。**序列谱**（profile）把这种列特异信息变成搜索模型，能够识别单条序列比较难以捕获的远缘成员。

位置特异性计分矩阵（position-specific scoring matrix，PSSM）为比对中每一列和每种残基给出得分。PSI-BLAST 首轮相当于蛋白质 BLAST 搜索，随后从达到纳入阈值的命中构建 PSSM，用它进入下一轮，再以新纳入序列更新模型。少量错误命中一旦进入 profile，可能在后续迭代中吸引更多无关序列，形成序列谱漂移（profile drift）；因此每轮都要检查新增序列、结构域边界和分类分布，并据此决定是否继续。模式命中迭代 BLAST（Pattern Hit Initiated BLAST，PHI-BLAST）要求命中同时包含用户给定的模式并在其周围形成局部相似，适合“已知模式加上下文”的检索；家族归属还需由模式之外的序列与结构证据确认。结构域增强查找时间加速 BLAST（Domain Enhanced Lookup Time Accelerated BLAST，DELTA-BLAST）先借助保守结构域数据库构建 PSSM，再搜索蛋白质数据库。[^ncbi-profile-blast]

序列谱隐马尔可夫模型（profile hidden Markov model，profile HMM）把匹配、插入和删除表示为不同状态，并为各位置设置发射概率和状态转移概率。它由经过审查的多序列比对训练，计算序列与家族模型的匹配，区别于一次局部多序列比对。模型可以按全局、局部或混合方式配置；搜索灵敏度取决于训练序列的代表性、比对质量、模型边界和统计标定，各家族所需的训练序列数也随多样性和模型边界变化。HMMER 提供 profile 对序列库的搜索，也提供单序列 `phmmer` 和迭代式 `jackhmmer` 等路径。[^eddy-profile-hmm][^hmmer]

序列谱的优势也带来更强的依赖性：训练集中的分类偏倚、错误拼接、不同结构域的混合和冗余序列会写入模型。构建家族模型前应去除明显残缺或非同源片段，检查结构域边界，控制近重复序列的权重，并用未参与训练的阳性与困难阴性序列评估。序列谱命中仍是家族关系证据，功能亚型和底物特异性往往需要更精细的关键位点、谱系和实验资料。

## 多序列比对 { #multiple-sequence-alignment }

多序列比对（multiple sequence alignment，MSA）试图让每一列代表一组具有位置同源性的残基。它是 profile、保守位点分析和系统发育的基础输入，也因此会把自身的不确定性传递给下游。序列集合若混入不同结构域架构、反向片段、非重叠基因区或错误基因模型，算法仍可能给出排列，但列的生物学含义已经不一致。

精确的多维动态规划随序列条数迅速失去可扩展性。常用方法因而组合多种启发式策略：

1. **渐进比对**先估计成对距离，构建指导树，再按指导树逐步完成序列—序列、序列—profile 或 profile—profile 比对。Clustal 谱系是代表方法。早期步骤一旦放错空位，错误可能随 profile 固化；指导树服务于比对顺序，最终系统发育树需要按系统发育模型另行推断。
2. **迭代优化**从一个初始比对出发，反复拆分、重比对或更新指导关系，以改善目标得分。MUSCLE 与 MAFFT 的若干策略体现了这一路径；不同策略在序列条数、远缘程度、长插入和结构域差异间作不同权衡。
3. **一致性方法**汇集不同成对或局部比对中的支持关系，让被多条证据共同支持的残基对应获得更高权重。T-Coffee 和 ProbCons 是代表性方法，通常计算和内存代价也更高。
4. **随机或群体搜索**曾用遗传算法等方式探索巨大的排列空间，SAGA 等工具记录了这一方法路线。它们说明 MSA 可以被表述为复杂优化问题，实际使用则取决于数据规模与工具维护状态。

ClustalW、Clustal Omega、ClustalX、MUSCLE、MAFFT、T-Coffee 和 ProbCons 采用不同的设计重点。ClustalW 引入序列加权和位置特异空位，ClustalX 提供交互检查界面，Clustal Omega 面向大量蛋白质序列扩展，MAFFT 与 MUSCLE 提供多种速度—精度策略，T-Coffee 强调一致性证据。选择时应依据序列类型、数量、长度差异、预期结构域关系和下游用途，并在困难数据上比较多种参数或方法。MAFFT 的策略与限制可参见其方法论文。[^mafft]

完成计算后仍需检查比对：保守结构位点是否对齐，长空位是否集中在合理的插入区，末端和低复杂度区是否牵动核心结构域，单条异常序列是否改变大范围排列。用于系统发育时还要区分密码子、氨基酸和非编码序列，检查重组、饱和及可疑区域；具体建树与模型选择见[分子进化与系统发育分析](phylogenetics.md)。CLUSTAL、FASTA、PHYLIP 和 NEXUS 等格式保存信息的能力不同，序列名截断、字符集、空位符号和分区注释都应在转换后核对。

成对相似性还可汇成距离矩阵，或把序列作为节点、把超过阈值的相似关系作为边，再用于层次聚类、连通分量或更专门的家族聚类。聚类在比对结果之上又加入距离转换、阈值、连接规则和代表序列选择，属于比对之后的分组步骤。单连接容易被桥接序列串起远距离簇，过严阈值则可能拆开真正多样的家族；用于去冗余、构建直系同源群（orthogroup）或选择 MSA 代表序列时，应分别说明目标和规则。

## RNA 的序列与结构协同 { #rna-homology-search }

许多结构 RNA 的功能依赖碱基配对。一个茎区中的 GC 变成 AU，一级序列发生两处变化，配对结构却仍可能保留；这种协同替换使单纯逐字符搜索漏掉远缘同源物。结构感知方法将序列保守与配对关系共同纳入模型，同时关注“哪个碱基在这一列”和“两列是否以兼容方式共同变化”。

协方差模型（covariance model，CM）可视为加入 RNA 二级结构配对状态的随机上下文无关模型。Infernal 从带结构注释的 RNA 家族比对构建 CM，用于数据库搜索和比对；Rfam 等家族资源据此维护许多非编码 RNA 模型。CM 的灵敏度来自更丰富的模型，也依赖可靠的种子比对和共识结构。错误结构、序列偏倚和家族边界同样会传播到搜索结果。[^infernal]

Sankoff 类方法把折叠与比对联合求解，说明这两个问题在原理上可以同时处理，但直接精确计算非常昂贵。Dynalign、Foldalign、LocARNA 等方法以不同近似、约束和预计算降低代价，适合的序列数和长度也不同。实际分析可先用序列或 profile 找候选，再以结构感知方法精化；实验结构探测、保守性背景和假阳性评估继续补足结构与序列证据。

## 高相似序列与全基因组比对 { #genome-scale-alignment }

当目标是把信使 RNA（messenger RNA，mRNA）、组装片段或近缘序列快速定位到基因组时，索引数据库并优先寻找高相似种子的工具往往更合适。类 BLAST 比对工具（BLAST-like alignment tool，BLAT）最初针对高相似 DNA 序列以及蛋白质／翻译查询设计，采用内存索引提高重复查询速度；它适合转录本到基因组定位等高相似任务，远缘同源搜索则使用按该目的设计的方法。短读长和长读长定位还要处理测序误差、剪接、重复和成对约束，属于[基因组组装、变异与比较分析](genome_analysis.md)的完整工作流。[^blat]

全基因组比较还要面对重复序列、大片段插入缺失、倒位、易位、片段复制和组装缺口。一个实用框架是先寻找局部相似块，再把方向一致、次序相容的块组织成更长关系。加州大学圣克鲁兹分校（University of California, Santa Cruz，UCSC）比较基因组流程中的 chain 文件把局部块串联为允许两侧含空位的链；net 再按目标基因组坐标把链分层，优先放置较高分关系，并记录可填入的次级、倒位或非共线关系。chain 表达成组局部比对的连接，net 表达这些候选在目标坐标上的层次选择，二者在流程中承担互补职责。[^ucsc-chain][^ucsc-net]

BLASTZ 及其后继 LASTZ 是哺乳动物基因组局部比对方法史的重要部分；MULTIZ 则利用一系列成对关系和指定的系统关系逐步构建多物种基因组比对。[^multiz] 参考基因组的选择会使坐标、缺口归属和可投影区域呈现不对称，其角色由分析坐标系决定，与序列长度或复杂度没有普遍对应关系。重复和片段复制还会造成一对多关系，最高分链也未必等于每个位点的唯一正交来源。

因此，全基因组轨道中的“已对齐”表示坐标间存在符合相应比对规则的关系；逐碱基直系同源仍需更强证据。坐标转换工具把一个组装上的区间经由既有 chain／net 关系投影到另一个组装；转换成功支持坐标投影，调控功能、等位状态和注释还需在新背景中核验；转换失败则可能来自序列缺失、重排、重复或组装与比对限制。重要位点应检查两侧共线性、重复注释、组装质量和物种特异证据。

## 方法选择与可重复报告 { #selection-reporting }

方法选择应从待验证的命题出发，再匹配软件及参数。

| 任务 | 合理起点 | 必须同时检查 |
| --- | --- | --- |
| 两条近似全长序列是否整体对应 | 全局或半全局成对比对 | 长度、末端、空位模型、结构域架构 |
| 在长序列中寻找保守片段 | 局部比对、BLAST／FASTA | 覆盖、低复杂度、搜索空间和多个 HSP 的关系 |
| 寻找远缘蛋白质家族成员 | PSI-BLAST、profile HMM、结构域模型 | profile 训练集、迭代纳入、家族边界和困难阴性 |
| 构建保守列或系统发育输入 | 面向数据特征的 MSA 策略 | 序列集合、异常片段、列不确定性、指导树偏差 |
| 搜索保守结构 RNA | 序列搜索后接 CM／结构感知比对 | 共识结构、协同替换、组成背景和实验支持 |
| 比较大尺度基因组共线性 | 局部锚点、chain／net、多基因组比对 | 重复、复制、重排、参考偏倚和组装缺口 |

一个可复现的搜索记录至少应包含查询序列的登录号与版本或校验摘要、数据库名称与发布版、检索日期、数据库的物种范围、程序与版本、替换矩阵、空位参数、掩蔽与组成校正、迭代纳入阈值，以及保留命中的规则。结果表除了登录号（accession）、E-value 和 bit score，还应保存查询／目标覆盖、比对长度、一致性（identity）、正得分替换（positive）、空位（gap）、物种、条目审定状态和结构域范围。数据库条目的版本、坐标与互操作规则见[生物数据、格式与数据库](data_databases.md)，由命中走向功能注释的证据层级见[功能注释、富集与功能预测](functional_annotation.md)。

阴性结果还要保存其解释空间：查询是否过短或含错误，适合的翻译方向是否使用，低复杂度是否被完全掩蔽，数据库是否包含目标类群，profile 是否覆盖所研究的亚家族，阈值是否为特定目的而设置。序列比对把生物学问题转化为可检查的字符对应和统计证据；共同功能、唯一进化事件或实验事实则由后续证据继续检验。

## 参考资料与延伸阅读 { #references }

[^fitch-homology]: Fitch WM. Distinguishing homologous from analogous proteins. *Systematic Zoology*. 1970;19(2):99–113. [doi:10.2307/2412448](https://doi.org/10.2307/2412448)。

[^blosum]: Henikoff S, Henikoff JG. Amino acid substitution matrices from protein blocks. *PNAS*. 1992;89(22):10915–10919. [doi:10.1073/pnas.89.22.10915](https://doi.org/10.1073/pnas.89.22.10915)。

[^gotoh]: Gotoh O. An improved algorithm for matching biological sequences. *Journal of Molecular Biology*. 1982;162(3):705–708. [doi:10.1016/0022-2836(82)90398-9](https://doi.org/10.1016/0022-2836(82)90398-9)。

[^needleman-wunsch]: Needleman SB, Wunsch CD. A general method applicable to the search for similarities in the amino acid sequence of two proteins. *Journal of Molecular Biology*. 1970;48(3):443–453. [doi:10.1016/0022-2836(70)90057-4](https://doi.org/10.1016/0022-2836(70)90057-4)。

[^smith-waterman]: Smith TF, Waterman MS. Identification of common molecular subsequences. *Journal of Molecular Biology*. 1981;147(1):195–197. [doi:10.1016/0022-2836(81)90087-5](https://doi.org/10.1016/0022-2836(81)90087-5)。

[^fasta]: Pearson WR, Lipman DJ. Improved tools for biological sequence comparison. *PNAS*. 1988;85(8):2444–2448. [doi:10.1073/pnas.85.8.2444](https://doi.org/10.1073/pnas.85.8.2444)。

[^blast-original]: Altschul SF, Gish W, Miller W, Myers EW, Lipman DJ. Basic local alignment search tool. *Journal of Molecular Biology*. 1990;215(3):403–410. [doi:10.1016/S0022-2836(05)80360-2](https://doi.org/10.1016/S0022-2836(05)80360-2)。

[^gapped-blast]: Altschul SF, Madden TL, Schäffer AA, et al. Gapped BLAST and PSI-BLAST: a new generation of protein database search programs. *Nucleic Acids Research*. 1997;25(17):3389–3402. [doi:10.1093/nar/25.17.3389](https://doi.org/10.1093/nar/25.17.3389)。

[^ncbi-blast-programs]: NCBI. [BLAST Program Selection Guide](https://blast.ncbi.nlm.nih.gov/doc/blast-quick-start-guide/chooseblastprogram.html)；[BLAST Command Line Applications User Manual: Appendices](https://www.ncbi.nlm.nih.gov/books/NBK279684/)。

[^karlin-altschul]: Karlin S, Altschul SF. Methods for assessing the statistical significance of molecular sequence features by using general scoring schemes. *PNAS*. 1990;87(6):2264–2268. [doi:10.1073/pnas.87.6.2264](https://doi.org/10.1073/pnas.87.6.2264)。

[^ncbi-blast-faq]: NCBI. [BLAST Frequently Asked Questions: E-value](https://blast.ncbi.nlm.nih.gov/doc/blast-help/FAQ.html)。

[^ncbi-blast-parameters]: NCBI. [BLAST Search Parameters](https://blast.ncbi.nlm.nih.gov/doc/blast-topics/blastsearchparams.html)。

[^ncbi-profile-blast]: NCBI. [BLAST Glossary](https://www.ncbi.nlm.nih.gov/books/NBK62051/)；[Protein BLAST algorithm descriptions](https://blast.ncbi.nlm.nih.gov/Blast.cgi?PROGRAM=blastp)。

[^eddy-profile-hmm]: Eddy SR. Profile hidden Markov models. *Bioinformatics*. 1998;14(9):755–763. [doi:10.1093/bioinformatics/14.9.755](https://doi.org/10.1093/bioinformatics/14.9.755)。

[^hmmer]: HMMER Project. [HMMER: biosequence analysis using profile hidden Markov models](https://hmmer.org/)。

[^mafft]: Katoh K, Standley DM. MAFFT multiple sequence alignment software version 7: improvements in performance and usability. *Molecular Biology and Evolution*. 2013;30(4):772–780. [doi:10.1093/molbev/mst010](https://doi.org/10.1093/molbev/mst010)。

[^infernal]: Nawrocki EP, Eddy SR. Infernal 1.1: 100-fold faster RNA homology searches. *Bioinformatics*. 2013;29(22):2933–2935. [doi:10.1093/bioinformatics/btt509](https://doi.org/10.1093/bioinformatics/btt509)。

[^blat]: Kent WJ. BLAT—the BLAST-like alignment tool. *Genome Research*. 2002;12(4):656–664. [doi:10.1101/gr.229202](https://doi.org/10.1101/gr.229202)。

[^ucsc-chain]: UCSC Genome Browser. [Chain format](https://genome.ucsc.edu/goldenpath/help/chain.html)。

[^ucsc-net]: UCSC Genome Browser. [Net format](https://genome.ucsc.edu/goldenpath/help/net.html)。

[^multiz]: Blanchette M, Kent WJ, Riemer C, et al. Aligning multiple genomic sequences with the threaded blockset aligner. *Genome Research*. 2004;14(4):708–715. [doi:10.1101/gr.1933104](https://doi.org/10.1101/gr.1933104)。
