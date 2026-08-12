# B 细胞与抗体应答

B 细胞把同一套免疫球蛋白可变区用于两个阶段。膜型免疫球蛋白与 Ig$\alpha$／Ig$\beta$ 共同组成 B 细胞受体（B-cell receptor，BCR），让细胞直接检查天然抗原；激活后的克隆则可将同一识别结构大量分泌为抗体，使特异性作用扩展到血液、组织液和黏膜表面。抗体本身既能遮挡病原体或毒素的关键结合面，也能用恒定区招募补体、吞噬细胞和其他效应装置。

抗体应答始于抗原对既有 B 细胞克隆的选择。BCR 信号、补体和先天受体、T 细胞帮助以及淋巴组织位置共同决定这些细胞迅速形成浆母细胞，或进入生发中心继续变异与选择。浆细胞、记忆 B 细胞和不同同种型抗体，是这段细胞历程在不同时间尺度上的输出。

## BCR 对天然抗原的识别 { #bcr-antigen-recognition }

成熟初始 B 细胞通常在同一已重排 VDJ 上表达膜型免疫球蛋白 M（immunoglobulin M，IgM）和免疫球蛋白 D（immunoglobulin D，IgD），两者具有相同抗原结合面。免疫球蛋白的胞质尾很短，信号主要由相伴的 Ig$\alpha$（CD79A）和 Ig$\beta$（CD79B）传递；其 ITAM 被 Src 家族激酶磷酸化后招募 SYK，再经 BLNK、BTK、PLC$\gamma$2 等节点接入 Ca$^{2+}$、NFAT、NF-$\kappa$B、MAPK 和 PI3K 网络。静息状态下的 BCR 提供维持成熟 B 细胞存活的基础信号，抗原结合后的信号强度则受受体密度、配体价数、膜上运动性和细胞状态共同调节。[^bcr-signaling]

B 细胞可以结合可溶性抗原，也常在淋巴结被膜下窦巨噬细胞、树突状细胞或滤泡树突状细胞表面接触完整抗原。细胞在接触面铺展，聚集 BCR 微簇，再借肌动蛋白产生的力提取膜上抗原；高亲和相互作用通常更能抵抗拉力并被内吞。内吞货物进入内体—溶酶体系统，产生的肽装入 MHC II。BCR 因而同时完成特异结合、信号转导和抗原浓缩，使稀少抗原也能被有效送给已活化的 CD4 T 细胞检查。[^bcr-capture]

