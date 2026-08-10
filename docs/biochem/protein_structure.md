# 蛋白质结构

多肽链的三维构象由肽键平面性、主链二面角、侧链性质和分子环境共同塑造。沿序列反复出现的这些局部条件，最终在水、膜、离子、配体和其他大分子共同构成的环境中形成三维构象。

传统的一级、二级、三级和四级结构为描述蛋白质提供了共同语言，这些层次表示观察尺度，而非折叠必然依次完成的四个台阶。蛋白质会呼吸、摆动、交换构象，有些区段只在结合伙伴出现时才有序，也有些蛋白质本来就以动态构象集合工作。因而“结构”既包括氨基酸序列和稳定折叠，也包括共价修饰、亚基装配、柔性与环境依赖的构象平衡。

| 层次 | 主要描述对象 | 适用边界 |
| --- | --- | --- |
| 一级结构 | 多肽由 N 端到 C 端的残基序列；广义上还包括二硫键等共价连接 | 不等同于“只知道有哪些氨基酸”，也不由肽链长度自动决定是否称为蛋白质 |
| 二级结构 | 连续或相邻主链区段的局部规则构象，如 α-螺旋、β-折叠片和转角 | 氢键并非只存在于二级结构，环区也不等于完全随机 |
| 三级结构 | 一条多肽链全部原子在特定环境中的整体三维组织 | 不是一个毫无运动的唯一坐标模型，也不只由侧链之间的“键”维持 |
| 四级结构 | 两条或更多多肽链形成生物学装配体时的组成、界面与相对排布 | 并非每种蛋白质都有四级结构；晶体中的接触也未必是生理性装配 |

这四层术语描述同一分子的不同尺度，多类相互作用可以同时跨越这些尺度。[^protein-structure-levels]

## 肽键与一级结构 { #peptide-bond-primary-structure }

### 肽键、方向性与主链自由度 { #peptide-bond-directionality }

一个氨基酸的 α-羧基与下一个氨基酸的 α-氨基形成酰胺键，所得主链连接称为肽键。书写序列时通常从具有游离 α-氨基的 N 端写向具有游离 α-羧基的 C 端；内部残基的共同骨架则不断重复为 $\mathrm{-N-C_{\alpha}-C(=O)-}$。细胞中的肽键由核糖体以氨酰-tRNA 的高能酯键驱动形成，不能把这一过程简单理解为游离氨基酸在水中自发脱水缩合。肽和氨基酸残基的命名、端基与序列方向遵循 IUPAC–IUBMB 规则。[^peptide-nomenclature]

酰胺氮的孤对电子与羰基发生共振离域，使 $\mathrm{C-N}$ 键具有部分双键性质。由羰基碳、羰基氧、酰胺氮以及相邻两个 α-碳构成的肽单元因而近似共面，绕肽键的 $\omega$ 角通常接近 $180^\circ$ 的反式。顺式肽键也存在，尤其在肽键后一个残基为 Pro 时相对更常见，但“只有 Pro 才能形成顺式肽键”并不成立。

主链的大部分构象变化来自绕 $\mathrm{N-C_{\alpha}}$ 与 $\mathrm{C_{\alpha}-C(=O)}$ 键的旋转，分别用 $\phi$ 和 $\psi$ 表示。肽键平面限制相邻原子的相对取向，而一系列 $\phi$、$\psi$ 自由度仍使多肽能够形成受立体位阻、氢键、静电和溶剂条件共同筛选的构象集合。

### 序列、共价拓扑与“蛋白质”的边界 { #sequence-covalent-topology }

氨基酸组成只给出各种残基的数量，一级结构还要求知道它们的排列顺序。两个组成相同的多肽可以因序列不同而具有完全不同的折叠和功能。同一条基因产物还可能经历信号肽或前肽切除、端基封闭、磷酸化、糖基化和蛋白水解加工；链内或链间二硫键又会改变共价拓扑。实际描述一个成熟蛋白质时，应说明所指的是翻译产物、加工后的蛋白质形式，还是某一具体蛋白质分子种。

