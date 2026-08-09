# 抽样、参数估计与置信区间

统计推断从一个看似简单的动作开始：观察总体的一部分，再用这部分资料认识总体。真正决定推断能走多远的，不只是样本量，还有总体如何界定、样本怎样进入研究、哪些单位彼此独立，以及统计量在重复抽样中怎样波动。一次样本给出的均值或比例只是一个实现值；若按同一规则重新抽样，结果通常会改变。

抽样分布把这种“可能怎样改变”写成概率分布，标准误度量统计量的抽样波动，参数估计则把样本信息转化为未知总体量的点估计和区间估计。三者共同构成从[概率分布](probability.md)进入统计推断的桥梁。本页保留样本均值、Student \(t\)、\(\chi^2\) 和 \(F\) 分布的经典推导路径，同时把它们放回抽样设计、估计量性质和现代重抽样方法之中。

## 抽样如何连接样本与总体 { #sampling-design }

### 目标总体、抽样框与入样机制

抽样首先要说明结论指向的**目标总体**。研究某湿地繁殖鸟类的平均巢卵数时，目标总体需要同时限定物种、地点、繁殖季和可观察对象；研究培养条件下细胞的平均表达量时，总体可能是该实验流程能够产生的独立培养物，而不是显微图像中的全部细胞。目标总体决定参数的含义，不能在分析结束后随意扩大。

**抽样框**是实际用于选择单位的名单、空间网格、时间段或其他操作性集合。抽样框遗漏偏远样地、只包含就诊个体或重复登记某些对象时，框总体与目标总体之间出现覆盖误差。随机选择只能在既有抽样框内控制选择机制，不能让框外对象自动获得代表性。

在概率抽样中，每个总体单位有已知且大于零的入样概率 \(\pi_i\)。这种可描述的随机机制使设计型的总体估计和抽样误差估计成为可能。便利样本、志愿者样本和配额样本也能提供有价值的数据，但入样机制通常与结局、可及性或参与意愿有关；把它们推广到更广总体时，需要额外的模型、辅助资料和敏感性分析，而不能只凭样本很大便视为代表性样本。

### 常见概率抽样设计

概率抽样的几种基本形式解决不同的抽样框与成本问题。Statistics Canada 对这些方法的正式说明强调：分层抽样在每个层内独立抽取单位，整群抽样则先抽取若干群，二者不能因都“先分组”而混同。[^statcan-sampling]

| 设计 | 选择结构 | 适用场景与主要边界 |
| --- | --- | --- |
| 简单随机抽样 | 从 \(N\) 个单位中等概率抽取 \(n\) 个，常为不放回抽样 | 理论清楚，但需要完整抽样框；空间上高度分散时成本可能很高 |
| 系统抽样 | 随机确定起点，再按固定间隔从有序抽样框取样 | 执行简便且能覆盖整个名单；抽样框若具有与间隔相呼应的周期结构，会造成异常样本 |
| 分层抽样 | 把总体划为互斥且穷尽的层，每层分别随机抽样 | 可保证稀少但重要亚群进入样本，并在层内较同质时提高精度；总体估计必须按层大小或入样概率合并 |
| 整群与多阶段抽样 | 先抽地点、学校、家系等群，再调查群内全部或部分单位 | 可显著降低组织成本；同群单位往往相似，有效信息量通常小于同样单位数的简单随机样本 |

分层的目标是让每个层都得到信息，整群的目标则常是只访问一部分群。生命科学调查经常把两者组合：先按生境分层，在每层抽取样地，再从样地内抽样方或个体。此时“样本量”至少要分别报告抽中的层、群和末级单位数；只报告末级记录行数会掩盖真正独立的抽样层级。

### 入样权重与有限总体修正

单位入样概率不同时，常用设计权重 \(w_i=1/\pi_i\) 表示一个入样单位代表多少总体单位。若总体总量为

$$
Y=\sum_{i=1}^{N}y_i,
$$

Horvitz–Thompson 总量估计量为

$$
\widehat Y_{\mathrm{HT}}
=\sum_{i\in s}\frac{y_i}{\pi_i}.
$$

