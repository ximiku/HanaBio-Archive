# 血管生理

血管系统是可主动调节的分支管网，大动脉、小动脉、毛细血管、静脉和淋巴管分别承担搏动缓冲、阻力调节、交换、容量储存和组织液回流。理解这套系统需要同时追踪压力、流量、阻力、容积和跨壁交换。

## 血管壁结构与功能分段 { #vascular-segments }

除毛细血管和最小微静脉外，典型血管壁可分为内膜、中膜和外膜。内膜中的内皮既构成选择性屏障，也感受剪切力并释放舒张、收缩、抗栓和炎症相关信号；中膜的平滑肌与弹性成分决定口径和回弹；外膜以胶原、弹性纤维、神经和滋养血管支持较大的血管。三层结构的相对比例沿血管树变化，并对应不同的力学和调节任务。[^vascular-structure]

| 血管段 | 结构与力学特征 | 在循环中的主要作用 |
| --- | --- | --- |
| 主动脉及大弹性动脉 | 中膜富含弹性板，顺应性较高 | 接纳搏出量，储存部分弹性能，减弱压力与流量的搏动 |
| 中、小肌性动脉 | 平滑肌比例增加，可改变区域口径 | 把血液分配到各器官，传导压力波 |
| 小动脉与微动脉 | 管腔小，平滑肌张力可快速改变 | 构成主要可调阻力，控制下游压力和组织灌流 |
| 毛细血管 | 以内皮、基底膜及不同程度的周细胞支持为主 | 提供很大的总交换面积，完成气体、溶质和水的交换 |
| 微静脉 | 压力低；毛细血管后微静脉也是白细胞迁出的重要界面 | 汇集毛细血管血流，参与液体交换与炎症细胞交通 |
| 静脉 | 薄壁、大腔、高顺应性；许多肢体静脉有瓣膜 | 作为容量血管储存血量，并把血液送回心脏 |

这套分类是功能性的近似。同一条血管的性质会随器官、管径和状态改变；所谓“毛细血管前括约肌”也不是每个毛细血管入口都具有的一圈独立肌肉。皮肤等部位的动静脉吻合可绕过主要交换床，迅速改变散热血流，但它们不能代表一般组织灌流的常规路径。器官特异的毛细血管连续性、孔窗和窦状结构将在[器官循环](blood_organ.md)中比较。

## 容积流量的压差—阻力关系 { #pressure-flow-resistance }

某段血管的容积流量 $Q$ 由入口与出口的压力差而不是入口压力单独决定。在平均意义上可写成

$$
Q=\frac{\Delta P}{R}.
$$

这个关系与电路中的欧姆定律形式相似，却不意味着血管阻力恒定。平滑肌张力、跨壁压、血液黏度和血管募集都会改变 $R$；当静脉被外压压扁时，流量与压差的关系还会明显非线性。串联血管段的阻力相加，并联血管床的电导相加，因此器官血管床并联在主动脉与腔静脉之间：改变某一器官的小动脉阻力，首先改变该器官获得的流量，也会影响全身总外周阻力。[^hemodynamics]

稳态、不可压缩流动还满足连续性关系

$$
Q=\bar v A,
$$

其中 $\bar v$ 是截面平均流速，$A$ 是该层级全部并联血管的总横截面积。单根毛细血管虽细，毛细血管床的总横截面积却最大，因而平均流速最低；静脉逐级汇合后总横截面积减小，流速又会上升。流量、流速和血容量是三个不同量，不能由“这里血多”推出“这里流得快”。

### 泊肃叶模型与半径敏感性 { #poiseuille-limitations }

对刚性圆管内充分发展的牛顿流体层流，Hagen–Poiseuille 定律给出

$$
Q=\frac{\pi\,\Delta P\,r^4}{8\eta L},
\qquad
R=\frac{8\eta L}{\pi r^4}.
$$

它说明在其他条件不变时，半径的微小改变会强烈改变阻力，因而小动脉口径是快速调节组织灌流的有效杠杆。压力沿血管下降，正是机械能克服黏性阻力的结果；阻力集中的小动脉段通常出现最大的平均压力降。

