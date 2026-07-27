# 核酸与核苷酸

核酸并不是把许多“字母”串在一起的惰性载体。每个核苷酸都同时提供可辨认的碱基、可定向连接的糖和带电的磷酸；链内共价键规定了序列的连续性，碱基配对与堆积塑造局部构象，离子、溶剂和蛋白质又决定长链怎样折叠、压缩和被读取。DNA 与 RNA 的分工因此不是“一个储存、一个传递”所能穷尽：DNA 通常承担较长期的信息保存，RNA 既可作为某些病毒的基因组，也可充当模板、接头、结构骨架、调控分子和催化组分。

游离核苷酸同样不只是核酸的原料。ATP、GTP 等把放能过程与合成、运动和运输相耦联，核苷酸糖和核苷酸脂质活化待转移的化学基团，cAMP、cGMP 等参与信号传递，NAD$^+$、FAD 和辅酶 A 则在更大的辅酶结构中保留核苷酸样模块。理解核酸要从这些共同的化学构件出发，再逐层进入序列、构象和高阶复合物。

## 核苷酸的化学层级 { #nucleotide-chemistry }

核苷由含氮碱基与戊糖组成；核苷再被一个或多个磷酸基团酯化，才成为核苷酸。嘌呤碱基的 N9 或嘧啶碱基的 N1 通常通过 β-*N*-糖苷键连接戊糖 C1′。核糖核苷含 2′-羟基，脱氧核糖核苷在该位置为氢；这个看似很小的差别改变糖环构象、双链几何、酶的识别以及骨架对碱的稳定性。假尿苷等修饰核苷采用 C—C 糖苷键，说明“碱基经氮连接糖”是规范核苷的主型，而不是没有例外的定义边界。IUPAC–IUBMB 的命名建议把碱基、核苷、核苷酸与核酸链区分为不同层级，也规定了残基、末端和序列方向的表示方式。[^nucleic-acid-nomenclature]

| 层级 | 组成与代表 | 辨认要点 |
| --- | --- | --- |
| 碱基 | 芳香杂环；A、G、C、T、U | A、G 属嘌呤；C、T、U 属嘧啶 |
| 核苷 | 碱基 + 戊糖；如腺苷、尿苷 | “脱氧腺苷”说明糖的 2′ 位脱氧；胸苷在无歧义语境中通常指脱氧胸苷 |
| 核苷酸 | 核苷 + 磷酸；如 AMP、ATP、dGTP | 必须留意磷酸数目与连接位置；AMP 通常指腺苷 5′-单磷酸 |
| 核酸残基 | 核苷酸进入聚合物后留下的结构单元；如 dAMP 残基 | 聚合时释放焦磷酸，链内残基不再等同于游离三磷酸底物 |

DNA 与 RNA 并非仅由“胸腺嘧啶或尿嘧啶”区分。典型 DNA 由 2′-脱氧核糖、A/G/C/T 和磷酸组成，典型 RNA 由核糖、A/G/C/U 和磷酸组成；但 RNA 中也可出现胸腺嘧啶衍生残基，DNA 与 RNA 都有大量酶促修饰。5-甲基胞嘧啶是 DNA 中重要的调控性修饰，tRNA、rRNA 等 RNA 则富含假尿苷、甲基化核苷和其他修饰。修饰会改变配对边缘、堆积、构象、稳定性和蛋白识别，不能只被理解成字母表之外的装饰。RNAcentral 把多种专家数据库的非编码 RNA 序列、结构和修饰信息整合在一起，也从侧面显示 RNA 类型远超过 mRNA、tRNA、rRNA 三类。[^rnacentral]

碱基的芳香杂环在近紫外区有显著吸收，并可发生互变异构。生理条件下常见的酮式或氨基式主导典型 Watson–Crick 配对，稀有互变异构体、质子化状态或化学修饰则可能暂时改变供氢体和受氢体的排列，增加错配概率。不过，不能把一次复制错误直接归因于某个未观测到的稀有异构体；实际错误率还受到聚合酶选择、校对与修复共同约束。

