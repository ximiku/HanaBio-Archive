# 糖酵解

糖酵解是把一分子葡萄糖转成两分子丙酮酸的胞质反应序列。它先用三磷酸腺苷（adenosine triphosphate，ATP）把六碳糖活化，再把六碳骨架裂成两份三碳单位，最后以底物水平磷酸化回收 ATP，并把甘油醛-3-磷酸的电子交给氧化型烟酰胺腺嘌呤二核苷酸（NAD$^+$），形成还原型 NADH。这十步既是许多生物获取能量的古老主干，也是合成氨基酸、脂质和核苷酸时调取碳骨架的交通枢纽。[^glycolysis-overview]

下文以人和其他真核生物的经典 Embden–Meyerhof–Parnas（EMP）途径为主。反应的自由能与偶联语言见[生物能学](bioenergetics.md)，胞质 NADH 如何把电子送入线粒体见[电子传递与氧化磷酸化](oxp.md)，丙酮酸的氧化则在[三羧酸循环](tca_cycle.md)继续。

## 经典 EMP 反应主线 { #glycolytic-pathway }

### 糖酵解与氧的关系 { #oxygen-independent-core }

经典糖酵解的十步都发生在胞质，反应式中没有 O$_2$。“有氧”与“无氧”的差别出现在胞质 NADH 和丙酮酸的后续去路：线粒体呼吸可再氧化胞质还原当量，乳酸或乙醇发酵则在胞质中把 NADH 的电子还给有机分子。只要 NAD$^+$ 得不到再生，第六步便会因氧化型辅酶不足而停止。

成熟哺乳动物红细胞没有线粒体，ATP 因而全部依赖糖酵解；快速收缩的骨骼肌可在供氧与线粒体氧化一时跟不上 ATP 需求时提高乳酸生成。视网膜、睾丸和某些肿瘤也可能具有很高的糖酵解通量，其中许多细胞仍保留线粒体氧化并同时利用两套产能系统。底物能否到达胞质还受葡萄糖转运体的表达、定位和激素调节影响，具体膜运输与组织差异分别见[膜运输](../cell/membrane_transport.md)和[胰岛内分泌](../physiology/endo/endo_islet.md)。

### 投资阶段的碳骨架重排 { #investment-phase }

前五步消耗两分子 ATP。两次磷酸化既提高糖的反应性，也使带负电的糖磷酸不易自由穿过质膜；异构化把羰基移到 C2，随后在 C3—C4 之间裂解，恰好得到两个可相互转化的三碳磷酸。

| 步骤与酶 | 净反应 | 碳流与能量意义 |
| --- | --- | --- |
| 1　己糖激酶（hexokinase，HK）或葡糖激酶（glucokinase，GCK） | 葡萄糖＋ATP → 葡萄糖-6-磷酸（glucose 6-phosphate，G6P）＋二磷酸腺苷（ADP）＋H$^+$ | 消耗第 1 个 ATP，把葡萄糖捕获为 G6P；G6P 仍可流向糖原和磷酸戊糖途径 |
| 2　葡萄糖-6-磷酸异构酶（glucose-6-phosphate isomerase，GPI） | G6P $\rightleftharpoons$ 果糖-6-磷酸（fructose 6-phosphate，F6P） | 醛糖变酮糖，为对称裂解安排羰基位置 |
| 3　磷酸果糖激酶-1（phosphofructokinase-1，PFK-1） | F6P＋ATP → 果糖-1,6-二磷酸（fructose 1,6-bisphosphate，F1,6BP）＋ADP＋H$^+$ | 消耗第 2 个 ATP；在许多细胞中是进入糖酵解主干的主要承诺与调控步骤 |
| 4　醛缩酶（aldolase） | F1,6BP $\rightleftharpoons$ 二羟丙酮磷酸（dihydroxyacetone phosphate，DHAP）＋甘油醛-3-磷酸（glyceraldehyde 3-phosphate，GAP） | 一分子六碳糖生成一分子 DHAP 和一分子 GAP |
| 5　丙糖磷酸异构酶（triosephosphate isomerase，TPI） | DHAP $\rightleftharpoons$ GAP | 后续步骤持续消耗 GAP，从而牵引 DHAP 转化；每分子葡萄糖最终有两分子 GAP 进入回收阶段 |

