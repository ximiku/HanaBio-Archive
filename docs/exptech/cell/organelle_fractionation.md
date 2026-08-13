# 细胞器分级、纯化与鉴定

细胞器分级把完整细胞中的空间区室转成一组可测量的离心级分。它先以受控破碎释放细胞内容物，再利用颗粒大小、形状、密度和介质黏度造成的沉降差异进行富集，最后以形态、分子标志和功能测定判断所得组分。一次低速或高速离心产生“核富集沉淀”“线粒体富集沉淀”或“微粒体组分”，名称描述富集对象，纯度仍需实测。

这条方法史也是细胞生物学的重要学习路径。Claude、de Duve 等把组织匀浆依次分级，并测量各级分的酶活分布，由此把显微形态与生化功能接在一起；溶酶体和过氧化物酶体的发现正说明，细胞器身份来自多个级分中的共分布、潜伏活性和后续形态证据，而不只来自一管沉淀。[^de-duve-history] 现代免疫印迹、定量质谱和亲和捕获提高了选择性，仍需面对破碎、泄漏、共沉降和回收损失。

线粒体差速离心、叶绿体蔗糖阶梯和细胞核蔗糖垫等经典训练展示如何把分离流程发展为可复核的纯化与鉴定实验。一般蛋白质的细胞破碎、澄清、膜蛋白处理和色谱纯化见[分离、层析与蛋白质制备](../biochem_molecular/separation_protein.md#extraction-clarification)；Janus Green、Giemsa 与细胞器成像的空间证据见[组织学染色与细胞成像](histology_imaging.md#cytohistochemistry)。

## 从研究问题定义目标组分 { #fractionation-objective }

分级方案由下游问题决定。测线粒体呼吸需要快速获得代谢活跃、膜完整的组分，可以接受少量非线粒体颗粒；做线粒体蛋白质组则更看重交叉污染和样品谱系，往往需要梯度或亲和纯化；分析叶绿体蛋白输入要保留完整双层包膜，提取叶绿体 DNA 则对代谢活性要求较低。所谓“高纯度”只有结合用途、目标标志、排除标志和功能状态才有含义。

起始材料决定可实现的分离。肝脏、肌肉、培养细胞、幼叶和成熟叶在细胞外基质、细胞器丰度、淀粉或脂质含量及破碎难度上不同；同一转速—时间表不能跨材料照搬。处理、疾病、发育阶段和取材时间也可能改变细胞器大小、密度与接触关系，因此对照组和处理组应以同一批缓冲液、同类转子和一致时钟平行操作，并保留独立生物重复。

分级前先写出物料图：起始匀浆如何分成沉淀与上清，每次重悬、洗涤、合并和取样后还剩多少体积，哪些份额用于标志物、形态和功能测定。所有级分都应保留到初步质量结果返回；过早丢弃上清会使低回收无法追溯，也可能把真正分布广泛的目标误写成“不存在”。

## 温和破碎与细胞器完整性 { #homogenization-integrity }

理想匀浆在打开质膜或细胞壁的同时尽量保持目标细胞器封闭。动物组织常用剪碎后玻璃—聚四氟乙烯匀浆、Dounce 匀浆或受控机械剪切；培养细胞可结合低渗预处理和温和机械破碎；植物叶片还要穿过细胞壁并处理纤维、叶脉和淀粉。破碎不足会让目标留在未破碎细胞与低速沉淀中，破碎过强则把细胞器打成膜片，使腔内蛋白泄漏并改变后续沉降。

匀浆介质通常以蔗糖、甘露醇或山梨醇维持渗透环境，以适当缓冲组分控制 pH，并按目标加入螯合剂、蛋白酶／磷酸酶抑制剂或脂肪酸结合蛋白。不同配方针对不同终点：乙二胺四乙酸（ethylenediaminetetraacetic acid，EDTA）或乙二醇双(2-氨基乙基醚)四乙酸（ethylene glycol-bis(2-aminoethylether)-N,N,N′,N′-tetraacetic acid，EGTA）会影响依赖二价离子的复合物，牛血清白蛋白会带入蛋白背景，蔗糖浓度改变密度与渗透压，去污剂会溶解膜。后续要测离子、代谢物、金属酶、蛋白质组或膜电位时，应从终点反推允许的添加剂。

低温和缩短时钟通常能减慢蛋白水解、脂质降解和代谢耗竭，所以经典细胞器制备多在 0–4 ℃进行；这不是所有对象的无条件最优温度。低温本身可改变膜相态、细胞骨架和某些复合物，功能测定还需按经验证条件恢复到测量温度。每一步记录样品实际温度和离体时间，比只写“全程冰上”更可复核。

破碎程度应立即检查。相差或明场可估计完整细胞、游离细胞核和大碎片，目标酶或标志蛋白在低速沉淀与上清中的分配可判断释放是否充分；腔内酶在加与不加去污剂条件下的活性差异可反映膜封闭造成的潜伏性。观察到“颗粒很多”只说明材料被分散，不能证明颗粒身份或膜完整。

## 相对离心力、转子与沉降路径 { #rcf-rotor-sedimentation }

每分钟转数（revolutions per minute，rpm）描述转子转得多快，相对离心力（relative centrifugal force，RCF）还取决于颗粒到旋转轴的半径。半径以厘米计时，常用换算为：

$$
\mathrm{RCF}=1.118\times10^{-5}\,r\,(\mathrm{rpm})^2.
$$

同一 rpm 在不同半径的转子中产生不同的 $\times g$，所以只写“500 r”或“8,000 r”无法复现实验。记录至少包括 $\times g$、使用的最小／平均／最大半径定义、时间、温度、转子型号与固定角或水平转子、管型、装液量、加速和制动设置。IUPAC 对离心半径及相关量作了统一定义；超速离心在转子间迁移条件时，还可用转子 $k$ 因子比较沉降路径和清除效率。[^centrifugation-units]

颗粒能否沉降由粒径、形状、颗粒与介质的密度差、介质黏度、离心场和路径长度共同决定。较大的颗粒通常沉得快，但一个致密小颗粒可能追上较大而低密度的颗粒；膜片的形状和重新封闭程度也会改变沉降。温度通过黏度和样品状态影响结果，时间与 RCF 也不能在所有范围内简单互换。

固定角转子让颗粒沿斜向路径撞向管壁并滑到外侧沉淀，适合快速沉降；水平转子在旋转时把管展开，区带沿管轴分布，便于分辨和收集梯度。突然制动会扰乱未固定的区带，过满、配平不当、超出管和转子额定值则同时损害分离和设备安全。具体操作须服从[实验安全、伦理与风险管理](../foundations/safety_ethics.md#hazard-management)及设备许可。

## 差速离心的分级逻辑 { #differential-centrifugation }

差速离心从同一匀浆连续提高离心力和时间。低速先富集未破碎细胞、细胞核、结缔组织和大碎片；随后中速沉淀线粒体，并常同时带下溶酶体、过氧化物酶体和较大的膜片；更高速度得到质膜、内质网和高尔基体碎片形成的膜泡以及其他小颗粒，最终超速上清富含可溶性细胞质成分。约 $1{,}000\times g$、$20{,}000\times g$、$80{,}000\times g$ 和 $150{,}000\times g$ 可用于示意沉降层次，实际边界随材料和转子改变。

每一步离心都在前一步上清中继续，所得沉淀包含“在当前条件下足够快地沉降”的全部颗粒。低速沉淀会夹带液相和小颗粒，较轻组分也可因聚集、吸附或与细胞骨架相连而提前下沉；较大的目标颗粒若未被释放，则会停在最初沉淀。将沉淀温和重悬、用同一介质再洗一次，常能降低夹带污染，但也会带来目标损失和机械损伤。

“微粒体”是这一操作产生的组分名称。内质网、质膜和高尔基体等膜在匀浆时断裂并重新封闭成小膜泡，经高速度沉淀后构成不同来源的微粒体；它们是离体重组的膜泡群，而非活细胞中预先存在的细胞器类别。粗微粒体可再按表面核糖体、浮力密度、标志蛋白或亲和性质细分，肝微粒体用于药物代谢研究时还要验证内质网富集、其他膜污染和批间回收。

## 密度梯度的区带与平衡 { #density-gradients }

梯度离心把分离空间从“管底沉淀”扩展为连续或阶梯密度介质中的多个区带。速率区带离心把较窄样品层铺在梯度顶部，主要按沉降速度分开；实验必须在最快颗粒到达管底前结束，样品过载会使区带展宽或对流。等密度离心让颗粒移动到其浮力密度与介质相等的位置，达到平衡后位置主要由密度决定，而不再由起始层位决定。

蔗糖阶梯直观而廉价，但高浓度蔗糖改变渗透压和黏度；Percoll 的胶体硅颗粒、碘克沙醇等介质可在某些应用中提供更适合完整细胞器的密度—渗透条件。介质会影响功能测定、光度和质谱，收集后常需稀释、洗涤或换液。选择介质、梯度范围和离心终点，要覆盖目标与主要污染物的密度，同时避免目标穿过梯度沉淀。

阶梯界面出现折光差或有色区带，只是物理分层的线索。收集时应记录从顶部还是底部、每个馏分体积和界面位置，并实测密度或折射率；宽泛合并“看起来像目标”的带会牺牲分辨率。各馏分而非单一目标带都进行标志检测，才能看到相邻细胞器的重叠和真正分离程度。

## 线粒体的经典分离路径 { #mitochondria-workflow }

一套经典流程先把匀浆转入离心管，用少量缓冲液洗回匀浆器内壁的材料，在 $1{,}300\times g$ 离心 10 min，保留冰浴上清；再以起始体积约一半的匀浆缓冲液重悬低速沉淀，重复 $1{,}300\times g$ 10 min，把上清并入前一份，随后再作一次同条件澄清。合并上清经 $17{,}000\times g$ 15 min 得到线粒体富集沉淀，重悬后再以同条件洗涤一次。“释放—低速回收—合并上清—中速沉淀—洗涤”构成操作主线，实际 RCF、时间、重悬体积和次数则依组织、转子与用途优化。

低速沉淀的回洗可找回夹在大碎片中的线粒体，提高产量；反复操作也会延长时钟、破坏膜并带入核碎片。$17{,}000\times g$ 沉淀通常还含溶酶体、过氧化物酶体、内质网膜和细胞骨架，因此应称为线粒体富集组分。需要更高纯度时，可在这一粗组分上增加蔗糖、Percoll 或碘克沙醇梯度，也可按已验证表面标志进行亲和捕获。Frezza 等针对培养细胞、肝和肌肉分别优化了功能线粒体流程，说明材料特异性本身就是方法的一部分。[^mitochondria-isolation]

Janus Green 经典观察用 10 g/L 染液处理未干涂片约 20 min，水洗三次后及时在有氧条件下观察。染料颜色受氧化还原状态、供氧、浓度和颗粒状态影响，可提示富含氧化性颗粒，线粒体身份还需分子标志确认。分子鉴定可组合外膜 TOMM20／VDAC、内膜 COX IV 和基质柠檬酸合酶或 HSP60，并同时检测核纤层、内质网 calnexin、溶酶体 LAMP1、过氧化物酶体 catalase 和细胞质 LDH 等排除标志；苹果酸脱氢酶作为标志时还须区分线粒体与细胞质同工酶。

功能完整性按用途检验。呼吸实验要给出底物、ADP、抑制剂和蛋白量，比较耦联呼吸与非磷酸化漏呼吸；外加细胞色素 c 引起的呼吸增加可提示外膜受损，膜电位探针则需要解偶联剂和染料负载对照。活性与纯度是两个质量维度，均需独立检测。

## 叶绿体的阶梯纯化 { #chloroplast-workflow }

一套教学流程从 2–3 g 洗净并去叶柄、主脉的叶片开始，剪碎后加入约 10 mL 预冷至近 0 ℃的匀浆介质，在冰上研磨并经双层纱布过滤。滤液置 2 mL 管以“500 r、10 min”澄清，取上清铺到 1.5 mL 管中的蔗糖阶梯：先加 500 g/L 蔗糖 0.4 mL，再沿管壁缓慢覆盖 150 g/L 蔗糖 0.4 mL，保持可见界面；上样约 0.4 mL 后以“8,000 r、20 min”离心，从梯度区带取一滴制片镜检。

“去粗组织—温和研磨—过滤—低速澄清—蔗糖阶梯—区带收集”构成经典学习链；两个“r”没有转子半径，无法换算 RCF，转子类型、制动、叶片种类和区带位置也需在实际标准操作规程中补齐。叶绿体与线粒体、过氧化物酶体和破碎类囊体在沉降性质上重叠，绿色只说明叶绿素存在。现代完整叶绿体流程通常先差速富集，再用经材料验证的 Percoll 等梯度把完整与破裂叶绿体分开，并在收集后温和洗去梯度介质。[^chloroplast-isolation]

叶绿体鉴定应同时覆盖包膜、类囊体和基质，例如 TOC75、LHCII 与 Rubisco 大亚基，并检测线粒体、过氧化物酶体和细胞质标志。完整性可结合相差形态、外源蛋白输入能力、腔内酶潜伏性或经校准的光合放氧测定；不同试验检验的是包膜、代谢或光系统的不同层面。连续强光、粗暴吹打、渗透压不合和残余梯度介质都可能让“看起来完整”的叶绿体失去功能。

## 细胞核、微粒体与其他区室 { #nuclei-other-organelles }

一套细胞核流程以浓蔗糖和等体积裂解缓冲液形成界面，让裂解液沿管壁缓慢覆盖以减少混合，在 4 ℃、$23{,}000\times g$ 离心 30 min；移除上层裂解液和蔗糖后重悬沉淀，再以裂解缓冲液作 $1{,}500\times g$ 5 min 洗涤，弃上清并把核沉淀重悬于约 1 mL 缓冲液。操作记录必须分别写明弃去上清和保留沉淀，以保持物料逻辑清楚。

核组分可涂片，以甲醇—冰醋酸固定约 15 min，干燥后用 Giemsa 染约 10 min，冲洗干燥并观察紫红色核形态。这个经典步骤检验核是否可见、是否严重破碎，却不能证明细胞质和膜污染已除去。组分可再检测 lamin B 或 histone H3，并检查 tubulin、GAPDH、线粒体和质膜标志；核外膜与内质网连续，核周膜和内质网蛋白的共分离有时是真实连接而非单纯操作失误。培养细胞的快速核—胞质分离可用温和去污剂和短时剪切，但蛋白扩散、核质穿梭和细胞类型差异仍需验证。[^nuclei-isolation]

溶酶体、过氧化物酶体和小膜泡与线粒体粗组分常有显著重叠。溶酶体可用 LAMP1、cathepsin D 与酸性水解酶组合，过氧化物酶体可用 ABCD3／PMP70 和 catalase；酸性磷酸酶、catalase 或葡萄糖-6-磷酸酶在特定材料中是经典标志酶，但其组织表达、同工酶和其他区室活性必须核对。质膜的 Na$^+$/K$^+$-ATPase 或 5′-核苷酸酶、内质网的 calnexin／PDI／Sec61、高尔基体的 GM130 或糖基转移酶同样需要根据物种、细胞类型和膜朝向选择，而非组成固定“万能面板”。

## 标志物、纯度与物料平衡 { #markers-purity-recovery }

一个阳性标志说明目标成分富集，一个阴性标志说明某类已知污染是否降低；二者都不能覆盖全部杂质。可靠鉴定至少组合目标细胞器的两个不同结构层级或功能标志，并为最可能共沉降的区室设置排除标志。抗体本身要在当前物种和样品中验证，酶活要处于线性范围，质谱肽段要区分同工蛋白；标志蛋白发生多区室定位、膜接触或条件性转位时，应如实解释。

标志物应在起始匀浆和全部主要级分中测量。若 $A_i$ 是校正体积与稀释后的某标志物总量，第 $i$ 个级分的分布比例可写为：

$$
p_i=\frac{A_i}{\sum_j A_j}\times100\%.
$$

目标级分相对于起始匀浆的回收率为 $A_{\text{target}}/A_0$；单位总蛋白中的标志活性或标志量相对于匀浆的倍数表示富集。回收率、富集倍数和交叉污染要一起报告：只提高富集倍数可能是大量丢失目标后的结果，只提高回收率则可能把杂质一并收进来。总和偏离 100% 可来自取样、黏壁、未纳入级分、失活、基质效应或定量误差，不应暗中归一化掩盖物料缺口。

Andreyev 等用多个蛋白组成的标志物集合估计每个亚细胞组分的构成，说明“标志面板”比单一标志更能识别混合级分。[^marker-ensembles] 形态、免疫印迹、酶活和质谱属于不同证据层：电镜能看见膜结构但取样有限，免疫印迹依赖抗体，酶活依赖功能状态，质谱灵敏却会放大低水平污染。结论强度取决于这些证据是否在同一批父子样品上相互支持。

## 亲和捕获与连续分布图谱 { #affinity-spatial-proteomics }

密度重叠难以完全解决时，可利用细胞器表面蛋白或遗传编码标签作免疫亲和捕获。LysoIP 等方法能在较短时间内富集带有特定表面标签的溶酶体，适合检测快速变化的腔内代谢物；它仍受标签表达、细胞器亚群选择、洗涤条件和非特异吸附影响，不能把“拉下来的颗粒”视为整个溶酶体群体的无偏样本。[^lysoip] 同样的原则适用于线粒体、过氧化物酶体和内体免疫捕获。

另一条现代路线不追求单管绝对纯化，而是把连续差速或梯度馏分全部定量。已知标志蛋白在多个级分中形成分布指纹，未知蛋白可按与哪组标志共同迁移来推断区室；对照与处理的完整分布改变还能提示转位。动态细胞器图谱以重复分级和定量质谱实现这种分析，同时明确核、胞质和膜结合蛋白的多池分布及破碎污染仍需单独建模。[^organellar-maps]

亲和捕获、空间蛋白质组和成像是经典分级的补充。亲和法提高选择性但依赖标签，连续图谱保留混合信息但依赖统计分类，显微成像保留单细胞空间却不直接给出可用于功能实验的制备物。把它们与传统差速／梯度、标志酶和功能测定结合，才能在“在哪里”“是否完整”和“能否工作”之间建立证据链。

## 故障定位与结果表述 { #troubleshooting-reporting }

目标回收率低时，先检查是否残留于完整细胞和低速沉淀，再检查目标是否进入后续上清、是否在洗涤中流失、是否黏附管壁或因失活而“测不见”。纯度低时，区分过度破碎形成的膜碎片、梯度过载或制动扰乱、区带收集过宽、重悬夹带，以及真实细胞器接触或双重定位。功能低而标志物正常，常提示时间、温度、渗透压、机械剪切、重复离心或残留介质损害了完整性。

每批记录起始材料、质量或细胞数、处理状态、缓冲液批次和实测 pH／渗透条件；破碎设备、次数与能量；每步父子样编号、体积、RCF、转子、时间、温度、加速与制动；沉淀和上清的保留去向；梯度介质、密度范围、上样量、区带与馏分边界；标志物原始数据、总量、富集、回收率、形态和功能结果。质量标准应在看结果前设定，并按[实验设计、质量控制与数据记录](../foundations/design_data.md#controls-quality-samples)保存偏离和重做原因。

结果表述保持在证据范围内。可以写“$17{,}000\times g$ 沉淀中线粒体内膜和基质标志富集，同时仍检出少量内质网标志”“Percoll 下层带的完整叶绿体标志和蛋白输入能力较高”，或“目标蛋白的分布峰与溶酶体标志重合”；只有在排除相邻区室、核对回收并有正交证据后，才进一步写“定位于某细胞器”或“处理诱导转位”。

## 参考资料与延伸阅读 { #references }

- Lauritzen M. [Quantities and units for centrifugation in the clinical laboratory (IUPAC Recommendations 1994)](https://publications.iupac.org/pac/66/4/0897/index.html). *Pure and Applied Chemistry*. 1994;66:897–907. https://doi.org/10.1351/pac199466040897.
- de Duve C. [Exploring Cells with a Centrifuge](https://www.nobelprize.org/prizes/medicine/1974/duve/lecture/). Nobel Lecture, 1974.
- Frezza C, Cipolat S, Scorrano L. [Organelle isolation: functional mitochondria from mouse liver, muscle and cultured fibroblasts](https://pubmed.ncbi.nlm.nih.gov/17406588/). *Nature Protocols*. 2007;2:287–295. https://doi.org/10.1038/nprot.2006.478.
- Seigneurin-Berny D, Salvi D, Joyard J, Rolland N. [Purification of intact chloroplasts from Arabidopsis and spinach leaves by isopycnic centrifugation](https://pubmed.ncbi.nlm.nih.gov/18819091/). *Current Protocols in Cell Biology*. 2008;Chapter 3:Unit 3.30. https://doi.org/10.1002/0471143030.cb0330s40.
- Nabbi A, Riabowol K. [Rapid Isolation of Nuclei from Cells In Vitro](https://pubmed.ncbi.nlm.nih.gov/26240403/). *Cold Spring Harbor Protocols*. 2015;2015:769–772. https://doi.org/10.1101/pdb.prot083733.
- Andreyev AY, et al. [Application of Proteomic Marker Ensembles to Subcellular Organelle Identification](https://pmc.ncbi.nlm.nih.gov/articles/PMC2830848/). *Molecular & Cellular Proteomics*. 2010;9:388–402. https://doi.org/10.1074/mcp.M900432-MCP200.
- Abu-Remaileh M, et al. [Lysosomal metabolomics reveals V-ATPase- and mTOR-dependent regulation of amino acid efflux from lysosomes](https://pmc.ncbi.nlm.nih.gov/articles/PMC5704967/). *Science*. 2017;358:807–813. https://doi.org/10.1126/science.aan6298.
- Itzhak DN, Tyanova S, Cox J, Borner GHH. [Global, quantitative and dynamic mapping of protein subcellular localization](https://elifesciences.org/articles/16950). *eLife*. 2016;5:e16950. https://doi.org/10.7554/eLife.16950.

[^de-duve-history]: de Duve 的 1974 年诺贝尔讲座 [Exploring Cells with a Centrifuge](https://www.nobelprize.org/prizes/medicine/1974/duve/lecture/)回顾了以分级分布和酶学证据探索亚细胞区室的路径。历史意义在于把生化分布、形态和功能互证，而不是把某一固定离心表视作细胞器定义。
[^centrifugation-units]: Lauritzen M. [Quantities and units for centrifugation in the clinical laboratory](https://publications.iupac.org/pac/66/4/0897/index.html). *Pure and Applied Chemistry*. 1994;66:897–907. https://doi.org/10.1351/pac199466040897。该建议统一了离心半径、角速度、相对离心加速度等量的定义，说明报告 RCF 时必须明确半径语境。
[^mitochondria-isolation]: Frezza C, Cipolat S, Scorrano L. [Organelle isolation: functional mitochondria from mouse liver, muscle and cultured fibroblasts](https://pubmed.ncbi.nlm.nih.gov/17406588/). *Nature Protocols*. 2007;2:287–295. https://doi.org/10.1038/nprot.2006.478。该方案分别处理细胞、肝与肌肉并以极谱呼吸评估功能，支持“材料—用途—纯度—功能”共同定义流程。
[^chloroplast-isolation]: Seigneurin-Berny D, et al. [Purification of intact chloroplasts from Arabidopsis and spinach leaves by isopycnic centrifugation](https://pubmed.ncbi.nlm.nih.gov/18819091/). *Current Protocols in Cell Biology*. 2008;Chapter 3:Unit 3.30. https://doi.org/10.1002/0471143030.cb0330s40。该方法先差速富集，再以 Percoll 等密度梯度回收完整叶绿体，并分别适配拟南芥与菠菜材料。
[^nuclei-isolation]: Nabbi A, Riabowol K. [Rapid Isolation of Nuclei from Cells In Vitro](https://pubmed.ncbi.nlm.nih.gov/26240403/). *Cold Spring Harbor Protocols*. 2015;2015:769–772. https://doi.org/10.1101/pdb.prot083733。REAP 法以低温、温和去污剂和短时机械剪切分开培养细胞的核与胞质；其快速性不能替代当前细胞类型中的污染和泄漏验证。
[^marker-ensembles]: Andreyev AY, et al. [Application of Proteomic Marker Ensembles to Subcellular Organelle Identification](https://pmc.ncbi.nlm.nih.gov/articles/PMC2830848/). *Molecular & Cellular Proteomics*. 2010;9:388–402. https://doi.org/10.1074/mcp.M900432-MCP200。研究以多蛋白集合估计核、线粒体、胞质、内质网、质膜和致密微粒体组分，展示混合级分可用成组标志定量描述，而非强行命名为纯组分。
[^lysoip]: Abu-Remaileh M, et al. [Lysosomal metabolomics reveals V-ATPase- and mTOR-dependent regulation of amino acid efflux from lysosomes](https://pmc.ncbi.nlm.nih.gov/articles/PMC5704967/). *Science*. 2017;358:807–813. https://doi.org/10.1126/science.aan6298。该研究用快速免疫分离取得可作代谢组分析的溶酶体，并以多个亚细胞标志检查组分；标签、捕获和清洗仍定义了所观察的细胞器亚群。
[^organellar-maps]: Itzhak DN, et al. [Global, quantitative and dynamic mapping of protein subcellular localization](https://elifesciences.org/articles/16950). *eLife*. 2016;5:e16950. https://doi.org/10.7554/eLife.16950。动态细胞器图谱以重复分级的完整蛋白分布而非单一“纯馏分”作分类，并用独立重复和假处理控制评估区室预测与转位。
