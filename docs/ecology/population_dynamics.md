# 种群增长、调节与空间动态

连续两次调查之间，出生、死亡、迁入和迁出不断改写种群数量。增长模型把这些过程压缩为少数参数，以便辨认增长、衰退、负反馈和时间尺度；自然种群还受到季节、时滞、随机事件和斑块交换的共同作用，通常表现为波动的时间轨迹。无密度制约增长、逻辑斯蒂增长、低密度限制、波动与调节构成局部动力学的主线，集合种群和源—汇景观则将局部种群置于空间网络中。模型是对机制的有条件表达，参数的生物学含义和适用范围与方程本身同样重要。

## 有限增长率与瞬时增长率 { #density-independent-growth }

若以固定时间步长记录种群，且每一时段的有限增长率保持为 $\lambda$，则

$$
N_{t+1}=\lambda N_t,
\qquad
N_t=N_0\lambda^t.
$$

$\lambda>1$ 表示每个时间步后数量增加，$\lambda=1$ 表示不变，$0<\lambda<1$ 表示减少；$\lambda=0$ 则表示下一时间步没有个体留下。在半对数坐标上，$\ln N_t=\ln N_0+t\ln\lambda$ 是直线，斜率为 $\ln\lambda$。这类离散表达适合年度调查、世代间投影或繁殖季脉冲明显的种群；“离散时间”说明资料和模型按固定间隔更新，也可以用于世代重叠的种群。

若把出生和死亡近似看成连续发生，并令单位个体瞬时增长率为 $r$，则

$$
\frac{\mathrm dN}{\mathrm dt}=rN,
\qquad
N(t)=N_0e^{rt}.
$$

$r>0$、$r=0$ 和 $r<0$ 分别对应增长、平衡和衰退。当离散步长为 $\Delta t$ 时，两种参数由

$$
\lambda=e^{r\Delta t},
\qquad
r=\frac{\ln\lambda}{\Delta t}
$$

相互转换。$r>0$ 时倍增时间为 $\ln2/r$，$r<0$ 时数量减半所需时间为 $\ln2/|r|$。离散增长和连续增长都假定研究时段内单位个体的平均贡献不随密度改变；由此得到的几何或指数轨迹是比较基准，适用于资源限制和其他反馈尚未主导的时段。

人口统计资料中的 $r$ 汇总了年龄或阶段特异的存活与繁殖。上述标量模型还默认研究边界封闭，或净迁移已被纳入增长率，并要求年龄／阶段组成保持稳定或对研究问题可以忽略。**内禀增长率**（intrinsic rate of increase，$r_m$）通常指特定环境、稳定年龄结构和低密度等条件下可达到的最大或近最大值；野外时间序列拟合的 $r$ 则表示相应时段和环境中的实现增长率。同样的种群在温度、资源、年龄结构或调查间隔改变后，$r$ 与 $\lambda$ 都可能改变。

## 逻辑斯蒂模型中的密度负反馈 { #logistic-growth }

资源争夺、疾病传播、天敌响应和领地排斥等过程常使单位个体增长率随密度升高而下降。连续逻辑斯蒂模型把这种综合负反馈写成

$$
\frac{\mathrm dN}{\mathrm dt}
=rN\left(1-\frac{N}{K}\right).
$$

这里 $r$ 是低密度附近的单位个体增长率，$K$ 是给定环境和模型条件下的平衡数量。模型还把年龄结构视为稳定或可忽略，并假定没有反馈时滞。初始数量为 $N_0$ 时，解为

$$
N(t)=
\frac{K}{1+\left(\dfrac{K-N_0}{N_0}\right)e^{-rt}}.
$$

$0<N_0<K$ 时，数量经历起始较慢、加速、减速和接近平衡的 S 形过程；总增长量 $\mathrm dN/\mathrm dt$ 在 $N=K/2$ 时达到 $rK/4$。这个结论来自固定 $r$、固定 $K$、无时滞且单位个体增长率随密度线性下降的模型。传统资源管理据此提出在 $K/2$ 附近获得**最大持续产量**（maximum sustainable yield，MSY），自然系统中的环境变动、年龄结构、参数误差和捕捞时滞却可能使种群越过安全范围，因此 $rK/4$ 是模型内的产量基准，实际配额还需风险评估。[^logistic-harvest]