### 游离核苷酸连接代谢、转移与信号 { #free-nucleotides }

核苷三磷酸水解常伴随较大的负自由能变化，原因包括产物的共振稳定、静电排斥缓解、水化改变以及细胞内反应物与产物的实际浓度。所谓“高能磷酸键”是热力学便利语，不表示断开一根化学键本身会释放能量；断键需要能量，净释放来自整个水解反应形成更稳定的产物。ATP 或 GTP 的价值在于酶能把这种有利反应与不利反应放在同一机制中耦联。[^nucleotide-functions]

| 化学角色 | 代表分子 | 被转移或被读取的部分 |
| --- | --- | --- |
| 聚合与能量耦联 | ATP、GTP、UTP、CTP 及相应 dNTP | 末端磷酰基、核苷酸残基，或由水解推动的构象变化 |
| 活化中间体 | UDP-葡萄糖、GDP-甘露糖、CDP-二酰甘油 | 糖基或脂质前体；核苷酸部分提供可识别的离去基团与酶结合界面 |
| 细胞信号 | cAMP、cGMP、c-di-GMP、(p)ppGpp | 浓度变化被效应蛋白或核糖开关读取；不同生物类群采用的体系并不相同 |
| 氧化还原与基团载体 | NAD$^+$/NADH、FAD/FADH$_2$、辅酶 A | 电子、氢负离子或酰基由辅酶的反应性部分承担，核苷酸样模块常参与结合与识别 |

这些分子在后续代谢页会按反应网络展开：[生物能学](bioenergetics.md)讨论自由能耦联，[核苷酸生物合成](na_synthesis.md)与[核酸降解和核苷酸分解代谢](na_catabolism.md)则分别处理核苷酸池的建立与回收。

## 核酸链的方向性与序列 { #polymer-directionality }

核酸主链通常由一个残基的 3′-氧与下一个残基的 5′-磷酸形成 3′→5′ 磷酸二酯键。每个磷酸在接近生理 pH 时带负电，使 DNA 和 RNA 成为多阴离子。线性链两端在化学上不等价：5′ 端可带磷酸或羟基，3′ 端通常带羟基或特定加工基团。序列按惯例从 5′ 向 3′ 书写；两条互补序列若直接上下排列，必须明确是否已把其中一条写成反向互补，不能只看字母能否成对。

生物合成时，聚合酶通常让生长链的 3′-OH 进攻进入的核苷三磷酸 α-磷，形成新的磷酸二酯键并释放焦磷酸。焦磷酸的后续水解有助于把净反应拉向聚合方向。这里的“5′→3′ 合成”描述的是新残基加入生长链 3′ 端的方向；它不等于所有核酸化学过程都只能沿同一方向发生，也不适用于后文所述从固相载体 3′ 端开始的常规化学合成。[^nucleotide-polymerization]

一级结构是残基种类、顺序、连接方式和必要修饰的完整描述。仅写一串 A、G、C、T/U，默认了规范 3′→5′ 骨架和未修饰残基；一旦存在支链 RNA、环状核酸、非规范连接或位点修饰，就要把这些信息显式加入结构描述。线性与环状也不是 DNA 和 RNA 的固定分界：质粒、许多细胞器基因组和部分病毒基因组可以是环状 DNA，细胞中也存在由反向剪接或其他机制形成的环状 RNA。

序列怎样被实验读出属于另一层问题。本页只建立序列与化学结构的关系；Sanger 测序、高通量测序、长读长测序和 RNA 测序的信号产生与数据误差将在[测序技术](../bioinfo/sequencing.md)中展开，样品提取、核酸酶处理、电泳和杂交操作则由[核酸实验](../exptech/biochem_molecular/nucleic_acid.md)承接。

## DNA 双螺旋的结构化学 { #dna-double-helix }

典型 B-DNA 中，两条链反向平行，A·T 和 G·C 的 Watson–Crick 配对把嘌呤与嘧啶组合成宽度相近的碱基对，糖—磷酸骨架位于外侧，碱基堆积在内部。氢键使互补边缘具有方向与几何选择性，堆积、色散作用、疏水效应、水化、反离子屏蔽和骨架构象共同决定双链的热力学稳定性。把双链稳定性完全归功于氢键，或反过来宣称“氢键只负责特异性、稳定全由堆积提供”，都忽略了这些相互耦合的贡献。[^dna-duplex-stability]

