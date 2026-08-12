# 酶的催化机制与调控

酶催化由多种化学贡献在时间和空间上的配合构成。活性位点把底物、催化残基、结构水、金属离子和辅因子安排在同一微观环境中，使底物进入可反应的取向，质子和电子沿特定路径转移，短暂中间体被生成又被及时拆除，最终产物离开而酶回到可继续周转的状态。

同一个活性位点还可能在不同构象、修饰和装配状态之间重新分布。调节因子不必进入催化口袋，也能改变底物结合、化学步骤或产物释放；细胞还可借助磷酸化、有限蛋白水解、调节蛋白、亚细胞定位和酶量改变来控制反应。因此，催化机制回答“这条化学路径怎样降低能垒”，调控机制回答“细胞怎样改变这条路径被使用的程度”，两者在具体酶上常由同一组构象变化相连。

本页承接[酶通论](enzyme.md)中的活性位点与过渡态原则，并把[酶动力学](enzyme_dynamics.md)中的可测参数落实到分子步骤。维生素来源的辅酶及其转移基团见[维生素与辅酶](vitamin_and_coenzyme.md)。

## 催化机制 { #catalytic-mechanisms }

### 活性位点的反应微环境 { #active-site-microenvironment }

活性位点通常只占酶表面或内部的一小片三维区域，却可汇集一级序列上相距很远的残基。结合亚位点负责识别底物的形状、电荷和立体方向，催化基团直接参与成键、断键或质子转移。结合亲和力与催化周转由不同的自由能关系决定；催化取决于过渡态相对于反应物态获得的选择性稳定。[^active-site-catalysis]

底物结合可减少两个反应物彼此寻找以及调整取向所需的熵代价，并把亲核体、亲电中心和质子供受体放到可反应的距离。疏水口袋、局部电场、氢键网络和排布有序的水又会改变基团的溶剂化、极化与表观 $pK_a$。各项相互作用的净催化贡献取决于它对基态与过渡态的相对稳定程度。

诱导契合描述配体结合后酶和底物发生构象调整，构象选择则允许底物先结合未配体酶已经短暂采样的状态。两者都能把反应基团送入适当几何，但构象变化本身不是能垒降低的同义词；只有它使后续过渡态相对更有利，或避免水解、旁反应和非生产性结合时，才构成催化贡献。底物形变也应以结构、动力学或能量证据判断，不能从一幅“弯曲的底物”示意图直接推出键已被显著削弱。[^binding-energy]

### 常见催化化学及其组合 { #catalytic-chemistry }

多数酶综合采用多种催化策略。下表按催化循环中的化学角色分类，各项可在同一酶中组合。

| 催化贡献 | 活性位点完成的工作 | 需要避免的简化 |
| --- | --- | --- |
| 临近与定向 | 提高生产性碰撞的比例，限制底物的平移、转动与构象 | “把底物放近”不自动证明能垒已经降低 |
| 一般酸碱催化 | 由残基、辅因子或结合水暂时给予或接受质子 | 不能仅凭钟形 pH 曲线唯一指定某个残基 |
| 共价催化 | 催化基团与底物形成可继续反应的短暂共价中间体 | 中间体必须既能形成也能分解；稳定加合物可能反而抑制酶 |
| 金属离子催化 | 配位定向、极化键、稳定电荷、活化水或参与氧化还原 | 金属既可能是酶的组成部分，也可能与底物形成真实反应物种 |
| 静电与氢键稳定 | 对过渡态发展出的电荷和几何提供互补环境 | 单个氢键或低介电环境不是所有酶通用的主因 |

#### 酸碱催化 { #acid-base-catalysis }

酸碱催化把质子转移嵌入成键和断键过程。一般酸催化由水合氢离子以外的供体给予质子，一般碱催化由氢氧根以外的受体夺取质子；酶中的 Asp、Glu、His、Lys、Cys、Tyr 及末端基团都可能在合适微环境中承担这些角色。专一酸或专一碱催化则分别只随水合氢离子或氢氧根活度改变。缓冲液浓度依赖可提示一般酸碱催化，却还须排除离子强度、金属络合和底物质子化变化。

一个基团在循环中可以先作碱、后作酸。其水溶液 $pK_a$ 只能作为起点；邻近电荷、氢键、溶剂可及性和配体结合都能移动活性位点中的质子化平衡。因而速率—pH 曲线提供的是可检验的离子化线索，不是残基身份证。国际生物化学与分子生物学联合会命名委员会（Nomenclature Committee of the International Union of Biochemistry and Molecular Biology，NC-IUBMB）特别指出，动力学 $pK_a$ 与具体分子基团的对应必须由独立证据支持。[^ph-rate-profile]

