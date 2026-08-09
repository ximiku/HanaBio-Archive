# 随机动力学、空间模式与群体系统

确定性方程追踪浓度如何随时间变化，默认相同初始状态在相同参数下沿同一条轨迹前进。细胞内的反应却由一次次分子碰撞、结合、转录和降解事件组成；同一时刻，两个遗传背景相同、处于相同培养条件的细胞也可能含有不同数目的 mRNA，经历不同的启动时刻，随后落入不同状态。空间又使这种差异能够传播：分子扩散形成梯度，邻近细胞交换信号，局部回路通过组织尺度的耦合产生条纹、行波或同步节律。

本页依次改变系统的状态描述：先把连续浓度换成离散分子数和概率分布，再把充分混合的反应器展开为空间场，最后把许多会移动、分裂和通信的细胞连接成群体。确定性反馈、双稳态和极限环见[反馈、开关与振荡](systems_dynamics.md)，扩散的物理起源与通量定律将在[随机运动、扩散与膜输运](biophysics_transport.md)展开；这里关注随机性与空间耦合怎样改变系统行为。[^systems-textbooks]

## 反应事件使状态成为整数随机变量 { #discrete-reaction-events }

细胞中的一条反应通道可以写成状态跳跃

$$
\mathbf n \longrightarrow \mathbf n+\nu_j,
$$

其中 $\mathbf n=(n_1,n_2,\ldots)$ 是各分子的拷贝数，$\nu_j$ 记录第 $j$ 条反应发生一次时每种分子增加或减少多少。给定当前状态，在很短的时间 $\Delta t$ 内发生这条反应的概率近似为 $a_j(\mathbf n)\Delta t$；$a_j$ 称为倾向函数，它把反应速率常数与当前可用的反应物数目结合起来。一次降解使拷贝数减一，一次转录起始产生一条 RNA，一次细胞分裂还会把分子随机分配给两个子细胞。

当分子很多、单次事件只造成很小的相对变化时，许多随机跳跃的平均趋势可由连续浓度和速率方程近似。低拷贝状态没有这种平滑性：一个只有两份的转录因子增加一份就是 50% 的变化，而一万份代谢物增加一份几乎不可见。体系体积同样重要；相同浓度放进更小的区室，对应的分子数更少，相对涨落通常更大。DNA 位点、活跃启动子、少数调控 RNA 和局部信号复合物因此常需要离散描述。

“随机”并不表示反应没有规律。倾向函数规定各种事件的相对机会，网络拓扑规定每次跳跃改变哪些变量，降解和反馈又决定涨落保留多久、向哪里传播。随机模型要解释的不是一条无法预言的轨迹细节，而是轨迹集合的分布、相关性、首次越阈时间和长期状态占比。

## 化学主方程追踪概率怎样在状态间流动 { #chemical-master-equation }

令 $P(\mathbf n,t)$ 表示时刻 $t$ 处于状态 $\mathbf n$ 的概率。每条反应都把概率从一个状态搬到相邻状态，化学主方程写成

$$
\frac{\partial P(\mathbf n,t)}{\partial t}
=\sum_j\left[
a_j(\mathbf n-\nu_j)P(\mathbf n-\nu_j,t)
-a_j(\mathbf n)P(\mathbf n,t)
\right].
$$

方括号第一项是经第 $j$ 条反应流入 $\mathbf n$ 的概率，第二项是从 $\mathbf n$ 流出的概率。这个方程描述的是充分混合、反应事件近似为连续时间马尔可夫（Markov）跳跃过程的系统；若反应含有不可忽略的完成延迟、空间拥挤或非指数等待时间，状态或等待时间模型需要相应扩展。

主方程与确定性速率方程回答不同问题。速率方程通常给出均值附近的代表轨迹，主方程还保留分布的宽度、偏斜、多个峰和尾部概率。非线性使“先求平均再代入反应速率”与“先计算每个状态的反应速率再平均”通常不同，因此平均浓度未必满足原来的确定性方程。两个群体即使具有同一平均表达量，也可能分别是窄单峰分布与低、高状态混合的双峰分布，所代表的生物状态完全不同。