碱基对相对螺旋轴的偏移使双链表面形成大沟和小沟。每一类碱基对在沟面暴露不同的供氢体、受氢体、甲基和氢原子组合，蛋白质因而能在不把整段双链解开的情况下读取序列；大沟通常提供更丰富的判别图样，小沟的宽度、静电势和水化模式也能被蛋白质和小分子识别。DNA 不是均匀的刚性圆柱：序列会影响局部扭转、滚转、弯曲和沟宽，蛋白结合还可诱导弯折、解旋或碱基翻出。PDB-101 汇集的结构展示了这些局部变化以及 A、B、Z 三类规则螺旋的差异。[^pdb-dna]

| 构象 | 几何与结构特征 | 适用边界 |
| --- | --- | --- |
| A 型 | 右手，约 11 bp/turn；碱基对倾斜并偏离轴心，大沟较深而窄，小沟较宽而浅；糖常取 C3′-*endo* | 脱水 DNA、DNA–RNA 杂交体和多数双链 RNA 可呈 A 型家族；不是一种只存在于体外的单一几何 |
| B 型 | 右手，约 10.5 bp/turn；碱基对较接近垂直于轴，大沟与小沟清晰；糖多取 C2′-*endo* | 水合条件下 DNA 的主要参照构象；具体扭转和沟宽随序列、盐、配体和蛋白改变 |
| Z 型 | 左手，约 12 bp/turn；磷酸骨架呈锯齿状，嘌呤与嘧啶构象交替 | 交替嘌呤—嘧啶序列、负超螺旋、离子和结合蛋白可促进形成；不能把某一高盐晶体条件当作细胞内唯一成因 |

表中的数值来自理想化或代表性结构，用于辨认构象家族，不是每一段天然核酸必须满足的尺规。双链还可形成发夹与十字形、三链体、G-四链体等非经典结构。反向重复序列在负超螺旋或局部解链条件下有机会挤出十字形；富含鸟嘌呤的序列可由 Hoogsteen 型配对形成 G-四分体并在单价阳离子参与下堆叠成四链体。这些结构在染色体、端粒和调控区域中有不少生物学证据，但“具有形成潜力”不自动等于某段序列在所有细胞状态下稳定存在或具有确定功能。

## RNA 的局部折叠与结构多样性 { #rna-structure }

RNA 的 2′-羟基限制糖环和主链可取的构象，并提供额外氢键位点；连续 Watson–Crick 配对的 RNA 双链通常属于 A 型家族。单链 RNA 可以在链内形成茎、发夹环、内环、凸起和多分支连接，并大量采用 G·U 摆动配对、Hoogsteen 边缘及其他非 Watson–Crick 接触。所谓 RNA 二级结构是对主要配对和局部螺旋拓扑的简化表示，而不是已经确定的三维坐标；假结在二维图中造成配对弧交叉，常被单独标注或在部分算法中暂时排除。

远距离相互作用把这些局部元件装配为三级结构。螺旋同轴堆积、发夹—受体结合、A-minor 接触、核糖拉链、碱基三联体和假结都可稳定特定折叠；Mg$^{2+}$ 等离子既屏蔽骨架负电，也可通过内层或外层配位组织局部结构。RNA 能形成 Hoogsteen 型接触和碱基三联体，因此不能从“RNA 多为单链”推出它缺乏复杂配对。结构数据库中的 motif 分类只是帮助比较反复出现的几何模块，真实 RNA 往往把多个 motif 重叠组合。[^rna-tertiary-motifs]

