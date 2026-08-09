# 生物正交化学、标记与成像

生物正交化学让一对人工反应基团在细胞、组织乃至完整生物体中彼此成键，同时尽量避开天然核酸、蛋白质、糖、脂质和代谢物上的官能团。研究者可先把一个小型 chemical reporter（化学报告基团）装入目标分子，再让带荧光团、亲和标签或其他功能模块的互补试剂与它反应。这样，负责进入生物合成或保持靶标功能的“小把手”与负责观测的“大报告器”分开，既减小初始扰动，也允许同一把手在不同实验中换用不同读出。

完整的标记实验包含四个连续环节：把手进入目标分子，互补试剂到达同一位置，化学反应在有效时间窗内完成，生成物最后被光学或分析仪器读出。任何环节都可能限制信号。荧光很弱可能源于把手掺入少、反应慢、探针无法进入区室或染料被淬灭；荧光很强也可能来自游离染料滞留、旁路代谢或非酶促反应。生物正交性因而是一组在具体体系中验证的性质，不是反应名称自带的永久标签。[^bioorthogonal-selection]

本页从反应选择性和动力学进入 Staudinger ligation、azide–alkyne cycloaddition 与 tetrazine ligation，再追踪代谢标记、非天然氨基酸、荧光和光控工具怎样形成时空读出。用于富集和质谱鉴定的共价记录见[共价工具、化学蛋白质组学与靶点鉴定](chemical_proteomics.md)，显微镜设置、标本制备和图像采集流程留给[组织学染色与细胞成像](../exptech/cell/histology_imaging.md)。

## 生物正交反应的判据 { #bioorthogonal-criteria }

点击化学强调反应模块化、产率高、条件温和和副产物少；生物正交化学还要求这项反应能够在目标生物环境中执行。CuAAC 是典型的点击反应，但游离 Cu(I) 及其氧化还原循环可损伤活细胞，因此适用于固定样品或裂解物的条件不能直接外推为完整活体系的生物正交条件。反过来，一项在细胞表面有效的反应，也可能因试剂无法过膜而不适合细胞质标记。

### 化学选择性与生物相容性 { #chemical-selectivity-biocompatibility }

理想反应的两方在天然体系中稀少或不存在，对水、氧、常见亲核体和还原环境保持足够稳定，却在相遇后快速生成确定且稳定的产物。反应温度、pH 和溶剂必须与样品相容，也不能依赖会显著改变细胞状态的催化剂或试剂浓度。把手本身应足够小，使其进入代谢底物或蛋白侧链后仍能被相应酶、转运体和结构环境接受；互补试剂的电荷、脂溶性、连接臂和报告基团则决定它能到达细胞表面、胞质还是特定细胞器。

“不与天然官能团反应”只是第一层选择性。试剂还可能吸附膜、聚集、被外排泵清除、在血清蛋白上非共价滞留，或在进入目标前水解、还原和异构化。验证时需要分别测量未装把手的生物样品、只有把手而无反应探针的样品、只有探针而无把手的样品，以及反应后产物；由此把真正成键、非共价背景和样品自发信号分开。

### 二级动力学与有效时间窗 { #second-order-kinetics }

多数连接反应在稀溶液中近似遵循二级速率式

$$
v=k_2[A][B],
$$

其中 $k_2$ 是二级速率常数，$[A]$ 与 $[B]$ 是两种反应方的局部游离浓度。若报告试剂 $B$ 大量过量且在反应期间近似恒定，过程可视为伪一级反应，未反应把手的半衰期近似为

$$
t_{1/2}=\frac{\ln 2}{k_2[B]}.
$$

这两式说明反应“很快”必须同时说明速率常数和可达到的局部浓度。细胞中把手可能只有纳摩尔至微摩尔量级，外加探针又受通透、非特异结合和毒性限制；在试管中靠高浓度数分钟完成的反应，进入活细胞后可能需要数小时。适用反应应在把手或探针降解、目标迁移及生物过程结束之前形成足够产物。

提高环张力或调整电子效应可以加快反应，却也可能降低试剂在储存、还原环境或膜中的稳定性。生物正交试剂因此存在 reactivity–stability trade-off（反应性—稳定性权衡）：最活泼的分子不一定给出最高有效标记量，真正需要比较的是目标区室中“保持完整并成功成键”的分数。

