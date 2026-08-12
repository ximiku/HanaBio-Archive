# DNA重组与转座

基因组并非只能按原有顺序复制。细胞可以让一条 DNA 链进入另一条同源双链，以完整模板修复断裂；重组酶可以识别一对短位点，定向删除、倒位或整合其间片段；转座元件还携带自身移动所需的顺式末端和酶，在较少依赖靶序列同源性的条件下改变位置。它们都产生新的 DNA 接头，但识别对象、反应中间体和生物学后果并不相同。

同源重组通常要求较长的序列相似性，核心任务是从同源模板恢复信息。保守型位点特异性重组要求重组酶识别相配的短位点，交换前后通常没有净核苷酸增减。DNA 转座由转座酶连接元件末端与新靶位点；逆转座则先把元件转录成 RNA，再生成可插入的新 DNA 拷贝。区分这四类过程，是理解交叉互换、基因转换、病毒整合、插入突变和重复序列扩增的起点。

## 同源重组把断裂末端接入同源模板 { #homologous-recombination }

同源重组（homologous recombination, HR）的共同反应次序是产生 3′ 单链 DNA、装配 RecA 家族重组酶核蛋白丝、搜索同源双链、链侵入形成 displacement loop（D-loop），再以侵入链的 3′ 端引发 DNA 合成。侵入链与供体链形成的 heteroduplex 可能含有错配；错配修复或后续复制会使局部序列按一方模板统一，形成不伴随两侧染色体臂互换的 gene conversion。[^recombination-overview]

链侵入之后存在多条去路。新合成链若从 D-loop 解离并回到断裂另一端退火，形成 synthesis-dependent strand annealing（SDSA），通常得到 noncrossover 产物。若第二个断裂端被捕获，可形成 double Holliday junction（dHJ）；结构特异性核酸酶按不同方向切开两个连接，可能产生 crossover 或 noncrossover，BLM／Sgs1–TOP3–RMI 类解旋酶—拓扑异构酶复合体也可把两个连接相向迁移并 dissolve 为 noncrossover。只有一个可用断裂端时，break-induced replication（BIR）可在供体上建立长距离复制，但也容易伴随拷贝数变化、模板切换和杂合性丢失。[^hr-outcomes]

Holliday 在 1964 年提出的模型用对称单链切口、链交换、分支迁移和四臂连接解释重组产物，是识别 heteroduplex 与 Holliday junction 的关键概念来源。现代细胞中的 HR 常从复制缺口、停滞复制叉或双链断裂开始，也有 SDSA 等不形成稳定 Holliday junction 的路线。因此，Holliday junction 是一类真实中间体，不是所有同源重组都必须逐步照搬的统一起始模型；crossover 也不是“切同一组链或另一组链”这一单一规则即可预测的固定结果。

### 细菌、古菌和真核使用同源的反应逻辑与不同的装置 { #hr-across-domains }

大肠杆菌的 RecBCD 结合近乎平齐的双链断裂末端，同时解旋并切割 DNA。遇到方向正确的 Chi 位点后，复合物改变核酸酶偏向并把 RecA 装载到 3′ 单链尾；RecA 核蛋白丝完成同源搜索和链交换，RuvAB 推动 Holliday junction 分支迁移，RuvC 将其切开。单链缺口和复制后间隙更多由 RecJ、RecQ 与 RecFOR 扩大并把 RecA 装载到 SSB 包被的 DNA。RecBCD、Chi 和 RuvC 是大肠杆菌范式；其他细菌可使用 AddAB、AdnAB、RecU 或不同 Chi 序列，不能由一套蛋白名代表整个细菌域。[^bacterial-recombination]