$K$ 常译作**环境容纳量**（carrying capacity），表示给定环境和模型条件下的平衡数量。降水、营养、栖息地面积、群落组成和管理措施会使它随时间改变；有些系统还存在多个吸引状态或持续波动，需要比单一 $K$ 更丰富的描述。$1/r$ 给出模型中的特征时间尺度，受扰后的恢复方向和速度还取决于当前状态、时滞、结构及外界驱动。

## 低密度限制与阿利效应 { #allee-effect }

逻辑斯蒂模型在低密度时给出接近 $r$ 的单位个体增长率，现实中低密度种群却可能难以找到配偶、维持合作防御或改造环境，也可能失去群体取食和天敌饱和的收益。这类单位个体适合度随密度降低而下降的现象统称**阿利效应**（Allee effect）。若增长率虽下降但仍为正，称弱 Allee 效应；若存在阈值 $A$，低于阈值后种群平均转为衰退，则称强 Allee 效应。一个常用的强 Allee 效应模型是

$$
\frac{\mathrm dN}{\mathrm dt}
=rN\left(1-\frac{N}{K}\right)
\left(\frac{N}{A}-1\right),
\qquad 0<A<K.
$$

此时 $A<N<K$ 的种群增长，$0<N<A$ 的种群下降，$A$ 成为不稳定阈值。自然种群中的阈值可能随环境改变，多个低密度机制还可同时出现。Allee 效应一方面会增加稀有种群和新建立种群的失败概率，另一方面会降低少量外来个体的建立概率；反复输入、较高繁殖体压力或多个个体同时到达，可以帮助种群跨过低密度瓶颈。[^allee-effects]

## 时滞、离散更新与过度补偿 { #delays-overcompensation }

密度反馈通常不会即时完成。个体在资源丰富时形成花芽或产卵，拥挤造成的营养不足却可能到下一繁殖季才影响后代。反应时滞是过去的密度到现在才改变单位个体增长，生殖时滞则来自当前出生量依赖过去的亲本数量；年龄结构模型可把二者进一步拆开。Hutchinson 的延迟逻辑斯蒂方程用过去的数量控制当前增长：

$$
\frac{\mathrm dN(t)}{\mathrm dt}
=rN(t)\left[1-\frac{N(t-\tau)}{K}\right].
$$

当反馈时滞 $\tau$ 相对种群内在时间尺度较小时，扰动可逐渐衰减；时滞和增长潜力增大后，种群可能越过平衡值并产生持续振荡。方程中的振荡来自反馈结构，不要求每次峰值都由一次新的外界灾害触发。[^hutchinson-delay]

离散时间模型也容易出现过度补偿。Ricker 模型写作

$$
N_{t+1}=N_t
\exp\!\left[r\left(1-\frac{N_t}{K}\right)\right].
$$

较小的 $r$ 可产生稳定趋近，增大 $r$ 后可依次出现阻尼振荡、稳定周期、倍周期分岔和混沌。这里的复杂变化来自确定性非线性；自然记录中的不规则波动还可由天气、取样误差、年龄结构和种间作用产生，识别混沌需要时间序列检验和对替代机制的比较。[^ricker-model]

## 季节、反馈与随机波动 { #population-fluctuations }

季节变化是许多种群最显眼的时间结构。昆虫的越冬、羽化和寄主物候，植物的萌发与休眠，水生生物的温度和营养条件，都能在一年内形成可重复的峰谷。棉田盲蝽类监测曲线可描述为中峰型、双峰型、前峰型和后峰型；峰期由降水、寄主植物、耕作制度、迁飞和防治共同影响，“干年—湿年”的对应关系需针对具体地区和监测年份建立。

年际波动可分解为多类来源。环境随机性使同一年的温度、降水、食物或天敌条件同时影响许多个体；人口统计随机性来自有限个体各自出生、死亡和繁殖结果的偶然组合，在小种群中尤其明显；火灾、风暴、疫情等随机灾变则可能一次造成很大损失。随着种群增大，独立个体事件的相对波动通常减弱，但共同环境变化和灾变风险不会以同样方式消失。[^stochastic-extinction]

