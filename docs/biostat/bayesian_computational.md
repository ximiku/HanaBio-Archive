# 贝叶斯推断与计算统计

贝叶斯公式最初是条件概率之间的恒等关系：观察到新事件后，原有事件概率怎样更新。统计推断把这条关系用于未知参数、潜在状态和未来观察。模型先用概率分布表达观察怎样产生，再用先验分布表达观察数据之前对未知量的约束；数据进入后，似然与先验共同形成后验分布。后验不只是一个点估计，而是给出在整个模型条件下，各种参数值、预测结果和决策后果的不确定性。

实际生命科学模型很少能靠纸笔求出完整后验。层级结构、非线性响应、缺失数据和潜变量会产生高维积分，因此贝叶斯分析与计算统计紧密相连。Monte Carlo、Markov chain Monte Carlo（MCMC）和近似推断使复杂后验可计算，却也引入随机计算误差和算法偏差。一个完整分析必须同时回答三个问题：模型是否表达了研究对象，计算是否真正探索了目标后验，结论是否对先验与模型选择稳健。

## 从事件概率到参数后验 { #bayesian-updating }

### 全概率与事件更新

若互斥且完备的事件 \(A_1,\ldots,A_K\) 构成样本空间的划分，观察到事件 \(B\) 后，属于第 \(k\) 类的概率为

\[
P(A_k\mid B)=
\frac{P(B\mid A_k)P(A_k)}
{\sum_{j=1}^{K}P(B\mid A_j)P(A_j)}.
\]

