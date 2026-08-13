# 酶活性测定与动力学

酶促反应可以留下颜色、吸光度、荧光、氧耗、酸碱当量或色谱峰，但仪器直接读到的仍只是信号。只有把信号变化对应到一条写明方向和化学计量的反应，再限定样品量、温度、pH、反应时间及检测范围，斜率才成为酶活性；进一步改变底物或抑制剂浓度并检验模型，才可能得到 $K_m$、$k_{cat}$ 或 $K_i$。同一种酶在不同条件下测得的数值可以明显不同，这正是酶活性属于“规定测定系统中反应速率”的含义。

酶活性测定沿真实实验顺序进入反应体系建立、进程曲线、初速、单位换算、底物饱和与抑制实验，并覆盖 DNS 淀粉酶法、酪蛋白—Folin 蛋白酶法、甲醛滴定和转氨酶显色这组经典教学路径。米氏方程及抑制类型的理论推导见[酶动力学](../../biochem/enzyme_dynamics.md#fundamental-rate-models)，吸光度、标准曲线和微孔板读数见[光谱测定与生化定量](spectroscopy_assays.md#optical-signal-chain)，共同的对照与原始数据要求见[实验设计、记录与数据质量](../foundations/design_data.md#controls-quality-samples)。

## 测量对象与反应边界 { #measurement-object }

### 反应式、方向与催化实体 { #reaction-definition }

设计测定前先写出配平的总反应，并明确本次观察的是正向还是逆向。以乳酸脱氢酶为例，

$$
\begin{aligned}
\mathrm{pyruvate+NADH+H^+}
&\rightleftharpoons\\
\mathrm{L\!\!-lactate+NAD^+}.
\end{aligned}
$$

若追踪 340 nm 吸光度下降，直接测量的是 NADH 的消耗；在上述计量下，一摩尔 NADH 对应一摩尔反应。若改从乳酸方向测 NADH 生成，底物、最适条件、平衡驱动力和干扰都随方向改变。报告“LDH 活性”而省去方向，会把两个不同测定系统压成同一个数字。

催化实体也须具体到来源和状态：生物种、组织或细胞系、亚细胞级分、同工酶或突变体、纯化程度、辅因子装载和保存历史都可能改变读数。粗提液中的目标反应还可能由多个同工酶或旁路共同贡献，一种底物或抑制剂提供的选择性通常需要其他证据补强。酶学数据报告标准（Standards for Reporting Enzymology Data，STRENDA）因此要求同时报告酶身份、制备、配平反应、方向、底物范围、温度、pH、缓冲液、金属与辅因子，以及实际被检测的反应物。[^strenda-assay-reporting]

### 直接、间接与耦联测定 { #assay-formats }

测定可按“信号怎样产生”和“反应是否被终止”分成几种相互独立的形式。

| 形式 | 读数链 | 适合回答的问题 | 主要控制点 |
| --- | --- | --- | --- |
| 直接连续测定 | 连续观察目标反应物，如 NADH、氧或质子 | 初速、进程曲线与时间依赖变化 | 目标物响应、仪器线性、混合死时间和光漂移 |
| 直接不连续测定 | 分时取样并淬灭，再测底物或产物 | 无法原位读取、需分离产物的反应 | 各管启动与终止时间、淬灭完整性、终止后稳定性 |
| 间接化学测定 | 产物经 DNS、Folin 或 DNPH 等反应显色 | 经典水解酶、转氨酶等端点测定 | 衍生反应选择性、基质空白、标准物与计量换算 |
| 酶耦联测定 | 辅助酶把目标产物转成可测物 | 无天然光学信号的反应和多底物反应 | 耦联酶过量、辅因子、初始滞后及对耦联步骤的干扰 |

在耦联体系中，目标酶生成中间物，辅助酶再生成 NADH、NADPH 或其他可测产物。辅助步骤必须比目标步骤快，并在所用底物、抑制剂和溶剂条件下保持活性；否则读到的是耦联酶的限速或失活。中间物建立稳态前常出现短暂滞后，增加辅助酶量、预平衡共同组分并检查整条进程曲线，才能找到反映目标反应的区段。对待测抑制剂，还要单独挑战检测反应和耦联酶，排除化合物直接吸光、淬灭、氧化 NADH 或抑制辅助酶。[^coupled-assay-lag]

## 进程曲线与初始速率 { #progress-curves }

### 初速区的建立 { #initial-rate-window }

把产物量或底物消耗量对时间作图，通常会看到混合与温度平衡阶段、近似线性区和逐渐弯曲的后段。初始速率 $v_0$ 来自前稳态瞬变之后、底物尚未显著耗竭之前的稳定斜率，而不是预先规定的“前 5 分钟”。底物消耗、产物抑制、逆反应、酶失活、吸附和检测器饱和都会使后段偏离直线。低转化率常以不超过约 10% 作为开发起点，但仍须用实际进程曲线确认，不能把这个经验值替代线性检验。[^initial-rate-guidance]

建立工作区时，应在至少几个酶量下记录完整时间过程。有效初速区通常同时满足：扣除空白后斜率稳定；斜率在适当范围内与加入酶量近似成比例；底物与辅因子没有明显耗竭；终点信号仍处于检测器和显色方法的可报告范围。酶量加倍而斜率没有相应改变时，应检查底物不足、传质、聚集、抑制性杂质、耦联步骤和信号饱和，而不是只截取一段更直的曲线。

温度和平衡顺序直接进入反应时钟。通常先让底物、缓冲液和必要辅因子达到测定温度，再用酶或某个底物统一启动；快速反应可借助自动加样、停流或快速淬灭。逐管手工操作时记录每管的实际启动和终止时刻，按固定间隔错峰，而不是让所有试管在名义上同时反应。改变底物浓度时应保持总体积、缓冲能力、离子强度和溶剂比例尽可能一致，并检查高浓度底物是否同时改变 pH、黏度或渗透条件。

### 空白、零时刻与反应对照 { #blanks-controls }

空白要对应背景的来源。无酶管可显示底物自发反应和试剂背景，无底物管可显示样品自身吸收或旁路反应，灭活酶对照还能揭示酶制剂带入的发色物，但加热或强酸也可能改变基质，不能自动等价于无催化活性。对于不连续测定，零时刻管应让终止剂先于酶或底物接触，使样品经历同样的显色与离心流程；只用水代替样品往往扣不掉样品本底。

每批还应包含已知活性的阳性对照或参考制剂、检测反应的产物标准、试剂空白和适当的溶剂对照。重复孔估计同一反应混合与读数的技术波动，独立酶制备或独立生物样品才支持更广的重复性判断。若样品来自动物血液或组织，来源、伦理审批、个体标识、采集与保存时间都属于测定链；已有合规剩余样品可满足教学目标时，不应为了演示而额外采集，相关原则见[动物、无脊椎动物与野外材料的伦理](../foundations/safety_ethics.md#animal-and-field-ethics)。

## 活性单位与信号换算 { #activity-units }

### 从信号斜率到物质转化率 { #signal-to-activity }

设反应体积为 $V_r$，加入样品体积为 $V_s$，样品预先稀释倍数为 $D$。若每发生一摩尔目标反应会消耗 $|\nu|$ 摩尔 NADH，340 nm 吸光度斜率为 $dA_{340}/dt$，实际光程为 $l$，NADH 的摩尔十进吸收系数为 $\varepsilon_{340}$，则原样品的催化活性浓度可写为

$$
a=\frac{\left|dA_{340}/dt\right|V_rD}
{\varepsilon_{340}l|\nu|V_s}.
$$

时间若以分钟计，结果先得到 $\mathrm{mol\,min^{-1}}$ 相对于样品体积的量；改为秒才与 katal 的定义一致。微孔板光程随体积和孔形改变，须使用经验证的光程校正或标准曲线。显色端点则先由同批标准曲线把吸光度换为产物当量，再扣除空白并除以反应时间；标准与样品若经历不同加热、终止或基质，曲线斜率不能直接移用。

催化活性的国际单位制（International System of Units，SI）单位为 katal，$1\ \mathrm{kat}=1\ \mathrm{mol\,s^{-1}}$。实验室仍常用酶单位 U，约定 $1\ \mathrm{U}=1\ \mathrm{\mu mol\,min^{-1}}=16.667\ \mathrm{nkat}$。U 的定义必须附带指定反应和测定条件；国际单位（international unit，IU）、U、Sigma unit 或某种“每毫升每小时增加若干吸光度”的单位，只有在定义完全相同时才能换算。[^activity-units]

### 总活性、比活性与周转数 { #total-specific-activity }

活性浓度乘以样品总体积得到总活性，适合追踪提取和纯化回收；总活性除以样品总蛋白质量得到比活性，常写作 U/mg，可观察目标酶相对富集。比活性同时受蛋白定量方法、非目标蛋白和失活目标酶影响，不能独自证明纯度。纯化流程还应同时计算

$$
\text{回收率}=\frac{\text{本级分总活性}}{\text{起始样品总活性}}\times100\%,
$$

$$
\text{纯化倍数}=\frac{\text{本级分比活性}}{\text{起始样品比活性}}.
$$

若活性位点的摩尔浓度可靠，饱和底物极限速率除以活性位点浓度得到 $k_{cat}$。把总蛋白浓度当作活性酶浓度，会让未折叠、失活或不含辅基的分子进入分母。粗提液通常只能报告方法定义下的活性或比活性，不宜凭一个蛋白质量直接计算周转数。

## 底物饱和与参数拟合 { #substrate-saturation }

### 底物浓度系列 { #substrate-series }

稳态米氏参数来自一组底物浓度下各自的初始速率，而不是一条终点曲线。在开发阶段先以宽范围试探饱和尺度，再把浓度点布置到预期 $K_m$ 两侧，并包含足以约束低底物斜率和高底物平台的区域。每个浓度都要单独确认进程线性和检测范围；同一个固定反应时间可能使低底物条件已经耗竭、高底物条件仍在线性区。

多底物反应还要明确哪些底物保持恒定。测某一底物的表观 $K_m$ 时，其他底物或共底物应处在经验证的适当浓度，或用完整浓度矩阵联合拟合。MgATP 等络合物可能是真正反应物，加入的总 ATP 与自由 Mg$^{2+}$ 并不等于有效底物浓度。若高底物引起抑制、黏度变化、离子强度漂移或读数干扰，应采用相应模型或缩小可解释范围，而不是把下降点静默删除。

### 原始速率的非线性拟合 { #nonlinear-fitting }

单底物米氏模型写为

$$
v_0=\frac{V_{\max}[S]}{K_m+[S]}.
$$

现代参数估计直接对未变换的 $v_0$ 与 $[S]$ 做非线性拟合，报告模型、权重或误差结构、参数置信区间、残差和原始数据。Lineweaver–Burk 双倒数图仍可训练截距与斜率的代数关系，也能让某些偏离更醒目，但倒数变换会放大低底物和小速率的误差，不应用作实验的默认参数估计。若数据没有跨越 $K_m$ 或没有接近平台，$V_{\max}$ 与 $K_m$ 会高度相关；软件仍能输出数字，却不表示参数已被数据约束。[^nonlinear-parameter-estimation]

$K_m$ 是指定模型和条件下的操作性参数，不普遍等于结合解离常数，也不等于“最适底物浓度”。同工酶、底物方向、pH、温度、辅因子和修饰状态改变时，参数会随之变化。用一次实验比较处理组时，应尽量同批测量并检查酶量比例；要比较不同实验室或不同物种的数值，则须先确认反应方向、催化实体、缓冲体系和单位相容。

## 抑制与激活测定 { #inhibition-assays }

抑制实验从无抑制剂的可靠初速测定开始，再在多个底物和抑制剂浓度下形成二维设计。每一条件保留进程曲线、溶剂对照和检测系统对照，必要时预孵育不同时间，以区分快速可逆、慢结合、时间依赖失活和酶本身不稳定。竞争、反竞争、混合和纯非竞争是模型对速率面的描述；只观察一个底物浓度下活性下降，不能确定抑制类型。

$IC_{50}$ 表示特定酶量、底物浓度、孵育时间和读出方式下使响应降低一半的总抑制剂浓度。$K_i$ 则属于指定抑制模型；即便简单竞争模型可用 Cheng–Prusoff 关系换算，也要求模型、自由浓度和稳态条件成立。抑制剂浓度与酶浓度相近时会发生显著配体耗竭，常规自由浓度近似失效，应使用保留质量守恒的紧密结合模型。[^inhibition-parameters]

表观激活也要拆分来源。金属或辅因子补足、酶稳定化、底物溶解度变化、荧光增强和空白降低都可能使信号上升。只有在检测链不受直接影响、反应条件可比并有浓度响应时，才可把变化归于催化体系；要进一步称为别构激活，还需要结合、结构或适当动力学证据。

## 淀粉水解酶与 DNS 还原糖法 { #amylase-dns }

### 淀粉水解方式的比较 { #starch-hydrolase-specificity }

淀粉酶名称对应反应方式，耐酸性与耐热性则是随物种、同工酶和制剂而变化的稳定性属性。用 70 ℃ 或 pH 3.6 选择性钝化某一种酶时，需要以当前样品的残余活性验证这种处理能否分辨组分。

| 催化活动 | 主要切割位置 | 主要产物与分支边界 | DNS 读数的含义 |
| --- | --- | --- | --- |
| $\alpha$-淀粉酶（EC 3.2.1.1） | 内切多糖链中的 $\alpha$-(1→4) 键 | 生成不同长度糊精和寡糖；不直接水解 $\alpha$-(1→6) 分支键 | 新还原端增加，但不能由总颜色唯一推出产物组成 |
| $\beta$-淀粉酶（EC 3.2.1.2） | 从非还原端逐次释放麦芽糖 | 遇分支受阻，形成 $\beta$-极限糊精 | 以麦芽糖当量表达较直观，仍受其他还原糖影响 |
| 葡糖淀粉酶（EC 3.2.1.3） | 从非还原端逐次释放葡萄糖 | 主要作用 $\alpha$-(1→4)，许多制剂也能处理邻近 $\alpha$-(1→6) 键 | 葡萄糖标准较相容，实际产物谱仍依酶制剂而变 |
| 异淀粉酶／普鲁兰酶等脱支酶 | 水解特定底物中的 $\alpha$-(1→6) 键 | 去除分支，底物范围和链长要求因 EC 条目而异 | 还原端信号可增加，但不能只凭 DNS 区分是哪类脱支酶 |

IUBMB 的反应条目把 $\alpha$-淀粉酶定义为内切 $\alpha$-(1→4) 水解，把葡糖淀粉酶定义为从非还原端连续释放葡萄糖，并分别列出 $\beta$-淀粉酶、异淀粉酶和普鲁兰酶的底物边界。原表中“$\alpha$-淀粉酶跨越分支”“糖化淀粉酶无条件跨越分支”和把异淀粉酶、普鲁兰酶视为完全同义，都会掩盖这些差别。[^amylase-nomenclature]

### 教学测定链与结果解释 { #dns-workflow }

一套教学方案以 1% 糊化淀粉为底物，在缓冲液和 55 ℃ 条件下预平衡，以酶启动并精确反应 5 min，再用 NaOH 终止；随后取等量终止液与 DNS 试剂混合，沸水浴显色 3 min，冷却后定容并在约 540 nm 读取。麦芽糖标准管经历同样的 DNS、加热、冷却和定容过程。这个顺序呈现了“底物状态—温度平衡—统一启动—定时终止—衍生显色—标准换算”的训练主线；具体浓度、温度和时间属于该教学配方，换酶源、底物或 DNS 版本时必须重新建立工作范围。

DNS 在强碱和加热条件下响应还原性糖及其他还原物，颜色代表所用标准物的还原糖当量，并不专属于麦芽糖。淀粉链每被切开一次可增加一个还原端，但不同链长、异头体平衡和产物组成会改变质量与颜色的对应。把葡萄糖质量换算为无水葡萄糖基质量时会出现 $162/180=0.9$ 的计量因子；只有待换算的物种和标准定义相符时才能使用，不能把 0.9 机械乘入所有多糖酶活公式。Miller 的经典 DNS 论文确立了还原糖显色入口，现代使用仍须通过实际标准和基质验证响应。[^dns-reducing-sugar]

终止后的碘反应可以显示是否仍有足够长的淀粉链，却不能证明反应期间底物始终处于动力学饱和。底物过量应由改变酶量、缩短时间和提高底物浓度时初速的响应共同确认。原始记录还要注明糊化方式、底物批次、酶稀释液、各管实际计时、终止后稀释倍数和标准物种；粗提液自身的还原糖须用相应零时刻或样品空白扣除。

## 酪蛋白—Folin 蛋白酶法 { #casein-folin }

酪蛋白提供多种肽键和可溶性水解片段。经典测定让酶与酪蛋白在规定 pH 和温度下反应，随后加入三氯乙酸（TCA）终止并沉淀未水解的大分子蛋白；离心或过滤后，取上清在碱性条件下与 Folin–Ciocalteu 试剂显色，以酪氨酸标准换算为酪氨酸当量。Anson 的早期蛋白酶测定和后来的标准化教学法都保留了“蛋白底物水解—酸沉淀分离—可溶产物显色”的结构。[^casein-protease-assay]

一套教学方案以酪蛋白和磷酸缓冲液预平衡，加入蛋白酶后精确反应 5 min，以 TCA 终止，离心取上清，再加入碳酸钠与 Folin 试剂，室温显色 15 min 后约在 680 nm 读取；酪氨酸标准系列与样品显色步骤保持一致。Folin 试剂加入后颜色会继续发展，因而各管要沿同一节拍逐管加入并立即一致混匀，同时避免起泡、溢出和液体挂壁。空白管应让 TCA 先接触底物，再补加酶，使酶制剂本身携带的可溶性芳香物和颜色经历同一流程。不同 Folin 配方常采用不同波长、试剂体积和显色时间，应以当前方法验证为准。

Folin 信号来自酪氨酸、色氨酸等可还原试剂的基团及其他还原物，水解产物并非全是游离酪氨酸。因此结果宜写成“每分钟释放的酪氨酸当量”，除非已经用分离分析确认具体产物。TCA 出现大量白色沉淀只说明体系中有可被酸沉淀的蛋白，不证明酪蛋白在整个反应中处于饱和；底物饱和与初速仍要用浓度系列和进程曲线检验。不同蛋白酶对酪蛋白位点的选择也不同，等量肽键断裂不一定产生相同的可溶片段和 Folin 响应。

## 甲醛滴定与端点动力学的方法史 { #formol-titration }

Sørensen 甲醛滴定利用甲醛与氨基酸或肽的游离氨基反应，使体系表现出可用标准碱滴定的酸性变化。它曾用于估计氨基氮和跟踪蛋白水解，能清楚训练空白、滴定当量和端基增加的概念；氨、脯氨酸、酪氨酸、肽组成、初始酸碱状态和终点判定都会改变响应，混合水解物的滴定体积不能直接等同于某一种氨基酸的物质的量。[^formol-titration-history]

一套历史教学方案设置 10、20、30、40 g/L 酪蛋白系列，以相同胰蛋白酶量反应 5 min，再倒入预先中和并含指示剂的甲醛中，用 0.1 mol/L NaOH 滴至规定终点，最后以双倒数图求 $K_m$。逐管按固定间隔加酶、分别计时，终点立即定量转移并用少量水洗涤反应管，可以减少各管反应时长和转移损失的差异；洗液必须计入最终体积和空白。这套顺序在每个底物浓度只给出一个固定时间端点，初速尚未得到验证，底物黏度、混合、终止和端基组成也进入同一个滴定量；用四点端值和双倒数直线得到的参数属于该配方下的粗略表观估计。

若教学目标是测 $K_m$，应在每个酪蛋白浓度下设置多个反应时间或连续读出，先确认低转化区和酶量比例，再对初速—底物浓度原始数据做非线性拟合；甲醛滴定可作为其中一种产物读出，与更选择性的胺反应或色谱结果比较。甲醛有吸入、皮肤和致癌危害，TCA、强碱和加热显色同样需要机构风险评估、通风、相容防护和危废流程；具体操作采用场地现行的标准操作规程（standard operating procedure，SOP）。

## 转氨酶、脱氢酶与多酶复合体 { #aminotransferase-dehydrogenase }

### DNPH 转氨酶显色 { #dnph-alt }

丙氨酸氨基转移酶（ALT）催化

$$
\begin{aligned}
\mathrm{L\!\!-Ala\!+\!2\!\!-oxoglutarate}
&\rightleftharpoons\\
\mathrm{pyruvate\!+\!L\!\!-Glu}.
\end{aligned}
$$

Reitman–Frankel 显色法让丙酮酸与 2,4-二硝基苯肼（2,4-dinitrophenylhydrazine，DNPH）形成腙，碱化后在可见区读色，并用丙酮酸标准把颜色换算为规定孵育时间内的产物当量。一套鸭血清教学方案依次进行 37 ℃ 预温、加血清反应 60 min、加 DNPH 终止并衍生 15 min、加 NaOH 显色 15 min，在约 520 nm 读数；空白管把血清放到 DNPH 之后加入，丙酮酸钠标准系列则校准显色响应。加样次序之所以重要，是因为空白要保留血清颜色和非酶促羰基反应，却阻止 ALT 在正式反应时段生成丙酮酸。[^alt-colorimetric-assay]

DNPH 同时会响应其他羰基化合物，底物自身、血清基质、溶血和固定 60 min 端点都可能影响结果。旧式“ALT IU/100 mL”公式还容易混淆丙酮酸与丙酮酸钠的摩尔质量、反应分钟数、样品体积及酶单位；应从标准曲线得到丙酮酸物质的量，再逐项除以有效反应时间和样品体积，报告为该方法定义的活性浓度。现代 IFCC ALT 参考程序在 37 ℃ 下采用耦联速率法，由 LDH 消耗 ALT 生成的丙酮酸并连续追踪 NADH；它与 DNPH 教学法的反应链和溯源不同，二者的参考区间不能互换。[^ifcc-alt-reference]

鸭血清实验的结果只用于理解转氨、终止、衍生和校准，不能据此对动物作临床诊断。样品必须来自合规来源并按潜在生物危害处理；DNPH 的酸性配方、强碱和有机显色废液则进入相应化学危废流程。

### LDH、PDC 与 NADH 耦联读出 { #nadh-coupled-examples }

LDH 的 NADH 读出把反应速率直接压缩为 340 nm 斜率，适合连续观察初速。测丙酮酸还原方向时 NADH 下降，需扣除样品中其他 NADH 氧化过程；测乳酸氧化方向时 NADH 上升，反应平衡、pH 和底物浓度均不同。IFCC 的 LDH 方法明确规定方向、温度和组成，说明“同一酶名”仍须以完整参考程序维持实验室间可比性。[^ifcc-ldh-reference]

丙酮酸脱氢酶复合体（PDC）的总反应可通过 NADH 生成、$^{14}$CO$_2$ 释放或乙酰-CoA 生成测量。连续 NADH 法需要丙酮酸、CoA、NAD$^+$、TPP、Mg$^{2+}$ 等组分，并应设置缺少关键底物或辅因子的空白；粗线粒体或裂解物中其他脱氢酶也会改变 NADH。亚砷酸盐等砷(III)试剂可与还原型硫辛酰基体系作用，但这些高危物不应因历史上用作机制探针就进入无专门控制的教学配方。PDC 的磷酸化调控与反应机制见[三羧酸循环](../../biochem/tca_cycle.md#pyruvate-dehydrogenase)，实验读出则要把所选反应物的变化变成经对照验证的速率。

## 方法确认与结果报告 { #assay-quality-reporting }

一个可复核的酶活实验至少保存以下信息：催化实体与批次、样品来源和保存；配平反应及测定方向；直接、间接或耦联读出；底物、辅因子、金属、缓冲液、离子强度、pH、温度和总体积；启动与终止顺序；每条进程曲线的原始时点；空白、阳性对照和产物标准；选取初速区的规则；信号到物质的量再到活性单位的完整换算；稀释、样品量和归一化基准；模型、软件、权重、残差、参数不确定性及所有排除或重测决定。

结果名称应忠实于实际测量。DNS 法得到的是规定标准物的还原糖当量，酪蛋白—Folin 法得到的是 TCA 可溶片段的酪氨酸当量，甲醛滴定得到的是方法定义的可滴定氨基当量，DNPH 法得到的是规定时间内的羰基显色当量。只有在计量、选择性、初速和检测范围都成立后，才把它们换算为目标酶活；只有浓度系列和模型检验完成后，才进一步报告动力学参数。这样保留经典实验的每一步，也让每一个数字知道自己能够说明到哪里。

## 参考资料与延伸阅读 { #references }

- STRENDA Commission. [Guidelines for reporting enzyme kinetics data](https://www.beilstein-institut.de/en/projects/strenda/guidelines/). Version 1.8.
- NCBI Assay Guidance Manual. [Basics of Enzymatic Assays for HTS](https://www.ncbi.nlm.nih.gov/books/NBK92007/).
- IUPAC. [Katal](https://goldbook.iupac.org/terms/view/K03372). *Compendium of Chemical Terminology*.
- Johnson KA. [A century of enzyme kinetic analysis, 1913 to 2013](https://pmc.ncbi.nlm.nih.gov/articles/PMC4624389/). *FEBS Letters*. 2013;587:2753–2766.
- ExplorEnz. [The Enzyme List, EC 3 hydrolases](https://www.enzyme-database.org/downloads/ec3.pdf). IUBMB Enzyme Nomenclature.
- Miller GL. [Use of dinitrosalicylic acid reagent for determination of reducing sugar](https://doi.org/10.1021/ac60147a030). *Analytical Chemistry*. 1959;31:426–428.
- Anson ML. [The estimation of pepsin, trypsin, papain, and cathepsin with hemoglobin](https://pmc.ncbi.nlm.nih.gov/articles/PMC2213732/). *Journal of General Physiology*. 1938;22:79–89.
- Reitman S, Frankel S. [A colorimetric method for the determination of serum glutamic oxalacetic and glutamic pyruvic transaminases](https://pubmed.ncbi.nlm.nih.gov/13458125/). *American Journal of Clinical Pathology*. 1957;28:56–63.
- Schumann G, et al. [IFCC reference procedure for alanine aminotransferase at 37 °C](https://doi.org/10.1515/CCLM.2002.124). *Clinical Chemistry and Laboratory Medicine*. 2002;40:718–724.
- Bais R, Philcox M. [IFCC method for lactate dehydrogenase](https://pubmed.ncbi.nlm.nih.gov/7819436/). *European Journal of Clinical Chemistry and Clinical Biochemistry*. 1994;32:639–655.

[^strenda-assay-reporting]: STRENDA Commission 的[酶动力学与测定条件指南](https://www.beilstein-institut.de/en/projects/strenda/guidelines/)逐项要求催化实体、配平反应、方向、样品制备、组分浓度、温度、pH、初速、耦联步骤、单位、模型和误差；正文据此组织从反应定义到结果报告的测量链。
[^coupled-assay-lag]: Van Roy W, et al. [Analytical description of the lag phase in coupled-enzyme substrate assays](https://doi.org/10.1016/j.bej.2020.107699). *Biochemical Engineering Journal*. 2020;161:107699。该研究从连续反应模型说明辅助步骤有限时出现初始滞后，并以各步骤相对速率判断耦联酶是否成为限制环节。
[^initial-rate-guidance]: NCBI Assay Guidance Manual 的[酶测定基础](https://www.ncbi.nlm.nih.gov/books/NBK92007/)要求先建立检测系统线性、多个酶量的进程曲线和零时刻背景，再在低底物转化的稳定区估计初速；“约 10%”是经验边界，实际线性仍须逐条件确认。
[^activity-units]: IUPAC Gold Book 将 [katal](https://goldbook.iupac.org/terms/view/K03372)定义为在指定测定系统中产生 $1\ \mathrm{mol\,s^{-1}}$ 反应速率的催化活性单位；STRENDA 同时给出 $1\ \mathrm{U}=1\ \mathrm{\mu mol\,min^{-1}}=16.67\ \mathrm{nkat}$ 的换算。
[^nonlinear-parameter-estimation]: Johnson KA. [A century of enzyme kinetic analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC4624389/)比较原始饱和曲线的非线性拟合与倒数作图；Cornish-Bowden A, Eisenthal R. [Statistical considerations in the estimation of enzyme kinetic parameters](https://doi.org/10.1042/bj1390721). *Biochemical Journal*. 1974;139:721–730，说明参数估计依赖误差假设并需要相应置信区间。
[^inhibition-parameters]: Cheng YC, Prusoff WH. [Relationship between the inhibition constant and the concentration causing 50% inhibition](https://pubmed.ncbi.nlm.nih.gov/4202581/). *Biochemical Pharmacology*. 1973;22:3099–3108，给出特定竞争模型下的关系；Morrison JF. [Kinetics of reversible inhibition by tight-binding inhibitors](https://pubmed.ncbi.nlm.nih.gov/4980133/). *Biochimica et Biophysica Acta*. 1969;185:269–286，处理抑制剂与酶浓度可比时的质量守恒。
[^amylase-nomenclature]: IUBMB ExplorEnz 的 [EC 3 类完整清单](https://www.enzyme-database.org/downloads/ec3.pdf)及 [$\alpha$-淀粉酶 EC 3.2.1.1](https://www.enzyme-database.org/query.php?ec=3.2.1.1)、[葡糖淀粉酶 EC 3.2.1.3](https://www.enzyme-database.org/query.php?ec=3.2.1.3)和[普鲁兰酶 EC 3.2.1.41](https://www.enzyme-database.org/query.php?ec=3.2.1.41)条目分别给出内切、外切与脱支反应，说明名称须按实际键型、位置和产物解释。
[^dns-reducing-sugar]: Miller GL. [Use of dinitrosalicylic acid reagent for determination of reducing sugar](https://doi.org/10.1021/ac60147a030). *Analytical Chemistry*. 1959;31:426–428。该方法把还原能力转为可见吸收；标准物种、显色配方和样品中的其他还原物决定结果应表达为何种当量。
[^casein-protease-assay]: Anson ML. [The estimation of pepsin, trypsin, papain, and cathepsin with hemoglobin](https://pmc.ncbi.nlm.nih.gov/articles/PMC2213732/). *Journal of General Physiology*. 1938;22:79–89，建立酸沉淀后测可溶水解产物的经典结构；Cupp-Enyard C. [Sigma's non-specific protease activity assay—casein as a substrate](https://pmc.ncbi.nlm.nih.gov/articles/PMC2872977/). *Journal of Visualized Experiments*. 2008:e899，给出酪蛋白、TCA、Folin 和酪氨酸当量的标准化实例。
[^formol-titration-history]: Brown JH. [The formol titration of bacteriological media](https://doi.org/10.3181/00379727-20-9). *Proceedings of the Society for Experimental Biology and Medicine*. 1922;20:29–32。文中说明氨基酸、肽和铵均可影响甲醛处理后的可滴定酸度，且反应受水分和甲醛过量影响，支持把结果限定为方法定义的氨基当量。
[^alt-colorimetric-assay]: Reitman S, Frankel S. [A colorimetric method for the determination of serum transaminases](https://pubmed.ncbi.nlm.nih.gov/13458125/). *American Journal of Clinical Pathology*. 1957;28:56–63。原法利用碱性条件下不同 $\alpha$-酮酸 DNPH 腙的吸收差异，把定时反应后的羰基产物用于转氨酶活性估计。
[^ifcc-alt-reference]: Schumann G, et al. [IFCC primary reference procedure for alanine aminotransferase at 37 °C](https://doi.org/10.1515/CCLM.2002.124). *Clinical Chemistry and Laboratory Medicine*. 2002;40:718–724。该参考程序与历史 DNPH 端点法采用不同的连续耦联读出，结果必须连同程序与温度解释。
[^ifcc-ldh-reference]: Bais R, Philcox M. [IFCC method for lactate dehydrogenase](https://pubmed.ncbi.nlm.nih.gov/7819436/). *European Journal of Clinical Chemistry and Clinical Biochemistry*. 1994;32:639–655。参考程序明确乳酸—NAD$^+$ 反应方向、组分和光度测量条件，用以维持催化活性浓度的可比性。
