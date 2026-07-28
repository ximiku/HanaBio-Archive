# 生物能学

活细胞不创造能量，而是在不同形式之间转换能量。营养物氧化、光吸收或无机物氧化提供驱动力；细胞再把其中一部分保存为 ATP 等核苷三磷酸、还原型电子载体、可转移的化学基团和跨膜电化学梯度，用于合成、运输、运动与信息处理。其余能量以热等形式散入环境。生物能学研究的正是这些转换在热力学上能否发生、能够提供多大驱动力，以及细胞怎样把有利过程与不利过程耦联起来。

本页建立阅读具体产能通路所需的定量语言。代谢物池、稳态与通量控制见[代谢总论](metabolism.md)，NAD、FAD、辅酶 A 等载体的反应化学见[维生素与辅酶](vitamin_and_coenzyme.md)，呼吸链怎样把氧化还原自由能转成质子梯度并驱动 ATP 合成，见[电子传递与氧化磷酸化](oxp.md)。

## Gibbs 能刻画恒温恒压下的反应驱动力 { #gibbs-energy }

对通常近似处于恒温、恒压的生物化学体系，反应前后 Gibbs 能之差可写为

$$
\Delta_rG=\Delta_rH-T\Delta_rS.
$$

$\Delta_rH$ 表示反应焓变，包含成键、溶剂化等过程对体系能量的贡献；$\Delta_rS$ 表示体系熵变，$T$ 为热力学温度。$\Delta_rG<0$ 表示按当前组成正向变化在热力学上有利，$\Delta_rG>0$ 表示逆向有利，$\Delta_rG=0$ 则是该反应达到平衡的条件。这里判断的是指定方向和指定状态之间的差值，不是给某个分子贴上“含有多少可用能量”的固定标签。[^gibbs-definition]

热力学方向与反应速率是不同问题。一个 $\Delta_rG$ 很负的反应仍可能因活化势垒很高而几乎不发生；酶通过稳定过渡态降低势垒，使正、逆反应都更快，却不改变反应物与产物之间的 $\Delta_rG$，也不改变平衡常数。原素材所说“热力学不能预测实际发生速率”保留了这个边界，但更准确的表述是：热力学给出平衡位置和方向判据，动力学给出到达该状态的路径与时间尺度。[^thermodynamics-kinetics]

| 量 | 回答的问题 | 不能单独推出的结论 |
| --- | --- | --- |
| $\Delta_rG$ | 当前条件下净变化朝哪个方向有利 | 反应会多快发生 |
| 活化 Gibbs 能 $\Delta G^\ddagger$ | 反应跨越过渡态有多困难 | 反应平衡偏向哪一侧 |
| 平衡常数 $K$ | 平衡时产物与反应物的活度关系 | 体系当前已经达到平衡 |

## 生化标准转化状态与细胞实际条件 { #biochemical-standard-state }

对反应 $\sum_i\nu_iA_i=0$，实际反应 Gibbs 能由标准项与反应商共同决定：

$$
\Delta_rG=\Delta_rG^{\circ\prime}+RT\ln Q,
\qquad
Q=\prod_i a_i^{\nu_i}.
$$

$a_i$ 是无量纲活度，稀溶液中常用浓度近似；$\nu_i$ 对产物取正、反应物取负。带撇号的 $\Delta_rG^{\circ\prime}$ 是生化标准转化 Gibbs 能：在指定温度、压力、pH，必要时还包括 pMg 和离子强度的条件下，把同一生化反应物的不同质子化或金属结合形式合并处理。它不同于把所有化学物种都置于 1 mol·L$^{-1}$、包括 H$^+$ 也为 1 mol·L$^{-1}$ 的普通化学标准态。[^biochemical-thermodynamics]

“标准”不是“生理”。细胞中的 ATP、ADP、P$_i$ 和 Mg$^{2+}$ 浓度远离统一的 1 mol·L$^{-1}$，pH、温度和离子强度也因区室与状态而异。因此，标准值适合比较反应和建立参照，判断细胞内方向则必须把实际反应商代回公式。若两个区室不能自由交换某种代谢物，还不能用整细胞平均浓度替代各自的局部活度。

