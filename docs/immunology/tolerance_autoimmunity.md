# 免疫耐受与自身免疫

BCR 和 TCR 由随机重排产生，能够识别自身成分的克隆因此必然出现在发育中的淋巴细胞库里。健康状态并不依赖一次筛选把这些细胞全部清空，而是由骨髓和胸腺的中央耐受、成熟淋巴细胞的内在制动、调节性细胞以及各组织的局部环境共同限制它们。免疫耐受是一种针对特定抗原、细胞状态和呈递情境形成的低反应状态，不是免疫系统普遍失去识别能力。

当若干检查点同时变得宽松，自身反应性克隆才可能取得帮助、扩增并把免疫效应持续施加于组织。这个过程还受到 HLA 与其他易感基因、感染或损伤造成的炎症背景、靶组织自身状态以及反馈放大的影响。自身免疫病因而不是一次简单的“自我／非我识别错误”，也通常不能归因于某一个突然复活的禁忌克隆。

## 中央耐受先改变初始受体库 { #central-tolerance }

### B 细胞在骨髓中编辑或限制自身反应受体 { #b-cell-central-tolerance }

未成熟 B 细胞在骨髓中以新形成的 BCR 接触当地可见的自身抗原。强烈、持续地结合多价自身抗原可使细胞重新启动轻链基因重排，以另一条轻链改写结合面；受体编辑仍未解除反应性时，细胞可发生克隆删除。可溶性抗原、较弱信号或不同发育阶段还可能诱导无反应状态，使细胞存活却降低 BCR 表达和后续激活能力。抗原密度、可达性、BCR 亲和力与信号时程共同分配这些结局，中央耐受因此是概率性的多级筛选。[^central-b-tolerance]

骨髓不能展示全身所有自身分子的每一种构象，低亲和或只识别特定组织、修饰状态的克隆也可能离开。随后发生的体细胞高变还会在外周产生新的自身反应性 BCR。成熟 B 细胞因而需要在进入滤泡、取得 T 细胞帮助和通过生发中心选择时继续接受检查，而不是带着一张永久的“非自身许可证”进入循环。

### 胸腺同时执行删除与调节谱系分流 { #t-cell-central-tolerance }

胸腺皮质先保留能够以适当强度读取自身肽—MHC 的 T 细胞，使成熟 TCR 库取得 MHC 限制。随后，髓质胸腺上皮细胞和树突状细胞展示更广的自身抗原；AIRE、FEZF2 等程序使许多外周组织限制性蛋白在胸腺中表达，细胞间抗原转移又扩展了可供检查的肽。对这些配体产生过强信号的胸腺细胞多被删除，部分 CD4 细胞则在特定信号窗口进入 FOXP3$^+$ 调节性 T 细胞（Treg）谱系。[^central-t-tolerance]

