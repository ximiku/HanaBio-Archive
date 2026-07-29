# 糖异生

糖异生是以乳酸、甘油和生糖氨基酸等非糖前体合成葡萄糖的过程。它与[糖酵解](emp.md)共用七个接近平衡的反应；己糖激酶／葡糖激酶、磷酸果糖激酶-1（PFK-1）和丙酮酸激酶所催化的三个远离平衡步骤，则由四种糖异生酶分三段绕行。每段旁路都要付出能量或水解磷酸酯，因而使净合成在热力学上可行。[^gluconeogenesis-overview]

在哺乳动物中，糖异生首先维持禁食期的血糖供应，使成熟红细胞等高度依赖葡萄糖的组织仍有底物可用；它也把不同器官输出的乳酸、甘油和含氮碳骨架重新纳入全身代谢。这个过程与[糖原合成与分解](glycogen.md)在时间上重叠：餐后血糖主要来自吸收，短期禁食先有较多肝糖原分解，禁食延长后糖异生的相对贡献上升，两条通路在相当长的阶段共同维持血糖。

## 糖异生的生理范围 { #gluconeogenesis-physiology }

### 肝、肾的糖异生与血糖输出 { #organs-and-purpose }

肝脏是餐后吸收结束后维持血糖的主要器官，肾皮质近端小管也能进行完整糖异生；随禁食延长或酸负荷增加，肾脏贡献可以上升。小肠在特定营养和禁食状态下也可参与，但其定量贡献依物种、实验方法和生理条件而变。[^organ-contribution]

许多细胞能够从乳酸或氨基酸生成丙酮酸、草酰乙酸、磷酸烯醇式丙酮酸（PEP），甚至葡萄糖-6-磷酸（G6P）；完整血糖输出则主要依赖肝和肾皮质的终末酶系。骨骼肌缺少足以完成血糖输出的葡萄糖-6-磷酸酶系统，肌糖原产生的 G6P 因而留在肌细胞中供糖酵解或其他支路使用。判断一个组织是否“进行糖异生”，需要区分局部合成中间物、合成 G6P 与完成净葡萄糖输出三个层次。

### 糖异生前体及其代谢入口 { #precursor-entry }

糖异生前体的判定标准，是其碳能进入丙酮酸、三羧酸循环中间物或丙糖磷酸，并在扣除脱羧损失后形成通向葡萄糖的净碳流。不同前体从不同节点进入，所需的区室转运、还原力和脱氮步骤也不同。

| 前体 | 主要入口 | 必须保留的碳流边界 |
| --- | --- | --- |
| 乳酸 | 乳酸脱氢酶生成丙酮酸，同时在胞质生成 NADH | 来自红细胞和活动肌等组织；生成的胞质 NADH正好可供糖异生主干使用 |
| 丙氨酸及其他生糖氨基酸 | 丙氨酸转氨生成丙酮酸；其他氨基酸可形成草酰乙酸、$\alpha$-酮戊二酸、琥珀酰-CoA或延胡索酸 | 氮需要经转氨、尿素合成或肾脏铵排泄处理；亮氨酸和赖氨酸是纯生酮氨基酸，不能净生成葡萄糖 |
| 甘油 | 甘油激酶生成甘油-3-磷酸，再氧化成二羟丙酮磷酸（DHAP） | 甘油骨架可形成 DHAP；脂肪酸碳则主要以乙酰-CoA进入后续代谢 |
| 丙酸及奇数链脂肪酸末端三碳 | 丙酰-CoA经甲基丙二酰-CoA形成琥珀酰-CoA | 进入[三羧酸循环](tca_cycle.md)后可转为草酰乙酸；这是奇数链脂肪酸具有生糖碳的原因 |
| 三羧酸循环中间物 | 经苹果酸、草酰乙酸等汇入 PEP | 净抽取必须由其他填补反应补偿，否则会消耗循环中间物池 |

