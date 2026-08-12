# 原核与真核基因表达调控

基因表达调控决定一段遗传信息在何时、何处、以多大通量形成哪一种 RNA 或蛋白质。调控可以改变转录起始和延伸，也可以改变 RNA 的加工、输出、定位、翻译与降解；已经合成的蛋白质还会继续受到定位、修饰和周转控制。因此，稳态 mRNA 或蛋白质丰度由合成与清除速率共同产生，启动子状态只代表其中一个环节。[^regulatory-layers]

顺式作用元件通常通过与自身物理相连的核酸分子发挥作用，例如启动子、操纵序列、增强子、RNA 上的结合位点和结构开关；反式作用因子则是可扩散的蛋白质或 RNA。二者相遇的概率还受拷贝数、染色质或拟核组织、亚细胞位置和时间限制。细菌、古菌和真核生物都使用激活、抑制、反馈与组合控制，只是它们把这些逻辑安放在不同的基因组结构和细胞区室中。

## 细菌把局部开关接入全局生理状态 { #bacterial-gene-regulation }

### 操纵子协调同一转录单位内的基因 { #operons-cis-trans }

细菌操纵子由一个或多个启动子控制一组共同转录的基因，转录本可含多个编码区；操纵序列等调控位点常与启动子相邻或重叠，调节蛋白结合后改变 RNA 聚合酶起始概率。编码调节蛋白的基因可以位于操纵子外，产物在反式发挥作用。多个相距很远的操纵子和单基因转录单位若受同一调节因子控制，构成调控子；受到同一种环境变化而共同响应的基因集合则可称刺激响应基因集，其中未必共享一个直接调节因子。[^bacterial-regulation]

操纵子是常见而非普遍的细菌组织方式，单个操纵子也可有内部启动子、条件性终止和不同 mRNA 稳定性，使下游基因的最终产量并不严格相等。古菌和少数真核谱系也存在多顺反子转录；线虫等真核操纵子常靠反式剪接与 3′ 端形成把长前体加工成分立的 mRNA。由此可见，共转录、共调控和等量蛋白表达是三个需要分别验证的判断。

### 乳糖操纵子整合底物和碳源状态 { #lac-operon }

大肠杆菌 *lacZYA* 转录单位编码 $\beta$-半乳糖苷酶、乳糖通透酶和转乙酰酶。缺少诱导物时，四聚体 LacI 可结合主操纵序列，并借助两个辅助操纵序列形成 DNA 环，降低起始和早期延伸的成功率；仍有少量基础表达，使乳糖得以进入并由 $\beta$-半乳糖苷酶生成异乳糖。异乳糖结合 LacI 后降低其对操纵序列的亲和力，解除这一负控制。IPTG 也能诱导 LacI，却不被 $\beta$-半乳糖苷酶当作正常底物代谢，因而常用于实验性持续诱导。[^lac-operon]

高水平表达需要解除 LacI 抑制并获得正向激活。葡萄糖缺乏时，较高的 cAMP 可与 CRP／CAP 形成激活复合物，稳定 RNA 聚合酶在 *lac* 启动子的招募；葡萄糖转运还可通过磷酸转移酶系统影响乳糖通透酶，形成诱导物排阻。分解代谢物阻遏由启动子激活、糖转运与代谢状态共同形成，乳糖操纵系统展示的是两个输入的组合逻辑，其他分解代谢操纵子可使用不同传感器。

### 色氨酸操纵子以阻遏和衰减读取两种信号 { #trp-operon-attenuation }

