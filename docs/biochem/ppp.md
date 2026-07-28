# 磷酸戊糖途径

磷酸戊糖途径（pentose phosphate pathway, PPP）从葡萄糖-6-磷酸分流，却不把碳一直氧化到丙酮酸。它先在氧化阶段生成 NADPH 和五碳糖，再用一组可逆的碳骨架重排，把五碳糖变成核糖-5-磷酸，或送回果糖-6-磷酸与甘油醛-3-磷酸。由此，同一个反应网络可以在还原力、核苷酸前体和糖酵解碳流之间重新配比。Reactome 的人类通路把这条主线记录为胞质中的三个氧化反应和五个非氧化反应。[^ppp-overview]

这条途径也称磷酸葡萄糖酸途径或己糖单磷酸旁路。所谓“旁路”并不表示它只是糖酵解的次要附件：成熟红细胞要靠它维持抗氧化能力，增殖细胞用它取得核糖与还原力，脂质合成旺盛的组织则可把相当一部分葡萄糖碳引入其中。PPP 本身不直接合成 ATP；当其产物 F6P 和 GAP 继续进入[糖酵解](emp.md)时，碳才可能在下游产生 ATP。

## 氧化与非氧化反应组成一张可调网络 { #pathway-architecture }

在人和其他动物中，经典 PPP 位于胞质。植物同时具有胞质和质体中的同工酶，细菌、真菌与古菌的酶组合则随物种而异。氧化阶段把 G6P 的第 1 个碳以 CO$_2$ 释放，两个脱氢步骤各还原一分子 NADP$^+$；这三步在细胞中具有明显的净方向。非氧化阶段不发生净氧化还原，而以异构、差向异构以及二碳、三碳单位转移改变糖磷酸的碳数，多个反应接近平衡并可反向运行。

因此，“先氧化、再非氧化”只是便于学习的典型顺序，不是所有碳都必须走完的固定流水线。细胞可从 G6P 进入氧化阶段，也可让糖酵解中间物从非氧化阶段的反方向生成 R5P；非氧化产物还可返回糖酵解，或在具备相应酶的组织中重建 G6P 再次氧化。

## 氧化阶段两次保存还原力 { #oxidative-phase }

| 步骤与酶 | 净反应 | 化学要点 |
| --- | --- | --- |
| 1　葡萄糖-6-磷酸脱氢酶（G6PD） | G6P＋NADP$^+$ → 6-磷酸葡萄糖酸-$\delta$-内酯＋NADPH＋H$^+$ | G6P 的 C1 被氧化为内酯羰基；这是氧化支路的第一个承诺步骤，也是常见的重要控制节点 |
| 2　6-磷酸葡萄糖酸内酯酶（PGLS） | 6-磷酸葡萄糖酸-$\delta$-内酯＋H$_2$O → 6-磷酸葡萄糖酸 | 内酯可自行水解，PGLS 加速并约束其在水溶液中的反应去向 |
| 3　6-磷酸葡萄糖酸脱氢酶（PGD） | 6-磷酸葡萄糖酸＋NADP$^+$ → Ru5P＋CO$_2$＋NADPH | 先生成不稳定的 3-酮中间体，再发生氧化脱羧；不能只用“$\beta$-脱羧”略去前面的氧化 |

合并三步并采用常见的质子记账约定，可写成

$$
\begin{gathered}
\mathrm{G6P}+2\mathrm{NADP^+}+\mathrm{H_2O}\\
\longrightarrow \mathrm{Ru5P}+\mathrm{CO_2}
+2\mathrm{NADPH}+2\mathrm{H^+}.
\end{gathered}
$$

每个 G6P 因而生成两分子 NADPH，但没有 ATP，也没有直接消耗 O$_2$。这不等于整条通路与氧化环境无关：过氧化物清除会消耗 NADPH，而吞噬细胞的 NADPH 氧化酶又以 O$_2$ 为电子受体主动制造超氧阴离子；两种需求都可显著提高 PPP 通量。氧化阶段的反应、区室和人类酶注释可与 Reactome 的逐步记录相互核对。[^ppp-oxidative]

## 非氧化阶段重排二至七碳糖磷酸 { #nonoxidative-phase }

Ru5P 先在核糖-5-磷酸异构酶（RPIA）作用下转为醛糖 R5P，或由核酮糖-5-磷酸 3-差向异构酶（RPE）转为 X5P。前者可进入 PRPP 与核苷酸合成，后者主要作为转酮酶的酮糖供体。随后三次碳单位转移把两分子 X5P 和一分子 R5P 重排为两分子 F6P 与一分子 GAP：

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

这里的整数系数只是让 15 个碳完整守恒，不表示一个细胞必须等到三分子 Ru5P 同时结合在同一个酶上。转酮酶每次转移二碳的羟乙基片段，需要硫胺素二磷酸和二价金属离子；转醛酶转移三碳片段。把两个酶只按“二碳／三碳”记忆时，还应同时辨认谁是酮糖供体、谁是醛糖受体以及产物如何接回糖酵解。[^transketolase]

