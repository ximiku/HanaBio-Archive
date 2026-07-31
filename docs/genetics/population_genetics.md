# 群体遗传学

个体把等位基因传给后代，群体则在一代代出生、死亡和迁移中改变这些等位基因的频率。群体遗传学以这一频率变化为核心：先规定研究对象与抽样范围，再用交配、突变、选择、基因流和随机抽样建立模型，最后比较模型预期与实际基因型数据。它既能解释为什么随机交配会产生特定的基因型比例，也能说明有限群体为何即使没有选择仍会逐渐分化。

这些模型不是对自然群体的完整复制。种群边界、世代是否重叠、样本来自哪个时间和地点、标记是否可靠，都会改变参数的含义。因而，等位基因频率是对一组明确基因拷贝的统计量，Hardy–Weinberg 平衡是一个基准模型，$F_{ST}$、有效群体大小和连锁不平衡也都是依赖模型与抽样设计的描述量。适应、谱系历史和物种形成等演化解释由[种群变异与进化](../evolution/variation_population.md)继续展开。

## 从样本计数到群体频率 { #population-frequencies }

一个能够通过繁殖交换遗传物质的局部繁殖群体常称孟德尔群体，其全部可传递遗传变异构成基因库。实际研究很少能穷尽整个基因库，通常是在指定地点、时间、生活史阶段和纳入标准下抽样。因此，“某等位基因的频率”必须隐含或明示一个抽样框：同一物种的不同亚群、不同年份或不同年龄组可以有不同频率，把它们混在一起会改变结果。

### 常染色体等位基因由基因型计数得到 { #autosomal-frequency }

在由 $N$ 个二倍体个体组成的样本中，若常染色体座位有 $AA$、$Aa$ 和 $aa$ 三种基因型，计数分别为 $n_{AA}$、$n_{Aa}$ 和 $n_{aa}$，则

$$
p=f(A)=\frac{2n_{AA}+n_{Aa}}{2N},\qquad
q=f(a)=\frac{2n_{aa}+n_{Aa}}{2N},
$$

并有 $p+q=1$。基因型频率是各基因型个体数除以 $N$，与等位基因频率属于不同层级：许多不同的基因型比例都能给出同一组 $p$ 和 $q$。多等位座位可写成 $\sum_i p_i=1$，每个 $p_i$ 仍由该等位基因的拷贝数除以样本中该座位的全部有效拷贝数得到。

性染色体、单倍体、非整倍体和拷贝数变异需要改变分母。以典型 XX–XY 系统的非拟常染色体 X 连锁座位为例，若样本有 $N_f$ 位 XX 个体和 $N_m$ 位 XY 个体，$a$ 的频率为

$$
q_X=\frac{2n_{X^aX^a}+n_{X^AX^a}+n_{X^aY}}{2N_f+N_m}.
$$

分母是实际参与计数的 X 染色体拷贝数；缺失基因型、嵌合和不确定分型还应在数据处理中显式记录，不能一律视作参考纯合子。

## Hardy–Weinberg 模型给出随机结合的基准 { #hardy-weinberg }

设一个常染色体二等位座位在配子库中的频率为 $p$ 和 $q$。雌雄配子随机结合且两性的等位基因频率相同时，合子基因型概率是

$$
(p+q)^2=p^2+2pq+q^2,
$$

即 $AA$、$Aa$ 和 $aa$ 分别为 $p^2$、$2pq$ 和 $q^2$。这里的关键动作是配子随机结合：无论亲代基因型比例怎样，只要进入配子库的频率相同且结合随机，一个常染色体座位的合子比例可在一代内达到 Hardy–Weinberg 比例。

随机交配本身不会系统改变等位基因频率，却会重新组织等位基因在个体中的配对。要使 $p$ 和 $q$ 以及上述基因型比例跨世代保持不变，还需在所考察座位上没有选择、突变和迁移，并忽略有限繁殖者造成的遗传漂变。有限群体即使完全按这些规则繁殖，频率也只在期望上不变，每一代的实际抽样仍会波动。Hardy–Weinberg 因而是分解机制的零模型，而不是“自然群体必然平衡”的定律。[^hardy-weinberg-framework]

### 多等位与 X 连锁座位有相应扩展 { #hardy-weinberg-extensions }

有 $k$ 个等位基因时，随机结合产生各纯合子 $p_i^2$ 和各异型合子 $2p_ip_j$。以三个等位基因为例，

