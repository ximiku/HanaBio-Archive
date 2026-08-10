# 多细胞合成系统与空间模式

多细胞合成系统把设计对象从一个细胞内的线路扩展到许多能够通信、生长、移动和改变邻接关系的细胞。系统行为既取决于每个细胞携带的感受、计算与执行模块，也取决于信号在细胞之间怎样传播、不同成员以何种比例共存以及群体占据怎样的空间。两个细胞株分别表达预定元件，只说明构建被分装到多个成员；只有它们的相互作用形成了单个成员不具备的同步、决策、分工、图案或形态，才进入多细胞系统层次。

这一层次有三种常见组织方式。可扩散信号把许多细胞接入共享的 extracellular field，接触依赖信号把计算限制在相邻细胞之间，代谢物与生态作用则把成员的增长和存亡连接起来。它们可以单独构成群体回路，也可以依次耦合：信号先指定细胞命运，命运改变黏附或运动，细胞重新排列后又改写后续信号的传播几何。多细胞设计因此同时包含 communication circuit、population dynamics 和 spatial mechanics。

## 细胞间通信构成发送—传播—接收通道 { #sender-medium-receiver }

一条通信通道至少包含 sender、medium 和 receiver。发送细胞以速率 $q$ 合成并释放信号；信号在介质中扩散，也可能随液流或组织运动发生 advection，并被化学降解、酶促清除、细胞摄取或边界吸收；接收细胞再以 receptor occupancy、转录响应或状态转换读取局部浓度。把这三段分开，才能判断一次通信失败来自发送不足、传播损失，还是接收端阈值不匹配。

若信号的有效扩散系数为 $D$、一阶清除速率为 $k$，反应—扩散系统具有特征长度

$$
\lambda=\sqrt{\frac{D}{k}}.
$$

