# 肌细胞生理

[细胞的电活动](electrical_activity.md)到达肌细胞膜时，还只是电压和离子电流的变化。肌细胞必须把这段短暂的电信号传到细胞深部，使胞质 Ca$^{2+}$ 升高，再让成千上万个肌球蛋白头共同牵拉肌动蛋白；收缩结束后，又要把 Ca$^{2+}$ 移走并恢复离子梯度。兴奋—收缩耦联正是连接“动作电位”和“力”的整套过程。

骨骼肌、心肌和平滑肌都用肌动蛋白—肌球蛋白体系产生力，却在指令来源、收缩装置的排列、Ca$^{2+}$ 动员和细胞间协调上采用不同方案。骨骼肌适合快速、精确地接受运动神经元指令；心肌把每次动作电位组织成不能强直化的节律性搏动；平滑肌则常在低耗能条件下维持管腔张力，并接受神经、激素、局部代谢和机械牵张的共同调节。[^muscle-textbooks]

## 三类肌细胞共享力发生体系 { #three-muscle-types }

横纹并不是“随意运动”的同义词，而是肌节周期性排列形成的光学结果，因此骨骼肌和心肌都属于横纹肌。平滑肌没有规则重复的肌节，粗、细肌丝仍能交叉滑行并向细胞骨架传力。三类细胞的核心差别不在于是否具有肌动蛋白和肌球蛋白，而在于哪一侧接受 Ca$^{2+}$ 信号、怎样启动横桥，以及许多细胞如何协同。

| 细胞类型 | 收缩指令与组织方式 | Ca$^{2+}$—收缩装置接口 | 典型功能特征 |
| --- | --- | --- | --- |
| 骨骼肌 | 体运动神经元经神经肌接头驱动；长而多核的肌纤维内有规则肌节 | CaV1.1 感受横管去极化并别构门控 RyR1；Ca$^{2+}$ 结合肌钙蛋白 C，解除薄丝抑制 | 可快速募集、频率编码并形成强直；力和速度范围宽 |
| 心肌 | 细胞自发或经传导系统兴奋；分支细胞以闰盘连接，具有肌节 | CaV1.2 内流触发 RyR2 钙诱导钙释放；同样由肌钙蛋白调节薄丝 | 每个动作电位对应一次机械事件，长有效不应期防止强直 |
| 平滑肌 | 神经递质、激素、局部因子、牵张或自发电活动共同调节；无规则肌节 | Ca$^{2+}$—钙调蛋白激活 MLCK，使肌球蛋白调节轻链磷酸化 | 收缩慢而经济，可在很宽的长度范围产生并维持张力 |

“随意肌”和“不随意肌”可以描述常见的系统控制方式，却不能代替细胞机制。姿势和反射中的骨骼肌活动并不需要每次进入意识，心肌和平滑肌也会受到自主神经调制而不是由自主神经逐次决定每个横桥周期。

## 神经肌接头把运动神经冲动交给骨骼肌 { #neuromuscular-junction }

一条 $\alpha$ 运动神经元轴突可分支支配多条肌纤维，但一条成年骨骼肌纤维通常只在一个神经肌接头接受运动神经元输入。神经末梢动作电位开放电压门控 Ca$^{2+}$ 通道，Ca$^{2+}$ 内流触发含乙酰胆碱小泡融合。乙酰胆碱扩散越过突触间隙，结合终板褶皱顶部富集的成人肌型烟碱受体 N$_\mathrm{m}$；该非选择性阳离子通道在静息电位附近造成净内向电流，形成终板电位。终板电位沿膜被动扩布到褶皱深部和接头周围富集 Na$_\mathrm{V}$ 通道的膜区，达到再生条件后才产生肌纤维动作电位。[^neuromuscular-junction]