### 相互正交性与多重标记 { #mutual-orthogonality }

一对试剂不攻击天然分子，称为相对于生物体系正交；两对人工反应同时存在且彼此不交叉，才具有 mutual orthogonality（相互正交性）。双重标记时，除了期望的 $A_1+B_1$ 和 $A_2+B_2$，还要排除 $A_1+B_2$、$A_2+B_1$、各把手之间及各探针之间的反应。许多环加成共享相近电子或张力机制，单独使用时都很选择性，组合后却可能交叉。

多色实验还要同时满足化学与光谱两层可分辨性。反应对互不交叉，并不保证两个染料的激发和发射光谱可区分；光谱分离良好，也不能补救把手串入错误生物合成通路。顺序标记可利用一对反应先完全消耗、遮蔽或洗去，再进行第二对反应，但应确认第一步没有改变第二个把手的可达性。

## 经典连接反应 { #classical-ligation-reactions }

不同反应把“选择性、速率、把手大小、试剂稳定性和活体系相容性”分配在不同位置。选用时应从目标区室、需要的时间分辨率和报告基团大小出发，而不是把所有 azide、alkyne 或 tetrazine 试剂视为可互换。

| 反应 | 反应对与驱动力 | 主要优势 | 主要边界 |
| --- | --- | --- | --- |
| Staudinger ligation | azide 与经过设计的 triarylphosphine；aza-ylide 中间体经分子内捕获和水解形成 amide | 无金属，azide 小且易于代谢引入，产物稳定 | 反应较慢；phosphine 易氧化，试剂合成和膜通透受限 |
| CuAAC | azide 与 terminal alkyne；Cu(I) 催化形成 triazole | 连接可靠、快且对把手要求小，适合固定样品、裂解物和许多体外标记 | 铜配位、活性氧和细胞状态改变限制活体系应用；配体和还原体系需单独验证 |
| SPAAC | azide 与 strained cyclooctyne；环张力推动无铜环加成 | 无外加金属，可用于活细胞和动物，报告试剂选择丰富 | cyclooctyne 体积和疏水性较大；不同骨架在速率、稳定性和背景反应间权衡 |
| tetrazine ligation | tetrazine 与 TCO、cyclopropene 等 strained alkene；inverse-electron-demand Diels–Alder 反应并放出 $N_2$ | 无催化且可极快，易与 fluorogenic 设计结合 | 两方体积通常大于 azide；TCO 异构化、tetrazine 还原及交叉反应会消耗有效试剂 |

### Staudinger ligation { #staudinger-ligation }

Saxon 和 Bertozzi 将代谢进入细胞表面 glycoconjugate 的 azide 与 biotinylated triarylphosphine 连接，建立了 modified Staudinger reaction 在细胞环境中形成稳定共价产物的经典范例。azide 和设计 phosphine 在天然细胞中都很少见，phosphine 进攻 azide 后形成 aza-ylide，再由邻近酯基捕获并水解为 amide。它把“先由代谢安装把手，再用外源试剂读取”的两步策略具体化。[^staudinger-ligation]

这项反应无需金属催化，适合细胞表面乃至动物标记；其速度通常慢于后来的张力促进反应，phosphine 又可被氧化而失活。因而反应时间延长时，目标更新、内吞和细胞迁移会与化学成键同时进行，最终图像可能记录一段时间内的累计历史，而非照射或加样瞬间的静态分布。

### CuAAC 与 SPAAC { #azide-alkyne-cycloadditions }

CuAAC 以 Cu(I) 催化 azide 与 terminal alkyne 形成 1,2,3-triazole。azide 和 terminal alkyne 都很小，容易装入底物和探针，反应又具有良好区域选择性，因此成为固定细胞染色、EdU／EU 检测、活性探针和富集实验的常用连接方式。稳定 Cu(I) 的配体和受控还原条件可以改善某些活细胞方案，但铜对膜、蛋白和氧化还原状态的影响必须与化学产率一起评估。

SPAAC 用 cyclooctyne 的环张力降低 azide–alkyne 环加成势垒，不再需要铜。Agard、Prescher 和 Bertozzi 证明该反应可在生理条件下修饰细胞上的生物分子，随后改进的 cyclooctyne 又实现了活细胞中的动态 glycan 成像。[^spaac-development] 加入吸电子基、稠环或杂原子可以调节速率和水溶性，也会改变骨架大小、膜分配和非特异结合；“copper-free”只说明催化剂被移除，仍需验证具体 cyclooctyne 在目标系统中的稳定和背景。