“寡肽”“多肽”和“蛋白质”之间没有由 10、50 个残基划出的普适化学边界。短肽可以具有稳定结构和专一功能，较长多肽也可能需要加工、辅基或其他亚基才成为成熟复合物。谷胱甘肽是由 γ-谷氨酰、Cys 和 Gly 构成的三肽，其第一条酰胺键不是普通的 α-羧基肽键；非核糖体肽还可含 D-氨基酸、非蛋白氨基酸和其他连接方式。链长只是一项描述量，来源、共价结构与生物学状态同样重要。

传统上还会按溶解性把蛋白质分为清蛋白、球蛋白、醇溶谷蛋白等，或按是否含非氨基酸成分分为单纯蛋白质和缀合蛋白质。这些名称记录了样品分级史或组成特征，却不是统一的结构分类。血红素、金属离子、糖链和脂质可以共价或非共价结合；膳食蛋白质的营养质量则取决于不可缺少氨基酸组成、消化率和具体生理需要，不能由“球状／纤维状”或某一种食物名称直接推出。

## 主链构象与 Ramachandran 图 { #backbone-conformation }

### Ramachandran 允许区的解释边界 { #ramachandran-plot }

Ramachandran 图把每个残基的 $\phi$ 置于横轴、$\psi$ 置于纵轴。若只考虑非键合原子的排斥，许多角度组合会发生严重碰撞，剩余的低冲突区域恰好容纳常见的右手 α-螺旋、β-构象和左手螺旋构象。1963 年 Ramachandran、Ramakrishnan 与 Sasisekharan 用这一立体化学分析建立了后来广泛采用的构象图。[^ramachandran-original]

允许区表示几何上较可行；具体稳定性和模型质量还须结合残基类型、相邻原子、修饰状态及实验数据判断。高质量结构模型通常只有少数真正的离群点，每个离群点都应结合电子密度、局部化学或其他实验数据检查。[^pdb-validation]

| 残基情形 | 构象空间的主要特征 | 解释边界 |
| --- | --- | --- |
| 多数 L-氨基酸残基 | 侧链与主链原子排斥，$\phi/\psi$ 集中在若干允许区 | 允许区随数据集与判据改变，不是几条绝对边界 |
| Gly | 侧链只有 H，空间限制较少，可进入更多正、负 $\phi$ 区域 | 自由度较大不表示在所有位置都稳定 |
| Pro | 吡咯烷环限制 $\phi$，内部脯氨酰残基又缺少主链 N—H | 可出现在转角、螺旋边界及某些 β-结构中，并非被任何二级结构绝对排除 |
| 肽键前的 Pro | 顺、反两态自由能差相对较小，顺式比例高于多数其他肽键 | 异构化可能成为折叠慢步骤，但两态仍取决于局部序列和环境 |

### 构象图与结构层次的联系 { #conformation-to-secondary-structure }

二级结构由许多相邻残基采用相容的二面角并形成协同相互作用而产生。α-螺旋在 Ramachandran 图上形成一簇，β-折叠股形成另一簇；转角和环区则可跨越多个区域。序列中的局部倾向提供统计预测，具体构象仍由局部序列和环境共同决定。

## 二级结构与局部连接 { #secondary-structure }

### α-螺旋与螺旋偶极 { #alpha-helix }

蛋白质中最常见的 α-螺旋通常是由 L-氨基酸构成的右手螺旋。主链第 $i$ 个残基的羰基氧与第 $i+4$ 个残基的酰胺 N—H 形成氢键，每圈约 3.6 个残基，沿轴每个残基上升约 0.15 nm，螺距约 0.54 nm；侧链从螺旋轴向外伸展。Pauling、Corey 与 Branson 在 1951 年提出这种符合肽键平面性与氢键几何的模型。[^alpha-helix-original]

连续肽键偶极沿螺旋轴大致同向排列，使 N 端带有部分正性的螺旋宏观偶极、C 端带有部分负性。末端带电残基、溶剂和“帽”位置提供的氢键能够调节稳定性，但不能把 N 端必须为酸性、C 端必须为碱性写成序列规则。若疏水侧链与亲水侧链分别集中在螺旋两面，就形成两亲性螺旋；若约 18–25 个连续残基主要提供疏水表面，则可能跨越脂双层，具体长度仍随膜厚、倾斜角与局部残基改变。