这些反应的化学计量中，ATP 把末端磷酰基直接转给糖，产物不会额外释放无机磷酸（P$_i$）。TPI 在适宜体外条件下的催化效率可接近扩散控制，而细胞中的净方向与通量主要由底物浓度、接近平衡的质量作用和下游消耗共同决定。

### 回收阶段的能量保存 { #payoff-phase }

后三碳阶段每分子葡萄糖运行两遍。第六步先把醛氧化为羧酸，同时以酰基磷酸保存部分自由能；第七步和第十步各进行一次底物水平磷酸化。这里的 ATP 直接由高转移势中间体生成，不依赖膜、氧或 ATP 合酶。

| 步骤与酶 | 每一分子 GAP 的净反应 | 碳流与能量意义 |
| --- | --- | --- |
| 6　甘油醛-3-磷酸脱氢酶（glyceraldehyde-3-phosphate dehydrogenase，GAPDH） | GAP＋P$_i$＋NAD$^+$ $\rightleftharpoons$ 1,3-二磷酸甘油酸（1,3-bisphosphoglycerate，1,3-BPG）＋NADH＋H$^+$ | 氧化醛基并引入无机磷酸，不消耗 ATP；每葡萄糖生成 2 NADH |
| 7　磷酸甘油酸激酶（phosphoglycerate kinase，PGK） | 1,3-BPG＋ADP $\rightleftharpoons$ 3-磷酸甘油酸（3-phosphoglycerate，3PG）＋ATP | 第一次底物水平磷酸化，先收回投资的 2 ATP |
| 8　磷酸甘油酸变位酶（phosphoglycerate mutase，PGAM） | 3PG $\rightleftharpoons$ 2-磷酸甘油酸（2-phosphoglycerate，2PG） | 把磷酸基从 C3 移到 C2；哺乳动物的辅因子依赖型 PGAM 以少量 2,3-二磷酸甘油酸（2,3-BPG）建立催化性磷酸化中间态 |
| 9　烯醇化酶（enolase） | 2PG $\rightleftharpoons$ 磷酸烯醇式丙酮酸（phosphoenolpyruvate，PEP）＋H$_2$O | 脱水形成高磷酰基转移势的 PEP |
| 10　丙酮酸激酶（pyruvate kinase，PK） | PEP＋ADP＋H$^+$ → 丙酮酸＋ATP | 第二次底物水平磷酸化；烯醇式丙酮酸随后自发互变为稳定的酮式，推动反应向前 |

按一分子葡萄糖汇总，经典净反应可写为

$$
\begin{gathered}
\text{葡萄糖}+2\mathrm{ADP}+2\mathrm{P_i}+2\mathrm{NAD^+}\\
\longrightarrow 2\text{丙酮酸}+2\mathrm{ATP}\\
{}+2\mathrm{NADH}+2\mathrm{H^+}+2\mathrm{H_2O}.
\end{gathered}
$$

因此总生成 4 ATP、前段消耗 2 ATP，净得 2 ATP；另生成 2 NADH。质子和水的写法会随采用的离子化状态与生化标准转化约定略有不同，但碳、磷酰基和电子账本不变。若起点是糖原释放的葡萄糖-1-磷酸，转为 G6P 后绕过第一个 ATP 投资，净 ATP 收益会比游离葡萄糖多一分子；具体动员机制见[糖原合成与分解](glycogen.md)。

## 糖酵解的通量调节 { #glycolytic-regulation }

### 远离平衡步骤与通量调节 { #nonequilibrium-control }