在入样概率已知且设计条件满足时，它对有限总体总量无偏；总体大小 \(N\) 已知时，可用 \(\widehat Y_{\mathrm{HT}}/N\) 估计总体均值。实际调查还可能因无应答、覆盖校准和后分层调整权重。点估计和标准误都要按设计处理，不能先加权求均值、再把数据当作独立同分布样本套用普通方差公式。

简单随机不放回抽样从有限总体抽走较大比例单位时，各次抽取不再独立。若总体方差按

$$
S_N^2=\frac{1}{N-1}\sum_{i=1}^{N}(y_i-\bar Y)^2
$$

定义，则样本均值的设计方差为

$$
\operatorname{Var}(\bar y)
=\left(1-\frac{n}{N}\right)\frac{S_N^2}{n}.
$$

根号内的 \(1-n/N\) 是有限总体修正。抽样比例 \(n/N\) 很小时它接近 1；抽样接近普查时，剩余抽样不确定性随之下降。这个修正针对有限总体不放回抽样，不能用来补偿选择偏倚、无应答或测量误差。

## 统计量的抽样分布 { #sampling-distribution }

### 三种分布的区别

总体分布描述总体单位或数据生成过程中的个体差异，例如成鱼体长的分布。样本分布是一次已观察样本中数值的经验分布。**抽样分布**则是假想按同一设计反复抽取样本、每次计算同一个统计量后，这些统计量形成的概率分布。

三种分布的对象不同。一批鱼的体长可以明显右偏，而每批鱼的平均体长在适当条件下近似正态；单次样本的直方图也不能直接显示样本均值在重复抽样中的波动。抽样分布依赖总体分布、统计量、样本量和抽样设计，改变其中任何一项都可能改变标准误和区间方法。

**标准误**（standard error, SE）是统计量抽样分布的标准差。样本标准差 \(s\) 描述个体观测围绕样本均值的离散，均值标准误描述不同样本均值之间的离散，两者相差约 \(\sqrt n\) 倍。NIST 也把标准误定义为统计量抽样分布的标准差。[^nist-standard-error]

### 样本均值与样本比例

设 \(X_1,\ldots,X_n\) 为来自均值 \(\mu\)、方差 \(\sigma^2\) 总体的独立同分布随机变量，样本均值为

$$
\bar X=\frac{1}{n}\sum_{i=1}^{n}X_i.
$$

由期望和方差的运算规则，

$$
E(\bar X)=\mu,
\qquad
\operatorname{Var}(\bar X)=\frac{\sigma^2}{n},
\qquad
\operatorname{SE}(\bar X)=\frac{\sigma}{\sqrt n}.
$$

均值标准误是 \(\sigma/\sqrt n\)，而不是 \(\sqrt{\sigma/n}\)：方差先除以 \(n\)，标准差才除以 \(\sqrt n\)。总体标准差未知时，常以 \(s/\sqrt n\) 估计标准误。这个代入又引入了估计 \(\sigma\) 的不确定性，正是 Student \(t\) 分布出现的原因。

若 \(X_i\) 是成功记为 1、失败记为 0 的 Bernoulli 变量，则 \(\bar X=\hat p\) 是样本比例，

$$
E(\hat p)=p,
\qquad
\operatorname{SE}(\hat p)
=\sqrt{\frac{p(1-p)}{n}}.
$$

在独立 Bernoulli 试验下，\(n\hat p\) 精确服从二项分布；正态近似只是对这一离散抽样分布的近似。若从有限二分类总体不放回抽样，还要加入相应的有限总体修正。

### 两个均值与配对差值

两个相互独立样本的均值分别记为 \(\bar X_1\) 和 \(\bar X_2\)，则

$$
E(\bar X_1-\bar X_2)=\mu_1-\mu_2,
$$

$$
\operatorname{Var}(\bar X_1-\bar X_2)
=\frac{\sigma_1^2}{n_1}+\frac{\sigma_2^2}{n_2}.
$$