Pro 会中断常规的主链氢键并限制二面角，Gly 则增加未折叠态自由度，因此两者在长 α-螺旋内部相对少见；它们在螺旋起始、终止、弯折或功能性铰链处却可能十分重要。残基倾向描述统计概率，具体位置仍由局部序列与整体结构环境决定。

### β-折叠片、转角与环区 { #beta-sheet-turn-loop }

β-折叠股是伸展的主链区段，多条折叠股通过主链羰基与酰胺之间的氢键并排组成 β-折叠片。相邻股的 N→C 方向相同称平行，方向相反称反平行，也可在同一折叠片中混合；两类氢键几何不同，埋藏或暴露状态则由折叠片所在的整体结构决定。侧链沿折叠股交替伸向折叠片两侧，交替出现疏水和亲水残基时可以形成两亲性表面。[^secondary-structure-textbook]

多肽链改变走向时常形成 β-转角。经典四残基 β-转角可由第 1 个残基的羰基与第 4 个残基的酰胺形成氢键，但并非所有转角都满足这一氢键；Gly 的小侧链和 Pro 的受限构象使它们在某些转角类型中富集。两条反平行 β-股由短环连接时可形成 β-发夹，折叠股中多出一个残基并打乱局部氢键配对则可形成 β-凸起。

规则 α-螺旋和 β-折叠片之外的片段通常称为环区或 coil。一个解析清楚的环可以具有稳定、专一的构象，参与配体入口、催化位点和结构域运动；“无规卷曲”表示缺少规则重复的二级结构，仍可保留原子层次的组织。内在无序区在游离状态下则可能以快速交换的构象集合存在，并在结合或修饰后改变其分布。生理性无序需要实验依据，低复杂度序列、未解析坐标或低预测置信度只提供候选线索。[^disprot-idr]

### 其他螺旋与超螺旋 { #other-helices-coiled-coils }

$3_{10}$ 螺旋以 $i\rightarrow i+3$ 氢键形成 10 元环，π-螺旋以 $i\rightarrow i+5$ 氢键形成 16 元环；两者在天然蛋白质中通常比 α-螺旋短，常见于 α-螺旋的局部偏离。多聚脯氨酸 II 型螺旋则是没有规则主链内氢键的左手伸展构象，胶原单链的局部几何与它相近。

两条或多条 α-螺旋还可通过周期性排列的疏水表面互相缠绕成 coiled coil。此处每条组成螺旋仍为右手 α-螺旋，而常见的双链 coiled coil 整体可形成左手超螺旋；“螺旋的手性”和“多条螺旋缠绕的手性”描述的是不同层次。

## 三级结构的组织原则 { #tertiary-structure }

### 结构稳定的相互作用网络 { #structure-stabilizing-interactions }

蛋白质折叠的稳定性由整个体系的自由能决定，疏水效应、氢键、静电、堆积和构象熵共同贡献。疏水基团从水中聚集可释放部分有序水分子，是许多可溶性球状蛋白形成核心的重要驱动力；主链和侧链之间的氢键、离子相互作用与紧密堆积则提供几何选择性。每一种贡献都受溶剂暴露、介电环境、温度和盐浓度影响。[^protein-shape-textbook]

| 相互作用 | 在结构中的典型作用 | 作用条件 |
| --- | --- | --- |
| 疏水效应 | 推动非极性表面在水相中聚集，参与球状核心、膜内表面与亚基界面形成 | 是溶剂参与的热力学效应，不是一种方向固定的“疏水键” |
| 氢键 | 满足主链和极性侧链的供体／受体，稳定螺旋、折叠片、转角、配体位点和界面 | 埋藏氢键要与失去蛋白质—水氢键的代价比较 |
| 静电相互作用 | 形成盐桥、局部电场和金属配位环境 | 强度与质子化状态、距离、几何、离子屏蔽和介电常数有关，盐桥不必然“最强” |
| 范德华接触 | 在大量互补原子紧密堆积时累积贡献 | 单个接触很弱，过近则转为强烈排斥 |
| 二硫键与其他共价约束 | 降低展开态的构象数，常稳定分泌蛋白和细胞外蛋白 | 形成与重排受氧化还原环境和酶系统控制；不是所有正确折叠都需要二硫键 |
| 金属、辅基和配体 | 补足配位、填充核心或耦联构象状态 | 有些是结构必需成分，有些仅在特定功能状态结合，不能从坐标中一概而论 |