单个突触小泡偶尔自发融合，会产生幅度很小的微终板电位；一次神经冲动同步释放许多小泡，终板电位可近似看作许多量子事件的总和。正常接头释放的乙酰胆碱通常多于刚好达到阈值所需的量，受体密度和终板褶皱又把突触电流集中起来，因而具有传递安全系数。它不是靠连续神经冲动的时间总和才勉强触发动作电位。乙酰胆碱很快被基底膜中的乙酰胆碱酯酶水解，胆碱返回神经末梢再利用，故每次化学信号短暂而可重复。[^quantal-safety-factor]

接头的不同故障会汇聚成同一个电生理结果：终板电位变小，安全系数下降，部分神经冲动不再触发肌纤维动作电位。

| 故障位置 | 机制代表 | 对终板电位的直接影响 |
| --- | --- | --- |
| 突触前末梢 | Lambert–Eaton 肌无力综合征减少末梢 Ca$^{2+}$ 通道功能；肉毒神经毒素破坏小泡融合所需的 SNARE 蛋白 | 每次冲动释放的乙酰胆碱量子数减少 |
| 突触后膜 | 重症肌无力可针对 N$_\mathrm{m}$ 受体或维持受体聚集的 MuSK 等分子 | 对同量乙酰胆碱产生的终板电流减小 |
| 突触间隙 | 乙酰胆碱酯酶抑制使乙酰胆碱作用延长；过强、过久时可导致持续去极化和受体脱敏 | 适度抑制可提高传递，过度抑制反而破坏脉冲式信号 |

这张表用于定位传递环节，不是治疗表。新斯的明、毒扁豆碱和有机磷化合物作用于乙酰胆碱酯酶，不是“烟碱受体阻断剂”；非去极化型阻断剂与持续激动造成的去极化阻滞也不是同一种机制。具体抗体检测、中毒处置和用药需在疾病与临床情境中另行判断。[^neuromuscular-disorders]

## 肌节把纳米尺度位移累加为细胞力 { #sarcomere }

骨骼肌纤维内，许多肌原纤维沿长轴并列；每条肌原纤维又由从一个 Z 盘到下一个 Z 盘的肌节串联而成。细肌丝以肌动蛋白为骨架，从 Z 盘伸向肌节中央；粗肌丝由肌球蛋白 II 组成，以 M 线为中央支撑。肌联蛋白（titin）跨接粗肌丝与 Z 盘，既帮助粗肌丝居中，也随伸长贡献被动力。肌节串联使每个肌节很小的缩短相加为整条纤维的位移，肌原纤维并联则使各自的力相加。

### 滑丝改变重叠而不缩短肌丝 { #sliding-filaments }

收缩时，肌球蛋白头把细肌丝拉向 M 线，Z 盘彼此接近；粗、细肌丝本身的长度近似不变。横纹各区因此呈现可判读的几何变化。[^skeletal-contraction]

| 肌节区带 | 结构含义 | 主动缩短时的变化 |
| --- | --- | --- |
| A 带 | 粗肌丝全长所占区域，包括与细肌丝重叠部分 | 长度近似不变 |
| I 带 | 只有细肌丝、没有粗肌丝的区域，横跨 Z 盘两侧 | 随重叠增加而变窄 |
| H 带 | A 带中央只有粗肌丝、没有细肌丝的区域 | 变窄，充分缩短时可难以分辨 |
| M 线与 Z 盘 | 分别组织粗肌丝中央与肌节边界 | M 线仍居中央，相邻 Z 盘距离缩短 |

### Ca$^{2+}$ 打开薄丝，ATP 驱动横桥循环 { #cross-bridge-cycle }

静息横纹肌中，原肌球蛋白覆盖或限制肌动蛋白上的强结合位置。Ca$^{2+}$ 结合肌钙蛋白 C 后，肌钙蛋白复合物改变构象并移动原肌球蛋白，使肌球蛋白可以进入产力循环。这里的“开关”不是把所有位点同时完全打开：相邻调节单位和已经结合的横桥会产生协同性，力还取决于 Ca$^{2+}$ 瞬变的幅度、持续时间和肌丝重叠。