偶数链脂肪酸 $\beta$ 氧化产生的乙酰-CoA不能在动物中净变成葡萄糖。乙酰基进入三羧酸循环时虽会暂时出现在中间物中，但每轮有两个碳以 CO$_2$ 释放，草酰乙酸只被再生而没有净增加；丙酮酸脱氢酶反应又不能把乙酰-CoA逆转成丙酮酸。支链脂肪酸植烷酸可经 $\alpha$ 氧化产生丙酰-CoA，却不是“典型奇数链脂肪酸”。植物、真菌和部分微生物可用乙醛酸循环保留乙酰基碳，相关差异见[乙醛酸循环与寡糖代谢](other_glc_pathway.md)。[^fat-to-glucose]

## 糖酵解不可逆步骤的三段旁路 { #three-bypasses }

### 丙酮酸羧化与 PEP 生成 { #pyruvate-to-pep }

第一段旁路由两种酶组成。线粒体基质中的丙酮酸羧化酶（PC）先催化

$$
\begin{gathered}
\text{丙酮酸}+\mathrm{HCO_3^-}+\mathrm{ATP}\\
\longrightarrow \text{草酰乙酸}+\mathrm{ADP}+\mathrm{P_i}.
\end{gathered}
$$

PC 以共价结合在赖氨酸上的生物素搬运活化的 CO$_2$，并以乙酰-CoA为必需的变构激活剂。这个反应既是糖异生入口，也是补充三羧酸循环中间物的填补反应。PC 的底物为丙酮酸和 HCO$_3^-$，产物为草酰乙酸；PEP 位于下一步 PEPCK 反应。[^pyruvate-carboxylase]

草酰乙酸随后由磷酸烯醇式丙酮酸羧激酶（PEPCK）催化脱羧并接受 GTP 的磷酰基：

$$
\begin{gathered}
\text{草酰乙酸}+\mathrm{GTP}\\
\longrightarrow \mathrm{PEP}+\mathrm{GDP}+\mathrm{CO_2}.
\end{gathered}
$$

先加上的羧基在这一步离去；脱羧与磷酸化耦联，帮助生成高磷酰基转移势的 PEP。反应产物没有额外的 P$_i$。人类有胞质 PCK1 和线粒体 PCK2，二者都能催化上述化学反应，相对通量随组织和代谢状态改变。[^pepck-isoforms]

### FBPase-1 与 PFK-1 的相向调节 { #fbpase-bypass }

胞质果糖-1,6-二磷酸酶-1（FBPase-1，FBP1）以水解而非 ATP 生成的方式越过 PFK-1：

$$
\begin{gathered}
\text{果糖-1,6-二磷酸}+\mathrm{H_2O}\\
\longrightarrow \text{果糖-6-磷酸}+\mathrm{P_i}.
\end{gathered}
$$

AMP 和果糖-2,6-二磷酸（F2,6BP）抑制 FBPase-1，柠檬酸则可促进其活性。F2,6BP 同时激活相向的 PFK-1，于是一个效应物就能协调抑制糖异生、促进糖酵解；这种相反调节比让两条通路同时高速运行更节省能量。[^fbpase-regulation]

### G6P 水解与游离葡萄糖输出 { #g6pase-bypass }

最后一段旁路把 G6P 水解成游离葡萄糖与 P$_i$。催化亚基 G6PC1 位于内质网膜，活性位点朝向内质网腔；胞质 G6P 先由 SLC37A4 转运入腔，产物再离开内质网，才能经质膜转运进入血液。它既是糖异生的终末步骤，也是肝、肾将糖原动员所得 G6P 变成血糖的共同出口。[^g6pase-system]

| 糖酵解的远离平衡步骤 | 糖异生旁路 | 能量处理与区室 |
| --- | --- | --- |
| PEP → 丙酮酸，丙酮酸激酶 | PC：丙酮酸 → 草酰乙酸；PEPCK：草酰乙酸 → PEP | 先在线粒体消耗 ATP，再在线粒体或胞质消耗 GTP |
| 果糖-6-磷酸 → 果糖-1,6-二磷酸，PFK-1 | FBPase-1 水解果糖-1,6-二磷酸 | 胞质水解磷酸酯，不生成 ATP |
| 葡萄糖 → G6P，HK／GCK | G6PC1 水解 G6P | 底物进入内质网腔后水解，完整系统主要支持肝、肾和肠的葡萄糖输出 |

