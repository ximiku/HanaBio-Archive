# 脂质生物合成

脂质合成把小分子碳源装配成疏水链、膜骨架和局部信号。这个方向并不是把脂肪酸 $\beta$-氧化的四步倒放：乙酰碳要先从线粒体转到胞质，ATP把乙酰-CoA羧化成丙二酰-CoA，NADPH提供还原力，产物还要在内质网、过氧化物酶体和 Golgi之间继续加工。不同组织也不只追求“储存能量”；增殖细胞要扩建膜，肝脏要组装脂蛋白，肺泡上皮要形成表面活性物质，内分泌和免疫细胞则要及时生成固醇或氧脂素信号。

因此，读懂脂质合成需要同时追踪碳、还原力、活化基团和细胞器。脂肪酸、甘油脂、鞘脂与固醇的结构语言见[脂质](lipid.md#lipid-classification)，脂肪酸进入线粒体并被逐轮切短的方向见[脂肪酸分解代谢](lipid_catabolism.md#beta-oxidation-cycle)；本页从胞质乙酰-CoA开始，依次展开这些骨架怎样形成并受到反馈控制。

## 胞质乙酰-CoA与NADPH形成合成底物池 { #cytosolic-acetyl-coa-nadph }

线粒体基质中的乙酰-CoA不能自由穿过线粒体内膜。碳水化合物供给充足时，乙酰-CoA先与草酰乙酸缩合成柠檬酸；柠檬酸经载体输出到胞质后，ATP柠檬酸裂解酶（ACLY）消耗ATP和CoA-SH，重新生成乙酰-CoA与草酰乙酸。这里的柠檬酸输出是[三羧酸循环抽补输出](tca_cycle.md#cataplerosis)的一种形式，循环若要持续，还必须由丙酮酸羧化等反应补回四碳中间物。[^fatty-acid-synthesis-sources]

$$
\begin{aligned}
\mathrm{Cit}+\mathrm{CoA}+\mathrm{ATP}\\
&\rightarrow \mathrm{AcCoA}+\mathrm{OAA}\\
&\quad +\mathrm{ADP}+\mathrm{P}_{\mathrm{i}}
\end{aligned}
$$

胞质草酰乙酸可由苹果酸脱氢酶还原成苹果酸。苹果酸有两类后续去向：经转运系统返回线粒体，或者由胞质NADP$^+$依赖的苹果酸酶ME1氧化脱羧成丙酮酸并生成NADPH。后一条支路把碳返回线粒体，也为还原性合成补充电子，但它并不是每次柠檬酸输出都必须经过的固定终点。磷酸戊糖途径、胞质IDH1及一碳代谢相关酶也能贡献NADPH，实际比例随组织、营养和增殖状态改变；这与传递胞质NADH电子的经典穿梭不是同一件事。[^nadph-sources]

## 乙酰-CoA羧化酶建立丙二酰-CoA入口 { #acetyl-coa-carboxylase }

乙酰-CoA羧化酶（ACC）以共价结合在赖氨酸侧链上的生物素为摆动臂。生物素羧化酶结构域先用ATP把HCO$_3^-$来源的羧基装到生物素上，羧基转移酶结构域再把它交给乙酰-CoA。生物素与赖氨酸形成的生物胞素结构以及羧基载体化学见[维生素与辅酶](vitamin_and_coenzyme.md#biotin-folate-one-carbon)。

$$
\begin{aligned}
\mathrm{AcCoA}+\mathrm{HCO_3^-}\\
&\quad +\mathrm{ATP}\\
&\rightarrow \mathrm{MalCoA}\\
&\quad +\mathrm{ADP}+\mathrm{P}_{\mathrm{i}}
\end{aligned}
$$

哺乳动物ACC1（ACACA）主要提供脂肪酸合成所需的胞质丙二酰-CoA；ACC2（ACACB）带有线粒体膜定位特征，形成的局部丙二酰-CoA池更直接影响CPT1。二者都把生物素羧化酶、羧基载体和羧基转移酶功能整合在大型多结构域蛋白中，不能把细菌中可分离的亚基配置原样套到哺乳动物酶。[^acc-regulation]

ACC同时感受短时能量状态和较慢的营养信号。柠檬酸可促进ACC1形成较活跃的聚合状态，长链脂酰-CoA提供产物反馈；AMPK磷酸化通常抑制ACC，从而减少合成底物并解除丙二酰-CoA对CPT1的抑制。进食和胰岛素信号还可经SREBP-1c、ChREBP等转录网络提高ACLY、ACC与FASN表达。由此可见，ACC是重要控制节点，却不是一个脱离底物、NADPH和膜需求便能独占全部通量的“总开关”。

## 脂肪酸合酶以七轮循环生成棕榈酸 { #fatty-acid-synthase }

哺乳动物脂肪酸合酶FASN属于I型系统，两条大型多功能多肽组成同源二聚体。每条多肽含有丙二酰／乙酰转移酶（MAT）、$\beta$-酮酰合酶（KS）、$\beta$-酮酰还原酶（KR）、脱水酶（DH）、烯酰还原酶（ER）、酰基载体蛋白（ACP）和硫酯酶（TE）等功能域。ACP上的4′-磷酸泛酰巯基乙胺臂来自泛酸，末端巯基在各活性位点之间携带增长中的酰基；它不是一个独立扩散的CoA分子，也不是“磷酸泛酰巯基亚胺”。[^fatty-acid-synthesis-sources]

### 引发与脱羧缩合 { #fas-loading-condensation }

MAT把乙酰基和丙二酰基分别从CoA转入合酶。乙酰基最终占据KS活性位点半胱氨酸，丙二酰基装在ACP巯基上；KS催化两者发生脱羧Claisen缩合，形成比原酰基长两个碳的$\beta$-酮酰-ACP。ACC刚加入丙二酰-CoA的羧基在此释放为CO$_2$，这次暂时羧化把缩合变成热力学上有利的碳—碳成键步骤，而不是把碳酸氢盐永久保留在脂肪酸里。

### 还原、脱水与再还原 { #fas-reduction-cycle }

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

式中不再列净CO$_2$，因为ACC固定的七份碳酸氢盐在缩合中又被释放；这不意味着羧化步骤没有消耗ATP。NADPH的来源和质子、水的写法依采用的离子化约定而变，不能由净式反推所有组织都以同一比例调用磷酸戊糖途径或苹果酸酶。

## 合成与β-氧化使用不同的化学装置 { #synthesis-vs-oxidation }

在人类细胞中，经典胞质脂肪酸合成与线粒体$\beta$-氧化都以二碳为基本变化单位，但载体、电子受体、反应驱动力和中间体立体化学都不同。

| 比较维度 | 胞质从头脂肪酸合成 | 线粒体$\beta$-氧化 |
| --- | --- | --- |
| 二碳变化 | 丙二酰-CoA脱羧后净加入两个碳 | 硫解每轮释放一份乙酰-CoA |
| 酰基载体 | FASN内ACP的4′-磷酸泛酰巯基乙胺 | CoA硫酯与多种独立酶／复合体 |
| 氧化还原 | 每轮消耗两分子NADPH | 电子经酶结合FAD—ETF链和NAD$^+$输出 |
| 羟酰中间体 | FASN生成D-$\beta$-羟酰-ACP | 常规水合生成L-$\beta$-羟酰-CoA |
| 驱动力 | ATP羧化加脱羧缩合 | 脱氢、水合和硫解与下游氧化相连 |
| 区室意义 | 形成膜脂和储存脂质所需酰基 | 把酰基碳和电子送入产能网络 |

这张比较限定于哺乳动物经典通路。细菌和植物质体多使用由独立酶组成的II型脂肪酸合酶；人线粒体也有服务于硫辛酸等功能的II型脂肪酸合成系统。因此，“合成在胞质、分解在线粒体”是主要碳流的入门框架，不是跨物种、跨细胞器的绝对定律。

## 延长与去饱和扩展脂肪酸谱 { #elongation-and-desaturation }

FASN释放棕榈酸后，脂肪酸还要先活化成脂酰-CoA。内质网ELOVL系统继续以丙二酰-CoA供二碳单元，经缩合、还原、脱水和再还原延长碳链；不同ELOVL成员偏好不同链长与不饱和底物。线粒体也能进行某些酰链延长和重塑，但不能笼统称为$\beta$-氧化的完全逆反应，因为电子供体、酶系和生理目的并不相同。[^fatty-acid-elongation]

内质网硬脂酰-CoA去饱和酶SCD以细胞色素$b_5$和细胞色素$b_5$还原酶传递来自NADH的电子，可在16:0或18:0等底物引入$\Delta9$顺式双键。FADS1／FADS2则能在已有多不饱和链上完成$\Delta5$、$\Delta6$及部分其他位置的去饱和；哺乳动物真正缺少的是把油酸继续变成亚油酸或$\alpha$-亚麻酸所需的$\Delta12$与$\Delta15$能力，所以这两个脂肪酸家族必须由膳食提供。植物质体和内质网具有更丰富的可溶性或膜结合去饱和酶，但也各有底物与位置专一性，不能概括为“任意位置都能去饱和且酶均不与膜结合”。[^fatty-acid-elongation]

奇数链脂肪酸可由丙酰-CoA等奇数碳引发物进入合酶或延长系统形成；某些既有脂肪酸经$\alpha$-氧化缩短一个碳也会产生奇数链产物。前者属于从头装配，后者属于降解与重塑，不能把$\alpha$-氧化本身列成脂肪酸合成循环的一步。

## 磷脂酸把甘油骨架分流到三酰甘油 { #triacylglycerol-synthesis }

三酰甘油合成需要甘油-3-磷酸和三份脂酰-CoA。甘油-3-磷酸可由糖酵解中间物二羟丙酮磷酸经甘油-3-磷酸脱氢酶还原；肝、肾等组织还可用甘油激酶直接磷酸化甘油。许多脂肪细胞的甘油激酶活性相对低，禁食时仍能通过甘油异生把丙酮酸、乳酸或部分三羧酸循环来源碳经PEPCK和糖异生的下游反应送到二羟丙酮磷酸，再形成甘油-3-磷酸。这个过程为再酯化提供骨架，终点不是游离甘油，也不能仅用“消耗一分子NADH”概括全程账本。[^glyceroneogenesis]

GPAT先把第一份脂酰基接到甘油-3-磷酸的$sn$-1位，形成溶血磷脂酸；AGPAT再酰化$sn$-2位，形成磷脂酸。磷脂酸磷酸酶lipin水解磷酸单酯得到二酰甘油，DGAT1或DGAT2最后把第三份脂酰基接到$sn$-3位，形成三酰甘油。多种同工酶分布于线粒体外膜和内质网，底物偏好及与脂滴发生的耦联不同；“转酰—转酰—去磷酸—转酰”是化学主线，不代表只有一套固定酶。[^tag-synthesis]

新生三酰甘油可在内质网膜双层中聚集并出芽形成脂滴，也可在肝和肠的ApoB脂蛋白装配中进入疏水核心。脂解释放的脂肪酸有一部分会在脂肪组织或肝重新酯化，构成三酰甘油—脂肪酸循环；循环比例随进食、禁食、胰岛素敏感性、示踪方法和物种改变，不宜把“75%回流到肝”当作恒定人体通则。储存脂质与脂滴的结构见[脂质](lipid.md#storage-protective-lipids)，脂解方向见[脂肪酸分解代谢](lipid_catabolism.md#adipose-lipolysis)。

## 甘油磷脂从二酰甘油与CDP-二酰甘油分支 { #glycerophospholipid-biosynthesis }

磷脂酸也是膜甘油磷脂的共同前体，但真核细胞并不是沿“磷脂酸→磷脂酰丝氨酸→磷脂酰乙醇胺→磷脂酰胆碱”这一条直线生产全部头基。磷脂酸去磷酸后形成二酰甘油，或与CTP反应形成CDP-二酰甘油，由此产生两条活化策略。[^glycerophospholipid]

| 活化方式 | 代表反应与产物 | 主要区室或边界 |
| --- | --- | --- |
| 活化水溶性头基 | CDP-胆碱或CDP-乙醇胺与DAG缩合，生成PC或PE | Kennedy通路主要在ER；PCYT1A是PC支路的重要控制酶，不是所有磷脂的共同限速酶 |
| 活化脂质骨架 | PA＋CTP形成CDP-DAG，继而生成PI、PG及心磷脂 | PI主要在ER形成；PG和心磷脂的后续步骤与线粒体膜密切相关 |
| 碱基交换与脱羧／甲基化 | 哺乳动物PSS1／PSS2以PC或PE换入丝氨酸生成PS；PS在内线粒体膜脱羧成PE，肝脏等还可由PE甲基化成PC | 多条路线互相补充，贡献随组织与细胞器改变 |

合成后的甘油磷脂仍会经历Lands循环：磷脂酶去除一条酰链，溶血磷脂酰基转移酶再按底物可得性和酶选择性补入新链。这种重塑解释了膜脂$sn$-1位常偏饱和、$sn$-2位常富多不饱和链的统计规律，也提醒我们不能由头基名称直接推出固定脂肪酸组成。二棕榈酰磷脂酰胆碱是肺表面活性物质的重要组分，但它的产生与分泌还依赖肺泡Ⅱ型细胞的专门重塑和细胞器过程，完整生理作用留给[呼吸生理总论与肺通气](../physiology/respiratory/index.md)。

## 醚甘油磷脂连接过氧化物酶体与内质网 { #ether-lipid-biosynthesis }

醚脂把甘油$sn$-1位的酯键换成烷基醚或烯基醚。合成从过氧化物酶体开始：GNPAT先酰化二羟丙酮磷酸，AGPS再用FAR1／FAR2提供的长链脂肪醇替换酰基，建立第一根醚键。还原后的烷基甘油磷酸中间物转往内质网，继续接受$sn$-2酰基、头基和去饱和加工，形成质醚磷脂等成熟产物。[^ether-lipids]

这条跨细胞器路线说明，二羟丙酮磷酸、脂酰-CoA、NADPH和脂肪醇只是原料清单，不能省略醚键真正由哪一步建立。血小板活化因子（PAF）是带$sn$-1烷基醚、$sn$-2乙酰基和磷酸胆碱头基的特殊信号脂质；它与大量作为膜结构成分的质醚磷脂共享部分合成基础，却不是所有醚脂的统一终产物。

## 神经酰胺构成鞘脂合成的分支中心 { #sphingolipid-biosynthesis }

鞘脂不使用甘油作骨架。内质网胞质侧的丝氨酸棕榈酰转移酶（SPTLC复合体）把棕榈酰-CoA与丝氨酸缩合为3-酮二氢鞘氨醇，同时释放CO$_2$和CoA-SH；KDSR用NADPH将其还原为二氢鞘氨醇，CERS家族接入第二条脂酰链形成二氢神经酰胺，DEGS1再引入双键生成神经酰胺。不同CERS成员的酰链偏好使神经酰胺本身也是一个分子种类集合。[^sphingolipid]

神经酰胺随后向多个方向分流。它可被磷酸化为神经酰胺-1-磷酸，可在Golgi接受糖基形成葡糖基神经酰胺、乳糖基神经酰胺及更复杂的糖鞘脂，也可由鞘磷脂合酶从磷脂酰胆碱转移磷酸胆碱头基而形成鞘磷脂，同时释放二酰甘油。最后这一步的供体是磷脂酰胆碱，不是CDP-胆碱；CDP-胆碱属于合成磷脂酰胆碱的Kennedy通路。

!!! warning "合成缺陷与溶酶体降解缺陷"
    酸性鞘磷脂酶缺陷导致的A／B型Niemann–Pick病属于鞘磷脂降解障碍；溶酶体酸性脂肪酶缺陷形成的婴儿型和较晚发型LAL-D，也属于胆固醇酯与三酰甘油水解障碍。它们可以反向改变SREBP及合成通量，却不是“合成酶缺失”。疾病表型、诊断和治疗留给[糖与能量代谢紊乱](../physiology/pathophysiology/metabolic_disorders.md)。[^lysosomal-direction]

## 氧脂素合成把膜中多不饱和脂肪酸转成局部信号 { #eicosanoid-biosynthesis }

受体激活、损伤或炎症信号可促使磷脂酶从膜磷脂释放花生四烯酸、EPA等多不饱和脂肪酸。经典花生四烯酸代谢有三类主要氧化入口：COX-1／COX-2先形成PGG$_2$和PGH$_2$，再由组织特异性合酶生成前列腺素、前列环素与血栓烷；脂氧合酶产生过氧化脂肪酸，并分流到白三烯、脂氧素或多种HETE；细胞色素P450则形成环氧化或羟化产物。把第一类只称“五元环产物”、第二类只称“线性产物”，会漏掉共同前体、支路和细胞间接力。[^eicosanoid]

阿司匹林通过共价乙酰化前列腺素H合酶的活性位点丝氨酸改变酶活性；在血小板COX-1中，这种不可逆修饰持久阻断血栓烷前体生成，直到新血小板补充。乙酰化COX-2还可能改道生成15R-HETE类产物，因此“COX自动失活并被阿司匹林抑制”不是完整机制。脂氧合酶同样通过自由基与氧插入完成具有立体选择性的反应，“单向”只是许多氧化步骤的热力学表现，不是足以定义整条LOX网络的特征。[^aspirin-cox]

## 甲羟戊酸途径把乙酰碳组装成胆固醇 { #cholesterol-biosynthesis }

胆固醇的27碳骨架来自胞质乙酰-CoA，但不是由FASN生成。两分子乙酰-CoA先缩合为乙酰乙酰-CoA，胞质HMG-CoA合酶HMGCS1再加入第三份乙酰-CoA形成HMG-CoA；内质网膜上的HMG-CoA还原酶HMGCR以两分子NADPH把它还原为甲羟戊酸。这里使用的是胞质／ER侧HMGCS1—HMGCR碳流，与线粒体HMGCS2参与的[酮体生成](lipid_catabolism.md#ketogenesis)相互隔离。[^cholesterol]

### 从甲羟戊酸到鲨烯 { #mevalonate-to-squalene }

甲羟戊酸经过三次ATP依赖的磷酸化和脱羧过程形成异戊烯焦磷酸（IPP），IPP异构化为二甲烯丙基焦磷酸（DMAPP）。一份DMAPP依次与IPP缩合成香叶基焦磷酸和法呢基焦磷酸（FPP）；两份FPP再以NADPH参与的还原缩合生成30碳鲨烯。IPP与FPP同时也是蛋白质异戊烯化、泛醌侧链和多种异戊二烯分子的前体，所以HMGCR控制的并非只有最终胆固醇浓度。

### 从鲨烯到两条胆固醇末端路线 { #squalene-to-cholesterol }

鲨烯单加氧酶在内质网膜上用O$_2$和NADPH形成2,3-氧化鲨烯，羊毛固醇合酶随后完成多环化，生成30碳羊毛固醇。从羊毛固醇到27碳胆固醇还要经历脱甲基、双键迁移和多次氧化还原。人类可经以去氢胆固醇为末端前体的Bloch路线，也可经以7-脱氢胆固醇等为中间物的Kandutsch–Russell路线；不同组织会偏用不同组合。因而把整个过程切成“前三段都在胞质、后两段都在ER”的五格图过于整齐，许多关键酶本身就在ER膜上。[^cholesterol]

经典碳账本常把完整胆固醇合成追溯到18份乙酰-CoA，但三碳会在鲨烯后加工中移除，途中还大量消耗ATP、NADPH和O$_2$。这个数字适合追踪碳源，不应被当作一条单步反应式，也不能推出肝脏固定承担全身85%的合成；肝、肠和许多有核细胞都能合成胆固醇，贡献随膳食、组织需求与测量尺度改变。

### 合成、摄取、酯化与输出共同维持胆固醇稳态 { #cholesterol-homeostasis }

细胞内可利用固醇降低时，SCAP携带膜结合的SREBP离开ER，在Golgi经两步蛋白水解释放转录因子；SREBP2尤其促进HMGCR、其他胆固醇合成酶和LDL受体表达。ER胆固醇或某些氧固醇升高时，SCAP—INSIG复合物把SREBP留在ER，HMGCR也可加速泛素化降解。SREBP-1c更偏向脂肪酸合成基因，但两套程序有交叠；AMPK磷酸化、酶降解、底物供给与脂蛋白摄取又提供更快或更慢的控制层。[^cholesterol-regulation]

他汀活性形式竞争性抑制HMGCR，使肝细胞ER可利用胆固醇下降；随后的SREBP2反应不仅降低从头合成，也提高LDL受体表达和循环LDL清除。洛伐他汀常以可转化的内酯前药形式给药，真正模拟HMG-CoA还原反应过渡态的是其开环羟酸形式。这里讨论的是机制，不替代个体化用药判断。

游离胆固醇可由ER中的SOAT1／SOAT2与脂酰-CoA形成胆固醇酯，用于脂滴储存或ApoB脂蛋白装配；血浆LCAT则把磷脂酰胆碱的酰基转给HDL表面的胆固醇。胆固醇还通向胆汁酸、类固醇激素和[维生素D](vitamin_and_coenzyme.md#vitamin-d-activation)，这些出口与合成、摄取和排泄一起决定稳态。昆虫等节肢动物通常不能由乙酸从头建立固醇骨架，必须从食物取得胆固醇或植物甾醇并加工成蜕皮激素前体；把胆固醇笼统称为“昆虫的维生素”只能视作营养依赖的历史类比。[^insect-sterol]

## 合成通量由物质需求而非单一限速酶决定 { #lipid-synthesis-regulation }

进食后的胰岛素、葡萄糖代谢与柠檬酸输出通常有利于从头脂肪生成，禁食和能量压力则通过脂解、AMPK及底物重分配压低多数合成通量。然而，膜更新、肺表面活性物质、髓鞘脂质或局部氧脂素的需求并不会简单随“储能模式”同步开关。ACC、FASN、PCYT1A、SPT、HMGCR等节点各自控制一段路线，最终通量还要服从乙酰-CoA、甘油-3-磷酸、脂酰-CoA、NADPH、细胞器接触、产物转运与降解的共同约束。

丙二酰-CoA抑制CPT1使长链脂肪酸合成与线粒体氧化在许多条件下相互错开，但过氧化物酶体底物、中链脂肪酸和不同ACC／CPT1同工型会改变这一关系。类似地，细胞可在从头合成、膳食或脂蛋白摄取、脂滴储存和膜脂重塑之间换用来源。把“结构脂质永远优先于储能脂质”或“所有多余葡萄糖都直接变成脂肪”当作固定规则，都忽略了组织分工与代谢状态。

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
[^cholesterol-regulation]: 固醇感知和SREBP转运见Reactome [Regulation of cholesterol biosynthesis by SREBP](https://reactome.org/content/detail/R-HSA-1655829)、[Discovery of the cellular and molecular basis of cholesterol control](https://pmc.ncbi.nlm.nih.gov/articles/PMC3773783/)及UniProt [SREBP2（Q12772）](https://www.uniprot.org/uniprotkb/Q12772/entry)。
[^insect-sterol]: 节肢动物对膳食固醇的依赖及蜕皮激素合成边界见[Gonadal Ecdysteroidogenesis in Arthropoda](https://pmc.ncbi.nlm.nih.gov/articles/PMC7205109/)。
