# 方差分析与线性模型

方差分析（analysis of variance, ANOVA）处理的核心问题是：当若干组观测均围绕各自的总体均值波动时，组间均值的差异能否由实验误差解释。它不直接把每两组依次做检验，而是先将全部观测的变异按模型来源分解，再比较某一来源的均方与合适的误差均方。单因素 ANOVA、析因 ANOVA、区组分析和协方差分析看似各有一套表格，实质上都是一般线性模型对不同设计矩阵与假设的表达。

这种统一视角不会取消经典手算路径。平方和、自由度与 F 表仍然揭示了变异怎样被分配，也能暴露原始数据中的实验单位、平衡性和误差层级。设计矩阵则把这些原理扩展到不等样本量、交互作用、连续协变量和更复杂的效应结构。两条路径共同指向同一个要求：检验对象、误差项和可推广范围都必须由研究设计决定。

## 从试验语言到模型对象 { #design-language }

### 因素、水平、处理与重复

因素是可能改变响应变量的解释变量，例如培养温度、基因型或药物剂量。因素的具体取值称为水平。单因素试验中，一个水平就是一个处理；多因素试验中，处理通常是若干因素水平的组合，例如温度 \(25\,^{\circ}\mathrm C\) 与高氮条件共同构成一个处理组合。连续剂量既可按若干预设水平作为分类因素，也可保留数值尺度拟合剂量—反应趋势；两种写法回答的问题不同。

