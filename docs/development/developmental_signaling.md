# 发育信号与基因调控

动物胚胎借助一组反复部署的信号通路产生数百种细胞类型。Wnt、Hedgehog、转化生长因子 β（transforming growth factor beta，TGF-β）、成纤维细胞生长因子（fibroblast growth factor，FGF）／受体酪氨酸激酶、Notch 和 Janus 激酶—信号转导及转录激活蛋白（Janus kinase–signal transducer and activator of transcription，JAK–STAT）等通路在不同阶段、不同组织中反复出现。信号到达的位置、时间和动态，以及接收细胞当时开放的调控元件和表达的谱系转录因子，共同决定发育结果。

发育信号沿着随细胞状态变化的调控链传递。配体和受体把细胞间关系转成胞内活性，通路末端的转录效应因子把这种活性带到基因组，增强子再将它与细胞已有状态相结合。直接靶基因中既有分化效应基因，也有新的转录因子、信号配体和抑制物；这些产物改变下一轮细胞相互作用，使一次局部输入逐步扩展成组织尺度的基因调控网络。[^pathway-reuse]

## 可重复部署的发育信号模块 { #pathway-reuse }

不同发育通路共享一个基本组织原则：发送细胞产生配体，接收细胞以受体辨认配体，胞内装置改变少数转录效应因子的活性，效应因子再调节靶增强子。模块之间的差别在于信息怎样跨膜、效应因子怎样被控制，以及信号消退有多快。Notch 通过受体裂解释放转录共调节因子，Wnt 和 Hedgehog 主要改变效应蛋白的稳定性或加工，TGF-β 受体直接磷酸化 Smad，FGF 等受体酪氨酸激酶通过 Ras–ERK 等级联放大输入，细胞因子受体则借助受体结合的 JAK 激活 STAT。

受体分类、第二信使、鸟苷三磷酸酶（guanosine triphosphatase，GTPase）、支架蛋白、膜上复合物和通路终止等通用装置见[细胞信号转导](../cell/cell_signaling.md)。这些装置在胚胎中进一步接入增强子、调控网络和组织图式，并在代谢、神经和免疫系统中产生各自的专门输出。

这种模块化使同一通路可以先建立胚轴，随后参与胚层图式、器官原基边界、祖细胞维持和终末分化。全身性敲除一个通路核心组分常产生多阶段表型：后期缺陷既可能来自通路当时的直接作用，也可能继发于早期组织形成异常。阶段特异的条件突变、短时药理处理或光遗传扰动，能够把这些重复用途分开。

### Wnt 与 Hedgehog 的蛋白稳定性调控 { #wnt-hedgehog }

在 Wnt／β-catenin 通路关闭时，Axin、APC、CK1 和 GSK3 组成的破坏复合物持续磷酸化 β-catenin，使其被泛素化并降解。Wnt 与 Frizzled 和 LRP5/6 受体复合物结合后，Dishevelled 及受体磷酸化状态改变破坏复合物的工作，稳定的 β-catenin 进入细胞核，与 TCF／LEF 等脱氧核糖核酸（deoxyribonucleic acid，DNA）结合因子共同调节靶基因。β-catenin 依靠 TCF／LEF、共激活因子和细胞特异增强子选择并调控靶序列。[^wnt-mechanism]

Wnt 家族还可通过不依赖 β-catenin 的支路调节平面细胞极性、细胞骨架和运动。早期胚轴和许多谱系选择常使用 Wnt／β-catenin，原肠形成时的定向细胞行为则可更多依赖平面细胞极性装置；效应因子的活性和遗传依赖能够区分具体组织采用的支路。

Hedgehog 配体由 Patched 接收。在无配体时，Patched 抑制 Smoothened，Ci／Gli 蛋白倾向被加工成转录阻遏形式；配体解除这层抑制后，Smoothened 促使全长 Ci／Gli 形成激活输出。脊椎动物的关键转导步骤集中在初级纤毛，果蝇则使用包含 Cos2、Fused 等组分的胞内复合物。Hedgehog 信号片段具有胆固醇和棕榈酰基修饰，其产生、运输和受体摄取共同决定作用范围；在神经管等组织中，Sonic hedgehog（Shh）能跨越多个细胞直径形成图式。[^shh-temporal]

