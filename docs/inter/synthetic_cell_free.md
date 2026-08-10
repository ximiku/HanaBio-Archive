# 无细胞系统、最小细胞与人工细胞

无细胞系统把转录、翻译、代谢或复制等生物反应从完整活细胞中取出，使研究者能够直接规定模板、酶、核糖体、小分子和反应边界。它既保留生命系统中依赖多组分协同的反应，又把细胞生长、染色体复制和群体选择等背景暂时移开。早期遗传密码研究已经利用无细胞蛋白质合成建立 RNA 序列与氨基酸之间的对应；现代 cell-free gene expression 则进一步成为线路表征、蛋白质生产和人工细胞组装的共同平台。[^cell-free-scope]

最小细胞与人工细胞把问题推向另一个层次。最小细胞追问在给定环境中维持细胞连续存在所需的最小功能组合；人工细胞则泛指由天然与合成组分构成、能够执行某些细胞样行为的区室化系统。二者经常重叠，却不由同一个基因数或材料类型定义：一个删减基因组的细菌仍继承完整细胞质和膜系统，一个能表达蛋白的脂质体则可能尚不能复制信息、维持离子稳态或产生后代。本页沿无细胞反应、膜区室和功能整合三个层次，解释这些系统怎样逐步接近自维持的细胞组织。

## 无细胞表达的反应边界 { #cell-free-expression-boundary }

cell-free protein synthesis（CFPS）以 mRNA 为模板完成翻译；cell-free transcription–translation（TX–TL）则从 DNA 开始，把转录和翻译耦合在同一反应中。一个基础体系需要 DNA 或 RNA 模板、RNA polymerase、ribosome、tRNA、aminoacyl-tRNA synthetase、translation factors、氨基酸、核苷酸、ATP／GTP、盐和适宜的氧化还原环境。若产物需要折叠、二硫键、辅基、膜插入或翻译后加工，还要加入相应 chaperone、foldase、membrane、enzyme 或 organelle-derived machinery。

去除完整细胞并没有去除反应的上下文。模板浓度改变会重新分配 polymerase 和 ribosome，mRNA 稳定性决定可被翻译的时间窗，Mg$^{2+}$ 与 K$^+$ 同时影响核糖体、核酸折叠和多种酶活性。反应体积、界面吸附、分子拥挤、氧传递以及制备批次也会改变表达。因此，无细胞体系的“开放”首先表示组分可以直接添加、替换和测量，并不表示每个组分相互独立。

### 细胞裂解液与重构体系 { #extract-and-reconstituted-systems }

细胞裂解液体系从 *Escherichia coli*、wheat germ、rabbit reticulocyte、insect cell 或 mammalian cell 等来源保留转录翻译机器及许多内源代谢酶。裂解、澄清和预反应移除染色质、膜碎片或内源 mRNA 后，所得 extract 仍含大量未逐一计量的蛋白、RNA、小分子和膜囊泡。这种组合通常能利用宿主原有的 folding、energy metabolism 与 macromolecular crowding，却也带来 nuclease、protease、background metabolism 和批次差异。

重构体系从纯化组分重新组装反应。Shimizu 等建立的 PURE system（protein synthesis using recombinant elements）以纯化 ribosome、tRNA、aminoacyl-tRNA synthetase、initiation／elongation／release factors 和能量再生组分完成蛋白质合成，使每一种因子的存在与浓度都可被明确改变。[^pure-system] 这种可定义性适合研究最低组分、非天然 amino acid、translation mechanism 和组分间因果关系；需要 chaperone、membrane insertion、RNA degradation 或特殊代谢时，则要把相应模块显式补回。

| 体系 | 主要来源 | 实验优势 | 需要显式核对的边界 |
| --- | --- | --- | --- |
| crude extract | 细菌、植物、动物细胞裂解液 | 保留宿主多种代谢、折叠与加工能力，制备后可快速运行复杂表达 | 内源核酸酶／蛋白酶、背景代谢、批次组成和未知资源竞争 |
| purified／PURE | 纯化核糖体、因子、tRNA、酶与小分子 | 组分身份和浓度明确，便于删减、替换和定量重构 | 缺失的伴侣、膜、降解、辅因子与加工功能须逐项加入 |
| hybrid system | extract 中加入纯化因子、膜囊泡或特定代谢模块 | 在较高活性和可控制性之间调整，便于修补确定瓶颈 | 新模块可能改变离子、能量、拥挤与总资源分配，仍需整体校准 |

