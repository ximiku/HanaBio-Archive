# 酶动力学

酶动力学从浓度随时间的变化出发，研究一个催化体系以多快的速度生成产物，以及这种速度怎样随底物、酶、产物和效应物浓度而改变。实验首先得到反应进程曲线；初始斜率、饱和曲线和抑制曲线经过模型解释，才成为 $K_m$、$k_{cat}$、$K_i$ 等参数。因此，每个参数都须连同模型和测定条件解释。

最简单的米氏方程仍是酶动力学的起点。它把底物结合、酶—底物复合物和催化周转压缩成两个可测参数，同时也清楚显示动力学推断的边界：同一条双曲线可由许多微观机制产生，而明显偏离双曲线的曲线还可能来自协同性、底物抑制、产物积累、酶失活或检测系统本身。动力学能够排除与数据不相容的机制，却不能仅凭一种作图形式唯一证明分子机制。[^kinetics-terminology]

本页讨论稳态酶动力学的实验与定量框架。活性位点如何进行酸碱、共价和金属催化，以及别构调节、共价修饰、酶原和同工酶见[酶的催化机制与调控](enzyme_mechanism_regulation.md)；辅因子及维生素衍生辅酶的反应化学见[维生素与辅酶](vitamin_and_coenzyme.md)。

## 基本速率模型 { #fundamental-rate-models }

### 反应速率与初始速率 { #reaction-rates }

若底物 $S$ 按一比一化学计量转化为产物 $P$，瞬时反应速率可写为

$$
v=-\frac{d[S]}{dt}=\frac{d[P]}{dt}.
$$

化学计量数不是一比一时，各物质的浓度变化率还须除以相应的化学计量数，才表示同一个反应速率。实验记录的吸光、荧光、热量或电信号属于代理读出，须经过消光系数、标准曲线、反应体积和化学计量关系换算，并确认检测器在线性范围内，才能转换为浓度变化。

反应开始后，底物逐渐消耗，产物逐渐积累，逆反应、产物抑制和酶失活都可能使进程曲线弯曲。稳态实验通常取刚进入稳定线性区后的斜率，并外推到零时刻，记为初始速率 $v_0$。反应最初形成中间复合物的短暂阶段属于前稳态；若要分辨这一阶段，往往需要停流、快速淬灭等毫秒尺度技术。“底物转化不超过约 10%”是选择初始区间的实用经验，线性仍须由实际进程曲线确认。[^initial-rate-assay]

反应级数描述速率对浓度的幂次依赖，不能由底物有几个直接命名。对速率式 $v=k[A]^a[B]^b$，相对于 $A$、$B$ 的分级数分别为 $a$、$b$，总级数为二者之和；只有基元反应的分子数与级数存在直接关系。酶促总反应通常由多个基元步骤组成，常只能在一定浓度范围谈表观级数。简单米氏反应在 $[S]\ll K_m$ 时近似对底物一级，在 $[S]\gg K_m$ 时近似对底物零级，中间区间没有一个固定的整数级数。[^kinetics-terminology]

### 单底物稳态模型 { #single-substrate-steady-state }

把不可逆初始阶段的单底物反应简化为

$$
E+S \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} ES
\overset{k_{cat}}{\longrightarrow} E+P.
$$

总活性位点浓度为 $[E]_T=[E]+[ES]$。当底物远多于酶、产物尚未显著积累，而且短暂的复合物形成阶段已经过去，可以采用稳态近似

$$
\frac{d[ES]}{dt}=k_1[E][S]-(k_{-1}+k_{cat})[ES]\approx0.
$$

代入 $[E]=[E]_T-[ES]$ 后得到

$$
K_m=\frac{k_{-1}+k_{cat}}{k_1},\qquad
[ES]=\frac{[E]_T[S]}{K_m+[S]}.
$$

由于 $v_0=k_{cat}[ES]$，单底物米氏方程为

$$
v_0=\frac{V[S]}{K_m+[S]},\qquad
V=k_{cat}[E]_T.
$$

Briggs 与 Haldane 在 1925 年把稳态处理明确用于酶反应；它比要求结合先达到平衡的早期处理更一般。对上面的最简机制，只有在 $k_{cat}\ll k_{-1}$、即复合物大多先解离而不是继续反应的快速平衡极限，$K_m$ 才近似于底物解离常数 $K_S=k_{-1}/k_1$。真实酶往往还有构象变化、多个化学步骤和产物释放，因此实验测得的 $K_m$ 是整体动力学参数，只有在明确的快速平衡条件下才可近似表示亲和力。[^briggs-haldane]