GPI、醛缩酶、TPI、GAPDH、PGK、PGAM 和烯醇化酶在许多细胞条件下接近平衡，净方向容易随反应物和产物比改变。HK／GCK、PFK-1 和 PK 三步通常具有较大的负 $\Delta_rG$，在生理条件下远离平衡；糖异生不能简单把它们倒转，而要使用不同酶绕行。这里的“不可逆”是对细胞净通量的热力学描述，不是说酶在任何条件下都绝不催化逆反应。

三个远离平衡步骤都是重要调节点。通量控制分布在转运、多个酶和下游 NAD$^+$ 再生之间，并随营养、激素、缺氧和细胞类型重新分配。腺苷酸激酶维持 $2\mathrm{ADP}\rightleftharpoons\mathrm{ATP}+\mathrm{AMP}$；ATP 轻微下降时，一磷酸腺苷（adenosine monophosphate，AMP）的相对变化可被放大，使 AMP 成为能量不足的敏感信号之一，但它仍需与其他效应物和激素信号合并解释。

#### 己糖激酶与葡糖激酶的组织调节 { #hexokinase-glucokinase }

哺乳动物 HK I–III 对葡萄糖亲和力较高，许多同工型受产物 G6P 抑制，适合在低至中等葡萄糖浓度下维持基础磷酸化。HK IV 通常称葡糖激酶；它对葡萄糖的表观亲和力较低、容量较高，不受 G6P 直接反馈抑制，并因缓慢构象转换表现出单体酶也可具有的 S 形动力学。肝细胞中的葡糖激酶调节蛋白（glucokinase regulatory protein，GKRP）可在低葡萄糖时促进酶进入细胞核，高葡萄糖则促使其释放并转到胞质；胰岛 β 细胞缺少同等的 GKRP 依赖性核内扣留机制。[^glucokinase-regulation]

G6P 是糖原合成、磷酸戊糖途径和糖酵解共享的分支点，所以第一步属于多条路线共用的入口。HK 和 GCK 的表达量、底物供给与产物反馈仍可能成为特定状态下的通量控制因素。

#### PFK-1 的变构与激素调节 { #pfk1-regulation }

PFK-1 同时把 ATP 当作反应底物和能量充足时的变构抑制信号。AMP、ADP 和果糖-2,6-二磷酸（fructose 2,6-bisphosphate，F2,6BP）可缓解 ATP 抑制；柠檬酸提示线粒体碳流与能量供应充足，低 pH 对肌肉等组织的 PFK-1 也有抑制作用。效应物强度和酶亚型随组织而变，因此调节图表示的是条件依赖的响应，而非固定开关。

F2,6BP 是位于十步主干之外的调节分子，可强效变构激活 PFK-1，同时抑制果糖-1,6-二磷酸酶 1（fructose-1,6-bisphosphatase 1，FBPase-1）。它由具有 6-磷酸果糖-2-激酶和果糖-2,6-二磷酸酶活性的双功能蛋白 PFK-2/FBPase-2 合成和降解。以肝脏同工型为例，胰高血糖素经环磷酸腺苷（cyclic adenosine monophosphate，cAMP）和蛋白激酶 A（protein kinase A，PKA）促使双功能蛋白磷酸化，降低 PFK-2、提高 FBPase-2 活性，F2,6BP 随之下降；进食和胰岛素相关的去磷酸化使方向相反。心脏等组织使用不同同工型，磷酸化后果可能不同。F2,6BP 的发现把激素作用与 PFK-1／FBPase-1 的相反调节连接起来。[^fructose-26bisphosphate]

在灌流大鼠肝脏和离体酶体系中，葡萄糖代谢产生的木酮糖-5-磷酸可激活蛋白磷酸酶 2A（protein phosphatase 2A，PP2A），继而使 PFK-2/FBPase-2 去磷酸化并提高 F2,6BP。这一结果不能直接证明木酮糖-5-磷酸是其他组织或所有下游糖响应的通用信号；例如，关于糖类反应元件结合蛋白（carbohydrate-responsive element-binding protein，ChREBP）的研究还支持 G6P 等其他候选代谢物。[^xylulose-pp2a]