因此“肽键维持一级结构、氢键维持二级结构、疏水作用维持三级结构”的口诀只能作为入门索引。主链氢键也会稳定三级和四级界面，疏水效应同样参与膜内二级结构与亚基装配，二硫键既可位于一条链内也可连接不同链。

### 结构元件、模体、结构域与折叠 { #motif-domain-fold }

长多肽通常组织为结构元件、模体和相对独立、可协同运动的结构域；结构域之间的连接使结合、催化和别构调节可以在同一蛋白质中模块化组合。

| 术语 | 通常指什么 | 例子或边界 |
| --- | --- | --- |
| 二级结构元件 | 一段 α-螺旋、β-折叠股或转角 | 是局部主链构象，不自动具有独立功能 |
| 结构模体 | 少量二级结构元件以反复出现的几何方式组合，或具有保守功能的短序列／空间模式 | β-发夹、螺旋—转角—螺旋、锌指；模体不一定能独立折叠 |
| 结构域 | 一条链中可形成相对紧凑结构、常能近似独立折叠或演化的区域 | 边界可能由不连续序列片段共同组成；一个功能位点可跨越多个结构域 |
| 折叠或拓扑 | 结构域中二级结构元件的总体排列与连接方式 | 相似折叠不必然表示功能相同，也不单凭某个序列相似度阈值判定同源 |
| 家族／超家族 | 依据序列、结构、功能证据推断的不同层级进化关系 | 数据库定义与阈值不同；“30% 相同”不是普适家族界线 |

CATH 把结构域按 Class、Architecture、Topology 和 Homologous superfamily 分层，SCOPe 则使用 class、fold、superfamily、family 等层级；两者都把“结构相似”和“共同祖先的证据”分开处理。InterPro 还区分同源超家族、家族、结构域、重复和位点等条目类型。数据库体系不同，正说明模体、结构域、折叠、家族不能彼此视为同义词。[^domain-classification]

### 球状、纤维状、膜蛋白与无序区 { #protein-shape-environment }

球状、纤维状和膜蛋白描述总体形态及所处物理环境，类别之间可以因装配状态而交叉。可溶性球状蛋白常把疏水表面埋入内部；跨膜蛋白则把疏水侧链朝向脂双层，并以孔道或内部极性网络容纳水、离子和底物。膜蛋白的实验处理需要去污剂、纳米盘或脂质等模拟其环境。肌动蛋白和微管蛋白的单体是球状蛋白，却分别能聚合成长丝和微管，说明宏观纤维形态还取决于单体的高阶装配。

| 代表蛋白 | 基本结构组织 | 结构与材料性质的联系 |
| --- | --- | --- |
| α-角蛋白 | 长 α-螺旋形成 coiled coil，再分级装配成纤维；Cys 可形成二硫交联 | 交联密度与纤维的强度、硬度有关，烫发利用的是二硫键还原与再氧化，而不是可逆地把全部 α-螺旋变成 β-折叠 |
| 丝心蛋白 | 富含 Gly、Ala 等小侧链的反平行 β-折叠片紧密堆叠 | 股间主链氢键与片层间紧密接触共同赋予强度 |
| 胶原 | 三条具有 Gly–X–Y 重复的左手伸展链缠成右手三股螺旋 | 每三个残基出现的 Gly 位于拥挤的螺旋中心；Pro、4-hydroxyproline 及链间氢键稳定结构，分泌后共价交联增强抗张性 |
| 弹性蛋白 | 疏水、富 Gly／Pro 的柔性区由 Lys 衍生交联点连成网络 | 拉伸减少构象熵，卸载后网络回缩；它不依赖胶原式连续 Gly–X–Y 三股螺旋 |

