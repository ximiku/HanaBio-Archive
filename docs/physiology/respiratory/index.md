# 呼吸生理总论与肺通气

呼吸把外界环境中的 O$_2$ 接入内环境，又把细胞代谢产生的 CO$_2$ 送回环境。完成这条通量链，需要肺与外界之间的整体气体流动、肺泡气与肺毛细血管血之间的扩散、血液中的气体运输、组织交换以及线粒体利用 O$_2$ 等连续环节。严格说来，**肺通气**只指空气在外界与肺泡之间的体积流动；肺泡膜两侧的分子交换属于[气体交换与运输](gas_exchange.md)，节律生成、化学感受和环境适应则由[呼吸调节与环境适应](regulation.md)承接。

肺本身没有主动扩张空气腔的肌肉。呼吸肌改变胸廓容积，胸膜界面把这一运动传给肺，肺泡压随之改变，气体才沿压力梯度通过具有阻力的气道。肺通气因而不是简单的“吸入与呼出”，而是呼吸泵、肺与胸壁的弹性、肺泡液—气界面以及气道流动共同形成的力学过程。

## 呼吸泵建立气流的压力梯度 { #respiratory-pump }

若把气道开口处压力记为 $P_{ao}$、肺泡压记为 $P_A$，整体气流可近似写成

$$
\dot V = \frac{P_{ao}-P_A}{R_{aw}},
$$

其中 $R_{aw}$ 是气道阻力。吸气时，胸廓扩大使肺泡容积增加，$P_A$ 暂时低于 $P_{ao}$，空气流入；气流停止时两端压力重新相等。呼气时过程反向。流量和压力都随呼吸周期连续变化，因此“吸气末压力等于大气压”只描述气流短暂停止的时刻，并不表示整个吸气期没有压差。

安静吸气主要由膈肌收缩完成，膈顶下降并扩大胸腔纵向尺寸；胸廓肌群同时改变肋骨位置。安静呼气通常不需要主动呼气肌收缩，而由吸气肌松弛后肺与胸壁储存的弹性能推动。通气需求上升、气道变窄或呼吸系统负荷增大时，斜角肌、胸锁乳突肌等可参与吸气，腹肌和肋间肌群可主动降低胸腔容积。上气道扩张肌还要随吸气同步活动，以免咽部负压使易塌陷段变窄。[^respiratory-muscles]

腹壁与胸廓位移的相对大小随姿势、年龄、妊娠、腹腔压力和呼吸负荷变化，不能把“胸式”或“腹式”呼吸固定分配给某类人。呼吸困难也不是一种单一力学现象：通气负荷、化学驱动、呼吸肌能力和感觉处理都可能参与；具体疾病判读不由本页的通气公式直接推出。

自然呼吸主要以降低胸膜压、扩大肺容积来吸气；正压通气则从气道开口提高压力，把气体推入肺。两者都能建立 $P_{ao}-P_A$ 梯度，却对胸内压、静脉回流和肺区域受力产生不同影响。这里只用它们说明压力路径的差异，不把人工通气简化为一套固定操作。

## 胸膜耦联连接胸廓与肺 { #pleural-coupling }

脏层胸膜覆盖肺表面，壁层胸膜衬于胸壁内面；两层之间仅有薄液膜，既允许低摩擦滑动，又通过液体内聚与压力关系维持力学耦联。肺泡压与胸膜压之差称跨肺压：

$$
P_L=P_A-P_{pl}.
$$

$P_L$ 是维持肺扩张的压力差。只有在气道开放、无气流且把大气压取作零参考时，$P_A=P_{ao}=0$，才可写成 $P_L=-P_{pl}$；这个静态特例不能替代一般定义。胸膜压还随重力位置、呼吸相位和局部胸壁运动而异，食管压只是临床和实验中估计平均胸膜压的替代信号。