$$
(p+q+r)^2=p^2+q^2+r^2+2pq+2pr+2qr.
$$

这些项是基因型概率，不表示不同等位基因具有相同功能或显性关系；共显性、隐性和上位作用影响表型分类，却不改变按基因型计数时的展开式。

典型 X 连锁座位还要分开两性的频率。若亲代 XX 和 XY 个体中的 $A$ 频率分别为 $p_f$ 和 $p_m$，随机交配后

$$
p_f'=\frac{p_f+p_m}{2},\qquad p_m'=p_f.
$$

儿子的 X 全来自母方，女儿各从父母获得一条 X，因此两性起始频率不同时不会在一代内同时达到相同值，而是以逐渐衰减的交替差异趋近共同频率。只有起始 $p_f=p_m$ 时，常见的女性 $p^2:2pq:q^2$ 与男性 $p:q$ 才能立即共同保持。

### 平衡检验比较数据与明确模型 { #hardy-weinberg-testing }

对一个二等位常染色体座位，可由样本估计 $\hat p$ 和 $\hat q$，再计算 $N\hat p^2$、$2N\hat p\hat q$ 和 $N\hat q^2$ 的期望计数。大样本下常用拟合优度统计量

$$
\chi^2=\sum_i\frac{(O_i-E_i)^2}{E_i}.
$$

由于等位基因频率由同一批基因型数据估计，二等位、三基因型情形的常规自由度为 $1$，不是简单的类别数减一。稀有等位基因会产生很小的期望计数，此时渐近 $\chi^2$ 近似可能明显失真，应采用针对 Hardy–Weinberg 条件分布的精确检验或经过验证的蒙特卡洛方法。[^hwe-exact-test]

显著偏离只说明数据与所检验模型不相容。近交或同类交配、亚群混合造成的 Wahlund 效应、性别或世代混样、自然选择、拷贝数变异、空等位基因、等位基因脱落和其他分型错误都可能产生偏离；抽样波动也会给出偶然显著结果。反之，不显著表示当前样本尚不足以拒绝模型，并不证明所有假设逐条成立。群体基因组研究同时检验许多位点时，还要区分用于质量控制的经验阈值与对生物机制的正式推断。

## 非随机交配重排基因型组合 { #nonrandom-mating }

近亲交配提高两条同源染色体上的等位基因同祖同源的概率。若群体中 $A$ 和 $a$ 的频率为 $p$ 和 $q$，以近交系数 $F$ 表示个体两个等位基因同祖同源的概率，则经典 Wright 表达式为

$$
f(AA)=p^2+Fpq,\qquad
f(Aa)=2pq(1-F),\qquad
f(aa)=q^2+Fpq.
$$