横桥循环可从强结合态开始理解：ATP 结合肌球蛋白使其从肌动蛋白解离；ATP 水解为 ADP 和 P$_i$，使杠杆臂进入预备构象；肌球蛋白再次弱结合肌动蛋白后，P$_i$ 释放促进强结合和动力冲程；ADP 随后释放，肌球蛋白又停在强结合态，等待下一分子 ATP。一个头的位移很小，大量头异步循环才能产生平滑、持续的宏观力。更详细的马达蛋白化学见[蛋白质功能](../biochem/protein_function.md)。[^cross-bridge]

ATP 不只是“提供动力冲程的能量”：它还负责横桥解离，SERCA 和 Na$^+$/K$^+$-ATPase 又分别恢复 Ca$^{2+}$ 与膜离子梯度。死亡后 ATP 合成停止、Ca$^{2+}$ 稳态崩溃，肌球蛋白无法正常从肌动蛋白解离，才会出现尸僵；这不是由 pH 升高而单纯加速 ATPase 所致。

## 横管与肌质网让整条纤维同步激活 { #skeletal-ecc }

肌纤维直径远大于离子在一次抽搐时间内可有效扩散的距离。质膜向内凹入形成横管，把动作电位带到每条肌原纤维附近；肌质网则包围肌原纤维，构成可快速释放和回收 Ca$^{2+}$ 的胞内储库。骨骼肌横管常与两侧终池构成三联体，使膜电位变化在细胞深部同时启动 Ca$^{2+}$ 信号。[^skeletal-ecc]

成人哺乳动物骨骼肌横管膜中的 CaV1.1 是 L 型 Ca$^{2+}$ 通道，也承担主要电压传感器功能。去极化改变 CaV1.1 构象，并通过紧密的别构／机械耦联开放相对的 RyR1；因此每次收缩的触发并不要求先有足量胞外 Ca$^{2+}$ 流入。RyR1 释放的 Ca$^{2+}$ 结合肌钙蛋白 C，横桥开始产力。动作电位结束后 RyR1 关闭，SERCA 消耗 ATP 把 Ca$^{2+}$ 泵回肌质网，胞质游离 Ca$^{2+}$ 下降，原肌球蛋白重新限制强结合，肌纤维舒张。

osm.bio《RyR-结构篇》把 RyR1／RyR2 的组织分布和骨骼肌／心肌触发差异并列呈现，本页采用了这一比较线索并以现代综述纠正机制：CaV1.1 与 RyR1 的接触不是连接两细胞胞质的“缝隙连接”，骨骼肌的构象耦联也不等同于心肌的钙诱导钙释放。[^osm-ryr]

## 肌肉输出由长度、负荷与时间共同决定 { #muscle-mechanics }

!!! note "收缩、短缩与力不是同义词"

    “收缩”指肌肉进入主动产力状态。肌肉可以在长度不变时增加力，也可以在外负荷超过主动能力时一边被拉长一边保持激活；是否短缩取决于肌肉产生的力与外界负荷怎样匹配。

### 长度—力关系与负荷 { #length-force-load }

等长收缩把肌肉—肌腱单位的外部长度近似固定，主要观察力随时间的变化；等张收缩则让肌肉在近似恒定的外负荷下改变长度。它们是有用的理想实验边界，真实运动通常同时发生长度和力的变化。前负荷通常在激活前设定初始长度，后负荷则是激活后必须克服或承受的外部负荷，二者不能简单归结为“一个只决定长度、一个只决定张力”。

在等长条件下，总力可分为主动与被动成分。主动长度—力曲线主要反映粗、细肌丝有效重叠：过短时肌丝相互挤压并干扰横桥，处在合适长度范围时可形成较多有效横桥，过长时重叠减少而主动能力下降。被动力则随拉长而上升，来自肌联蛋白、结缔组织和其他弹性结构。整块肌肉的曲线还受肌纤维羽状角、肌腱顺应性、肌节长度不均一和收缩史影响，不能把理想单肌节图当成任意关节角度下的直接读数。[^muscle-mechanics]

### 力—速度关系与机械功率 { #force-velocity-power }