## 产物需求决定碳流组合 { #flux-modes }

| 细胞的相对需求 | 主要碳流 | 收支特征 |
| --- | --- | --- |
| R5P 多于 NADPH | F6P 与 GAP 经非氧化反应逆向生成 R5P | 可避开氧化阶段，不因制备核糖而必然同时产生 NADPH |
| R5P 与 NADPH 大致配套 | G6P 经氧化阶段生成 Ru5P，再异构为 R5P | 每个 G6P 同时给出 1 个五碳糖、2 NADPH 和 1 CO$_2$ |
| NADPH 多于 R5P | 五碳糖重排为 F6P／GAP，并在具备相应酶时回补 G6P | 同一碳池可多轮经过氧化阶段，提高单位净消耗葡萄糖的 NADPH 产量 |
| NADPH 与 ATP 都有较高需求 | 氧化阶段后让 F6P／GAP 流入糖酵解及后续氧化 | PPP 负责 NADPH，ATP 来自下游底物水平磷酸化或氧化磷酸化 |

这些是同一网络的极端化账本，不是四个互斥的细胞开关。若把非氧化产物完全回收到 G6P，六轮氧化阶段可用整数净式表示为

$$
\begin{gathered}
\mathrm{G6P}+12\mathrm{NADP^+}+7\mathrm{H_2O}\\
\longrightarrow 6\mathrm{CO_2}+12\mathrm{NADPH}
+12\mathrm{H^+}+\mathrm{P_i}.
\end{gathered}
$$

这个式子来自六份 G6P 进入、五份 G6P 再生后的净差，不意味着“至少六分子葡萄糖同时进入”才会发生 PPP。回收过程还需要 GPI、醛缩酶、TPI 和果糖-1,6-二磷酸酶等网络能力，因而会随组织、物种和代谢状态改变。[^ppp-modes]

## G6PD 将还原需求转换为入口通量 { #g6pd-regulation }

G6PD 使用 NADP$^+$ 作氧化剂，并受到 NADPH 的产物抑制。当谷胱甘肽还原酶、硫氧还蛋白还原酶或合成反应消耗 NADPH 时，NADP$^+$ 增多、抑制解除，氧化支路可迅速加速；G6P 供应和 PGD 等下游容量也会限制通量。因而 G6PD 常称氧化 PPP 的限速或通量控制酶，但不能把全网控制永远压缩为一个节点。

在肝、脂肪组织和增殖细胞中，营养、激素与转录调节还可改变 G6PD 的酶量；氧化应激则同时改变 NADP(H) 比、酶的翻译后状态和与糖酵解竞争的底物分配。非氧化反应多接近平衡，方向更直接跟随 R5P、X5P、F6P 和 GAP 的浓度。原材料把 R5P 与 NADP$^+$／NADPH 并列为 G6PD 的通用直接调节物会混淆产物需求和酶调节：R5P 的需求主要通过整个网络的质量作用影响碳流，不宜写成跨组织通用的 G6PD 变构开关。[^g6pd-regulation]

## NADPH 在还原与氧化两端被消耗 { #nadph-functions }

PPP 生成的胞质 NADPH 为[脂肪酸与胆固醇](lipid_synthesis.md)、脱氧核苷酸和其他还原性合成提供氢负离子，也让谷胱甘肽还原酶与硫氧还蛋白还原酶把氧化的二硫键系统还原。细胞色素 P450 还原酶、NO 合酶和吞噬细胞 NOX 同样使用 NADPH；前两者分别支持单加氧反应与 NO 生成，NOX 则把电子送给氧，形成用于信号或杀伤病原体的活性氧。NADPH 因而不是单纯“抗氧化分子”，而是多类还原反应的电子预算。[^nadph-functions]

胞质 IDH1、苹果酸酶 ME1 和一碳代谢酶也能生成 NADPH，内质网腔还有 H6PD，线粒体则有 IDH2、ME3、NNT 与一碳代谢等来源；相对贡献依细胞和状态而变。NADP(H) 没有已知的自由跨膜转运体，各区室通常在本地维持自己的池。线粒体 NNT 常借质子动力势以 NADH 还原 NADP$^+$，在特定条件下方向可以反转；不能把它概括成胞质 PPP 产生的 NADPH“间接进入呼吸链”的常规通道。[^nadph-compartments]

## 红细胞把 G6PD 缺陷转化为溶血风险 { #g6pd-deficiency }

成熟红细胞没有线粒体，也不能重新合成大量受损蛋白，氧化 PPP 是其 NADPH 的关键来源。谷胱甘肽还原酶用 NADPH 把 GSSG 还原成 GSH，谷胱甘肽过氧化物酶再以 GSH 还原 H$_2$O$_2$ 和有机过氧化物。原材料所说“GSH 下降使过氧化物酶活性下降”只描述了后半段；真正连接 PPP 的步骤是 NADPH 驱动 GSSG 再生 GSH。