与 Hardy–Weinberg 基准相比，两种纯合子各增加 $Fpq$，杂合子减少 $2Fpq$，但等位基因频率仍为 $p$ 和 $q$。这说明在没有其他过程时，近交首先改变的是等位基因在个体内的配对。谱系中的 $F$、群体相对于某个参考群体的杂合度亏缺和基因组纯合片段都可描述近交信息，却不是在所有设计中可互换的同一个估计量；个体层面的亲缘、近交衰退和遗传净化详见[数量遗传学](quantitative_genetics.md#relatedness-inbreeding)。

选型交配或同类交配按表型、空间或社会关系改变配偶组合。若被选择的表型只与部分座位相关，效应可集中于相关位点及其连锁区域，不必造成全基因组一致的近交。同类交配也可在若干代中增加某性状相关基因型的纯合度，异类交配则可提高杂合度；是否改变等位基因频率取决于不同基因型的繁殖贡献是否随之改变。

## 系统性过程推动等位基因频率变化 { #systematic-forces }

突变、选择和基因流在给定状态下具有可写出的平均方向，但它们的实际结果仍叠加有限群体抽样。单独研究每一种力便于理解参数；解释自然数据时则需把它们放回同一生命周期。

### 突变持续输入并移除等位基因 { #mutation }

若 $A\rightarrow a$ 的每代突变率为 $u$，反向突变率为 $v$，突变前 $a$ 的频率为 $q$，则

$$
q'=q+u(1-q)-vq,
$$

所以 $\Delta q=u(1-q)-vq$。只考虑这两个突变方向且参数恒定时，平衡频率为

$$
q^*=\frac{u}{u+v}.
$$

这个平衡可以需要许多代才接近。单个座位的每代突变率通常很低，突变对既有常见等位基因频率的即时改变往往很小；它的重要性在于持续创造新变异，并在大量位点、长时间尺度或强选择清除的背景下提供反复输入。

### 选择通过相对繁殖贡献改变频率 { #selection }

令 $AA$、$Aa$、$aa$ 从合子到下一代配子库的相对适合度分别为 $w_{AA}$、$w_{Aa}$ 和 $w_{aa}$。随机结合形成基因型后，群体平均适合度为

$$
\bar w=p^2w_{AA}+2pqw_{Aa}+q^2w_{aa},
$$

选择后的 $A$ 频率为

$$
p'=\frac{p^2w_{AA}+pqw_{Aa}}{\bar w}.
$$

适合度是特定环境和生命周期内对后代基因库的相对贡献，不等同于寿命、体型或某一个生理指标。只有把最高适合度归一化为 $1$ 时，某基因型的选择系数才可写作 $s=1-w$。显性关系决定选择能否在杂合子中“看见”稀有等位基因，因此相同 $s$ 在不同显性模型下会产生不同速度。[^fitness-selection]

若 $AA$ 与 $Aa$ 的适合度为 $1$，隐性 $aa$ 的适合度为 $1-s$，选择后的 $a$ 频率为

$$
q'=\frac{q(1-sq)}{1-sq^2}.
$$

当 $a$ 很稀少时，大多数拷贝藏在杂合子中，清除速度随之降低。若完全隐性的有害等位基因以速率 $u$ 反复产生，且假定群体无限、随机交配、反向突变可忽略并已接近平衡，则有经典近似

$$
q^*\approx\sqrt{\frac{u}{s}}.
$$

部分显性、有限群体、连锁、时变选择和群体结构都会改变这一结果。杂合子优势可维持稳定多态，杂合子劣势通常产生依赖起始频率的不稳定阈值；频率依赖选择和空间异质环境还可形成其他动态，不能用单一“有利等位基因最终固定”的叙述概括。[^mutation-selection]

### 基因流把来源群体的频率带入本地 { #gene-flow }

若一代后本地基因库中有比例 $m$ 的基因拷贝来自迁入者，迁入来源的 $a$ 频率为 $q_m$，本地迁入前频率为 $q$，则

$$
q'=(1-m)q+mq_m,
$$

或 $\Delta q=m(q_m-q)$。这里的 $m$ 是进入繁殖基因库的拷贝比例；个体移动但没有繁殖，不构成该代的基因流。来源频率与本地不同，才会直接改变所考察座位的频率。

基因流常降低亚群间的频率差异，也可把局部有利、有害或中性的等位基因带入新环境。迁移—选择平衡取决于迁入率、选择强度、空间排列和繁殖方式。“每代一个迁入者足以阻止分化”来自对称岛屿模型等特殊近似，不能脱离群体数、大小、选择和非平衡历史作为通则。[^forces-interact]

## 遗传漂变来自有限繁殖者的随机抽样 { #genetic-drift }

在理想 Wright–Fisher 二倍体群体中，下一代的 $2N$ 个基因拷贝从当前基因库独立抽取。若当前 $A$ 频率为 $p$，下一代拷贝数 $K$ 满足

$$
K\sim\operatorname{Binomial}(2N,p),\qquad p'=\frac{K}{2N}.
$$

于是

$$
\operatorname{E}(p')=p,\qquad
\operatorname{Var}(p')=\frac{p(1-p)}{2N}.
$$

漂变没有固定的频率变化方向，但小群体中一代间波动更大。一个中性等位基因最终固定的概率等于其当前频率 $p$；在没有突变和迁移的有限封闭群体中，每个位点最终会到达丢失或固定的吸收状态。平行起始的群体会因不同抽样轨迹逐渐分化，群体内杂合度则平均下降。[^wright-fisher]

奠基者效应是少数建立新群体的繁殖者携带了来源基因库的非代表性样本；瓶颈效应是群体短期或长期锐减，使少量存活繁殖者决定后续基因库。二者都是漂变增强的群体史情境，不是独立于漂变的新作用力。瓶颈后遗传多样性的损失取决于最低有效大小、持续代数、恢复过程和瓶颈前频率，不能仅由当前个体数或一次普查下降幅度判断。

### 有效群体大小连接真实种群与理想漂变 { #effective-population-size }

有效群体大小 $N_e$ 是与真实群体具有同等漂变或近交速率的理想 Wright–Fisher 群体大小。方差有效大小关注后代等位基因频率的抽样方差，近交有效大小关注同祖概率增加速度；在复杂生活史和群体结构中，两者可以不同。因此，$N_e$ 不是实际普查个体数 $N_c$ 的同义词，也不是一个能脱离时间尺度和估计方法解释的固定常数。[^effective-size]

繁殖者性比偏斜、个体后代数差异大、世代重叠、选择和时变群体大小都可改变 $N_e$。在离散世代、雌雄分离、随机交配且每个性别内繁殖成功相近的特殊模型中，

$$
N_e=\frac{4N_mN_f}{N_m+N_f}.
$$

多年或多代群体大小波动时，漂变主要受小群体阶段支配，简单模型下长期 $N_e$ 接近各代大小的调和平均数。真实物种还需处理年龄结构、寿命、生殖偏斜和亚群连接；用单次普查数代入 $1/(2N_e)$ 会给出虚假的精确度。

## 多座位关联记录重组与群体历史 { #linkage-disequilibrium }

单座位 Hardy–Weinberg 比例描述同一座位的两个等位基因如何配对，多座位的连锁不平衡（linkage disequilibrium, LD）描述不同座位的等位基因是否以非随机单倍型共同出现。对二等位座位 $A/a$ 与 $B/b$，可定义

$$
D=p_{AB}-p_Ap_B.
$$

常用标准化平方相关为

$$
r^2=\frac{D^2}{p_A(1-p_A)p_B(1-p_B)}.
$$

$D$ 的可能范围受等位基因频率限制，$r^2$ 更便于比较标记的统计相关程度。LD 不要求两个座位物理连锁，也不表示群体正在远离某个时间平衡；它只陈述当前单倍型频率没有分解成边际等位基因频率的乘积。一个群体可在每个座位都符合 Hardy–Weinberg 比例，同时在座位之间存在强 LD。[^linkage-disequilibrium]

若只考虑重组，两个座位间重组分数为 $c$，则

$$
D_{t+1}=(1-c)D_t.
$$

紧密连锁使既有 LD 衰减较慢，非连锁座位的关联则会较快被重组打散。不过漂变、选择、群体混合、结构和新突变都能产生或维持 LD；一次混合可以让物理上很远的座位也暂时相关。GWAS 借助历史 LD 用标记追踪附近因果变异，但显著标记未必就是因果变异，相关分析的更多边界见[数量遗传学](quantitative_genetics.md#gwas-genomic-prediction)。

## 群体结构改变频率比较与模型检验 { #population-structure }

空间、生态、行为或繁殖时间上的分隔会把一个物种划分为基因交换不完全的亚群。即使每个亚群内部随机交配，把频率不同的亚群合并后也常出现总体杂合子少于按合并频率计算的 Hardy–Weinberg 预期，这就是 Wahlund 效应。它来自抽样单位混合，不需要亚群内部近交。

Wright 的 $F$ 统计量可把杂合度亏缺分层描述：$F_{IS}$ 比较个体与其亚群，$F_{ST}$ 描述亚群间等位基因频率差异相对于总体变异的程度，$F_{IT}$ 比较个体与总群体，并有

$$
1-F_{IT}=(1-F_{IS})(1-F_{ST}).
$$

这些量依赖参考群体、标记、抽样层级和估计方法。$F_{ST}$ 是等位基因频率在亚群间分布的描述，累积反映漂变、迁移、突变、选择和历史事件的共同作用；只有在明确的平衡岛屿模型等假设下才能把它换算成迁移率，不能把某个 $F_{ST}$ 数值直接解释为隔离时间或“每代迁入者数”。[^fst-interpretation]

群体结构也是关联研究的混杂来源。若某表型和某等位基因都因祖源或地理而分层，两者可在没有直接因果关系时相关。主成分、亲缘矩阵和混合模型能够降低已被模型捕获的结构影响，却不能自动修复不均衡抽样、环境共变和未测结构。设计阶段的分层抽样、重复群体和独立验证仍是解释证据的一部分。

## 各种作用力在共同尺度上竞争 { #force-interactions }

自然群体中的一代变化可概念性地拆成突变输入、迁移混合、不同基因型的繁殖贡献、重组和有限繁殖者抽样，但这些步骤彼此影响。选择能否稳定压过漂变，取决于选择效应相对于有效群体大小的尺度；常以 $N_es$ 或在特定二倍体模型中以 $2N_es$、$4N_es$ 的无量纲组合判断强弱。具体阈值随倍性、显性、生命周期和模型约定变化，不能把某个常数当作普遍分界。

同样，突变—选择平衡、迁移—选择平衡和漂变—迁移平衡都只在参数与环境相对稳定时给出近似。选择还会通过遗传搭便车改变邻近中性位点，背景选择和重组率差异会使基因组不同区域具有不同的多样性与有效历史。群体遗传推断因此要同时报告时间与空间抽样、样本量、分型不确定性、所用模型及替代解释；模型的价值在于把机制预期说清楚，而不是以一个参数消除群体历史的复杂性。

## 参考资料与延伸阅读 { #references }

- Gillespie JH. [Population Genetics: A Concise Guide](https://global.oup.com/academic/product/population-genetics-9780801880087). 2nd ed. Johns Hopkins University Press; 2004.
- Charlesworth B, Charlesworth D. [Elements of Evolutionary Genetics](https://global.oup.com/academic/product/elements-of-evolutionary-genetics-9780981519425). Roberts and Company; 2010.
- Wigginton JE, Cutler DJ, Abecasis GR. [A Note on Exact Tests of Hardy–Weinberg Equilibrium](https://pmc.ncbi.nlm.nih.gov/articles/PMC1199378/). *American Journal of Human Genetics*. 2005;76:887–893.
- Orr HA. [Fitness and its role in evolutionary genetics](https://pmc.ncbi.nlm.nih.gov/articles/PMC2753274/). *Nature Reviews Genetics*. 2009;10:531–539.
- Wang J, Santiago E, Caballero A. [Prediction and estimation of effective population size](https://www.nature.com/articles/hdy201643). *Heredity*. 2016;117:193–206.
- Slatkin M. [Linkage disequilibrium — understanding the evolutionary past and mapping the medical future](https://pmc.ncbi.nlm.nih.gov/articles/PMC5124487/). *Nature Reviews Genetics*. 2008;9:477–485.
- Holsinger KE, Weir BS. [Genetics in geographically structured populations: defining, estimating and interpreting $F_{ST}$](https://www.nature.com/articles/nrg2611). *Nature Reviews Genetics*. 2009;10:639–650.

[^hardy-weinberg-framework]: Nature Education 的 [Hardy–Weinberg 原理说明](https://www.nature.com/scitable/knowledge/library/the-hardy-weinberg-principle-13235724/)区分随机配子结合所产生的基因型比例与使频率跨代稳定所需的完整假设。
[^hwe-exact-test]: Wigginton、Cutler 与 Abecasis 的[方法论文](https://pmc.ncbi.nlm.nih.gov/articles/PMC1199378/)显示常规 $\chi^2$ 检验在现实的稀有等位基因计数下也可能膨胀第一类错误，并给出适于 SNP 数据的精确检验。
[^fitness-selection]: Orr 的[适合度综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC2753274/)从绝对与相对适合度、基因型频率和平均适合度说明选择递推式的含义与尺度。
[^mutation-selection]: Frank 对[突变—选择平衡](https://pmc.ncbi.nlm.nih.gov/articles/PMC3258362/)的分析说明 $\sqrt{u/s}$ 是隐性有害等位基因在经典条件下的近似，并比较显性程度改变后的结果。
[^forces-interact]: Nature Education 的[群体作用力综述](https://www.nature.com/scitable/knowledge/library/natural-selection-genetic-drift-and-gene-flow-15186648/)以亚群模型说明迁移、漂变和选择的竞争；其中“每代一个迁入者”是特定近似而非普遍经验律。
[^wright-fisher]: Gillespie 对 [Wright–Fisher 模型](https://pmc.ncbi.nlm.nih.gov/articles/PMC1448894/)的讨论给出二倍体有限群体的二项抽样及杂合度按每代约 $1/(2N)$ 的速率损失这一基准。
[^effective-size]: Wang、Santiago 与 Caballero 的[综述](https://www.nature.com/articles/hdy201643)把 $N_e$ 定义为相对于 Wright–Fisher 理想群体的漂变与近交尺度，并比较不同繁殖系统、选择和估计方法下的有效大小。
[^linkage-disequilibrium]: Slatkin 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5124487/)强调 LD 是多座位等位基因的非随机关联，不以物理连锁或时间上的“非平衡”为必要条件，并总结重组、漂变、结构、选择与突变的共同影响。
[^fst-interpretation]: Holsinger 与 Weir 的[$F_{ST}$ 综述](https://www.nature.com/articles/nrg2611)把它界定为群体间等位基因频率分布的性质，并说明漂变、迁移、突变和选择共同决定其数值。