#### 丙酮酸激酶的前馈与组织调节 { #pyruvate-kinase-regulation }

F1,6BP 可前馈激活多种 PK 同工型，使上游碳流与最后一次底物水平磷酸化协调；ATP 和丙氨酸则可表示能量或合成原料充足。肝脏 L 型 PK 还能在禁食时被 PKA 磷酸化而降低活性，进食后的去磷酸化恢复活性。PEP 在这一反应中充当底物；各项变构和共价调节的组合取决于 PK 同工型及其所在组织。

ATP 参与的激酶反应通常实际识别 MgATP$^{2-}$ 或相关金属—核苷酸复合物，烯醇化酶也需要二价金属参与催化。把 HK、PFK-1、PGK、PK 和烯醇化酶统称为“需 Mg 酶”可提醒金属的重要性，却会掩盖每种酶结合金属、底物和水的方式不同。

### 糖酵解旁路与抑制剂 { #shunts-and-inhibitors }

红细胞可把 1,3-BPG 经双磷酸甘油酸变位酶（bisphosphoglycerate mutase，BPGM）转成 2,3-BPG，再由 2,3-BPG 磷酸酶生成 3PG，构成 Rapoport–Luebering 旁路。它绕过 PGK，因此牺牲一次本可生成 ATP 的机会，却产生调节血红蛋白氧亲和力的 2,3-BPG。PGAM 催化循环中所需的少量 2,3-BPG 与红细胞大量生成、用于氧运输调节的 2,3-BPG 应当区分；后者的生理作用见[血细胞](../physiology/blood/blood_cell.md)。[^rapoport-luebering]

几种经典抑制或旁路试剂也能定位能量保存的位置。砷酸根可在 GAPDH 步骤代替 P$_i$ 形成不稳定的砷酸酯，迅速水解成 3PG，于是绕过 PGK 并丢失该次 ATP 收益；其作用位置在底物水平磷酸化，而非跨膜质子梯度。碘乙酸可烷基化 GAPDH 的催化半胱氨酸，氟化物则在含 Mg$^{2+}$ 和磷酸盐的体系中抑制烯醇化酶。2-脱氧葡萄糖被 HK 磷酸化后难以继续正常代谢，其积累会影响糖酵解和糖基化等多个过程，属于代谢扰动剂而非 GPI 专一抑制剂。具体浓度、样品处理和读出须由[生化与分子检测](../exptech/biochem_molecular/spectroscopy_assays.md)中的实验体系确定。

!!! warning "兼职蛋白的身份判定"

    许多糖酵解酶还参与核糖核酸（ribonucleic acid，RNA）结合、膜组织或核内过程，GAPDH 就有多种经实验支持的非糖酵解作用。“兼职”描述同一蛋白在不同环境中的额外作用；GAPDH 与作用于脱氧核糖核酸（deoxyribonucleic acid，DNA）的尿嘧啶-DNA 糖基化酶（uracil-DNA glycosylase，UNG）仍是具有不同序列、结构和反应机制的蛋白质。[^gapdh-moonlighting]

## NAD$^+$ 再生与特殊碳流 { #glycolytic-fates }

### NAD$^+$ 再生与发酵 { #nad-regeneration }

乳酸脱氢酶（lactate dehydrogenase，LDH）催化

$$
\text{丙酮酸}+\mathrm{NADH}+\mathrm{H^+}
\rightleftharpoons \text{乳酸}+\mathrm{NAD^+}.
$$