$\lambda$ 给出浓度显著衰减的空间尺度，但实际作用距离还随源的大小与持续时间、介质几何、边界条件、流速、细胞密度和 receiver threshold 改变。提高产生量会抬高浓度场，减慢降解会同时延长时间记忆和空间范围；两种操作可能让终点图案相似，却对撤去信号后的恢复和局部清除产生不同预测。[随机运动、扩散与膜输运](biophysics_transport.md#reaction-diffusion-scales)提供通量与尺度关系，[随机动力学、空间模式与群体系统](systems_stochastic_spatial.md#diffusion-reaction-diffusion)则展开自然系统中的反应—扩散模型。

### 群体感应把局部信号场接入细胞状态 { #quorum-sensing-channel }

细菌 quorum sensing 常被改造成可扩散通信接口。以 LuxI／LuxR 系统为例，LuxI 合成 N-acyl homoserine lactone（AHL），AHL 穿过细胞包膜并在局部介质中积累，结合 LuxR 后改变靶 promoter 的转录。LuxI 正反馈可以放大共同状态，AHL lactonase 等清除元件可以缩短信号寿命，另外的下游线路则把占有率转成荧光、运动、裂解、代谢或第二种信号。

这里的“群体感应”读取的是由产生、稀释、流动、降解和几何共同决定的局部信号，而不是精确细胞计数。同样的细胞数置于不同体积、流速或表面积中，可形成不同 AHL 浓度；生物膜内部和充分混合培养液也不会共享同一传播条件。输入—输出测量至少要同时记录 cell density、signal concentration 和 receiver response，才能判断阈值来自群体组成还是环境传质。

多条通信线路并行时还要考虑 crosstalk。相近的 signal synthase、ligand 和 receptor 可能产生非预期激活，宿主的 efflux、uptake 和 metabolism 也会改变表观正交性。通道表征应覆盖 ligand–receptor 组合矩阵、剂量—反应曲线、动态范围、leakiness、response time 和撤除后的恢复；对相邻空间区域，还要测量信号泄漏和边界宽度，而不只比较培养液中的终点表达。

### 接触依赖信号限定邻接关系 { #contact-dependent-signaling }

可扩散信号把信息广播给作用范围内的细胞，juxtacrine signaling 则要求配体与受体所在的细胞表面直接接触。Morsut 等构建的 synthetic Notch（synNotch）receptor 把可替换的胞外识别域、Notch 核心切割机制和人工转录因子连接起来，使接触识别能够驱动用户指定的转录输出。[^synnotch-receptor] 这类接口的作用范围接近一个细胞直径，输出由接触面积、接触持续时间、受体与配体密度、细胞极性和组织运动共同决定。

接触依赖激活可以让相邻细胞获得相同命运；若接收后的细胞抑制自身配体或诱导邻居采取另一命运，则可形成 lateral inhibition，使微小初始差异转成相间状态。相反，接触后的正反馈和黏附增强可扩大同类区域。这里的线路拓扑仍来自[反馈、开关与振荡](systems_dynamics.md)，但邻接网络是动态变量：细胞分裂、迁移、脱落和重排会不断改变谁能给谁发送信号。

## 群体回路产生同步、密度控制与分布式计算 { #population-circuits }

把同一种振荡线路放进许多细胞，并不会自动得到群体振荡。各细胞的转录速率、生长和初始相位不同，彼此独立的振荡器会逐渐失相，使 bulk fluorescence 看起来衰减。Danino 等把 AHL communication 接入振荡回路，使细胞以共享信号校正相位，在 microfluidic conditions 下形成同步的 population-level oscillation。[^synchronized-clocks] 此时应同时检查单细胞是否仍在振荡以及相位分布是否收窄；只有群体平均曲线无法区分“单细胞停止”和“细胞继续振荡但彼此失相”。

通信也可以把群体大小纳入负反馈。You 等让 AHL 随细胞密度积累，再由阈值响应开启受调控的 killing module，形成 density-dependent population control。[^population-control] 这类系统的稳态不只由 promoter threshold 决定，还取决于 growth rate、死亡延迟、信号清除、死细胞物质释放和 surviving subpopulation。若 killing 强而延迟长，群体可能越过阈值后大幅下降，再随残存细胞增长形成周期；若响应较缓，则更接近稳定密度。

### 分工把复杂逻辑拆到多个细胞 { #distributed-computation }

一个细胞同时承载许多 gate 会遭遇 fan-out、resource competition 和元件串扰。distributed computation 把逻辑步骤分给不同细胞或菌落，再用 chemical wire 连接前后级。Tamsir、Tabor 和 Voigt 把 NOR gate 分散在经过设计的 *Escherichia coli* strains 中，以不同 AHL 通道传递中间结果；若干只执行局部逻辑的 colony 由此组成更复杂的 multicellular circuit。[^multicellular-nor]

这种拆分减少了单个成员的线路负担，却增加了通信接口和群体组成变量。上游输出必须落入下游可读的 input range，signal delay 会在多级连接中累积，发送细胞的生长劣势会逐渐削弱整条通路。多个下游接收者虽然不一定像蛋白结合位点那样直接隔离上游 regulator，却会通过吸收、降解、共享介质和改变群体密度形成 population-level load。分布式回路的规格因而要同时给出 logic truth table、响应时间、各成员比例及空间排列。

## 合成群落以成员互作完成分工 { #synthetic-consortia }

synthetic consortium 由两个或更多具有不同功能的成员组成，整体输出依赖成员间的物质交换、信号或生态作用。成员可以属于同一物种的不同工程株，也可以来自代谢和生理条件互补的物种。划分成员的意义在于把互相冲突的任务隔开：不同细胞可以采用不同转录环境、辅因子、氧需求或生长阶段，也可以把有毒中间物限制在较少成员中。

### 交叉营养把代谢交换连接到群体组成 { #cross-feeding }

cross-feeding 中，一个成员释放的代谢物成为另一个成员的必需营养或底物。Shou、Ram 和 Vilar 构建了相互提供必需代谢物的 engineered yeast populations，展示 cooperation 能由明确交换关系建立；Mee 等进一步用多种 amino-acid auxotroph 组合说明，代谢物合成、泄漏与需求的差异会决定哪些配对能够维持共同生长。[^synthetic-cooperation][^syntrophic-exchange]

这种交换包含从胞内合成到群体增长的连续通量：producer 需要生成并释放物质，介质需要保存或运输它，consumer 需要摄取并转化，获得的生长收益又会改变两类细胞的比例。仅凭“一个成员拥有合成基因、另一个成员缺失该基因”不能确认互养；应测量 extracellular metabolite、单独培养与共培养增长、同位素或遗传来源以及成员频率的时间变化。

交叉营养可以形成 obligate mutualism，也可以只是提高双方在特定环境中的增长。外源补加被交换物会解除依赖，资源浓度改变可使原本互利的成员转为竞争。互利、偏利和竞争的生态定义及其条件依赖性见[捕食、寄生与互利](../ecology/consumer_resource_interactions.md#commensalism-mutualism)；本页关注怎样把这些作用写入人工群落的设计变量并用构建检验。

### 代谢分工重新分配通量与负担 { #metabolic-division-of-labour }

长代谢通路可以按前体形成、关键转化和产物修饰分配给不同成员。Zhou 等把天然产物通路分散到 microbial consortium 后，提高了对长通路中相互冲突步骤的独立调节能力；Tsoi 等从模型和实验说明，当中间物毒性、资源负担和酶表达冲突足够显著时，division of labour 能形成相对于单一细胞方案的优势。[^distributed-metabolism][^metabolic-division]

分工也引入跨细胞 transport。中间物必须离开 producer、在介质中保持可用并进入下一成员；若膜通透过低，前级积累而后级饥饿，若泄漏或降解过快，整体 carbon yield 会下降。比较 single-strain 与 consortium design 时，要在相同 substrate input 下同时报告 titer、rate、yield、各成员 biomass、intermediate pool 和 passage stability，而不是只比较某次终点产量。[基因组设计、代谢工程与生物制造](synthetic_genome_metabolic.md#cell-factory-flux)负责胞内通量与制造过程，本节补上跨成员分配及其群体代价。

### 稳定组成来自人口统计反馈 { #consortium-stability }

合成群落能否持续，取决于每个成员的 net growth rate 怎样随伙伴频率和环境变化。若稀少成员因为获得更多伙伴产物而增长较快、常见时又受自身资源限制，negative frequency dependence 可以形成稳定组成；若一个成员始终增长更快，它会逐代接管群体，即使最初接种比例经过精确调节。互相促进过强也可能使总量增长而比例漂移，只有频率反馈与总量反馈共同受控时，composition 和 biomass 才能同时稳定。

cheater 是获得群体收益却减少自身贡献的成员。可扩散 enzyme、metabolite 或 signal 具有 public-good 性质时，失去生产模块的突变体可能节省负担并保留收益。空间聚集会提高贡献者与其产物再次相遇的概率，代谢依赖、伙伴选择、差别奖励和把贡献与自身必需功能相耦合则能改变逃逸者的相对适合度。它们各自留下新的 failure route，因此需要 rare-invasion assay、serial passage、成员 barcode／genotype 和功能输出联合验证；短期共培养平衡不能代表进化稳定。合成群落的一般设计框架可参见 Kong 等对 defined social interactions 的综述。[^defined-consortia]

## 梯度、边界与图案由线路和几何共同决定 { #synthetic-spatial-patterns }

空间图案要求细胞把位置差异转换成稳定可观测的状态差异。最直接的方法是设置 signal source 与 receiver field：源的位置和形状建立浓度场，receiver 的 transfer function 决定哪些浓度区间被读成输出。若 receiver 只在中等浓度开启，高浓度区和低浓度区都关闭，就会在点状或圆形信号源周围形成 ring；沿直线源则形成 band。边界位置由 source strength、$D$、$k$ 和 activation window 共同决定，边界宽度还受到 receptor noise、细胞移动和增长影响。

Basu 等的经典系统以 AHL sender 建立扩散场，以具有 band-detect response 的 receiver lawn 把中等信号区转成环形荧光输出。[^programmed-pattern] 它说明 pattern 并不储存在单个细胞的坐标中，而是由 extracellular gradient 与 intracellular pulse／band-pass circuit 相乘得到。改变 sender 数量、sender–receiver distance、AHL degradation 或 receiver threshold，应该按照各自机制移动环的位置或改变宽度，这些 perturbation 比“最后出现了一个环”提供更强的模型检验。

### 边缘和条纹利用空间输入与群体生长 { #edge-stripe-patterns }

Tabor 等把光输入、细胞内逻辑与 AHL communication 组合，使 bacterial film 在投射图像的明暗交界处产生输出，构成 synthetic edge detector。[^edge-detection] 边缘并不是某个细胞直接测得的抽象几何对象，而是相邻区域对光和通信信号的不同响应经过局部逻辑整合后显现。测量边缘精度需要比较输入边界、输出边界、响应延迟和不同图像尺度下的偏移。

Liu 等则把 cell density、motility 和 gene expression 耦合到 expanding bacterial population，使条纹随 colony 扩张依次建立。[^synthetic-stripes] 这里的位置变量不是预先固定的 source gradient，而由生长前沿、运动状态和密度阈值共同生成。它提示人工图案可来自细胞对外部模板的读取，也可来自线路与群体扩张的自组织；两类机制对停止生长、改变培养基硬度、改变接种几何或重新启动培养会给出不同结果。

reaction–diffusion topology 还可以通过短程激活与长程抑制选择波长，relay circuit 可以让信号波在超出单分子扩散距离后继续传播。人工实现时必须测量 signal species 的实际传播、每一级 relay 的延迟与阈值，以及细胞增长是否移动边界；仅凭斑点、条纹等外形，无法反推生成机制。自然发育系统中的 morphogen、Turing instability 和 wave 由[随机动力学、空间模式与群体系统](systems_stochastic_spatial.md#morphogen-gradients)解释，本页的重点是指定元件和几何能否构建出可预测图案。

## 黏附、接触信号与力学形成合成形态 { #synthetic-morphogenesis }

pattern 描述细胞状态在空间中的分布，morphogenesis 还要求细胞的位置、连接和三维形状发生有组织的改变。线路若只让一团细胞出现内外两种荧光，形成的是 fate pattern；若这些状态进一步改变 adhesion、contractility、proliferation、migration 或 extracellular matrix，使细胞排序、包裹、分层、延伸或形成腔隙，才产生形态层输出。

programmable adhesion 可以直接规定哪些成员彼此黏附。Glass 和 Riedel-Kruse 建立的 bacterial cell–cell adhesion toolbox 以成对表面识别分子调节同类与异类黏附，使群体能够自组装出不同 multicellular morphology 和 pattern。[^synthetic-adhesion] 最终结构取决于 binding specificity 和 strength，也取决于细胞形状、分裂方向、基质摩擦及不同成员的增长；一张终点图像需要结合邻接统计和 lineage 才能区分主动排序、差异增殖与偶然聚集。

Toda 等把 synNotch 接触感知与 cadherin 等 morphogenetic effectors 相连，使初始接触能够依次诱导新的 adhesion 或 signaling state，进而形成自组织的多层细胞结构。[^self-organizing-structures] 这类设计建立了可递归的逻辑：细胞相遇改变 gene expression，表达改变谁与谁接触，新接触再触发下一层状态。后续 synthetic morphogen system 还表明，工程化细胞可以产生可传播信号，并由不同响应阈值把位置编码成多个 mammalian cell fates。[^synthetic-morphogens]

接触激活、lateral inhibition、differential adhesion 和 diffusive morphogen 可以组合成更复杂的空间程序。组合顺序十分重要：先指定命运再改变黏附，可能按命运排序；先聚集再开启短程信号，则由聚集产生的邻接网络决定命运。天然 cadherin、integrin、ECM 和 junction mechanics 的分子基础见[细胞外基质、黏附与连接](../cell/cell_interactions.md#junction-systems)，合成系统要进一步说明人工受体或效应器怎样改写这些既有界面。

## 多尺度实验连接构建、群体与形态 { #multiscale-validation }

多细胞系统需要同时验证元件身份、单细胞状态、成员人口统计和空间输出。缺少其中一层时，相同终点表型可有多种解释：输出环消失可能来自 sender mutation、signal washout、receiver threshold drift 或 receiver 被生长更快的成员替代；群落产量下降可能来自胞内通量、交换受阻或成员比例改变；组织形态变化也可能只是差异死亡留下的空隙。

| 系统层级 | 直接观测 | 关键扰动 | 可区分的失效机制 |
| --- | --- | --- | --- |
| 通信通道 | sender expression、extracellular signal、receiver dose–response 与 response time | 改变 source、距离、流速、降解和 receptor | 发送不足、传播损失、串扰、阈值错配或延迟累积 |
| 群体回路 | 单细胞状态、相位分布、总密度和状态转换轨迹 | 改变耦合强度、初相位、接种密度与 feedback | 真正同步、失相、密度控制振荡或亚群替代 |
| 合成群落 | 成员频率、各成员生长率、交换物池和整体通量 | 稀有成员入侵、营养补加、伙伴移除与连续传代 | 互养、资源竞争、cheater 扩张或初始比例暂态 |
| 空间图案 | 单细胞表达、边界位置与宽度、相关长度和前沿速度 | 改变几何、尺度、source–sink、细胞运动和生长 | 模板读取、relay、reaction–diffusion 或扩张前沿生成 |
| 合成形态 | 邻接图、黏附力、迁移、分裂、谱系和三维结构 | 受体／配体交换、黏附 rescue、局部诱导和力学扰动 | 命运转换、细胞排序、差异增殖、死亡或基质重塑 |

single-cell time-lapse 与 lineage tracing 用来判断状态是在原位转换，还是携带某种状态的细胞迁入或增殖；spatial transcript／protein readout 把线路状态映射回位置；signal calibration 和 metabolite measurement 则把 reporter 代理量连接到真实通信或交换物。三维系统还应记录组织尺寸、曲率、腔隙和力学边界，因为同一线路在二维平板、球状体和流动微环境中会形成不同邻接与传质条件。

实验设计应让模型预测在多个尺度上同时成立。若扩散—降解模型给出某个作用长度，改变降解速率应同时改变 signal profile、receiver boundary 和最终 pattern；若稳定群落依赖 negative frequency dependence，从不同初始比例出发应回到相近组成，稀有成员还应具有相对增长优势；若形态由接触诱导黏附产生，阻断接触信号或替换 adhesion effector 应按线路顺序中断结构，而不是只降低总体活性。

## 与相邻页面的知识接口 { #interfaces }

[生物元件与合成基因线路](synthetic_circuits.md)说明 sensor、logic、feedback、switch 和 oscillator 在单细胞内怎样工作；本页追踪这些装置通过共享介质、人口统计和邻接网络连接后出现的系统行为。[基因组设计、代谢工程与生物制造](synthetic_genome_metabolic.md)负责通路通量、底盘与制造尺度，本页负责把通路分到不同成员后的交换、组成和稳定性。[无细胞系统、最小细胞与人工细胞](synthetic_cell_free.md)讨论区室自身能否维持表达、交换与更新，本页承接多个区室或细胞之间的通信和空间组织。

[竞争、生态位与共存](../ecology/species_interactions.md)以及[捕食、寄生与互利](../ecology/consumer_resource_interactions.md)给出自然群落中竞争、互利、入侵和共存的生态理论；人工群落把选定互作写入构建，并以组成与功能的可控改变检验这些关系。[随机动力学、空间模式与群体系统](systems_stochastic_spatial.md)从自然系统的观测建立随机与空间解释，本页则由指定 sender、receiver、member 和 effector 出发，判断人工组合是否足以产生同步、分工、图案和形态。

从单细胞线路走向多细胞设计，并不是简单增加细胞数量。通信建立跨细胞因果边，生长与交换决定成员能否延续，空间限制谁能接收何种输入，黏附和力学又把状态差异转成组织结构。只有把 signal field、cell state、population composition、geometry 和 lineage 放在同一证据链中，人工群体的终点图像才能被还原为可检验的多尺度机制。

## 参考资料与延伸阅读 { #references }

- Tamsir, A., Tabor, J. J. & Voigt, C. A. [Robust multicellular computing using genetically encoded NOR gates and chemical ‘wires’](https://doi.org/10.1038/nature09565). *Nature* 469, 212–215 (2011).
- Kong, W., Meldgin, D. R., Collins, J. J. & Lu, T. [Designing microbial consortia with defined social interactions](https://doi.org/10.1038/s41589-018-0091-7). *Nature Chemical Biology* 14, 821–829 (2018).
- Basu, S., Gerchman, Y., Collins, C. H., Arnold, F. H. & Weiss, R. [A synthetic multicellular system for programmed pattern formation](https://doi.org/10.1038/nature03461). *Nature* 434, 1130–1134 (2005).
- Toda, S., Blauch, L. R., Tang, S. K. Y., Morsut, L. & Lim, W. A. [Programming self-organizing multicellular structures with synthetic cell-cell signaling](https://doi.org/10.1126/science.aat0271). *Science* 361, 156–162 (2018).

[^synnotch-receptor]: Morsut, L. et al. [Engineering customized cell sensing and response behaviors using synthetic Notch receptors](https://doi.org/10.1016/j.cell.2016.01.012). *Cell* 164, 780–791 (2016).
[^synchronized-clocks]: Danino, T., Mondragón-Palomino, O., Tsimring, L. & Hasty, J. [A synchronized quorum of genetic clocks](https://doi.org/10.1038/nature08753). *Nature* 463, 326–330 (2010).
[^population-control]: You, L., Cox, R. S. III, Weiss, R. & Arnold, F. H. [Programmed population control by cell-cell communication and regulated killing](https://doi.org/10.1038/nature02491). *Nature* 428, 868–871 (2004).
[^multicellular-nor]: Tamsir, A., Tabor, J. J. & Voigt, C. A. [Robust multicellular computing using genetically encoded NOR gates and chemical ‘wires’](https://doi.org/10.1038/nature09565). *Nature* 469, 212–215 (2011).
[^synthetic-cooperation]: Shou, W., Ram, S. & Vilar, J. M. G. [Synthetic cooperation in engineered yeast populations](https://doi.org/10.1073/pnas.0610575104). *Proceedings of the National Academy of Sciences USA* 104, 1877–1882 (2007).
[^syntrophic-exchange]: Mee, M. T., Collins, J. J., Church, G. M. & Wang, H. H. [Syntrophic exchange in synthetic microbial communities](https://doi.org/10.1073/pnas.1405641111). *Proceedings of the National Academy of Sciences USA* 111, E2149–E2156 (2014).
[^distributed-metabolism]: Zhou, K., Qiao, K., Edgar, S. & Stephanopoulos, G. [Distributing a metabolic pathway among a microbial consortium enhances production of natural products](https://doi.org/10.1038/nbt.3095). *Nature Biotechnology* 33, 377–383 (2015).
[^metabolic-division]: Tsoi, R. et al. [Metabolic division of labor in microbial systems](https://doi.org/10.1073/pnas.1716888115). *Proceedings of the National Academy of Sciences USA* 115, 2526–2531 (2018).
[^defined-consortia]: Kong, W., Meldgin, D. R., Collins, J. J. & Lu, T. [Designing microbial consortia with defined social interactions](https://doi.org/10.1038/s41589-018-0091-7). *Nature Chemical Biology* 14, 821–829 (2018).
[^programmed-pattern]: Basu, S., Gerchman, Y., Collins, C. H., Arnold, F. H. & Weiss, R. [A synthetic multicellular system for programmed pattern formation](https://doi.org/10.1038/nature03461). *Nature* 434, 1130–1134 (2005).
[^edge-detection]: Tabor, J. J. et al. [A synthetic genetic edge detection program](https://doi.org/10.1016/j.cell.2009.04.048). *Cell* 137, 1272–1281 (2009).
[^synthetic-stripes]: Liu, C. et al. [Sequential establishment of stripe patterns in an expanding cell population](https://doi.org/10.1126/science.1209042). *Science* 334, 238–241 (2011).
[^synthetic-adhesion]: Glass, D. S. & Riedel-Kruse, I. H. [A synthetic bacterial cell–cell adhesion toolbox for programming multicellular morphologies and patterns](https://doi.org/10.1016/j.cell.2018.06.041). *Cell* 174, 649–658.e16 (2018).
[^self-organizing-structures]: Toda, S., Blauch, L. R., Tang, S. K. Y., Morsut, L. & Lim, W. A. [Programming self-organizing multicellular structures with synthetic cell-cell signaling](https://doi.org/10.1126/science.aat0271). *Science* 361, 156–162 (2018).
[^synthetic-morphogens]: Toda, S. et al. [Engineering synthetic morphogen systems that can program multicellular patterning](https://doi.org/10.1126/science.abc0033). *Science* 370, 327–331 (2020).
