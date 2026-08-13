# 最优化理论与取食生态

取食把一系列选择压缩在很短的时间里：到哪里搜索，遇到食物后是否接受，怎样处理，要在一个斑块停留多久，取得的食物是立即吃掉、带回巢穴还是储存起来。每个选择都占用时间和能量，也会改变暴露于天敌、竞争者和营养失衡的机会。最优化理论把这些代价与收益写成明确模型，用来预测环境或动物状态改变时行为应怎样变化。

**最优化理论**（optimality theory）在规定可选行为、动物掌握的信息、收益单位和限制条件后，求出该组假设下表现最好的规则。观察结果若偏离预测，研究者便检查食物价值是否估错、动物是否正在学习、风险是否遗漏，或选择集合是否被形态和生理限制。经典模型提供简洁的预测结构，营养、认知、个体状态与社会环境则进一步扩展取食生态的解释。[^macarthur-pianka]

[取食、防御与争斗行为](../../zoology/behavior/foraging_defense.md)描述从搜索、辨认、攻击到搬运和储藏的动作，以及鸟类、节肢动物与社会性昆虫的形态—行为实例；这里集中讨论这些动作背后的收益模型及检验条件，并沿用[行为生态学总览](index.md)中的适合度、状态依赖和证据层级。

## 收益单位与时间预算 { #currency-and-time-budget }

一次取食的总时间可以分成移动、搜索、辨认、追逐或采集、处理、摄入以及返回中心地点等部分。食物带来的收益可以用可代谢能、特定营养素、后代得到的食物量或生存概率表示。最常见的经典收益单位是单位时间净能量摄入率：

$$
R=\frac{E-C}{T_s+T_r+T_h+T_t},
$$

其中 $E$ 是食物获得的能量，$C$ 是移动、搜索和处理的能量支出，$T_s$、$T_r$、$T_h$、$T_t$ 分别表示搜索、辨认、处理和旅行时间。实际模型常合并其中若干项；合并以前须确认被略去的时间是否真的很小，或是否在候选行为间相同。

最大化净摄入**速率**和最大化能量**效率**会给出不同预测。快速追击可能在每分钟取得更多食物，却消耗大量能量；缓慢行走或伏击每分钟收益较低，单位支出得到的净收益却可能更高。“高投入—高收益”和“低投入—低收益”的相对优势取决于搜索方式、基础代谢、失败率和剩余可用时间。繁殖期亲鸟可能重视向巢内输送能量的速率，食物匮乏季节的个体可能更重视自身生存，二者可以采用不同收益单位。

收益最终要连接适合度。多吃能量可能增加存活和产卵，也可能带来毒素、营养失衡、受伤或天敌风险。模型常用能量率作为近似，是因为它容易测量且在许多条件下具有预测力；具体动物与时刻的收益单位仍需检验。

## 最适食谱的收益率模型 { #optimal-diet-model }

经典食谱模型把食物类型按**有利性**或**收益率**排序。对第 $i$ 类食物，$E_i$ 是摄入后的净能量收益，$h_i$ 是从发动攻击到能够重新搜索之间的处理时间，则

$$
p_i=\frac{E_i}{h_i}
$$

表示已经遇到该食物时，单位处理时间可获得的收益。外壳坚硬、难以制伏或必须搬运的食物会增加 $h_i$；食物较大却可食部分很少时，$E_i$ 也不能按总质量估计。搜索时间不进入单个食物的 $p_i$，因为模型在动物已经遇到它的时刻比较“接受还是放弃并继续搜索”。

若动物接受集合 $S$ 中的食物，在随机遭遇、每次搜索过程相似且猎物不会同时出现等简化条件下，长期平均摄入率为

$$
R(S)=\frac{\sum_{i\in S}\lambda_iE_i}
{1+\sum_{i\in S}\lambda_ih_i},
$$

