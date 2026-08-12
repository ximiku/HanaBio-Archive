# 细胞的电活动

[跨膜转运与渗透](membrane_dynamics.md)说明了离子为何会沿电化学势移动；当这些带电粒子通过膜蛋白时，跨膜电流又会改变膜两侧的电势差。细胞由此把持续维持的离子梯度转化为电信号：小幅电位变化可在局部整合，达到再生条件后可形成动作电位，并沿细胞膜远距离传播。各类可兴奋细胞共享这些电学原理；肌肉收缩、心肌特异波形、突触整合和感觉换能的专门机制分别见[肌细胞生理](muscle.md)、[心脏电生理](blood/blood_heart_electrical.md)、[突触传递](../neuro/neuro_synapse.md)和[感觉编码与躯体感觉](../neuro/neuro_sensation.md)。

## 膜电位与跨膜电荷分离 { #membrane-potential }

膜电位按惯例定义为细胞内电势减去细胞外电势：

$$
V_m=\psi_{\mathrm{i}}-\psi_{\mathrm{o}}.
$$

静息时许多动物细胞的 $V_m$ 为负，但数值随细胞类型、发育状态和生理条件而变。膜两侧的主体溶液仍近似电中性；形成几十毫伏电位只需要极少一部分离子在膜邻近区域分离，因而一次动作电位不会耗尽 Na$^+$、K$^+$ 的总体浓度梯度。膜表面固定电荷会影响局部电场和通道性质，却不能单凭“细胞表面带负电”推出跨膜电位。[^membrane-equilibrium]

### 单一离子的平衡电位 { #nernst-potential }

若膜只对离子 $X$ 通透，且没有其他主动过程，在净电化学通量为零时，其平衡电位为

$$
E_X=\frac{RT}{z_XF}\ln\!\left(\frac{a_{X,\mathrm{o}}}{a_{X,\mathrm{i}}}\right).
$$

$z_X$ 是离子价数，$a$ 是活度。以细胞内相对细胞外为电位方向，在 37 ℃ 时可近似写为

$$
E_X\approx\frac{61.5\ \mathrm{mV}}{z_X}
\log_{10}\!\left(\frac{a_{X,\mathrm{o}}}{a_{X,\mathrm{i}}}\right).
$$

价数使同一形式同时适用于阳离子和阴离子，不应把“$60\log([X]_o/[X]_i)$”当作所有离子的通式。$V_m=E_X$ 表示通过该选择性通路的净电流为零；离子仍在两个方向随机通过。偏离平衡电位的差 $V_m-E_X$ 称为该离子的电化学驱动力，在欧姆近似下离子电流写成 $I_X=g_X(V_m-E_X)$。正负号还取决于约定，以下采用向外电流为正。[^membrane-equilibrium]

### 静息膜电位的多离子决定 { #resting-potential }

真实质膜在静息时通常同时对多种离子通透。对单价 Na$^+$、K$^+$、Cl$^-$，在恒定电场和离子独立运动近似下，零净电流电位可写成戈德曼—霍奇金—卡茨方程（Goldman–Hodgkin–Katz equation，GHK 方程）：

$$
\begin{aligned}
V_m&=\frac{RT}{F}\ln\!\left(\frac{N}{D}\right),\\
N&=P_{\mathrm{K}}[\mathrm{K}^+]_o+P_{\mathrm{Na}}[\mathrm{Na}^+]_o+P_{\mathrm{Cl}}[\mathrm{Cl}^-]_i,\\
D&=P_{\mathrm{K}}[\mathrm{K}^+]_i+P_{\mathrm{Na}}[\mathrm{Na}^+]_i+P_{\mathrm{Cl}}[\mathrm{Cl}^-]_o.
\end{aligned}
$$

阴离子的内外浓度位置与阳离子相反。这个式子强调各离子的相对通透性，而不是把真实静息电位归给某一种离子；它也有恒定电场、单价离子和独立通量等适用条件。若各通道在考察范围内近似服从欧姆关系，零总膜电流还可写成电导加权形式

$$
V_m\approx\frac{\sum_X g_XE_X}{\sum_X g_X}.
$$

