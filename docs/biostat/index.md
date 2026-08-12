# 生物统计学

生物统计学研究怎样从带有变异和不确定性的生命现象中取得可靠认识。一次测量来自哪个个体，处理施加在哪个实验单位，样本如何进入研究，结局在什么时间和尺度上记录，这些信息共同决定一组数字能够回答什么问题。统计分析因而从研究对象和数据产生过程开始，经过整理、建模与不确定性评估，最后回到生物学解释；检验名称和软件输出只是这条推断链中的一部分。

经典概率分布、抽样理论、假设检验、方差分析与回归构成进入统计推理的基本路径。它们保留了从假设、统计量到参照分布的可计算结构，也训练研究者辨认误差来自何处。广义模型、混合模型、生存分析、贝叶斯计算和因果推断则把同一套推理扩展到非正态结局、层级依赖、随访时间、复杂计算和观察性研究。新方法增加了可以处理的问题，并没有取消实验单位、随机化、抽样分布和模型条件这些基础概念。

## 研究问题与推断目标 { #questions-and-estimands }

统计工作首先要把宽泛的科学兴趣写成可识别、可测量的目标。研究对象可以是一个物种总体、某类患者、一个培养体系或一组生态样地；观察单位是每一行记录对应的对象，实验单位是能够独立接受处理的最小单位，分析单位则是模型实际比较的单位。三者不一致时，简单增加细胞数、切片数或技术重复不会产生同等数量的独立生物重复。

目标总体、处理或暴露、比较条件、结局、时间范围和汇总尺度共同界定**待估量**。例如，“药物是否有效”需要进一步落实为哪一人群、哪种剂量、相对何种对照、在什么时点比较哪项结局，以及死亡、换药和失访如何处理。ICH E9(R1) 在临床试验中系统化了这种待估量框架；其一般原则同样适用于动物实验、生态调查和组学研究。[^ich-estimand]

不同问题需要不同证据：

- **描述问题**刻画已观察样本或总体的分布、组成和时间变化；
- **预测问题**评估新个体或未来观测的结局，重视样本外误差与校准；
- **关联问题**估计变量在给定模型和调整集合下怎样共同变化；
- **因果问题**比较同一目标总体在不同干预策略下可能出现的结局；
- **证据综合问题**判断多项研究是否在足够接近的待估量上提供可以合并的证据。

这几类问题可以使用相似的回归计算，却不能凭一个显著系数互相替代。研究问题、设计和识别条件确定解释范围，模型负责在该范围内组织数据。

## 数据产生过程与研究设计 { #design-and-data-generation }

数据是研究过程留下的记录。随机抽样决定样本能否代表目标总体，随机分派帮助形成可比较的处理组；两者解决的问题不同。观察性研究没有随机分派时，需要记录处理选择、入组、测量和失访过程，才能判断混杂与选择偏倚可能怎样进入结果。实验研究也可能因窝别、培养批次、操作者或仪器批次与处理重合而失去可解释性。

[实验设计、效能与可重复统计](experimental_design.md)从因素、处理和实验单位进入随机化、重复、局部控制、区组、析因与裂区设计，并保留邻比、间比和动物配对等经典设计路径。它同时说明盲法、分派隐藏、样本量、缺失与排除规则如何在数据出现之前限定分析。模型能够利用设计信息、估计剩余变异，却不能事后恢复一个没有对照、完全混杂或把技术重复当生物重复的设计。

[生物数据整理与描述统计](data_description.md)把这一过程落实到数据表：每个变量的含义、单位和编码，原始层与分析层之间的转换，缺失、检测限和异常观测的记录，以及与分布相配的图形和描述量。探索性分析用于发现结构并检查模型条件；确认性分析若受探索结果启发，应把这种选择保留在解释和后续验证中。

## 从数据结构进入模型 { #data-structure-to-model }

模型选择应同时考虑结局变量的支持范围、观测之间的依赖、科学问题和抽样设计。连续、二分类、计数、组成比例、事件时间和高维变量具有不同的数据结构；同一种变量也可能因研究目标不同而进入描述模型、预测模型或因果分析。