### Tetrazine ligation { #tetrazine-ligation }

tetrazine 与 trans-cyclooctene（TCO）等富电子 strained alkene 进行 inverse-electron-demand Diels–Alder（逆电子需求 Diels–Alder，IEDDA）反应，初生加成物随后放出氮气并重排。Blackman、Royzen 和 Fox 报道的 tetrazine–TCO 组合在测试条件下达到约 $2\times10^3\ \mathrm{M^{-1}s^{-1}}$ 的二级速率常数，说明稀浓度下也可获得很短的化学时间尺度。[^tetrazine-kinetics]

反应性取决于 tetrazine 的电子缺陷程度、dienophile 的环张力和立体环境。提高 tetrazine 电子缺陷往往加快成键，却可能提高其被细胞还原的速率；高张力 TCO 很活泼，也可能发生 cis isomerization 而失去快速反应能力。较小的 cyclopropene 易于代谢或遗传安装，但通常比 TCO 慢。实验设计应把“安装把手的效率 × 把手存活率 × 连接收率”作为整体，而不能只比较纯缓冲液中的 $k_2$。

## 化学把手进入生物分子的路径 { #reporter-installation }

生物正交反应只负责识别人工把手；把手属于哪类生物分子、何时进入以及进入多少，由前一步决定。metabolic labeling（代谢标记）让天然酶接受带把手的底物类似物，genetic code expansion（遗传密码子扩展）把非天然氨基酸放到指定蛋白位点，酶促或配体导向标记则利用特定识别模块安装把手。三者提供的是不同层级的特异性。

### 糖链的代谢化学报告 { #metabolic-glycan-reporting }

metabolic oligosaccharide engineering（代谢寡糖工程）向细胞提供带 ketone、azide、alkyne 或小型 strained alkene 的 monosaccharide analog。类似物经摄取、脱保护、salvage pathway 和 nucleotide-sugar 合成，随后由 glycosyltransferase 装入 glycoprotein 或 glycolipid。早期 ketone–hydrazide 路线证明细胞能把非天然化学反应性展示到表面，azidosugar 与 Staudinger ligation、SPAAC 的组合又把这一策略扩展到活体系成像。[^glycan-reporting]

标记强度反映的是前体摄取、代谢酶选择、天然底物竞争、糖核苷酸池、糖基转移和分子周转的合成结果。因此某种 azidosugar 的荧光不能直接等同于“全部 sialic acid”或“全部 O-GlcNAc”的丰度。pulse–chase（脉冲—追踪）能观察脉冲期新生 glycan 的运输和周转，却不会给脉冲前已经存在的糖链补上把手。

前体保护基也会改变证据。per-O-acetylation 常用于提高 monosaccharide analog 过膜能力，但某些全乙酰化糖可经非酶促 elimination–addition 路径修饰 cysteine，产生人工 S-glycosylation；Qin 等用未乙酰化糖和对照实验分离了这类旁路。[^glycan-artifact] 因而“无前体”“未保护前体”“代谢酶改变”和天然糖竞争是区分酶促 glycan 标记与化学副反应的重要条件。

### 新生蛋白质的 BONCAT { #boncat-nascent-proteins }

bioorthogonal noncanonical amino acid tagging（BONCAT）用 azidohomoalanine（AHA）或 homopropargylglycine（HPG）等 methionine analog 参与翻译，使脉冲期间合成的蛋白带有 azide 或 alkyne。反应后可接上 fluorophore 形成 FUNCAT 图像，也可接上 biotin 等亲和标签富集 nascent proteome。Dieterich 等以 AHA 和 alkyne affinity tag 从哺乳动物细胞中选择性分离两小时窗口内的新生蛋白，建立了这一时间分辨蛋白质组策略。[^boncat]

BONCAT 标记的是“在给定前体浓度、methionine 竞争和细胞状态下成功掺入 analog 的翻译产物”。AHA 可影响不同蛋白的可检出肽段数，短脉冲会偏向高翻译率或 methionine 位点适合检测的蛋白；饥饿换液和高 analog 浓度也可能改变翻译本身。天然 methionine 对照、翻译抑制对照、pulse length 梯度和总蛋白合成测量共同限定结果。质谱层面的富集、鉴定和定量见[蛋白质组学](../bioinfo/proteomics.md)。

