# 无细胞系统、最小细胞与人工细胞

无细胞系统把转录、翻译、代谢或复制等生物反应从完整活细胞中取出，使研究者能够直接规定模板、酶、核糖体、小分子和反应边界。它既保留生命系统中依赖多组分协同的反应，又把细胞生长、染色体复制和群体选择等背景暂时移开。早期遗传密码研究已经利用无细胞蛋白质合成建立 RNA 序列与氨基酸之间的对应；现代无细胞基因表达则进一步成为线路表征、蛋白质生产和人工细胞组装的共同平台。[^cell-free-scope]

最小细胞与人工细胞把问题推向另一个层次。最小细胞追问在给定环境中维持细胞连续存在所需的最小功能组合；人工细胞则泛指由天然与合成组分构成、能够执行某些细胞样行为的区室化系统。二者经常重叠，却不由同一个基因数或材料类型定义：一个删减基因组的细菌仍继承完整细胞质和膜系统，一个能表达蛋白的脂质体则可能尚不能复制信息、维持离子稳态或产生后代。本页沿无细胞反应、膜区室和功能整合三个层次，解释这些系统怎样逐步接近自维持的细胞组织。

## 无细胞表达的反应边界 { #cell-free-expression-boundary }

无细胞蛋白质合成（CFPS）以 mRNA 为模板完成翻译；无细胞转录–翻译（TX–TL）则从 DNA 开始，把转录和翻译耦合在同一反应中。一个基础体系需要 DNA 或 RNA 模板、RNA 聚合酶、核糖体、tRNA、氨酰-tRNA 合成酶、翻译因子、氨基酸、核苷酸、ATP／GTP、盐和适宜的氧化还原环境。若产物需要折叠、二硫键、辅基、膜插入或翻译后加工，还要加入相应分子伴侣、折叠酶、膜、酶或细胞器来源的机器。

去除完整细胞并没有去除反应的上下文。模板浓度改变会重新分配聚合酶和核糖体，mRNA 稳定性决定可被翻译的时间窗，Mg$^{2+}$ 与 K$^+$ 同时影响核糖体、核酸折叠和多种酶活性。反应体积、界面吸附、分子拥挤、氧传递以及制备批次也会改变表达。因此，无细胞体系的“开放”首先表示组分可以直接添加、替换和测量，并不表示每个组分相互独立。

### 细胞裂解液与重构体系 { #extract-and-reconstituted-systems }

细胞裂解液体系从 *Escherichia coli*、小麦胚芽、兔网织红细胞、昆虫细胞或哺乳动物细胞等来源保留转录翻译机器及许多内源代谢酶。裂解、澄清和预反应移除染色质、膜碎片或内源 mRNA 后，所得提取物仍含大量未逐一计量的蛋白、RNA、小分子和膜囊泡。这种组合通常能利用宿主原有的折叠、能量代谢与大分子拥挤，却也带来核酸酶、蛋白酶、背景代谢和批次差异。

重构体系从纯化组分重新组装反应。Shimizu 等建立的 PURE 系统（重组组分蛋白质合成）以纯化核糖体、tRNA、氨酰-tRNA 合成酶、起始／延伸／释放因子和能量再生组分完成蛋白质合成，使每一种因子的存在与浓度都可被明确改变。[^pure-system] 这种可定义性适合研究最低组分、非天然氨基酸、翻译机制和组分间因果关系；需要分子伴侣、膜插入、RNA 降解或特殊代谢时，则要把相应模块显式补回。

| 体系 | 主要来源 | 实验优势 | 需要显式核对的边界 |
| --- | --- | --- | --- |
| 粗提取物 | 细菌、植物、动物细胞裂解液 | 保留宿主多种代谢、折叠与加工能力，制备后可快速运行复杂表达 | 内源核酸酶／蛋白酶、背景代谢、批次组成和未知资源竞争 |
| 纯化组分／PURE | 纯化核糖体、因子、tRNA、酶与小分子 | 组分身份和浓度明确，便于删减、替换和定量重构 | 缺失的伴侣、膜、降解、辅因子与加工功能须逐项加入 |
| 混合型系统 | 提取物中加入纯化因子、膜囊泡或特定代谢模块 | 在较高活性和可控制性之间调整，便于修补确定瓶颈 | 新模块可能改变离子、能量、拥挤与总资源分配，仍需整体校准 |