#### 共价催化 { #covalent-catalysis }

共价催化以亲核残基或辅因子暂时接过底物的一部分，形成一条不同于水溶液反应的路径。Ser、Cys、Lys 和有时的 His 可直接成为亲核体；Lys 与羰基底物形成的亚胺或 Schiff 碱，是醛缩酶等反应中的典型中间体。用硼氢化物还原并捕获亚胺可以提供机制证据，但“能被还原剂失活”仍须与位点鉴定、底物保护和产物形成共同解释。

共价中间体位于自由能曲线的局部低点，可以在快速淬灭、质谱或晶体结构中被捕获；形成和拆除它时分别越过新的过渡态。有效的共价催化使替代路径的最高能垒低于未催化路径。

#### 金属离子催化 { #metal-ion-catalysis }

金属离子可作为 Lewis 酸吸引电子密度、稳定负电荷、给底物定向，并降低配位水失去质子的代价；Fe、Cu、Mn 等还能改变氧化态，参与电子转移。人碳酸酐酶 II 的 Zn$^{2+}$ 由三个 His 和水或氢氧根近四面体配位。锌结合的氢氧根进攻 CO$_2$ 生成碳酸氢根，随后 His64 与有序水网络把质子送往体相并再生亲核体。完整机制同时包含金属配位、酸碱催化、静电稳定和水网络中的质子转移。[^carbonic-anhydrase]

激酶体系又显示另一种边界：常见的反应底物是镁离子与三磷酸腺苷（adenosine triphosphate，ATP）形成的 MgATP 络合物，Mg$^{2+}$ 同时屏蔽磷酸基负电荷并帮助定位。此时把镁列为脱离 ATP 浓度和络合平衡的“激活剂”，会把反应物种与调节效应混在一起。

### 丝氨酸蛋白酶中的协同催化 { #serine-protease-mechanism }

胰凝乳蛋白酶把多种催化贡献组织在同一循环中。底物侧链先进入决定识别偏好的口袋，使待切肽键的羰基靠近 Ser195。His57 作为一般碱接受 Ser195 的质子，生成的亲核氧进攻羰基；Asp102 调节并稳定 His57 所处的氢键环境。第一四面体中间体中的氧负电荷由主链酰胺构成的氧阴离子穴稳定。中间体塌陷后，肽键断裂，位于切点羧基端一侧的胺类片段先释放，切点氨基端一侧的酰基部分则以酰基—酶键暂留在 Ser195 上。[^chymotrypsin]

水进入活性位点后，His57 再次作一般碱活化水。水的氧进攻酰基—酶，经过第二个四面体中间体后断开 Ser195 与底物的共价键，释放另一产物。这个循环中，Ser195 承担共价催化，His57 往返承担酸碱催化，识别口袋和氧阴离子穴分别选择底物基态的取向和高能态的电荷。催化三联体由此构成一条耦合的质子与电子重排路径。

鸡卵清溶菌酶提供了另一种保留型糖苷水解机制。底物结合伴随糖环形变；Glu35 先作一般酸帮助糖苷键断裂，Asp52 形成共价糖基—酶中间体，随后水解该中间体并恢复异头碳构型。2001 年的质谱和晶体学实验捕获了具有催化能力的共价中间体，修正了把该反应只写成长寿命游离氧碳正离子过程的旧式图景，也说明“形变”“酸碱”和“共价”可以同时成立。[^lysozyme-intermediate]

### 催化机制的证据链 { #mechanistic-evidence }

序列保守性、结构邻近和化学反应性只能提出候选残基。化学修饰使活力下降，可能因为修饰了催化基团，也可能因为蛋白变性或底物通道被堵塞；定点突变同样可能改变折叠、稳定性、辅因子结合或装配。可靠解释会检查蛋白状态、活性位点浓度和底物结合，并比较保守替换、化学救援或双突变循环，而不是把“突变后失活”直接等同于“该残基完成成键”。

结构能显示原子位置、配体构象、金属配位和候选氢键，却通常只是特定温度、晶体环境与时间平均下的状态。底物类似物也可能偏爱某个非生产性构象。机制研究因而需要把多类观测接在一起：