方差相加依赖两样本独立。若同一动物在处理前后各测一次，两个样本均值并不独立；应先对每只动物形成差值 \(D_i=X_{i,\mathrm{after}}-X_{i,\mathrm{before}}\)，再研究 \(\bar D\) 的抽样分布，其标准误为 \(s_D/\sqrt n\)。配对设计利用个体内相关性，分析时拆散配对会改变研究问题和误差结构。

## 估计量及其质量 { #estimator-quality }

### 估计量、估计值与置信界

**估计量**是由随机样本计算未知参数的规则，通常写作 \(\widehat\theta=T(X_1,\ldots,X_n)\)。抽样之前它是随机变量；代入一次实际样本后得到的数 \(\hat\theta\) 是**估计值**。例如 \(\bar X\) 是总体均值 \(\mu\) 的估计量，某次计算得到 12.4 mm 是估计值。

单个数给出的估计称为**点估计**。置信区间的下限和上限是区间端点，不是两个备选点估计；单侧置信上限或下限也仍是按覆盖要求构造的界。把 \(\bar x\pm z\operatorname{SE}\) 的两个端点称为“点估计”，会混淆估计目标与不确定性表达。

### 偏差、方差与均方误差

估计量的偏差定义为

$$
\operatorname{Bias}(\widehat\theta)
=E(\widehat\theta)-\theta.
$$

偏差为零的估计量称为无偏估计量。独立同分布样本的 \(\bar X\) 对 \(\mu\) 无偏；以 \(n-1\) 为分母的

$$
S^2=\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar X)^2
$$

对 \(\sigma^2\) 无偏。平方根 \(S\) 一般并不是 \(\sigma\) 的无偏估计量，因为非线性变换通常不保留无偏性。

无偏只描述重复抽样的平均中心，不保证某一次估计接近真值。一个方差很大的无偏估计量可能比带有少量偏差但稳定得多的估计量更不实用。均方误差把两方面合在一起：

$$
\operatorname{MSE}(\widehat\theta)
=E[(\widehat\theta-\theta)^2]
=\operatorname{Var}(\widehat\theta)
 +[\operatorname{Bias}(\widehat\theta)]^2.
$$

估计量还常按一致性、效率、稳健性和对模型误设的敏感程度评价。**一致性**表示样本信息增加时估计量依概率趋近目标参数；它是渐近性质，不保证小样本表现。不存在脱离数据生成机制和损失目标的“最佳估计量”。

### 矩估计与最大似然估计

矩估计把样本矩与理论分布矩对应起来。例如 Poisson 分布满足 \(E(X)=\lambda\)，令样本均值等于理论均值便得到 \(\hat\lambda=\bar x\)。这种方法直观，常能给出闭式解，但未必充分利用模型中的全部信息。

若样本在参数 \(\theta\) 下的联合密度或概率质量为 \(L(\theta;x)\)，把观测 \(x\) 固定后，\(L\) 称为似然函数。**最大似然估计**选择使似然最大的参数：

$$
\widehat\theta_{\mathrm{MLE}}
=\arg\max_{\theta}L(\theta;x)
=\arg\max_{\theta}\ell(\theta;x),
$$

其中 \(\ell=\log L\)。NIST 对最大似然的说明同时指出了它在多类参数问题中的统一性、渐近性质，以及小样本偏差和数值优化的限制。[^nist-mle]

似然比较的是同一组观测在不同参数值下的相对支持，不是“给定数据后参数取某值的概率”。参数概率需要另行规定概率模型和先验，将在[贝叶斯推断与计算统计](bayesian_computational.md)中讨论。

## 正态样本与三类枢轴分布 { #sampling-pivots }

### 中心极限定理与正态近似

对独立同分布、具有有限均值 \(\mu\) 和有限方差 \(\sigma^2\) 的随机变量，经典中心极限定理说明

$$
\frac{\bar X-\mu}{\sigma/\sqrt n}
\xrightarrow{d}N(0,1)
\qquad(n\to\infty).
$$

因此即使原始总体不是正态分布，样本均值经中心化和标准化后也常随 \(n\) 增大而接近标准正态。Penn State 的概率课程给出同一形式，并明确把均值的期望写为 \(\mu\)、方差写为 \(\sigma^2/n\)。[^psu-clt]

