# 显微观察与标本制备

显微镜把样品与光或电子的相互作用转换成可观察、可记录的图像。图像由样品状态和成像系统共同形成：可见细节取决于样品怎样被固定、切薄、染色或标记，也取决于照明方式、物镜数值孔径、焦平面、探测器采样和后续处理。学习显微技术因此要沿着“制样—照明—成像—校准—记录—解释”整条链工作，才能判断图中的亮暗、颜色、边缘和颗粒分别对应什么结构。

本页从教学实验常见的复式光学显微镜出发，保留低倍定位、高倍观察、测微、临时装片、离析、压片、涂片和生物绘图的完整训练路径，再把相差、微分干涉、荧光、共焦和电子显微镜放入同一证据框架。具体仪器的机械限位、光源、清洁剂和操作方向必须遵守当前型号说明书；刀片、固定剂、染液和离析液的使用还须经过[实验安全、伦理与风险管理](safety_ethics.md#hazard-management)所述的风险评估。

## 样品平面与观察图像 { #image-formation }

手持放大镜以单一透镜形成放大的虚像，是单式显微装置的典型例子。现代体视显微镜常用于昆虫、器官表面和解剖操作，具有低倍、较大视野和较长工作距离，通常包含两条成像光路，结构上不同于单透镜放大镜。复式光学显微镜则由物镜和管镜／目镜等多组元件组成：物镜首先收集样品发出的或透过样品的光并形成中间像，目镜再把中间像呈现给眼睛；相机端口把相应像面采样为数字图像。有限筒长与无限远校正系统的具体光路不同，物镜、管镜和目镜需要在其设计系统内配套使用。[^objective-properties]

透射明场显微镜中，光源、集光镜、视场光阑、聚光器、样品和物镜共同形成照明与成像链。聚光器把具有一定角度范围的光送入样品，物镜收集经样品调制的光；视场光阑限定被照亮的范围，聚光器孔径光阑则改变照明锥角、工作数值孔径、对比度和景深。把聚光器升降或把孔径光阑开到最大仅仅为了“更亮”，会牺牲照明均匀性或对比度；照明强度应主要用光源控制或中性密度衰减调节。

Köhler 照明把光源像与样品像安排在两组不同的共轭平面，使样品获得均匀照明，同时允许视场光阑和孔径光阑分别控制照明范围与角度。具备相应部件的显微镜通常先聚焦样品，再缩小视场光阑，以聚光器高度把光阑边缘调清、居中后开到刚好越出视野；孔径光阑再依据物镜和所需对比度设置。具体旋钮、可调项目和次序随机型而变，没有这些部件的教学镜也不应强行套用同一流程。[^kohler]

## 放大、分辨与数值孔径 { #magnification-resolution }

放大倍数说明像相对于对象被放大多少，**分辨**则说明相邻细节能否被区分。继续提高目镜倍数或把数字图像放大，只会把已有衍射斑和像素铺得更大；没有新增空间信息的放大称为空放大。数字图像最终显示大小还会随屏幕、排版和缩放改变，因此科研图像应给出经校准的比例尺，而不能只写“物镜 40×”来代替尺度。[^image-scale]

物镜的数值孔径（numerical aperture，NA）为

\[
\mathrm{NA}=n\sin\alpha,
\]

其中 $n$ 是样品与物镜前透镜之间介质的折射率，$\alpha$ 是物镜能够接收的最大光锥半角。NA 同时影响集光能力、横向分辨和轴向景深。对衍射受限的常规光镜，横向分辨距离常依判据近似写成 $d\approx 0.61\lambda/\mathrm{NA}$ 或 $d\approx\lambda/(2\mathrm{NA})$；这些式子说明较短波长和较高 NA 有利于区分近邻点，却不是对任何照明、标本和处理算法都成立的固定实测值。聚光器孔径、像差、折射率失配、盖玻片厚度、信噪比和采样也会降低实际表现，不能用“物镜 NA 与聚光器 NA 的平均值”替代系统评估。[^numerical-aperture]

物镜筒上的 `40×/0.65` 通常依次表示标称放大倍数与数值孔径；还可能标出 `Oil`、`Water`、盖玻片厚度、校正等级、相差环和校正环等信息。工作距离是物镜在焦点处前透镜与盖玻片或样品表面之间的间隙，通常随 NA 和放大倍数上升而缩短。景深也通常随 NA 增大而变浅，所以高倍观察对切片厚度、盖玻片平整和细调焦更敏感。平场、色差和球差校正等级改善像场或不同波长的重合，但不应仅凭 `Plan`、`Fluor` 或 `Apo` 名称推断某一具体物镜适合所有样品。[^objective-properties]

## 低倍定位与高倍观察 { #observation-workflow }

开始前先确认显微镜类型、物镜标识、光路和移动部件，检查玻片是否破裂、盖玻片是否朝向物镜以及样品是否位于物镜工作距离内。便携式教学镜按说明书用双手支承镜臂和镜座搬动；大型倒置、共焦或电镜系统由专人移动。打开光源时先用较低强度，选择最低倍干式物镜，将样品固定在载物台并把目标置于光路中央。

调焦动作要根据仪器究竟移动载物台、物镜还是镜筒来判断。存在碰撞风险时，从侧面观察物镜与玻片的相对位置，再沿说明书规定方向接近安全起始位置；从目镜观察时，使物镜与玻片逐渐远离碰撞方向直至出现像。低倍下用粗调找到样品平面，再用细调取得清晰像并建立 Köhler 照明。“镜筒先降到距玻片 5 mm，再反向升起”适用于部分旧式机械结构，现代正置和倒置显微镜则应依各自说明书确定起始位置和调焦方向。

在低倍视野中找到并居中目标后再换高倍物镜。许多物镜具有近似齐焦设计，但更换物镜后仍可能需要少量细调；高 NA 物镜工作距离很短，除非型号说明明确允许，不应在观察高倍像时大幅使用粗调，也不能强扭已经到达限位的旋钮。双目镜应调好瞳距和屈光度并用双眼自然观察，“左眼窥镜、右眼作图”可以作为单目镜时代的训练姿势，却不应压过双目系统降低疲劳的正确设置。

油浸只用于标明相应浸液的物镜，并使用与物镜设计相符、状态合格的浸液。先在干式低倍下定位，再移开干式物镜、加入少量浸液并缓慢转入浸液物镜，避免气泡和油污染邻近干式物镜。现代浸液还包括水、甘油和硅油；历史上使用的香柏油会老化并改变性质，不能代替厂家规定的浸液。观察结束后及时按当前型号说明书清洁物镜和可能接触浸液的聚光器表面。[^immersion]

## 视野尺度与测微校准 { #micrometry }

目镜分划板或电子叠加刻度本身只有任意格数，必须用具有已知刻度的镜台测微尺建立当前光路下的长度关系。若镜台测微尺每格实际长度为 $l_s$，视野中 $N_s$ 格镜台刻度与 $N_o$ 格目镜刻度重合，则当前配置下

\[
l_o=\frac{N_s l_s}{N_o},
\]

其中 $l_o$ 是一格目镜刻度代表的样品长度。测得对象跨越 $N$ 格时，长度为 $Nl_o$。例如“全长 1 mm、分 100 格”的镜台尺每格为 0.01 mm，即 10 µm；实际使用应读取该测微尺刻字或证书，因为不同产品可以采用不同分度。[^micrometry]

物镜、变倍器、相机适配镜、分辨率设置或裁切方式改变后，标定关系可能改变，因此每一套实际配置要分别校准并保存记录。相机图像还需把像素尺寸映射到样品平面；比例尺必须由这项空间标定生成并与图像一同缩放，不能在导出后凭视觉估算。接近衍射极限的对象即使可被检测，也可能不能可靠地量出真实直径；采样太稀会产生混叠，采样更密则只改善数字表示，不会突破光学分辨极限。长度、面积和计数的校准状态应与[测量、溶液配制与仪器校准](safety_measurement.md#calibration-verification)中的溯源、验证和不确定度原则一致。

历史教学镜可在目镜光阑面安装指针以共同指认目标，现代系统通常使用厂家配套分划板、显示叠加或软件注释。自行拆开目镜并粘入头发会带入灰尘、改变像面并可能损坏涂层；只有可维护的旧式目镜和经批准的教学方案才应由受训人员安装专用指针。

## 对比形成方式与可见信息 { #contrast-modes }

透明样品常吸收很少，是否“看见”取决于仪器把相位、偏振或特异标记转换成强度差异的方式。每种模式都突出一部分性质，也产生自身伪影；比较图像时需要结合成像原理和研究对象，而非只按清晰程度排序。[^cell-microscopy]

| 成像方式 | 主要读出与适用对象 | 解释边界 |
| --- | --- | --- |
| 体视显微镜 | 较大样品表面、解剖方位和操作过程 | 景深和双目视差形成空间感，分辨小于复合高 NA 光镜；表面像不能说明内部组织 |
| 透射明场 | 薄、具有吸收或染色对比的装片与切片 | 亮暗由吸收、散射和照明共同形成，染色颜色不是组织原有颜色 |
| 相差 | 把透明样品的光程差转为强度差，适合部分活细胞 | 光晕与 shade-off 是模式固有伪影，灰度通常不与厚度或折射率简单线性对应 |
| 微分干涉对比（differential interference contrast，DIC） | 对光程梯度敏感，边缘和细胞内部层次清楚 | 浮雕样明暗是伪三维对比，不直接表示表面高低；方向随剪切轴和偏置改变 |
| 偏振 | 双折射、分子或晶体取向及有序结构 | 信号随样品方向、厚度和补偿设置改变，无信号不必然表示没有该成分 |
| 荧光 | 自发荧光、化学染料、抗体或遗传编码标记的空间分布 | 自发荧光、串色、非特异结合、漂白和光毒性会改变信号；共定位不证明直接相互作用 |
| 共焦及其他光学切片 | 抑制部分离焦光，获得焦层序列和三维重建 | 针孔、扫描、采样与折射率失配影响切片厚度；三维重建仍是测量模型，不是无失真的实体复制 |
| 电子显微镜 | 电子与样品相互作用形成超微结构像，分辨尺度小于常规光镜 | 常需真空、重金属染色、树脂切片或冷冻制样；常规电镜图不是活细胞天然颜色，也不自动给出分子身份 |

## 标本制备的共同逻辑 { #specimen-preparation }

制样的首要任务是让感兴趣结构进入可成像的厚度、方向和对比条件，同时尽量限制处理造成的改变。活体或新鲜临时装片保留动态和水合状态，却可能受到缺氧、蒸发、温度、渗透压和盖玻片压力影响；固定样品便于保存、切片和重复定位，但交联、沉淀、脱水与抽提会改变体积、膜和分子可及性。切片能减少重叠和离焦背景，也把三维结构变成一个有方向的二维截面。[^tissue-preparation]

组织学石蜡制片的一般链条包括取材与方位记录、固定、脱水、透明、浸透与包埋、切片、展片与载片、复水或相应预处理、染色和封片；树脂、冰冻切片、振动切片和电子显微制样使用不同介质与条件。每一步都要围绕目标结构、后续染色或标记及所需厚度选择。固定太慢会出现自溶，过度固定可能掩蔽抗原；脱水和透明可抽提出脂质并造成收缩；包埋方向错误会让目标层面永远不进入切片。更详细的组织固定、标记和成像质控由[组织学染色与细胞成像](../cell/histology_imaging.md)承接。

染色和荧光标记提供对比或分子身份，但信号同时取决于试剂可达性、亲和力、反应条件、样品厚度和背景。阴性对照、阳性对照、二抗对照、竞争或遗传对照应按问题选择。观察到某区域“染得深”可以描述当前方法的读出，若没有校准和线性范围，不能直接推成该物质的绝对含量。

## 装片、离析、压片与涂片 { #slide-preparation-methods }

经典玻片制作方法各自回答不同的形态问题。教学中保留这些方法的逐步练习，能把样品厚度、方向、细胞分散程度和机械作用与最终视野直接联系起来。

| 方法 | 典型对象与基本过程 | 主要保留与改变 |
| --- | --- | --- |
| 临时装片／整体装片 | 小型生物、叶表皮、昆虫翅足口器、口腔上皮等；在适当介质中放置材料并加盖玻片 | 保留整体或表面关系；厚度、折叠、介质和盖片压力限制可见层次 |
| 离析 | 植物木质化组织等经机械或化学方法削弱胞间连接，再轻柔分散细胞 | 便于观察单细胞完整形态，失去细胞在组织中的原位邻接和方向 |
| 压片 | 根尖、花药、精巢等组织经适当软化或染色后受控铺展 | 可把密集细胞压成较少重叠的层，压力过大、方向不均或盖片移动会拉伸、破裂并错置结构 |
| 涂片／推片 | 血液、细菌悬液、藻类、游离细胞或疏松组织均匀铺成薄层 | 便于计数和单细胞形态比较；涂层厚薄、推片角度、速度和干燥会造成分布与形态偏倚 |
| 切片 | 固定或新鲜组织经支持后沿已记录方向切成薄片 | 保存截面内的组织关系，但丢失切片间三维连续性并引入皱褶、刀痕和厚度差 |

制作水装片时，载玻片和盖玻片应洁净、与样品相容。先在液滴中安排材料方位，再使盖玻片一边接触液面并缓慢放下，常可减少空气被困；液体过多会使材料漂移，过少会造成干涸和折射率不均，可从盖片边缘加液或用吸液材料受控调节。气泡、原有细胞间隙和脂滴在显微镜下可能相似，不能只靠“从侧面滴水把气泡赶走”判断或修复。

离析液、水解液和固定离析液必须按材料和后续读出验证。铬酸—硝酸、浓盐酸—高浓度乙醇等传统配方具有强腐蚀性、氧化性或毒理风险；教学时可保留“选择性削弱组织连接以观察单细胞”的技术目的，具体试剂与条件由实验室风险评估确定。压片应在防护和承托条件下使用受控、均匀的工具或方法，减少玻璃破裂、飞溅和样品横向剪切。涂片则要预先定义需要的细胞密度与可接受区，并以预定取样规则代表整张玻片。

## 生物绘图与观察记录 { #biological-drawing }

生物绘图是一种主动观察训练。绘图者需要持续比较轮廓、比例、层次、相邻关系和变异，从而辨明预期结构与实际可见结构之间的差距。它与显微照片承担不同任务：照片保存仪器采样的视野，绘图明确观察者如何选择和解释结构；严谨记录可以同时保留二者。

绘图前先在低倍确定对象、截面方向和布局，再在高倍逐区核对。传统铅笔图以清楚、连续的单线表示边界，用大小一致的点及疏密变化表示需要记录的明暗，不用反复涂抹制造艺术性阴影。标注线应整齐、尽量不相交，文字写明结构名称；图题同时记录材料、部位、制片或染色方法、观察方向、日期和物镜。若把多个焦层或多个个体的特征合成一图，要明确标为解释性合成，不能让读者误以为它来自单一视野。

“近大远小”和立体明暗只在观察对象确有空间表面且绘图目的需要时使用，二维切片不能凭想象补成立体器官。旧式报告常只注明总放大倍数，现代记录还应通过测微校准加入比例尺或关键尺寸。绘图允许简化无关噪声，却不能删除与结论不一致的真实结构；对于计数、面积、灰度和形态统计，应回到原始图像和预先定义的取样规则，而不是在理想化绘图上测量。

## 伪影识别与质量控制 { #artifacts-quality-control }

伪影是由制样、光学、探测或处理产生，却可能被误认为样品结构的信号。识别伪影需要改变一个条件并观察图样是否随之改变，判断依据来自对照与条件变化，而非图样是否符合预期。

| 来源 | 常见表现 | 诊断与控制思路 |
| --- | --- | --- |
| 装片与切片 | 气泡、折叠、压碎、裂隙、刀痕、收缩和细胞流失 | 比较不同制片方向、厚度和固定条件；移动玻片、改变焦层并检查同批次重复标本 |
| 照明与光学 | 视野不均、暗角、灰尘、色边、球差、相差光晕和 DIC 伪浮雕 | 重建 Köhler 照明，检查盖玻片和浸液匹配；移动样品或转动可安全转动的外部部件，判断污点随哪一平面移动 |
| 荧光与活细胞 | 自发荧光、串色、漂白、光毒性、过表达聚集和焦平面漂移 | 使用单标对照、未标记对照、时间／剂量序列和环境控制；降低不必要曝光并记录漂移 |
| 数字采集与处理 | 饱和、背景截断、欠采样、压缩块、去卷积振铃和拼接接缝 | 查看直方图和原始数据，保留采集位深与像素标定；用模拟或标准样验证算法，不以滤镜制造“清晰结构” |

日常质量控制从标准化观察样和简单检查开始：照明是否均匀，目标在不同视野位置是否仍能聚焦，物镜切换后尺度和中心是否稳定，荧光通道有无明显串色，探测器是否出现饱和、固定图样或漂移。定量研究再依据用途加入空间标定、点扩散函数、照明平场、探测器线性和通道配准等检查。QUAREP-LiMi 将这些仪器与图像指标组织为持续的质量保证，而不是在图像异常后才做一次清洁。[^microscopy-quality]

清洁应先定位污物所在平面并从最温和的方法开始。外露灰尘可用合适吹球移除，指纹或浸液只用厂家认可的无尘材料和清洁液处理；液体不直接滴在镜片上，内部光学件和滤光块交由维护人员。油浸物镜在使用后及时清洁，避免干结和污染干式物镜。乙醚—乙醇混合液、二甲苯或某一种酒精都不是所有涂层、胶合剂、塑料和污染物的共同清洁剂，实际方案以型号说明与化学安全规则为准。[^microscope-cleaning]

## 图像数据、处理与证据边界 { #image-data-integrity }

数字显微图像中的每个像素都有位置和强度，因而属于原始数据。采集时要避免不可逆饱和、过低信号和不足采样，并保存包含元数据的原始格式。记录至少包括样品与制备批次、显微镜和物镜、放大倍数／NA／浸液、成像模式、滤光片或波长、相机与像素尺寸、曝光或激光功率、增益、焦层或 $z$ 步长，以及采用的平场、去卷积、投影和拼接步骤。[^image-reporting]

亮度、对比度或伪彩调整若用于比较，应对预先定义的整幅图或全部可比图像采用一致规则，并保留未处理数据和处理轨迹。选择性增强一个区域、克隆删除尘点或细胞、把不同视野无标识地拼成连续组织，都会改变证据。裁切可以突出区域，但须保留足以理解取样背景的信息；强度定量应尽量在原始或经过一致、已验证校正的数据上完成。图像中显示比例尺、颜色含义、投影方式和裁切边界，正文再说明如何从图像选取视野、分割对象和汇总到生物学重复。[^image-integrity]

一张清晰图像首先支持“在这套制样与成像条件下出现了这样的空间信号”。要进一步断言结构天然存在、两分子直接结合、信号强度等于含量或处理导致某种机制，还需要替代标记、活体观察、不同制样方法、扰动与救援、独立测量或时间证据。显微镜擅长把空间关系转成可检验的问题；可靠结论来自图像与其他证据相互约束，详见[细胞生物学的证据层级](../../cell/index.md#cell-biology-evidence)和后续[实验设计、记录与数据质量](design_data.md)。

## 参考资料与延伸阅读 { #references }

- Alberts B, Johnson A, Lewis J, et al. [Looking at the Structure of Cells in the Microscope](https://www.ncbi.nlm.nih.gov/books/NBK26880/). *Molecular Biology of the Cell*, 4th ed.
- Cooper GM. [Tools of Cell Biology](https://www.ncbi.nlm.nih.gov/books/NBK9941/). *The Cell: A Molecular Approach*, 2nd ed.
- Nikon Instruments. [Numerical Aperture](https://www.microscopyu.com/microscopy-basics/numerical-aperture)；[Properties of Microscope Objectives](https://www.microscopyu.com/microscopy-basics/properties-of-microscope-objectives)；[Microscope Alignment for Köhler Illumination](https://www.microscopyu.com/tutorials/kohler).
- Nikon Instruments. [Eyepiece Reticle Calibration](https://www.microscopyu.com/tutorials/reticlecalibration)；[Comparison of Phase Contrast and DIC Microscopy](https://www.microscopyu.com/tutorials/comparison-of-phase-contrast-and-dic-microscopy)；[Specimen Preparation and Imaging](https://www.microscopyu.com/techniques/confocal/specimen-preparation-and-imaging).
- Boehm U, et al. [QUAREP-LiMi: a community endeavor to advance quality assessment and reproducibility in light microscopy](https://doi.org/10.1038/s41592-021-01162-y). *Nature Methods*. 2021;18:1423–1426.
- Schmied C, et al. [Community-developed checklists for publishing images and image analyses](https://doi.org/10.1038/s41592-023-01987-9). *Nature Methods*. 2024;21:170–181.
- US Office of Research Integrity. [Guidelines for Best Practices in Image Processing](https://ori.hhs.gov/education/products/RIandImages/guidelines/list.html).
- ZEISS Microscopy. [Microscope Cleaning and Maintenance](https://www.zeiss.com/microscopy/us/l/service-support/cleaning-your-microscope.html).

[^objective-properties]: 物镜的中间像、数值孔径、工作距离、景深、视场数、校正等级和系统兼容性见 Nikon MicroscopyU [Properties of Microscope Objectives](https://www.microscopyu.com/microscopy-basics/properties-of-microscope-objectives)；正文不把某一厂商的具体参数表外推为所有显微镜。
[^kohler]: 光源像、孔径面、视场面与样品面的共轭关系以及视场／孔径光阑的不同作用见 Nikon MicroscopyU [Microscope Alignment for Köhler Illumination](https://www.microscopyu.com/tutorials/kohler)和[Conjugate Planes in Optical Microscopy](https://www.microscopyu.com/microscopy-basics/conjugate-planes-in-optical-microscopy)。
[^image-scale]: US Office of Research Integrity 的[显微图像尺度指南](https://ori.hhs.gov/education/products/RIandImages/guidelines/guideline_11.html)说明最终图像大小随出版与显示改变，比例尺比单写物镜倍数更能保持空间尺度；同页也区分检测亚分辨对象与真正分辨近邻结构。
[^numerical-aperture]: $\mathrm{NA}=n\sin\alpha$、数值孔径对集光和分辨的意义，以及干式与浸液物镜的差别见 Nikon MicroscopyU [Numerical Aperture](https://www.microscopyu.com/microscopy-basics/numerical-aperture)；近似分辨式只用于建立变量关系。
[^immersion]: 浸液折射率匹配、气泡和盖玻片条件会影响高 NA 物镜表现，见 Nikon 的[浸油说明](https://www.microscope.healthcare.nikon.com/guides/e100/en/page/oil.html)与[共焦样品准备说明](https://www.microscopyu.com/techniques/confocal/specimen-preparation-and-imaging)；清洁剂仍须按具体设备和当地安全规则选择。
[^micrometry]: 目镜分划板必须与镜台测微尺在当前物镜下重合标定，见 Nikon MicroscopyU [Eyepiece Reticle Calibration](https://www.microscopyu.com/tutorials/reticlecalibration)。正文中的格值换算由已知镜台尺度直接推导。
[^cell-microscopy]: 光镜、荧光、共焦与电镜分别怎样形成结构和定位证据，见 Alberts 等的[显微观察章节](https://www.ncbi.nlm.nih.gov/books/NBK26880/)与 Cooper 的[细胞生物学工具章节](https://www.ncbi.nlm.nih.gov/books/NBK9941/)；相差光晕、shade-off 与 DIC 伪浮雕的模式边界见 Nikon 的[相差与 DIC 比较](https://www.microscopyu.com/tutorials/comparison-of-phase-contrast-and-dic-microscopy)。
[^tissue-preparation]: 固定与包埋可能改变细胞结构，切片会丢失三维连续信息，见 Alberts 等的[显微观察章节](https://www.ncbi.nlm.nih.gov/books/NBK26880/)；固定后脱水、透明、浸透、包埋和切片的一般链条另见 Leica Biosystems [Science of Tissue Processing](https://www.leicabiosystems.com/en-ca/knowledge-pathway/science-of-tissue-processing/)。
[^microscopy-quality]: Boehm 等建立的 [QUAREP-LiMi](https://doi.org/10.1038/s41592-021-01162-y)把显微硬件校准、图像采集、管理和分析纳入共同质量保证框架；本页据此把日常观察与定量 QC 区分为不同层级。
[^microscope-cleaning]: ZEISS 的[显微镜清洁与维护指南](https://www.zeiss.com/microscopy/us/l/service-support/cleaning-your-microscope.html)强调先定位污染、使用合适材料与清洁液、及时移除浸油并把内部光学维护交给专业人员；具体厂商对涂层和材料的要求可能不同。
[^image-reporting]: Schmied 等的[显微图像与图像分析发表清单](https://doi.org/10.1038/s41592-023-01987-9)覆盖图像格式、标注、颜色、数据可得性和分析工作流报告；本页将其最低思路前移到采集记录阶段。
[^image-integrity]: US Office of Research Integrity 的[图像处理最佳实践](https://ori.hhs.gov/education/products/RIandImages/guidelines/list.html)要求把图像视为数据、保留原始文件、避免选择性局部操作，并在可比数据上统一处理；强度测量与尺度问题分别见其[强度测量](https://ori.hhs.gov/education/products/RIandImages/guidelines/guideline_9.html)和[图像尺度](https://ori.hhs.gov/education/products/RIandImages/guidelines/guideline_11.html)说明。