### 核酸与脂质的代谢脉冲 { #nucleic-acid-lipid-pulses }

5-ethynyl-2′-deoxyuridine（EdU）在 DNA synthesis 时进入新链，固定后可用 fluorescent azide 和 CuAAC 显示 S phase 细胞或复制区域；它的 alkyne 很小，检测不必像 BrdU 那样先用强变性暴露抗原。5-ethynyluridine（EU）则进入新转录 RNA，可用脉冲与追踪比较不同细胞的 transcription 和 RNA turnover。[^nucleic-acid-pulses] 两者的信号分别报告脉冲期间的 DNA 合成和 RNA 合成，不代表 DNA 或 RNA 总量；analog 掺入对复制、修复、转录和细胞周期的影响也随剂量与时间变化。

带 alkyne 或 azide 的 fatty acid、choline 和 lipid headgroup analog 可进入脂质合成、重塑和运输路径。一个脂肪酸把手可能先被 acyl-CoA synthetase 激活，再分配到多类 phospholipid、neutral lipid 和蛋白 acylation；成像位置因此属于代谢后产物的总和。若要追踪某一脂质分子种类，需要质谱、酶特异扰动或结构明确的直接探针补充，不能仅由一个通用脂肪酸 analog 的荧光定位完成归属。

### 位点特异的非天然氨基酸 { #site-specific-ncaa }

遗传密码子扩展用与宿主翻译系统相对正交的 aminoacyl-tRNA synthetase／tRNA pair，把带 azide、alkyne、cyclopropene 或 TCO 的 noncanonical amino acid（ncAA）读入指定 codon，常见路线是 suppress 一个目标蛋白中的 UAG codon。之后用互补反应接上有机染料，可在单个预定残基附近获得比 GFP 更小的标记。[^genetic-code-expansion]

位点特异性来自“哪个 codon 被改写”，而化学选择性来自“哪个 ncAA 把手与探针反应”。两层都需验证：orthogonal synthetase 是否把天然 amino acid 错装到目标 tRNA，抑制 tRNA 是否读取其他 codon，目标蛋白的表达、折叠、定位和功能是否因 ncAA 或染料改变。空白 ncAA、无 synthetase、无 suppressor tRNA 和目标位点回变对照分别检测这些来源。

## 荧光报告器与成像信号 { #fluorescent-reporters }

连接反应决定 reporter 接到哪里，fluorophore 决定最终能否被看见。染料的 extinction coefficient（摩尔消光系数）与 fluorescence quantum yield（荧光量子产率）共同影响 brightness，absorption／emission spectrum 决定可用激发和滤光片，photostability 决定连续成像中信号能维持多久。linker、净电荷、疏水性和分子体积还会改变膜通透、非特异结合、细胞器滞留和目标分子运动。[^fluorescent-toolbox]

### 直接染料与两步标记 { #direct-two-step-labeling }

把 fluorophore 直接并入代谢底物或配体，可省去第二步反应，却常因染料太大而不被转运体或酶接受。两步标记先安装 azide、alkyne 或小 strained alkene，再加入 dye-conjugated partner，把生物识别与光学性能解耦。代价是第二个试剂还要穿过膜和组织，到达把手后完成反应，并在成像前去除未反应背景。

染料与把手之间的 linker 不是惰性间隔物。短 linker 可让染料干扰目标表面，过长柔性 linker 会扩大定位不确定性并增加疏水结合；带电染料可能停留在膜外或特定 organelle，疏水染料则可能进入膜和脂滴。用两种光谱不同、理化性质也不同的染料标记同一把手，若得到不同分布，应先检查染料行为，而不宜把差异立即解释成目标重定位。

### Fluorogenic 反应 { #fluorogenic-reactions }

fluorogenic probe 在未反应时被淬灭，成键后 fluorescence turn-on（荧光开启）。一种常见设计让 tetrazine 靠近 fluorophore，通过能量或电子转移压低发光；tetrazine 与 TCO 反应并失去原有电子结构后，淬灭解除。Devaraj 等利用这一路径在活细胞内成像小分子，后续 tetrazine dyes 已覆盖从绿色到 far-red 的 no-wash labeling。[^fluorogenic-tetrazine]