达到平衡时 $\Delta_rG=0$、$Q=K'$，于是

$$
\Delta_rG^{\circ\prime}=-RT\ln K'.
$$

这个关系把热力学数据与平衡测量连在一起。它也解释了为何一个标准状态下不利的反应，在细胞通过持续供应底物、移走产物或改变 pH 后可以正向进行。

## 反应耦联依靠总自由能与共同化学路径 { #energetic-coupling }

若干反应在同一条件下按化学计量相加，中间物相消后，总反应的 $\Delta_rG$ 等于各步之和。细胞利用这一可加性，把不利反应与 ATP 水解、焦磷酸水解、还原反应或离子梯度耗散连接起来。例如，游离葡萄糖与无机磷酸直接生成葡萄糖-6-磷酸的标准转化 Gibbs 能约为 $+13.8$ kJ·mol$^{-1}$，ATP 水解为 ADP 与 P$_i$ 约为 $-30.5$ kJ·mol$^{-1}$；两式相加得到己糖激酶反应：

$$
\begin{aligned}
\mathrm{glucose+ATP}
&\longrightarrow{}\\
&\mathrm{glucose\text{-}6\text{-}phosphate+ADP},
\end{aligned}
$$

其 $\Delta_rG^{\circ\prime}$ 约为 $-16.7$ kJ·mol$^{-1}$。真正的耦联不是在溶液中让一个放能反应“补贴”另一个反应，而是酶让 ATP 的磷酰基直接转移给葡萄糖，使二者共享同一条反应路径，避免能量只以热散失。[^cellular-coupling]

同理，把葡萄糖彻底氧化的标准自由能与假定 ATP 数量相乘所得数值直接比较，会混合不同层次的条件。旧材料中的“每摩尔葡萄糖释放 2870 kJ，其中 977 kJ 进入 ATP”来自把某个 ATP 产量假设乘以 $30.5$ kJ·mol$^{-1}$ 的标准水解值；实际 ATP 产量会受穿梭、质子漏、转运和 P/O 比影响，细胞内 ATP 水解的 $\Delta_rG$ 又常比标准值更负。能量保存效率必须针对明确的反应计量、区室和实际状态计算，不能作为跨细胞的固定百分比。[^glucose-energy-accounting]

## ATP 水解的自由能不来自“断键放能” { #atp-hydrolysis }

ATP 水解为 ADP 与 P$_i$ 的简化生化反应是

$$
\mathrm{ATP+H_2O\longrightarrow ADP+P_i}.
$$

任何化学键的断裂本身都需要输入能量；IUPAC 所定义的键解离能正是断开指定键所需的焓。ATP 水解之所以整体放能，是因为断裂和成键、质子转移、离子化与溶剂重排共同完成后，产物的 Gibbs 能低于反应物。常见贡献包括 ATP 上负电荷排斥得到缓解、P$_i$ 与 ADP 的共振和水合更有利，以及产物在指定 pH 下进一步电离。Mg$^{2+}$ 与 ATP、ADP 的结合差异也会改变数值。[^bond-dissociation][^atp-hydrolysis-conditions]

!!! warning "“高能键”是历史简写，不是断裂即放能的键"

    波浪号曾用于标记水解或基团转移具有较大负 $\Delta_rG^{\circ\prime}$ 的连接。它描述的是完整反应的基团转移势，不是某根键内部储藏着释放按钮。判断一个供体能否驱动另一反应，应比较同一条件下的完整反应，而不是只看待断裂键的类型。

ATP 的“末端”与“近端”磷酸键也不能脱离产物来排定固有能量。ATP→ADP＋P$_i$ 是末端磷酰基转移；ATP→AMP＋PP$_i$ 则移走焦磷酰基，标准转化 Gibbs 能约为 $-45.6$ kJ·mol$^{-1}$，若 PP$_i$ 随后水解，总驱动力还会增加。两条路线用途不同，差值属于完整反应及产物稳定性，而不是证明某一根键“天生含能更多”。

