# 随机运动、扩散与膜输运

水中的分子从未静止。它们不断与溶剂碰撞，单条轨迹短促而曲折；当许多分子被放在一起观察时，这些无规则位移却形成了可预测的扩散通量。细胞正生活在这种尺度关系之中：小分子可以在亚细胞距离上很快混合，沿长轴或跨组织传播却会迅速变慢；离子同时受到浓度梯度和电场驱动，水的迁移又把溶质、压力与细胞体积联系起来。

随机游走连接扩散系数和时间尺度，守恒定律进一步导出菲克（Fick）方程、反应—扩散和电扩散，最终进入渗透、薄膜通透与膜蛋白所改变的输运路径。这里关注通量的物理定律、尺度和实验可辨识量；转运蛋白的结构与循环见[膜运输](../cell/membrane_transport.md#channels-carriers-pumps)，上皮和可兴奋细胞怎样利用这些通量见[细胞膜动力学](../physiology/membrane_dynamics.md#transport-driving-force)。[^mit-fields-flows][^physical-biology-transport]

## 随机游走与扩散尺度 { #random-walk-diffusion }

### 平均位移与均方位移 { #mean-squared-displacement }

设一个粒子每隔时间 $\tau$ 向随机方向走一步，步长均为 $\ell$。若各步彼此独立且没有偏向，许多轨迹的平均位移为零，因为向不同方向的位移彼此抵消；位移的平方不会抵消。经过 $N=t/\tau$ 步后，在 $d$ 维空间中有

$$
\left\langle |\Delta\mathbf r(t)|^2\right\rangle
=N\ell^2=2dDt,
\qquad
D=\frac{\ell^2}{2d\tau}.
$$

$D$ 是扩散系数，量纲为面积除以时间。三维自由扩散时 $\langle r^2\rangle=6Dt$，二维膜面扩散时则为 $4Dt$。均方根位移随时间的平方根增长：

$$
r_{\mathrm{rms}}=\sqrt{2dDt}.
$$

因此，把典型扩散距离增加十倍，所需时间约增加一百倍。扩散在纳米至微米尺度上十分有效，却不适合在很长距离上迅速定向输送。细胞质流动、循环系统、轴突运输和马达蛋白所解决的，正是纯扩散随距离平方变慢的问题。

在步长远小于观察尺度、步数足够多而且介质均一时，点源粒子的位置概率趋近高斯分布（Gaussian distribution）：

$$
p(\mathbf r,t)
=\frac{1}{(4\pi Dt)^{d/2}}
\exp\!\left(-\frac{|\mathbf r|^2}{4Dt}\right).
$$

这个分布的中心不移动，宽度却按 $\sqrt{Dt}$ 增长。单个分子仍会向各方向随机走动；高浓度区拥有更多出发粒子，跨过某一假想界面的粒子数因而在统计上不对称，形成沿浓度降低方向的净通量。

### 扩散系数与 Stokes–Einstein 关系 { #stokes-einstein }

对于半径为 $a$ 的球形粒子，若它悬浮在黏度为 $\eta$、远离固体边界的牛顿流体中，流体满足无滑移边界并处于低雷诺数（Reynolds number，Re）条件，平移扩散系数近似为

$$
D=\frac{k_{\mathrm B}T}{6\pi\eta a}.
$$

Stokes–Einstein 关系把热涨落与黏性阻力连接起来：温度升高使随机运动增强，粒子变大或介质变黏则使扩散减慢。它也是动态光散射、荧光相关谱等方法由运动时间尺度估计水动力尺寸的物理基础。

细胞内部是拥挤、非均一且具有主动过程的复杂介质。分子会暂时结合骨架或其他大分子，遇到空间障碍和拥挤，进入不同黏弹性质的凝聚体，也会被主动流动和马达牵引。此时由短轨迹得到的“有效扩散系数”可能随时间尺度和位置改变，均方位移可写成经验形式

$$
\left\langle |\Delta\mathbf r(t)|^2\right\rangle
\propto t^\alpha.
$$

$\alpha=1$ 对应普通扩散；$\alpha<1$ 可由受限运动、障碍或广泛的等待时间产生；定向运动和主动涨落则可能在某些尺度上给出 $\alpha>1$。指数本身不能唯一指出机制，还需结合轨迹分布、空间结构、扰动实验和时间分辨率判断。

### 首达时间与扩散捕获 { #first-passage-capture }

生物过程常关心粒子第一次到达目标的时间，而不只是某一时刻距起点多远。受体结合、转录因子寻找位点、酶捕获底物和细胞感知外界配体，都属于首达问题。目标的大小、形状、数量和空间排布会改变捕获概率；靠近目标的再结合、狭窄通道和反射边界还会让到达时间分布出现长尾。

Berg 与 Purcell 对化学感知的分析表明，受体在有限时间内接触到的独立配体数受到扩散限制，浓度估计因而存在统计误差。增大感受尺度、延长平均时间或提高配体浓度可以增加采样数，而无限增加表面受体并不能无限提高精度，因为邻近受体会竞争同一批到达分子。这个例子把热运动从“背景噪声”转变为可量化的感知极限。[^berg-purcell]

## 概率分布与连续通量 { #fick-conservation }

### Fick 第一定律 { #ficks-first-law }

当观察尺度远大于单次碰撞和平均自由程时，可以不再追踪每个粒子，而用浓度场 $c(\mathbf r,t)$ 描述单位体积内的物质量。通量密度 $\mathbf J$ 表示单位时间穿过单位面积的物质量；对于均匀、各向同性介质中的稀溶质，Fick 第一定律写作

$$
\mathbf J=-D\nabla c.
$$

负号表示净通量与浓度升高方向相反。若 $c$ 以 $\mathrm{mol\,m^{-3}}$ 表示，则 $\mathbf J$ 的单位为 $\mathrm{mol\,m^{-2}\,s^{-1}}$。这条关系是组成方程：它用局部浓度梯度预测扩散通量；$D$ 是否可视为常数、介质是否各向同性以及溶质间是否独立，都需要由具体体系判断。纤维排列明显的组织或膜中，$D$ 可以是张量，不同方向的扩散速度不同。

### 守恒定律与 Fick 第二定律 { #ficks-second-law }

取空间中的一个小体积，内部物质量的变化等于流入减去流出，再加上内部产生或消耗。局部守恒式为

$$
\frac{\partial c}{\partial t}
=-\nabla\!\cdot\mathbf J+R(c,\mathbf r,t),
$$

$R$ 是单位体积内反应、分泌或清除造成的净生成率。代入 Fick 第一定律，在 $D$ 为常数且没有反应时得到 Fick 第二定律：

$$
\frac{\partial c}{\partial t}=D\nabla^2c.
$$

微分方程还需要初始条件和边界条件才能给出唯一预测。边界可以维持固定浓度，可以规定流入或流出通量，也可以是不透过的零通量边界；完全吸收表面常用 $c=0$ 近似。相同的 $D$ 和反应速率，在球形细胞、细长突起和层状组织中会产生不同的浓度场，因此几何不是附带细节，而是模型的一部分。

若介质以速度场 $\mathbf u$ 运动，溶质还会随流体被对流携带：

$$
\frac{\partial c}{\partial t}
+\nabla\!\cdot(c\mathbf u)
=D\nabla^2c+R.
$$

长度尺度 $L$ 上的扩散时间约为 $L^2/D$，对流时间约为 $L/U$。两者之比形成佩克莱数（Péclet number，Pe）

$$
\mathrm{Pe}=\frac{UL}{D}.
$$

$\mathrm{Pe}\ll1$ 时扩散能较快抹平流动造成的浓度差，$\mathrm{Pe}\gg1$ 时整体携带占优，但靠近表面的薄边界层仍可能由扩散控制。流场本身的产生、黏性和低 Reynolds 数运动将在[细胞与组织力学及生物流动](biophysics_mechanics_flows.md)中展开。

## 反应—扩散的长度与时间尺度 { #reaction-diffusion-scales }

设某分子以扩散系数 $D$ 传播，并以一阶速率常数 $k$ 被降解、内吞或不可逆捕获，同时由 $s(\mathbf r,t)$ 提供，则

$$
\frac{\partial c}{\partial t}
=D\nabla^2c-kc+s(\mathbf r,t).
$$

扩散使浓度差变平，局部清除则缩短分子的寿命。反应时间尺度为 $\tau_r=1/k$；分子在被清除前能够扩散的特征长度为

$$
\lambda=\sqrt{\frac{D}{k}}.
$$

在持续局部产生、远离源后近似一维的稳态系统中，浓度常按 $e^{-x/\lambda}$ 衰减。增大 $D$ 能让分布延伸得更远，增大 $k$ 则使梯度变陡。若用系统尺度 $L$ 无量纲化，反应相对于扩散的强弱可由达姆科勒数（Damköhler number，Da）表示：

$$
\mathrm{Da}=\frac{kL^2}{D}
=\left(\frac{L}{\lambda}\right)^2.
$$

$\mathrm{Da}\ll1$ 表示分子在显著反应前能跨越系统，$\mathrm{Da}\gg1$ 表示消耗集中在源或入口附近。酶固定在颗粒内部、配体进入组织支架以及氧穿入高代谢细胞团时，都可能出现“外层已消耗、内层尚未到达”的扩散—反应限制。此时提高酶量或受体量未必同比提高总体速率，因为供应通量已经成为瓶颈。

非线性反应、多个扩散组分和反馈可以产生波、斑图或移动边界；这些系统行为见[随机动力学、空间模式与群体系统](systems_stochastic_spatial.md#diffusion-reaction-diffusion)。这里的物理重点是守恒、边界条件及 $D$、$k$、$L$ 组合而成的可比较尺度。

## 电场驱动的离子扩散 { #electrodiffusion }

### 电化学势与 Nernst–Planck 通量 { #nernst-planck }

带电溶质同时响应组成与电势。离子 $i$ 的摩尔电化学势可写成

$$
\widetilde\mu_i
=\mu_i^\circ+RT\ln a_i+z_iF\psi,
$$

其中无量纲活度 $a_i$ 在稀理想溶液中近似为 $c_i/c^\circ$，$z_i$ 是电荷数，$F$ 为 Faraday 常数，$\psi$ 为电势。电化学势的空间梯度产生通量；进一步取理想稀溶液并忽略离子间交叉耦联时，扩散、电迁移和对流合并为 Nernst–Planck 方程：

$$
\mathbf J_i
=-D_i\left(
\nabla c_i
+\frac{z_iF}{RT}c_i\nabla\psi
\right)
+c_i\mathbf u.
$$

第一项来自浓度梯度，第二项来自电场，第三项是随流体移动。阳离子与阴离子受到相反方向的电迁移作用，但电荷分离又会改变电势场，所以各离子通量通常不能彼此独立求解。

在无对流、净通量为零的平衡条件下，电势差恰好抵消浓度差。跨越两处位置 1 和 2 积分可得单种离子的 Nernst 关系：

$$
\psi_2-\psi_1
=\frac{RT}{z_iF}
\ln\frac{a_{i,1}}{a_{i,2}}.
$$

它给出该离子的平衡电势，而不是多种离子同时通透时的实际膜电位。恒定电场近似下积分 Nernst–Planck 方程可得到戈德曼—霍奇金—卡茨（Goldman–Hodgkin–Katz，GHK）通量或电压表达式，把多种离子的浓度、价态和相对通透性合在一起；经典的外液离子替换实验正是借膜电位变化检验离子选择性。[^hodgkin-katz]

### 电荷密度、屏蔽与 Donnan 分配 { #screening-donnan }

电势由电荷分布决定。介电常数为 $\varepsilon$ 的均匀介质中，Poisson 方程为

$$
-\varepsilon\nabla^2\psi=\rho,
\qquad
\rho=F\sum_i z_ic_i+\rho_{\mathrm f},
$$

$\rho_{\mathrm f}$ 表示蛋白质、核酸或聚合物网络上的固定电荷。把 Poisson 方程与各离子的 Boltzmann 分布或 Nernst–Planck 方程联立，便得到平衡的 Poisson–Boltzmann 描述或非平衡的 Poisson–Nernst–Planck 描述。

在含盐水溶液中，移动反离子会屏蔽固定电荷，使电势主要在 Debye 长度所规定的近表面尺度上变化。远离带电界面的体相通常近似电中性，但这并不意味着局部电场处处为零；膜表面、离子通道孔道和带电凝胶中，纳米尺度的电双层与离子分配仍可决定输运。

若膜允许小离子通过，却阻挡一类固定带电大分子，移动离子会重新分布，使可透离子的电化学势在两侧相等，并同时满足各侧近似电中性。这就是 Donnan 平衡。它会产生膜电势和额外的渗透压，见于含蛋白质的细胞区室、软骨等带电基质以及聚电解质凝胶。固定电荷量、盐浓度、价态和非理想相互作用共同决定分配，单纯比较两侧总离子浓度不足以预测结果。

## 水、压力与溶质的渗透耦合 { #osmosis-coupled-flux }

### 水的化学势与渗透压 { #water-chemical-potential }

半透膜允许水通过而限制某些溶质时，溶质降低一侧水的化学势，水便沿自身化学势降低的方向迁移。为阻止这种净水流，需要在溶液侧施加额外压力；这一定义出的压力差就是渗透压。对理想稀溶液，van ’t Hoff 关系为

$$
\Pi=RT\sum_j c_j,
$$

求和对象是能够独立运动的溶质粒子。真实浓溶液需以溶剂活度或渗透系数修正。渗透压是一种平衡性质；水究竟多快到达平衡，则由膜的水力通透性、面积和边界层决定。[^iupac-osmotic-pressure]

渗透浓度记录溶液中全部渗透活性粒子，而张力性关心在观察时间内不能自由跨膜、因而能持续改变细胞体积的粒子。能迅速透膜的尿素可造成瞬时渗透水流，却会随自身重新分布而失去持久的体积效应；不能透膜的溶质则能维持水势差。具体细胞体积和上皮环境中的高渗、低渗与等渗响应见[细胞膜动力学](../physiology/membrane_dynamics.md#osmolarity-tonicity)。

### 压力驱动与反射系数 { #kedem-katchalsky }

若把单位膜面积的体积流量记作 $J_v$，并约定正方向由位置 1 指向位置 2，接近平衡时可写成

$$
J_v=L_p\left(\Delta P-\sigma\Delta\Pi\right).
$$

$L_p$ 是水力通透系数，$\Delta P=P_1-P_2$，$\Delta\Pi=\Pi_1-\Pi_2$；$\sigma$ 是溶质的反射系数。理想不透溶质有 $\sigma\approx1$，压力与渗透压可以相互抵消；自由随水通过的溶质有 $\sigma\approx0$，难以维持有效渗透压。多溶质体系可对各组分分别计入反射系数。

Kedem–Katchalsky 理论用线性非平衡热力学把体积流和溶质流写成压力差、化学势差等驱动力的耦合响应，并要求交叉系数满足热力学约束。它适用于接近平衡、通量与驱动力近似线性的区间；远离平衡、出现强浓差极化或膜性质随压力改变时，系数可能不再是常数。[^kedem-katchalsky]

水通道改变的是跨膜水通量的动力学系数。经典实验把编码红细胞 CHIP28 蛋白的核糖核酸（ribonucleic acid，RNA）注入 *Xenopus* 卵母细胞；表达该蛋白的细胞转入低渗液后迅速膨胀并破裂，证明它显著提高膜的水通透性。水通道没有改变水流的平衡方向，而是降低了跨膜传输阻力。[^preston-aquaporin]

## 薄膜通透的分配、扩散与厚度 { #membrane-permeability }

### 溶解—扩散模型 { #solution-diffusion }

对可进入均一膜相的中性溶质，可把跨膜过程分成三个步骤：由水相分配进入膜、在膜内扩散、再分配回另一侧水相。若两侧界面近似局部平衡，膜内浓度梯度近似线性，则稳态通量为

$$
J_s=P_s(c_1-c_2),
\qquad
P_s=\frac{K_sD_{m,s}}{\delta}.
$$

$K_s$ 是水相到膜相的分配系数，$D_{m,s}$ 是溶质在膜内的扩散系数，$\delta$ 是膜厚度。通透系数 $P_s$ 的量纲是长度除以时间，它同时包含“是否愿意进入膜”和“进入后移动多快”两方面。总物质传输率还要乘以有效面积：$\dot n=A J_s$。

疏水性较强有时能提高 $K_s$，但并不保证通透率持续升高：分子过大、在膜中扩散缓慢、被界面强烈滞留或只能以带电形式存在，都会降低通量。实际脂双层还具有极性头部、疏水核心、组成不均和瞬时缺陷，$K_s$ 与 $D_{m,s}$ 因而是把复杂自由能景观粗粒化后的有效参数。

### 串联阻力与非搅拌层 { #transport-resistance }

溶质从体相到膜表面，常需先穿过一个流速很低的液体边界层，再穿过膜，最后离开另一侧边界层。若各层处于同一稳态通量，并采用相容的浓度基准，总阻力近似相加：

$$
\frac{1}{P_{\mathrm{eff}}}
=\frac{1}{P_1}+\frac{1}{P_2}+\cdots.
$$

最小的通透系数贡献最大的阻力。即使膜本身极易通透，厚的非搅拌层也会把表面浓度拉离体相浓度，使实验测得的表观 $P$ 偏低；增强搅拌或改变流速后，若表观通透率改变，便提示外部传质参与限速。多层上皮、细胞壁和胞外基质也可用串联或并联阻力作第一步分析，但若层间有反应、主动泵送或侧向通路，就需写出各区室的完整守恒方程。

带电溶质跨膜时，浓度梯度与膜内电场不可分开，简单的 $P\Delta c$ 需要替换为电扩散表达式。恒定电场模型把膜内电势近似为线性，得到 GHK 通量；当通道孔道中的离子—离子相互作用、饱和占据和局部电势很强时，它仍只是有效近似。

## 膜蛋白通路的动力学性质 { #protein-mediated-pathways }

### 通道、载体与泵的不同物理限制 { #channels-carriers-pumps }

脂双层给出基础通透背景，膜蛋白则建立选择性更强、阻力更低或与能量输入耦联的路径。三类路径的物理限制不同：

| 路径 | 通量形成方式 | 主要限制量 | 与驱动力的关系 |
| --- | --- | --- | --- |
| 脂相溶解—扩散 | 溶质分配进膜并在膜相中扩散 | 分配系数、膜内扩散系数、厚度、面积 | 被动地沿化学势或电化学势降低方向运行 |
| 离子通道或水通道 | 分子穿过开放孔道，通量由许多单通道贡献 | 通道数、开放概率、单通道电导或渗透率、进入孔口和孔内传输 | 开放后仍为被动通路；电流在反转电势处改变方向 |
| 载体介导易化扩散 | 底物结合、构象转换和释放组成循环 | 载体数、结合占据、最慢构象步骤、反向循环 | 净循环沿底物电化学势降低方向，可出现饱和与竞争 |
| 主动泵与耦联转运体 | 转运循环与三磷酸腺苷（adenosine triphosphate，ATP）水解、光反应或另一溶质下坡通量耦联 | 能源供给、循环计量、动力学瓶颈、反向泄漏 | 总循环自由能为负时可推动某组分逆其电化学势转运 |

通道的高通量并不意味着没有物理阻力。离子需由体相扩散到孔口，脱去部分水合壳，与选择性位点相互作用，再由另一端逸出；孔径、电荷、占据与门控共同决定单通道电流。载体则必须逐步完成结合和构象交换，有限的载体数使通量随底物浓度趋于饱和。具体蛋白质家族、门控和转运循环见[膜运输](../cell/membrane_transport.md#channels-carriers-pumps)。

主动转运的方向由完整循环的自由能账本决定。若一个循环转运若干种溶质并消耗一个能源反应，可写成

$$
\Delta G_{\mathrm{cycle}}
=\sum_i\nu_i\Delta\widetilde\mu_i
+\Delta G_{\mathrm{source}}.
$$

$\nu_i$ 记录每循环转运的计量和方向。自发稳态循环要求所选正向的总自由能变化小于零；达到停滞条件时总和为零。每单位时间的能量转移还取决于循环通量，因此同一电化学势差下，泵数量、泄漏通路和载荷会改变功率与效率。跨膜梯度如何储存和传递代谢自由能，见[生物能学](../biochem/bioenergetics.md#electrochemical-gradients)。

## 轨迹、通量与参数映射 { #transport-measurements }

扩散系数、通透系数和反应速率都不是由一条曲线自动“读出”的原始量，而是观测数据在指定几何、边界条件和动力学模型下的估计。实验设计应让候选机制对数据作出可区分的预测。

| 方法 | 直接观测 | 常见推断 | 主要辨析边界 |
| --- | --- | --- | --- |
| 单粒子追踪 | 标记粒子随时间的位置序列 | 均方位移、方向性、状态转换、局部有效 $D$ | 定位误差抬高短时位移，有限轨迹、运动模糊、结合与空间围困可产生相似轨迹 |
| 荧光相关谱（fluorescence correlation spectroscopy，FCS） | 小观测体积内荧光涨落的时间相关 | 扩散时间、粒子数、某些反应时间尺度 | 需知道观测体积；闪烁、光漂白、多个组分和非均一环境会改变相关曲线 |
| 光漂白后荧光恢复（fluorescence recovery after photobleaching，FRAP） | 局部漂白后荧光强度的空间—时间恢复 | 有效扩散、可移动比例、结合或交换速率 | 恢复同时依赖漂白几何、扩散、结合和主动输运，一条平均恢复曲线可能对应多组参数[^frap-method] |
| 示踪物跨膜或跨组织实验 | 两侧浓度或放射性、荧光信号随时间变化 | 表观通透系数、分配和清除参数 | 需校正面积、体积、回流、非搅拌层、吸附和细胞内代谢 |
| 渗透膨胀或停流测量 | 施加渗透差后的细胞、囊泡或膜泡体积变化 | 水力通透性、反射系数 | 体积—信号换算、膜面积变化、溶质泄漏和调节性体积反应会影响拟合 |
| 膜片钳与电压钳 | 给定电压下的电流及单通道开闭 | 电导、开放概率、反转电势和门控动力学 | 电流是电荷通量；离子种类、串联电阻、液接电势和空间钳制需独立控制 |

单粒子追踪给出个体轨迹，FCS 和 FRAP 则分别由涨落和群体恢复估计运动。若分子在自由扩散与短暂结合之间交换，三种方法可能在不同时间和空间尺度上得到不同的有效 $D$；这种差异不必归结为某个测量“错误”，而可能揭示了粗粒化尺度不同。改变漂白区域大小、标记密度、流速或膜面积，能检验所采用的扩散、反应和边界层模型。

跨膜实验还应同时控制驱动力和通路数量。测量通量随浓度差、膜电位、渗透压或压力差的变化，可以检验线性范围、反转点和饱和性；改变膜蛋白表达量，再用结构或抑制实验确认通路身份，可以区分脂相背景与蛋白介导通量。水通道卵母细胞实验之所以有说服力，正在于表达对照、明确渗透扰动和快速体积读出把蛋白存在与水力通透性增加连在了一起。

扩散、电迁移、渗透和主动转运最终都可写成“驱动力—通量—守恒”的问题。随机运动决定微观采样，连续方程把大量轨迹压缩为浓度场，膜与蛋白再选择哪些路径可用以及每条路径的阻力。把几何、边界条件、能量来源和测量时间尺度同时写清，才能从一个表观速率判断真正限速的是分子运动、界面分配、化学反应，还是膜蛋白循环。

## 参考资料与延伸阅读 { #references }

[^mit-fields-flows]: Massachusetts Institute of Technology. [*Fields, Forces and Flows in Biological Systems: Lecture Notes*](https://ocw.mit.edu/courses/20-430j-fields-forces-and-flows-in-biological-systems-fall-2015/resources/lecture-notes/). MIT OpenCourseWare, Fall 2015. 课程依次覆盖随机游走与 Stokes–Einstein 关系、Fick 定律与质量守恒、反应—扩散与 Damköhler 数、对流与 Péclet 数、电迁移及 Donnan 平衡。
[^physical-biology-transport]: Phillips R, Kondev J, Theriot J, Garcia H. [*Physical Biology of the Cell*, 2nd ed.](https://www.routledge.com/Physical-Biology-of-the-Cell-2nd-Edition/Phillips-Kondev-Theriot-Garcia/p/book/9780815344506). Garland Science, 2012.
[^berg-purcell]: Berg HC, Purcell EM. [Physics of chemoreception](https://doi.org/10.1016/S0006-3495(77)85544-6). *Biophys J*. 1977;20(2):193–219.
[^hodgkin-katz]: Hodgkin AL, Katz B. [The effect of sodium ions on the electrical activity of the giant axon of the squid](https://doi.org/10.1113/jphysiol.1949.sp004310). *J Physiol*. 1949;108(1):37–77.
[^iupac-osmotic-pressure]: International Union of Pure and Applied Chemistry. [Osmotic pressure](https://goldbook.iupac.org/terms/view/O04344). *Compendium of Chemical Terminology*, 5th ed., online version 5.0.0, 2025；同书的[diffusion 条目](https://goldbook.iupac.org/terms/view/D01716)区分由分子运动产生的分子扩散与湍流混合。
[^kedem-katchalsky]: Kedem O, Katchalsky A. [Thermodynamic analysis of the permeability of biological membranes to non-electrolytes](https://doi.org/10.1016/0006-3002(58)90330-5). *Biochim Biophys Acta*. 1958;27(2):229–246.
[^preston-aquaporin]: Preston GM, Carroll TP, Guggino WB, Agre P. [Appearance of water channels in *Xenopus* oocytes expressing red cell CHIP28 protein](https://doi.org/10.1126/science.256.5055.385). *Science*. 1992;256(5055):385–387.
[^frap-method]: Axelrod D, Koppel DE, Schlessinger J, Elson E, Webb WW. [Mobility measurement by analysis of fluorescence photobleaching recovery kinetics](https://doi.org/10.1016/S0006-3495(76)85755-4). *Biophys J*. 1976;16(9):1055–1069；Ciocanel M-V, Kreiling JA, Gagnon JA, Mowry KL, Sandstede B. [Analysis of active transport by fluorescence recovery after photobleaching](https://doi.org/10.1016/j.bpj.2017.02.042). *Biophys J*. 2017;112(8):1714–1725.