### TGF-β 与 FGF 的受体激酶传导 { #tgf-fgf }

TGF-β 超家族包括 Nodal、Activin、BMP 和多种生长分化因子。配体促成 II 型与 I 型丝氨酸／苏氨酸激酶受体复合，II 型受体激活 I 型受体；后者磷酸化受体调节型 Smad。Nodal／Activin 主要经 Smad2/3，BMP 主要经 Smad1/5/9，它们与共同 Smad4 形成复合物并进入细胞核。Smad 对 DNA 的结合选择性和亲和力有限，通常要与 FoxH1、谱系因子及共调节蛋白协作，因而同一种 TGF-β 家族输入能在不同细胞中启动不同靶基因。[^tgf-development]

分泌性拮抗物和反馈调节者决定这类信号的空间形状。Chordin、Noggin 等在细胞外结合 BMP，Lefty 抑制 Nodal 的传播和受体激活；Nodal 又能促进自身及 Lefty 表达，形成局部正反馈与较远程抑制相配合的网络。胚层诱导、背腹图式和左右不对称都利用这一家族，各自的体内机制还取决于配体来源、响应窗口和拮抗网络；体外 Activin 剂量实验提供其中一类证据。

FGF 与 FGFR 及硫酸乙酰肝素形成信号复合物，使受体酪氨酸激酶二聚并交叉磷酸化。接头蛋白把受体连接到 Ras，继而激活 Raf–MEK–ERK；同一受体还可连接 PI3K–AKT 和 PLCγ。ERK 进入细胞核后改变 ETS、AP-1 等转录调节因子，FGF 由此参与中胚层维持、神经图式、肢芽生长和多种上皮—间充质相互作用。硫酸乙酰肝素既协助配体结合，也限制或促进配体在细胞外的移动，说明梯度形状是组织环境和受体系统共同产生的。[^fgf-development]

### Notch 与 JAK–STAT 的直接转录连接 { #notch-jak-stat }

Notch 受体和 Delta／Jagged 类配体都是跨膜蛋白，通常要求发送细胞与接收细胞直接接触。配体结合并受到发送细胞内吞产生的机械牵引后，Notch 先由 ADAM 蛋白酶、再由 γ-分泌酶切割；释放的 Notch 胞内结构域（Notch intracellular domain，NICD）进入细胞核，与 CSL／RBPJ 和 Mastermind 组成转录激活复合物。该通路缺少经典的多级激酶放大，NICD 及 HES／HEY 靶产物又常较短寿，因此适合形成快速开关、侧向抑制和振荡。Notch 还可维持祖细胞，或在两个已不等价的细胞之间传递诱导信号。[^pathway-reuse]

JAK–STAT 通路同样把膜上事件直接联到转录。细胞因子受体本身通常没有激酶结构域，配体促使受体聚合后，结合受体的 JAK 相互激活并磷酸化受体，STAT 随后被募集、磷酸化、二聚并进入细胞核。该通路既参与脊椎动物造血和免疫，也参与胚胎图式、干细胞生态位和器官形态发生；果蝇还使用 Unpaired–Domeless–STAT92E 系统。细胞因子信号抑制蛋白（suppressor of cytokine signaling，SOCS）等通路靶产物可建立负反馈，限制信号的强度和持续时间。

整联蛋白、钙信号和细胞骨架通路也能改变转录与命运，并在发育中同时承担黏附、力学感受和细胞迁移。整联蛋白通过 FAK、Src、Ras–ERK 或 PI3K 把细胞外基质状态传入细胞，既能建立响应其他配体的许可环境，也能直接影响存活和分化。它们与上皮重排、上皮—间充质转变和组织力学的关系见[原肠形成与胚层建立](gastrulation_germ_layers.md)及[形态发生与器官发生](morphogenesis.md)。

## 增强子的细胞特异性解释 { #enhancer-logic }

一个发育增强子往往同时容纳信号依赖效应因子、谱系转录因子、激活因子和阻遏因子的结合位点。染色质可及性、所需因子组合以及与合适启动子的调控接触，共同决定增强子的特定时空输出。相同的 Smad、TCF、Gli、ETS、STAT 或 RBPJ 活性，因此在神经外胚层、肢芽和肠上皮中得到不同解释。