## 磷酰基转移势形成可双向利用的层级 { #phosphoryl-transfer-potential }

磷酰基转移势常以供体水解的负标准转化 Gibbs 能比较：水解越有利，向其他受体转移磷酰基的潜力通常越高。数值依温度、pH、Mg$^{2+}$ 与离子强度而变，下面只列常用参照条件下的近似值。[^group-transfer-potential]

| 磷酸化合物 | 水解 $\Delta_rG^{\circ\prime}$ 约值 | 与 ATP 的关系和结构依据 |
| --- | ---: | --- |
| 磷酸烯醇式丙酮酸（PEP） | $-61.9$ kJ·mol$^{-1}$ | 产物烯醇式丙酮酸可互变为更稳定的酮式；可把磷酰基转给 ADP |
| 1,3-二磷酸甘油酸 | $-49.4$ kJ·mol$^{-1}$ | C1 为酰基磷酸，能在糖酵解中生成 ATP；并非“没有高能连接” |
| 乙酰磷酸、磷酸肌酸 | 各约 $-43.1$ kJ·mol$^{-1}$ | 均高于 ATP，可在相应激酶反应中向 ADP 供磷酰基 |
| ATP→ADP＋P$_i$ | $-30.5$ kJ·mol$^{-1}$ | 位于常见供体层级中部，既能被更高转移势供体再生，也能给低势受体磷酸化 |
| 葡萄糖-6-磷酸 | $-13.8$ kJ·mol$^{-1}$ | 磷酸单酯水解势较低，ATP 向葡萄糖转移磷酰基在标准条件下有利 |

ATP 位于层级中部具有重要意义。PEP、1,3-二磷酸甘油酸和某些酰基磷酸可通过底物水平磷酸化生成 ATP；ATP 又能磷酸化葡萄糖、甘油和蛋白质等较低转移势受体。若 ATP 处在最高端，它很难由代谢中间物再生；若过低，又难以驱动广泛的磷酸化反应。

氨甲酰磷酸、酰基腺苷酸等也属于被 ATP 预先活化的中间物，但其意义须按实际转移基团判断。氨甲酰磷酸参与氨甲酰基转移，氨酰-tRNA 合成中的氨酰-AMP 则把氨基酸羧基活化后转给 tRNA；不能仅凭结构中出现磷酸就把所有分子放进同一种“高能磷酸键”分类。

## 核苷三磷酸通过不同断裂方式执行化学工作 { #nucleoside-triphosphates }

ATP 并不是唯一可用的核苷三磷酸。GTP、UTP 和 CTP 的磷酸酐化学与 ATP 相近，细胞通过酶的底物选择把它们分配给不同任务：GTP 常参与翻译和分子开关，UTP 常用于糖核苷酸形成，CTP 常用于磷脂前体活化。核苷二磷酸激酶等反应又能在不同 NTP 池之间转移末端磷酰基，因此“ATP 是能量货币”强调的是网络中心性和高周转，不表示其他 NTP 没有相近的水解驱动力。

ATP→ADP 通常发生磷酰基转移，适合激酶、马达蛋白与离子泵等循环；ATP→AMP＋PP$_i$ 相当于消耗两个磷酸酐当量，常见于核酸连接、脂肪酸活化和氨酰-tRNA 合成。生成的 PP$_i$ 被无机焦磷酸酶水解，可把总体反应进一步拉向产物侧。把两条路线都简写为“消耗一个 ATP”会低估其能量与计量成本。

## 活化载体转移的不只有磷酰基 { #activated-group-carriers }

细胞还利用硫酯、锍离子、核苷酸糖和硫酸腺苷等形式携带可转移基团。这些分子之所以“活化”，是因为相应酶能把特定基团从供体转给受体，并以有利的后续产物或耦联反应推动过程；它们不是彼此等价的长期储能物。[^activated-carriers]

