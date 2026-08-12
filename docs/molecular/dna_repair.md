# DNA损伤、修复与突变

DNA 的共价结构在水、氧和代谢物共存的细胞环境中持续发生变化，复制与转录机器也会在复杂模板上停顿。细胞因此维持多套彼此衔接的基因组维护系统：有些直接逆转特定化学修饰，有些切除受损碱基或一段寡核苷酸，有些重新连接断裂或借用同源模板恢复丢失的信息，还有一些暂时容忍未移除的损伤，使复制得以继续。

DNA 损伤和突变处于不同层次。损伤是碱基或磷酸二酯骨架的化学、物理异常；突变是 DNA 序列或结构已经改变，并能在后续复制或细胞谱系中保持的状态。同一种损伤可被无痕修复、导致复制停顿，也可因误配、损伤跨越或不精确的末端处理固定成不同突变。观察到的突变谱因而同时记录损伤形成、修复竞争、复制方式和细胞选择。

## DNA 损伤来自自发化学反应、代谢和环境暴露 { #dna-damage-sources }

DNA 在生理条件下会自发水解。嘌呤碱基脱落留下无碱基的 AP 位点；胞嘧啶脱氨形成尿嘧啶，5-甲基胞嘧啶脱氨则形成胸腺嘧啶。后者产生正常碱基之间的 T:G 错配，识别线索少于 U:G 错配，是 CpG 位点易发生 C→T 转换的重要化学基础，但仍可由特定糖基化酶修复。DNA 复制时的碱基误掺、短重复区滑移和核糖核苷酸误掺则产生错配、插入／缺失环或不稳定骨架。[^endogenous-damage]

呼吸、炎症和其他氧化还原反应产生的活性氧可氧化碱基和脱氧核糖。8-oxo-7,8-dihydroguanine（8-oxoG）既可与 C 配对，也可采用有利于 A 配对的构象；未修复的 8-oxoG:A 中间体可在下一轮复制固定为 G:C→T:A 颠换。S-腺苷甲硫氨酸等细胞内甲基供体和活性醛也会形成烷基化碱基、DNA 链间交联或 DNA—蛋白质交联。拓扑异构酶等酶的共价反应中间体若被截获，也会成为阻断复制的 DNA—蛋白质交联。

紫外线主要在相邻嘧啶间形成环丁烷嘧啶二聚体（cyclobutane pyrimidine dimer，CPD）和 6–4 光产物（6–4 photoproduct）；电离辐射既能直接电离 DNA，也能经水辐解产生自由基，造成碱基损伤、单链断裂和空间聚集的复杂损伤。多环芳烃代谢物、黄曲霉毒素活化产物等可形成体积较大的碱基加合物；双功能烷化剂、顺铂及内源醛类可产生链内或链间交联。损伤名称描述产物结构，最终突变还取决于修复和复制过程。[^damage-chemistry]

| 损伤或异常 | 对 DNA 的直接改变 | 主要处置路线 | 可能固定的后果 |
| --- | --- | --- | --- |
| 脱氨、氧化、部分烷基化碱基 | 改变氢键供受体或碱基稳定性 | 直接逆转或 BER | 碱基置换、复制停顿 |
| CPD、6–4 光产物和体积较大加合物 | 扭曲双链或阻挡聚合酶 | 光复活、NER、损伤跨越 | 相邻碱基替换、置换或缺失 |
| 复制错配与短插入／缺失环 | 新生链与模板信息不一致 | 聚合酶校对、MMR | 点突变、微卫星不稳定 |
| 单链／双链断裂 | 骨架不连续，末端化学状态可异常 | SSB 修复、NHEJ、HR 等 | 缺失、插入、易位或拷贝数变化 |
| 链间交联与 DNA—蛋白质交联 | 两条链不能分离，或 DNA 被蛋白阻塞 | FA／交联修复、蛋白水解、NER、TLS、HR | 复制叉崩溃、染色体重排 |

## 损伤响应把异常 DNA 结构转换为细胞状态变化 { #dna-damage-response }