最简单的恒定生成—一阶降解过程，在稳态下给出 Poisson 分布：若生成率为 $\alpha$、单分子降解率为 $\beta$，则

$$
\langle n\rangle=\frac{\alpha}{\beta},\qquad
\operatorname{Var}(n)=\langle n\rangle.
$$

Fano 因子 $F=\operatorname{Var}(n)/\langle n\rangle$ 在这个基准中等于 1，变异系数 $\mathrm{CV}=\sqrt{\operatorname{Var}(n)}/\langle n\rangle$ 则随平均数按 $1/\sqrt{\langle n\rangle}$ 下降。启动子切换、成串转录、反馈、细胞周期和共享环境会使实际分布偏离这一基准；观察到 $F>1$ 提示额外涨落来源，却不会自动指出是哪一种机制。

## Gillespie 模拟逐个抽取反应和等待时间 { #stochastic-simulation }

复杂网络的主方程往往包含巨大的状态空间，直接求解很快变得困难。Gillespie 随机模拟算法不先选定固定时间步，而是在每个状态计算总倾向 $a_0=\sum_j a_j$，再从指数分布抽取到下一次事件的等待时间

$$
\tau=-\frac{\ln r_1}{a_0},
$$

并按 $a_j/a_0$ 的相对权重用另一个均匀随机数 $r_2$ 选择实际发生的反应通道。更新分子数后重复这一过程，就得到一条与该化学主方程统计等价的随机轨迹。[^gillespie-ssa]

算法中的“精确”有明确边界：它指在给定反应网络、倾向函数和 Markov 假设下，不以有限时间步近似事件时刻；并不表示模型中的反应机制、速率常数或充分混合假设天然正确。一条模拟轨迹也不能代表整个系统。均值、方差、状态占比、首次到达时间和罕见切换率都需要重复轨迹或等价的概率计算，并与单细胞数据的观测过程一起比较。

分子数增大、分布变窄时，随机轨迹的相对波动减小，确定性模型成为合适近似。网络同时含有快而高拷贝的代谢反应、慢而低拷贝的转录事件时，可按时间尺度和拷贝数采用混合模型。选择连续、离散或混合描述，应由问题中的观测量与近似误差决定，而不是由软件是否容易运行决定。

## 内禀与外禀噪声取决于系统边界 { #intrinsic-extrinsic-noise }

内禀噪声来自所考察反应本身的随机事件：两份受到相同调控的启动子仍会在不同时间起始转录。外禀噪声来自同时影响该回路的其他变量，例如细胞大小、细胞周期阶段、RNA 聚合酶和核糖体数量、能量状态或局部环境。一个转录因子的拷贝数涨落对它自身是内禀变量，对受它调控的另一个基因却可以成为外禀输入，因此这一区分始终依赖研究者画出的系统边界。

Elowitz 等把两个受相同启动子调控、发出不同颜色荧光的报告基因置于同一细胞：两种颜色在同一细胞中共同升降的部分反映共享条件，彼此偏离的部分反映两份表达过程各自的随机性。实验在单细胞层面显示，内禀和外禀来源都可对总变异作出显著贡献。[^elowitz-noise] Swain 等随后给出相应的概率分解，并指出总的细胞间变异不能直接当作内禀噪声；双报告设计的解释还依赖两份报告确实受到等价调控、检测噪声得到控制。[^swain-noise]

外禀来源往往具有较长相关时间。母细胞的大小、细胞器和调控蛋白会部分传给子细胞，使姐妹细胞在一段时间内相似；细胞周期推进则同时改变基因剂量、体积和合成能力。只拍一张群体快照会把这些历史变量与快速反应涨落混在一起。时间序列、谱系追踪、双报告和对细胞周期的联合测量能把“同一细胞内两个过程是否相关”“姐妹细胞的相似性保持多久”和“波动发生在哪个频率范围”分开。