| 数据与问题的主要结构 | 首先辨认的要点 | 对应页面 |
| --- | --- | --- |
| 单变量分布与随机事件 | 取值范围、生成机制、独立性、条件信息 | [概率与概率分布](probability.md) |
| 均值、比例与总体参数 | 抽样设计、统计量的抽样分布、估计量与区间覆盖 | [抽样、参数估计与置信区间](sampling_estimation.md) |
| 组间差异与预设假设 | 独立或配对结构、效应尺度、检验方向、多重性 | [假设检验、效应量与多重比较](hypothesis_testing.md) |
| 分类、等级或难以参数化的结局 | 计数表边际、配对方式、秩信息、可交换单位 | [分类资料与非参数检验](categorical_nonparametric.md) |
| 连续结局与设计因素 | 平方和、对比、协变量、交互和残差结构 | [方差分析与线性模型](anova_regression.md) |
| 连续变量关系与预测 | 相关目标、函数形式、共线性、外推与样本外误差 | [相关、回归与模型诊断](correlation_regression.md) |
| 二分类、计数、层级或重复观测 | 均值—方差关系、链接函数、条件或边际目标 | [广义线性模型与混合效应模型](generalized_mixed_models.md) |
| 多变量整体结构 | 量纲、协方差或距离、降维、监督目标与验证分层 | [多元统计、降维与分类](multivariate_models.md) |
| 删失事件时间与个体轨迹 | 时间原点、风险集、个体内相关、访视和失访过程 | [生存分析与纵向数据](survival_longitudinal.md) |

这张对应表是阅读入口，而不是自动选检验的规则。同一项研究常同时包含几种结构：例如重复测量的二分类结局既需要二项均值模型，也需要处理个体内相关；带有竞争事件的纵向研究还要明确死亡后结局的含义。选择方法时应先画出实验单位、时间轴和变量关系，再确定似然、估计方程、距离或重抽样方案。

## 经典推断的连续主线 { #classical-inference }