大肠杆菌 *trp* 操纵子同时使用 TrpR 阻遏和转录衰减。色氨酸作为共抑制因子结合 TrpR，使其更易占据操纵序列，直接降低起始；这一路径主要读取游离色氨酸。已经起始的转录还会经过 *trpL* 前导区。当前导肽的连续 Trp 密码子能被顺利翻译时，核糖体遮蔽 RNA 的第 2 区，第 3、4 区形成内在终止子；氨酰化 tRNA$^{\mathrm{Trp}}$ 缺乏时，核糖体停在相应密码子，第 2、3 区形成反终止结构，RNA 聚合酶得以进入结构基因。转录—翻译空间耦联使后一机制能够近实时读取氨酰化状态。[^attenuation-riboswitch]

不同细菌的衰减不必都使用连续稀有密码子。T-box 前导区可让未氨酰化 tRNA 直接稳定反终止结构，核糖体介导的衰减还可读取翻译起始或移动速度；另一些系统由 RNA 结合蛋白或代谢物改变终止结构。把 *trpL* 的四段配对当作所有氨基酸合成操纵子的固定结构，会遗漏这些谱系和配体差异。

### RNA 结构把代谢物、温度和小 RNA 接入表达 { #bacterial-rna-regulation }

核糖开关通常由识别配体的适配体结构域和改变表达的表达平台组成。代谢物、离子、tRNA 或其他配体稳定某一 RNA 折叠构象后，可以改变转录终止、翻译起始、RNA 切割或剪接；同一种硫胺素焦磷酸适配体在不同基因和生物中也可连接不同输出。RNA 温度计则由温度改变 5′ 前导区结构和核糖体结合位点的可及性，不需要把温度转成一种专门的小分子配体。