人体血流只近似满足上述前提。血管可扩张，半径会随压力和肌张力改变；血液含可变形、可聚集的细胞，表观黏度依赖血细胞比容、剪切率和管径。在直径降到约数百微米以下时，红细胞趋向轴流并在近壁形成细胞稀少层，表观黏度随管径缩小而降低，即 Fåhræus–Lindqvist 效应；当管径接近红细胞尺度时，细胞必须强烈变形，阻力又可陡增。因而 $r^4$ 关系适合建立方向感，不能把它当作所有微血管的精确计算式。[^blood-rheology]

### 雷诺数与流态 { #flow-regimes }

层流中相邻流层大体平行，直管内速度通常由壁面向轴心增加；湍流则伴随不规则速度波动和额外能量损耗。两者的倾向可用雷诺数表示：

$$
Re=\frac{\rho\bar v D}{\eta}.
$$

较高流速、较大管径和较低黏度提高 $Re$，分叉、弯曲、狭窄及脉动加速也会促成流动不稳定。固定的“$Re>2000$ 必为湍流”来自特定刚性直管实验，并不是人体血管的普遍裁决线；心腔、近端大动脉或狭窄射流更容易出现复杂流动，而大部分正常血管中的平均流动仍以层流特征为主。听到杂音提示存在可产生振动的扰动流，但不能仅凭声音反推出唯一病因。[^flow-regime]

## 血管顺应性与压力—容积关系 { #vascular-compliance }

血管顺应性定义为一定工作点附近的容积变化与压力变化之比：

$$
C=\frac{\Delta V}{\Delta P}.
$$

可扩张性则常用单位初始容积的相对变化表示，即 $D=\Delta V/(V\Delta P)$。顺应性取决于血管壁材料、几何、平滑肌张力和起始压力；它不是“弹性”的同义词，也不是跨越全部压力范围的常数。血管壁具有黏弹性，容量骤增后压力可先升高、再因应力松弛而部分下降，这叫延迟顺应性，并不保证压力必定回到原值。

静脉在低压工作区通常比动脉具有高得多的顺应性，因此小幅静脉压变化就可伴随较大的容积改变。这里还要区分跨壁压 $P_{tm}=P_{in}-P_{out}$：薄壁静脉的腔内压若接近或低于周围组织压，管腔可由圆形变扁甚至发生局部塌陷，阻力随之突增。由此可见，中心静脉压、外周静脉压和静脉容积之间不存在一条处处线性的换算关系。[^vascular-compliance-source]

## 动脉平均流与压力波 { #arterial-pressure-pulse }

左心室射出的搏出量一部分立即流向外周，一部分暂存在扩张的大动脉中；舒张期弹性回缩继续推动血液前行。这个 Windkessel 作用解释了间歇射血为何能形成较连续的外周流量，但真实动脉树还存在有限速度的波传播、分叉处的阻抗变化和反射，不能只用一个弹性容器描述。

收缩压是一个心动周期中的动脉最高压，舒张压是最低压，脉压为两者之差。平均动脉压（MAP）是压力对整个周期的时间平均：

$$
MAP=\frac{1}{T}\int_0^T P(t)\,dt.
$$

在静息、规则且心率不快时，$MAP\approx DP+\tfrac{1}{3}(SP-DP)$ 是常用近似；心率和波形改变时，舒张期占比改变，$1/3$ 系数不再可靠。对稳态体循环，另有

$$
MAP-P_{RA}\approx CO\times SVR,
$$

其中 $P_{RA}$ 是右心房压，$SVR$ 是系统血管阻力。这是跨全身血管床的平均关系，不等于每一瞬间的压力波方程；忽略 $P_{RA}$ 也只在它远小于 MAP 时成立。搏出量、射血速度、动脉顺应性、外周流出和波反射共同塑造收缩压、舒张压与脉压；单向箭头只适用于特定受控条件。[^arterial-pressure]