蝗灾、鼠害以及某些昆虫暴发常表现为长时间低密度后迅速升高，再因食物耗竭、天敌、病原、气候转折或迁出而下降。赤潮或有害藻华也可出现暴发—衰退过程，同时受营养盐、水体分层与混合、水文输运、摄食和种间组成制约。所谓种群平衡，是出生、死亡和迁移在一定时间尺度上的统计抵消或围绕某范围波动；数量可以持续起伏，波动中心也会随环境容纳量改变。

## 种群周期与反馈链 { #population-cycles }

有些种群的峰值间隔相对稳定。灰线小卷蛾—落叶松系统以及其他森林植食昆虫，都可能通过寄主质量下降、天敌响应和病原传播形成滞后负反馈；雪鞋兔及其捕食者的周期则涉及植物食物和捕食的共同作用。加拿大育空地区的长期野外操纵把补充食物与排除地面捕食者作因子组合，二者同时处理时雪鞋兔密度提升最大，说明食物的自下而上作用和捕食的自上而下作用可以共同限制周期振幅。[^hare-cycle]

周期长度可能接近世代时间、寄主恢复时间或消费者反应时滞，也可能被季节性外力同步。两个时间序列的同相或反相只显示相关结构，驱动方向还需比较候选机制的时滞、年龄结构和空间同步，并结合操纵实验或过程模型。食物链结构可能影响周期，但具体作用应落实到资源、消费者、病原和环境形成的反馈链。

## 衰退、局部灭绝与物种灭绝 { #decline-extinction }

当长期平均 $\lambda<1$ 或 $r<0$ 时，确定性模型给出持续衰退；在有限种群中，即使长期平均增长率略为正，随机事件也可能把数量推到零。低密度后的配偶限制、近交衰退、人口统计波动和环境恶化还可能相互加强，形成通常所说的**灭绝旋涡**（extinction vortex）。实际评估需要同时估计增长率的平均值、年际方差、个体与阶段结构、相关环境风险和迁移，单条确定性外推曲线只提供其中一个分量。

一个池塘、岛屿或林斑中的种群消失是局部灭绝，若其他斑块仍有种群，之后仍可能再定殖；物种灭绝则指其全球最后一个种群消失。二叠纪末和白垩纪末等大灭绝是跨许多类群和地理区域的地史事件，它们在此只提示尺度差异，成因、证据和宏演化后果分别进入全球变化与生命演化页面。

## 生物入侵的到达、建立、扩散与影响 { #biological-invasion }

**生物入侵**（biological invasion）是种群连续跨越地理、圈养或栽培、存活、繁殖和扩散等屏障的过程。人类活动先运输并引入个体，部分个体在新地区存活，能够自我维持繁殖后才算建立；建立种群继续向外扩散，并对本地生物多样性、生态过程、生产或健康造成显著负面影响时，才进入通常所说的外来入侵物种范围。阶段式表述把“外来”“已建立”和“有入侵影响”分开，也便于在不同屏障设置预防、早期发现和控制措施。[^invasion-framework]

建立概率受繁殖体数量、到达频率、个体状态、适生环境和低密度过程共同影响。少量个体可能因 Allee 效应消失，反复引入却能产生繁殖体压力；建立后还可能经历不明显的滞后期，待种群增长、遗传组合或环境条件改变才快速扩散。河流、道路和贸易网络能提高传播连通性，扩散前沿又常由少数个体反复奠基，因而入侵同时包含增长和空间过程。

我国记录的外来入侵生物包括蔗扁蛾、湿地松粉蚧、松材线虫、红脂大小蠹（*Dendroctonus valens*）、美国白蛾、非洲大蜗牛、福寿螺、牛蛙、薇甘菊、凤眼莲（水葫芦）、空心莲子草（水花生）和紫茎泽兰等；早期名录曾使用“强大小蠹”这一名称。鼠类等大类群需要落实到具体物种和引入地区。我国现行重点管理名录及早期生态环境名录都可用于核对物种名称，一个物种在某地的外来性、建立状态和影响仍需按区域判断。[^china-invasive-list]

## 种群调节中的负反馈 { #population-regulation }

限制因素决定某一时期数量为何没有更高，例如食物不足或寒潮直接降低存活；调节则强调种群偏离某一范围后，过程是否产生使其返回的负反馈。一个因素既可能限制也可能调节：食物总量可以设定平均数量，拥挤后单位个体食物减少又使出生率下降或死亡率上升，从而产生密度制约。相反，一场与密度无关的风暴可以强烈限制数量，却不一定在种群越多时作用越强。

