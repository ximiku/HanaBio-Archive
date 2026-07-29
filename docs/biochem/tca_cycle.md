# 三羧酸循环

三羧酸循环以乙酰辅酶 A（acetyl-CoA）的二碳乙酰基为输入，让它先与四碳草酰乙酸缩合，再经八步反应重新生成草酰乙酸。每一轮释放两分子 CO$_2$，把氧化所得电子保存为三分子 NADH 和一对经琥珀酸脱氢酶送入辅酶 Q 的电子，并以底物水平磷酸化生成一分子 GTP 或 ATP。由于第一个可分离中间物是柠檬酸，这一路径也称柠檬酸循环；“Krebs 循环”则纪念 Krebs 与 Johnson 在 1937 年建立的循环模型。[^tca-overview]

循环承接[糖酵解](emp.md)产生的丙酮酸，也氧化来自脂肪酸、酮体和多种氨基酸的乙酰-CoA。反过来，柠檬酸、$\alpha$-酮戊二酸、琥珀酰-CoA 和草酰乙酸又为脂质、氨基酸、血红素、核苷酸和糖异生提供碳骨架。因此它既是氧化分解的枢纽，也是合成代谢持续取用中间物的开放循环。

## 循环入口与区室 { #tca-entry-compartment }

### 三羧酸循环的区室与氧依赖 { #compartment-and-oxygen }

在人和其他多数真核生物中，丙酮酸先进入线粒体基质，丙酮酸脱氢酶复合体和循环中的七种可溶酶位于基质；琥珀酸脱氢酶则嵌在线粒体内膜，同时也是呼吸链复合物 II。细菌没有线粒体，相应可溶反应发生在胞质，琥珀酸脱氢酶或延胡索酸还原酶与细胞膜相连。Reactome 的人类通路以八个经典反应记录从乙酰-CoA 到草酰乙酸的完整循环。[^reactome-tca]

八步反应直接使用水和已有代谢物中的氧原子；持续通量则通过 NADH 和还原型辅酶 Q 的再氧化间接依赖呼吸链。缺氧首先限制电子受体再生，并提高 NADH／NAD$^+$，继而让多个脱氢步骤接近平衡或受到产物抑制。[电子传递与氧化磷酸化](oxp.md)说明了这一连接。

### 丙酮酸脱氢酶复合体与乙酰-CoA 入口 { #pyruvate-dehydrogenase }

丙酮酸脱氢酶复合体（PDH complex, PDC）在循环之前完成不可逆的氧化脱羧：

$$
\begin{gathered}
\text{丙酮酸}+\mathrm{CoA-SH}+\mathrm{NAD^+}\\
\longrightarrow \text{乙酰-CoA}+\mathrm{CO_2}
+\mathrm{NADH}+\mathrm{H^+}.
\end{gathered}
$$

它以多份 E1、E2、E3 和真核生物的 E3 结合蛋白组成大型复合体。E1（丙酮酸脱氢酶）借助硫胺素二磷酸（ThDP）脱去 CO$_2$，形成羟乙基-ThDP；E2（二氢硫辛酰转乙酰基酶）上由赖氨酸系住的氧化型硫辛酰胺摆臂接受并氧化该二碳基团，再把乙酰基交给 CoA；E3（二氢硫辛酰脱氢酶）以紧密结合的 FAD 重氧化还原型硫辛酰胺，最后由 NAD$^+$ 接走电子。五种辅因子 ThDP、硫辛酰胺、CoA、FAD、NAD$^+$ 因而在同一电子与酰基传递链中分工，不能把硫辛酸、FAD 或 NAD$^+$ 同时列作每个亚酶的直接辅因子。[^pdh-complex]

多酶复合体让反应中间物在相邻活性部位之间转移，既提高局部传递效率，也避免活泼的羟乙基和酰基中间体大量扩散。$\alpha$-酮戊二酸脱氢酶复合体后来使用相同的 ThDP—硫辛酰胺—CoA—FAD—NAD$^+$ 逻辑，只是转移的基团变成四碳琥珀酰基。