压力脉搏是壁面变形与压力扰动的传播，脉搏波速度远高于平均血流速度，并随动脉壁变硬而加快；波形向外周传播时还会因反射和局部顺应性改变而变形。主动脉瓣关闭后的下降支由短暂逆流、瓣膜—血柱相互作用和波传播共同形成。[^arterial-waves]

直接置管可记录局部连续压力波形；袖带听诊法则在肱动脉受压和逐渐放气时，以 Korotkoff 音出现与消失估计收缩压和舒张压。袖带尺寸、手臂相对心脏的高度、测量前静息时间、心律和自动仪器算法都会影响读数；肱动脉与中央主动脉的波形还会因传播与反射而不同。这些条件须与测量结果一并解释。[^blood-pressure-measurement]

## 静脉容量、回流与循环工作点 { #venous-return }

静脉系统在低压下容纳循环中最大的一部分血量。其总容积可概念性地分为未牵张容积与牵张容积：前者在几乎不增加壁张力时填充血管，后者使血管壁受牵张并建立把血液推向右心的平均系统充盈压。增加血容量或静脉收缩可把一部分血量转为牵张容积、提高这一压力；静脉扩张则可在总血量不变时降低它。

在循环稳态，静脉回流量（VR）等于心输出量，而外周对右心的回流可写成

$$
VR=\frac{P_{ms}-P_{RA}}{R_{VR}},
$$