细胞通常不直接“测量损伤剂”，而是识别断裂末端、RPA 或 SSB 包被的单链 DNA、停滞的聚合酶、异常接头和染色质变化。哺乳动物细胞中，MRN 复合物参与双链断裂处 ATM 的招募与激活；复制叉停顿、切除修复或末端切除产生的 RPA–ssDNA 及其接头则通过 ATRIP、9–1–1 等平台激活 ATR。ATM–CHK2 与 ATR–CHK1 的底物和情境有重叠，它们共同改变起点使用、叉稳定性、CDC25／Wee1、p53–p21 及修复蛋白活性。周期延迟、复制重启、衰老或受调控死亡是信号持续时间和细胞环境共同决定的输出；检查点控制详见[细胞周期与细胞分裂](../cell/cell_cycle.md#dna-damage-replication-checkpoints)。[^eukaryotic-ddr]

大肠杆菌的 SOS 反应展示了另一种组织方式。损伤加工或复制停顿产生单链 DNA，RecA 在其上形成核蛋白丝并促进 LexA 阻遏蛋白自切，依次解除对切除修复、重组、细胞分裂抑制和损伤跨越基因的转录抑制。后期表达的 DNA polymerase V 可提高存活，也增加某些突变。RecA–LexA 回路在细菌中分布广泛但并不普遍，各谱系的 SOS 靶基因和 SOS 之外的损伤响应差异很大；真核 ATM／ATR 网络也不称为 SOS 反应。[^bacterial-sos]

## 直接逆转的特异性底物 { #direct-reversal }

光裂解酶结合 CPD 或 6–4 光产物，利用还原态 FAD 和蓝光／近紫外光提供的能量裂解异常共价键，恢复原有嘧啶。不同光裂解酶对两类光产物有底物专一性；它们存在于许多细菌、古菌、植物和动物谱系，却在人类及其他胎盘哺乳动物中缺失。哺乳动物 cryptochrome 与光裂解酶同源并参与昼夜节律，但不因此具有同等的 DNA 光复活功能。[^direct-repair]

O$^6$-烷基鸟嘌呤-DNA 烷基转移酶（O$^6$-alkylguanine-DNA alkyltransferase）把 O$^6$-烷基鸟嘌呤上的烷基转移到自身活性位点 Cys，一个酶分子完成一次转移后失活；人类同源物称 MGMT。AlkB 家族 Fe(II)／2-oxoglutarate 依赖双加氧酶则以氧化脱烷基方式修复若干 N-烷基化碱基。直接逆转保留原核苷酸骨架，并以较窄的底物集合与通用切除修复形成互补。

## 切除修复以互补链重新提供序列信息 { #excision-repair }

### 碱基切除修复处理非体积型碱基异常 { #base-excision-repair }

碱基切除修复（BER）由具有底物选择性的 DNA glycosylase 起始。糖基化酶把受损碱基翻出双螺旋并水解 N-glycosidic bond，留下 AP 位点；单功能糖基化酶只完成去碱基，双功能糖基化酶还具有 AP lyase 活性。自发脱碱基产生的 AP 位点可直接进入后续步骤。AP endonuclease、末端清理酶、DNA 聚合酶和连接酶随后把异常糖磷酸端转为可延伸接头，补入正确核苷酸并封口。[^base-excision-repair]

哺乳动物核 BER 的 short-patch 路线常由 polymerase β 填补一个核苷酸并移除 5′-deoxyribose phosphate；long-patch 路线由 PCNA 相关聚合酶置换合成数个核苷酸，再由 FEN1 切除 flap。细菌常以 DNA polymerase I 和连接酶完成填补，线粒体又有自身的酶组合。8-oxoG 防护说明一个损伤可由多层系统协作：OGG1 类糖基化酶去除 8-oxoG:C 中的氧化碱基，MUTYH 类糖基化酶从 8-oxoG:A 错配中去除 A，核苷酸池清理酶则减少氧化 dNTP 被重新掺入。

### 核苷酸切除修复切走含损伤的寡核苷酸 { #nucleotide-excision-repair }

核苷酸切除修复（NER）主要识别损伤造成的局部配对不稳、弯曲和聚合酶阻塞，而不是为每种加合物配置一种识别酶。细菌 UvrA–UvrB 检查双链并验证损伤，UvrC 在两侧切开，UvrD 等移除含损伤寡核苷酸，再由聚合酶和连接酶补缺。真核 global-genome NER 常由 XPC–RAD23B 与 UV-DDB 等发现异常，transcription-coupled NER 则从 RNA polymerase II 在模板链停滞开始，并需要 CSA、CSB 等因子；两路随后汇入 TFIIH 解链、XPA／RPA 验证以及 XPF–ERCC1、XPG 双切口的共同核心。[^nucleotide-excision-repair]

转录偶联修复优先恢复受阻基因模板链的转录能力，但“更快”或“效率更高”取决于损伤、基因表达和测量窗口。着色性干皮病的多种互补群揭示了 global-genome／共同 NER 因子，Cockayne syndrome 则突出转录偶联响应和转录恢复；两类疾病的发育、神经与肿瘤表型不能由一个统一的“UV 敏感度”排序概括。

### 错配修复识别复制产物中的信息冲突 { #mismatch-repair }

错配修复（mismatch repair，MMR）纠正逃过聚合酶校对的碱基错配和小型插入—缺失环（insertion–deletion loop），也抑制序列差异过大的同源重组。它同样经历识别、切除、重合成和连接，但识别对象和链选择机制独立于 NER。大肠杆菌 MutS 识别错配、MutL 组织反应，MutH 切开暂未甲基化的新生链 GATC 位点；Dam–MutH 途径只见于部分 γ-proteobacteria，其他细菌还可使用滑动钳、既有缺口和 MutL 内切活性建立链方向。[^mismatch-repair]

真核 MutSα（MSH2–MSH6）偏向识别碱基错配与小环，MutSβ（MSH2–MSH3）处理较大的插入／缺失环；MutLα（MLH1–PMS2）、PCNA、RFC、EXO1、polymerase δ 和 ligase I 将识别连接到新生链切除与重合成。部分古菌和 Actinobacteria 缺少经典 MutS／MutL，使用与复制滑动钳相连的 EndoMS／NucS 非经典系统，且其底物谱与插入／缺失纠正能力不同。MMR 缺陷会使复制错误和微卫星长度变化积累；Lynch syndrome 的肿瘤易感性和 microsatellite instability 正是这条通路失效的遗传与基因组读出。[^nucs-mismatch-repair]

## 断裂与交联修复需要在保留信息和恢复连续性之间取舍 { #break-crosslink-repair }

单链断裂可直接来自糖磷酸骨架损伤，也可由 BER、拓扑异构酶反应或核糖核苷酸切除产生。断口若已具有 3′-OH 和 5′-phosphate，连接酶即可封闭；实际断口常带 3′-phosphate、5′-OH、蛋白加合物或缺口，需要 PNKP、APTX、TDP1／TDP2、核酸酶和聚合酶先完成末端清理。哺乳动物 PARP1、XRCC1 等把感知、支架与修复酶招募耦联起来。相对的两处单链断裂若靠得很近，或复制叉遇到未修复单链断口，可转为双链断裂。

双链断裂丢失了连续互补链作为局部模板。在哺乳动物细胞中，classical non-homologous end joining（c-NHEJ）由 Ku 保护末端，并通过 DNA-PKcs、末端处理酶和 XRCC4–XLF–ligase IV 复合体重新连接；末端本来兼容时可以无序列改变，末端受损或不兼容时则常产生小型插入／缺失。homologous recombination（HR）先由 MRN–CtIP 等启动 5′ 端切除，再由 BRCA1–PALB2–BRCA2 促进 RAD51 在 3′ 单链 DNA 上组丝并寻找同源模板，因而在复制后的 S／G$_2$ 期可利用姐妹染色单体恢复信息。链侵入、DNA 合成和重组中间体处理见[DNA重组与转座](dna_recombination.md)。[^double-strand-break-choice]

末端连接与 HR 的准确性取决于断口结构、细胞周期、染色质、转录状态、末端切除和可用同源模板，而非固定对应“易错／无错”二选一。single-strand annealing 会在重复序列间退火并删除中间 DNA；polymerase θ-mediated end joining（TMEJ）利用短微同源序列连接经切除的末端，也常留下特征性插入或缺失。细菌通常以 RecBCD／AddAB–RecA 类同源重组处理断裂，一些物种还具有 Ku–LigD 型 NHEJ；古菌和真核的具体因子组合也随谱系变化。

DNA interstrand crosslink 把两条模板共价锁在一起，单一切除通路无法独立恢复双链。复制耦联的 Fanconi anemia（FA）通路以 FANCD2–FANCI 单泛素化为核心，协调结构特异性核酸酶解除交联、TLS 越过残余加合物以及 HR 恢复断裂复制中间体；某些交联还可由 NEIL3 等采取不同的解联化学。DNA—蛋白质交联则可先经 SPRTN 或蛋白酶体等降解蛋白部分，再由磷酸二酯酶、NER 或复制耦联通路处理残基。Fanconi anemia 细胞对交联剂敏感，反映多通路协调缺陷，不能归结为一个孤立“重组跨越酶”的缺失。[^crosslink-repair]

## 复制压力可通过重启、模板转换或损伤跨越化解 { #replication-stress-tolerance }

复制型聚合酶停在损伤前并不意味着整套复制体立即断裂。解旋酶—聚合酶解偶联可暴露 RPA／SSB 包被的单链 DNA，叉也可减速、反转，或在下游重新引发而留下待补缺口。邻近复制叉会合、同源重组依赖重启、以姐妹新生链为模板的 template switching，以及核酸酶受控切开后的重建，都能在不同情境下恢复复制。反转叉需要 BRCA1／BRCA2、RAD51 等保护其新生链，失控降解会把可逆的停顿转成染色体断裂。[^fork-recovery]

损伤跨越合成（translesion synthesis，TLS）让活性位点较宽、通常缺少 3′→5′ 校对的专门聚合酶暂时接替复制聚合酶。其准确性取决于损伤与聚合酶的具体配对。人 Pol η 能较准确地跨越 UV 形成的 TT-CPD，POLH 缺陷导致 xeroderma pigmentosum variant；Pol κ 对部分 N$^2$-guanine 加合物较合适，REV1 兼具支架与 dCMP transferase 特征，Pol ζ 常负责从畸变引物末端继续延伸。PCNA 单泛素化有助于真核聚合酶切换，细菌 RecA–LexA 网络则调节 Pol IV／Pol V 等。TLS 可减少叉崩溃和大型缺失，却也可能在损伤位点或邻近序列留下碱基置换。[^translesion-synthesis]

## 突变是损伤、复制与修复共同留下的稳定结果 { #mutation-formation }

单碱基置换可分为 purine↔purine 或 pyrimidine↔pyrimidine 的 transition，以及 purine↔pyrimidine 的 transversion；相邻碱基可在一次事件中共同改变。小型插入和缺失常来自复制滑移、末端连接或移动元件插入，编码区中非 3 的整数倍 indel 会改变阅读框。更大的缺失、倒位、重复、易位和拷贝数变化通常涉及断裂修复与复制重启，其染色体与遗传后果由[突变与染色体变异](../genetics/chromosome_variation.md)展开。

编码区置换可以是 synonymous、missense、nonsense 或 stop-loss，但名称只描述对某一转录本阅读框的直接结果。同义变化仍可能改变剪接、mRNA 结构、翻译速度或调控元件；错义变化的效应取决于残基位置、蛋白结构、剂量和细胞环境。启动子、增强子、剪接信号、非编码 RNA 或染色质元件中的突变也可改变表达，其他非编码位点则可能没有可测表型。显性、隐性、haploinsufficiency、dominant-negative 和 gain-of-function 属于等位基因在具体生物系统中的功能关系，不能仅由“蛋白是否失活”推定。

短串联重复在复制、修复和生殖系传递中可扩增或收缩，达到特定基因和组织相关的范围后引发 repeat-expansion disease；不同位点可通过蛋白质 polyglutamine、RNA 毒性、转录沉默或 RAN translation 等不同机制致病。“动态突变”描述跨代与体细胞不稳定性，不表示重复拷贝数只会单向增加。转座造成的插入突变及其调控见[DNA重组与转座](dna_recombination.md)。

正向突变使参考表型转为新表型；true reversion 在原位恢复原序列，second-site suppressor 则在基因内其他位置或另一基因中补偿表型。第二处移码可恢复下游阅读框，tRNA anticodon 改变可抑制某些无义或错义密码子，旁路通路也可补偿代谢缺陷。表型恢复因此不证明原突变已消失，大型缺失也可能通过基因剂量或通路层面的抑制获得部分补偿。

### 突变特征的概率性过程读出 { #mutational-signatures }

把碱基置换连同 5′／3′ 序列环境、相邻双碱基变化、indel、结构变异及转录链偏向共同统计，可得到 mutational signature。UV、烟草相关加合物、APOBEC 脱氨、MMR 缺陷、HR 缺陷和 polymerase proofreading 缺陷等都可留下可重复的模式；但一个样本通常叠加多种过程，同一损伤在不同修复背景下也会形成不同谱。技术误差、暴露剂量、发生时间和克隆选择还会改变最终目录，所以 signature 与病因之间不是无条件的一一对应。[^mutational-signatures]

## 遗传缺陷与诱变试验揭示通路边界 { #repair-evidence }

人类遗传病把特定维护系统与基因组后果联系起来：NER 缺陷可导致着色性干皮病（xeroderma pigmentosum），MMR 缺陷导致微卫星不稳定（microsatellite instability）与 Lynch syndrome 易感性，FA／BRCA 网络缺陷影响交联修复、HR 和复制叉保护。不同患者、基因与等位变体的表型范围很大；细胞对某种损伤剂敏感能提示通路参与，但疾病谱仍取决于具体基因、变体和组织环境。

Ames／bacterial reverse mutation test 使用需要特定氨基酸的 *Salmonella enterica* serovar Typhimurium 或 *Escherichia coli* 试验株，以回复菌落读出碱基置换或小型移码；加入哺乳动物肝 S9 等外源代谢活化系统，可检测需要代谢转化的前体化合物。菌株通透性、修复缺陷、剂量、细胞毒性和自发回复背景都会影响结果。阳性结果说明在该体外系统中具有致突变活性，不能直接给出哺乳动物体内剂量、致癌强度或组织风险；标准操作与判读属于[微生物培养、鉴定与功能检测](../exptech/microbiology/culture_identification.md)。[^ames-test]

## 参考资料与延伸阅读 { #references }

- Cooper GM. [DNA Repair](https://www.ncbi.nlm.nih.gov/books/NBK9900/). In: *The Cell: A Molecular Approach*. 2nd ed. Sinauer Associates; 2000.
- Tubbs A, Nussenzweig A. [Endogenous DNA Damage as a Source of Genomic Instability in Cancer](https://pmc.ncbi.nlm.nih.gov/articles/PMC6591730/). *Cell*. 2017;168:644–656.
- Yi C, He C. [DNA Repair by Reversal of DNA Damage](https://pmc.ncbi.nlm.nih.gov/articles/PMC3579392/). *Cold Spring Harbor Perspectives in Biology*. 2013;5:a012575.
- Bauer NC, Corbett AH, Doetsch PW. [The Current State of Eukaryotic DNA Base Damage and Repair](https://pmc.ncbi.nlm.nih.gov/articles/PMC4666366/). *Nucleic Acids Research*. 2015;43:10083–10101.
- Marteijn JA, Lans H, Vermeulen W, Hoeijmakers JHJ. [Understanding Nucleotide Excision Repair and Its Roles in Cancer and Ageing](https://pmc.ncbi.nlm.nih.gov/articles/PMC3783044/). *Nature Reviews Molecular Cell Biology*. 2014;15:465–481.
- Putnam CD. [Strand Discrimination in DNA Mismatch Repair](https://pmc.ncbi.nlm.nih.gov/articles/PMC8785607/). *DNA Repair*. 2021;105:103161.
- Scully R, Panday A, Elango R, Willis NA. [DNA Double-Strand Break Repair-Pathway Choice in Somatic Mammalian Cells](https://pmc.ncbi.nlm.nih.gov/articles/PMC7315405/). *Nature Reviews Molecular Cell Biology*. 2019;20:698–714.
- Berti M, Cortez D, Lopes M. [The Plasticity of DNA Replication Forks in Response to Clinically Relevant Genotoxic Stress](https://pubmed.ncbi.nlm.nih.gov/32612242/). *Nature Reviews Molecular Cell Biology*. 2020;21:633–651.
- Ashour ME, Mosammaparast N. [Mechanisms of Damage Tolerance and Repair During DNA Replication](https://academic.oup.com/nar/article/49/6/3033/6163082). *Nucleic Acids Research*. 2021;49:3033–3047.
- Alexandrov LB, Kim J, Haradhvala NJ, et al. [The Repertoire of Mutational Signatures in Human Cancer](https://www.nature.com/articles/s41586-020-1943-3). *Nature*. 2020;578:94–101.
- Volkova NV, Meier B, González-Huici V, et al. [Mutational Signatures Are Jointly Shaped by DNA Damage and Repair](https://www.nature.com/articles/s41467-020-15912-7). *Nature Communications*. 2020;11:2169.

[^endogenous-damage]: 自发脱碱基、脱氨、氧化、复制压力及内源醛类如何形成基因组不稳定性见 Tubbs 与 Nussenzweig 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6591730/)；损伤与突变的基本区分见 Cooper 的[教材章节](https://www.ncbi.nlm.nih.gov/books/NBK9900/)。
[^damage-chemistry]: UV 光产物、体积较大加合物、断裂和交联的结构与修复接口见 Cooper 的[DNA 修复章节](https://www.ncbi.nlm.nih.gov/books/NBK9900/)及 Ashour 与 Mosammaparast 的[复制相关损伤综述](https://academic.oup.com/nar/article/49/6/3033/6163082)。
[^eukaryotic-ddr]: MRN–ATM、RPA–ssDNA–ATR、CHK1／CHK2 与周期输出的网络见 Reinhardt 与 Yaffe 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC2699687/)；周期控制边界见[细胞周期与细胞分裂](../cell/cell_cycle.md#dna-damage-replication-checkpoints)。
[^bacterial-sos]: 大肠杆菌 RecA–ssDNA、LexA 自切、修复／TLS／分裂抑制基因的时序及细菌间差异见 Kreuzer 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC11228462/)和 Erill 等的[SOS 网络综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4196698/)。
[^direct-repair]: 光裂解酶、O$^6$-alkylguanine alkyltransferase 和 AlkB 双加氧酶的底物与反应化学见 Yi 与 He 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3579392/)。
[^base-excision-repair]: 糖基化酶、AP 位点、short-patch／long-patch BER 和线粒体接口见 Bauer 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4666366/)及 Cooper 的[教材章节](https://www.ncbi.nlm.nih.gov/books/NBK9900/)。
[^nucleotide-excision-repair]: 细菌 UvrABC 与真核 global-genome／transcription-coupled NER 的识别、双切口和遗传病证据见 Marteijn 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3783044/)。
[^mismatch-repair]: 大肠杆菌 methyl-directed MMR、其他细菌 MutL 内切以及真核 PCNA／新生链缺口介导的链判别见 Putnam 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8785607/)。
[^nucs-mismatch-repair]: 古菌与 Actinobacteria 中 EndoMS／NucS 非经典 MMR 的底物偏向、滑动钳耦联和突变表型见 Castañeda-García 等的[研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC5290159/)及后续[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8228993/)。
[^double-strand-break-choice]: c-NHEJ、端切除、HR、SSA、TMEJ 及路径选择的细胞周期和末端结构条件见 Scully 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7315405/)。
[^crosslink-repair]: 复制耦联 FA–FANCD2／FANCI、核酸酶、TLS 和 HR 的协作以及 NEIL3 路线见 Ashour 与 Mosammaparast 的[综述](https://academic.oup.com/nar/article/49/6/3033/6163082)；FA 遗传与交联敏感性见 Kim 与 D'Andrea 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3403008/)。
[^fork-recovery]: 复制叉反转、保护、重启与模板转换见 Berti 等的[综述](https://pubmed.ncbi.nlm.nih.gov/32612242/)；交联与 DNA—蛋白质交联的复制耦联处置见 Ashour 与 Mosammaparast 的[综述](https://academic.oup.com/nar/article/49/6/3033/6163082)。
[^translesion-synthesis]: TLS、模板转换和复制叉容忍策略见 Ashour 与 Mosammaparast 的[综述](https://academic.oup.com/nar/article/49/6/3033/6163082)；损伤、TLS 与突变类型的实验关系见 Volkova 等的[研究](https://www.nature.com/articles/s41467-020-15912-7)。
[^mutational-signatures]: 大规模癌症基因组中的碱基置换、双碱基、indel 与结构变异 signatures 及病因不确定性见 Alexandrov 等的[研究](https://www.nature.com/articles/s41586-020-1943-3)；损伤与修复背景共同塑造 signature 的实验检验见 Volkova 等的[研究](https://www.nature.com/articles/s41467-020-15912-7)。
[^ames-test]: 试验菌株、回复突变、代谢活化和从细菌体外结果外推哺乳动物风险的限制见 OECD [Test No. 471](https://doi.org/10.1787/9789264071247-en)。
