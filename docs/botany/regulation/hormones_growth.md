# 植物激素与信号网络

植物的信息处理分散在全身。分生组织、幼叶、根、种子、维管组织以及受到伤害的细胞都能合成信号分子；同一分子可以在产生处附近起作用，也可以经胞间连丝、质外体、木质部或韧皮部到达远处。靶细胞的响应取决于受体和下游调控蛋白，也取决于信号的浓度、持续时间、亚细胞位置以及同时到达的其他信息。

生长素、赤霉素、细胞分裂素、脱落酸和乙烯构成传统的“五大激素”框架，油菜素甾醇、茉莉酸、水杨酸和独脚金内酯同样具有明确的内源合成、感知和生理功能；CLE、RALF、植物磺肽等分泌肽又构成庞大的细胞间信号系统。多胺、活性氧、一氧化氮（nitric oxide，NO）、糖和小 RNA 等也能调节生长，其类别依据生物合成、受体和信号机制分别界定。[^hormone-framework]

## 激素的合成、运输、感知与失活 {#hormone-network-principles}

激素含量是动态通量的结果。局部生物合成可以建立浓度峰；氧化、还原、羟化、糖基化或氨基酸缀合可使分子失活、储存或转成另一种活性形式；膜转运体和维管流又改变组织间分布。结合物可分别作为能再水解的储存库、不可逆失活产物或运输形式。某器官的激素含量综合反映当地合成、输入、输出和代谢，需另用组织定位或扰动实验确定主要合成与作用地点。