密度制约可作用于出生、死亡、迁入或迁出，也可只作用于某个年龄或阶段。它可能是即时的，也可能经资源、天敌或母体效应延迟出现；不同过程还会相互补偿，例如高密度增加幼体死亡，却因幸存者获得更多资源而减少成体死亡。把 $N_{t+1}/N_t$ 对 $N_t$ 作一次回归时，共享测量误差、回归趋中和未观测环境变量都可能产生假象。可靠证据来自长期人口统计、密度操纵、机制协变量及与替代模型的比较。[^population-regulation]

## 种群调节理论的问题史 { #regulation-history }

20 世纪种群生态学曾形成鲜明的解释传统。Andrewartha 与 Birch 强调天气、干旱等外界条件和“可生活的地方”怎样决定动物的分布与数量；Nicholson 强调竞争、天敌和疾病随密度加强，从而使种群受到内源负反馈调节。食物学说把资源供给和营养置于中心，自上而下的捕食观点则注意到消费者可优先压低常见猎物，释放空间与资源，改变共存和群落多样性。传统“捕食收割学说”由此保留了捕食者抑制优势种的直觉；这种作用取决于捕食选择、猎物补偿增长和空间结构，主要影响既有物种的数量与共存。

这些学派提出的问题至今仍有价值，现代研究通常把外源驱动与内源反馈放入同一模型：气候可以直接改变死亡率，也可以通过食物或病原改变密度反馈；捕食者既响应猎物密度，也受自身时滞和替代猎物影响。“密度无关”与“密度制约”描述过程在给定尺度上的性质，同一因素可经不同路径产生两类效应；带时滞的负反馈还会使受调节种群产生周期。[^regulation-history]

## 行为、内分泌与遗传调节假说 { #intrinsic-regulation-history }

Wynne-Edwards 曾用社会等级、领域、展示场和“剩余不繁殖个体”等现象，论证动物可通过社会行为避免过度利用资源。领域确实能限制繁殖位置，等级也会改变资源和配偶获得；现代解释通常从个体收益、亲缘关系和频率依赖选择出发，检验行为如何改变繁殖、死亡与迁出。行为机制的详细比较见[行为生态学](behavioral_ecology/index.md)。

Christian 的内分泌学说把高密度社会压力同肾上腺—垂体反应、繁殖抑制和死亡增加联系起来。拥挤可通过下丘脑—垂体—肾上腺轴和生殖轴影响某些哺乳动物，效应方向和强度取决于物种、性别、社会制度、食物和压力持续时间。“密度升高—GnRH 下降—ACTH 升高”因而是需要逐项检验的生理机制假说。[^christian-stress]

Chitty 假说则用周期不同阶段中可遗传的攻击性、扩散倾向和繁殖性状变化解释啮齿动物波动。它保存了“种群过程能够改变选择环境”的重要线索；选择、漂变、基因流、表型可塑性和非遗传母体效应都可能造成阶段间差异，需要共同花园、谱系或基因组资料同人口统计证据相接。今天的综合视角把这类作用视作可能的生态—进化反馈，并同食物、捕食、疾病和气候作用一起检验。

## 植物密度效应、产量与自疏 { #plant-density-effects }

植物一旦定着，通常只能通过局部生长和形态调整应对邻体。播种密度升高时，早期单位面积总产量常随密度增加；群体冠层闭合并充分占用资源后，在一定密度和环境范围内，不同初始密度处理的最终总生物量可能接近一个平台，这就是最终产量恒定的经典经验。若平均个体质量为 $W$、存活密度为 $d$、单位面积产量为 $Y$，平台区可近似写成

$$
Y=Wd\approx C,
\qquad
W\propto d^{-1}.
$$

这里的 $C$ 是具体实验条件下的产量平台，与逻辑斯蒂模型的 $K$ 具有不同定义。低密度尚未封闭冠层、资源供应改变或群落组成不同，都可能使这一近似失效。

在拥挤、近同龄的植物群体中，个体继续生长会伴随部分个体死亡，平均个体质量与密度在双对数图上沿一条负斜率边界移动。经典自疏的 $-3/2$ 法则写作