米氏方程的双曲线来自两种限制行为之间的连续过渡：

$$
[S]\ll K_m:\quad v_0\approx\frac{k_{cat}}{K_m}[E]_T[S],
$$

$$
[S]\gg K_m:\quad v_0\approx V=k_{cat}[E]_T.
$$

低底物时，大多数活性位点未被底物占据，速率对 $[S]$ 敏感；高底物时，增加底物几乎不再提高速率，周转步骤成为主要限制。$V$ 是由模型外推得到的饱和极限，有限底物浓度下的实测速率只会趋近这一数值。许多多步机制都能产生相同形式的稳态方程，因此饱和曲线本身只能支持参数化描述，具体中间体还需其他证据识别。

### 动力学参数及其解释 { #kinetic-parameters }

| 参数 | 定义与常用单位 | 可以回答的问题 | 不能脱离条件作出的解释 |
| --- | --- | --- | --- |
| $V$ | 饱和底物极限的速率；浓度·时间$^{-1}$ | 规定酶量在给定体系中的限制速率 | 比较时须统一酶浓度；有限 $[S]$ 下的速率通常只趋近该极限 |
| $K_m$ | 米氏模型中 $v_0=V/2$ 时的底物浓度；浓度 | 曲线从低底物区转向饱和区的大致尺度 | 只有特定快速平衡条件下近似解离常数；本身不提供细胞内底物浓度或净反应方向 |
| $k_{cat}$ | $V/[E]_T$；时间$^{-1}$ | 饱和底物时每个活性位点的表观周转能力 | 多步机制中是整体参数，不必等于某一个化学步骤的速率常数 |
| $k_{cat}/K_m$ | 低底物极限的表观二级常数；浓度$^{-1}$·时间$^{-1}$ | 同一条件下比较竞争底物进入生产性反应的能力 | 适用于低底物区；进化适合度还受稳定性、特异性与代谢环境影响 |

四个参数都依赖温度、pH、离子强度、辅因子、底物的化学形态和酶的修饰、装配与活性比例。若 $[E]_T$ 用总蛋白而非活性位点浓度估计，错误折叠或失活分子会使 $k_{cat}$ 被低估。多底物反应中，未被充分饱和的共底物还会使测得的 $V$、$K_m$ 和 $k_{cat}/K_m$ 成为表观值。

$k_{cat}/K_m$ 同时包含底物遇到酶、形成生产性复合物并越过后续承诺步骤的影响，在理想低底物区决定不同底物对有限酶的竞争。扩散为这一二级常数设置了物理上限，但天然酶的参数跨越许多数量级，典型酶远未普遍达到扩散极限。底物供应、可逆性、旁反应、稳定性和代谢通量都会参与选择，因此体外的单一比值只描述进化约束中的一个维度。[^moderately-efficient-enzyme]

## 实验设计与复杂反应 { #experimental-design-and-complex-reactions }

### 参数估计与模型检验 { #parameter-estimation }

一次稳态实验先在每个底物浓度下取得完整进程曲线，从可比较的初始线性区估计 $v_0$，再把全部 $v_0$ 对 $[S]$ 直接拟合到米氏方程。底物浓度应跨越预期 $K_m$ 的两侧并进入足以约束 $V$ 的高浓度区；如果溶解度、抑制或检测上限阻止饱和，参数就主要依赖外推，报告时须明确相应不确定性。重复测量、独立样品、空白扣除和误差模型决定置信区间是否可信。

现代参数估计优先对未变换的速率数据做非线性回归。历史上的线性作图仍有助于辨认方程结构，却会改变误差分布：双倒数作图尤其放大低底物点的误差，Eadie–Hofstee 图的两轴又共享同一个速率测量。因此，线性图适合教学和诊断，参数估计仍应回到原始数据拟合。[^nonlinear-fitting]