在安静呼气末、呼吸肌放松且气道开放时，肺向内回缩与胸壁向外回弹大致平衡，系统停留在功能余气量。吸气肌使胸膜压降低，跨肺压增大，肺容积随之上升；用力呼气时胸膜压则可变为正值。空气进入胸膜腔会削弱或切断胸壁向肺传递的压力差，使患侧肺朝自身低容积状态回缩、胸壁向外回弹，这就是气胸的力学基础。病因与处置属于病理生理和临床边界，不能从这一静态模型直接外推。[^respiratory-system-mechanics]

## 弹性与阻力共同决定呼吸功 { #mechanical-loads }

呼吸肌产生的压力一部分用于克服肺与胸壁的弹性负荷，一部分用于推动气体通过气道并克服组织黏滞，另有很小部分用于加速气体和组织。低频安静呼吸时惯性贡献通常很小；呼吸变快、气道变窄或潮气量显著增加时，阻力功与弹性功的相对权重会改变。因此，呼吸“费力”既可能来自需要撑开较硬的系统，也可能来自流过狭窄气道所需的更大压差。

### 顺应性描述压力—容积曲线的局部斜率 { #compliance }

肺顺应性可在给定工作区间写为 $C_L=\Delta V/\Delta P_L$，弹性或弹性率（elastance）是其倒数。顺应性不是某个肺的恒定标签：它随肺容积、吸气或呼气路径、是否存在气流、测量时间和组织状态改变。用功能余气量或另一参考容积归一化所得的比顺应性，有助于区分“肺更大”与“单位肺容积更易扩张”，但仍依赖测量条件。

肺和胸壁串联承担同一容积变化，其总顺应性近似满足

$$
\frac{1}{C_{rs}}=\frac{1}{C_L}+\frac{1}{C_w},
$$

其中 $C_{rs}$、$C_L$ 和 $C_w$ 分别表示呼吸系统、肺和胸壁顺应性。在低肺容积，胸壁多倾向向外回弹；高容积时胸壁也转为向内回缩。功能余气量是两者在当时姿势和肌张力下的平衡点，而不是固定等于肺总量某一比例的几何常数。[^pulmonary-compliance]

充气与放气的静态压力—容积路径通常不重合，这种滞后来自表面膜的动态重排、肺单位募集与去募集以及组织黏弹性。把离体肺改用盐水充填可移除液—气界面并显著减小滞后，说明表面力贡献重要；剩余差异也提醒我们，滞后不能全部归结为一个表面张力数值。[^pressure-volume-hysteresis]

### 肺表面活性物质调节液—气界面 { #surfactant }

肺泡Ⅱ型上皮细胞在板层小体中储存并分泌肺表面活性物质。它不是单一的二棕榈酰磷脂酰胆碱（DPPC）膜，而是以磷脂为主、同时含特异蛋白和其他脂质的动态混合物。DPPC 是重要的饱和磷脂组分；PG 与带电脂质、疏水性 SP-B／SP-C 共同帮助脂质快速铺展和重排，SP-A／SP-D 还参与界面稳态与先天防御。[^surfactant-homeostasis]

呼气时表面积缩小，界面膜被压缩并可达到很低的表面张力；吸气时膜重新扩展，张力上升但仍低于纯水界面。这个随面积改变的性质一方面降低撑开肺所需的压力，另一方面在低容积时保护肺泡和末端气道的开放。若用球形薄壁结构的 Laplace 近似，$P=2T/r$ 表明半径变小时必须同步降低张力，才能避免所需扩张压过度升高。但真实肺泡形状不规则、彼此共享隔并受肺实质牵拉，不能据此把肺描述为彼此孤立、较小肺泡必然排空到较大肺泡的一串气球。[^surfactant-biophysics]

表面活性物质减少或铺展障碍会降低顺应性、增加呼吸功，并促进低容积肺单位关闭。未成熟新生儿的呼吸窘迫综合征是这一界面系统失效的重要例子；产前激素调节、外源表面活性物质和具体通气策略属于医疗处置，不在此由机制段落给出方案。由[脂质生物合成](../../biochem/lipid_synthesis.md)转来的 DPPC 线索至此完成生理承接：合成一种磷脂并不等于已经形成具有正常动态功能的肺泡表面膜。

