# 演化发育生物学

每一代生物都要重新经历发育。遗传变异先改变分子表达、细胞状态、组织相互作用或生长过程，新的表型再由这些过程产生。演化发育生物学（evolutionary developmental biology, evo-devo）研究的正是这段从可遗传变异到表型变异的因果路线，并比较这条路线怎样在谱系中保存、改接或重新部署。

发育机制说明哪些变异较容易产生、一个改变会牵连哪些性状，以及复杂结构可以怎样由已有部分重组。变异进入种群后的扩散、丢失和固定仍取决于遗传漂变、基因流和自然选择等群体过程；性状是否适应、何时起源以及是否同源，也需要生态、化石和系统发育证据。evo-devo 因而连接发育机制与演化过程，而不是用胚胎学取代群体遗传学。[^evo-devo-synthesis]

## 同源性需要在明确的层级上比较 { #homology-levels }

同源性是共同祖先来源的假说，不是外形相似度的别名。四足动物的前肢即使分别形成翼、鳍状肢和手，仍可因在身体中的位置、骨骼关系及系统发育连续性而判为同源；两个谱系各自减少到相同指趾数，则只是相似的性状状态，未必从同一次减少事件继承。趋同、平行和逆转共同构成同塑性（homoplasy），它们都需要把性状状态映射到系统树上才能识别。具体的建树、祖先状态重建和同塑性检验由[系统发育与生物分类](../evolution/phylogenetics.md)承接。

同一个体内重复出现的椎骨、体节、牙齿或附肢常称系列同源结构。这里的“同源”主要指它们由共同的重复生成机制和身份系统建立，并不表示一枚椎骨是另一枚椎骨经世代繁殖产生的祖先。重复单元随后可以个性化：共享的发生程序维持基本结构，Hox 等位置系统、局部信号和器官负荷又使不同单元获得颈椎、胸椎或腰椎等不同身份。模块化因此是部分耦合，不是每个模块都能脱离全身而独立改变。

不同层级还可能给出表面矛盾的答案。昆虫和脊椎动物眼的器官历史很复杂，却都调用 Pax6、Six、Eya 等古老调控因子和光感受装置；这种在形态同源性尚不能由共同器官祖先直接解释时，对更深层发生装置的共享称为深同源。共同表达一个保守基因只能提出深同源候选，不能单独证明两种器官整体同源。相反，同源结构的具体发生网络也可在后代谱系中逐渐改接，形成发育系统漂变（developmental system drift）：表型保持，遗传依赖已经变化。小鼠、鸡和斑马鱼都以分节时钟形成体节，但三者共有的周期基因很少，便说明保守过程不要求每条网络边都不变。[^deep-homology-drift]

## 保守发育工具箱通过不同接线产生多样形态 { #conserved-toolkit }

动物使用的转录因子家族和信号通路远比形态类型古老。Wnt、Hedgehog、BMP／TGF-$\beta$、FGF、Notch 以及 Pax、T-box、Hox 等因子在许多动物中反复参与轴、器官原基和细胞类型建立。所谓发育工具箱指这些可重复部署的基因与网络模块，不表示存在一组脱离增强子、细胞背景和组织力学就能直接绘制身体的“主控基因”。同一种蛋白在新位置表达、读取不同增强子或连接不同下游靶点，都能产生新的发育结果。

Hox 基因是这种保守与变化并存的典型。Hox 只是 homeobox 转录因子中的一个分支；双侧对称动物的共同祖先已具有沿前后轴指定区域身份的成组 Hox 装置，后续谱系发生了基因丢失、基因簇分裂和重复。脊椎动物早期的全基因组重复产生多个旁系同源簇，四足动物通常保留 HOXA–D 四簇，许多硬骨鱼又经历额外重复。基因在簇中的顺序与表达域的空间顺序常保持共线关系，部分动物还具有时间共线性，但共线性的严格程度、基因数和表达边界都可演化。[^hox-evolution]