增强子通常可以远离启动子并以不同方向发挥作用，但仍受染色质折叠、拓扑结构域、绝缘子和启动子相容性的限制。许多发育基因由多个增强子分别控制不同组织或阶段；有些看似重复的影子增强子能在温度波动或遗传扰动下维持表达精度。较弱结合位点和特定间距有时要求多个因子同时存在，从而减少异位表达。[^enhancer-landscape]

感受态由此获得了可检验的分子含义。细胞可能表达受体并出现正常的 Smad 或 ERK 活性，却因关键增强子尚未开放而不启动某个命运；先锋因子和染色质重塑复合物可以提前建立可及性，谱系因子则选择信号效应因子能够占据的位点。增强子关闭、受体减少或抑制因子积累，都能使组织退出响应窗口。[胚胎诱导与感受态](cell_fate_models.md#induction-and-competence)在这一层面与通路机制相接。

## 发育基因调控网络 { #gene-regulatory-networks }

增强子定义单个基因怎样读取输入，发育基因调控网络（gene regulatory network，GRN）则描述多个调控基因和信号基因之间具有因果方向的联系。网络节点代表经过扰动、时序和顺式调控证据支持的调控关系。一个转录因子可激活新配体，把已有空间差异传给邻区；接收区产生的新因子又能启动下一轮诱导。胚胎通过这样的接力，逐步把粗略坐标转成越来越细的调控状态。[^grn-properties]

若干反复出现的网络结构具有明确功能。正反馈和多基因互相维持可在最初信号消失后保存状态；两个命运程序之间的交叉抑制可以锐化边界；前馈回路只有在输入持续足够久时才完整启动，能够滤除短暂波动；负反馈限制通路并帮助组织适应持续刺激。果蝇体节极性区域中 Wingless 与 Hedgehog 维持彼此表达，是局部状态维持的经典例子。海胆植物侧 β-catenin 启动内中胚层调控网络后，网络又产生 Delta 和其他信号，把初始母源差异传向相邻细胞。

具有机制含义的 GRN 图需要超越转录组相关性。必要性扰动、异位激活、救援和时间顺序可以推断上下游，报告基因与内源增强子编辑检验顺式输入，染色质占据或可及性数据提供直接结合的候选；这些证据共同赋予箭头“直接激活”或“直接抑制”的含义。单细胞测序能分辨连续状态和稀有分支，时空扰动与谱系信息则用于确定细胞怎样从一个状态到达另一个状态。

## 发育信号的时空编码 { #spatiotemporal-coding }

形态发生素梯度为细胞提供位置相关输入，细胞读取受体和胞内效应因子随时间变化的活性。高浓度可以提高效应因子峰值，也可能延长其活性；持续刺激会诱导受体内吞、磷酸酶或分泌性拮抗物，使反应逐渐适应。下游网络还会累积、延迟或抑制输出，因此命运边界取决于浓度、暴露时间和细胞历史的组合。

脊椎动物腹侧神经管提供了清楚例证。来自脊索和底板的 Sonic hedgehog 使 Gli 活性在空间上呈梯度，但神经祖细胞还会随时间逐渐适应持续信号。较高 Shh 浓度可把 Gli 活性维持更久，不同祖细胞身份因而依赖信号强度与持续时间的积分；Pax6、Olig2、Nkx2.2 等转录因子之间的交叉抑制再把初始差异转成清晰边界。简单的“每个浓度对应一种命运”只描述了结果的一部分。[^shh-temporal]

FGF／ERK 也能用动态区分输出。ERK 活性的幅度、累计剂量、持续时间和脉冲频率都可能被靶基因读取，具体解码方式依细胞和组织而变。经典培养细胞实验中，短暂与持续 ERK 活性分别关联增殖和分化；在胚胎内，Sprouty、DUSP 等反馈调节者塑造 ERK 的时空活动，活体报告器和可控扰动可进一步区分峰值、持续时间与累计剂量的作用。[^signaling-dynamics]

振荡则把发育时间转成周期结构。脊椎动物体节形成时，预体节中胚层的 Notch、Wnt 和 FGF 网络产生行进的活动波，Notch 介导的邻细胞耦合帮助局部振荡同步；当细胞随轴延长离开后端信号环境时，振荡相位与移动的成熟前沿共同确定新体节边界。小鼠与人类细胞的振荡周期不同，部分源于转录、剪接、翻译和蛋白降解等生化反应速度差异，显示发育节律扎根于具体的分子反应。

## 染色质状态与基因组序列 { #chromatin-and-genome }

信号引起的命运变化绝大多数发生在相同 DNA 序列之上。组蛋白修饰、DNA 甲基化、核小体重塑和三维接触改变调控元件的可及性与使用概率，并与转录反馈共同保存细胞状态。单个修饰的效应取决于具体残基、修饰程度、共存标记和读取蛋白；“组蛋白密码”可以辅助记忆，预测某个基因在何时何地表达则需要完整的调控情境。

基因组印记是亲本来源依赖的等位基因表达，印记控制区的 DNA 甲基化及染色质状态在配子发生时建立，并在受精后的广泛表观重编程中选择性维持。它是发生于特定位点、组织和阶段的调控，对哺乳动物胎盘和胎儿生长尤为重要。为避免父源或母源印记在命名上的歧义，可直接写明表达的是父源还是母源等位基因。[^placental-imprinting]

少数生物确实在发育中改变 DNA 含量或结构。寄生性线虫、七鳃鳗等类群可在体细胞祖细胞中程序性消除染色体片段或整条染色体，生殖系则保留较完整的基因组；卵母细胞或果蝇卵壳细胞中的特定基因扩增，则能在短期内提高核糖体核糖核酸（ribosomal RNA，rRNA）或卵壳蛋白产量。这些专门机制各有明确的物种、细胞和发育阶段范围，通常的命运决定主要依靠基因表达调节。[^programmed-dna-elimination]

## 发育信号的机制证据 { #evidence-standards }

在胚胎中观察到配体、受体或磷酸化效应因子，只能说明通路可能活动。要证明某条通路直接指定某种命运，需要在正确时间和位置改变通路活性，排除细胞死亡、增殖、迁移或组织缺失造成的间接效应，并检测早期直接靶基因和最终命运。局部来源消融、受体或效应因子的细胞自主扰动、短时抑制、异位激活与救援提供互补证据；活体报告器还应确认实验真正改变了预期的幅度和动态。

增强子层面的因果要求更细。效应因子的区域占据提示潜在调控，报告载体显示片段的调控潜力，编辑内源结合位点、比较等位基因表达并观察空间边界是否移动，则可检验该区域是否必需并把通路输入与特定顺式元件可靠连接。发育信号的完整解释最终应跨越四个尺度：配体怎样分布，细胞怎样转导，增强子怎样组合读取，调控网络怎样维持或推进组织状态。

这些原则在具体发育过程中以不同方式组合：[胚轴、分节与位置身份](axis_patterning.md)涉及母体信息、形态发生素和 Hox 层级，[形态发生与器官发生](morphogenesis.md)则展示信号与黏附、力学和细胞运动的耦合。通路图提供可复用的语法，胚胎的空间、时间和调控状态共同组成每一次真实的发育过程。

## 参考资料与延伸阅读 { #references }

- Perrimon N, Pitsouli C, Shilo B-Z. Signaling mechanisms controlling cell fate and embryonic patterning. *Cold Spring Harbor Perspectives in Biology*. 2012;4:a005975.
- MacDonald BT, Tamai K, He X. Wnt/β-catenin signaling: components, mechanisms, and diseases. *Developmental Cell*. 2009;17:9–26.
- Ribes V, Briscoe J. Establishing and interpreting graded Sonic Hedgehog signaling during vertebrate neural tube patterning: the role of negative feedback. *Cold Spring Harbor Perspectives in Biology*. 2009;1:a002014.
- Long HK, Prescott SL, Wysocka J. Ever-changing landscapes: transcriptional enhancers in development and evolution. *Cell*. 2016;167:1170–1187.
- Davidson EH, Levine MS. Properties of developmental gene regulatory networks. *Proceedings of the National Academy of Sciences USA*. 2008;105:20063–20066.
- Sonnen KF, Janda CY. Signalling dynamics in embryonic development. *Biochemical Journal*. 2021;478:4045–4070.

[^pathway-reuse]: 少数通路被反复用于不同发育过程、通路末端效应因子及输出依赖细胞状态的综述，见 Perrimon、Pitsouli 与 Shilo [Signaling Mechanisms Controlling Cell Fate and Embryonic Patterning](https://pmc.ncbi.nlm.nih.gov/articles/PMC3405863/)。该文也比较了 Notch、Wnt、Hedgehog、TGF-β、RTK 和 JAK–STAT 的共同逻辑。
[^wnt-mechanism]: Wnt／β-catenin 通路从 Frizzled–LRP 受体、破坏复合物到 TCF／LEF 转录输出的机制，见 MacDonald、Tamai 与 He [Wnt/β-catenin signaling: components, mechanisms, and diseases](https://pmc.ncbi.nlm.nih.gov/articles/PMC2861485/)；β-catenin 还参与细胞黏附，具体作用须以所处复合物区分。
[^shh-temporal]: Shh 的组织分布、Gli 激活／阻遏输出、负反馈及神经管细胞对浓度和持续时间的积分，见 Ribes 与 Briscoe [Establishing and Interpreting Graded Sonic Hedgehog Signaling during Vertebrate Neural Tube Patterning](https://pmc.ncbi.nlm.nih.gov/articles/PMC2742090/)。
[^tgf-development]: Nodal、BMP 的受体—Smad 支路、早期胚层与背腹图式作用及跨物种差异，见 Schier 与 Shen [Nodal signalling in vertebrate development](https://www.nature.com/articles/35000126)及 Zinski、Tajer 与 Mullins [TGF-β Family Signaling in Early Vertebrate Development](https://pmc.ncbi.nlm.nih.gov/articles/PMC5983195/)。
[^fgf-development]: FGF 与 FGFR、硫酸乙酰肝素及 Ras–ERK 等支路的关系，见 Pownall 与 Isaacs [FGF signalling: diverse roles during early vertebrate embryogenesis](https://pmc.ncbi.nlm.nih.gov/articles/PMC3747497/)及 Zhang 等 [Mechanisms of FGF gradient formation during embryogenesis](https://pmc.ncbi.nlm.nih.gov/articles/PMC4906438/)。
[^enhancer-landscape]: 发育增强子的组合输入、模块性、弱结合位点和调控景观，见 Long、Prescott 与 Wysocka [Ever-Changing Landscapes: Transcriptional Enhancers in Development and Evolution](https://www.sciencedirect.com/science/article/pii/S009286741631251X)。增强子能够远距离作用，但其靶标仍受三维基因组和启动子关系约束。
[^grn-properties]: 发育 GRN 中顺式输入、信号节点、正反馈与空间抑制的因果含义，见 Davidson、McClay 与 Hood [Regulatory gene networks and the properties of the developmental process](https://pubmed.ncbi.nlm.nih.gov/12578984/)及 Davidson 与 Levine [Properties of developmental gene regulatory networks](https://pmc.ncbi.nlm.nih.gov/articles/PMC2629280/)。
[^signaling-dynamics]: 信号幅度、持续时间、频率与振荡的编码方式，以及 Notch、Wnt、FGF／ERK 在体节形成中的动态，见 Sonnen 与 Janda [Signalling dynamics in embryonic development](https://researchinformation.umcutrecht.nl/en/publications/signalling-dynamics-in-embryonic-development/)。
[^placental-imprinting]: 亲本来源依赖表达、印记控制区及胎盘中的组织和物种特异性，见 Hanna [Placental imprinting: Emerging mechanisms and functions](https://pmc.ncbi.nlm.nih.gov/articles/PMC7179826/)。
[^programmed-dna-elimination]: 程序性 DNA 消除涉及染色体片段、整条染色体或亲本基因组的选择性去除，并只见于特定类群和发育情境，见 Dedukh 与 Krasikova [Delete and survive: strategies of programmed genetic material elimination in eukaryotes](https://pubmed.ncbi.nlm.nih.gov/34542224/)；果蝇卵泡细胞中卵壳蛋白基因簇的发育性扩增及其产量作用，见 Kim 等 [Integrative analysis of gene amplification in Drosophila follicle cells](https://pmc.ncbi.nlm.nih.gov/articles/PMC3134082/)。