### 模板、转录与翻译的耦合 { #template-transcription-translation }

以 mRNA 为模板时，转录过程被移出反应，适合直接研究 translation initiation、codon、tRNA、ribosome 和 protein folding；mRNA 的 5′／3′ 结构、cap、poly(A) tail 与降解速度仍决定有效翻译。以 DNA 为模板的 TX–TL 可使用 T7 RNA polymerase，也可保留宿主 RNA polymerase 与 sigma factor，使 promoter、repressor、RNA regulator 和 protein feedback 进入同一动态回路。两种 polymerase 的速度、promoter specificity、termination 和资源需求不同，不能只按相同 DNA 浓度比较输出。

转录与翻译之间存在物质和时间耦合。mRNA 的生成速度高于 ribosome 可处理的能力时，增加模板主要累积 RNA 并消耗 NTP；翻译过强则可能耗尽 charged tRNA、elongation factor、amino acid 或 energy carrier。蛋白质 reporter 的 fluorescence 又滞后于 translation，因为 folding 和 chromophore maturation 需要时间。定量表征应同时测 mRNA、nascent／mature protein、底物消耗和反应停止时点，把合成速度、降解速度与报告成熟分开。

### 能量再生与物质平衡 { #energy-regeneration-balance }

转录消耗 NTP，tRNA 充氨消耗 ATP，肽链延伸每加入一个 amino acid 还要消耗 GTP；protein folding、proteolysis、membrane transport 和 DNA replication 会继续分享能量与辅因子。单纯提高初始 ATP／GTP 不能让反应长期运行，因为高能磷酸键不断水解，ADP、GDP、AMP 和无机磷酸逐渐积累，pH、Mg$^{2+}$ availability 与 ionic strength 也随之改变。常见体系用 phosphoenolpyruvate、creatine phosphate、3-phosphoglycerate、glucose 或 maltodextrin 等底物再生 ATP，并由 nucleoside diphosphate kinase 等反应维持 GTP。

extract 中残留的 glycolysis、tricarboxylic-acid-cycle enzyme 和 inverted membrane vesicle 还可形成更完整的 energy metabolism。Jewett 等利用 *E. coli* extract 中保留的中心代谢与 oxidative phosphorylation 建立长期供能的 cell-free metabolic platform，说明裂解后仍可能保存成套代谢耦合。[^cell-free-metabolism] 评价能量模块时应同时追踪 ATP／ADP、氧或电子受体、pH、无机磷酸、底物和副产物；某个 reporter 停止增加可能来自模板损失、核糖体失活、氨基酸耗尽或产物抑制，不能一律归因于 ATP 不足。

## 反应格式与持续运行 { #reaction-formats-continuous-operation }

batch reaction 在封闭体积中一次加入模板和大部分底物，操作简单，适合快速比较序列或条件。其输出随时间经过 lag、近似线性合成和 plateau，终点浓度把多个阶段压缩成一个数。反应到达 plateau 后补加模板若不能恢复表达，提示翻译机器或能量系统受损；补加 amino acid、NTP 或 energy substrate 后恢复，则可进一步定位底物限制。

Spirin 等的 continuous-flow cell-free translation system 持续送入 amino acid、ATP、GTP 等小分子，同时移走低分子产物，使 macromolecular translation machinery 留在反应室内并延长蛋白质合成。[^continuous-cell-free] continuous-exchange system 以半透膜隔开 reaction chamber 与 feeding solution，小分子沿浓度梯度交换；连续流和连续交换都把供料速率、膜截留范围与体积更新率变成新的控制变量。过快交换可能洗出必要的小分子或扰动离子平衡，过慢则仍会出现局部耗竭和副产物积累。

### 微流控区室与空间供料 { #microfluidic-compartments }