### 模板、转录与翻译的耦合 { #template-transcription-translation }

以 mRNA 为模板时，转录过程被移出反应，适合直接研究翻译起始、密码子、tRNA、核糖体和蛋白质折叠；mRNA 的 5′／3′ 结构、帽结构、多聚腺苷尾与降解速度仍决定有效翻译。以 DNA 为模板的 TX–TL 可使用 T7 RNA 聚合酶，也可保留宿主 RNA 聚合酶与 σ 因子，使启动子、抑制蛋白、RNA 调节因子和蛋白质反馈进入同一动态回路。两种聚合酶的速度、启动子特异性、转录终止和资源需求不同，不能只按相同 DNA 浓度比较输出。

转录与翻译之间存在物质和时间耦合。mRNA 的生成速度高于核糖体可处理的能力时，增加模板主要累积 RNA 并消耗 NTP；翻译过强则可能耗尽氨酰化 tRNA、延伸因子、氨基酸或能量载体。蛋白质报告器的荧光又滞后于翻译，因为折叠和发色团成熟需要时间。定量表征应同时测 mRNA、新生／成熟蛋白质、底物消耗和反应停止时点，把合成速度、降解速度与报告成熟分开。

### 能量再生与物质平衡 { #energy-regeneration-balance }

转录消耗 NTP，tRNA 充氨消耗 ATP，肽链延伸每加入一个氨基酸还要消耗 GTP；蛋白质折叠、蛋白质水解、膜运输和 DNA 复制会继续分享能量与辅因子。单纯提高初始 ATP／GTP 不能让反应长期运行，因为高能磷酸键不断水解，ADP、GDP、AMP 和无机磷酸逐渐积累，pH、Mg$^{2+}$ 可用性与离子强度也随之改变。常见体系用磷酸烯醇式丙酮酸、磷酸肌酸、3-磷酸甘油酸、葡萄糖或麦芽糊精等底物再生 ATP，并由核苷二磷酸激酶等反应维持 GTP。

提取物中残留的糖酵解、三羧酸循环酶和反向膜囊泡还可形成更完整的能量代谢。Jewett 等利用 *E. coli* 提取物中保留的中心代谢与氧化磷酸化建立长期供能的无细胞代谢平台，说明裂解后仍可能保存成套代谢耦合。[^cell-free-metabolism] 评价能量模块时应同时追踪 ATP／ADP、氧或电子受体、pH、无机磷酸、底物和副产物；某个报告器停止增加可能来自模板损失、核糖体失活、氨基酸耗尽或产物抑制，不能一律归因于 ATP 不足。

## 反应格式与持续运行 { #reaction-formats-continuous-operation }

批式反应在封闭体积中一次加入模板和大部分底物，操作简单，适合快速比较序列或条件。其输出随时间经过迟滞期、近似线性合成和平台期，终点浓度把多个阶段压缩成一个数。反应到达平台期后补加模板若不能恢复表达，提示翻译机器或能量系统受损；补加氨基酸、NTP 或能量底物后恢复，则可进一步定位底物限制。

Spirin 等的连续流无细胞翻译系统持续送入氨基酸、ATP、GTP 等小分子，同时移走低分子产物，使大分子翻译机器留在反应室内并延长蛋白质合成。[^continuous-cell-free] 连续交换系统以半透膜隔开反应室与供料液，小分子沿浓度梯度交换；连续流和连续交换都把供料速率、膜截留范围与体积更新率变成新的控制变量。过快交换可能洗出必要的小分子或扰动离子平衡，过慢则仍会出现局部耗竭和副产物积累。

### 微流控区室与空间供料 { #microfluidic-compartments }

微流控装置把反应缩小到液滴、反应室或通道，并精确规定供料波形、扩散距离和区室间连接。Karzbrun 等把 DNA 固定在微加工的二维区室中，使表达区通过狭窄毛细通道与持续流动的供料通道交换小分子；这些非脂质人工细胞能运行基因表达与线路动力学，同时把模板保留和物质交换分开控制。[^microfluidic-artificial-cells]