| 作图 | 线性形式 | 传统截距与斜率 | 主要误差问题 |
| --- | --- | --- | --- |
| Lineweaver–Burk | $1/v_0=(K_m/V)(1/[S])+1/V$ | 纵截距 $1/V$，斜率 $K_m/V$ | 对低 $[S]$ 和小 $v_0$ 的误差赋予过大权重 |
| Hanes | $[S]/v_0=[S]/V+K_m/V$ | 纵截距 $K_m/V$，斜率 $1/V$ | 两轴都含 $[S]$，变换后误差仍不均一 |
| Eadie–Hofstee | $v_0=-K_m(v_0/[S])+V$ | 纵截距 $V$，斜率 $-K_m$ | $v_0$ 同时出现在两轴，误差相关 |

拟合结束后仍要回到数据。残差若随底物浓度呈系统弯曲，说明米氏模型遗漏了结构；单个高浓度点把 $V$ 拉高，可能提示底物抑制或异常值；不同酶浓度得到的 $V/[E]_T$ 不一致，则要检查聚集、活性比例、传质或耦联反应。对信息充分的时间序列，可以把整个进程曲线或多组条件全局拟合到微分方程，但增加参数也会带来可辨识性问题，必须报告模型、软件、权重、误差和参数相关性。STRENDA 指南要求同时记录酶身份、反应条件、组分浓度、单位和分析方法，使动力学数字能够被复现和比较。[^strenda-reporting]

### 多底物反应 { #multi-substrate-kinetics }

多数代谢酶处理两个或更多底物。以两底物、两产物反应 $A+B\rightleftharpoons P+Q$ 为例，序列机制要求两个底物都进入同一个中心复合物后才释放产物；乒乓机制则在第二底物结合前先释放第一产物，并留下化学上改变的酶形式 $E^*$。

| 机制 | 简化路径 | 可检验的结构含义 |
| --- | --- | --- |
| 有序序列 | $E\to EA\to EAB\to EPQ\to EQ\to E$ | 底物结合和／或产物释放有偏好的先后次序 |
| 随机序列 | $E$ 可先结合 $A$ 或 $B$，随后形成 $EAB$ | 存在多条进入中心复合物的路径；“随机”不排除一条路径通量更大 |
| 乒乓 | $E+A\to E^*+P$，继而 $E^*+B\to E+Q$ | 第一产物在第二底物结合前释放，酶在两种形式间往返 |

实验常固定 $B$、改变 $A$，再在多个 $B$ 水平重复。每一条对 $A$ 的饱和曲线都可给出表观 $V$ 和表观 $K_m$，但只有把整个浓度矩阵共同分析，才能估计双底物模型参数。共底物是否饱和须依据其有效化学形态和完整浓度响应判断；离子、辅因子和底物形成络合物时，真正参与反应的浓度可能不同于加入的总浓度。[^multisubstrate-kinetics]

双倒数线族的相交或近似平行曾被广泛用于区分序列与乒乓机制，但产品抑制、死端抑制、同位素交换、前稳态动力学和结构证据往往同样重要。有限浓度范围、误差和复杂分支机制都可制造相似图形。动力学线型可以反驳某些路径，不能单独把一个复杂酶的机制“画出来”，更不能据某个假定步骤的快慢推断所有乒乓酶都具有较大的 $K_m$。

## 酶抑制的动力学 { #enzyme-inhibition-kinetics }

### 可逆抑制的统一框架 { #reversible-inhibition }

对单底物米氏体系，设抑制剂与游离酶结合的常数为 $K_i$，与 $ES$ 结合的常数为 $K_i'$，并定义

$$
\alpha=1+\frac{[I]}{K_i},\qquad
\alpha'=1+\frac{[I]}{K_i'}.
$$

线性混合抑制可写为