$$
W=Cd^{-3/2}.
$$

在双对数坐标上，它对应

$$
\log W=\log C-\frac{3}{2}\log d.
$$

它保留了由 Yoda 等研究形成的形态—密度学习路径，也曾用于草本、林分及某些固着动物。实际斜率会随个体几何、资源、质量指标、冠层结构、死亡阶段和拟合方法改变；$-3/2$ 适合作为经典基准或上边界假说。自疏记录生长与密度依赖死亡共同形成的轨迹，初始密度处理间的最终产量比较则是另一种关系。[^self-thinning]

## 集合种群的局部灭绝与再定殖 { #metapopulation-concept }

集合种群是分布在离散生境斑块中的一组局部种群，斑块之间通过扩散个体相连。经典情形要求局部种群有发生灭绝的可能，空斑块又能被其他斑块的个体重新定殖；所有斑块永久占据或个体高度混合时，则需采用连续空间或局部种群模型。局部尺度追踪一个斑块内的出生和死亡，集合种群尺度追踪斑块的灭绝与定殖，物种地理尺度还包括整个分布区和长期范围变化。

斑块占域率 $p$ 是适宜斑块中被占据的比例，并非所有斑块内个体数之和。两个系统可以有相同的 $p$，却因斑块面积和局部密度不同而拥有完全不同的总数量。占据斑块随时间替换称为周转；局部波动不同步时，一个斑块输出的扩散者可在另一个斑块衰退时补充它，若气候或扰动使各斑块高度同步，区域性灭绝风险反而会上升。

## Levins 占域动力学模型 { #levins-model }

Levins 模型假定大量性质相同的适宜斑块，每个斑块只有“占据”或“空缺”两种状态。已占据斑块产生定殖者，故空斑块的总定殖率与 $p(1-p)$ 成正比；局部灭绝率与 $p$ 成正比：

$$
\frac{\mathrm dp}{\mathrm dt}
=cp(1-p)-ep
=p\,[c(1-p)-e].
$$

$c$ 和 $e$ 分别为定殖与局部灭绝参数。除 $p=0$ 外，当 $c>e$ 时存在正平衡

$$
p^*=1-\frac{e}{c}.
$$

若定殖者来自一个不受本地斑块占域影响的“大陆”种群，外部输入不依赖当前占域率，模型写成

$$
\frac{\mathrm dp}{\mathrm dt}
=i(1-p)-ep,
\qquad
p^*=\frac{i}{i+e}.
$$

两个平衡不同，正是因为第一式要求集合种群自身先有占据斑块才能产生定殖者，第二式即使 $p=0$ 仍有外部输入。传统派生模型还用随占域增加而下降的有效灭绝率表达救援效应：若 $e(p)=e_0(1-p)$ 且外部输入为 $i$，则

$$
\frac{\mathrm dp}{\mathrm dt}
=(1-p)(i-e_0p),
$$

在 $0<i<e_0$ 时出现内部平衡 $p^*=i/e_0$。若定殖完全来自内部、定殖项为 $cp(1-p)$，同时灭绝项为 $e_0p(1-p)$，则 $\mathrm dp/\mathrm dt=p(1-p)(c-e_0)$：$c>e_0$ 时占域趋向 1，$c<e_0$ 时趋向 0，二者相等时这一极简模型不能决定变化方向。这些代数结果呈现了经典修正的思路，也显示结论怎样依赖函数形式。

Levins 模型省略局部数量和斑块差异，清楚显示持续存在需要定殖补偿局部灭绝；它是分析起点，更具体的系统还需加入斑块面积、质量、距离和局部人口统计。[^levins-hanski]

## 斑块异质性、源汇与连通性 { #spatial-extensions }

真实斑块在面积、质量和隔离度上不同。大斑块通常能容纳更多个体，局部灭绝风险较低；与多个已占据斑块相近的空斑块获得定殖者的机会较高。Hanski 的发生率函数模型据此让每个斑块的定殖和灭绝概率依赖面积、距离和周围占据状态。移入个体还可增加局部数量或遗传多样性，从而降低灭绝概率，这一过程称为**救援效应**（rescue effect）。移入只造成短暂观测记录而没有繁殖时，表示访客到达而非种群建立。[^levins-hanski]