- 稳态动力学约束整体路径及底物、产物和抑制剂的依赖；
- 前稳态动力学分辨快速结合、化学爆发、构象变化和产物释放；
- pH—速率关系、溶剂与原子同位素效应追踪质子转移和键变化；
- 快速淬灭、光谱、质谱或共价捕获寻找中间体；
- X 射线、核磁共振（nuclear magnetic resonance，NMR）、冷冻电镜和计算模型提供可检验的几何与能量假说。

任何单一结果都可能与多个微观机制相容。NC-IUBMB 因此把动力学的作用表述为排除不相容机制，并以更多独立实验继续检验仍然可行的最简方案。[^mechanism-inference]

## 别构作用与协同性 { #allostery-cooperativity }

别构作用是一个位点的结合或状态变化影响另一处功能位点的过程。对酶而言，别构效应物通常结合在活性位点之外；它可以改变底物结合、催化常数或两者，也可以激活或抑制。底物自身在多个位点之间产生影响称同促效应，其他代谢物或调节分子产生的影响称异促效应。现代构象集合观点不要求蛋白只有两幅刚性结构：效应物可以通过改变已有微观状态的相对占比、波动和耦合，传递到远端位点。单体蛋白也能发生别构作用。[^allosteric-ensemble]

协同性是一个配体结合事件改变后续同类配体结合或催化响应的现象，常见于多位点蛋白。别构作用与协同性可以相伴，也可以分别出现：异促效应物可以调节单体酶，多位点底物响应也可由多种耦联方式形成。动力学上，K 型效应主要移动半最大响应浓度，V 型效应主要改变限制速率，真实体系常兼有两者；这些数据表现还需要独立结构证据解释。[^allostery-terms]

对具有饱和上限 $V$ 的 S 形速率曲线，Hill 作图常写成

$$
\log\frac{v}{V-v}=n_H\log[S]-n_H\log[S]_{0.5}.
$$

$n_H>1$ 表示所考察浓度区间内的正 Hill 协同，$n_H<1$ 表示负 Hill 协同。$n_H$ 是操作性斜率，可能随浓度改变；它一般不等于亚基数、催化中心数或“实际参与协同的位点数”。$[S]_{0.5}$ 也只是达到半限制速率的浓度，不应在非米氏体系中重新命名为 $K_m$。[^hill-cooperativity]

### MWC 与 KNF 限制模型 { #allosteric-models }

Monod–Wyman–Changeux（MWC）协同模型和 Koshland–Némethy–Filmer（KNF）序变模型把复杂构象集合压缩为可计算的理想情形。

| 模型 | 对无配体状态与构象转换的假设 | 能解释的核心现象 | 主要边界 |
| --- | --- | --- | --- |
| MWC 协同模型 | 对称寡聚体在无配体时已在 T、R 等状态间平衡；同一分子内亚基协同转换，配体选择性稳定其中一态 | 正协同、激活剂或抑制剂对整体平衡的移动 | 经典形式不允许同一寡聚体出现 T/R 混合亚基，真实蛋白可有更多状态 |
| KNF 序变模型 | 配体结合使一个亚基改变构象，再改变邻近亚基的结合倾向；中间混合构象被允许 | 正协同、负协同和逐步构象传播 | “诱导”不排除预存构象，传播次序也须由实验确定 |

MWC 模型由 Monod、Wyman 与 Changeux 在 1965 年系统提出；Koshland、Némethy 与 Filmer 随后用序变框架比较多位点结合数据。二者仍是理解协同的有力极限模型，但一条 S 形曲线不能在它们之间作唯一选择，很多酶还需要加入不对称性、中间态、动力学分支或亚基间不同耦合。[^classic-allostery-models]

大肠杆菌天冬氨酸氨甲酰转移酶（aspartate transcarbamoylase，ATCase）展示了催化与异促调控的结构连接。完整酶含六条催化链和六条调节链；三磷酸胞苷（cytidine triphosphate，CTP）结合调节链抑制嘧啶合成通路，而底物及双底物类似物 N-膦乙酰基-L-天冬氨酸（N-phosphonacetyl-L-aspartate，PALA）偏向稳定活性较高的 R 状态。PALA 复合物结构显示，活性位点还接收相邻催化链环区的相互作用，因此调节链与催化链的相对移动可以同时改变多个活性位点。它是 MWC 思想的经典例子；其他别构酶可具有不同的亚基数、装配形式和调控逻辑。[^atcase-structure]

## 酶活性的细胞调控 { #cellular-enzyme-regulation }

### 可逆修饰与蛋白质相互作用 { #reversible-regulation }

