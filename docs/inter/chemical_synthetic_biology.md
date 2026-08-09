# 化学生物学

化学生物学研究化学结构怎样识别、记录和改变生命过程。小分子配体、非天然氨基酸、反应基团、荧光团和人工双功能分子都可以成为实验变量：研究者改变一个官能团、立体中心或连接臂，观察结合、定位、反应和细胞表型怎样随之改变，再由这些差异追问分子机制。化学在这里既提供物质，也提供关于平衡、速率、反应选择性和结构—活性关系的推理语言。[^chemical-biology-scope]

这种研究路径跨越多个尺度。纯化蛋白中的结合常数说明分子识别，活细胞中的靶点占有说明化合物确实到达并结合相应分子，表型则显示整个系统在扰动后怎样响应。三层读出之间需要因果证据连接：高亲和力分子可能进不了细胞，细胞内结合可能没有功能后果，明显表型也可能来自另一个靶点或测定伪差。化学生物学的核心工作，正是把化学身份、靶点结合和生物学后果逐层对应起来。

本页先建立这一共同框架，随后进入三个专题页：[化学探针与化学遗传学](chemical_probes.md)讨论怎样用小分子建立靶点—表型联系，[生物正交化学、标记与成像](chemical_bioorthogonal.md)讨论怎样在复杂体系中选择性地生成信号，[共价工具、化学蛋白质组学与靶点鉴定](chemical_proteomics.md)则讨论怎样把短暂的分子接触转成可富集、可鉴定的记录。

## 化学结构成为可调的实验变量 { #chemical-structure-variable }

一个分子的原子连接方式决定它能形成哪些氢键、静电和疏水接触，立体化学决定这些基团能否以合适方向进入结合位点，电荷、极性和构象自由度又影响溶解、膜分配及到达亚细胞区室的能力。把母体结构改成一系列类似物，便可以寻找哪些变化保留活性、增强活性或使活性消失。这种 structure–activity relationship（结构—活性关系，SAR）并不只服务于提高效力；它也能把某个生物学读出与特定分子识别事件联系起来。

最有解释力的比较往往来自改变很小、性质相近的分子对。例如，一个立体异构体能结合靶蛋白而其对映体不能，两者在溶解度和细胞处理条件上又足够接近，那么表型随立体化学消失便支持一个具有明确几何要求的识别过程。若在分子上添加体积很大的荧光团后效力下降，则不能把带标签分子的定位直接外推给未标记母体。化学结构既产生信号，也可能改变被观察对象，因此每次修饰都要重新测量其行为。

### 分子识别连接结构与靶标 { #molecular-recognition }

设靶标 $T$ 与配体 $L$ 可逆形成复合物 $TL$，解离常数为 $K_d=[T][L]/[TL]$。在单一、独立结合位点且游离配体浓度远高于靶标浓度等条件下，靶标占有分数可写成

$$
f_{\mathrm{occ}}=\frac{[L]}{K_d+[L]}.
$$

