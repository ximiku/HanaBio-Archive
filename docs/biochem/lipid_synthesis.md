# 脂质生物合成

脂质合成把小分子碳源装配成疏水链、膜骨架和局部信号。脂肪酸合成具有独立于 $\beta$-氧化的反应装置：乙酰辅酶A（acetyl coenzyme A，乙酰-CoA）的碳先从线粒体转到胞质，三磷酸腺苷（ATP）驱动乙酰-CoA羧化成丙二酰-CoA，还原型烟酰胺腺嘌呤二核苷酸磷酸（NADPH）提供还原力，产物还要在内质网、过氧化物酶体和高尔基体（Golgi apparatus）之间继续加工。不同组织的需求也各有侧重：增殖细胞扩建膜，肝脏组装脂蛋白，肺泡上皮形成表面活性物质，内分泌和免疫细胞则及时生成固醇或氧脂素信号。

理解脂质合成需要同时追踪碳、还原力、活化基团和细胞器。脂肪酸、甘油脂、鞘脂与固醇的结构语言见[脂质](lipid.md#lipid-classification)，脂肪酸进入线粒体并被逐轮切短的方向见[脂肪酸分解代谢](lipid_catabolism.md#beta-oxidation-cycle)；主要合成路线则从胞质乙酰-CoA出发，延伸到不同骨架的形成和反馈控制。

## 脂肪酸从头合成 { #de-novo-fatty-acid-synthesis }

### 胞质乙酰-CoA 与 NADPH 供应 { #cytosolic-acetyl-coa-nadph }

线粒体基质中的乙酰-CoA不能自由穿过线粒体内膜。碳水化合物供给充足时，乙酰-CoA先与草酰乙酸缩合成柠檬酸；柠檬酸经载体输出到胞质后，ATP柠檬酸裂解酶（ATP citrate lyase，ACLY）消耗ATP和还原型辅酶A（CoA-SH），重新生成乙酰-CoA与草酰乙酸。这段柠檬酸输出属于[三羧酸循环抽补输出](tca_cycle.md#cataplerosis)，持续输出还须由丙酮酸羧化等反应补回四碳中间物。[^fatty-acid-synthesis-sources]

$$
\begin{aligned}
\mathrm{Cit}+\mathrm{CoA}+\mathrm{ATP}\\
&\rightarrow \mathrm{AcCoA}+\mathrm{OAA}\\
&\quad +\mathrm{ADP}+\mathrm{P}_{\mathrm{i}}
\end{aligned}
$$

胞质草酰乙酸可由苹果酸脱氢酶还原成苹果酸。苹果酸有两类后续去向：经转运系统返回线粒体，或者由胞质NADP$^+$依赖的苹果酸酶1（malic enzyme 1，ME1）氧化脱羧成丙酮酸并生成NADPH。后一条支路把碳返回线粒体，也是胞质NADPH的来源之一。磷酸戊糖途径、胞质异柠檬酸脱氢酶1（IDH1）及一碳代谢相关酶也能贡献NADPH，实际比例随组织、营养和增殖状态改变；这些还原力来源与传递胞质还原型烟酰胺腺嘌呤二核苷酸（NADH）电子的经典穿梭承担不同功能。[^nadph-sources]

### 乙酰-CoA 羧化酶与丙二酰-CoA 生成 { #acetyl-coa-carboxylase }

乙酰-CoA羧化酶（ACC）以共价结合在赖氨酸侧链上的生物素为摆动臂。生物素羧化酶结构域先用ATP把HCO$_3^-$来源的羧基装到生物素上，羧基转移酶结构域再把它交给乙酰-CoA。生物素与赖氨酸形成的生物胞素结构以及羧基载体化学见[维生素与辅酶](vitamin_and_coenzyme.md#biotin-folate-one-carbon)。

$$
\begin{aligned}
\mathrm{AcCoA}+\mathrm{HCO_3^-}\\
&\quad +\mathrm{ATP}\\
&\rightarrow \mathrm{MalCoA}\\
&\quad +\mathrm{ADP}+\mathrm{P}_{\mathrm{i}}
\end{aligned}
$$

哺乳动物乙酰-CoA羧化酶1（ACC1，由 *ACACA* 编码）主要提供脂肪酸合成所需的胞质丙二酰-CoA；乙酰-CoA羧化酶2（ACC2，由 *ACACB* 编码）带有线粒体膜定位特征，形成的局部丙二酰-CoA池更直接影响肉碱棕榈酰转移酶1（CPT1）。二者都把生物素羧化酶、羧基载体和羧基转移酶功能整合在大型多结构域蛋白中；细菌则可把相应催化功能分置于不同亚基。[^acc-regulation]

ACC同时感受短时能量状态和较慢的营养信号。柠檬酸可促进ACC1形成较活跃的聚合状态，长链脂酰-CoA提供产物反馈；AMP活化蛋白激酶（AMPK）磷酸化通常抑制ACC，从而减少合成底物并解除丙二酰-CoA对CPT1的抑制。进食和胰岛素信号还可经固醇调节元件结合蛋白1c（SREBP-1c）、碳水化合物反应元件结合蛋白（ChREBP）等转录网络提高ACLY、ACC与脂肪酸合酶（FASN）的表达。ACC是重要控制节点，实际通量还同时受底物、NADPH、CPT1和膜脂需求约束。

### 脂肪酸合酶与棕榈酸生成 { #fatty-acid-synthase }

哺乳动物FASN属于I型脂肪酸合酶系统，两条大型多功能多肽组成同源二聚体。每条多肽含有丙二酰／乙酰转移酶（MAT）、$\beta$-酮酰合酶（KS）、$\beta$-酮酰还原酶（KR）、脱水酶（DH）、烯酰还原酶（ER）、酰基载体蛋白（ACP）和硫酯酶（TE）等功能域。ACP以共价连接的4′-磷酸泛酰巯基乙胺臂携带增长中的酰基，柔性的末端巯基可在各活性位点之间移动。[^fatty-acid-synthesis-sources]

#### 引发与脱羧缩合 { #fas-loading-condensation }

MAT把乙酰基和丙二酰基分别从CoA转入合酶。乙酰基最终占据KS活性位点半胱氨酸，丙二酰基装在ACP巯基上；KS催化两者发生脱羧Claisen缩合，形成比原酰基长两个碳的$\beta$-酮酰-ACP。ACC刚加入丙二酰-CoA的羧基在此释放为CO$_2$；暂时羧化使缩合成为热力学上有利的碳—碳成键步骤，碳酸氢盐的碳不进入最终脂肪酸。

#### 还原、脱水与再还原 { #fas-reduction-cycle }

KR先用一分子NADPH把$\beta$-酮基还原为D构型的$\beta$-羟基；DH脱去水形成反式-$\Delta^2$双键；ER再用一分子NADPH把双键还原。所得饱和酰基从ACP转回KS，新的丙二酰基装载到ACP，下一轮便可开始。七轮循环后形成棕榈酰-ACP，TE水解释放以16:0为主的棕榈酸。

把七次ACC反应与FASN反应合并，常用生化计量可写为：

$$
\begin{aligned}
8\,\mathrm{AcCoA}+7\,\mathrm{ATP}\\
&+14\,\text{NADPH}+14\,\mathrm{H^+}\\
&\rightarrow \mathrm{C16{:}0}+8\,\mathrm{CoA}\\
&\quad +7\,\text{ADP}+7\,\text{P}_{\mathrm{i}}\\
&\quad +14\,\text{NADP}^++6\,\mathrm{H_2O}
\end{aligned}
$$

式中净CO$_2$为零，因为ACC固定的七份碳酸氢盐在缩合中又被释放，而羧化步骤仍消耗七份ATP。NADPH的来源和质子、水的写法依采用的离子化约定而变，各组织调用磷酸戊糖途径或苹果酸酶的比例也不相同。

### 脂肪酸合成与 β-氧化的比较 { #synthesis-vs-oxidation }

在人类细胞中，经典胞质脂肪酸合成与线粒体$\beta$-氧化都以二碳为基本变化单位，但载体、电子受体、反应驱动力和中间体立体化学都不同。

| 比较维度 | 胞质从头脂肪酸合成 | 线粒体$\beta$-氧化 |
| --- | --- | --- |
| 二碳变化 | 丙二酰-CoA脱羧后净加入两个碳 | 硫解每轮释放一份乙酰-CoA |
| 酰基载体 | FASN内ACP的4′-磷酸泛酰巯基乙胺 | CoA硫酯与多种独立酶／复合体 |
| 氧化还原 | 每轮消耗两分子NADPH | 电子经酶结合FAD—ETF链和NAD$^+$输出 |
| 羟酰中间体 | FASN生成D-$\beta$-羟酰-ACP | 常规水合生成L-$\beta$-羟酰-CoA |
| 驱动力 | ATP羧化加脱羧缩合 | 脱氢、水合和硫解与下游氧化相连 |
| 区室意义 | 形成膜脂和储存脂质所需酰基 | 把酰基碳和电子送入产能网络 |

这张比较限定于哺乳动物经典通路。细菌和植物质体多使用由独立酶组成的II型脂肪酸合酶；人线粒体也有服务于硫辛酸等功能的II型脂肪酸合成系统。因此，“合成在胞质、分解在线粒体”概括的是哺乳动物的主要碳流，其他物种和细胞器还具有相应的专门系统。

### 脂肪酸延长与去饱和 { #elongation-and-desaturation }

FASN释放棕榈酸后，脂肪酸还要先活化成脂酰-CoA。内质网超长链脂肪酸延长酶（ELOVL）系统继续以丙二酰-CoA供二碳单元，经缩合、还原、脱水和再还原延长碳链；不同ELOVL成员偏好不同链长与不饱和底物。线粒体酰链延长则使用不同于 $\beta$-氧化的酶系、电子供体和调节方式。[^fatty-acid-elongation]

内质网硬脂酰-CoA去饱和酶SCD以细胞色素$b_5$和细胞色素$b_5$还原酶传递来自NADH的电子，可在16:0或18:0等底物引入$\Delta9$顺式双键。FADS1／FADS2则能在已有多不饱和链上完成$\Delta5$、$\Delta6$及部分其他位置的去饱和；哺乳动物真正缺少的是把油酸继续变成亚油酸或$\alpha$-亚麻酸所需的$\Delta12$与$\Delta15$能力，所以这两个脂肪酸家族必须由膳食提供。植物去饱和酶既有可溶型也有膜结合型，各自保持底物与双键位置专一性。[^fatty-acid-elongation]

奇数链脂肪酸可由丙酰-CoA等奇数碳引发物进入合酶或延长系统形成；某些既有脂肪酸经$\alpha$-氧化缩短一个碳也会产生奇数链产物。α-氧化通过降解与重塑产生部分奇数链脂肪酸，与从头合成及延长循环分属不同过程。

## 甘油脂与甘油磷脂合成 { #glycerolipid-phospholipid-synthesis }

### 三酰甘油合成 { #triacylglycerol-synthesis }

三酰甘油合成需要甘油-3-磷酸和三份脂酰-CoA。甘油-3-磷酸可由糖酵解中间物二羟丙酮磷酸经甘油-3-磷酸脱氢酶还原；肝、肾等组织还可用甘油激酶直接磷酸化甘油。许多脂肪细胞的甘油激酶活性相对低，禁食时仍能通过甘油异生把丙酮酸、乳酸或部分三羧酸循环来源碳经磷酸烯醇式丙酮酸羧激酶（PEPCK）和糖异生的下游反应送到二羟丙酮磷酸，再形成甘油-3-磷酸。甘油异生的产物为甘油-3-磷酸，其完整账本还包括上游碳流和能量转换。[^glyceroneogenesis]

甘油-3-磷酸酰基转移酶（GPAT）先把第一份脂酰基接到甘油-3-磷酸的$sn$-1位，形成溶血磷脂酸；1-酰基甘油-3-磷酸酰基转移酶（AGPAT）再酰化$sn$-2位，形成磷脂酸。磷脂酸磷酸酶lipin水解磷酸单酯得到二酰甘油，二酰甘油酰基转移酶1或2（DGAT1／DGAT2）最后把第三份脂酰基接到$sn$-3位，形成三酰甘油。多种同工酶分布于线粒体外膜和内质网，底物偏好及与脂滴发生的耦联不同；“转酰—转酰—去磷酸—转酰”描述化学主线，参与反应的酶则不止一套。[^tag-synthesis]

新生三酰甘油可在内质网膜双层中聚集并出芽形成脂滴，也可在肝和肠的载脂蛋白B（ApoB）脂蛋白装配中进入疏水核心。脂解释放的脂肪酸有一部分会在脂肪组织或肝重新酯化，构成三酰甘油—脂肪酸循环；循环比例随进食、禁食、胰岛素敏感性、示踪方法和物种改变，早期资料中的“75%回流到肝”是特定实验条件下的估计。储存脂质与脂滴的结构见[脂质](lipid.md#storage-protective-lipids)，脂解方向见[脂肪酸分解代谢](lipid_catabolism.md#adipose-lipolysis)。

### 甘油磷脂的两类活化途径 { #glycerophospholipid-biosynthesis }

磷脂酸（phosphatidic acid，PA）也是膜甘油磷脂的共同前体。真核细胞以两类活化策略形成分支网络：PA去磷酸生成二酰甘油（diacylglycerol，DAG），或与三磷酸胞苷（CTP）反应形成胞苷二磷酸-二酰甘油（CDP-DAG），再由不同酶系接入各类头基。表中PC、PE、PI、PG和PS依次表示磷脂酰胆碱、磷脂酰乙醇胺、磷脂酰肌醇、磷脂酰甘油和磷脂酰丝氨酸。[^glycerophospholipid]

| 活化方式 | 代表反应与产物 | 主要区室或边界 |
| --- | --- | --- |
| 活化水溶性头基 | CDP-胆碱或CDP-乙醇胺与DAG缩合，生成PC或PE | Kennedy通路主要在ER；PCYT1A主要控制磷脂酰胆碱支路 |
| 活化脂质骨架 | PA＋CTP形成CDP-DAG，继而生成PI、PG及心磷脂 | PI主要在ER形成；PG和心磷脂的后续步骤与线粒体膜密切相关 |
| 碱基交换与脱羧／甲基化 | 哺乳动物PSS1／PSS2以PC或PE换入丝氨酸生成PS；PS在内线粒体膜脱羧成PE，肝脏等还可由PE甲基化成PC | 多条路线互相补充，贡献随组织与细胞器改变 |

合成后的甘油磷脂仍会经历Lands循环：磷脂酶去除一条酰链，溶血磷脂酰基转移酶再按底物可得性和酶选择性补入新链。这种重塑解释了膜脂$sn$-1位常偏饱和、$sn$-2位常富多不饱和链的统计规律；头基种类与脂肪酸组成是两个分别受酶选择性和底物供应控制的维度。二棕榈酰磷脂酰胆碱（DPPC）是肺表面活性物质的重要组分，它的产生与分泌还依赖肺泡Ⅱ型细胞的专门重塑和细胞器过程，相关生理作用见[呼吸生理总论与肺通气](../physiology/respiratory/index.md)。

### 醚甘油磷脂的跨细胞器合成 { #ether-lipid-biosynthesis }

醚脂把甘油$sn$-1位的酯键换成烷基醚或烯基醚。合成从过氧化物酶体开始：GNPAT先酰化二羟丙酮磷酸，AGPS再用FAR1／FAR2提供的长链脂肪醇替换酰基，建立第一根醚键。还原后的烷基甘油磷酸中间物转往内质网，继续接受$sn$-2酰基、头基和去饱和加工，形成质醚磷脂等成熟产物。[^ether-lipids]

醚键由过氧化物酶体中的烷基-DHAP合成步骤建立，后续加工在内质网继续完成。血小板活化因子（PAF）是带$sn$-1烷基醚、$sn$-2乙酰基和磷酸胆碱头基的特殊信号脂质；它与大量作为膜结构成分的质醚磷脂共享部分合成基础。

## 神经酰胺与鞘脂分支 { #sphingolipid-biosynthesis }

鞘脂不使用甘油作骨架。内质网胞质侧的丝氨酸棕榈酰转移酶（SPTLC复合体）把棕榈酰-CoA与丝氨酸缩合为3-酮二氢鞘氨醇，同时释放CO$_2$和CoA-SH；KDSR用NADPH将其还原为二氢鞘氨醇，CERS家族接入第二条脂酰链形成二氢神经酰胺，DEGS1再引入双键生成神经酰胺。不同CERS成员的酰链偏好使神经酰胺本身也是一个分子种类集合。[^sphingolipid]

神经酰胺随后向多个方向分流。它可被磷酸化为神经酰胺-1-磷酸，可在Golgi接受糖基形成葡糖基神经酰胺、乳糖基神经酰胺及更复杂的糖鞘脂，也可由鞘磷脂合酶从磷脂酰胆碱转移磷酸胆碱头基而形成鞘磷脂，同时释放二酰甘油。最后这一步的供体是磷脂酰胆碱，不是CDP-胆碱；CDP-胆碱属于合成磷脂酰胆碱的Kennedy通路。

!!! warning "合成缺陷与溶酶体降解缺陷"
    酸性鞘磷脂酶缺陷导致的A／B型Niemann–Pick病属于鞘磷脂降解障碍；溶酶体酸性脂肪酶缺乏症（LAL-D）的婴儿型和较晚发型则属于胆固醇酯与三酰甘油水解障碍。这些溶酶体缺陷会继发改变SREBP及合成通量，疾病表型、诊断和治疗见[糖与能量代谢紊乱](../physiology/pathophysiology/metabolic_disorders.md)。[^lysosomal-direction]

## 氧脂素合成与局部信号 { #eicosanoid-biosynthesis }

受体激活、损伤或炎症信号可促使磷脂酶从膜磷脂释放花生四烯酸、二十碳五烯酸（EPA）等多不饱和脂肪酸。经典花生四烯酸代谢有三类主要氧化入口：环氧合酶1／2（COX-1／COX-2）先形成前列腺素G$_2$（PGG$_2$）和前列腺素H$_2$（PGH$_2$），再由组织特异性合酶生成前列腺素、前列环素与血栓烷；脂氧合酶（LOX）产生过氧化脂肪酸，并分流到白三烯、脂氧素或多种羟基二十碳四烯酸（HETE）；细胞色素P450（CYP）则形成环氧化或羟化产物。COX与LOX支路共享膜脂来源的多不饱和脂肪酸，并通过多级分支和细胞间接力形成环状及非环状产物。[^eicosanoid]

阿司匹林通过共价乙酰化前列腺素H合酶的活性位点丝氨酸改变酶活性；在血小板COX-1中，这种不可逆修饰持久阻断血栓烷前体生成，直到新血小板补充。乙酰化COX-2还可能改道生成15R-HETE类产物。阿司匹林乙酰化 COX-1与 COX-2后产生不同的通路后果；LOX网络则取决于酶型、底物和产物去向。[^aspirin-cox]

## 胆固醇合成与稳态 { #cholesterol-biosynthesis }

胆固醇的27碳骨架来自胞质乙酰-CoA，经异戊二烯路线而非FASN形成。两分子乙酰-CoA先缩合为乙酰乙酰-CoA，胞质3-羟基-3-甲基戊二酰-CoA合酶1（HMGCS1）再加入第三份乙酰-CoA形成HMG-CoA；内质网膜上的HMG-CoA还原酶（HMGCR）以两分子NADPH把它还原为甲羟戊酸。胞质／内质网侧的HMGCS1—HMGCR碳流与线粒体HMGCS2参与的[酮体生成](lipid_catabolism.md#ketogenesis)相互隔离。[^cholesterol]

### 甲羟戊酸至鲨烯 { #mevalonate-to-squalene }

甲羟戊酸连续消耗三份ATP：前两步依次形成5-磷酸甲羟戊酸和5-焦磷酸甲羟戊酸，第三步先磷酸化后脱羧，形成异戊烯焦磷酸（isopentenyl pyrophosphate，IPP）。IPP异构化为二甲烯丙基焦磷酸（DMAPP）；一份DMAPP依次与IPP缩合成香叶基焦磷酸和法呢基焦磷酸（FPP），两份FPP再经NADPH参与的还原缩合生成30碳鲨烯。IPP与FPP同时也是蛋白质异戊烯化、泛醌侧链和多种异戊二烯分子的前体，HMGCR由此同时影响多类异戊二烯产物的供给。

### 鲨烯至胆固醇的末端路线 { #squalene-to-cholesterol }

鲨烯单加氧酶在内质网膜上用O$_2$和NADPH形成2,3-氧化鲨烯，羊毛固醇合酶随后完成多环化，生成30碳羊毛固醇。从羊毛固醇到27碳胆固醇还要经历脱甲基、双键迁移和多次氧化还原。人类可经以去氢胆固醇为末端前体的Bloch路线，也可经以7-脱氢胆固醇等为中间物的Kandutsch–Russell路线；不同组织会偏用不同组合。鲨烯后反应主要与内质网膜相关，部分更早的甲羟戊酸途径酶也具有明确膜定位。[^cholesterol]

经典碳账本把完整胆固醇合成追溯到18份乙酰-CoA：36个乙酰碳先组成六份甲羟戊酸，每份在转为IPP时释放一分子CO$_2$，余下30个碳组成鲨烯和羊毛固醇；羊毛固醇后加工再移除三个甲基碳，留下27碳胆固醇。途中还大量消耗ATP、NADPH和O$_2$。18份乙酰-CoA是完整碳源追踪值；胆固醇实际由肝、肠和多种有核细胞共同合成，组织贡献随膳食、需求与测量尺度改变。[^cholesterol-carbon]

### 胆固醇稳态 { #cholesterol-homeostasis }

细胞内可利用固醇降低时，SREBP裂解激活蛋白（SCAP）携带膜结合的固醇调节元件结合蛋白（SREBP）离开内质网，在Golgi经两步蛋白水解释放转录因子；SREBP2尤其促进HMGCR、其他胆固醇合成酶和低密度脂蛋白（LDL）受体表达。内质网胆固醇或某些氧固醇升高时，SCAP与胰岛素诱导基因蛋白（INSIG）形成复合物，把SREBP留在内质网，HMGCR也可加速泛素化降解。SREBP-1c更偏向脂肪酸合成基因，但两套程序有交叠；AMPK磷酸化、酶降解、底物供给与脂蛋白摄取又提供更快或更慢的控制层。[^cholesterol-regulation]

他汀的活性羟酸形式占据HMGCR的HMG-CoA结合位点，直接降低甲羟戊酸与胆固醇的从头合成。肝细胞内质网可利用胆固醇随之下降，触发SREBP2补偿性上调HMGCR及LDL受体；新合成的HMGCR仍受到药物抑制，而增多的LDL受体加强循环LDL清除。洛伐他汀和辛伐他汀等以可水解为活性羟酸的内酯形式给药；具体用药还须结合适应证、相互作用和个体风险。[^statin-mechanism]

游离胆固醇可由内质网中的甾醇O-酰基转移酶1／2（SOAT1／SOAT2）与脂酰-CoA形成胆固醇酯，用于脂滴储存或ApoB脂蛋白装配；血浆卵磷脂-胆固醇酰基转移酶（LCAT）则把磷脂酰胆碱的酰基转给高密度脂蛋白（HDL）表面的胆固醇。胆固醇还通向胆汁酸、类固醇激素和[维生素D](vitamin_and_coenzyme.md#vitamin-d-activation)，这些出口与合成、摄取和排泄一起决定稳态。昆虫等节肢动物通常不能由乙酸从头建立固醇骨架，必须从食物取得胆固醇或植物甾醇并加工成蜕皮激素前体；“昆虫的维生素”是描述这种固醇营养依赖的历史类比。[^insect-sterol]

## 脂质合成的分布式调节 { #lipid-synthesis-regulation }

进食后的胰岛素、葡萄糖代谢与柠檬酸输出通常有利于从头脂肪生成，禁食和能量压力则通过脂解、AMPK及底物重分配压低多数合成通量。膜更新、表面活性物质、髓鞘和局部信号脂质具有各自的合成需求与调节尺度。ACC、FASN、PCYT1A、SPT、HMGCR等节点各自控制一段路线，最终通量还要服从乙酰-CoA、甘油-3-磷酸、脂酰-CoA、NADPH、细胞器接触、产物转运与降解的共同约束。

丙二酰-CoA抑制CPT1使长链脂肪酸合成与线粒体氧化在许多条件下相互错开，但过氧化物酶体底物、中链脂肪酸和不同ACC／CPT1同工型会改变这一关系。类似地，细胞可在从头合成、膳食或脂蛋白摄取、脂滴储存和膜脂重塑之间换用来源。结构脂质与储能脂质的通量优先级，以及葡萄糖向脂肪的转化比例，均随组织和代谢状态变化。

## 参考资料与延伸阅读

- [Reactome：Fatty acyl-CoA biosynthesis](https://reactome.org/content/detail/R-HSA-75105)
- [Reactome：Triglyceride biosynthesis](https://reactome.org/content/detail/R-HSA-75109)
- [Reactome：Glycerophospholipid biosynthesis](https://reactome.org/content/detail/R-HSA-1483206)
- [Reactome：Sphingolipid metabolism](https://reactome.org/content/detail/R-HSA-428157)
- [Reactome：Eicosanoids](https://reactome.org/content/detail/R-HSA-211979)
- [Reactome：Cholesterol biosynthesis](https://reactome.org/content/detail/R-HSA-191273)
- [Glycerolipid Synthesis and Lipid Droplet Formation in the Endoplasmic Reticulum](https://pmc.ncbi.nlm.nih.gov/articles/PMC10153804/)
- [Intracellular Cholesterol Synthesis and Transport](https://pmc.ncbi.nlm.nih.gov/articles/PMC8978673/)

[^fatty-acid-synthesis-sources]: 通路与关键酶核验见Reactome [Fatty acyl-CoA biosynthesis](https://reactome.org/content/detail/R-HSA-75105)，综述[Biochemistry, molecular biology, and pharmacology of fatty acid synthase](https://pmc.ncbi.nlm.nih.gov/articles/PMC2919769/)，以及UniProt审核条目[ACLY（P53396）](https://www.uniprot.org/uniprotkb/P53396/entry)、[ACC1（Q13085）](https://www.uniprot.org/uniprotkb/Q13085/entry)和[FASN（P49327）](https://www.uniprot.org/uniprotkb/P49327/entry)。
[^nadph-sources]: 胞质NADPH来源与用途可对照[磷酸戊糖途径](ppp.md#nadph-functions)；柠檬酸输出与苹果酸酶路线的总体背景见[脂肪酸合酶综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC2919769/)。异柠檬酸／NADPH碳流与经典胞质NADH穿梭的边界另见[电子传递与氧化磷酸化](oxp.md#cytosolic-nadh-shuttles)。
[^acc-regulation]: 结构、同工型和调节核验见[Acetyl-CoA Carboxylases and Diseases](https://pmc.ncbi.nlm.nih.gov/articles/PMC8963101/)，UniProt [ACC1（Q13085）](https://www.uniprot.org/uniprotkb/Q13085/entry)与[ACC2（O00763）](https://www.uniprot.org/uniprotkb/O00763/entry)。
[^fatty-acid-elongation]: 人类脂酰链延长与去饱和反应见Reactome [Fatty acyl-CoA biosynthesis](https://reactome.org/content/detail/R-HSA-75105)；FADS1／FADS2底物范围与必需脂肪酸边界见[Desaturase and elongase limiting endogenous long chain polyunsaturated fatty acid biosynthesis](https://pmc.ncbi.nlm.nih.gov/articles/PMC4768719/)。结构与命名衔接见[脂质](lipid.md#essential-fatty-acids-oxylipins)。
[^glyceroneogenesis]: 甘油异生和脂肪酸再酯化的历史与代谢边界见[Stranger in a Strange Land: Roles of Glycogen Turnover in Adipose Tissue Metabolism](https://pmc.ncbi.nlm.nih.gov/articles/PMC2826604/)；PEPCK在完整糖异生中的位置见[糖异生](gng.md#precursor-entry)。
[^tag-synthesis]: 反应顺序见Reactome [Triglyceride biosynthesis](https://reactome.org/content/detail/R-HSA-75109)与综述[Glycerolipid Synthesis and Lipid Droplet Formation in the Endoplasmic Reticulum](https://pmc.ncbi.nlm.nih.gov/articles/PMC10153804/)；代表性审核条目见UniProt [GPAT1（Q9HCL2）](https://www.uniprot.org/uniprotkb/Q9HCL2/entry)、[lipin-1（Q14693）](https://www.uniprot.org/uniprotkb/Q14693/entry)和[DGAT1（O75907）](https://www.uniprot.org/uniprotkb/O75907/entry)。
[^glycerophospholipid]: 分支与酰链重塑见Reactome [Glycerophospholipid biosynthesis](https://reactome.org/content/detail/R-HSA-1483206)及综述[Glycerolipid Synthesis and Lipid Droplet Formation in the Endoplasmic Reticulum](https://pmc.ncbi.nlm.nih.gov/articles/PMC10153804/)；CDP-胆碱支路代表性酶见UniProt [PCYT1A（P49585）](https://www.uniprot.org/uniprotkb/P49585/entry)。
[^ether-lipids]: 过氧化物酶体—ER接力与醚键形成见[Structural and functional roles of ether lipids](https://pmc.ncbi.nlm.nih.gov/articles/PMC5818364/)。
[^sphingolipid]: 四步从头合成及下游分支见Reactome [Sphingolipid metabolism](https://reactome.org/content/detail/R-HSA-428157)；代表性审核条目见UniProt [SPTLC1（O15269）](https://www.uniprot.org/uniprotkb/O15269/entry)、[KDSR（Q06136）](https://www.uniprot.org/uniprotkb/Q06136/entry)、[CERS2（Q96G23）](https://www.uniprot.org/uniprotkb/Q96G23/entry)、[DEGS1（O15121）](https://www.uniprot.org/uniprotkb/O15121/entry)和[SGMS1（Q86VZ5）](https://www.uniprot.org/uniprotkb/Q86VZ5/entry)。
[^lysosomal-direction]: 疾病方向核验见GeneReviews [Acid Sphingomyelinase Deficiency](https://www.ncbi.nlm.nih.gov/books/NBK1370/)与[Lysosomal Acid Lipase Deficiency](https://www.ncbi.nlm.nih.gov/books/NBK305870/)。
[^eicosanoid]: 三类花生四烯酸氧化入口见Reactome [Eicosanoids](https://reactome.org/content/detail/R-HSA-211979)及NCBI Bookshelf [Lipid Mediators in Cardiovascular Physiology and Disease](https://www.ncbi.nlm.nih.gov/books/NBK597464/)。
[^aspirin-cox]: 阿司匹林活性位点乙酰化的经典证据见Roth、Stanford与Majerus的[Acetylation of prostaglandin synthase by aspirin](https://pmc.ncbi.nlm.nih.gov/articles/PMC432922/)。
[^cholesterol]: 路线、区室与末端分支见Reactome [Cholesterol biosynthesis](https://reactome.org/content/detail/R-HSA-191273)和综述[Intracellular Cholesterol Synthesis and Transport](https://pmc.ncbi.nlm.nih.gov/articles/PMC8978673/)；关键审核条目见UniProt [HMGCS1（Q01581）](https://www.uniprot.org/uniprotkb/Q01581/entry)与[HMGCR（P04035）](https://www.uniprot.org/uniprotkb/P04035/entry)。
[^cholesterol-carbon]: 乙酰-CoA经甲羟戊酸和IPP组装为30碳鲨烯，以及鲨烯经羊毛固醇生成27碳胆固醇的碳流，见综述[Thematic review series: Living history of lipids—Squalene epoxidase](https://pmc.ncbi.nlm.nih.gov/articles/PMC3191736/)与[Post-squalene enzymes in cholesterol biosynthesis](https://pmc.ncbi.nlm.nih.gov/articles/PMC3073474/)。
[^cholesterol-regulation]: 固醇感知和SREBP转运见Reactome [Regulation of cholesterol biosynthesis by SREBP](https://reactome.org/content/detail/R-HSA-1655829)、[Discovery of the cellular and molecular basis of cholesterol control](https://pmc.ncbi.nlm.nih.gov/articles/PMC3773783/)及UniProt [SREBP2（Q12772）](https://www.uniprot.org/uniprotkb/Q12772/entry)。
[^statin-mechanism]: 他汀对HMGCR的直接抑制和低固醇触发的SREBP2补偿反应，见[Statins and the mevalonate pathway](https://pmc.ncbi.nlm.nih.gov/articles/PMC4525717/)与[SREBP2 and cholesterol homeostasis](https://pmc.ncbi.nlm.nih.gov/articles/PMC3184313/)；内酯与开环羟酸形式的药理差异见[Statin lactonization and its pharmacological relevance](https://pmc.ncbi.nlm.nih.gov/articles/PMC5483422/)。
[^insect-sterol]: 节肢动物对膳食固醇的依赖及蜕皮激素合成边界见[Gonadal Ecdysteroidogenesis in Arthropoda](https://pmc.ncbi.nlm.nih.gov/articles/PMC7205109/)。
