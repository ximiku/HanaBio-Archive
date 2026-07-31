# 蛋白质功能

蛋白质功能由配体识别、构象交换、亚基装配、能量输入以及分子所处的区室和浓度共同定义。同一条多肽因配体、翻译后修饰或结合伙伴不同，可以进入功能不同的分子状态；外形相近的蛋白质也可能因少数关键残基改变而选择完全不同的底物。

许多功能都从分子识别开始。结合能够把底物置于催化位点、使受体感知信号、让抗体包围抗原表位，也能把 ATP 水解与机械运动耦联。完整机制需要同时说明平衡、速率、构象和细胞语境；静态结构图提供其中的空间信息。[蛋白质结构](protein_structure.md)提供这些讨论所需的构象语言；具体测量方法将在[蛋白质研究方法](protein_methods.md)中展开。

## 配体结合的平衡与速率 { #ligand-binding-equilibrium-kinetics }

### 一个独立结合位点的模型 { #single-site-binding-model }

把蛋白质 $P$ 与配体 $L$ 的可逆结合写成

$$
P+L \mathop{\rightleftharpoons}^{k_{\mathrm{on}}}_{k_{\mathrm{off}}} PL
$$

在最简单的质量作用模型中，结合速率为 $v_{\mathrm{on}}=k_{\mathrm{on}}[P][L]$，解离速率为 $v_{\mathrm{off}}=k_{\mathrm{off}}[PL]$。平衡时两者相等，于是

$$
K_d=\frac{k_{\mathrm{off}}}{k_{\mathrm{on}}}=\frac{[P][L]}{[PL]},
\qquad K_a=\frac{1}{K_d}=\frac{[PL]}{[P][L]}.
$$

这里的 $k_{\mathrm{on}}$ 是二级速率常数，常用单位为 $\mathrm{M^{-1}\,s^{-1}}$；$k_{\mathrm{off}}$ 是一级速率常数，单位为 $\mathrm{s^{-1}}$。$K_d$ 具有浓度单位，在温度、pH、盐浓度和分子状态相同时，数值越小表示平衡更偏向复合物。对一级解离过程，复合物寿命的平均尺度约为 $1/k_{\mathrm{off}}$，所以相同 $K_d$ 可以由不同的结合与解离速率组合产生。[^binding-kinetics]

若一个蛋白质只有一类彼此独立、等价的位点，且用游离配体浓度表示，则分数占据率为

$$
\theta=\frac{[PL]}{[P]+[PL]}
=\frac{[L]_{\mathrm{free}}}{K_d+[L]_{\mathrm{free}}}.
$$

当 $[L]_{\mathrm{free}}=K_d$ 时，位点平均占据一半。该公式适用于单类独立等价位点和游离配体浓度已知的体系；多位点协同、竞争配体、受体耗竭、偶联反应和多构象体系需要相应模型。配体不过量时，还须分别求得总配体与游离配体浓度。

| 量 | 回答的问题 | 解释时必须保留的条件 |
| --- | --- | --- |
| $K_d$ 或 $K_a$ | 平衡时游离态与结合态怎样分配 | 温度、溶液组成、质子化状态、蛋白质构建体与拟合模型 |
| $k_{\mathrm{on}}$ | 两种分子以多快的有效速率形成复合物 | 扩散、取向、静电引导和进入可结合构象的概率 |
| $k_{\mathrm{off}}$ | 已形成的复合物以多快的速率解离 | 是否为单指数过程，以及是否还有再结合或后续反应 |
| 特异性 | 一个蛋白质在可遇到的分子中偏好哪些配体 | 应比较同一条件下多个候选配体，不能只报一个亲和力 |
| 多价结合的亲合力（avidity） | 多个位点共同作用时整体复合物有多稳定 | 位点数、间距、柔性、局部有效浓度和可重复结合都会参与 |

### 结合与构象重分布 { #binding-conformational-redistribution }