## 区室与能量计量 { #gluconeogenesis-compartment-energy }

### 草酰乙酸运输与胞质还原力平衡 { #compartment-and-redox }

草酰乙酸不能自由穿过线粒体内膜。若使用胞质 PCK1，它通常先在基质中还原成苹果酸或转氨成天冬氨酸，跨膜后再生胞质草酰乙酸；若由 PCK2 在线粒体中生成 PEP，则 PEP可输出到胞质。这里的选择不仅搬运碳，也在安排 NADH：苹果酸在胞质重新氧化成草酰乙酸时生成胞质 NADH，可供 1,3-二磷酸甘油酸还原为甘油醛-3-磷酸的反应使用。[^compartment-redox]

以乳酸为起点时，胞质乳酸脱氢酶已经在乳酸变丙酮酸时生成 NADH，因此无需由苹果酸输出提供全部还原力；以丙氨酸为起点时，转氨反应不生成 NADH，碳与还原当量的跨膜安排便更重要。苹果酸路径兼有碳运输和胞质 NADH 补充功能；天冬氨酸路径还把碳流与氨基转移联系起来。不同前体可采用不同的碳与还原当量穿梭组合。

### 糖异生的能量计量 { #energy-accounting }

从两分子丙酮酸出发，常用净反应可写为

$$
\begin{gathered}
2\text{丙酮酸}+4\mathrm{ATP}+2\mathrm{GTP}\\
{}+2\mathrm{NADH}+6\mathrm{H_2O}\\
\longrightarrow \text{葡萄糖}+4\mathrm{ADP}+2\mathrm{GDP}\\
{}+6\mathrm{P_i}+2\mathrm{NAD^+}.
\end{gathered}
$$

因此每合成一分子葡萄糖消耗 4 ATP、2 GTP和 2 NADH，也就是六个高能磷酸键。方程中的 H$^+$ 与 H$_2$O 数目会随所采用的离子化状态和生化标准转化约定变化，但碳、核苷酸磷酸和电子账本不变。糖酵解从葡萄糖到丙酮酸只净得 2 ATP；两条通路的能量差说明糖异生为何必须由脂肪酸氧化等过程提供 ATP 和还原力，而不是靠糖酵解本身驱动一个自给循环。[^energy-accounting]

不同前体的局部账本还会改变。两分子乳酸氧化成丙酮酸时同时生成两分子胞质 NADH，恰好抵偿主干所需；甘油从 DHAP进入，绕过 PC、PEPCK及部分耗能步骤；氨基酸则还要计算脱氮和尿素合成。六个高能磷酸键是从两分子丙酮酸起算的标准账本，乳酸、甘油和氨基酸前体具有各自的局部收支。

## 糖异生的调节与器官协作 { #gluconeogenesis-regulation-integration }

### 糖异生通量的多层调节 { #regulation }

糖异生的通量控制分布在底物到达、线粒体 ATP 和 NADH 供应、PC／PEPCK 旁路、FBPase-1、G6Pase 系统以及产物输出等多个节点。某一种酶的表达量升高只反映催化容量的一项变化，净通量还须由示踪或物质收支确认。[^distributed-control]

