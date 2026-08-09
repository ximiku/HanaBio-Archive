# 因果推断与荟萃分析

相关、回归和组间比较能够描述数据中稳定的差异，却还没有单独回答“如果改变处理，结局会怎样”。因果推断把这个反事实问题写成明确的待估量，再说明研究设计和假设怎样把不可同时观察的反事实连接到实际数据。荟萃分析则面对另一层问题：若多个研究都估计了同一科学对比，怎样在保留研究内不确定性、研究间差异与偏倚边界的前提下综合证据。

这两部分并非彼此分离。进入荟萃分析的每个效应估计都来自某种研究设计；如果单项研究只支持关联，合并更多关联也不会自动产生因果解释。反过来，即使每项随机试验都具有良好的内部效度，不同物种、剂量、随访时点和结局定义也可能对应不同的因果待估量，不能只因都有一个效应值就机械合并。

## 从关联到干预效应 { #association-to-effect }

### 描述、预测与因果问题

本地素材把“因果关系”列为回归分析的条件，把共同受其他因素影响的“平行关系”列为相关分析的条件。这一经典区分提醒学习者注意变量之间可能存在不同生成关系，但统计工具与关系类型并非一一对应。相关系数描述联合变化，回归描述给定预测变量时的条件分布；它们可以服务于描述、预测，也可以在额外设计与识别条件成立时估计因果效应。[相关、回归与模型诊断](correlation_regression.md#questions-and-data)已经保留了单相关、复相关和偏相关的计算路径，本页进一步说明何时“调整其他变量”具有因果意义。

描述问题可以问施肥量与叶片氮含量在样地中怎样共同变化；预测问题可以问根据萌发温度和含水量能否预测种子萌发；因果问题则要问把温度从某一方案改为另一方案，会使同一目标种子群体的萌发概率改变多少。第三个问题需要定义可实施或至少足够清楚的干预、对照、结局、时间范围和目标总体。模型拟合得好、系数显著或控制变量很多，都不能替代这一步。

### 潜在结局与待估量

令二元处理 \(A\in\{0,1\}\)，个体 \(i\) 在处理与对照下的潜在结局分别为 \(Y_i(1)\) 和 \(Y_i(0)\)。个体处理效应是

\[
Y_i(1)-Y_i(0),
\]

但同一个体在同一研究时点只能经历其中一种处理，这就是因果推断的基本缺失数据结构。研究通常估计群体平均量，例如平均处理效应

\[
\operatorname{ATE}=E\{Y(1)-Y(0)\},
\]

或已接受处理者中的平均处理效应

\[
\operatorname{ATT}=E\{Y(1)-Y(0)\mid A=1\}.
\]

对于二分类结局，还可以比较 \(P\{Y(1)=1\}\) 与 \(P\{Y(0)=1\}\) 的风险差、风险比或优势比。它们在数值和可迁移性上不同；即使基于同一批数据，也不是同一个待估量的三种装饰性写法。连续结局可以比较均值差，时间到事件结局可以比较特定时点风险、限制平均生存时间或在条件成立时比较风险率。先定义待估量，再选择估计方法，延续了[实验设计](experimental_design.md#question-to-estimand)中建立的顺序。

潜在结局的记号还要求处理版本足够明确。若“高蛋白饲料”包含成分、能量密度和给药时程完全不同的方案，\(Y(1)\) 并非一个清楚的反事实。一个单位的处理也可能改变另一个单位的结局，例如传染病疫苗改变群体传播、样方除草改变邻近样方的种子雨、同笼动物共享微生物群。此时常用的无干扰假设不成立，需要把群体覆盖率、邻域处理或网络暴露纳入待估量，而不是把溢出效应当作普通误差。

## 目标试验与因果识别 { #target-trial-identification }

### 先写出理想试验

观察性研究可以先写出希望模拟的**目标试验**：纳入标准是什么，比较哪些处理策略，如何分派，随访从何时开始，结局和因果对比如何定义，以及采用意向处理效应还是依从方案效应。Hernán 与 Robins 将这种做法用于把观察性比较对齐到一个明确的随机试验问题；处理资格、处理分组与随访起点对齐，还能暴露不死时间偏倚等由时间定义造成的系统错误。[^target-trial]

例如比较“确诊后立即用药”与“暂不使用”的一年死亡风险，入组、处理判定和随访必须从同一个零时点开始。若把后来开始用药的个体从确诊时起都算作用药组，那么他们在真正用药前必须存活的时间被错误归给了治疗，处理组会获得一段结构性的“不会死亡”时间。单纯在 Cox 模型中加入更多基线变量并不能修正这个时间错位。

随机试验用已知的分派机制建立处理组可比性；观察性资料没有这项保证，因而必须把分派、随访、测量和选择机制写成可审查的假设。目标试验不是把观察研究包装成试验，也不能恢复没有测量的变量；它的作用是让问题、时间零点和分析策略保持一致。

### 一致性、交换性与正值性

在简单单时点处理中，常见识别条件包括一致性、交换性和正值性。**一致性**要求个体实际接受 \(A=a\) 时，其观察结局等于相应潜在结局 \(Y(a)\)，这依赖处理定义清楚且相关干扰已被建模。**条件交换性**写为

\[
Y(a)\perp A\mid L,
\]

表示在一组处理前变量 \(L\) 的各层内，实际接受不同处理的单位在潜在结局方面可比。随机分派可以由设计支持这种可比性；观察研究只能依靠充分测量共同原因、合理的因果结构和领域知识来论证。

**正值性**要求在用于推广的每个 \(L\) 取值处，各处理都有正概率：

\[
0<P(A=a\mid L=l)<1.
\]

若严重感染的动物必定接受药物、轻症动物从不接受，数据就没有共同支持区来比较相同病情下的两种策略。模型仍可能外推出一个系数，但这不等于数据识别了相应效应。实际分析要查看协变量重叠、倾向评分分布、极端权重和被排除人群，并把待估总体限制在有支持的区域。

这些条件与抽样代表性是不同问题。研究样本内的处理效应可以被识别，却未必能推广到其他物种、性别、发育阶段或环境；推广还需要目标总体与研究总体在效应修饰因素上的可比性，或使用标准化、抽样权重等方法重新加权。

### 因果图与变量角色

有向无环图（directed acyclic graph, DAG）用箭头表达研究者关于变量生成顺序和直接因果联系的假设。共同影响处理 \(A\) 与结局 \(Y\) 的变量是混杂来源；位于 \(A\rightarrow Y\) 路径上的变量是中介；同时受到两个变量影响的共同结果是碰撞变量。Greenland、Pearl 与 Robins 说明了因果图怎样识别需要阻断的后门路径，并揭示只按统计关联强弱选择“混杂因素”的不足。[^causal-diagrams]

假设宿主基础健康状态 \(L\) 同时影响接受治疗的概率和恢复结局，\(L\) 形成后门路径，应在设计或分析中处理。若治疗 \(A\) 与另一病理过程 \(U\) 都影响住院 \(S\)，只分析住院个体便相当于对碰撞变量 \(S\) 条件化，可能在 \(A\) 与 \(U\) 之间制造关联。治疗后的炎症指标若位于效应路径上，把它当作普通基线协变量调整则会改变问题，从总效应变成某种直接效应，并可能引入新的偏倚。

DAG 不从数据中自动读出真实因果结构，也不保证图中没有遗漏变量。它把领域假设显式化，使变量为何测量、为何调整或为何不调整可以被讨论。时间顺序、选择机制和测量过程同样要进入图或目标试验方案；仅画出暴露与结局之间的生物通路，而忽略谁进入样本、何时测量和谁失访，仍不足以支持识别。

## 从识别到估计 { #causal-estimation }

### 标准化与结局回归

若一致性、条件交换性和正值性成立，记

\[
m(a,l)=E(Y\mid A=a,L=l),
\]

则平均潜在结局可由 g 公式识别：

\[
E\{Y(a)\}
=\sum_l m(a,l)P(L=l).
\]

连续协变量时把求和换成积分。计算上可以在每个协变量层求结局均值，也可以拟合结局模型，再把每个单位分别设为 \(A=1\) 和 \(A=0\) 进行预测，最后在目标协变量分布上平均。这一过程称为标准化或 g-computation。

回归系数与标准化效应不总相同。非线性模型中的条件优势比通常不能直接当作边际优势比；交互存在时，一个处理系数也无法代表所有个体的平均效应。标准化明确了平均所用的人群分布，并能把风险差、风险比或均值差返回到易解释的尺度。结局模型仍需要正确表达非线性和交互，超出数据支持范围的预测也会破坏可靠性。

### 匹配、倾向评分与加权

倾向评分是给定处理前变量 \(L\) 时接受处理的概率

\[
e(L)=P(A=1\mid L).
\]

Rosenbaum 与 Rubin 证明，在所纳入协变量足以建立条件交换性的前提下，按真实倾向评分分层可以平衡这些已观察协变量。[^propensity-score] 倾向评分可以用于匹配、分层、加权或协变量调整；它压缩的是已测量协变量的处理分派信息，不能平衡未测混杂，也不会因为模型的处理预测准确率很高就自动成为好的因果设计。

匹配应先规定目标效应、距离、卡钳、是否替换和共同支持区，然后检查匹配后的协变量平衡，而不是只比较匹配前后的 *p* 值。匹配会改变目标总体：丢弃无法匹配的处理单位可能不再估计原先的 ATT，丢弃两端单位则可能转向重叠人群。标准化差异、分布图与有效样本量比“倾向评分模型显著”更直接地检验设计结果。

估计 ATE 的简单逆概率加权形式为

\[
\widehat{\operatorname{ATE}}_{\mathrm{IPW}}
\begin{aligned}
&=\frac1n\sum_{i=1}^{n}
\left\{
\frac{A_iY_i}{\widehat e(L_i)}
\right.\\[-2pt]
&\qquad\left.
-\frac{(1-A_i)Y_i}{1-\widehat e(L_i)}
\right\}.
\end{aligned}
\]

它构造一个处理与已测基线变量近似独立的伪总体。极端倾向评分会产生巨大权重，使少数单位主导估计；稳定化权重、截尾或改估重叠人群可以改善精度，却同时改变方法或待估量，必须预先说明并做敏感性分析。标准误还应反映权重估计、匹配、聚类和重复测量结构。

### 双重稳健估计

增广逆概率加权等双重稳健估计同时使用处理模型和结局模型。在常见条件下，只要两者之一正确设定，效应估计仍可保持一致；Bang 与 Robins 给出了这一性质在缺失资料与因果模型中的系统表述。[^doubly-robust] “双重稳健”并不表示两个任意错误模型会互相修复，也不消除未测混杂、正值性违反或小样本中的极端估计。使用灵活机器学习拟合滋扰函数时，还需要交叉拟合等安排控制过拟合，并以设计诊断和敏感性分析检查结果。

### 工具变量与准实验设计

有效工具变量 \(Z\) 必须影响处理，且在所需条件下与潜在结局的共同原因独立，并只通过实际处理影响结局。二元工具和处理还常需要单调性，排除因工具鼓励而反向拒绝处理的“逆从者”。在这些假设下，工具变量估计的通常是因工具而改变处理选择者中的局部平均处理效应，而不必等于总体 ATE。Angrist、Imbens 与 Rubin 的潜在结局表述使这一局部待估量及其假设变得明确。[^instrumental-variables]

回归不连续设计利用处理规则阈值附近的近似可比性；双重差分依赖未处理反事实趋势的平行趋势假设；自然实验则依赖外部事件产生的近似随机变异。它们都从特定设计获得识别，而不是“观察性数据加一种回归”。需要检查阈值操纵、处理前趋势、同期冲击、溢出效应和可推广范围，并清楚区分局部效应与总体效应。

## 中介、时间变化与未测偏倚 { #complex-causal-questions }

### 中介与效应修饰

中介分析询问处理通过某一路径产生了多少效应。例如药物可能先改变炎症因子，再改变组织损伤。总效应、受控直接效应、自然直接效应和自然间接效应对应不同干预和反事实对比；后两者通常需要关于处理后中介—结局混杂及跨反事实关系的更强假设。Imai、Keele 与 Tingley 的一般框架把识别、估计和对未测中介混杂的敏感性分析放在同一体系中。[^causal-mediation]

中介与效应修饰应分开。中介位于因果路径上，效应修饰则表示处理效应随基线变量或环境改变。交互项的尺度很重要：风险差尺度无交互不意味着风险比或优势比尺度也无交互。亚组结论应预先规定、报告区间并避免把“一个亚组显著、另一个不显著”直接解释为两组效应不同；真正的异质性需要检验组间对比。

### 时间变化处理与混杂

在纵向研究中，既往处理可改变后续病情，病情又影响后续处理和最终结局。此时病情既是下一时点的混杂因素，又是既往处理的结果。把每次病情都作为普通时间变化协变量纳入结局回归，可能阻断既往处理效应或产生偏倚。

边际结构模型使用按完整处理史计算的逆概率权重，重建每个时点处理与已观察历史近似独立的伪总体。Robins、Hernán 与 Brumback 正是为这类“受既往处理影响的时间变化混杂”提出了相应方法。[^marginal-structural] 参数 g 公式和结构嵌套模型提供其他 g 方法路径。治疗、失访和死亡过程往往需要共同考虑；极端累计权重、历史变量测量频率和处理策略的可执行性都是主要诊断对象。

### 敏感性分析与负对照

观察研究的主要威胁不只来自抽样误差。未测混杂、选择偏倚、暴露或结局误分类、处理版本不一致、正值性不足和干扰都可能使区间很窄却围绕错误目标。敏感性分析应把这些偏倚参数化，说明多强的未测关系、多少差异性误分类或多大选择效应会改变结论。

E-value 把一个风险比尺度上的结果转换为：一个未测混杂因素至少要与处理、结局分别具有多强的条件关联，才能把观察关联解释到指定阈值。它是一种单参数式的稳健性概括，不代表该强度的混杂存在，也不能处理所有偏倚机制；结果应与已测混杂因素的强度和生物学可能性一起解释。[^e-value]

负对照结局应不受目标处理影响，负对照暴露应不影响目标结局，却与待检测的混杂或测量机制共享结构。若出现不应有的关联，可以提示残余混杂、选择或测量偏倚。Lipsitch、Tchetgen Tchetgen 与 Cohen 系统说明了这一思路，同时强调负对照自身的结构假设也可能错误。[^negative-controls] 多种设计、不同偏倚方向和不同数据源所得结果若相互支持，会比单一模型规格更有说服力，但“三角互证”仍需要逐项审查每条证据的识别条件。

## 从系统综述到可合并效应 { #systematic-review }

### 问题、方案与研究选择

系统综述先定义问题，再用可重复的方法寻找、筛选和评价全部符合条件的证据；荟萃分析只是其中可选的定量综合步骤。研究之间若在总体、处理、对照、结局或设计上没有足够的科学可比性，不合并往往比计算一个精确而含义混杂的平均数更合适。Cochrane Handbook 也明确要求只在这些要素足够相似、能够回答有意义问题时进行荟萃分析。[^cochrane-meta]

方案应预先规定目标总体、干预或暴露、比较、结局、研究设计、信息来源、检索式、筛选和提取规则、偏倚评价、效应尺度、主要模型与敏感性分析。注册或时间戳能够区分预设决策与看到结果后的改变。检索应覆盖数据库、注册平台、参考文献和适当的灰色文献；至少要保存去重、标题摘要筛选、全文排除理由和多份报告归并为同一研究的轨迹。

PRISMA 2020 提供系统综述报告的 27 项清单和流程图，用来透明呈现问题、检索、选择、分析与结果。[^prisma-2020] 它是报告指南，不是证明综述无偏的质量分数。检索遗漏、结局选择、数据提取错误或不合理合并不会因为清单填写完整而消失。

### 效应尺度与共同待估量

每项研究应先转换为同一效应尺度上的估计 \(y_i\) 及其标准误 \(s_i\)。这一步要求统计公式可转换，也要求科学待估量可比。

| 数据与问题 | 常用效应量 | 合并尺度 | 主要边界 |
| --- | --- | --- | --- |
| 同一单位的连续结局 | 均值差（MD） | 原量纲 | 测量工具、随访时点和方向必须一致 |
| 同一构念的不同量表 | 标准化均值差（SMD） | 标准差单位 | 各研究标准差受人群异质性和测量信度影响 |
| 二分类结局 | 风险差、风险比、优势比 | RD 原尺度；RR、OR 通常取对数 | 三者待估含义不同，OR 在常见结局时不近似 RR |
| 时间到事件结局 | 风险比或限制平均生存时间差 | log(HR) 或时间单位 | HR 依赖比例风险及随访结构，不能与风险比混称 |
| 相关系数 | Pearson \(r\) | Fisher \(z=\operatorname{arctanh}(r)\) | 变量范围、测量误差和群体组成要可比 |

未经调整与经因果调整的估计、不同调整集对应的估计、终点值与变化值、个体随机与整群随机试验、多个剂量和多个随访时点，都不能在忽略协方差的情况下当作独立同类结果。若同一研究贡献多个相关效应，可以预先选定一个结果，合成为研究内对比，或使用多层、多变量模型和稳健方差估计保留依赖结构。

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

精度高的研究权重大，但权重只表达在模型下的抽样信息，不是研究质量分。一个样本很大却存在严重分配隐藏、失访或结局选择偏倚的研究仍会得到很大逆方差权重。偏倚风险应通过纳入标准、领域评价、分层或敏感性分析处理，不能简单把“质量分”乘进权重来补救。

“固定效应”在不同文献中还可能指只对已纳入研究求精度加权平均的 fixed-effects 解释。无论采用哪种术语，都要说明推断对象：是假设所有研究共享一个真实效应，还是只概括这批研究的加权平均。若目标是推广到变化的研究条件，单一共同效应假设通常过强。

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

\(\tau^2\) 是研究间方差。它增大时，各研究权重趋于接近，小研究相对共同效应模型获得更多权重。DerSimonian–Laird 矩估计因计算简洁而成为经典方法，但在研究少或异质性估计困难时可能表现不佳；Cochrane 2024 版已同时讨论 REML、Paule–Mandel 等估计以及 HKSJ 类区间方法，并指出没有一种方法在所有情形都最优。[^der-simonian-laird]

随机效应模型不是对异质性的自动修复。若研究差异来自方向一致的偏倚、不可比结局或错误数据提取，把它们视为围绕平均值的随机波动反而会掩盖问题。模型选择应由待估问题和预期异质性决定，不能先做异质性检验，再按 *p* 值在共同效应与随机效应之间切换。

## 异质性与森林图 { #heterogeneity }

### 异质性统计量

Cochran \(Q\) 统计量为

\[
Q=\sum_{i=1}^{k}w_i(y_i-\widehat\theta)^2,
\]

在共同效应假设下近似与 \(k-1\) 自由度的 \(\chi^2\) 分布比较。研究少时检验异质性的功效低，研究很多时又可能检出很小而无实际意义的差异，因此未显著不能证明同质，显著也不能说明差异在生物学上重要。

常用不一致性统计量为

\[
I^2=\max\left\{0,\frac{Q-(k-1)}{Q}\right\}\times100\%.
\]

它概括观测效应变异中超出研究内抽样误差的比例，受到研究精度结构影响，并不等于“效应有多少百分比不同”。Higgins 等提出 \(I^2\) 是为了把注意力从单纯检验转向不一致程度；其区间在研究少时可能很宽。[^meta-inconsistency] 固定的 25%、50%、75% 标签只能作粗略提示，解释还要结合效应方向、\(\tau^2\) 的原尺度含义、偏倚风险和研究条件。

\(\tau^2\) 直接描述真实效应在分析尺度上的方差。它在 \(\log(\mathrm{RR})\)、SMD 或原始均值差尺度上的大小含义不同，因而不能跨效应尺度机械比较。最好同时报告 \(\widehat\tau^2\) 及其不确定性、\(I^2\)、各研究结果，并说明临床、生物学和方法学差异。

### 平均效应与预测区间

随机效应平均值的置信区间回答“平均真实效应在哪里”，不回答新研究的真实效应可能落在哪里。一个常见预测区间形式为

\[
\widehat\mu
\pm t^*\sqrt{\operatorname{SE}(\widehat\mu)^2+\widehat\tau^2},
\]

其中 \(t^*\) 和自由度随所用推断方法而定。Higgins、Thompson 与 Spiegelhalter 推动在随机效应荟萃分析中用预测区间呈现研究间效应分布；Cochrane 同时提醒，研究很少、效应分布偏离假设或漏斗图明显不对称时，预测区间也可能很不稳定。[^meta-prediction]

森林图把每项研究的效应点、区间和权重与合并结果放在同一坐标上。方块大小通常表示权重，横线表示研究区间，菱形表示合并估计及其区间；无效线在均值差和风险差尺度为 0，在比值尺度为 1。森林图应同时显示效应尺度、方向、研究标识和模型。逐项区间是否跨无效线不是研究“支持或反对”的二分投票，合并结果也不能遮住方向相反、区间极宽或设计不同的研究。

## 异质性来源、缺失证据与特殊资料 { #meta-diagnostics }

### 亚组分析与元回归

亚组分析按研究特征分别合并，元回归把研究效应写成研究层协变量的函数。它们可以探索剂量、物种、结局测量、随访长度或偏倚风险是否解释异质性，但研究层关联可能与个体层效应修饰不同，存在生态偏倚。比较“一个亚组显著、另一个不显著”仍不构成亚组差异；需要直接估计组间交互，并报告区间。

研究数少时，元回归系数非常不稳定；同时尝试许多调节变量又会产生多重性和结果驱动选择。可信分析应在方案中预设少量具有机制依据的变量，确认各水平有足够研究和覆盖，并把事后发现视为假设生成。若处理剂量、基线风险和研究质量彼此共线，单项元回归很难把它们的作用分开。

### 小研究效应与报告偏倚

研究结果的缺失可能发生在整项研究、某个结局、某个时间点或某种分析层面。漏斗图绘制效应与精度；当小研究更分散时，理想条件下形成近似对称漏斗。Egger 回归以效应标准化量对精度检验不对称，是经典的小研究效应诊断。[^egger-bias] 不对称还可能来自真实效应随研究规模变化、低质量小研究、效应尺度与标准误的数学关系或偶然性，因此不能把漏斗不对称直接命名为发表偏倚。

研究很少时，漏斗图和不对称检验信息有限；选择模型、p-curve、截尾填补等方法也依赖额外假设，不能“恢复真正缺失研究”。更直接的证据来自方案注册、试验注册、监管资料、预印本、作者联系以及同一研究在不同报告中的结局核对。敏感性分析可以说明在何种选择机制下结论改变，但应保留其假设边界。

### 少量研究、稀有事件与相关效应

随机效应分析在研究很少时既难估 \(\tau^2\)，也难校准平均效应区间。HKSJ 调整在某些异质情形可改善覆盖，但在极少研究或估计异质性为零时也可能过宽或过窄。应呈现单项研究、不同合理方法和结论敏感性，避免把某一种软件默认值写成通用解答。

二分类稀有事件中，一组或两组零事件会使 log(RR) 或 log(OR) 不可直接计算，统一加 0.5 的连续性校正可能产生偏倚。Mantel–Haenszel、Peto、精确／二项似然、广义线性混合模型或贝叶斯模型各有条件；Peto 法主要适用于效应不大、组间分配近似平衡且事件罕见的情形。双零事件研究对相对效应常不提供直接信息，却仍包含绝对风险信息，不能只按软件报错机械删除。方法应根据待估尺度、零事件模式和样本结构预先选择。[^cochrane-rare-events]

同一研究的多个结局、剂量、物种或时点共享样本，效应估计彼此相关。把它们当作独立研究会人为缩小标准误并改变权重。可以选择预设时点、合并研究内多组、使用多变量或多层荟萃模型，或在研究数和聚类数足够时采用稳健方差估计；关键是保留研究作为独立证据单位。

## 网络荟萃分析与证据确定性 { #network-and-certainty }

### 直接、间接与网络证据

网络荟萃分析把三个以上干预的直接比较连接起来。例如已有 A 对 B 和 A 对 C 的试验时，可以通过共同对照 A 间接估计 B 对 C，并与 B 对 C 的直接试验共同综合。有效的间接比较依赖**传递性**：不同对比中的研究在所有重要效应修饰因素上应足够可比，好像同一目标总体中的单位原则上都可随机到网络内任一干预。

直接与间接证据对同一对比不一致称为不连贯或不一致。Cochrane 网络荟萃分析指南要求在每一间接比较审查传递性、在证据闭环检查不连贯，并结合普通荟萃分析中的异质性。[^cochrane-network] 干预排名只是在模型和网络假设下的不确定排序；若效应区间高度重叠、网络稀疏或传递性不可信，一个精确的第一名概率并不等于已证明最佳。

### 研究内偏倚与证据体确定性

风险偏倚评价针对具体结果，而不是给整篇论文一个笼统质量分。随机试验可按随机化过程、偏离预定干预、缺失结局、结局测量和选择报告等机制评价；非随机干预研究还要重点处理混杂、选择、干预分类和处理后偏离。Cochrane 的 RoB 2 明确按特定结局、时点和分析结果评价，ROBINS-I 则以一个无偏目标试验作为非随机研究的比较基准。[^risk-of-bias]

单项研究偏倚风险与整个证据体的确定性是不同层级。GRADE 按结局综合风险偏倚、不一致性、间接性、不精确和发表偏倚等方面，判断效应估计接近目标量的可信程度。[^grade-certainty] 一个合并 *p* 值很小、样本数很大的荟萃分析，仍可能因所有研究共享同一偏倚、结局与决策问题间接或研究间方向冲突而只有低确定性。

## 因果证据的综合与报告 { #causal-evidence-synthesis }

荟萃分析中的“效应量相同”至少包含三层含义：数学尺度相同、科学待估量相同、识别假设足够可比。观察研究中，一个估计可能是基线协变量标准化后的 ATE，另一个可能是匹配样本 ATT，第三个可能是工具变量识别的局部效应；即使都以风险比报告，也不宜直接视为同一总体量。合并前应记录目标总体、处理版本、时间零点、调整集、效应尺度和主要偏倚方向。

多个有相同未测混杂的观察研究不会因数量增加而消除偏倚。研究间差异有时是真实效应修饰，有时来自处理和测量定义，有时来自偏倚强度变化。随机效应模型只描述效应分布，不能识别这些来源。证据综合可按设计分层，比较随机与非随机证据，使用偏倚校正或敏感性模型，并解释不同设计为何可能给出不同目标量。

一份可复核的因果研究报告应给出目标试验或等价问题说明、DAG 与调整理由、待估量、识别假设、共同支持和权重诊断、主要估计与区间、替代规格、负对照或偏倚敏感性分析，以及结果可推广到哪些单位和条件。荟萃分析报告还应给出方案与偏离、完整检索、筛选流程、数据和代码、逐研究效应、偏倚评价、合并模型、\(\tau^2\)、\(I^2\)、预测区间、影响分析、缺失证据诊断和证据确定性。

因果推断把研究结论追溯到设计与假设，荟萃分析把多项研究放入同一待估问题和异质性结构。二者共同要求研究者说明数据能识别什么、模型又增加了什么假设。精确计算的价值正在于把这些条件表达得更清楚，而不是把不相同的问题压缩成一个看似确定的数字。

## 参考资料与延伸阅读

[^target-trial]: Hernán MA, Robins JM. [Using Big Data to Emulate a Target Trial When a Randomized Trial Is Not Available](https://pmc.ncbi.nlm.nih.gov/articles/PMC4832051/). *American Journal of Epidemiology*, 2016, 183(8): 758–764；Hernán MA, Robins JM. [Causal Inference: What If](https://www.hsph.harvard.edu/miguel-hernan/wp-content/uploads/sites/1268/2024/04/hernanrobins_WhatIf_26apr24.pdf), 2024 更新版。

[^causal-diagrams]: Greenland S, Pearl J, Robins JM. [Causal Diagrams for Epidemiologic Research](https://pubmed.ncbi.nlm.nih.gov/9888278/). *Epidemiology*, 1999, 10(1): 37–48.

[^propensity-score]: Rosenbaum PR, Rubin DB. [The Central Role of the Propensity Score in Observational Studies for Causal Effects](https://doi.org/10.1093/biomet/70.1.41). *Biometrika*, 1983, 70(1): 41–55.

[^doubly-robust]: Bang H, Robins JM. [Doubly Robust Estimation in Missing Data and Causal Inference Models](https://pubmed.ncbi.nlm.nih.gov/16401269/). *Biometrics*, 2005, 61(4): 962–973.

[^instrumental-variables]: Angrist JD, Imbens GW, Rubin DB. [Identification of Causal Effects Using Instrumental Variables](https://doi.org/10.2307/2291629). *Journal of the American Statistical Association*, 1996, 91(434): 444–455.

[^causal-mediation]: Imai K, Keele L, Tingley D. [A General Approach to Causal Mediation Analysis](https://pubmed.ncbi.nlm.nih.gov/20954780/). *Psychological Methods*, 2010, 15(4): 309–334.

[^marginal-structural]: Robins JM, Hernán MA, Brumback B. [Marginal Structural Models and Causal Inference in Epidemiology](https://pubmed.ncbi.nlm.nih.gov/10955408/). *Epidemiology*, 2000, 11(5): 550–560.

[^e-value]: VanderWeele TJ, Ding P. [Sensitivity Analysis in Observational Research: Introducing the E-Value](https://pubmed.ncbi.nlm.nih.gov/28693043/). *Annals of Internal Medicine*, 2017, 167(4): 268–274.

[^negative-controls]: Lipsitch M, Tchetgen Tchetgen E, Cohen T. [Negative Controls: A Tool for Detecting Confounding and Bias in Observational Studies](https://pmc.ncbi.nlm.nih.gov/articles/PMC3053408/). *Epidemiology*, 2010, 21(3): 383–388.

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
