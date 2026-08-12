# 序列特征、基因识别与功能位点

一条核酸或蛋白质序列同时承载多种层次的信息。碱基组成和氨基酸组成是对字符的直接计数；开放阅读框、信号肽、跨膜螺旋和结构域则是依据模型提出的生物学解释；启动子、磷酸化位点和亚细胞定位最终还涉及细胞类型、分子状态与实验条件。把这些对象统称为“序列特征”很方便，却容易掩盖它们不同的证据强度。

序列分析的核心工作，是把“可以从字符确定”“由统计模型预测”和“已有实验验证”分开。经典软件如 DNASTAR、BioEdit、DNAMAN、GENSCAN、CodonW、Primer 5、TMpred 与 COILS 保存了重要的方法学习路径；现代工具扩展了训练数据、物种范围和模型能力，但没有取消坐标、链方向、参照集合和实验验证这些基本问题。以下工具谱系也参考了 osm.bio 的整理线索，具体定义与方法边界均用论文、数据库或官方说明重新核验。[^osm-sequence-tools]

## 从字符序列建立分析对象 { #sequence-object }

分析开始时首先要固定分子类型、链方向、坐标体系和版本。核酸 FASTA 中的序列通常按所报告链的 5′→3′ 方向书写；“反向序列”只改变字符次序，“互补序列”只替换碱基，“反向互补序列”同时完成两步，才表示双链 DNA 另一条链按 5′→3′ 方向的写法。DNASTAR EditSeq、BioEdit 和 DNAMAN 等图形软件曾把大小写转换、反向互补、翻译和酶切图谱集中在一个界面中；这些操作今天也可由脚本完成，但都应保留原始序列和转换记录。

IUPAC 模糊字符保存了不确定性或群体多态，而不是可以随意删除的噪声。`N` 表示任意核苷酸，蛋白质中的 `X` 表示未确定残基；翻译时还要指定遗传密码表、阅读方向和序列是否完整。大多数编码序列使用标准遗传密码，但线粒体、质体、部分原生生物和微生物存在变体，UGA／UAG 也可在特定信号和翻译装置下重编码为硒代半胱氨酸或吡咯赖氨酸。[^uniprot-nonstandard]

字符计数可以得到序列长度、A／C／G／T(U) 比例、GC 含量、二核苷酸和更高阶 k-mer 频率。GC 含量能反映突变偏倚、重组、水平转移、基因组区室或测序组成偏差，在一些微生物比较中也有分类线索；它不是单独判定物种或基因来源的条形码。滑动窗口还可显示局部 GC、GC skew 或复杂度变化，但窗口长度和步长会决定细节尺度。任何异常区都要与组装质量、重复、覆盖和近缘基因组共同解释。

限制性内切酶图谱是另一类确定性较强的序列变换：先在给定序列中寻找识别位点，再按酶的切割位置推导末端和片段长度。REBASE 维护限制—修饰系统的酶、识别序列与甲基化信息，NEBcutter 等工具可把位点画成虚拟酶切图。[^rebase] 序列命中只说明“存在可识别的字符模式”；真实消化还受甲基化敏感性、缓冲液、温度、酶活性、DNA 构象和非特异切割影响。载体克隆选酶时还要同时检查插入片段、载体多克隆位点、末端兼容性与插入方向。

## 开放阅读框与基因边界 { #orf-gene-model }