| 状态信号 | 直接或近端作用 | 对肝脏净碳流的典型意义 |
| --- | --- | --- |
| 乙酰-CoA升高 | 激活 PC，并抑制丙酮酸脱氢酶复合体的净氧化入口 | 脂肪酸氧化旺盛时，把丙酮酸更多导向草酰乙酸而非乙酰-CoA |
| AMP升高、F2,6BP升高 | 抑制 FBPase-1；F2,6BP同时激活 PFK-1 | 能量不足或进食信号占优时，降低糖异生、促进糖酵解 |
| 柠檬酸升高 | 可激活 FBPase-1并抑制 PFK-1 | 作为糖异生多因素调节网络中的一个变构输入，连接线粒体碳供应与胞质六碳糖合成 |
| 胰高血糖素—cAMP—PKA | 在肝脏降低 F2,6BP，并抑制 L 型丙酮酸激酶；同时通过转录网络支持 PCK1、G6PC等表达 | 禁食时减少相向糖酵解通量，逐步提高产糖能力 |
| 胰岛素 | 促进去磷酸化和进食期基因表达程序，抑制 FOXO1 等促糖异生转录作用 | 抑制肝糖输出并促进葡萄糖利用和储存 |

肝脏 PFK-2／FBPase-2 双功能蛋白在 PKA 磷酸化后偏向降解 F2,6BP，使 PFK-1活性降低、FBPase-1抑制解除；进食与胰岛素相关的去磷酸化通常产生相反结果。上述调节方向适用于肝型同工酶，心脏等组织的同工型可具有不同响应。PCK1、FBP1和 G6PC的表达还受 CREB、FOXO、糖皮质激素受体、PGC-1 共激活因子等网络影响，时间尺度比变构调节和磷酸化更慢，具体胰岛激素背景见[胰岛内分泌](../physiology/endo/endo_islet.md)。[^hormonal-regulation]

相向反应通常被互补调节，却不会在活细胞中完全降为零。PFK-1／FBPase-1或丙酮酸激酶／PC—PEPCK之间若保留有限的双向周转，称为底物循环：它消耗高能磷酸键，能提高净通量对调节信号的敏感性，并把部分能量散为热。只有在两向通量都很高而缺乏生理收益时才适合称为严重的“徒劳循环”；底物循环的范围应按具体相向酶对界定。

### 器官间碳氮循环 { #interorgan-cycles }

在 Cori 循环中，成熟红细胞和高糖酵解组织释放乳酸，肝脏以及一定条件下的肾脏摄取乳酸并重新合成葡萄糖。外周糖酵解每分子葡萄糖净得 2 ATP，而从两分子乳酸重建葡萄糖的产糖器官要消耗六个高能磷酸键，所以全身合计净消耗四个 ATP当量。这个循环把快速、无需线粒体的 ATP供应与乳酸清除交给外周组织，再把能量负担移到能氧化脂肪酸的器官。[^cori-cycle]

葡萄糖—丙氨酸循环还转移氮。骨骼肌把氨基转给丙酮酸形成丙氨酸，肝脏取回其碳骨架用于糖异生，并把氮导向尿素循环。肝脏因此同时承担合成葡萄糖和处置氮的能量成本。丙氨酸是多种器官间氮载体之一，长期禁食中的氨基酸供糖还受到肌肉组织损失和代谢适应的限制；氨基酸碳骨架的差异见[蛋白质降解与氨基酸分解代谢](pr_aa_catabolism.md)。[^alanine-cycle]

### 肾糖异生与酸碱平衡 { #renal-acid-base }

肾皮质近端小管能够以乳酸、谷氨酰胺和甘油为前体产糖。代谢性酸负荷增加时，谷氨酰胺摄取与分解上升：谷氨酰胺先后释放铵，并形成 $\alpha$-酮戊二酸；铵进入尿液有助于排出酸负荷，$\alpha$-酮戊二酸碳则可经草酰乙酸和 PEP用于糖异生。与此同时，这套代谢有利于生成并向血液补回新的 HCO$_3^-$。[^renal-gluconeogenesis]

肾脏酸碱效应来自谷氨酰胺分解、铵排泄、尿液缓冲和碳酸氢盐回补的耦联，实际贡献还受肾功能、酸碱状态与可用底物影响。乳酸和甘油同样能成为肾糖异生底物，却不以与谷氨酰胺相同的方式增加铵生成。

## 终末旁路缺陷与代谢边界 { #clinical-boundaries }