微流控装置把反应缩小到 droplet、chamber 或 channel，并精确规定供料波形、扩散距离和区室间连接。Karzbrun 等把 DNA 固定在微加工的二维 compartment 中，使表达区通过狭窄 capillary 与持续流动的 feeding channel 交换小分子；这些非脂质 artificial cells 能运行 gene expression 与 circuit dynamics，同时把模板保留和物质交换分开控制。[^microfluidic-artificial-cells]

体积缩小会放大表面积／体积比和随机分配。低拷贝 DNA、ribosome 或 regulator 被封装进许多微滴或 vesicle 时，各区室获得的分子数并不相同；一部分区室可能缺少某个必要组分，另一部分则因局部浓度高而表现强输出。bulk fluorescence 只给出总体平均，不能区分“每个区室均匀变弱”和“少数高表达区室加上许多空区室”。single-compartment imaging、体积分箱与绝对分子校准因此是微型体系的基本读出。

### 线路原型测试与参数迁移 { #circuit-prototyping-transfer }

无细胞体系可在数小时内改变 DNA template、promoter、RBS、RNA regulator、protein degradation tag 和 input waveform，适合测量 transfer curve、response time、leakiness、resource competition 和组合线路的顺序关系。Takahashi 等用 TX–TL 追踪 RNA circuitry 的快速动态；Garamella 等则系统表征 all-*E. coli* TX–TL 中 endogenous transcription、mRNA／protein degradation、sigma factor 和 resource loading，使 cell-free prototyping 从终点筛选扩展到参数化动力学。[^cell-free-prototyping]

迁入活细胞时，copy number、chromosomal context、polymerase／ribosome abundance、growth dilution、membrane transport、crowding 和 stress response 都会改变。cell-free 中得到的元件排序可以帮助缩小设计空间，但参数迁移需要在宿主内重新校准；尤其是高 DNA 浓度产生的强输出，可能在细胞中转化为 plasmid burden 和 growth feedback。原型测试的价值在于快速暴露输入—输出与资源耦合，而不是把体外行为当作宿主行为的等比例复制。

## 最小细胞的两条构建路线 { #minimal-cell-routes }

“最小”必须说明环境和功能标准。只要求在富营养、恒温和渗透稳定条件下增殖，与要求在波动环境中合成全部 building blocks、修复损伤并长期演化，会得到不同的必要集合。基因组大小、基因数、protein number 和 reaction number 都可以是删减指标，却不能单独证明细胞具有自维持的最小功能闭包。

### 自上而下的基因组精简 { #top-down-genome-reduction }

top-down 路线从可独立生长的细胞出发，通过单基因或成组删除、transposon insertion、comparative genomics 和 whole-genome synthesis 寻找在指定条件下可移除的序列。Hutchison 等由 *Mycoplasma mycoides* synthetic genome 反复设计和测试，得到 531 kb、473-gene 的 JCVI-syn3.0；许多保留基因当时仍缺少明确功能，显示实验 essentiality 可以先于机制解释。[^minimal-genome]

这种路线保留母细胞已有的 ribosome、membrane、lipid、metabolite、protein complex 和空间组织。新基因组接管细胞后，后代逐渐由它编码的成分更新，但最初启动依赖受体细胞质。top-down 最擅长确定“现成细胞还能删去什么”，并揭示基因间 synthetic lethality 与条件性必需；它不能单独回答这些成分怎样从非细胞状态组装成细胞。

### 自下而上的功能重构 { #bottom-up-reconstitution }

bottom-up 路线从 purified molecule、cell extract、lipid、polymer、microfluidic compartment 和能量底物出发，逐个加入 information replication、gene expression、metabolism、transport、homeostasis、growth 与 division。Szostak、Bartel 和 Luisi 将能够复制的信息聚合物、可增长分裂的边界及其耦合作为合成细胞的基本问题；后续 bottom-up synthetic biology 则用无细胞重构和微流控逐项连接这些功能。[^bottom-up-synthetic-cells]