| RNA 类别 | 核心生化角色 | 结构与功能的联系 |
| --- | --- | --- |
| mRNA | 携带可翻译序列并整合稳定性、定位和翻译调控信息 | 5′、3′ 端加工和局部结构影响核糖体进入、降解与调控因子结合 |
| tRNA | 把密码子识别与氨基酸递送相接 | 茎环二级结构折叠为 L 形三级结构；大量修饰参与解码精度和稳定性 |
| rRNA | 构成核糖体结构与催化中心 | 蛋白质围绕折叠 RNA 装配；肽酰转移中心的关键化学环境由 rRNA 形成 |
| snRNA、snoRNA | 参与前体 mRNA 剪接以及 rRNA 的加工与修饰 | 通常以核糖核蛋白复合物工作，RNA 提供配对和部分结构定位 |
| miRNA、siRNA、piRNA | 以序列互补引导沉默或基因组防御 | 长度、末端与装载蛋白共同决定靶向规则，不能只凭“短 RNA”归类 |
| lncRNA 与环状 RNA | 可作为支架、向导、诱饵、模板或调控分子 | 类别内部高度异质；表达相关性和可检测环化不能单独证明具体机制 |

RNA 具有催化能力的经典证据之一是细菌 RNase P：其 RNA 组分在适当条件下能够催化前体 tRNA 加工。这一发现否定了“所有生物催化剂都是蛋白质”，但不表示每个核酶在细胞内都不需要蛋白质；许多 RNP 中的蛋白质负责折叠、定位、底物选择或调节。[^rnase-p]

## 核酸拓扑与高阶组织 { #nucleic-acid-topology }

共价闭合的双链环状 DNA，或两端不能自由旋转的线性 DNA 结构域，具有可定义的链环数 $Lk$。它可分解为双链围绕自身轴的扭转数 $Tw$ 与双螺旋轴在空间中的缠绕数 $Wr$：

$$
Lk = Tw + Wr
$$

$Lk$ 是拓扑约束下的整数不变量，$Tw$ 和 $Wr$ 却可彼此转换。相对于同条件下的松弛参照状态，欠绕通常对应负的 $\Delta Lk$，过绕对应正的 $\Delta Lk$；应力可以表现为局部扭转改变、超螺旋、局部解链或其他结构转变。对一个两端自由旋转的普通线性片段，直接套用固定 $Lk$ 没有意义。拓扑异构酶通过暂时切开并重接一条或两条链改变拓扑状态，使复制、转录、重组和染色体分离产生的扭转应力得以消散。[^dna-topology]

琼脂糖凝胶中的超螺旋质粒常比开环或线性分子迁移更快，但这只是常用条件下的经验图景。分子大小、拓扑分布、凝胶浓度、电场与嵌入剂都会改变迁移次序；条带位置必须由合适的拓扑对照解释，不能仅凭“跑得快”认定某一种超螺旋手性。

真核染色质的基本重复单元是核小体核心颗粒：约 147 bp DNA 围绕由 H2A、H2B、H3、H4 各两份组成的组蛋白八聚体缠绕约 1.7 圈。相邻核心之间的连接 DNA 长度可变，H1 类连接组蛋白在核小体入口、出口和连接区附近促进更高阶组织。组蛋白尾部和球状表面都参与相互作用，修饰及变体会改变结合伙伴和动力学；核小体因而同时压缩 DNA、限制可接近性，又能被重塑和局部拆装。[^nucleosome-structure]

部分古菌具有与真核组蛋白同源的 histone fold 蛋白，但它们并不普遍复制真核的固定八聚体核小体。结构研究显示某些古菌组蛋白二聚体可沿 DNA 连续聚合成长度可变的超螺旋。细菌拟核则主要由超螺旋、核质相关蛋白、转录与复制活动以及大尺度区室共同组织；不同物种采用的蛋白组合差异很大，不能把细菌染色体压缩归结为一种通用“RNA 骨架”。[^archaeal-chromatin]

核酸与蛋白质的复合也不限于染色质。核糖体、剪接体、端粒酶、信号识别颗粒和 RNase P 都是 RNP；复制体、转录复合物和 DNA 修复机器则围绕 DNA 动态装配。某个复合物中究竟由 RNA、DNA 还是蛋白质提供骨架、识别与催化，需要逐一分析，不能用“核酸负责信息、蛋白质负责功能”预先划界。