许多神经元和骨骼肌静息时 K$^+$ 电导占优势，$V_m$ 因而接近 $E_{\mathrm{K}}$，但 Na$^+$、Cl$^-$ 以及细胞类型特异的背景通道会使其偏离。胞质游离 Ca$^{2+}$ 很低、其平衡电位通常很正；静息 Ca$^{2+}$ 电导常较小并不等于 Ca$^{2+}$ 永远不能影响静息电位。Na$^+$/K$^+$-ATPase 的净正电荷外移可直接造成生电效应，更普遍的长期作用则是维持 Na$^+$、K$^+$ 梯度；抑制泵后的即刻电位变化和离子梯度逐渐耗散造成的晚期变化不能混为一谈。[^multi-ion-potential]

| 术语 | 膜电位的数值变化 | 生理含义 |
| --- | --- | --- |
| 极化 | 膜两侧存在稳定电势差 | 静息动物细胞常为内负，但“极化”本身不规定唯一数值 |
| 去极化 | $V_m$ 向较正方向移动 | 不要求越过 0 mV，也不自动等同于动作电位 |
| 超极化 | $V_m$ 向较负方向移动 | 可由 K$^+$ 外流、Cl$^-$ 内流或泵电流等不同机制形成 |
| 复极化 | 电位从去极化状态返回静息附近 | 描述方向，不指定由哪一种离子完成 |
| 超射 | 动作电位期间 $V_m>0$ | 只能由跨膜记录直接判定，胞外波形不等同于 $V_m$ |
| 后去极化／后超极化 | 主事件后分别偏向较正／较负 | 波形、命名和机制依细胞类型及记录约定而变 |

用“数值变得更正或更负”描述电位，可以避免“静息电位增大”究竟指绝对值增大还是代数值增大的歧义。

## 离子电导与膜电容的并联电路 { #membrane-circuit }

脂双层隔开导电溶液，能够在两侧积累少量异号电荷，因而表现为电容；开放的离子通道则提供并联的电导路径。对近似等电位的一小片膜，若把向细胞内注入的电流记为正，可写出电流平衡：

$$
C_m\frac{\mathrm{d}V_m}{\mathrm{d}t}
=I_{\mathrm{inj}}-\sum_X g_X(V_m-E_X).
$$

注入电流起初主要给膜电容充电，电位不会瞬时跳到稳态；随后更多电流经通道泄漏。单个通道的开放是随机事件，宏观电导 $g_X$ 则综合了通道数目、单通道电导和开放概率。Hodgkin–Huxley 模型正是在这个等效电路上加入电压和时间依赖的 Na$^+$、K$^+$ 电导。[^membrane-circuit]

### 时间常数与长度常数 { #cable-properties }

在简单的等电位电阻—电容（resistance–capacitance，RC）模型中，电位接近新稳态的快慢由

$$
\tau=R_mC_m
$$

决定。一个时间常数后，变化完成终值差的 $1-e^{-1}$，约 63%；数个时间常数后才接近稳态。较大的 $R_m$ 或 $C_m$ 都会延长局部充放电过程，但神经元和肌细胞不是单一等电位球体，胞质中的轴向电阻还决定电流能传多远。

对均一圆柱电缆，按单位长度定义膜电阻 $r_m$ 和轴向内阻 $r_i$ 时，长度常数为

$$
\lambda=\sqrt{\frac{r_m}{r_i}}.
$$

在理想被动电缆中，距刺激点一个 $\lambda$ 后的稳态电位变化降为起点的 $e^{-1}$。增大轴突直径会明显降低轴向电阻，使局部电流传得更远；髓鞘提高跨膜电阻并降低单位长度膜电容，既减少漏电，也减少给结间膜充电的负担。真实分支神经元的几何、边界、通道分布和频率响应更复杂，因此 $\tau$、$\lambda$ 是理解尺度的参数，不是对任意细胞形态都精确的单一常数。[^membrane-circuit]

### 电紧张响应与级量电位 { #graded-potentials }