许多古菌以 Mre11–Rad50 感知断端，HerA 解旋酶与 NurA 核酸酶参与切除，再由 RadA 核蛋白丝完成同源搜索。真核细胞则由 MRN–CtIP、EXO1 或 DNA2–BLM 等建立 3′ 单链尾，RPA 先保护单链，BRCA2 等介质再促进 RAD51 取代 RPA。三域系统共享“末端加工—重组酶核蛋白丝—同源搜索—DNA 合成—中间体拆解”的功能逻辑，但其切除、介质和连接处理机器经过了谱系特异的组合。断裂修复通路选择及 NHEJ 边界见[DNA损伤、修复与突变](dna_repair.md#break-crosslink-repair)。[^archaea-eukaryote-hr]

### 减数分裂把同源重组改造成受控的染色体交换 { #meiotic-recombination }

许多有性生殖真核生物在减数分裂前期由 Spo11 及辅助蛋白程序化产生双链断裂。Spo11 以类似Ⅱ型拓扑异构酶的转酯反应共价连接断端，随后被连同短寡核苷酸移除并启动切除。RAD51 与减数分裂特异的 DMC1 促进链侵入，染色体轴和联会复合体相关因子又使同源染色体而非姐妹染色单体优先成为模板。大量起始事件最终分流为 gene conversion、noncrossover 或少量受控 crossover。

crossover 把同源染色体臂的两侧标记重新组合，并与姐妹染色单体黏连共同形成支持减数第一次分裂定向的 chiasma。在许多物种中，每对同源染色体至少获得一次交换的 crossover assurance、相邻交换彼此抑制的 interference，以及特定热点分布共同约束其数目和位置；这些规则及其分子实现随谱系而异，也存在不依赖典型交叉的染色体分离系统。减数分裂的联会、黏连和分离见[细胞周期与细胞分裂](../cell/cell_cycle.md#meiosis)，遗传图距与交换后代模式由遗传栏目展开。[^meiotic-crossovers]

同源序列若位于非等位位置，仍可彼此配对。non-allelic homologous recombination（NAHR）在同向重复间可造成一条产物缺失、另一条产物重复，在反向重复间可造成倒位，不同染色体上的重复还可促成易位。由此可见，同源重组既能高保真恢复局部序列，也能在模板选择错误时重排基因组；相关结构变异见[突变与染色体变异](../genetics/chromosome_variation.md)。

## 位点特异性重组以短识别位点规定接头 { #site-specific-recombination }

保守型位点特异性重组由重组酶把一对 cognate sites 装配为 synaptic complex，通过可逆转酯反应同时完成切割与重连。反应能量保存在共价蛋白质—DNA 中间体中，通常不需要 DNA 聚合酶填补，也不产生靶位点重复。两个位点在同一 DNA 上同向排列时，重组常把中间片段切出为环；反向排列时产生倒位；位于不同 DNA 上时可完成整合、解整合或染色体交换。实际方向还由位点不对称性、DNA 拓扑和辅助蛋白共同限定。[^site-specific-recombination]

tyrosine recombinase 以活性位点 Tyr 形成 3′-phosphotyrosine 键并释放 5′-OH。四聚体先交换一对链，经过 Holliday junction 中间体后再交换另一对链；Cre–loxP、Flp–FRT、λ integrase 和细菌染色体二聚体拆分系统 Xer 都属于此类。loxP 是 34 bp 位点，由两个 13 bp Cre 结合臂夹住不对称的 8 bp spacer；spacer 决定位点方向和链交换相容性，并非任意八个碱基都可等效替换。

serine recombinase 则以 Ser 形成 5′-phosphoserine 键，协同切断四条链后通过亚基相对旋转交换末端，再重新连接。Hin 类 invertase 可翻转启动子区域并改变细菌表面结构表达，Tn3 resolvase 负责拆分复制型转座产生的 cointegrate，大型 serine integrase 如 φC31、Bxb1 则能在不同 att 位点间高效整合。tyrosine 与 serine 两大家族的催化折叠和中间体不同，不能因都使用短识别位点而视为同一种酶。

天然系统常以辅助蛋白建立方向性。λ integrase 在 attP 与 attB 间整合后产生 attL 和 attR；integration host factor、DNA 弯曲和臂位点帮助组装整合复合物，Xis 等则使解整合采用另一套核蛋白结构。Cre–loxP 在简化实验系统中所需辅助因子较少，因此成为条件性删除、倒位和谱系追踪工具；条件构建设计见[分子克隆与构建设计](../exptech/biochem_molecular/molecular_cloning.md#expression-conditional-genetics)，脱靶、嵌合与等位基因验证见[基因组编辑与验证](../exptech/biochem_molecular/genome_editing.md#editing-outcomes-validation)。

## DNA 转座把元件末端接入新的靶 DNA { #dna-transposition }

DNA transposable element 通过 DNA 中间体移动。自主元件编码自身所需的 transposase，并保留被酶识别的末端序列；非自主元件丢失或破坏了编码区，但仍可借同一家族自主元件提供的酶而移动。转座酶对元件末端高度选择，对靶位点则通常只有短序列、DNA 形状或染色质偏好。所谓“无需同源性”描述它不依赖长同源模板，并不表示所有基因组位置具有相同插入概率。[^dna-transposition]

最常见的 DDE／DDE-D transposase 以酸性残基配位金属离子，先把两个元件末端组装为 transpososome，再切出转座子并把暴露的 3′-OH 接到靶 DNA 的错列切口。宿主填补两侧单链缺口后形成短 target-site duplication（TSD）；其长度由转座酶造成的错列间距决定，可在不同家族间变化，不能固定概括为 5 bp。供体位点的双链断裂由宿主修复，常留下小型 footprint，也可能利用姐妹模板恢复原序列。

复制型转座不把两条供体链完整切出，而把供体和靶分子连接成可复制的中间体。Tn3 家族先形成含两个转座子拷贝的 cointegrate，再由专一 resolvase 在 res 位点拆分；噬菌体 Mu 也以复制型转座扩增其 DNA。另一类 IS91／IS605 和 Helitron 相关元件使用 HUH／Y1 transposase 处理单链 DNA，采用 peel-and-paste 或滚环相关路线，末端结构和 TSD 规律不同于典型 DDE 元件。serine 或 tyrosine transposase、整合接合元件的切出—成环—整合又把转座与位点特异性重组连接起来。[^dna-transposition-mechanisms]

细菌 insertion sequence（IS）通常只含转座所需基因；composite transposon 由两个 IS 夹带抗性或代谢基因，unit transposon 则在一套自身末端内编码 transposase、resolvase 和 cargo。质粒、噬菌体、integrative and conjugative element（ICE）与转座子之间可交换这些模块，使抗性、毒力和代谢性状沿水平基因转移网络传播。插入编码区会中断基因，插入操纵子前部还可能因终止或转录干扰造成下游基因的 polar effect。

### 真核 DNA 转座元件揭示自主与非自主协作 { #eukaryotic-dna-transposons }

McClintock 在玉米中依据染色体断裂和籽粒斑驳的遗传模式提出 controlling elements。Ac 是可自主移动的 hAT 家族元件，许多 Ds 元件由 Ac 缺失衍生，保留末端却依赖 Ac transposase；元件在不同发育时刻插入或切出色素基因，可产生不同大小的有色克隆。这些现象把不稳定表型定位到可移动的遗传单元，而不是简单把“籽粒颜色基因”本身称为跳跃基因。[^mcclintock]

果蝇 P element 是另一种 DDE DNA transposon。携带活性 P 元件的雄蝇与缺少相应母源抑制信息的雌蝇杂交时，子代生殖系可出现高转座、染色体损伤和不育；反交中卵细胞携带的 P-element piRNA 有助于迅速建立沉默。MITE 等小型非自主元件也可借相容转座酶扩增。自主／非自主描述是否能提供移动机器，不等同于元件此刻一定活跃或完全无功能。

## 逆转座经 RNA 中间体增加基因组拷贝 { #retrotransposition }

retrotransposon 的原位 DNA 先被转录，RNA 再逆转录为可插入的新 DNA，因此典型结果是供体拷贝保留而新位点增加一个拷贝。LTR retrotransposon 两端具有 long terminal repeats，常编码 Gag 和 Pol；其 RNA 与蛋白可在 virus-like particle 中完成逆转录，生成两端带 LTR 的线性 DNA，再由 integrase 插入染色体。酵母 Ty、果蝇 copia 与植物大量 LTR 元件共享这一逻辑，但靶位点选择受各自 integrase、染色质和宿主蛋白影响，不能统一描述为只进入“基因贫乏区”。[^retrotransposons]

non-LTR retrotransposon 不先生成游离的完整双链 cDNA。以哺乳动物 LINE-1 为例，ORF1p 结合 RNA，ORF2p 同时具有 endonuclease 和 reverse transcriptase 活性；内切酶在靶 DNA 上产生 3′-OH，直接引发 target-primed reverse transcription（TPRT）。新插入常带 3′ poly(A)、可变长度 TSD 和不完整的 5′ 端。LINE 蛋白偏向动员产生它们的同一条 RNA，也能以较低效率动员 Alu 等 SINE、SVA RNA 及细胞 mRNA，后者可形成加工型假基因；转录越过 LINE-1 终止位点还可能把邻近序列一并 3′ transduction 到新位置。

SINE 通常没有蛋白质编码能力，SVA 是由 SINE-R、VNTR 和 Alu-derived 区段组成的灵长类复合非自主元件；二者都不能与自主 LINE 并列为自足的逆转座机器。细菌和细胞器中的部分 group II intron 则先把内含子 RNA reverse-splice 到靶 DNA，再由 intron-encoded protein 完成 target-primed reverse transcription，形成与 LINE 不同的 retrohoming 路线。逆转录反应本身及端粒酶、retron 的边界见[DNA复制与逆转录](dna_replication.md#reverse-transcriptase-diversity)。

### 逆转录病毒整合与 LTR 逆转座共享化学而非完整生活史 { #retroviral-integration }

逆转录病毒先把基因组 RNA 复制成两端带 LTR 的线性双链 DNA。integrase 在 preintegration complex 中结合两个病毒 DNA 末端，完成 3′ processing 后把两端协同接入宿主 DNA 的错列位点；宿主修复填补缺口，最终在 provirus 两侧留下长度依病毒类群而异的 TSD。该反应与 DDE 转座酶的 strand transfer 化学同源，却不是 Cre 类保守型位点特异性重组。[^retroviral-integration]

宿主靶位点也并非简单“随机”。integrase 对局部 DNA 形状和短序列有弱偏好，并可由 LEDGF/p75、BET 蛋白等宿主染色质因子引导到不同基因组环境；HIV-1、MLV 和其他逆转录病毒因而呈现不同的整合分布。病毒入胞、表达、装配和传播属于[病毒与亚病毒因子](../micro/viruses.md)，这里仅保留 DNA 接头形成及其与转座化学的关系。

## 移动元件受自身限速和宿主防御共同约束 { #transposon-control }

元件自身可通过弱启动子、反义 RNA、转录终止、选择性剪接、短抑制蛋白和 transposase overproduction inhibition 限制酶量；转座酶的不稳定性及其对成对末端的协同装配又使转座频率随拷贝数和表达量非线性变化。细菌的核酸酶、限制修饰、CRISPR–Cas 及移动元件之间的排斥系统可阻止一部分外来元件建立，但其靶谱依宿主和元件而异。

真核宿主常把 DNA methylation、H3K9 methylation 和异染色质蛋白集中到转座元件。哺乳动物 KRAB zinc-finger proteins 可识别特定元件家族并经 TRIM28／KAP1、SETDB1 等建立抑制染色质；植物 24-nt siRNA 经 Pol IV／RDR2、DCL3、AGO 与 Pol V scaffold 接入 RNA-directed DNA methylation（RdDM）。染色质沉默既限制元件转录，也可能扩展到邻近宿主基因，因此需要边界和去甲基化机制调节。[^chromatin-transposon-control]

动物 PIWI-interacting RNA（piRNA）通常长约 21–35 nt，3′ 末端核糖常有 2′-O-methylation。piRNA cluster 产生的 primary piRNA 可引导 PIWI 蛋白切割互补转座子 RNA，某些系统再通过 ping-pong amplification 扩增 secondary piRNA；核内 PIWI 还可促进转录沉默。不同动物、性别和发育阶段使用的 PIWI 蛋白、长度与扩增路线并不相同，piRNA 也有转座抑制以外的靶标。P-element 杂交不育中的母源效应正体现了小 RNA 信息可以先于子代自身的稳定沉默装置到达。[^pirna-control]

## 转座既制造突变，也提供可被宿主利用的序列 { #transposon-consequences }

新插入可以破坏编码区、剪接位点或调控元件，也可带来新的启动子、增强子、绝缘子、polyadenylation signal 和转录因子结合位点。多个同家族拷贝还为 NAHR 提供散布同源底物，促成缺失、重复、倒位和易位。移动过程中形成的断裂、3′ transduction、加工型假基因和携带 cargo 的水平转移进一步扩大变异范围。具体表型取决于插入位置、方向、细胞谱系和后续选择，而不由“属于转座子”这一标签单独决定。

绝大多数古老拷贝已经失去移动能力，却仍可能作为中性序列、调控元件或重组底物保留。宿主还可 domesticate 元件的蛋白或顺式序列，把曾经服务于移动的 DNA-binding、nuclease、fusogenic 或 regulatory 功能接入新网络。相反，检测到 TE RNA 或开放染色质只说明某一调控层被解除，不能证明已经发生新的基因组插入；确认活动通常需要定位新接头、验证 TSD／末端结构并在亲子、克隆或转座报告系统中显示新增拷贝。[^transposon-evolution]

末端反向重复、LTR、poly(A) 尾、TSD、供体 footprint 和插入多态性共同提供机制线索，但没有单一标志适用于所有元件。短读长数据还会因重复比对遗漏新插入，长读长、junction PCR、家系分离和功能实验可提供互补证据。转座载体、重组酶工具和插入位点检测的实验条件应与天然机制分开评价，避免把工程系统的高表达行为直接外推为内源转座频率。

## 参考资料与延伸阅读 { #references }

- Alberts B, Johnson A, Lewis J, et al. [General Recombination](https://www.ncbi.nlm.nih.gov/books/NBK26898/). In: *Molecular Biology of the Cell*. 4th ed. Garland Science; 2002.
- Kowalczykowski SC. [An Overview of the Molecular Mechanisms of Recombinational DNA Repair](https://pmc.ncbi.nlm.nih.gov/articles/PMC4632670/). *Cold Spring Harbor Perspectives in Biology*. 2015;7:a016410.
- Dillingham MS, Kowalczykowski SC. [RecBCD Enzyme and the Repair of Double-Stranded DNA Breaks](https://pmc.ncbi.nlm.nih.gov/articles/PMC2593567/). *Microbiology and Molecular Biology Reviews*. 2008;72:642–671.
- Gray S, Cohen PE. [Control of Meiotic Crossovers: From Double-Strand Break Formation to Designation](https://pmc.ncbi.nlm.nih.gov/articles/PMC5319444/). *Annual Review of Genetics*. 2016;50:175–210.
- Grindley NDF, Whiteson KL, Rice PA. [Mechanisms of Site-Specific Recombination](https://www.annualreviews.org/content/journals/10.1146/annurev.biochem.73.011303.073908). *Annual Review of Biochemistry*. 2006;75:567–605.
- Hickman AB, Dyda F. [Mechanisms of DNA Transposition](https://pmc.ncbi.nlm.nih.gov/articles/PMC7422641/). *Microbiology Spectrum*. 2015;3:MDNA3-0034-2014.
- Wells JN, Feschotte C. [A Field Guide to Eukaryotic Transposable Elements](https://www.annualreviews.org/content/journals/10.1146/annurev-genet-040620-022145). *Annual Review of Genetics*. 2020;54:539–561.
- Beauregard A, Curcio MJ, Belfort M. [The Take and Give Between Retrotransposable Elements and Their Hosts](https://pmc.ncbi.nlm.nih.gov/articles/PMC2665727/). *Annual Review of Genetics*. 2008;42:587–617.
- Lesbats P, Engelman AN, Cherepanov P. [Retroviral DNA Integration](https://pmc.ncbi.nlm.nih.gov/articles/PMC5084067/). *Chemical Reviews*. 2016;116:12730–12757.
- Ozata DM, Gainetdinov I, Zoch A, O'Carroll D, Zamore PD. [PIWI-Interacting RNAs: Small RNAs with Big Functions](https://pubmed.ncbi.nlm.nih.gov/30446728/). *Nature Reviews Genetics*. 2019;20:89–108.

[^recombination-overview]: 同源重组的末端加工、RecA／RAD51 同源搜索、链交换、分支迁移与中间体拆解见 Kowalczykowski 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4632670/)及 Alberts 等的[教材章节](https://www.ncbi.nlm.nih.gov/books/NBK26898/)。
[^hr-outcomes]: SDSA、double Holliday junction、核酸酶 resolution、解旋酶—拓扑异构酶 dissolution 与 BIR 的并行结局见 Kowalczykowski 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4632670/)；修复通路选择边界见 [DNA损伤、修复与突变](dna_repair.md#break-crosslink-repair)。
[^bacterial-recombination]: 大肠杆菌 RecBCD–Chi、RecFOR、RecA、RuvABC 及其他细菌 AddAB／RecU 差异见 Dillingham 与 Kowalczykowski 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC2593567/)及 Rocha 等的[比较研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC1193525/)。
[^archaea-eukaryote-hr]: 古菌 Mre11–Rad50–HerA–NurA–RadA 与真核切除／RAD51 装载的共同功能和谱系差异见 Williams 等的[结构综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4176011/)及 Kowalczykowski 的[机制综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4632670/)。
[^meiotic-crossovers]: Spo11 起始、RAD51／DMC1、crossover／noncrossover 分流、交换保证与干扰见 Gray 与 Cohen 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5319444/)；染色体层面接口见[细胞周期与细胞分裂](../cell/cell_cycle.md#meiosis)。
[^site-specific-recombination]: tyrosine／serine recombinase 的共价中间体、Holliday junction 或亚基旋转机制及位点拓扑结果见 Grindley 等的[综述](https://www.annualreviews.org/content/journals/10.1146/annurev.biochem.73.011303.073908)和 Yang 的[结构比较](https://pmc.ncbi.nlm.nih.gov/articles/PMC6290911/)。
[^dna-transposition]: 自主／非自主元件、末端识别、靶位点偏好、错列 strand transfer 与 TSD 形成见 Hickman 与 Dyda 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7422641/)及 Wells 与 Feschotte 的[真核元件综述](https://www.annualreviews.org/content/journals/10.1146/annurev-genet-040620-022145)。
[^dna-transposition-mechanisms]: DDE、HUH、serine 和 tyrosine transposase，以及剪切—粘贴、复制型和单链转座路线见 Hickman 与 Dyda 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7422641/)。
[^mcclintock]: 玉米 controlling elements、Ac／Ds 与基因表达及染色体不稳定性的实验解释见 McClintock 的[诺贝尔演讲](https://www.nobelprize.org/prizes/medicine/1983/mcclintock/lecture/)及诺贝尔委员会的[科学说明](https://www.nobelprize.org/prizes/medicine/1983/press-release/)。
[^retrotransposons]: LTR、LINE、SINE、SVA、group II intron 与 TPRT／extrachromosomal priming 的差异见 Beauregard 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC2665727/)及 Wells 与 Feschotte 的[分类综述](https://www.annualreviews.org/content/journals/10.1146/annurev-genet-040620-022145)。
[^retroviral-integration]: integrase 3′ processing、协同 strand transfer、宿主缺口修复、TSD 与染色质靶向见 Lesbats 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5084067/)；不同病毒整合位点分布的原始比较见 Mitchell 等的[研究](https://journals.plos.org/plosbiology/article?id=10.1371%2Fjournal.pbio.0020234)。
[^chromatin-transposon-control]: 哺乳动物 KRAB-ZFP–TRIM28–SETDB1 抑制见 Yang 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5659910/)；植物 Pol IV／Pol V、24-nt siRNA 与 RdDM 见 Sigman 与 Slotkin 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4790875/)。
[^pirna-control]: piRNA 长度、3′ 末端修饰、PIWI 介导的转录与转录后沉默及 ping-pong 路线见 Ozata 等的[综述](https://pubmed.ncbi.nlm.nih.gov/30446728/)；P-element 杂交不育中的母源 piRNA 证据见 Brennecke 等研究的[评述](https://pmc.ncbi.nlm.nih.gov/articles/PMC2688286/)。
[^transposon-evolution]: 转座元件对插入、重排、调控网络和宿主 domestication 的多层影响及其家族差异见 Wells 与 Feschotte 的[综述](https://www.annualreviews.org/content/journals/10.1146/annurev-genet-040620-022145/)和 Goodier 的[宿主限制综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4982230/)。
