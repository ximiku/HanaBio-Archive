# 磷酸戊糖途径

磷酸戊糖途径（pentose phosphate pathway，PPP）从葡萄糖-6-磷酸（glucose 6-phosphate，G6P）分流，却不把碳一直氧化到丙酮酸。它先在氧化阶段生成还原型烟酰胺腺嘌呤二核苷酸磷酸（reduced nicotinamide adenine dinucleotide phosphate，NADPH）和五碳糖，再用一组可逆的碳骨架重排，把五碳糖变成核糖-5-磷酸（ribose 5-phosphate，R5P），或送回果糖-6-磷酸（fructose 6-phosphate，F6P）与甘油醛-3-磷酸（glyceraldehyde 3-phosphate，GAP）。由此，同一个反应网络可以在还原力、核苷酸前体和糖酵解碳流之间重新配比。Reactome 的人类通路把这条主线记录为胞质中的三个氧化反应和五个非氧化反应。[^ppp-overview]

这条途径也称磷酸葡萄糖酸途径或己糖单磷酸旁路。“旁路”是历史名称；PPP 在成熟红细胞的抗氧化、增殖细胞的核糖供给和脂质合成组织的 NADPH 供应中都可承担主要通量。PPP 本身不直接合成三磷酸腺苷（adenosine triphosphate，ATP）；当其产物 F6P 和 GAP 继续进入[糖酵解](emp.md)时，碳才可能在下游产生 ATP。

## 反应网络与碳骨架重排 { #ppp-reaction-network }

### 磷酸戊糖途径的网络结构 { #pathway-architecture }

在人和其他动物中，经典 PPP 位于胞质。植物同时具有胞质和质体中的同工酶，细菌、真菌与古菌的酶组合则随物种而异。氧化阶段把 G6P 的第 1 个碳以 CO$_2$ 释放，两个脱氢步骤各还原一分子氧化型烟酰胺腺嘌呤二核苷酸磷酸（oxidized nicotinamide adenine dinucleotide phosphate，NADP$^+$），最终形成核酮糖-5-磷酸（ribulose 5-phosphate，Ru5P）；这三步在细胞中具有明显的净方向。非氧化阶段不发生净氧化还原，而以异构、差向异构以及二碳、三碳单位转移改变糖磷酸的碳数，多个反应接近平衡并可反向运行。

氧化后接非氧化阶段是典型顺序；网络也可由糖酵解中间物逆向生成 R5P，或把非氧化产物回送糖酵解，并在具备相应酶的组织中重建 G6P 再次氧化。

### 氧化阶段的 NADPH 生成 { #oxidative-phase }

| 步骤与酶 | 净反应 | 化学要点 |
| --- | --- | --- |
| 1　葡萄糖-6-磷酸脱氢酶（glucose-6-phosphate dehydrogenase，G6PD） | G6P＋NADP$^+$ → 6-磷酸葡萄糖酸-$\delta$-内酯＋NADPH＋H$^+$ | G6P 的 C1 被氧化为内酯羰基；这是氧化支路的第一个承诺步骤，也是常见的重要控制节点 |
| 2　6-磷酸葡萄糖酸内酯酶（6-phosphogluconolactonase，PGLS） | 6-磷酸葡萄糖酸-$\delta$-内酯＋H$_2$O → 6-磷酸葡萄糖酸 | 内酯可自行水解，PGLS 加速并约束其在水溶液中的反应去向 |
| 3　6-磷酸葡萄糖酸脱氢酶（6-phosphogluconate dehydrogenase，PGD） | 6-磷酸葡萄糖酸＋NADP$^+$ → Ru5P＋CO$_2$＋NADPH | 先生成不稳定的 3-酮中间体，随后经历氧化脱羧 |

合并三步并采用常见的质子记账约定，可写成

$$
\begin{gathered}
\mathrm{G6P}+2\mathrm{NADP^+}+\mathrm{H_2O}\\
\longrightarrow \mathrm{Ru5P}+\mathrm{CO_2}
+2\mathrm{NADPH}+2\mathrm{H^+}.
\end{gathered}
$$