源—汇模型关注局部人口统计而非占域状态。在不计迁移时，源斑块的局部有限增长率大于 1，能够产生向外输出的剩余个体；汇斑块的局部增长率小于 1，只有持续移入才可维持。汇斑块仍可能因面积大或移入多而拥有较高观测密度，不能从“哪里个体多”直接判断哪里是源。识别源汇需要分别估计局部存活、繁殖、迁入和迁出，并在多年尺度上判断净输出或净输入。[^source-sink]

提高连通性可以增加再定殖和救援，也可能同步各斑块的波动、传播病原或帮助外来种扩散。廊道的净效应取决于目标物种、基质阻力、传播方向和伴随风险，集合种群理论提供了比较这些过程的共同语言。

## 迁移、小种群与生态—进化接口 { #eco-evolution-interface }

人口数量 $N$ 是实际计入的个体数，**有效种群大小**（effective population size，$N_e$）则衡量遗传漂变和近交在理想种群中达到同等强度时的等效规模。性比偏斜、繁殖成功差异、数量剧烈波动和世代重叠常使 $N_e$ 小于调查得到的 $N$。小种群中的人口统计随机性提高短期灭绝风险，较小的 $N_e$ 又增强漂变和近交；二者相关但度量不同过程。短暂数量下降的遗传后果取决于下降幅度、持续时间、繁殖结构和随后增长。

扩散在生态学中改变局部出生—死亡账本，在进化中又构成基因流。移入可能产生人口救援和遗传救援，补充数量并缓解近交；持续而强的基因流也可能削弱局部适应。入侵前沿的奠基事件、低密度 Allee 效应和繁殖体压力同样把人口过程与遗传过程接在一起。Hardy–Weinberg 平衡、选择模式、漂变、瓶颈、奠基者效应和物种形成的完整推导见进化学栏目。

## 监测中的过程变异与观测误差 { #model-data-interface }

从时间序列推断动力学，首先要保证计数对象、调查范围、季节和努力量可比。观察到的数量可写成潜在真实状态与观测过程的组合：真实种群按出生、死亡和迁移变化，样方、陷阱或调查者又以不完全且会变化的概率看到它。把漏检或捕获率变化当成真实增长，会夸大波动；把真实环境随机性全当成测量噪声，又会低估灭绝风险。

**状态空间模型**（state-space model）、**整合种群模型**（integrated population model，IPM）和阶段投影模型可以分别表达过程方程与观测方程，并把计数、标记重捕、繁殖和环境资料连接起来。模型选择应从问题和采样设计出发：短序列通常不足以同时辨认密度制约、时滞、多种随机性和复杂年龄结构；参数可辨识性、残差自相关、预测检验和独立资料验证比追求一条最贴合历史曲线的复杂方程更重要。[种群数量、取样与统计](population_ecology.md)中的数量估计和生命表由此成为动力模型的输入，[生活史生态学](life_history.md)则解释不同存活与繁殖组合为何形成不同增长潜力。

## 参考资料与延伸阅读 { #references }

- Begon, M. & Townsend, C. R. *Ecology: From Individuals to Ecosystems*. 5th ed. Wiley, 2021.
- Turchin, P. *Complex Population Dynamics: A Theoretical/Empirical Synthesis*. Princeton University Press, 2003.
- Gotelli, N. J. *A Primer of Ecology*. 4th ed. Sinauer, 2008.
- Hanski, I. *Metapopulation Ecology*. Oxford University Press, 1999.
- Courchamp, F., Berec, L. & Gascoigne, J. *Allee Effects in Ecology and Conservation*. Oxford University Press, 2008.

