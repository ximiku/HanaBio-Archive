# 系统综述与荟萃分析

系统综述先用可重复的方法界定问题、检索和筛选研究，再评价每项证据的设计与偏倚。荟萃分析是在研究具有共同科学含义时进行的定量综合步骤；它把研究内不确定性和研究间差异放进同一模型，并建立在系统综述的检索、选择与评价之上。

进入综合的效应估计来自不同研究设计。共同效应尺度只是可合并性的一个条件，还需核对各研究所对应的总体、处理、时间零点、结局和待估量。单项研究若只支持关联，合并结果仍是关联证据。关于单项研究怎样界定并识别干预效应，见[因果推断](causal_meta_analysis.md#association-to-effect)。

## 从系统综述到可合并效应 { #systematic-review }

### 问题、方案与研究选择

系统综述先定义问题，再用可重复的方法寻找、筛选和评价全部符合条件的证据；荟萃分析是其中可选的定量综合步骤。研究之间在总体、处理、对照、结局或设计上具有足够科学可比性时，合并效应才对应一个有意义的问题；否则应以结构化叙述或分层结果呈现。Cochrane Handbook 也明确要求在这些要素足够相似时进行荟萃分析。[^cochrane-meta]

方案应预先规定目标总体、干预或暴露、比较、结局、研究设计、信息来源、检索式、筛选和提取规则、偏倚评价、效应尺度、主要模型与敏感性分析。注册或时间戳能够区分预设决策与看到结果后的改变。检索应覆盖数据库、注册平台、参考文献和适当的灰色文献；至少要保存去重、标题摘要筛选、全文排除理由和多份报告归并为同一研究的轨迹。

系统综述和荟萃分析优先报告项目（Preferred Reporting Items for Systematic Reviews and Meta-Analyses，PRISMA）2020 提供 27 项清单和流程图，用来透明呈现问题、检索、选择、分析与结果。[^prisma-2020] 它属于报告指南；综述偏倚还需通过检索完整性、结局选择、数据提取和合并合理性分别评价。

### 效应尺度与共同待估量

每项研究应先转换为同一效应尺度上的估计 \(y_i\) 及其标准误 \(s_i\)。这一步要求统计公式可转换，也要求科学待估量可比。

| 数据与问题 | 常用效应量 | 合并尺度 | 主要边界 |
| --- | --- | --- | --- |
| 同一单位的连续结局 | 均值差（mean difference，MD） | 原量纲 | 测量工具、随访时点和方向必须一致 |
| 同一构念的不同量表 | 标准化均值差（standardized mean difference，SMD） | 标准差单位 | 各研究标准差受人群异质性和测量信度影响 |
| 二分类结局 | 风险差、风险比、优势比 | RD 原尺度；RR、OR 通常取对数 | 三者待估含义不同，OR 在常见结局时与 RR 数值差异明显 |
| 时间到事件结局 | 风险比或限制平均生存时间差 | log(HR) 或时间单位 | HR 依赖比例风险及随访结构，不能与风险比混称 |
| 相关系数 | Pearson \(r\) | Fisher \(z=\operatorname{arctanh}(r)\) | 变量范围、测量误差和群体组成要可比 |

未经调整与经因果调整的估计、不同调整集对应的估计、终点值与变化值、个体随机与整群随机试验、多个剂量和多个随访时点具有不同待估量或依赖结构。若同一研究贡献多个相关效应，可以预先选定一个结果，合成为研究内对比，或使用多层、多变量模型和稳健方差估计保留依赖结构。

## 共同效应与随机效应模型 { #meta-models }

### 逆方差加权

若各研究估计同一效应 \(\theta\)，共同效应模型用研究内方差的倒数加权：

\[
w_i=\frac{1}{s_i^2}.
\]

\[
\widehat\theta
=\frac{\sum_{i=1}^{k}w_i y_i}{\sum_{i=1}^{k}w_i}.
\]

\[
\operatorname{SE}(\widehat\theta)
=\sqrt{\frac{1}{\sum_{i=1}^{k}w_i}}.
\]

精度高的研究权重大，逆方差权重表达的是模型下的抽样信息。一个样本很大却存在严重分配隐藏、失访或结局选择偏倚的研究仍会得到很大权重；偏倚风险应通过纳入标准、领域评价、分层或敏感性分析处理，简单质量分无法替代这些机制评价。

“固定效应”在不同文献中还可能指只对已纳入研究求精度加权平均的 fixed-effects 解释。无论采用哪种术语，都要说明推断对象：是假设所有研究共享一个真实效应，还是概括这批研究的加权平均。目标若是推广到变化的研究条件，还需采用能表达研究间差异的模型。

### 随机效应与研究间方差

随机效应模型允许研究真实效应 \(\theta_i\) 围绕平均效应 \(\mu\) 变化，例如

\[
y_i\mid\theta_i\sim N(\theta_i,s_i^2),
\qquad
\theta_i\sim N(\mu,\tau^2).
\]

相应的简单逆方差权重为

\[
w_i^*=\frac{1}{s_i^2+\widehat\tau^2}.
\]

\(\tau^2\) 是研究间方差。它增大时，各研究权重趋于接近，小研究相对共同效应模型获得更多权重。DerSimonian–Laird 矩估计因计算简洁而成为经典方法，但在研究少或异质性估计困难时可能表现不佳；Cochrane 2024 版还讨论了限制最大似然（restricted maximum likelihood，REML）、Paule–Mandel 等估计以及 Hartung–Knapp–Sidik–Jonkman（HKSJ）类区间方法，并建议结合资料情形选择。[^der-simonian-laird]

随机效应模型把可比研究的真实效应差异表示为分布。方向一致的偏倚、不可比结局或错误数据提取需要在进入模型前另行处理。模型选择应由待估问题和预期异质性决定，异质性检验则用于量化给定模型下的证据。

## 异质性与森林图 { #heterogeneity }

### 异质性统计量

Cochran \(Q\) 统计量为

\[
Q=\sum_{i=1}^{k}w_i(y_i-\widehat\theta)^2,
\]

在共同效应假设下近似与 \(k-1\) 自由度的 \(\chi^2\) 分布比较。研究少时检验异质性的功效低，研究很多时又可能检出很小的差异，因此应同时报告差异大小和生物学意义，而非只按显著性判断同质性。

常用不一致性统计量为

\[
I^2=\max\left\{0,\frac{Q-(k-1)}{Q}\right\}\times100\%.
\]

它概括观测效应变异中超出研究内抽样误差的比例，受到研究精度结构影响；“效应有多少百分比不同”则是另一种解释。Higgins 等提出 \(I^2\) 是为了把注意力从单纯检验转向不一致程度；其区间在研究少时可能很宽。[^meta-inconsistency] 固定的 25%、50%、75% 标签可作粗略提示，解释还要结合效应方向、\(\tau^2\) 的原尺度含义、偏倚风险和研究条件。

\(\tau^2\) 直接描述真实效应在分析尺度上的方差。它在 \(\log(\mathrm{RR})\)、SMD 或原始均值差尺度上的大小含义不同，跨效应尺度比较前需转换到共同解释。最好同时报告 \(\widehat\tau^2\) 及其不确定性、\(I^2\)、各研究结果，并说明临床、生物学和方法学差异。

### 平均效应与预测区间

随机效应平均值的置信区间回答“平均真实效应在哪里”，预测区间则回答新研究的真实效应可能落在哪里。一个常见预测区间形式为

\[
\widehat\mu
\pm t^*\sqrt{\operatorname{SE}(\widehat\mu)^2+\widehat\tau^2},
\]

其中 \(t^*\) 和自由度随所用推断方法而定。Higgins、Thompson 与 Spiegelhalter 推动在随机效应荟萃分析中用预测区间呈现研究间效应分布；Cochrane 同时提醒，研究很少、效应分布偏离假设或漏斗图明显不对称时，预测区间也可能很不稳定。[^meta-prediction]

森林图把每项研究的效应点、区间和权重与合并结果放在同一坐标上。方块大小通常表示权重，横线表示研究区间，菱形表示合并估计及其区间；无效线在均值差和风险差尺度为 0，在比值尺度为 1。森林图应同时显示效应尺度、方向、研究标识和模型。逐项区间是否跨无效线只描述各研究的精度，综合解释还需观察效应方向、区间宽度、设计差异和合并结果。

## 异质性来源、缺失证据与特殊资料 { #meta-diagnostics }

### 亚组分析与元回归

亚组分析按研究特征分别合并，元回归把研究效应写成研究层协变量的函数。它们可以探索剂量、物种、结局测量、随访长度或偏倚风险是否解释异质性，但研究层关联可能与个体层效应修饰不同，存在生态偏倚。亚组差异需要直接估计组间交互并报告区间；各亚组自身的显著性回答的是另一问题。

研究数少时，元回归系数非常不稳定；同时尝试许多调节变量又会产生多重性和结果驱动选择。可信分析应在方案中预设少量具有机制依据的变量，确认各水平有足够研究和覆盖，并把事后发现视为假设生成。若处理剂量、基线风险和研究质量彼此共线，单项元回归很难把它们的作用分开。

### 小研究效应与报告偏倚

研究结果的缺失可能发生在整项研究、某个结局、某个时间点或某种分析层面。漏斗图绘制效应与精度；当小研究更分散时，理想条件下形成近似对称漏斗。Egger 回归以效应标准化量对精度检验不对称，是经典的小研究效应诊断。[^egger-bias] 不对称还可能来自真实效应随研究规模变化、低质量小研究、效应尺度与标准误的数学关系或偶然性，因此发表偏倚只是需要进一步核对的可能原因之一。

研究很少时，漏斗图和不对称检验信息有限；选择模型、p-curve、截尾填补等方法也依赖额外假设，只能在这些假设下估计缺失证据的影响。更直接的证据来自方案注册、试验注册、监管资料、预印本、作者联系以及同一研究在不同报告中的结局核对。敏感性分析可以说明在何种选择机制下结论改变，并应清楚报告其假设边界。

### 少量研究、稀有事件与相关效应

随机效应分析在研究很少时既难估 \(\tau^2\)，也难校准平均效应区间。HKSJ 调整在某些异质情形可改善覆盖，但在极少研究或估计异质性为零时也可能过宽或过窄。应呈现单项研究、不同合理方法和结论敏感性，避免把某一种软件默认值写成通用解答。

二分类稀有事件中，一组或两组零事件会使 log(RR) 或 log(OR) 不可直接计算，统一加 0.5 的连续性校正可能产生偏倚。Mantel–Haenszel、Peto、精确／二项似然、广义线性混合模型或贝叶斯模型各有条件；Peto 法主要适用于效应不大、组间分配近似平衡且事件罕见的情形。双零事件研究对相对效应提供的信息很少，但仍包含绝对风险信息；方法应根据待估尺度、零事件模式和样本结构预先选择。[^cochrane-rare-events]

同一研究的多个结局、剂量、物种或时点共享样本，效应估计彼此相关。把它们当作独立研究会人为缩小标准误并改变权重。可以选择预设时点、合并研究内多组、使用多变量或多层荟萃模型，或在研究数和聚类数足够时采用稳健方差估计；关键是保留研究作为独立证据单位。

## 网络荟萃分析与证据确定性 { #network-and-certainty }

### 直接、间接与网络证据

网络荟萃分析把三个以上干预的直接比较连接起来。例如已有 A 对 B 和 A 对 C 的试验时，可以通过共同对照 A 间接估计 B 对 C，并与 B 对 C 的直接试验共同综合。有效的间接比较依赖**传递性**：不同对比中的研究在所有重要效应修饰因素上应足够可比，好像同一目标总体中的单位原则上都可随机到网络内任一干预。

直接与间接证据对同一对比不一致称为不连贯或不一致。Cochrane 网络荟萃分析指南要求在每一间接比较审查传递性、在证据闭环检查不连贯，并结合普通荟萃分析中的异质性。[^cochrane-network] 干预排名是在模型和网络假设下的不确定排序；效应区间高度重叠、网络稀疏或传递性不可信时，第一名概率也应连同这些限制解释。

### 研究内偏倚与证据体确定性

风险偏倚评价针对具体结果及其偏倚机制。随机试验可按随机化过程、偏离预定干预、缺失结局、结局测量和选择报告等机制评价；非随机干预研究还要重点处理混杂、选择、干预分类和处理后偏离。Cochrane 的随机试验偏倚风险工具 2（Risk of Bias 2，RoB 2）明确按特定结局、时点和分析结果评价，非随机干预研究偏倚风险工具（Risk Of Bias In Non-randomized Studies of Interventions，ROBINS-I）则以一个无偏目标试验作为比较基准。[^risk-of-bias]

单项研究偏倚风险与整个证据体的确定性是不同层级。GRADE 按结局综合风险偏倚、不一致性、间接性、不精确和发表偏倚等方面，判断效应估计接近目标量的可信程度。[^grade-certainty] 一个合并 *p* 值很小、样本数很大的荟萃分析，仍可能因所有研究共享同一偏倚、结局与决策问题间接或研究间方向冲突而只有低确定性。

## 待估量对齐与完整报告 { #causal-evidence-synthesis }

荟萃分析中的“效应量相同”至少包含三层含义：数学尺度相同、科学待估量相同、识别假设足够可比。观察研究中，一个估计可能是基线协变量标准化后的 ATE，另一个可能是匹配样本 ATT，第三个可能是工具变量识别的局部效应；即使都以风险比报告，也对应不同总体。合并前应记录目标总体、处理版本、时间零点、调整集、效应尺度和主要偏倚方向。

多个观察研究若共享相同未测混杂，增加研究数量主要提高精度而会保留共同偏倚。研究间差异有时是真实效应修饰，有时来自处理和测量定义，有时来自偏倚强度变化。随机效应模型描述效应分布，差异来源仍需领域知识和研究特征分析识别。证据综合可按设计分层，比较随机与非随机证据，使用偏倚校正或敏感性模型，并解释不同设计为何可能给出不同目标量。

一份可复核的系统综述应给出方案与偏离、完整检索、筛选流程、数据和代码、逐研究效应、偏倚评价、合并模型、\(\tau^2\)、\(I^2\)、预测区间、影响分析、缺失证据诊断和证据确定性。研究若缺少可合并性，应说明相应科学或方法学差异，并用透明的结构呈现各项证据；系统综述的价值仍体现在完整识别、评价和组织证据。

系统综述先确定哪些研究共同回答一个问题，荟萃分析再把可比证据放入明确的效应尺度和异质性结构。计算结果的精度只有与研究选择、待估量、偏倚和推广范围共同报告时，才具有可解释的科学含义。

## 参考资料与延伸阅读

[^cochrane-meta]: Deeks JJ, Higgins JPT, Altman DG, McKenzie JE, Veroniki AA. [Chapter 10: Analysing Data and Undertaking Meta-analyses](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10). In: *Cochrane Handbook for Systematic Reviews of Interventions*, version 6.5, 2024.

[^prisma-2020]: Page MJ, McKenzie JE, Bossuyt PM, et al. [The PRISMA 2020 Statement: An Updated Guideline for Reporting Systematic Reviews](https://www.bmj.com/content/372/bmj.n71). *BMJ*, 2021, 372: n71.

[^der-simonian-laird]: DerSimonian R, Laird N. [Meta-analysis in Clinical Trials](https://pubmed.ncbi.nlm.nih.gov/3802833/). *Controlled Clinical Trials*, 1986, 7(3): 177–188.

[^meta-inconsistency]: Higgins JPT, Thompson SG, Deeks JJ, Altman DG. [Measuring Inconsistency in Meta-analyses](https://pmc.ncbi.nlm.nih.gov/articles/PMC192859/). *BMJ*, 2003, 327: 557–560.

[^meta-prediction]: Higgins JPT, Thompson SG, Spiegelhalter DJ. [A Re-evaluation of Random-effects Meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC2667312/). *Journal of the Royal Statistical Society: Series A*, 2009, 172(1): 137–159.

[^egger-bias]: Egger M, Davey Smith G, Schneider M, Minder C. [Bias in Meta-analysis Detected by a Simple, Graphical Test](https://pmc.ncbi.nlm.nih.gov/articles/PMC2127453/). *BMJ*, 1997, 315: 629–634.

[^cochrane-rare-events]: Deeks JJ, Higgins JPT, Altman DG, McKenzie JE, Veroniki AA. [Meta-analysis of Rare Events](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10#section-10-4-4). In: *Cochrane Handbook for Systematic Reviews of Interventions*, version 6.5, 2024.

[^cochrane-network]: Chaimani A, Caldwell DM, Li T, Higgins JPT, Salanti G. [Chapter 11: Undertaking Network Meta-analyses](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-11). In: *Cochrane Handbook for Systematic Reviews of Interventions*, version 6.5, 2024.

[^risk-of-bias]: Cochrane. [About Risk of Bias 2](https://www.cochrane.org/learn/courses-and-resources/cochrane-methodology/risk-bias/about-risk-bias-2-rob-2)；Cochrane. [ROBINS-I: Risk of Bias in Non-randomized Studies of Interventions](https://methods.cochrane.org/bias/risk-bias-non-randomized-studies-interventions).

[^grade-certainty]: Schünemann HJ, Higgins JPT, Vist GE, et al. [Chapter 14: Completing Summary of Findings Tables and Grading the Certainty of the Evidence](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-14). In: *Cochrane Handbook for Systematic Reviews of Interventions*, version 6.5, 2024.