胶原单链采用左手伸展螺旋，三条链再缠绕成右手超螺旋；二者都与 α-螺旋不同。原素材对胶原结构的组织经 osm.bio 细胞外基质条目启发后重新核对，并以 NCBI Bookshelf 的 Gly–X–Y、羟化、分泌加工和纤维装配说明交叉校正。[^collagen-structure]

与这些紧密折叠或规则纤维并存的，是完全或部分内在无序的蛋白质。无序区常含较多带电、极性残基和低复杂度序列，可通过短线性模体、翻译后修饰和结合诱导折叠参与多伙伴调控。它们没有单一稳定构象并非“变性”或“折叠失败”，而是另一种受序列编码的结构状态。

## 四级结构与生物学装配 { #quaternary-assembly }

四级结构描述多个多肽亚基形成装配体时的化学计量、空间排布和界面。相同亚基组成同源寡聚体，不同亚基组成异源寡聚体；环、螺旋、壳和有限对称复合物都可由重复界面生成。疏水效应、氢键、静电与范德华接触同样稳定亚基界面，少数胞外复合物还由链间二硫键加强。

寡聚化能够把活性位点分布在亚基界面、增加结合位点之间的协同性，或允许亚基之间传递构象变化；这类性质将在[蛋白质功能](protein_function.md)中结合血红蛋白和分子识别展开。这些效应由特定序列和装配方式产生，并与单链蛋白采用的结构策略并列存在。许多蛋白质以单体工作，另一些则在单体、二聚体和更高聚体之间随浓度、配体、膜环境或修饰状态动态交换。

结构数据库中的“链数”也不能直接当作四级结构。晶体不对称单元是生成晶胞所需的最小坐标集合，可能只含生物学装配的一部分，也可能含多个装配或只有晶体接触；PDB 的 biological assembly 才是作者和计算分析提出的功能性组装模型，仍需溶液、生化或细胞证据检验。[^pdb-biological-assembly]

## 折叠、变性与错误装配 { #folding-denaturation }

### 序列信息与能量景观 { #sequence-energy-landscape }

Anfinsen 对核糖核酸酶 A 的变性—复性研究表明，在适当条件下，去除变性剂和还原剂后，多肽能够恢复正确二硫键与活性；由此提出天然构象由氨基酸序列及所处环境的热力学信息决定。这个结论不是说所有蛋白质在细胞中都能独自、瞬时折叠，也不保证把任意蛋白从任何聚集态移回缓冲液都能复性。膜、辅因子、伴侣蛋白、翻译速率和区室氧化还原状态都是边界条件。[^anfinsen-folding]

若多肽完全随机尝试所有二面角组合，达到天然态所需时间将远长于实际折叠时间，这就是 Levinthal 佯谬所强调的搜索问题。现代能量景观把折叠理解为从许多未折叠微观状态沿多个并行路径向较低自由能盆地汇聚：局部相互作用、疏水塌缩、成核和结构域形成可以在不同蛋白质中以不同顺序耦联，并不存在适用于全部蛋白质的“先二级、后三级”或相反的单一路线。[^folding-landscape]

新生肽可在仍连接核糖体时开始折叠。分子伴侣通过遮蔽暴露的疏水表面、隔离折叠空间或利用 ATP 驱动结合循环来降低聚集风险，主要改变折叠的动力学可达性。蛋白质二硫键异构酶催化氧化、还原与二硫键重排，肽基脯氨酰顺反异构酶加快可能较慢的 X–Pro 肽键异构化；天然构象的热力学信息主要来自序列与环境，这些辅助系统帮助多肽更高效地到达相应状态。

### 变性与复性 { #denaturation-refolding }

升温、极端 pH、尿素、盐酸胍、有机溶剂或去污剂可改变蛋白质—水和蛋白质内部相互作用，使天然构象群转向展开态或其他非天然态。通常的变性不切断主链肽键，因此一级序列保留；若同时加入还原剂、强氧化剂或发生水解，共价结构也可能改变。黏度、溶解度、沉降、圆二色性、荧光和活性的变化方向取决于具体蛋白质、聚集状态及处理条件，须分别测量和解释。