[^logistic-harvest]: Schaefer, M. B. “Some aspects of the dynamics of populations important to the management of the commercial marine fisheries.” *Bulletin of the Inter-American Tropical Tuna Commission* 1 (1954): 27–56；Larkin, P. A. “An epitaph for the concept of maximum sustained yield.” *Transactions of the American Fisheries Society* 106 (1977): 1–11. [doi:10.1577/1548-8659(1977)106%3C1:AEFTCO%3E2.0.CO;2](https://doi.org/10.1577/1548-8659%281977%29106%3C1%3AAEFTCO%3E2.0.CO%3B2)。
[^allee-effects]: Courchamp, F., Clutton-Brock, T. & Grenfell, B. “Inverse density dependence and the Allee effect.” *Trends in Ecology & Evolution* 14 (1999): 405–410. [doi:10.1016/S0169-5347(99)01683-3](https://doi.org/10.1016/S0169-5347%2899%2901683-3)。
[^hutchinson-delay]: Hutchinson, G. E. “Circular causal systems in ecology.” *Annals of the New York Academy of Sciences* 50 (1948): 221–246. [doi:10.1111/j.1749-6632.1948.tb39854.x](https://doi.org/10.1111/j.1749-6632.1948.tb39854.x)。
[^ricker-model]: Ricker, W. E. “Stock and recruitment.” *Journal of the Fisheries Research Board of Canada* 11 (1954): 559–623. [doi:10.1139/f54-039](https://doi.org/10.1139/f54-039)。
[^stochastic-extinction]: Lande, R. “Risks of population extinction from demographic and environmental stochasticity and random catastrophes.” *The American Naturalist* 142 (1993): 911–927. [doi:10.1086/285580](https://doi.org/10.1086/285580)。
[^hare-cycle]: Krebs, C. J. et al. “Impact of food and predation on the snowshoe hare cycle.” *Science* 269 (1995): 1112–1115. [doi:10.1126/science.269.5227.1112](https://doi.org/10.1126/science.269.5227.1112)。
[^invasion-framework]: Blackburn, T. M. et al. “A proposed unified framework for biological invasions.” *Trends in Ecology & Evolution* 26 (2011): 333–339. [doi:10.1016/j.tree.2011.03.023](https://doi.org/10.1016/j.tree.2011.03.023)。
[^china-invasive-list]: 农业农村部等六部门，[《重点管理外来入侵物种名录》](https://fgs.moa.gov.cn/flfg/202211/t20221109_6415160.htm)，2022；生态环境部，[《关于发布中国第一批外来入侵物种名单的通知》](https://www.mee.gov.cn/xxgk2018/xxgk/xzgfxwj/202301/t20230112_1012443.html)，2003。早期材料使用“强大小蠹”，现行名录采用同一物种的通行名“红脂大小蠹”。
[^population-regulation]: Turchin, P. “Population regulation: a synthetic view.” *Oikos* 84 (1999): 153–159. [doi:10.2307/3546876](https://doi.org/10.2307/3546876)。
[^regulation-history]: Nicholson, A. J. “The balance of animal populations.” *Journal of Animal Ecology* 2 (1933): 131–178. [doi:10.2307/954](https://doi.org/10.2307/954)；Andrewartha, H. G. & Birch, L. C. *The Distribution and Abundance of Animals*. University of Chicago Press, 1954；Wynne-Edwards, V. C. *Animal Dispersion in Relation to Social Behaviour*. Oliver & Boyd, 1962。
[^christian-stress]: Christian, J. J. “The adreno-pituitary system and population cycles in mammals.” *Journal of Mammalogy* 31 (1950): 247–259. [doi:10.2307/1375290](https://doi.org/10.2307/1375290)。
[^self-thinning]: Yoda, K. et al. “Self-thinning in overcrowded pure stands under cultivated and natural conditions.” *Journal of Biology, Osaka City University* 14 (1963): 107–129；Westoby, M. “Self-thinning driven by leaf area not by weight.” *Nature* 265 (1977): 330–331. [doi:10.1038/265330a0](https://doi.org/10.1038/265330a0)。
[^levins-hanski]: Levins, R. “Some demographic and genetic consequences of environmental heterogeneity for biological control.” *Bulletin of the Entomological Society of America* 15 (1969): 237–240. [doi:10.1093/besa/15.3.237](https://doi.org/10.1093/besa/15.3.237)；Hanski, I. “Single-species metapopulation dynamics: concepts, models and observations.” *Biological Journal of the Linnean Society* 42 (1991): 17–38. [doi:10.1111/j.1095-8312.1991.tb00549.x](https://doi.org/10.1111/j.1095-8312.1991.tb00549.x)。
[^source-sink]: Pulliam, H. R. “Sources, sinks, and population regulation.” *The American Naturalist* 132 (1988): 652–661. [doi:10.1086/284880](https://doi.org/10.1086/284880)。