在通道电导不随刺激改变的线性范围内，外加电流引起的膜电位变化由被动 RC 与电缆性质决定，称电紧张响应；它随距离衰减，也随时间逐渐建立和消退。更广义的局部或级量电位还可由配体门控、机械门控等通道开放造成，其幅度和极性取决于通道电导、反转电位与当时的 $V_m$。接近阈值时，少量电压门控 Na$^+$ 通道也可能产生主动但尚未自我再生的局部响应。[^osm-action-potential]

这些局部信号没有固定振幅，可发生去极化或超极化；不同时间到达的电位可时间总和，不同膜区产生的电位可空间总和。它们沿膜衰减，却能在触发区汇合并改变动作电位发生概率。终板电位、突触后电位及感受器／发生器电位分别是神经肌肉接头、突触和感觉系统中的具体实例，不宜把所有级量电位都说成“阈下动作电位”。

## 动作电位的再生机制 { #action-potential }

动作电位不是达到某个固定电压后由开关机械触发的预制波形，而是电压门控通道动力学形成的再生过程。去极化使内向电流增加，内向电流又进一步去极化；当这种正反馈超过漏电和外向电流的恢复作用时，膜电位迅速离开静息状态。所谓阈值就是系统从回到静息转向再生发放的动态边界，会随通道可用性、先前电位、刺激速度、温度和离子环境改变。

### 经典轴突动作电位的电导序列 { #action-potential-phases }

枪乌贼巨轴突的电压钳实验显示，快速而短暂的 Na$^+$ 电导升高之后，是较慢、持续较久的 K$^+$ 电导升高。Hodgkin 与 Huxley 用电压依赖的激活和失活变量定量重建了这一波形及其传导，这是理解兴奋性的经典模型，而不是所有动作电位的唯一离子配方。[^hodgkin-huxley]

| 阶段 | 经典快速 Na$^+$／延迟 K$^+$ 轴突中的主要变化 | 电位结果 |
| --- | --- | --- |
| 上升支 | 可用的电压门控 Na$^+$ 通道（Na$_\mathrm{V}$）迅速激活，Na$^+$ 内向电流形成再生性正反馈 | 快速去极化并可越过 0 mV，趋近但通常达不到 $E_{\mathrm{Na}}$ |
| 峰值附近 | Na$_\mathrm{V}$ 通道逐渐失活，延迟整流 K$^+$ 通道开放增多 | 净内向电流终止，电位转向复极化 |
| 下降支 | K$^+$ 外向电流占优势，Na$^+$ 电导仍低 | $V_m$ 返回静息方向并趋向 $E_{\mathrm{K}}$ |
| 后超极化与恢复 | 部分 K$^+$ 通道关闭较慢，Na$_\mathrm{V}$ 通道由失活态恢复为可激活闭合态 | 电位可短暂比静息更负，随后回到稳态 |

快速 Na$_\mathrm{V}$ 通道可概括为“可激活的闭合态→开放态→失活态→恢复后的闭合态”，但激活与失活并非两个实体小门按固定顺序碰撞。结构和状态模型比“激活门／失活门都开或都关”的字面图景更准确。许多平滑肌、内分泌细胞、心肌和某些神经元还使用 Ca$_\mathrm{V}$、不同 K$^+$ 通道、HCN 或其他电导塑造波形；“慢通道动作电位”不等于存在一种通用的慢 Na$^+$ 通道。[^action-potential-diversity]

### 不应性与刺激强度—时间关系 { #refractoriness }

在经典轴突中，绝对不应期主要来自大量 Na$_\mathrm{V}$ 通道尚处于失活态，无论刺激多强都不能再生完整动作电位。随后通道逐步恢复，但残余 K$^+$ 电导和后超极化使新的发放需要更强刺激，形成相对不应期。不同细胞还可出现超常或低常兴奋阶段，但这些阶段与后电位的对应关系并非所有组织共有，心肌的有效不应期也需结合其平台期电流另行讨论。

刺激是否引发动作电位同时取决于幅度、持续时间和变化速度。强度—时间曲线用基强度（持续很久时仍能兴奋的最小电流）与时值（两倍基强度所需的最短有效时间）概括组织兴奋性；缓慢上升的刺激还可能因 Na$_\mathrm{V}$ 失活和 K$^+$ 电导募集而发生适应。因而“阈强度”“时间阈”和“阈电位”都必须连同刺激波形、位置与膜状态说明。[^refractory-period]