### PDC 的磷酸化调节 { #pdh-phosphorylation }

哺乳动物四种 PDK 可磷酸化 E1$\alpha$ 并降低 PDC 活性，两种 PDP 则去磷酸化而重新激活；不同同工型的组织分布和位点选择并不相同。高 NADH／NAD$^+$、乙酰-CoA／CoA 和高能量状态通常促进 PDK 作用或直接形成产物抑制，丙酮酸和 ADP 则可抑制部分 PDK。收缩肌中进入基质的 Ca$^{2+}$ 激活 PDP1，使碳流随 ATP 需求增加；不能把 AMP、脂肪酸或 Ca$^{2+}$ 都写成直接结合 PDC 的通用变构效应物。[^pdh-regulation]

亚砷酸盐可与还原型硫辛酰胺的邻位二巯基作用，因而抑制 PDC 和同样使用硫辛酰胺的 $\alpha$-酮戊二酸脱氢酶。砷酸盐则在 GAPDH 步骤代替 P$_i$，已在[糖酵解](emp.md#shunts-and-inhibitors)说明；二者属于不同化学机制。[^arsenite-pdh]

## 三羧酸循环的八步反应 { #eight-reactions }

### 从乙酰-CoA 到琥珀酰-CoA { #acetyl-to-succinyl-coa }

| 步骤与酶 | 净反应 | 化学与调节要点 |
| --- | --- | --- |
| 1　柠檬酸合酶（CS） | 草酰乙酸＋乙酰-CoA＋H$_2$O → 柠檬酸＋CoA-SH＋H$^+$ | 先形成柠檬酰-CoA，再由硫酯水解推动 C—C 键形成；反应在细胞中远离平衡，但控制仍取决于草酰乙酸、乙酰-CoA、产物和整个网络 |
| 2　乌头酸酶（ACO2） | 柠檬酸 $\rightleftharpoons$ 顺乌头酸 $\rightleftharpoons$ 异柠檬酸 | [4Fe–4S] 簇协助先脱水再立体专一地加水；对称、前手性的柠檬酸因此生成特定立体异构的异柠檬酸 |
| 3　NAD$^+$ 依赖异柠檬酸脱氢酶（IDH3） | 异柠檬酸＋NAD$^+$ → $\alpha$-酮戊二酸＋CO$_2$＋NADH＋H$^+$ | 先氧化成草酰琥珀酸，再发生氧化脱羧；需 Mg$^{2+}$ 或 Mn$^{2+}$，在人类中受 ADP、ATP、NADH 和 Ca$^{2+}$ 等状态信号影响 |
| 4　$\alpha$-酮戊二酸脱氢酶复合体（OGDH） | $\alpha$-酮戊二酸＋CoA-SH＋NAD$^+$ → 琥珀酰-CoA＋CO$_2$＋NADH＋H$^+$ | 机制与 PDC 同源；NADH、琥珀酰-CoA形成产物抑制，Ca$^{2+}$ 可在高需求组织促进活性 |

柠檬酸合酶催化由乙酰-CoA 烯醇负离子进攻草酰乙酸的 Claisen 型 C—C 缩合。氟乙酸先被代谢成氟乙酰-CoA，再由柠檬酸合酶生成氟代柠檬酸；特定氟代柠檬酸异构体经乌头酸酶反应后形成紧密结合产物，阻断该酶。[^fluorocitrate]

人类线粒体另有 NADP$^+$ 依赖的 IDH2，胞质和过氧化物酶体有 IDH1。IDH1／2 可在氧化脱羧与还原羧化之间分配异柠檬酸、$\alpha$-酮戊二酸和 NADPH，参与还原力与合成碳流；经典产能循环的 NADH 生成步骤由 IDH3 承担。把“NAD(P)$^+$ 依赖 IDH”合写成一个可互换反应，会掩盖辅酶、区室和生理方向的差别。[^idh-isoforms]

### 从琥珀酰-CoA 再生草酰乙酸 { #succinyl-coa-to-oxaloacetate }

| 步骤与酶 | 净反应 | 化学与调节要点 |
| --- | --- | --- |
| 5　琥珀酰-CoA 合成酶（SUCL） | 琥珀酰-CoA＋NDP＋P$_i$ $\rightleftharpoons$ 琥珀酸＋NTP＋CoA-SH | 硫酯自由能经酶上磷酸组氨酸中间体生成 GTP 或 ATP，是循环内的底物水平磷酸化 |
| 6　琥珀酸脱氢酶（SDH／复合物 II） | 琥珀酸＋Q $\rightleftharpoons$ 延胡索酸＋QH$_2$ | SDHA 上共价结合的 FAD 先接受电子，电子再经 Fe–S 中心流向 Q；不向基质释放游离 FADH$_2$，也不泵质子 |
| 7　延胡索酸酶（FH） | 延胡索酸＋H$_2$O $\rightleftharpoons$ L-苹果酸 | 对称的延胡索酸被立体专一地水合，只形成 L-苹果酸；反应接近平衡 |
| 8　苹果酸脱氢酶（MDH2） | L-苹果酸＋NAD$^+$ $\rightleftharpoons$ 草酰乙酸＋NADH＋H$^+$ | 标准条件下氧化方向很不利，但基质中草酰乙酸浓度低且被柠檬酸合酶持续消耗，质量作用牵引净通量 |

人类 SUCL 由共同的 SUCLG1 $\alpha$ 亚基与两种 $\beta$ 亚基组合：SUCLA2 偏向 ADP／ATP，SUCLG2 偏向 GDP／GTP，组织表达决定两种产物的比例。动物、植物和微生物都可具有 ADP 或 GDP 偏好的 SUCL，实际产物由亚基组成和组织表达决定。[^sucl-isoforms]

SDH 的 FADH$_2$ 是酶催化循环中的还原态辅基，随后立即把电子传给酶内 Fe–S 中心和 Q。把它画成一分子游离 FADH$_2$ 从循环离开、再返回复合物 II，会与复合物的真实电子路径矛盾。丙二酸可在体外作为琥珀酸的竞争性类似物抑制 SDH，但效应仍取决于浓度、底物和膜体系。[^sdh-bound-fad]

## 循环计量与通量控制 { #tca-stoichiometry-control }

### 每轮循环的物质与能量计量 { #cycle-stoichiometry }

以人类 GDP 依赖的 SUCL 和辅酶 Q 直接记电子，常用净反应写作

$$
\begin{gathered}
\text{乙酰-CoA}+3\mathrm{NAD^+}+\mathrm{Q}\\
{}+\mathrm{GDP}+\mathrm{P_i}+2\mathrm{H_2O}\\
\longrightarrow 2\mathrm{CO_2}+\mathrm{CoA-SH}\\
{}+3\mathrm{NADH}+3\mathrm{H^+}+\mathrm{QH_2}+\mathrm{GTP}.
\end{gathered}
$$

若组织使用 ADP 依赖 SUCL，式中的 GDP／GTP 换成 ADP／ATP。按常用 P/O 近似，3 NADH 约对应 7.5 ATP，一对由 SDH 送入 Q 的电子约对应 1.5 ATP，再加 1 个 GTP 或 ATP，总计约 10 个 ATP 当量／乙酰-CoA。PDC 每个丙酮酸另生成 1 NADH，所以从丙酮酸算约 12.5；从葡萄糖彻底氧化算约 30 或 32。它们都是以约 2.5 和 1.5 的 P/O 比、特定穿梭和完整耦联为前提的理论账本，不是每个细胞兑现的固定产量。[^tca-stoichiometry]

一轮确实释放两分子 CO$_2$，但第一轮释放的通常是随草酰乙酸进入的碳，而不是刚加入的两个乙酰碳。琥珀酸的对称性又会使碳标记在后续轮次重新分配。因此“每轮净氧化一个乙酰基”是跨多轮的总体化学结论；解释 $^{13}$C 标记时必须追踪具体碳位、轮次以及丙酮酸同时经 PDC 和丙酮酸羧化酶进入的可能性。[^tca-carbon-tracing]

### 三羧酸循环的通量控制 { #distributed-control }

草酰乙酸与乙酰-CoA 的供应、基质 NAD$^+$／NADH、Q／QH$_2$、ADP／ATP、Ca$^{2+}$、呼吸链能力以及中间物的抽取和补充共同决定通量。PDC、柠檬酸合酶、IDH3 和 OGDH 常贡献较多控制，控制系数则随组织和状态在多个节点间重新分布。[^tca-control]

NADH 与琥珀酰-CoA 对上游脱氢酶形成产物反馈，ATP 丰富时多处通量下降；ADP 增多既促进氧化磷酸化，也能激活 IDH3 等节点。工作肌中 Ca$^{2+}$ 同时通过 PDP1 激活 PDC，并促进 IDH3 与 OGDH，使底物氧化与收缩需求耦联。OGDH 的谷胱甘肽化等氧化还原修饰应理解为特定应激条件下的可逆调节，而非每次循环固定发生的一步。

“短跑只用 ATP／磷酸肌酸，中跑只用糖酵解，长跑才用三羧酸循环”把重叠供能系统误写成接力赛。三套系统从运动开始便同时贡献，只是相对比例随强度、持续时间、训练状态、肌纤维和供氧改变；运动生理和定量时间过程留到[骨骼肌生理](../physiology/muscle.md)展开。

## 中间物收支与通路多样性 { #tca-pool-balance }

### 中间物抽取与合成代谢 { #cataplerosis }

| 被抽取的中间物 | 主要承接方向 | 碳流后果 |
| --- | --- | --- |
| 柠檬酸 | 输出到胞质后由 ATP 柠檬酸裂解酶生成乙酰-CoA，用于脂肪酸和胆固醇合成 | 同时带走乙酰碳和草酰乙酸来源的碳；需由苹果酸／丙酮酸等路径闭合碳流 |
| $\alpha$-酮戊二酸 | 与谷氨酸互变，连接多种氨基酸、含氮化合物与氧化还原代谢 | 大量用于合成时会降低循环中间物池，需要补充碳进入 |
| 琥珀酰-CoA | 血红素等卟啉合成，也接收丙酰-CoA来源的碳 | 兼具硫酯能量与四碳骨架，抽取会绕开后续 SDH—MDH 段 |
| 草酰乙酸／苹果酸 | 转氨生成天冬氨酸、进入核苷酸合成，或转向糖异生与穿梭 | 既可输出合成碳，也可在不同区室间搬运还原当量 |

这种离开循环的净流量称为抽补输出（cataplerosis）。中间物可在较低稳态浓度下维持较大的生成与抽取通量。柠檬酸对 PFK-1、乙酰-CoA 羧化酶等酶的调节，也让中间物同时承担碳载体与状态信号，相关脂质合成细节见[脂质生物合成](lipid_synthesis.md)。

### 填补反应与中间物池 { #anaplerosis }

补充循环中间物的净反应称为填补反应（anaplerosis）。哺乳动物最重要的入口之一是丙酮酸羧化酶：它用 ATP 与 HCO$_3^-$，借助生物素把丙酮酸变成草酰乙酸，并受乙酰-CoA 变构激活。乙酰-CoA 本身不能在动物中净生成草酰乙酸；当乙酰-CoA 丰富而草酰乙酸不足时，激活丙酮酸羧化正好增加其受体。[^anaplerosis]

奇数链脂肪酸以及缬氨酸、异亮氨酸、蛋氨酸和苏氨酸等可经丙酰-CoA、甲基丙二酰-CoA生成琥珀酰-CoA；谷氨酸和谷氨酰胺可补入 $\alpha$-酮戊二酸；天冬氨酸转氨可补入草酰乙酸。反之，苹果酸脱氢酶只在苹果酸与草酰乙酸之间互变，若没有新的碳进入，不能单独增加循环中间物总量。

植物、真菌和一些细菌可用乙醛酸循环绕过两次脱羧，把多份乙酰-CoA 转成可供合成的四碳化合物；动物缺少异柠檬酸裂解酶和苹果酸合酶，不能完成这种净转换。该旁路与寡糖代谢在[乙醛酸循环与寡糖代谢](other_glc_pathway.md)中展开。填补与抽取必须成对理解：只谈“循环既分解又合成”而不记中间物池的收支，无法判断通量能否持续。[^anaplerosis-cataplerosis]

### 三羧酸循环的生物多样性 { #cycle-diversity }

许多细菌和古菌缺少人类循环中的某些酶，可能用不同酶家族替代，或只保留氧化支、还原支来供应前体；一些厌氧和自养生物还沿还原性三羧酸循环的方向固定 CO$_2$。琥珀酸脱氢酶与延胡索酸还原酶之间的亲缘和方向选择，也显示电子受体条件可重塑这段通路。NCBI COG 的通路清单列出了柠檬酸合酶、不同乌头酸酶、IDH、OGDH／替代氧化还原酶、SUCL、SDH／延胡索酸还原酶和两类延胡索酸酶等多种实现。[^tca-diversity]

人类线粒体的八步循环是理解氧化代谢的清晰主干。微生物 TCA 结构的判定还需要结合基因同源性、酶活、培养底物、电子受体和同位素通量。

## 参考资料与延伸阅读

- Reactome, [Citric acid cycle (TCA cycle)](https://reactome.org/content/detail/R-HSA-71403)；[Regulation of pyruvate dehydrogenase complex](https://reactome.org/content/detail/R-HSA-204174)。
- Alberts, B. et al., [How Cells Obtain Energy from Food](https://www.ncbi.nlm.nih.gov/books/NBK26882/). *Molecular Biology of the Cell*。
- Arnold, P. K. & Finley, L. W. S., [Regulation and function of the mammalian tricarboxylic acid cycle](https://pubmed.ncbi.nlm.nih.gov/36581208/). *Journal of Biological Chemistry*, 2023。
- Patel, M. S. & Korotchkina, L. G., [Regulation of the pyruvate dehydrogenase complex](https://pubmed.ncbi.nlm.nih.gov/16545080/). *Biochemical Society Transactions*, 2006。
- Owen, O. E., Kalhan, S. C. & Hanson, R. W., [The key role of anaplerosis and cataplerosis for citric acid cycle function](https://pubmed.ncbi.nlm.nih.gov/12087111/). *Journal of Biological Chemistry*, 2002。
- NCBI COG, [TCA cycle](https://www.ncbi.nlm.nih.gov/research/cog/pathway/TCA%20cycle/)。

[^tca-overview]: 人类八步反应与产物据 Reactome [Citric acid cycle (TCA cycle)](https://reactome.org/content/detail/R-HSA-71403)；1937 年发现的历史背景参见 NCBI Bookshelf [How Cells Obtain Energy from Food](https://www.ncbi.nlm.nih.gov/books/NBK26882/)。
[^reactome-tca]: 人类通路的区室、反应与 SUCLA2／SUCLG2、IDH2／IDH3 并行注释，见 Reactome [R-HSA-71403](https://reactome.org/content/detail/R-HSA-71403)。
[^pdh-complex]: PDC 组成、E1—E2—E3 反应链与人复合体记录见 Reactome [PDH complex](https://reactome.org/content/detail/R-HSA-70070)；结构组织参见 [The remarkable structural and functional organization of the eukaryotic pyruvate dehydrogenase complexes](https://pubmed.ncbi.nlm.nih.gov/11752427/)。
[^pdh-regulation]: PDK1–4 磷酸化失活与 PDP1／2 去磷酸化激活据 Reactome [Regulation of pyruvate dehydrogenase complex](https://reactome.org/content/detail/R-HSA-204174)；同工型和代谢物调节参见 [Regulation of the pyruvate dehydrogenase complex](https://pubmed.ncbi.nlm.nih.gov/16545080/)。
[^arsenite-pdh]: 亚砷酸盐与邻位二巯基及 PDC 抑制的实验依据，见 [Reactive oxygen species are involved in arsenic trioxide inhibition of pyruvate dehydrogenase activity](https://pubmed.ncbi.nlm.nih.gov/12641442/)。
[^fluorocitrate]: 氟代柠檬酸经乌头酸酶形成紧密结合抑制产物的机制与结构，见 [The reaction of fluorocitrate with aconitase and the crystal structure of the enzyme-inhibitor complex](https://pubmed.ncbi.nlm.nih.gov/8942997/)。
[^idh-isoforms]: IDH3 生成 NADH 并属于经典 TCA 主线、IDH1／2 使用 NADP(H) 且可参与还原羧化，见 [Metabolic adaptations in cancers expressing isocitrate dehydrogenase mutations](https://pubmed.ncbi.nlm.nih.gov/35028610/)及 Reactome [R-HSA-71403](https://reactome.org/content/detail/R-HSA-71403)。
[^sucl-isoforms]: SUCLA2 与 SUCLG2 分别偏向 ATP、GTP 生成及其组织补偿证据，见[两种小鼠模型研究](https://pubmed.ncbi.nlm.nih.gov/27496549/)；人类两种反应均由 Reactome 通路记录。
[^sdh-bound-fad]: SDHA 共价结合 FAD、电子经复合物 II 传至 Q 而非释放游离 FADH$_2$，参见 [Complex II ambiguities—FADH$_2$ in the electron transfer system](https://pubmed.ncbi.nlm.nih.gov/38118236/)和本站[电子传递与氧化磷酸化](oxp.md#complexes-i-ii)。
[^tca-stoichiometry]: 每轮的 3 NADH、QH$_2$、NTP 与两分子 CO$_2$ 账本据 Reactome [R-HSA-71403](https://reactome.org/content/detail/R-HSA-71403)和 NCBI Bookshelf [How Cells Obtain Energy from Food](https://www.ncbi.nlm.nih.gov/books/NBK26882/)；P/O 比的条件边界见本站[电子传递与氧化磷酸化](oxp.md#proton-and-po-ratios)。
[^tca-carbon-tracing]: 乙酰碳、草酰乙酸碳与丙酮酸双入口在多轮循环中的同位素分配，参见 [Integrated, step-wise, mass-isotopomeric flux analysis of the TCA cycle](https://pmc.ncbi.nlm.nih.gov/articles/PMC4635072/)。
[^tca-control]: 多节点、底物与产物共同控制的现代综述见 [Regulation and function of the mammalian tricarboxylic acid cycle](https://pubmed.ncbi.nlm.nih.gov/36581208/)；Ca$^{2+}$ 对 PDP1、IDH3 和 OGDH 的连接见 [The mitochondrial Ca$^{2+}$ uptake and the fine-tuning of aerobic metabolism](https://pubmed.ncbi.nlm.nih.gov/33117189/)。
[^anaplerosis]: 丙酮酸羧化酶的生物素、HCO$_3^-$、MgATP 与乙酰-CoA 调节，见 [Structure, mechanism and regulation of pyruvate carboxylase](https://pubmed.ncbi.nlm.nih.gov/18613815/)。
[^anaplerosis-cataplerosis]: 填补与抽补输出必须平衡的概念框架，见 Owen 等 [The key role of anaplerosis and cataplerosis for citric acid cycle function](https://pubmed.ncbi.nlm.nih.gov/12087111/)。
[^tca-diversity]: 原核生物 TCA 酶家族与替代方案见 NCBI COG [TCA cycle](https://www.ncbi.nlm.nih.gov/research/cog/pathway/TCA%20cycle/)；缺环与分支功能的实例见 NCBI Bookshelf [The citric acid cycle and fatty acid biosynthesis in *Helicobacter pylori*](https://www.ncbi.nlm.nih.gov/books/NBK2413/)。