turn-on 提高 target-to-background ratio，尤其适合难以洗去游离探针的活细胞内部，但它不等同于绝对无背景。探针可能在目标外被还原、光解或与非目标 dienophile 反应，强疏水染料也会局部积累。应分别测量反应前后光谱、turn-on fold、反应产率、未装把手细胞和失活反应方，并把曝光时间保持在线性范围。

### 环境响应、FRET 与多色观测 { #responsive-multiplexed-imaging }

environment-sensitive dye 可随 polarity、pH、viscosity、离子浓度或局部 binding 改变强度、峰位或 fluorescence lifetime。把它接到位点特异把手上，便可报告目标附近微环境；信号变化主要对应染料所感受的物理量，不能仅由“染料已连接”推断目标分子数量。ratiometric probe 或 lifetime measurement 常能降低探针浓度、照明不均和焦面变化造成的影响。

FRET 让 donor 的激发能以强烈距离依赖的方式传给 acceptor，可报告数纳米尺度内的构象或相互作用。双位点 ncAA 或两种相互正交反应有助于把两个小染料放到预定位置，但 donor／acceptor 标记分数、取向、光谱串扰和直接激发都会进入 FRET efficiency。多色定位还需用单标样品建立 bleed-through 和 spectral unmixing，而不能只凭合成时选择了两种不同颜色。

## 光控化学工具 { #photochemical-control }

光提供一个可聚焦、可定时的外部输入。photocage（光笼）通过光裂解释放被遮蔽的生物活性，photoswitch（光开关）通过可逆 photoisomerization 改变分子的形状和亲和力；前者通常是一次性触发，后者可在两个状态之间往返。它们与成像染料共享照明路径，却把光从“读出”扩展成“干预”。

### Photocage 的一次性释放 { #photocages }

光笼基团连接在 ligand、second messenger、nucleotide、amino acid 或核酸的关键位置，遮挡结合、反应或构象功能。照射使保护基断裂，释放活性分子。caged ATP、caged calcium chelator 和 caged glutamate 等工具可在毫秒至秒尺度制造浓度跃迁，用于分离受体开启、离子释放和下游响应。[^photocaging]

释放量由吸收截面、photolysis quantum yield、光剂量和局部 caged compound 浓度共同决定。光裂解副产物、未完全 uncage 的残留和释放物扩散都进入实验。一次短脉冲可给出明确的起始时刻，但活性分子会从照明体积向外扩散，并被摄取、降解或缓冲；最终效应区域通常大于光斑。

### Photoswitch 的可逆状态控制 { #photoswitches }

azobenzene 等 photoswitch 在不同波长照射下改变构型，两个 photoisomer 可对结合位点、膜或分子内张力呈现不同亲和力和效力。把 switch 嵌入配体形成 freely diffusible photopharmacology，或把它 tether 到 channel、receptor 和 protein 的指定位置，可重复比较同一细胞在高活性与低活性状态间的响应。[^photopharmacology]

实际照射形成的是 photostationary state（光稳态混合物），通常不会把全部分子转成单一异构体；停止照射后还会按 thermal relaxation 速率返回。两种状态的吸收光谱重叠、组织散射和染料漂白都会限制切换对比。表型应与两状态的占比、切换速度、暗态恢复和目标占有一起报告，而不能只用“开／关”描述连续分布。

### 光化学的时空分辨率 { #photochemical-resolution }

短脉冲宽度给出光输入的时间上限，真正的生物时间分辨率还要加上 photolysis 或 photoisomerization、分子扩散、靶标结合和信号传递。空间分辨率则由光学 point-spread function、组织吸收散射、被照分子分布和产物扩散共同决定。two-photon excitation 可把吸收限制在焦点附近并使用较长波长进入更深组织，但需要较高瞬时光强，适用体积和光化学量子效率仍需实测。

照明本身可能引起 photobleaching、reactive oxygen species、局部加热和内源 chromophore 激发，这些效应会改变膜、线粒体和信号通路。与实验完全相同的波长、功率、脉冲和成像时程，只缺少 cage 或 switch 的 illumination-only control，能够区分目标光化学与一般光照效应。这属于机制证据的一部分，而非成像结束后的附加检查。