| 活化载体 | 主要转移对象 | 化学与分类边界 |
| --- | --- | --- |
| 乙酰 CoA 等酰基 CoA | 乙酰基或其他酰基 | 酰基与 CoA 硫原子形成硫酯；水解或酰基转移有利 |
| S-腺苷甲硫氨酸（SAM） | 甲基及某些自由基／氨丙基单元 | 正电锍中心使相邻取代基易于转移；不宜称作普通“甲硫键储能” |
| UDP-葡萄糖等核苷酸糖 | 糖基 | 离去基团和酶识别共同支持糖苷键合成；不同糖基常配不同核苷酸载体 |
| 3′-磷酸腺苷-5′-磷酰硫酸（PAPS） | 硫酸基 | 是硫酸化反应的硫酸基供体，不含硫酯，不能与乙酰 CoA 归为同一“硫酯键型” |

这些载体把“能量传递”与“物质转移”合在同一个分子事件中。乙酰 CoA 不只是释放某个数值的自由能，而是把指定酰基带到受体；SAM 和 PAPS 也分别携带甲基与硫酸基。因而，基团转移势比笼统的“高能化合物”更能说明它们在代谢中的作用。

## 氧化还原势把电子亲和力换算为自由能 { #redox-potential }

氧化还原半反应通常统一写成还原方向：

$$
\mathrm{Ox}+ne^-\rightleftharpoons\mathrm{Red}.
$$

还原电势 $E$ 越正，氧化态接受电子的倾向越强。把电子供体半反应反向后与受体半反应相加，电势差按

$$
\Delta E=E_{\mathrm{acceptor}}-E_{\mathrm{donor}}
$$

计算；转移 $n$ 个电子时，

$$
\Delta_rG=-nF\Delta E,
$$

其中 $F$ 为法拉第常数。$\Delta E>0$ 因而对应电子转移的 $\Delta_rG<0$。标准转化还原电势 $E^{\circ\prime}$ 同样固定 pH 等条件，实际电势须用 Nernst 方程依据氧化态与还原态活度修正。[^redox-potential]

以标准转化值为参照，NAD$^+$/NADH 约为 $-0.32$ V，O$_2$/H$_2$O 约为 $+0.82$ V；两个电子从 NADH 流向氧时，$\Delta E^{\circ\prime}$ 约为 $1.14$ V，对应约 $-220$ kJ·mol$^{-1}$ 的自由能变化。呼吸链不让这部分驱动力一次性变成热，而是分段传递电子并把一部分自由能保存为跨膜质子梯度。具体电子载体、复合体和化学计量由[电子传递与氧化磷酸化](oxp.md)展开。

## 跨膜电化学梯度也是可耦联的能量形式 { #electrochemical-gradients }

带电溶质跨膜移动同时受到浓度差和电势差影响。把物质从一侧移到另一侧的摩尔电化学势差可写为

$$
\Delta\tilde{\mu}=RT\ln\frac{a_2}{a_1}+zF\Delta\psi,
$$

$z$ 是离子电荷数，$\Delta\psi$ 是终点相对起点的电势差。对 H$^+$，浓度项可用 $\Delta\mathrm{pH}$ 表示，膜电势与 pH 梯度共同组成质子动力势。对 Na$^+$、K$^+$ 等离子也有相同的电化学记账，只是具体转运蛋白和耦联离子不同。[^electrochemical-potential]

离子顺梯度移动可驱动 ATP 合成、溶质同向或反向转运、鞭毛旋转等过程；ATP 水解反过来也能驱动泵建立梯度。方向取决于总电化学势，而不是只看膜内外哪一侧“浓度高”。这使膜上能量转换与溶液中的化学耦联服从同一原则：把各项自由能按明确方向相加，总和为负时整体过程才在热力学上有利。

## 磷酸原与多聚磷酸缓冲不同尺度的需求 { #energy-buffers }