reconstitution 的优势是每个组分可以直接指定，因果关系较清晰；困难在于组分一旦耦合，最优条件常互相冲突。DNA polymerase、ribosome、membrane enzyme 和 cytoskeletal protein 可能偏好不同 Mg$^{2+}$、pH、盐与拥挤度，脂质体内的小体积还放大随机分配。Caschera 和 Noireaux 因而把 minimal cell construction 描述为 biological parts 的 integration 问题：功能清单只是起点，接口与共同运行条件决定能否形成系统。[^minimal-cell-integration]

| 路线 | 起始对象 | 主要操作 | 最直接回答的问题 | 关键边界 |
| --- | --- | --- | --- | --- |
| top-down | 可生长细胞及其完整细胞质 | 删除、替换、重编码和合成基因组移植 | 在规定环境中哪些基因与序列仍是必要的 | 继承现成膜、核糖体、代谢物和空间组织；必要性依赖条件 |
| bottom-up | 纯化组分、extract、膜与非细胞区室 | 逐步重构表达、复制、代谢、运输和分裂 | 哪些组分足以产生某项细胞功能及其耦合 | 组分兼容、封装随机性、能量与物质闭合成为主要限制 |
| hybrid／semi-synthetic | 细胞来源机器与人工材料的组合 | 在 extract 或 vesicle 中加入定义模块，或用合成 genome 接管受体 | 天然机器和人工边界怎样互相支持 | 系统来源混合，须明确哪些能力被继承、哪些由构建产生 |

## 膜区室与选择性交换 { #membrane-compartments-exchange }

区室让反应物维持局部浓度，使 information、catalyst 和 product 能够作为同一单位被选择和传递。liposome 由 phospholipid bilayer 包围水相，giant unilamellar vesicle（GUV）尺寸接近细胞，便于显微观察和膜形变实验；small／large unilamellar vesicle 则适合群体生化测量。polymersome、water-in-oil droplet、coacervate 与固体微加工 chamber 提供不同 permeability、mechanics 和内部环境，人工细胞研究并不只等同于脂质体。

lipid composition 决定 membrane thickness、fluidity、charge、curvature tendency 和 protein insertion。制备方法还决定 lamellarity、size distribution、encapsulation efficiency 和残留 oil。若 DNA 与表达体系在封装前充分混合，低拷贝组分进入各 vesicle 的数量具有显著随机性；验证一个区室真正完成表达，需把膜完整性、内部 reporter、外部背景和区室体积同时纳入。

### 通透性、膜蛋白与供料 { #permeability-membrane-proteins }

脂双层可让水和部分小型不带电分子通过，却强烈限制 ion、NTP、amino acid 和多数极性代谢物。被动 pore 增加小分子交换，carrier 与 pump 提供选择性或主动运输；membrane protein 的 cell-free synthesis 还要解决折叠、取向和插入。蛋白即使出现在膜组分中，也可能朝向混杂、聚集或失去 electrochemical coupling，功能应由 substrate flux、ion gradient 或 channel conductance 直接检验。

Noireaux 和 Libchaber 把 *E. coli* cell-free expression 封装在 phospholipid vesicle 中，并表达 α-hemolysin pore，使 amino acid、nucleotide 和 energy substrate 等小分子能够跨膜补给，同时将 ribosome、DNA 和大分子表达机器留在内部。[^vesicle-bioreactor] 这个 vesicle bioreactor 把 gene expression、selective exchange 和 compartment lifetime 连在一起；它仍依赖外部 feeding solution，因而更接近具有选择性交换的反应器，而非物质上封闭的微型细胞。

### 渗透、体积与离子稳态 { #osmotic-volume-ion-homeostasis }

水跨膜移动通常快于大多数溶质。内部 macromolecule、counterion、NTP 和反应产物形成的总 osmolarity 高于外界时，水进入并增加 membrane tension，极端情况下导致 leakage 或 lysis；外界渗透压较高则使 vesicle 失水、松弛和内陷。gene expression 还会把小分子底物聚合为 protein／RNA，并生成 phosphate、proton 和其他产物，使 osmotic balance 与 charge balance 随时间变化。