G6PD 缺乏是 X 连锁酶缺陷，酶活下降程度和女性 X 染色体失活可造成不同表型。多数携带者平时没有症状，但感染、蚕豆中的氧化性代谢物或某些药物会增加氧化负荷，引发急性溶血、黄疸和深色尿；严重变异还可导致新生儿高胆红素血症或慢性非球形红细胞性溶血。严格说，“蚕豆病”是蚕豆诱发的溶血表型，不是所有 G6PD 缺乏的同义词。具体药物风险与临床处理应依据现行医疗指南，不能从本页的代谢机制自行推断。[^g6pd-deficiency]

## 五碳与四碳中间物连接更多合成途径 { #biosynthetic-roles }

R5P 经 PRPP 合成把核糖骨架交给[嘌呤、嘧啶和某些辅酶](na_synthesis.md)；E4P 在植物、真菌和许多细菌中与磷酸烯醇式丙酮酸进入莽草酸途径，通向芳香族氨基酸及其衍生物，在部分微生物中还参与[维生素 B$_6$](vitamin_and_coenzyme.md) 前体形成。动物没有莽草酸途径，因此 E4P 的这些用途不能无条件套到人体代谢。

许多生物可把核糖、木糖或核苷分解产生的 R5P、X5P 接入非氧化 PPP，再重排为糖酵解中间物；但微生物还存在其他戊糖氧化和裂解路线，所以“PPP 是一切戊糖分解的必经途径”过于绝对。相反，更稳定的认识是：PPP 提供一个广泛分布的糖磷酸互换枢纽，其具体入口和出口取决于物种的酶集合。[^ppp-breadth]

## 植物质体以光氧化还原状态约束旁路 { #plant-ppp }

Calvin–Benson 循环与非氧化 PPP 共享 R5P、Ru5P、X5P、S7P、E4P、F6P、GAP 及多种重排酶，但两者的系统方向不同：前者以 ATP 和 NADPH 固定 CO$_2$ 并再生 RuBP，氧化 PPP 则放出 CO$_2$ 并生成 NADPH。若叶绿体在光下让两者无约束地同时循环，会形成耗 ATP、放 CO$_2$ 的旁路。

许多植物的叶绿体 G6PDH 因而受硫氧还蛋白相关的光暗氧化还原调节，在光下还原失活，在暗期或某些氧化胁迫下恢复；胞质氧化 PPP 则可继续供给还原力和五碳糖。近年的同位素研究也提示光合组织可在特定胁迫下启用质体 G6P shunt。称 PPP “辅助光合作用”不足以表达这种区室、光暗与应激依赖的关系。[^plant-ppp]

## 碳同位素区分浓度与通量 { #ppp-tracing }

测到 R5P、6PG 或 NADPH 浓度升高，并不自动表示 PPP 通量增加，因为浓度还受消耗和回收控制。经典示踪利用氧化阶段选择性释放葡萄糖 C1：比较 [1-$^{14}$C] 与 [6-$^{14}$C] 葡萄糖形成的 CO$_2$，或用 [1,2-$^{13}$C$_2$] 葡萄糖观察氧化 PPP 丢失 C1 后产生的 M+1 与直接糖酵解保留两枚标记形成的 M+2 产物。

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
[^g6pd-deficiency]: G6PD 缺乏的遗传、红细胞氧化损伤与临床表型参见 Luzzatto 等 [Glucose-6-phosphate dehydrogenase deficiency](https://pubmed.ncbi.nlm.nih.gov/32702756/)和 NCBI Bookshelf [Glucose-6-Phosphate Dehydrogenase Deficiency](https://www.ncbi.nlm.nih.gov/books/NBK470315/)。
[^ppp-breadth]: PPP 在核苷酸、糖磷酸与不同生物合成网络中的广泛作用及物种差异，见 Stincone 等[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4470864/)；微生物 Weimberg／Dahms 非磷酸化戊糖分解路线参见[相关酶系综述](https://pubmed.ncbi.nlm.nih.gov/36578086/)。
[^plant-ppp]: 光合细胞中胞质与质体氧化 PPP、Calvin–Benson 循环共享反应及 G6P shunt 的光暗和胁迫边界，见 [Pentose phosphate pathway reactions in photosynthesizing cells](https://pmc.ncbi.nlm.nih.gov/articles/PMC8234502/)。
[^ppp-tracing]: [1-$^{14}$C]／[6-$^{14}$C] 与 [1,2-$^{13}$C$_2$] 葡萄糖的示踪原理、相对通量限制和补充测量要求，见 Ge 等[综述的 Measuring the PPP 一节](https://pmc.ncbi.nlm.nih.gov/articles/PMC11251397/)。