### 全或无与信息编码 { #all-or-none-coding }

对给定膜区和当时状态，超过再生边界后的单个动作电位幅度相对稳定，不随刺激继续增强而成比例变大，这就是局部意义上的全或无。动作电位沿途由相邻膜重新生成，因而不会像被动电位那样逐渐缩小；同一膜区的动作电位也不会像级量电位那样简单相加。

这不意味着刺激强度只能表示“有或无”。单个细胞可以用发放频率、首发潜伏期、脉冲间隔和群发模式编码；神经束和感觉器官还可通过募集更多纤维、改变群体同步性及选择不同通路编码。神经干的复合动作电位是许多轴突胞外信号的叠加，刺激增强时会募集更多不同阈值的纤维，所以其振幅不服从单纤维的全或无，并可因传导速度差异随距离出现时间分散。

## 动作电位的局部电流传播 { #action-potential-propagation }

一个膜区去极化后，轴内正电荷流向前方尚未兴奋的膜，并经细胞外液构成局部回路；前方膜达到再生条件后产生新的动作电位。无髓轴突因此沿连续膜区逐段更新信号。若在轴突中段进行人工刺激，局部电流可向两端传播并产生双向动作电位；生理信号通常从特定触发区向轴突末梢传递，是因为起始位置具有结构极性，而且刚发放过的后方膜处于不应期。不能把不应期解释为轴突在任何实验条件下都绝对禁止逆向传播。[^action-potential-propagation]

轴突越粗，单位长度轴向电阻越低，局部电流更容易使远处膜去极化，传导通常更快。无脊椎动物可借巨轴突取得高速，脊椎动物则大量采用髓鞘：结间段以被动方式快速充电下一郎飞结，富集的电压门控 Na$^+$ 通道在结处再生动作电位。所谓跳跃传导不是电流瞬移，而是结间电紧张扩布与结上再生的交替。

髓鞘受损会增加结间膜的漏电与有效电容充电负担，并使到达下一结的去极化不足，造成传导减慢或阻滞。多发性硬化累及中枢髓鞘；吉兰—巴雷综合征（Guillain–Barré syndrome，GBS）主要累及周围神经，常见亚型损伤周围髓鞘，也有以轴突损伤为主的亚型。疾病机制远比一项电缆参数复杂，这里只说明与传导直接相关的环节。[^demyelination]

## 电生理记录中的电位与电流 { #electrophysiology }

### 胞内记录与胞外记录 { #intracellular-extracellular-recording }

尖锐微电极或全细胞膜片钳以细胞外为参考，可以直接记录 $V_m$，因此能看到静息电位、去极化、超射和复极化。胞外电极记录的则是附近跨膜电流在体积导体中产生的电势差；波形的极性、相数和振幅取决于信号传播方向、电极位置、参考电极、组织几何与同步性，不能把“双相、小振幅、无超射”当成胞外记录的无条件定义。[^electrophysiology-recording]

损伤使局部膜屏障和离子梯度崩溃时，完整区与受损区之间会形成组织电流，胞外电极可记录所谓损伤电位；它来源于受损区与完整区的跨膜状态差异，却不等同于“损伤部位自身就是一个正常跨膜电位”。诱发电位和复合动作电位同样是群体与体积导体信号，必须结合时间、空间和电极构型解释。

### 电压钳与膜片钳 { #voltage-patch-clamp }

电压钳使用负反馈注入电流，把膜电位维持在实验设定值；反馈电流在符号相反的意义上反映跨膜电流。通过改变电压、离子组成或选择性阻断剂，可以分离电压依赖和时间依赖的离子电流。它不是简单“补入与离子流一样多的电流”：细胞几何会造成空间钳制误差，串联电阻、漏电和电容瞬变也需要校正。Hodgkin、Huxley 等人的枪乌贼巨轴突电压钳工作奠定了动作电位离子理论。[^hodgkin-huxley]