分母是全概率公式给出的 \(P(B)\)，它把各来源产生 \(B\) 的概率按来源概率加权。这里的先验概率 \(P(A_k)\) 与后验概率 \(P(A_k\mid B)\) 都属于有限事件；诊断试验中从患病率、敏感度和特异度求阳性预测值，就是这一层面的更新。本章的[概率页面](probability.md#conditional-probability)已完整保留了这条经典学习路径。

参数推断把未知参数 \(\theta\) 视为概率模型中的未知量。设观察数据为 \(y\)，采样模型给出 \(p(y\mid\theta)\)，先验分布为 \(p(\theta)\)。贝叶斯公式写成

\[
p(\theta\mid y)=
\frac{p(y\mid\theta)p(\theta)}{p(y)},
\]

其中

\[
p(y)=\int p(y\mid\theta)p(\theta)\,\mathrm d\theta
\]

称为边缘似然或先验预测密度。对离散参数，积分换成求和。似然 \(p(y\mid\theta)\) 是在已观察到 \(y\) 后把它看作 \(\theta\) 的函数，不是参数的概率分布；只有与先验相乘并归一化后，才得到参数的后验分布。

许多计算只需要知道后验与什么成比例：

\[
p(\theta\mid y)\propto p(y\mid\theta)p(\theta).
\]

省略的比例常数与 \(\theta\) 无关，但它在模型证据、Bayes factor 和某些预测计算中不能随意丢弃。后验结论始终条件于采样模型、先验、数据处理和观测设计；“数据自己给出后验”省略了决定结果的模型结构。

### 生成模型与条件独立

贝叶斯模型可以先写成联合分布，再按生成顺序分解。例如参数先由先验产生，观察在给定参数后相互独立：

\[
p(\theta,y_1,\ldots,y_n)
=p(\theta)\prod_{i=1}^{n}p(y_i\mid\theta).
\]

这条分解不仅方便计算，也暴露了条件独立假设。家系成员、同一培养皿内的孔或同一个体的时间序列若仍写成条件独立观察，就会把伪重复藏在似然中。层级随机效应、空间或时间过程、测量误差和选择机制都应出现在联合模型里，而不是留给后验算法“自动吸收”。

## Beta–binomial 共轭更新 { #beta-binomial }

设 \(n\) 次条件独立的 Bernoulli 试验中观察到 \(x\) 次成功，成功概率为 \(\theta\)。忽略不依赖 \(\theta\) 的组合常数，似然为

\[
p(x\mid\theta)\propto
\theta^x(1-\theta)^{n-x}.
\]

若先验为

\[
\theta\sim\operatorname{Beta}(a,b),
\qquad
p(\theta)\propto
\theta^{a-1}(1-\theta)^{b-1},
\]

相乘后得到

\[
\theta\mid x,n
\sim\operatorname{Beta}(a+x,b+n-x).
\]

先验与后验属于同一分布族，这称为共轭。Stan 用户指南也用 Beta 先验与 binomial 采样分布展示这一代数结构。[^stan-conjugacy] 后验均值为

\[
E(\theta\mid x,n)=
\frac{a+x}{a+b+n}.
\]

它可写成先验均值 \(a/(a+b)\) 与样本比例 \(x/n\) 的加权平均，因此 \(a+b\) 在这个特定参数化中具有“先验信息量”的直观。不过，\(a\) 和 \(b\) 只有在明确的 Bernoulli 交换性模型中才可类比先验成功与失败次数；一般先验的强度不能机械换算成样本量。

若下一次试验结果为 \(\widetilde Y\)，则后验预测成功概率为

\[
P(\widetilde Y=1\mid x,n)
=\int_0^1 \theta\,p(\theta\mid x,n)\,\mathrm d\theta.
\]

代入 Beta 后验可得

\[
P(\widetilde Y=1\mid x,n)=\frac{a+x}{a+b+n}.
\]

多次未来试验的成功数服从 Beta–binomial 预测分布，它同时包含未来 Bernoulli 波动和 \(\theta\) 的后验不确定性。把后验均值当作固定真实概率再模拟，只保留前一种波动，会得到过窄的预测范围。

这套共轭手算保留了“先验×似然→后验”的完整结构，也说明数据可以顺序更新：第一批数据的后验可作为第二批数据的先验。顺序更新等价于一次联合更新的前提，是两批数据在给定参数与模型后具有相应条件独立性，且没有因看见第一批结果而改变结局定义、选择规则或模型空间。

## 先验分布与先验预测 { #prior-modeling }

先验分布描述观察当前数据之前，模型允许参数落在哪些尺度与区域。信息性先验可来自可靠的历史实验、物理界限或明确专家知识；弱信息先验主要排除不合理的极端值，同时让当前数据在合理范围内发挥作用；参考性或形式上“平坦”的先验试图减少主观输入，却不一定在变量变换后仍平坦，也可能是不正规分布。若不正规先验导致后验无法归一化，后验概率和边缘似然都没有定义。

先验必须在参数和似然共同构成的尺度上理解。回归系数的同一个 \(N(0,10^2)\) 先验，在标准化连续响应、logit 链接和 log 发生率尺度上允许的预测范围完全不同。方差分量接近零、混合模型相关矩阵、稀有事件回归和高维系数尤其容易受到所谓“宽松先验”的隐含约束。Gelman、Simpson 与 Betancourt 强调，先验的实际含义往往只有放回似然和完整模型中才清楚。[^prior-likelihood-context]

在拟合数据之前，可从先验抽取参数，再从采样模型生成复制数据：

\[
\theta^{\mathrm{sim}}\sim p(\theta),
\qquad
y^{\mathrm{sim}}\sim p(y\mid\theta^{\mathrm{sim}}).
\]

这些 \(y^{\mathrm{sim}}\) 来自先验预测分布

\[
p(y)=\int p(y\mid\theta)p(\theta)\,\mathrm d\theta.
\]

先验预测检查把抽象参数尺度转回可观察量：如果一个体长模型在拟合前频繁生成负体长或超过物理尺度数百倍的个体，先验与链接函数的组合就需要修改。Stan 的正式指南把先验预测明确为不条件于当前响应数据的生成检查。[^stan-predictive-checks]

用同一批响应数据反复调先验直至得到希望的后验，会把数据使用两次。经验 Bayes 先由总体数据估计超参数再进行条件推断，是一种有用但不同的程序；其不确定性若被忽略，区间可能过窄。无论先验来自历史数据、专家量化、弱信息约束还是经验估计，都应说明来源，在若干科学上合理的先验下重复关键结论。先验敏感性不是“主观 Bayesian”才需要的补救，而是检查数据究竟识别了多少信息。

## 后验概括与可信区间 { #posterior-summaries }

后验均值、后验中位数和后验众数分别对应平方损失、绝对损失和局部最高密度等不同概括。对对称单峰分布它们可能接近；偏斜、多峰或边界后验中，一个中心数值会隐藏重要结构。报告应优先保留后验分布、分位数和科学尺度上的派生量，而不是把每个参数压缩为“估计值±标准误”。

后验概率可以直接表达模型内的命题，例如

\[
P(\theta>0\mid y)
=\int_0^{\infty}p(\theta\mid y)\,\mathrm d\theta.
\]

若真正关心的是效应是否超过最小生物学重要值 \(\delta\)，就应计算 \(P(\theta>\delta\mid y)\) 或给出落在实际等效区间内的概率。把 \(P(\theta>0\mid y)>0.95\) 自动改称“显著”，只是把固定阈值换了一种记法，仍没有说明效应大小、代价和决策后果。

一个 \(100(1-\alpha)\%\) 等尾可信区间截去后验两侧各 \(\alpha/2\) 的概率；最高密度区间选择具有最高后验密度的区域。多峰后验的最高密度集合可能不连续，强行写成单一区间会把低密度谷地也包含进去。区间还依赖参数化：在风险比和 log 风险比尺度上先概括再变换，中心与对称性可能不同。

在模型、先验和观察数据给定后，95% 可信区间可解释为参数落入该区间的后验概率为 95%。频率学派 95% 置信区间的定义则是：在同一抽样程序反复运行时，所构造区间的长期覆盖率为 95%。二者在大样本正则模型中可能数值相近，概率对象和校准方式仍不同。可信区间也不表示“模型有 95% 概率正确”，因为模型本身通常被作为条件而不是随机候选项。

## 后验预测与模型检查 { #posterior-predictive }

未来或复制观察 \(\widetilde y\) 的后验预测分布为

\[
p(\widetilde y\mid y)
=\int p(\widetilde y\mid\theta)
p(\theta\mid y)\,\mathrm d\theta.
\]

它把参数后验不确定性传播到新的观察层。Stan 用户指南以这一积分定义预测分布，并用后验抽样近似它。[^stan-posterior-predictive] 若有后验样本 \(\theta^{(1)},\ldots,\theta^{(M)}\)，可对每个样本生成 \(\widetilde y^{(m)}\sim p(\widetilde y\mid\theta^{(m)})\)，得到预测区间、事件概率和复杂派生量。

后验预测检查把实际数据与这些复制数据比较。检查量应针对模型可能失败的方式，例如零值比例、极端尾部、组间差异、最大值、空间聚集或随时间的残差结构。若复制数据无法重现观察数据的关键特征，说明似然、链接、层级或观测过程存在缺口；它不直接告诉研究者应增加哪一个参数。

复制数据已经条件于观察数据，因此后验预测检验量不是传统零假设下均匀分布的 *p* 值。模型若参数众多，也可能很好地重现用于拟合的特征而缺乏外部预测力。Gabry 等把先验预测、后验预测、计算诊断和模型比较组织为连续的可视化工作流，而不是只在拟合后画一次轨迹图。[^gabry-visualization]

## 层级模型与部分汇聚 { #bayesian-hierarchical }

若多家医院、多个种群或多个实验批次各有一个效应 \(\theta_j\)，完全汇聚模型令所有组共享同一效应，无汇聚模型则把各组完全独立估计。层级模型在两者之间建立总体分布，例如

\[
y_{ij}\mid\theta_j,\sigma
\sim N(\theta_j,\sigma^2),
\]

\[
\theta_j\mid\mu,\tau
\sim N(\mu,\tau^2).
\]

数据丰富的组主要由本组资料决定，数据稀少的组更多向总体均值 \(\mu\) 收缩，收缩程度由组内不确定性与组间尺度 \(\tau\) 共同决定。这种部分汇聚共享信息，又保留真实的组间差异；Stan 的层级回归说明明确把它置于完全汇聚和无汇聚之间。[^stan-partial-pooling]

层级分布表达的是组效应在给定超参数后的交换性，而不是各组在生物学上完全相同。若医院类型、物种谱系或处理批次有系统差异，应以预测变量、更高层结构或不同总体表示。组数很少时，\(\tau\) 的似然信息有限，超先验会明显影响收缩；对方差尺度给任意近零 inverse-gamma 先验可能产生不良行为，应在真实响应尺度上检查合理范围。[^gelman-variance-priors]

层级 Bayesian 模型与[混合效应模型](generalized_mixed_models.md#linear-mixed-model)描述同一种嵌套或交叉数据结构，但推断组织不同：后者常以最大似然或 REML 估计固定效应和方差分量，前者为它们指定联合先验并传播到后验预测。两者都不能用“加一个随机效应”修复错误的实验单位或未经观察的总体推广。

## 从积分到 Monte Carlo { #monte-carlo-integration }

后验期望通常是高维积分：

\[
E\{g(\theta)\mid y\}
=\int g(\theta)p(\theta\mid y)\,\mathrm d\theta.
\]

若能从后验独立抽取 \(M\) 个样本，可用

\[
\widehat E_M=
\frac{1}{M}\sum_{m=1}^{M}g(\theta^{(m)})
\]

近似该积分。Monte Carlo 误差来自有限模拟次数；在独立、方差有限的情形下，其标准误大致随 \(1/\sqrt M\) 缩小。模拟次数增加四倍，随机计算误差才约减半。它不会缩小由有限生物样本产生的后验不确定性，也不会修复错误模型。

低维、结构简单的后验可以用解析共轭、网格积分或数值求积。拒绝采样从易抽样的包络分布筛选样本，维数增大后接受率可能急剧下降。重要性采样从提议分布 \(q(\theta)\) 抽样，再以 \(p(\theta\mid y)/q(\theta)\) 加权；若提议分布没有覆盖后验尾部，少数巨大权重会支配结果。直接 Monte Carlo、重要性采样和 MCMC 都是积分方法，但样本独立性、权重和误差诊断不同。

## Markov chain Monte Carlo { #mcmc }

### Metropolis–Hastings 与 Gibbs 采样

MCMC 构造一个以目标后验为平稳分布的 Markov 链。平稳分布正确还不够，链必须能够到达目标分布的所有相关区域，并具有适当的遍历性质，时间平均才会收敛到后验期望。Metropolis–Hastings 算法从当前位置 \(\theta\) 按提议分布 \(q(\theta'\mid\theta)\) 产生候选 \(\theta'\)，并以概率

\[
\alpha=\min\left\{1,
\frac{p(\theta'\mid y)q(\theta\mid\theta')}
{p(\theta\mid y)q(\theta'\mid\theta)}
\right\}
\]

接受候选。后验的归一化常数在比值中抵消，因此只需能计算未归一化密度。Hastings 的论文把早期 Metropolis 方法推广到非对称提议，并讨论了 Monte Carlo 误差评估。[^hastings-1970]

Gibbs 采样依次从每个参数块的完全条件分布抽样，是 Metropolis–Hastings 的特殊情形。它在共轭或条件分布易抽样时很有效，但强相关参数会使链缓慢移动。数据增强、潜类别和缺失值模型常能写成 Gibbs 步骤；标签交换、近不可识别和高度相关几何仍需要专门约束或重参数化。

### Hamiltonian Monte Carlo 与 NUTS

随机游走提议在高维、强相关后验中会反复拒绝或只作很小移动。Hamiltonian Monte Carlo（HMC）引入辅助动量，利用 log 后验的梯度沿近似保持能量的轨迹远距离移动。步长太大会造成数值积分误差，步数太少又会退化为随机游走。

No-U-Turn Sampler（NUTS）在轨迹开始折返时自动停止，并在 warmup 中适配步长和质量矩阵，减少人工指定轨迹长度。Hoffman 与 Gelman 的原始论文给出了这一自适应路径构造。[^nuts-2014] HMC/NUTS 适合连续可微参数；离散潜变量通常须边缘化，或改用能处理离散状态的采样方法。

Warmup 用于让链离开不合适的初值并适配算法参数，适配阶段的样本通常不进入后验概括。正式抽样应从多个分散初值启动独立链。固定“四条链、每链两千次”不是普适完成标准：模型维数、后验几何、自相关和所需尾部精度共同决定有效信息量。无必要的 thinning 会丢弃样本；除存储或计算成本确有需要，保留全部抽样并用有效样本量衡量效率更合适。

## MCMC 诊断与计算误差 { #mcmc-diagnostics }

轨迹图应显示各链在同一稳定区域内反复往返，而不是持续漂移、长时间停滞或链间分离。秩归一化 split \(\widehat R\) 比较链内与链间变异，并通过分链、秩变换和折叠提高对位置与尺度不收敛的敏感性。\(\widehat R\) 接近 1 是必要条件之一，却不能证明链已遍历所有模式；若所有链都困在同一个局部模式，它仍可能看起来良好。Vehtari 等给出了现代 \(\widehat R\) 及 bulk／tail 有效样本量的改进定义。[^vehtari-rhat]

链内自相关使 \(M\) 次 MCMC 迭代包含的信息少于 \(M\) 次独立抽样。有效样本量（ESS）把这种依赖换算为等价独立样本数；bulk ESS 关注分布主体，tail ESS 关注分位数与尾概率。某个后验量 \(g(\theta)\) 的 Monte Carlo 标准误（MCSE）应相对于该量的后验标准差和报告精度足够小。诊断必须针对真正报告的派生量，而不只是模型原始参数。

HMC 的 divergent transition 表示数值轨迹未能可靠穿过高曲率区域，常见于层级漏斗、弱识别或不合适参数化；达到最大树深则提示轨迹在停止前已耗尽允许深度。降低步长可能减少部分发散，更根本的处理常是缩放变量、提供合理先验或使用非中心参数化。Stan 参考手册把发散与后验曲率联系起来，并要求在解释样本前解决这些诊断。[^stan-mcmc-diagnostics]

计算诊断与模型诊断不可互相替代。链充分混合，只说明算法较好地抽取了所写模型的后验；若似然遗漏零膨胀、层级或测量误差，计算可以精准地得到错误问题的答案。相反，后验预测图看似合理也不能证明链已经进入所有高概率区域。

## 近似后验计算 { #approximate-inference }

Laplace 近似在后验众数附近用二阶曲率构造 Gaussian 近似，适合单峰、近对称且局部曲率能代表全局形状的后验。偏斜、重尾、多峰、边界和弱识别问题会使近似失真；在高维中，Hessian 分解也可能昂贵。Stan 的正式实现是在无约束参数空间围绕众数建立近似，再变换回受约束尺度。[^stan-laplace]

变分推断选择一个易处理的分布族 \(q(\theta)\)，通过优化使它接近目标后验。常用目标是最大化证据下界（ELBO），等价于最小化

\[
\operatorname{KL}\{q(\theta)\,\|\,p(\theta\mid y)\}.
\]

Mean-field 近似把参数相关性全部断开，full-rank Gaussian 可保留线性相关但仍无法表达任意偏斜和多峰。ADVI 用自动微分与随机梯度优化 ELBO，速度通常快于完整 MCMC；其目标倾向避免把质量放到后验低密度处，因而可能漏掉模式或低估尾部不确定性。[^advi-2017]

优化收敛只说明近似族中的目标不再明显改进，不证明 \(q\) 接近真实后验。近似推断应通过模拟资料、少量可承受的高质量 MCMC、重要性修正、预测检查或 simulation-based calibration 校验。算法选择是精度、计算量与研究目的之间的权衡；用于探索候选模型的近似，未必足以支持尾概率、极端风险或高代价决策。

## 模型比较、证据与决策 { #bayesian-model-comparison }

两个模型 \(M_1\) 与 \(M_0\) 的 Bayes factor 是边缘似然之比：

\[
BF_{10}=\frac{p(y\mid M_1)}{p(y\mid M_0)}.
\]

它把先验模型优势更新为后验模型优势。边缘似然会对每个模型的整个参数先验空间积分，因此 Bayes factor 对备择模型下参数先验的尺度和尾部十分敏感；不正规先验还会使它未定义。Kass 与 Raftery 的综述在介绍 Bayes factor 的同时明确要求评估先验敏感性。[^kass-raftery-1995] 后验模型概率也只在列入比较的候选集合与模型先验条件下成立，不能证明其中某个模型是真实的数据生成机制。

若目标是预测新数据，可比较留出数据上的 posterior predictive density。Leave-one-out cross-validation（LOO）逐个留下独立信息单位，PSIS-LOO 用平滑重要性权重近似重复拟合，并以 Pareto \(k\) 诊断识别不可靠的近似和高影响观察。Vehtari、Gelman 与 Gabry 系统比较了 LOO、WAIC 与有限样本稳定性。[^psis-loo] 时间、空间、家系和重复测量资料应按未来应用场景留组、留时间段或留个体，而不是把相关记录随机拆开。

模型比较不必以“选出唯一胜者”结束。若多个模型代表不同但合理的机制，可报告关键结论在模型间的变化，或按外部预测表现进行模型平均与 stacking。后验分布本身也不会给出行动：决策还需指定可选行动 \(a\) 与损失 \(L(a,\theta)\)，选择使后验期望损失最小的行动。不同漏诊与误诊代价、保护性管理和资源约束，可能让同一个后验支持不同决策。

## Bootstrap、置换与模拟研究 { #computational-statistics }

计算统计的多个方法都使用重复抽样，但抽样对象不同。

- 非参数 bootstrap 从原样本的经验分布有放回重抽，近似估计量在重复抽样下的分布；参数 bootstrap 从拟合模型生成资料。重抽样单位必须与独立信息单位一致，区块、整群和配对结构不能逐行打散。本章的[抽样与估计页面](sampling_estimation.md#bootstrap)已讲解区间类型与重抽样层级。
- 置换检验在零假设和研究设计允许的可交换标签中重排，构造检验统计量的参照分布。随机分派、配对、区组与时间结构决定允许怎样重排，详见[置换检验](categorical_nonparametric.md#permutation-tests)。
- 普通 Monte Carlo 从指定概率模型独立模拟，近似积分、概率或方法表现；MCMC 则用相关的 Markov 链样本近似难以直接抽样的目标分布。

这些模拟不能创造新的生物学信息。把 bootstrap 重复次数从一千增至一百万只减小区间端点的计算波动，不会扩大原样本覆盖的物种、批次或环境范围；把 MCMC 迭代增多也只减小后验概括的计算误差，不会让后验本身因而变窄。抽样不确定性、模型不确定性和 Monte Carlo 误差应分别呈现。

模拟研究可在已知参数 \(\theta_0\) 下反复生成数据、拟合完整流程，再检查偏差、区间覆盖率、预测校准、错误率和失败率。参数恢复先回答“在这个模型生成的数据上，方法能否找回已知值”，再去解释真实数据。若只模拟容易收敛的参数区、丢弃拟合失败的重复或用生成模型本身作为唯一分析模型，结果会过度乐观。

Simulation-based calibration（SBC）进一步从先验抽取参数并生成数据，对每个模拟数据集计算后验，再检查真实模拟参数在后验样本中的秩是否符合校准分布。它能发现推断算法和模型实现错误，但在模型与先验自身生成的数据上通过 SBC，不表示模型适合现实数据。Talts 等将 SBC 发展为验证 Bayesian 计算的通用程序。[^talts-sbc]

有限模拟次数也有可量化误差。例如以 \(B\) 次独立模拟估计概率 \(p\)，Monte Carlo 标准误近似为

\[
\operatorname{MCSE}(\widehat p)
\approx\sqrt{\frac{\widehat p(1-\widehat p)}{B}}.
\]

应根据所需精度选择 \(B\)，报告随机种子、伪随机数生成器或软件版本、失败重复及其处理，而不是把模拟频率写成无误差的精确值。

## Bayesian 工作流与完整报告 { #bayesian-workflow }

一项 Bayesian 分析从研究问题和待估量开始，而不是从挑选采样器开始。先用生成过程明确观察单位、条件独立、测量误差、缺失与选择机制；再为每个参数指定有尺度含义的先验，运行先验预测检查。复杂模型应先在模拟数据上做参数恢复，确认实现、识别性和计算流程，然后才拟合真实数据。

拟合后先处理计算诊断：多链轨迹、rank-normalized \(\widehat R\)、bulk／tail ESS、MCSE，以及 HMC 的发散、树深和能量诊断。随后进行后验预测检查，比较关键生物学特征；对结论重要的先验、似然、链接、缺失机制和模型结构进行敏感性分析。需要外部预测或模型比较时，再采用符合推广单位的留出验证或 LOO。Bayesian workflow 文献把模型构造、计算诊断、检查、理解与比较视为反复迭代而非一次线性拟合。[^bayesian-workflow]

报告至少应包括采样模型与层级、参数化、先验及其来源、先验预测检查、软件和算法、链数、warmup 与正式抽样、诊断结果、后验效应与可信区间、科学阈值概率、后验预测检查和敏感性分析。若使用近似推断、Bayes factor、LOO、SBC 或模拟研究，应另报近似族、模型先验、留出单位、Pareto 诊断、模拟生成机制与 Monte Carlo 误差。代码、数据处理和随机种子使计算可重现，但科学结论的重复仍需独立数据和新的生物学研究。

## 参考资料与延伸阅读

[^stan-conjugacy]: Stan Development Team. [Exploiting conjugacy](https://mc-stan.org/docs/2_28/stan-users-guide/exploiting-conjugacy.html). *Stan User’s Guide*.
[^prior-likelihood-context]: Gelman, A., Simpson, D. & Betancourt, M. (2017). [The Prior Can Often Only Be Understood in the Context of the Likelihood](https://doi.org/10.3390/e19100555). *Entropy*, 19, 555.
[^stan-predictive-checks]: Stan Development Team. [Posterior and Prior Predictive Checks](https://mc-stan.org/docs/stan-users-guide/posterior-predictive-checks.html). *Stan User’s Guide*.
[^stan-posterior-predictive]: Stan Development Team. [Posterior Predictive Sampling](https://mc-stan.org/docs/stan-users-guide/posterior-prediction.html). *Stan User’s Guide*.
[^gabry-visualization]: Gabry, J., Simpson, D., Vehtari, A., Betancourt, M. & Gelman, A. (2019). [Visualization in Bayesian workflow](https://doi.org/10.1111/rssa.12378). *Journal of the Royal Statistical Society: Series A*, 182, 389–402.
[^stan-partial-pooling]: Stan Development Team. [Hierarchical logistic regression](https://mc-stan.org/docs/2_26/stan-users-guide/hierarchical-logistic-regression.html). *Stan User’s Guide*.
[^gelman-variance-priors]: Gelman, A. (2006). [Prior distributions for variance parameters in hierarchical models](https://doi.org/10.1214/06-BA117A). *Bayesian Analysis*, 1, 515–534.
[^hastings-1970]: Hastings, W. K. (1970). [Monte Carlo sampling methods using Markov chains and their applications](https://doi.org/10.1093/biomet/57.1.97). *Biometrika*, 57, 97–109.
[^nuts-2014]: Hoffman, M. D. & Gelman, A. (2014). [The No-U-Turn Sampler: Adaptively Setting Path Lengths in Hamiltonian Monte Carlo](https://www.jmlr.org/papers/v15/hoffman14a.html). *Journal of Machine Learning Research*, 15, 1593–1623.
[^vehtari-rhat]: Vehtari, A., Gelman, A., Simpson, D., Carpenter, B. & Bürkner, P.-C. (2021). [Rank-Normalization, Folding, and Localization: An Improved \(\widehat R\) for Assessing Convergence of MCMC](https://doi.org/10.1214/20-BA1221). *Bayesian Analysis*, 16, 667–718.
[^stan-mcmc-diagnostics]: Stan Development Team. [MCMC Sampling](https://mc-stan.org/docs/reference-manual/mcmc.html). *Stan Reference Manual*.
[^stan-laplace]: Stan Development Team. [Laplace Approximation](https://mc-stan.org/docs/reference-manual/laplace.html). *Stan Reference Manual*.
[^advi-2017]: Kucukelbir, A., Tran, D., Ranganath, R., Gelman, A. & Blei, D. M. (2017). [Automatic Differentiation Variational Inference](https://www.jmlr.org/papers/v18/16-107.html). *Journal of Machine Learning Research*, 18, 1–45.
[^kass-raftery-1995]: Kass, R. E. & Raftery, A. E. (1995). [Bayes Factors](https://doi.org/10.1080/01621459.1995.10476572). *Journal of the American Statistical Association*, 90, 773–795.
[^psis-loo]: Vehtari, A., Gelman, A. & Gabry, J. (2017). [Practical Bayesian model evaluation using leave-one-out cross-validation and WAIC](https://doi.org/10.1007/s11222-016-9696-4). *Statistics and Computing*, 27, 1413–1432.
[^talts-sbc]: Talts, S., Betancourt, M., Simpson, D., Vehtari, A. & Gelman, A. (2020). [Validating Bayesian Inference Algorithms with Simulation-Based Calibration](https://proceedings.mlr.press/v108/talts20a.html). *Proceedings of AISTATS 2020*, 108, 2636–2646.
[^bayesian-workflow]: Gelman, A. et al. (2020). [Bayesian Workflow](https://arxiv.org/abs/2011.01808). arXiv:2011.01808.