去除变性条件后，有些小型单结构域蛋白可以恢复活性，有些蛋白则形成错误二硫键、动力学陷阱或聚集体。复性是否可逆取决于浓度、温度、折叠速率、亚基重组和辅因子等；“变性”也不必等于完全伸展，熔球态等中间体可以保留大量二级结构而缺少紧密的三级堆积。

### 错误折叠、聚集与淀粉样结构 { #misfolding-aggregation }

未折叠或部分折叠链暴露的疏水表面可发生非特异聚集，也可沿较有序的路径形成富含 cross-β 架构的淀粉样纤维。不同序列都可能进入这种共同结构主题，说明“聚集”不是一个单一化学反应。细胞通过伴侣蛋白、蛋白酶体、自噬和区室化等蛋白质稳态系统限制这些状态；某些淀粉样结构具有正常生物学作用，另一些与神经退行性疾病等病理过程相关，不能只见到 β-结构就判定有毒。

## 结构证据与预测模型 { #structure-evidence-prediction }

### 实验结构模型的解释边界 { #experimental-structure-methods }

X 射线晶体学、溶液 NMR 和单颗粒冷冻电镜从不同观测量约束结构模型。样品状态、空间分辨率、构象异质性和建模选择共同决定坐标模型的不确定性。详细样品制备、分离、光谱和测序流程见[蛋白质研究方法](protein_methods.md)。

| 方法 | 直接获得的主要信息 | 结构解释的典型边界 |
| --- | --- | --- |
| X 射线晶体学 | 晶体衍射强度，经相位与模型计算得到电子密度 | 需要晶体；柔性区和氢原子常难以解析，晶体接触可能改变构象或装配 |
| 溶液 NMR | 化学位移、耦合、NOE、残余偶极与弛豫等约束 | 常以满足约束的一组构象表示；分子大小、谱峰重叠和运动时间尺度影响可解析性 |
| 单颗粒冷冻电镜 | 玻璃态冰中大量颗粒的二维投影，经分类与重构得到三维库仑势图 | 偏好、异质性、局部分辨率与粒子大小影响模型；局部清晰不等于整体同样可靠 |

wwPDB 保存实验结构模型及相关实验数据，并为 X 射线、NMR 和冷冻电镜结构提供按方法设计的验证报告。合理读图至少要同时看模型几何、模型与实验数据的吻合、局部分辨率或约束，以及样品构建体与生物学状态。[^pdb-archive-validation]

### 坐标文件的缺口与不确定性 { #coordinate-model-uncertainty }

坐标文件缺少某段残基，常表示该区段在实验中太灵活、占据率太低或未包含在样品构建体中，并不等于天然蛋白质没有这段序列。一个残基可能具有交替构象，NMR 条目可能给出多个模型，电子密度也可能只支持主链而不足以确定侧链。RCSB PDB-101 对缺失坐标和生物学装配的说明显示，观察不到、没有建模和生物体内不存在是三个不同判断。[^pdb-missing-coordinates]

Ramachandran 离群、原子碰撞和键长偏差用于检查几何，$R_{free}$、图—模型相关性或 NMR 约束违反用于检查模型与数据；任一指标都不能脱离实验方法和局部证据单独排名结构“真假”。比较不同条目时还要核对序列变体、标签、配体、pH、温度和解析方法，而不能只比较一个全局分辨率数字。

### AlphaFold 模型的置信度 { #alphafold-confidence }

AlphaFold 数据库为预测坐标同时提供置信度。pLDDT 是逐残基的局部结构置信度，适合识别某一区域的主链是否可能可靠；PAE 估计以一个残基为参照对齐时另一个残基的预期位置误差，因而更适合判断结构域之间的相对取向。一个多结构域蛋白可以在每个结构域内部都有高 pLDDT，却因结构域通过柔性连接而具有高跨域 PAE。[^alphafold-confidence-guide]