肌肉克服较小负荷作向心性短缩时速度较快；负荷增加，短缩速度下降，到最大等长力附近时净速度为零。若外力继续增大，已激活的肌肉会发生离心性拉长，能够抵抗高于等长水平的力，但这一分支不服从向心侧的简单双曲线，也受到被动结构和收缩史影响。

向心输出的瞬时机械功率为

$$
P=Fv.
$$

接近零负荷时速度高而力低，接近最大等长力时力高而速度近零，所以功率通常在中等负荷与中等短缩速度处达到较高值。离心过程中若把短缩方向规定为正，$v<0$，肌肉吸收机械能；符号约定必须和“产生功”或“吸收功”的叙述一起给出。

### 单收缩、总和与强直 { #twitch-tetanus }

一次骨骼肌动作电位很短，随后的 Ca$^{2+}$ 瞬变和机械响应持续更久，形成单收缩。若第二个动作电位在 Ca$^{2+}$ 尚未完全回收、力尚未降至基线时到达，两次机械响应便发生时间总和。刺激频率继续升高，力可形成仍有波动的不完全强直，最终接近平滑的完全强直。这里相加的是胞质 Ca$^{2+}$ 和横桥群体产生的机械响应，不是同一膜区全或无动作电位的幅度。

一条运动神经元及其支配的全部肌纤维构成一个运动单位。神经系统通过两种手段调力：提高已募集运动单位的发放频率，以及募集更多运动单位。很多稳定任务中，低阈值、较小、耐疲劳的运动单位通常先募集，需求增大时再加入阈值更高、产生力更大的单位，这就是大小原则；快速、离心或高度任务特异的活动可出现偏离，去募集顺序也不必是募集过程的机械倒放。[^motor-units]

## ATP 周转、纤维表型与疲劳相互耦联 { #muscle-energetics }

肌肉的 ATP 储量只能支持很短时间，却不能因此把供能画成三条依次接棒、互不重叠的路线。从活动开始，磷酸肌酸缓冲、糖酵解与氧化磷酸化就共同工作；其相对贡献随强度、持续时间、氧和底物供应、线粒体容量及先前活动而变。磷酸肌酸通过肌酸激酶快速把高能磷酸基转给 ADP，缓冲 ATP/ADP 比值；肌糖原能够在肌纤维内快速供给糖酵解，却不能像肝糖原那样通过葡萄糖-6-磷酸酶直接输出游离葡萄糖。相关反应化学见[三羧酸循环与代谢整合](../biochem/tca_cycle.md)和[糖原代谢](../biochem/glycogen.md)。

同一块骨骼肌常含连续分布的纤维表型。慢肌球蛋白重链占优势、线粒体和毛细血管丰富的纤维，缩短速度较慢而耐受持续活动；快肌球蛋白重链占优势的纤维，通常能较快产生更高功率，但氧化能力、糖酵解能力和耐疲劳性仍有多个亚型。训练、失用、神经支配和激素环境可使代谢与收缩表型改变，所以“红肌／白肌”或 I／II 型只是多维表型的简写，不是两种永不改变的细胞。

疲劳是给定激活下产生力或功率的能力下降，可以发生在运动神经驱动、神经肌接头、肌膜兴奋、RyR1 释放、肌丝 Ca$^{2+}$ 敏感性、横桥及能量代谢等多个位置。无机磷酸、ADP、H$^+$、活性物质、离子梯度和底物可用性都会依活动模式改变；“乳酸堆积”不能解释全部疲劳，乳酸也可被氧化或作为碳流载体。生理性疲劳中 ATP 浓度通常被优先维持，若 ATP 真下降到横桥不能解离和离子泵不能工作，问题已接近细胞损伤而不只是正常疲劳。[^muscle-fatigue]

本页到此讨论肌纤维内的供能约束。运动中心肺反应、体温、底物跨器官分配和训练适应将在[运动与环境生理](exercise_environment.md)中整合。

## 平滑肌以肌球蛋白磷酸化调节张力 { #smooth-muscle }

