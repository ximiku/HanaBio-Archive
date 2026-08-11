# 细胞信号转导

细胞信号转导研究的是一个输入怎样在特定细胞中改变分子状态，并最终重排代谢、膜运输、骨架、转录或细胞命运。信号分子本身只提供了部分信息；同一个配体在不同细胞中可以引出相反效应，因为受体亚型、效应蛋白、染色质状态、细胞器位置和既往刺激史都参与解释输入。信号通路因此更接近一个有空间结构、带反馈并持续周转的状态网络，而不是从受体到细胞核的一条固定导线。[^signaling-overview]

本页先提取不同通路共用的分子语法，再比较若干代表性系统。组织特异的激素传播、突触传递、免疫效应和胚胎模式形成分别由内分泌、神经、免疫和发育栏目展开；这里关心的是它们怎样复用受体、开关、第二信使、蛋白质组装、受控蛋白水解和时空编码。结构安排参考并实质性改编自 osm.bio《第十五章 细胞信号转导》，同时依据教材和原始研究重组、补充并校正。[^osm-cell-signaling]

## 通信尺度与受体背景 { #communication-receptor-context }

细胞可把信号分子释放到循环中作用于远端靶细胞，也可让其在局部扩散、返回自身或同类细胞，分别形成内分泌、旁分泌和自分泌通信。神经元把长距离电传导与突触处的短距离化学释放串联起来；接触依赖信号则要求相邻细胞膜上的配体和受体直接相遇。自分泌并非病理细胞专有，它也能在发育和组织修复中协调同类细胞群。缝隙连接和植物胞间连丝还可让离子或小分子在相邻胞质间受控交换，其结构基础见[直接胞质通讯](cell_interactions.md#gap-junctions)。这些名称描述传播路径，不预先规定受体类型或响应速度；完整的内分泌尺度比较见[激素通信的传播路径](../physiology/endo/index.md#signaling-range)。

信号到达某一细胞，只表示它进入了可能被读取的空间。靶细胞是否响应，首先取决于是否表达可用受体，随后取决于受体所接的 G 蛋白、激酶、磷酸酶、离子通道、转录因子和代谢酶。同一受体还可因膜域、共受体、配体浓度或持续时间不同而偏向不同输出。内分泌页从组织层面讨论的[受体背景](../physiology/endo/index.md#receptor-context)，在细胞层面正是这种“受体—效应器—状态”组合。

| 受体系统 | 配体读取位置 | 首个胞内转换事件 | 常见即时输出 | 重要边界 |
| --- | --- | --- | --- | --- |
| 配体门控离子通道 | 质膜外侧 | 通道开放概率改变 | 膜电位、离子通量 | 快速电响应可继续触发较慢的酶和转录反应 |
| G 蛋白偶联受体（GPCR） | 质膜外侧 | 异三聚体 G 蛋白换核苷酸 | cAMP、PLC、离子通道等 | G$\alpha$ 与 G$\beta\gamma$ 都可调节效应器 |
| 受体酪氨酸激酶（RTK） | 质膜外侧 | 受体构象重排及交叉磷酸化 | Ras–ERK、PI3K–AKT、PLC$\gamma$ | 不只调生长，也可控制代谢和迁移 |
| 细胞因子受体 | 质膜外侧 | 受体结合的 JAK 被重新排列并活化 | STAT 及其他支路 | 受体自身通常没有激酶结构域 |
| 受体 Ser／Thr 激酶 | 质膜外侧 | II 型受体磷酸化 I 型受体 | Smad 及非 Smad 支路 | III 型共受体通常没有激酶活性 |
| 核受体 | 胞质或细胞核 | 配体改变受体与辅调节因子组合 | 转录程序 | 家族成员的静息定位和配体前状态不同 |
| Notch | 细胞接触面 | 力依赖暴露切割位点并释放胞内段 | NICD–CSL 转录复合物 | 以受控蛋白水解传递信号，几乎不靠酶级联放大 |

受体系统与响应时间也不是一一对应。离子通道可在毫秒尺度改变电活动，但 Ca$^{2+}$ 随后能影响数小时的转录；核受体常产生较慢的基因表达变化，某些细胞内受体和膜受体却也可迅速调节既有蛋白。真正决定时间尺度的是传播、结合、催化、周转与效应层级的合成结果。

## 信号网络的共同分子语法 { #signaling-grammar }

### 可逆修饰与核苷酸开关 { #molecular-switches }

蛋白激酶把 ATP 的磷酰基转移到特定残基，蛋白磷酸酶再将其去除。磷酸化可改变催化活性、构象、稳定性、定位或结合界面；它在某个位点造成激活还是抑制，要由底物和位点决定，不能把 kinase 与 phosphatase 分别等同于通路的“开”和“关”。同一蛋白上的多个位点还可形成先后依赖、竞争或阈值响应，使连续输入被转成非线性输出。

GTPase 以 GTP 结合态和 GDP 结合态之间的循环组织另一类开关。鸟嘌呤核苷酸交换因子（GEF）促进 GDP 释放，使胞质中较丰富的 GTP 得以结合；GTPase 激活蛋白（GAP）加速 GTP 水解。异三聚体 G 蛋白中的 RGS 蛋白具有 G$\alpha$ GAP 功能；一些小 GTPase 的 GDI 则稳定 GDP 结合态并控制其膜—胞质分配，并非通过抑制 GTP 水解来维持开关。Ras 常把生长因子受体接到 ERK 级联，Rho 家族组织 actin 与黏附，Rab 和 Arf 指定膜交通步骤，Ran 梯度赋予[核质运输方向](nucleus_chromatin.md#ran-directed-transport)，Rheb 调节 mTORC1，Miro 则参与线粒体沿骨架的定位。它们共用核苷酸循环，却不构成一条功能相同的“G 蛋白通路”。[^signaling-switches]

### 模块化结合与局部组装 { #signaling-assemblies }

许多通路并不依靠稳定、永久的复合物，而是在刺激后短暂装配。SH2 结构域读取特定序列背景中的 phosphotyrosine，PTB 结构域常识别 NPXY 类基序，SH3 结构域偏好 proline-rich 序列，PDZ 结构域常结合蛋白末端短基序。PH 结构域的配体更为多样，只有部分成员以较高选择性结合 phosphoinositide。结构域名称因而提示可能的结合方式，但不能脱离序列背景和亲和力预测唯一伙伴。

受体磷酸化可直接产生 docking site，磷脂激酶可在某一膜面生成招募信号，scaffold 则把相邻反应物置于同一局部体积。这样的装配能够提高碰撞效率、隔离串扰并限定方向；scaffold 过少会失去配对，过多又可能把反应物分散到不同复合物，出现浓度依赖的抑制。膜域、内体、初级纤毛、黏着斑和细胞核由此不仅是信号发生后的目的地，也是决定反应能否发生的几何条件。

### 第二信使与放大 { #second-messengers }

cAMP、cGMP、inositol 1,4,5-trisphosphate（IP$_3$）、diacylglycerol（DAG）、Ca$^{2+}$ 和 PI(3,4,5)P$_3$ 都可把受体事件扩展到更多胞内靶点。它们分别由合成酶、降解酶、泵、交换体、缓冲蛋白或脂质磷酸酶维持高周转，因此既能被迅速放大，也能在输入停止后回落。所谓“第一信使不能进细胞，所以必须有第二信使”只适用于一部分膜受体；气体和核受体配体可以进入细胞，而 Notch 还直接释放受体片段。第二信使的核心意义在于可调的胞内扩散和局部浓度，而非所有信号都必须经过它们。[^gpcr-textbook]

## G 蛋白偶联受体系统 { #gpcr-signaling }

### 七跨膜受体与异三聚体 G 蛋白 { #gpcr-activation }

经典 GPCR 含七条跨膜螺旋。激动剂稳定受体的一组活性构象，其中 TM6 胞质端明显外移，形成可容纳 G$\alpha$ C 端的胞内腔；$\beta_2$ 肾上腺素能受体–G$_s$ 复合物结构直接展示了这一变化。受体作为 GEF 促进 G$\alpha$ 释放 GDP，GTP 随后结合。G$\alpha$–GTP 与 G$\beta\gamma$ 都可接触效应器；复合物可能解离，也可能主要发生重排，不能把完全分离当作所有 GPCR 的必经几何。G$\alpha$ 的内在水解及 RGS 加速作用使其回到 GDP 状态并重新形成异三聚体。[^gpcr-structure]

G$\alpha_s$ 常激活 adenylyl cyclase，G$\alpha_i/o$ 常抑制其部分 isoform 并让 G$\beta\gamma$ 调节通道，G$\alpha_{q/11}$ 常激活 PLC$\beta$，G$\alpha_{12/13}$ 可接入 Rho GEF。受体名称并不能替代亚型：$\alpha_1$ 肾上腺素能受体主要耦联 G$_q$，$\alpha_2$ 主要耦联 G$_i$；M$_2$ muscarinic receptor 主要耦联 G$_{i/o}$，内皮 M$_3$ 常耦联 G$_{q/11}$；vasopressin V$_1$ 与 V$_2$ 也分别偏向 G$_q$ 与 G$_s$。一个受体还可在不同细胞中改变偶联偏好。

### cAMP–PKA 轴 { #camp-pka }

adenylyl cyclase 将 ATP 转成 cAMP，phosphodiesterase（PDE）把 cAMP 水解为 5′-AMP。PKA 通常以两个调节亚基和两个催化亚基组成的 holoenzyme 存在；cAMP 结合调节亚基后解除对催化亚基的抑制。A-kinase anchoring protein（AKAP）把 PKA、PDE、phosphatase 和其他效应器固定在特定膜或细胞器附近，使细胞内并非只有一个均匀的 cAMP 池。

PKA 可在秒至分钟内改变代谢酶和通道，也可经 CREB 等转录因子影响较慢的基因表达。CREB Ser133 磷酸化是重要步骤，却不足以单独决定所有靶基因开启；CBP／p300、其他转录因子和染色质环境共同限制结果。胰岛素与胰高血糖素怎样把这些细胞内分支嵌入全身燃料调节，见[胰岛素的组织特异性作用](../physiology/endo/endo_islet.md#insulin-action)。

### PLC–IP$_3$–Ca$^{2+}$ 与 DAG–PKC { #plc-calcium-pkc }

G$\alpha_{q/11}$ 激活 PLC$\beta$ 后，质膜内层的 PI(4,5)P$_2$ 被切成可溶的 IP$_3$ 和留在膜内的 DAG。IP$_3$ 打开 ER 膜上的 IP$_3$ receptor，使腔内 Ca$^{2+}$ 释放；Ca$^{2+}$ 又可通过 calmodulin、CaMK、calcineurin、通道和收缩装置传播。calmodulin 含四个 EF-hand Ca$^{2+}$ 结合位点，其占据与靶蛋白响应可呈协同性和梯度性，不是简单的单个位点二元开关。

胞质 Ca$^{2+}$ 由 SERCA、PMCA、Na$^+$／Ca$^{2+}$ exchanger、线粒体摄取和缓冲蛋白共同回收。正、负反馈使其形成局部微域、波或脉冲；不同频率可选择性调动 NFAT、NF-$\kappa$B 等转录程序，说明同样的离子可用时间结构增加信息量。[^calcium-oscillations] DAG 与 Ca$^{2+}$ 共同激活 conventional PKC，而 novel PKC 依赖 DAG 但不依赖 Ca$^{2+}$，atypical PKC 对二者都不采用同样的激活方式。把所有 PKC 写成同一种 Ca$^{2+}$–phosphatidylserine 开关，会丢失家族分化。

## 酶联受体与磷酸化网络 { #enzyme-linked-receptors }

### RTK–Ras–ERK 级联 { #rtk-ras-erk }

多数 RTK 是单次跨膜蛋白。配体结合促进受体二聚化或改变既有二聚体的相对构象，使胞内 kinase domain 发生交叉磷酸化；insulin receptor 是预先由二硫键连接的二聚体，提示“配体从零诱导二聚”不是普遍规律。受体 phosphotyrosine 随后招募带 SH2／PTB 结构域的蛋白。GRB2 可经 SOS 把 Ras 换成 GTP 状态，Ras–GTP 招募 RAF，随后依次激活 MEK1/2 和 ERK1/2。RAF 和 ERK 主要是 Ser／Thr kinase，MEK 则是 dual-specificity kinase。[^enzyme-linked-textbook]

ERK 的底物分布于胞质、膜和细胞核，其输出由强度、持续时间、脉冲频率和亚细胞位置共同决定。PC12 细胞中的经典工作显示，短暂和持续的 ERK 活化可与不同命运相关；现代活细胞传感器进一步观察到异步 ERK 脉冲，并发现 EGF 浓度可主要改变脉冲频率而非简单提高一个群体平均值。[^erk-duration][^erk-pulses] Ras 致癌突变常削弱 GAP 促进的 GTP 水解或改变其他调节，使开关长期偏向 GTP 状态；不同突变和组织背景仍可产生不同效应，不能只把 Ras 描写为“细胞增殖按钮”。

### PI3K–AKT–mTOR 轴 { #pi3k-akt-mtor }

class IA PI3K 通常由 p85 调节亚基和 p110 catalytic subunit 构成。RTK 或其他上游输入把它招募到质膜后，p110 在 PI(4,5)P$_2$ 的 3 位加磷酸，直接生成 PI(3,4,5)P$_3$，并非先把 PIP 逐级加成 PIP$_2$、再加成 PIP$_3$。PIP$_3$ 为带 PH 结构域的 PDK1 和 AKT 提供局部 docking surface；PDK1 磷酸化 AKT Thr308，mTORC2 促进 Ser473 磷酸化和充分激活。PTEN 把 PIP$_3$ 去磷酸化回 PIP$_2$，在同一膜面上与 PI3K 对抗。[^pten-lipid-phosphatase][^mtorc2-akt]

AKT 可抑制 FOXO、调节 GSK3，并通过 TSC–Rheb 接入 mTORC1，从而协调生存、代谢、蛋白质合成和细胞生长。它还可经 TBC1D4 等 Rab GAP 促进 GLUT4 vesicle 向细胞表面转位，但“AKT 直接激活 GLUT4”遗漏了运输装置。mTORC1 调节 S6K 和 4E-BP 等翻译控制器；ribosomal protein S6 phosphorylation 是通路活动读出之一，并不证明细胞选择了一类专门磷酸化核糖体去翻译固定 mRNA 集合。

### TGF-$\beta$–Smad 轴 { #tgfb-smad }

哺乳动物 TGF-$\beta$1–3 常以潜伏复合物存在于 ECM，经过蛋白水解、integrin 受力或其他局部过程后才获得受体可及性；这一潜伏策略不能直接套用于 BMP 等所有家族成员。配体使 constitutively active 的 II 型 Ser／Thr kinase receptor 与 I 型受体组成复合物，II 型受体磷酸化并激活 I 型受体。III 型 betaglycan 或 endoglin 主要作为共受体调节配体呈递，不具有同样的 kinase domain。

激活的 I 型受体磷酸化 receptor-regulated Smad 的 C 端 SSXS motif：TGF-$\beta$／activin 支路主要使用 Smad2/3，BMP 支路主要使用 Smad1/5/8。R-Smad 与 common-mediator Smad4 组复合物后在核质间穿梭，并与细胞类型特异的 DNA-binding factor、coactivator 或 corepressor 共同调控转录；Smad6/7 则参与抑制反馈。Smad2、Smad3 和 Smad4 在刺激期间持续核质往返，这使转录装置能追踪受体活性，而非完成一次不可逆的“暴露 NLS—入核”。[^smad-shuttling]

### 细胞因子受体–JAK–STAT 轴 { #jak-stat }

许多 cytokine receptor 没有内在 kinase activity，而是在胞质尾结合 JAK family kinase。配体改变受体亚基的间距和取向，使 JAK 相互磷酸化并产生 receptor phosphotyrosine docking site；STAT 经 SH2 结构域结合后被磷酸化，形成 homo- 或 heterodimer 并进入细胞核。部分受体在静息时已经预组装，因此激活的关键是几何重排，不一定是两个游离单体第一次相遇。

STAT 输出受 phosphatase、protein inhibitor of activated STAT（PIAS）、受体内吞和 suppressor of cytokine signaling（SOCS）限制。SOCS 可由 STAT 诱导，形成延迟负反馈；JAK–STAT 还可与 Ras–ERK、PI3K 和免疫受体支路相接。细胞因子在造血和免疫中的专门效应不在此处展开，受体本身没有 kinase domain 这一结构边界则必须保留。

## 受控蛋白水解与发育信号 { #regulated-proteolysis-pathways }

### Wnt–$\beta$-catenin { #wnt-beta-catenin }

没有 canonical Wnt 输入时，AXIN、APC、GSK3 和 CK1 组成的 destruction complex 依次磷酸化游离 $\beta$-catenin，促使 $\beta$-TrCP 识别、ubiquitination 和 proteasomal degradation。蛋白酶体抑制和磷酸化位点突变的早期实验直接支持了这一周转机制。[^beta-catenin-degradation] Wnt 与 Frizzled、LRP5/6 结合后，经 Dishevelled、受体尾部磷酸化和复合物重排抑制 destruction complex 对新生 $\beta$-catenin 的处理；积累的 $\beta$-catenin 进入细胞核，与 TCF／LEF 及 coactivator 共同改变转录。这里的“关断”并非 GSK3 与 $\beta$-catenin 简单永久分离，而是降解机器在膜、胞质和复合物中的动态重分配。

### Hedgehog 与初级纤毛 { #hedgehog-cilium }

Hedgehog precursor 经过自切割并获得 C 端 cholesterol，信号片段的 N 端还可被 HHAT palmitoylation，这些脂质修饰影响分泌、传播和受体作用。在脊椎动物中，无配体时 PTCH1 抑制 Smoothened（SMO）进入或活化于 primary cilium，SUFU 与纤毛运输参与 GLI2/3 的抑制和加工；配体结合 PTCH1 后，SMO 在纤毛积累并改变 GLI 调控。小鼠遗传研究表明 IFT172、IFT88 和 KIF3A 缺失会破坏 Hedgehog 响应，确立了 intraflagellar transport 的必要性。[^hedgehog-cilium]

果蝇使用的 Ihog、Cos2、Fu 和 Ci 与脊椎动物 PTCH–SMO–SUFU–GLI 体系并非逐项同名，初级纤毛的中心地位也主要是脊椎动物机制。两套系统共享受体解除抑制和转录效应器状态转换，却应按物种分别描述。初级纤毛的建造与 IFT 见[纤毛内运输](cytoskeleton.md#ciliary-architecture)。

### Notch 的力依赖切割 { #notch-cleavage }

Notch receptor 在 Golgi 经 S1 processing 后以 heterodimer 到达细胞表面。相邻细胞的 Delta-like 或 Jagged ligand 结合其 extracellular domain，并在 ligand endocytosis 过程中施加拉力，使 negative regulatory region 暴露 S2 site；ADAM protease 切割后，$\gamma$-secretase 再作 S3 intramembrane cleavage，释放 Notch intracellular domain（NICD）。单分子力学与蛋白水解实验显示，生理可达的牵拉可把原本受保护的 S2 位点转换为可切割状态。[^notch-force]

NICD 进入细胞核后与 CSL／RBPJ、MAML 组成转录激活复合物。由于一个 receptor molecule 主要释放一个 NICD，Notch 缺少 kinase cascade 式的逐级酶放大，却能以直接接触、受力和蛋白周转把邻细胞状态转成清晰的转录变化。它与 cadherin 连接一样发生在细胞接触面，但受力暴露切割位点是专门的信号机制，不能归为一般黏附。

## NF-$\kappa$B 与泛素门控的转录响应 { #nfkb-signaling }

NF-$\kappa$B family protein 形成多种 dimer。canonical pathway 中，静息时 I$\kappa$B 把 NF-$\kappa$B 留在胞质；受体输入激活 IKK complex 后，I$\kappa$B$\alpha$ 被磷酸化、由 SCF$^{\beta\text{-TrCP}}$ ubiquitination 并交给 proteasome，NF-$\kappa$B 随即进入细胞核。新生 I$\kappa$B$\alpha$ 又能从核内移走 NF-$\kappa$B，形成快速负反馈。noncanonical pathway 主要经 NIK、IKK$\alpha$ 和 p100 processing 生成 p52–RelB，不能与 canonical pathway 的 I$\kappa$B degradation 合并成一条路线。

群体和单细胞实验显示，I$\kappa$B feedback 可使 nuclear NF-$\kappa$B 出现衰减、持续或振荡轨迹，刺激类别和持续方式由此影响靶基因选择。早期模块重构研究已经证明，改变 I$\kappa$B 家族反馈会改变 temporal profile 和 gene output。[^nfkb-dynamics] 免疫和炎症效应属于后续专页；这里的重点是 ubiquitin-dependent proteolysis、nucleocytoplasmic shuttling 和 transcriptional feedback 怎样共同编码输入。

## 细胞内受体与可扩散气体 { #intracellular-receptors-gases }

nuclear receptor 通常含变化较大的 N-terminal activation domain、保守的 C4 zinc-finger DNA-binding domain、hinge 和 C-terminal ligand-binding domain。glucocorticoid receptor 等 steroid receptor 可在无配体时与 Hsp90-containing complex 结合，配体使其重排并入核；thyroid hormone receptor 和 retinoic acid receptor 则常在无配体时已经结合 DNA 与 corepressor。把所有 nuclear receptor 都写成“胞质 Hsp90 复合物释放后进入核”会把家族中的两种主要静息策略混在一起。核受体识别 DNA 后仍须与其他转录因子及染色质调节器协作，所以相同受体在不同细胞中控制的基因集合并不相同。[^signaling-overview]

nitric oxide synthase（NOS）从 arginine 生成 NO，NO 不经囊泡储存，而是在受调节的合成后短距离扩散。靶细胞胞质中的可溶性鸟苷酸环化酶（soluble guanylyl cyclase，sGC）以 heme 感受 NO 并生成 cGMP，随后由 PKG、cyclic nucleotide-gated channel 或 PDE 等读取和终止。NO 的短寿命把作用限制在局部；“可以穿膜”并不等于没有合成控制或空间边界。血管舒缩等组织效应留给生理栏目，此处只说明胞质可溶性酶本身也能作为可扩散气体的受体和第一读取器。[^no-sgc]

## 整联蛋白把力学状态接入生化网络 { #integrin-signaling }

integrin 的 outside-in signaling 可在配体结合和受力后招募 talin、kindlin、FAK、Src、paxillin 等蛋白，并接入 Rho GTPase、Ras–ERK 与 PI3K–AKT；inside-out signaling 又由胞内调节使 integrin ectodomain 提高配体结合能力。FAK 与 Src 的激活、互相磷酸化和 docking protein 招募构成并行且反馈的复合过程，不宜压成唯一的 FAK→Src 直线。黏着斑的[承力结构](cell_interactions.md#load-bearing-adhesions)因而也是局部信号平台。

integrin 输入会与 soluble growth factor receptor 协同：只有配体、基质刚度、骨架张力和受体 traffic 同时处在合适范围，某些细胞才维持生长或迁移。细胞脱离适当基质后可能发生 anoikis，但悬浮细胞和不同组织具有自己的生存程序。机械输入改变 mTORC1 和 translation 时，也不意味着存在一组由 phosphorylated S6 标记、专门翻译生长 mRNA 的“活化核糖体”。

## 空间与时间共同编码信号 { #spatiotemporal-coding }

通路图通常只画“谁激活谁”，却很少画分子在何处相遇。PI(4,5)P$_2$、PIP$_3$ 和 DAG 被限制在特定膜叶，Ca$^{2+}$ 可在 channel mouth 形成 microdomain，AKAP 把 cAMP enzyme 固定在局部，primary cilium 把 Hedgehog components 压缩到狭小表面。受体内吞后也不一定立即沉默：部分 receptor–effector complex 可在 early endosome 持续产生空间上不同的信号，随后才在 recycling 与 lysosomal degradation 之间分流。相关膜交通见[内体回收与成熟](endomembrane.md#endosomal-sorting)。

时间结构同样携带信息。一个短促高峰、一个低水平持续信号和等总面积的间歇脉冲，可以因 phosphatase、feedback、transcription factor residence time 与 target turnover 不同而产生不同结果。Ca$^{2+}$ frequency、ERK pulse 和 NF-$\kappa$B oscillation 是可直接成像的例子；激素的脉冲与昼夜节律则在更长尺度上重复同一原则，见[激素分泌的脉冲与节律](../physiology/endo/index.md#temporal-coding)。因此信号强度和持续时间都可能改变细胞决策，不能把“通路身份”当成唯一编码维度。

## 衰减、终止与适应 { #signal-attenuation }

可响应系统必须不断清除自己的活化状态。phosphatase 去除 protein phosphate，GAP 加速 GTP hydrolysis，PDE 降解 cyclic nucleotide，SERCA／PMCA 等泵恢复 Ca$^{2+}$ gradient，PTEN 消除 PIP$_3$，ubiquitin system 则改变受体和 effector 的寿命。短寿命中间体需要持续合成才能维持高水平，也因而能在输入撤去后迅速下降。

GPCR 可被 GRK 磷酸化并结合 $\beta$-arrestin，后者既阻断进一步 G protein coupling，又连接 clathrin／AP-2 machinery 促进 endocytosis；$\beta_2$-adrenergic receptor 的实验直接确立了 arrestin 的 adaptor function。[^arrestin-endocytosis] 内吞后的受体可被去磷酸化并 recycling，或被 ubiquitination 后送往 lysosome。RTK 也可通过 endocytosis、phosphatase、Ras GAP 和 induced inhibitor 衰减。受体内吞的膜形变入口见[受体介导内吞](membrane_transport.md#receptor-mediated-endocytosis)，后续去向则由内体网络决定。

适应不等于系统彻底关闭。持续刺激时，receptor 数量、coupling efficiency 或 downstream gain 可下降，使输出回到接近基线，却保留对新变化的敏感性；negative feedback 还可能产生脉冲和振荡。相反，positive feedback、chromatin remodeling 或稳定 protein network 可让短暂输入留下较长记忆。终止、适应与记忆是同一网络在不同时间尺度上的结果。

## 从通路图到因果证据 { #signaling-evidence }

phosphorylation blot、reporter gene 或终点 RNA-seq 能说明通路某处发生了变化，却不能单独证明信号按画出的唯一顺序传播。可靠机制通常需要把位置、时间和必要性／充分性放在一起检验。

| 证据路线 | 能直接回答的问题 | 主要解释边界 |
| --- | --- | --- |
| phospho-specific antibody、targeted proteomics | 哪些位点在何时改变 | 位点变化未必等于 enzyme activity，也会被细胞群平均掩盖 |
| live-cell FRET／translocation sensor | 单细胞中活性、位置和脉冲怎样变化 | sensor expression、dynamic range 和 spatial buffering 可能扰动系统 |
| acute inhibitor、degrader 或 optogenetic input | 某节点在特定时间是否必要，特定动态是否足以驱动输出 | 药物 off-target、光输入几何和补偿路线必须有对照 |
| co-immunoprecipitation、proximity labeling、structure | 分子能否接触以及界面如何组织 | 共现不自动给出作用方向，稳定结构可能漏掉 transient state |
| single-cell transcriptome／reporter 与 lineage tracking | 异质 trajectory 怎样连接长期命运 | correlation 仍需 perturbation，snapshot 不能替代真实 trajectory |
| reconstitution 与 quantitative modeling | 最小组分是否足以产生 switch、amplification 或 oscillation | 参数可辨识性及缺失的 cell geometry 限制外推 |

例如，固定时间点的 population-average phospho-ERK 容易把异步脉冲平滑成“持续低水平”；活细胞 sensor 揭示轨迹后，还需用受控脉冲、acute perturbation 和 downstream fate readout 检验这些轨迹是否具有因果意义。信号研究最终要说明的不只是“节点 A 与节点 B 同时变化”，而是何种分子状态在何处、以何种时间结构，足以改变哪一个细胞过程。

## 参考资料与延伸阅读 { #references }

[^signaling-overview]: 细胞通信距离、受体背景、第二信使、核受体、NO 及通路反馈的基础框架见 Alberts 等的[细胞通信一般原理](https://www.ncbi.nlm.nih.gov/books/NBK26813/)。
[^osm-cell-signaling]: 本页实质性改编自 osm.bio《[第十五章 细胞信号转导](https://osm.bio/index.php?oldid=11867&title=第十五章_细胞信号转导)》固定版本，贡献者包括 Tsusha、长河、Astelle、Sofia，原文按 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans) 许可；HanaBio 重新划分学科边界，并补充时空编码、实验解释及科学校正。
[^signaling-switches]: phosphorylation switch、heterotrimeric／small GTPase、GEF、GAP、RGS 与 GDI 的共同循环见 Alberts 等的[细胞通信一般原理章节](https://www.ncbi.nlm.nih.gov/books/NBK26813/)。
[^gpcr-textbook]: GPCR、cAMP／PKA、PLC／IP$_3$／DAG、Ca$^{2+}$ 与 PKC 家族的教材框架见 Alberts 等的[G 蛋白偶联受体信号章节](https://www.ncbi.nlm.nih.gov/books/NBK26912/)。
[^gpcr-structure]: TM6 外移、G$\alpha_s$ 核苷酸口袋重排及 receptor–G protein interface 见 Rasmussen 等的[$\beta_2$ 肾上腺素能受体–G$_s$ 复合物结构](https://pubmed.ncbi.nlm.nih.gov/21772288/)。
[^calcium-oscillations]: Ca$^{2+}$ oscillation frequency 对 NFAT、Oct/OAP 与 NF-$\kappa$B transcription 的差异解码见 Dolmetsch、Xu 与 Lewis 的[Ca$^{2+}$ 频率钳制实验](https://pubmed.ncbi.nlm.nih.gov/9582075/)。
[^enzyme-linked-textbook]: RTK、Ras–MAPK、PI3K–AKT、TGF-$\beta$–Smad、integrin 及 cytokine receptor 的共同机制见 Alberts 等的[酶联细胞表面受体信号章节](https://www.ncbi.nlm.nih.gov/books/NBK26822/)。
[^erk-duration]: PC12 系统中 transient 与 sustained ERK activity 及 cell response 的关系见 Marshall 的[RTK 信号特异性经典研究](https://pubmed.ncbi.nlm.nih.gov/7834738/)。
[^erk-pulses]: EGF 浓度、ERK pulse frequency 与 proliferation decision 的单细胞证据见 Albeck、Mills 与 Brugge 的[ERK 频率调制研究](https://pubmed.ncbi.nlm.nih.gov/23219535/)。
[^pten-lipid-phosphatase]: PTEN lipid phosphatase activity 对 PIP$_3$、AKT 与 cell survival 的作用见 Myers 等的[PTEN 底物研究](https://pubmed.ncbi.nlm.nih.gov/9811831/)。
[^mtorc2-akt]: rictor–mTOR complex 促进 AKT Ser473 phosphorylation 的细胞和体外证据见 Sarbassov 等的[mTORC2 研究](https://pubmed.ncbi.nlm.nih.gov/15718470/)。
[^smad-shuttling]: Smad2、Smad3 与 Smad4 持续 nucleocytoplasmic shuttling 及其对 receptor activity sensing 的意义见 Inman 等的[Smad 动态研究](https://pubmed.ncbi.nlm.nih.gov/12191474/)。
[^beta-catenin-degradation]: $\beta$-catenin phosphorylation、ubiquitination 与 proteasomal turnover 的直接证据见 Aberle 等的[$\beta$-catenin 降解研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC1170003/)；Wnt、Hedgehog 与 Notch 的通路比较见 Alberts 等的[受控蛋白水解信号章节](https://www.ncbi.nlm.nih.gov/books/NBK26918/)。
[^hedgehog-cilium]: 小鼠 IFT172、IFT88 与 KIF3A 遗传扰动把 intraflagellar transport 定位在 PTCH1 下游、GLI 上游，见 Huangfu 等的[Hedgehog–IFT 原始研究](https://pubmed.ncbi.nlm.nih.gov/14603322/)。
[^notch-force]: Notch negative regulatory region 的 force-dependent S2 exposure 与 proteolysis 见 Gordon 等的[Notch mechanical allostery 研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC4481192/)。
[^nfkb-dynamics]: I$\kappa$B isoform feedback 怎样控制 nuclear NF-$\kappa$B temporal profile 与 selective gene activation，见 Hoffmann 等的[NF-$\kappa$B 模块研究](https://pubmed.ncbi.nlm.nih.gov/12424381/)。
[^no-sgc]: sGC 是胞质异二聚体并作为 NO 的生理受体；它与单跨膜颗粒型鸟苷酸环化酶的定位和结构差异见 NCBI Bookshelf 的[cGMP 生物化学章节](https://www.ncbi.nlm.nih.gov/books/NBK542234/)。NO 穿过质膜后直接激活胞内鸟苷酸环化酶的细胞信号框架见 Alberts 等的[细胞通信一般原理](https://www.ncbi.nlm.nih.gov/books/NBK26813/)。
[^arrestin-endocytosis]: $\beta$-arrestin 结合 activated $\beta_2$ receptor 与 clathrin 并促进 receptor internalization 的证据见 Goodman 等的[arrestin adaptor 研究](https://pubmed.ncbi.nlm.nih.gov/8837779/)。