这条关系说明，亲和力描述的是平衡时配体在多大浓度尺度上占据靶标。结合速率 $k_{\mathrm{on}}$ 与解离速率 $k_{\mathrm{off}}$ 则决定达到平衡需要多久，并满足 $K_d=k_{\mathrm{off}}/k_{\mathrm{on}}$；具有相近 $K_d$ 的两个分子，仍可有完全不同的结合和解离时间。多位点、协同、别构、竞争、共价反应和诱导邻近体系需要更完整的状态模型，相关热力学与动力学见[分子结合的状态计数](biophysics_thermodynamics.md#binding-statistical-mechanics)和[平衡分布与转换路径](biophysics_thermodynamics.md#equilibrium-versus-kinetics)。

亲和力、效力和靶点占有回答不同问题。$K_d$ 或 $K_i$ 描述规定体系中的结合平衡；$EC_{50}$、$IC_{50}$ 是某项功能读出达到半最大效应时的实验浓度，随底物浓度、受体储备、信号放大、孵育时间和测定终点改变；target engagement（靶点占有／靶点结合）则确认分子在细胞或组织环境中确实与目标接触。把总加样浓度直接当作细胞内游离浓度，会忽略膜通透、外排、蛋白结合、代谢和区室富集。

### 选择性具有比较对象与实验条件 { #selectivity-context }

选择性表示一个分子在给定条件下更偏向哪些靶标。对同一家族多个旁系同源蛋白测量 $K_d$ 或酶抑制，可得到家族内选择性；在细胞裂解物或活细胞中进行蛋白质组范围竞争，则能寻找更广的结合对象。两种尺度不能互相代替：一个分子可在十个受测激酶中显得专一，却在未纳入的小分子结合蛋白上具有更强作用；反过来，体外亲和力接近的两个靶标，也可能因表达量、定位或复合物状态不同，只在一种细胞中产生可检测效应。

选择性还随浓度和时间变化。低浓度主要占据高亲和力靶标，浓度升高后较弱靶标也逐步被占据；可逆分子洗脱后效应可能消退，慢解离或共价分子则可在游离化合物下降后继续作用。因而“某分子是选择性的”应还原成可检验的陈述：相对于哪些候选靶标、在何种浓度和时间、用什么结合或功能读出得到多大的分离窗口。亲和力、特异性和竞争背景的物理基础见[亲和力、特异性与竞争背景](biophysics_thermodynamics.md#affinity-specificity)。

## 化学扰动展开时间、剂量与作用方式 { #chemical-perturbation }

小分子通常在加入后数秒至数小时内改变已有分子状态，并可用浓度梯度控制占有率。可逆配体还能通过洗脱或竞争观察恢复过程。这些时间坐标使研究者能够把即时分子事件与较慢的转录重编程、蛋白周转和细胞命运变化分开。遗传敲除、降解标签和 RNA 干扰则直接改变基因产物的数量或组成，适合检验长期必要性。化学扰动与遗传扰动作用于不同层次，把二者组合起来通常比把其中一种视为另一种的替代更能识别机制。

同一靶标也可由多种化学方式控制。竞争性配体占据天然配体或底物位点，别构配体在另一位置改变构象群体；抑制剂降低某项活动，激动剂或激活剂提高输出，稳定剂延长特定复合物或蛋白状态的寿命。molecular glue（分子胶）改变两个蛋白表面的相容性，异双功能分子则用连接臂同时招募靶蛋白与效应蛋白，由此诱导降解、修饰、定位或复合物形成。后一类效应依赖三元复合物、协同性和细胞机器，不能只由单个二元 $K_d$ 预测。[^induced-proximity]

### 化学遗传学由表型与靶标双向追踪 { #chemical-genetics }

chemical genetics（化学遗传学）把小分子当作可施加、可撤回并可定量的“等位变化”。正向化学遗传学从细胞或个体表型出发：筛选能改变发育、形态、代谢或信号状态的分子，再通过抗性突变、亲和捕获、化学蛋白质组学、遗传互作和生化重构寻找靶标。反向化学遗传学从已知蛋白或通路出发，选择能调节它的分子并观察系统后果。两条路线分别类似于正向和反向遗传学，但化学扰动直接作用于分子状态，且常有快速、剂量依赖和可逆的特征。[^chemical-genetics]

表型筛选的命中物首先说明“这个化学结构在当前体系中改变了读出”，并不同时给出直接靶标。亲和基质捕获到的蛋白可能只是高丰度结合者，抗性突变也可能改变摄取、代谢或下游补偿。相反，从已知靶标出发的分子若缺乏细胞内占有和选择性证据，表型仍不能归因于该靶标。可靠的化学遗传学会让多个方向会合：独立化学骨架产生相同表型，失活类似物不产生表型，靶标突变改变敏感性，直接结合与功能读出具有一致的浓度和时间关系。

## 化学探针由质量明确的分子组成 { #chemical-probes }

chemical probe（化学探针）是为了询问生物学机制而选择和表征的化学工具。一个有活性的配体只有在化学身份、纯度、效力、选择性、细胞内靶点占有和适用浓度得到说明后，才足以支撑明确的机制推断。Chemical Probes Portal 把生化效力、靶标家族及更广范围的选择性、细胞内占有、化合物性质、阴性对照和正交活性化合物列为相互补充的评价维度；其中给出的数值阈值适合筛选经典调节剂，但具体体系仍要根据靶标类别和实验目的解释。[^probe-criteria]

探针与药物的评价目标有重叠，却不相同。探针优先追求在某个实验窗口内得到可归因的机制信号，即使它没有适合给药的稳定性或组织暴露；药物还要满足治疗窗口、体内暴露和临床效益等要求。已经获批或广泛使用的药物也不会自动成为良好探针：若在常用浓度下同时占据多个靶点，它仍可产生治疗作用，却不适合把实验表型归给单一蛋白。[^art-of-probe]

### 阴性类似物与正交探针约束因果解释 { #probe-controls }

阴性探针通常保留母体分子的整体骨架和相近理化性质，只改变关键识别元素，使其对目标的结合显著减弱。若活性探针产生表型而匹配的阴性类似物没有，便可排除一部分由溶剂、通用膜效应或共享骨架造成的解释。阴性类似物自身仍需确认细胞暴露和其他靶点谱；“无表型”也可能只是进入细胞不足。

orthogonal probe（正交探针）使用不同化学骨架结合相同靶标。两个结构无关、作用位点或结合方式不同的活性分子产生一致表型时，共同离靶作用的可能性下降。若再有靶标突变导致两者失效，或恢复一个不受探针作用的靶标版本能够救援表型，因果链会更强。对映体对照、位点突变、剂量—反应、洗脱恢复和不同读出平台都可作为正交证据；它们分别排除不同替代解释，不能由单一“阳性对照”包办。

### 结构—活性关系辨别识别与伪差 { #structure-activity-evidence }

连续类似物系列能显示活性是否随某个识别特征有规律地变化。若细胞表型效力、生化结合和细胞内占有在多个类似物间保持相同排序，说明三层现象可能由同一分子事件连接。若生化效力提高而细胞效力不变，需要检查通透、外排、代谢或信号上限；若只有报告信号随颜色更深或荧光更强的类似物改变，则应优先怀疑读出干扰。

结构—活性关系本身也可能是 structure–interference relationship（结构—干扰关系）。一系列疏水化合物随浓度形成胶体聚集物，可吸附多种蛋白并造成看似有规律的抑制；反应性过强的分子可无选择地共价修饰蛋白；自发荧光、淬灭、沉淀和报告酶抑制也会制造剂量—反应。改变检测方法、加入竞争配体、测量粒径或溶解度、用不相关蛋白做反筛，并把直接结合与功能读出分开，才能说明观察到的是靶标识别而非测定装置对化合物物性的响应。[^assay-interference]

## 选择性反应把分子事件转成可见信号 { #selective-chemical-reactions }

许多生物分子没有天然荧光，也缺少可直接富集的把手。化学生物学因而把识别模块、反应模块与报告模块组合起来：识别模块决定去向，反应模块在适当条件下形成稳定连接，荧光团、同位素、光敏基团或亲和标签提供成像、定量或富集读出。三者可以位于同一个分子，也可以分两步完成。后一种设计先用很小的化学把手标记目标，再在固定样品或活体系中连接较大的报告基团，通常能减少报告基团对原过程的扰动。

探针信号由“到达目标、发生反应、保留产物、产生读出”共同决定。荧光增强可能来自更多目标分子，也可能来自局部极性、pH、黏度或聚集改变；富集量增加可能来自标记速率提高，也可能来自蛋白丰度上升。将反应动力学、未反应背景和生物学变量分开，是从图像或质谱峰回到分子机制的必要步骤。

### 生物正交化学进入活细胞的反应网络 { #bioorthogonal-overview }

bioorthogonal reaction（生物正交反应）使用细胞天然分子中稀少或不存在的反应对，使两个化学把手在水相、复杂生物组分和接近生理条件下优先结合。理想反应需要足够快、选择性高、底物稳定，并使用尽量小的初始把手。叠氮基、炔基、张力烯烃和四嗪等把手构成了多种连接体系；选择哪一对反应物，要同时考虑速率、背景、细胞通透、亚细胞环境以及是否与其他标记通道相容。[^chemistry-living-systems]

metabolic labeling（代谢标记）把带化学把手的糖、氨基酸、脂质或核苷前体交给细胞自身的合成机器，使把手进入新生成的生物分子，随后再以生物正交反应连接荧光或富集标签。它报告的是给定时间窗内能够接纳该类似物的合成通量和分子集合，不等同于测量所有天然分子的绝对含量。类似物与天然底物竞争、酶的底物容忍度、代谢互变及不同细胞的摄取都会改变标记图样。具体反应类型、代谢掺入和成像策略见[生物正交化学、标记与成像](chemical_bioorthogonal.md)。

### 光与环境响应建立时空坐标 { #spatiotemporal-chemical-control }

光笼基团可暂时遮蔽配体或生物分子的活性，照光后释放；光开关则在不同波长下改变构象和亲和力。把照射限制在局部区域和短时间窗，可以在同一细胞中比较受扰动与未受扰动区域，并追踪效应传播。实际时间分辨率由光化学反应、分子扩散、结合与下游响应共同决定，空间分辨率也会因活化产物扩散而低于光斑尺寸。

环境响应荧光团把极性、黏度、pH、离子或酶反应转成强度、波长或寿命变化。可靠解释需要体外标定、结构相近但不响应的对照、浓度校正和独立测量，因为探针定位与环境变化可以同时改变信号。光漂白、激发引起的化学反应和通道串色同样属于观测模型的一部分；只有说明信号怎样由化学状态产生，图像才成为定量证据。

## 共价与近邻工具保存短暂相遇 { #covalent-proximity-tools }

可逆配体在裂解、洗涤和分离时可能解离，共价工具则能把特定时刻的识别事件保存成稳定键。典型共价探针由识别骨架、具有受控反应性的 electrophile（亲电反应基团）和报告把手组成。选择性来自先识别后反应：骨架把反应基团带到靶标附近，并以合适几何指向某个亲核残基；总体效率同时取决于可逆结合和成键速率。只提高反应性会扩大非特异标记，不能替代识别。

activity-based probe（活性探针）常利用某类酶的催化机制或活性位点亲核体，在酶处于可反应状态时形成共价标记。它测量的是可标记的功能状态，而非蛋白总量；抑制剂竞争使标记下降，可用于估计活性位点占有。光亲和探针则先以可逆配体定位，受光后产生短寿命反应中间体，捕获附近分子。被捕获蛋白可能是直接结合者，也可能只在活化瞬间靠近反应中心，因此仍需竞争和独立结合实验确认。

proximity labeling（邻近标记）让定位于特定蛋白或细胞区室的酶在一定时间窗内生成活性标记物，记录附近分子。它擅长捕捉短暂复合物和难以温和纯化的邻域，但“被标记”首先支持空间邻近，而不是直接物理结合。邻近标记在蛋白质组学中的读出边界见[互作组、复合物与邻近组](../bioinfo/proteomics.md#interactome-proximity)；共价、光亲和和邻近工具的化学结构与靶点确证流程见[共价工具、化学蛋白质组学与靶点鉴定](chemical_proteomics.md)。

## 靶点证据由结合逐步通向机制 { #target-evidence-chain }

化学探针产生表型后，机制解释至少包含几个彼此独立的问题：样品中的化合物是否具有声明的结构和浓度；它能否在简化体系中直接结合或调节候选靶标；在完整细胞中是否达到并占据该靶标；在实验浓度下还占据哪些分子；候选靶标的变化是否足以解释表型；下游时间顺序是否符合提出的机制。每一层都排除一组替代解释，也都有自己不能证明的部分。

细胞内 target engagement 是其中关键的桥梁。cellular thermal shift assay（CETSA）利用配体结合常使蛋白热稳定性发生可测变化的原理，在细胞或组织样品中检验结合；后续的蛋白质组尺度热分析还能同时寻找多个稳定性变化的蛋白。热转变支持化合物与蛋白状态发生耦联，却可能受复合物、代谢物和翻译后修饰间接影响，因此仍要与剂量竞争、纯化体系结合及遗传证据组合。[^cetsa]

### 直接靶标、结合蛋白与功能靶标 { #direct-functional-targets }

亲和富集或共价标记后由质谱鉴定的蛋白，是在当前实验条件下与探针共同富集的候选集合。加入过量未标记母体后富集下降，说明标记具有可竞争的识别成分；改变关键反应基团或使用失活类似物，可区分骨架识别与非特异反应。浓度依赖、时间依赖和位点定位进一步缩小候选，但共同富集仍可能来自同一复合物中的间接成员。

direct target（直接靶标）需要分子层面的结合或共价位点证据；functional target（功能靶标）还要求它介导所研究的表型。直接结合者可以没有当前表型，功能靶标也可能是由探针首先作用于另一蛋白后间接改变的下游节点。靶标抗性突变、表达量—效应关系、功能缺失与救援、重构体系以及结构验证能逐步连接这两类声明。质谱的谱图鉴定、定量和错误发现率属于数据推断层，见[从谱图到肽段鉴定](../bioinfo/proteomics.md#spectrum-identification)与[目标—诱饵、FDR 与蛋白推断](../bioinfo/proteomics.md#fdr-protein-inference)。

### 多条证据在同一剂量与时间轴上会合 { #orthogonal-evidence-chain }

最有力的机制不是把许多实验名称并列，而是让它们对同一预测给出一致结果。若细胞内占有在低浓度开始，近端生化读出随后改变，远端表型再出现，并且失活类似物、无靶标细胞或抗性突变体不呈现这条序列，证据便形成方向明确的链条。若表型只在远高于靶点饱和浓度时出现，则应寻找第二靶标、化合物聚集或非特异应激。

不同证据也可揭示模型错误。两个正交探针都占据靶标却产生不同表型，可能说明其中一个还有离靶作用、结合位点诱导不同构象，或实验时程触发了不同适应过程；遗传缺失与急性抑制不一致，可能来自结构性支架功能、发育代偿或抑制剂只改变部分活动。把矛盾保留下来并提出可区分的下一步实验，正是化学生物学从“有活性分子”走向分子机制的过程。基因调控研究中的结合、状态与因果区分见[调控机制的证据层次](../molecular/gene_regulation.md#gene-regulation-evidence)。

## 三个专题页的递进关系 { #chemical-biology-page-group }

[化学探针与化学遗传学](chemical_probes.md)从配体质量与扰动逻辑出发，细化亲和力、效力、选择性、占有率、正向／反向化学遗传学、阴性类似物和正交探针。它回答怎样选择一个足以支撑因果推断的分子，以及怎样由表型往返于靶标。

[生物正交化学、标记与成像](chemical_bioorthogonal.md)把重点移到反应和读出，比较选择性连接、代谢标记、荧光与环境响应探针、光笼和光开关。它回答怎样在拥挤、反应丰富的活体系中为特定分子或时间窗生成可解释信号。

[共价工具、化学蛋白质组学与靶点鉴定](chemical_proteomics.md)把化学事件接到蛋白质组尺度，讨论活性位点、光亲和和邻近标记怎样经过富集、竞争和质谱形成候选靶标，再由生化、结构与遗传证据区分结合蛋白、直接靶标和功能靶标。三页共同构成从设计工具、获得读出到闭合机制证据的完整路径。

## 参考资料与延伸阅读 { #references }

- *Nature Chemical Biology*. [Aims & Scope](https://www.nature.com/nchembio/aims).
- Schreiber, S. L. [Chemical genetics resulting from a passion for synthetic organic chemistry](https://doi.org/10.1016/S0968-0896(98)00126-6). *Bioorganic & Medicinal Chemistry* 6, 1127–1152 (1998).
- Frye, S. V. [The art of the chemical probe](https://doi.org/10.1038/nchembio.296). *Nature Chemical Biology* 6, 159–161 (2010).
- Bunnage, M. E., Chekler, E. L. P. & Jones, L. H. [Target validation using chemical probes](https://doi.org/10.1038/nchembio.1197). *Nature Chemical Biology* 9, 195–199 (2013).
- Chemical Probes Portal. [Classical Modulators Criteria](https://www.chemicalprobes.org/info/classical-modulators).
- Prescher, J. A. & Bertozzi, C. R. [Chemistry in living systems](https://doi.org/10.1038/nchembio0605-13). *Nature Chemical Biology* 1, 13–21 (2005).
- Gerry, C. J. & Schreiber, S. L. [Unifying principles of bifunctional, proximity-inducing small molecules](https://doi.org/10.1038/s41589-020-0469-1). *Nature Chemical Biology* 16, 369–378 (2020).
- Martinez Molina, D. et al. [Monitoring drug target engagement in cells and tissues using the cellular thermal shift assay](https://doi.org/10.1126/science.1233606). *Science* 341, 84–87 (2013).
- Markossian, S. et al., eds. [Assay Guidance Manual](https://www.ncbi.nlm.nih.gov/books/NBK53196/). National Center for Advancing Translational Sciences.

[^chemical-biology-scope]: *Nature Chemical Biology* 的[学科范围](https://www.nature.com/nchembio/aims)以化学、生命科学及相邻学科的思想和方法理解并在分子尺度操纵生物系统，同时强调化学与生物学两侧的充分表征。本文据此把化学结构视为提出和检验生物学机制的实验变量。
[^induced-proximity]: Gerry, C. J. & Schreiber, S. L. [Unifying principles of bifunctional, proximity-inducing small molecules](https://doi.org/10.1038/s41589-020-0469-1). *Nature Chemical Biology* 16, 369–378 (2020)。该文以诱导邻近和有效摩尔浓度统一讨论分子胶及带连接臂的双功能分子。
[^chemical-genetics]: Schreiber, S. L. [Chemical genetics resulting from a passion for synthetic organic chemistry](https://doi.org/10.1016/S0968-0896(98)00126-6). *Bioorganic & Medicinal Chemistry* 6, 1127–1152 (1998)。该综述是以小分子扰动连接化学结构、靶标与表型的经典论述之一。
[^probe-criteria]: Chemical Probes Portal, [Classical Modulators Criteria](https://www.chemicalprobes.org/info/classical-modulators)。该页面分别列出效力、选择性、细胞内靶点占有、化合物性质、失活对照与正交活性化合物等评价维度。
[^art-of-probe]: Frye, S. V. [The art of the chemical probe](https://doi.org/10.1038/nchembio.296). *Nature Chemical Biology* 6, 159–161 (2010)；Bunnage, M. E., Chekler, E. L. P. & Jones, L. H. [Target validation using chemical probes](https://doi.org/10.1038/nchembio.1197). *Nature Chemical Biology* 9, 195–199 (2013)。两文从实验解释与靶标确证说明探针质量为何不能只由“有活性”判断。
[^assay-interference]: NCBI Bookshelf, *Assay Guidance Manual*：[Assay Artifacts and Interferences](https://www.ncbi.nlm.nih.gov/sites/books/NBK326708/)、[Assay Interference by Aggregation](https://www.ncbi.nlm.nih.gov/books/NBK442297/)与[Interference with Fluorescence and Absorbance](https://www.ncbi.nlm.nih.gov/books/NBK343429/)。这些章节分别说明非特异反应、胶体聚集和光学读出怎样造成表观活性。
[^chemistry-living-systems]: Prescher, J. A. & Bertozzi, C. R. [Chemistry in living systems](https://doi.org/10.1038/nchembio0605-13). *Nature Chemical Biology* 1, 13–21 (2005)。该综述以小型化学报告基团及后续选择性连接说明生物正交标记的基本逻辑。
[^cetsa]: Martinez Molina, D. et al. [Monitoring drug target engagement in cells and tissues using the cellular thermal shift assay](https://doi.org/10.1126/science.1233606). *Science* 341, 84–87 (2013)。原始研究利用配体诱导的热稳定性变化在细胞和组织样品中监测靶标结合。