蛋白质磷酸化由蛋白激酶把 ATP 的磷酰基转移给受体残基，去磷酸化则由蛋白磷酸酶水解磷酸酯。加入磷酸基会改变局部电荷、氢键和蛋白质相互作用，可能稳定活性态，也可能稳定低活性态；同一蛋白的不同位点还可产生相反或条件依赖的结果。磷酸酶与激酶共同决定修饰占有率、持续时间和空间分布。[^protein-phosphorylation]

糖原磷酸化酶是经典实例：磷酸化促进其活性态，同时一磷酸腺苷（adenosine monophosphate，AMP）、ATP、葡萄糖等代谢物还可按组织和同工形式施加别构影响。共价修饰与别构调节可在同一体系中叠加。乙酰化、腺苷酰化、二磷酸腺苷（adenosine diphosphate，ADP）-核糖基化和氧化还原修饰也能改变酶活性，每类修饰各有特定的供体及写入、识别和去除反应。

调节蛋白还可直接遮挡活性位点、稳定特定构象、招募底物或改变亚细胞定位。环磷酸腺苷（cyclic adenosine monophosphate，cAMP）结合蛋白激酶 A 的调节亚基后释放催化亚基，就是配体结合、亚基装配和酶活性相连的例子。聚合与解聚本身没有固定方向：有的酶组装后活化，有的解聚后活化，还有的只改变稳定性或定位，必须针对具体装配体测量。[^regulatory-proteins]

!!! warning "活性读数的解释边界"

    一种修饰与活力同时升高，不足以证明修饰直接激活该酶。还要区分蛋白总量、活性位点比例、亚细胞位置、底物与辅因子供应，以及测定时修饰是否被保留。体外纯化酶的效应也不自动等于细胞内净通量变化。

### 有限蛋白水解与酶原激活 { #zymogen-activation }

酶原是需要特定加工才形成充分活性构象的前体，常见于消化蛋白酶、凝血和补体级联。有限蛋白水解切开一条或少数几条特定肽键，新的末端、盐桥和构象重排可形成或暴露活性位点。前体可保留程度不一的基础活性；这种加工通过改变共价主链并重新分配构象状态完成激活。[^zymogen-regulation]

蛋白水解步骤通常不可逆，所以酶原不能靠把切下的肽段重新接回去而关闭。生理系统通过把酶原与激活酶分隔、限制激活位置、用专一抑制剂捕获活性酶以及清除或降解活性形式来终止作用。胰蛋白酶原的局部激活和凝血酶原级联都借助这种安排获得放大，同时也需要多重制动以避免异位蛋白水解。

### 同工酶、酶量与假酶 { #isoenzymes-abundance-pseudoenzymes }

同工酶是在同一生物内可区分、却催化同一总反应的酶形式。它们可以由不同基因产物或不同亚基组合形成，并在 $K_m$、$k_{cat}$、调节、组织表达或亚细胞位置上不同；并非所有同工酶都具有四级结构，也不能由催化同一反应推断底物亲和力相同。乳酸脱氢酶的不同亚基组合是历史上常用的例子，但组织中的实际比例会随物种、发育和生理状态改变，不宜把某一条电泳带当成绝对器官标签。[^isoenzyme-definition]

改变酶量提供另一时间尺度的调控。转录和翻译决定合成，蛋白降解决定寿命，区室转运和复合体装配决定有多少分子实际接触底物。调控响应的时间尺度由合成、降解、修饰寿命和预存组分共同决定。反馈抑制通常让通路产物作用于上游控制点，前馈调节则由较早的代谢物影响下游步骤；控制点随网络状态重新分配。净通量由整条网络、热力学和底物供给共同决定。

假酶（pseudoenzyme）是保留酶家族折叠或同源关系、但经典催化能力缺失或显著降低的蛋白质。它们可能结合底物、核苷酸或活性同源蛋白，作为支架、竞争结合体、定位因子或别构调节者。不存在适用于全部酶家族的“缺少三个关键残基”判据；有些预测为假酶的成员仍保留弱催化，或用迁移后的残基完成非典型化学。序列与结构可以提示，是否无活性仍应由合适底物、灵敏测定、阳性对照和细胞功能共同验证。[^pseudoenzyme-functions]

## 参考资料与延伸阅读

