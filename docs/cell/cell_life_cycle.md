# 细胞增殖、分化、死亡与衰老

多细胞生物通过多种细胞状态及其转换维持组织。一个细胞是否继续生长和分裂，是否建立专门化身份，是否进入静息或衰老，以及何时被清除，都取决于细胞内控制网络、邻近细胞、细胞外基质和全身信号的共同作用。分裂补充细胞，分化建立功能差异，死亡移除受损或已完成任务的细胞，衰老细胞则可能长期存留并改变周围组织；这些状态及其转换速率共同构成组织稳态。[^cell-number-control][^osm-cell-death]

## 增殖、静息与命运状态 { #cell-state-balance }

细胞生长指生物量、体积和合成能力的增加，细胞增殖则要求细胞完成周期并产生后代。两者常被营养和生长因子协同促进，也可彼此分离：早期胚胎的卵裂能在总体积近乎不变时快速增加细胞数，神经元和骨骼肌纤维则可在不分裂时扩大或重塑。动物细胞通常还需要促分裂原（mitogen）推动周期进入、存活因子（survival factor）抑制死亡，并从营养、黏附和力学环境获得许可；这些信号经 Ras–ERK、PI3K–AKT–mTOR、整联蛋白等网络接入代谢与[细胞周期控制](cell_cycle.md#g1-s-commitment)。[^cell-number-control]

离开周期后，细胞可进入不同结局。静息细胞处于可逆的非增殖状态，仍能代谢、感知信号并在条件适合时重新进入周期；终末分化细胞维持专门功能，重新分裂的能力因细胞类型而异；衰老细胞则以较持久的增殖停滞、应激程序和分泌变化为特征。G$_1$、静息、终末分化和衰老都可能具有 2C DNA 含量，Ki-67 阴性也只提供一种增殖相关状态读出。理解组织更新需要把细胞状态、状态持续时间和后续命运分开测量。

细胞密度和位置会改变这种平衡。上皮细胞的钙黏蛋白连接、整联蛋白黏附与基质刚度可调节 YAP/TAZ、Rho 和生长因子通路；失去合适基质接触的部分细胞会停止增殖或发生 anoikis。接触抑制和锚定依赖（anchorage dependence）的阈值随组织、发育阶段与遗传背景而异。黏附结构和机械转导见[细胞外基质、黏附与连接](cell_interactions.md#ecm-remodelling-mechanotransduction)，信号的时空编码见[细胞信号转导](cell_signaling.md#spatiotemporal-coding)。

## 分化建立可维持的细胞身份 { #differentiation }

同一个体的多数体细胞拥有大体相同的基因组，却稳定表达不同的基因集合。分化的核心是转录因子组合、顺式调控元件、染色质可及性、DNA 甲基化、组蛋白修饰和三维基因组组织共同建立可维持的基因调控状态。管家基因（housekeeping gene）表示某些基础功能在广泛细胞中需要，其表达水平仍随细胞类型和状态变化；组织特异基因则通常受多个调节因子协同控制。

细胞外信号先在空间中制造差异，调控网络再把短暂输入转成较稳定的状态。Notch 的邻接依赖信号、Wnt、Hedgehog、TGF-$\beta$ 及细胞因子通路可根据受体量、信号持续时间、既有染色质和反馈回路产生不同输出。正反馈、相互抑制和有丝分裂后对染色质状态的重建，使细胞在诱导信号减弱后仍可保留身份，这类跨时间维持的状态常被称为细胞记忆。记忆有不同稳定度，也可能在损伤、再生或疾病中被改写。[^cellular-memory]

### 决定、分化与重编程 { #fate-reprogramming }

命运决定描述细胞在尚未完全显示成熟形态时，已倾向于在通常环境中走向某一结局；分化则是结构、代谢和功能特征逐步实现的过程。决定可以经历多个阶段：发育中的细胞可能先获得宽泛区域身份，再经连续分支缩小潜能；成熟状态也需要持续的转录因子和组织环境维护。

体细胞核移植产生克隆动物，说明已分化哺乳动物细胞核仍可支持完整发育程序；在培养细胞中表达少数组合转录因子可以获得诱导多能干细胞（induced pluripotent stem cell，iPSC），进一步证明细胞身份能够被重编程。[^nuclear-transfer][^ipsc-reprogramming] 这些实验显示基因组信息被保留、调控状态可被重置；重编程效率、表观遗传残留、基因组损伤和细胞异质性则会影响产物。直接谱系转换、去分化和经过多能态的重编程也属于不同路径。

## 干细胞把自我更新与组织产出耦联 { #stem-cells }

干细胞以长期自我更新和产生一个或多个分化谱系的能力定义。胚胎来源或培养状态下的潜能，与成体组织中实际采用的命运属于不同证据层级；判断一个细胞是否为干细胞，需要在相应组织和时间尺度上证明其后代贡献，表面标记或培养皿形态可用于富集候选。[^stem-cell-renewal]

| 潜能层级 | 可产生的范围 | 解释边界 |
| --- | --- | --- |
| 全能性 | 胚体与胚外组织，具形成完整个体的潜能 | 需严格限定物种和发育阶段；单一分子标记不能证明全能 |
| 多能性 | 三个胚层的多种细胞类型 | 典型胚胎干细胞和 iPSC 属于培养与实验定义，不等同于完整个体发育能力 |
| 多潜能性 | 某一组织或谱系群内的多种细胞 | 造血干细胞等实例的谱系范围由移植与原位追踪共同界定 |
| 单潜能祖细胞 | 主要补充一种成熟细胞 | 若能长期维持自身，仍可承担局部组织更新 |

干细胞生态位由支持细胞、细胞外基质、血管、代谢和局部信号组成。生态位可以保持静息、调节自我更新概率，也能在损伤后改变分裂和分化输出。一次不对称分裂可让两个子细胞获得不同的命运决定因子或不同的生态位接触；对称自我更新和对称分化同样常见。组织尺度的稳定不要求每次分裂都严格一干一分，而可由许多细胞在时间上的概率平衡产生。[^stem-cell-niche]

## 癌变重写组织的状态约束 { #cancer-cell-states }

癌变是多步选择过程。促进生长、存活、代谢适应或基因组不稳定的改变在细胞群中积累，并同免疫、基质、血管和营养环境相互作用。原癌基因的获得性激活可以增强增殖或存活信号，抑癌基因失活则可削弱周期制动、DNA 损伤响应、死亡或组织结构约束。癌基因和抑癌基因的等位基因行为取决于具体基因、剂量与组织情境。癌细胞还会通过逃避生长抑制、抵抗死亡、维持复制潜能、改变代谢、诱导血管和侵袭等相互耦联的能力扩增。[^cancer-hallmarks]

肿瘤内部包含遗传亚克隆，也包含可逆的转录、代谢和分化状态。某些细胞在移植或类器官实验中显示较强的自我更新与再建瘤能力，因而被称为癌干细胞（cancer stem cell）或肿瘤起始细胞（tumor-initiating cell）；这一操作性定义描述实验中的功能，并不指定它们必然来自正常成体干细胞。治疗压力、缺氧和生态位信号可以使细胞在干性样与较分化状态间转换，脑肿瘤等系统已提供状态可塑性的具体证据。[^cancer-stem-plasticity] 细胞生物学关注这些状态约束怎样被重写，肿瘤的组织学分类与临床分级则属于病理诊断问题。

## 细胞死亡的术语与判据 { #cell-death-framework }

细胞死亡指细胞不可逆地失去维持自身完整性和功能的能力。意外性细胞死亡（accidental cell death）来自超过细胞调节能力的极端物理或化学破坏；受调控细胞死亡（regulated cell death）由可干预的分子机器执行；程序性细胞死亡（programmed cell death）则是受调控死亡在正常发育或稳态程序中的特定情境。凋亡、坏死性凋亡、焦亡和铁死亡主要指机制，细胞肿胀、膜破裂、染色质凝集等则是形态。现代命名优先依据分子依赖关系定义死亡方式，形态用于提供辅助证据。[^nccd-2018]

“坏死”适合描述细胞与组织的裂解性死亡形态。不同死亡通路可以交叉：同一刺激可随剂量、能量状态、蛋白表达和药理干预转向另一种结局，末端膜破裂还会使早期特征重叠。实验上宜先证明细胞确实死亡，再用遗传扰动、特异底物、膜完整性和形态等相互独立的证据辨认机制。

## 凋亡把细胞拆解与清除耦联 { #apoptosis }

凋亡通常表现为细胞收缩、染色质凝集、膜起泡和细胞碎裂，质膜在早期相对完整。执行者半胱天冬酶（caspase）-3、caspase-7 等切割细胞骨架、核纤层、DNA 修复和转录相关蛋白，caspase 激活的脱氧核糖核酸酶（caspase-activated DNase，CAD）可造成核 DNA 断裂。随后细胞或凋亡小体暴露吞噬信号并被邻近细胞或专业吞噬细胞清除。典型凋亡因此能减少胞内成分外泄；清除不足或特定免疫环境仍可产生炎症。

### 线粒体内源通路 { #intrinsic-apoptosis }

DNA 损伤、复制压力、细胞因子撤除、内质网应激或异常癌基因信号可汇聚到 BCL-2 蛋白家族。仅含 BH3 结构域蛋白（BH3-only protein）根据刺激与细胞背景抑制 BCL-2、BCL-XL、MCL1 等抗凋亡成员，并促进 BAX、BAK 在外线粒体膜寡聚，造成线粒体外膜通透化（mitochondrial outer membrane permeabilization，MOMP）。释放到胞质的细胞色素 c 同凋亡蛋白酶激活因子 1（apoptotic protease-activating factor 1，APAF1）和 dATP／ATP 组装凋亡体（apoptosome），招募并激活起始者 caspase-9，再放大执行者 caspase。BCL-2 家族通过选择性结合和组织特异依赖共同设定 MOMP 阈值。[^bcl2-apoptosis]

MOMP 常使细胞跨过难以恢复的阈值，但死亡仍受代谢状态和 caspase 抑制因素影响。凋亡诱导因子（apoptosis-inducing factor，AIF）、核酸内切酶 G（endonuclease G，EndoG）等线粒体蛋白可参与 caspase 非依赖性损伤或染色质变化，具体贡献随细胞和刺激而变。p53 一方面可诱导 p21 使周期停顿，另一方面可调节 PUMA、NOXA、BAX 等死亡相关基因；最终结局取决于损伤持续时间、细胞身份和存活信号。

### 死亡受体外源通路 { #extrinsic-apoptosis }

Fas 配体（Fas ligand）、肿瘤坏死因子（tumor necrosis factor，TNF）或 TNF 相关凋亡诱导配体（TNF-related apoptosis-inducing ligand，TRAIL）等分别结合相应的 TNF 受体超家族成员。以 Fas 为例，受体聚集后通过 FADD 组装死亡诱导信号复合物（death-inducing signaling complex，DISC），促进起始者 caspase-8／-10 激活；它们直接切割执行者 caspase，也可切割 BID 形成 tBID，将信号接入 BAX／BAK 与 MOMP。TNF 受体 1 还能依复合物组成启动 NF-$\kappa$B 存活信号、凋亡或坏死性凋亡，具体输出由配体、受体和接头蛋白组合决定。c-FLIP、凋亡抑制蛋白（inhibitor of apoptosis protein，IAP）以及泛素化状态共同改变通路阈值。[^caspase8-death]

细胞毒性 T 细胞和自然杀伤细胞还可用穿孔素（perforin）帮助颗粒酶进入靶细胞；颗粒酶 B（granzyme B）能切割多种凋亡底物并放大线粒体通路。这条免疫效应路线与死亡受体 DISC 分别构成不同上游输入。

### 凋亡细胞清除 { #efferocytosis }

凋亡细胞释放“find-me”信号，并把磷脂酰丝氨酸（phosphatidylserine，PS）等分子呈现在外侧膜面。吞噬细胞可通过桥接分子和多类受体识别这些信号，重排 actin 包裹尸体，再由吞噬体—溶酶体系统降解。持续而迅速的凋亡细胞清除（efferocytosis）有助于限制继发膜破裂，并使吞噬细胞调整脂质代谢和炎症输出。[^efferocytosis] PS 外翻也可见于血小板活化和若干非凋亡性死亡，因此膜联蛋白 V（Annexin V）阳性应与膜通透性、caspase 活性、形态和时间序列联合解释。[^phosphatidylserine-boundary]

## 裂解性受调控死亡 { #lytic-cell-death }

多种受调控通路以质膜通透性增加和胞内成分释放告终，并使用不同的核心机器。它们可参与抗感染、缺血再灌注、神经退行和肿瘤治疗反应；病理样本中的炎症和裂解需要结合执行分子才能确定具体通路。

| 死亡方式 | 代表性执行模块 | 典型生化后果 | 判读要点 |
| --- | --- | --- | --- |
| 坏死性凋亡（necroptosis） | RIPK3 磷酸化并激活 MLKL；部分情境需要 RIPK1 | MLKL 寡聚并改变膜稳态，细胞肿胀、膜破裂 | caspase-8 活性和受体复合物状态会决定是否转入该通路；RIPK3 表达需结合激活和救援证据 |
| 焦亡（pyroptosis） | 炎症小体（inflammasome）–caspase-1 或人 caspase-4／5、鼠 caspase-11 切割 gasdermin D | gasdermin 孔、离子失衡、裂解；常伴 IL-1$\beta$／IL-18 成熟 | 炎症 caspase 与经典凋亡执行者功能不同；不同 gasdermin 还可由其他蛋白酶激活 |
| 铁死亡（ferroptosis） | 含多不饱和脂肪酸（polyunsaturated fatty acid，PUFA）的膜磷脂过氧化失控；铁代谢、system x$_c^-$–GSH–GPX4 等影响阈值 | 脂质过氧化物积累和膜损伤 | 以脂质过氧化、可救援性和通路扰动组合判定，与 caspase 或 gasdermin 通路区分 |

这些模式的共同框架与分子差异见细胞死亡通路的生化综述。[^death-pathways] 缺血—再灌注中 ATP 耗竭、Ca$^{2+}$ 超载、活性氧和线粒体通透性转换怎样把损伤推向不可逆状态，见[细胞损伤与缺血再灌注](../physiology/pathophysiology/cell_injury.md#irreversible-injury)。

## 自噬通量连接质量控制与命运 { #autophagy }

巨自噬（macroautophagy）以双层隔离膜包围部分胞质，形成自噬体（autophagosome），再与溶酶体融合并降解内容物。ULK1 复合物、III 类 PI3K 复合物 I、ATG9 膜运输以及 ATG12、LC3／ATG8 两套泛素样偶联系统依次参与起始、膜成核与延伸。受体蛋白还能把泛素化货物、受损线粒体、聚集蛋白或入侵微生物选择性连接到 ATG8 家族蛋白。微自噬（microautophagy）由溶酶体或液泡膜直接摄取底物，哺乳动物伴侣介导自噬（chaperone-mediated autophagy）则让带特定基序的可溶蛋白经 LAMP2A 转位；三者具有不同的膜拓扑和底物选择。具体膜物流见[内膜系统](endomembrane.md#autophagy-pathways)。[^autophagy-homeostasis]

自噬通常通过回收底物、控制细胞器质量和缓冲饥饿帮助细胞存活，也能参与分化、免疫和组织重塑。自噬依赖性细胞死亡（autophagy-dependent cell death）要求自噬机器对死亡不可缺少；死亡细胞中的大量自噬体还可能来自应激增强、融合受阻或降解失败。LC3-II 增多同样无法区分自噬体生成增加与周转受阻。严谨实验需比较溶酶体抑制前后的 LC3 周转，结合 p62／SQSTM1、双荧光 LC3 报告器、形态和遗传扰动测定自噬通量（autophagic flux）。[^autophagy-guidelines]

## 植物与真菌的死亡程序 { #non-animal-cell-death }

植物发育中的木质部形成、根冠细胞脱落、叶片衰老和超敏反应都可发生受调控死亡。植物细胞具有细胞壁、中央液泡和植物特有的蛋白酶系统，死亡形态常分为以液泡扩张和内容物降解为主的液泡型细胞死亡（vacuolar cell death），以及较早失去质膜完整性的坏死型细胞死亡（necrotic cell death）。部分细胞可见染色质凝集或 DNA 断裂；植物缺少动物式 caspase，程序性死亡应使用与其分子装置相符的术语。[^plant-cell-death]

酵母等真菌在发育、种群竞争和胁迫下也可发生受调控死亡。活性氧、线粒体变化、PS 外翻和 DNA 断裂描述的是表型，分子通路还需遗传依赖关系等证据。真菌死亡研究应报告物种、诱因、膜完整性、克隆形成能力与遗传依赖关系，并采用适合真菌的操作性定义。[^yeast-death]

## 细胞衰老是持续停滞与组织信号的组合状态 { #cellular-senescence }

细胞衰老是由端粒耗竭、持续 DNA 损伤、癌基因激活、线粒体与氧化应激、染色质扰动或治疗等因素诱导的一组异质状态。p53–p21 与 p16–RB 轴常帮助建立较持久的周期停滞，lamin B1 下降、溶酶体增加、代谢和染色质改变也可随情境出现。复制性衰老源于有限传代背景，应激诱导的早衰（stress-induced premature senescence，SIPS）则可在端粒尚未达到临界长度时发生。衰老停滞通常比静息稳定，但某些细胞在强选择或特定基因改变下能够逃逸，因此实验定义需要结合多种状态特征。[^sennet-markers]

许多衰老细胞释放细胞因子、趋化因子、生长因子和基质重塑酶，合称衰老相关分泌表型（senescence-associated secretory phenotype，SASP）。短暂衰老可以限制受损细胞扩增、参与伤口修复和胚胎模式形成，随后由免疫系统清除；衰老细胞长期积累及慢性 SASP 则可能改变干细胞生态位、促进炎症、纤维化或肿瘤演化。具体效应和分泌组成取决于诱因、细胞类型、组织和时间。细胞衰老是机体衰老的一项机制，机体衰老还涉及干细胞耗竭、细胞间通信、免疫、神经内分泌和器官储备，相关生理尺度见[生长、发育与衰老](../physiology/growth_development.md#aging-resilience)。[^aging-hallmarks]

衰老标志需要组合使用。衰老相关 $\beta$-半乳糖苷酶（senescence-associated $\beta$-galactosidase，SA-$\beta$-gal）活性反映扩大的溶酶体区室，也可在其他状态升高；p16、p21、DNA 损伤焦点、脂褐素（lipofuscin）、细胞增大和 SASP 均有情境限制。细胞衰老网络（Cellular Senescence Network，SenNet）建议按组织选择多层指标，至少结合增殖停滞、衰老相关改变以及对其他状态的排除证据，并报告空间位置和细胞身份。[^sennet-markers] 未经验证的“衰老干细胞回输”或单一标记筛选无法提供普适抗衰老疗效证据。

## 命运转换的实验证据 { #fate-evidence }

状态名称来自对动态过程的归纳，而多数实验只截取某一时刻。可靠判断需要把身份、功能、时间和机制放在同一证据链上；单细胞转录组能分辨异质表达状态，谱系祖先、长期自我更新或死亡因果则需要追踪与扰动实验。

| 问题 | 较强的证据组合 | 常见不足 |
| --- | --- | --- |
| 细胞是否持续增殖或静息 | EdU 脉冲追踪、活细胞周期报告器、克隆扩增与再进入实验 | 单次 Ki-67、DNA 含量或细胞计数不能区分停滞原因 |
| 命运是否已稳定改变 | 原位谱系追踪、长期单细胞后代记录、功能与染色质／转录状态联合测量 | 标记共表达可能是过渡态、应激或双细胞混合 |
| 是否具有干细胞性质 | 长期原位后代贡献，适当时加入连续移植、类器官或克隆重建 | 球体形成和单个表面标记不能单独证明体内自我更新 |
| 死亡属于哪种机制 | 存活或克隆形成丧失、时间序列形态、膜完整性、核心执行分子与遗传／药理救援 | TUNEL、Annexin V、caspase 或 LDH 任一单项都不具完全特异性 |
| 自噬是否增强且参与结局 | lysosome 阻断前后通量、LC3/p62 动态、双荧光报告器与 ATG 遗传扰动 | 静态自噬体数或 LC3-II 增多不能判定通量方向 |
| 细胞是否衰老 | 长期停滞、p16/p21 等通路、SA-$\beta$-gal／lipofuscin／DNA 损伤与组织空间信息组合 | 单一标志会与静息、分化、巨噬细胞或一般应激重叠 |

## 参考资料与延伸阅读 { #references }

[^cell-number-control]: 细胞外信号分别调节动物细胞分裂、生长与存活，以及细胞数由分裂和死亡共同决定的教材框架见 Alberts 等的[细胞增殖、细胞生长和凋亡的胞外控制](https://www.ncbi.nlm.nih.gov/books/NBK26877/)。
[^osm-cell-death]: 组织细胞数平衡、凋亡形态、caspase 级联和吞噬清除的组织实质性改编自 osm.bio《[第十八章 细胞死亡](https://osm.bio/index.php?title=第十八章_细胞死亡&oldid=11578)》固定版本，贡献者为长河、Sofia，原文按 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans) 许可；相关内容经现代死亡命名、机制综述和检测指南交叉核验。
[^cellular-memory]: 分化状态的跨分裂维持、DNA 甲基化、组蛋白修饰和转录网络所形成的细胞记忆见 NCBI Bookshelf 的[Cellular Memory](https://www.ncbi.nlm.nih.gov/books/NBK585716/)。
[^nuclear-transfer]: 成年哺乳动物体细胞核可支持克隆动物发育的经典证据见 Wilmut 等的[Dolly 研究](https://pubmed.ncbi.nlm.nih.gov/9039911/)。
[^ipsc-reprogramming]: 定义因子将小鼠成纤维细胞重编程为多能状态的经典证据见 Takahashi 与 Yamanaka 的[研究](https://pubmed.ncbi.nlm.nih.gov/16904174/)。
[^stem-cell-renewal]: 干细胞自我更新、组织更新与操作性鉴定的框架见 NCBI Bookshelf 的[Stem Cells: Tissue Renewal](https://www.ncbi.nlm.nih.gov/books/NBK1566/)。
[^stem-cell-niche]: 生态位接触、细胞极性与对称／不对称分裂的框架见 StemBook 的[Mechanisms regulating stem cell polarity and the specification of asymmetric divisions](https://www.ncbi.nlm.nih.gov/books/NBK27028/)；组织尺度由随机命运达到平均自我更新平衡的模型见[Stem Cells: Tissue Renewal](https://www.ncbi.nlm.nih.gov/books/NBK1566/)。
[^cancer-hallmarks]: 癌细胞能力、表型可塑性、非突变性重编程和肿瘤微环境的更新框架见 Hanahan 的[Hallmarks of Cancer: New Dimensions](https://pubmed.ncbi.nlm.nih.gov/35022204/)。
[^cancer-stem-plasticity]: 肿瘤干性样状态的层级异质性与适应性可塑性实例见 Prager 等的[脑癌干细胞综述](https://www.nature.com/articles/s41568-022-00486-x)。
[^nccd-2018]: accidental、regulated 与 programmed cell death 的层级，及按分子机制命名死亡方式的建议见 Nomenclature Committee on Cell Death 的[2018 年建议](https://pubmed.ncbi.nlm.nih.gov/29362479/)。
[^bcl2-apoptosis]: BCL-2 家族、BH3-only 蛋白、BAX／BAK、MOMP 与线粒体凋亡阈值见 Singh、Letai 与 Sarosiek 的[综述](https://pubmed.ncbi.nlm.nih.gov/30655609/)。
[^caspase8-death]: 死亡受体复合物、caspase-8 对凋亡与坏死性凋亡分流的调节见 Tummers 与 Green 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5417704/)。
[^efferocytosis]: 凋亡细胞识别、吞噬和吞噬细胞代谢响应见 Doran、Yurdagul 与 Tabas 的[efferocytosis 综述](https://pubmed.ncbi.nlm.nih.gov/32251387/)。
[^phosphatidylserine-boundary]: PS 外翻在凋亡以外死亡方式中的出现及其判读边界见 Shlomovitz 等的[综述](https://pubmed.ncbi.nlm.nih.gov/31665027/)。
[^death-pathways]: 凋亡、坏死性凋亡、焦亡和铁死亡的执行模块与交叉调节见 Bertheloot 等的[生化通路综述](https://pubmed.ncbi.nlm.nih.gov/38181758/)。
[^autophagy-homeostasis]: macroautophagy 的 ATG 机器、选择性货物与细胞稳态功能见 Dikic 与 Elazar 的[综述](https://pubmed.ncbi.nlm.nih.gov/30572663/)。
[^autophagy-guidelines]: 自噬通量、LC3／p62 判读和 autophagy-dependent cell death 的实验标准见 Klionsky 等的[自噬检测指南第四版](https://pmc.ncbi.nlm.nih.gov/articles/PMC7996087/)。
[^plant-cell-death]: 植物 vacuolar 与 necrotic cell death 的形态分类及避免直接套用动物凋亡术语的建议见 van Doorn 等的[植物细胞死亡分类](https://pmc.ncbi.nlm.nih.gov/articles/PMC3172093/)。
[^yeast-death]: 真菌死亡中克隆形成、膜完整性与机制命名的判据见 Carmona-Gutierrez 等的[酵母细胞死亡命名指南](https://pubmed.ncbi.nlm.nih.gov/29354647/)。
[^sennet-markers]: 衰老细胞异质性、无单一普适标志及按组织采用多参数组合的建议见 SenNet Consortium 的[检测建议](https://pubmed.ncbi.nlm.nih.gov/38831121/)。
[^aging-hallmarks]: 细胞衰老同其他机体衰老机制的关系见 López-Otín 等的[Hallmarks of Aging 扩展框架](https://europepmc.org/article/MED/36599349)。