## 气道阻力随口径、肺容积与流态变化 { #airway-resistance }

气道阻力可按 $R_{aw}=\Delta P/\dot V$ 定义，但真实气道是分支、可变形且流态不均匀的网络。半径减小时阻力迅速上升；流速、气体黏度和密度以及分叉处的涡流也会改变压降。单条细支气管很窄，众多外周气道并联后的总横截面积却很大，所以健康肺的主要阻力不简单等同于最细的一段气道。

肺容积升高时，肺实质的径向牵引和跨壁压通常增大，气道口径变宽、阻力降低；低容积和用力呼气时则更易变窄。平滑肌张力叠加在这套机械背景上。迷走胆碱能通路是人类气道平滑肌重要的直接神经性缩窄控制；人类气道平滑肌的交感神经直接支配较稀疏，循环肾上腺素等可通过 $\beta_2$ 受体促进舒张。组胺、白三烯、前列腺素、NO 和局部上皮信号的效应依受体、浓度与炎症背景而定，不能把每种介质列成无条件的“收缩／舒张表”。[^airway-control]

## 肺容积与容量界定通气的工作区间 { #lung-volumes }

四个不能再相加分解的肺容积与四个由它们组合的肺容量构成共同语言。它们描述测量动作和肺所处状态，不代表所有人共享同一毫升数；年龄、身高、生物学性别、族群、体位、技术和参考方程都会改变预测范围。

| 名称 | 符号 | 定义或组成 | 生理读法 |
| --- | --- | --- | --- |
| 潮气量 | $V_T$ | 一次安静呼吸吸入或呼出的体积 | 呼吸泵每周期实际搬运的总体积，不等于到达交换区的体积 |
| 吸气储备量 | IRV | 安静吸气末还能尽力吸入的体积 | 当前潮气呼吸之上的吸气余量 |
| 呼气储备量 | ERV | 安静呼气末还能尽力呼出的体积 | 受呼气肌、气道关闭和起始肺容积共同限制 |
| 余气量 | RV | 最大呼气末仍留在肺内的体积 | 由小气道关闭、肺回缩和胸壁力学共同形成，不能靠肺量计直接呼出 |
| 深吸气量 | IC | $V_T+\mathrm{IRV}$ | 从安静呼气末吸至最大吸气位的容量 |
| 功能余气量 | FRC | $\mathrm{ERV}+\mathrm{RV}$ | 安静呼气末的气体储库，可缓冲每次呼吸造成的肺泡气组成波动 |
| 肺活量 | VC | $\mathrm{IRV}+V_T+\mathrm{ERV}$ | 最大吸气位与最大呼气位之间可移动的体积；可慢呼或用力测量 |
| 肺总量 | TLC | $\mathrm{VC}+\mathrm{RV}$ | 最大吸气位的肺内总气体量 |

常规肺量计记录进出气体的体积变化，可测 $V_T$、IRV、ERV 和 VC，却不能直接测到包含 RV 的 RV、FRC 与 TLC。后者需要气体稀释、氮洗出或体积描记等方法；气体稀释主要接触能与气道连通的肺区，体积描记则可把被困气体计入胸内气体容积。选择何种方法会影响阻塞或气体潴留时的结果。[^lung-volume-measurement]

## 分钟通气与肺泡通气并不等价 { #alveolar-ventilation }

每分钟进入或离开气道的总体积是分钟通气量，$\dot V_E=V_Tf$。其中一部分停留在传导气道，称解剖无效腔；已经进入肺泡却因缺少相应灌流而没有参与有效交换的部分称肺泡无效腔。两者构成生理无效腔。于是肺泡通气量可近似写成

$$
\dot V_A=(V_T-V_D)f.
$$

$V_D$ 会随体型、姿势、肺容积、灌流和外接装置改变，不是每个人固定的 150 mL；肺泡无效腔尤其取决于局部通气—灌流关系。它与分流等气体交换问题将在下一页展开。[^physiological-dead-space]