G6PC1 缺陷或 SLC37A4 缺陷分别破坏内质网腔内的催化步骤或 G6P转运，造成糖原贮积病 I 型的两类分子基础。因为 G6Pase系统同时服务于糖异生和糖原分解，受影响者即使已经动员糖原或合成 G6P，也难以完成游离葡萄糖输出。FBP1缺陷则在禁食或感染等分解代谢状态下阻断果糖-1,6-二磷酸旁路，可出现低血糖和乳酸性酸中毒。[^clinical-defects]

这些疾病的表型取决于残余活性、组织分布、底物旁路和治疗状态。这里的病例用于显示各旁路为何需要专门的糖异生酶，不构成诊断或饮食建议。

## 参考资料与延伸阅读

- Reactome, [Gluconeogenesis](https://reactome.org/content/detail/R-HSA-70263)。
- Alberts, B. et al., [How Cells Obtain Energy from Food](https://www.ncbi.nlm.nih.gov/books/NBK26882/). *Molecular Biology of the Cell*。
- Jitrapakdee, S. et al., [Structure, mechanism and regulation of pyruvate carboxylase](https://pubmed.ncbi.nlm.nih.gov/18613815/). *Biochemical Journal*, 2008。
- Petersen, M. C., Vatner, D. F. & Shulman, G. I., [Regulation of hepatic glucose metabolism in health and disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC5777172/). *Nature Reviews Endocrinology*, 2017。
- Verissimo, T. et al., [Gluconeogenesis in the kidney: in health and in chronic kidney disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC10387387/). *Journal of Nephrology*, 2023。
- Curthoys, N. P. & Moe, O. W., [Proximal tubule function and response to acidosis](https://pmc.ncbi.nlm.nih.gov/articles/PMC4152816/). *Clinical Journal of the American Society of Nephrology*, 2014。
- GeneReviews, [Glycogen Storage Disease Type I](https://www.ncbi.nlm.nih.gov/books/NBK1312/)；[Fructose-1,6-Bisphosphatase 1 Deficiency](https://www.ncbi.nlm.nih.gov/books/NBK550349/)。

[^gluconeogenesis-overview]: 人类通路反应与区室据 Reactome [Gluconeogenesis（R-HSA-70263）](https://reactome.org/content/detail/R-HSA-70263)；糖酵解与糖异生的热力学关系另见 NCBI Bookshelf [How Cells Obtain Energy from Food](https://www.ncbi.nlm.nih.gov/books/NBK26882/)。
[^organ-contribution]: 肝、肾和肠的产糖分工与禁食变化参见 [Regulation of hepatic glucose metabolism in health and disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC5777172/)及 [Gluconeogenesis in the kidney: in health and in chronic kidney disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC10387387/)。
[^fat-to-glucose]: 动物不能从乙酰-CoA净合成葡萄糖、植物可借乙醛酸循环保留乙酰碳的基本边界，见 NCBI Bookshelf [The Biosynthesis of Cell Constituents](https://www.ncbi.nlm.nih.gov/books/NBK9956/)；奇数链脂肪酸的丙酰-CoA入口见 Reactome [Propionyl-CoA catabolism](https://reactome.org/content/detail/R-HSA-71032)。
[^pyruvate-carboxylase]: PC 的线粒体定位、生物素机制、ATP／HCO$_3^-$底物与乙酰-CoA调节，见 [Structure, mechanism and regulation of pyruvate carboxylase](https://pubmed.ncbi.nlm.nih.gov/18613815/)及 Reactome 反应 [PC carboxylates pyruvate to oxaloacetate](https://reactome.org/content/detail/R-HSA-70501)。
[^pepck-isoforms]: PCK1／PCK2的区室、共同反应与不同组织功能参见 [Gluconeogenesis in cancer cells—repurposing of a starvation-induced metabolic pathway?](https://pmc.ncbi.nlm.nih.gov/articles/PMC6894939/)；人类反应事件见 Reactome [R-HSA-70263](https://reactome.org/content/detail/R-HSA-70263)。
[^fbpase-regulation]: F2,6BP对 PFK-1与 FBPase-1的相向作用及双功能酶背景，见 [Roles for fructose-2,6-bisphosphate in the control of fuel metabolism](https://pubmed.ncbi.nlm.nih.gov/16860376/)；人类 FBP1反应见 Reactome [R-HSA-70263](https://reactome.org/content/detail/R-HSA-70263)。
[^g6pase-system]: G6PC1定位于内质网膜、SLC37A4把胞质 G6P转入内质网腔的分工，见 GeneReviews [Glycogen Storage Disease Type I](https://www.ncbi.nlm.nih.gov/books/NBK1312/)及 [The SLC37 family of phosphate-linked sugar phosphate antiporters](https://pubmed.ncbi.nlm.nih.gov/23506893/)。
[^compartment-redox]: 草酰乙酸经苹果酸／天冬氨酸输出、PCK1／PCK2分工及胞质 NADH平衡，参见 [Biochemistry, Gluconeogenesis](https://www.ncbi.nlm.nih.gov/books/NBK544346/)和 [Gluconeogenesis in cancer cells](https://pmc.ncbi.nlm.nih.gov/articles/PMC6894939/)。
[^energy-accounting]: 从两分子丙酮酸合成葡萄糖所需的 4 ATP、2 GTP和 2 NADH，见 NCBI Bookshelf [Biochemistry, Gluconeogenesis](https://www.ncbi.nlm.nih.gov/books/NBK544346/)及 Reactome [R-HSA-70263](https://reactome.org/content/detail/R-HSA-70263)。
[^distributed-control]: PCK1表达量与整体糖异生通量不可直接等同，以及 PCK1参与抽补输出等多重功能，参见 [The neglected PCK1/glucagon interaction in nutrient homeostasis beyond gluconeogenesis](https://pmc.ncbi.nlm.nih.gov/articles/PMC11909762/)；肝糖输出的多层调节见 [Regulation of hepatic glucose metabolism in health and disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC5777172/)。
[^hormonal-regulation]: 胰高血糖素、胰岛素、糖皮质激素与 F2,6BP及糖异生基因网络的关系，见 [Regulation of Glucose Homeostasis by Glucocorticoids](https://pmc.ncbi.nlm.nih.gov/articles/PMC6185996/)和 [Roles for fructose-2,6-bisphosphate in the control of fuel metabolism](https://pubmed.ncbi.nlm.nih.gov/16860376/)。
[^cori-cycle]: Cori循环的乳酸转运与器官间能量负担，参见 NCBI Bookshelf [Biochemistry, Gluconeogenesis](https://www.ncbi.nlm.nih.gov/books/NBK544346/)；肾脏也参与乳酸产糖的证据综述见 [Glucose production from the kidney](https://pmc.ncbi.nlm.nih.gov/articles/PMC137457/)。
[^alanine-cycle]: 肌—肝丙氨酸碳氮转运及糖异生、尿素合成的能量联系，见 [Hungry for your alanine: when liver depends on muscle proteolysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC6819091/)。
[^renal-gluconeogenesis]: 肾皮质近端小管糖异生及酸中毒时谷氨酰胺分解、铵排泄和新生 HCO$_3^-$的耦联，见 [Kidney metabolism and acid–base control](https://pmc.ncbi.nlm.nih.gov/articles/PMC9338915/)和 [Proximal tubule function and response to acidosis](https://pmc.ncbi.nlm.nih.gov/articles/PMC4152816/)。
[^clinical-defects]: G6PC1／SLC37A4缺陷的分子病理见 GeneReviews [Glycogen Storage Disease Type I](https://www.ncbi.nlm.nih.gov/books/NBK1312/)；FBP1缺陷与禁食相关低血糖、乳酸性酸中毒见 GeneReviews [Fructose-1,6-Bisphosphatase 1 Deficiency](https://www.ncbi.nlm.nih.gov/books/NBK550349/)。