- Nelson, D. L., Cox, M. M. & Hoskins, A. A. *Lehninger Principles of Biochemistry*, 8th ed., Chapters 6 and 15. Macmillan Learning, 2021.
- Alberts, B. et al. [Protein Function](https://www.ncbi.nlm.nih.gov/books/NBK26911/). *Molecular Biology of the Cell*, 4th ed.
- Cooper, G. M. [The Central Role of Enzymes as Biological Catalysts](https://www.ncbi.nlm.nih.gov/books/NBK9921/)；[Regulation of Protein Function](https://www.ncbi.nlm.nih.gov/books/NBK9923/). *The Cell: A Molecular Approach*, 2nd ed.
- NC-IUBMB. [Symbolism and Terminology in Enzyme Kinetics: activation, pH, cooperativity and mechanism](https://iubmb.qmul.ac.uk/kinetics/ek7.html).
- Motlagh, H. N., Wrabl, J. O., Li, J. & Hilser, V. J. [The ensemble nature of allostery](https://pubmed.ncbi.nlm.nih.gov/24740064/). *Nature* 508, 331–339 (2014).
- Monod, J., Wyman, J. & Changeux, J.-P. [On the nature of allosteric transitions: a plausible model](https://pubmed.ncbi.nlm.nih.gov/14343300/). *Journal of Molecular Biology* 12, 88–118 (1965).
- Koshland, D. E. Jr., Némethy, G. & Filmer, D. [Comparison of experimental binding data and theoretical models in proteins containing subunits](https://pubmed.ncbi.nlm.nih.gov/5938952/). *Biochemistry* 5, 365–385 (1966).
- Vocadlo, D. J., Davies, G. J., Laine, R. & Withers, S. G. [Catalysis by hen egg-white lysozyme proceeds via a covalent intermediate](https://pubmed.ncbi.nlm.nih.gov/11518970/). *Nature* 412, 835–838 (2001).
- Cohen, P. [The origins of protein phosphorylation](https://pubmed.ncbi.nlm.nih.gov/11988757/). *Nature Cell Biology* 4, E127–E130 (2002).
- RCSB PDB. [1GCT：胰凝乳蛋白酶酰基—酶加合物](https://www.rcsb.org/structure/1GCT)、[1CA2：人碳酸酐酶 II](https://www.rcsb.org/structure/1CA2)、[1HEW：鸡卵清溶菌酶](https://www.rcsb.org/structure/1HEW)、[1D09：PALA 结合的 ATCase](https://www.rcsb.org/structure/1D09)。
- IUPAC Gold Book. [Isoenzyme](https://goldbook.iupac.org/terms/view/I03279).
- Goldberg, T. & Sreelatha, A. [Emerging functions of pseudoenzymes](https://pmc.ncbi.nlm.nih.gov/articles/PMC10211241/). *Biochemical Journal* 480, 715–728 (2023).

[^active-site-catalysis]: Cooper, G. M., [The Central Role of Enzymes as Biological Catalysts](https://www.ncbi.nlm.nih.gov/books/NBK9921/)；Alberts, B. et al., [Protein Function](https://www.ncbi.nlm.nih.gov/books/NBK26911/)。两部教材均把活性位点写成由不同序列区段汇集的三维反应环境，并以相对于反应物态的过渡态稳定解释催化。
[^binding-energy]: Gao, J. et al., [Mechanisms and free energies of enzymatic reactions](https://pmc.ncbi.nlm.nih.gov/articles/PMC4477011/). *Chemical Reviews* 106, 3188–3209 (2006)。该综述比较静电稳定、去溶剂化、反应物态效应与构象变化，强调不同酶可采用不同能量组合。
[^ph-rate-profile]: NC-IUBMB, [pH effects in enzyme kinetics](https://iubmb.qmul.ac.uk/kinetics/ek7.html)。动力学 $pK_a$ 与具体残基的对应并不直接，需由独立证据支持；最适 pH 和曲线还随所测参数及条件改变。
[^carbonic-anhydrase]: RCSB PDB, [1CA2：Refined structure of human carbonic anhydrase II](https://www.rcsb.org/structure/1CA2)；Fisher, Z. et al., [Structure and catalysis by carbonic anhydrase II](https://pmc.ncbi.nlm.nih.gov/articles/PMC3223279/). *Biochemistry* 50, 9421–9428 (2011)。结构显示 Zn$^{2+}$ 的三个 His 与水配位，机制研究把锌结合溶剂和 His64 质子转移分为相连步骤。
[^chymotrypsin]: Cooper, G. M., [Catalytic mechanism of chymotrypsin](https://www.ncbi.nlm.nih.gov/books/NBK9921/)；RCSB PDB, [1GCT](https://www.rcsb.org/structure/1GCT)。1GCT 的精修支持低 pH 晶体中可能存在四肽酰基—酶加合物，可作为共价中间体的结构背景；单一晶体状态不足以确定全部溶液机制。
[^lysozyme-intermediate]: Vocadlo, D. J. et al., [Catalysis by hen egg-white lysozyme proceeds via a covalent intermediate](https://pubmed.ncbi.nlm.nih.gov/11518970/). *Nature* 412, 835–838 (2001)；RCSB PDB, [1HEW](https://www.rcsb.org/structure/1HEW)。研究以质谱、结构与动力学能力共同支持共价糖基—酶中间体。
[^mechanism-inference]: NC-IUBMB, [Types of mechanism for enzymic catalysis](https://iubmb.qmul.ac.uk/kinetics/ek7.html)。该建议明确指出动力学可以否定机制，却不能把一个与数据相容的机制证明为唯一真相。
[^allosteric-ensemble]: Motlagh, H. N. et al., [The ensemble nature of allostery](https://pubmed.ncbi.nlm.nih.gov/24740064/). *Nature* 508, 331–339 (2014)。该综述把别构扩展到构象集合、动力学与内在无序参与的信息传递，不要求可见的大幅刚性结构变化。
[^allostery-terms]: NC-IUBMB, [allosteric effector and cooperativity terminology](https://iubmb.qmul.ac.uk/kinetics/ek7.html)。建议明确说明别构效应与协同效应没有必然联系。
[^hill-cooperativity]: NC-IUBMB, [Non-Michaelis–Menten kinetics and Hill cooperativity](https://iubmb.qmul.ac.uk/kinetics/ek7.html)。Hill 系数在动力学语境中与每分子催化中心数没有必然关系，协同性还可能随浓度区间改变。
[^classic-allostery-models]: Monod, J., Wyman, J. & Changeux, J.-P., [On the nature of allosteric transitions](https://pubmed.ncbi.nlm.nih.gov/14343300/). *Journal of Molecular Biology* 12, 88–118 (1965)；Koshland, D. E. Jr., Némethy, G. & Filmer, D., [Comparison of experimental binding data and theoretical models](https://pubmed.ncbi.nlm.nih.gov/5938952/). *Biochemistry* 5, 365–385 (1966)。
[^atcase-structure]: Cooper, G. M., [Regulation of Protein Function](https://www.ncbi.nlm.nih.gov/books/NBK9923/)；Jin, L. et al., [RCSB PDB 1D09](https://www.rcsb.org/structure/1D09). *Proteins* 37, 729–742 (1999)。PALA 复合物结构解析了催化链、调节链及跨亚基活性位点接触。
[^protein-phosphorylation]: Cooper, G. M., [Protein phosphorylation](https://www.ncbi.nlm.nih.gov/books/NBK9923/)；Cohen, P., [The origins of protein phosphorylation](https://pubmed.ncbi.nlm.nih.gov/11988757/). *Nature Cell Biology* 4, E127–E130 (2002)。激酶和磷酸酶共同构成可逆循环，磷酸化结果可为激活或抑制。
[^regulatory-proteins]: Cooper, G. M., [Protein–protein interactions in regulation](https://www.ncbi.nlm.nih.gov/books/NBK9923/)。该教材以 cAMP 依赖性蛋白激酶说明配体结合如何改变调节亚基与催化亚基装配。
[^zymogen-regulation]: Cooper, G. M., [Regulation of Protein Function](https://www.ncbi.nlm.nih.gov/books/NBK9923/)。该教材区分不可逆的蛋白水解激活与可逆磷酸化；抑制剂、区室化和清除构成控制活性蛋白酶的生理层次。
[^isoenzyme-definition]: IUPAC Gold Book, [Isoenzyme](https://goldbook.iupac.org/terms/view/I03279)。同工酶以同一生物中催化相同反应而可被区分的酶形式为核心，不以固定亚基数定义。
[^pseudoenzyme-functions]: Goldberg, T. & Sreelatha, A., [Emerging functions of pseudoenzymes](https://pmc.ncbi.nlm.nih.gov/articles/PMC10211241/). *Biochemical Journal* 480, 715–728 (2023)；Zaru, R., Magrane, M., Orchard, S. & UniProt Consortium, [Challenges in the annotation of pseudoenzymes in databases](https://pmc.ncbi.nlm.nih.gov/articles/PMC7160037/). *FEBS Journal* 287, 4114–4127 (2020)。两篇综述分别概括非催化功能，并说明仅凭序列预测催化缺失的证据边界。