收敛速度取决于偏斜、尾部、离散性和相关结构。极端重尾、强依赖或少数群贡献大部分信息时，普通近似可能很慢或不适用；“\(n\ge30\)”不是统一保证。若原始观测本来独立服从正态分布，则 \(\bar X\) 在任何 \(n\) 下都精确正态，不需要等待中心极限定理。

### Student t 分布

设 \(X_1,\ldots,X_n\) 独立来自 \(N(\mu,\sigma^2)\)。样本均值与样本方差相互独立，并且

$$
Z=\frac{\bar X-\mu}{\sigma/\sqrt n}\sim N(0,1),
\qquad
U=\frac{(n-1)S^2}{\sigma^2}\sim\chi^2_{n-1}.
$$

以 \(S\) 替代未知的 \(\sigma\) 后，

$$
T=\frac{\bar X-\mu}{S/\sqrt n}
=\frac{Z}{\sqrt{U/(n-1)}}
\sim t_{n-1}.
$$

\(t\) 分布关于 0 对称；自由度较小时，估计尺度带来的不确定性使尾部比标准正态更厚，自由度增加时逐渐接近标准正态。这里的精确结论依赖独立正态样本。对非正态数据，\(t\) 方法的近似质量取决于样本量与分布形状，不应仅按“总体方差未知且 \(n<30\)”机械选择。

### χ² 分布与 F 分布

若 \(Z_1,\ldots,Z_\nu\) 为独立标准正态变量，则

$$
\sum_{j=1}^{\nu}Z_j^2\sim\chi^2_\nu.
$$

\(\chi^2\) 分布只取非负值，均值为 \(\nu\)、方差为 \(2\nu\)；自由度小时明显右偏，自由度增加时相对更接近对称。它既连接正态总体的样本方差与 \(\sigma^2\)，也会出现在分类资料和拟合优度统计量中，但后者的自由度来源需要按约束与估计参数另行推导。

若 \(U_1\sim\chi^2_{\nu_1}\)、\(U_2\sim\chi^2_{\nu_2}\) 且相互独立，则

$$
F=\frac{U_1/\nu_1}{U_2/\nu_2}
\sim F_{\nu_1,\nu_2}.
$$

两个独立正态样本因而满足

$$
\frac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2}
\sim F_{n_1-1,n_2-1}.
$$

\(F\) 分布也只取非负值，其形状同时由分子和分母自由度决定。它的均值在 \(\nu_2>2\) 时为 \(\nu_2/(\nu_2-2)\)，并非恒等于 1；分布在 1 附近的相对集中不能代替这一矩性质。NIST 的 \(t\)、\(\chi^2\) 和 \(F\) 条目给出了这些分布的支持范围、自由度依赖和矩条件。[^nist-pivots]

## 置信区间的构造与解释 { #confidence-intervals }

### 覆盖过程

一个 \(100(1-\alpha)\%\) 置信区间是由样本生成的随机区间 \([L(X),U(X)]\)，其构造方法满足

$$
P_\theta\{L(X)\le\theta\le U(X)\}=1-\alpha
$$

或在近似意义下接近这一覆盖率。重复按同一设计抽样并构造区间时，长期约有 \(1-\alpha\) 的区间覆盖固定参数。NIST 明确指出：一次样本算出的区间已经固定，它要么覆盖参数、要么没有；95% 置信度不表示“参数有 95% 概率位于本次区间内”。[^nist-confidence]

区间宽度同时受置信水平、标准误、样本量和模型影响。提高置信水平通常使区间变宽；增加独立信息常使标准误下降。更窄只表示在给定方法和假设下精度更高，不表示抽样框更完整、测量更准确或模型偏差更小。

### 一个均值与均值差

总体标准差 \(\sigma\) 已知、样本均值正态或近似正态时，均值的双侧区间为

$$
\bar x\pm z_{1-\alpha/2}\frac{\sigma}{\sqrt n}.
$$

实际研究中 \(\sigma\) 几乎总是未知。独立正态样本的精确 \(t\) 区间为