## 溶液中的电荷、吸收与相行为 { #solution-properties }

磷酸二酯使核酸在广泛的中性 pH 范围内保持强负电，碱基的质子化与去质子化通常只在更极端 pH 下显著改变配对。因此，像蛋白质那样用一个固定、实验上实用的等电点概括完整核酸并不合适；核酸的迁移、溶解和凝聚更常由链长、构象、反离子、离子强度及多价阳离子共同决定。多胺、碱性蛋白或高价离子可以屏蔽电荷并促进压缩，但过量也可能引起非特异聚集或沉淀。

### 紫外吸收报告的是碱基环境 { #uv-absorbance }

嘌呤和嘧啶的共轭杂环使核酸在约 260 nm 处有吸收峰。相邻碱基进入有序堆积后，吸收相对于游离核苷酸下降，称为减色效应；双链解链或结构破坏会使 $A_{260}$ 上升，称为增色效应。这个信号能连续追踪熔解，却不直接告诉是哪一段序列解链，也不能把吸光变化等同于磷酸二酯键断裂。[^dna-denaturation]

实验中常用“光程 1 cm 时，$A_{260}=1$ 约对应 50 μg/mL 双链 DNA、40 μg/mL RNA 或单链 DNA、33 μg/mL 短寡核苷酸”作快速换算。这些是混合序列和特定测量条件下的经验系数；精确定量应使用具体序列的消光系数、实际光程和空白，并排除浑浊、酚、胍盐等吸收或散射干扰。

$A_{260}/A_{280}$ 约 1.8 常被视作较纯 DNA、约 2.0 常被视作较纯 RNA 的经验参考，但比值受 pH、离子强度、仪器光路和样品浓度影响。一个“漂亮”的比值既不能证明核酸完整，也不能排除不在两个波长上显著吸收的污染；浓度很低时，两个小吸光值的比值尤其不稳定。Wilfinger 等的实验直接显示，改变溶液 pH 与离子强度即可显著改变这项纯度判断。[^nucleic-acid-purity]

### 沉淀与黏度依赖链和溶剂 { #precipitation-viscosity }

乙醇或异丙醇降低溶剂介电环境和核酸水化，Na$^+$、NH$_4^+$ 等反离子又部分中和磷酸电荷，于是 DNA 和 RNA 都可从水相沉淀。产率依赖链长、核酸浓度、盐、醇比例、温度和共沉淀剂；短寡核苷酸与极低浓度样品尤其容易损失。沉淀不会选择性保证纯度，盐、去污剂和其他大分子也可能共沉淀。

长而较刚性的双链 DNA 会显著提高溶液黏度，并对剪切敏感；断裂可使黏度下降。RNA 的形状和链长分布更为多样，不能用“RNA 一定比 DNA 黏”或“单链一定更柔软”概括。黏度变化还受到浓度、拓扑、温度和离子条件影响，因而至多是分子状态的一个整体读出。

## 变性、复性与分子杂交 { #denaturation-renaturation }

核酸变性是有序配对和堆积的破坏。加热、极端 pH、低离子强度或变性剂可使双链解开；在常规熔解实验时间尺度内，加热主要改变非共价结构，并不等于把磷酸二酯主链水解。RNA 在碱中则有特殊风险：去质子化的 2′-OH 可分子内进攻邻近磷酸，形成 2′,3′-环磷酸中间体并切断主链。DNA 缺少 2′-OH，较能耐受碱性水解，但酸会促进嘌呤碱基的 *N*-糖苷键水解，产生无嘌呤位点。所谓“DNA 比 RNA 稳定”必须说明比较的是哪一种 pH、温度、时间和损伤反应。[^nucleic-acid-chemical-stability]

### 熔解温度是条件化的转变中点 { #melting-temperature }

对定义明确并近似两态转变的核酸样品，熔解温度 $T_m$ 是指定条件下约一半分子或一半碱基对处于解链状态的温度。它不是某条序列脱离环境的固有常数。序列和最近邻排列、长度、GC 含量、错配与悬垂末端、盐和 Mg$^{2+}$、pH、变性剂以及链浓度都可能改变 $T_m$；对于非自互补短双链，互补链的总浓度还进入结合平衡。