体积缩小会放大表面积／体积比和随机分配。低拷贝 DNA、核糖体或调节因子被封装进许多微滴或囊泡时，各区室获得的分子数并不相同；一部分区室可能缺少某个必要组分，另一部分则因局部浓度高而表现强输出。群体平均荧光只给出总体平均，不能区分“每个区室均匀变弱”和“少数高表达区室加上许多空区室”。单区室成像、体积分箱与绝对分子校准因此是微型体系的基本读出。

### 线路原型测试与参数迁移 { #circuit-prototyping-transfer }

无细胞体系可在数小时内改变 DNA 模板、启动子、RBS、RNA 调节因子、蛋白质降解标签和输入波形，适合测量传递曲线、响应时间、泄漏表达、资源竞争和组合线路的顺序关系。Takahashi 等用 TX–TL 追踪 RNA 线路的快速动态；Garamella 等则系统表征完全由 *E. coli* 组分构成的 TX–TL 中内源转录、mRNA／蛋白质降解、σ 因子和资源负载，使无细胞原型测试从终点筛选扩展到参数化动力学。[^cell-free-prototyping]

迁入活细胞时，拷贝数、染色体背景、聚合酶／核糖体丰度、生长稀释、膜运输、拥挤和应激响应都会改变。无细胞中得到的元件排序可以帮助缩小设计空间，但参数迁移需要在宿主内重新校准；尤其是高 DNA 浓度产生的强输出，可能在细胞中转化为质粒负担和生长反馈。原型测试的价值在于快速暴露输入—输出与资源耦合，而不是把体外行为当作宿主行为的等比例复制。

## 最小细胞的两条构建路线 { #minimal-cell-routes }

“最小”必须说明环境和功能标准。只要求在富营养、恒温和渗透稳定条件下增殖，与要求在波动环境中合成全部基本组分、修复损伤并长期演化，会得到不同的必要集合。基因组大小、基因数、蛋白质数目和反应数都可以是删减指标，却不能单独证明细胞具有自维持的最小功能闭包。

### 自上而下的基因组精简 { #top-down-genome-reduction }

自上而下路线从可独立生长的细胞出发，通过单基因或成组删除、转座子插入、比较基因组学和全基因组合成寻找在指定条件下可移除的序列。Hutchison 等由 *Mycoplasma mycoides* 合成基因组反复设计和测试，得到 531 kb、473 个基因的 JCVI-syn3.0；许多保留基因当时仍缺少明确功能，显示实验必需性可以先于机制解释。[^minimal-genome]

这种路线保留母细胞已有的核糖体、膜、脂质、代谢物、蛋白质复合物和空间组织。新基因组接管细胞后，后代逐渐由它编码的成分更新，但最初启动依赖受体细胞质。自上而下最擅长确定“现成细胞还能删去什么”，并揭示基因间合成致死与条件性必需；它不能单独回答这些成分怎样从非细胞状态组装成细胞。

### 自下而上的功能重构 { #bottom-up-reconstitution }

自下而上路线从纯化分子、细胞提取物、脂质、聚合物、微流控区室和能量底物出发，逐个加入信息复制、基因表达、代谢、运输、稳态维持、生长与分裂。Szostak、Bartel 和 Luisi 将能够复制的信息聚合物、可增长分裂的边界及其耦合作为合成细胞的基本问题；后续自下而上合成生物学则用无细胞重构和微流控逐项连接这些功能。[^bottom-up-synthetic-cells]

重构路线的优势是每个组分可以直接指定，因果关系较清晰；困难在于组分一旦耦合，最优条件常互相冲突。DNA 聚合酶、核糖体、膜酶和细胞骨架蛋白质可能偏好不同 Mg$^{2+}$、pH、盐与拥挤度，脂质体内的小体积还放大随机分配。Caschera 和 Noireaux 因而把最小细胞构建描述为生物元件的整合问题：功能清单只是起点，接口与共同运行条件决定能否形成系统。[^minimal-cell-integration]