试验单位是能够独立接受某个处理的最小单位。把一个处理施加到多个试验单位，才形成生物学意义上的重复。若每只小鼠接受一种饲料，而每只小鼠取三张切片，处理的重复数是小鼠数，不是切片数；切片是同一试验单位内的子样本。重复测量、技术复孔和空间子样方可以提高测量精度，却不会自动增加处理分派的独立信息。实验单位与观测单位的区别已经在[生物数据整理与描述统计](data_description.md#population-to-table)中建立，ANOVA 的误差层级必须继续保留这个结构。

效应是模型中与某一因素或水平组合相联系的响应差异。主效应描述一个因素在指定的其他因素分布上平均后的对比；交互作用描述一个因素的效应随另一因素水平而改变。因而主效应不是因素“相对独立的作用”，交互也不是两个作用简单相加后多出来的一项：它们都是相对于明确平均方式和参照水平定义的模型对比。

### 固定、随机与混合效应

固定效应关注研究中特定水平的均值或对比。例如，研究者选择三种明确配方并希望比较这三种配方，配方通常作为固定效应。随机效应把观察到的水平视为更大水平总体的一个样本，目标转为估计水平间变异。例如，从某地区许多可能地点中抽取若干样地，地点效应可作为随机变量，其方差描述地点间异质性。NIST 的单因素模型也以水平是否从更大水平总体随机抽取来区分固定与随机效应。[^nist-oneway-model]

能否人为控制不是分类标准。操作者可以被严格安排，却仍可能代表更广泛的操作者总体；年份无法由研究者制造，却可作为几个特定年份的固定比较。判断时应先问：结论只关于这些水平，还是要推广到未观察水平？模型要估计各水平对比，还是估计水平间方差？

固定效应和随机效应同时存在时形成混合效应模型。例如，三种固定处理在随机抽取的地点中重复，模型既估计处理对比，也估计地点及地点内相关。随机因素会改变期望均方、F 检验分母和自由度；复杂设计不能把每个效应都机械地除以同一个残差均方。随机、混合与重复测量模型将在[广义线性模型与混合效应模型](generalized_mixed_models.md)中继续展开，本页保留它们与经典 ANOVA 表的接口。

## 单因素固定效应 ANOVA { #one-way-anova }

### 单元均值模型与效应模型

设因素 \(A\) 有 \(k\) 个水平，第 \(i\) 个水平有 \(n_i\) 个独立观测，总样本量 \(N=\sum_i n_i\)。单元均值模型写为

\[
Y_{ij}=\mu_i+\varepsilon_{ij},
\qquad i=1,\ldots,k,\quad j=1,\ldots,n_i.
\]

这里 \(\mu_i\) 是第 \(i\) 组总体均值，\(\varepsilon_{ij}\) 是该观测相对于组均值的误差。经典固定效应模型假定误差相互独立、均值为零、具有共同方差 \(\sigma^2\)，并在精确有限样本 F 推断中假定正态。NIST 给出的模型和条件与此一致。[^nist-oneway-model]

同一模型也可写成效应形式：

\[
Y_{ij}=\mu+\tau_i+\varepsilon_{ij}.
\]

其中 \(\tau_i\) 是第 \(i\) 个水平相对于某个基准的效应，而非“处理误差”。由于 \(\mu\) 与全部 \(\tau_i\) 同时自由变化会产生不唯一表示，需要施加约束，例如 \(\sum_i\tau_i=0\)，或指定一个水平为参照。不同约束改变系数的文字解释，却不会改变各组拟合均值、残差或可估计的组间对比。

总体检验为

\[
H_0:\mu_1=\mu_2=\cdots=\mu_k,
\qquad
H_A:\text{至少有一个总体均值不同}.
\]

备择假设没有指出哪一组不同，也没有规定差异方向。拒绝总体零假设后仍需用预先规定的对比或适当的多重比较来回答具体问题；未拒绝则表示这组数据对总体差异的证据不足，不证明所有均值完全相等。

### 平方和恒等式

以 \(\bar Y_{i\cdot}\) 表示第 \(i\) 组样本均值，以 \(\bar Y_{\cdot\cdot}\) 表示按观测数加权的总均值。每个观测相对于总均值的偏差可以分解为

\[
Y_{ij}-\bar Y_{\cdot\cdot}
=
(\bar Y_{i\cdot}-\bar Y_{\cdot\cdot})
+(Y_{ij}-\bar Y_{i\cdot}).
\]

对全部观测平方求和后，交叉项为零，得到

\[
SS_{\mathrm{Total}}
=SS_A+SS_E,
\]

\[
SS_{\mathrm{Total}}
=\sum_{i=1}^{k}\sum_{j=1}^{n_i}
(Y_{ij}-\bar Y_{\cdot\cdot})^2,
\]

\[
SS_A
=\sum_{i=1}^{k}n_i
(\bar Y_{i\cdot}-\bar Y_{\cdot\cdot})^2,
\qquad
SS_E
=\sum_{i=1}^{k}\sum_{j=1}^{n_i}
(Y_{ij}-\bar Y_{i\cdot})^2.
\]

\(SS_A\) 衡量组均值围绕总均值的变异，\(SS_E\) 衡量同组观测围绕组均值的剩余变异。后者叫残差平方和，不意味着其中只有不可避免的随机测量误差；遗漏的批次、时间趋势、异方差或依赖结构也可能进入残差。

经典手算常使用校正数。令 \(T_i=\sum_jY_{ij}\)、\(T=\sum_iT_i\)，则

\[
C=\frac{T^2}{N},
\qquad
SS_{\mathrm{Total}}=\sum_{i,j}Y_{ij}^2-C,
\]

\[
SS_A=\sum_{i=1}^{k}\frac{T_i^2}{n_i}-C,
\qquad
SS_E=SS_{\mathrm{Total}}-SS_A.
\]

这些公式同时适用于相等和不等组样本量。原素材在不等样本量公式中漏掉了总和的平方；正确校正数始终是 \(T^2/N\)。Penn State 对一般线性模型的手算说明也给出这一恒等式及 \(T_i^2/n_i\) 的处理平方和。[^psu-linear-model]

### 自由度、均方与 F 检验

平方和除以相应自由度得到均方：

| 变异来源 | 平方和 | 自由度 | 均方 | F 统计量 |
| --- | ---: | ---: | ---: | ---: |
| 因素 \(A\) | \(SS_A\) | \(k-1\) | \(MS_A=SS_A/(k-1)\) | \(F=MS_A/MS_E\) |
| 残差 | \(SS_E\) | \(N-k\) | \(MS_E=SS_E/(N-k)\) |  |
| 校正总变异 | \(SS_{\mathrm{Total}}\) | \(N-1\) |  |  |

总均值的估计消耗一个自由度；\(k\) 个组均值相对于总均值只有 \(k-1\) 个独立偏差；每组估计一个均值后，残差共有 \(N-k\) 个自由度。因此原素材所写的组间自由度 \(n-1\) 应改为 \(k-1\)。NIST 的 ANOVA 表同样给出 \(k-1\)、\(N-k\) 与 \(N-1\) 的分解。[^nist-anova-table]

在 \(H_0\) 和经典模型条件下，\(MS_A\) 与 \(MS_E\) 都估计同一个误差方差，因而

\[
F=\frac{MS_A}{MS_E}\sim F_{k-1,N-k}.
\]

若组均值确有差异，\(MS_A\) 还包含均值偏离所贡献的变异，F 往往增大。F 检验比较的是模型解释的变异与残差变异，不是把“处理效应方差”当作一个直接观测量。两组时，等方差单因素 F 检验与 pooled *t* 检验满足 \(F=t^2\)，这也说明 ANOVA 是均值线性模型的扩展。

## ANOVA 的一般线性模型表示 { #general-linear-model }

### 设计矩阵与参数化

把 \(N\) 个响应排成向量，ANOVA 可以写成

\[
\mathbf Y=\mathbf X\boldsymbol\beta+\boldsymbol\varepsilon,
\qquad
\boldsymbol\varepsilon\sim N(\mathbf 0,\sigma^2\mathbf I).
\]

设计矩阵 \(\mathbf X\) 记录每个观测属于哪些因素水平、交互组合或协变量取值；\(\boldsymbol\beta\) 存放相应参数。一个 \(k\) 水平因素可以用 \(k-1\) 个参照编码列、\(k-1\) 个和为零编码列，或无截距的 \(k\) 个单元均值列表示。R 的正式文档也明确说明，模型矩阵会把因素按对比编码展开，并以相应列构成交互项。[^r-model-matrix]

编码决定单个系数回答什么问题。参照编码下，截距是参照组均值，其余系数是各组与参照组之差；和为零编码下，截距对应一组规定权重的总体水平，系数表达相对偏离。只要模型张成同一列空间，拟合值和所有可估计均值对比一致。因而“某个虚拟变量系数不显著”不能自动替代因素的 \(k-1\) 自由度总体检验。

R 的 `aov` 本身通过 `lm` 拟合 ANOVA，并以传统 ANOVA 语言显示结果；官方文档同时提醒，它主要为平衡设计组织输出，不平衡或多误差层设计更难解释。[^r-aov] 这不是软件细节，而是一个统计事实：ANOVA 与回归共享同一线性模型骨架，差别主要来自预测变量的尺度、设计结构以及要检验的线性函数。这里的“一般线性模型”（general linear model）仍假定响应由参数的线性组合表示，不是允许非正态响应和链接函数的“广义线性模型”（generalized linear model）。

### F 检验是嵌套模型比较

单因素总体零假设可比较两个嵌套模型：约简模型只含一个共同均值，完整模型为每组允许不同均值。设两模型残差平方和分别为 \(SSE_R,SSE_F\)，参数秩相差 \(q\)，完整模型残差自由度为 \(\nu\)，则

\[
F=
\frac{(SSE_R-SSE_F)/q}{SSE_F/\nu}.
\]

这个表达把“变异来源”翻译为“加入一组参数后减少了多少残差平方和”。两因素主效应、交互、区组、嵌套效应和 ANCOVA 斜率都可以用同一形式检验，但约简模型必须代表真正的零假设，分母也必须匹配随机化与相关结构。

## 均值估计、效应量与计划对比 { #estimation-contrasts }

### 从总体 F 回到生物学尺度

ANOVA 表应与各组样本量、原始点、均值及区间一起阅读。总体 F 很大可能来自一个组远离其余组，也可能来自沿剂量有序变化的多个均值；同一个 *p* 值不能区分这些形状。最有解释力的结果通常是预先定义的均值差、趋势或处理组合差及其置信区间。

单因素固定效应设计中，常见方差解释量为

\[
\eta^2=\frac{SS_A}{SS_{\mathrm{Total}}}.
\]

它描述本样本校正总变异中由组别模型分配的比例，但会随设计中的其他因素、协变量范围和样本构成变化。偏差校正的一种总体效应估计为

\[
\omega^2=
\frac{SS_A-(k-1)MS_E}
{SS_{\mathrm{Total}}+MS_E}.
\]

样本 \(\omega^2\) 可能略小于零，这表示估计在零附近波动，不代表“负的解释变异”。多因素设计中还常见偏 \(\eta^2\)，其分母只含该效应与误差平方和，因而不能脱离设计直接与普通 \(\eta^2\) 或另一研究比较。效应量应注明公式并尽可能给出区间；方法学综述也强调 ANOVA 效应量的用途依赖组间、组内设计和后续综合目标。[^anova-effect-size]

### 计划对比

若科学问题在观察结果前已经明确，线性对比比“总体显著后寻找任意差异”更直接。一个对比写为

\[
L=\sum_{i=1}^{k}c_i\mu_i,
\qquad
\sum_{i=1}^{k}c_i=0.
\]

例如三种处理与一个对照的平均效应可用系数 \((1/3,1/3,1/3,-1)\)；等距剂量的线性趋势可由相应正交多项式系数表示。估计值与等方差模型下的标准误为

\[
\widehat L=\sum_i c_i\bar Y_{i\cdot},
\qquad
\operatorname{SE}(\widehat L)=
\sqrt{MS_E\sum_i\frac{c_i^2}{n_i}}.
\]

于是 \(t=\widehat L/\operatorname{SE}(\widehat L)\) 具有 \(N-k\) 个残差自由度，单自由度检验也可写成 \(F=t^2\)。Penn State 的对比分析给出同一条件、标准误和自由度。[^psu-contrasts]

在平衡设计中，若两组对比系数的内积为零，它们相互正交；最多可以用 \(k-1\) 个正交单自由度对比完全分解 \(SS_A\)。不平衡设计中的正交性要按估计协方差加权，不能只检查系数逐项乘积之和。计划对比减少了无目标的搜索，但多个确认性对比仍属于一个检验家族，需要按事前科学主张决定是否及怎样控制多重性。

## 多重比较与经典极差法 { #multiple-comparisons }

### LSD 法

最小显著差数（least significant difference, LSD）把共同的 \(MS_E\) 代入两组均值差的 *t* 检验。第 \(i,j\) 组比较的临界差为

\[
LSD_{ij}=t_{1-\alpha/2,N-k}
\sqrt{MS_E\left(\frac1{n_i}+\frac1{n_j}\right)}.
\]

若 \(\lvert\bar Y_{i\cdot}-\bar Y_{j\cdot}\rvert>LSD_{ij}\)，该未调整比较在单次 \(\alpha\) 水平拒绝均值相等。先要求总体 F 显著再做 LSD，称为 protected LSD；它保留了素材中的经典路径，也比完全无门槛的多次 *t* 检验多一道限制。然而组数增加时，它仍不能对所有两两比较提供一般的强家族错误率控制。生理学方法综述指出，LSD 与 Newman–Keuls 在许多实验情形下都会失去这种控制。[^multiple-comparisons-review]

LSD 的用途因目标而异。少数事前对比可直接检验并按该小型家族调整；若所有两两差异都属于确认性结论，通常应使用明确控制全家族错误率的方法。总体 F 也不是所有后续问题的强制门槛：一个狭窄而预设的对比可能显著，即使 \(k-1\) 自由度的总体检验未拒绝；反过来，总体显著也不保证任一经严格调整的两两比较显著。

### 学生化极差与 Tukey 方法

把有序样本均值的极差除以均值标准误，可得到 studentized range 统计量 \(q\)。R 的正式分布文档把它定义为正态样本极差 \(R\) 与独立方差估计尺度之比，并由均值个数和误差自由度确定分布。[^r-studentized-range] 对所有 \(k(k-1)/2\) 个两两比较，Tukey HSD 在平衡设计中使用同一个全极差临界值；不等样本量的 Tukey–Kramer 区间可写为

\[
(\bar Y_{i\cdot}-\bar Y_{j\cdot})
\pm q_{1-\alpha;k,N-k}
\sqrt{\frac{MS_E}{2}
\left(\frac1{n_i}+\frac1{n_j}\right)}.
\]

这组区间共同具有规定的家族覆盖率。R 的 `TukeyHSD` 文档明确说明，普通逐对 *t* 区间会抬高至少一次错误声明的概率，而 Tukey 区间以 studentized range 控制整组两两比较；其不等样本量调整适合轻度不平衡。[^r-tukey]

原素材的 \(q\) 法标准误漏写了平方根。正确的 Tukey–Kramer 尺度是上式中的
\(\sqrt{MS_E(1/n_i+1/n_j)/2}\)，而 \(\lvert r_i-r_j\rvert+1\) 表示排序后两均值之间跨越的均值个数 \(p\)，不是误差自由度。误差自由度仍来自 ANOVA 模型。

### SNK、Duncan 与“SSR”名称

Student–Newman–Keuls（SNK）检验也把均值排序，并按两均值间包含的有序均值个数 \(p\) 使用 \(q_{\alpha;p,\nu}\)。距离较短的比较使用较小临界范围，形成逐步判定；这种灵活性使它比全范围 Tukey 方法更易拒绝，但不对任意真零假设组合强控制家族错误率。

一些中文农学教材把 Duncan 新复极差检验使用的临界表称为 SSR，并与 SNK 一起归入最小显著极差法。Duncan 方法又进一步按跨距改变逐步错误率，通常比 SNK 更宽松。这里应保留这些名称和按秩次距查表的历史计算路线，同时明确三点：\(q\) 是 studentized range 统计量而非 SNK 的同义词；Tukey、SNK 与 Duncan 使用临界范围的方式不同；“q 法精度最高、SSR 次之、LSD 最低”不是普遍排序。方法要按比较家族、错误率目标、设计平衡性和科学代价选择，而不是把更少拒绝一概称为更精确。[^mean-comparison-review]

若只需把每个处理与一个对照比较，Dunnett 型同时比较比全体两两比较更贴近假设集合；有限个预设对比可用 Holm 或 Bonferroni；任意对比都可能被结果驱动选择时，Scheffé 方法提供更广的同时保护。NIST 的多重比较指南也分别把 Tukey 对应全部两两比较、Scheffé 对应全部对比、Bonferroni 对应有限预选对比。[^nist-multiple-comparisons]

字母标记法适合压缩大量两两结果：没有共同字母表示相应比较达到所用方法的阈值，共享字母表示该比较未拒绝。共享字母不是均值等效或相同的证据，也无法显示差值大小和区间宽度。正式结果应同时给出均值或估计边际均值、差值、同时置信区间、调整方法和完整比较家族。

## 多因素设计中的效应分解 { #multifactor-anova }

### 析因设计与交互作用

若因素 \(A\) 有 \(a\) 个水平、因素 \(B\) 有 \(b\) 个水平，且每个水平组合有 \(r\) 个独立重复，两因素固定效应模型为

\[
Y_{ijk}=\mu+\alpha_i+\beta_j
+(\alpha\beta)_{ij}+\varepsilon_{ijk}.
\]

平衡设计中的自由度分解为

| 来源 | 自由度 |
| --- | ---: |
| 因素 \(A\) | \(a-1\) |
| 因素 \(B\) | \(b-1\) |
| \(A\times B\) 交互 | \((a-1)(b-1)\) |
| 残差 | \(ab(r-1)\) |
| 总计 | \(abr-1\) |

交互作用表示 \(A\) 的某个对比随 \(B\) 的水平改变。例如同一药物在两个基因型中的均值差方向相反，边际平均后可能得到接近零的药物主效应，却不能说药物“没有作用”。解释时应先画各单元均值与区间，检验交互，再根据科学问题考察简单效应或交互对比。Penn State 的析因模型给出同一模型与自由度分解。[^psu-factorial]

交互不显著不证明严格可加；较小样本可能缺乏识别交互的能力。若分析计划允许删去交互，应结合区间、功效、机制和层级原则，而不是单凭一个阈值。保留高阶交互时通常也保留其组成主效应，使模型参数和预测保持层级结构。

### 区组与嵌套

随机完全区组设计在每个区组内各安排一次全部处理。若区组内单位比跨区组单位更相似，模型

\[
Y_{ij}=\mu+\tau_i+\rho_j+\varepsilon_{ij}
\]

把区组间变异从残差中分离，可能提高处理对比精度。每格只有一个观测时，处理—区组交互无法与误差分开，模型实际上假定该交互可忽略；随机化也必须在区组内完成。Penn State 对 RCBD 的说明强调每个处理在每个区组出现一次并在区组内随机分派。[^psu-blocks] 区组是固定还是随机仍由推断目标决定，不能因为它是“干扰因素”就自动归为随机。

嵌套结构中，一个因素的水平只存在于另一因素的某个水平内。例如巢位嵌套于样地，样地 1 的“巢 1”与样地 2 的“巢 1”不是同一水平。模型可写为

\[
Y_{ijk}=\mu+\alpha_i+\beta_{j(i)}+\varepsilon_{ijk},
\]

其中 \(B(A)\) 表示 \(B\) 嵌套于 \(A\)，而不是 \(A\times B\) 的交互。固定平衡模型下 \(B(A)\) 有 \(a(b-1)\) 个自由度；随机嵌套设计中，检验 \(A\) 常需用 \(MS_{B(A)}\) 而非最底层残差作分母。Penn State 对嵌套随机效应的期望均方展示了这种不同误差项。[^psu-random-effects]

裂区、重复测量和同一培养皿内多个样本进一步产生多个随机化层级。它们不能靠在普通 ANOVA 表中多加一行因素来修复；应从处理实际施加在哪一级开始构造误差结构。

### 协方差分析

协方差分析（ANCOVA）在分类因素之外加入连续协变量。例如比较处理后生物量时，可把处理前生物量作为协变量：

\[
Y_{ij}=\mu+\tau_i
+\beta(X_{ij}-X_0)+\varepsilon_{ij}.
\]

\(X_0\) 是选定的参照值，处理效应比较的是各组在相同 \(X_0\) 下的调整均值。ANCOVA 因而是同时含分类列与连续列的一般线性模型，而非另一种独立算法。[^psu-ancova]

共同斜率模型假定协变量与响应的关系在各处理组相同。应先检查包含 \(\tau_i(X_{ij}-X_0)\) 的交互模型；若斜率确实不同，处理差异随 \(X\) 改变，应在有数据支持的协变量范围内报告若干 \(X\) 水平的条件效应，而不是强行给出一个共同调整均值。Penn State 的 ANCOVA 步骤也把处理—协变量交互作为平行斜率判断。[^psu-ancova-slopes]

协变量应由研究目标与设计预先确定。随机试验中的处理前预测变量常可提高精度；处理后变量可能是处理作用路径的一部分，对其调整会改变待估效应并可能引入偏倚。观察性研究中，即使模型拟合良好，协变量调整也只有在混杂结构和函数形式足以支持时才具有因果含义。

## 不平衡数据、平方和类型与边际均值 { #unbalanced-designs }

### 不等样本量不是一个平均 \(n\)

单因素模型中，\(SS_A=\sum_i n_i(\bar Y_i-\bar Y)^2\) 已经正确反映不等样本量，均值差标准误也应使用实际的 \(n_i,n_j\)。原素材用一个合成的 \(n_0\) 代替所有组样本量，再套用统一 LSD 或极差标准误；这种近似会掩盖不同比较的精度。现代计算直接使用模型参数的协方差矩阵，不需要用“平均样本量”把不平衡数据伪装成平衡设计。

在总样本量和共同方差固定、所有组同等重要时，平衡配置通常使比较精度均匀并保持效应正交；但不平衡不必然意味着设计错误。不同组成本、方差、失访或科学优先级可能支持有意的不等分配。真正需要说明的是不平衡如何产生、是否与结局或处理有关，以及它怎样改变待估总体和精度。

### Type I、II 与 III 平方和

多因素平衡且无缺失的正交设计中，各效应平方和彼此独立，常见平方和类型会给出相同检验。不平衡时，因素列不再正交，同一批变异可以由多个项解释，因而必须先定义要检验的参数函数。

| 类型 | 核心含义 | 主要边界 |
| --- | --- | --- |
| Type I | 按模型书写顺序依次加入各项，计算残差平方和的递减量 | 依赖项的顺序；适合有科学顺序的层级模型或正交多项式分解 |
| Type II | 每个主效应在其他不包含它的效应之后检验 | 不适合把含有重要交互的主效应解释成统一边际效应 |
| Type III | 每个效应在模型中其余效应，包括包含它的交互之后，以可估函数检验 | 需要明确对比编码、边际权重和可估性；不是不平衡数据的自动正确答案 |

SAS 的 GLM 文档明确指出，Type I 是顺序平方和且在不平衡数据中依赖项顺序和单元格数；Type II 不依赖书写顺序，但含有效应会进入其可估假设；Type III/IV 通过可估函数构造，在无空单元格时相同。[^sas-sums-of-squares] 因此不能先选择一个熟悉的“类型”，再让软件替研究者决定科学问题。

### 估计边际均值与可估性

估计边际均值（estimated marginal mean, EMM；旧称 least-squares mean）是模型对一组协变量或其他因素水平作出的预测，再按规定权重平均。它适合在不平衡设计中比较经其他因素调整的均值。Lenth 将这类量定义为线性模型预测值或其平均，并以此构造对比。[^estimated-marginal-means]

平均权重必须写清。对另一因素各水平等权，回答的是标准化到平衡水平分布后的效应；按样本频数加权，回答的是当前样本构成下的边际效应；按目标总体权重，才直接对应预先定义的目标人群。三者可能得到不同数值。SAS 的不平衡两因素示例也显示，Type III 检验对应在平衡因素分布上的 LS-means，而 Type I、II 回答不同加权问题。[^sas-unbalanced-example]

若某些因素组合没有任何观测，部分对比可能无法由数据唯一估计。软件给出的别名、奇异或 non-estimable 提示是设计证据缺失，不应靠改变平方和类型、删除交互或随意补零消除。此时需要缩小推断范围、合并有科学依据的水平、补充数据，或改用能明确表达结构的模型。

## 模型条件、诊断与替代方法 { #diagnostics-alternatives }

### 独立性、方差与残差分布

经典固定效应 ANOVA 的精确 F 参照依赖误差独立、均值为零、方差相同且近似正态。独立性主要由随机化、抽样与实验单位保证，残差图无法从一张无顺序信息的数据表中证明独立。按时间、空间位置、个体或批次排列残差，有助于发现趋势、聚集和相关；若处理在笼、地块或培养皿层面施加，就必须在该层面估计不确定性。

正态性针对误差或条件残差，不要求所有组合后的响应呈一个正态分布。Q–Q 图检查尾部和离群，残差—拟合值图检查方差随均值变化与模型形状，按处理绘制原始点和残差可发现特定组问题。NIST 的单因素 ANOVA 指南至少建议检查按运行顺序的残差、正态概率图以及残差—拟合值图。[^nist-oneway-diagnostics]

平衡且各组样本量适中时，均值 F 检验对轻度非正态往往较稳健；方差不等与样本量不等同时出现时则可能严重扭曲错误率。离群值既可能是记录错误，也可能是真实生物异质性，删除前应追溯实验记录并报告规则。以“正态性检验不显著”或“Levene 检验不显著”宣布条件成立，同样忽略了这些诊断自身的有限功效。

### 异方差、偏斜与随机化替代

一个因素、独立组且目标仍是均值时，Welch ANOVA 允许各组方差不同，并使用近似 F 分布和自由度；R 的正式 `oneway.test` 默认就是这一推广。[^r-welch-anova] 方差结构随均值成比例时，预先有机制依据的对数或方差稳定变换可能改善模型，但效应解释随尺度改变。也可使用异方差稳健协方差、加权最小二乘或显式方差模型。

强偏斜、重尾或少量离群下，可以报告稳健位置估计、bootstrap 区间或稳健 ANOVA；科学目标是秩位置或随机优势时，可使用 [Kruskal–Wallis](categorical_nonparametric.md#rank-methods)；随机分派实验还可在设计允许的单位内置换 F 或对比统计量。替代方法不能修复伪重复、错误误差层级、处理后选择或缺失非随机，也不必然检验同一个均值参数。

计数、比例和有界结局即使画出近似对称的组分布，也可能具有均值—方差联系；Poisson、二项或 Beta 型模型通常比在正态 ANOVA 中反复变换更贴近生成机制。这些模型与随机效应的结合由[广义线性模型与混合效应模型](generalized_mixed_models.md)承接。

## 分析顺序与结果报告 { #workflow-reporting }

ANOVA 分析从设计图开始：标出响应、因素与水平、处理组合、实验单位、随机化层级、区组、重复和协变量；再写出目标均值或对比及其可推广总体。随后查看各单元原始点、样本量和缺失，建立包含必要交互与误差结构的模型，检查可估性与残差，最后按事前比较家族给出估计和推断。模型选择应服务于问题，而不是在许多平方和类型、变换和事后检验中挑出最小 *p* 值。

结果至少报告：每个单元的分析单位数、均值与标准差或其他适当描述；完整模型公式与固定／随机效应角色；平方和类型、误差项、自由度、F 与精确 *p* 值；主要对比或估计边际均值的权重、效应估计与置信区间；多重比较家族及调整方法；效应量公式；残差和敏感性分析；缺失、排除及不平衡原因。只有字母分组或“ANOVA 后做 LSD”不足以重建分析。

ANOVA 的因果解释仍来自处理随机分派，向总体推广仍来自抽样与研究场景。模型能够把观察变异分解成若干数学来源，却不会自动把每一来源变成生物机制。可靠结论应把变异分解、效应大小、实验设计和机制证据重新合在一起。

## 参考资料与延伸阅读

[^nist-oneway-model]: NIST/SEMATECH. [The one-way ANOVA model and assumptions](https://www.itl.nist.gov/div898/handbook/prc/section4/prc432.htm)。
[^psu-linear-model]: Penn State Eberly College of Science, STAT 502. [The ANOVA Models](https://online.stat.psu.edu/stat502/lesson/4/4.1)：单元均值、效应编码、一般线性模型与平方和工作公式。
[^nist-anova-table]: NIST/SEMATECH. [The ANOVA table and tests of hypotheses about means](https://www.itl.nist.gov/div898/handbook/prc/section4/prc423.htm)。
[^r-model-matrix]: R Core Team. [`model.matrix`: Construct Design Matrices](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/model.matrix.html)。
[^r-aov]: R Core Team. [`aov`: Fit an Analysis of Variance Model](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/aov.html)。
[^anova-effect-size]: Lakens, D. (2013). [Calculating and reporting effect sizes to facilitate cumulative science: a practical primer for *t*-tests and ANOVAs](https://pubmed.ncbi.nlm.nih.gov/24324449/). *Frontiers in Psychology*, 4, 863。
[^psu-contrasts]: Penn State Eberly College of Science, STAT 502. [Contrast Analysis](https://online.stat.psu.edu/stat502/lesson/2/2.5)。
[^multiple-comparisons-review]: Curran-Everett, D. (2000). [Multiple comparisons: philosophies and illustrations](https://pubmed.ncbi.nlm.nih.gov/10896857/). *American Journal of Physiology-Regulatory, Integrative and Comparative Physiology*, 279, R1–R8。
[^mean-comparison-review]: Peck, S. L. et al. (2024). [A discussion and evaluation of statistical procedures used by JIMB authors when comparing means](https://academic.oup.com/jimb/article/doi/10.1093/jimb/kuae001/7515277). *Journal of Industrial Microbiology and Biotechnology*, 51, kuae001。
[^r-studentized-range]: R Core Team. [The Studentized Range Distribution](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/Tukey.html)。
[^r-tukey]: R Core Team. [`TukeyHSD`: Compute Tukey Honest Significant Differences](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/TukeyHSD.html)。
[^nist-multiple-comparisons]: NIST/SEMATECH. [How can we make multiple comparisons?](https://www.itl.nist.gov/div898/handbook/prc/section4/prc47.htm)。
[^psu-factorial]: Penn State Eberly College of Science, STAT 502. [Factorial or Crossed Treatment Design](https://online.stat.psu.edu/stat502/lesson/5/5.1)。
[^psu-blocks]: Penn State Eberly College of Science, STAT 502. [Randomized Complete Block Design](https://online.stat.psu.edu/stat502/lesson/7/7.3)。
[^psu-random-effects]: Penn State Eberly College of Science, STAT 502. [Testing Random Effects](https://online.stat.psu.edu/stat502/lesson/6/6.3)。
[^psu-ancova]: Penn State Eberly College of Science, STAT 502. [ANCOVA in the GLM Setting](https://online.stat.psu.edu/stat502/lesson/9/9.1)。
[^psu-ancova-slopes]: Penn State Eberly College of Science, STAT 502. [Steps in ANCOVA](https://online.stat.psu.edu/stat502/lesson/9/9.2)。
[^sas-sums-of-squares]: SAS Institute. [Hypothesis Testing in PROC GLM](https://support.sas.com/documentation/cdl/en/statug/63033/HTML/default/statug_glm_sect030.htm)：Type I、II、III 与 IV 可估函数及其不平衡设计边界。
[^estimated-marginal-means]: Lenth, R. V. (2016). [Least-Squares Means: The R Package `lsmeans`](https://www.jstatsoft.org/article/view/v069i01). *Journal of Statistical Software*, 69(1), 1–33。
[^sas-unbalanced-example]: SAS Institute. [Unbalanced ANOVA for Two-Way Design with Interaction](https://support.sas.com/documentation/cdl/en/statug/63033/HTML/default/statug_glm_sect048.htm)。
[^nist-oneway-diagnostics]: NIST/SEMATECH. [One-Factor ANOVA](https://www.itl.nist.gov/div898/handbook/eda/section3/eda354.htm)：模型验证与三类基本残差图。
[^r-welch-anova]: R Core Team. [`oneway.test`: Test for Equal Means in a One-Way Layout](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/oneway.test.html)。