共受体把抗原所处的免疫背景并入阈值。若抗原表面带有 C3d，CD21（CR2）可在 CD19—CD21—CD81 复合物中与 BCR 协同结合，CD19 的磷酸化会放大下游信号；[补体](complement.md#opsonization-clearance)由此兼具清除抗原和增强后续体液应答的作用。相反，含免疫球蛋白 G（immunoglobulin G，IgG）的免疫复合物若同时连接 BCR 与抑制性 Fc$\gamma$RIIB，可招募磷酸酶并提高继续激活的门槛。BCR、补体受体、Fc 受体和 Toll 样受体（Toll-like receptor，TLR）等信号的组合，共同决定实际结局。[^bcr-coreceptors]

## T 依赖性 B 细胞激活 { #t-dependent-b-cell-activation }

结合抗原的滤泡 B 细胞上调 CCR7，向 T 细胞区与滤泡交界处迁移；同一抗原预先启动的 CD4 T 细胞则取得 Tfh 前体特征并朝滤泡移动。B 细胞展示由其 BCR 内吞抗原产生的肽—MHC II，T 细胞用 TCR 识别该复合物，再以 CD40L—CD40、ICOS 相关接触和 IL-21 等细胞因子提供帮助。BCR 与 TCR 可分别识别同一分子复合物上的不同表位，其中 T 细胞表位来自 B 细胞所摄取的抗原，这一原则称为关联识别。[^linked-recognition]

关联识别使两个独立的克隆选择相互校验。能够结合蛋白并向已经启动的辅助 T 细胞展示相应来源肽的 B 细胞，可持续获得 CD40 和细胞因子信号；T 细胞帮助由此优先送给真正浓缩了该抗原的 B 细胞。半抗原连接载体蛋白后能够产生强抗体应答、荚膜多糖与蛋白载体偶联后能够招募 T 细胞帮助，都利用了这一空间关联；抗原与表位的术语边界见[抗原加工、呈递与 MHC](immuno_apc_mhc.md#antigen-immunogen-epitope)。

得到帮助的 B 细胞可进入不同命运。部分细胞在滤泡外迅速扩增为浆母细胞，较早分泌 IgM，也可在适当信号下产生已经转换类别的抗体；这条路线以速度换取较少的持续选择。另一部分 B 细胞与 Tfh 细胞进入滤泡，建立生发中心。滤泡外与生发中心应答可以在同一次感染中并行，输出比例随抗原形式、BCR 亲和力、T 细胞帮助和炎症环境改变。[^extrafollicular-gc]

## T 非依赖性 B 细胞激活 { #t-independent-responses }

某些多糖、脂质和高度重复的微生物表面结构能密集连接 BCR，并同时提供 TLR 配体、补体片段或由髓系细胞产生的 BAFF、APRIL 等辅助信号。脾边缘区 B 细胞和 B-1 细胞因所在位置、受体库与激活阈值而常参与这类快速应答，特别适合处理血源性荚膜细菌和反复出现的微生物结构。它们是以重排 BCR 进行克隆识别的适应性淋巴细胞；“T 非依赖”表示这类应答可独立于经典的同源 Tfh 帮助。[^t-independent]

这类应答往往较快、以 IgM 和滤泡外浆细胞输出为主，亲和成熟和持久召回应答通常弱于蛋白抗原引发的 T 依赖性生发中心反应。边缘区等群体在特定细胞因子和先天信号下也可转换为 IgG 或免疫球蛋白 A（immunoglobulin A，IgA），并产生一定的记忆样输出；人和鼠的细胞组成及体细胞高变背景也有差异。B-1、边缘区与滤泡 B 细胞描述发生、位置和功能倾向，与 T 依赖性的分类维度相互交叉。

## 生发中心反应与亲和成熟 { #germinal-center-reaction }

生发中心是次级淋巴器官滤泡内短暂形成的微解剖结构，成熟后分为暗区和明区。暗区中 CXCR4 较高的 B 细胞快速分裂，活化诱导的胞苷脱氨酶（activation-induced cytidine deaminase，AID）在已经重排并转录的免疫球蛋白可变区 DNA 中把胞嘧啶转为尿嘧啶。复制以及 UNG、错配修复等装置对 U:G 错配的处理，在可变区留下点突变。突变方向不由抗原指导，多数改变对结合无益，少数提高或改变结合性质。[^somatic-hypermutation]

细胞随后进入明区，从滤泡树突状细胞保存的天然抗原中竞争有限货物。BCR 结合和提取能力较强的细胞通常能内吞更多抗原，在表面展示更多相关肽—MHC II，从而从 Tfh 细胞获得较多 CD40L、细胞因子和存活信号。得到许可的细胞可返回暗区继续分裂和变异，也可走向浆细胞或记忆 B 细胞命运；未获得足够信号的细胞多发生凋亡并被吞噬。暗区—明区循环使多个变体世代反复接受选择，群体抗体亲和力随时间上升，这一群体过程才是亲和成熟。[^gc-selection]

选择同时受多项因素影响：表位在抗原表面的可达性、抗原怎样固定在滤泡树突状细胞上、BCR 提取所需的力、肽加工效率、Tfh 克隆偏好和不同 B 细胞间的竞争，都会改变某个谱系得到的帮助。某些低亲和或非优势克隆可保留对变异抗原有用的识别宽度，真实生发中心由结合能力与上述条件共同塑造。

## 类别转换与抗体效应接口 { #class-switch-recombination }

AID 还启动类别转换重组（class-switch recombination，CSR），但靶点和结果不同于体细胞高变。细胞因子与 CD40 或先天受体信号先使某个下游重链恒定区前的转换区发生胚系转录；AID 产生的尿嘧啶经修复加工为两处 DNA 断裂，供体 $S\mu$ 区与下游转换区连接，中间 DNA 以环状片段删除。原有 VDJ 与轻链不变，因此抗原特异性大体保留，重链恒定区却可从 $\mu$ 改为 $\gamma$、$\alpha$ 或 $\varepsilon$，把同一识别面接到不同 Fc 受体、补体和组织运输路线。[^class-switch]

类别转换是方向受基因座顺序限制的 DNA 重组，已删除的上游恒定区不会在该细胞中复原；细胞仍可向更下游恒定区连续转换。细胞因子与 CD40、BCR、TLR、组织位置和物种背景共同改变各转换区的可及性与细胞命运。IgM 与 IgD 在初始 B 细胞上的共同表达来自同一转录本的选择性 RNA 加工，属于独立于 CSR 的分子过程；V(D)J 重排、体细胞高变、类别转换和 RNA 加工的阶段边界见[淋巴细胞发育与受体多样性](lymphocyte_development_repertoire.md#four-diversification-processes)。

AID 的价值伴随基因组风险。脱靶脱氨、转换区断裂错误连接或与其他染色体发生易位，可能造成突变和 B 细胞肿瘤相关的染色体重排。生发中心细胞以时空限制、DNA 修复和选择清除来降低风险，残余的 DNA 损伤风险仍是这套机制的内在代价。

## 浆细胞分化与持续分泌 { #plasma-cell-differentiation }

浆母细胞仍能分裂并分泌抗体，终末分化的浆细胞则退出细胞周期，把细胞结构重排为分泌工厂。IRF4、BLIMP-1 与 XBP1 等转录网络压低 B 细胞身份和抗原呈递程序，扩张粗面内质网、高尔基体和未折叠蛋白反应装置；重链 RNA 加工也从膜型转向分泌型。抗体的特异性来自其克隆来源，分泌量则来自这套高度专业化的蛋白质合成体系。[^plasma-cells]

滤泡外产生的许多浆母细胞和浆细胞寿命较短，适合在感染早期迅速提高抗体浓度；生发中心或其他路径也能产生迁入骨髓、在 CXCL12、APRIL、IL-6 等微环境信号支持下长期存活的浆细胞。长寿命浆细胞可在脱离抗原刺激后持续分泌抗体，因而与保留 BCR、能在再次暴露后增殖的记忆 B 细胞承担不同任务。两类长期保护输出的比较见[免疫记忆与疫苗](memory_vaccines.md)。

## 抗体的效应机制 { #antibody-effector-functions }

抗体的两个功能面协同工作。Fab 端可占据病毒、细菌黏附分子或毒素与宿主受体的接触面，以空间阻挡实现中和；多价结合还能交联颗粒、限制扩散并促进清除。中和可独立于 Fc 受体发生，但在体内，许多保护性抗体同时借 Fc 招募细胞效应。抗体主要作用于胞外病原体、毒素、游离病毒以及暴露在感染细胞表面的抗原；TCR 则通过肽—MHC 读取细胞内部合成的蛋白。[^antibody-effector-principles]

抗体包被颗粒后，成簇 Fc 可连接巨噬细胞和中性粒细胞的激活型 Fc 受体，促进吞噬和杀伤；自然杀伤细胞（natural killer cell，NK cell）的 Fc$\gamma$RIIIa（CD16）可识别靶细胞表面的 IgG，触发抗体依赖的细胞介导细胞毒作用（antibody-dependent cellular cytotoxicity，ADCC）。合适亚类的 IgG 或抗原表面结合的 IgM 还能让 C1q 多点结合，启动[补体经典途径](complement.md#classical-pathway)。抗原密度、抗体占位、Fc 受体聚集和激活／抑制受体平衡共同决定吞噬、细胞毒或补体效应；抗体结合实验只证明了这条效应链的起点。[^fc-effector-functions]

## 免疫球蛋白同种型 { #immunoglobulin-isotypes }

### IgM 与 IgD { #igm-igd }

膜型 IgM 是 BCR 的组成形式；分泌型 IgM 多为含 J 链的五聚体，具有十个潜在抗原结合位点。抗原的尺寸和表位间距决定实际同时占用的位点数，因而结构价数与有效结合价数需要分开描述。IgM 主要位于血管内，单个位点亲和力尚不高时仍可凭多价形成较强亲合力；与表面抗原结合后的构象又适合招募 C1q，因此常构成初次应答早期的补体与凝集效应。IgD 主要与 IgM 共同作为初始 B 细胞受体，分泌量很低，其功能需结合细胞位置和受体状态判断。[^igm-structure]

### IgG 的分布与 Fc 效应 { #igg }

IgG 是人血浆和组织液中最丰富的抗体类别。单体大小便于进入组织，可中和、调理并由不同 IgG 亚类以不同效率连接 Fc$\gamma$ 受体和补体；Fc 糖基化还会继续改变受体偏好。新生儿 Fc 受体（neonatal Fc receptor，FcRn）在酸性内体中结合 IgG，使其免于溶酶体降解并延长循环寿命，也参与人胎盘将母体 IgG 转运给胎儿。IgG 的实际功能由亚类、糖型、抗原几何和效应细胞组合决定，各分子在这些任务上的效力不同。[^igg-functions]

### IgA 与 IgE 的屏障效应 { #iga-ige }

血清 IgA 以单体为主，黏膜固有层浆细胞产生的含 J 链二聚 IgA 可经 pIgR 转运，在腔面成为带分泌片的分泌型 IgA。它擅长中和、交联和免疫排斥，通常以较低炎症代价维持黏膜边界；具体转运过程见[屏障与黏膜免疫](mucosal_immunity.md#secretory-iga)。免疫球蛋白 E（immunoglobulin E，IgE）在游离血清中的浓度很低，却能以高亲和力长期占据肥大细胞和嗜碱性粒细胞的 Fc$\varepsilon$RI；多价抗原交联细胞表面 IgE 后触发脱颗粒和脂质介质生成，适用于抗蠕虫与屏障警戒，也构成速发型过敏的核心接口。

抗体类别转换改写重链恒定区和组织效应，亲和力上升则来自体细胞高变后的选择。未转换的 IgM 也可具有很高亲和力，已经转换的 IgG、IgA 或 IgE 则具有各自范围内的亲和力。抗体四链架构、亲和力与亲合力以及同种型结构比较见[蛋白质功能](../biochem/protein_function.md#antibody-modular-recognition)；这些结构由 B 细胞应答产生并在组织内发挥作用。

## 初次应答与再次应答 { #primary-secondary-response }

初次接触抗原后通常先出现滤泡外 IgM，随后可见生发中心或其他路径产生的类别转换抗体；血清抗体谱由不同浆细胞群的分泌量和抗体寿命叠加而成。再次暴露时，既有抗体可立即结合抗原，记忆 B 细胞又能较快扩增并形成新的浆细胞，因此常见更短的潜伏期、更高滴度以及较高亲和力的转换型抗体。IgM 应答仍可再次出现，回忆反应中的主要同种型则随黏膜环境、抗原类型和既有记忆组成而变。

测得的抗体浓度是浆细胞产生速率、组织分布和同种型半衰期的共同结果；抗体结合滴度、中和能力和临床保护是需要分别测量和关联的指标。记忆 B 细胞、长寿命浆细胞、抗体动力学和保护相关指标与疫苗评价的关系见[免疫记忆与疫苗](memory_vaccines.md)；单克隆／多克隆抗体、亲和力测量和免疫检测的证据边界见[免疫检测](immunological_methods_therapy.md)。

## 参考资料与延伸阅读 { #references }

- Murphy K, Weaver C, Berg LJ. *Janeway's Immunobiology*. 10th ed. W. W. Norton, 2022.
- Kwak K, Akkaya M, Pierce SK. B cell signaling in context. *Nature Immunology*. 2019;20:963–969.
- De Silva NS, Klein U. Dynamics of B cells in germinal centres. *Nature Reviews Immunology*. 2015;15:137–148.
- Xu Z, Zan H, Pone EJ, et al. Immunoglobulin class-switch DNA recombination: induction, targeting and beyond. *Nature Reviews Immunology*. 2012;12:517–531.
- Nutt SL, Hodgkin PD, Tarlinton DM, Corcoran LM. The generation of antibody-secreting plasma cells. *Nature Reviews Immunology*. 2015;15:160–171.
- Cerutti A, Cols M, Puga I. Marginal zone B cells: virtues of innate-like antibody-producing lymphocytes. *Nature Reviews Immunology*. 2013;13:118–132.
- Lu LL, Suscovich TJ, Fortune SM, Alter G. Beyond binding: antibody effector functions in infectious diseases. *Nature Reviews Immunology*. 2018;18:46–61.
- Schroeder HW Jr, Cavacini L. Structure and function of immunoglobulins. *Journal of Allergy and Clinical Immunology*. 2010;125:S41–S52.

[^bcr-signaling]: 膜型免疫球蛋白、Ig$\alpha$／Ig$\beta$、ITAM 与下游网络在真实组织情境中的整合，参见 Kwak、Akkaya 与 Pierce [B cell signaling in context](https://www.nature.com/articles/s41590-019-0427-9)；BCR 的发育期组装见[淋巴细胞发育与受体多样性](lymphocyte_development_repertoire.md#b-cell-development)。
[^bcr-capture]: B 细胞在细胞表面形成突触、用细胞骨架提取抗原并送入 MHC II 的机制，参见 Yuseff 等 [How B cells capture, process and present antigens](https://www.nature.com/articles/nri3469)及 Tolar [Cytoskeletal control of B cell responses to antigens](https://www.nature.com/articles/nri.2017.67)。
[^bcr-coreceptors]: CD19—CD21—CD81、C3d 对 BCR 阈值的放大及多受体信号整合，参见 NCBI Bookshelf [B-cell activation by armed helper T cells](https://www.ncbi.nlm.nih.gov/books/NBK27142/)与 Rawlings 等 [Integration of B cell responses through Toll-like receptors and antigen receptors](https://www.nature.com/articles/nri3190)。
[^linked-recognition]: BCR 浓缩完整抗原、MHC II 呈递载体来源肽、同源 T 细胞以 CD40L 和细胞因子帮助的关联识别，参见 NCBI Bookshelf [B-cell activation by armed helper T cells](https://www.ncbi.nlm.nih.gov/books/NBK27142/)；Tfh 的滤泡定位见[T 细胞激活与效应](t_cell_immunity.md#tfh-help)。
[^extrafollicular-gc]: 滤泡外浆母细胞与生发中心作为可并行的 B 细胞输出路线，参见 De Silva 与 Klein [Dynamics of B cells in germinal centres](https://www.nature.com/articles/nri3804)及 Nutt 等 [The generation of antibody-secreting plasma cells](https://www.nature.com/articles/nri3795)。
[^t-independent]: 边缘区 B 细胞整合 BCR、先天和辅助细胞信号，且能在特定条件下发生 T 非依赖类别转换，参见 Cerutti、Cols 与 Puga [Marginal zone B cells](https://www.nature.com/articles/nri3383)。
[^somatic-hypermutation]: AID 对已转录免疫球蛋白 V 区的脱氨及复制、碱基切除／错配修复产生突变的机制，参见 Methot 与 Di Noia [Molecular mechanisms of somatic hypermutation and class switch recombination](https://pubmed.ncbi.nlm.nih.gov/28215633/)；突变产生变体，亲和成熟还需要随后选择。
[^gc-selection]: 暗区增殖与高变、明区从滤泡树突状细胞取抗原并竞争 Tfh 帮助、获选细胞循环或分化的证据，参见 De Silva 与 Klein [Dynamics of B cells in germinal centres](https://www.nature.com/articles/nri3804)。
[^class-switch]: AID、转换区转录、DNA 双链断裂和删除性重组改变重链恒定区的机制，参见 Xu 等 [Immunoglobulin class-switch DNA recombination](https://www.nature.com/articles/nri3216)。
[^plasma-cells]: 浆母细胞、长短寿命浆细胞及 IRF4—BLIMP-1—XBP1 分泌程序，参见 Nutt 等 [The generation of antibody-secreting plasma cells](https://www.nature.com/articles/nri3795)。
[^antibody-effector-principles]: 抗体直接中和与 Fc 依赖效应的分工及协同，参见 Lu 等 [Beyond binding](https://www.nature.com/articles/nri.2017.106)。
[^fc-effector-functions]: Fc 亚类与糖基化、抗原几何、Fc 受体和补体共同决定效应，参见 Lu 等的综述及 Nimmerjahn、Ravetch [Fc$\gamma$ receptors as regulators of immune responses](https://www.nature.com/articles/nri2206)。
[^igm-structure]: 分泌型 IgM 的五聚／J 链结构、潜在结合位点和几何限制，参见 Keyt 等 [Structure, function, and therapeutic use of IgM antibodies](https://pmc.ncbi.nlm.nih.gov/articles/PMC7709107/)。
[^igg-functions]: 人免疫球蛋白重链恒定区、IgG 亚类、Fc 受体与组织分布，参见 Schroeder 与 Cavacini [Structure and function of immunoglobulins](https://pmc.ncbi.nlm.nih.gov/articles/PMC3670108/)；各同种型的教材性比较见 NCBI Bookshelf [The distribution and functions of immunoglobulin isotypes](https://www.ncbi.nlm.nih.gov/books/NBK27162/)。