稳定体积需要把膜面积、包裹体积、溶质生成和跨膜通量联立考虑。buffer 可以减小 pH 波动，却不能替代 ion transport；pore 可解除小分子耗竭，也可能让建立的 gradient 迅速消散。更完整的 homeostasis module 需要 sensor 读取 pH、ion、redox 或 energy state，再由 transporter、enzyme 和 feedback 调整通量。人工细胞中的稳态因此是一种持续耗能的动态状态，而不是初始内外溶液配平后永久保持。

## 信息复制、代谢与膜生长 { #information-metabolism-membrane-growth }

持续存在的区室要更新会降解或被稀释的成分。DNA／RNA replication 保存模板，transcription–translation 更新催化机器，metabolism 再生能量和 building block，membrane synthesis 扩大边界；这些过程必须共享物质平衡。只让模板拷贝数上升会增加 osmotic 与 resource burden，只让膜面积增加会稀释内部机器，只提高 protein synthesis 又可能耗尽 energy substrate。自维持来自这些通量之间的比例协调。

表达机器本身尤其难以更新。ribosome 由 rRNA 和数十种 ribosomal protein 组装，还需要 rRNA transcription、processing、modification 与 assembly factor；tRNA 也要经过转录、成熟、修饰和充氨。多数 cell-free system 预先加入现成 ribosome、tRNA 和 translation factor，因此合成大量普通 protein 仍未证明体系能够再生自己的表达能力。更强的自维持判据是新合成的机器能够替换降解或分裂稀释掉的机器，并在下一轮继续支持全套表达。

van Nies 等把 bacteriophage Φ29 的 DNA replication machinery 编码在模板本身，使无细胞体系先表达 replication proteins，再复制承载其编码信息的 DNA，并将体系封装在 liposome 中。[^encoded-dna-replication] 这构成了 information-to-function-to-information 的闭环雏形；每一轮仍要检查完整模板比例、复制错误、蛋白与 DNA 的时序、区室间随机分配及反应能否在 daughter compartment 中重新启动。

膜更新要求合成 amphiphile 并把它送入当前区室的 bilayer。Scott 等在 liposome 中用基因编码、无细胞表达生成的 enzyme 重构部分 bacterial phospholipid biosynthesis，展示遗传信息可以通过 membrane-associated enzyme 连接到膜脂形成。[^cell-free-phospholipid] 脂质产物形成以后，还要证明其插入目标膜、增加可用面积并保持 permeability 与 protein function；游离聚集、形成新 vesicle 或只改变 lipid composition 都不能单独说明原区室完成生长。

能量模块也要与膜交换和物质合成耦合。substrate-level phosphorylation 适合开放反应液，膜上的 electron transport、light-driven proton pump 与 ATP synthase 则可把 bilayer 变成 energy-transducing surface。后者要求 membrane orientation、proton leakage、buffer capacity 和 ATP consumption 相互匹配；测到 ATP 生成只是能量输入的证据，持续 gene expression、lipid synthesis 和 repair 才能检验它是否支撑系统维护。

## 增长、形变与分裂 { #growth-deformation-division }

区室增长需要膜面积与内部体积协调增加。若 lipid insertion 快于内部溶质和水的增长，膜会松弛、形成 tubule 或 bud；体积增加更快则提高 tension。curvature-generating lipid、protein scaffold、cytoskeleton 和外部 mechanical force 可以选择 neck 或 pole，但分裂还需经历 division-site selection、constriction、membrane scission、内容物分配以及两个子区室的封闭。

Kurihara 等把封装 DNA 的扩增与由 amphiphile precursor 驱动的 giant vesicle reproduction 结合，DNA amplification 引起的内部与膜界面变化参与 vesicle deformation 和 division。[^vesicle-reproduction] 该体系的重要性在于同时观测 information reaction 与 compartment reproduction；其膜增长依赖外加前体和特定化学循环，产生的 daughter vesicle 是否继承可再次运行的完整体系仍需逐代验证。