!!! note "相同分钟通气量可以产生不同肺泡通气量"

    若仅作算例并假定 $V_D=150\ \mathrm{mL}$，$V_T=500\ \mathrm{mL}$、$f=12\ \mathrm{min^{-1}}$ 时，$\dot V_E=6.0\ \mathrm{L/min}$，而 $\dot V_A=4.2\ \mathrm{L/min}$。若改为 $V_T=250\ \mathrm{mL}$、$f=24\ \mathrm{min^{-1}}$，分钟通气仍是 $6.0\ \mathrm{L/min}$，肺泡通气却降为 $2.4\ \mathrm{L/min}$。因此浅而快的呼吸即使维持总体通气，也常让更多通气耗在无效腔，不能笼统说成“有利于肺通气”。

## 用力呼气暴露动态气道压缩 { #forced-expiration }

用力呼气时，呼气肌提高胸膜压。肺泡内压力可近似写为 $P_A=P_{pl}+P_{el}$，其中 $P_{el}$ 是当时肺容积产生的弹性回缩压；气体从肺泡向口端流动，气道内压沿程因阻力不断下降。某处气道内压与胸膜压相等，称等压点。等压点至口端的气道内压低于周围胸膜压，跨壁压转为负值，气道受到动态压缩。

继续增加呼气用力会同时提高胸膜压和肺泡压，却也加强等压点下游的压缩。超过一定努力后，呼气流量的一部分因此变得努力非依赖，此时流量更受肺弹性回缩、等压点上游阻力和肺容积限制。随着呼气进行，肺容积与弹性回缩下降，等压点可向更外周、支撑更弱的气道移动，最大流量随之降低。肺气肿等导致回缩压降低的状态会提前放大这一机制，但疾病诊断仍需完整检查，而不是只看一条力学示意。[^equal-pressure-point]

### 肺功能检查区分测量结果与诊断模式 { #spirometry-interpretation }

用力肺活量（FVC）是最大吸气后尽快、尽完全呼出的总体积；第一秒用力呼气量（FEV$_1$）及 FEV$_1$/FVC 描述呼气早期排空，流量—容积曲线则把呼气流量与肺容积位置联系起来。结果可靠的前提是设备校准、动作可接受且重复，解释时还要与适当参考方程、正常下限或 z 分数比较。固定的“第一秒必为 83%”无法适用于不同年龄与人群。

低于正常下限的 FEV$_1$/FVC 支持气流受限，但不能单独命名病因；FVC 降低而比值正常并不能确诊限制性通气障碍，限制模式需要 TLC 降低来确认。支气管舒张或激发试验是在规范条件下比较干预前后气流的专门检查，也不能由“气道反应性”四个字直接等同于哮喘。最大自主通气量和通气储备同样高度依赖努力、呼吸肌能力与气道阻力，不存在适合所有个体的固定合格百分比。[^spirometry-standard][^pulmonary-function-interpretation]

## 参考资料与延伸阅读 { #references }

