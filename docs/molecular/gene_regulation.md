# 原核与真核基因表达调控

基因表达调控决定一段遗传信息在何时、何处、以多大通量形成哪一种 RNA 或蛋白质。调控可以改变转录起始和延伸，也可以改变 RNA 的加工、输出、定位、翻译与降解；已经合成的蛋白质还会继续受到定位、修饰和周转控制。因此，稳态 mRNA 或蛋白质丰度是合成与清除速率共同产生的结果，不能由某个启动子是否“开启”单独解释。[^regulatory-layers]

顺式作用元件只影响与自身物理相连的核酸分子，例如启动子、operator、enhancer、RNA 上的结合位点和结构开关；反式作用因子则是可扩散的蛋白质或 RNA。二者相遇的概率还受拷贝数、染色质或拟核组织、亚细胞位置和时间限制。细菌、古菌和真核生物都使用激活、抑制、反馈与组合控制，只是它们把这些逻辑安放在不同的基因组结构和细胞区室中。

## 细菌把局部开关接入全局生理状态 { #bacterial-gene-regulation }

### 操纵子协调同一转录单位内的基因 { #operons-cis-trans }

细菌 operon 由一个或多个启动子控制一组共同转录的基因，转录本可含多个 coding regions；operator 等调控位点常与启动子相邻或重叠，调节蛋白结合后改变 RNA polymerase 起始概率。编码调节蛋白的基因可以位于 operon 外，产物在反式发挥作用。多个相距很远的 operons 和单基因转录单位若受同一调节因子控制，构成 regulon；受到同一种环境变化而共同响应的基因集合则可称 stimulon，其中未必共享一个直接调节因子。[^bacterial-regulation]

operon 是常见而非普遍的细菌组织方式，单个 operon 也可有内部启动子、条件性终止和不同 mRNA 稳定性，使下游基因的最终产量并不严格相等。古菌和少数真核谱系也存在 polycistronic transcription；线虫等真核 operons 常靠 trans-splicing 与 3′ end formation 把长前体加工成分立 mRNAs。由此可见，共转录、共调控和等量蛋白表达是三个需要分别验证的判断。

### 乳糖操纵子整合底物和碳源状态 { #lac-operon }

大肠杆菌 lacZYA 转录单位编码 $\beta$-galactosidase、lactose permease 和 transacetylase。缺少诱导物时，tetrameric LacI 可结合主 operator，并借助两个辅助 operators 形成 DNA loop，降低起始和早期延伸的成功率；仍有少量 basal expression，使 lactose 得以进入并由 $\beta$-galactosidase 生成 allolactose。allolactose 结合 LacI 后降低其 operator affinity，解除这一负控制。IPTG 也能诱导 LacI，却不被 $\beta$-galactosidase 当作正常底物代谢，因而常用于实验性持续诱导。[^lac-operon]

解除 LacI repression 仍不足以保证高表达。葡萄糖缺乏时，较高的 cAMP 可与 CRP／CAP 形成 activator complex，稳定 RNA polymerase 在 lac promoter 的招募；葡萄糖转运还可通过 phosphotransferase system 影响 lactose permease，形成 inducer exclusion。所谓 catabolite repression 因此汇合了 promoter activation、糖转运与代谢状态，而不是“葡萄糖升高必然只经 adenylyl cyclase 降低 cAMP”的单线开关。lac system 展示的是两个输入的组合逻辑，不代表所有分解代谢 operons 都使用同一传感器。

### 色氨酸操纵子以阻遏和衰减读取两种信号 { #trp-operon-attenuation }

大肠杆菌 trp operon 同时使用 TrpR repression 和 transcription attenuation。tryptophan 作为 corepressor 结合 TrpR，使其更易占据 operator，直接降低起始；这一路径主要读取游离 tryptophan。已经起始的转录还会经过 trpL leader。当前导肽的连续 Trp codons 能被顺利翻译时，ribosome 遮蔽 RNA 的第 2 区，第 3、4 区形成 intrinsic terminator；charged tRNA$^{\mathrm{Trp}}$ 缺乏时，ribosome 停在相应 codons，第 2、3 区形成 antiterminator，RNA polymerase 得以进入结构基因。转录—翻译空间耦联使后一机制能够近实时读取 aminoacylation state。[^attenuation-riboswitch]