只按 GC 百分比或长度给出的简式适合受限条件下的粗略估计，不能跨越寡核苷酸、长基因组 DNA 和含错配探针通用。短寡核苷酸通常采用最近邻热力学参数，把相邻碱基步的 $\Delta H^\circ$ 与 $\Delta S^\circ$、起始项、对称项、盐校正和浓度项合并计算。SantaLucia 的统一参数工作说明，相同 GC 比例但排列不同的序列可有不同稳定性。[^nearest-neighbor]

### 复性动力学连接互补性与复杂度 { #renaturation-kinetics }

降温并恢复适当离子条件后，互补链须先通过少量正确配对成核，再快速“拉链式”延伸。对片段长度较接近、充分随机混合且互补链浓度相当的简单体系，早期复性可近似二级反应；温度过低会稳定错误配对，温度过高又不利于成核。基因组 DNA 还受到片段长度、重复序列比例、序列组成和扩散的共同影响。

经典 $C_0t$ 分析以初始单链核苷酸浓度 $C_0$ 与复性时间 $t$ 的乘积比较复性曲线。高拷贝重复序列更快遇到互补伙伴，低拷贝序列较慢，因此真核基因组可出现快、中、慢多个动力学组分。Britten 与 Kohne 的工作由此揭示大量重复 DNA；现代测序已能直接描绘重复序列，但 $C_0t$ 仍是理解“序列复杂度如何进入碰撞动力学”的经典例子。[^cot-analysis]

分子杂交把同一原理用于检测：带标记的探针与互补靶序列形成双链，洗涤条件再淘汰稳定性不足的配对。严格度不是单一试剂的名称，而是温度、盐、甲酰胺等变性剂、探针长度和错配位置的合成结果。提高严格度通常更不容忍错配，但也可能损失低丰度或部分互补靶标；“有信号”仍需阳性、阴性和非特异结合对照。

## 人工核酸与化学合成 { #synthetic-nucleic-acids }

肽核酸（peptide nucleic acid, PNA）用重复的 *N*-(2-aminoethyl)glycine 单元替代糖—磷酸骨架，碱基仍按互补规则识别 DNA 或 RNA。中性骨架减少同号电荷排斥，并提高对许多核酸酶和蛋白酶的耐受性；1991 年的原始工作通过胸腺嘧啶取代的聚酰胺展示了序列选择性的 DNA 识别。高亲和力并不自动转化为体内药效，细胞摄取、组织递送、溶解性、脱靶结合和毒理仍须逐项解决。[^pna]

常规自动化寡核苷酸化学合成多采用固相亚磷酰胺法。首个核苷从 3′ 端固定在固相上，每轮依次暴露生长链 5′-OH、偶联活化的下一个核苷亚磷酰胺、封闭未反应链端并把不稳定的三价磷中间体氧化为五价磷；重复循环后再从载体切下并去保护。因此产物在固相上通常按 3′→5′ 方向增长，恰与聚合酶合成方向相反。RNA 单体还需保护 2′-OH，硫代磷酸酯等骨架则在氧化步骤采用相应硫化化学。[^oligonucleotide-synthesis]

若每轮正确偶联比例为 $y$，经历 $n$ 轮后未经纯化的全长理论比例近似为 $y^n$。随着链长增加，缺失序列、去嘌呤、支化或不完全去保护等副产物累积，化学合成因而更适合寡核苷酸；较长构建体通常由短片段酶促组装，或采用仍在发展的模板非依赖酶合成。质谱或色谱确认长度与纯度之后，仍需用杂交、酶反应或细胞实验验证预期功能。

## 参考资料与延伸阅读