“锁和钥匙”说明了表面互补，却容易把蛋白质误画成刚体。未结合蛋白通常已经在多个构象之间交换；配体可以优先结合其中一个预存构象，使其比例上升，这称为构象选择。配体也可能先与较开放的状态接触，随后诱发界面进一步调整，形成诱导契合。两条路径可以在同一体系中并存，实验上需要以时间分辨的动力学和构象证据判断哪一步先发生，而不能从结合前后两幅结构图决定机制。[^binding-conformation]

结合释放的自由能还可传递到远离配体口袋的位置。若一个位点的占据改变另一个位点的亲和力或反应性，就出现别构耦联；效应既可为正也可为负，也不要求蛋白质一定具有多个亚基。血红蛋白展示了亚基之间的正协同性，而胰岛素则说明寡聚化还可服务于储存：胰岛 β 细胞分泌颗粒中高局部浓度与 $\mathrm{Zn^{2+}}$ 稳定六聚体，结合受体的主要分子种则是单体。胰岛素的装配状态由此分别对应储存稳定性和受体结合功能。[^insulin-assembly]

## 血红素口袋与肌红蛋白的单点结合 { #myoglobin-heme-binding }

### 珠蛋白中的血红素微环境 { #globin-heme-pocket }

人肌红蛋白是主要位于横纹肌细胞质的单链珠蛋白，携带一个 heme b。卟啉环的四个氮原子在近似平面内配位亚铁离子 $\mathrm{Fe^{2+}}$；近端 His（F8）提供第五个配位原子，氧分子占据第六个配位位置。远端 His（E7）不直接与铁形成同样的配位键，而是在氧结合侧调节几何与氢键环境。RCSB PDB 条目 [1MBO](https://www.rcsb.org/structure/1MBO)给出了氧合肌红蛋白口袋的实验结构，UniProt 的人肌红蛋白条目则把其定位和氧结合功能连接到具体序列。[^myoglobin-entry]

游离血红素容易发生氧化、非特异聚集和一氧化碳强结合；珠蛋白口袋主动固定卟啉、限制配体进入角度，并以远端残基和局部极性环境重新塑造选择性、反应速率和氧化还原稳定性。

### 单个位点的双曲线结合 { #myoglobin-oxygen-curve }

以氧分压 $p\mathrm{O_2}$ 代替溶解氧浓度时，肌红蛋白的分数饱和度近似服从单个位点双曲线；其 Hill 系数接近 1，没有经典的亚基间协同性。氧结合引起的血红素铁和口袋局部位移属于结合耦联现象，别构调节则要求一个位点影响另一位点或状态。

肌红蛋白的氧亲和力高于血红蛋白，在通常供氧充分的肌细胞中保持较高饱和度，并在局部氧分压降低时逐步释放氧、缓冲氧供应和促进氧向线粒体方向扩散。具体贡献还取决于组织类型、肌红蛋白浓度和扩散条件。[^oxygen-binding-curves]

## 血红蛋白的协同与别构 { #hemoglobin-cooperativity-allostery }

### 四位点协同体系 { #hemoglobin-four-sites }

成人主要血红蛋白 HbA 是 $\alpha_2\beta_2$ 四聚体，成人少量 HbA$_2$ 为 $\alpha_2\delta_2$，胎儿血红蛋白 HbF 为 $\alpha_2\gamma_2$。每个亚基保留一个珠蛋白折叠和一个血红素，因此四聚体最多结合四个 $\mathrm{O_2}$。近端与远端 His 在各亚基中承担与肌红蛋白相似的局部作用，功能差异主要来自亚基界面把四个口袋耦联起来。人 α、β 珠蛋白的人工审阅序列与变异注释可分别在 UniProt [P69905](https://www.uniprot.org/uniprotkb/P69905/entry)和 [P68871](https://www.uniprot.org/uniprotkb/P68871/entry)中核对。[^hemoglobin-entries]

去氧条件下，血红蛋白构象集合较偏向低氧亲和力的 T 态；氧结合使血红素铁向卟啉平面移动，并经近端 His、F 螺旋和亚基界面改变四聚体构象平衡，使高亲和力 R 态的比例增加。随后位点因而更容易结合氧，形成正协同性。T 与 R 是理解耦联的端点模型，不表示每个去氧分子都只有一种刚性 T 结构、每个氧合分子都只存在 R 结构；三级结构变化和四级结构转换共同参与实际能量景观。[^hemoglobin-allostery]

氧结合曲线常用经验性的 Hill 方程描述中段斜率：

$$
\theta=\frac{(p\mathrm{O_2})^{n_H}}
{(P_{50})^{n_H}+(p\mathrm{O_2})^{n_H}}.
$$

$P_{50}$ 是达到半饱和所需的氧分压，数值越低表示在该组条件下表观氧亲和力越高；$n_H=1$ 表示没有可检测的协同性，$n_H>1$ 表示正协同性。人血红蛋白在规定的标准条件下 $n_H$ 约为 2.7；Hill 系数衡量协同强度，亚基数和逐步结合机制须分别描述。[^oxygen-transport-quantitative]

| 性质 | 肌红蛋白 | 成人 HbA |
| --- | --- | --- |
| 主要装配 | 单链、一个 heme b | $\alpha_2\beta_2$、四个 heme b |
| 氧结合曲线 | 近似双曲线 | S 形曲线 |
| 位点间协同 | 无经典亚基间协同，$n_H\approx1$ | 正协同，标准条件下 $n_H>1$ |
| 生理意义 | 肌内氧缓冲与扩散 | 肺部装载并在外周组织卸载氧 |
| 主要调节层次 | 氧分压与局部口袋环境 | 氧分压、H$^+$、CO$_2$、2,3-BPG、温度与亚基组成 |

### 异促效应物与氧装载—释放 { #hemoglobin-heterotropic-effectors }

H$^+$、CO$_2$ 和 2,3-二磷酸甘油酸（2,3-BPG）不是占据血红素氧位点的氧分子，却能改变氧结合。pH 降低和 CO$_2$ 增加通常稳定较低亲和力状态，促进组织处卸氧，这一耦联构成 Bohr 效应的核心。CO$_2$ 既通过碳酸体系影响 H$^+$，也可与珠蛋白 N 端形成氨基甲酸盐；不同贡献随实验条件改变。

一个 2,3-BPG 分子可结合去氧 HbA 两条 β 链之间的中央腔，以多组离子相互作用稳定 T 态。氧合使中央腔收窄，BPG 亲和力下降，因此不能把因果关系简化为“先进入 R 态，BPG 才被机械挤出”。HbF 对 2,3-BPG 的结合较弱，氧亲和力高于 HbA，有利于胎盘处的氧转移。γ143 Ser 取代 β143 His 是差异的一部分，但 γ5／β5 等其他残基同样参与，不能把 HbF 的性质归因于单一位点。[^bpg-fetal-hemoglobin]

一氧化碳直接与亚铁血红素竞争氧，并使尚未被 CO 占据的亚基偏向高亲和力状态；结果既减少可用位点，又使其余位点较难在组织处卸氧。高铁血红蛋白中的铁为 $\mathrm{Fe^{3+}}$，该位点不能结合氧，红细胞的细胞色素 b$_5$ 还原酶系统通常持续把少量高铁血红蛋白还原回亚铁态。HbA$_{1c}$ 则主要来自葡萄糖对 HbA β 链 N 端 Val 的非酶促糖化；它可反映一段时间的血糖暴露，却不是解释正常氧协同性所必需的别构态。详细气体运输、氧解离曲线和异常血红蛋白生理见[气体交换与运输](../physiology/respiratory/gas_exchange.md)与[血细胞生理](../physiology/blood/blood_cell.md)。[^hemoglobin-derivatives]

!!! warning "曲线左移并不等于供氧改善"

    氧亲和力升高可促进低氧分压下的结合，却也可能妨碍组织卸氧。评价一个变构效应时必须同时考虑肺部装载与外周释放，不能只比较“结合更紧”。

## 分子变异与结构—功能关系 { #hemoglobin-molecular-variants }

### HbS 的去氧依赖性聚合界面 { #hbs-polymerization }

镰状细胞病中的 HbS 由 β 珠蛋白第 6 位 Glu 变为 Val（HBB p.Glu6Val）产生。突变在分子表面增加一处疏水“突起”；去氧 HbS 构象暴露相配的疏水接触区，使分子能够成核并组装成长纤维。纤维增长降低细胞内血红蛋白的溶解性、增加红细胞刚度并促成镰变。氧合状态下关键界面不利于同样的聚合，所以一次远离血红素口袋的表面替换可通过构象状态和分子间装配放大为细胞表型。[^hbs-polymer]

杂合携带 HbS 与重症疟疾风险下降之间存在明确的群体关联，但其机制涉及红细胞内环境、感染细胞清除和免疫等多重过程，不能只写成“加速破坏被感染红细胞”这一条路线。药物治疗与临床分型不属于本页范围，也不保留旧素材中以氰酸盐修饰血红蛋白的过时治疗叙述。

### 地中海贫血的亚基供给失衡 { #thalassemia-chain-imbalance }

地中海贫血的核心不是珠蛋白链完全缺席这一种情形，而是 α 或 β 珠蛋白合成减少，导致配对亚基供给失衡。未配对的链或其聚集体损伤红系细胞，正常四聚体生成减少；疾病程度由受影响基因数、等位变异的残余表达、胎儿血红蛋白水平和其他修饰因素共同决定。人有四个 α 珠蛋白基因拷贝、两个 β 珠蛋白基因拷贝，但不能据“丢失几个”用一条固定规则概括所有基因型和生存结局。[^thalassemia-chain-balance]

HbS 说明一个界面突变可以创造异常聚合，地中海贫血则说明正确亚基即使各自能够折叠，化学计量失衡仍会破坏整体功能。更完整的遗传类型、基因剂量和人群层面解释留给[人类遗传学](../genetics/developmental_human.md)，红细胞病理留给[血细胞生理](../physiology/blood/blood_cell.md)。

## 能量耦联与分子机器 { #energy-coupling-molecular-machines }

选择性结合还可安排反应的先后次序。马达蛋白把核苷酸状态、轨道亲和力和结构域运动耦联，使 ATP 水解的自由能偏置原本可逆的热运动。不同核苷酸状态依次改变能量景观，使结合、解离和构象转换形成具有方向性的循环。

### 肌球蛋白的力化学循环 { #myosin-mechanochemical-cycle }

肌球蛋白家族共有的马达结构域同时包含肌动蛋白结合面和核苷酸口袋，轻链结合的颈部可充当杠杆臂，尾部则决定二聚、丝状装配或货物结合等不同功能。在一个简化的肌球蛋白循环中，ATP 与强结合的肌动—肌球蛋白复合物结合会降低肌动蛋白亲和力并促使分离；ATP 水解使马达进入预备构象；随后与肌动蛋白结合、无机磷酸释放和杠杆臂摆动相互耦联，ADP 释放后重新进入强结合状态。不同肌球蛋白类型通过改变各步速率、负载响应和调节蛋白，把这套共同反应循环转化为不同力学行为。[^myosin-cycle]

骨骼肌和心肌中的双头肌球蛋白 II 以长 coiled coil 尾部装配为粗肌丝，原肌球蛋白则沿肌动蛋白丝排列，并与肌钙蛋白和 Ca$^{2+}$ 信号共同调节可接近的肌球蛋白结合位点。这里保留的是“核苷酸—轨道—构象”耦联的生化机制；肌节组织、兴奋—收缩耦联和不同肌型调节见[肌细胞生理](../physiology/muscle.md)。

## 模块化识别与抗体功能 { #antibody-modular-recognition }

### 可变区识别与恒定区效应 { #antibody-variable-constant-regions }

一分子典型免疫球蛋白由两条相同重链和两条相同轻链通过非共价作用与二硫键组成。每个臂端由一对重链、轻链可变结构域共同形成抗原结合位点，互补决定区的序列和环构象提供识别表面；较保守的恒定区维持整体架构，重链 Fc 区还可结合 Fc 受体或补体相关分子。可变区负责抗原识别，恒定区和 Fc 区则把识别事件连接到后续效应。[^antibody-architecture]

单个位点与表位之间的结合强度称亲和力；一个多价抗体与多表位靶标形成的整体稳定性则是亲合力。第二个或更多位点结合后，复合物即使有一个接触短暂解离，也可能在局部高有效浓度下迅速重绑。因此低至中等的单点亲和力可以通过适当的多价几何产生很高的整体亲合力，分泌型 IgM 是典型例子。[^antibody-avidity]

| 人免疫球蛋白类别 | 常见分子形式与位置 | 结构差异带来的功能侧重 |
| --- | --- | --- |
| IgG | 分泌型主要为单体，血液和组织液中丰富 | Fc 可介导多种效应，也是经胎盘主动转运的主要抗体类别 |
| IgA | 血清中多为单体，黏膜分泌物中常为含 J 链的二聚体并带分泌片 | 适合在黏膜表面中和和排除抗原 |
| IgM | B 细胞表面为膜型单体，分泌型多形成含 J 链的五聚体 | 位点多、整体亲合力高，常见于初次应答早期并有效激活补体 |
| IgD | 主要作为初始 B 细胞表面的抗原受体 | 与 IgM 共享抗原特异性而具有不同重链恒定区 |
| IgE | 分泌浓度低，Fc 高亲和结合肥大细胞和嗜碱性粒细胞受体 | 参与寄生虫防御和速发型超敏反应 |

抗原是可被抗体或免疫受体特异识别的分子；能否单独诱导免疫应答还取决于分子大小、复杂性、呈递和宿主环境。半抗原可以与已有抗体结合，却通常需连接较大载体才具有充分免疫原性。MHC 对肽的呈递、T 细胞选择以及 CD4／CD8 的作用属于免疫系统层面的识别过程，统一迁往[抗原呈递与主要组织相容性复合体](../immunology/immuno_apc_mhc.md)，不在此处压缩为几条蛋白质分类口诀。多克隆／单克隆抗体制备、ELISA 和 Western blot 则属于[蛋白质研究方法](protein_methods.md)及[分离技术与蛋白质分析](../exptech/biochem_molecular/separation_protein.md)。

## 膜环境、无序区与功能空间 { #membranes-disordered-regions }

### 膜蛋白的跨膜耦联 { #membrane-protein-functions }

脂双层是膜蛋白功能环境的组成部分。跨膜区把疏水侧链朝向脂质酰基链，同时以内部极性口袋、连续水通路或离子配位位点处理亲水底物；膜电位、张力、厚度和特定脂质又可改变构象平衡。离子通道形成选择性孔道，载体在交替开放的构象间转运溶质，受体把一侧的配体结合传递到另一侧，泵和呼吸链复合物则把化学或电化学能与跨膜转运耦联。[^membrane-protein-function]

膜蛋白的丰度覆盖很宽范围，并能在疏水环境中形成稳定而有序的结构。膜内主链的极性肽键常由 α-螺旋或 β-桶内部氢键满足，侧链、脂质和水继续参与稳定。实验困难主要出现在蛋白离开原生膜之后：暴露的疏水表面容易在水中聚集，原生脂质、亚基和构象状态也可能丢失。去污剂、纳米盘、脂质体和结构测定的选择属于方法学问题，留待下一页集中比较。

### 内在无序的动态构象集合 { #intrinsic-disorder-function }

内在无序蛋白或无序区在生理条件下不形成单一、稳定的三级结构，而是在构象集合中快速交换。它们不是“完全没有结构”的同义词：局部残余结构、瞬时接触和偏好的长程构象都可能存在，具体分布随电荷、盐、温度、修饰和伙伴改变。无序也不由“缺少疏水氨基酸”一条规则决定，更不能从结构模型缺失坐标直接诊断。

短线性模体使一段短序列被结构域识别，密集的磷酸化、乙酰化或泛素化位点可改变电荷和结合伙伴，多价弱相互作用则允许一个柔性区域同时协调多个组分。有些无序区在结合时折叠，有些仍保留显著动态性，形成所谓 fuzzy complex；柔性连接区还可调节两个折叠结构域之间的有效距离和取向。[^intrinsic-disorder-functions]

多价相互作用在足够浓度和合适溶液条件下可能驱动液—液相分离，使蛋白质和核酸富集为动态凝聚体。但体外出现圆形液滴、融合或浑浊并不能单独证明细胞内存在同一相变，更不能证明相分离对某项功能必需；需要测量内源浓度、组分交换、突变因果和细胞环境中的相行为。无序区因此扩大了可调控的功能空间，却不是对所有动态细胞结构的万能解释。[^phase-separation-evidence]

## 分子活性与生物学功能 { #molecular-activity-biological-function }

纯化蛋白与配体结合，证明的是特定实验条件下的分子活性；它是否解释细胞中的生物学功能，还要确认蛋白质形式、表达位置、伙伴、底物可达性和扰动后的因果结果。反过来，敲除基因产生表型也不自动说明蛋白质直接催化或结合了哪个分子。可靠的机制通常由多类证据相互约束。

| 证据层次 | 可以支持的判断 | 单独使用时的缺口 |
| --- | --- | --- |
| 纯化体系的结合、动力学或催化 | 分子在规定条件下具有某种活性，可定量亲和力、速率或化学计量 | 可能不是细胞中的蛋白质形式或浓度，也未证明生理相关性 |
| 结构与构象动力学 | 指出界面、状态与可能的耦联路径 | 邻近不等于因果，静态坐标不能给出全部时间顺序 |
| 定点突变与重构 | 检验某残基、结构域或装配是否参与功能 | 突变也可能破坏折叠、稳定性、表达或定位 |
| 细胞和个体扰动 | 建立基因产物对表型是否必要或充分 | 代偿、间接通路和多功能性会混入结果 |
| 同源性或自动注释 | 为未研究蛋白提出可检验假说 | 功能可能在旁系同源物间分化，证据等级必须保留 |

UniProt 使用 Evidence and Conclusion Ontology 标签区分实验、相似性推断、规则注释和数据库导入等来源，提醒读者不要把“数据库里有一个功能名称”误当作每一项都已直接实验验证。[^uniprot-evidence] 蛋白质功能最终是分子状态、时间尺度与生物环境共同定义的关系：结合常数描述平衡，速率常数描述过程，结构指出可能路径，而生理功能还要求在真实系统中闭合因果链。

## 参考资料与延伸阅读

- Nelson, D. L., Cox, M. M. & Hoskins, A. A. *Lehninger Principles of Biochemistry*, 8th ed., Chapter 5. Macmillan Learning, 2021.
- Alberts, B. et al. [Protein Function](https://www.ncbi.nlm.nih.gov/books/NBK26911/). *Molecular Biology of the Cell*, 4th ed.
- NCBI Bookshelf. [Oxygen Transport](https://www.ncbi.nlm.nih.gov/books/NBK54103/).
- UniProtKB. Human [myoglobin P02144](https://www.uniprot.org/uniprotkb/P02144/entry), [hemoglobin α P69905](https://www.uniprot.org/uniprotkb/P69905/entry) and [hemoglobin β P68871](https://www.uniprot.org/uniprotkb/P68871/entry).
- RCSB PDB. Oxygenated myoglobin [1MBO](https://www.rcsb.org/structure/1MBO) and deoxyhemoglobin [4HHB](https://www.rcsb.org/structure/4HHB).
- Gell, D. A. [Structure and function of haemoglobins](https://pubmed.ncbi.nlm.nih.gov/29126700/). *Blood Cells, Molecules, and Diseases* 70, 13–42 (2018).
- [Dissecting the biophysics and biology of intrinsically disordered proteins](https://pmc.ncbi.nlm.nih.gov/articles/PMC10872967/). *Trends in Biochemical Sciences* 49, 101–104 (2024).
- NCBI Bookshelf. [The Structural Basis of Antibody Diversity](https://www.ncbi.nlm.nih.gov/books/NBK27144/)；[Molecular Motors](https://www.ncbi.nlm.nih.gov/books/NBK26888/).

[^binding-kinetics]: NCBI Assay Guidance Manual, [Biophysical Methods for Measuring Protein Interactions](https://www.ncbi.nlm.nih.gov/books/NBK569501/)。该章分别定义结合与解离速率、$K_d$ 及各测量模型的适用条件。
[^binding-conformation]: [Conformational selection in protein binding and function](https://pmc.ncbi.nlm.nih.gov/articles/PMC4241102/). *Protein Science* 23, 1508–1518 (2014)。该综述比较构象选择与诱导契合，并说明两者可形成更复杂的混合路径。
[^insulin-assembly]: Weiss, M. A., Steiner, D. F. & Philipson, L. H. [Insulin Biosynthesis, Secretion, Structure, and Structure-Activity Relationships](https://www.ncbi.nlm.nih.gov/books/NBK279029/). *Endotext*。胰岛素在分泌颗粒中形成 Zn 配位六聚体，而单体与受体结合；内分泌调控细节留给相应生理页面。
[^myoglobin-entry]: RCSB PDB [1MBO](https://www.rcsb.org/structure/1MBO)，DOI: 10.2210/pdb1mbo/pdb；UniProtKB [P02144](https://www.uniprot.org/uniprotkb/P02144/entry)。两条来源分别提供氧合口袋结构与人工审阅的人肌红蛋白序列、定位和功能注释。
[^oxygen-binding-curves]: NCBI Bookshelf, [Myoglobin](https://www.ncbi.nlm.nih.gov/books/NBK544256/)与 [Oxygen Transport](https://www.ncbi.nlm.nih.gov/books/NBK54103/)。此处只保留肌红蛋白作为肌内氧缓冲和扩散促进者的分子层面解释，不采用旧素材的膜内表面定位断言。
[^hemoglobin-entries]: UniProtKB [P69905](https://www.uniprot.org/uniprotkb/P69905/entry)与 [P68871](https://www.uniprot.org/uniprotkb/P68871/entry)，均为人珠蛋白人工审阅条目；RCSB PDB [4HHB](https://www.rcsb.org/structure/4HHB)，DOI: 10.2210/pdb4hhb/pdb，提供经典去氧 HbA 四聚体结构。
[^hemoglobin-allostery]: Gell, D. A. [Structure and function of haemoglobins](https://pubmed.ncbi.nlm.nih.gov/29126700/). *Blood Cells, Molecules, and Diseases* 70, 13–42 (2018)；[Hemoglobin: Structure, Function and Allostery](https://pmc.ncbi.nlm.nih.gov/articles/PMC7370311/). *Subcellular Biochemistry* 94, 345–382 (2020)。后者亦总结 2,3-BPG 与去氧血红蛋白中央腔的相互作用。
[^oxygen-transport-quantitative]: NCBI Bookshelf, [Oxygen Transport](https://www.ncbi.nlm.nih.gov/books/NBK54103/)。该章在明示标准条件下给出人血红蛋白 Hill 系数约 2.7，并解释 $P_{50}$ 与氧亲和力的关系。
[^bpg-fetal-hemoglobin]: NCBI Bookshelf, [Fetal Hemoglobin](https://www.ncbi.nlm.nih.gov/books/NBK500011/)；Adachi, K. et al. [Amino acids responsible for decreased 2,3-biphosphoglycerate binding to fetal hemoglobin](https://pubmed.ncbi.nlm.nih.gov/9376571/). *Blood* 90, 2916–2920 (1997)。γ143 Ser 并非 HbF 低 BPG 亲和力的唯一序列解释。
[^hemoglobin-derivatives]: NCBI Bookshelf, [Oxygen Transport](https://www.ncbi.nlm.nih.gov/books/NBK54103/)与 [Methemoglobinemia](https://www.ncbi.nlm.nih.gov/books/NBK537317/)；UniProtKB [P68871](https://www.uniprot.org/uniprotkb/P68871/entry)记录 β 链 N 端糖化位点。旧素材的血红蛋白 S-亚硝基化—血管舒张单一路线争议较大，本页不据此建立确定机制。
[^hbs-polymer]: GeneReviews, [Sickle Cell Disease](https://www.ncbi.nlm.nih.gov/books/NBK1377/)；Eaton, W. A. & Bunn, H. F. [Treating sickle cell disease by targeting HbS polymerization](https://pmc.ncbi.nlm.nih.gov/articles/PMC5437829/). *Blood* 129, 2719–2726 (2017)。两者交叉支持 p.Glu6Val、去氧依赖聚合及纤维导致红细胞力学改变的因果链。
[^thalassemia-chain-balance]: GeneReviews, [Alpha-Thalassemia](https://www.ncbi.nlm.nih.gov/books/NBK1435/)与 [Beta-Thalassemia](https://www.ncbi.nlm.nih.gov/books/NBK1426/)。两类疾病均需按珠蛋白合成量、未配对链与修饰因素解释，不能用单一基因计数表替代具体基因型。
[^myosin-cycle]: Alberts et al., [Molecular Motors](https://www.ncbi.nlm.nih.gov/books/NBK26888/)；[The Myosin Family of Mechanoenzymes: From Mechanisms to Therapeutic Approaches](https://pmc.ncbi.nlm.nih.gov/articles/PMC8742983/). *Annual Review of Biochemistry* 89, 667–693 (2020)。本页采用概括循环，具体速率和力学步骤随肌球蛋白类别而变。
[^antibody-architecture]: Janeway, C. A. Jr et al. [The structural basis of antibody diversity](https://www.ncbi.nlm.nih.gov/books/NBK27144/). *Immunobiology*, 5th ed.；用于核对重链／轻链、V 区结合位点、C 区与同种型的结构分工。
[^antibody-avidity]: Alberts et al., [B Cells and Antibodies](https://www.ncbi.nlm.nih.gov/books/NBK26884/)。该章区分单个结合位点的 affinity 与多价相互作用的总 avidity，并以 IgM 说明多价重绑的功能后果。
[^membrane-protein-function]: Alberts et al., [Principles of Membrane Transport](https://www.ncbi.nlm.nih.gov/books/NBK26815/)；Cooper, G. M. [Cell Membranes](https://www.ncbi.nlm.nih.gov/books/NBK9928/)。两者用于区分通道与载体，并核对跨膜螺旋、疏水表面和构象转换的环境基础。
[^intrinsic-disorder-functions]: [Dissecting the biophysics and biology of intrinsically disordered proteins](https://pmc.ncbi.nlm.nih.gov/articles/PMC10872967/). *Trends in Biochemical Sciences* 49, 101–104 (2024)。该综述讨论短线性模体、翻译后修饰、多价作用和结合后的动态复合物；实验性无序条目可另见 [DisProt](https://pubmed.ncbi.nlm.nih.gov/41249866/)。
[^phase-separation-evidence]: [Evaluating phase separation in live cells: diagnosis, caveats, and functional consequences](https://pmc.ncbi.nlm.nih.gov/articles/PMC6942051/). *Genes & Development* 33, 1619–1634 (2019)。该文提出区分体外液滴、细胞内凝聚体和功能因果所需的证据边界。
[^uniprot-evidence]: UniProt, [Evidence](https://www.uniprot.org/help/evidences)。UniProtKB 以 ECO 代码保留实验、人工推断、序列相似性、自动规则和导入信息等不同证据来源。