- Patel N, Chong K, Baydur A. [Methods and Applications in Respiratory Physiology: Respiratory Mechanics, Drive and Muscle Function in Neuromuscular and Chest Wall Disorders](https://pmc.ncbi.nlm.nih.gov/articles/PMC9237333/). *Frontiers in Physiology*. 2022;13:838414.
- Carvalho AR, Zin WA. [Respiratory system dynamical mechanical properties: modeling in time and frequency domain](https://pmc.ncbi.nlm.nih.gov/articles/PMC5418399/). *Biophysical Reviews*. 2011;3:71.
- Suki B, et al. [Lung Parenchymal Mechanics](https://pmc.ncbi.nlm.nih.gov/articles/PMC3929318/). *Comprehensive Physiology*. 2011;1:1317–1351.
- Edwards Z, Annamaraju P. [Physiology, Pulmonary Compliance](https://www.ncbi.nlm.nih.gov/books/NBK554517/). *StatPearls*. Updated 2023.
- Whitsett JA, Wert SE, Weaver TE. [Alveolar Surfactant Homeostasis and the Pathogenesis of Pulmonary Disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC4127631/). *Annual Review of Medicine*. 2015;66:105–119.
- Hall SB, Zuo YY. [The biophysical function of pulmonary surfactant](https://pmc.ncbi.nlm.nih.gov/articles/PMC11213971/). *Biophysical Journal*. 2024;123:1519–1530.
- Van Scott MR, et al. [Airway Anatomy, Physiology, and Inflammation](https://pmc.ncbi.nlm.nih.gov/articles/PMC7122617/). Springer, 2013.
- Ntima NO, Lumb AB. [Physiology and conduct of pulmonary function tests](https://pmc.ncbi.nlm.nih.gov/articles/PMC7808018/). *BJA Education*. 2019;19:198–204.
- Pippalapalli J, Lumb AB. [The respiratory system and acid–base disorders](https://pmc.ncbi.nlm.nih.gov/articles/PMC10201398/). *BJA Education*. 2023;23:221–228.
- Graham BL, et al. [Standardization of Spirometry 2019 Update](https://pmc.ncbi.nlm.nih.gov/articles/PMC6794117/). *American Journal of Respiratory and Critical Care Medicine*. 2019;200:e70–e88.
- Stanojevic S, et al. [ERS/ATS technical standard on interpretive strategies for routine lung function tests](https://pubmed.ncbi.nlm.nih.gov/34949706/). *European Respiratory Journal*. 2022;60:2101499.
- Grillo LJF, et al. [Physiotherapy for large airway collapse: an ABC approach](https://pmc.ncbi.nlm.nih.gov/articles/PMC8864626/). *ERJ Open Research*. 2022;8:00510-2021.

[^respiratory-muscles]: 安静和负荷呼吸时膈肌、肋间肌、辅助肌及上气道扩张肌的协作，参见 Patel 等的[呼吸力学与呼吸肌综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9237333/)。
[^respiratory-system-mechanics]: 胸膜压、跨肺压、肺—胸壁回缩与功能余气量的力学关系，参见 Carvalho 与 Zin 的[呼吸系统动态力学综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5418399/)。
[^pulmonary-compliance]: 顺应性的容积依赖、静态／动态测量与肺—胸壁串联关系，参见 NCBI Bookshelf 的[肺顺应性章节](https://www.ncbi.nlm.nih.gov/books/NBK554517/)及 Carvalho 与 Zin 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5418399/)。
[^pressure-volume-hysteresis]: 液—气界面、肺单位募集和组织黏弹性对压力—容积滞后的贡献，参见 Suki 等的[肺实质力学综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3929318/)。
[^surfactant-homeostasis]: 肺泡Ⅱ型细胞、板层小体、磷脂及 SP-A 至 SP-D 的组成和稳态，参见 Whitsett 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4127631/)。
[^surfactant-biophysics]: 表面膜压缩、极低张力和 Laplace 模型的适用边界，参见 Hobi 等的[生物物理综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC11213971/)。
[^airway-control]: 人类气道感觉与自主神经通路、胆碱能缩窄及较稀疏的直接交感支配，参见 Van Scott 等的[气道解剖与生理综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7122617/)。
[^lung-volume-measurement]: 肺容积定义、肺量计、气体稀释和体积描记的测量边界，参见 Ntima 与 Lumb 的[肺功能检查综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7808018/)。
[^physiological-dead-space]: 解剖与肺泡无效腔、体位和体型等影响因素，参见 Pippalapalli 与 Lumb 的[呼吸系统综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC10201398/)。
[^equal-pressure-point]: 用力呼气时等压点、动态压缩、肺容积和弹性回缩的关系，参见 Grillo 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8864626/)。
[^spirometry-standard]: FVC、FEV$_1$ 的可接受性、重复性和报告要求，参见 ATS/ERS 的[2019 肺量计标准](https://pmc.ncbi.nlm.nih.gov/articles/PMC6794117/)。
[^pulmonary-function-interpretation]: 气流受限、限制模式、正常下限与 z 分数的解释边界，参见 ERS/ATS 的[2022 常规肺功能解释标准](https://pubmed.ncbi.nlm.nih.gov/34949706/)。