平滑肌的粗、细肌丝斜向交织，肌动蛋白连接胞质致密体和膜上致密斑，中间丝把这些受力点连成网络。它没有规则肌节和横纹，却能把横桥力传到细胞膜与细胞外基质；这种网状排列也使细胞在较宽长度范围内保持功能。质膜小窝（caveolae）与膜下肌质网构成局部 Ca$^{2+}$ 信号微区，但不等同于横纹肌的规则横管—终池系统。

去极化、机械牵张和受体信号可使 Ca$^{2+}$ 经质膜通道进入，也可经 IP$_3$ 受体或 RyR 从肌质网释放。Ca$^{2+}$ 与钙调蛋白结合后激活肌球蛋白轻链激酶（MLCK），MLCK 磷酸化肌球蛋白调节轻链，提高肌球蛋白 ATPase 活性并允许有效横桥循环；肌球蛋白轻链磷酸酶（MLCP）使其去磷酸化，推动舒张。平滑肌没有肌钙蛋白，不能把钙调蛋白说成在薄丝上“替代肌钙蛋白”；它改变的是厚丝一侧的肌球蛋白活化状态。[^smooth-muscle]

收缩强度并不只由胞质 Ca$^{2+}$ 浓度决定。RhoA—ROCK、PKC—CPI-17 等信号可抑制 MLCP，使相同 Ca$^{2+}$ 下的轻链磷酸化和力增加，称 Ca$^{2+}$ 敏感化；相反，提高 MLCP 活性可使反应去敏感化。持续收缩时，部分已结合横桥在去磷酸化后以很慢的速率解离，这一“锁存桥”模型有助于解释某些平滑肌以较低 ATP 周转维持张力，但不同组织还存在细丝调节、细胞骨架重排等机制，不能把锁存态当成所有平滑肌的唯一解释。[^smooth-regulation]

所谓单单位与多单位平滑肌是一条生理谱系。单单位型常有较多缝隙连接，可由起搏、慢波或牵张使细胞群协同；多单位型的细胞间电耦联较少，神经支配更精细。许多平滑肌可在没有动作电位时由受体和第二信使改变张力，即使产生动作电位，其 Na$^+$、Ca$^{2+}$、K$^+$ 和 Cl$^-$ 电流组合也随器官而异。血管、气道、胃肠道、膀胱、子宫等具体调节应回到相应系统页面，而不是套用一种“平滑肌动作电位”。

## 心肌把一次电兴奋限制为一次搏动 { #cardiac-muscle }

心肌细胞有肌节，却比骨骼肌纤维短并彼此分支。闰盘中的黏着连接和桥粒承受机械力，缝隙连接则让局部电流跨细胞传播；两者共同使许多细胞在机械上连续、电学上协调。这里真正的缝隙连接位于相邻心肌细胞之间，与同一骨骼肌细胞内 CaV1.1—RyR1 的接触不是一回事。

工作心肌的横管通常与一侧肌质网形成二联体。动作电位开放 CaV1.2，少量胞外 Ca$^{2+}$ 进入局部间隙并触发 RyR2 发生钙诱导钙释放，许多局部 Ca$^{2+}$ 释放事件汇合为细胞级 Ca$^{2+}$ 瞬变。SERCA 将 Ca$^{2+}$ 泵回肌质网，Na$^+$/Ca$^{2+}$ 交换器承担重要的跨膜外排，其他通路贡献依物种、细胞状态与频率而变。与骨骼肌不同，胞外 Ca$^{2+}$ 内流是正常心肌每搏触发链的组成部分。[^cardiac-ecc]

心肌动作电位的平台期和长有效不应期与机械收缩时间重叠，使下一次再生兴奋不能在前一次收缩中途被任意叠加，因此心肌不能形成骨骼肌式强直。这一限制为舒张充盈保留时间。心肌还拥有较高线粒体密度并持续依赖氧化代谢；初始长度、Ca$^{2+}$ 瞬变和肌丝敏感性共同调节每搏力。工作细胞与起搏细胞波形、传导和心电图见[心脏电生理](blood/blood_heart_electrical.md)，长度依赖激活、压力—容积关系和 Frank–Starling 机制见[心脏的泵血功能](blood/blood_heart_pump.md)。