| 路线 | 起始对象 | 主要操作 | 最直接回答的问题 | 关键边界 |
| --- | --- | --- | --- | --- |
| 自上而下 | 可生长细胞及其完整细胞质 | 删除、替换、重编码和合成基因组移植 | 在规定环境中哪些基因与序列仍是必要的 | 继承现成膜、核糖体、代谢物和空间组织；必要性依赖条件 |
| 自下而上 | 纯化组分、提取物、膜与非细胞区室 | 逐步重构表达、复制、代谢、运输和分裂 | 哪些组分足以产生某项细胞功能及其耦合 | 组分兼容、封装随机性、能量与物质闭合成为主要限制 |
| 混合型／半合成 | 细胞来源机器与人工材料的组合 | 在提取物或囊泡中加入定义模块，或用合成基因组接管受体 | 天然机器和人工边界怎样互相支持 | 系统来源混合，须明确哪些能力被继承、哪些由构建产生 |

## 膜区室与选择性交换 { #membrane-compartments-exchange }

区室让反应物维持局部浓度，使信息、催化剂和产物能够作为同一单位被选择和传递。脂质体由磷脂双层包围水相，巨型单层囊泡（GUV）尺寸接近细胞，便于显微观察和膜形变实验；小型／大型单层囊泡则适合群体生化测量。聚合物囊泡、油包水液滴、复凝聚体与固体微加工反应室提供不同通透性、力学性质和内部环境，人工细胞研究并不只等同于脂质体。

脂质组成决定膜厚度、流动性、电荷、曲率倾向和蛋白质插入。制备方法还决定层数、尺寸分布、封装效率和残留油相。若 DNA 与表达体系在封装前充分混合，低拷贝组分进入各囊泡的数量具有显著随机性；验证一个区室真正完成表达，需把膜完整性、内部报告器、外部背景和区室体积同时纳入。

### 通透性、膜蛋白与供料 { #permeability-membrane-proteins }

脂双层可让水和部分小型不带电分子通过，却强烈限制离子、NTP、氨基酸和多数极性代谢物。被动孔道增加小分子交换，载体与泵提供选择性或主动运输；膜蛋白质的无细胞合成还要解决折叠、取向和插入。蛋白即使出现在膜组分中，也可能朝向混杂、聚集或失去电化学耦合，功能应由底物流量、离子梯度或通道电导直接检验。

Noireaux 和 Libchaber 把 *E. coli* 无细胞表达封装在磷脂囊泡中，并表达 α-溶血素孔道，使氨基酸、核苷酸和能量底物等小分子能够跨膜补给，同时将核糖体、DNA 和大分子表达机器留在内部。[^vesicle-bioreactor] 这个囊泡生物反应器把基因表达、选择性交换和区室寿命连在一起；它仍依赖外部供料液，因而更接近具有选择性交换的反应器，而非物质上封闭的微型细胞。

### 渗透、体积与离子稳态 { #osmotic-volume-ion-homeostasis }

水跨膜移动通常快于大多数溶质。内部大分子、反离子、NTP 和反应产物形成的总渗透浓度高于外界时，水进入并增加膜张力，极端情况下导致泄漏或裂解；外界渗透压较高则使囊泡失水、松弛和内陷。基因表达还会把小分子底物聚合为蛋白质／RNA，并生成磷酸盐、质子和其他产物，使渗透平衡与电荷平衡随时间变化。

稳定体积需要把膜面积、包裹体积、溶质生成和跨膜通量联立考虑。缓冲体系可以减小 pH 波动，却不能替代离子运输；孔道可解除小分子耗竭，也可能让建立的梯度迅速消散。更完整的稳态维持模块需要传感器读取 pH、离子、氧化还原或能量状态，再由转运体、酶和反馈调整通量。人工细胞中的稳态因此是一种持续耗能的动态状态，而不是初始内外溶液配平后永久保持。

## 信息复制、代谢与膜生长 { #information-metabolism-membrane-growth }

持续存在的区室要更新会降解或被稀释的成分。DNA／RNA 复制保存模板，转录–翻译更新催化机器，代谢再生能量和基本组分，膜合成扩大边界；这些过程必须共享物质平衡。只让模板拷贝数上升会增加渗透与资源负担，只让膜面积增加会稀释内部机器，只提高蛋白质合成又可能耗尽能量底物。自维持来自这些通量之间的比例协调。