膜片钳让玻璃微管与一小片膜形成高阻封接，可在 cell-attached 等构型中分辨单通道的离散开放事件，也可破膜形成 whole-cell 构型记录全细胞电流或膜电位。被固定的是膜片或细胞的电压条件，测得的是通道电流；不能把它定义为“固定一个离子通道自身的电位”。Neher 与 Sakmann 因单离子通道功能研究获得 1991 年诺贝尔生理学或医学奖。[^patch-clamp]

## 通道阻断剂的机制判读 { #channel-blockers }

河豚毒素（tetrodotoxin，TTX）可从胞外阻断许多 Na$_\mathrm{V}$ 亚型的孔道，但 Na$_\mathrm{V}$1.5、Na$_\mathrm{V}$1.8 和 Na$_\mathrm{V}$1.9 等亚型敏感性明显较低；因此“TTX 阻断所有动作电位”并不成立。四乙铵（tetraethylammonium，TEA）、4-氨基吡啶及不同 Ca$^{2+}$ 通道阻断剂也具有浓度、亚型与组织依赖性，脱离实验条件罗列“某离子通道的唯一阻断剂”会掩盖真正证据。[^channel-pharmacology]

局部麻醉药主要通过电压门控 Na$^+$ 通道抑制冲动产生与传导，并常表现出状态或使用依赖性：反复去极化使开放、失活状态被更多占据，阻断随之增强。实际感觉与运动阻滞顺序还受纤维直径、髓鞘、放电频率、组织 pH、药物理化性质、剂量和给药部位影响，不宜背诵为固定普适序列。全身麻醉涉及中枢多种受体、通道和网络效应，也不能写成同一种外周 Na$_\mathrm{V}$ 阻断的剂量升级版。[^channel-pharmacology]

## 参考资料与延伸阅读 { #references }