$$
\bar x\pm t_{1-\alpha/2,n-1}\frac{s}{\sqrt n}.
$$

对两个独立总体均值之差，Welch 区间不要求两总体方差相等：

$$
(\bar x_1-\bar x_2)
\pm t_{1-\alpha/2,\nu}
\sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}},
$$

其中自由度用 Welch–Satterthwaite 近似：

$$
\nu\approx
\frac{\left(s_1^2/n_1+s_2^2/n_2\right)^2}
{\dfrac{(s_1^2/n_1)^2}{n_1-1}
 +\dfrac{(s_2^2/n_2)^2}{n_2-1}}.
$$

若资料成对，则对差值 \(D_i\) 构造

$$
\bar d\pm t_{1-\alpha/2,n-1}\frac{s_D}{\sqrt n}.
$$

这三个区间对应三种不同设计，不能只看表中有“两列均值”便互换。偏斜很强的小样本、删失数据、明显层级相关或选择性排除会破坏简单 \(t\) 区间的条件，需要采用与设计和估计量相符的方法。

### 一个比例及其边界

样本比例 \(\hat p=x/n\) 是二项成功概率 \(p\) 的自然点估计。最熟悉的 Wald 区间

$$
\hat p\pm z_{1-\alpha/2}
\sqrt{\frac{\hat p(1-\hat p)}{n}}
$$

在样本不大或 \(p\) 接近 0、1 时覆盖率可能很差，甚至给出小于 0 或大于 1 的端点。用 \(n\hat p\) 与 \(n(1-\hat p)\) 的机械阈值判断并不能消除这些问题。

经典正态近似有时在比例尺度的误差界限上加入 \(1/(2n)\)，以连续性校正补偿离散二项计数与连续正态面积之间的差别。这一修正的效果随 \(n\) 和 \(p\) 改变，不能依靠统一阈值保证覆盖率，也不会使比例统计量转而服从 \(t\) 分布。现代计算条件下，更适合直接采用得分型或二项尾概率区间。

Wilson 得分区间可写为中心 \(c\) 与半宽 \(h\)：

$$
c=\frac{\hat p+z^2/(2n)}{1+z^2/n},
$$

$$
h=\frac{z}{1+z^2/n}
\sqrt{\frac{\hat p(1-\hat p)}{n}+\frac{z^2}{4n^2}},
\qquad z=z_{1-\alpha/2},
$$

区间为 \([c-h,c+h]\)。它由反演得分检验得到，端点保持在 \([0,1]\) 内。NIST 的比例区间说明以及 Brown、Cai 与 DasGupta 的系统比较都指出了普通 Wald 区间的缺陷，并把 Wilson 区间列为重要替代。[^binomial-interval]

例如 80 粒独立种子中有 20 粒萌发，点估计为 \(\hat p=0.25\)，95% Wilson 区间约为 \([0.168,0.355]\)。区间体现有限样本对真实萌发概率仍有相当不确定性；它没有把未萌发原因、种子批次或培养皿内相关性计入模型。

Clopper–Pearson 区间通过反演精确二项尾概率构造，不依赖正态近似，但因二项分布离散，覆盖率常高于名义水平而显得保守。复杂抽样中的加权比例、风险差或两个比例之差还需要设计型、得分型或模型型区间，不能把独立同分布的单比例公式直接套用。

### 方差区间与分布条件

独立正态样本下，总体方差的双侧区间由 \(\chi^2\) 枢轴得到：

$$
\left[
\frac{(n-1)s^2}{\chi^2_{1-\alpha/2,n-1}},
\frac{(n-1)s^2}{\chi^2_{\alpha/2,n-1}}
\right],
$$

这里 \(\chi^2_{q,\nu}\) 表示自由度 \(\nu\) 的 \(q\) 分位数。区间不以 \(s^2\) 对称，因为 \(\chi^2\) 分布右偏。它对非正态尤其是重尾数据较敏感；“已经有一个样本方差”并不足以保证区间有效。

区间形式总由参数、估计量和抽样分布共同决定。均值、比例、方差、分位数、发生率和模型系数没有一条可以机械通用的“估计值 ± 临界值 × 标准误”公式；即使可以写成这一外形，临界分布和标准误仍必须与设计及模型相配。