其中 $P_{ms}$ 是平均系统充盈压，$R_{VR}$ 是静脉回流途径的有效阻力。右心泵血能力改变会通过右心房压和循环工作点影响回流，却不是独立于压力梯度的“吸血力”；当右心房压降低到胸腔入口大静脉发生塌陷时，继续降低压力也不会让回流无限增加。这个血管侧关系与[心脏的泵血功能](blood_heart_pump.md#cardiac-vascular-working-point)中的心输出量曲线相交，才确定实际工作点。[^venous-return-source]

直立时，重力造成明显的静水压梯度，下肢静脉扩张和血液暂时淤积可减少中央血量。肢体静脉瓣把长血柱分段，节律性骨骼肌收缩挤压静脉并推动血液向心；持续强直收缩若同时压迫动脉流入，则不能简单视为更强的泵。自主呼吸时，吸气造成的胸腹压变化通常有利于体静脉回流，但效应取决于呼吸方式、右心功能和腹内压，正压通气时方向可不同。中心静脉压接近右心房压，是血容量、静脉张力、心泵能力、胸内压和瓣膜状态共同作用的结果，不能单独用来判定“缺液”或“心衰”。

## 微循环的灌流分配 { #microcirculation }

微循环通常包括小动脉、微动脉、毛细血管和微静脉。微动脉平滑肌改变入口阻力，终末微血管中的内皮、周细胞和局部信号再把流量匹配到组织代谢。不同器官的网络拓扑差异很大，不能把“迂回通路—直捷通路—动静脉短路”当作每个组织都具备的三条固定管道；更一般的分析方法是判断血流是否真正进入可交换毛细血管、局部红细胞通量是否均匀，以及出口微静脉压力是否抬高。[^microcirculation]

小动脉与毛细血管入口可发生间歇性舒缩，使同一时刻开放和高灌流的毛细血管集合不断改变。局部代谢物、肌源性反应、内皮信号和神经—体液输入共同参与，完整调控网络见[心血管活动调节](blood_regulation.md)。休克时即使全身平均动脉压得到部分恢复，微血管灌流仍可能高度异质；缺氧、炎症、凝血和屏障破坏的病理链条留在[休克与器官功能障碍](../pathophysiology/shock_organ_failure.md)。

## 毛细血管扩散与跨壁液流 { #capillary-exchange }

氧、二氧化碳和许多小溶质主要依靠浓度梯度扩散，通量受交换面积、扩散距离、通透性和血流更新速度限制；脂溶性分子可跨细胞膜，亲水溶质则依内皮连接、孔窗或转运路径通过。这里的扩散机制与[跨膜转运与渗透](../membrane_dynamics.md#simple-diffusion)相通，但不同器官的内皮屏障差异决定了实际通透性。

水的跨微血管流动常用修订后的 Starling 关系表示：

$$
J_v=K_f\left[(P_c-P_i)-\sigma(\pi_p-\pi_g)\right].
$$

$K_f$ 综合液压导度与可交换面积，$P_c-P_i$ 是毛细血管与组织间液的静水压差，$\sigma$ 是蛋白反射系数，$\pi_p$ 是血浆胶体渗透压，$\pi_g$ 是内皮糖萼下方低蛋白空间的胶体渗透压。内皮表面层使真正有效的胶体渗透压梯度主要跨越糖萼形成，而不是简单等于血浆与整块组织间液蛋白浓度之差。[^revised-starling]

!!! note "经典图式的适用边界"

    “动脉端滤出、静脉端全部回吸”便于初学时辨认四种压力，却不是多数连续型体循环毛细血管在稳态下的通则。稳态时常有沿程净滤出，滤液主要由淋巴系统返回循环；毛细血管压骤降后可以发生短暂回吸，肾小管周围毛细血管等特化血管床也有自己的压力与通透性条件。分析具体组织时，应使用局部屏障结构和实际 Starling 力，而不是套用一张固定箭头图。

组织间隙中的水被胶原、糖胺聚糖和其他细胞外基质组织成凝胶样连续相，小分子仍能扩散，液体也可在压力梯度下移动；“针头抽不出正常组织液”不能推成组织液绝不流动。毛细血管压升高、屏障通透性增加、有效胶体渗透压梯度减弱或淋巴回流受阻都可促进组织液积聚，但水肿还受肾性钠水潴留和组织顺应性影响，详见[水与电解质代谢紊乱](../pathophysiology/water_electrolyte.md)。

## 组织液的淋巴回流 { #lymphatic-return }

初始淋巴管以盲端起于组织，单层内皮细胞边缘相互重叠，并由锚定丝与周围基质连接。组织间隙压力升高时，重叠边缘可形成有利于液体、蛋白质和颗粒进入的微阀样通路；进入后称为淋巴。较大的集合淋巴管具有平滑肌和成串的腔内瓣膜，相邻瓣膜之间的淋巴管段可节律性收缩，骨骼肌活动、呼吸运动和邻近动脉搏动也提供外在推动力。瓣膜保证净流向中央，但淋巴泵的流量仍受前负荷、出口压力、管壁收缩性和瓣膜完整性限制。[^lymphatic-pump]

胸导管汇集身体大部的淋巴并回流至左静脉角附近；右淋巴导管主要汇集右侧头颈、右上肢和右侧胸部的淋巴，并回流至右静脉角附近。淋巴回流把滤出的水和血浆蛋白重新带回血液，也是肠道长链脂质运输、抗原与免疫细胞进入淋巴结的重要路线。这里保留流体平衡和运输接口，淋巴器官、抗原汇聚及淋巴细胞再循环见[免疫细胞、组织与迁移](../../immunology/immune_cells_tissues.md)。[^lymphatic-transport]

## 参考资料与延伸阅读 { #references }

- NCBI Bookshelf，*Physiology, Cardiovascular Hemodynamics*：压力、流量、阻力和顺应性的基础关系。
- Secomb，*Hemodynamics*：血液流变学、脉动流及微血管尺度效应。
- Levick 与 Michel，*Microvascular fluid exchange and the revised Starling principle*：修订 Starling 原理与内皮糖萼模型。
- Persichini 等，*Venous return and mean systemic filling pressure: physiology and clinical applications*：平均系统充盈压和静脉回流曲线。
- Thorup 等，*The transport function of the human lymphatic system—A systematic review*：人体淋巴运输的测量证据。

[^vascular-structure]: 血管壁层次、跨壁压、顺应性及动脉—静脉功能差异见 NCBI Bookshelf [Physiology, Vascular](https://www.ncbi.nlm.nih.gov/books/NBK542252/)。毛细血管和微静脉的结构会随器官而变，不能机械套用三层血管壁。
[^hemodynamics]: 压差—阻力关系、串并联阻力和血管顺应性见 NCBI Bookshelf [Physiology, Cardiovascular Hemodynamics](https://www.ncbi.nlm.nih.gov/books/NBK470310/)；公式是平均集总模型，正文另行说明其非线性边界。
[^blood-rheology]: 血液的剪切率依赖、微血管内近壁无细胞层、Fåhræus 与 Fåhræus–Lindqvist 效应及极细毛细血管中的反转见 Secomb [Hemodynamics](https://pmc.ncbi.nlm.nih.gov/articles/PMC4958049/)和 Popel、Johnson [Microcirculation and Hemorheology](https://pmc.ncbi.nlm.nih.gov/articles/PMC3000688/)。
[^flow-regime]: 雷诺数、脉动血流与血管几何对流态转变的限制见 Secomb [Hemodynamics](https://pmc.ncbi.nlm.nih.gov/articles/PMC4958049/)；固定临界值不能脱离管道入口、扰动和脉动条件使用。
[^vascular-compliance-source]: 顺应性、跨壁压以及静脉在低压区的高容量特性见 NCBI Bookshelf [Physiology, Vascular](https://www.ncbi.nlm.nih.gov/books/NBK542252/)和 Persichini 等的静脉回流综述 [PubMed 35610620](https://pubmed.ncbi.nlm.nih.gov/35610620/)。
[^arterial-pressure]: 收缩压、舒张压、脉压、MAP 与系统血管阻力的基础关系见 NCBI Bookshelf [Physiology, Cardiovascular](https://www.ncbi.nlm.nih.gov/books/NBK493197/)；$DP+PP/3$ 只作规则静息波形的近似。
[^arterial-waves]: 大动脉顺应性、前向波与反射波、脉搏波速度及压力依赖性见 Chirinos 等 [Large Artery Stiffness in Health and Disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC6719727/)。脉压不是动脉硬度的纯指标，还受搏出量、心率和射血波形影响。
[^blood-pressure-measurement]: 袖带听诊、Korotkoff 音及血压测量的物理基础见 NCBI Bookshelf [Blood Pressure](https://www.ncbi.nlm.nih.gov/books/NBK268/)；本页不以单次肱动脉数值代替完整压力波形。
[^venous-return-source]: $P_{ms}$、右心房压、回流阻力、牵张／未牵张容积及大静脉塌陷的关系见 Persichini 等 [Venous return and mean systemic filling pressure](https://pubmed.ncbi.nlm.nih.gov/35610620/)和 NCBI Bookshelf [Venous Return](https://www.ncbi.nlm.nih.gov/books/NBK54476/)。
[^microcirculation]: 器官微血管网络的异质性、局部灌流控制以及小分子扩散与液体交换的分工见 Jacob 等 [Regulation of blood flow and volume exchange across the microcirculation](https://pmc.ncbi.nlm.nih.gov/articles/PMC5073467/)。
[^revised-starling]: 内皮表面层、糖萼下胶体渗透压、稳态滤过与短暂回吸的实验和理论依据见 Levick、Michel [Microvascular fluid exchange and the revised Starling principle](https://pubmed.ncbi.nlm.nih.gov/20200043/)及 Levick [Revision of the Starling principle](https://pmc.ncbi.nlm.nih.gov/articles/PMC1665155/)。
[^lymphatic-pump]: 集合淋巴管内在收缩、瓣膜、前负荷和后负荷对泵送的影响见 Scallan 等 [Lymphatic pumping: mechanics, mechanisms and malfunction](https://pubmed.ncbi.nlm.nih.gov/27219461/)。
[^lymphatic-transport]: 人体淋巴流量、压力、速度和回流功能的证据汇总见 Thorup 等 [The transport function of the human lymphatic system](https://pmc.ncbi.nlm.nih.gov/articles/PMC10238785/)；免疫机制在本站免疫学页面展开。
