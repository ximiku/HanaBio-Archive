# 神经递质与受体

化学突触把一次电活动转换为分子信号。能够承担这一步的物质从乙酰胆碱、氨基酸和单胺延伸到三磷酸腺苷（adenosine triphosphate，ATP）、神经肽、气体与脂质；它们具有不同的合成位置、释放方式和清除路径。认定一种神经递质，通常需要综合其在相关神经元中的合成或存在、受刺激后的释放、靶细胞受体以及阻断这些环节后的功能变化。一氧化氮（nitric oxide，NO）和内源性大麻素等信号按需合成，扩展了以囊泡储存为核心的经典递质证据框架。

“递质”与“调质”描述的是作用方式，二者可以由同一种化学信号在不同条件下承担。一个信号可以在局部突触产生快速电流，也可经突触外受体缓慢改变通道、释放概率或基因表达。许多神经元还能共同释放两种以上信号物质；小分子递质与神经肽常位于不同囊泡群，并因放电频率和 Ca$^{2+}$ 动态不同而被差异募集。因此，神经元的化学身份是一组具有时空条件的输出。[^transmitter-framework]

## 从合成到清除的化学循环 { #transmitter-life-cycle }

多数小分子递质由末梢已有的酶和前体合成，再由以囊泡内质子电化学梯度为动力的转运体装入小而透明的突触小泡。神经肽则先在胞体粗面内质网合成为前体，经高尔基体加工并装入大致密芯囊泡，再沿轴突运输。动作电位与 Ca$^{2+}$ 如何触发这些囊泡融合，见[突触传递](neuro_synapse.md#calcium-vesicle-release)；释放前后的合成、装载与清除共同构成递质的化学循环。[^transmitter-cycle]

递质与受体解离后，扩散、摄取和降解继续决定信号的时空范围。乙酰胆碱主要在间隙中被酶水解；谷氨酸、γ-氨基丁酸（γ-aminobutyric acid，GABA）、甘氨酸和单胺主要依赖神经元或胶质细胞的膜转运体摄取，再进入回收或代谢；ATP 可被胞外核苷酸酶逐级水解为腺苷，而生成的腺苷本身仍是活性信号；神经肽多由胞外肽酶切割，其完整分子通常随降解失活。扩散、摄取与降解的相对速度决定递质能作用多远、持续多久，也决定突触释放是否会溢出到突触外受体。[^transmitter-removal]

## 受体类型与递质效应 { #receptor-families }

受体的分子类型、所在细胞和亚细胞位置共同决定递质效应。配体门控离子通道直接改变膜电导，常在毫秒尺度产生电流；G 蛋白偶联受体（G protein-coupled receptor，GPCR）经 G$\alpha$、G$\beta\gamma$、第二信使和蛋白磷酸化改变通道、酶与转录，起效通常较慢而影响更持久。NO 则直接穿膜，主要激活胞内可溶性鸟苷酸环化酶。细胞信号转导的一般机制见[细胞信号转导](../cell/cell_signaling.md)。[^receptor-families]

| 递质系统 | 快速离子型受体 | 代谢型或胞内靶点 | 主要终止路径 |
| --- | --- | --- | --- |
| 乙酰胆碱 | 烟碱型受体（nAChR） | M$_1$–M$_5$ 毒蕈碱型受体 | AChE 水解，胆碱回收 |
| 谷氨酸 | AMPA、NMDA、红藻氨酸受体 | mGlu$_1$–mGlu$_8$ 受体 | EAAT 摄取与谷氨酸—谷氨酰胺循环 |
| GABA／甘氨酸 | GABA$_\mathrm{A}$、甘氨酸受体 | GABA$_\mathrm{B}$ 受体 | 神经元与胶质转运体摄取、代谢 |
| 单胺 | 5-HT$_3$ 受体是显著例外 | 多巴胺、肾上腺素能、其余 5-HT 及组胺受体主要为 GPCR | 特异性摄取转运体与胞内酶代谢 |
| ATP／腺苷 | P2X 受体 | P2Y 与腺苷受体 | 胞外逐级水解、摄取与代谢 |
| NO | — | 可溶性鸟苷酸环化酶 | 扩散及与血红素、硫醇和自由基反应 |

离子型受体造成兴奋还是抑制，要根据通道的离子选择性、当时的反转电位和动作电位阈值判断；代谢型受体的净效应还取决于它连接的效应器。即使同为乙酰胆碱，神经肌接头的烟碱型受体可形成快速去极化，心脏 M$_2$ 受体则可降低起搏频率。多巴胺作用于 D$_1$ 样或 D$_2$ 样受体时分别偏向 G$_{s/olf}$ 或 G$_{i/o}$ 信号，回路输出还受受体位置和细胞连接控制。多巴胺的兴奋或抑制效应因受体和回路而异。[^receptor-nomenclature]

受体也可位于突触前末梢。由该末梢释放的递质反向作用于自身受体，可反馈调节后续合成或释放；邻近轴突、胶质细胞或其他来源的信号作用于突触前受体，则可改变 Ca$^{2+}$ 通道、K$^+$ 通道或释放机器。长期激动还可能引起磷酸化、脱敏、内化和表达量变化。“受体上调或下调”需要进一步说明测量的是表面数量、总蛋白、亲和力还是信号耦联效率。

## 经典小分子递质系统 { #classical-small-molecule-transmitters }

### 乙酰胆碱 { #acetylcholine }

胆碱乙酰转移酶在胞质中以胆碱和乙酰辅酶 A（acetyl coenzyme A，acetyl-CoA）合成乙酰胆碱（acetylcholine，ACh），囊泡乙酰胆碱转运体（vesicular acetylcholine transporter，VAChT）把它装入囊泡。释放后的 ACh 被乙酰胆碱酯酶（acetylcholinesterase，AChE）迅速水解为胆碱与乙酸，胆碱经高亲和力转运回末梢，成为再合成的重要限速前体。烟碱型乙酰胆碱受体（nicotinic acetylcholine receptor，nAChR）是五聚体配体门控阳离子通道；毒蕈碱型受体是 GPCR，其中 M$_1$、M$_3$、M$_5$ 主要偶联 G$_{q/11}$，M$_2$、M$_4$ 主要偶联 G$_{i/o}$。这一分化解释了 ACh 可在骨骼肌、自主神经节、心脏和中枢产生不同时间过程与方向的响应。[^acetylcholine]

### 谷氨酸、GABA 与甘氨酸 { #amino-acid-transmitters }

谷氨酸是哺乳动物中枢神经系统最主要的快速兴奋性递质。神经元可从葡萄糖代谢中间物或胶质细胞送回的谷氨酰胺补充谷氨酸，经囊泡谷氨酸转运体（vesicular glutamate transporter，VGLUT）装入囊泡；释放后，兴奋性氨基酸转运体（excitatory amino acid transporter，EAAT）将其摄入神经元和星形胶质细胞，后者把谷氨酸转成谷氨酰胺再供神经元使用。AMPA 与红藻氨酸（kainate）受体主要承载快速电流；NMDA 受体还受电压依赖性 Mg$^{2+}$ 阻塞，需要谷氨酸和甘氨酸或 D-丝氨酸（D-serine）协同占位，并可通透 Ca$^{2+}$；代谢型谷氨酸受体（metabotropic glutamate receptor，mGlu receptor）则通过 GPCR 调节兴奋性和突触效能。甘氨酸既是 NMDA 受体共激动剂，也可在脊髓和脑干经甘氨酸受体产生快速抑制。[^glutamate]

GABA 由谷氨酸脱羧酶（glutamate decarboxylase，GAD）以磷酸吡哆醛（pyridoxal phosphate，PLP）为辅因子从谷氨酸生成；GABA 与甘氨酸可由囊泡 GABA 转运体／囊泡抑制性氨基酸转运体（vesicular GABA transporter/vesicular inhibitory amino acid transporter，VGAT/VIAAT）装载，释放后分别由 GABA 转运体（GABA transporter，GAT）和甘氨酸转运体（glycine transporter，GlyT）家族摄取。GABA$_\mathrm{A}$ 与甘氨酸受体是配体门控阴离子通道，其效应取决于 Cl$^-$ 梯度；GABA$_\mathrm{B}$ 是 G$_{i/o}$ 偶联受体，可抑制 Ca$^{2+}$ 通道、开放 K$^+$ 通道并降低递质释放。旧称 GABA$_\mathrm{C}$ 的含 $\rho$ 亚基受体，现按国际基础与临床药理学联合会受体命名委员会（NC-IUPHAR）命名归入 GABA$_\mathrm{A}$ 受体家族。[^gaba-glycine]

### 单胺 { #monoamines }

儿茶酚胺共享酪氨酸（tyrosine，Tyr）→ L-3,4-二羟基苯丙氨酸（L-3,4-dihydroxyphenylalanine，L-DOPA）→ 多巴胺（dopamine）的前段合成路线，去甲肾上腺素还需在囊泡内由多巴胺 β-羟化酶（dopamine β-hydroxylase）生成；5-羟色胺（5-hydroxytryptamine，5-HT）来自色氨酸，组胺来自组氨酸。囊泡单胺转运体（vesicular monoamine transporter，VMAT）把多巴胺、去甲肾上腺素、肾上腺素、5-HT 和组胺等单胺装入酸性囊泡。释放后的多巴胺、去甲肾上腺素和 5-HT 主要分别由多巴胺转运体（dopamine transporter，DAT）、去甲肾上腺素转运体（norepinephrine transporter，NET）和 5-羟色胺转运体（serotonin transporter，SERT）摄取，胞内游离单胺可由线粒体外膜上的单胺氧化酶（monoamine oxidase，MAO）代谢，儿茶酚胺还受儿茶酚-O-甲基转移酶（catechol-O-methyltransferase，COMT）作用。回收、囊泡再装载和酶代谢是相接的步骤。[^monoamines]

单胺受体绝大多数是 GPCR：多巴胺有 D$_1$–D$_5$，肾上腺素能受体包括 $\alpha_1$、$\alpha_2$ 与 $\beta$ 家族，组胺受体包括 H$_1$–H$_4$；5-HT 受体分成多个家族，其中 5-HT$_3$ 是配体门控阳离子通道，其余主要为 GPCR。受体亚型在脑区、细胞与突触前后位置上的组合，使少量弥散投射系统能够共同调节觉醒、运动、奖赏、情绪、体温和内分泌。

## 嘌呤、神经肽与非常规信号 { #purines-peptides-unconventional }

ATP 可作为独立递质，也常与 ACh、去甲肾上腺素等共同装入和释放。P2X 是 ATP 门控阳离子通道，P2Y 是响应核苷酸的 GPCR；胞外酶把 ATP、ADP 和 AMP 逐级转成腺苷后，信号转由 A$_1$、A$_{2A}$、A$_{2B}$、A$_3$ 等腺苷 GPCR 读取。因此，ATP 水解既终止一种受体输入，也可能生成另一种活性配体。[^purines]

神经肽由前体蛋白切割而来，一个前体可产生多种活性肽。P 物质、降钙素基因相关肽（calcitonin gene-related peptide，CGRP）、内源性阿片肽、生长抑素和血管活性肠肽（vasoactive intestinal peptide，VIP）等常与小分子递质共存，较强或持续放电可优先募集其大致密芯囊泡。它们多作用于高亲和力 GPCR，扩散范围和作用时间往往较长，随后由胞外肽酶降解；部分肽类受体还可迅速影响离子通道。

NO 由神经元型一氧化氮合酶等按需生成，随后跨膜扩散，结合可溶性鸟苷酸环化酶的血红素并提高环磷酸鸟苷（cyclic guanosine monophosphate，cGMP）。其短寿命和化学反应性限定了作用范围；生成过多时又可参与氧化与硝化应激。内源性大麻素 2-花生四烯酰甘油（2-arachidonoylglycerol，2-AG）与花生四烯酸乙醇胺（anandamide）则由膜脂前体按需合成，许多突触中从突触后细胞逆行到突触前 1 型大麻素受体（cannabinoid receptor type 1，CB$_1$ receptor），经 G$_{i/o}$ 降低释放概率，再由单酰甘油脂肪酶（monoacylglycerol lipase，MAGL）、脂肪酸酰胺水解酶（fatty acid amide hydrolase，FAAH）等酶终止。这些信号展示了按需合成和逆行传递两种不同于经典囊泡释放的组织方式。[^unconventional-signals]

## 药理学干预定位传递环节 { #pharmacological-intervention }

作用于同一突触的药物或毒素可以落在完全不同的步骤。肉毒神经毒素进入外周胆碱能末梢后，按血清型切割 SNAP-25、syntaxin 或 VAMP/synaptobrevin 等 SNARE 蛋白，阻断 ACh 小泡融合并造成弛缓性麻痹；破伤风神经毒素同样切割 VAMP，却经逆行运输和跨突触转运主要影响中枢抑制性末梢，减少 GABA 与甘氨酸释放，造成痉挛性麻痹。相同的分子机器靶点，因进入的神经元群和回路位置不同而产生相反表型。[^toxins]

AChE 抑制剂延长 ACh 在间隙中的存在；DAT、NET 或 SERT 抑制剂改变单胺清除；利血平抑制 VMAT，使胞质单胺失去囊泡保护并更易被代谢。受体激动剂、竞争性拮抗剂、变构调节剂和通道阻断剂则分别改变配体效能、占位或受体门控。药理效应需要结合作用位点、剂量、暴露时间和受体分布解释，再据此判断递质在特定回路中的功能。

## 参考资料与延伸阅读 { #references }

- Purves D, Augustine GJ, Fitzpatrick D, et al., editors. [Neurotransmitters](https://www.ncbi.nlm.nih.gov/books/NBK10795/)、[GABA and Glycine](https://www.ncbi.nlm.nih.gov/books/NBK11084/). *Neuroscience*, 2nd ed.
- Holz RW, Fisher SK. [Synaptic Transmission](https://www.ncbi.nlm.nih.gov/books/NBK27911/). *Basic Neurochemistry*, 6th ed.
- IUPHAR/BPS Guide to PHARMACOLOGY. [Ion channel families](https://www.guidetopharmacology.org/GRAC/ReceptorFamiliesForward?type=IC)、[Muscarinic acetylcholine receptors](https://www.guidetopharmacology.org/GRAC/FamilyIntroductionForward?familyId=2)、[Dopamine receptors](https://www.guidetopharmacology.org/GRAC/FamilyIntroductionForward?familyId=20)、[P2Y receptors](https://www.guidetopharmacology.org/GRAC/FamilyIntroductionForward?familyId=52).
- Tritsch NX, Granger AJ, Sabatini BL. [Mechanisms and functions of GABA co-release](https://pmc.ncbi.nlm.nih.gov/articles/PMC6980171/). *Nat Rev Neurosci*. 2016;17:139–145.
- Katona I, Freund TF. [Multiple Functions of Endocannabinoid Signaling in the Brain](https://pmc.ncbi.nlm.nih.gov/articles/PMC4273654/). *Annu Rev Neurosci*. 2012;35:529–558.

[^transmitter-framework]: 递质鉴定的操作性证据、递质与调质的连续性及一神经元释放多种信号，参见 Purves 等的 [Neurotransmitters](https://www.ncbi.nlm.nih.gov/books/NBK10795/)；共同释放对经典 Dale 原则表述的修正，参见 Tritsch 等的 [Mechanisms and functions of GABA co-release](https://pmc.ncbi.nlm.nih.gov/articles/PMC6980171/)。
[^transmitter-cycle]: 小分子递质的末梢合成与囊泡装载、神经肽的胞体合成和致密芯囊泡运输，参见 [Neurotransmitters](https://www.ncbi.nlm.nih.gov/books/NBK10795/) 与 [Synaptic Transmission](https://www.ncbi.nlm.nih.gov/books/NBK27911/)。
[^transmitter-removal]: 不同递质依赖摄取、胞外水解或酶降解的差异，参见 [Neurotransmitters](https://www.ncbi.nlm.nih.gov/books/NBK10795/)；嘌呤信号的逐级胞外代谢见 [The purinergic neurotransmitter revisited](https://pmc.ncbi.nlm.nih.gov/articles/PMC4185222/)。
[^receptor-families]: 配体门控通道家族的现行分类见 IUPHAR/BPS [Ion channel families](https://www.guidetopharmacology.org/GRAC/ReceptorFamiliesForward?type=IC)；GPCR 与 NO—可溶性鸟苷酸环化酶的一般接口见 [Signaling Molecules and Their Receptors](https://www.ncbi.nlm.nih.gov/books/NBK9924/)。
[^receptor-nomenclature]: M$_1$/M$_3$/M$_5$ 与 M$_2$/M$_4$ 的主要 G 蛋白偶联分别见 IUPHAR/BPS [Muscarinic acetylcholine receptors](https://www.guidetopharmacology.org/GRAC/FamilyIntroductionForward?familyId=2)；D$_1$ 样与 D$_2$ 样家族及其经典 cAMP 信号见 [Dopamine receptors](https://www.guidetopharmacology.org/GRAC/FamilyIntroductionForward?familyId=20)。
[^acetylcholine]: ACh 的合成、囊泡装载、水解与胆碱回收，以及烟碱型和毒蕈碱型受体差异，参见 Purves 等 [Neurotransmitters](https://www.ncbi.nlm.nih.gov/books/NBK10795/) 中的 Acetylcholine 节和 IUPHAR/BPS 受体资料。
[^glutamate]: 谷氨酸—谷氨酰胺循环、EAAT、离子型与代谢型谷氨酸受体，以及 NMDA 受体的配体和电压门控，参见 Purves 等 [Neurotransmitters](https://www.ncbi.nlm.nih.gov/books/NBK10795/) 中的 Glutamate 节。
[^gaba-glycine]: GAD—PLP 合成、GABA 与 glycine 的摄取和抑制性受体，参见 [GABA and Glycine](https://www.ncbi.nlm.nih.gov/books/NBK11084/)；旧称 GABA$_\mathrm{C}$ 的 $\rho$ 亚基受体现归入 GABA$_\mathrm{A}$，见 IUPHAR/BPS [GABA_A receptors](https://www.guidetopharmacology.org/GRAC/FamilyIntroductionForward?familyId=72)。
[^monoamines]: 单胺合成、囊泡装载、膜摄取与 MAO／COMT 代谢的共同框架，参见 Purves 等 [Neurotransmitters](https://www.ncbi.nlm.nih.gov/books/NBK10795/) 中的 Biogenic Amines 节及 [Storage and Release of Catecholamines](https://www.ncbi.nlm.nih.gov/books/NBK28060/)。
[^purines]: P2X 离子通道、P2Y GPCR 以及腺苷受体的分类见 IUPHAR/BPS [P2Y receptors: Introduction](https://www.guidetopharmacology.org/GRAC/FamilyIntroductionForward?familyId=52)；ATP 降解与腺苷生成见 [The purinergic neurotransmitter revisited](https://pmc.ncbi.nlm.nih.gov/articles/PMC4185222/)。
[^unconventional-signals]: NO 的合成与 sGC 靶点另见[一氧化氮合成](../biochem/aa_synthesis.md#nitric-oxide-polyamines)；内源性大麻素按需合成、逆行作用于突触前 CB$_1$ 并降低释放概率，参见 Katona 与 Freund 的 [Multiple Functions of Endocannabinoid Signaling in the Brain](https://pmc.ncbi.nlm.nih.gov/articles/PMC4273654/)。
[^toxins]: 肉毒毒素按血清型切割不同 SNARE、阻断末梢小泡释放的机制见 [The blockade of the neurotransmitter release apparatus by botulinum neurotoxins](https://pmc.ncbi.nlm.nih.gov/articles/PMC11113401/)；破伤风毒素对抑制性递质释放和回路表型的区别见 [Tetanus Control in the United States and Global Disaster Settings](https://pmc.ncbi.nlm.nih.gov/articles/PMC12942225/)。