每个 G6P 因而生成两分子 NADPH，但不直接生成 ATP 或消耗 O$_2$。PPP 又通过 NADPH 消耗与氧化环境紧密相连：过氧化物清除会消耗 NADPH，而吞噬细胞的 NADPH 氧化酶以 O$_2$ 为电子受体主动制造超氧阴离子；两种需求都可显著提高 PPP 通量。氧化阶段的反应、区室和人类酶注释可与 Reactome 的逐步记录相互核对。[^ppp-oxidative]

### 非氧化阶段的糖磷酸重排 { #nonoxidative-phase }

Ru5P 先在核糖-5-磷酸异构酶（ribose-5-phosphate isomerase A，RPIA）作用下转为醛糖 R5P，或由核酮糖-5-磷酸 3-差向异构酶（ribulose-phosphate 3-epimerase，RPE）转为木酮糖-5-磷酸（xylulose 5-phosphate，X5P）。前者可进入 5-磷酸核糖-1-焦磷酸（phosphoribosyl pyrophosphate，PRPP）与核苷酸合成，后者主要作为转酮酶的酮糖供体。随后三次碳单位转移以庚酮糖-7-磷酸（sedoheptulose 7-phosphate，S7P）和赤藓糖-4-磷酸（erythrose 4-phosphate，E4P）为中间物，把两分子 X5P 和一分子 R5P 重排为两分子 F6P 与一分子 GAP：

| 反应 | 转移的碳单位 | 产物关系 |
| --- | ---: | --- |
| X5P＋R5P $\rightleftharpoons$ GAP＋S7P | 2 C | 转酮酶把 X5P 的二碳片段交给 R5P |
| S7P＋GAP $\rightleftharpoons$ F6P＋E4P | 3 C | 转醛酶把 S7P 的三碳片段交给 GAP |
| X5P＋E4P $\rightleftharpoons$ GAP＋F6P | 2 C | 第二次转酮反应将剩余五碳、四碳骨架配成六碳与三碳 |

净碳账本为

$$
3\mathrm{Ru5P}
\rightleftharpoons 2\mathrm{F6P}+\mathrm{GAP}.
$$

这里的整数系数只是让 15 个碳完整守恒，不表示一个细胞必须等到三分子 Ru5P 同时结合在同一个酶上。转酮酶每次转移二碳的羟乙基片段，需要硫胺素二磷酸（thiamine diphosphate，ThDP）和二价金属离子；转醛酶转移三碳片段。判读这组反应时，还需同时辨认酮糖供体、醛糖受体以及产物接回糖酵解的位置。[^transketolase]

## 需求驱动的通量调节 { #ppp-flux-regulation }

### NADPH 与 R5P 需求下的碳流模式 { #flux-modes }

| 细胞的相对需求 | 主要碳流 | 收支特征 |
| --- | --- | --- |
| R5P 多于 NADPH | F6P 与 GAP 经非氧化反应逆向生成 R5P | 可避开氧化阶段，不因制备核糖而必然同时产生 NADPH |
| R5P 与 NADPH 大致配套 | G6P 经氧化阶段生成 Ru5P，再异构为 R5P | 每个 G6P 同时给出 1 个五碳糖、2 NADPH 和 1 CO$_2$ |
| NADPH 多于 R5P | 五碳糖重排为 F6P／GAP，并在具备相应酶时回补 G6P | 同一碳池可多轮经过氧化阶段，提高单位净消耗葡萄糖的 NADPH 产量 |
| NADPH 与 ATP 都有较高需求 | 氧化阶段后让 F6P／GAP 流入糖酵解及后续氧化 | PPP 负责 NADPH，ATP 来自下游底物水平磷酸化或氧化磷酸化 |

这些是同一网络在不同需求比例下的极端化账本，实际碳流可在各模式之间连续过渡。若把非氧化产物完全回收到 G6P，六轮氧化阶段可用整数净式表示为

$$
\begin{gathered}
\mathrm{G6P}+12\mathrm{NADP^+}+7\mathrm{H_2O}\\
\longrightarrow 6\mathrm{CO_2}+12\mathrm{NADPH}
+12\mathrm{H^+}+\mathrm{P_i}.
\end{gathered}
$$