表达机器本身尤其难以更新。核糖体由 rRNA 和数十种核糖体蛋白质组装，还需要 rRNA 转录、加工、修饰与组装因子；tRNA 也要经过转录、成熟、修饰和充氨。多数无细胞系统预先加入现成核糖体、tRNA 和翻译因子，因此合成大量普通蛋白质仍未证明体系能够再生自己的表达能力。更强的自维持判据是新合成的机器能够替换降解或分裂稀释掉的机器，并在下一轮继续支持全套表达。

van Nies 等把噬菌体 Φ29 的 DNA 复制机器编码在模板本身，使无细胞体系先表达复制蛋白质，再复制承载其编码信息的 DNA，并将体系封装在脂质体中。[^encoded-dna-replication] 这构成了信息—功能—信息的闭环雏形；每一轮仍要检查完整模板比例、复制错误、蛋白与 DNA 的时序、区室间随机分配及反应能否在子代区室中重新启动。

膜更新要求合成两亲分子并把它送入当前区室的双层膜。Scott 等在脂质体中用基因编码、无细胞表达生成的酶重构部分细菌磷脂生物合成，展示遗传信息可以通过膜相关的酶连接到膜脂形成。[^cell-free-phospholipid] 脂质产物形成以后，还要证明其插入目标膜、增加可用面积并保持通透性与蛋白质功能；游离聚集、形成新囊泡或只改变脂质组成都不能单独说明原区室完成生长。

能量模块也要与膜交换和物质合成耦合。底物水平磷酸化适合开放反应液，膜上的电子传递、光驱动质子泵与 ATP 合酶则可把双层膜变成能量转换表面。后者要求膜方向、质子泄漏、缓冲容量和 ATP 消耗相互匹配；测到 ATP 生成只是能量输入的证据，持续基因表达、脂质合成和修复才能检验它是否支撑系统维护。

## 增长、形变与分裂 { #growth-deformation-division }

区室增长需要膜面积与内部体积协调增加。若脂质插入快于内部溶质和水的增长，膜会松弛、形成管状结构或芽体；体积增加更快则提高张力。诱导曲率的脂质、蛋白质支架、细胞骨架和外部机械力可以选择颈部或极部，但分裂还需经历分裂位点选择、收缩、膜断裂、内容物分配以及两个子区室的封闭。

Kurihara 等把封装 DNA 的扩增与由两亲分子前体驱动的巨型囊泡繁殖结合，DNA 放大引起的内部与膜界面变化参与囊泡形变和分裂。[^vesicle-reproduction] 该体系的重要性在于同时观测信息反应与区室繁殖；其膜增长依赖外加前体和特定化学循环，产生的子代囊泡是否继承可再次运行的完整体系仍需逐代验证。

细菌分裂机器提供另一条重构路线。MinD／MinE 的反应—扩散动力学可在膜面形成时空图案，FtsZ 与膜锚定蛋白 FtsA／ZipA 则构成收缩机器的核心。Godino 等在脂质体内由无细胞表达合成 Min 蛋白质，观察到振荡性膜形变及其对 FtsA–FtsZ 图案的调节；后续工作让基因指导的 FtsZ 原环对脂质体产生明显收缩。[^cell-free-division-machinery] 这些结果把基因表达、自组织和膜力连接起来，也暴露了最终断裂、分裂平面控制、均衡内容物分配和子代重启仍是彼此独立的整合步骤。

## 人工细胞的功能层级与实验判据 { #artificial-cell-functional-levels }

人工细胞可以被设计为生物传感器、分子计算机、蛋白质生产区室、药物递送区室、细胞间信号源或生命功能重构平台。某些系统追求少数组分下的机制透明，另一些系统追求复杂输入—输出而不要求自主增长。Noireaux、Maeda 和 Libchaber 将人工细胞的发展概括为从自组织、计算走向自我繁殖的连续工程；自下而上研究则强调把已分别工作的模块放进同一物质与能量框架。[^artificial-cell-integration]

功能声明应对应直接实验，而不是由外形或单一报告器推断。下面各层可以分别成立，也可能在组合时互相削弱。

