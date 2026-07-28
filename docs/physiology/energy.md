# 能量代谢与体温

人体从食物取得化学能，其中一部分经代谢转化为 ATP、还原当量和离子梯度，另一部分最终成为热；肌肉还可以把化学能转成对外机械功。与此同时，机体不断通过辐射、对流、传导和水分蒸发与环境交换热量。能量代谢与体温因此不是两个并列的名词：前者决定体内产热和储能的速率，后者又通过酶反应、神经活动和效应器招募反过来改变能量消耗。

本页讨论全身尺度的能量收支、测量方法和体热调节。ATP 水解与氧化还原反应的化学依据见[生物能学](../biochem/bioenergetics.md)，呼吸链怎样在 ATP 合成与 UCP1 产热之间分配质子动力势见[电子传递与氧化磷酸化](../biochem/oxp.md#ucp1-and-if1)，运动时各供能系统与循环、呼吸的整合留给[运动生理与整体适应](exercise_environment.md)。

## 能量收支连接摄入、消耗与体内储库 { #whole-body-energy-balance }

全身能量守恒可写成一个有时间尺度的账本：

$$
\frac{dE_{store}}{dt}=E_{in}-E_{out}.
$$

$E_{in}$ 是实际被吸收并可利用的食物能，不等于食物在量热弹中完全燃烧所得的总能；$E_{out}$ 包括散失的热、完成的外功以及随尿、粪等离开机体的可燃物能量。两者之差进入或离开糖原、三酰甘油和体蛋白等储库。短时正平衡可以先改变糖原和伴随水分，长期持续的正、负平衡才更可能转化为明显的组织增减。这个方程只给出守恒约束，不能把每日一个固定能量差机械换算成长期线性体重变化，因为体重和组成改变后，静息消耗、活动成本、摄入和吸收也会随之调整。[^energy-balance]

ATP 是高周转的直接能量货币，磷酸肌酸等磷酸原可在秒级缓冲 ATP/ADP；它们的池量很小，不是与脂肪或糖原并列的长期“能量仓库”。糖原适合较快动员并伴随水储存，三酰甘油还原程度高、含水少，是容量更大的长期燃料。体蛋白则首先承担结构、催化、运输和信号功能，但氨基酸始终存在合成、分解和氧化通量，不能概括为“平时完全不供能”。各底物所占比例取决于进食、禁食、运动强度、激素、组织和训练状态，不存在适用于所有人的糖、脂肪固定供能百分比。

体重指数 $\mathrm{BMI}=\mathrm{mass\,(kg)}/\mathrm{height\,(m)^2}$ 是体重相对身高的粗略描述，不能区分脂肪、肌肉、水分和骨量；同一数值的健康含义还受年龄、体型和人群背景影响。它可以用于人群筛查，却不能代替能量收支、身体组成或代谢状态的测量。肥胖及代谢疾病的诊断边界由[糖与能量代谢紊乱](pathophysiology/metabolic_disorders.md)承接。

## 燃料选择服从器官分工与当前状态 { #fuel-selection }

餐后，肠道把糖、氨基酸和脂质分别送入门静脉或淋巴，胰岛素等信号促进许多组织摄取、氧化和储存；吸收后期与禁食时，肝糖原分解、糖异生、脂肪组织脂解和肝酮体生成逐步改变血中底物。脑、红细胞、骨骼肌、心肌、肝和脂肪组织具有不同的酶与转运体组合，同一种循环底物不会被所有器官按同一比例利用。[消化与吸收](digestive/digestion_absorption.md)说明营养物怎样进入体内，[代谢总论](../biochem/metabolism.md#metabolic-compartments)则说明区室与器官间交换怎样塑造通量。

蛋白质的全身状态常用氮平衡近似：

$$
N_{balance}=N_{intake}-(N_{urine}+N_{feces}+N_{misc}).
$$

正值表示观察期内体氮净保留，负值表示净丢失，接近零表示摄入与丢失大致相抵。生长、妊娠和恢复期可以出现正平衡，能量不足、创伤或某些疾病可以造成负平衡，但结果强烈依赖膳食控制、适应时间、尿液收集和皮肤等杂项丢失估计。氮平衡只给出净差，无法说明蛋白质合成与分解是否都很快，也无法定位氮在肌肉、内脏或其他组织间怎样重分配；稳定同位素示踪才可进一步估计周转。[^nitrogen-balance]

## 代谢率需要按测量边界解释 { #energy-expenditure-measurement }

代谢率是单位时间的能量转换量，可用 W、kJ·h$^{-1}$ 或 kcal·d$^{-1}$ 表示；按体重、去脂体重或体表面积归一化会回答不同问题，也可能引入新的体型偏差。一天的总能量消耗通常分为静息或基础消耗、食物热效应和活动消耗；生长、妊娠、泌乳及冷热适应还会改变这些项目之间的边界。三部分并非跨个体固定比例，尤其活动消耗随行为变化很大，食物热效应也依营养组成、餐量和代谢状态而变。蛋白质的处理通常比等能量脂肪产生更高食物热效应，但不能用“蛋白质固定 30%、糖固定 6%、脂肪固定 4%”代替实际测量。[^energy-methods]

| 方法 | 直接测得的量 | 可回答的问题 | 主要边界 |
| --- | --- | --- | --- |
| 直接测热 | 量热室内人体向环境释放的热 | 指定时段的总散热与热储存变化 | 设备复杂；若有外功或体内蓄热，瞬时散热不等于同时刻代谢产热 |
| 呼吸间接测热 | $\dot V\mathrm{O}_2$ 与 $\dot V\mathrm{CO}_2$，必要时加尿氮 | 稳态时的能量消耗和底物氧化近似 | 漏气、非稳态通气、酸碱变化、酮体或其他未计产物会使推算偏离 |
| 双标记水 | 数日至数周内 $^2$H 与 $^{18}$O 在体水中的消失速率差 | 自由生活条件下的平均 CO$_2$ 生成和总能量消耗 | 需要同位素稀释空间、分馏及平均 RQ／食物商假设；不给出逐时变化或各活动的单独成本 |

### 呼吸气体把氧化计量投影到全身 { #indirect-calorimetry }

开放式间接测热比较吸入、呼出气体的流量和组成，闭合式系统则从有限气体池中测定 O$_2$ 消耗并吸收 CO$_2$；现代人体测量多采用通气罩、面罩或代谢舱等开放系统。若蛋白质氧化没有单独校正，常用的改良 Weir 近似为

$$
EE\;(\mathrm{kcal\,min^{-1}})\approx3.941\,\dot V\mathrm{O}_2+1.106\,\dot V\mathrm{CO}_2,
$$

其中气体体积率以 L·min$^{-1}$ 计。系数来自底物氧化的化学计量和相应氧热价；它不是只用“耗氧越多，产热越多”的经验比例。若需要分开蛋白质氧化，可结合尿氮作修正，但尿氮代表的是一段时间的净氮排出，仍有收集和时序误差。[^indirect-calorimetry]

细胞或组织层面的呼吸商 $RQ=V\mathrm{CO}_2/V\mathrm{O}_2$ 描述代谢反应计量；在口鼻处测得的同一比值更准确地称为呼吸交换率 RER。稳态、酸碱和体内 CO$_2$ 储量近似稳定时，RER 才能接近组织平均 RQ并用于估计燃料混合。纯糖氧化的 RQ 约为 1，典型脂肪酸接近 0.7，蛋白质因氨基酸组成和含氮产物不同而没有一个精确通用值。过度通气、乳酸由 HCO$_3^-$ 缓冲、运动起止、糖转脂或酮体丢失都可使 RER 超出单纯底物氧化的 0.7–1.0 区间，因此不能看到 0.71 就直接诊断糖尿病，也不能把长期饥饿固定写成 0.8。[^respiratory-exchange]

### 双标记水测量自由生活期的平均消耗 { #doubly-labelled-water }

摄入 $^2$H$_2^{18}$O 后，两种稳定同位素进入体水池。$^2$H 主要随水离开，$^{18}$O 既随水也随 CO$_2$ 离开；校正稀释空间和同位素分馏后，两条消失曲线之差可估计平均 CO$_2$ 生成率，再结合平均 RQ 或食物商换算能量消耗。它很少干扰日常行为，适合测量自由生活期总消耗，却不能独立告诉我们哪一天、哪项运动或哪个器官消耗了能量。原素材所写“$^{18}$O 代谢率减 $^2$H 代谢率就是 CO$_2$”只保留了概念骨架，遗漏了这些不可省略的校正。[^doubly-labelled-water]

## 基础与静息代谢依测定条件而定义 { #basal-resting-metabolism }

基础代谢率（BMR）要求受试者清醒、平卧、身心安静、经过夜间睡眠与吸收后期，并处在不会额外招募冷、热效应器的热中性环境；静息能量消耗（REE 或 RMR）的条件通常略宽松。熟睡代谢、基础代谢和普通清醒静息测量不是同义词。报告结果时必须同时给出禁食时长、近期运动、环境、姿势、测量时段和仪器稳态条件，而不是只写“安静时测得”。

去脂体重是个体间静息消耗差异的重要解释量，但不同器官单位质量的耗能并不相同：脑、肝、心和肾的质量不大，静息代谢贡献却很高；骨骼肌总量大，单位质量静息消耗相对较低。年龄、性别和训练的表面差异有相当部分可由组织组成、器官尺度和激素状态解释，不能写成男性、儿童必然按同一幅度高于其他人群。BMR 也不与体表面积严格成正比；按 m$^2$ 归一化只是历史上常用的体型校正方法之一。[^energy-methods]

甲状腺激素、交感活动、疾病、能量缺口和体温都会改变静息消耗，但不存在“体温每升高 1 ℃，所有人的 BMR 固定增加 13%”的普遍定律。发热时的代谢增加同时包含免疫反应、心肺活动和效应器招募，既不是纯粹的温度 Q$_{10}$，也不能按单一比例反向用于个体诊断。

## 体热平衡决定温度是否继续改变 { #body-heat-balance }

代谢产生的能量并非全留在体内。把向人体增加热量规定为正，可把全身热平衡写为

$$
S=M-W\pm R\pm C\pm K-E,
$$

$S$ 是热储存率，$M$ 是代谢能量转换率，$W$ 是离开人体的外功，$R$、$C$、$K$ 分别是辐射、对流和传导换热，$E$ 是皮肤与呼吸道蒸发带走的热。$S=0$ 表示平均体热暂时不再变化，不要求各部位同温；$S>0$ 时体热积累，若组织热容近似不变，平均体温将上升。肌肉做外功的部分暂时离开身体边界，其余代谢能及内部功最终主要成为热，因而机械效率会直接改变同一任务的产热负担。[^heat-balance]

辐射、对流和传导的方向由皮肤、周围表面、空气或接触物之间的温差决定。环境低于皮温时它们通常散热；环境高于皮温时则可能向人体输入热，而不是“气温低于体温时物理散热不存在”。蒸发只能带走热，但汗液滴落或被衣物截留而未蒸发时，丢水并不等于有效散热；湿度高、空气流动弱或防护服阻隔都会减小皮肤与环境的水汽压梯度。[^heat-balance]

## 体核与体壳是连续温度场的简化 { #core-shell-temperature }

脑、胸腹腔器官和深部肌肉可近似视作温度较稳的体核，皮肤与四肢远端构成随环境和血流显著变化的体壳。寒冷时皮肤血管收缩，温度梯度向深部移动；温热时皮肤血流增加，更多组织接近体核温度。所谓体核、体壳边界会随状态移动，并不是解剖上固定的两个容器。皮肤温度还强烈受局部血流、衣物和风速影响，所以不能只用“越靠近躯干越高”描述所有时刻。[皮肤循环](blood/blood_organ.md#cutaneous-circulation)提供了血流分配的血管基础。[^skin-temperature]

体核温度本身也不是一个处处相同的数值。肺动脉血、食管下段、直肠、膀胱、鼓膜、口腔和腋窝对真实深部温度的接近程度、响应延迟和测量误差各不相同；进食、饮水、呼吸、探头位置和局部灌流都可能造成偏差。因而口腔、直肠和腋窝温度不能用三套不带条件的固定“正常范围”互相换算，连续监测还应尽量保持同一部位和方法。[^core-temperature]

体温随昼夜节律、睡眠—觉醒、活动、进食和激素状态呈可重复但非刚性的波动，最低点常接近主要睡眠期末段，较高值常在生物学傍晚出现；作息与光照改变可移动相位。排卵后孕激素相关作用通常使黄体期体核温度较卵泡期高约数十分之一摄氏度，但排卵日“必有最低点”并不可靠。儿童、成人与老年人的产热、体表面积、皮肤血流、汗腺功能和行为能力不同，不能压成“年龄越大体温越低”的直线规律。用固定权重把体核、平均皮温合成“平均体温”可以服务特定热平衡模型，权重却会随环境、血流和模型目的改变。[^temperature-rhythms]

## 多种效应器并行改变产热与散热 { #thermal-effectors }

在热中性区内，人体主要靠改变皮肤血流和行为维持热平衡，无需明显出汗或战栗；越过不同效应器的招募阈值后，反应逐层增加。每条效应通路的阈值和增益会受皮肤温度、核心温度、昼夜节律、激素、血容量、运动和热适应影响，因而不存在对所有反应同时发号施令的单一温度开关。[^thermoregulatory-circuits]

| 热负荷方向 | 主要效应器 | 神经与组织接口 | 重要限制 |
| --- | --- | --- | --- |
| 寒冷防御 | 减少皮肤血流、竖毛效应有限、战栗、非战栗产热、寻热与加衣 | 皮肤血管交感去甲肾上腺素能通路；战栗经躯体运动神经；褐色脂肪经交感—UCP1 | 血管收缩受组织灌流需求限制；持续战栗耗能并妨碍精细运动 |
| 温热防御 | 增加皮肤血流、外泌汗腺分泌、减活动、寻凉和改变衣着 | 人体有毛皮肤主动舒血管机制与汗腺交感胆碱能通路；行为通路更广 | 脱水与循环容量会限制皮肤灌流和出汗；高湿环境中汗不一定蒸发 |

战栗是骨骼肌运动单位不产生有用外功的节律性招募，肌动蛋白—肌球蛋白循环和离子泵耗 ATP 形成热；其细胞机制见[肌细胞生理](muscle.md)。人类新生儿以褐色脂肪非战栗产热尤为重要，但并非解剖学上绝对不能战栗。褐色脂肪细胞富含线粒体，寒冷相关交感信号促进底物动员并激活 UCP1，使质子回流绕过 ATP 合酶而耗散为热；成人也可保留具活性的颈部、锁骨上等棕色／米色脂肪区，但其对全身消耗的贡献依冷暴露、年龄、体组成和测量方法而变。[^brown-fat]

外泌汗腺的分泌部先产生接近等渗的原液，导管再回收 NaCl，使到达皮肤的汗通常低渗；流速很高时回收时间变短，汗 NaCl 浓度可上升。反复热暴露会提高出汗能力，并在全身盐平衡与醛固酮等作用下增强导管保盐，但不能简化为“原液经过醛固酮才立即变成低渗”。温热性、情绪性和味觉性出汗在分布和上游触发上不同，人体汗腺末梢主要仍是交感胆碱能，不能把精神性出汗统一改写成肾上腺素能。顶泌汗腺集中于腋窝、会阴等处，主要不承担全身散热。[^sweat-glands]

## 温度调节是多感受器、多回路的动态平衡 { #thermoregulatory-control }

皮肤游离神经末梢中的温度敏感通道首先报告外界变化，脊髓、内脏和脑内温度信号则提供身体已经受热或受冷的信息。皮肤传入经脊髓背角和外侧臂旁核等通路到达视前区，也经丘脑—皮层通路形成温觉与不适；视前区的异质神经元再通过背内侧下丘脑、延髓中缝等不同下行通路调节皮肤血管、褐色脂肪和战栗。出汗、血管舒缩、战栗和行为并不共享完全相同的传感权重或启动阈值。[^thermoregulatory-circuits]

这套结构同时包含反馈与前馈。体核温度变化形成反馈，皮肤在体核尚未改变时就可提前启动行为或自主反应；视觉、经验和预期也能促使人提前换衣、饮水或改变环境。行为调节往往成本低、范围大，不能作为自主调节之外的次要附录。只有当行为受限或热负荷超过交换能力时，内部效应器才承担更大压力。[^behavioral-thermoregulation]

传统“调定点”可以帮助理解发热时为何会同时出现畏寒、血管收缩和战栗，却不应被理解为下丘脑里存放着一个固定温度数字。更接近现代证据的图景是：多个相对独立的效应器环路各有阈值和增益，共同形成当时的平衡点；睡眠、激素、炎症、麻醉和适应可分别移动这些参数。[内环境与稳态](internal_env.md#operating-range)所说的运行范围，同样适用于体温。

## 发热与高体温具有不同的控制状态 { #fever-hyperthermia }

感染或炎症产生的 IL-1、IL-6、TNF 等信号可诱导脑血管相关细胞合成 PGE$_2$；PGE$_2$ 作用于视前区 EP3 相关回路，招募原本用于寒冷防御的血管收缩、寻热、战栗和产热通路。此时当前体温相对新的效应器阈值显得“过低”，所以体温正在上升的人会畏寒；炎症信号消退或前列腺素通路受抑后，阈值回落，又会出现皮肤舒张和出汗。发热是受调节的防御性升温，但并不意味着温度越高越有利，其免疫效应、代价和临床处置必须结合病因与宿主状态判断。[^fever]

高体温（hyperthermia）则指产热或环境热输入超过散热能力，或效应器本身受药物、麻醉、神经损伤等破坏；此时机体通常仍在强烈尝试散热，并非先把全部环路的阈值主动上移。两者可以并存，也不能只凭一次温度读数区分。感染、炎症、热射病及药物相关高体温的病理与处置由[炎症、发热与应激](pathophysiology/fever_inflammation_stress.md)承接。

## 参考资料与延伸阅读 { #references }

- Hall, K. D. et al. [Energy balance and its components: implications for body weight regulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC3302369/). *American Journal of Clinical Nutrition* 95, 989–994 (2012).
- Lam, Y. Y. & Ravussin, E. [Analysis of energy metabolism in humans: A review of methodologies](https://pmc.ncbi.nlm.nih.gov/articles/PMC5081410/). *Molecular Metabolism* 5, 1057–1071 (2016).
- Das Gupta, R. et al. [Indirect Calorimetry: From Bench to Bedside](https://pmc.ncbi.nlm.nih.gov/articles/PMC5477450/). *Indian Journal of Endocrinology and Metabolism* 21, 594–599 (2017).
- Westerterp, K. R. [Doubly labelled water assessment of energy expenditure: principle, practice, and promise](https://pmc.ncbi.nlm.nih.gov/articles/PMC5486561/). *European Journal of Applied Physiology* 117, 1277–1285 (2017).
- Pedersen, A. N., Kondrup, J. & Børsheim, E. [Health effects of protein intake in healthy adults: a systematic literature review](https://pmc.ncbi.nlm.nih.gov/articles/PMC3730112/). *Food & Nutrition Research* 57, 21245 (2013).
- Namisnak, L. H. et al. [Bioheat Transfer Basis of Human Thermoregulation: Principles and Applications](https://pmc.ncbi.nlm.nih.gov/articles/PMC8823203/). *Journal of Heat Transfer* 144, 031203 (2022).
- Morrison, S. F. & Nakamura, K. [Central neural pathways for thermoregulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC3051412/). *Frontiers in Bioscience* 16, 74–104 (2011).
- Romanovsky, A. A. [Skin temperature: its role in thermoregulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC4159593/). *Acta Physiologica* 210, 498–507 (2014).
- Baker, L. B. [Physiology of sweat gland function: The roles of sweating and sweat composition in human health](https://pmc.ncbi.nlm.nih.gov/articles/PMC6773238/). *Temperature* 6, 211–259 (2019).
- Tan, C. L. & Knight, Z. A. [Regulation of Body Temperature by the Nervous System](https://pmc.ncbi.nlm.nih.gov/articles/PMC6034117/). *Neuron* 98, 31–48 (2018).
- Hymczak, H. et al. [Core Temperature Measurement—Principles of Correct Measurement, Problems, and Complications](https://pmc.ncbi.nlm.nih.gov/articles/PMC8535559/). *International Journal of Environmental Research and Public Health* 18, 10606 (2021).
- Baker, F. C., Siboza, F. & Fuller, A. [Temperature regulation in women: Effects of the menstrual cycle](https://pmc.ncbi.nlm.nih.gov/articles/PMC7575238/). *Temperature* 7, 226–262 (2020).
- Jung, S. M. et al. [Brown Adipose Tissue Development and Metabolism](https://pmc.ncbi.nlm.nih.gov/articles/PMC7330484/). *Handbook of Experimental Pharmacology* 251, 3–36 (2019).
- Schlader, Z. J. [The relative overlooking of human behavioral temperature regulation: An issue worth resolving](https://pmc.ncbi.nlm.nih.gov/articles/PMC4972506/). *Temperature* 1, 20–21 (2014).
- Evans, S. S., Repasky, E. A. & Fisher, D. T. [Fever and the thermal regulation of immunity: the immune system feels the heat](https://pmc.ncbi.nlm.nih.gov/articles/PMC4786079/). *Nature Reviews Immunology* 15, 335–349 (2015).

[^energy-balance]: Hall, K. D. et al., [Energy balance and its components](https://pmc.ncbi.nlm.nih.gov/articles/PMC3302369/)。用于核对能量守恒、动态适应、静息消耗、食物热效应与活动消耗的边界。
[^nitrogen-balance]: Pedersen, A. N. et al., [Health effects of protein intake in healthy adults](https://pmc.ncbi.nlm.nih.gov/articles/PMC3730112/)。用于核对氮平衡的测量定义、收集误差及其不能反映蛋白质周转的限制。
[^energy-methods]: Lam, Y. Y. & Ravussin, E., [Analysis of energy metabolism in humans](https://pmc.ncbi.nlm.nih.gov/articles/PMC5081410/)。用于核对总能量消耗组成、BMR／RMR 条件、体组成决定因素及测量方法的适用范围。
[^indirect-calorimetry]: Das Gupta, R. et al., [Indirect Calorimetry: From Bench to Bedside](https://pmc.ncbi.nlm.nih.gov/articles/PMC5477450/)。用于核对开放／闭合测量、改良 Weir 方程和尿氮校正。
[^respiratory-exchange]: Das Gupta, R. et al., [Indirect Calorimetry: From Bench to Bedside](https://pmc.ncbi.nlm.nih.gov/articles/PMC5477450/)；Lam, Y. Y. & Ravussin, E., [Analysis of energy metabolism in humans](https://pmc.ncbi.nlm.nih.gov/articles/PMC5081410/)。用于区分组织 RQ 与口鼻 RER，并核对非稳态通气、酸碱和脂质合成等干扰。
[^doubly-labelled-water]: Westerterp, K. R., [Doubly labelled water assessment of energy expenditure](https://pmc.ncbi.nlm.nih.gov/articles/PMC5486561/)。用于核对稳定同位素消失、CO$_2$ 生成和自由生活期平均能量消耗的推算边界。
[^heat-balance]: Namisnak, L. H. et al., [Bioheat Transfer Basis of Human Thermoregulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC8823203/)。用于核对热储存、代谢、外功、辐射、对流、传导与蒸发之间的能量守恒。
[^skin-temperature]: Romanovsky, A. A., [Skin temperature: its role in thermoregulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC4159593/)。用于核对皮肤温度的血流依赖、反馈／前馈角色及多效应器环路模型。
[^core-temperature]: Hymczak, H. et al., [Core Temperature Measurement](https://pmc.ncbi.nlm.nih.gov/articles/PMC8535559/)。用于核对不同测温部位的准确度、时延和适用情境。
[^temperature-rhythms]: Baker, F. C. et al., [Temperature regulation in women](https://pmc.ncbi.nlm.nih.gov/articles/PMC7575238/)；Hymczak, H. et al., [Core Temperature Measurement](https://pmc.ncbi.nlm.nih.gov/articles/PMC8535559/)。用于核对昼夜、睡眠和月经周期相关波动及其测量边界。
[^thermoregulatory-circuits]: Morrison, S. F. & Nakamura, K., [Central neural pathways for thermoregulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC3051412/)；Tan, C. L. & Knight, Z. A., [Regulation of Body Temperature by the Nervous System](https://pmc.ncbi.nlm.nih.gov/articles/PMC6034117/)。用于核对皮肤—脊髓—臂旁核—视前区传入与皮肤血管、褐色脂肪、战栗的分路控制。
[^brown-fat]: Jung, S. M. et al., [Brown Adipose Tissue Development and Metabolism](https://pmc.ncbi.nlm.nih.gov/articles/PMC7330484/)。用于核对交感—UCP1 非战栗产热、成人棕色／米色脂肪及物种和测量边界。
[^sweat-glands]: Baker, L. B., [Physiology of sweat gland function](https://pmc.ncbi.nlm.nih.gov/articles/PMC6773238/)。用于核对外泌汗腺交感胆碱能控制、分泌—导管两阶段、NaCl 回收和热适应。
[^behavioral-thermoregulation]: Schlader, Z. J., [The relative overlooking of human behavioral temperature regulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC4972506/)；Romanovsky, A. A., [Skin temperature](https://pmc.ncbi.nlm.nih.gov/articles/PMC4159593/)。用于核对行为调节的优先性、热感觉及皮肤信号的前馈作用。
[^fever]: Evans, S. S. et al., [Fever and the thermal regulation of immunity](https://pmc.ncbi.nlm.nih.gov/articles/PMC4786079/)；Morrison, S. F. & Nakamura, K., [Central neural pathways for thermoregulation](https://pmc.ncbi.nlm.nih.gov/articles/PMC3051412/)。用于核对炎症信号—PGE$_2$—视前区回路及发热与非调节性高体温的差异。