这个式子来自六份 G6P 进入、五份 G6P 再生后的净差，无机磷酸（P$_i$）是净产物；这种整数记账不意味着“至少六分子葡萄糖同时进入”才会发生 PPP。回收过程还需要葡萄糖-6-磷酸异构酶（glucose-6-phosphate isomerase，GPI）、醛缩酶、丙糖磷酸异构酶（triosephosphate isomerase，TPI）和果糖-1,6-二磷酸酶等网络能力，因而会随组织、物种和代谢状态改变。[^ppp-modes]

### G6PD 与氧化支路调节 { #g6pd-regulation }

G6PD 使用 NADP$^+$ 作氧化剂，并受到 NADPH 的产物抑制。当谷胱甘肽还原酶、硫氧还蛋白还原酶或合成反应消耗 NADPH 时，NADP$^+$ 增多、抑制解除，氧化支路可迅速加速。G6PD 常承担重要入口控制，完整通量还由 G6P 供应、PGD 容量和下游需求共同决定。

在肝、脂肪组织和增殖细胞中，营养、激素与转录调节还可改变 G6PD 的酶量；氧化应激则同时改变 NADP(H) 比、酶的翻译后状态和与糖酵解竞争的底物分配。非氧化反应多接近平衡，方向更直接跟随 R5P、X5P、F6P 和 GAP 的浓度。R5P 需求主要通过网络质量作用影响碳流；G6PD 的直接调节以 NADP$^+$／NADPH、酶量和翻译后状态为主。[^g6pd-regulation]

## NADPH 与细胞功能 { #ppp-cellular-functions }

### NADPH 的细胞功能 { #nadph-functions }

PPP 生成的胞质 NADPH 为[脂肪酸与胆固醇](lipid_synthesis.md)、脱氧核苷酸和其他还原性合成提供氢负离子，也让谷胱甘肽还原酶与硫氧还蛋白还原酶把氧化的二硫键系统还原。细胞色素 P450 氧化还原酶（cytochrome P450 oxidoreductase，POR）、一氧化氮合酶（nitric oxide synthase，NOS）和吞噬细胞的 NADPH 氧化酶（NADPH oxidase，NOX）同样使用 NADPH；前两者分别支持单加氧反应与一氧化氮（nitric oxide，NO）生成，NOX 则把电子送给氧，形成用于信号或杀伤病原体的活性氧。NADPH 是这些还原与氧化过程共享的电子预算。[^nadph-functions]

胞质异柠檬酸脱氢酶 1（isocitrate dehydrogenase 1，IDH1）、苹果酸酶 1（malic enzyme 1，ME1）和一碳代谢酶也能生成 NADPH，内质网腔还有己糖-6-磷酸脱氢酶（hexose-6-phosphate dehydrogenase，H6PD），线粒体则有异柠檬酸脱氢酶 2（IDH2）、苹果酸酶 3（ME3）、烟酰胺核苷酸转氢酶（nicotinamide nucleotide transhydrogenase，NNT）与一碳代谢等来源；相对贡献依细胞和状态而变。NADP(H) 没有已知的自由跨膜转运体，各区室通常在本地维持自己的池。线粒体 NNT 借质子动力势连接线粒体还原型烟酰胺腺嘌呤二核苷酸（NADH）与 NADPH 池，并可在特定条件下反向运行；胞质 PPP 的 NADPH 在本区室参与相应反应。[^nadph-compartments]

### G6PD 缺乏与红细胞溶血 { #g6pd-deficiency }

成熟红细胞没有线粒体，也不能重新合成大量受损蛋白，氧化 PPP 是其 NADPH 的关键来源。PPP 与红细胞抗氧化的关键连接是 NADPH 驱动谷胱甘肽还原酶把氧化型谷胱甘肽（GSSG）再生为还原型谷胱甘肽（GSH），随后 GSH 供谷胱甘肽过氧化物酶还原 H$_2$O$_2$ 和有机过氧化物。

G6PD 缺乏是 X 染色体连锁（X-linked）酶缺陷，酶活下降程度和女性 X 染色体失活可造成不同表型。许多具有常见缺陷变异的个体在无诱因时没有症状，但感染、蚕豆中的氧化性代谢物或某些药物会增加氧化负荷，引发急性溶血、黄疸和深色尿；严重变异还可导致新生儿高胆红素血症或慢性非球形红细胞性溶血。严格说，“蚕豆病”是蚕豆诱发的溶血表型，不是所有 G6PD 缺乏的同义词。具体药物风险与临床处理须依据当事人的 G6PD 活性、具体药物和现行医疗指南判断，不能仅凭代谢机制推断。[^g6pd-deficiency]

