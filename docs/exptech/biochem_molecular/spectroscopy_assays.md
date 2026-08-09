# 光谱测定与生化定量

溶液变蓝、吸光度上升或荧光增强，都是分子状态经过化学反应、光路和检测器转换后留下的信号。要把信号写成浓度、含量或结合参数，还需要知道它由什么物种产生，样品经过了哪些处理，空白扣除了什么，校准关系覆盖到哪里，以及仪器是否在可用范围内。光谱测定的核心因而不是“读一个 OD”，而是建立从待测物到可解释量值的完整测量链。

本页先从吸收、荧光和微孔板读数进入这条链，再比较经典生化显色与蛋白定量方法，并说明表面等离子共振和呼吸测量怎样把另一类物理量转成生物学证据。移液、配液、温度与校准的共同要求见[测量、溶液配制与仪器校准](../foundations/safety_measurement.md#calibration-verification)，样品编码、质控样和原始数据处理见[实验设计、记录与数据质量](../foundations/design_data.md#controls-quality-samples)。

## 光学信号的来源 { #optical-signal-chain }

不同检测模式观察的是不同物理过程。它们可以共享一台多模式读板机，却不能共享一套未经验证的解释规则。

| 检测模式 | 仪器直接观察的量 | 浓度解释的主要前提 |
| --- | --- | --- |
| 吸收 | 入射光与透射光的比值随波长的变化 | 发色物种、光程和空白明确，散射与杂散光受控，校准范围有效 |
| 荧光 | 激发后在选定波段收集的发射光 | 激发与发射设置固定，内滤、淬灭、自发荧光、漂白和增益影响受控 |
| 发光 | 化学或生物反应自身产生的光子信号 | 反应时间、底物供给、温度和检测窗口固定，背景与串扰受控 |
| 浊度或散射 | 偏离透射光路或使透射光减少的光 | 粒径、形状、折射率和沉降状态可比，并用同类样品校准 |

一条吸收谱记录样品对各波长的综合响应。峰位有助于选择测量波长和辨认发色团，却很少能单独证明分子身份；混合物中的多个吸收物种、溶剂背景和颗粒散射可以叠加。可见颜色与主要吸收波段大致互补，只适合初步选区，正式定量应先扫描实际反应产物的光谱，再结合灵敏度、背景、仪器带宽和其他组分的干扰确定波长。

定性显色首先回答“在规定条件下是否出现相容的化学反应”。还原糖使斐林或班氏体系中的铜发生还原并形成沉淀，淀粉与碘形成有色复合物，双缩脲反应报告足够数量的肽键；Millon 反应主要响应蛋白质中的酪氨酸酚基，但传统试剂含汞和强酸，只能在严格化学安全条件下作为方法史与特定化学反应讨论。苏丹 III／IV 等脂溶性染料进入疏水相，间苯三酚—盐酸和番红可用于木质化组织观察。甲基绿—派罗宁、二苯胺等核酸染色还受到聚合状态、固定、pH 和其他组分影响。黄色的碘液本身不是蛋白质阳性反应，颜色出现也不等于已经排除所有会发生同类反应的物质。经典反应仍保留为化学性质和标本观察的学习入口；要升级为定量方法，必须再建立选择性、校准和基质证据。

## 吸光度与 Beer–Lambert 关系 { #absorbance-beer-lambert }

设波长为 $\lambda$ 的入射光谱辐射功率为 $P_\lambda^0$，通过样品后的透射功率为 $P_\lambda$，透射比和十进吸光度分别为

$$
T=\frac{P_\lambda}{P_\lambda^0},\qquad
A=-\log_{10}T=\log_{10}\left(\frac{P_\lambda^0}{P_\lambda}\right).
$$

在均一、各向同性的介质中，以相对于吸收带足够窄的单色平行光测量单一吸收物种时，Beer–Lambert 关系写为

$$
A(\lambda)=\varepsilon(\lambda)c l,
$$

其中 $c$ 为物质的量浓度，$l$ 为吸收光程，$\varepsilon$ 为该波长和规定条件下的摩尔十进吸收系数。吸光度是量纲为一的量；“光密度”或 OD 是历史上仍常见的实验用语，报告时宜写明实际量为吸光度还是包含散射的表观 OD。[^iupac-beer-lambert]

线性关系有明确条件。高浓度引起的分子相互作用、酸碱或缔合平衡改变，有限光谱带宽、杂散光、检测器非线性、颗粒散射和不均匀样品都可使 $A$ 与 $c$ 偏离正比。吸光度过高时透射光接近仪器噪声底，过低时空白漂移占比上升；可用范围应由实际仪器和方法验证确定，不能把 $0.05<A<1.0$ 当成所有设备与测定的固定法则。已知消光系数也只在波长、溶剂、pH、温度、化学形态和光程相容时使用。

### 光路、仪器状态与比色皿 { #spectrophotometer-cuvette }

典型分光光度计依次包含稳定光源、波长选择系统、样品室、检测器与信号处理。光栅、棱镜或滤光片决定通带，狭缝改变光谱带宽和到达检测器的光通量；波段越窄并不总会让结果更好，因为信噪比也会随之改变。单光束仪器依次测参考和样品，双光束仪器用分束或交替光路补偿部分光源漂移；两者都仍需要空白、基线和性能核查。波长准确度、光度准确度、杂散光、基线平直度和重复性应以适当参考物质或滤光片在工作波段核查，不能用开机自检代替整条光度测量链。NIST 的分子分光光度计体系正是通过有证书的透射、吸光和光程参考物质传递量值。[^nist-spectrophotometry]

比色皿或微量池同时限定光程、材料背景和样品几何。熔融石英通常覆盖紫外—可见范围，光学玻璃和不同塑料各有自己的截止波长、溶剂相容性与自发荧光；“低于 330 nm 一律不能用塑料”并不准确，应查实际耗材规格并用空池验证。使用配对比色皿时保持同一朝向和光程，液面覆盖光束，排除气泡、沉淀和外壁液滴；手持非通光面，以与材质相容且不留绒的材料清洁光学面。划痕、指纹和错误溶剂清洗会同时改变透射和散射，不能靠重新调零掩盖。

### 波长、空白与背景校正 { #wavelength-blank-background }

最大吸收波长常能提高灵敏度，并降低小波长漂移造成的响应变化，但实际最佳波长还要避开试剂、溶剂和基质的强背景。差示光谱让样品与参比包含尽可能相同的组分，只改变一个状态，例如比较细胞色素的还原态与氧化态；所得峰表示两种状态的吸收差，不是其中一方“没有吸收”。早期呼吸链研究正是借助差示光谱分辨重叠的细胞色素谱带。[^chance-difference-spectra]

空白的组成取决于要扣除的过程。溶剂空白只扣除溶剂和比色皿；试剂空白还经历显色试剂和孵育；样品本底管则保留样品基质但缺少目标反应或关键试剂。浑浊、有色或自发荧光样品常需要多种空白，或采用标准加入、光谱解卷积和正交方法。空白、标准和未知样应以相同容器、总体积、温度、反应时间和读数顺序处理；每批空白的原始值及其漂移都要保存，而非只留下扣除后的结果。

## 标准曲线与可报告范围 { #calibration-curve }

标准曲线把已知参考量 $x$ 与仪器响应 $y$ 联系起来。标准水平应覆盖预期样品和决策区间，并在关键区域有足够信息；各标准由可追溯母液独立配制还是沿同一连续稀释链产生，会形成不同的相关误差。标准、空白、质控样和未知样应尽可能具有相同基质和处理过程。复杂基质无法完全匹配时，可用加标回收、标准加入、稀释平行性或适当内标评估偏差。

线性模型通常写为 $y=a+bx+e$，截距 $a$ 只有在空白响应和模型证据支持时才约束为零。比值法 $c_x=(A_x/A_s)c_s$ 也只有在标准与样品具有同一响应因子、同一光程、响应正比于浓度且截距可忽略时才成立。显色体系可能需要二次、加权或其他经验模型；选择依据是反应机理、测量误差结构和预先规定的验证结果，而不是哪个模型给出更大的 $R^2$。NIST 的校准指南要求同时检查残差、重复性、模型假设和未来测量的不确定度，图上“看起来很直”不足以决定模型。[^nist-calibration]

标准曲线应查看各点原始响应、重复测量、残差和反算浓度，并用独立低、中、高水平质控样监测整批性能。未知样落在已验证范围外时，按经验证的稀释流程重测；直接外推会把未观察过的化学响应和仪器行为当成已知。原始点不能为贴近直线而移动，也不能因偏离趋势就凭结果删去。配制错误、饱和、气泡或仪器故障属于可调查的质量事件；即使确认排除，也要保存原始值、客观标准和决定记录，具体规则见[质量事件、缺失与排除](../foundations/design_data.md#quality-events-exclusion)。

一个定量方法的性能还包括选择性、精密度、真度或回收、检出能力、定量下限、稀释完整性、携带污染、样品和显色产物稳定性，以及不同批次、日期和操作者下的稳健性。监管用生物分析的 ICH M10 把这些项目组织为“适合预定用途”的验证框架；教学与基础研究不必照搬其固定接受界值，却同样需要在使用前规定用途、范围和质量判据。[^ich-m10]

## 微孔板与多模式读数 { #microplate-readers }

微孔板把许多小体积反应并行放入统一几何中，也把位置、蒸发和光程变成新的误差来源。吸收模式通常使用光学透明板；黑色孔壁可降低荧光背景和孔间串扰，白色孔壁常用于增强发光收集，底读还要求相应透明底。板色、材料、表面处理、孔形和读数方向必须与检测模式、波长、细胞状态和具体仪器匹配，不能只凭“平底折射率低、U 底折射率高”的口诀选择。[^microplate-selection]

比色皿常有规定的 10 mm 光程，板孔中的垂直光程却随加样体积、孔截面、弯月面和液体性质改变。等体积有助于比较同一板上的吸光度；若要与 1 cm 消光系数换算，需要仪器或方法验证过的光程校正。孔底液滴、气泡、壁上挂液和沉淀会截断或散射光，应用受控的轻柔混匀、短时离心或重新加样处理，不能把受污染的铅芯蘸取皮脂后伸入反应孔。

板图应让标准、空白、阳性和阴性质控跨越能暴露位置效应的区域，并避免处理与行列、加样时间或读数顺序完全重合。外圈孔更易受蒸发和温度梯度影响，但边缘信号偏高或偏低取决于具体反应；开发阶段可用全板均一样品检查行列梯度，再决定封板、湿度、预平衡、板型和布局策略。荧光读数还要记录激发与发射波段、顶读或底读、焦高和增益；发光和快速显色反应尤其要控制加试剂到读数的延迟。复孔用于估计移液和读数变异，仍不能代替独立样品。[微孔板推荐实践](https://www.ncbi.nlm.nih.gov/books/NBK558077/)将制造差异、蒸发、加样和读板器共同列为位置效应来源。[^microplate-selection]

## 荧光、发光与环境敏感性 { #fluorescence-luminescence }

荧光团吸收激发光后进入激发态，经过振动弛豫等过程再发射光子；发射波长通常长于主要激发波长，这段差异常称 Stokes 位移。荧光计用激发选择器限定照明波段，再在与激发光分离的方向或光路中收集发射。荧光强度在低吸收、仪器和化学状态固定时可近似随荧光团浓度增加，但它还取决于激发功率、摩尔吸收、量子产率、收集几何和检测器响应，因此普通相对荧光单位不能脱离设置直接跨仪器比较。

浓度升高时，入射激发光在样品前部已被大量吸收，或发射光在离开样品前被再次吸收，形成内滤效应；碰撞、络合、氧、pH、温度和邻近基团可造成淬灭，长时间或强光照会引起光漂白。样品本身、培养基、塑料和杂质还会自发荧光。应设置无标记样品、试剂空白和阳性荧光对照，扫描激发／发射谱，选择低吸收范围，固定温度、时间和曝光历史；必要时通过稀释、前表面几何、时间分辨或经验证的校正模型处理。IUPAC 的荧光测量报告特别强调内滤、再吸收、氧淬灭和光氧化造成的系统偏差。[^iupac-fluorescence]

化学发光和生物发光由反应生成激发态产物，不需要外部激发光，因而避开激发散射，却更依赖反应动力学、底物耗竭、氧和加样—读数延迟。积分信号、峰值和固定时点读数代表不同量；自动加样器、摇板和逐孔读数的时序必须进入方法。暗计数、相邻孔串扰和高信号饱和仍会产生背景或非线性。

## 生化发色团与差示读出 { #biochemical-chromophores }

生化测定常利用氧化还原或结合状态改变发色团。NADH 和 NADPH 在约 340 nm 有特征吸收，而相应氧化型在该波段响应很弱，因此可连续追踪脱氢酶或耦联反应。常用的 $\varepsilon_{340}$ 约为 $6.22\times10^3\ \mathrm{L\,mol^{-1}\,cm^{-1}}$，其本身也有测定不确定度；换算活力时还要使用实际光程、反应总体积和化学计量。[^nadh-absorptivity] 黄素的吸收和荧光随氧化态、蛋白结合和微环境改变，不能把 FMN、FAD 各指定一个永远不变的峰位。硫胺素可经氧化形成荧光性的硫色素，经典硫色素法仍需要提取、反应空白和基质校准。[^thiochrome-assay]

细胞色素的还原—氧化差谱可分辨重叠的 $\alpha$、$\beta$ 和 Soret 带，人工电子供体、受体或呼吸抑制剂则帮助把变化定位到反应链的一段；这些试剂改变的是实验体系，不是生理电子通路本身。蛋白质的 280 nm 吸收主要来自 Trp、Tyr 和二硫键等发色团，核酸、辅基和散射都会干扰；核酸的 260 nm 吸收及纯度比值边界见[核酸与核苷酸](../../biochem/nucleic_acid.md#uv-absorbance)。任何“按一个固定系数直接换浓度”的方法，都须先确认样品组成和条件与该系数的定义相容。

## 蛋白质总量的经典方法 { #protein-quantitation }

蛋白质没有一种对所有序列、缓冲液和浓度都同样准确的通用显色反应。方法选择应从样品量、目标范围、蛋白组成、去污剂、还原剂、螯合剂和后续实验反推，再用与样品尽量相似的蛋白标准和基质配制标准曲线。

| 方法 | 主要响应来源 | 典型优势与限制 |
| --- | --- | --- |
| $A_{280}$ | 芳香族残基和二硫键的紫外吸收 | 快速、无显色试剂；响应强烈依赖序列，核酸、辅基和浑浊会干扰 |
| 双缩脲法 | 碱性条件下肽键与 Cu$^{2+}$ 的配位显色 | 对蛋白间组成差异相对较小，线性范围常较宽；灵敏度较低，铜络合或还原物会干扰 |
| Lowry／Folin–酚法 | 铜反应后，Folin 试剂被蛋白相关基团还原 | 较双缩脲灵敏；加样顺序和时间敏感，多种缓冲组分与还原物会响应 |
| BCA 法 | 蛋白促成 Cu$^{2+}$→Cu$^+$，BCA 与 Cu$^+$ 形成紫色络合物 | 灵敏、终产物相对稳定，耐受部分去污剂；还原剂、强螯合剂和某些样品组分会干扰 |
| Bradford 法 | Coomassie Brilliant Blue G-250 与蛋白结合后光谱转移 | 快速、试剂单一，常耐受还原剂；去污剂可干扰，不同蛋白的显色响应差异较大 |
| 总氮法 | 消解或燃烧后测氮，再以转换因子估算蛋白 | 可用于复杂样品的总量基准；非蛋白氮和样品特异含氮比例决定转换偏差，不能固定认为 $1\ \mathrm{g\ N}=6.25\ \mathrm{g}$ 蛋白适用于一切材料 |

双缩脲、Lowry、BCA 和 Bradford 的具体波长、温度、孵育时间、样品体积及可用范围依版本而变。教学配方可以训练空白、标准系列、混匀、计时和稀释换算，却不能把某一份试剂表变成所有试剂盒的共同 SOP。Bradford 原始方法建立了蛋白—染料结合的快速定量，Lowry 法和 BCA 法则分别利用 Folin 反应与 Cu$^+$—BCA 络合提高灵敏度；这些反应的共同局限是“等质量不同蛋白”未必产生完全相同的颜色。[^classic-protein-assays]

标准蛋白的选择因此属于测量模型的一部分。以 BSA 标定的混合蛋白结果应报告为 BSA 当量或说明校准物；纯化蛋白若有已知序列，可用经验证的消光系数或氨基酸分析交叉确认。样品和标准的缓冲液应匹配，显色反应按统一时钟处理，超范围样品稀释重测并计入稀释倍数。电泳单条带、HPLC 单峰或单一端基是纯度证据的一部分，不等于总量方法已经给出化学均一的蛋白；分离过程中的回收率和比活力由[分离、层析与蛋白质制备](separation_protein.md)继续承接。

## 经典定量反应的适用边界 { #classical-assay-boundaries }

抗坏血酸的 2,6-二氯酚靛酚（DCPIP）滴定保留了清楚的氧化还原学习链：酸性提取有助于减缓抗坏血酸氧化，抗坏血酸把有色的氧化型 DCPIP 还原，标准液确定滴定剂当量，再由样品消耗量计算还原型抗坏血酸。操作需要迅速、避光并控制终点，但 DCPIP 也会被其他还原物消耗，有色或浑浊提取物会遮蔽终点，脱氢抗坏血酸又不在未经还原步骤的读数中。AOAC 967.21 仍保留这一路线用于适当的维生素制剂和果汁；复杂新鲜组织若要测“总维生素 C”，应验证提取回收、氧化稳定性和基质特异性，必要时采用能分离抗坏血酸并处理脱氢型的色谱方法。[^ascorbic-acid-assay]

磷钼酸等显色法同样把抗坏血酸的还原能力转成吸光信号，不能仅凭偏磷酸或某一种掩蔽剂就宣称还原糖和所有还原物完全无干扰。沉淀、反应时间和容器材质造成的变化应通过实际方法验证。教学中比较 DCPIP 滴定与磷钼酸显色，重点是理解“化学选择性—样品基质—终点或光度读出—校准”的差异，而非记住一套固定体积。

血清胆固醇的磷硫铁显色（Zak 类反应）具有方法史价值：乙醇沉淀蛋白并提取甾醇，强酸和铁盐形成可见颜色。它使用浓硫酸、磷酸和易燃乙醇，必须置于机构批准的化学卫生和危废程序中；其他甾醇、试剂纯度和血清基质可造成偏差。教学显色结果不能直接用于个体诊断或治疗决策。现代临床结果依赖可溯源校准和标准化网络，CDC 的总胆固醇参考体系以 Abell–Kendall 和同位素稀释质谱等参考程序维持跨方法可比性。[^cholesterol-standardization]

原素材中的 DNS—淀粉酶、酪蛋白—Folin 蛋白酶、转氨酶显色和甲醛滴定求动力学参数，仍会使用本页的空白、标准曲线和光度原则；其反应时间、初始线性区、活力单位和动力学拟合归入下一页[酶活性测定与动力学](enzyme_kinetics.md)。离子交换柱后的 Bradford 追踪和氨基酸薄层显色，则在[分离、层析与蛋白质制备](separation_protein.md)中保留完整操作链。这样分流的是方法问题，不是删去经典实验。

## 表面等离子共振 { #surface-plasmon-resonance }

表面等离子共振（SPR）不是普通溶液吸收测定。偏振光经棱镜照射金属薄膜，在特定角度或波长把能量耦合到金属—介质界面的表面等离子模式；靠近表面的折射率变化会移动共振条件。将一种结合分子固定在传感表面，让另一种分子随流动相通过，仪器便可实时记录结合与解离造成的响应变化。它无需给分析物加荧光或放射性标签，却仍可能受到固定化改变活性、表面取向和非特异吸附的影响，“无标记”不等于“无扰动”。

可靠实验至少需要未固定或无关配体参照通道、缓冲液空白和多个分析物浓度，并检查再生是否改变表面。溶液到表面的传质过慢会让观察到的结合速率受扩散和流动限制；固定相不均一、分析物聚集和多价结合则会使简单一比一模型失真。改变流速或配体密度、重复浓度序列、全局拟合并检查残差，有助于区分这些可能。SPR 响应支持“表面附近质量或折射率发生变化”，亲和力和速率常数只有在实验设计与模型假设都通过检验后才成立。[^spr-limitations]

## 呼吸测量与光度法之外的代理量 { #respirometry }

瓦氏呼吸器把组织、细胞或线粒体置于恒温密闭反应瓶，中心池碱液吸收 CO$_2$，压力计记录气相压力变化；结合气相体积、温度、液相溶解和空白校正，可由压力下降估计 O$_2$ 消耗。若不吸收 CO$_2$ 或改变缓冲与装置，还可设计 CO$_2$ 释放测量。它保存了“代谢反应—气体交换—物理读数—校准换算”的经典路径，也显示代理量的边界：压力变化不能自行指出是哪条代谢通路耗氧。

Clark 型电极直接连续测量封闭体系中的溶解氧，现代高分辨率呼吸仪和微孔通量分析则以不同传感器与腔体几何估计氧耗率。每种平台都要校准零氧和空气饱和状态，记录温度、搅拌、腔体体积、背景耗氧、样品量与归一化基准，并在氧浓度仍不限制呼吸的区段估计斜率。底物、ADP、抑制剂和解偶联剂能建立不同功能状态，但所谓状态 3、状态 4 和呼吸控制比依赖样品制备、底物组合与定义；一个固定阈值不能跨组织和平台代替质量判断。完整的呼吸测量指南还强调，分离线粒体增强了通路控制，却失去完整细胞的信号、底物供应和线粒体网络背景。[^respirometry-guide] 呼吸链机制和解偶联见[电子传递与氧化磷酸化](../../biochem/oxp.md#respiratory-regulation-and-uncoupling)。

## 从反应方案到结果记录 { #assay-records }

一项可复核的生化定量应让他人从报告还原以下信息：待测量及化学形态，样品来源与处理，标准物和质控物身份，空白类型，反应总体积、pH、温度与时间，容器材质和光程，仪器 ID 与性能状态，波长、带宽、读数方向、增益或积分时间，板图与加样顺序，原始响应、背景扣除、曲线模型、残差、反算与稀释，以及所有超限、重测和排除决定。仪器导出的原始文件与分析版本都应保留。

结果报告还要说明被测的是目标物本身、某种衍生物、总反应能力还是代理读出。DCPIP 消耗量首先表示在该条件下可还原染料的物质，Bradford 结果是相对于所用蛋白标准的染料响应，SPR 曲线是表面附近的响应变化，氧耗率则是所给样品与底物条件下的综合通量。把读数准确地命名，连同方法性能和不确定性报告，才能让经典实验和现代仪器共同成为可解释的生化证据。

## 参考资料与延伸阅读 { #references }

- International Union of Pure and Applied Chemistry. [Beer–Lambert law](https://goldbook.iupac.org/terms/view/B00626). *Compendium of Chemical Terminology*, 5th ed., 2025.
- National Institute of Standards and Technology. [Traceability in Molecular Spectrophotometry](https://www.nist.gov/programs-projects/traceability-molecular-spectrophotometry)；[Engineering Statistics Handbook: Instrument Calibration over a Regime](https://www.itl.nist.gov/div898/handbook/mpc/section3/mpc36.htm).
- Resch-Genger U, et al. [Time-resolved fluorescence methods: IUPAC Technical Report](https://doi.org/10.1515/pac-2013-0912). *Pure and Applied Chemistry*. 2014;86:1383–1415.
- ICH. [M10: Bioanalytical Method Validation and Study Sample Analysis](https://database.ich.org/sites/default/files/M10_Guideline_Step4_2022_0524.pdf). 2022.
- Bradford MM. [A rapid and sensitive method for the quantitation of microgram quantities of protein utilizing the principle of protein-dye binding](https://doi.org/10.1016/0003-2697%2876%2990527-3). *Analytical Biochemistry*. 1976;72:248–254.
- Lowry OH, et al. [Protein measurement with the Folin phenol reagent](https://pubmed.ncbi.nlm.nih.gov/14907713/). *Journal of Biological Chemistry*. 1951;193:265–275.
- Smith PK, et al. [Measurement of protein using bicinchoninic acid](https://pubmed.ncbi.nlm.nih.gov/3843705/). *Analytical Biochemistry*. 1985;150:76–85.
- Schuck P, Zhao H. [The role of mass transport limitation and surface heterogeneity in the biophysical characterization of macromolecular binding processes by SPR biosensing](https://pmc.ncbi.nlm.nih.gov/articles/PMC4134667/). *Methods in Molecular Biology*. 2010;627:15–54.
- Mookerjee SA, et al. [A practical guide for the analysis, standardization, and interpretation of oxygen consumption measurements](https://pmc.ncbi.nlm.nih.gov/articles/PMC9618452/). *Cell Metabolism*. 2022;34:1782–1794.

[^iupac-beer-lambert]: IUPAC Gold Book 对 [Beer–Lambert–Bouguer 定律](https://goldbook.iupac.org/terms/view/B00626)的定义同时限定平行单色辐射、均一各向同性介质、光程与浓度，并使用十进摩尔吸收系数；本页据此区分吸光度、透射比和表观散射读数。
[^nist-spectrophotometry]: NIST 的[分子分光光度计溯源体系](https://www.nist.gov/programs-projects/traceability-molecular-spectrophotometry)使用规定波长的透射／吸光参考物质传递光度量值；[SRM 2082 光程标准](https://www.nist.gov/publications/development-nist-standard-reference-material-2082-pathlength-standard-measurements)说明微量紫外测量中实际光程也需要独立表征。
[^chance-difference-spectra]: Chance B, Williams GR. [Respiratory enzymes in oxidative phosphorylation. II. Difference spectra](https://doi.org/10.1016/S0021-9258%2819%2957190-3). *Journal of Biological Chemistry*. 1955;217:395–407；同系列的[呼吸链研究](https://pubmed.ncbi.nlm.nih.gov/13271405/)以光谱和功能状态连接各电子载体。
[^nist-calibration]: NIST [Models for instrument calibration](https://www.itl.nist.gov/div898/handbook/mpc/section3/mpc361.htm)列出线性、二次、幂与非线性模型；[Data analysis and model validation](https://www.itl.nist.gov/div898/handbook/mpc/section3/mpc365.htm)要求检查残差、精密度和模型假设，不以单一相关系数放行。
[^ich-m10]: [ICH M10](https://database.ich.org/sites/default/files/M10_Guideline_Step4_2022_0524.pdf)面向药物及其代谢物在生物基质中的监管定量，覆盖选择性、校准范围、准确度、精密度、携带污染、稀释、稳定性和基质效应；正文借用其“适合预定用途”逻辑，不把监管接受界值移作所有教学实验的通则。
[^microplate-selection]: Sittampalam GS, et al. [Microplate Selection and Recommended Practices in High-throughput Screening and Quantitative Biology](https://www.ncbi.nlm.nih.gov/books/NBK558077/). *Assay Guidance Manual*；Corning 的[微孔板选择指南](https://www.corning.com/content/dam/corning/catalog/cls/documents/selection-guides/CLS-DD-081.pdf)比较透明、黑色、白色、透明底和不同孔形的检测用途。两者都要求按读数模式、仪器与实际实验选择，而不是按颜色作绝对分类。
[^iupac-fluorescence]: Resch-Genger U, et al. [Time-resolved fluorescence methods: IUPAC Technical Report](https://doi.org/10.1515/pac-2013-0912)指出高吸收样品的内滤与再吸收、氧淬灭和光氧化会改变观察到的荧光，需在样品条件与仪器响应中共同控制。
[^nadh-absorptivity]: Burgess C, et al. [Accurate Measurement of Molar Absorptivities](https://pmc.ncbi.nlm.nih.gov/articles/PMC6716045/)回顾 NADH 在 340 nm 的经典数值及其约 2%–3% 系统不确定度，说明消光系数本身也属于测量链而非无误差常数。
[^thiochrome-assay]: ICC Standard No. 117 [Chemical Determination of Thiamine in Cereal Products](https://icc.or.at/icc-standards/standards-overview/117-standard-method)以硫色素荧光法测定游离硫胺素，并明确扣除样品提取物的空白荧光；不同食品和磷酸酯形式仍需相应前处理。
[^classic-protein-assays]: 经典原始研究包括 Bradford 的[蛋白—染料结合法](https://doi.org/10.1016/0003-2697%2876%2990527-3)、Lowry 等的 [Folin–酚法](https://pubmed.ncbi.nlm.nih.gov/14907713/)和 Smith 等的 [BCA 法](https://pubmed.ncbi.nlm.nih.gov/3843705/)；方法间的样品与干扰差异可参见 López-Moreno 等的[蛋白定量方法综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7597951/)。
[^ascorbic-acid-assay]: [AOAC Official Method 967.21](https://academic.oup.com/aoac-publications/book/45491/chapter-abstract/445550511)规定用 2,6-二氯酚靛酚滴定适用样品中的抗坏血酸；Tarrago-Trani 等的[多类食品方法验证研究](https://doi.org/10.1016/j.jfca.2012.03.004)说明其他还原物、有色基质、提取回收和脱氢抗坏血酸会改变结果。
[^cholesterol-standardization]: CDC [CVD Clinical Reference Laboratory](https://www.cdc.gov/clinical-standardization-programs/php/cvd/cvd-reference-laboratory.html)说明总胆固醇参考测量与标准化网络怎样通过参考程序、NIST 标准物和实验室能力保持结果可比；其用途与历史磷硫铁教学显色不同。
[^spr-limitations]: Schuck P, Zhao H. [The Role of Mass Transport Limitation and Surface Heterogeneity in SPR Biosensing](https://pmc.ncbi.nlm.nih.gov/articles/PMC4134667/)系统说明传质、表面异质性、固定化和模型假设怎样影响表观结合速率及亲和力。
[^respirometry-guide]: Mookerjee SA, et al. [A practical guide for the analysis, standardization, and interpretation of oxygen consumption measurements](https://pmc.ncbi.nlm.nih.gov/articles/PMC9618452/)比较 Clark 型电极与板式通量分析，并讨论呼吸状态、归一化和生理解释边界；传统 Clark 电极操作另见 Li Z, Graham BH 的[方法章节](https://pmc.ncbi.nlm.nih.gov/articles/PMC8711122/)。