| 功能层级 | 必要过程 | 直接读出 | 尚未闭合时的典型表现 |
| --- | --- | --- | --- |
| 区室 | 连续边界、内容物保留、规定通透性 | 膜完整性、泄漏、内外浓度与体积分布 | 有囊泡外形，但大分子泄漏或区室组成高度不明 |
| 基因表达 | 模板转录、翻译、折叠与必要加工 | mRNA、新生／成熟蛋白质、活性时间序列 | 报告器增加后迅速平台期，关键机器不能更新 |
| 信息复制 | 完整模板复制、误差控制与可读取性 | 全长拷贝、序列、拷贝数动态 | 局部扩增或错误模板累积，复制后不能继续表达 |
| 代谢／能量 | 底物转化、ATP／氧化还原再生、废物处理 | 流量、能量电荷、pH／氧化还原与副产物 | 短时 ATP 生成，却不能支持持续合成和维护 |
| 运输／稳态维持 | 选择性交换、离子／渗透／体积调控 | 膜流量、梯度、体积与状态反馈 | 孔道延长供料，同时失去离子梯度或内部组分 |
| 生长／分裂 | 膜和内容物同步增长、定位、收缩、断裂 | 面积／体积轨迹、断裂、子代完整性 | 形变或颈缩发生，但未形成两个封闭可运行区室 |
| 遗传／谱系 | 信息与功能机器共同传递，子代可重复循环 | 多代谱系、基因型–表型耦合 | 第一代有产物，稀释或随机分配后子代失去功能 |

系统整合应采用时间分辨的物质平衡，而非只看终点图像。研究者需要记录输入、内部池、输出、泄漏、体积、膜面积和反应速率，改变一个供料或反馈条件并预测多个读出怎样共同变化。Laohakunakorn 等将无细胞合成生物学概括为从表达模块、区室化、复制到复杂生物分子系统的自下而上连接；真正的进展来自接口可测、失配可定位和组合后出现的新行为。[^bottom-up-cell-free-integration]

## 与相邻页面的接口 { #disciplinary-interfaces }

[基因组设计、代谢工程与生物制造](synthetic_genome_metabolic.md)负责基因组精简、合成基因组和细胞工厂的尺度连接，本页从继承的细胞机器与重构的区室的差异继续讨论最小细胞。[生物元件与合成基因线路](synthetic_circuits.md)承接启动子、RNA 调节因子、反馈和资源负载的线路原理；本页聚焦这些线路在提取物、PURE、微流控反应室和囊泡中怎样运行。[随机运动、扩散与膜输运](biophysics_transport.md)、[大分子物理、膜与分子机器](biophysics_macromolecular.md)及[膜的物性、组分运动与跨膜运输](../cell/membrane_transport.md)分别提供扩散、渗透、膜弹性和转运体的物理与分子基础。人工区室之间的通信、劳动分工和空间图案则由[多细胞合成系统与空间模式](synthetic_multicellular.md)继续展开。

## 参考资料与延伸阅读 { #references }