不同细菌的 attenuation 不必都使用连续稀有 codons。T-box leaders 可让未氨酰化 tRNA 直接稳定 antiterminator，ribosome-mediated attenuation 还可读取翻译起始或移动速度；另一些系统由 RNA-binding protein 或 metabolite 改变 terminator。把 trpL 的四段配对当作所有氨基酸合成 operons 的固定结构，会遗漏这些谱系和配体差异。

### RNA 结构把代谢物、温度和小 RNA 接入表达 { #bacterial-rna-regulation }

riboswitch 通常由识别 ligand 的 aptamer domain 和改变表达的 expression platform 组成。metabolite、ion、tRNA 或其他配体稳定某一 RNA fold 后，可以改变 transcription termination、translation initiation、RNA cleavage 或 splicing；同一种 thiamine pyrophosphate aptamer 在不同基因和生物中也可连接不同输出。RNA thermometer 则由温度改变 5′ leader 结构和 ribosome-binding-site accessibility，不需要把温度转成一种专门小分子配体。

细菌 small regulatory RNAs 可通过短碱基配对遮蔽或暴露 ribosome-binding site、改变 RNase access，或与 RNA-binding protein 共同调节多个 messages。另一些 antisense RNAs 与质粒复制、毒素—抗毒素系统或 phage lifecycle 相连。RNA hairpin 既可能保护末端，也可能创造 nuclease substrate；细菌 polyadenylation 常为 3′ exonuclease 提供可进入的单链尾，与多数真核 mRNA 的稳定 poly(A)–PABP context 后果不同。完整的 RNA 成熟与周转装置见[RNA 转录后加工](rna_processing.md#bacterial-rna-processing)。

### 全局响应重新分配有限的表达资源 { #bacterial-global-regulation }

alternative $\sigma$ factors 让同一 core RNA polymerase 改认另一组 promoters，anti-$\sigma$ factors、受控蛋白水解和 $\sigma$-factor cascades 又能限定响应的先后。营养限制时，RelA／SpoT homologues 改变 guanosine tetra- and pentaphosphate，统称 (p)ppGpp；不同细菌中，它可直接调节 RNA polymerase，也可经 GTP pool、transcription factors 和 enzyme targets 改写 ribosome biogenesis、amino-acid synthesis、transport 与 stress survival。stringent response 是网络重分配，不等于所有转录、复制和翻译一律关闭。[^stringent-response]

two-component system 通常由 sensor histidine kinase 和 response regulator 组成。kinase 在特定条件下自磷酸化并把 phosphoryl group 转给 regulator receiver domain 的 Asp，后者常以 DNA-binding output 改变转录；许多 sensors 也具有 phosphatase activity，输出取决于 kinase／phosphatase balance。多步 phosphorelay、胞质型 sensors 和非转录 outputs 都扩展了这一范式。quorum sensing 又把 autoinducer 产生、运输、扩散、降解和受体读取接到基因网络；局部流动和空间结构会改变信号浓度，所以它感知的是群体与环境共同形成的化学状态，不是一台精确计数细胞的仪器。AHL、peptide 和其他 autoinducers 也不属于所有细菌共享的一种信号。[^two-component-quorum]

CRISPR–Cas 的 spacer acquisition、crRNA maturation 和 interference 主要构成适应性抗外源核酸系统，而不是一般环境转录调节器；其与移动元件的竞争见[DNA 重组与转座](dna_recombination.md#transposon-control)。DNA damage–LexA、carbon catabolite regulation 等 regulons 展示了全局协调，但仍需逐个确定直接靶位点，不能把刺激后一起变化的全部基因都称为同一 transcription factor 的直接 targets。

## 古菌组合真核样基础机器与局部调节因子 { #archaeal-gene-regulation }

古菌 RNA polymerase 和 TBP、TFB、TFE 等基础因子与真核 Pol II machinery 同源，许多 sequence-specific regulators 却像细菌调节蛋白一样结合 core promoter 附近，阻挡 TBP／TFB／polymerase，或帮助其招募。一个基因组可编码多个 TBP、TFB 或其他因子并赋予 promoter preference，但这种分工不等同于细菌 alternative $\sigma$ factors。古菌也有 operons、leaderless transcripts、small RNAs 和 riboswitches，其组合随谱系变化。[^archaeal-regulation]

histone-containing archaea 用 histone-based structures 改变 DNA accessibility 和 elongation barrier；另一些谱系以 Alba、Cren7、Sul7 等 nucleoid proteins 组织基因组。古菌 histones 通常没有真核 canonical histone tails，也缺少真核式的大型 ATP-dependent remodeling and coactivator repertoire；局部 regulator 与 elongation factors 因而在 protein-bound genome 上承担更直接的控制。古菌处于转录机器、染色质和细胞空间特征的独特组合，不能简单放入“原核调控”一栏后只用细菌操纵子解释。

## 真核转录调控建立细胞类型特异的可用基因集合 { #eukaryotic-transcription-control }

### 核小体可及性与化学标记彼此耦联 { #chromatin-accessibility-control }

nucleosome occupancy 和 DNA wrapping 改变 transcription factor 与 polymerase 接触序列的机会。pioneer factors 可在部分 nucleosomal contexts 先行结合，ATP-dependent remodelers 随后滑动、重构或移除 nucleosome；histone chaperones 负责交换和重新装配。histone acetylation 可改变尾部电荷并招募 bromodomain proteins，lysine methylation 则主要产生不同 reader 的结合界面；同为 methylation，H3K4me3、H3K27me3 和 H3K9me3 所在位置与复合物并不相同。writer、reader 和 eraser 是反应角色，所谓“histone code”也必须落实到 residue、modification state、邻近标记和 cell context。[^chromatin-accessibility]

DNA methylation 的分布和作用同样依赖谱系与位置。脊椎动物 promoter CpG-island methylation 常与稳定 repression 相关，gene-body methylation、低 CpG promoters 和 enhancers 的关系更复杂；植物 CG、CHG 和 CHH methylation 由不同酶系维持，许多真菌和无脊椎动物又有大幅简化或丢失。甲基化既可妨碍部分 transcription factors，也可招募 methyl-CpG-binding proteins，并与 nucleosome、histone marks 和 replication maintenance 耦联。一个位点的 methylation 与低表达相关，尚不能单独确定它是原因、结果还是细胞组成差异。染色质物理结构见[细胞核与染色质](../cell/nucleus_chromatin.md#chromatin-states)，跨细胞世代的建立和遗传边界留给[遗传重组、基因组学与表观遗传学](../genetics/genomics_epigenetics.md)。

genomic imprinting 在特定哺乳动物 loci 以 parent-of-origin-dependent control regions 维持 allele-biased expression，建立、擦除和读取过程随 germline 与发育阶段转换；它不是“来自父亲或母亲的整套染色体只表达一份”。X-chromosome inactivation、imprinting 与其他 chromatin memory 的遗传学后果由遗传栏目展开，本页只保留它们通过可及性、转录因子与 RNA 改变当前细胞表达的接口。

### 转录因子以组合占位解释信号和细胞状态 { #transcription-factor-combinations }

sequence-specific transcription factors 常把 DNA-binding domain 与 activation、repression、dimerization 或 ligand-sensing regions 组合。homeodomain、basic helix–loop–helix、basic leucine zipper、zinc-finger 和 winged-helix 等结构以不同几何读取 DNA major groove 及 backbone；同一 motif 仍可能被 family members 竞争，邻位因子、DNA shape、nucleosome 和 cofactor 决定实际占位。activation domains 可招募 Mediator、histone acetyltransferase、remodeler 或 elongation factors，repressors 可竞争位点、阻断复合物或招募 corepressor。DNA binding 和表达改变是分开的机制步骤。

细胞信号常通过 phosphorylation、ligand binding、抑制蛋白降解、proteolytic release 或 nuclear transport 改变 transcription-factor availability。CREB、nuclear receptors、Smads、STATs、NF-$\kappa$B 和 Notch intracellular domain 最终都要与 cell-type-specific factors、coactivators 和现有 chromatin state 协作；同一个信号因而能在不同细胞产生不同转录程序。上游转换与时间编码见[细胞信号转导](../cell/cell_signaling.md#signaling-grammar)。

真核转录控制也延伸到起始之后。promoter-proximal pausing 可暂存已经起始的 Pol II，P-TEFb 等因子促进 pause release；HIV Tat 招募 P-TEFb 是病毒利用这一界面的专门实例，并非所有 cellular genes 共用 Tat-like antiterminator。elongation rate、co-transcriptional processing 与 termination-factor recruitment 还能改变完整转录本产量。Pol I 的 rDNA templates 在 active／inactive chromatin states 间分配，SL1、UBF、RRN3 和 nutrient signaling 调节 pre-rRNA transcription；Pol III 则可由 Maf1 等压低 tRNA 与 5S rRNA synthesis。三种 polymerases 的起始与终止装置见[转录与 RNA 生物合成](transcription.md#nuclear-rna-polymerases)。

### 增强子与启动子的通信具有选择性和动态性 { #enhancer-promoter-communication }

core promoter 组织 preinitiation complex，proximal elements 与 distal enhancers 则集中 sequence-specific factors 和 cofactors。enhancer 可以位于 target gene 上游、下游或 intron 中，许多在 reporter assay 中对方向不敏感；这些是常见性质而非无条件定义。promoter compatibility、factor composition、linear distance、chromatin state、CTCF/cohesin constraints 和三维接触共同限制 target choice。insulator 也不是一堵普遍阻断所有 enhancer 的墙，而是在特定位置和蛋白背景中改变 contact、domain boundary 或 chromatin spreading。[^enhancer-mechanisms]

enhancer-bound factors 可经 transient contact、Mediator/cofactor hub 和局部浓度变化提高 initiation 或 promoter-proximal pause release。基因转录常以 bursts 发生，enhancer 在许多系统中主要提高 burst frequency，但 promoter、cell state 和 assay 会改变这一关系。Hi-C 或 imaging 观察到 enhancer–promoter proximity 只说明空间相遇；有些 contacts 先于 activation，有些 transcription changes 在大尺度接触图几乎不变时发生。稳定 DNA loop 因而是重要机制之一，却不是每个 enhancer 每次工作都必须维持的唯一构象。[^enhancer-specificity]

### 基因组改变只在专门系统中成为表达开关 { #genome-level-expression-switches }

copy-number amplification 可提高可供转录的 templates，例如卵发生或特定发育阶段的 rDNA、chorion genes；癌细胞 amplification 则常是选择后的病理状态。V(D)J recombination、class-switch recombination、酵母 mating-type switching、trypanosome VSG switching 和 programmed DNA elimination 都能改变可表达序列或其控制环境，但它们使用不同 recombination、repair 和 developmental programs。它们不属于每个真核细胞调节日常转录通量的共同层级，相关机制应分别进入免疫、遗传、微生物和发育页面。

## RNA 命运控制产物种类、时间与位置 { #post-transcriptional-regulation }

### 加工选择改变成熟转录本集合 { #regulated-rna-processing }

alternative promoter choice、splicing、RNA editing 和 alternative polyadenylation 可改变 5′ UTR、coding sequence、3′ UTR 或 transcript end。splice-site strength、exonic／intronic enhancers and silencers、SR proteins、hnRNPs、RNA structure、Pol II elongation kinetics 和 chromatin context 共同影响 exon choice；poly(A)-site choice 还受 cleavage factors、RNA-binding proteins 和 transcription rate 影响。不同 isoforms 可以编码不同蛋白，也可以改变 localization、translation 或 decay，另一些则进入 nonsense-mediated decay。检测到低丰度 transcript 不足以证明其产生稳定蛋白或承担独立功能。反应化学见[剪接体与选择性剪接](rna_processing.md#spliceosomal-splicing)、[3′ 端形成](rna_processing.md#mrna-three-prime-end)和[RNA 编辑](rna_processing.md#rna-editing-modification)。

long non-coding RNA（lncRNA）是按长度与 coding potential 划出的异质集合。某些 loci 通过 transcription 本身、promoter／enhancer DNA 或 splicing 改变邻近基因，另一些成熟 RNA 在 cis 或 trans 结合 chromatin factors、transcription factors、RNA 或 scaffold proteins；Xist 等还可组织大尺度 chromosome state。研究一个 lncRNA 时必须区分 DNA element、nascent transcription 和 RNA product，并核对 abundance、localization 与 binding stoichiometry。仅见到 RNA 与 chromatin modifier 共沉淀，不能证明它在细胞中把该复合物精准导向所有预测 loci。[^lncrna-regulation]

### 输出、定位与周转设定 mRNA 的可用窗口 { #mrna-localization-stability }

成熟 mRNA 以 messenger ribonucleoprotein（mRNP）输出，核内加工状态、export adaptors 和 nuclear surveillance 决定哪些分子进入胞质。胞质 RNA-binding proteins 读取 5′／3′ UTR、coding region 或 RNA structure，连接 motor、cytoskeleton、organelle surface 和 anchoring site；局部 protection 或 degradation 也能形成不对称分布。运输中的 message 常暂时 repression，到达后由 signal-dependent RBP modification、poly(A)-tail change 或 anchoring context 解除，使神经突触、胚胎极性区域和迁移细胞前缘能在局部迅速合成蛋白。[^mrna-localization]

mRNA half-life 由 deadenylation、decapping、XRN1、exosome、endonuclease 及保护性 RNP 的竞争产生。AU-rich element、iron-responsive element、miRNA site 和 codon-dependent decay signal 的结果取决于结合因子及翻译状态，不能仅凭 motif 名称推定稳定或降解。P-bodies 富集 decapping 与 repression components，但可逆 storage 和 cytoplasmic decay 并不要求每个 substrate 先进入显微镜可见的 P-body。常规周转和 NMD／no-go／non-stop surveillance 见[RNA 质量控制](rna_processing.md#rna-quality-control)。

### 翻译起始把营养与应激接到选择性合成 { #translation-control }

mTORC1 对 4E-BPs 的 phosphorylation 使其降低对 eIF4E 的结合，促进一部分 cap-dependent initiation；营养、growth factors 和 energy state 经多条上游路线共同决定这一输出。应激激活的 HRI、PKR、PERK 或 GCN2 可 phosphorylate eIF2$\alpha$，使 eIF2 由 eIF2B substrate 转为高亲和 inhibitor，减少 eIF2–GTP–Met-tRNA$_i$ ternary complex 和总体起始。带有特定 upstream ORFs 的 ATF4／GCN4 类 messages 却能在这一背景中提高 translation，随后启动 transcriptional stress program。所谓“总体翻译下降”与“所有 mRNA 同比例下降”并不相同。[^translation-control]

viral double-stranded RNA 等输入还可激活 PKR 与 2′–5′ oligoadenylate synthetase–RNase L，分别压低 initiation 和切割 RNA；它们属于 innate antiviral response 的效应支路，而不是所有 interferon effects 或常规翻译调节的共同步骤。eIF4E phosphorylation 也不能单独作为总翻译速率的通用开关，cap recognition、4E-BP occupancy、eIF4G assembly、message structure 和 ribosome supply 仍共同限制输出。

5′ UTR structure、uORFs、IRES-like elements、RNA modification、3′ UTR–RBP interactions 和 cytoplasmic polyadenylation 还能选择 individual messages。oocyte 中许多 maternal mRNAs 先以短 poly(A) tail 和 repressed RNP 储存，受精或发育信号再延长尾部并促进 initiation；这与把所有 deadenylation 都解释为不可逆 decay 不同。起始装置与非经典入口见[翻译与蛋白质生物合成](translation.md#eukaryotic-initiation)。

### Argonaute 将小 RNA 配对转换为沉默输出 { #small-rna-silencing }

miRNA 或 siRNA guide 装入 Argonaute 后，以 seed 和其余配对共同选择 target。动物 miRNA complexes 常经 TNRC6／GW182 招募 CCR4–NOT、PAN2–PAN3 和 decapping machinery，使 translational repression 与 mRNA destabilization 连续发生；AGO2 在 guide 与 target 广泛互补时可直接 slice RNA。植物 miRNA 较常具有较强互补并切割 coding-region targets，但同样存在 translation repression、非 coding-region sites 和不同 AGO routes，不能用“植物完全互补、动物不完全互补”作绝对分界。一个 miRNA 可影响多个 messages，一个 message 也可整合多个 miRNA 和 RBP sites。[^mirna-output]

植物、真菌和部分动物的小 RNA 还能把 Argonaute 接到 nascent RNA、histone methylation 或 DNA methylation，建立 transcriptional silencing；植物 24-nt siRNA–AGO–Pol V route 是 RNA-directed DNA methylation 的代表。promoter-targeted small RNAs 在特定实验中也曾伴随 activation，但需区分直接 nuclear Argonaute mechanism、off-target effect 和下游 transcription-factor change，不能把“RNA activation”当作 RNAi 的普遍镜像。small-RNA biogenesis 和谱系差异见[小 RNA 成熟](rna_processing.md#small-rna-biogenesis)，piRNA／RdDM 对 transposons 的作用见[移动元件控制](dna_recombination.md#transposon-control)。

## 调控网络把分子事件转换为动态细胞状态 { #regulatory-networks }

negative feedback 可限制幅度、缩短响应或产生 adaptation，positive feedback 可产生 threshold、bistability 和 memory，incoherent feed-forward loop 可生成 pulse 或加速响应。auto-regulation 既可发生于 transcription，也可由 ribosomal protein 等产物结合自身 mRNA 调节 translation。多个 loops 同时存在时，某个箭头的正负号不能单独预测系统轨迹；protein and RNA turnover、delay、copy number、noise 和 spatial coupling 都会改变结果。

单细胞内的 promoter switching、transcriptional bursting 和分子数波动造成 cell-to-cell variation。群体平均的“两倍表达”可能来自每个细胞略升高，也可能来自 responding-cell fraction、burst frequency 或 cell-state composition 改变。时间序列和单细胞测量因此不仅提高分辨率，也改变对调控逻辑的解释。发育中的 stable state、短暂 stress response 和代谢 homeostasis 使用相同反馈词汇，却具有不同的时间尺度与可逆性。

## 调控机制需要把结合、状态和因果效应分开 { #gene-regulation-evidence }

reporter assay 和 regulatory-sequence mutagenesis 可测试一段 DNA 或 RNA 在给定构建中的 sufficiency，但 integration site、copy number、orientation 和缺失的 native chromatin 会改变结果。EMSA、DNase footprinting 和 biochemical reconstitution 证明直接 binding 或反应能力；ChIP-seq／CUT&RUN 显示细胞中的 factor occupancy，ATAC-seq／DNase-seq 显示 accessibility，Hi-C 类方法显示 contact probability。占位、开放和接触都能提出候选机制，却不自动证明该 element 控制某个 target。[^regulation-evidence]

nascent-RNA labeling、PRO-seq／GRO-seq 和 Pol II profiling 可把 transcription change 与 steady-state RNA stability 分开；RNA-seq、long-read sequencing、ribosome profiling、quantitative proteomics 和 pulse–chase 又分别读取 isoform abundance、ribosome occupancy、protein output 与 turnover。ribosome occupancy 仍可能来自 pause，mRNA abundance 也可能掩盖 synthesis 与 decay 同时改变。机制链通常需要在 endogenous locus 扰动 element 或 factor，显示预期的 direct molecular step 和 time order，再以 rescue、allele-specific comparison 或 orthogonal assay 排除邻近基因、cell-state shift 与 off-target effect。

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

[^regulatory-layers]: 从 transcription、RNA processing、transport、translation 到 RNA／protein degradation 的多层控制框架，见 Alberts 等的[教材章节](https://www.ncbi.nlm.nih.gov/books/NBK21057/)；各反应的化学与装置由本站相邻分子页面分别展开。
[^bacterial-regulation]: bacterial promoter strength、operator、allosteric regulator、operon 与 regulon 的区别，见 Cooper 的[原核转录教材章节](https://www.ncbi.nlm.nih.gov/books/NBK9850/)和 Baron 编著教材的[细菌遗传章节](https://www.ncbi.nlm.nih.gov/books/NBK7908/)。
[^lac-operon]: LacI、operator 与 inducer 的经典 cis–trans 逻辑见 Cooper 的[教材章节](https://www.ncbi.nlm.nih.gov/books/NBK9850/)；multiple operators 与 DNA looping 的实验证据和模型见 Cournac 与 Plumbridge 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3591992/)。
[^attenuation-riboswitch]: ribosome-mediated、protein-mediated、T-box 和 small-molecule riboswitch attenuation 的机制分类，见 Turnbough 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6710462/)。
[^stringent-response]: (p)ppGpp 的合成输入、RNA polymerase／GTP-pool-dependent outputs 和物种差异，见 Urwin、Savva 与 Corrigan 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC11288640/)；不把一种模式外推为全部细菌。
[^two-component-quorum]: histidine kinase–response regulator 的 phosphotransfer、phosphatase balance 和非典型扩展见 Zschiedrich、Keidel 与 Szurmant 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5023499/)；quorum sensing 对 signal production、detection 与局部环境的依赖见 Mukherjee 与 Bassler 的[综述](https://www.nature.com/articles/s41579-019-0186-5)。
[^archaeal-regulation]: archaeal TBP／TFB／TFE、近 promoter regulators、histones／nucleoid proteins 与 elongation control，见 Sanders、Marshall 与 Santangelo 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6842674/)及 Gehring 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7714419/)。
[^chromatin-accessibility]: nucleosome occupancy、ATP-dependent remodeling、histone acetylation、DNA methylation 与 accessibility assays 的因果边界，见 Mansisidor 与 Risca 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9683059/)；染色质结构本身见本站[细胞核页面](../cell/nucleus_chromatin.md#nucleosome-chromatin)。
[^enhancer-mechanisms]: enhancer、promoter、Mediator、contact、cofactor hub 与 alternative mechanistic models，见 Panigrahi 与 O'Malley 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8051032/)。
[^enhancer-specificity]: promoter compatibility、CTCF／cohesin constraints、enhancer–promoter contacts 与 transcriptional bursting 的证据，见 Friedman 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC11058250/)；三维接触的结构边界见本站[细胞核页面](../cell/nucleus_chromatin.md#three-dimensional-genome)。
[^lncrna-regulation]: lncRNA locus、transcription process 与 mature RNA product 的 cis／trans functions 及功能验证限制，见 Statello 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7754182/)。
[^mrna-localization]: cis localization elements、RBP–motor transport、anchoring、local protection／degradation 与 local translation，见 Buxbaum、Haimovich 与 Singer 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4484810/)。
[^translation-control]: eIF2$\alpha$ phosphorylation 将 eIF2 转为 eIF2B inhibitor，以及 general repression 与 uORF-dependent selective translation 的并存，见 Marintchev 与 Ito 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7189779/)；mTORC1–4E-BP 接口见本站[细胞信号转导](../cell/cell_signaling.md#pi3k-akt-mtor)。
[^mirna-output]: human miR-124 targets 中 mRNA abundance 与 translation changes 的联合测量见 Hendrickson 等的[研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC2766070/)；Argonaute loading 和跨谱系 RNAi chemistry 见本站[RNA 转录后加工](rna_processing.md#small-rna-biogenesis)。
[^regulation-evidence]: reporter、footprinting、ChIP、accessibility、chromosome conformation、nascent transcription 与 endogenous perturbation 回答不同问题；accessibility assay 的限制见 Mansisidor 与 Risca 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9683059/)，增强子接触的限制见 Friedman 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC11058250/)。