Hox 蛋白的古老功能框架可以保存，形态差异却常来自它们何时、何地表达以及读取哪些靶增强子。改变 Hox 表达边界会使椎骨、附肢或其他区域身份移动；基因重复则允许拷贝分担祖先功能，或在保留部分旧功能后获得新的调控输入。Hox 失功能导致的同源异形转变、共线性和组合身份见[胚轴、分节与位置身份](axis_patterning.md#hox-positional-identity)，本页关注这些系统在谱系间怎样改变。

## 顺式调控变化能够局部改写发育网络 { #regulatory-evolution }

发育基因调控网络由转录因子、信号输入和顺式调控元件之间的因果联系组成。网络不同部分承受的演化后果并不相同：过早改变建立大范围胚体区域的连接，往往牵连许多后续结构；较晚改变某一器官、组织或阶段使用的增强子，作用范围可能更局部。一个多效性基因可由多个增强子分别控制不同表达域，改变其中一个元件便可能调整一处结构而保留该基因在其他组织中的必要功能。[^grn-evolution]

三刺鱼腹鳍退化提供了从自然变异追到发育机制的经典证据。多个淡水种群的腹鳍缺失定位到 *Pitx1* 上游非编码区；完整型与退化型杂交后，两条等位基因处在相同的反式环境中，退化型等位仍只在腹鳍组织低表达，支持顺式改变。进一步定位发现腹鳍特异增强子在多个种群中独立缺失，含相应调控区的转基因构建又能恢复腹鳍结构。这里改变的是 *Pitx1* 的局部使用，而不是把这个在头部、垂体等部位也有作用的转录因子整体删除。[^pitx1-enhancer]

顺式调控不是形态演化的唯一分子来源。蛋白编码变化可以调整配体—受体特异性、转录因子活性或结构蛋白性质；反式调控因子、基因和基因组重复、拷贝数变化、染色质结构以及细胞外基质和组织力学也能改变发育。增强子特别适合解释多效性基因的时空局部变化，却不能据少数著名案例断言所有形态差异都来自非编码 DNA，或每次大形态变化都只需一个大效应突变。

## 共选使旧模块进入新的发育情境 { #cooption-and-individuation }

共选（co-option）是已有基因、调控子网络或细胞行为被部署到新的时间、位置或组织。新的增强子输入可以让一个调控因子进入原本不表达的区域，该因子已有的下游连接随后把一组复杂功能带入新情境；基因重复也可先解除一部分多效性约束，再让某个拷贝获得新表达域。演化创新由此常包含旧部件的新组合，而不要求每个新结构都从全新基因开始。[^cooption]

重复模块为共选和个性化提供了空间。祖先的一系列相似附肢可以在位置身份和局部网络改变后分别承担行走、取食、感觉或交配功能；同一排牙齿也能在共同发生基础上分化出门齿、犬齿和臼齿。个性化会降低单元之间的完全相关，使其中一部分能够改变而其他部分保持，但共享的早期图式、供血或力学连接仍会产生协同变化。因而“模块”应由相对独立的变异、调控和功能证据识别，不能只因图中可以画出边界就认定。

证明共选需要比较调控关系的历史。新结构中出现一个古老基因，可能是上游网络整体被重新部署，也可能只是该基因独立进入一个新网络。跨物种表达与染色质图谱能提出候选，增强子交换、内源调控元件编辑和功能扰动用来确定哪些连接真实工作，再由系统发育取样判断这种接线在何处分化。保守基因的名字本身既不能证明结构同源，也不能证明整套网络被原样搬运。

## 时间、位置、数量和性质可以分别演化 { #developmental-variation-dimensions }

异时发生（heterochrony）是相关谱系间发育事件起始、终止、速率或相对顺序的演化改变。若后代成体保留祖先较早阶段的特征，结果称幼态形成（paedomorphosis）；它可来自发育速率减慢的幼态持续（neoteny）、生殖成熟相对提前并使体细胞发育较早终止的早熟发生（progenesis），也可来自起始延后。过度形成（peramorphosis）则使某结构超过祖先终末状态，可由起始提前、速率加快或终止延后产生。钝口螈类在达到生殖成熟时仍保留鳃等幼体特征，是幼态形成的常见例子，但不同物种和性状的内分泌、生态与遗传原因需分别检验。[^heterochrony]

异速生长（allometry）描述性状尺度随个体大小或年龄变化的关系。后代拥有不同身体比例可能源于生长速率或终止时间改变，也可能源于细胞数量、力学和局部信号改变；一条成体比例线本身不能证明异时发生。可靠分析要把祖先与后代的发生轨迹、事件顺序和系统发育关系放在一起，区分整体体型变化与局部时序变化。

空间位置改变称异位发生（heterotopy），例如一个调控网络的表达域或组织相互作用边界移动；信号强度、细胞数或表达量改变可归入异量发生（heterometry）；蛋白性质、细胞类型或调控关系的类别改变有时称异型发生（heterotypy）。这些维度经常组合出现：增强子既可移动表达域，也可改变表达量；Hox 边界移动又会使局部组织读取不同的身份程序。术语的作用是指出可测的发生变量，而不是仅凭成体外形给每种演化各贴一个标签。

## 个体发生不会重演成年祖先序列 { #recapitulation-and-hourglass }

海克尔的生物发生律把个体发生解释为系统发生的快速重演，这种强形式并不成立。胚胎不会依次经过成年鱼、成年爬行动物等祖先阶段；胚弓、尾芽或暂时性肾结构是当前胚胎自身的功能和建成步骤，不能按外形相似直接等同另一个物种的成体器官。冯·贝尔强调胚胎先出现较广泛的类群特征，再逐步形成专门特征，并指出一种动物的胚胎不会变成另一种动物的成体，这比重演论接近现代比较框架。[^recapitulation]

不同物种的早期卵裂和胚外结构可以差异很大，成体也高度分化；在许多动物比较中，器官原基和主要轴关系建立的中期阶段相对保守，形成“发育沙漏”式样。这个模式是需按组织、基因集和取样类群检验的统计趋势，不是所有基因在同一个绝对阶段都最保守的普遍定律。胚胎比较的价值在于重建发生过程怎样分化，并与化石和系统树相互约束，而不是从单张胚胎图读出一条线性的生命阶梯。

## 发育偏向塑造可供选择的变异分布 { #developmental-bias }

突变可以近似随机地产生于基因组位置，但发育系统把基因型变化转换成表型时并不均匀。有些扰动被反馈和冗余吸收，有些沿已有模块产生连续变化，还有些越过阈值后形成少数离散结果。发育偏向（developmental bias）描述这种表型变异在方向、组合和频率上的不均匀；发育约束是其中较强的情形，即某些方向很难产生可存活、可繁殖的变体。它不同于稳定选择：前者涉及变异怎样生成，后者涉及已经生成的表型怎样在繁殖中被筛选。[^developmental-bias]

绝大多数哺乳动物有七枚颈椎，长颈主要由椎骨伸长而不是增加数目。改变颈椎数的发育扰动常同时影响 Hox 图式、体节衍生物和其他器官，能存活并繁殖的变异因而很少；这比“七是最适数字”更接近约束机制。另一方面，模块化增强子、基因重复和稳健网络能够降低多效性，让某些方向更容易变化，形成演化能力（evolvability）。偏向既可能限制可达表型，也可能反复提供整合良好的变异。

同一种表型在多个谱系独立出现，可能同时含有生态选择、发育偏向和突变偏向。三刺鱼 *Pitx1* 调控区既处在能局部改变腹鳍的网络位置，也具有容易发生缺失的序列结构；相似栖息环境中的选择再提高某些缺失变体的频率。重复演化本身不能区分这几层原因，必须分别测量变异来源、发生机制和适合度后果。

## 演化发育假说需要跨尺度证据 { #evo-devo-evidence }

比较表达图谱只说明两个物种在何处使用相似分子。要判断调控机制是否保守，需要在多个有系统发育代表性的物种中扰动基因或增强子，比较最早发生变化，并用跨物种救援、增强子报告和内源序列替换检验功能。若表型相同而扰动依赖不同，结果支持发育系统漂变；若非同源结构调用复杂而相似的古老子网络，则可提出深同源或共选假说，仍需排除独立招募的替代解释。

自然群体中的形态差异还要通过数量性状定位、等位特异表达、精细定位和基因组编辑连接到具体变异，再用种群频率、选择信号和生态功能判断其演化命运。化石给出结构出现的最晚时间和过渡形态，系统树规定比较方向，发育实验解释结构怎样生成。把这些证据接在一起，才能从“某基因参与某器官”推进到“哪一次可遗传改变怎样改写发生，并在何种演化过程中保留下来”。

## 参考资料与延伸阅读 { #references }

- Müller GB. [Evo–devo: extending the evolutionary synthesis](https://www.nature.com/articles/nrg2219). *Nature Reviews Genetics*. 2007;8:943–949.
- Shubin N, Tabin C, Carroll S. [Deep homology and the origins of evolutionary novelty](https://www.nature.com/articles/nature07891). *Nature*. 2009;457:818–823.
- Peter IS, Davidson EH. [Evolution of Gene Regulatory Networks that Control Embryonic Development of the Body Plan](https://pmc.ncbi.nlm.nih.gov/articles/PMC3076009/). *Cell*. 2011;144:970–985.
- Montavon T, Duboule D. [Chromatin organization and global regulation of Hox gene clusters](https://pmc.ncbi.nlm.nih.gov/articles/PMC3682730/). *Philosophical Transactions of the Royal Society B*. 2013;368:20120367.
- Chan YF, et al. [Adaptive evolution of pelvic reduction in sticklebacks by recurrent deletion of a Pitx1 enhancer](https://pmc.ncbi.nlm.nih.gov/articles/PMC3109066/). *Science*. 2010;327:302–305.
- Keyte AL, Smith KK. [Heterochrony and developmental timing mechanisms: changing ontogenies in evolution](https://pmc.ncbi.nlm.nih.gov/articles/PMC4201350/). *Seminars in Cell & Developmental Biology*. 2014;34:99–107.
- Uller T, et al. [Developmental Bias and Evolution: A Regulatory Network Perspective](https://pmc.ncbi.nlm.nih.gov/articles/PMC6063245/). *Genetics*. 2018;209:949–966.
- Richardson MK. [Theories, laws, and models in evo-devo](https://pmc.ncbi.nlm.nih.gov/articles/PMC9292786/). *Journal of Experimental Zoology Part B*. 2022;338:36–61.
- McColgan Á, DiFrisco J. [Understanding developmental system drift](https://pmc.ncbi.nlm.nih.gov/articles/PMC11529278/). *Development*. 2024;151:dev203054.

[^evo-devo-synthesis]: Evo-devo 的研究范围、发育机制与演化理论的互补关系见 Müller 的[综述](https://www.nature.com/articles/nrg2219)；顺式调控在形态演化中的重要性及其适用边界见 Carroll 的[综合论述](https://www.sciencedirect.com/science/article/pii/S0092867408008179)。
[^deep-homology-drift]: 深同源概念及共享发生装置不等于器官整体同源，见 Shubin、Tabin 与 Carroll 的[综述](https://www.nature.com/articles/nature07891)；保守表型下调控机制分化的定义、体节时钟实例和证据要求见 McColgan 与 DiFrisco 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC11529278/)。
[^hox-evolution]: Hox 基因簇的共同起源、重复／丢失、空间与时间共线性以及远程调控见 Montavon 与 Duboule 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3682730/)；不同脊椎动物基因簇组成的边界见[早期脊椎动物 Hox 基因簇综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5054437/)。
[^grn-evolution]: 顺式调控元件怎样编码网络连接、不同层级子网络的保守性与可变性，见 Peter 与 Davidson 的[发育 GRN 演化综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3076009/)；单个增强子与完整网络证据的区别见 Halfon 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5608025/)。
[^pitx1-enhancer]: *Pitx1* 腹鳍增强子的等位特异表达、精细定位、独立缺失、转基因恢复和种群选择证据见 Chan 等的[原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC3109066/)；后续研究还显示该区域的 DNA 结构和复制方向可提高断裂与缺失率，见 Xie 等的[研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC6677656/)。
[^cooption]: 已有基因与调控网络通过新顺式输入进入新表达域的机制及模块化边界，见 [Conservation and co-option in developmental programmes](https://pmc.ncbi.nlm.nih.gov/articles/PMC1282587/)和 Peter 与 Davidson 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3076009/)。
[^heterochrony]: 异时发生须比较相关谱系的事件顺序、起始、终止和速率；幼态形成、过度形成及异速生长推断的边界见 Keyte 与 Smith 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4201350/)。
[^recapitulation]: 重演论、冯·贝尔概括与发育沙漏都属于须按谱系和数据尺度检验的历史或现代模型，见 Richardson 的[评述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9292786/)。
[^developmental-bias]: 发育偏向、约束、模块化和演化能力的关系，以及哺乳动物颈椎数实例，见 Uller 等的[调控网络综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6063245/)；发育偏向描述变异生成分布，不单独决定变异在种群中的命运。