高置信预测是提出突变位点、识别折叠或寻找结构相似性的有力依据，却不是配体结合、亚基化学计量、膜中朝向、翻译后修饰、构象动力学或细胞功能的实验确认。低 pLDDT 区域可能内在无序，也可能只在复合物中折叠或因序列信息不足而预测失败。结构预测回答的是可能的坐标与置信度，并没有据此给出真实折叠路径，更没有消除对生物化学和细胞实验的需求。

### 结构模型与机制解释 { #structure-to-mechanism }

结构层次把“有哪些原子相邻”组织成可比较的语言，但机制还需要时间与能量：配体先结合哪一态、构象交换多快、亚基界面如何传递信号、突变改变的是稳定性还是动力学。下一页的[蛋白质功能](protein_function.md)将以结合、催化、协同和分子机器为主线，把静态结构模型放回这些动态过程；实验依据与分析工具则在[蛋白质研究方法](protein_methods.md)中集中展开。

## 参考资料与延伸阅读

- Nelson, D. L., Cox, M. M. & Hoskins, A. A. *Lehninger Principles of Biochemistry*, 8th ed., Chapters 4–5. Macmillan Learning, 2021.
- Alberts, B. et al. [The Shape and Structure of Proteins](https://www.ncbi.nlm.nih.gov/books/NBK26830/). *Molecular Biology of the Cell*, 4th ed.
- IUPAC–IUBMB. [Nomenclature and Symbolism for Amino Acids and Peptides](https://iupac.qmul.ac.uk/AminoAcid/).
- Ramachandran, G. N., Ramakrishnan, C. & Sasisekharan, V. [Stereochemistry of polypeptide chain configurations](https://pubmed.ncbi.nlm.nih.gov/13990617/). *Journal of Molecular Biology* 7, 95–99 (1963).
- Anfinsen, C. B. [Studies on the Principles that Govern the Folding of Protein Chains](https://www.nobelprize.org/prizes/chemistry/1972/anfinsen/lecture/). Nobel Lecture, 1972.
- wwPDB. [Structure Validation and the Role of the PDB as an Archival Data Resource](https://www.wwpdb.org/documentation/UAB-2).
- CATH-Gene3D. [Protein structure classification database](https://www.cathdb.info/)；InterPro. [Entry types](https://www.ebi.ac.uk/training/online/courses/interpro-functional-and-structural-analysis/what-is-an-interpro-entry/interpro-entry-types/).
- AlphaFold Protein Structure Database. [Frequently asked questions](https://alphafold.ebi.ac.uk/faq).
- Nugnes, M. V. et al. [DisProt in 2026: enhancing intrinsically disordered proteins accessibility, deposition, and annotation](https://pubmed.ncbi.nlm.nih.gov/41249866/). *Nucleic Acids Research* (2025).
- osm.bio. [第十九章：细胞连接和细胞外基质](https://osm.bio/%E7%AC%AC%E5%8D%81%E4%B9%9D%E7%AB%A0_%E7%BB%86%E8%83%9E%E8%BF%9E%E6%8E%A5%E5%92%8C%E7%BB%86%E8%83%9E%E5%A4%96%E5%9F%BA%E8%B4%A8).

[^protein-structure-levels]: Alberts et al., [The Shape and Structure of Proteins](https://www.ncbi.nlm.nih.gov/books/NBK26830/)。传统四层结构术语用于描述尺度，不要求折叠过程按同一顺序发生。
[^peptide-nomenclature]: IUPAC–IUBMB, [Nomenclature and Symbolism for Amino Acids and Peptides](https://iupac.qmul.ac.uk/AminoAcid/)，尤其 3AA-11 至 3AA-13 的肽命名与序列表示规则。
[^ramachandran-original]: Ramachandran, G. N., Ramakrishnan, C. & Sasisekharan, V. [Stereochemistry of polypeptide chain configurations](https://pubmed.ncbi.nlm.nih.gov/13990617/). *Journal of Molecular Biology* 7, 95–99 (1963), DOI: 10.1016/S0022-2836(63)80023-6。
[^pdb-validation]: wwPDB, [Structure Validation and the Role of the PDB as an Archival Data Resource](https://www.wwpdb.org/documentation/UAB-2)。PDB 验证同时检查模型几何、实验数据与模型—数据吻合，而不是只按 Ramachandran 图判定。
[^alpha-helix-original]: Pauling, L., Corey, R. B. & Branson, H. R. [The structure of proteins: two hydrogen-bonded helical configurations of the polypeptide chain](https://pubmed.ncbi.nlm.nih.gov/14816373/). *PNAS* 37, 205–211 (1951), DOI: 10.1073/pnas.37.4.205。
[^secondary-structure-textbook]: Alberts et al., [The α Helix and the β Sheet Are Common Folding Patterns](https://www.ncbi.nlm.nih.gov/books/NBK26830/#A317)。
[^disprot-idr]: Nugnes, M. V. et al. [DisProt in 2026: enhancing intrinsically disordered proteins accessibility, deposition, and annotation](https://pubmed.ncbi.nlm.nih.gov/41249866/)。该库的无序注释由人工整理，并采用 MIADE 指南记录实验依据与条件。
[^protein-shape-textbook]: Alberts et al., [The Shape and Structure of Proteins](https://www.ncbi.nlm.nih.gov/books/NBK26830/)，用于交叉核对疏水聚集、非共价相互作用、结构域和蛋白质装配的总体叙述。
[^domain-classification]: CATH, [What is CATH?](https://cathdb.info/wiki)；SCOPe, [classification help](https://scop.berkeley.edu/help/)；InterPro, [entry types](https://www.ebi.ac.uk/training/online/courses/interpro-functional-and-structural-analysis/what-is-an-interpro-entry/interpro-entry-types/)。三者采用不同但明示的层级与证据类型。
[^collagen-structure]: 本节胶原内容参考并实质性改编自 osm.bio [《第十九章 细胞连接和细胞外基质》](https://osm.bio/%E7%AC%AC%E5%8D%81%E4%B9%9D%E7%AB%A0_%E7%BB%86%E8%83%9E%E8%BF%9E%E6%8E%A5%E5%92%8C%E7%BB%86%E8%83%9E%E5%A4%96%E5%9F%BA%E8%B4%A8)，并以 NCBI Bookshelf [Cell Walls and the Extracellular Matrix](https://www.ncbi.nlm.nih.gov/books/NBK9874/) 对 Gly–X–Y 重复、羟化和纤维装配进行交叉核验。
[^pdb-biological-assembly]: RCSB PDB-101, [Biological Assemblies](https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/biological-assemblies)。晶体不对称单元与功能性生物学装配并非同义词。
[^anfinsen-folding]: Anfinsen, C. B. [Studies on the Principles that Govern the Folding of Protein Chains](https://www.nobelprize.org/prizes/chemistry/1972/anfinsen/lecture/). Nobel Lecture, 1972；其中以核糖核酸酶的还原、变性和复性建立热力学假说，并明确讨论实验条件。
[^folding-landscape]: Wolynes, P. G. [Evolution, Energy Landscapes and the Paradoxes of Protein Folding](https://pmc.ncbi.nlm.nih.gov/articles/PMC4472606/). *Biochimie* 119, 218–230 (2015)；Dill, K. A. & Chan, H. S. [From Levinthal to pathways to funnels](https://pubmed.ncbi.nlm.nih.gov/8989315/). *Nature Structural Biology* 4, 10–19 (1997)。
[^pdb-archive-validation]: wwPDB, [Structure Validation and the Role of the PDB as an Archival Data Resource](https://www.wwpdb.org/documentation/UAB-2)。PDB 保存结构模型与相关实验数据，并按实验方法提供验证框架。
[^pdb-missing-coordinates]: RCSB PDB-101, [Missing Coordinates and Biological Assemblies](https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/missing-coordinates-and-biological-assemblies)。
[^alphafold-confidence-guide]: AlphaFold Protein Structure Database, [FAQ: how confident should I be in a prediction?](https://alphafold.ebi.ac.uk/faq)。该页分别说明 pLDDT 的逐残基局部置信度和 PAE 对结构域相对位置的解释。