$\lambda_i$ 是搜索期间第 $i$ 类食物的单位时间遭遇率。分母中的 1 表示一单位搜索时间，第二项是这段搜索时间所引出的处理时间。若把总搜索期写为 $T_s$，分子与分母同乘 $T_s$，约去后便得到上述平均摄入率。

先把食物按 $E_i/h_i$ 从高到低排列。对某一较低等级的食物 $j$，若

$$
\frac{E_j}{h_j}\ge R(S_{j-1}),
$$

它便应加入由所有更高等级食物组成的集合 $S_{j-1}$；否则继续搜索更有利的食物更划算。这个阈值产生三条经典预测：

- 高有利性食物的遭遇率增加时，食谱会收窄，较低等级食物依次被排除。
- 已经遇到某一低有利性食物时，它是否被接受主要取决于更高等级食物的遭遇率；在模型的严格假设下，低等级食物自身的遭遇率从纳入条件中约去。
- 理想模型会在阈值处出现近似全收或全拒的转换，而实测转换常较平缓，因为动物要估计环境、辨认会出错，个体状态也持续变化。

大山雀在实验中面对大小食物时，整体方向符合高收益食物增多后排除低收益食物的预测，选择转变却没有像最简模型那样瞬间完成。采样和学习是重要解释：动物需要从近期遭遇估计 $\lambda_i$，环境改变后旧估计仍会保留一段时间。预测偏差因而帮助定位模型遗漏的信息获取过程。[^great-tit-diet]

## 辨认、处理与食物大小 { #recognition-handling-prey-size }

搜索、发现与辨认是不同阶段。猎物已进入感觉范围，却可能因保护色而漏检；发现一个对象后，动物还要花时间确认它是否可食、是否有毒以及怎样处理。若被拒绝的对象也占用辨认时间，丰富的低收益食物会拖慢继续搜索，经典模型中“低收益食物自身丰度不影响接受”的结论便要修改。经验可以缩短辨认和处理时间，疲劳、背景复杂度与猎物多态则会增加误认。

食物大小同时改变收益和处理。很小的食物容易吞咽，所得能量也少；很大的双壳类含肉较多，却可能需要更久破壳，并增加螯、喙或牙齿受损的概率。因此最高 $E/h$ 常出现在中等大小，而动物仍可能选择比能量率最优值更小的食物。欧洲绿蟹 *Carcinus maenas* 取食贻贝的研究显示，螯足大小、破壳技术、贝壳强度、饥饿和受伤风险都会改变选择；这比把“海滨蟹按 $E/h$ 机械排序”更接近实际因果链。[^shore-crab]

鸦把海螺或其他有壳食物带到空中投落，提供了另一种可拆分的处理模型。升得更高通常提高单次破裂概率，却增加爬升和回收成本；选择哪种大小、从多高投下以及连续投多少次，可以分别测量。西北鸦的经典研究表明，决策能够接近由投落高度、破裂概率和能量回报共同预测的范围，但落地基质、被盗风险和个体经验仍会改变结果。[^crow-shell-dropping]

泛食与专食由口器、消化、解毒、共生微生物、季节物候和学习等多个过程决定；一个全年广食的动物可以在数小时内集中处理同一种食物。食谱模型描述某个时空尺度上的接受规则，分类时必须说明记录窗口。

## 营养平衡与食物转换 { #nutrition-and-switching }

食物具有多种营养维度。若一种食物富含能量却缺少蛋白质、盐分或某种必需营养素，动物可能接受 $E/h$ 较低的另一种食物来接近营养目标；植物次生物质和矿物质过量还会限制单一食物的摄入。营养几何框架把不同食物表示为营养空间中的摄入轨迹，把动物当前状态和目标状态同时放入模型，从而解释为什么混合食谱可优于单纯能量最大化。[^nutritional-geometry]