### 五碳与四碳中间物的合成去路 { #biosynthetic-roles }

R5P 经 PRPP 合成把核糖骨架交给[嘌呤、嘧啶和某些辅酶](na_synthesis.md)；E4P 在植物、真菌和许多细菌中与磷酸烯醇式丙酮酸进入莽草酸途径，通向芳香族氨基酸及其衍生物，在部分微生物中还参与[维生素 B$_6$](vitamin_and_coenzyme.md) 前体形成。动物没有莽草酸途径，E4P 在人体中不承担这些合成用途。

许多生物可把核糖、木糖或核苷分解产生的 R5P、X5P 接入非氧化 PPP，再重排为糖酵解中间物；微生物还存在其他戊糖氧化和裂解路线，因而 PPP 并非所有戊糖分解的必经途径。PPP 是一个广泛分布的糖磷酸互换枢纽，其具体入口和出口取决于物种的酶集合。[^ppp-breadth]

## 物种差异与通量测量 { #ppp-comparative-flux }

### 植物质体 PPP 的光暗调节 { #plant-ppp }

Calvin–Benson 循环与非氧化 PPP 共享 R5P、Ru5P、X5P、S7P、E4P、F6P、GAP 及多种重排酶，但两者的系统方向不同：前者以 ATP 和 NADPH 固定 CO$_2$ 并再生核酮糖-1,5-二磷酸（ribulose 1,5-bisphosphate，RuBP），氧化 PPP 则放出 CO$_2$ 并生成 NADPH。若叶绿体在光下让两者无约束地同时循环，会形成耗 ATP、放 CO$_2$ 的旁路。

许多植物的叶绿体葡萄糖-6-磷酸脱氢酶（G6PDH）因而受硫氧还蛋白相关的光暗氧化还原调节，在光下还原失活，在暗期或某些氧化胁迫下恢复；胞质氧化 PPP 则可继续供给还原力和五碳糖。同位素研究也提示光合组织可在特定胁迫下启用质体 G6P 旁路（G6P shunt）。因此，植物 PPP 与光合作用的关系取决于细胞区室、光暗状态和氧化胁迫。[^plant-ppp]

### 碳同位素示踪与 PPP 通量 { #ppp-tracing }

测到 R5P、6-磷酸葡萄糖酸（6PG）或 NADPH 浓度升高，并不自动表示 PPP 通量增加，因为浓度还受消耗和回收控制。经典示踪利用氧化阶段选择性释放葡萄糖 C1：比较 [1-$^{14}$C] 与 [6-$^{14}$C] 葡萄糖形成的 CO$_2$，或用 [1,2-$^{13}$C$_2$] 葡萄糖观察氧化 PPP 丢失 C1 后产生的 M+1 标记产物，以及直接糖酵解保留两枚标记形成的 M+2 产物。

非氧化反应可逆、多轮回收会重新分配标记，糖原也可贡献未标记 G6P，所以单一同位素比例通常只给出相对分流。可靠的通量解释需同时测量葡萄糖摄取、产物外排与标记稳态，并把氧化支路、非氧化核糖生成和其他 NADPH 来源纳入模型。[^ppp-tracing]

## 参考资料与延伸阅读

