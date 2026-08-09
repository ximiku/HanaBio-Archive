# 细胞与组织力学及生物流动

细胞和组织始终处在力的交换之中。细胞皮层承受张力，黏附把牵引传给基质，流体在膜面、管腔和细胞间隙中施加剪切，生长与细胞重排又不断改变材料本身。观察尺度不同，同一个体系可呈现完全不同的面貌：短时间受压的细胞质像含水弹性网络，水分重新分布后却会松弛；上皮在快速拉伸下能够承载应力，在长时间迁移中又像缓慢流动的主动材料。

描述这些现象需要先分开三层问题。运动学记录位置、速度和形变，力平衡说明应力怎样传递，本构关系则规定某种材料在给定受力历史下如何响应。本页从连续介质中的应力与流动开始，沿低 Reynolds 数运动、黏弹性、骨架与黏附进入组织形变，最后说明实验怎样由位移、轮廓和速度反推力学参数。单条生物聚合物和分子马达的力学见[大分子物理、膜与分子机器](biophysics_macromolecular.md)，肌肉、血管和肺的器官功能分别见[肌细胞生理](../physiology/muscle.md#muscle-mechanics)、[血管生理](../physiology/blood/blood_vessel.md#pressure-flow-resistance)和[呼吸生理](../physiology/respiratory/index.md#mechanical-loads)。[^physical-biology-mechanics][^mit-fields-flows]

## 应力与应变把局部受力写成场 { #stress-strain-fields }

力只有在说明作用面积和方向后，才能与不同尺寸的样品比较。取材料内部一个法向为 $\mathbf n$ 的小面，其单位面积受到的牵引为 $\mathbf t(\mathbf n)$。Cauchy 应力张量 $\sigma$ 把所有可能截面的牵引统一写成

$$
\mathbf t(\mathbf n)=\sigma\cdot\mathbf n.
$$

应力的单位为帕斯卡（$\mathrm{Pa=N\,m^{-2}}$）。张量的法向分量使材料受拉或受压，切向分量产生剪切；它们随位置和时间变化，不能由“总力除以细胞表面积”完全代替。若体力密度为 $\mathbf f_b$，线动量守恒的一般形式为

$$
\rho\frac{\mathrm D\mathbf u}{\mathrm Dt}
=\nabla\!\cdot\sigma+\mathbf f_b,
$$

其中 $\mathbf u$ 是速度场，$\mathrm D/\mathrm Dt$ 是随材料运动的时间导数。惯性可忽略时，局部总力近似平衡，$\nabla\!\cdot\sigma+\mathbf f_b\simeq0$；这并不表示体系中没有力，而是各处力和摩擦在观察时间尺度上几乎即时相抵。

应变描述相邻材料点之间的相对位移。小形变的一维拉伸应变为 $\varepsilon=\Delta L/L_0$；三维中，应变张量同时记录伸长和剪切。大形变、有限转动和组织不断重排时，小应变近似会失效，需要用形变梯度或面积、长度及角度随时间的变化描述。应力由力平衡决定，应变由运动学决定，两者之间还缺少本构关系：弹簧、黏性流体和细胞组织即使承受相同应力，也会给出不同的形变历史。

### Newton 流体把形变速率映射为应力 { #newtonian-stress }

不可压缩 Newton 流体的应力可写成

$$
\sigma=-p\mathbf I+2\eta\mathbf D,
\qquad
\mathbf D=\frac12\left[\nabla\mathbf u+(\nabla\mathbf u)^{\mathsf T}\right],
$$

$p$ 是压力，$\eta$ 是动力黏度，$\mathbf D$ 是形变速率张量。流体的剪切应力与剪切速率成正比；停止剪切后，理想 Newton 流体不保留静态剪切应力。压力和黏性应力共同作用于边界，同一个速度场中既可有法向压力，也可有切向摩擦。

细胞质、血液、黏液和细胞外基质通常具有结构，黏度可随剪切速率、方向和时间改变。把一条速度—应力曲线拟合成“表观黏度”只在相应的剪切区间、温度和组成下有效。血液中的细胞变形与聚集、黏液中的聚合物网络、细胞质中的结合与主动运动都会偏离简单 Newton 关系；具体血管流变与管径效应见[血管生理](../physiology/blood/blood_vessel.md#poiseuille-limitations)。

## Reynolds 数决定惯性是否留下运动记忆 { #reynolds-number }

将 Newton 应力代入力平衡，可得不可压缩 Navier–Stokes 方程

$$
\rho\left(
\frac{\partial\mathbf u}{\partial t}
+\mathbf u\!\cdot\nabla\mathbf u
\right)
=-\nabla p+\eta\nabla^2\mathbf u+\mathbf f_b.
$$

不可压缩条件另写为

$$
\nabla\!\cdot\mathbf u=0.
$$

取速度尺度 $U$、长度尺度 $L$，惯性项与黏性项之比形成 Reynolds 数

$$
\mathrm{Re}=\frac{\rho UL}{\eta}.
$$

$\mathrm{Re}\ll1$ 时，惯性远弱于黏性，方程退化为 Stokes 流：$-\nabla p+\eta\nabla^2\mathbf u+\mathbf f_b=0$。微生物、细胞器和微流道中的许多运动处于这个区间。物体停止施力后不会像宏观抛射物那样滑行很久，速度几乎立即调整到当前力平衡；流场对边界速度呈线性响应，多个力源产生的流动可在线性区间叠加。

孤立半径为 $a$ 的刚性球以相对速度 $U$ 在无限、静止、无滑移 Newton 流体中缓慢运动时，Stokes 阻力为

$$
F_{\mathrm{drag}}=6\pi\eta aU.
$$

阻力随速度一次增长，维持运动的机械功率为 $F_{\mathrm{drag}}U$。靠近壁面、粒子浓集、形状非球形或流体具有黏弹性时，阻力系数会改变；用 Stokes 公式从速度估算力，必须先核对这些条件。上一页的 Stokes–Einstein 关系正是把这一黏性阻力与平衡热涨落联系起来，见[扩散系数与 Stokes–Einstein 关系](biophysics_transport.md#stokes-einstein)。

### 时间可逆性限制往复推进 { #scallop-theorem }

Stokes 方程不含显式时间方向。若一个游动者只用一个自由度在两种形状之间完全往复，后一半运动逐帧倒放前一半，那么流场和位移也随之反向，一个周期后没有净推进。这就是 Purcell 的 scallop theorem（扇贝定理）：在无限 Newton 流体、零惯性和规定形变循环等条件下，互易运动不能游动。[^purcell-low-re]

微生物通过非互易形变绕开这一限制。旋转螺旋鞭毛、沿纤毛传播的弯曲波、至少两个带相位差的形变自由度，以及柔性丝与流体阻力的耦合，都使形状在构象空间中围成有方向的循环。边界、非 Newton 流体、有限惯性和外加噪声也会改变定理的前提，但“快速张开、慢速合拢”本身在理想 Stokes 流中仍只是同一路径的不同走速，不能产生净位移。纤毛轴丝结构及 dynein 驱动见[纤毛、鞭毛与轴丝运动](../cell/cytoskeleton.md#cilia-flagella)。

低 Reynolds 数下，游动者和流体之间还必须满足总力与总力矩平衡。鞭毛向后推流体，细胞体便产生相反平移或转动；固定纤毛不能让自身游走，却能把同样的非互易运动转化为液体泵送。附近壁面和其他游动者会改变长程流场，由此产生聚集、定向和同步，但这些集体现象还受化学信号、噪声及边界几何共同影响。

### 压差、半径与壁面剪切共同控制管流 { #pressure-driven-flow }

稳态、充分发展、轴对称的圆管流中，若流体为不可压缩 Newton 流体，管壁刚性且无滑移，压力降 $\Delta P$ 驱动的体积流量为

$$
Q=\frac{\pi R^4}{8\eta L}\Delta P,
$$

其中 $R$ 和 $L$ 分别是管半径与长度。速度剖面呈抛物线，平均速度 $\bar U=Q/(\pi R^2)$，管壁剪切应力大小为

$$
\tau_w=\frac{4\eta Q}{\pi R^3}
=\frac{4\eta\bar U}{R}.
$$

半径四次方使几何对流阻极其敏感，壁面剪切又是内皮、上皮和附着微生物真正感受到的局部机械量。血管具有可扩张壁、分叉、脉动和细胞悬液，气道也可发生动态压缩并进入不同流态，所以 Poiseuille 式提供的是可检验基线，而非所有管腔的恒等式。器官尺度的适用边界分别见[泊肃叶模型与半径敏感性](../physiology/blood/blood_vessel.md#poiseuille-limitations)和[气道阻力](../physiology/respiratory/index.md#airway-resistance)。

振荡流还要比较黏性动量扩散与驱动周期。角频率为 $\omega$、管半径为 $R$ 时，Womersley 数为

$$
\alpha=R\sqrt{\frac{\rho\omega}{\eta}}.
$$

$\alpha\ll1$ 时，黏性有足够时间让整个剖面跟随瞬时压差，准稳态近似较好；$\alpha$ 增大后，中心流速与压力梯度出现明显相位差，速度剖面也不再是每一时刻的抛物线。Reynolds 数比较对流惯性和黏性，Womersley 数比较振荡惯性和黏性，两者回答的问题不同。

流动是否能把溶质带过扩散距离，还取决于 Péclet 数 $\mathrm{Pe}=UL/D$。低 Reynolds 数并不意味着对流一定可以忽略：速度和尺度都很小的流动，仍可能让扩散很慢的大颗粒或长距离溶质出现 $\mathrm{Pe}\gg1$。对流—扩散守恒与边界层见[从概率分布到连续通量](biophysics_transport.md#fick-conservation)。

## 弹性、黏性与黏弹性对应不同时间历史 { #viscoelasticity }

一维线性弹簧满足 Hooke 关系 $\sigma=E\varepsilon$，卸载后储存的弹性能可释放；理想黏壶满足 $\sigma=\eta\dot\varepsilon$，输入功被持续耗散。细胞和组织同时储能、耗能并重塑结构，因而常表现为黏弹性。材料性质必须连同加载时间、幅度和方向报告：同一细胞在毫秒冲击、秒级压入和小时级牵拉下可以得到不同的“刚度”。

### Maxwell 松弛与 Kelvin–Voigt 蠕变 { #maxwell-kelvin-voigt }

Maxwell 模型把弹簧与黏壶串联。两元件承受同一应力，总应变率满足

$$
\dot\varepsilon=\frac{\dot\sigma}{E}+\frac{\sigma}{\eta}.
$$

若瞬时施加并保持小应变 $\varepsilon_0$，应力按

$$
\sigma(t)=E\varepsilon_0e^{-t/\tau_M},
\qquad
\tau_M=\frac{\eta}{E}
$$

衰减。它描述应力松弛：短于 $\tau_M$ 的观察中弹簧占优，长时间后黏壶流动消除应力。

Kelvin–Voigt 模型把弹簧与黏壶并联，满足

$$
\sigma=E\varepsilon+\eta\dot\varepsilon.
$$

施加并保持应力 $\sigma_0$ 后，应变逐渐接近 $\sigma_0/E$：

$$
\varepsilon(t)=\frac{\sigma_0}{E}
\left(1-e^{-t/\tau_K}\right),
\qquad
\tau_K=\frac{\eta}{E}.
$$

它描述有延迟的蠕变，却不能表现完全的长期流动。细胞通常包含宽广的松弛时间，单个 Maxwell 或 Kelvin–Voigt 元件只能抓住某一实验窗口；多个元件、分数阶模型或连续松弛谱可以拟合更宽频率范围，但增加的参数必须由独立数据约束。

### 储能模量与损耗模量分开可逆和耗散响应 { #storage-loss-moduli }

施加小幅正弦剪切 $\gamma(t)=\gamma_0\cos\omega t$，黏弹材料的应力一般相对形变有相位差。复剪切模量写成

$$
G^*(\omega)=G'(\omega)+iG''(\omega).
$$

$G'$ 是与形变同相的储能模量，表示每周期可恢复的响应；$G''$ 是与形变速率相关的损耗模量，表示耗散。$G'>G''$ 的频段较偏固态，$G''>G'$ 的频段较偏流态，但这只是指定频率下的描述。损耗角正切 $\tan\delta=G''/G'$ 可比较相对耗散，不能取代模量的绝对大小。

材料松弛时间 $\tau$ 与实验时间 $T$ 的比值形成 Deborah 数 $\mathrm{De}=\tau/T$。$\mathrm{De}\gg1$ 时，内部结构来不及松弛，材料在该观察中较像固体；$\mathrm{De}\ll1$ 时，结构能够重排并表现流动。许多细胞在宽频段内呈幂律响应，说明内部存在广泛而非单一的重排时间；改变探针大小、测量位置或药物处理后，得到的有效谱也会改变。

### 非线性、塑性与多孔弹性扩展线性模型 { #nonlinear-poroelastic }

生物网络常在应变增大时变硬。半柔性丝在低应力下主要通过弯曲和取向变化响应，拉直后需要伸长丝本身；交联网络因而可出现 strain stiffening（应变硬化）。Storm 等人的理论与多种生物聚合物凝胶比较表明，这种非线性可以由半柔性链的共同统计力学产生，而不要求每种材料拥有完全不同的专门结构。交联断裂、纤维滑移和细胞连接重排又会造成软化、屈服、迟滞与不可逆塑性。[^storm-biogels]

细胞质和组织还含有可移动液体与多孔固体骨架。把孔隙网络的渗透率记为 $k$、特征体积模量记为 $K$、液体黏度记为 $\eta_f$，孔隙压力消散的有效扩散系数在尺度上可写成

$$
D_p\sim\frac{kK}{\eta_f},
\qquad
\tau_p\sim\frac{L^2}{D_p}.
$$

局部压入先让固相和液体共同承载，随后压力梯度驱动液体穿过孔隙，产生依赖探针尺寸 $L$ 的松弛时间。Moeendarbary 等通过不同长度尺度的细胞压入和体积扰动，将活细胞质的部分短时松弛归入这种 poroelastic（多孔弹性）机制。[^cytoplasm-poroelastic] 交联周转、马达活动与生化渗透压还会叠加在液固两相响应上，所以多孔弹性是可检验的机制分量，不是细胞质在所有尺度上的唯一材料身份。

## 细胞骨架是带预应力的主动材料 { #active-cytoskeleton }

细胞骨架网络的力学不仅由单根丝的弯曲刚度决定，还取决于丝长、取向、分支、交联密度、连接寿命和边界锚定。稀疏网络可先通过丝的弯曲响应，取向或预拉伸后转而由轴向伸长承载；交联过少不能形成跨尺度传力，交联过强又可能抑制重排并促进脆性断裂。单丝持续长度与熵弹性见[持续长度](biophysics_macromolecular.md#persistence-length)，肌动蛋白、微管和中间丝的装配分工见[细胞骨架](../cell/cytoskeleton.md#cytoskeletal-filaments)。

myosin 等马达持续消耗 ATP，在网络中产生偶极力与收缩性预应力。预应力可拉直半柔性丝、招募承载路径并提高网络的微分刚度，也可在局部超过连接强度时触发断裂和流动。Mizuno 等用 actin、交联蛋白和 myosin II 构成简化主动网络，发现马达应力显著提高网络刚度并改变其黏弹谱；这一实验把分子马达活动、非平衡涨落和宏观材料响应直接联系起来。[^mizuno-active-network]

活细胞还会根据受力历史增减骨架、改变交联和调节马达，因此本构关系随时间演化。被动材料的热涨落与线性响应受 fluctuation–dissipation relation（涨落—耗散关系）联系；主动马达产生的额外涨落不服从同一平衡关系。仅凭示踪粒子的自发运动推断模量，可能把主动驱动误当成温度较高或材料较软；用外力主动驱动同一探针，并与被动涨落比较，才能识别非平衡力的贡献。

### 皮层张力把细胞形状与压力耦联 { #cortical-tension }

膜下 actomyosin 皮层是一层薄的主动材料。若近似把细胞看成半径为 $R$、表面张力均一的球体，内外压差满足 Laplace 尺度关系

$$
\Delta P=\frac{2\gamma}{R},
$$

$\gamma$ 是有效皮层—膜张力。该关系说明压力、曲率和张力不能分别任意指定，也为微量吸管实验提供基线。真实细胞的皮层厚度、张力和黏附并不均匀，局部 actin 装配、myosin 收缩、膜储备和曲率蛋白都会改变形状；在黏附细胞或具有厚壁的组织中，把轮廓直接代入球形 Laplace 式会混合多类应力。

皮层局部脱离膜时，胞质压力可推动膜形成 bleb；新皮层随后装配并收缩，使突起回缩或参与迁移。这个循环需要压力传播、膜—皮层黏附、皮层周转和细胞质流动共同作用，展示了表面张力模型怎样与主动重塑相接，而不是把细胞简化成装有液体的静态气球。

### 黏附闭合细胞与环境之间的力平衡 { #adhesion-traction }

细胞对基质施加牵引，基质以相反力作用于细胞。integrin、talin、vinculin 与 actin 形成的连接把分子结合、骨架流动和基质形变串联成动态离合；基质较软时，连接点随基质一起位移，较硬时，骨架张力和连接受力上升，但黏附组装、滑移及断裂使这种关系具有时间与配体依赖。具体黏附复合物和机械转导见[承载负荷的界面](../cell/cell_interactions.md#load-bearing-adhesions)与[ECM 重塑](../cell/cell_interactions.md#ecm-remodelling-mechanotransduction)。

若铺有标记点的弹性基底在细胞牵引下产生位移场 $\mathbf u(\mathbf x)$，已知基底的厚度、本构关系和边界条件后，可以反演表面牵引 $\mathbf t(\mathbf x)$。Dembo 与 Wang 的弹性基底研究得到迁移成纤维细胞的空间牵引图，奠定了 traction force microscopy（牵引力显微）的定量路径。[^dembo-wang] 这一反问题通常病态：测量噪声可在求导和反卷积中被放大，需要正则化；假定基底为线性、均匀、各向同性半空间或薄层，也会影响恢复出的力。

单细胞在低惯性环境中近似满足整体力与力矩平衡。一个区域向前牵引，其他区域和流体阻力必须提供补偿；因此，牵引图揭示的是细胞—基底界面的力交换，不等同于细胞内部全部应力。要恢复跨细胞连接的应力，还需结合单层几何、边界牵引和明确的连续模型。

## 主动物质把局部耗能扩展为集体流动 { #active-matter }

被动液晶中的杆状单元可形成 polar（有头尾方向）或 nematic（只有轴向、头尾等价）取向序。若这些单元持续消耗燃料并产生力偶极，取向场会主动向周围材料注入应力。连续理论把总应力分为被动弹性、黏性、压力和主动部分；主动应力常与取向张量成正比，其符号区分整体偏收缩或偏伸展的驱动，但具体符号约定随文献而变。[^active-matter-hydrodynamics]

活性足够强时，均匀取向可失稳，产生剪切流、涡旋和不断生成—湮灭的拓扑缺陷。actomyosin 皮层、微管—马达混合物、细菌群和上皮单层都可出现类似的长尺度模式，却不共享完全相同的微观机制。所谓 active matter（主动物质）提供的是由对称性、守恒律、摩擦和能量输入组织现象的共同框架；判断具体体系仍需测量取向、速度、应力、燃料依赖和边界条件。

与基底摩擦很强的“dry”主动体系，动量会迅速传给环境，局部速度常由主动驱动、弹性和摩擦平衡决定；悬浮于流体中的“wet”体系还要保留长程流体动力相互作用。细胞单层附着基底、三维细胞团浸在基质中以及自由游动微生物因此属于不同力平衡。忽略动量耗散去向，会把相似的速度图错误归为相同机制。

## 组织力学来自细胞形状、连接与重排 { #tissue-mechanics }

组织中的应力可由细胞皮层收缩、细胞—细胞连接、基质牵引、腔内压力、生长和外部负荷共同产生。快速扰动下，连接网络和细胞体积约束使组织能够像固体一样传力；在较长时间中，连接周转、细胞极化、邻居交换、分裂和挤出允许组织流动。组织是“固体”还是“流体”必须附带时间尺度与实验条件。

形态发生把这些材料过程组织成空间模式。上皮顶端收缩可使细胞楔形化并驱动弯折，定向邻居交换可让组织一轴延长、另一轴收窄，边界收缩和细胞牵引可共同闭合缺口。基因和信号网络决定何处启动收缩、黏附或极性，力学平衡决定局部行为怎样传播为整体形变；发育中的因果证据链见[形态发生机制](../development/morphogenesis.md#morphogenesis-evidence)。

### 顶点模型把细胞几何转成组织能量 { #vertex-model }

对近似铺满平面的上皮，可把每个细胞表示为多边形。常用顶点模型的有效能量为

$$
E=\sum_i\left[
\frac{K_A}{2}(A_i-A_{0i})^2
+\frac{K_P}{2}(P_i-P_{0i})^2
\right].
$$

$A_i$、$P_i$ 是细胞面积和周长，$A_{0i}$、$P_{0i}$ 是有效目标值。面积项概括体积、厚度和压缩约束，周长项把皮层收缩、细胞—细胞黏附等效应粗粒化；这些参数不与某一个分子浓度一一对应。顶点位置沿能量梯度和主动驱动移动，短边消失后发生 T1 邻居交换，组织由此在不留下空隙的情况下重排。

Bi 等在汇合组织顶点模型中发现，即使面积密度不变，改变目标形状相关参数也可使局部重排能垒消失，出现刚性转变。[^bi-rigidity] 这一结果说明组织流固转变不必只靠“挤得更密”，细胞皮层与黏附所控制的几何也很重要。临界形状值依赖模型维度、无序、主动性和参数定义，不能直接当作所有真实组织的诊断常数。

顶点模型适合表达汇合上皮的形状与邻接，却省略了细胞内部结构、三维厚度、基底摩擦和基质纤维。粒子模型、相场模型、有限元和连续主动流体各自保留不同信息；选择模型应由要解释的观测量决定，而不是以一套方程覆盖所有组织。

### 集体迁移中的力分布跨越多行细胞 { #collective-migration }

迁移中的单层既对基底施加牵引，也通过细胞连接传递法向与剪切应力。Trepat 等对扩展上皮单层的测量显示，推动集体迁移的牵引并非只集中在最前缘的 leader cell，而可由后方许多行细胞共同贡献，形成跨越较长距离的力学协作。[^trepat-collective-forces] 前缘细胞仍可决定局部方向和边界探索，但速度相近不代表每个细胞承受相同牵引或内部应力。

将牵引力显微与单层力平衡结合，可以估计细胞间应力；结果依赖单层厚度、平面应力近似、边界条件和正则化。速度相关、牵引相关和形状相关提供互补信息：速度图显示运动，牵引图显示与基底的力交换，细胞间应力模型则估计内部传力。把三者混为一种“迁移力”会丢失机械路径。

### 组织切割把预应力转化为回缩轨迹 { #laser-ablation }

激光消融可快速切断一段皮层、细胞连接或组织边界。切割前若结构承受张力，切口两侧会立即回缩；初始回缩速度由原有张力与局部黏性阻尼共同决定，后续轨迹还受周围弹性、流动和主动修复影响。没有材料模型时，回缩速度只能作为张力／阻尼的组合读出，不能直接等同于绝对张力。

Hutson 等在果蝇背侧闭合中结合激光显微手术与定量模型，区分了上皮边缘 purse string、羊膜浆膜收缩和黏附拉链式闭合的贡献，并用突变体检验模型预测。[^hutson-laser] 这类实验的力量来自突然改变力学连接后观察整个时间响应；切割也会触发钙信号、损伤反应和主动重塑，因而最早的被动回缩与稍后的生物学响应需要在时间上分开。

## 力学测量必须说明探针、几何与本构模型 { #mechanical-measurements }

细胞力学实验的原始读出通常是位移、速度、轮廓、压力或光强，模量、张力和应力来自模型反演。不同探针采样不同空间和时间尺度，同一个“弹性模量”若来自不同几何与本构假设，未必可以直接比较。

| 方法 | 主要直接读出 | 常见推断 | 关键解释边界 |
| --- | --- | --- | --- |
| 宏观或微型流变 | 给定应变／应力下的转矩、相位差与频率响应 | $G'(\omega)$、$G''(\omega)$、屈服、应变硬化和松弛谱 | 样品边界滑移、干燥、结构破坏和线性区间会改变曲线；群体平均掩盖空间异质性 |
| AFM 压入 | 悬臂偏转、压入深度和加载—卸载曲线 | 指定接触模型下的有效模量、黏附与松弛时间 | 探针半径、细胞厚度、基底、泊松比、有限应变和主动响应影响拟合；Hertz 模型并非自动适用 |
| 微量吸管 | 吸力、进入吸管的长度及其时间变化 | 皮层张力、表观黏度、弹性或黏弹参数 | 需选液滴、壳层或固体模型；吸管半径、摩擦、膜储备和细胞极性进入结果[^hochmuth-micropipette] |
| 光镊、磁镊与主动微流变 | 探针在已标定外力下的位移和相位 | 局部复模量、连接顺应性、主动与被动涨落差 | 探针表面结合、局部网络与体材料可能不同；活细胞中平衡涨落—耗散关系可失效 |
| 被动粒子追踪微流变 | 示踪粒子的热运动或自发运动轨迹 | 平衡假设下由均方位移推断 $G^*(\omega)$ | 主动运输、马达涨落、围困和非均一使自发运动不再只由热噪声决定[^mason-weitz] |
| 牵引力显微 | 细胞作用前后基底标记点的位移场 | 细胞—基底界面的牵引应力与总力矩 | 弹性核、基底厚度、三维位移、图像配准和正则化共同决定空间分辨率与幅值 |
| 激光消融 | 切口几何、两侧回缩速度和随后形变 | 预应力／阻尼比、各向异性与力传递路径 | 切割宽度、局部损伤、材料非线性和主动修复使晚期轨迹不能按纯被动模型解释 |
| PIV 与流场成像 | 示踪粒子或纹理随时间的速度场 | 流线、涡量、剪切率、通量及与压力／力模型的比较 | 空间平均窗口、离面运动、粒子沉降和壁面分辨率影响结果；速度场本身不唯一决定应力 |

微量吸管以已知压差拉入细胞轮廓，Hochmuth 的综述展示了液滴—皮层模型和固体模型怎样对应不同细胞类型；Mason 与 Weitz 则由示踪粒子的频率依赖运动建立微流变方法。两者都说明，同一个几何读出只有放入适当连续模型后才成为材料参数。若细胞在测量过程中持续重塑，参数还应标明加载速率、等待时间和是否采用药理或遗传扰动。

更可靠的机制判断来自正交测量。AFM 压入可给出局部形变响应，牵引力显微记录细胞对基底的输出，活细胞成像显示骨架和黏附重排，激光切割测试应力路径；若一个模型能同时预测这些不同读出在改变时间尺度、基底刚度或马达活性后的变化，它才可能抓住真正的力学结构。

生命系统的力学由守恒律、本构关系和主动重塑共同组成。Reynolds 数决定惯性与黏性的相对地位，Deborah 数决定松弛是否赶得上观察，Péclet 数决定流动能否战胜扩散；骨架、黏附和组织几何再把分子耗能转换为应力、形变与集体运动。把直接观测、模型假设和时间尺度一并写清，才能从一张速度图、一条力—位移曲线或一个“刚度”数值判断生命材料怎样工作。

## 参考资料与延伸阅读 { #references }

[^physical-biology-mechanics]: Phillips R, Kondev J, Theriot J, Garcia H. [*Physical Biology of the Cell*, 2nd ed.](https://www.routledge.com/Physical-Biology-of-the-Cell-2nd-Edition/Phillips-Kondev-Theriot-Garcia/p/book/9780815344506). Garland Science, 2012.
[^mit-fields-flows]: Massachusetts Institute of Technology. [*Fields, Forces and Flows in Biological Systems: Lecture Notes*](https://ocw.mit.edu/courses/20-430j-fields-forces-and-flows-in-biological-systems-fall-2015/resources/lecture-notes/). MIT OpenCourseWare, Fall 2015.
[^purcell-low-re]: Purcell EM. [Life at low Reynolds number](https://doi.org/10.1119/1.10903). *Am J Phys*. 1977;45(1):3–11.
[^storm-biogels]: Storm C, Pastore JJ, MacKintosh FC, Lubensky TC, Janmey PA. [Nonlinear elasticity in biological gels](https://doi.org/10.1038/nature03521). *Nature*. 2005;435:191–194.
[^cytoplasm-poroelastic]: Moeendarbary E, Valon L, Fritzsche M, et al. [The cytoplasm of living cells behaves as a poroelastic material](https://doi.org/10.1038/nmat3517). *Nat Mater*. 2013;12:253–261.
[^mizuno-active-network]: Mizuno D, Tardin C, Schmidt CF, MacKintosh FC. [Nonequilibrium mechanics of active cytoskeletal networks](https://doi.org/10.1126/science.1134404). *Science*. 2007;315(5810):370–373.
[^dembo-wang]: Dembo M, Wang Y-L. [Stresses at the cell-to-substrate interface during locomotion of fibroblasts](https://doi.org/10.1016/S0006-3495(99)77386-8). *Biophys J*. 1999;76(4):2307–2316.
[^active-matter-hydrodynamics]: Marchetti MC, Joanny JF, Ramaswamy S, et al. [Hydrodynamics of soft active matter](https://doi.org/10.1103/RevModPhys.85.1143). *Rev Mod Phys*. 2013;85(3):1143–1189.
[^bi-rigidity]: Bi D, Lopez JH, Schwarz JM, Manning ML. [A density-independent rigidity transition in biological tissues](https://doi.org/10.1038/nphys3471). *Nat Phys*. 2015;11:1074–1079.
[^trepat-collective-forces]: Trepat X, Wasserman MR, Angelini TE, et al. [Physical forces during collective cell migration](https://doi.org/10.1038/nphys1269). *Nat Phys*. 2009;5:426–430.
[^hutson-laser]: Hutson MS, Tokutake Y, Chang M-S, et al. [Forces for morphogenesis investigated with laser microsurgery and quantitative modeling](https://doi.org/10.1126/science.1079552). *Science*. 2003;300(5616):145–149.
[^hochmuth-micropipette]: Hochmuth RM. [Micropipette aspiration of living cells](https://doi.org/10.1016/S0021-9290(99)00175-X). *J Biomech*. 2000;33(1):15–22.
[^mason-weitz]: Mason TG, Weitz DA. [Optical measurements of frequency-dependent linear viscoelastic moduli of complex fluids](https://doi.org/10.1103/PhysRevLett.74.1250). *Phys Rev Lett*. 1995;74(7):1250–1253.