- Purves D, Augustine GJ, Fitzpatrick D, et al. [The Ionic Basis of Action Potentials](https://www.ncbi.nlm.nih.gov/books/NBK10897/), [Voltage-Dependent Membrane Permeability](https://www.ncbi.nlm.nih.gov/books/NBK11003/) 与 [Long-Distance Signaling by Means of Action Potentials](https://www.ncbi.nlm.nih.gov/books/NBK11107/). *Neuroscience*, 2nd ed.
- Siegel GJ, Agranoff BW, Albers RW, et al. [The Ionic Hypothesis and Rules of Ionic Electricity](https://www.ncbi.nlm.nih.gov/books/NBK28117/). *Basic Neurochemistry*, 6th ed.
- Alberts B, Johnson A, Lewis J, et al. [Ion Channels and the Electrical Properties of Membranes](https://www.ncbi.nlm.nih.gov/books/NBK26910/). *Molecular Biology of the Cell*, 4th ed.
- Hodgkin AL, Huxley AF. [A quantitative description of membrane current and its application to conduction and excitation in nerve](https://pmc.ncbi.nlm.nih.gov/articles/PMC1392413/). *J Physiol*. 1952;117:500–544.
- IUPHAR/BPS Guide to PHARMACOLOGY. [Voltage-gated ion channels](https://www.guidetopharmacology.org/GRAC/FamilyDisplayForward?familyId=696)；[Voltage-gated sodium channels](https://www.guidetopharmacology.org/GRAC/FamilyIntroductionForward?familyId=82).
- Hall JE, Hall ME. [Guyton and Hall Textbook of Medical Physiology, 15th ed.](https://evolve.elsevier.com/cs/product/9780443111013?role=student). Elsevier, 2025.
- Boron WF, Boulpaep EL. [Medical Physiology, 3rd ed.](https://evolve.elsevier.com/cs/product/9781455743773?role=faculty). Elsevier, 2016.

[^membrane-equilibrium]: 膜电位方向、单离子平衡电位和能斯特方程参见 NCBI Bookshelf 的 [The Ionic Hypothesis and Rules of Ionic Electricity](https://www.ncbi.nlm.nih.gov/books/NBK28117/)。
[^multi-ion-potential]: 多离子零电流稳态、Goldman–Hodgkin–Katz 方程及离子泵维持梯度的边界参见 [The Ionic Hypothesis and Rules of Ionic Electricity](https://www.ncbi.nlm.nih.gov/books/NBK28117/) 与 [Ion Channels and the Electrical Properties of Membranes](https://www.ncbi.nlm.nih.gov/books/NBK26910/)。
[^membrane-circuit]: 并联电容—电导模型、电缆性质和动作电位传播的物理基础参见 NCBI Bookshelf 的 [Electrically Excitable Cells](https://www.ncbi.nlm.nih.gov/books/NBK28091/)；方程和术语与该教材章节交叉核验。
[^osm-action-potential]: 被动响应、局部响应、动作电位与传导的组织线索实质性改编自 osm.bio《[第五章 动作电位的生成和转导](https://osm.bio/index.php?title=%E7%AC%AC%E4%BA%94%E7%AB%A0_%E5%8A%A8%E4%BD%9C%E7%94%B5%E4%BD%8D%E7%9A%84%E7%94%9F%E6%88%90%E5%92%8C%E8%BD%AC%E5%AF%BC&oldid=11534)》（固定版本 oldid=11534；贡献者：Sofia、长河；[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)）；具体机制另以 NCBI 教材、经典论文和 IUPHAR/BPS 数据库交叉核验。
[^hodgkin-huxley]: 经典电压钳证据与定量模型见 Hodgkin 与 Huxley 的原始论文 [A quantitative description of membrane current and its application to conduction and excitation in nerve](https://pmc.ncbi.nlm.nih.gov/articles/PMC1392413/)；其历史意义亦见 [1963 年诺贝尔奖颁奖演说](https://www.nobelprize.org/prizes/medicine/1963/ceremony-speech/)。
[^action-potential-diversity]: 电压门控通道家族及“voltage-gated”总类中的机制例外参见 IUPHAR/BPS [Voltage-gated ion channels](https://www.guidetopharmacology.org/GRAC/FamilyDisplayForward?familyId=696)。
[^refractory-period]: 经典轴突的不应期、传导和髓鞘化机制参见 NCBI Bookshelf 的 [Voltage-Dependent Membrane Permeability](https://www.ncbi.nlm.nih.gov/books/NBK11003/)；基强度、时值及其随刺激构型改变的边界参见 [Strength–duration relationship for intra- versus extracellular stimulation with microelectrodes](https://pmc.ncbi.nlm.nih.gov/articles/PMC3401985/)。
[^action-potential-propagation]: 动作电位以局部回路电流沿途再生、而被动电位随距离衰减的证据与解释参见 [Long-Distance Signaling by Means of Action Potentials](https://www.ncbi.nlm.nih.gov/books/NBK11107/)。
[^demyelination]: 中枢多发性硬化和周围 Guillain–Barré 综合征的髓鞘／轴突边界分别核对美国 NINDS 的 [Multiple Sclerosis](https://www.ninds.nih.gov/health-information/disorders/multiple-sclerosis-ms) 与 [Guillain–Barré Syndrome](https://www.ninds.nih.gov/health-information/disorders/guillain-barre-syndrome) 页面。
[^electrophysiology-recording]: 胞内膜电位、胞外场电位与复合信号的区别参见 NCBI Bookshelf 的 [The Ionic Basis of Action Potentials](https://www.ncbi.nlm.nih.gov/books/NBK10897/) 和 [Voltage-Dependent Membrane Permeability](https://www.ncbi.nlm.nih.gov/books/NBK11003/)。
[^patch-clamp]: 单通道电流记录、膜片钳原理及 Neher、Sakmann 的贡献参见 NobelPrize.org 的 [1991 年诺贝尔生理学或医学奖新闻稿](https://www.nobelprize.org/prizes/medicine/1991/press-release/)。
[^channel-pharmacology]: Na$_\mathrm{V}$ 亚型的 TTX 敏感性和局部麻醉药的使用依赖性参见 IUPHAR/BPS [Voltage-gated sodium channels](https://www.guidetopharmacology.org/GRAC/FamilyIntroductionForward?familyId=82)。