这一步不生成额外 ATP，而以再生 NAD$^+$ 维持 GAPDH 周转。反应接近平衡，方向主要由丙酮酸／乳酸和 NADH／NAD$^+$ 比例以及产物移除决定。人类乳酸脱氢酶 A 与 B 亚基（LDHA、LDHB）可组成五种四聚体同工酶，组织分布和动力学存在偏向；各同工酶都能催化可逆反应，血清同工酶比例还受方法、组织损伤和个体状态影响。乳酸可被其他细胞摄取后氧化，或送往肝脏参与糖异生，因而也是组织间碳流的载体。[^lactate-dehydrogenase]

酵母、某些植物组织和部分微生物可先由丙酮酸脱羧酶把丙酮酸变成乙醛与 CO$_2$，再由醇脱氢酶用 NADH 还原乙醛，形成乙醇并再生 NAD$^+$。丙酮酸脱羧酶需要硫胺素二磷酸（thiamine diphosphate，ThDP）和 Mg$^{2+}$；醇脱氢酶的金属依赖随酶家族而异，其中一部分含 Zn。动物缺少这条经典丙酮酸脱羧发酵路线。

### 有氧糖酵解的碳流特征 { #warburg-effect }

许多增殖旺盛的肿瘤细胞即使有充足氧，也表现出高葡萄糖摄取和高乳酸排出，称为 Warburg 效应或有氧糖酵解。它描述碳流向乳酸及合成支路的偏移；不少肿瘤仍需要氧化磷酸化维持生物合成、膜电势和氧化还原平衡。高糖酵解可快速再生 NAD$^+$，并让上游中间物分流到核苷酸、氨基酸和脂质合成，但具体优势还取决于致癌信号、微环境和营养条件。[^warburg-effect]

乳酸浓度、氧耗或其中任一单项读数都只反映代谢的一部分。结合代谢物浓度、同位素碳流、氧耗、酸化和生物量合成，才能判断 ATP 来源并描述细胞怎样分配葡萄糖。

### 其他六碳糖的汇入途径 { #other-hexoses }

膳食果糖、半乳糖和甘露糖经各自的入口酶转成 F6P、G6P、DHAP 或 GAP 等中间物，随后汇入共同的糖酵解主干。入口差异会改变 ATP 投资、调控边界和遗传缺陷后果。

| 六碳糖 | 主要汇入路线 | 必须保留的边界 |
| --- | --- | --- |
| 果糖 | 许多肝外组织可由 HK 生成 F6P；肝、肾和小肠等组织常由果糖激酶生成果糖-1-磷酸，再经醛缩酶 B（aldolase B，ALDOB）产生 DHAP 与甘油醛，后者由三碳糖激酶生成 GAP | 肝路线绕过 PFK-1。遗传性果糖不耐受由 ALDOB 缺陷导致果糖-1-磷酸积累、磷酸与 ATP 再生受限，并抑制糖原分解和糖异生；这一遗传缺陷机制与健康人普通果糖摄入时的代谢反应属于不同情境[^hereditary-fructose-intolerance] |
| 半乳糖 | Leloir 途径中，半乳糖变旋酶（galactose mutarotase，GALM）先提供半乳糖激酶 1（galactokinase 1，GALK1）所需的 $\alpha$-D-半乳糖，GALK1 生成半乳糖-1-磷酸；半乳糖-1-磷酸尿苷酰转移酶（galactose-1-phosphate uridylyltransferase，GALT）以尿苷二磷酸（uridine diphosphate，UDP）葡萄糖为糖核苷酸供体，直接生成葡萄糖-1-磷酸（G1P）与 UDP-半乳糖；UDP-半乳糖 4′-差向异构酶（UDP-galactose 4′-epimerase，GALE）再把 UDP-半乳糖转为 UDP-葡萄糖，G1P 转成 G6P | 每轮由 GALT 直接生成 G1P；UDP-葡萄糖焦磷酸化酶负责糖核苷酸池的其他补充与平衡。经典半乳糖血症通常指 GALT 缺陷；GALK1、GALE 和 GALM 缺陷构成其他类型，半乳糖醇积累可参与晶状体损伤[^classic-galactosemia] |
| 甘露糖 | HK 生成甘露糖-6-磷酸，磷酸甘露糖异构酶再转成 F6P | 该反应也连接糖蛋白前体合成；进入糖酵解只是甘露糖-6-磷酸的一种去路 |