## Bootstrap 重抽样 { #bootstrap }

### 从经验分布近似抽样分布

某些统计量的抽样分布难以解析推导，例如中位数、偏斜分布的比值或复杂模型预测。非参数 bootstrap 把观测样本的经验分布当作总体分布的近似，从原样本中有放回地抽取 \(n\) 个单位，得到 bootstrap 样本；重复 \(B\) 次并计算

$$
\widehat\theta_1^*,\ldots,\widehat\theta_B^*.
$$

这些重复值近似 \(\widehat\theta\) 的抽样分布。bootstrap 标准误可估为

$$
\widehat{\operatorname{SE}}_{\mathrm{boot}}
=\sqrt{\frac{1}{B-1}
\sum_{b=1}^{B}
(\widehat\theta_b^*-\bar\theta^*)^2}.
$$

Efron 在 1979 年提出这一以经验分布重抽样近似估计误差的通用框架；它把许多原本依赖专门解析推导的问题转化为重复计算。[^efron-bootstrap]

### 区间方法与适用边界

百分位区间直接取 bootstrap 重复值的 \(\alpha/2\) 和 \(1-\alpha/2\) 分位数。基本区间把 bootstrap 偏离原估计的方向反射回参数尺度；studentized 区间还对每次重复值按其标准误标准化。偏差校正加速区间（BCa）进一步校正 bootstrap 分布相对原估计的偏移与变化率。DiCiccio 与 Efron 的综述专门比较了这些 bootstrap 置信区间，而不是把“做了 bootstrap”视为已经选定唯一方法。[^bootstrap-ci]

bootstrap 保留并放大原样本中的信息，也继承其局限。样本未覆盖的亚群不会由重抽样生成，极小样本不能凭重复计算创造新信息，边界参数和不连续统计量可能产生退化的重抽样分布。\(B\) 有限还带来 Monte Carlo 误差，应检查区间端点是否随随机种子和重复次数稳定。

重抽样单位必须与独立信息单位一致。配对资料应重抽整对观测，整群设计应重抽群或按设计分阶段重抽，时间序列常需区块 bootstrap；把同一动物的细胞、同一培养皿的孔或连续时点逐行独立重抽，会重现伪重复而不是修正它。参数 bootstrap 则从拟合模型模拟数据，效率可能更高，但有效性更加依赖模型正确。

## 从估计结果回到研究问题 { #reporting-estimates }

一份可解释的估计结果应同时写明目标总体与待估量、抽样框与抽样设计、独立单位和层级、点估计、标准误或置信区间、区间方法及关键条件。复杂调查还要报告权重、分层、整群和有限总体处理；bootstrap 结果要说明重抽样单位与区间类型。只写“均值为 12.4，95% CI 见图”不足以判断区间覆盖的是哪个总体参数。

抽样不确定性只是总不确定性的一部分。覆盖不足、无应答、测量偏倚、批次效应、缺失数据和模型误设不会自动进入普通标准误。增加同一偏倚机制下的样本量可以使区间更窄，却可能围绕错误目标变得更加精确。抽样设计建立从样本到总体的通道，估计方法再量化这条通道中的随机波动；两者缺一不可。

置信区间也不单独决定科学意义。均值差的区间应与测量单位、生物学阈值和研究设计一起解释；区间是否跨过零只连接相应的双侧检验，不能替代效应大小、实际重要性和多重比较语境。这些问题将在[假设检验、效应量与多重比较](hypothesis_testing.md)中继续展开。

## 参考资料与延伸阅读 { #references }