ATP 池通常周转很快，并不适合作为大量、长期燃料储库。脊椎动物肌肉、脑等组织可由肌酸激酶反应

$$
\begin{aligned}
\mathrm{phosphocreatine+ADP}
&\rightleftharpoons{}\\
&\mathrm{creatine+ATP}
\end{aligned}
$$

在 ATP 消耗突然增加时迅速再生 ATP，并在产能位置与用能位置之间传递磷酰基；固定 pH 的生化方程中省略了随反应方向交换的 H$^+$。许多无脊椎动物和部分其他生物使用精氨酸激酶—磷酸精氨酸系统；生物界还存在其他磷酸原，不能把“脊椎动物只有磷酸肌酸、无脊椎动物只有磷酸精氨酸”当作没有例外的分类。它们主要是短时和局部的 ATP 缓冲，而不是替代糖原或三酰甘油的长期能量储存。[^phosphagen-systems]

无机多聚磷酸由数个至数百个磷酸残基以磷酸酐连接，广布于细菌、古菌和真核生物。微生物的多聚磷酸激酶可在核苷酸与 polyP 之间转移磷酰基，某些体系可据此再生 NTP；但 polyP 还参与磷酸与金属离子稳态、应激、蛋白质稳态和细胞结构。把它只写成“微生物储能物质”既忽略其跨生命域分布，也忽略合成 polyP 本身常消耗 ATP、其主要生理意义随物种和状态而变。[^polyphosphate]

## 生物能学计算必须保留反应与条件 { #thermodynamic-accounting }

自由能数值只有连同反应方向和条件才可解释。比较两个来源时，首先要确认它们写的是同一净反应，例如 ATP→ADP＋P$_i$ 不能与 ATP→AMP＋PP$_i$ 混用；随后核对温度、pH、Mg$^{2+}$、离子强度与标准态定义。进入细胞语境后，还要给出反应物和产物的局部活度或合理近似，并把共同区室中的耦联步骤按化学计量相加。

最后才讨论生理意义。$\Delta_rG$ 说明当前方向的驱动力，不能代替速率、通量或控制系数；某个反应有较大负值，也不表示细胞能把全部自由能回收到 ATP。酶的动力学、膜泄漏、旁路反应、分子扩散和维持稳态的成本都会影响实际功率与效率。把这些层次分开，才能从“ATP 提供能量”的简写走向可检验的能量账本。

## 参考资料与延伸阅读