## 标记信号的定量解释 { #quantitative-interpretation }

一幅生物正交图像是多个效率相乘的结果：目标分子在脉冲期间的生成量、把手掺入比例、把手在标记前的存活、互补试剂到达率、反应完成率、染料亮度、光路收集效率和图像处理都会改变强度。比较不同条件时，应判断哪一项被实验变量改变。代谢抑制可能同时减少目标合成与前体活化，膜通透改变则可同时改变 reporter delivery 和细胞状态。

### 脉冲、追踪与时间积分 { #pulse-chase-interpretation }

pulse width 定义把手有机会进入新生分子的时间，chase 用天然底物替换 analog，停止新的可检测掺入。随后信号的移动或衰减可反映运输、分泌、降解和稀释，但连接反应本身若持续很久，也会模糊脉冲边界。把手安装、连接与成像三个时间点应分别记录；对于慢反应，标记完成时的位置可能已经不同于脉冲结束时的位置。

同一信号还可能混合“多少分子被合成”和“每个分子有多少可反应位点”。一个含多个 methionine 的蛋白更容易在 BONCAT 中获得至少一个 AHA，一个多分支 glycan 也可携带多个 reporter。比较绝对分子数需要已知化学计量、标准品或独立总量测量；没有这些校准时，更稳妥的解释是相对标记通量或相对空间分布。

### 空间定位与分子运动 { #spatial-localization }

共价连接把 fluorophore 固定到分子，却不会固定分子本身。膜蛋白可 lateral diffusion 和 endocytosis，glycan 随 secretory pathway 移动，nascent protein 会折叠、运输和降解，RNA 也可从 transcription site 输出。长曝光、慢连接或长 chase 得到的是运动轨迹的时间积分。定位结论应与标记时间、帧率、point-spread function 和目标运动速度相称。

预靶向策略先让无染料的小把手或配体到达目标并清除，再加入快速 reporter；它可降低大染料对分布的扰动和血液背景。反应后产物若改变配体内吞或靶标周转，成像仍可能反过来塑造所观察的过程。用未反应母体、不同 linker 和正交 reporter 比较，能检验标记产物是否保留原有行为。

### 对照体系与校准 { #labeling-controls-calibration }

基础对照应沿信号链逐层设置：无把手样品评估 probe background，天然前体竞争评估 metabolic incorporation，缺失安装酶或 orthogonal translation components 的样品评估生物安装特异性，失活反应方评估非共价滞留，无染料样品评估 autofluorescence，匹配照明的 dark／light control 评估光化学效应。固定样品与活样品的结果不应直接混合，因为 fixation 和 permeabilization 会改变 probe access、分子位置和背景去除。

定量成像还要保持 detector response 在线性范围，使用相同 illumination、exposure、gain 和 segmentation 规则，并用 fluorescent standard、bead 或已知 labeling stoichiometry 监测批次漂移。photobleaching correction 需要未受实验扰动的参考或明确定义的模型；过度背景扣除会抹去真实弱信号，饱和像素则无法恢复强度差异。显微镜校准、取样和图像分析的完整流程见[显微观察与标本制备](../exptech/foundations/microscopy_specimens.md)。

生物正交化学最终把不可见的分子历史转成可观察记录。反应提供选择性成键，代谢或遗传安装决定记录对象，fluorophore 与光学系统决定可见方式，脉冲和光控决定时间坐标。只有把四层证据同时保留，图像中的颜色、强度和位置才可进一步解释为分子种类、合成通量、局部环境或生物学机制。下一页[共价工具、化学蛋白质组学与靶点鉴定](chemical_proteomics.md)将沿稳定共价记录进入富集、质谱和靶点证据分层。

## 参考资料与延伸阅读 { #references }