- IUPAC–IUB Joint Commission on Biochemical Nomenclature. [Abbreviations and Symbols for Nucleic Acids, Polynucleotides and their Constituents](https://old.iupac.org/publications/pac/1983/pdf/5508x1273.pdf). *Pure and Applied Chemistry* 55, 1273–1280 (1983).
- Alberts, B. et al. [The Chemical Components of a Cell](https://www.ncbi.nlm.nih.gov/books/NBK26883/). *Molecular Biology of the Cell*, 4th ed.
- Cooper, G. M. [The Molecular Composition of Cells](https://www.ncbi.nlm.nih.gov/books/NBK9879/). *The Cell: A Molecular Approach*, 2nd ed.
- RCSB PDB-101. [DNA](https://pdb101.rcsb.org/motm/23)；[Nucleosome](https://pdb101.rcsb.org/motm/7)。
- RNAcentral Consortium. [About RNAcentral](https://www.rnacentral.org/about-us).
- SantaLucia, J. Jr. [A unified view of polymer, dumbbell, and oligonucleotide DNA nearest-neighbor thermodynamics](https://pmc.ncbi.nlm.nih.gov/articles/PMC19045/). *Proceedings of the National Academy of Sciences USA* 95, 1460–1465 (1998).
- Luger, K. et al. [Crystal structure of the nucleosome core particle at 2.8 Å resolution](https://pubmed.ncbi.nlm.nih.gov/9305837/). *Nature* 389, 251–260 (1997).

[^nucleic-acid-nomenclature]: IUPAC–IUB Joint Commission on Biochemical Nomenclature, [Abbreviations and Symbols for Nucleic Acids, Polynucleotides and their Constituents](https://old.iupac.org/publications/pac/1983/pdf/5508x1273.pdf). *Pure and Applied Chemistry* 55, 1273–1280 (1983)。正文沿用其层级和方向性术语，但对修饰核苷和现代 RNA 类型另作补充。
[^rnacentral]: RNAcentral Consortium, [About RNAcentral](https://www.rnacentral.org/about-us)。该资源整合多种专家数据库的非编码 RNA 序列、基因组位置、结构与功能注释；正文只据此说明 RNA 类型和修饰来源的多样性，不以数据库规模推导功能。
[^nucleotide-functions]: Alberts et al., [The Chemical Components of a Cell](https://www.ncbi.nlm.nih.gov/books/NBK26883/)；Cooper, [Metabolic Energy](https://www.ncbi.nlm.nih.gov/books/NBK9903/)。前者说明核苷酸的聚合、能量与活化载体角色，后者强调“高能键”命名来自整个水解反应的自由能变化，而不是断键本身释放能量。
[^nucleotide-polymerization]: Cooper, [The Molecular Composition of Cells](https://www.ncbi.nlm.nih.gov/books/NBK9879/)。该章区分核苷、核苷酸、3′→5′ 磷酸二酯连接和聚合酶的 5′→3′ 合成方向。
[^dna-duplex-stability]: Yakovchuk, P., Protozanova, E. & Frank-Kamenetskii, M. D. [Base-stacking and base-pairing contributions into thermal stability of the DNA double helix](https://pmc.ncbi.nlm.nih.gov/articles/PMC1360284/). *Nucleic Acids Research* 34, 564–574 (2006)；另见 [Forces maintaining the DNA double helix](https://pmc.ncbi.nlm.nih.gov/articles/PMC7351851/)。不同实验与理论分解对相对贡献的表述并不完全相同，正文因此保留配对、堆积、水化和离子效应的协同性，不给出脱离条件的单一百分比。
[^pdb-dna]: RCSB PDB-101, [DNA](https://pdb101.rcsb.org/motm/23)。页面以实测结构比较 A、B、Z 型 DNA，并展示蛋白质通过大沟、小沟和局部构象读取双链表面。
[^rna-tertiary-motifs]: Tamura, M. et al. [SCOR: Structural Classification of RNA, version 2.0](https://pmc.ncbi.nlm.nih.gov/articles/PMC308814/). *Nucleic Acids Research* 32, D182–D184 (2004)。该资源把同轴螺旋、亲吻发夹、A-minor、假结和核糖拉链等归入可比较的三级相互作用类别。
[^rnase-p]: Guerrier-Takada, C. et al. [The RNA moiety of ribonuclease P is the catalytic subunit of the enzyme](https://pubmed.ncbi.nlm.nih.gov/6197186/). *Cell* 35, 849–857 (1983)。这项体外重构实验确立 RNA 的催化能力；细胞内 RNase P 的组成和蛋白依赖性随生物类群而异。
[^dna-topology]: Seol, Y. & Neuman, K. C. [The dynamic interplay between DNA topoisomerases and DNA topology](https://pmc.ncbi.nlm.nih.gov/articles/PMC5418509/). *Biophysical Reviews* 8(Suppl 1), 101–111 (2016)。文中明确把 $Lk$ 限定于闭合环状或受拓扑约束的 DNA，并区分 $Tw$、$Wr$ 与 $\Delta Lk$。
[^nucleosome-structure]: Luger, K. et al. [Crystal structure of the nucleosome core particle at 2.8 Å resolution](https://pubmed.ncbi.nlm.nih.gov/9305837/). *Nature* 389, 251–260 (1997)；结构导读见 RCSB PDB-101 [Nucleosome](https://pdb101.rcsb.org/motm/7)。
[^archaeal-chromatin]: Mattiroli, F. et al. [Structure of histone-based chromatin in Archaea](https://pmc.ncbi.nlm.nih.gov/articles/PMC5747315/). *Science* 357, 609–612 (2017)。该研究显示特定古菌组蛋白可形成长度可变的 DNA—组蛋白超螺旋，不能把所有古菌染色质等同于固定真核核小体。
[^dna-denaturation]: Thomas, R. [The denaturation of DNA](https://pubmed.ncbi.nlm.nih.gov/8276281/). *Gene* 135, 77–79 (1993)。文章以 260 nm 增色效应区分二级结构破坏与磷酸二酯主链水解。
[^nucleic-acid-purity]: Wilfinger, W. W., Mackey, K. & Chomczynski, P. [Effect of pH and ionic strength on the spectrophotometric assessment of nucleic acid purity](https://pubmed.ncbi.nlm.nih.gov/9067025/). *BioTechniques* 22, 474–481 (1997)。
[^nucleic-acid-chemical-stability]: Le Vay, K. et al. [Nucleic Acid Catalysis under Potential Prebiotic Conditions](https://pmc.ncbi.nlm.nih.gov/articles/PMC7003795/). *Chemistry—An Asian Journal* 15, 214–230 (2020)。该综述比较 2′-OH 参与的 RNA 碱催化断裂与 DNA 在酸性条件下的去嘌呤风险；正文不把其中的前生物环境推论当作细胞内机制。
[^nearest-neighbor]: SantaLucia, J. Jr. [A unified view of polymer, dumbbell, and oligonucleotide DNA nearest-neighbor thermodynamics](https://pmc.ncbi.nlm.nih.gov/articles/PMC19045/). *Proceedings of the National Academy of Sciences USA* 95, 1460–1465 (1998)。
[^cot-analysis]: Britten, R. J. & Kohne, D. E. [Repeated sequences in DNA](https://pubmed.ncbi.nlm.nih.gov/4874239/). *Science* 161, 529–540 (1968)。$C_0t$ 动力学揭示重复序列组分，但其分辨率与解释范围不能替代现代序列测定。
[^pna]: Nielsen, P. E. et al. [Sequence-selective recognition of DNA by strand displacement with a thymine-substituted polyamide](https://pubmed.ncbi.nlm.nih.gov/1962210/). *Science* 254, 1497–1500 (1991)。
[^oligonucleotide-synthesis]: Ni, S. et al. [Chemical Modifications of Nucleic Acid Aptamers for Therapeutic Purposes](https://pmc.ncbi.nlm.nih.gov/articles/PMC5578073/). *International Journal of Molecular Sciences* 18, 1683 (2017)；技术演进与长度限制另见 [Large-Scale de novo Oligonucleotide Synthesis for Whole-Genome Synthesis and Data Storage](https://pmc.ncbi.nlm.nih.gov/articles/PMC8258115/)。两篇综述均说明固相亚磷酰胺循环及 3′→5′ 化学延伸；可实现长度取决于单体、平台、纯化和用途，正文不设置通用硬阈值。