## 参考资料与延伸阅读 { #references }

- Siegel GJ, Agranoff BW, Albers RW, et al. [Synaptic Transmission](https://www.ncbi.nlm.nih.gov/books/NBK27911/). *Basic Neurochemistry*, 6th ed.
- Khalil B, Marwaha K, Bollu PC. [Physiology, Neuromuscular Junction](https://www.ncbi.nlm.nih.gov/books/NBK470413/). *StatPearls*.
- Pham S, Puckett Y. [Physiology, Skeletal Muscle Contraction](https://www.ncbi.nlm.nih.gov/books/NBK559006/). *StatPearls*.
- Shishmarev D. [Excitation-contraction coupling in skeletal muscle: recent progress and unanswered questions](https://pmc.ncbi.nlm.nih.gov/articles/PMC7040155/). *Biophys Rev*. 2020;12:143–153.
- Lieber RL, Ward SR. [Skeletal muscle design to meet functional demands](https://pmc.ncbi.nlm.nih.gov/articles/PMC3130443/). *Philos Trans R Soc Lond B Biol Sci*. 2011;366:1466–1476.
- Holt NC, Wakeling JM, Biewener AA. [The effect of fast and slow motor unit activation on whole-muscle mechanical performance: the size principle may not pose a mechanical paradox](https://pmc.ncbi.nlm.nih.gov/articles/PMC3996609/). *Proc Biol Sci*. 2014;281:20140002.
- Sundberg CW, Fitts RH. [Bioenergetic basis of skeletal muscle fatigue](https://pmc.ncbi.nlm.nih.gov/articles/PMC6656370/). *Curr Opin Physiol*. 2019;10:118–127.
- Hafen BB, Burns B. [Physiology, Smooth Muscle](https://www.ncbi.nlm.nih.gov/books/NBK526125/). *StatPearls*；Paul RJ. [Regulation of smooth muscle contraction/relaxation: paradigm shifts and quantifying arrows](https://pmc.ncbi.nlm.nih.gov/articles/PMC2742263/). *J Physiol*. 2009;587:3413–3414.
- Murphy RA, Rembold CM. [The latch-bridge hypothesis of smooth muscle contraction](https://pmc.ncbi.nlm.nih.gov/articles/PMC2278007/). *Can J Physiol Pharmacol*. 2005;83:857–864.
- Eisner DA, Caldwell JL, Kistamás K, Trafford AW. [Calcium and excitation-contraction coupling in the heart](https://pmc.ncbi.nlm.nih.gov/articles/PMC5497788/). *Circ Res*. 2017;121:181–195.
- Hall JE, Hall ME. [Guyton and Hall Textbook of Medical Physiology, 15th ed.](https://evolve.elsevier.com/cs/product/9780443111013?role=student). Elsevier, 2025.
- Boron WF, Boulpaep EL. [Medical Physiology, 3rd ed.](https://evolve.elsevier.com/cs/product/9781455743773?role=faculty). Elsevier, 2016.

[^muscle-textbooks]: 三类肌组织的共同机制、细胞结构和控制差异以 Guyton and Hall [*Textbook of Medical Physiology*, 15th ed.](https://evolve.elsevier.com/cs/product/9780443111013?role=student) 与 Boron and Boulpaep [*Medical Physiology*, 3rd ed.](https://evolve.elsevier.com/cs/product/9781455743773?role=faculty) 的骨骼肌、平滑肌和心肌章节为主线交叉核验。
[^neuromuscular-junction]: 神经末梢 Ca$^{2+}$ 依赖释放、成人肌型烟碱受体、终板褶皱和接头周围动作电位触发参见 NCBI Bookshelf [Physiology, Neuromuscular Junction](https://www.ncbi.nlm.nih.gov/books/NBK470413/)。
[^quantal-safety-factor]: 微终板电位、量子释放、终板电位和传递安全系数参见 [Synaptic Transmission](https://www.ncbi.nlm.nih.gov/books/NBK27911/)；安全系数依物种、肌肉和活动条件而变，本页不采用一个固定倍数。
[^neuromuscular-disorders]: 突触前释放、突触后受体／聚集装置与乙酰胆碱酯酶三个故障层次参见 [Physiology, Neuromuscular Junction](https://www.ncbi.nlm.nih.gov/books/NBK470413/)；表格只作机制定位，不提供诊断或治疗方案。
[^skeletal-contraction]: 肌节结构、滑丝时区带变化、肌钙蛋白调节和横桥循环参见 [Physiology, Skeletal Muscle Contraction](https://www.ncbi.nlm.nih.gov/books/NBK559006/)。
[^cross-bridge]: 横桥循环的力化学步骤以 [Physiology, Skeletal Muscle Contraction](https://www.ncbi.nlm.nih.gov/books/NBK559006/) 与本站[蛋白质功能](../biochem/protein_function.md)交叉核验；离心收缩和历史依赖等整肌现象不能由一个孤立横桥的刚性循环完全解释。
[^skeletal-ecc]: 横管、肌质网、CaV1.1—RyR1 构象耦联和 Ca$^{2+}$ 回收参见 Shishmarev 的综述 [Excitation-contraction coupling in skeletal muscle](https://pmc.ncbi.nlm.nih.gov/articles/PMC7040155/)。
[^osm-ryr]: RyR1／RyR2 比较线索参考并重组自 osm.bio《[RyR-结构篇](https://osm.bio/index.php?title=RyR-%E7%BB%93%E6%9E%84%E7%AF%87&oldid=15544)》（固定版本 oldid=15544；贡献者：Upupa lavandulae、5-HT；[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)）。本页依据骨骼肌与心肌兴奋—收缩耦联综述纠正“缝隙连接”、Ca$^{2+}$ 触发和钙波等表述。
[^muscle-mechanics]: 肌肉串联／并联结构、长度—力、力—速度、肌腱顺应性和整肌尺度边界参见 Lieber 与 Ward 的 [Skeletal muscle design to meet functional demands](https://pmc.ncbi.nlm.nih.gov/articles/PMC3130443/)。
[^motor-units]: 运动单位募集、频率编码、大小原则及任务依赖边界参见 [The effect of fast and slow motor unit activation on whole-muscle mechanical performance](https://pmc.ncbi.nlm.nih.gov/articles/PMC3996609/)。
[^muscle-fatigue]: 磷酸肌酸、糖酵解、氧化磷酸化的重叠供能，以及 P$_i$、H$^+$、Ca$^{2+}$ 调节与 ATP 保护的疲劳机制参见 [Bioenergetic basis of skeletal muscle fatigue](https://pmc.ncbi.nlm.nih.gov/articles/PMC6656370/)。
[^smooth-muscle]: 平滑肌致密体、Ca$^{2+}$ 来源、Ca$^{2+}$—钙调蛋白—MLCK 与 MLCP 主线参见 NCBI Bookshelf [Physiology, Smooth Muscle](https://www.ncbi.nlm.nih.gov/books/NBK526125/)。
[^smooth-regulation]: Ca$^{2+}$ 敏感化与 MLCP 调节参见 [Regulation of smooth muscle contraction/relaxation: paradigm shifts and quantifying arrows](https://pmc.ncbi.nlm.nih.gov/articles/PMC2742263/)；锁存桥作为模型而非唯一机制的边界参见 [The latch-bridge hypothesis of smooth muscle contraction](https://pmc.ncbi.nlm.nih.gov/articles/PMC2278007/)。
[^cardiac-ecc]: 心肌 CaV1.2—RyR2 钙诱导钙释放、SERCA 与 Na$^+$/Ca$^{2+}$ 交换参见 Eisner 等的综述 [Calcium and excitation-contraction coupling in the heart](https://pmc.ncbi.nlm.nih.gov/articles/PMC5497788/)。