- IUBMB, [Recommendations for Terminology and Databases for Biochemical Thermodynamics](https://iubmb.qmul.ac.uk/thermod2/)。
- Alberts, B. et al., [Catalysis and the Use of Energy by Cells](https://www.ncbi.nlm.nih.gov/books/NBK26838/). *Molecular Biology of the Cell*。
- Cooper, G. M., [Metabolic Energy](https://www.ncbi.nlm.nih.gov/books/NBK9903/). *The Cell: A Molecular Approach*。
- [Energy-Rich Molecules and Group Transfer Potentials in Energetic Coupling Reactions](https://pmc.ncbi.nlm.nih.gov/articles/PMC12843986/)。
- [Quantitative analysis of mitochondrial ATP synthesis](https://pmc.ncbi.nlm.nih.gov/articles/PMC8434986/)。
- Alberts, B. et al., [Electron-Transport Chains and Their Proton Pumps](https://www.ncbi.nlm.nih.gov/books/NBK26904/). *Molecular Biology of the Cell*。

[^gibbs-definition]: IUPAC Gold Book, [Gibbs energy](https://goldbook.iupac.org/terms/view/G02629)。Gibbs 能定义为焓减去热力学温度与熵的乘积；正文用反应前后的差值 $\Delta_rG$ 讨论方向。
[^thermodynamics-kinetics]: [Metabolic Energy](https://www.ncbi.nlm.nih.gov/books/NBK9903/) 与 [Catalysis and the Use of Energy by Cells](https://www.ncbi.nlm.nih.gov/books/NBK26838/) 分别说明热力学方向、活化势垒与酶催化的分工。
[^biochemical-thermodynamics]: IUBMB, [Recommendations for Terminology and Databases for Biochemical Thermodynamics](https://iubmb.qmul.ac.uk/thermod2/)。该建议区分具体离子物种的化学反应与固定 pH、pMg 等条件下的生化反应，并规范 $\Delta_rG^{\circ\prime}$ 与 $K'$。
[^cellular-coupling]: [Catalysis and the Use of Energy by Cells](https://www.ncbi.nlm.nih.gov/books/NBK26838/)。该教材以磷酰基转移说明酶如何把 ATP 水解与不利反应连接成共同化学路径。
[^glucose-energy-accounting]: [The Mitochondrion](https://www.ncbi.nlm.nih.gov/books/NBK26894/) 说明细胞条件下 ATP 水解的自由能明显不同于标准值；[Quantitative analysis of mitochondrial ATP synthesis](https://pmc.ncbi.nlm.nih.gov/articles/PMC8434986/) 进一步展示 ATP 势、膜势与合成计量如何共同决定能量账本。
[^bond-dissociation]: IUPAC Gold Book, [bond-dissociation energy](https://goldbook.iupac.org/terms/view/B00699)。键解离能是断裂指定键所需的焓，不是断键时自动释放的能量。
[^atp-hydrolysis-conditions]: [The advantage of channeling nucleotides for very processive functions](https://pmc.ncbi.nlm.nih.gov/articles/PMC5473427/) 比较标准值与浓度修正后的 NTP 水解自由能，并说明不同细胞、区室和时间点不存在唯一的体内数值。
[^group-transfer-potential]: [Energy-Rich Molecules and Group Transfer Potentials in Energetic Coupling Reactions](https://pmc.ncbi.nlm.nih.gov/articles/PMC12843986/)。表中近似值与 ATP→AMP、酰基磷酸、烯醇磷酸和磷酸原的比较取自该综述；具体计算须回到同一标准条件。
[^activated-carriers]: [Catalysis and the Use of Energy by Cells](https://www.ncbi.nlm.nih.gov/books/NBK26838/) 将 ATP、NAD(P)H、酰基 CoA、SAM 和核苷酸糖等置于“活化载体”框架，强调载体同时携带自由能和特定化学基团。
[^redox-potential]: [Electron-Transport Chains and Their Proton Pumps](https://www.ncbi.nlm.nih.gov/books/NBK26904/) 以还原电势和 $\Delta_rG=-nF\Delta E$ 说明电子从 NADH 向 O$_2$ 转移的驱动力；IUBMB 热力学建议还给出固定 pH 与离子强度下标准表观还原电势的定义。
[^electrochemical-potential]: [The Forces that Create Membrane Potentials](https://www.ncbi.nlm.nih.gov/books/NBK11102/) 区分浓度项与电势项；[The Mitochondrion](https://www.ncbi.nlm.nih.gov/books/NBK26894/) 说明质子电化学梯度与 ATP 合成、逆向质子泵之间的能量转换。
[^phosphagen-systems]: [Beyond mitochondria: Alternative energy-producing pathways from all strata of life](https://pmc.ncbi.nlm.nih.gov/articles/PMC8052308/) 比较肌酸激酶、精氨酸激酶及其他磷酸原；[Maintaining energy provision in the heart](https://pubmed.ncbi.nlm.nih.gov/38639724/) 说明磷酸肌酸系统的局部 ATP 缓冲与供需匹配作用。
[^polyphosphate]: [Phosphate Homeostasis—A Vital Metabolic Equilibrium Maintained Through the INPHORS Signaling Pathway](https://pmc.ncbi.nlm.nih.gov/articles/PMC7381174/) 与 [Inorganic polyphosphate, a multifunctional polyanionic protein scaffold](https://pmc.ncbi.nlm.nih.gov/articles/PMC6369292/) 说明 polyP 的合成、动员及其在磷酸、金属离子、应激和蛋白质稳态中的多重作用。