- Whitlock MC, Schluter D. [*The Analysis of Biological Data*](https://store.macmillanlearning.com/us/product/The-Analysis-of-Biological-Data/p/131922623X). 3rd ed. Macmillan Learning; 2020.
- Statistics Canada. [Probability sampling](https://www150.statcan.gc.ca/n1/edu/power-pouvoir/ch13/prob/5214899-eng.htm). *Statistics: Power from Data!*.
- Penn State Department of Statistics. [STAT 414: Introduction to Probability Theory](https://online.stat.psu.edu/stat414/)；[STAT 415: Introduction to Mathematical Statistics](https://online.stat.psu.edu/stat415/).
- NIST/SEMATECH. [e-Handbook of Statistical Methods](https://www.itl.nist.gov/div898/handbook/).
- Brown LD, Cai TT, DasGupta A. [Interval Estimation for a Binomial Proportion](https://projecteuclid.org/journals/statistical-science/volume-16/issue-2/Interval-Estimation-for-a-Binomial-Proportion/10.1214/ss/1009213286.full). *Statistical Science*. 2001;16(2):101–133. doi:10.1214/ss/1009213286.
- Efron B. [Bootstrap Methods: Another Look at the Jackknife](https://projecteuclid.org/journals/annals-of-statistics/volume-7/issue-1/Bootstrap-Methods-Another-Look-at-the-Jackknife/10.1214/aos/1176344552.full). *The Annals of Statistics*. 1979;7(1):1–26. doi:10.1214/aos/1176344552.
- Stan Development Team. [The Bootstrap and Bagging](https://mc-stan.org/docs/stan-users-guide/bootstrap.html). *Stan User’s Guide*.

[^statcan-sampling]: Statistics Canada 的[概率抽样说明](https://www150.statcan.gc.ca/n1/edu/power-pouvoir/ch13/prob/5214899-eng.htm)逐项定义简单随机、系统、分层、整群和多阶段抽样，并比较抽样框、成本与精度边界。

[^nist-standard-error]: NIST/SEMATECH [术语表](https://www.itl.nist.gov/div898/handbook/glossary.htm)将 standard error 定义为统计量抽样分布的标准差。

[^nist-mle]: NIST/SEMATECH 的[最大似然条目](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3652.htm)说明似然最大化、渐近性质、小样本偏差与数值优化问题。

[^psu-clt]: Penn State STAT 414 的[中心极限定理课程](https://online.stat.psu.edu/stat414/Lesson27)给出 \(E(\bar X)=\mu\)、\(\operatorname{Var}(\bar X)=\sigma^2/n\) 及标准化均值的极限正态分布；[第 26 课](https://online.stat.psu.edu/stat414/Lesson26)进一步推导正态样本下的 \(t\) 枢轴。

[^nist-pivots]: NIST/SEMATECH 分别给出 [Student \(t\)](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3664.htm)、[\(\chi^2\)](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3666.htm)和 [\(F\)](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3665.htm) 分布的密度、支持范围、矩与自由度条件。

[^nist-confidence]: NIST/SEMATECH 的[置信区间说明](https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm)将置信水平解释为重复抽样中的覆盖比例，并给出总体标准差已知时的均值区间；其[均值置信限条目](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm)给出未知标准差时的 \(t\) 区间。

[^binomial-interval]: NIST/SEMATECH 的[二项比例置信区间](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm)给出 Wilson 与精确二项区间；Brown、Cai 与 DasGupta 的[系统比较](https://projecteuclid.org/journals/statistical-science/volume-16/issue-2/Interval-Estimation-for-a-Binomial-Proportion/10.1214/ss/1009213286.full)分析了 Wald 区间不稳定的覆盖率并比较多种替代方法。

[^efron-bootstrap]: Efron B. [Bootstrap Methods: Another Look at the Jackknife](https://doi.org/10.1214/aos/1176344552). *The Annals of Statistics*. 1979;7(1):1–26；[Stan User’s Guide](https://mc-stan.org/docs/stan-users-guide/bootstrap.html)给出有放回重抽样、重复估计、标准误与分位数区间的计算流程。

[^bootstrap-ci]: DiCiccio TJ, Efron B. [A Survey of Bootstrap Confidence Intervals](https://statistics.stanford.edu/technical-reports/survey-bootstrap-confidence-intervals). Stanford Department of Statistics Technical Report BIO 181; 1995；SciPy 的正式 [`bootstrap` 文档](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.bootstrap.html)分别实现 percentile、basic 与 BCa 区间，并说明配对重抽样和退化分布边界。