几类激素采用了相似的信号逻辑。生长素、茉莉酸、赤霉素和独脚金内酯都能借助 SKP1–Cullin–F-box（SCF）型 E3 泛素连接酶清除负调节蛋白；阻遏解除后，原先被压制的转录因子或其他效应蛋白开始工作。细胞分裂素使用由组氨酸激酶、磷酸转移蛋白和响应调节因子组成的多步磷酸接力；脱落酸（abscisic acid，ABA）通过受体抑制 2C 型蛋白磷酸酶（protein phosphatase 2C，PP2C），释放蔗糖非发酵相关蛋白激酶 2（SnRK2）；油菜素甾醇从质膜受体激酶进入激酶—磷酸酶级联。未结合乙烯的受体维持抑制通路，配体结合后解除这种抑制。通用的受体、分子开关、反馈和受控蛋白水解原理见[细胞信号转导](../../cell/cell_signaling.md#signaling-grammar)及[泛素—蛋白酶体系统](../../cell/endomembrane.md#erad-proteasome)。[^hormone-signaling-evolution]

同一种激素因组织而产生不同甚至相反的效应。适量生长素可促进茎段伸长，却常抑制主根伸长并促进侧根发生；乙烯使暗生真双子叶幼苗的下胚轴缩短加粗，却能帮助深水稻等植物在淹水时快速伸长。“促进型”和“抑制型”描述特定实验条件下的净结果，而非激素的固定属性。

## 生长素的方向性发育信息 {#auxin}

### 胚芽鞘实验与局部浓度差 {#auxin-discovery-gradients}

达尔文父子的向光实验表明，禾本科胚芽鞘尖端感受单侧光，而弯曲发生在更下方的伸长区。Boysen-Jensen 用可透过溶质的明胶片和不透过的云母片区分可移动化学影响与机械连接；Paal 将切下的尖端偏置于胚芽鞘一侧，即使在黑暗中也能造成弯曲。Went 再用琼脂收集尖端输出物并建立燕麦胚芽鞘弯曲测定。这组实验逐步支持“尖端产生可扩散调节物，横向不对称导致两侧伸长不同”，后续化学鉴定和分子遗传实验才确定吲哚-3-乙酸及完整向光机制。蓝光受体、PIN 重定位与生长素响应怎样共同形成向光性，见[光形态建成与运动](light_clock_movement.md)。[^auxin-history]

吲哚-3-乙酸（indole-3-acetic acid，IAA）是最常见的天然生长素，吲哚-3-丁酸（indole-3-butyric acid，IBA）、苯乙酸（phenylacetic acid，PAA）和 4-氯-IAA 等在特定物种或组织中也有内源作用。1-萘乙酸（1-naphthaleneacetic acid，NAA）、2,4-二氯苯氧乙酸（2,4-dichlorophenoxyacetic acid，2,4-D）等是具有生长素活性的人造化合物。它们与不同 TIR1/AFB 受体、代谢酶和转运体的亲和力各异，在相同剂量下会产生不同强度和持续时间的效应。

### 生长素的合成、缀合与极性运输 {#auxin-homeostasis-transport}

高等植物中研究最充分的 IAA 合成主路以色氨酸为起点：TAA1/TAR 氨基转移酶先形成吲哚-3-丙酮酸（indole-3-pyruvic acid，IPyA），YUCCA 黄素单加氧酶再生成 IAA。吲哚-3-乙醛肟、吲哚乙酰胺和吲哚乙腈等路线在不同类群、微生物或特殊条件下贡献不同；色氨酸非依赖合成仍缺少一套可代表所有维管植物的完整酶链。植物可由 GH3 酶把 IAA 与氨基酸缀合，由糖基转移酶形成糖缀合物，并以双加氧酶等途径氧化失活。IAA–天冬氨酸常走向降解，IAA–葡萄糖和 IAA–肌醇等结合物的去路随物种和组织变化，分别承担解毒、贮藏或运输等作用。[^auxin-biosynthesis]

IAA 在质外体偏酸环境中一部分以质子化 IAA（IAAH）形式扩散过膜，阴离子 IAA$^-$ 还可经 AUX1/LAX 家族输入；细胞另一侧不对称分布的 PIN 和部分 ATP 结合盒 B 亚家族（ATP-binding cassette subfamily B，ABCB）转运体负责输出。相邻细胞重复这一过程，便产生不依赖整株重力方向的细胞到细胞极性运输。茎中主轴运输多从顶端向基部，根的不同组织则形成向根尖与回流的循环。PIN 的定位可受重力、光、机械和激素信号重排，从而把外界方向转译成组织内浓度差。韧皮部也可长距离携带 IAA；局部合成、极性运输和维管运输共同决定游离态与结合态生长素的分布。[^auxin-transport]

### TIR1／AFB—Aux／IAA—ARF 转录通路 {#auxin-signaling}

在经典核内通路中，Aux/IAA 阻遏蛋白与生长素响应因子（auxin response factor，ARF）结合并募集共阻遏复合物。IAA 像分子胶一样增强 Aux/IAA 与 SCF$^{\mathrm{TIR1/AFB}}$ 中 F-box 受体的结合，Aux/IAA 随后被泛素化并由 26S 蛋白酶体清除，ARF 才能按细胞中已有的组合激活或抑制靶基因。不同 TIR1/AFB、Aux/IAA 与 ARF 的表达和亲和力，使同样的 IAA 浓度在根、茎、花和果实中产生不同输出。质膜相关激酶（transmembrane kinase，TMK）通路和胞质／核外 TIR1/AFB 反应还参与快速离子、细胞骨架和生长调节，与核内转录通路共同构成生长素响应。[^auxin-signaling]

生长素可激活质膜 H$^+$-ATP 酶，使细胞壁酸化并促进扩展蛋白等壁松弛过程；水分进入和细胞壁材料补充随后支持伸长。酸生长是快速伸长的重要环节，膜运输、微管定向、纤维素合成和转录反馈共同决定实际生长。

### 器官发生、维管分化与顶端优势 {#auxin-development}

生长素峰参与胚轴建立、叶原基和侧根起始，局部外施 IBA 或 NAA 可促进插穗不定根形成；较高生长素浓度或特定组织状态也会抑制伸长、诱导乙烯或造成异常愈伤。维管束发生常沿生长素通量和 PIN 极性逐步建立，木质部、韧皮部与形成层的分化还受细胞分裂素、油菜素甾醇、赤霉素和糖状态共同调节，组织命运由这些动态信号及细胞位置共同指定。

顶芽合成并向茎基部运输的生长素很少直接进入腋芽；它通过调节茎中的生长素运输能力、降低局部细胞分裂素、促进独脚金内酯通路，并与芽获得糖的时间共同限制腋芽输出自身生长素。去顶后糖和激素变化的先后顺序依物种与环境而异，顶端优势因而来自生长素运输、细胞分裂素、独脚金内酯和糖供应共同构成的网络。[^shoot-branching]

果实发育、单性结实、器官脱落和衰老也由多激素协作。授粉受精后种子与果皮中的生长素、赤霉素（gibberellin，GA）和细胞分裂素共同推动子房生长；外源生长素或 GA 可在部分作物诱导单性结实。叶或果近轴端持续输出生长素时，离区对乙烯较不敏感；生长素下降后，乙烯更容易启动细胞壁重塑和脱落。ABA 多为间接参与者，作用取决于器官和发育阶段。

## 赤霉素与 DELLA 调控的生长转换 {#gibberellin}

水稻“恶苗病”研究把赤霉菌培养物中的徒长因子引向赤霉素的发现。GA 是四环二萜家族，已知成员很多，具有较强内源活性的主要是 GA$_1$、GA$_3$、GA$_4$ 和 GA$_7$ 等；各成员的活性取决于受体亲和力、组织代谢和物种，碳原子数本身不足以判定活性强弱。

GA 合成从质体 MEP 途径提供的牻牛儿基牻牛儿基二磷酸（geranylgeranyl diphosphate，GGPP）开始，经 *ent*-柯巴基二磷酸与 *ent*-贝壳杉烯形成 GA$_{12}$，反应跨越质体、内质网和胞质。GA20 氧化酶（GA20ox）与 GA3 氧化酶（GA3ox）生成活性 GA，GA2 氧化酶（GA2ox）介导的 2β-羟化等反应使其失活；糖基化可形成多种结合物。幼嫩组织、发育种子和果实常有旺盛合成，GA 及前体还可经木质部、韧皮部或专门转运体移动；局部合成和多条运输路径共同决定发育输出。[^ga-signaling]

可溶性受体 GID1 结合 GA 后捕获 DELLA 抑制蛋白，使其被拟南芥 SCF$^{\mathrm{SLY1}}$ 或水稻 SCF$^{\mathrm{GID2}}$ 识别并降解。DELLA 平时通过结合多类转录调节因子限制细胞扩张、萌发、抽薹和生殖发育；清除 DELLA 后，这些生长程序解除限制。DELLA 同时连接光、茉莉酸（jasmonic acid，JA）、乙烯、ABA 和逆境信息，所以降低 DELLA 可增加生长，也可能改变抗逆与资源配置。[^ga-della]

GA 促进许多植物的节间伸长、叶片扩展和花果生长。在禾谷类种子萌发中，胚产生的 GA 促进糊粉层表达并分泌 α-淀粉酶等水解酶，为胚轴提供可利用底物；无胚乳种子则需根据其储藏组织和动员机制另行分析。GA 与低温、光周期和年龄途径共同调节某些植物开花，也可影响瓜类性别表达、果实大小与单性结实。具体休眠萌发和开花接口分别见[种子休眠与萌发](germination_dormancy.md)及[开花、成熟与衰老](reproduction_stress.md)。

## 细胞分裂素的磷酸接力与营养协调 {#cytokinin}

Skoog、Miller 等在组织培养中寻找促进细胞分裂的物质时，从经高压处理的脱氧核糖核酸（deoxyribonucleic acid，DNA）降解物得到激动素。激动素具有细胞分裂素活性，随后从玉米未成熟种子分离的玉米素则确立了天然细胞分裂素。主要天然成员包括 *trans*-玉米素、*cis*-玉米素、二氢玉米素和异戊烯基腺嘌呤及其核苷、核苷酸和结合物。

腺苷磷酸异戊烯基转移酶（isopentenyltransferase，IPT）把 DMAPP 的异戊烯基转给 ATP、二磷酸腺苷（adenosine diphosphate，ADP）或一磷酸腺苷（adenosine monophosphate，AMP），CYP735A 可把异戊烯基腺嘌呤（isopentenyladenine，iP）型前体羟化为 *trans*-玉米素型前体，LONELY GUY（LOG）酶再直接释放活性游离碱。转运 RNA-IPT（transfer RNA-IPT，tRNA-IPT）则产生另一部分多为 *cis*-玉米素型的细胞分裂素。细胞分裂素氧化酶／脱氢酶（cytokinin oxidase/dehydrogenase，CKX）可不可逆裂解侧链，O-糖基化常形成可再活化的储存形式，某些 N-糖基化物较稳定失活；具体去路随结合位点、物种和组织而变。

根和茎都能合成细胞分裂素。根源 *trans*-玉米素核苷常随木质部向地上部运输，地上部产生的 iP 型细胞分裂素可由韧皮部向根反馈氮和碳状态；PUP、ENT、ABCG 等转运蛋白还控制细胞和区室间分布。外源细胞分裂素的移动取决于化学形式、施用部位和转运代谢，实际施用方式需据目标组织确定。[^cytokinin]

AHK2、AHK3 和 AHK4/CRE1/WOL 等组氨酸激酶受体主要定位于内质网膜，也可在其他膜区室出现。配体结合后，磷酸依次从受体 His 转到自身 receiver 域 Asp，再交给可进出细胞核的 AHP，最终磷酸化 B 型 ARR 转录因子。B 型 ARR 激活早期响应基因，包括作为负反馈的 A 型 ARR。这个 His–Asp–His–Asp 接力与细菌双组分系统同源，但在植物中已经嵌入复杂的转录和激素网络。[^cytokinin-signaling]

细胞分裂素促进茎顶分生组织细胞增殖与芽发生，常限制根分生组织大小和侧根起始；它还能延缓部分叶片衰老、重分配氮并改变叶绿体发育。组织培养中，高细胞分裂素／生长素条件常利于芽，较高生长素／细胞分裂素条件常利于根，中间条件可维持愈伤组织。相应阈值依物种、外植体来源、糖、培养基和内源激素而变，需由具体培养体系确定。

## 脱落酸调控的气孔与种子程序 {#abscisic-acid}

ABA 最初分别以“休眠素”和“脱落素”从休眠叶芽及棉铃脱落研究中分离，后来证明是同一化合物。天然活性主要来自 *S*-(+)-ABA；“脱落酸”这一名称保留了发现史，其直接作用主要在水分和种子程序，器官脱落通常还由生长素和乙烯等信号协调。ABA 广泛存在于陆生植物，也参与苔藓植物的脱水和发育反应。

维管植物 ABA 的主路线从质体类胡萝卜素开始。9-*cis*-环氧类胡萝卜素经 9-*cis*-环氧类胡萝卜素双加氧酶（9-*cis*-epoxycarotenoid dioxygenase，NCED）裂解产生黄氧酸，后者输出到胞质，依次转成 ABA 醛和 ABA。CYP707A 介导 8′-羟化并进入红花菜豆酸等降解路线，ABA-葡萄糖酯可作为可动员储存库。ABCG、NPF 等转运体与弱酸的 pH 分配共同控制细胞、种子和维管组织间移动。干旱时根源与叶源 ABA 都可能贡献信号，两者贡献随物种、土壤和叶片水分状态改变。

PYR/PYL/RCAR 受体结合 ABA 后抑制 A 类 PP2C；被释放的 SnRK2.2/2.3/OST1 等激酶磷酸化 AREB/ABF/ABI5 转录因子、SLAC1 等阴离子通道和其他效应蛋白。保卫细胞阴离子外流使膜去极化并促进 K$^+$ 外流，渗透物质减少后细胞失水、气孔关闭；Ca$^{2+}$、活性氧（reactive oxygen species，ROS）、NO、磷脂和水力反馈在不同时间尺度参与放大与整合。Ca$^{2+}$ 内流是这一多环节网络的一部分。[^aba-signaling]

种子发育后期的 ABA 促进储藏物、胚胎发育晚期丰富蛋白（late embryogenesis abundant protein，LEA 蛋白）和脱水耐受程序，抑制过早萌发，并与 GA 共同调节休眠—萌发转换。营养器官中，ABA 可降低蒸腾、改变根系生长和渗透保护，但持续高 ABA 也限制碳同化与生长。它是干旱响应的核心信号之一，整株抗性还取决于水力、组织耐受和恢复能力。水力前馈和气孔机制可与[植物水分关系](../physiology/water_minerals.md#stomatal-regulation)合读。

## 乙烯扩散与 ACC 运输 {#ethylene}

乙烯是两个碳的气体。在空气充足的组织中，它容易从合成处扩散，其前体 1-氨基环丙烷-1-羧酸（1-aminocyclopropane-1-carboxylic acid，ACC）以及结合态 ACC 则能在木质部、韧皮部和细胞间移动。甲硫氨酸先经 *S*-腺苷甲硫氨酸（*S*-adenosylmethionine，SAM）进入 Yang 循环，ACC 合酶（ACC synthase，ACS）生成 ACC，需氧的 ACC 氧化酶（ACC oxidase，ACO）再形成乙烯。ACS 和 ACO 的表达、周转和辅因子共同控制通量，主要反应位于胞质等区室，限速环节随组织状态改变。[^ethylene]

ETR1、ERS1、ETR2、EIN4 和 ERS2 等受体位于内质网膜，需要铜辅因子结合乙烯。无乙烯时，受体激活 Raf 样激酶 CTR1，CTR1 磷酸化并抑制 EIN2，EIN3/EIL 转录因子也被 EBF1/2 介导降解。乙烯结合使受体—CTR1 抑制下降，EIN2 羧基端调节 EBF1/2 翻译并进入细胞核促进 EIN3/EIL 稳定与转录。乙烯受体因而在未结合配体时主动抑制通路，配体结合使下游解除抑制。[^ethylene-signaling]

暗生真双子叶幼苗的经典三重反应包括下胚轴伸长受抑、径向加粗和顶端弯钩增强。乙烯还促进根毛与部分不定根发生，调节涝害逃逸、机械阻力、伤害和病原响应。呼吸跃变型果实成熟时，系统 2 乙烯合成形成正反馈；非跃变型果实仍能感受乙烯，但不出现同样的自催化峰。乙烯也提高离区对脱落信号的响应，花衰老、性别表达和开花效应则具有类群和阶段依赖性。

## 油菜素甾醇的生长—免疫调控 {#brassinosteroid}

油菜素甾醇（brassinosteroid，BR）是由植物甾醇形成的多羟基甾体，油菜素内酯和油菜素甾酮是重要活性成员。早期和晚期 C-6 氧化路线可以并行，具体中间物随物种而变。BR 在花粉、幼叶、根、种子和果实等多种组织合成，主要在局部或邻近细胞间起作用，其分布和移动距离随组织而变。

质膜富亮氨酸重复（leucine-rich repeat，LRR）受体激酶 BRI1 结合 BR 后与 BAK1/SERK3 等共受体组装并相互磷酸化，经 BSK/CDG1 和 BSU1 抑制 GSK3 样激酶 BIN2。BIN2 活跃时会磷酸化 BES1/BZR1，使其被 14-3-3 保留在胞质、降低 DNA 结合或促进降解；BR 输入后，PP2A 促使 BES1/BZR1 去磷酸化并进入细胞核。这个通路调节细胞壁、伸长、维管分化、气孔发生和生殖发育，并与 PIF、ARF、DELLA 及免疫受体网络交叉。BR 与生长素可共同调节细胞扩张，外施后的抗逆和产量效应则受剂量、组织和环境限制。[^br-signaling]

## 茉莉酸与水杨酸的防御—生长配置 {#jasmonate-salicylate}

茉莉酸类是脂肪酸来源的氧脂素。α-亚麻酸在叶绿体中经脂氧合酶等反应形成 12-氧代植物二烯酸（12-oxo-phytodienoic acid，OPDA），后续还原与 β-氧化在过氧化物酶体完成 JA 骨架，胞质 JAR1 生成高活性的茉莉酰异亮氨酸（jasmonoyl-isoleucine，JA-Ile）；甲基茉莉酸则是可挥发衍生物。JA-Ile 促进 SCF$^{\mathrm{COI1}}$—JAZ 共受体形成，使 JAZ 阻遏蛋白降解并释放 MYC 等转录因子。伤害、食草和部分坏死营养型病原可增强 JA 通路，花药与花粉发育、根生长、衰老和储藏器官形成也会利用它。防御增强会重新配置碳氮和生长，光合作用和成熟效应随物种与处理改变。[^jasmonate]

水杨酸（salicylic acid，SA）来自莽草酸分支。拟南芥受病原诱导的主要路线由异分支酸合酶 1（isochorismate synthase 1，ICS1）、质体输出蛋白 EDS5、PBS3 与 EPS1 等完成；其他植物可更多依赖苯丙氨酸解氨酶（phenylalanine ammonia-lyase，PAL）路线，前体贡献具有谱系差异。SA 与 NPR1、NPR3/NPR4 及多种代谢酶和氧化还原调节蛋白互作，重塑防御基因表达并参与系统获得性抗性。SA—JA 关系经常表现为拮抗，也会随浓度、时间、组织和病原生活型出现协同；活体营养型与坏死营养型病原的划分提供诊断起点。天南星科产热花序中的 SA 信号和浮萍开花反应则是类群特异的功能。[^salicylate]

## 独脚金内酯连接枝条、根际与营养状态 {#strigolactone}

独脚金内酯（strigolactone，SL）是类胡萝卜素来源的脱辅基类胡萝卜素（apocarotenoid）。D27、CCD7/MAX3 和 CCD8/MAX4 等先把类胡萝卜素转为卡拉内酯（carlactone），随后由 MAX1 类 P450 和物种特异酶形成结构多样的典型或非典型 SL。磷饥饿常增强根系合成与分泌，使丛枝菌根真菌菌丝分枝并提高共生建立机会；同一类根际信号也会被独脚金、列当等寄生植物种子窃听并直接触发萌发。[^strigolactone]

植物体内的 SL 由 α/β 水解酶受体 D14 感知，D14 与 F-box 蛋白 MAX2 形成复合物后促使 D53/SMXL6、SMXL7、SMXL8 等阻遏蛋白降解。通路限制腋芽长出，并影响根系架构、叶衰老和营养响应。SL 可经 PDR1 等转运体输出，地上部真正起激素作用的分子形态和长距离运输方式仍有未决问题；根合成与木质部运输只是其中一种可能贡献。烟雾来源的卡瑞金（karrikin）由近缘受体 KAI2 感知，共用 MAX2 却清除不同 SMAX1 样阻遏蛋白，构成与 SL 相邻而分化的通路。

## 分泌肽与多胺的生长调节 {#peptides-polyamines}

植物肽激素通常由分泌前体经蛋白水解和羟化、硫酸化或阿拉伯糖基化等修饰成熟，再由质膜受体样激酶感知。CLV3/CLE 肽与 CLV1、BAM 等受体调节茎尖和维管干细胞；植物磺肽（phytosulfokine，PSK）促进细胞增殖与组织恢复；快速碱化因子（rapid alkalinization factor，RALF）—FERONIA 组合把细胞壁状态、离子与生长相连；花粉来源的 SCR/SP11 与柱头 SRK 决定芸薹属孢子体型自交不亲和；番茄系统素参与局部与系统性伤害防御。这些配体—受体家族分别调节干细胞、细胞壁、生殖识别和防御等过程。[^peptide-hormones]

腐胺、亚精胺和精胺等多胺由精氨酸、鸟氨酸以及甲硫氨酸提供碳氮骨架和氨丙基。它们可与核酸、膜和酸性大分子结合，参与离子平衡、翻译、发育、衰老和逆境响应；其氧化还会产生 H$_2$O$_2$ 等信号。多胺与乙烯共享甲硫氨酸衍生的 SAM 代谢分支，但二者的通量关系由底物、酶和组织状态共同决定；多胺的广泛效应也采用不同于经典激素的分类和受体判据。

## 激素互作的条件依赖输出 {#hormone-crosstalk}

激素互作既发生在合成和运输层，也发生在共享的阻遏蛋白、转录因子和效应器上。GA 促进 DELLA 清除后，PIF、BZR、ARF 和 JAZ 等伙伴获得新的可用状态；生长素能诱导部分 ACS、GA 合成和 SL 通路，细胞分裂素则改变 PIN 分布和根—茎分生组织平衡。ABA—GA 在种子中常形成休眠与萌发的相反倾向，JA—乙烯可共同建立 ERF 分支防御，SA 又能在多个转录层抑制或改写 JA 输出。这些关系随剂量和时间改变，需要按组织和阶段构建动态网络。

发育状态同样改变网络。胚和种子成熟时，生长素、细胞分裂素、GA 与 ABA 的峰值及来源随物种、组织和阶段移动；气孔、维管分化、木质素组成和向性也都读取多个信号及器官结构。可靠的判断应说明物种、组织、发育阶段、激素形态、施用浓度和测量输出，再据这些条件解释促进、抑制或阶段转换。

## 植物生长调节剂的栽培应用 {#plant-growth-regulators}

植物生长调节剂是施用于植物、种子或采后产品以改变生长发育的化合物，既包括天然激素和类似物，也包括释放剂、受体拮抗剂、运输抑制剂及合成抑制剂。“促进剂—抑制剂—延缓剂”描述具体目标性状：乙烯利可促进成熟同时抑制茎伸长，生长素类在低剂量诱导生根、在较高剂量可成为除草剂，抑制 GA 合成的药剂主要缩短节间而不一定降低全部生长。

IBA、NAA 常用于插穗生根；2,4-D、4-CPA 等可在特定作物和剂量下用于坐果、疏花疏果或作为选择性除草剂。2,4,5-T 曾是合成生长素除草剂，其生产中的四氯二苯并二噁英（tetrachlorodibenzo-*p*-dioxin，TCDD）污染和监管史使它不应作为现行普通“生长促进剂”推荐。NPA、TIBA 等主要干扰生长素运输，PCIB 影响生长素响应，分别作用于不同环节。

GA$_3$ 可用于葡萄果粒和果梗伸长、打破部分种子或芽休眠；氯化氯胆碱（chlormequat chloride，CCC）、缩节胺、多效唑、烯效唑和嘧啶醇等在不同步骤抑制 GA 合成，可降低株高或倒伏风险，却也可能改变根、花果和残留。6-苄氨基嘌呤（6-benzylaminopurine，6-BA）、激动素、噻苯隆和氯吡脲（forchlorfenuron，CPPU）具有细胞分裂素活性，应用于组织培养、果实生长或衰老调节时必须区分化学类别和登记作物。乙烯利在组织内释放乙烯，可用于成熟、脱落或凤梨开花；1-甲基环丙烯（1-methylcyclopropene，1-MCP）占据乙烯受体，常用于延缓采后成熟。银离子能抑制乙烯感知，但环境和食品用途受限，不宜作为普通采后添加剂。

肉桂酸、香豆素、咖啡酸等酚类代谢物在特定浓度下能够抑制萌发或伸长，也可能参与化感和逆境响应；这类生物测定效应涉及不同靶点和代谢背景。“整形素”“增甘膦”等历史名称还可能指向旧制剂、旧译名或不同有效成分，只有落实化学名称、登记标签和使用年代后才能可靠分类，也不作为现行药剂推荐。

马来酰肼（maleic hydrazide，MH）可抑制芽和细胞分裂，曾因杂质肼及早期毒理数据引发监管审查；后续评估分别处理 MH 本身、盐型和肼污染。任何调节剂的效果和风险都取决于有效成分、制剂、剂量、施用时期、作物与环境。不同司法辖区把许多植物生长调节剂纳入农药登记与最大残留限量管理；天然 ABA、JA 或 SA 的外施也需经过相应评价。栽培建议必须遵守当地登记标签、采收间隔、劳动防护和残留要求，不能从激素生理作用直接推导配方。[^pgr-safety]

## 参考资料与延伸阅读 {#references}

[^hormone-framework]: OpenStax, [*Biology 2e*: Plant Sensory Systems and Responses](https://openstax.org/books/biology-2e/pages/30-6-plant-sensory-systems-and-responses)，提供传统五类激素的教材入口；Blázquez, Nelson & Weijers (2020), [Evolution of Plant Hormone Response Pathways](https://doi.org/10.1146/annurev-arplant-050718-100309), *Annual Review of Plant Biology* 71: 327–353，比较生长素、GA、JA 与 SL 等信号系统的共同机制和谱系边界。
[^hormone-signaling-evolution]: osm.bio [《植物生长物质整理》](https://osm.bio/植物生长物质)汇集激素代谢、作用、互作和调节剂条目；GA／ABA 前体路线、受体位置、独脚金内酯类别及药剂安全以所列教材、综述和监管资料为准。
[^auxin-history]: OpenStax 的[植物感觉与响应章节](https://openstax.org/books/biology-2e/pages/30-6-plant-sensory-systems-and-responses)与 Enders & Strader (2015), [Auxin activity: past, present, and future](https://pmc.ncbi.nlm.nih.gov/articles/PMC4854432/)，共同提供胚芽鞘实验、IAA 鉴定及现代生长素研究的历史边界。
[^auxin-biosynthesis]: Zhao, C. et al. (2019), [The Roles of Auxin Biosynthesis YUCCA Gene Family in Plants](https://pmc.ncbi.nlm.nih.gov/articles/PMC6941117/)，综述 TAA/TAR–YUCCA 主路、局部合成和组织特异性；IAA 缀合、氧化与多路线边界亦参见 Enders & Strader 的上述综述。
[^auxin-transport]: Adamowski, M. & Friml, J. (2015), [PIN-dependent auxin transport: action, regulation, and evolution](https://pubmed.ncbi.nlm.nih.gov/25604445/), *The Plant Cell* 27: 20–32。
[^auxin-signaling]: Wang, R. & Estelle, M. (2014), [Diversity and specificity: auxin perception and signaling through the TIR1/AFB pathway](https://pmc.ncbi.nlm.nih.gov/articles/PMC4294414/), *Current Opinion in Plant Biology* 21: 51–58。
[^shoot-branching]: Balla, J. et al. (2023), [Lessons from a century of apical dominance research](https://pmc.ncbi.nlm.nih.gov/articles/PMC10400159/)，比较生长素运输、细胞分裂素、独脚金内酯、ABA 和糖对腋芽释放的证据。
[^ga-signaling]: Hedden, P. & Thomas, S. G. (2012), [Gibberellin biosynthesis and its regulation](https://pubmed.ncbi.nlm.nih.gov/22533671/), *Biochemical Journal* 444: 11–25；GA 的区室和活性形式另参见 [Gibberellin signaling: biosynthesis, catabolism, and response pathways](https://pmc.ncbi.nlm.nih.gov/articles/PMC151248/)。
[^ga-della]: Hauvermale, A. L., Ariizumi, T. & Steber, C. M. (2012), [Gibberellin signaling: a theme and variations on DELLA repression](https://doi.org/10.1104/pp.112.200956), *Plant Physiology* 160: 83–92。
[^cytokinin]: Kieber, J. J. & Schaller, G. E. (2018), [Cytokinin signaling in plant development](https://doi.org/10.1242/dev.149344), *Development* 145: dev149344；Skalický, V. et al. (2021), [Differential Subcellular Distribution of Cytokinins](https://pmc.ncbi.nlm.nih.gov/articles/PMC8037549/)，综述细胞分裂素代谢、运输与区室分布。
[^cytokinin-signaling]: Schaller, Bishopp & Kieber (2015), [The yin-yang of hormones: cytokinin and auxin interactions in plant development](https://doi.org/10.1105/tpc.114.133595), *The Plant Cell* 27: 44–63。
[^aba-signaling]: Umezawa, T. et al. (2010), [Molecular Basis of the Core Regulatory Network in ABA Responses: Sensing, Signaling and Transport](https://doi.org/10.1093/pcp/pcq156), *Plant and Cell Physiology* 51: 1821–1839；ABA 的 PYR/PYL—PP2C—SnRK2 核心及离子通道输出亦见[调控机制综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5036775/)。
[^ethylene]: Vanderstraeten, L. et al. (2019), [The Ethylene Precursor ACC Affects Early Vegetative Development Independently of Ethylene Signaling](https://doi.org/10.3389/fpls.2019.01591), *Frontiers in Plant Science* 10: 1591；有关 ACS、ACO、ACC 运输和乙烯合成调节参见 Binder 的后列综述。
[^ethylene-signaling]: Binder, B. M. (2020), [Ethylene signaling in plants](https://pubmed.ncbi.nlm.nih.gov/32332098/), *Journal of Biological Chemistry* 295: 7710–7725。
[^br-signaling]: Wang, W., Bai, M.-Y. & Wang, Z.-Y. (2014), [The brassinosteroid signaling network—a paradigm of signal integration](https://doi.org/10.1016/j.pbi.2014.07.012), *Current Opinion in Plant Biology* 21: 147–153。
[^jasmonate]: Wasternack, C. & Hause, B. (2013), [Jasmonates: biosynthesis, perception, signal transduction and action](https://pubmed.ncbi.nlm.nih.gov/23558912/), *Annals of Botany* 111: 1021–1058；Li, M. et al. (2021), [Metabolism, signaling, and transport of jasmonates](https://pubmed.ncbi.nlm.nih.gov/34746762/)，补充 JA-Ile 区室和转运网络。
[^salicylate]: Ding, P. & Ding, Y. (2020), [Stories of salicylic acid: a plant defense hormone](https://doi.org/10.1016/j.tplants.2020.01.004), *Trends in Plant Science* 25: 549–565；Ullah, C. et al. (2023), [The diversity of salicylic acid biosynthesis and defense signaling in plants](https://pubmed.ncbi.nlm.nih.gov/36842224/)，说明 ICS 与 PAL 路线的物种差异。
[^strigolactone]: Waters, M. T. et al. (2017), [Strigolactone Signaling and Evolution](https://doi.org/10.1146/annurev-arplant-042916-040925), *Annual Review of Plant Biology* 68: 291–322；Kim, H. I. et al. (2024), [Unveiling the complexity of strigolactones](https://pubmed.ncbi.nlm.nih.gov/37877933/)，讨论 D14/KAI2、结构多样性及内源活性分子的未决问题。
[^peptide-hormones]: He, Y. et al. (2024), [Peptide hormones in plants](https://pmc.ncbi.nlm.nih.gov/articles/PMC11756074/)，综述 CLE、RALF、PSK 等肽的成熟、受体样激酶和发育／免疫输出。
[^pgr-safety]: FAO, [Pesticide Registration](https://www.fao.org/pest-and-pesticide-management/pesticide-risk-reduction/code-conduct/registration/en/)明确将植物生长调节剂、脱叶剂和干燥剂纳入相应登记与效果评价；美国 EPA 的[马来酰肼再登记资料](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=200005YL.TXT)区分 MH、盐型与肼杂质的毒理结论；2,4,5-T 的历史监管和 TCDD 污染见 EPA [Regulatory Status of 2,4,5-T](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100PDIL.TXT)。