开放阅读框（open reading frame, ORF）是在指定遗传密码和阅读框中，从一个候选起始位置延伸到同框终止密码子而不被内部终止打断的区段。双链 DNA 通常有六个阅读框；随机序列也会产生短 ORF，真实基因还可能使用非典型起始密码子、发生移码或终止重编码。ORF Finder 一类工具适合枚举候选，但 ORF 不等于基因：非编码 RNA 基因没有蛋白质 ORF，真核基因可被内含子分割，同一基因也可形成多个转录本和编码异构体。基因、转录单位和 ORF 的机制边界见[遗传物质、基因与基因组](../molecular/genetic_material.md#gene-architecture)。

原核蛋白质编码区通常较紧凑，预测模型会结合起始与终止密码子、核糖体结合区、编码区三联体周期、六联体组成、基因长度、链方向和邻近基因组织。Glimmer 与 GeneMarkS 保存了这类从编码统计和自训练模型识别基因的方法史；现代原核注释流程还将蛋白质同源证据、保守结构域、RNA 基因和假基因诊断一起纳入。NCBI PGAP 目前把序列直接预测与蛋白质比对证据结合，并在缺乏比对支持的区域使用 GeneMark-S2+。[^ncbi-pgap]

真核基因识别需要同时选择外显子、内含子、剪接供体和受体、起始／终止密码子、UTR 与转录本连接方式。GENSCAN 以广义隐马尔可夫模型整合信号和序列组成，在完整外显子—内含子结构预测史上具有代表性；GRAIL、PromoterScan 和 POLYAH 等工具则分别强调外显子、启动子或 3′ 端信号。[^genscan] 单一 motif 很常见：`GT–AG` 不能独立定义剪接内含子，TATA box 不是所有启动子的必需元件，聚腺苷酸化信号也不等于唯一切割位点。

今天的真核结构注释通常把从头模型与转录本、长短读长 RNA-seq、同种或近缘蛋白质、保守性和重复掩蔽共同使用。NCBI 的真核注释流程便以转录和蛋白质比对支持基因模型，并标记缺少起始／终止、疑似移码或实验证据覆盖不足的模型。[^ncbi-egap] RNA 证据能够确定某些剪接连接，却受组织、发育阶段和表达量限制；蛋白质同源证据能支持编码区，却未必解析 UTR 和物种特异外显子。多个证据一致时模型更可信，彼此冲突时应保留异构体、局部不确定性和组装错误等解释。

### CpG 岛、启动子与终止信号 { #regulatory-sequence-signals }

CpG 岛是以局部 GC 含量和 CpG 观察／期望比富集来定义的序列区段。在一段长度为 \(L\) 的序列中，常用

\[
\mathrm{CpG}_{o/e}=\frac{N_{CpG}\,L}{N_C N_G}
\]

衡量 CpG 是否比独立碱基背景下更常见。经典 Gardiner-Garden／Frommer 标准及 UCSC 的相应轨道采用长度至少 200 bp、GC 不低于 50%、\(\mathrm{CpG}_{o/e}\) 不低于 0.6；Takai—Jones 等方法使用更严格阈值，隐马尔可夫模型和 CpG 间距法又会得到不同边界。[^cpg-ucsc][^cpg-original] 因此，素材中“CpG 占 GC 一半以上”的表述并不正确，`CpGPlot` 的命中也必须连同算法、参数、是否屏蔽重复和基因组版本报告。

许多脊椎动物启动子附近存在 CpG 岛，另一些 CpG 岛位于基因体、远端调控区或没有紧邻已知启动子。CpG 岛是序列组成特征，不直接说明该位置在特定组织中的甲基化状态或转录活性。启动子和增强子预测同样依赖物种、训练标注、染色质状态和细胞类型；序列 motif 提供结合可能性，开放染色质、转录起始测定、转录因子占位和扰动实验才能逐步建立调控作用。转录和 RNA 3′ 端形成的机制见[转录与 RNA 生物合成](../molecular/transcription.md)与[RNA 转录后加工](../molecular/rna_processing.md)。

## 重复序列与低复杂度 { #repeats-low-complexity }

重复序列包括转座元件来源的散在重复、卫星 DNA 和短串联重复、基因家族重复、简单序列及低复杂度区。它们既会干扰组装、比对、基因预测和引物特异性，也会参与染色体结构、重组、调控和演化。酵母 tRNA 基因可作为低拷贝重复的例子，却不能代表所有重复类别；“重复”应按形成机制、拷贝组织和分析目的进一步分类。

RepeatMasker 将查询与物种相关的重复家族库比较并标注匹配。Dfam 以 profile HMM 和共识序列维护转座元件家族，Repbase 则是经典真核重复序列资源；库的类群覆盖、版本与许可会直接影响结果。[^repeatmasker] STRBase 主要服务法医遗传学中的短串联重复位点，不能替代通用的基因组串联重复库。对非模式物种，近缘库缺失会造成大量“未知重复”，常需从头发现、家族分类与人工审查。

硬掩蔽把重复字符改为 `N`，软掩蔽通常改为小写而保留碱基身份。掩蔽可阻止重复产生大量种子或伪外显子，也可能遮住重复衍生的真实编码区和调控元件。基因预测、比对和特征扫描应说明使用何种掩蔽、重复库与物种设置；保存未掩蔽结果，才能追溯候选为何出现或消失。

## 密码子使用偏好 { #codon-usage }

同一种氨基酸常由多个同义密码子编码，但它们在一个基因或基因组中的使用并不均匀。突变和 GC 偏倚、漂变、选择、tRNA 供给、表达水平、复制链方向、水平转移及氨基酸组成都可能塑造密码子频率。CodonW 等命令行工具把多种经典指标集中起来；解释时应先确认序列是完整 CDS、阅读框正确，并排除终止密码子和非整倍密码子片段。

若氨基酸 \(i\) 有 \(n_i\) 个同义密码子，第 \(j\) 个密码子的相对同义密码子使用度可写为

\[
\mathrm{RSCU}_{ij}=\frac{X_{ij}}{\frac{1}{n_i}\sum_{k=1}^{n_i}X_{ik}}.
\]

RSCU 为 1 表示在该氨基酸的同义集合内与均匀使用相当，大于或小于 1 表示相对偏多或偏少；它没有校正碱基组成和样本量。密码子适应指数（CAI）把各密码子相对于一个参考基因集的权重作几何平均，数值接近 1 表示更像该参照的使用模式，而不是跨物种通用的“高表达概率”。参照集的物种、组织、细胞器和构建方法必须报告。[^cai]

有效密码子数 \(N_c\) 从一个基因自身的同义密码子使用估计总体偏倚；在标准遗传密码的理想解释中，约 20 表示每类氨基酸几乎只用一个密码子，61 表示接近均匀使用。它不需要“高表达基因集”作为参照，素材中的这一条件属于误置。短基因、缺失氨基酸类别和 GC3 偏倚会影响估计，后续修正指标也可能采用不同记号和算法。[^enc] CAI、RSCU、\(N_c\) 与 GC3 应结合起来看，不能由单一指标直接推出表达量、翻译速度或外源表达产量。

## 引物与扩增子的序列设计 { #primer-design }

引物设计的对象是“一对寡核苷酸在指定模板和反应体系中产生目标扩增子”，不是为每条引物寻找一组固定漂亮数值。常规 PCR、RT-PCR、qPCR、测序、克隆、定点突变和多重扩增对产物长度、特异性、末端结构及附加序列的要求不同。应先固定模板版本、目标异构体、物种背景、预期扩增子与后续用途，再优化引物对。

| 设计维度 | 需要计算或核查的对象 | 常见失效来源 |
| --- | --- | --- |
| 结合稳定性 | 两条引物的 Tm、盐与 Mg²⁺、引物和 dNTP 浓度、退火区错配 | 把 62 ℃ 当作所有体系的最佳退火温度；用不同热力学模型比较 Tm |
| 序列组成 | 长度、GC、同聚物、重复、3′ 端稳定性 | 把 18—25 nt、40%—60% GC 或 3′ G/C clamp 当作硬阈值 |
| 二级结构 | 单条发卡、同源二聚体、异源二聚体，特别是可延伸的 3′ 配对 | 只比较总体互补百分比，忽略配对位置和反应浓度 |
| 模板特异性 | 全基因组／转录组非靶位点、旁系基因、重复、假基因和常见变异 | 只对目标片段 BLAST，或以“非靶同源性低于 70%”作统一规则 |
| 扩增子 | 长度、GC、二级结构、外显子连接、等位基因和重复 | 引物本身合格但产物不可达、过长或跨错异构体 |
| 附加序列 | 限制位点、保护碱基、接头、标签、UMI 或突变 | 把不参与首轮退火的 5′ tail 全部计入退火 Tm；未核对酶切与读框 |

Tm 是特定盐、离子、浓度和邻近碱基热力学模型下的熔解温度估计，成对引物应使用同一模型并保持适合实验的相近 Tm。Primer3 的更新专门改进了盐和二价离子校正，说明“最佳长度／温度”依赖计算条件。[^primer3] 3′ 端错配通常比 5′ 端更影响延伸，但影响取决于错配类型、相邻碱基和聚合酶；G/C clamp 可以在某些设计中增加末端稳定性，并非必须。所谓自由能沿引物呈“正弦曲线”也不是通用设计准则，应直接评估发卡和二聚体的结构、\(\Delta G\) 与反应条件。

克隆引物可在 5′ 端增加限制位点、保护碱基和标签，因此总长度完全可能超过 35 nt；首轮退火主要由模板互补区决定。常规延伸引物需要可供聚合酶使用的 3′-OH，但合成寡核苷酸可以在 5′、内部或 3′ 加入多种修饰，3′ 封闭还可被有意用于探针或阻断寡核苷酸。“引物只能在 5′ 修饰”因而不成立，必须按寡核苷酸在反应中的角色判断。

Primer 5 保存了商业图形化设计、酶切与 pattern 分析的方法史；Primer3 及其衍生界面提供可记录参数的通用设计。NCBI Primer-BLAST 在 Primer3 候选上使用所选数据库检查潜在扩增产物，物种和数据库选择决定“特异”的含义。[^primer-blast] 对 qPCR 还应实测效率、动态范围、产物单一性和阴性对照，并按 MIQE 记录寡核苷酸序列与反应条件。[^miqe] 引物名称可编码物种、基因、方向和用途，但机器可读表还应保存序列、批次、模板登录号、坐标、软件版本和参数。

具体配液与扩增条件属于[核酸扩增与定量](../exptech/biochem_molecular/amplification_cloning.md)，载体组装和构建确认属于[分子克隆与构建设计](../exptech/biochem_molecular/molecular_cloning.md)；本页关注如何由序列提出可检验的设计。

## RNA 二级结构与构象集合 { #rna-secondary-structure }

RNA 二级结构用碱基配对和未配对区描述茎、发卡、内环、多分支环等拓扑。最大碱基配对法以配对数为目标，展示了动态规划如何避免枚举所有结构，却没有区分堆叠、环和离子环境的能量。最小自由能（minimum free energy, MFE）方法使用最近邻热力学参数，在指定温度与条件下寻找模型自由能最低的嵌套二级结构；ViennaRNA 与 RNAstructure 是这一路径的代表实现。[^viennarna]

MFE 结构只是模型中的一个最低点。接近最低能量的许多结构可以共同占据显著概率，McCaskill 配分函数算法能够计算平衡构象集合和每对碱基的配对概率。[^mccaskill] 因此，可信区域应结合 MFE、centroid／maximum expected accuracy 结构、碱基配对概率和可替代构象判断。离子、配体、RNA 修饰、蛋白质结合、共转录折叠和动力学陷阱都可能使细胞内构象偏离理想稀溶液的平衡模型。

许多标准动态规划算法只允许嵌套配对，不能直接表示交叉的假结；能处理假结的模型通常采用额外约束、启发式或更高计算代价。素材把“比较序列法可以预测假结和其他三维结构”写得过宽：协变与保守性能够为人工建立的配对假说提供强证据，但常用 profile／协方差模型仍主要描述嵌套二级结构，三级接触还需要专门模型和实验约束。

比较序列分析在足够多、分化适当且确为同源的序列中寻找补偿替换。例如一对 GC 变为 AU 时，两列同时改变而配对仍被保留，这比单条序列的能量最优更直接支持结构选择。Rfam 的家族由种子多序列比对、共识二级结构和协方差模型共同表示。[^rfam] 样本太近缘时缺少协变，过远或比对错误时又会制造假信号；比较法的可靠性来自取样、位置同源和统计支持，不是一个固定的序列条数门槛。

GtRNAdb、RNase P 专题资源、RNA STRAND 和比较 RNA Web 等经典数据库，分别保留了 tRNA、特定催化 RNA、已知二级结构与 rRNA 比较结构的专题学习路径。使用这类记录时要区分人工整理、比较模型和单序列预测，并核对版本、分类群与序列坐标。

实验探测信息可作为软约束或伪能量项加入折叠，并与家族协变交叉核验。对长 RNA、相互作用 RNA 或多结构开关，还要考虑局部折叠、链间配对和条件特异构象。RNA 三级结构与结构感知同源搜索在[序列比对与数据库搜索](sequence_analysis.md#rna-homology-search)及后续[结构生物信息学](structural_bioinformatics.md)进一步展开。

## 蛋白质一级序列的物理化学摘要 { #protein-physicochemical-properties }

蛋白质序列可以直接给出长度和各氨基酸计数，并在一组化学假设下估算未修饰链的分子质量、理论等电点、消光系数和其他组成指标。ProtParam 将这些摘要集中展示，ProtScale 则用滑动窗口绘制疏水性、柔性或其他残基尺度。不同疏水性量表、窗口长度和末端处理会改变曲线；峰值是局部组成线索，不自动等于跨膜螺旋、结合口袋或折叠核心。

AACompIdent 曾尝试以氨基酸组成匹配已知蛋白质，Antheprot 则把组成、理化尺度和早期二级结构方法集成在桌面软件包中。它们展示了在大型序列数据库和 profile 检索普及前如何压缩一级序列信息；组成相似本身不足以鉴定蛋白质或确立同源关系。

理论质量通常按中性残基质量相加并考虑肽键失水，成熟蛋白的信号肽切除、起始甲硫氨酸去除、二硫键、糖基化、脂质化和其他修饰会改变真实质量。理论 pI 又依赖所选 pKa 集与电荷模型，无法完整表示局部环境和多聚体。所谓 instability index、aliphatic index 等经验量来自特定训练关系，适合比较和提出假说，不是细胞内半衰期或热稳定性的直接测量。

PeptideCutter 和 PeptideMass 一类工具按蛋白酶识别规则预测切点和肽段质量，对早期肽图、质谱数据库搜索和实验设计仍有价值。真实酶解会受折叠、修饰、切点邻域、反应条件和漏切影响；质谱中的肽段鉴定与蛋白推断属于[蛋白质组与质谱数据分析](proteomics.md)。

## 信号肽、跨膜拓扑与卷曲螺旋 { #protein-topology-signals }

分泌信号肽通常位于新生链 N 端，包含带正电的 N 区、疏水核心和切割位点附近的极性区域，但不同生命域和分泌途径具有不同类型。早期 SignalP 输出的 C、S、Y、mean S 与 D-score 记录了“逐残基信号区—切割位点—整体分类”如何组合的模型设计；这些分数的定义随版本改变，不能把旧版曲线阈值套到当前结果。SignalP 6.0 使用蛋白质语言模型区分五类信号肽并预测切割位置，仍须指定类群设置并保留版本。[^signalp6]

Sgdb 的实验信号肽集、Signal-BLAST 的相似性搜索和 SigCleave 的规则打分，保留了早期从数据库对照、短模式到统计切割模型的递进路径。这些历史工具的记录集、参数和可用性与当前模型不同，旧结果应按原版本解读。

可切除信号肽、线粒体／叶绿体 transit peptide 和不切除的 signal anchor 都含有富集的序列特征，却对应不同运输路径。一个 N 端疏水区既可能被信号肽模型识别，也可能被跨膜螺旋模型识别；Phobius 通过联合建模减少两类预测的冲突。[^phobius] SignalP 命中也不等于成熟蛋白最终被分泌到细胞外：蛋白质可能滞留于内质网／高尔基体、成为膜蛋白、进入溶酶体或在后续运输中被回收。

TMpred 以统计偏好识别跨膜区，TMHMM 用隐马尔可夫模型同时描述疏水螺旋、两侧环和电荷偏向，是经典的 α 螺旋膜蛋白拓扑模型。[^tmhmm] 它不负责一般性的跨膜 β 桶预测。短疏水峰、内部信号肽、再入环和边界附近的电荷都会造成歧义，最好比较联合模型、同源蛋白拓扑、结构与实验插入证据。UniProt 对预测性 α 螺旋跨膜注释会结合多种方法，并明确把“sequence analysis”与实验依据区分。[^uniprot-transmembrane]

卷曲螺旋由两条或多条 α 螺旋以周期性疏水界面缠绕，经典 COILS 方法从已知卷曲螺旋的局部序列窗口估计概率。[^coils] 七肽周期是重要线索，但长 α 螺旋、低复杂度和富含带电残基的区域都可能产生假阳性；预测边界也不直接告诉寡聚数、平行方向和细胞中的装配伙伴。

## 结构域、motif 与内在无序 { #domains-motifs-disorder }

蛋白质**结构域**通常是可在不同蛋白质中复用、具有演化与结构完整性的较长单位；**motif** 是更短的序列或结构模式；**site** 指具体残基或小范围位置，如催化、配体结合或修饰位点；**repeat** 则是多次出现的同类单位。四者可以重叠，却不能相互代换。一个短 motif 可能在背景序列中偶然出现，结构域 profile 命中通常携带更多上下文，但仍可能只支持家族而不能区分底物或亚型。

PROSITE pattern 适合寻找短而保守的模式，Pfam、SMART、CDD 等 profile 模型覆盖家族与结构域，InterPro 将多个成员数据库的 family、domain、repeat 和 site signature 组织到统一条目中。[^interpro] 扫描结果应检查模型阈值、覆盖、片段完整性、重复命中与结构域顺序；多个数据库对边界的轻微差异不必强行合并成一个“精确坐标”。结构域重排、融合和丢失本身也是生物学信息。

内在无序区缺少单一稳定折叠，常富含低复杂度、带电残基和短线性 motif。MobiDB 等资源把实验、结构派生、同源转移与预测性无序注释分层汇集。[^mobidb] 无序预测不表示该区毫无结构：它可能在结合、修饰、相分离或环境变化时形成局部构象。低复杂度、coiled-coil 和 disorder 模型也会互相混淆，需结合保守性、结构、相互作用与实验状态解释。

早期 Chou—Fasman 法用残基在 α 螺旋、β 结构和转角中的经验倾向寻找成核与延伸区，并用平均倾向处理重叠；疏水模式法和最邻近法又分别引入立体化学线索及已知片段构象。这些方法说明二级结构预测如何从局部规则发展到数据库统计；PredictProtein 等集成服务则把 profile、二级结构和暴露度等预测组织成联合注释。现代模型会结合多序列 profile、长程上下文或蛋白质语言模型，但序列特征页只讨论其输入与证据性质；二级／三级结构、同源建模、threading、SWISS-MODEL 和现代深度学习结构预测见[结构生物信息学](structural_bioinformatics.md)，结构层次本身见[蛋白质结构](../biochem/protein_structure.md)。

## 亚细胞定位预测 { #subcellular-localization }

定位模型可以读取 N 端 transit peptide、信号肽、核定位／输出 motif、过氧化物酶体末端信号、跨膜拓扑和整条序列组成。PSORT 谱系按不同生物类群组合规则与统计分类器，TargetP 主要区分真核分泌与细胞器靶向肽；DeepLoc 2.0 则使用蛋白质语言模型并允许多标签定位。[^targetp2][^deeploc2] 工具输出的类别体系、训练物种和是否允许多定位不同，分数不可跨模型直接比较。

许多定位信号是弱、条件依赖或三维形成的，蛋白质还可在细胞周期、应激、剪接、修饰和互作改变后重新分布。序列模型通常预测“具备某类运输线索”，不是某组织中每个分子的稳态位置。验证可结合荧光定位、细胞分级、邻近标记、分泌组／膜蛋白组、信号删除突变和内源表达；每类方法又有过表达、标签、污染和分辨率偏倚。蛋白质运输机制见[蛋白质成熟、定位与质量控制](../molecular/protein_processing.md#protein-targeting)。

## 翻译后修饰与功能位点 { #ptm-functional-sites }

磷酸化、糖基化、乙酰化、泛素化、脂质化和蛋白水解等修饰首先要求可接受的残基或局部化学环境。NetPhos、Scansite、DISPHOS 等经典工具分别从局部序列、激酶 motif、无序倾向等信息给候选打分；模型命中只表示与训练集中已知位点相似。激酶表达、亚细胞共定位、构象可及性、竞争修饰和刺激条件都会决定候选是否在细胞内真正被修饰。

Phospho.ELM 保存了从文献整理真核磷酸化位点的数据库路径，UniProt 及其他当前 PTM 资源还会汇集人工审定、相似性传播、大规模质谱和计算预测。使用记录时要检查物种、蛋白异构体、序列版本、位点定位概率和证据类型；“在质谱中检测到含修饰肽段”“修饰精确定位到某残基”和“该修饰调控功能”是三层不同结论。UniProt 的序列特征通过位置、描述和证据来源明确区分实验与预测注释。[^uniprot-annotation]

一个结构域中的保守残基、一个显著 motif 或一个高分 PTM 候选，都还不是“已验证功能位点”。功能证据可逐层增加：跨物种和家族保守支持选择约束，结构支持空间位置，生化测定支持结合或催化，定点突变支持残基必要性，互补与内源编辑进一步减少表达量和构象扰动的替代解释。突变造成蛋白质不稳定时，功能下降也不能直接归因于位点机制。

## 预测结果的证据层级与复现 { #feature-evidence-reporting }

同一序列可被多个工具标出许多候选，可靠工作流应按对象组织证据，而不是把所有彩色轨道叠在一起便视为注释完成。

| 结果对象 | 序列模型直接支持的命题 | 仍需补充的证据 |
| --- | --- | --- |
| ORF／基因模型 | 指定密码表与模型下的编码区和外显子路径 | 转录边界、异构体、蛋白质产物、假基因与重编码 |
| CpG／promoter motif | 指定算法下的组成富集或结合模式 | 细胞类型中的甲基化、开放、起始、占位与调控效应 |
| 引物对 | 热力学和数据库背景下的候选扩增子 | 真实效率、特异产物、样本变异和反应体系 |
| RNA 结构 | 模型条件下的 MFE、构象集合或协变配对 | 化学探测、RNP 环境、动力学与条件特异构象 |
| 信号肽／跨膜区／定位 | 训练标签和序列特征支持的运输或拓扑类别 | 成熟切割、膜拓扑、组织与状态特异定位 |
| 结构域／motif／PTM 位点 | 与 family、pattern 或训练位点的统计相容 | 完整结构域、底物特异性、修饰存在及功能因果 |

每项分析至少记录序列登录号和版本、物种与细胞器、异构体、坐标约定、工具与版本、模型／数据库发布版、参数、阈值和掩蔽方式。机器学习预测还应查看训练标签如何定义、测试集是否与查询家族重叠、类别是否覆盖目标物种，以及分数有没有经过校准。只报告“使用在线网站默认参数”无法解释网站升级后结果为何变化。

预测之间一致能够提高优先级，却不等于独立验证：多个工具可能共享训练数据库、相似的 profile 或同一组疏水性特征。真正的正交证据应来自不同信息源，例如转录本支持基因边界、结构支持 motif 空间位置、质谱支持修饰存在、定位实验支持运输结果。序列分析的最终产物不是一份无条件正确的标签清单，而是一组坐标明确、来源可追溯、能被实验和后续数据检验的假说。

## 参考资料与延伸阅读 { #references }

[^osm-sequence-tools]: osm.bio. [生物信息数据库及工具简介整理](https://osm.bio/%E7%94%9F%E7%89%A9%E4%BF%A1%E6%81%AF%E6%95%B0%E6%8D%AE%E5%BA%93%E5%8F%8A%E5%B7%A5%E5%85%B7%E7%AE%80%E4%BB%8B%E6%95%B4%E7%90%86)。本页保留其经典工具线索，并以相应方法论文和官方资料纠错、补充。

[^uniprot-nonstandard]: UniProt. [Non-standard residue annotation](https://www.uniprot.org/help/non_std)。

[^rebase]: Roberts RJ, Vincze T, Posfai J, Macelis D. REBASE: a database for DNA restriction and modification: enzymes, genes and genomes. *Nucleic Acids Research*. 2023;51(D1):D629–D630. [doi:10.1093/nar/gkac975](https://doi.org/10.1093/nar/gkac975)。

[^ncbi-pgap]: NCBI. [Prokaryotic Genome Annotation Process](https://www.ncbi.nlm.nih.gov/refseq/annotation_prok/process/)。

[^genscan]: Burge C, Karlin S. Prediction of complete gene structures in human genomic DNA. *Journal of Molecular Biology*. 1997;268(1):78–94. [doi:10.1006/jmbi.1997.0951](https://doi.org/10.1006/jmbi.1997.0951)。

[^ncbi-egap]: NCBI. [The NCBI Eukaryotic Genome Annotation Pipeline](https://www.ncbi.nlm.nih.gov/refseq/annotation_euk/process/)。

[^cpg-ucsc]: UCSC Genome Browser Wiki. [CpG Islands](https://genomewiki.ucsc.edu/index.php/CpG_Islands)。

[^cpg-original]: Gardiner-Garden M, Frommer M. CpG islands in vertebrate genomes. *Journal of Molecular Biology*. 1987;196(2):261–282. [doi:10.1016/0022-2836(87)90689-9](https://doi.org/10.1016/0022-2836(87)90689-9)。

[^repeatmasker]: Dfam Consortium. [RepeatMasker documentation](https://github.com/Dfam-consortium/RepeatMasker)；[Dfam](https://www.dfam.org/)。

[^cai]: Sharp PM, Li WH. The codon adaptation index—a measure of directional synonymous codon usage bias, and its potential applications. *Nucleic Acids Research*. 1987;15(3):1281–1295. [doi:10.1093/nar/15.3.1281](https://doi.org/10.1093/nar/15.3.1281)。

[^enc]: Wright F. The effective number of codons used in a gene. *Gene*. 1990;87(1):23–29. [doi:10.1016/0378-1119(90)90491-9](https://doi.org/10.1016/0378-1119(90)90491-9)。

[^primer3]: Koressaar T, Remm M. Enhancements and modifications of primer design program Primer3. *Bioinformatics*. 2007;23(10):1289–1291. [doi:10.1093/bioinformatics/btm091](https://doi.org/10.1093/bioinformatics/btm091)。

[^primer-blast]: Ye J, Coulouris G, Zaretskaya I, et al. Primer-BLAST: a tool to design target-specific primers for polymerase chain reaction. *BMC Bioinformatics*. 2012;13:134. [doi:10.1186/1471-2105-13-134](https://doi.org/10.1186/1471-2105-13-134)；NCBI [设计并检查 PCR 引物特异性指南](https://www.ncbi.nlm.nih.gov/guide/howto/design-pcr-primers/)。

[^miqe]: Bustin SA, Benes V, Garson JA, et al. The MIQE guidelines: minimum information for publication of quantitative real-time PCR experiments. *Clinical Chemistry*. 2009;55(4):611–622. [doi:10.1373/clinchem.2008.112797](https://doi.org/10.1373/clinchem.2008.112797)。

[^viennarna]: Lorenz R, Bernhart SH, Höner zu Siederdissen C, et al. ViennaRNA Package 2.0. *Algorithms for Molecular Biology*. 2011;6:26. [doi:10.1186/1748-7188-6-26](https://doi.org/10.1186/1748-7188-6-26)。

[^mccaskill]: McCaskill JS. The equilibrium partition function and base pair binding probabilities for RNA secondary structure. *Biopolymers*. 1990;29(6–7):1105–1119. [doi:10.1002/bip.360290621](https://doi.org/10.1002/bip.360290621)。

[^rfam]: Kalvari I, Nawrocki EP, Ontiveros-Palacios N, et al. Rfam 13.0: shifting to a genome-centric resource for non-coding RNA families. *Nucleic Acids Research*. 2018;46(D1):D335–D342. [doi:10.1093/nar/gkx1038](https://doi.org/10.1093/nar/gkx1038)。

[^signalp6]: Teufel F, Almagro Armenteros JJ, Johansen AR, et al. SignalP 6.0 predicts all five types of signal peptides using protein language models. *Nature Biotechnology*. 2022;40:1023–1025. [doi:10.1038/s41587-021-01156-3](https://doi.org/10.1038/s41587-021-01156-3)。

[^phobius]: Käll L, Krogh A, Sonnhammer ELL. Advantages of combined transmembrane topology and signal peptide prediction—the Phobius web server. *Nucleic Acids Research*. 2007;35(Web Server issue):W429–W432. [doi:10.1093/nar/gkm256](https://doi.org/10.1093/nar/gkm256)。

[^tmhmm]: Krogh A, Larsson B, von Heijne G, Sonnhammer ELL. Predicting transmembrane protein topology with a hidden Markov model: application to complete genomes. *Journal of Molecular Biology*. 2001;305(3):567–580. [doi:10.1006/jmbi.2000.4315](https://doi.org/10.1006/jmbi.2000.4315)。

[^uniprot-transmembrane]: UniProt. [Transmembrane annotation](https://www.uniprot.org/help/transmem)。

[^coils]: Lupas A, Van Dyke M, Stock J. Predicting coiled coils from protein sequences. *Science*. 1991;252(5009):1162–1164. [doi:10.1126/science.252.5009.1162](https://doi.org/10.1126/science.252.5009.1162)。

[^interpro]: Blum M, Chang HY, Chuguransky S, et al. The InterPro protein families and domains database: 20 years on. *Nucleic Acids Research*. 2021;49(D1):D344–D354. [doi:10.1093/nar/gkaa977](https://doi.org/10.1093/nar/gkaa977)。

[^mobidb]: Piovesan D, Del Conte A, Clementel D, et al. MobiDB in 2025: integrating ensemble properties and function annotations for intrinsically disordered proteins. *Nucleic Acids Research*. 2025;53(D1):D495–D503. [doi:10.1093/nar/gkae969](https://doi.org/10.1093/nar/gkae969)。

[^targetp2]: Almagro Armenteros JJ, Salvatore M, Emanuelsson O, et al. Detecting sequence signals in targeting peptides using deep learning. *Life Science Alliance*. 2019;2(5):e201900429. [doi:10.26508/lsa.201900429](https://doi.org/10.26508/lsa.201900429)。

[^deeploc2]: Thumuluri V, Almagro Armenteros JJ, Johansen AR, Nielsen H, Winther O. DeepLoc 2.0: multi-label subcellular localization prediction using protein language models. *Nucleic Acids Research*. 2022;50(W1):W228–W234. [doi:10.1093/nar/gkac278](https://doi.org/10.1093/nar/gkac278)。

[^uniprot-annotation]: UniProt Consortium. [UniProtKB sequence annotation and evidence](https://www.uniprot.org/help/sequence_annotation)；UniProt. [Transmembrane annotation evidence example](https://www.uniprot.org/help/transmem)。