- Sletten, E. M. & Bertozzi, C. R. [Bioorthogonal chemistry: fishing for selectivity in a sea of functionality](https://doi.org/10.1002/anie.200900942). *Angewandte Chemie International Edition* 48, 6974–6998 (2009).
- Patterson, D. M., Nazarova, L. A. & Prescher, J. A. [Finding the right (bioorthogonal) chemistry](https://doi.org/10.1021/cb400828a). *ACS Chemical Biology* 9, 592–605 (2014).
- Saxon, E. & Bertozzi, C. R. [Cell surface engineering by a modified Staudinger reaction](https://doi.org/10.1126/science.287.5460.2007). *Science* 287, 2007–2010 (2000).
- Agard, N. J., Prescher, J. A. & Bertozzi, C. R. [A strain-promoted [3 + 2] azide–alkyne cycloaddition for covalent modification of biomolecules in living systems](https://doi.org/10.1021/ja044996f). *Journal of the American Chemical Society* 126, 15046–15047 (2004).
- Blackman, M. L., Royzen, M. & Fox, J. M. [Tetrazine ligation: fast bioconjugation based on inverse-electron-demand Diels–Alder reactivity](https://doi.org/10.1021/ja8053805). *Journal of the American Chemical Society* 130, 13518–13519 (2008).
- Baskin, J. M. et al. [Copper-free click chemistry for dynamic in vivo imaging](https://doi.org/10.1073/pnas.0707090104). *Proceedings of the National Academy of Sciences USA* 104, 16793–16797 (2007).
- Dieterich, D. C. et al. [Selective identification of newly synthesized proteins in mammalian cells using bioorthogonal noncanonical amino acid tagging (BONCAT)](https://doi.org/10.1073/pnas.0601637103). *Proceedings of the National Academy of Sciences USA* 103, 9482–9487 (2006).
- Salic, A. & Mitchison, T. J. [A chemical method for fast and sensitive detection of DNA synthesis in vivo](https://doi.org/10.1073/pnas.0712168105). *Proceedings of the National Academy of Sciences USA* 105, 2415–2420 (2008).
- Devaraj, N. K. et al. [Bioorthogonal turn-on probes for imaging small molecules inside living cells](https://doi.org/10.1002/anie.200906120). *Angewandte Chemie International Edition* 49, 2869–2872 (2010).
- Ellis-Davies, G. C. R. [Caged compounds: photorelease technology for control of cellular chemistry and physiology](https://doi.org/10.1038/nmeth1072). *Nature Methods* 4, 619–628 (2007).
- Velema, W. A., Szymanski, W. & Feringa, B. L. [Photopharmacology: beyond proof of principle](https://doi.org/10.1021/ja413063e). *Journal of the American Chemical Society* 136, 2178–2191 (2014).

[^bioorthogonal-selection]: Patterson, D. M., Nazarova, L. A. & Prescher, J. A. [Finding the right (bioorthogonal) chemistry](https://doi.org/10.1021/cb400828a). *ACS Chemical Biology* 9, 592–605 (2014)；Sletten, E. M. & Bertozzi, C. R. [Bioorthogonal chemistry: fishing for selectivity in a sea of functionality](https://doi.org/10.1002/anie.200900942). *Angewandte Chemie International Edition* 48, 6974–6998 (2009)。两项综述比较反应选择性、速率、把手大小、稳定性和具体生物环境，支持按实验用途而非反应名称选择工具。
[^staudinger-ligation]: Saxon, E. & Bertozzi, C. R. [Cell surface engineering by a modified Staudinger reaction](https://doi.org/10.1126/science.287.5460.2007). *Science* 287, 2007–2010 (2000)。原始研究将 azidosugar 代谢进入细胞表面 glycoconjugate，再以经过设计的 biotinylated triarylphosphine 形成稳定加合物。
[^spaac-development]: Agard, N. J., Prescher, J. A. & Bertozzi, C. R. [A strain-promoted [3 + 2] azide–alkyne cycloaddition for covalent modification of biomolecules in living systems](https://doi.org/10.1021/ja044996f). *Journal of the American Chemical Society* 126, 15046–15047 (2004)；Baskin, J. M. et al. [Copper-free click chemistry for dynamic in vivo imaging](https://doi.org/10.1073/pnas.0707090104). *Proceedings of the National Academy of Sciences USA* 104, 16793–16797 (2007)。两项研究分别建立无铜张力促进反应，并以改进 cyclooctyne 追踪活细胞 glycan trafficking。
[^tetrazine-kinetics]: Blackman, M. L., Royzen, M. & Fox, J. M. [Tetrazine ligation: fast bioconjugation based on inverse-electron-demand Diels–Alder reactivity](https://doi.org/10.1021/ja8053805). *Journal of the American Chemical Society* 130, 13518–13519 (2008)。原始研究报告 tested tetrazine／TCO pair 的二级速率常数约为 $2000\ \mathrm{M^{-1}s^{-1}}$，并验证其对多种官能团的耐受。
[^glycan-reporting]: Mahal, L. K., Yarema, K. J. & Bertozzi, C. R. [Engineering chemical reactivity on cell surfaces through oligosaccharide biosynthesis](https://doi.org/10.1126/science.276.5315.1125). *Science* 276, 1125–1128 (1997)；Baskin, J. M. et al. [Copper-free click chemistry for dynamic in vivo imaging](https://doi.org/10.1073/pnas.0707090104). *Proceedings of the National Academy of Sciences USA* 104, 16793–16797 (2007)。前者以 ketone-bearing sugar 建立代谢安装化学反应性的路径，后者以 azide／cyclooctyne 将其扩展为活细胞动态标记。
[^glycan-artifact]: Qin, W. et al. [Artificial cysteine S-glycosylation induced by per-O-acetylated unnatural monosaccharides during metabolic glycan labeling](https://doi.org/10.1002/anie.201711710). *Angewandte Chemie International Edition* 57, 1817–1820 (2018)。研究证明某些全乙酰化非天然 monosaccharide 可非酶促修饰 cysteine，并以未乙酰化 analog 降低该伪差。
[^boncat]: Dieterich, D. C. et al. [Selective identification of newly synthesized proteins in mammalian cells using bioorthogonal noncanonical amino acid tagging (BONCAT)](https://doi.org/10.1073/pnas.0601637103). *Proceedings of the National Academy of Sciences USA* 103, 9482–9487 (2006)。原始研究用 AHA 在翻译中引入 azide，并经 alkyne affinity tag 富集两小时脉冲内合成的蛋白。
[^nucleic-acid-pulses]: Salic, A. & Mitchison, T. J. [A chemical method for fast and sensitive detection of DNA synthesis in vivo](https://doi.org/10.1073/pnas.0712168105). *Proceedings of the National Academy of Sciences USA* 105, 2415–2420 (2008)；Jao, C. Y. & Salic, A. [Exploring RNA transcription and turnover in vivo by using click chemistry](https://doi.org/10.1073/pnas.0808480105). *Proceedings of the National Academy of Sciences USA* 105, 15779–15784 (2008)。两项研究分别以 EdU 和 EU 的代谢掺入记录 DNA synthesis 与 RNA transcription。
[^genetic-code-expansion]: Müller, D., Trucks, S., Schwalbe, H. & Hengesbach, M. [Genetic code expansion facilitates position-selective modification of nucleic acids and proteins](https://doi.org/10.1002/cplu.202000150). *ChemPlusChem* 85, 1233–1243 (2020)。该综述比较 orthogonal translation components、site-selective ncAA incorporation 与后续光谱标记，并强调翻译效率和交叉反应的验证。
[^fluorescent-toolbox]: Giepmans, B. N. G. et al. [The fluorescent toolbox for assessing protein location and function](https://doi.org/10.1126/science.1124618). *Science* 312, 217–224 (2006)。该综述从 fluorophore 光谱、亮度、稳定性、标签大小和生物学扰动比较多类细胞成像工具。
[^fluorogenic-tetrazine]: Devaraj, N. K. et al. [Bioorthogonal turn-on probes for imaging small molecules inside living cells](https://doi.org/10.1002/anie.200906120). *Angewandte Chemie International Edition* 49, 2869–2872 (2010)。原始研究把 tetrazine-induced quenching 与 IEDDA 反应结合，使 TCO 成键后 fluorescence turn-on，降低活细胞内未反应探针背景。
[^photocaging]: Ellis-Davies, G. C. R. [Caged compounds: photorelease technology for control of cellular chemistry and physiology](https://doi.org/10.1038/nmeth1072). *Nature Methods* 4, 619–628 (2007)。综述系统比较 caged ligand、second messenger、ion chelator 与 nucleic acid 的光解设计及细胞时空控制。
[^photopharmacology]: Velema, W. A., Szymanski, W. & Feringa, B. L. [Photopharmacology: beyond proof of principle](https://doi.org/10.1021/ja413063e). *Journal of the American Chemical Society* 136, 2178–2191 (2014)。该综述以 photoswitchable bioactive molecule 为核心，讨论不同 photoisomer 的活性差、光稳态、热松弛、波长和组织应用条件。