胸腺呈递仍不可能复制每个组织在不同年龄、代谢、感染和翻译后修饰状态下的全部抗原。亲和力不足以触发删除的自身反应性 T 细胞也可通过选择。中央耐受的作用是重塑风险分布，而不是创造一个完全不含自身反应性的初始库；发育过程的详细次序见[淋巴细胞发育与受体多样性](lymphocyte_development_repertoire.md#thymic-selection)。

## 外周耐受把识别结果接到实际情境 { #peripheral-tolerance }

### 缺少协同信号可使 T 细胞静默或删除 { #t-cell-intrinsic-tolerance }

稳态组织中的自身抗原可由树突状细胞持续取得并呈递，但这些呈递细胞通常缺少感染时的强烈共刺激和炎症细胞因子。初始 T 细胞只接收到持续 TCR 信号而缺少合适 CD28 等协同时，可进入无反应程序：受体仍能结合配体，细胞却难以产生 IL-2、增殖或获得完整效应功能。反复刺激还可通过 BIM、Fas 等死亡通路删除部分克隆，低量、低亲和或空间上难以遇到的抗原则可能维持免疫忽略。无反应是细胞内建立的低反应状态，免疫忽略是缺少足够接触或信号，两者不能仅凭“没有出现炎症”相互替代。[^peripheral-t-cell-tolerance]

CTLA-4、PD-1 等抑制性受体与磷酸酶、代谢限制和转录程序共同提高持续激活的门槛。它们不是专门识别自身抗原的受体，而是在抗原识别之后根据共刺激、组织和时间背景调整输出。同一分子也可参与限制感染、肿瘤或慢性刺激下的反应，因此检测到抑制性受体不能单独证明细胞已经耐受。

### Treg 在共享环境中实施外在调节 { #regulatory-tolerance }

胸腺来源和外周诱导的 Treg 以自身或环境抗原特异性 TCR 定位到相应呈递场所，再通过 CTLA-4 调低抗原呈递细胞的 CD80／CD86、利用高表达 CD25 改变 IL-2 可用性，并在特定组织释放 IL-10、TGF-$\beta$ 等因子。它们还能取得与效应细胞相似的归巢程序，在同一微环境中限制反应扩展。Treg 因而提供可影响多个邻近克隆的“显性”耐受，补足逐个删除或无反应难以覆盖的范围。[^treg-tolerance]

FOXP3 是稳定 Treg 身份的核心转录因子，但 FOXP3 或 CD25 的一次表达测量不足以在所有情境中证明抑制功能。Treg 数量、稳定性、抗原特异性、组织到达能力以及与效应细胞的相对状态都影响真实调节结果；其一般效应装置与[T 细胞激活与效应](t_cell_immunity.md#regulatory-t-cells)相接。

### B 细胞需要抗原识别之外的许可 { #b-cell-peripheral-tolerance }

进入外周的自身反应性 B 细胞可因持续 BCR 占用而保持无反应，也可能在 BAFF 等生存资源竞争中处于劣势或被排除在适宜滤泡位置之外。蛋白自身抗原通常还要求同源 CD4 T 细胞提供 CD40L 和细胞因子；若中央和外周 T 细胞耐受使这类帮助稀少，仅有 BCR 结合往往不足以形成持久抗体应答。Fc$\gamma$RIIB 等抑制性受体又能在免疫复合物同时连接 BCR 时提高激活门槛。[^peripheral-b-cell-tolerance]

[生发中心](b_cell_antibody.md#germinal-center-reaction)中的体细胞高变可能让原本安全的克隆取得自身反应性，因此选择还需排除不能获得合适 Tfh 帮助或持续受到自身抗原不利信号的变体。若自身抗原供应、Tfh 帮助、清除装置或抑制受体失衡，已经转换类别和高变的自身反应性 B 细胞便可形成记忆细胞与长寿命浆细胞，把一次失控固化为长期自身抗体来源。[^germinal-centre-tolerance]

## 组织环境决定反应代价和许可方式 { #tissue-tolerance }

有些自身抗原因低丰度、特定发育时期或解剖位置而很少被循环淋巴细胞遇到，形成免疫忽略。眼、脑、睾丸等曾被称为“免疫赦免”部位，但这些组织并非与免疫系统隔绝。血—组织屏障、抗原引流路线、细胞进入门槛、局部抑制因子和驻留免疫细胞共同降低破坏性炎症；感染或损伤改变这些条件后，免疫细胞仍能进入并产生病理。免疫赦免更适合描述相对的组织调控组合，而不是绝对无免疫区。[^immune-privilege]

肠道每天接触食物与共生微生物，肝脏持续接收门静脉带来的营养和微生物产物。稳态下的抗原递送、TGF-$\beta$、视黄酸、IL-10、Treg 和非炎症性清除共同使这些外源抗原偏向耐受；屏障破坏或先天警报增强则可把同一接触转为效应反应。这里形成的是对特定抗原和组织情境的主动调节，详细过程见[屏障与黏膜免疫](mucosal_immunity.md#oral-tolerance)及[肠—肝轴](mucosal_immunity.md#gut-liver-axis)。

## 自身免疫通常需要遗传易感与环境条件相遇 { #autoimmune-susceptibility }

### HLA 与调节基因改变各检查点的阈值 { #genetic-risk }

许多自身免疫病具有多基因遗传结构。HLA 等位基因改变哪些自身肽能够稳定呈递、TCR 以何种构型接触肽—HLA，以及哪些克隆在胸腺或外周获得信号；不同等位基因可对某种疾病增加风险，却对另一感染或免疫病产生不同方向的影响。PTPN22、CTLA4、细胞因子信号、核酸感知、补体和细胞清除等通路中的变异，还可在受体阈值、共刺激、Treg、B 细胞选择或组织炎症多个节点积累小效应。遗传易感提高概率，并不直接决定某个人必然发病。[^autoimmune-genetics]

少数单基因病揭示了关键控制点。AIRE 功能缺陷会缩小胸腺对组织限制性抗原的展示并造成多器官自身免疫，FOXP3 缺陷则破坏 Treg 稳定程序；CTLA4、FAS 和其他免疫调节基因的致病变异也可同时造成淋巴增殖、自身免疫与感染易感。这些高外显率疾病说明某个节点可以成为瓶颈，但多数常见自身免疫病仍是多个遗传与环境因素的组合。[^monogenic-tolerance]

### 感染和组织损伤可改变抗原出现方式 { #environmental-triggers }

感染可使树突状细胞上调共刺激和炎症因子，让原本在稳态呈递的自身肽进入更有利于效应分化的背景。细胞死亡释放核酸、胞内蛋白和组织限制性成分，氧化、瓜氨酸化、切割或其他修饰又可能形成此前稀少的新表位。屏障损伤、吸烟、紫外线、药物、激素与微生物群等因素在不同疾病中可改变这些过程，但每一种关联都需要疾病特异的流行病学和机制证据，不能列为通用病因。

外来抗原与自身表位若在结构上足够相似，同一 BCR 或 TCR 可能发生交叉识别，这称分子模拟。序列相似或体外交叉结合只能提出候选机制，还需证明相应克隆在人体暴露后扩增、到达靶组织并造成病变。感染也可通过旁观者激活、细胞因子放大、组织损伤和潜伏抗原释放推动疾病，因而感染后的自身免疫现象不能自动归因于分子模拟。[^infection-autoimmunity]

## 组织损伤会扩大自身反应的抗原范围 { #autoimmune-amplification }

初始反应攻击一个优势表位后，受损细胞释放更多分子，抗原呈递细胞便可把同一蛋白的其他表位或同一组织中其他蛋白送入淋巴结。随后出现的新克隆反应称表位扩展，可发生于同一分子内部，也可跨越不同分子。它使疾病在启动因素减弱后仍能扩大，并造成患者之间靶抗原谱和器官表现的差异；检测到较宽的自身抗体谱却不能反推最初由哪个表位启动。[^epitope-spreading]

自身抗体与自身核酸形成的免疫复合物还能同时连接 BCR、Fc 受体和内体 TLR，诱导 I 型干扰素并进一步促进 B、T 细胞反应。生发中心或炎症组织中的异位淋巴样结构持续提供 Tfh 帮助、体细胞高变和浆细胞输出，组织损伤—抗原释放—先天感知—适应性扩增由此形成反馈环。免疫复合物既可被[补体](complement.md#opsonization-clearance)帮助清除，也可在沉积并激活补体后造成局部损伤；早期经典途径成分缺陷因清除不足而增加系统性红斑狼疮风险，体现了同一系统的保护与致病两面。[^autoimmune-feedback]

## 自身免疫效应可改变功能或直接损伤组织 { #autoimmune-effectors }

器官特异性和系统性是疾病分布的两个常用方向，而不是两套互斥机制。Graves 病中的抗体持续激动 TSH 受体，重症肌无力中的抗体可阻断、促使内化或经补体损伤神经肌接头的乙酰胆碱受体；这些抗体主要改变特定细胞表面分子的功能。1 型糖尿病则以针对胰岛 $\beta$ 细胞的 T 细胞反应和逐渐丧失细胞量为核心，自身抗体常提供疾病进程标志。系统性红斑狼疮中，针对核酸及核蛋白的抗体形成免疫复合物，可在肾、皮肤、血管等位置连接 Fc 受体、补体和核酸感知通路。[^autoimmune-effector-patterns]

发现自身抗体并不等于已经证明该抗体致病。低水平自身抗体可见于健康人、感染后或单纯组织损伤时；有些抗体直接转移即可重现受体阻断、激动或组织损伤，有些则主要作为相关克隆活动和疾病分型的标志。临床诊断必须把抗体的特异度、滴度或功能与症状、器官损伤和其他检测结合，不能从一次阳性读出直接推出自身免疫病。[^autoantibody-evidence]

免疫缺陷与自身免疫也可以同时存在。细胞清除、凋亡、Treg、共同刺激或 B 细胞选择的缺陷可能一方面削弱病原控制，另一方面让自身抗原持续暴露或自身反应性克隆失去约束。后续[免疫缺陷](immunodeficiency.md)页面将从感染表型和受损层级展开这种并存关系；本页保留的核心是，自身免疫来自保护性免疫装置在错误抗原、位置或时程中的持续运行，而非一个独立于正常免疫的异常系统。

## 参考资料与延伸阅读 { #references }

- Murphy K, Weaver C, Berg LJ. *Janeway's Immunobiology*. 10th ed. W. W. Norton, 2022.
- Goodnow CC, Sprent J, Fazekas de St Groth B, Vinuesa CG. Cellular and genetic mechanisms of self tolerance and autoimmunity. *Nature*. 2005;435:590–597.
- Klein L, Kyewski B, Allen PM, Hogquist KA. Positive and negative selection of the T cell repertoire: what thymocytes see (and don't see). *Nature Reviews Immunology*. 2014;14:377–391.
- ElTanbouly MA, Noelle RJ. Rethinking peripheral T cell tolerance: checkpoints across a T cell's journey. *Nature Reviews Immunology*. 2021;21:257–267.
- Ohkura N, Sakaguchi S. Transcriptional and epigenetic basis of Treg cell development and function. *Cell Research*. 2020;30:465–474.
- Dendrou CA, Petersen J, Rossjohn J, Fugger L. HLA variation and disease. *Nature Reviews Immunology*. 2018;18:325–339.
- Vanderlugt CL, Miller SD. Epitope spreading in immune-mediated diseases. *Nature Reviews Immunology*. 2002;2:85–95.

[^central-b-tolerance]: B 细胞中央耐受中的受体编辑、删除和无反应及其信号依赖，参见 Goodnow 等 [Cellular and genetic mechanisms of self tolerance and autoimmunity](https://www.nature.com/articles/nature03724)；发育阶段的分子边界见[淋巴细胞发育与受体多样性](lymphocyte_development_repertoire.md#b-cell-development)。
[^central-t-tolerance]: mTEC、树突状细胞、AIRE／FEZF2、负选择与胸腺 Treg 分流，参见 Klein 等 [Positive and negative selection of the T cell repertoire](https://www.nature.com/articles/nri3667)及 Klein 等 [Central CD4$^+$ T cell tolerance](https://www.nature.com/articles/s41577-018-0083-6)。
[^peripheral-t-cell-tolerance]: 静息、忽略、无反应与删除等外周 T 细胞检查点，参见 ElTanbouly 与 Noelle [Rethinking peripheral T cell tolerance](https://www.nature.com/articles/s41577-020-00454-2)。
[^treg-tolerance]: FOXP3、CTLA-4、CD25 及 Treg 稳定程序与自身耐受，参见 Ohkura 与 Sakaguchi [Transcriptional and epigenetic basis of Treg cell development and function](https://www.nature.com/articles/s41422-020-0324-7)。
[^peripheral-b-cell-tolerance]: B 细胞中央与外周无反应、删除和帮助限制的教材框架，参见 NCBI Bookshelf [B lymphocytes in autoimmunity](https://www.ncbi.nlm.nih.gov/books/NBK459431/)；Fc$\gamma$RIIB 的阶段依赖作用说明单一分子不能概括全部检查点，见 Espéli 等 [Fc$\gamma$RIIb differentially regulates pre-immune and germinal center B cell tolerance](https://www.nature.com/articles/s41467-019-09434-0)。
[^germinal-centre-tolerance]: 体细胞高变可新生自身反应性，抗原供应、Tfh 帮助和生发中心选择失衡可产生长寿命自身抗体输出，参见 Vinuesa 等 [Dysregulation of germinal centres in autoimmune disease](https://www.nature.com/articles/nri2637)。
[^immune-privilege]: 组织屏障、引流、细胞进入与主动调节共同构成相对免疫赦免，参见 Forrester 等 [Immune privilege or privileged immunity?](https://www.nature.com/articles/mi200827)；中枢神经系统并非与免疫系统绝对隔离，见 Smyth 与 Kipnis [Redefining CNS immune privilege](https://www.nature.com/articles/s41577-025-01175-0)。
[^autoimmune-genetics]: HLA—肽—TCR 相互作用与自身免疫易感机制，参见 Dendrou 等 [HLA variation and disease](https://www.nature.com/articles/nri.2017.143)；常见自身免疫病的多位点、共享与疾病特异遗传背景，参见 Seldin 等 [Genetics of autoimmune diseases](https://www.nature.com/articles/jhg201594)。
[^monogenic-tolerance]: AIRE、FOXP3、CTLA4、FAS 等先天免疫错误如何暴露中央／外周耐受节点，并同时产生自身免疫与免疫缺陷表型，参见 Gámez-Díaz 等 [Cellular and molecular mechanisms breaking immune tolerance in inborn errors of immunity](https://www.nature.com/articles/s41423-020-00626-z)。
[^infection-autoimmunity]: HLA 配体、翻译后修饰和分子模拟的候选机制及其证据边界，参见 Dendrou 等的 HLA 综述；感染引发旁观者损伤而非分子模拟的模型证据与相反实例，见 Vanderlugt 与 Miller [Epitope spreading in immune-mediated diseases](https://www.nature.com/articles/nri724)。
[^epitope-spreading]: 分子内与分子间表位扩展的定义、疾病进展证据及其不一定单向致病的边界，参见 Vanderlugt 与 Miller 的综述。
[^autoimmune-feedback]: 自身核酸、免疫复合物、Fc 受体、内体 TLR、I 型干扰素与清除缺陷形成的反馈，参见 Dai 等 [Systemic lupus erythematosus: updated insights](https://www.nature.com/articles/s41392-025-02168-0)；早期经典途径成分兼具清除保护与炎症效应，见 Cook 与 Botto [The complement system and the pathogenesis of systemic lupus erythematosus](https://www.nature.com/articles/ncprheum0191)。
[^autoimmune-effector-patterns]: 器官特异与系统性自身免疫、受体激动／阻断和免疫复合物效应的教材性比较，参见 NCBI Bookshelf [Autoimmune responses are directed against self antigens](https://www.ncbi.nlm.nih.gov/sites/books/NBK27155/)；1 型糖尿病以 T 细胞和 $\beta$ 细胞互作为用为核心，见 Roep 等 [Type 1 diabetes mellitus as a disease of the $\beta$-cell](https://www.nature.com/articles/s41574-020-00443-4)。
[^autoantibody-evidence]: 自身抗体可能是直接效应物，也可能只是组织损伤和疾病分型标志；区分二者需要功能与因果证据，参见 NCBI Bookshelf [Autoimmune responses are directed against self antigens](https://www.ncbi.nlm.nih.gov/sites/books/NBK27155/)。
