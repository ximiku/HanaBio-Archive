# 统计热力学与分子相互作用

细胞中的分子不断受到周围水分子的碰撞。一次氢键开合、一个离子离开结合位点或一段蛋白质改变构象，所涉及的能量常与热涨落处在相近尺度。体系在实验中实际出现哪些状态，取决于每类状态包含的微观排布以及这些排布在给定温度下的概率。

统计热力学把这种微观的不确定性转换为宏观可测量的分布、平均量和响应。它让构象交换、配体占据、协同结合和序列识别可以用同一套状态权重来理解。微观状态和玻尔兹曼（Boltzmann）权重进一步连接到两态模型、结合多项式与协同性；生化反应的标准转化状态、代谢耦联和跨膜能量记账见[生物能学](../biochem/bioenergetics.md#thermodynamic-foundations)，具体蛋白质构象和配体动力学见[蛋白质功能](../biochem/protein_function.md#ligand-binding-equilibrium-kinetics)。[^physical-biology-textbook]

## 微观状态与宏观描述 { #microstates-macrostates }

### 状态、粗粒化与多重度 { #states-coarse-graining }

微观状态规定体系在某一瞬间的细节，例如每个粒子的位置和动量、分子的构象、结合位点的占据以及溶剂和离子的排布。实验通常只读取其中少数变量：蛋白质是否折叠、通道是否开放、受体结合了几个配体，或一群分子的平均荧光强度。这些实验可区分的类别称为宏观状态；一个宏观状态往往包含大量不同的微观状态。

若一个孤立体系的 $\Omega$ 个可及微观状态等概率，Boltzmann 熵为

$$
S=k_{\mathrm B}\ln\Omega.
$$

更一般地，若第 $i$ 个微观状态的概率为 $p_i$，熵写成

$$
S=-k_{\mathrm B}\sum_i p_i\ln p_i.
$$

熵由概率分布和所采用的状态划分共同定义。把许多分辨不出的微观排布归入同一个宏观状态后，状态的多重度便成为真实的统计权重。蛋白质展开态可以拥有比某个紧凑折叠态更多的主链、侧链和溶剂排布；配体结合又会限制平移、转动和构象自由度。因而比较两个分子状态时，需要同时考虑能量与可及状态数。

### 玻尔兹曼权重与配分函数 { #boltzmann-partition }

处于恒温环境、可与热库交换能量的体系，在平衡时落入微观状态 $i$ 的概率为

$$
p_i=\frac{e^{-\beta E_i}}{Z},
\qquad
\beta=\frac{1}{k_{\mathrm B}T},
\qquad
Z=\sum_i e^{-\beta E_i}.
$$

$E_i$ 是该状态的能量，$T$ 为热力学温度，$Z$ 是配分函数。指数项 $e^{-\beta E_i}$ 给予低能状态较大权重，配分函数把所有候选状态的权重相加并完成归一化。一个高能宏观状态若包含极多微观状态，仍可能获得可观的总概率；统计热力学所比较的是每个宏观状态内部所有微观权重之和。

配分函数还连接微观状态与宏观平均。例如平均能量为

$$
\langle E\rangle=-\frac{\partial\ln Z}{\partial\beta},
$$

Helmholtz 自由能为

$$
F=-k_{\mathrm B}T\ln Z.
$$

固定温度和体积时，平衡分布使 $F=\langle E\rangle-TS$ 取最小值。生物溶液常更适合用恒温、恒压下的 Gibbs 能和化学势描述；无论采用哪种势函数，核心思想相同：自由能把状态能量与状态数带来的熵贡献合在一起，平衡时的概率比由相应自由能差决定。

### 热能尺度与概率比 { #thermal-energy-scale }

在 $298\ \mathrm K$，单分子的热能尺度约为

$$
k_{\mathrm B}T\approx4.11\ \mathrm{pN\,nm}
\approx4.11\times10^{-21}\ \mathrm J,
$$

按一摩尔粒子计则有 $RT\approx2.48\ \mathrm{kJ\,mol^{-1}}$。这里的 $k_{\mathrm B}$ 与阿伏伽德罗常数都是国际单位制（International System of Units，SI）中的精确定义常数；数值随温度线性变化。[^codata-constants]

两个状态的自由能相差 $1k_{\mathrm B}T$ 时，较高自由能状态相对权重约为 $e^{-1}$；相差 $5k_{\mathrm B}T$ 时约为 $e^{-5}$。几倍 $k_{\mathrm B}T$ 的变化已经能显著移动状态分布，而多个弱相互作用、多个结合位点或重复结构单元的贡献可以累积。温度升高也不仅意味着“运动更快”：它改变能量差相对于 $k_{\mathrm B}T$ 的大小，并可能通过溶剂化、热容和构象熵改变自由能差本身。

## 两态系统与群体重新分配 { #two-state-systems }

### 宏观状态的有效自由能 { #effective-state-free-energy }

许多生物过程可以先粗粒化为两个实验可区分的状态：离子通道关闭或开放，蛋白质折叠或展开，调控元件未结合或结合，受体处于低活性或高活性构象。设状态 0 与状态 1 的有效自由能差为

$$
\Delta G=G_1-G_0,
$$

并且每个 $G$ 已经包含该宏观状态内部所有微观构象和溶剂排布的贡献，则状态 1 的平衡概率为

$$
p_1=\frac{e^{-\beta G_1}}{e^{-\beta G_0}+e^{-\beta G_1}}
=\frac{1}{1+e^{\beta\Delta G}}.
$$

这里的 $G$ 采用单分子能量单位，与 $k_{\mathrm B}T$ 比较；若自由能按摩尔表示，指数相应写成 $\Delta G_{\mathrm m}/RT$。当 $\Delta G=0$ 时两态各占一半；$\Delta G$ 改变几个 $k_{\mathrm B}T$，群体就会明显偏向一侧。单个分子可以随时间在两态间跳转，群体实验测到的占比则是许多分子的状态平均。平衡概率只确定状态分配，转换速率还取决于两态之间的能垒。

若先用能量 $E_0$、$E_1$ 描述两个状态，并分别有 $g_0$、$g_1$ 个等能微观状态，则

$$
\frac{p_1}{p_0}
=\frac{g_1}{g_0}e^{-\beta(E_1-E_0)}.
$$

多重度比可以改写成熵差 $\Delta S=k_{\mathrm B}\ln(g_1/g_0)$，于是概率比取决于 $\Delta E-T\Delta S$。这说明低能状态未必占优势：若另一状态拥有足够多的微观排布，熵贡献可以抵消能量差。

### 力、配体与环境的状态权重 { #state-coupling }

外界变量通过改变状态自由能来移动分布。若两态沿受力方向的位置相差 $\Delta x$，恒定力 $f$ 对自由能差的一阶影响可写为

$$
\Delta G(f)=\Delta G(0)-f\Delta x.
$$

力对伸长态做功，便会提高该状态的统计权重。机械敏感离子通道、蛋白质结构域的拉伸和马达蛋白的负载响应都可用这种“能量倾斜”作为起点；复杂体系还需加入多维反应坐标、加载速率和非平衡效应。

配体浓度、膜电位、pH 和化学修饰也能选择性稳定某些状态。若活性构象比非活性构象更强地结合配体，增加配体会把原有构象群体重新分配到活性态。这样的群体移动不要求配体先把每个分子改造成一种全新结构；结合前已存在的低丰度构象、结合后进一步的局部调整以及亚基间耦联可以共同决定观测到的转换。

## 分子结合的状态计数 { #binding-statistical-mechanics }

### 单个位点的结合多项式 { #single-site-binding }

考虑蛋白质 $P$ 与游离配体 $L$ 的简单可逆结合。在给定温度和溶液条件下，把未结合态的统计权重定为 1，结合态的相对权重可写成

$$
w_{\mathrm{bound}}=\frac{c}{K_d},
$$

其中 $c$ 是游离配体浓度，$K_d$ 是该条件下的解离常数。两个状态的结合多项式为

$$
Z_{\mathrm{bind}}=1+\frac{c}{K_d},
$$

因此位点占据率为

$$
\theta=\frac{c/K_d}{1+c/K_d}
=\frac{c}{K_d+c}.
$$

这个熟悉的双曲线因而也是一个两态配分函数的结果：升高配体化学势，等价于增加结合态的统计权重。$c=K_d$ 时两种宏观状态权重相等，位点平均占据一半。

标准结合自由能与平衡常数之间须通过无量纲标准态连接。若标准浓度为 $c^\circ$，理想稀溶液近似下有

$$
\Delta G^\circ_{\mathrm{bind}}
=RT\ln\frac{K_d}{c^\circ}
=-RT\ln K^\circ_a,
\qquad
K^\circ_a=\frac{c^\circ}{K_d}.
$$

这里的 $\Delta G^\circ_{\mathrm{bind}}$ 是完整结合过程的自由能，包括分子接触、溶剂重排和自由度损失。对真正服从一步结合、一步解离的动力学模型，$K_d=k_{\mathrm{off}}/k_{\mathrm{on}}$；出现构象变化、多步装配或传质限制时，实验得到的表观参数需要相应的反应模型解释。

### 多个独立位点与组合多重度 { #independent-sites }

一个分子若有 $N$ 个相同且彼此独立的位点，每个位点都有未结合权重 1 和结合权重 $x=c/K_d$，完整结合多项式为

$$
Z_N=(1+x)^N
=\sum_{n=0}^{N}{N\choose n}x^n.
$$

组合数 ${N\choose n}$ 表示恰有 $n$ 个位点被占据时存在多少种微观排布。平均结合的配体数为

$$
\langle n\rangle
=x\frac{\partial\ln Z_N}{\partial x}
=N\frac{x}{1+x},
$$

每个位点的平均占据率仍是 $x/(1+x)$。中间占据状态因为组合方式多而可能具有很大概率，但这种组合多重度本身不产生协同性；各位点的条件结合自由能仍不受其他位点是否占据的影响。

若位点不等价或彼此耦联，可以把不同占据数的统计权重写成更一般的结合多项式

$$
Z_{\mathrm{bind}}=\sum_{n=0}^{N}a_n
\left(\frac{c}{c^\circ}\right)^n.
$$

系数 $a_n$ 汇总了恰有 $n$ 个配体时的构象、多重度和逐步结合自由能。平均占据数仍可由 $\langle n\rangle=\partial\ln Z_{\mathrm{bind}}/\partial\ln c$ 得到。这个写法把复杂结合曲线转成状态及其权重的问题，也提醒我们：同一条总体曲线可能由不等价位点、协同性或隐藏构象等不同机制产生。

### 协同性、别构与 Hill 斜率 { #cooperativity-allostery }

当一个位点的占据改变另一个位点的条件结合自由能时，位点之间发生热力学耦联。后续结合更有利称为正协同性，后续结合更不利称为负协同性。耦联可以通过亚基界面、构象群体、局部应变、静电或溶剂网络传递，不要求两个位点直接接触。

Monod–Wyman–Changeux（MWC）模型把寡聚蛋白表示成两个预存的整体构象，所有亚基协同处于 T 态或 R 态；配体对两态亲和力不同，结合遂重新分配两态群体。Koshland–Némethy–Filmer（KNF）模型允许配体结合后亚基逐步改变，并把变化传给相邻亚基，因此同一寡聚体中可以出现混合构象。两者是理解协同结合的经典极限模型，真实蛋白质可以兼有构象选择、诱导调整和多条耦联路径。[^mwc-model][^knf-model]

酶调控中同促、异促效应与催化速率的关系，见[变构调节模型](../biochem/enzyme_mechanism_regulation.md#allosteric-models)；这里关注占据状态和构象状态的统计权重。

实验中常用 Hill 形式概括曲线陡峭度：

$$
\theta=\frac{c^{n_{\mathrm H}}}
{K_{0.5}^{n_{\mathrm H}}+c^{n_{\mathrm H}}}.
$$

$K_{0.5}$ 是半最大响应对应的浓度，$n_{\mathrm H}$ 是 Hill 系数。在简单同质体系中，$n_{\mathrm H}>1$ 与正协同性相符，$n_{\mathrm H}<1$ 可见于负协同性，也可能来自位点异质性、样品混合或复合反应。Hill 方程主要描述响应曲线形状；除高度协同等特殊极限外，$n_{\mathrm H}$ 不能直接当作结合位点数。[^hill-equation]

别构还包括异促效应：一种配体结合调节位点，改变另一种配体或底物的占据和活性。它可能改变半最大浓度、最大响应、状态转换速率或这些量的组合。要确定具体机制，需要同时测量结合、构象和功能，而不能只凭一条 S 形剂量曲线把所有变化归入同一种协同性。

## 序列特异性的能量语言 { #sequence-specificity }

### 从序列到相对结合权重 { #energy-matrix }

脱氧核糖核酸（deoxyribonucleic acid，DNA）、核糖核酸（ribonucleic acid，RNA）或肽结合蛋白面对的候选配体常是一组彼此相近的序列。设序列 $s$ 的结合自由能为 $\Delta G_{\mathrm{bind}}(s)$，在相同游离蛋白浓度和环境下，它的结合权重相对于序列 $s'$ 为

$$
\frac{w(s)}{w(s')}
=\exp\!\left[-\beta\left(
\Delta G_{\mathrm{bind}}(s)-\Delta G_{\mathrm{bind}}(s')
\right)\right].
$$

少量自由能差经过指数映射，便能形成明显的占据差异。在位置近似独立时，可把序列能量表示为

$$
\Delta G_{\mathrm{bind}}(s)
=\Delta G_{\mathrm{ref}}+\sum_{j=1}^{L}\varepsilon_j(s_j),
$$

$\varepsilon_j(s_j)$ 表示第 $j$ 个位置出现碱基或残基 $s_j$ 的相对能量贡献。这类能量矩阵可以由定量结合测量、选择实验或大量序列的富集模式估计，再预测突变怎样改变相对亲和力。Berg 与 von Hippel 的统计力学理论以及 Stormo 与 Fields 对自由能和信息量的连接，奠定了这一思路。[^sequence-selection-theory][^sequence-free-energy]

位置加和是一项可检验的近似。相邻碱基形状、蛋白质构象、DNA 弯曲、多个因子协同结合和染色质环境都可能产生位置间耦联。序列标志图显示的是样本中的相对频率与信息量；从频率直接换算结合能还依赖选择过程近似平衡、背景频率正确、样本充分以及位点贡献近似独立等条件。

### 亲和力、特异性与竞争背景 { #affinity-specificity }

亲和力描述一个分子与指定配体的平衡偏好，特异性则比较它对目标与所有竞争对象的相对偏好。一个蛋白质可以对目标序列结合很强，却也同样强地结合许多替代序列；此时亲和力高而特异性有限。决定特异性的关键量是目标与竞争序列之间的自由能差 $\Delta\Delta G$，以及各种竞争序列在细胞中的数量、可及性和局部浓度。

基因组中远多于功能位点的非特异序列构成巨大的竞争背景。即使单个非特异位点的结合权重很低，数量累积后仍可占据相当一部分蛋白质。细胞通过合作结合、DNA 可及性、局部浓度、调控因子组合和非平衡染色质过程进一步筛选功能位点。统计热力学模型由此给出“在这些条件下哪些状态应被占据”的基线，完整的细胞调控还要加入空间组织和动力学。

## 分子相互作用的物理来源 { #physical-origins }

### 溶剂参与的相互作用网络 { #solvent-mediated-interactions }

分子结合的自由能来自结合前后整个体系的差异，而不只来自界面新形成的几条“键”。带电基团之间的静电作用受距离、介电环境、离子屏蔽和质子化状态影响；氢键提供几何选择性，却要与结合前各基团同水形成的氢键比较；范德华吸引在许多互补原子紧密接触时累积，距离过近则出现强排斥。非极性表面埋藏可释放部分受限水分子，是水相结合与折叠的重要贡献之一。具体结构环境中的这些作用见[蛋白质结构](../biochem/protein_structure.md#structure-stabilizing-interactions)。

结合通常损失两个分子相对平移和转动的自由度，也可能限制柔性侧链、环区或无序片段；另一方面，界面脱溶剂化、离子释放或未结合构象的重新分配又能增加环境或分子的熵。观察到有利的总结合自由能，只说明所有贡献相加后结合态权重较大。把某个测得的 $\Delta H$ 或 $\Delta S$ 直接指定给一条氢键、一个盐桥或“释放的水”通常需要额外结构和对照证据。

### 条件依赖与耦联平衡 { #linked-equilibria }

pH、盐浓度、温度、二价离子、辅因子和膜组成都能改变结合。配体结合若伴随质子吸收或释放，量热实验观测到的焓会包含缓冲液电离焓；结合若只发生在某个构象或寡聚状态，表观 $K_d$ 还会合并构象平衡或装配平衡。实验报告的亲和力因此应连同温度、溶液组成、分子构建体和拟合模型一起解释。

温度依赖还受热容变化影响。简单地把 $\Delta G=\Delta H-T\Delta S$ 中的 $\Delta H$ 与 $\Delta S$ 当作恒定常数，往往只适用于有限温区。比较突变体或不同配体时，焓—熵补偿可能来自真实的溶剂和构象重排，也可能受参数相关性、测量误差或不同耦联平衡影响；可靠解释需要跨条件重复、独立方法与结构证据。

## 实验读出与状态模型反演 { #experimental-inference }

统计热力学给出状态权重与可观测量之间的关系，实验则决定哪些权重真正受到数据约束。不同方法读取热量、占据、折射率、距离或力，各自把若干微观过程压缩成一个信号。

| 方法 | 主要直接读出 | 可由模型推断的量与关键边界 |
| --- | --- | --- |
| 平衡滴定、荧光各向异性或电泳迁移 | 随游离配体浓度变化的结合信号或复合物比例 | $K_d$、位点数或协同性依赖明确的信号—占据映射；配体耗竭、标记扰动和多种复合物会改变曲线 |
| 等温滴定量热（isothermal titration calorimetry，ITC） | 每次注射引起的热流与积分热量 | 拟合可给出结合计量、$K_a$ 和 $\Delta H$，再由关系式求 $\Delta G$、$\Delta S$；缓冲液质子化、浓度误差和多状态模型会进入表观参数 |
| 表面等离子体共振（surface plasmon resonance，SPR）或生物层干涉 | 固相表面上复合物随时间的生成与解离信号 | 在合适模型下估计 $k_{\mathrm{on}}$、$k_{\mathrm{off}}$ 与 $K_d$；固定化、再结合、表面异质性和传质限制可能扭曲速率 |
| 单分子 Förster 共振能量转移（Förster resonance energy transfer，FRET）、光镊或磁镊 | 单分子距离状态、跃迁时间或力—位移轨迹 | 可分辨群体平均隐藏的状态与转换；标记位置、时间分辨率、加载速率和非平衡驱动决定可解释范围 |

ITC 直接测量结合过程的热效应，在合适的单一位点模型下可同时约束亲和力、计量和结合焓；SPR 则实时记录结合与解离，能够把相同 $K_d$ 背后的不同速率组合分开。两类方法都需要检查模型假设：ITC 的滴定曲线可能无法区分若干参数组合，SPR 的表面传质可能使表观结合速率低于溶液中的真实反应速率。[^itc-thermodynamics][^spr-kinetics]

### 平衡分布与转换路径 { #equilibrium-versus-kinetics }

平衡分布由状态自由能差决定，达到平衡所需的时间由能垒和转换路径决定。两个配体可以有相同 $K_d$，一个快速结合、快速解离，另一个缓慢结合、缓慢解离；两个构象也可以具有相同平衡占比，却因能垒不同而表现出毫秒或小时尺度的交换。只测终点占据无法恢复完整动力学，只测短时间轨迹也可能尚未到达平衡。

外力扫描、光激活或快速混合会让体系暂时离开平衡。此时轨迹包含耗散、路径依赖和实验驱动速率的信息，不能直接代入平衡 Boltzmann 分布。若扰动足够缓慢，或采用明确的非平衡统计关系与动力学模型，才可由工作分布、跃迁率或迟滞曲线反推平衡自由能景观。

### 多种观测对候选机制的区分 { #model-discrimination }

一条平衡结合曲线常不足以唯一确定机制。正协同曲线可能来自构象耦联，也可能受样品聚集、配体耗竭或信号非线性影响；双相曲线可能来自两个位点，也可能来自两个分子群体。更有辨别力的证据组合包括游离配体的直接测量、不同蛋白浓度下的全局拟合、构象读出、动力学轨迹、计量测量以及破坏特定位点或界面的突变。

模型比较应先问候选机制对新条件作出什么不同预测。例如 MWC 型群体转换和逐步诱导模型，可能对部分占据中间体、亚基不对称性或突变后的结合曲线作出不同预测；序列能量矩阵则可用未参与拟合的新序列检验。把参数不确定性传播到预测，并用独立条件或正交方法检验，才能判断一个简洁的统计模型是否真正抓住了分子相互作用的物理结构。

## 参考资料与延伸阅读 { #references }

[^physical-biology-textbook]: Phillips R, Kondev J, Theriot J, Garcia H. [*Physical Biology of the Cell*, 2nd ed.](https://www.routledge.com/Physical-Biology-of-the-Cell-2nd-Edition/Phillips-Kondev-Theriot-Garcia/p/book/9780815344506). Garland Science, 2012；Dill KA, Bromberg S. [*Molecular Driving Forces: Statistical Thermodynamics in Biology, Chemistry, Physics, and Nanoscience*, 2nd ed.](https://www.routledge.com/9780815344308). Garland Science, 2010.
[^codata-constants]: Mohr PJ, Newell DB, Taylor BN, Tiesinga E. [CODATA recommended values of the fundamental physical constants: 2022](https://physics.nist.gov/cuu/pdf/JPCRD2022CODATA.pdf). *J Phys Chem Ref Data*. 2025;54:033105. 上述数值由精确的 $k_{\mathrm B}=1.380649\times10^{-23}\ \mathrm{J\,K^{-1}}$ 与 $N_{\mathrm A}=6.02214076\times10^{23}\ \mathrm{mol^{-1}}$ 在 $298\ \mathrm K$ 下换算。
[^mwc-model]: Monod J, Wyman J, Changeux J-P. [On the nature of allosteric transitions: a plausible model](https://doi.org/10.1016/S0022-2836(65)80285-6). *J Mol Biol*. 1965;12:88–118.
[^knf-model]: Koshland DE Jr, Némethy G, Filmer D. [Comparison of experimental binding data and theoretical models in proteins containing subunits](https://doi.org/10.1021/bi00865a047). *Biochemistry*. 1966;5(1):365–385.
[^hill-equation]: Weiss JN. [The Hill equation revisited: uses and misuses](https://doi.org/10.1096/fasebj.11.11.9285481). *FASEB J*. 1997;11(11):835–841.
[^sequence-selection-theory]: Berg OG, von Hippel PH. [Selection of DNA binding sites by regulatory proteins: statistical-mechanical theory and application to operators and promoters](https://doi.org/10.1016/0022-2836(87)90354-8). *J Mol Biol*. 1987;193(4):723–750.
[^sequence-free-energy]: Stormo GD, Fields DS. [Specificity, free energy and information content in protein–DNA interactions](https://doi.org/10.1016/S0968-0004(98)01187-6). *Trends Biochem Sci*. 1998;23(3):109–113.
[^itc-thermodynamics]: Leavitt S, Freire E. [Direct measurement of protein binding energetics by isothermal titration calorimetry](https://doi.org/10.1016/S0959-440X(00)00248-7). *Curr Opin Struct Biol*. 2001;11(5):560–566.
[^spr-kinetics]: Fisher RJ, Fivash M. [Surface plasmon resonance based methods for measuring the kinetics and binding affinities of biomolecular interactions](https://doi.org/10.1016/0958-1669(94)90047-7). *Curr Opin Biotechnol*. 1994;5(4):389–395.