## 转录爆发与非线性回路改变分布形状 { #bursting-switching }

许多启动子在较长的关闭期与较短的开放期之间随机切换，开放期内连续产生多条转录本，形成转录爆发。爆发频率决定开放事件多常发生，爆发大小决定一次开放期产生多少 RNA；改变二者可以得到相似的平均表达量，却产生不同的方差、零表达细胞比例和时间相关性。mRNA 寿命、翻译效率、蛋白寿命和细胞分裂进一步把转录脉冲滤波成不同的蛋白分布。随机基因表达的经典综述据此把分子事件、细胞间异质性和细胞状态决定连接起来。[^stochastic-expression-review] 启动子、增强子和转录后调节的分子机制见[原核与真核基因表达调控](../molecular/gene_regulation.md#regulatory-networks)。

噪声进入正反馈或双稳态回路后，不只让稳态附近轻微抖动，还可能把轨迹推过确定性系统的吸引域边界。固定参数下，细胞会在低态和高态间以一定概率切换；两个状态的占比由进入与离开速率共同决定。确定性模型给出的分离曲线在随机系统中成为较难跨越而非绝对不可越过的区域。切换常由等待时间分布和平均首次到达时间描述，罕见事件需要足够长的单细胞记录，不能由短时间双峰快照可靠估计。

随机性还可在接近振荡失稳的稳定系统中不断激发衰减模态，产生具有偏好周期但相位持续漂移的准周期。功率谱出现峰值并不自动证明存在确定性极限环；若单细胞振幅、相位扩散和扰动后的恢复方式更符合受噪声驱动的稳定焦点，就应采用随机模型解释。上一页的[双稳态与滞后](systems_dynamics.md#positive-feedback-bistability)和[持续振荡判据](systems_dynamics.md#delayed-negative-feedback)因而需要与状态分布和随机轨迹共同检验。

## 扩散把局部随机游走转成空间通量 { #diffusion-reaction-diffusion }

分子在热运动中不断改变方向，单条轨迹没有固定朝向，许多轨迹的均方位移却服从尺度律。对 $d$ 维自由扩散，经过时间 $t$ 有

$$
\langle |\mathbf r(t)-\mathbf r(0)|^2\rangle=2dDt,
$$

其中 $D$ 是扩散系数。跨越尺度 $L$ 所需的典型时间因此按 $L^2/D$ 增长：距离扩大十倍，纯扩散所需时间约扩大百倍。细胞内拥挤、结合、障碍、主动运输和区室边界会改变有效扩散，实际 $D$ 应与所考察分子、空间尺度和时间尺度对应。

把局部反应动力学 $F_i(\mathbf c)$ 与空间通量结合，可得反应—扩散方程

$$
\frac{\partial c_i(\mathbf x,t)}{\partial t}
=F_i(\mathbf c)+D_i\nabla^2c_i.
$$

反应项在每个位置生成、转化或清除分子，Laplacian 项把浓度差转成扩散通量。初始分布、组织几何和边界条件同方程本身一样重要：封闭边界不允许净流出，吸收边界持续清除分子，指定通量的边界可代表局部信号源。组织增长、细胞移动或细胞间隙改变时，空间域也随时间变化。

连续场适合每个局部体积含有足够多分子的情形。低拷贝空间过程可把组织划分为小区室，在区室内用随机反应描述，在相邻区室间把分子迁移视作另一类随机事件。区室太大将抹平梯度，太小又会破坏充分混合近似；空间离散尺度必须同时容纳反应长度、扩散时间和观测分辨率。

## 源、扩散与清除建立位置坐标 { #morphogen-gradients }

局部信号源产生分子，分子向外扩散并以一阶过程被清除，是形成单调梯度的基本模型：

$$
\frac{\partial c}{\partial t}
=D\nabla^2c-kc+s(\mathbf x).
$$

在一维半无限区域、边界持续供给且远处浓度趋近零的理想情况下，稳态浓度按 $c(x)\propto e^{-x/\lambda}$ 衰减，特征长度为 $\lambda=\sqrt{D/k}$。扩散更快或清除更慢会扩大梯度作用范围；建立稳态所需时间、组织增长和受体介导的捕获则决定发育中的细胞是否真的读取到这一理想剖面。

Wolpert 的位置信息概念把空间信号看作坐标：处在不同浓度区间的细胞，通过受体和基因调控阈值形成不同命运。[^wolpert-positional] 梯度的生物学意义不只在于平均形状，还在于相邻细胞能否分辨浓度差、不同胚胎中相同位置是否得到可重复信号、下游读取是否增添新的噪声。Gregor 等对果蝇 Bicoid—Hunchback 系统的定量测量显示，多种精度指标约在 10% 尺度，Hunchback 对 Bicoid 的读取接近由分子随机到达设置的物理限制。[^gregor-positional]

单调梯度不必只由自由扩散生成。跨细胞转运、受体捕获与降解、细胞外基质结合、组织流动和主动运输都可产生有效空间剖面。仅观察终点浓度形状往往不能区分这些机制；光激活或局部释放后的传播速度、分子周转、源区移除、受体剂量改变和组织尺度变化提供更强的判别。具体发育轴与信号读取见[胚轴建立与分节](../development/axis_patterning.md#axis-establishment)。

## Turing 不稳定性从均一状态选择空间波长 { #turing-instability }

位置梯度由预先存在的源和边界提供坐标，Turing 机制则从近似均一的初始状态自发选择空间尺度。考虑两个组分 $u,v$：

$$
\frac{\partial u}{\partial t}=f(u,v)+D_u\nabla^2u,
\qquad
\frac{\partial v}{\partial t}=g(u,v)+D_v\nabla^2v.
$$

在均一稳态处，若局部反应的 Jacobian 满足

$$
f_u+g_v<0,\qquad f_u g_v-f_v g_u>0,
$$

没有空间差异时的小扰动会衰减。加入扩散后，若某段非零波数的扰动反而增长，均一态就发生扩散驱动不稳定。对最简单的两组分对角扩散模型，相应条件可写为

$$
D_vf_u+D_ug_v>0,
\qquad
(D_vf_u+D_ug_v)^2>4D_uD_v(f_u g_v-f_v g_u).
$$

增长最快的波数决定初始图样的特征波长，非线性随后限制振幅并形成稳定斑点或条纹。Turing 在 1952 年提出这类反应与扩散共同破坏均一性的机制，它与“扩散总会抹平差异”的直觉形成重要对照。[^turing-morphogenesis]

局部自激活、较远距离的抑制是常见实现：激活因子在附近增强自身或同一命运，扩散更快的抑制作用限制相邻区域继续激活。不过 Turing 行为由完整反应网络、有效迁移与稳定性条件共同决定，并不要求每个真实系统都能压缩成一对字面上的激活剂和抑制剂。受体结合、细胞间接触、不同细胞群之间的信号交换以及网络中的中间节点，都可形成等效的局部促进—远程限制。

有限组织只容纳若干允许的空间模态，边界形状、组织增长和参数变化会决定斑点数、方向与分支。因而同一网络在较小区域可能保持均一，区域长大后才插入新的条纹；参数略变也可让斑点连成条带。看到周期图案只是提出 Turing 假说的起点，不能从外观相似直接推出生成机制。

## 真实斑图需要模型和扰动共同鉴别 { #turing-evidence }

Kondo 与 Miura 将反应—扩散模型用于动物色素和发育图案的研究归纳为一套可检验框架：模型要同时解释图案的形成过程、特征波长、局部损伤后的重排以及参数改变后的可预言变形。[^kondo-reaction-diffusion] 关键证据不是用方程拟合一张终点图片，而是识别网络组分，测量其空间关系，并选择性改变反应边或迁移范围，观察条纹间距、相位和恢复动力学是否按模型变化。

肢体指趾图式显示预设梯度和自组织网络可以协同工作。Raspopovic 等把 Bmp、Sox9 与 Wnt 的实验关系组织成 Turing 网络，在真实二维肢芽几何中模拟 Sox9 周期图案；模型不仅重现野生型空间分布，还用于解释多种扰动条件，而上游形态发生素梯度调制了自组织图案的位置和稳定性。[^raspopovic-digits] 这类结果不支持把胚胎图式简化成纯梯度或纯 Turing 二选一，而是显示边界、组织生长、位置偏置信号与局部自组织可在同一系统中分工。

实验还要排除细胞排序、定向生长、机械失稳和预先存在的异质性。若标记细胞的迁移把两类细胞重新排列成条纹，终点形态可与反应—扩散相似，生成过程却不同。活体时间序列、谱系追踪、分子传播测量、局部扰动和组织几何操纵能够区分“原位改变命运”与“细胞移动后聚集”，也能检验空间波长究竟来自化学网络还是力学与生长尺度。

## 兴奋性与信号接力产生传播波 { #excitable-waves }

反应—扩散系统不只形成静止斑图。兴奋性系统有一个稳定静息态，小扰动会衰减，超过阈值的扰动却触发幅度近似固定的完整脉冲，随后进入暂时难以再次激活的不应期。相邻区域被扩散信号依次推过阈值，便形成传播前沿、同心波或螺旋波。波速、波宽和最短间距由局部激活、恢复时间与扩散共同决定。

传播波与 Turing 斑图应按动力学区分。前者由局部时序沿空间推进，同一点先后经历激活与恢复；后者通常指均一稳态对特定空间波长失稳后形成的静止或准静止浓度差异。行波也不一定意味着某一批分子从源头一路移动到远端。信号接力可以让每个位置接收少量刺激后再产生新的信号，传播的是激活状态，而不是同一分子的长距离位移。

盘基网柄菌在饥饿后通过细胞外 cAMP 脉冲协调聚集，是从随机单细胞事件到群体波的经典实例。活细胞成像和灌流实验显示，低于群体阈值时个别细胞随机发放脉冲；细胞密度与细胞外 cAMP 累积提高后，群体转入规则节律，较高频的信号中心再锁定周围细胞并形成持续传播。[^gregor-collective] 这说明噪声可以提供启动事件，正反馈式接力放大事件，群体耦合最后选择并稳定宏观节律。

## 细胞耦合把相位噪声转成群体同步 { #coupled-oscillators }

每个细胞都可拥有自己的振荡回路，分子噪声、细胞生长和参数差异使其固有频率与相位逐渐分散。只保留相位变量的简化模型可写为

$$
\frac{\mathrm d\theta_i}{\mathrm dt}
=\omega_i+K\sum_j A_{ij}\sin(\theta_j-\theta_i)+\xi_i(t),
$$

其中 $\omega_i$ 是第 $i$ 个细胞的固有频率，$A_{ij}$ 表示谁与谁通信，$K$ 是耦合强度，$\xi_i$ 表示相位噪声。耦合足以克服频率差和相位扩散时，细胞可保持固定相位关系；耦合过弱、通信延迟过长或邻接网络被打断时，群体信号会因去同步而衰减。

同步程度可用复序参量

$$
Re^{\mathrm i\psi}=\frac{1}{N}\sum_{i=1}^{N}e^{\mathrm i\theta_i}
$$

描述。$R$ 接近 1 表示相位集中，接近 0 表示相位分散；$\psi$ 给出群体平均相位。空间耦合并不总让所有位置同相，邻近细胞保持小相位差时，这些差异可沿组织累积成相位波。此时波峰移动反映局部振荡相位依次到达峰值，不必伴随同速的信号分子运输。

斑马鱼体节钟提供了在体证据。Horikawa 等结合嵌合实验和数学模拟表明，受细胞内 Her/Hairy 振荡调制的 Notch 细胞间通信会耦合相邻振荡器；随机基因表达和细胞增殖造成相位扰动，耦合则减小这些扰动并维持整体同步。[^horikawa-coupling] 体节形成中的时钟—波前与组织轴关系见[脊椎动物体节时钟](../development/axis_patterning.md#vertebrate-somitogenesis)；本页关注多个噪声振荡器如何形成群体相位场。

## 状态转换、增殖和通信共同决定群体组成 { #population-states }

群体系统的状态不能由“平均细胞”独自代表。若细胞可处于若干状态，$p_i$ 表示第 $i$ 个状态的群体比例，$k_{ij}$ 表示从状态 $i$ 转入 $j$ 的速率，$r_i$ 表示该状态的净增殖率，则一个基本比例模型为

$$
\frac{\mathrm dp_i}{\mathrm dt}
=\sum_{j\ne i}(k_{ji}p_j-k_{ij}p_i)
+(r_i-\bar r)p_i,
\qquad
\bar r=\sum_i r_ip_i.
$$

状态转换改变成员身份，差异增殖改变各状态在下一代中的权重。稳定的群体比例不表示单个细胞静止不变；持续的双向转换可以在微观上不断更新成员，同时在宏观上保持相似组成。若状态差异可逆且没有稳定遗传改变，它属于表型动力学；长期可遗传变异、选择与漂变如何改变等位基因频率，见[种群变异与遗传漂变](../evolution/variation_population.md#gene-pool-hardy-weinberg)。

通信会让转移率依赖邻居和群体密度。可扩散信号把许多细胞接入共享场，细胞接触把相互作用限制在邻接网络，机械耦合则通过力和组织形变传递状态。相同的通信分子在不同回路中可产生同步、密度阈值、交替命运或空间边界：正向接力倾向于扩大共同状态，接触介导的侧向抑制可放大邻近细胞的微小差异，使相邻细胞采取不同命运。

群体行为因此需要群体观测量。除了各状态比例，还应测量空间相关长度、斑块大小、相位一致性、波速、前沿位置和谱系混合。两个群体可以具有相同的高、低状态比例，却一个形成大块分区，另一个在单细胞尺度交替排列；平均比例无法区分两种组织结构。细胞迁移和分裂持续改写邻接关系，空间图与状态转移必须在同一时间轴上记录。

## 多尺度实验区分噪声、传播与自组织 { #multiscale-experiments }

随机模型首先需要分布和时间信息。单细胞报告、单分子 RNA 原位杂交和长时间谱系追踪分别读取状态分布、分子计数与状态持续时间；双报告区分共享与独立波动；改变启动子开关速率、RNA／蛋白寿命或细胞周期条件，可检验爆发模型预测的均值、方差、自相关和首次切换时间是否一起改变。只用同一数据拟合均值和终点方差，通常不足以区分多种随机机制。

空间模型还需要传播与局部扰动。光激活、荧光恢复、局部释放或局部清除可估计有效迁移和周转；在组织的一小块区域改变信号产生、受体或降解，再追踪前沿速度、波长、相位和恢复过程，能够区分预设梯度、接力波与扩散驱动不稳定。改变组织尺寸、边界形状和生长速度尤其重要：源—汇梯度、Turing 波长和细胞排序对这些操纵有不同预测。

群体层面应同步记录单细胞状态、细胞位置和细胞间关系。若群体平均振荡衰减，需要判断单细胞振荡是否停止、相位是否散开或不同亚群是否相互抵消；若出现空间斑块，需要判断细胞在原位改变命运还是迁移后聚集；若少数细胞领先，需要判断它们是否具有稳定分子特征，还是随机脉冲经信号接力暂时获得领先地位。模型的价值在于把这些可区分的机制变成不同的时空预测。

从随机事件到群体状态的各层模型可以相互嵌套，却不能任意混用参数。分子倾向函数、细胞状态转移率、有效扩散系数和群体耦合强度来自不同尺度的粗粒化；上一层被省略的变量会在下一层表现为记忆、相关噪声或条件依赖参数。怎样选择模型、估计参数、判断可辨识性并用新扰动检验预测，将在[系统建模、参数推断与实验检验](systems_modeling_inference.md)继续展开。人工设计的通信线路和空间图案则归入[多细胞合成系统与空间模式](synthetic_multicellular.md)，本页讨论的是自然系统的解释性模型。

## 参考资料与延伸阅读 { #references }

[^systems-textbooks]: Alon U. [*An Introduction to Systems Biology: Design Principles of Biological Circuits*, 2nd ed.](https://www.routledge.com/An-Introduction-to-Systems-Biology-Design-Principles-of-Biological-Circuits/Alon/p/book/9781439837177). Chapman & Hall/CRC, 2020；Phillips R, Kondev J, Theriot J, Garcia H. [*Physical Biology of the Cell*, 2nd ed.](https://www.routledge.com/Physical-Biology-of-the-Cell-2nd-Edition/Phillips-Kondev-Theriot-Garcia/p/book/9780815344506). Garland Science, 2012.
[^gillespie-ssa]: Gillespie DT. [Exact stochastic simulation of coupled chemical reactions](https://doi.org/10.1021/j100540a008). *The Journal of Physical Chemistry*. 1977;81(25):2340–2361；另见其综述 [Stochastic simulation of chemical kinetics](https://doi.org/10.1146/annurev.physchem.58.032806.104637). *Annual Review of Physical Chemistry*. 2007;58:35–55.
[^elowitz-noise]: Elowitz MB, Levine AJ, Siggia ED, Swain PS. [Stochastic gene expression in a single cell](https://doi.org/10.1126/science.1070919). *Science*. 2002;297(5584):1183–1186.
[^swain-noise]: Swain PS, Elowitz MB, Siggia ED. [Intrinsic and extrinsic contributions to stochasticity in gene expression](https://doi.org/10.1073/pnas.162041399). *Proceedings of the National Academy of Sciences USA*. 2002;99(20):12795–12800.
[^stochastic-expression-review]: Raj A, van Oudenaarden A. [Nature, nurture, or chance: stochastic gene expression and its consequences](https://doi.org/10.1016/j.cell.2008.09.050). *Cell*. 2008;135(2):216–226.
[^wolpert-positional]: Wolpert L. [Positional information and the spatial pattern of cellular differentiation](https://doi.org/10.1016/S0022-5193(69)80016-0). *Journal of Theoretical Biology*. 1969;25(1):1–47.
[^gregor-positional]: Gregor T, Tank DW, Wieschaus EF, Bialek W. [Probing the limits to positional information](https://doi.org/10.1016/j.cell.2007.05.025). *Cell*. 2007;130(1):153–164.
[^turing-morphogenesis]: Turing AM. [The chemical basis of morphogenesis](https://doi.org/10.1098/rstb.1952.0012). *Philosophical Transactions of the Royal Society of London. Series B, Biological Sciences*. 1952;237(641):37–72.
[^kondo-reaction-diffusion]: Kondo S, Miura T. [Reaction-diffusion model as a framework for understanding biological pattern formation](https://doi.org/10.1126/science.1179047). *Science*. 2010;329(5999):1616–1620.
[^raspopovic-digits]: Raspopovic J, Marcon L, Russo L, Sharpe J. [Digit patterning is controlled by a Bmp-Sox9-Wnt Turing network modulated by morphogen gradients](https://doi.org/10.1126/science.1252960). *Science*. 2014;345(6196):566–570.
[^gregor-collective]: Gregor T, Fujimoto K, Masaki N, Sawai S. [The onset of collective behavior in social amoebae](https://doi.org/10.1126/science.1183415). *Science*. 2010;328(5981):1021–1025.
[^horikawa-coupling]: Horikawa K, Ishimatsu K, Yoshimoto E, Kondo S, Takeda H. [Noise-resistant and synchronized oscillation of the segmentation clock](https://doi.org/10.1038/nature04861). *Nature*. 2006;441(7094):719–723.