[^cell-free-scope]: Silverman AD, Karim AS, Jewett MC. [Cell-free gene expression: an expanded repertoire of applications](https://doi.org/10.1038/s41576-019-0186-3). *Nature Reviews Genetics*. 2020;21:151–170；Carlson ED, Gan R, Hodgman CE, Jewett MC. [Cell-free protein synthesis: applications come of age](https://doi.org/10.1016/j.biotechadv.2011.09.016). *Biotechnology Advances*. 2012;30:1185–1194.
[^pure-system]: Shimizu Y, Inoue A, Tomari Y, et al. [Cell-free translation reconstituted with purified components](https://doi.org/10.1038/90802). *Nature Biotechnology*. 2001;19:751–755.
[^cell-free-metabolism]: Jewett MC, Calhoun KA, Voloshin A, Wuu JJ, Swartz JR. [An integrated cell-free metabolic platform for protein production and synthetic biology](https://doi.org/10.1038/msb.2008.57). *Molecular Systems Biology*. 2008;4:220.
[^continuous-cell-free]: Spirin AS, Baranov VI, Ryabova LA, Ovodov SY, Alakhov YB. [A continuous cell-free translation system capable of producing polypeptides in high yield](https://doi.org/10.1126/science.3055301). *Science*. 1988;242:1162–1164.
[^microfluidic-artificial-cells]: Karzbrun E, Tayar AM, Noireaux V, Bar-Ziv RH. [Programmable on-chip DNA compartments as artificial cells](https://doi.org/10.1126/science.1255550). *Science*. 2014;345:829–832.
[^cell-free-prototyping]: Takahashi MK, Chappell J, Hayes CA, et al. [Rapidly characterizing the fast dynamics of RNA genetic circuitry with cell-free transcription–translation (TX–TL) systems](https://doi.org/10.1021/sb400206c). *ACS Synthetic Biology*. 2015;4:503–515；Garamella J, Marshall R, Rustad M, Noireaux V. [The all *E. coli* TX–TL toolbox 2.0: a platform for cell-free synthetic biology](https://doi.org/10.1021/acssynbio.5b00296). *ACS Synthetic Biology*. 2016;5:344–355.
[^minimal-genome]: Hutchison CA III, Chuang RY, Noskov VN, et al. [Design and synthesis of a minimal bacterial genome](https://doi.org/10.1126/science.aad6253). *Science*. 2016;351:aad6253.
[^bottom-up-synthetic-cells]: Szostak JW, Bartel DP, Luisi PL. [Synthesizing life](https://doi.org/10.1038/35053176). *Nature*. 2001;409:387–390；Schwille P, Spatz J, Landfester K, et al. [MaxSynBio: avenues towards creating cells from the bottom up](https://doi.org/10.1002/anie.201802288). *Angewandte Chemie International Edition*. 2018;57:13382–13392.
[^minimal-cell-integration]: Caschera F, Noireaux V. [Integration of biological parts toward the synthesis of a minimal cell](https://doi.org/10.1016/j.cbpa.2014.09.028). *Current Opinion in Chemical Biology*. 2014;22:85–91.
[^vesicle-bioreactor]: Noireaux V, Libchaber A. [A vesicle bioreactor as a step toward an artificial cell assembly](https://doi.org/10.1073/pnas.0408236101). *Proceedings of the National Academy of Sciences USA*. 2004;101:17669–17674.
[^encoded-dna-replication]: van Nies P, Westerlaken I, Blanken D, Salas M, Mencía M, Danelon C. [Self-replication of DNA by its encoded proteins in liposome-based synthetic cells](https://doi.org/10.1038/s41467-018-03926-1). *Nature Communications*. 2018;9:1583.
[^cell-free-phospholipid]: Scott A, Noga MJ, de Graaf P, Westerlaken I, Yildirim E, Danelon C. [Cell-free phospholipid biosynthesis by gene-encoded enzymes reconstituted in liposomes](https://doi.org/10.1371/journal.pone.0163058). *PLOS ONE*. 2016;11:e0163058.
[^vesicle-reproduction]: Kurihara K, Tamura M, Shohda K, Toyota T, Suzuki K, Sugawara T. [Self-reproduction of supramolecular giant vesicles combined with the amplification of encapsulated DNA](https://doi.org/10.1038/nchem.1127). *Nature Chemistry*. 2011;3:775–781.
[^cell-free-division-machinery]: Godino E, López JN, Foschepoth D, et al. [De novo synthesized Min proteins drive oscillatory liposome deformation and regulate FtsA–FtsZ cytoskeletal patterns](https://doi.org/10.1038/s41467-019-12932-w). *Nature Communications*. 2019;10:4969；Godino E, López JN, Zarguit I, et al. [Cell-free biogenesis of bacterial division proto-rings that can constrict liposomes](https://doi.org/10.1038/s42003-020-01258-9). *Communications Biology*. 2020;3:539.
[^artificial-cell-integration]: Noireaux V, Maeda YT, Libchaber A. [Development of an artificial cell, from self-organization to computation and self-reproduction](https://doi.org/10.1073/pnas.1017075108). *Proceedings of the National Academy of Sciences USA*. 2011;108:3473–3480.
[^bottom-up-cell-free-integration]: Laohakunakorn N, Grasemann L, Lavickova B, et al. [Bottom-up construction of complex biomolecular systems with cell-free synthetic biology](https://doi.org/10.3389/fbioe.2020.00213). *Frontiers in Bioengineering and Biotechnology*. 2020;8:213.