**食物转换**（prey switching）指捕食者对相对丰富的猎物产生不成比例的集中捕食。它可以由进入富含该猎物的微生境、学习特定处理技术或形成选择性注意引起。Murdoch 的经典实验把捕食比例与猎物相对丰度的线性期望比较，说明弱偏好且有学习机会时更容易出现转换；强烈先验偏好或缺少学习机会时，猎物丰度改变未必造成同样结果。转换由相对攻击率定义，胃内容物比例还受猎物可捕获性影响。[^prey-switching]

反复遇到一种隐蔽猎物后，捕食者对其外形或微生境的检出率提高，称为**搜寻像**（search image）。稀有猎物可能因捕食者尚未形成有效搜寻像而具有暂时优势；密度极高时，检出又可能受饱食、处理饱和、猎物聚集或捕食者转移限制。因此，捕食率—密度曲线需要把发现、攻击、处理和饱食分别测量。[动物行为页的搜寻像段落](../../zoology/behavior/foraging_defense.md#search-image)讨论感觉与学习机制，这里关注它怎样改变食谱和猎物频率。

## 斑块质量与边际值定理 { #patches-and-marginal-value-theorem }

食物在空间上常呈斑块分布。果树、花丛、潮池、种子堆和猎物群都可形成局部高收益区，斑块之间则需要旅行。斑块可以具有不同动力学：有些在一次访问内近似不变，有些因容易取得的食物先被吃掉而逐渐耗竭，还有些在降雨、潮汐、开花或猎物移动下周期更新。短寿命或一次性访问的斑块也可能在访问期间耗竭，因此仍需实测收益曲线。

对同质、可耗竭斑块，设动物在斑块内停留 $t$，累计获得 $g(t)$，斑块间平均旅行时间为 $\tau$。若 $g(t)$ 随时间增长但边际增长率逐渐下降，长期平均摄入率为

$$
R(t)=\frac{g(t)}{t+\tau}.
$$

边际值定理给出的最适离开时刻 $t^*$ 满足

$$
g'(t^*)=\frac{g(t^*)}{t^*+\tau}.
$$

左侧是此刻再停留一小段时间的边际收益，右侧是包含旅行时间的环境平均收益。图解时，从横轴的 $-\tau$ 点向累计收益曲线作切线，切点即为预测离开时刻。斑块间旅行更久时，已经到达一个斑块的价值提高，切点通常右移；环境中其他斑块整体更好时，平均收益率提高，动物应更早离开当前低效斑块。[^marginal-value]

定理预测的是收益阈值，无须动物直接计算导数。动物可采用“连续若干秒没有再捕到食物便离开”的**放弃时间**（giving-up time）规则，或在最近捕获后扩大搜索半径。“限制搜寻期”可理解为捕获后在局部进行集中搜索，随后回到更广范围移动。放弃时间会随环境平均质量、动物饥饿、天气和经验改变。

斑块中的**放弃密度**（giving-up density，GUD）是动物停止取食时剩余的食物密度。Brown 的模型把边际收获率与代谢成本、捕食风险和放弃其他活动的机会成本相比较；遮蔽少或天敌线索强的斑块可能在较高剩余密度时被放弃。GUD 既可反映斑块偏好，也受初始食物、可探测性、竞争者和实验容器影响，需要将这些因素纳入对风险的解释。[^giving-up-density]

## 斑块取样、学习与返回时间 { #sampling-learning-and-return }

动物通过近期捕获间隔、气味、同类活动和过去访问估计环境参数并更新斑块质量。周期性访问多个地点可以发现资源更新，但取样本身消耗时间；当前地点稳定可靠时，频繁检查其他地点收益较低。环境变化越快、地点间差异越大、旧信息失效越快，重新取样的价值通常越高。

食物能在离开后再生或补充时，动物还要决定何时返回。过早返回只遇到尚未恢复的斑块，过晚则可能被竞争者先取走。独占领域使更新率更可预测，却也需要巡护成本；多个个体共享资源时，返回时间受他者访问影响，稳定的个人路线可能被打乱。花蜜、潮间带猎物和果实的补给曲线不同，各自对应不同的返回周期。

经验能够把多个地点连接成**陷阱线式路线**（trapline）。熊蜂会反复访问一组花，并逐渐缩短路线；实验显示，它们在路线总长度与优先访问高报偿地点之间权衡，而非每一步都飞向最近花朵。对道路、河岸或树冠层中的动物，风、坡度、遮蔽和地标可靠性也会使能量或风险最小路线偏离几何最短线。[^bumblebee-trapline]

搜索运动的尺度还受资源分布影响。猎物成团时，发现一只后进行局部密集搜索可以增加再次相遇；资源均匀或更新缓慢时，扩大步长和减少重访可能更有利。比较“随机游走”“系统扫荡”和记忆路线之前，须先测量真实资源场与感觉范围，否则相同轨迹统计量可对应不同机制。

## 中心地点取食与运量 { #central-place-foraging }

许多动物必须把食物送回巢穴、洞穴、幼体或储藏点，称为**中心地点取食**（central-place foraging）。一次往返包括外出旅行、斑块内搜索、逐个收集、负载返回和卸载。随着口中或身体上的猎物增多，继续收集常越来越慢；较长旅行又使空载往返更不划算。因此远处取食往往对应较大的运量或较长斑块停留，但负载降低飞行速度、增加被盗或使食物腐败时，关系会改变。

经典椋鸟育雏研究显示，亲鸟在取食地逐个收集无脊椎动物，口中已有猎物越多，继续发现和夹持下一只通常越困难；到巢与取食地之间的旅行越久，平均每次带回的猎物数往往越多。距离—运量关系由递减收获曲线、负载运输成本、幼鸟摄食瓶颈、巢址风险和其他活动时间共同决定。[^starling-central-place]

中心地点模型还适用于松鼠搬运球果、海鸟带鱼、蜘蛛把猎物拖回隐蔽处和社会性昆虫把资源运回巢。理论预测要写清“优化”的对象：亲鸟自身净收益、送到幼体的能量速率、单位能量支出的运输效率，以及减少巢址暴露的访问频率，会给出不同运量。

## 产出变异、饥饿与捕食风险 { #variance-starvation-and-predation-risk }

平均食物量相同的两个斑块可以具有不同变异：一个每次提供稳定的小份食物，另一个可能得到大份，也可能完全落空。**风险敏感取食**（risk-sensitive foraging）讨论动物对这种产出分布的选择。简单的能量预算规则预测，若稳定方案足以越过当日生存阈值，降低方差更有利；若稳定方案几乎必然低于阈值，接受高方差才保留达到阈值的机会。由此产生的“接近饥饿时偏向风险”是特定收益函数下的预测；饥饿损害运动或高方差收益不足以救急时，动物仍可能选择稳定资源。早期墨西哥灯草鹀（*Junco phaeonotus*）实验提供了风险敏感偏好的实证起点，后续工作则显示状态、时间范围和学习会改变方向。[^risk-sensitive]

捕食风险是另一种不确定性。三刺鱼在高密度水蚤区可获得更高摄食率，却更难监视来袭天敌；经典实验中，模拟捕食者出现后，鱼转向猎物较稀而更容易警戒的区域。这个结果说明能量摄入率只有在不妨碍其他需求时才是合适货币。饥饿提高食物的边际价值，可能使鱼重新进入高收益区域，但具体反应仍受遮蔽物、群体大小与个体经验影响。[^stickleback-risk]

松鼠把较大食物搬到树上、把小食物就地处理，是处理收益与暴露风险的直观例子。搬运大食物的时间可由更安全地点的长处理阶段抵消；小食物很快吃完，搬运成本反而可能超过安全收益。实验需要同时操纵食物大小、遮蔽和天敌线索，才能区分安全收益与食物可携带性造成的差异。

竞争同样改变风险权衡。干扰竞争可能缩短处理时间、扩大食谱或迫使弱势个体进入边缘斑块；资源被他者消耗则降低等待价值。竞争增强、捕食减弱或猎物价值提高，都可能降低对安全地点的相对偏好，但三项因素会交互，优势等级、可替代食物和逃逸能力还会改变结果。对蜘蛛网内位置选择等实例，需要同时确认网的所有者、食物分布、配偶机会和捕食风险，再判断体型作用。

## 社会性昆虫的群体取食 { #social-insect-foraging }

社会性昆虫把个体采集决策与群体招募连接起来。单只工虫使用局部信息，食物搬回速度、舞蹈、踪迹信息素和巢内接触又改变下一批外出者的方向。群体层面的资源分配由许多反馈形成，每只个体只掌握局部环境，群体结果也受拥堵、信息时滞和利益差异限制。

### 蜂类的专访与招募 { #bee-specialization-and-recruitment }

开花植物常分散成短暂斑块，每朵花提供的报偿有限。许多独居蜂在物种或个体层面专访有限植物类群；社会性蜂的整个群体可同时利用多种花源，而单个采集者在一次路线中保持**花常性**（flower constancy）。独居蜂与群居蜂可在“物种或群体食谱宽度”和“个体单次路线专一性”两个尺度上比较，具体专化范围由口器、花期、学习和当地植物群落决定。

熊蜂缺少蜜蜂摆尾舞那样的远距离方向—距离编码，却能以花源气味、回巢活动和社会线索提高外出概率，也能形成个人陷阱线路。蜜蜂侦察蜂则把花源方向、距离和收益带回蜂巢；舞蹈强度与持续时间使高报偿地点获得较多招募，食源枯竭后舞蹈衰减。群体分配还受糖浓度、飞行成本、天气和巢内需求影响，各个体可能利用不同于瞬时能量率最大值的花源。[^honeybee-allocation]

### 行军蚁的集体扫荡 { #army-ant-raids }

行军蚁的典型取食是集体突袭。不同支系可形成较窄的纵队袭击或宽阔的群集突袭，猎物以其他社会性昆虫和林下无脊椎动物为主；猎物大小、巢群规模、地形与交通拥堵共同影响队形。工蚁通过接触、化学踪迹和局部交通反馈集中到猎物丰富方向，沿路线形成的临时猎物堆还可提高回收效率。“小群利用聚集食物、大群利用小而活动猎物”可作为跨种比较假说，需结合各支系的巢群规模、猎物和队形检验。[^army-ant-raids]

### 收割蚁的主干道与支路 { #harvester-ant-trails }

收割蚁在干旱和季节性地区采集种子，巢口向外可形成长期使用的主干道，食物新出现时再建立较短暂支路。踪迹缩短重复探索，也会把工蚁集中到有限通道；邻巢竞争、植物斑块和多个巢口共同塑造道路方向。以欧洲 *Messor* 收割蚁为例，主干道既反映中心地点运输效率，也受巢内和巢间竞争影响，实际觅食地可以重叠并随资源变化。[^harvester-ant-trails]

“个体觅食”和“纵队扫荡”与资源空间格局的对应关系依物种和招募系统而变：集中高价值食物常值得强招募，广泛散落的小种子也可能由许多个体沿主干道独立搜索。红、黑、褐农蚁等传统类型名称需要落实到具体物种、巢结构和资源图后，才能判断食性和竞争关系。

### 白蚁的低质量资源与真菌圃 { #termite-foraging-and-fungus-gardens }

白蚁利用木材、枯落物、土壤有机质和草本等低氮、难分解资源，修路、筑巢、防御和维持微环境也都消耗材料与能量。白蚁与肠道细菌、古菌和原生生物的共生提高木质纤维利用；大白蚁亚科（Macrotermitinae）还培养 *Termitomyces* 真菌，工蚁品级的个体把采集的植物材料加工成菌圃，真菌与肠道过程共同分解植物生物质。菌圃和巢内代谢会产热，其主要生态功能仍是植物生物质分解与营养获取。[^fungus-growing-termites]

伤残个体、尸体、排泄物与巢材的再利用可使营养回到群体循环，减少低质量环境中的损失；同类相食也受感染风险、伤势程度和群体需求调节。这些资源回收过程与觅食、筑巢的材料及工程成本共同组成群体预算。

## 储食的当前成本与未来价值 { #food-caching }

**储食**（food caching）把食物的获得与消费分离。动物在丰盛期收集食物，选择集中储藏或分散储藏，稍后再依靠空间线索、气味或系统搜索恢复。它常见于资源季节性强或短期波动大的环境，也存在于气候温和但资源脉冲明显、竞争激烈或繁殖期需求集中的地区；资源可预测性和未来需求比“环境严酷”更直接地决定储食价值。

是否立即吃掉、携走或储藏取决于当前饥饿、携带成本、食物腐败、未来短缺概率、藏点记忆、被盗风险和储藏者的恢复优势。分散储藏降低一次盗窃损失，却增加搬运与记忆成本；集中储藏易于防卫，也可能被一次发现而大量损失。把未来价值加入动态模型后，同一食物即使当前收益较低，也可能因未来稀缺而值得储存。[^food-storage]

储食还连接植物更新。松鼠、鸦科、啮齿动物和蚂蚁未能取回的种子可能萌发，埋藏深度与地点改变干燥、病原和捕食风险；储食者因而既是种子消费者，也可能是散布者。捕食者保存尸体或猎物则延缓食物网中的消费时间，温度升高和腐败可缩短有效储藏期。这些群落后果要求把取回率、被盗、腐败和萌发分别估计。

储食学习随个体发育成熟。复杂空间记忆可能使幼体独立觅食较晚，但发育速度还受亲代喂养、运动结构、机会和社会学习影响。鸦科的“什么—哪里—何时”记忆与未来需求实验说明部分物种能灵活利用时间信息；[动物行为页](../../zoology/behavior/foraging_defense.md#food-caching)讨论认知证据与动作过程，这里把记忆能力作为未来收益能否实现的约束。

## 模型预测与生态后果 { #testing-and-ecological-consequences }

检验取食模型需要先记录动物实际遇到什么。食谱资料显示吃下的食物，还需同时记录被拒绝的食物；检验边际值定理则需同时测量斑块停留时间、旅行时间和收益曲线。较完整的研究会记录遭遇、接受、失败、处理、移动、警戒和摄入，并测量食物能量、营养、可探测性、更新率和竞争者密度。

| 模型 | 关键操纵或自然梯度 | 主要响应量 | 常见替代解释 |
| --- | --- | --- | --- |
| 最适食谱 | 高等级食物遭遇率、处理时间 | 各类食物的条件接受概率 | 辨认错误、营养需求、饱食、捕食风险 |
| 边际值定理 | 斑块间旅行时间、斑块收益曲线 | 停留时间与离开时边际收益 | 斑块质量未知、竞争者到来、状态变化 |
| 风险敏感取食 | 平均收益相同而方差不同的供给 | 对稳定或变动方案的选择 | 对方差学习不足、收益分布偏斜、时间尺度不同 |
| 捕食风险权衡 | 天敌线索、遮蔽物、饥饿和食物密度 | 取食率、警戒、位置与 GUD | 操纵同时改变可见度、竞争或逃逸距离 |
| 中心地点取食 | 旅行距离、负载成本、幼体需求 | 运量、停留、送达速率与访问频率 | 运输限制造成的非线性、巢址风险、食物腐败 |
| 社会觅食 | 食源收益、招募通道、群体规模 | 工虫分配、交通、送达率和个体差异 | 信息级联、拥堵、优势和群体内利益差异 |

动物的选择会反馈到资源分布。集中捕食常见猎物可以产生频率依赖死亡，斑块离开规则改变资源被耗竭的程度，储食把种子搬到新地点，花访路线影响植物授粉连接，蚁路又把营养和种子沿固定通道再分配。这种资源再分配的方向由资源更新、消费者数量、空间尺度和未取回储藏共同决定。种群与群落后果见[捕食、寄生与互利](../consumer_resource_interactions.md)，空间分布与理想自由分布见[栖息地、领域与捕食关系](habitat_predation.md)。

## 参考资料与延伸阅读 { #references }

- Stephens DW, Krebs JR. *Foraging Theory*. Princeton University Press, 1986。
- Stephens DW, Brown JS, Ydenberg RC, eds. *Foraging: Behavior and Ecology*. University of Chicago Press, 2007。
- Davies NB, Krebs JR, West SA. *An Introduction to Behavioural Ecology*. 4th ed. Wiley-Blackwell, 2012。
- Simpson SJ, Raubenheimer D. *The Nature of Nutrition: A Unifying Framework from Animal Adaptation to Human Obesity*. Princeton University Press, 2012。[doi:10.23943/princeton/9780691145655.001.0001](https://doi.org/10.23943/princeton/9780691145655.001.0001)。

[^macarthur-pianka]: MacArthur RH, Pianka ER. On optimal use of a patchy environment. *The American Naturalist*. 1966;100:603–609. [doi:10.1086/282454](https://doi.org/10.1086/282454)。论文开篇即把最优化理论界定为待检验假说，而非对自然完善性的预设。

[^great-tit-diet]: Krebs JR, Erichsen JT, Webber MI, Charnov EL. Optimal prey selection in the great tit (*Parus major*). *Animal Behaviour*. 1977;25:30–38. [doi:10.1016/0003-3472(77)90064-1](https://doi.org/10.1016/0003-3472%2877%2990064-1)。

[^shore-crab]: Smallegange IM, van der Meer J. Why do shore crabs not prefer the most profitable mussels? *Journal of Animal Ecology*. 2003;72:599–607. [doi:10.1046/j.1365-2656.2003.00729.x](https://doi.org/10.1046/j.1365-2656.2003.00729.x)；Smallegange IM, Hidding B, Eppenga JMA, van der Meer J. Optimal foraging and risk of claw damage: how flexible are shore crabs in their prey size selectivity? *Journal of Experimental Marine Biology and Ecology*. 2008;367:157–163. [doi:10.1016/j.jembe.2008.09.011](https://doi.org/10.1016/j.jembe.2008.09.011)。

[^crow-shell-dropping]: Zach R. Shell dropping: decision-making and optimal foraging in northwestern crows. *Behaviour*. 1979;68:106–117. [doi:10.1163/156853979X00269](https://doi.org/10.1163/156853979X00269)。

[^nutritional-geometry]: Raubenheimer D, Simpson SJ, Mayntz D. Nutrition, ecology and nutritional ecology: toward an integrated framework. *Functional Ecology*. 2009;23:4–16. [doi:10.1111/j.1365-2435.2009.01522.x](https://doi.org/10.1111/j.1365-2435.2009.01522.x)。

[^prey-switching]: Murdoch WW. Switching in general predators: experiments on predator specificity and stability of prey populations. *Ecological Monographs*. 1969;39:335–354. [doi:10.2307/1942352](https://doi.org/10.2307/1942352)。

[^marginal-value]: Charnov EL. Optimal foraging, the marginal value theorem. *Theoretical Population Biology*. 1976;9:129–136. [doi:10.1016/0040-5809(76)90040-X](https://doi.org/10.1016/0040-5809%2876%2990040-X)。

[^giving-up-density]: Brown JS. Patch use as an indicator of habitat preference, predation risk, and competition. *Behavioral Ecology and Sociobiology*. 1988;22:37–47. [doi:10.1007/BF00395696](https://doi.org/10.1007/BF00395696)。

[^bumblebee-trapline]: Lihoreau M, Chittka L, Raine NE. Trade-off between travel distance and prioritization of high-reward sites in traplining bumblebees. *Functional Ecology*. 2011;25:1284–1292. [doi:10.1111/j.1365-2435.2011.01881.x](https://doi.org/10.1111/j.1365-2435.2011.01881.x)。

[^starling-central-place]: Kacelnik A. Central place foraging in starlings (*Sturnus vulgaris*). I. Patch residence time. *Journal of Animal Ecology*. 1984;53:283–299. [doi:10.2307/4357](https://doi.org/10.2307/4357)；Kacelnik A, Cuthill I. Central place foraging: a reappraisal of the “loading effect”. *Animal Behaviour*. 1990;40:1087–1101. [doi:10.1016/S0003-3472(05)80175-7](https://doi.org/10.1016/S0003-3472%2805%2980175-7)。

[^risk-sensitive]: Caraco T, Martindale S, Whittam TS. An empirical demonstration of risk-sensitive foraging preferences. *Animal Behaviour*. 1980;28:820–830. [doi:10.1016/S0003-3472(80)80142-4](https://doi.org/10.1016/S0003-3472%2880%2980142-4)。

[^stickleback-risk]: Milinski M, Heller R. Influence of a predator on the optimal foraging behaviour of sticklebacks (*Gasterosteus aculeatus* L.). *Nature*. 1978;275:642–644. [doi:10.1038/275642a0](https://doi.org/10.1038/275642a0)。

[^honeybee-allocation]: Seeley TD. Honey bee foragers as sensory units of their colonies. *Behavioral Ecology and Sociobiology*. 1994;34:51–62. [doi:10.1007/BF00175458](https://doi.org/10.1007/BF00175458)；Visscher PK, Seeley TD. Foraging strategy of honeybee colonies in a temperate deciduous forest. *Ecology*. 1982;63:1790–1801. [doi:10.2307/1940121](https://doi.org/10.2307/1940121)。

[^army-ant-raids]: Chandra V, Gal A, Kronauer DJC. Colony expansions underlie the evolution of army ant mass raiding. *Proceedings of the National Academy of Sciences*. 2021;118:e2026534118. [doi:10.1073/pnas.2026534118](https://doi.org/10.1073/pnas.2026534118)；Póvoas de Lima H, et al. Temporary prey storage along swarm columns of army ants: an adaptive strategy for successful raiding? *Biology Letters*. 2022;18:20210440. [doi:10.1098/rsbl.2021.0440](https://doi.org/10.1098/rsbl.2021.0440)。

[^harvester-ant-trails]: Acosta FJ, López F, Serrano JM. Dispersed versus central-place foraging: intra- and intercolonial competition in the strategy of trunk trail arrangement of a harvester ant. *The American Naturalist*. 1995;145:389–411. [doi:10.1086/285746](https://doi.org/10.1086/285746)；Buhl J, et al. Shape and efficiency of wood ant foraging networks. *Behavioral Ecology and Sociobiology*. 2009;63:451–460. [doi:10.1007/s00265-008-0680-7](https://doi.org/10.1007/s00265-008-0680-7)。

[^fungus-growing-termites]: Li H, et al. Symbiotic plant biomass decomposition in fungus-growing termites. *Insects*. 2019;10:87. [doi:10.3390/insects10040087](https://doi.org/10.3390/insects10040087)。

[^food-storage]: Sherry DF. Food storage by birds and mammals. *Advances in the Study of Behavior*. 1985;15:153–188. [doi:10.1016/S0065-3454(08)60489-1](https://doi.org/10.1016/S0065-3454%2808%2960489-1)；Lucas JR, Peterson LJ, Boudinier RL. When should chickadees hoard food? Theory and experimental results. *Animal Behaviour*. 1991;41:579–601. [doi:10.1016/S0003-3472(05)80898-X](https://doi.org/10.1016/S0003-3472%2805%2980898-X)。