- Reactome, [Pentose phosphate pathway](https://reactome.org/content/detail/R-HSA-71336)。
- Stincone, A. et al., [The return of metabolism: biochemistry and physiology of the pentose phosphate pathway](https://pubmed.ncbi.nlm.nih.gov/25243985/). *Biological Reviews*, 2015。
- TeSlaa, T. et al., [The pentose phosphate pathway in health and disease](https://pubmed.ncbi.nlm.nih.gov/37612403/). *Nature Metabolism*, 2023。
- Luzzatto, L., Ally, M. & Notaro, R., [Glucose-6-phosphate dehydrogenase deficiency](https://pubmed.ncbi.nlm.nih.gov/32702756/). *Blood*, 2020。
- Sharkey, T. D., [Pentose phosphate pathway reactions in photosynthesizing cells](https://pmc.ncbi.nlm.nih.gov/articles/PMC8234502/). *Plants*, 2021。

[^ppp-overview]: 人类胞质 PPP 的八步反应、与糖酵解共享的 G6P／F6P／GAP 以及按需求改变净通量的说明，见 Reactome [R-HSA-71336](https://reactome.org/content/detail/R-HSA-71336)。
[^ppp-oxidative]: 三个氧化反应及其 NADPH、Ru5P 与 CO$_2$ 产物据 Reactome [Pentose phosphate pathway](https://reactome.org/content/detail/R-HSA-71336)；氧化阶段酶的化学与氧化敏感性参见 [The enzymes of the oxidative phase of the pentose phosphate pathway as targets of reactive species](https://pubmed.ncbi.nlm.nih.gov/37971161/)。
[^transketolase]: 转酮酶的 ThDP、二价金属依赖和二碳片段转移机制，见 Schenk 等 [Properties and functions of the thiamin diphosphate dependent enzyme transketolase](https://pubmed.ncbi.nlm.nih.gov/9924800/)；三次非氧化重排见 Reactome [R-HSA-71336](https://reactome.org/content/detail/R-HSA-71336)。
[^ppp-modes]: 氧化与非氧化反应按 NADPH／R5P 需求组合、非氧化产物回收为 G6P 的依据，见 Reactome [R-HSA-71336](https://reactome.org/content/detail/R-HSA-71336)及 Stincone 等[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4470864/)。
[^g6pd-regulation]: NADPH 产物抑制、NADP$^+$ 与氧化需求解除入口限制的经典依据见 [Regulation of the pentose phosphate cycle](https://pubmed.ncbi.nlm.nih.gov/4154743/)；组织特异的营养、激素与氧化应激调节见 [Glucose-6-phosphate dehydrogenase: a housekeeping enzyme subject to tissue-specific regulation](https://pubmed.ncbi.nlm.nih.gov/8119488/)。
[^nadph-functions]: NADPH 在还原性合成、谷胱甘肽／硫氧还蛋白抗氧化循环以及 NOX／NOS 供电子中的作用，见 Ge 等 [The pentose phosphate pathway in health and disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC11251397/)。
[^nadph-compartments]: 胞质、线粒体与内质网 NADPH 来源及不存在已知 NADP(H) 跨膜转运体的边界，见 [Pathways linking NADPH production to endoplasmic reticulum protein oxidation and stress](https://pmc.ncbi.nlm.nih.gov/articles/PMC9114485/)；NNT 借质子动力势以 NADH 还原 NADP$^+$ 的常见方向参见 [Mitochondrial NAD$^+$/NADH redox state and diabetic cardiomyopathy](https://pubmed.ncbi.nlm.nih.gov/29073779/)。
[^g6pd-deficiency]: G6PD 缺乏的遗传、红细胞氧化损伤与临床表型参见 Luzzatto 等 [Glucose-6-phosphate dehydrogenase deficiency](https://pubmed.ncbi.nlm.nih.gov/32702756/)和 NCBI Bookshelf [Glucose-6-Phosphate Dehydrogenase Deficiency](https://www.ncbi.nlm.nih.gov/books/NBK470315/)；变异的现行分类参见 WHO 公报 [New WHO classification of genetic variants causing G6PD deficiency](https://pmc.ncbi.nlm.nih.gov/articles/PMC11276151/)。
[^ppp-breadth]: PPP 在核苷酸、糖磷酸与不同生物合成网络中的广泛作用及物种差异，见 Stincone 等[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4470864/)；微生物 Weimberg／Dahms 非磷酸化戊糖分解路线参见[相关酶系综述](https://pubmed.ncbi.nlm.nih.gov/36578086/)。
[^plant-ppp]: 光合细胞中胞质与质体氧化 PPP、Calvin–Benson 循环共享反应及 G6P shunt 的光暗和胁迫边界，见 [Pentose phosphate pathway reactions in photosynthesizing cells](https://pmc.ncbi.nlm.nih.gov/articles/PMC8234502/)。
[^ppp-tracing]: [1-$^{14}$C]／[6-$^{14}$C] 与 [1,2-$^{13}$C$_2$] 葡萄糖的示踪原理、相对通量限制和补充测量要求，见 Ge 等[综述的 Measuring the PPP 一节](https://pmc.ncbi.nlm.nih.gov/articles/PMC11251397/)。