细菌小调控 RNA 可通过短碱基配对遮蔽或暴露核糖体结合位点、改变 RNase 的可及性，或与 RNA 结合蛋白共同调节多个转录本。另一些反义 RNA 与质粒复制、毒素—抗毒素系统或噬菌体生活史相连。RNA 发夹既可能保护末端，也可能创造核酸酶底物；细菌多聚腺苷酸化常为 3′ 外切核酸酶提供可进入的单链尾，与多数真核 mRNA 中稳定的 poly(A)–PABP 组合后果不同。完整的 RNA 成熟与周转装置见[RNA 转录后加工](rna_processing.md#bacterial-rna-processing)。

### 全局响应重新分配有限的表达资源 { #bacterial-global-regulation }

替代 $\sigma$ 因子让同一核心 RNA 聚合酶改认另一组启动子，抗 $\sigma$ 因子、受控蛋白水解和 $\sigma$ 因子级联又能限定响应的先后。营养限制时，RelA／SpoT 同源蛋白改变鸟苷四磷酸与鸟苷五磷酸的水平，二者统称 (p)ppGpp；在不同细菌中，它可直接调节 RNA 聚合酶，也可经 GTP 库、转录因子和酶靶标改写核糖体生物发生、氨基酸合成、物质转运与应激存活。严紧反应以网络重分配改变这些过程的相对通量，各项活动仍随物种与状态保留不同水平。[^stringent-response]

双组分系统通常由感受组氨酸激酶和响应调节蛋白组成。激酶在特定条件下自磷酸化并把磷酰基转给调节蛋白接收结构域的 Asp，后者常以 DNA 结合输出改变转录；许多感受器也具有磷酸酶活性，输出取决于激酶与磷酸酶活性的平衡。多步磷酸接力、胞质型感受器和非转录输出都扩展了这一范式。群体感应又把自诱导物的产生、运输、扩散、降解和受体读取接到基因网络；局部流动和空间结构会改变信号浓度，因此它读取的是群体与环境共同形成的化学状态。不同细菌采用 AHL、肽或其他自诱导物，信号系统随谱系而异。[^two-component-quorum]

成簇规律间隔短回文重复序列及其相关蛋白（clustered regularly interspaced short palindromic repeats and CRISPR-associated proteins，CRISPR–Cas）的间隔序列获取、crRNA 成熟和干扰主要构成适应性抗外源核酸系统，其功能层次区别于一般环境转录调节器；其与移动元件的竞争见[DNA 重组与转座](dna_recombination.md#transposon-control)。DNA 损伤—LexA、碳分解代谢物调控等调控子展示了全局协调，但仍需逐个确定直接靶位点；刺激后共同变化的基因还可能包含间接响应。

## 古菌组合真核样基础机器与局部调节因子 { #archaeal-gene-regulation }

古菌 RNA 聚合酶和 TBP、TFB、TFE 等基础因子与真核 Pol II 装置同源，许多序列特异性调节蛋白却像细菌调节蛋白一样结合在核心启动子附近，阻挡 TBP／TFB／聚合酶，或帮助其招募。一个基因组可编码多个 TBP、TFB 或其他因子并赋予不同的启动子偏好，但这种分工不等同于细菌的替代 $\sigma$ 因子。古菌也有操纵子、无前导序列的转录本、小 RNA 和核糖开关，其组合随谱系变化。[^archaeal-regulation]

含组蛋白的古菌利用组蛋白构成的结构改变 DNA 可及性和延伸屏障；另一些谱系以 Alba、Cren7、Sul7 等拟核蛋白组织基因组。古菌组蛋白通常没有真核典型组蛋白尾，也缺少真核式的大型 ATP 依赖重塑与共激活因子体系；局部调节蛋白与延伸因子因而在蛋白结合的基因组上承担更直接的控制。古菌具有转录机器、染色质和细胞空间特征的独特组合，需要结合自身装置理解，而非只套用细菌操纵子模型。

## 真核转录调控建立细胞类型特异的可用基因集合 { #eukaryotic-transcription-control }

### 核小体可及性与化学标记彼此耦联 { #chromatin-accessibility-control }

核小体占据和 DNA 缠绕改变转录因子与聚合酶接触序列的机会。先锋因子可在部分核小体背景中先行结合，ATP 依赖的重塑复合物随后滑动、重构或移除核小体；组蛋白伴侣负责交换和重新装配。组蛋白乙酰化可改变尾部电荷并招募溴结构域蛋白，赖氨酸甲基化则主要产生不同读取蛋白的结合界面；同为甲基化，H3K4me3、H3K27me3 和 H3K9me3 所在位置与复合物并不相同。写入酶、读取蛋白和去除酶是反应角色，所谓“组蛋白密码”也必须落实到残基、修饰状态、邻近标记和细胞背景。[^chromatin-accessibility]

DNA 甲基化的分布和作用同样依赖谱系与位置。脊椎动物启动子 CpG 岛甲基化常与稳定抑制相关，基因体甲基化、低 CpG 启动子和增强子的关系更复杂；植物 CG、CHG 和 CHH 甲基化由不同酶系维持，许多真菌和无脊椎动物又有大幅简化或丢失。甲基化既可妨碍部分转录因子，也可招募甲基化 CpG 结合蛋白，并与核小体、组蛋白标记和复制后的维持过程耦联。一个位点的甲基化与低表达相关，尚不能单独确定它是原因、结果还是细胞组成差异。染色质物理结构见[细胞核与染色质](../cell/nucleus_chromatin.md#chromatin-states)，跨细胞世代的建立和遗传边界见[基因组学与表观遗传学](../genetics/genomics_epigenetics.md)。

基因组印记在特定哺乳动物位点以亲本来源依赖的控制区维持等位基因偏倚表达，建立、擦除和读取过程随生殖系与发育阶段转换；其作用单位是特定位点而非整套父源或母源染色体。X 染色体失活、基因组印记与其他染色质记忆的遗传学后果见[基因组学与表观遗传学](../genetics/genomics_epigenetics.md)，它们也通过可及性、转录因子与 RNA 改变当前细胞表达。

### 转录因子以组合占位解释信号和细胞状态 { #transcription-factor-combinations }

序列特异性转录因子常把 DNA 结合结构域与激活、抑制、二聚化或配体感受区组合。同源结构域、碱性螺旋—环—螺旋、碱性亮氨酸拉链、锌指和翼状螺旋等结构以不同几何读取 DNA 大沟及骨架；同一基序仍可能被家族成员竞争，邻位因子、DNA 形状、核小体和辅助因子决定实际占据。激活结构域可招募 Mediator、组蛋白乙酰转移酶、染色质重塑复合物或延伸因子，抑制因子可竞争位点、阻断复合物或招募共抑制因子。DNA 结合和表达改变是分开的机制步骤。

细胞信号常通过磷酸化、配体结合、抑制蛋白降解、蛋白水解释放或核转运改变转录因子的可用性。CREB、核受体、Smad、STAT、NF-$\kappa$B 和 Notch 胞内结构域最终都要与细胞类型特异的因子、共激活因子和现有染色质状态协作；同一个信号因而能在不同细胞产生不同转录程序。上游转换与时间编码见[细胞信号转导](../cell/cell_signaling.md#signaling-grammar)。

真核转录控制也延伸到起始之后。启动子近端暂停可暂存已经起始的 Pol II，P-TEFb 等因子促进暂停释放；HIV Tat 招募 P-TEFb 是病毒利用这一界面的专门实例，并非所有细胞基因都使用 Tat 式反终止结构。延伸速率、共转录加工与终止因子招募还能改变完整转录本产量。Pol I 的 rDNA 模板在活跃与非活跃染色质状态间分配，SL1、UBF、RRN3 和营养信号调节 pre-rRNA 转录；Pol III 则可由 Maf1 等压低 tRNA 与 5S rRNA 合成。三种聚合酶的起始与终止装置见[转录与 RNA 生物合成](transcription.md#nuclear-rna-polymerases)。

### 增强子与启动子的通信具有选择性和动态性 { #enhancer-promoter-communication }

核心启动子组织预起始复合物，近端元件与远端增强子则集中序列特异性因子和辅助因子。增强子可以位于靶基因上游、下游或内含子中，许多增强子在报告系统实验中对方向不敏感；这些是常见性质而非无条件定义。启动子兼容性、因子组成、线性距离、染色质状态、CTCF／cohesin 约束和三维接触共同限制靶基因选择。绝缘子也不是一堵普遍阻断所有增强子的墙，而是在特定位置和蛋白背景中改变接触、结构域边界或染色质状态的扩展。[^enhancer-mechanisms]

增强子结合因子可经瞬时接触、Mediator／辅助因子枢纽和局部浓度变化提高起始或促进启动子近端暂停释放。基因转录常以爆发形式发生，增强子在许多系统中主要提高爆发频率，但启动子、细胞状态和测定方法会改变这一关系。Hi-C 或成像观察到增强子—启动子接近，只能说明空间相遇；有些接触先于激活，有些转录变化则在大尺度接触图几乎不变时发生。稳定 DNA 环因而是重要机制之一，却不是每个增强子每次工作都必须维持的唯一构象。[^enhancer-specificity]

### 专门系统中的基因组级表达开关 { #genome-level-expression-switches }

拷贝数扩增可增加可供转录的模板，例如卵发生或特定发育阶段的 rDNA、卵壳蛋白基因；癌细胞中的扩增则常是选择后的病理状态。V(D)J 重组、类别转换重组、酵母交配型转换、锥虫 VSG 转换和程序性 DNA 消除都能改变可表达序列或其控制环境，但它们使用不同的重组、修复和发育程序。这些机制是特定细胞类型或生活史中的基因组级开关，分别与免疫、遗传、微生物和发育过程相连。

## RNA 命运控制产物种类、时间与位置 { #post-transcriptional-regulation }

### 加工选择改变成熟转录本集合 { #regulated-rna-processing }

选择性启动子使用、剪接、RNA 编辑和选择性多聚腺苷酸化可改变 5′ UTR、编码序列、3′ UTR 或转录本末端。剪接位点强度、外显子或内含子中的增强与沉默元件、SR 蛋白、hnRNP、RNA 结构、Pol II 延伸动力学和染色质背景共同影响外显子选择；多聚腺苷酸化位点选择还受切割因子、RNA 结合蛋白和转录速率影响。不同异构体可以编码不同蛋白，也可以改变定位、翻译或降解，另一些则进入无义介导的 mRNA 降解。检测到低丰度转录本不足以证明其产生稳定蛋白或承担独立功能。反应化学见[剪接体与选择性剪接](rna_processing.md#spliceosomal-splicing)、[3′ 端形成](rna_processing.md#mrna-three-prime-end)和[RNA 编辑](rna_processing.md#rna-editing-modification)。

长链非编码 RNA（lncRNA）是按长度与编码潜能划出的异质集合。某些位点通过转录过程本身、启动子或增强子 DNA、剪接等改变邻近基因，另一些成熟 RNA 在顺式或反式结合染色质因子、转录因子、RNA 或支架蛋白；Xist 等还可组织大尺度染色体状态。研究一个 lncRNA 时必须区分 DNA 元件、新生转录和成熟 RNA 产物，并核对丰度、定位与结合计量关系。仅见到 RNA 与染色质修饰因子共沉淀，不能证明它在细胞中把该复合物精准导向所有预测位点。[^lncrna-regulation]

### 输出、定位与周转设定 mRNA 的可用窗口 { #mrna-localization-stability }

成熟 mRNA 以信使核糖核蛋白复合物（mRNP）的形式输出，核内加工状态、输出适配蛋白和核内质量监控决定哪些分子进入胞质。胞质 RNA 结合蛋白读取 5′／3′ UTR、编码区或 RNA 结构，连接马达、细胞骨架、细胞器表面和锚定位点；局部保护或降解也能形成不对称分布。运输中的转录本常暂时受到抑制，到达后由信号依赖的 RBP 修饰、poly(A) 尾变化或锚定环境解除，使神经突触、胚胎极性区域和迁移细胞前缘能在局部迅速合成蛋白。[^mrna-localization]

mRNA 半衰期由去腺苷酸化、去帽、XRN1、外切体、内切核酸酶及保护性 RNP 的竞争共同决定。富 AU 元件、铁响应元件、miRNA 位点和密码子依赖的降解信号，其结果取决于结合因子及翻译状态，不能仅凭基序名称推定稳定或降解。P-body 富集去帽与抑制组分，但可逆储存和胞质降解并不要求每个底物先进入显微镜可见的 P-body。常规周转和无义介导、无终止及停滞介导的质量监控见[RNA 质量控制](rna_processing.md#rna-quality-control)。

### 翻译起始把营养与应激接到选择性合成 { #translation-control }

mTORC1 对 4E-BP 的磷酸化使其降低对 eIF4E 的结合，促进一部分帽依赖起始；营养、生长因子和能量状态经多条上游路线共同决定这一输出。应激激活的 HRI、PKR、PERK 或 GCN2 可磷酸化 eIF2$\alpha$，使 eIF2 由 eIF2B 的底物转为高亲和抑制剂，减少 eIF2–GTP–Met-tRNA$_i$ 三元复合物和总体起始。带有特定上游开放阅读框（uORF）的 ATF4／GCN4 类转录本却能在这一背景中提高翻译，随后启动转录性应激程序。所谓“总体翻译下降”与“所有 mRNA 同比例下降”并不相同。[^translation-control]

病毒双链 RNA 等输入还可激活 PKR 与 2′–5′ 寡聚腺苷酸合成酶—RNase L，分别压低起始和切割 RNA；它们属于固有抗病毒响应的效应支路，而不是所有干扰素效应或常规翻译调节的共同步骤。eIF4E 磷酸化也不能单独作为总翻译速率的通用开关，帽识别、4E-BP 占据、eIF4G 装配、转录本结构和核糖体供应仍共同限制输出。

5′ UTR 结构、uORF、IRES 样元件、RNA 修饰、3′ UTR—RBP 相互作用和胞质多聚腺苷酸化还能选择特定转录本。卵母细胞中许多母源 mRNA 先以短 poly(A) 尾和受抑制的 RNP 状态储存，受精或发育信号再延长尾部并促进起始；这与把所有去腺苷酸化都解释为不可逆降解不同。起始装置与非经典入口见[翻译与蛋白质生物合成](translation.md#eukaryotic-initiation)。

### Argonaute 将小 RNA 配对转换为沉默输出 { #small-rna-silencing }

miRNA 或 siRNA 引导链装入 Argonaute 后，以种子区和其余配对共同选择靶标。动物 miRNA 复合物常经 TNRC6／GW182 招募 CCR4–NOT、PAN2–PAN3 和去帽机器，使翻译抑制与 mRNA 不稳定化连续发生；AGO2 在引导链与靶标广泛互补时可直接切割 RNA。植物 miRNA 较常具有较强互补并切割编码区靶标，但同样存在翻译抑制、非编码区位点和不同 AGO 路线，不能用“植物完全互补、动物不完全互补”作绝对分界。一个 miRNA 可影响多个转录本，一个转录本也可整合多个 miRNA 和 RBP 位点。[^mirna-output]

植物、真菌和部分动物的小 RNA 还能把 Argonaute 接到新生 RNA、组蛋白甲基化或 DNA 甲基化，建立转录沉默；植物 24 nt siRNA—AGO—Pol V 路线是 RNA 引导 DNA 甲基化的代表。靶向启动子的小 RNA 在特定实验中也曾伴随激活，但需区分直接的核内 Argonaute 机制、脱靶效应和下游转录因子变化，不能把“RNA 激活”当作 RNAi 的普遍镜像。小 RNA 生物发生和谱系差异见[小 RNA 成熟](rna_processing.md#small-rna-biogenesis)，piRNA／RdDM 对转座子的作用见[移动元件控制](dna_recombination.md#transposon-control)。

## 调控网络把分子事件转换为动态细胞状态 { #regulatory-networks }

负反馈可限制幅度、缩短响应或产生适应，正反馈可产生阈值、双稳态和记忆，非相干前馈环可生成脉冲或加速响应。自调控既可发生于转录，也可由核糖体蛋白等产物结合自身 mRNA 调节翻译。多个回路同时存在时，某个箭头的正负号不能单独预测系统轨迹；蛋白质与 RNA 周转、延迟、拷贝数、噪声和空间耦合都会改变结果。

单细胞内的启动子切换、转录爆发和分子数波动造成细胞间变异。群体平均的“两倍表达”可能来自每个细胞略微升高，也可能来自响应细胞比例、爆发频率或细胞状态组成改变。时间序列和单细胞测量因此不仅提高分辨率，也改变对调控逻辑的解释。发育中的稳定状态、短暂应激响应和代谢稳态使用相同反馈词汇，却具有不同的时间尺度与可逆性。

## 调控机制的结合、状态与因果证据 { #gene-regulation-evidence }

报告系统实验和调控序列诱变可测试一段 DNA 或 RNA 在给定构建中的充分性，但整合位点、拷贝数、方向和缺失的内源染色质会改变结果。EMSA、DNase 足迹和生化重构可证明直接结合或反应能力；ChIP-seq／CUT&RUN 显示细胞中的因子占据，ATAC-seq／DNase-seq 显示可及性，Hi-C 类方法显示接触概率。占据、开放和接触都能提出候选机制，却不自动证明该元件控制某个靶标。[^regulation-evidence]

新生 RNA 标记、PRO-seq／GRO-seq 和 Pol II 图谱可把转录变化与稳态 RNA 稳定性分开；RNA-seq、长读长测序、核糖体图谱、定量蛋白质组学和脉冲—追踪又分别读取异构体丰度、核糖体占据、蛋白质输出与周转。核糖体占据仍可能来自暂停，mRNA 丰度也可能掩盖合成与降解同时改变。机制链通常需要在内源位点扰动元件或因子，显示预期的直接分子步骤和时间顺序，再以回补、等位基因特异性比较或正交实验排除邻近基因、细胞状态偏移与脱靶效应。

## 参考资料与延伸阅读 { #references }

- Alberts B, Johnson A, Lewis J, et al. [Control of Gene Expression](https://www.ncbi.nlm.nih.gov/books/NBK21057/). In: *Molecular Biology of the Cell*. 4th ed. Garland Science; 2002.
- Cooper GM. [Transcription in Prokaryotes](https://www.ncbi.nlm.nih.gov/books/NBK9850/). In: *The Cell: A Molecular Approach*. 2nd ed. Sinauer Associates; 2000.
- Turnbough CL Jr. [Regulation of Bacterial Gene Expression by Transcription Attenuation](https://pmc.ncbi.nlm.nih.gov/articles/PMC6710462/). *Microbiology and Molecular Biology Reviews*. 2019;83:e00019-19.
- Urwin L, Savva O, Corrigan RM. [Microbial Primer: what is the stringent response and how does it allow bacteria to survive stress?](https://pmc.ncbi.nlm.nih.gov/articles/PMC11288640/). *Microbiology*. 2024;170:001483.
- Zschiedrich CP, Keidel V, Szurmant H. [Molecular Mechanisms of Two-Component Signal Transduction](https://pmc.ncbi.nlm.nih.gov/articles/PMC5023499/). *Journal of Molecular Biology*. 2016;428:3752–3775.
- Sanders TJ, Marshall CJ, Santangelo TJ. [The Role of Archaeal Chromatin in Transcription](https://pmc.ncbi.nlm.nih.gov/articles/PMC6842674/). *Journal of Molecular Biology*. 2019;431:4103–4115.
- Mansisidor AR, Risca VI. [Chromatin accessibility: methods, mechanisms, and biological insights](https://pmc.ncbi.nlm.nih.gov/articles/PMC9683059/). *Nucleus*. 2022;13:236–276.
- Panigrahi A, O'Malley BW. [Mechanisms of enhancer action: the known and the unknown](https://pmc.ncbi.nlm.nih.gov/articles/PMC8051032/). *Genome Biology*. 2021;22:108.
- Friedman MJ, Wagner T, Lee H, et al. [Enhancer–promoter specificity in gene transcription: molecular mechanisms and disease associations](https://pmc.ncbi.nlm.nih.gov/articles/PMC11058250/). *Experimental & Molecular Medicine*. 2024;56:772–787.
- Statello L, Guo CJ, Chen LL, Huarte M. [Gene regulation by long non-coding RNAs and its biological functions](https://pmc.ncbi.nlm.nih.gov/articles/PMC7754182/). *Nature Reviews Molecular Cell Biology*. 2021;22:96–118.
- Hendrickson DG, Hogan DJ, McCullough HL, et al. [Concordant regulation of translation and mRNA abundance for hundreds of targets of a human microRNA](https://pmc.ncbi.nlm.nih.gov/articles/PMC2766070/). *PLoS Biology*. 2009;7:e1000238.
- Marintchev A, Ito T. [eIF2B and the Integrated Stress Response: A Structural and Mechanistic View](https://pmc.ncbi.nlm.nih.gov/articles/PMC7189779/). *Biochemistry*. 2020;59:1299–1308.

[^regulatory-layers]: 从转录、RNA 加工与运输、翻译到 RNA／蛋白质降解的多层控制框架，见 Alberts 等的[教材章节](https://www.ncbi.nlm.nih.gov/books/NBK21057/)；各反应的化学与装置由本站相邻分子页面分别展开。
[^bacterial-regulation]: 细菌启动子强度、操纵序列、变构调节蛋白、操纵子与调控子的区别，见 Cooper 的[原核转录教材章节](https://www.ncbi.nlm.nih.gov/books/NBK9850/)和 Baron 编著教材的[细菌遗传章节](https://www.ncbi.nlm.nih.gov/books/NBK7908/)。
[^lac-operon]: LacI、操纵序列与诱导物的经典顺式—反式逻辑见 Cooper 的[教材章节](https://www.ncbi.nlm.nih.gov/books/NBK9850/)；多操纵序列和 DNA 成环的实验证据与模型见 Cournac 与 Plumbridge 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3591992/)。
[^attenuation-riboswitch]: 核糖体介导、蛋白介导、T-box 和小分子核糖开关介导的衰减机制分类，见 Turnbough 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6710462/)。
[^stringent-response]: (p)ppGpp 的合成输入、RNA 聚合酶或 GTP 库依赖的输出以及物种差异，见 Urwin、Savva 与 Corrigan 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC11288640/)；不把一种模式外推为全部细菌。
[^two-component-quorum]: 组氨酸激酶—响应调节蛋白的磷酸转移、激酶／磷酸酶平衡和非典型扩展见 Zschiedrich、Keidel 与 Szurmant 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5023499/)；群体感应对信号产生、检测与局部环境的依赖见 Mukherjee 与 Bassler 的[综述](https://www.nature.com/articles/s41579-019-0186-5)。
[^archaeal-regulation]: 古菌 TBP／TFB／TFE、启动子近旁调节蛋白、组蛋白／拟核蛋白与延伸控制，见 Sanders、Marshall 与 Santangelo 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6842674/)及 Gehring 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7714419/)。
[^chromatin-accessibility]: 核小体占据、ATP 依赖重塑、组蛋白乙酰化、DNA 甲基化与可及性实验的因果边界，见 Mansisidor 与 Risca 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9683059/)；染色质结构本身见本站[细胞核页面](../cell/nucleus_chromatin.md#nucleosome-chromatin)。
[^enhancer-mechanisms]: 增强子、启动子、Mediator、空间接触、辅助因子枢纽及不同机制模型，见 Panigrahi 与 O'Malley 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8051032/)。
[^enhancer-specificity]: 启动子兼容性、CTCF／cohesin 约束、增强子—启动子接触与转录爆发的证据，见 Friedman 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC11058250/)；三维接触的结构边界见本站[细胞核页面](../cell/nucleus_chromatin.md#three-dimensional-genome)。
[^lncrna-regulation]: lncRNA 位点、转录过程与成熟 RNA 产物的顺式／反式功能及其验证限制，见 Statello 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7754182/)。
[^mrna-localization]: 顺式定位元件、RBP—马达运输、锚定、局部保护／降解与局部翻译，见 Buxbaum、Haimovich 与 Singer 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4484810/)。
[^translation-control]: eIF2$\alpha$ 磷酸化使 eIF2 转为 eIF2B 抑制剂，以及总体抑制与 uORF 依赖选择性翻译的并存，见 Marintchev 与 Ito 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7189779/)；mTORC1–4E-BP 接口见本站[细胞信号转导](../cell/cell_signaling.md#pi3k-akt-mtor)。
[^mirna-output]: 人 miR-124 靶标中 mRNA 丰度与翻译变化的联合测量见 Hendrickson 等的[研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC2766070/)；Argonaute 装载和跨谱系 RNAi 化学见本站[RNA 转录后加工](rna_processing.md#small-rna-biogenesis)。
[^regulation-evidence]: 报告系统、足迹分析、ChIP、可及性、染色体构象、新生转录与内源扰动回答不同问题；可及性实验的限制见 Mansisidor 与 Risca 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9683059/)，增强子接触的限制见 Friedman 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC11058250/)。