$$
v_0=\frac{V[S]}{\alpha K_m+\alpha'[S]}.
$$

由此得到两个表观参数：

$$
V_{app}=\frac{V}{\alpha'},\qquad
K_{m,app}=\frac{\alpha}{\alpha'}K_m.
$$

四个常见名称是同一方程的限制情形：

| 类型 | 抑制剂结合偏好 | $V_{app}$ | $K_{m,app}$ |
| --- | --- | --- | --- |
| 竞争性 | 只结合游离酶，$\alpha>1$、$\alpha'=1$ | 不变 | 增大 |
| 反竞争性 | 只结合 $ES$，$\alpha=1$、$\alpha'>1$ | 减小 | 按同一倍数减小 |
| 混合型 | 游离酶和 $ES$ 均可结合，但亲和力不同 | 减小 | 可增大或减小 |
| 纯非竞争性 | 混合型的特例，$K_i=K_i'$ | 减小 | 不变 |

竞争性表示抑制剂与所考察底物的结合在动力学上互斥，这种互斥既可来自同一位点，也可来自邻近位点诱导的构象变化。纯非竞争则特指抑制剂对游离酶和 $ES$ 具有相同作用，是混合抑制的特殊情形；“活性位点之外结合”和别构抑制覆盖的机制范围更广。多底物酶的抑制类型还必须说明本次改变的是哪个底物：同一抑制剂相对于 $A$ 可表现竞争，而相对于 $B$ 可表现混合。[^inhibition-terminology]

比较模型时应在多个底物和抑制剂浓度下全局拟合原始速率，双倒数线的交点只提供初步线索。$K_i$ 是给定抑制模型中的参数；$IC_{50}$ 则是在指定酶量、底物浓度、反应时间和读出方式下使信号降低一半的抑制剂总浓度。改变 $[S]/K_m$ 或延长孵育，$IC_{50}$ 就可能变化，因此二者只有结合具体模型和条件才能比较。相对活力 $a=v_i/v_0$ 与抑制分数 $1-a$ 便于描述单一条件，却不包含机制信息。[^inhibitor-data-analysis]

### 紧密结合、慢结合与不可逆失活 { #time-dependent-inhibition }

可逆性须通过结合平衡、活力恢复和化学加合物等证据共同判断。若可逆抑制剂的 $K_i$ 与酶浓度相近，结合会显著耗尽游离抑制剂，$[I]_{free}\approx[I]_{total}$ 的常规假设失效；这类紧密结合数据可用保留质量守恒的 Morrison 方程等模型分析。若复合物解离极慢，稀释、透析或凝胶过滤后也可能在观察时窗内没有活力恢复，表观上很像不可逆失活。[^tight-binding]

慢结合抑制还会使进程曲线从较快的初始斜率逐渐转为较慢稳态斜率。一个通用简图是

$$
E+I \underset{k_{off}}{\overset{k_{on}}{\rightleftharpoons}} EI
\overset{k_{inact}}{\longrightarrow} EI^*.
$$

$EI^*$ 可以是共价加合物，也可以是极慢恢复的构象状态；只有结合可逆性、化学加合物、质量变化或活力恢复实验才能进一步区分。对饱和型共价失活，$k_{inact}$ 描述已结合复合物进入失活态的极限速率，$K_I$ 描述达到这一过程的浓度尺度，低抑制剂极限的 $k_{inact}/K_I$ 才是比较失活效率的二级参数。固定时间测得的一个 $IC_{50}$ 会把这些过程压缩在一起。[^time-dependent-inhibition]

有机磷化合物可磷酰化乙酰胆碱酯酶的催化丝氨酸，随后发生“老化”反应，使肟类复活更加困难；β-内酰胺抗生素则酰化青霉素结合蛋白的催化丝氨酸，形成长寿命酰化酶。二者说明不可逆或近不可逆抑制需要讨论具体反应和时间尺度。相反，重金属离子、氰化物和 CO 可通过配位、氧化还原或其他方式抑制不同酶，不能作为一个整体都归为“共价不可逆抑制剂”。[^covalent-inhibitors]

亲和标记先借助底物样识别把反应基团带到结合位点附近，再修饰邻近残基；机制型失活剂则先被酶当作底物处理，催化过程生成能使酶失活的反应性物种。两者都比普遍烷化剂更依赖活性位点环境，但“专一”仍需用竞争保护、位点鉴定和功能证据验证。过渡态类似物通常以高亲和力**可逆**结合，所模拟的是过渡态的部分特征，属于另一类抑制剂。

## 米氏模型的偏离与扩展 { #model-deviations }

实测曲线偏离矩形双曲线时，首先要区分分子机制与实验伪象。

| 观察 | 可能的分子解释 | 优先检查的实验因素 |
| --- | --- | --- |
| 高底物区速率下降 | 底物抑制、非生产性复合物、离子或渗透效应 | 底物纯度、溶解度、pH 与离子强度是否随加样改变 |
| 曲线呈 S 形 | 多位点协同、构象转换、动力学分支 | 酶是否聚集，检测器低端是否失真，底物是否被耗尽 |
| 同一条件下斜率随时间降低 | 产物抑制、逆反应、酶失活、慢结合抑制 | 初始区间、温度稳定、吸附、耦联酶和读出漂移 |
| 速率不与酶量成比例 | 活性比例变化、寡聚平衡、拥挤或传质限制 | 加样误差、背景信号、底物是否仍过量、耦联步骤是否限速 |

对 S 形曲线可用 Hill 方程作经验描述。Hill 系数是曲线陡峭程度的操作性参数，通常不同于亚基数或结合位点数；半最大浓度也应使用与模型相符的名称。底物抑制、产物抑制和协同的方程各自对应不同假设；在选择更复杂模型前，应让增加的参数受到足够浓度范围和独立实验的约束。[^non-michaelis-kinetics]

“激活”同样是条件化的速率观察。加入某种物质后活力上升，可能是补足了必需金属或辅因子、结合了调节位点、稳定了酶，也可能只是改变底物的离子形态、缓冲环境或检测信号。激酶常利用 MgATP 复合物作为真正底物形式，把 Mg$^{2+}$ 一概称为“激活剂”会掩盖反应物种。只有证明物质直接结合酶并提高催化作用时，才适合称为酶激活剂；别构激活的分子模型将在[酶的催化机制与调控](enzyme_mechanism_regulation.md)中展开。

## 参考资料与延伸阅读

- Nelson, D. L., Cox, M. M. & Hoskins, A. A. *Lehninger Principles of Biochemistry*, 8th ed., Chapter 6. Macmillan Learning, 2021.
- NC-IUBMB. [Symbolism and Terminology in Enzyme Kinetics](https://iubmb.qmul.ac.uk/kinetics/): [definitions and steady state](https://iubmb.qmul.ac.uk/kinetics/ek1t3.html), [Michaelis–Menten kinetics and inhibition](https://iubmb.qmul.ac.uk/kinetics/ek4t6.html), [mechanisms and cooperativity](https://iubmb.qmul.ac.uk/kinetics/ek7.html).
- NCBI Assay Guidance Manual. [Basics of Enzymatic Assays for HTS](https://www.ncbi.nlm.nih.gov/books/NBK92007/).
- Briggs, G. E. & Haldane, J. B. S. [A Note on the Kinetics of Enzyme Action](https://pmc.ncbi.nlm.nih.gov/articles/PMC1259181/). *Biochemical Journal* 19, 338–339 (1925).
- Johnson, K. A. [A Century of Enzyme Kinetic Analysis, 1913 to 2013](https://pmc.ncbi.nlm.nih.gov/articles/PMC4624389/). *FEBS Letters* 587, 2753–2766 (2013).
- Bar-Even, A. et al. [The moderately efficient enzyme: evolutionary and physicochemical trends shaping enzyme parameters](https://pubmed.ncbi.nlm.nih.gov/21506553/). *Biochemistry* 50, 4402–4410 (2011).
- Tonge, P. J. [Quantifying the Interactions between Biomolecules: Guidelines for Assay Design and Data Analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC6570549/). *ACS Infectious Diseases* 5, 796–808 (2019).
- STRENDA Commission. [Guidelines for reporting enzyme data](https://www.beilstein-strenda-db.org/strenda/public/guidelines.xhtml).

[^kinetics-terminology]: NC-IUBMB, [Introduction, Definitions, Order of Reaction & Rate Constants](https://iubmb.qmul.ac.uk/kinetics/ek1t3.html)与[Enzyme Reactions & Inhibition](https://iubmb.qmul.ac.uk/kinetics/ek4t6.html)。该建议采用操作性定义，并强调反应级数、分子数、米氏行为与具体微观机制之间不能无条件互换。
[^initial-rate-assay]: NCBI Assay Guidance Manual, [Basics of Enzymatic Assays for HTS](https://www.ncbi.nlm.nih.gov/books/NBK92007/)。该章从多条反应进程曲线取得初始斜率，并以低转化率、足够的底物浓度范围和检测线性作为测定条件。
[^briggs-haldane]: Briggs, G. E. & Haldane, J. B. S., [A Note on the Kinetics of Enzyme Action](https://pmc.ncbi.nlm.nih.gov/articles/PMC1259181/). *Biochemical Journal* 19, 338–339 (1925)；NC-IUBMB, [steady-state approximation and Michaelis constant](https://iubmb.qmul.ac.uk/kinetics/ek1t3.html)。
[^moderately-efficient-enzyme]: Bar-Even, A. et al., [The moderately efficient enzyme: evolutionary and physicochemical trends shaping enzyme parameters](https://pubmed.ncbi.nlm.nih.gov/21506553/). *Biochemistry* 50, 4402–4410 (2011)。该研究汇总天然酶参数并讨论物理约束与进化权衡，反对把少数接近扩散极限的案例泛化为所有酶。
[^nonlinear-fitting]: NCBI Assay Guidance Manual, [Basics of Enzymatic Assays for HTS](https://www.ncbi.nlm.nih.gov/books/NBK92007/)；Johnson, K. A., [A Century of Enzyme Kinetic Analysis, 1913 to 2013](https://pmc.ncbi.nlm.nih.gov/articles/PMC4624389/). *FEBS Letters* 587, 2753–2766 (2013)；ASBMB, [Collecting and presenting data](https://www.asbmb.org/journals/author-resources/collecting-and-presenting-data)。三者均支持直接拟合原始数据并检查误差，而不是用倒数变换估计参数。
[^strenda-reporting]: STRENDA Commission, [Guidelines for reporting enzyme data](https://www.beilstein-strenda-db.org/strenda/public/guidelines.xhtml)；Beilstein-Institut, [STRENDA Guidelines](https://www.beilstein-institut.de/en/projects/strenda/guidelines/)。
[^multisubstrate-kinetics]: NC-IUBMB, [Enzyme reactions involving more than one substrate](https://iubmb.qmul.ac.uk/kinetics/ek4t6.html)及[Types of mechanism for enzymic catalysis](https://iubmb.qmul.ac.uk/kinetics/ek7.html)。该建议区分恒定底物与变化底物所得的表观参数，并以中心复合物、取代酶及路径顺序描述机制。
[^inhibition-terminology]: NC-IUBMB, [Inhibition](https://iubmb.qmul.ac.uk/kinetics/ek4t6.html)。其中纯非竞争被限定为抑制剂对游离酶和酶—底物复合物作用相等的情形；可逆与不可逆的实验区分也被明确为非绝对边界。
[^inhibitor-data-analysis]: Tonge, P. J., [Quantifying the Interactions between Biomolecules: Guidelines for Assay Design and Data Analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC6570549/). *ACS Infectious Diseases* 5, 796–808 (2019)；NCBI Assay Guidance Manual, [Determination of IC50 for Inhibitors](https://www.ncbi.nlm.nih.gov/books/NBK92007/#_eabasics_Determination_of_IC50_for_)。
[^tight-binding]: Morrison, J. F., [Kinetics of the reversible inhibition of enzyme-catalysed reactions by tight-binding inhibitors](https://doi.org/10.1016/0005-2744%2869%2990420-3). *Biochimica et Biophysica Acta* 185, 269–286 (1969)；Tonge, P. J., [assay design and data analysis guidelines](https://pmc.ncbi.nlm.nih.gov/articles/PMC6570549/)。
[^time-dependent-inhibition]: Tonge, P. J., [Quantifying the Interactions between Biomolecules](https://pmc.ncbi.nlm.nih.gov/articles/PMC6570549/)；NC-IUBMB, [Reversible and irreversible inhibition](https://iubmb.qmul.ac.uk/kinetics/ek4t6.html)。时间依赖性需要由完整进程曲线和活力恢复实验解析，不能只由单个终点的抑制比例判断。
[^covalent-inhibitors]: Hörnberg, A., Tunemalm, A.-K. & Ekström, F., [Crystal structures of acetylcholinesterase in complex with organophosphorus compounds](https://pubmed.ncbi.nlm.nih.gov/17402711/). *Biochemistry* 46, 4815–4825 (2007)；Nicola, G., Tomberg, J., Pratt, R. F., Nicholas, R. A. & Davies, C., [Crystal structures of covalent complexes of β-lactam antibiotics with *E. coli* penicillin-binding protein 5](https://pmc.ncbi.nlm.nih.gov/articles/PMC2947372/). *Biochemistry* 49, 8094–8104 (2010)。
[^non-michaelis-kinetics]: NC-IUBMB, [Non-Michaelis–Menten kinetics](https://iubmb.qmul.ac.uk/kinetics/ek4t6.html)与[Hill cooperativity](https://iubmb.qmul.ac.uk/kinetics/ek7.html)。Hill 系数是操作性斜率，不必对应催化中心或亚基数。