bacterial division machinery 提供另一条重构路线。MinD／MinE 的 reaction–diffusion dynamics 可在膜面形成时空 pattern，FtsZ 与 membrane anchor FtsA／ZipA 则构成 constriction machinery 的核心。Godino 等在 liposome 内由 cell-free expression 合成 Min proteins，观察到 oscillatory membrane deformation 及其对 FtsA–FtsZ pattern 的调节；后续工作让 gene-directed FtsZ proto-ring 对 liposome 产生明显 constriction。[^cell-free-division-machinery] 这些结果把基因表达、自组织和膜力连接起来，也暴露了 final scission、division-plane control、均衡内容物分配和子代重启仍是彼此独立的整合步骤。

## 人工细胞的功能层级与实验判据 { #artificial-cell-functional-levels }

人工细胞可以被设计为 biosensor、molecular computer、protein factory、drug-delivery compartment、细胞间 signal source 或生命功能重构平台。某些系统追求少数组分下的机制透明，另一些系统追求复杂输入—输出而不要求自主增长。Noireaux、Maeda 和 Libchaber 将 artificial-cell development 概括为从 self-organization、computation 走向 self-reproduction 的连续工程；bottom-up 研究则强调把已分别工作的模块放进同一物质与能量框架。[^artificial-cell-integration]

功能声明应对应直接实验，而不是由外形或单一 reporter 推断。下面各层可以分别成立，也可能在组合时互相削弱。

| 功能层级 | 必要过程 | 直接读出 | 尚未闭合时的典型表现 |
| --- | --- | --- | --- |
| compartment | 连续边界、内容物保留、规定 permeability | membrane integrity、leakage、内外浓度与体积分布 | 有 vesicle 外形，但大分子泄漏或区室组成高度不明 |
| gene expression | 模板转录、翻译、折叠与必要加工 | mRNA、nascent／mature protein、activity time course | reporter 增加后迅速 plateau，关键机器不能更新 |
| information replication | 完整模板复制、误差控制与可读取性 | full-length copy、sequence、copy-number dynamics | 局部扩增或错误模板累积，复制后不能继续表达 |
| metabolism／energy | 底物转化、ATP／redox regeneration、废物处理 | flux、energy charge、pH／redox 与副产物 | 短时 ATP 生成，却不能支持持续合成和维护 |
| transport／homeostasis | 选择性交换、ion／osmotic／volume control | membrane flux、gradient、体积与状态反馈 | pore 延长供料，同时失去离子梯度或内部组分 |
| growth／division | 膜和内容物同步增长、定位、收缩、断裂 | area／volume trajectory、scission、daughter integrity | 形变或颈缩发生，但未形成两个封闭可运行区室 |
| heredity／lineage | 信息与功能机器共同传递，子代可重复循环 | 多代 lineage、genotype–phenotype coupling | 第一代有产物，稀释或随机分配后子代失去功能 |

系统整合应采用 time-resolved mass balance，而非只看终点图像。研究者需要记录 input、内部 pool、output、leakage、volume、membrane area 和 reaction rate，改变一个供料或反馈条件并预测多个读出怎样共同变化。Laohakunakorn 等将 cell-free synthetic biology 概括为从表达模块、compartmentalization、replication 到复杂 biomolecular system 的 bottom-up 连接；真正的进展来自接口可测、失配可定位和组合后出现的新行为。[^bottom-up-cell-free-integration]

## 与相邻页面的接口 { #disciplinary-interfaces }

[基因组设计、代谢工程与生物制造](synthetic_genome_metabolic.md)负责 genome reduction、synthetic genome 和 cell factory 的尺度连接，本页从 inherited cell machinery 与 reconstructed compartment 的差异继续讨论 minimal cell。[生物元件与合成基因线路](synthetic_circuits.md)承接 promoter、RNA regulator、feedback 和 resource loading 的线路原理；本页聚焦这些线路在 extract、PURE、microfluidic chamber 和 vesicle 中怎样运行。[随机运动、扩散与膜输运](biophysics_transport.md)、[大分子物理、膜与分子机器](biophysics_macromolecular.md)及[膜的物性、组分运动与跨膜运输](../cell/membrane_transport.md)分别提供扩散、渗透、膜弹性和 transporter 的物理与分子基础。人工区室之间的 communication、division of labour 和 spatial pattern 则由[多细胞合成系统与空间模式](synthetic_multicellular.md)继续展开。

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