概率论用样本空间、条件概率和随机变量描述不确定性，并用二项、Poisson、正态等分布连接生成机制与可观察结果。[概率与概率分布](probability.md#probability-space)保留事件运算和常用分布的经典推导，同时区分概率质量、密度、参数化与近似条件。分布名称不是数据外形的标签，而是一组关于取值范围、均值—方差关系和独立结构的假设。

抽样理论进一步研究统计量在重复研究中的变化。[抽样、参数估计与置信区间](sampling_estimation.md#sampling-distribution)从总体、样本和抽样分布的区别出发，说明无偏性、标准误、似然和置信区间。一个 95% 置信区间的“95%”属于重复构造区间的覆盖过程，不是固定参数在本次区间内的后验概率；NIST 的说明也以重复抽样覆盖率界定置信水平。[^nist-confidence]

假设检验把观测统计量与零假设下的参照分布比较。[假设检验、效应量与多重比较](hypothesis_testing.md#testing-logic)保留单双侧检验、两类错误以及均值和方差检验的手算逻辑，同时把效应量、区间、功效和多重比较纳入结论。美国统计学会强调，科学结论不应只由 *p* 值是否跨过某个阈值决定。[^asa-pvalue] 未拒绝零假设表示现有设计和数据没有提供足够证据，并不自动证明效应为零；等效或非劣效问题需要事先给定有科学意义的界值。

方差分析、相关和回归把单个检验扩展为模型语言。[方差分析与线性模型](anova_regression.md#general-linear-model)保留平方和分解、F 检验和经典多重比较，同时以设计矩阵、对比和交互统一单因素、多因素、区组和协方差分析。[相关、回归与模型诊断](correlation_regression.md#simple-linear-regression)从 Pearson 相关和最小二乘直线进入多元回归、变换、非线性关系、影响点和预测验证。经典手算揭示统计量的来源，现代矩阵表达则使同一原理能够进入不平衡设计和更复杂的模型。

## 现代模型与计算扩展 { #modern-models-and-computation }

当正态连续响应的恒定方差模型不适合数据时，广义线性模型用分布族和链接函数描述二分类、比例和计数结局；混合效应模型用随机效应表示个体、地点、窝别或批次形成的层级相关；广义估计方程直接估计总体平均关系。[广义线性模型与混合效应模型](generalized_mixed_models.md#glm-framework)比较这些方法的效应尺度和推断目标，并将 Logistic 生长曲线与二项 logistic 回归清楚区分。

多元统计面对同一单位上的多个变量。[多元统计、降维与分类](multivariate_models.md#multivariate-questions)由协方差、相关和距离进入主成分、排序、聚类、分类与多元检验。降维图可以展示主要结构，却会受到标准化、距离、参数和样本选择影响；监督学习的预处理、特征选择和调参必须包含在交叉验证内部，才能避免数据泄漏。

[生存分析与纵向数据](survival_longitudinal.md#event-time-data)把时间明确写入数据结构。Kaplan–Meier 曲线和 Cox 模型依赖风险集与删失机制，纵向模型需要描述个体内相关、实际访视时间和失访过程。竞争风险、复发事件和纵向—事件联合模型是在这些经典概念上的扩展，不应把每位个体的多次记录当作相互独立的横断面样本。

[贝叶斯推断与计算统计](bayesian_computational.md#bayesian-updating)从条件概率和 Bayes 公式进入参数后验、先验预测、层级部分汇聚与后验预测检验，并介绍 Monte Carlo、MCMC 和近似推断。计算诊断属于推断本身：链未混合、有效样本量不足或出现发散时，精细的小数位不能代表可靠的后验认识。bootstrap、置换和模拟研究也需要保留重抽样单位、随机计算误差和模型假设。

频率学派与贝叶斯方法对不确定性的表述不同，但都要求数据生成模型、设计和计算过程可受检查。贝叶斯可信区间不能解释成频率学派长期覆盖率，频率学派置信区间也不能直接解释为参数概率；选择框架应服从研究目标、可辩护的假设和报告需要。

## 估计、不确定性与模型诊断 { #uncertainty-and-diagnostics }

统计结果的核心通常是带有不确定性的效应估计。标准差描述观察值的离散，标准误描述估计量在重复研究中的变化，区间把估计精度显示在效应尺度上。样本量增加可以降低部分抽样误差，却不会自动消除选择偏倚、测量偏倚、批次混杂或模型错设。多重分析、结果驱动的变量选择和反复查看数据还会增加选择后的乐观程度，需要预设、校正或独立验证。

模型诊断检查推断所依赖的结构是否与数据相容。残差图、影响度、过度离散、随机效应分布、比例风险、预测校准和后验预测检验分别针对不同模型，没有一种“通过正态性检验”能够替代整套诊断。诊断发现的偏离应追溯到测量、设计、函数形式、方差或依赖结构，再选择变换、稳健估计、重新建模或限制解释范围。

报告应同时给出分析单位、样本进入流程、模型公式或效应定义、估计值与区间、关键诊断和敏感性分析。图表应尽量保留原始点、配对、层级或时间结构，而不是只留下柱高和显著性星号。可重复计算还需要保存数据字典、清理规则、代码、软件环境和随机种子；它使计算链可核查，但不能替代新的独立研究。美国国家科学院据此区分用同一数据和代码复现结果，与重新收集数据检验科学发现的可重复性。[^nasem-reproducibility]

## 因果推断与跨研究证据 { #causal-and-synthesis }

随机试验通过设计建立处理组的可比性；观察性研究需要额外说明因果效应如何从已观察分布中识别。[因果推断](causal_meta_analysis.md#association-to-effect)从潜在结局、目标试验和有向无环图进入一致性、交换性与正值性，再比较标准化、匹配、加权、双重稳健估计和敏感性分析。回归调整只有在变量关系和识别条件可辩护时才具有因果含义；加入更多协变量可能控制混杂，也可能打开碰撞路径或调整掉中介作用。Hernán 与 Robins 的目标试验框架把入组、处理策略、随访、结局和分析计划对齐，为观察性研究提供了明确的设计模板。[^what-if]

[系统综述与荟萃分析](systematic_review_meta_analysis.md#systematic-review)把问题、检索、筛选和风险偏倚评价预先组织起来，荟萃分析才在具有共同科学含义的效应尺度上进行定量合并。共同效应和随机效应模型表达不同的跨研究假设；研究间异质性、预测区间、小研究效应和证据确定性决定合并估计能够推广到哪里。Cochrane Handbook 强调，研究只有在总体、干预、比较、结局和设计方面足够相似，合并才可能回答有意义的问题。[^cochrane-meta] 多项有偏或不可识别的关联合并后仍然是有偏的关联，精确度不能自动转化为因果效力。

## 学习路径 { #learning-paths }

第一次系统学习时，宜按以下顺序建立共同语言：

1. 先从[实验设计、效能与可重复统计](experimental_design.md)辨认研究单位、处理分派、重复、偏倚控制和待估量；
2. 再由[生物数据整理与描述统计](data_description.md)与[概率与概率分布](probability.md)建立变量、分布、随机机制和条件信息的共同语言；
3. 进入[抽样、参数估计与置信区间](sampling_estimation.md)，理解统计量、标准误与覆盖率；
4. 随后学习[假设检验、效应量与多重比较](hypothesis_testing.md)与[分类资料与非参数检验](categorical_nonparametric.md)，把检验放回估计、设计和数据结构之中。

完成基础检验后，可由[方差分析与线性模型](anova_regression.md)进入[相关、回归与模型诊断](correlation_regression.md)和[广义线性模型与混合效应模型](generalized_mixed_models.md)，再按数据结构选择[多元统计、降维与分类](multivariate_models.md)。[生存分析与纵向数据](survival_longitudinal.md)针对事件时间与重复轨迹，作为平级专题单独展开。

已经掌握基本估计和模型诊断后，可用[贝叶斯推断与计算统计](bayesian_computational.md)扩展不确定性表达与计算工具，以[因果推断](causal_meta_analysis.md)学习从关联跨向干预效应，再由[系统综述与荟萃分析](systematic_review_meta_analysis.md)进入多研究证据的检索、评价与定量综合。阅读任何路径都应反复回到同一组问题：研究单位是什么，数据怎样产生，目标量是什么，哪些条件使估计成立，不确定性怎样表达，结论能够推广到哪里。

## 参考资料与延伸阅读 { #references }

- NIST/SEMATECH. [*e-Handbook of Statistical Methods*](https://www.itl.nist.gov/div898/handbook/).
- Whitlock MC, Schluter D. *The Analysis of Biological Data*. Macmillan Learning.
- Dalgaard P. *Introductory Statistics with R*. Springer.
- National Academies of Sciences, Engineering, and Medicine. [*Reproducibility and Replicability in Science*](https://doi.org/10.17226/25303). National Academies Press, 2019.
- Hernán MA, Robins JM. [*Causal Inference: What If*](https://www.hsph.harvard.edu/miguel-hernan/wp-content/uploads/sites/1268/2024/04/hernanrobins_WhatIf_26apr24.pdf), 2024 更新版。
- Higgins JPT, Thomas J, Chandler J, et al., eds. [*Cochrane Handbook for Systematic Reviews of Interventions*](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current), version 6.5, 2024.

[^ich-estimand]: International Council for Harmonisation. [ICH E9(R1): Addendum on Estimands and Sensitivity Analysis in Clinical Trials](https://www.ema.europa.eu/en/documents/scientific-guideline/ich-e9-r1-addendum-estimands-and-sensitivity-analysis-clinical-trials-guideline-statistical-principles-clinical-trials-step-5_en.pdf)。本页将其“先定义目标、再选择估计方法”的一般原则扩展到其他生命科学研究。
[^nist-confidence]: NIST/SEMATECH. [Confidence Limits](https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm)：以重复抽样中区间覆盖固定参数的比例解释置信水平。
[^asa-pvalue]: Wasserstein RL, Lazar NA. [The ASA's Statement on *p*-Values: Context, Process, and Purpose](https://doi.org/10.1080/00031305.2016.1154108). *The American Statistician*, 2016, 70(2): 129–133。
[^nasem-reproducibility]: National Academies of Sciences, Engineering, and Medicine. [*Reproducibility and Replicability in Science*](https://doi.org/10.17226/25303). National Academies Press, 2019。
[^what-if]: Hernán MA, Robins JM. [*Causal Inference: What If*](https://www.hsph.harvard.edu/miguel-hernan/wp-content/uploads/sites/1268/2024/04/hernanrobins_WhatIf_26apr24.pdf), 2024 更新版；另见 Hernán MA, Robins JM. [Using Big Data to Emulate a Target Trial When a Randomized Trial Is Not Available](https://pmc.ncbi.nlm.nih.gov/articles/PMC4832051/). *American Journal of Epidemiology*, 2016, 183(8): 758–764。
[^cochrane-meta]: Deeks JJ, Higgins JPT, Altman DG, McKenzie JE, Veroniki AA. [Chapter 10: Analysing Data and Undertaking Meta-analyses](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10). In: *Cochrane Handbook for Systematic Reviews of Interventions*, version 6.5, 2024。