果糖形成的甘油醛还可被还原为甘油，甘油经甘油激酶与甘油-3-磷酸脱氢酶连接脂质和 DHAP 代谢。这些支路的通量取决于组织、酶表达和营养状态，通常与主入口具有不同权重。

### 古菌糖酵解的多样性 { #archaeal-variants }

古菌糖分解具有多种酶系和能量账本。不同古菌可使用 ATP、焦磷酸（PP$_i$）或 ADP 依赖的己糖／磷酸果糖激酶，也可用非磷酸化 GAP 脱氢酶，或把电子交给铁氧还蛋白。某些超嗜热古菌的 ADP 依赖激酶仍能构成改造的 EMP 主干，另一些物种则采用不同入口和能量保存步骤。ATP 与还原当量需要按具体物种的反应逐条计数。[^archaeal-glycolysis]

十步 EMP 为比较糖分解提供参照骨架，古菌变体则展示了磷酸供体、氧化还原受体和能量保存步骤的可替换性。比较代谢途径时，应先确认这些化学要素与底物特异性，再讨论同源关系与能量产额。

## 参考资料与延伸阅读

- Reactome, [Glycolysis](https://reactome.org/content/detail/R-HSA-70171)。
- Alberts, B. et al., [How Cells Obtain Energy from Food](https://www.ncbi.nlm.nih.gov/books/NBK26882/). *Molecular Biology of the Cell*。
- Cooper, G. M., [Metabolic Energy](https://www.ncbi.nlm.nih.gov/books/NBK9903/). *The Cell: A Molecular Approach*。
- Van Schaftingen, E. et al., [Fructose 2,6-bisphosphate, a new key intermediate in the hormonal regulation of glycolysis in liver](https://pubmed.ncbi.nlm.nih.gov/6453589/). *Biochemical and Biophysical Research Communications*, 1980。
- Kabashima, T. et al., [Xylulose 5-phosphate mediates glucose-induced lipogenesis by xylulose 5-phosphate-activated protein phosphatase in rat liver](https://pmc.ncbi.nlm.nih.gov/articles/PMC154306/). *PNAS*, 2003。
- GeneReviews, [Hereditary Fructose Intolerance](https://www.ncbi.nlm.nih.gov/books/NBK333439/)；[Classic Galactosemia and Clinical Variant Galactosemia](https://www.ncbi.nlm.nih.gov/books/NBK1518/)。
- Verhees, C. H. et al., [The unique features of glycolytic pathways in Archaea](https://pmc.ncbi.nlm.nih.gov/articles/PMC1223704/). *Biochemical Journal*, 2003。

[^glycolysis-overview]: 总反应、胞质定位和人类反应事件据 Reactome [Glycolysis](https://reactome.org/content/detail/R-HSA-70171)；能量与碳流框架另参见 NCBI Bookshelf [How Cells Obtain Energy from Food](https://www.ncbi.nlm.nih.gov/books/NBK26882/)。
[^glucokinase-regulation]: 肝细胞葡糖激酶在高葡萄糖下从 GKRP 解离并转向胞质的调控证据，见[大鼠肝细胞的葡糖激酶转位研究](https://pubmed.ncbi.nlm.nih.gov/24566088/)；组织表达与动力学边界另参见综述 [Molecular and cellular regulation of human glucokinase](https://pubmed.ncbi.nlm.nih.gov/30641049/)。
[^fructose-26bisphosphate]: F2,6BP 的鉴定及其肝脏激素调节意义，见 Van Schaftingen 等的[原始论文](https://pubmed.ncbi.nlm.nih.gov/6453589/)；其激活 PFK-1 的早期动力学证据见[同期研究](https://pubmed.ncbi.nlm.nih.gov/6451625/)。
[^xylulose-pp2a]: 木酮糖-5-磷酸调节肝脏 PFK-2/FBPase-2 的证据见灌流大鼠肝脏研究 [Glucose-stimulated synthesis of fructose 2,6-bisphosphate in rat liver](https://pubmed.ncbi.nlm.nih.gov/7929321/)；Kabashima 等的[原始论文](https://pmc.ncbi.nlm.nih.gov/articles/PMC154306/)进一步研究 PP2A 与脂质生成转录。关于 ChREBP 激活代谢物的后续证据边界见 [Glucose-6-phosphate mediates activation of the carbohydrate responsive binding protein](https://pmc.ncbi.nlm.nih.gov/articles/PMC2874883/)。
[^rapoport-luebering]: BPGM 与 2,3-BPG 旁路的生化背景及另一种磷酸酶活性，见 [Dephosphorylation of 2,3-bisphosphoglycerate by MIPP expands the regulatory capacity of the Rapoport–Luebering glycolytic shunt](https://pubmed.ncbi.nlm.nih.gov/18413611/)；缺氧条件下 BPGM 调控的实验研究见[高海拔缺氧适应研究](https://pubmed.ncbi.nlm.nih.gov/27482003/)。
[^gapdh-moonlighting]: 蛋白质身份与已注释功能可分别核对 UniProt 的 [GAPDH（P04406）](https://www.uniprot.org/uniprotkb/P04406/entry)和 [UNG（P13051）](https://www.uniprot.org/uniprotkb/P13051/entry)。
[^lactate-dehydrogenase]: 人 LDH 亚基与催化反应见 UniProt [LDHA（P00338）](https://www.uniprot.org/uniprotkb/P00338/entry)和 [LDHB（P07195）](https://www.uniprot.org/uniprotkb/P07195/entry)；细胞内蛋白环境会改变由纯化酶动力学推演的方向偏向，参见[经典实验](https://pubmed.ncbi.nlm.nih.gov/4316548/)。
[^warburg-effect]: 美国国家癌症研究所对有氧糖酵解、乳酸碳流及线粒体仍可保持功能的说明，见 [New Clarity on the Warburg Effect](https://www.cancer.gov/research/key-initiatives/ras/news-events/dialogue-blog/2021/vander-heiden-warburg-effect)。
[^hereditary-fructose-intolerance]: ALDOB 缺陷、果糖-1-磷酸积累及 ATP 再生受限的临床生化边界，见 GeneReviews [Hereditary Fructose Intolerance](https://www.ncbi.nlm.nih.gov/books/NBK333439/)。
[^classic-galactosemia]: Leloir 途径的 GALM、GALK1、GALT、GALE 顺序及净产物见 Reactome [Galactose catabolism](https://reactome.org/content/detail/R-HSA-70370)；GALT 缺陷的经典半乳糖血症及 GALK1、GALE、GALM 相关类型见 GeneReviews [Classic Galactosemia and Clinical Variant Galactosemia](https://www.ncbi.nlm.nih.gov/books/NBK1518/)。
[^archaeal-glycolysis]: 古菌糖酵解的 ATP／ADP／PP$_i$ 依赖变体和非磷酸化氧化步骤综述于 [Verhees et al., 2003](https://pmc.ncbi.nlm.nih.gov/articles/PMC1223704/)及 [Bräsen et al., 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC3957730/)；*Pyrococcus furiosus* 的 ADP 依赖型 PFK 见[原始研究](https://pubmed.ncbi.nlm.nih.gov/10409652/)，*Archaeoglobus fulgidus* 的改造 EMP 见[代谢研究](https://pubmed.ncbi.nlm.nih.gov/11702074/)。
