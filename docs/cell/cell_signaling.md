# 细胞信号转导

细胞信号转导研究一个输入怎样在特定细胞中改变分子状态，并最终重排代谢、膜运输、骨架、转录或细胞命运。信号分子只提供部分信息；同一个配体在不同细胞中可以引出相反效应，因为受体亚型、效应蛋白、染色质状态、细胞器位置和既往刺激史都参与解释输入。信号通路由此构成具有空间结构、反馈和持续周转的状态网络。[^signaling-overview]

不同通路复用受体、开关、第二信使、蛋白质组装、受控蛋白水解和时空编码等分子语法。组织特异的激素传播、突触传递、免疫效应和胚胎模式形成分别见[内分泌生理](../physiology/endo/index.md)、[神经科学](../neuro/index.md)、[免疫学](../immunology/index.md)和[发育生物学](../development/index.md)。[^osm-cell-signaling]

## 通信尺度与受体背景 { #communication-receptor-context }

细胞可把信号分子释放到循环中作用于远端靶细胞，也可让其在局部扩散、返回自身或同类细胞，分别形成内分泌、旁分泌和自分泌通信。神经元把长距离电传导与突触处的短距离化学释放串联起来；接触依赖信号则要求相邻细胞膜上的配体和受体直接相遇。自分泌也能在发育和组织修复中协调同类细胞群。缝隙连接和植物胞间连丝还可让离子或小分子在相邻胞质间受控交换，其结构基础见[直接胞质通讯](cell_interactions.md#gap-junctions)。这些名称描述传播路径，受体类型与响应速度则由具体系统决定；内分泌尺度比较见[激素通信的传播路径](../physiology/endo/index.md#signaling-range)。

信号到达某一细胞，只表示它进入了可能被读取的空间。靶细胞是否响应，首先取决于是否表达可用受体，随后取决于受体所接的 G 蛋白、激酶、磷酸酶、离子通道、转录因子和代谢酶。同一受体还可因膜域、共受体、配体浓度或持续时间不同而偏向不同输出。内分泌页从组织层面讨论的[受体背景](../physiology/endo/index.md#receptor-context)，在细胞层面正是这种“受体—效应器—状态”组合。

| 受体系统 | 配体读取位置 | 首个胞内转换事件 | 常见即时输出 | 重要边界 |
| --- | --- | --- | --- | --- |
| 配体门控离子通道 | 质膜外侧 | 通道开放概率改变 | 膜电位、离子通量 | 快速电响应可继续触发较慢的酶和转录反应 |
| G 蛋白偶联受体（GPCR） | 质膜外侧 | 异三聚体 G 蛋白换核苷酸 | cAMP、PLC、离子通道等 | G$\alpha$ 与 G$\beta\gamma$ 都可调节效应器 |
| 受体酪氨酸激酶（RTK） | 质膜外侧 | 受体构象重排及交叉磷酸化 | Ras–ERK、PI3K–AKT、PLC$\gamma$ | 可调节生长、代谢和迁移 |
| 细胞因子受体 | 质膜外侧 | 受体结合的 JAK 被重新排列并活化 | STAT 及其他支路 | 由受体结合型 JAK 提供激酶活性 |
| 受体 Ser／Thr 激酶 | 质膜外侧 | II 型受体磷酸化 I 型受体 | Smad 及非 Smad 支路 | III 型共受体主要调节配体呈递 |
| 核受体 | 胞质或细胞核 | 配体改变受体与辅调节因子组合 | 转录程序 | 家族成员的静息定位和配体前状态不同 |
| Notch | 细胞接触面 | 力依赖暴露切割位点并释放胞内段 | NICD–CSL 转录复合物 | 以受控蛋白水解传递信号，几乎不靠酶级联放大 |

受体系统和响应时间之间存在多对多关系。离子通道可在毫秒尺度改变电活动，Ca$^{2+}$ 随后又能影响数小时的转录；核受体常产生较慢的基因表达变化，某些细胞内受体和膜受体也可迅速调节既有蛋白。传播、结合、催化、周转与效应层级共同决定实际时间尺度。

## 信号网络的共同分子语法 { #signaling-grammar }

### 可逆修饰与核苷酸开关 { #molecular-switches }

蛋白激酶（protein kinase）把 ATP 的磷酰基转移到特定残基，蛋白磷酸酶（protein phosphatase）再将其去除。磷酸化可改变催化活性、构象、稳定性、定位或结合界面；具体位点和底物背景决定它造成激活还是抑制。同一蛋白上的多个位点还可形成先后依赖、竞争或阈值响应，使连续输入被转成非线性输出。

GTPase 以 GTP 结合态和 GDP 结合态之间的循环组织另一类开关。鸟嘌呤核苷酸交换因子（guanine nucleotide exchange factor，GEF）促进 GDP 释放，使胞质中较丰富的 GTP 得以结合；GTP 酶激活蛋白（GTPase-activating protein，GAP）加速 GTP 水解。异三聚体 G 蛋白中的 G 蛋白信号调节蛋白（regulator of G-protein signaling，RGS）具有 G$\alpha$ GAP 功能；一些小 GTPase 的 GDP 解离抑制蛋白（GDP dissociation inhibitor，GDI）则稳定 GDP 结合态并控制其膜—胞质分配。Ras 常把生长因子受体接到 ERK 级联，Rho 家族组织 actin 与黏附，Rab 和 Arf 指定膜交通步骤，Ran 梯度赋予[核质运输方向](nucleus_chromatin.md#ran-directed-transport)，Rheb 调节 mTORC1，Miro 则参与线粒体沿骨架的定位。它们共用核苷酸循环，并通过各自效应蛋白承担不同功能。[^signaling-switches]

### 模块化结合与局部组装 { #signaling-assemblies }

许多通路在刺激后短暂装配复合物。Src 同源 2（Src homology 2，SH2）结构域读取特定序列背景中的 phosphotyrosine，磷酸酪氨酸结合（phosphotyrosine-binding，PTB）结构域常识别 NPXY 类基序，Src 同源 3（Src homology 3，SH3）结构域偏好富脯氨酸序列，PDZ 结构域常结合蛋白末端短基序。pleckstrin 同源（pleckstrin homology，PH）结构域的配体更为多样，只有部分成员以较高选择性结合 phosphoinositide。结构域名称提示可能的结合方式，实际伙伴还取决于序列背景和亲和力。

受体磷酸化可直接产生对接位点（docking site），磷脂激酶可在某一膜面生成招募信号，支架蛋白（scaffold protein）则把相邻反应物置于同一局部体积。这样的装配能够提高碰撞效率、隔离串扰并限定方向；scaffold 浓度过低会失去配对，过高则可能把反应物分散到不同复合物，出现浓度依赖的抑制。膜域、内体、初级纤毛、黏着斑和细胞核既是信号目的地，也是反应发生的几何条件。

### 第二信使与放大 { #second-messengers }

环磷酸腺苷（cyclic adenosine monophosphate，cAMP）、环磷酸鸟苷（cyclic guanosine monophosphate，cGMP）、肌醇-1,4,5-三磷酸（inositol 1,4,5-trisphosphate，IP$_3$）、二酰甘油（diacylglycerol，DAG）、Ca$^{2+}$ 和 PI(3,4,5)P$_3$ 都可把受体事件扩展到更多胞内靶点。它们分别由合成酶、降解酶、泵、交换体、缓冲蛋白或脂质磷酸酶维持高周转，因此既能被迅速放大，也能在输入停止后回落。第二信使适用于许多膜受体；气体和核受体配体则可以进入细胞，Notch 还直接释放受体片段。可调的胞内扩散和局部浓度是第二信使的核心特征。[^gpcr-textbook]

## G 蛋白偶联受体系统 { #gpcr-signaling }

### 七跨膜受体与异三聚体 G 蛋白 { #gpcr-activation }

经典 G 蛋白偶联受体（G protein-coupled receptor，GPCR）含七条跨膜螺旋。激动剂稳定受体的一组活性构象，其中跨膜螺旋 6（transmembrane helix 6，TM6）胞质端明显外移，形成可容纳 G$\alpha$ C 端的胞内腔；$\beta_2$ 肾上腺素能受体–G$_s$ 复合物结构直接展示了这一变化。受体作为 GEF 促进 G$\alpha$ 释放 GDP，GTP 随后结合。G$\alpha$–GTP 与 G$\beta\gamma$ 都可接触效应器；不同复合物可发生亚基解离或内部重排。G$\alpha$ 的内在水解及 RGS 加速作用使其回到 GDP 状态并重新形成异三聚体。[^gpcr-structure]

G$\alpha_s$ 常激活腺苷酸环化酶（adenylyl cyclase），G$\alpha_i/o$ 常抑制其部分 isoform 并让 G$\beta\gamma$ 调节通道，G$\alpha_{q/11}$ 常激活磷脂酶 C$\beta$（phospholipase C$\beta$，PLC$\beta$），G$\alpha_{12/13}$ 可接入 Rho GEF。具体亚型决定主要偶联：$\alpha_1$ 肾上腺素能受体主要耦联 G$_q$，$\alpha_2$ 主要耦联 G$_i$；M$_2$ 毒蕈碱型受体主要耦联 G$_{i/o}$，内皮 M$_3$ 常耦联 G$_{q/11}$；血管加压素 V$_1$ 与 V$_2$ 也分别偏向 G$_q$ 与 G$_s$。一个受体还可在不同细胞中改变偶联偏好。

### cAMP–PKA 轴 { #camp-pka }

adenylyl cyclase 将 ATP 转成 cAMP，磷酸二酯酶（phosphodiesterase，PDE）把 cAMP 水解为 5′-AMP。蛋白激酶 A（protein kinase A，PKA）通常以两个调节亚基和两个催化亚基组成的全酶（holoenzyme）存在；cAMP 结合调节亚基后解除对催化亚基的抑制。A 激酶锚定蛋白（A-kinase anchoring protein，AKAP）把 PKA、PDE、phosphatase 和其他效应器固定在特定膜或细胞器附近，在细胞内形成多个局部 cAMP 区域。

PKA 可在秒至分钟内改变代谢酶和通道，也可经 CREB 等转录因子影响较慢的基因表达。CREB Ser133 磷酸化是重要步骤，却不足以单独决定所有靶基因开启；CBP／p300、其他转录因子和染色质环境共同限制结果。胰岛素与胰高血糖素怎样把这些细胞内分支嵌入全身燃料调节，见[胰岛素的组织特异性作用](../physiology/endo/endo_islet.md#insulin-action)。

### PLC–IP$_3$–Ca$^{2+}$ 与 DAG–PKC { #plc-calcium-pkc }

G$\alpha_{q/11}$ 激活 PLC$\beta$ 后，质膜内层的 PI(4,5)P$_2$ 被切成可溶的 IP$_3$ 和留在膜内的 DAG。IP$_3$ 打开内质网膜上的 IP$_3$ 受体，使腔内 Ca$^{2+}$ 释放；Ca$^{2+}$ 又可通过钙调蛋白（calmodulin）、Ca$^{2+}$／钙调蛋白依赖性蛋白激酶（Ca$^{2+}$/calmodulin-dependent protein kinase，CaMK）、钙调神经磷酸酶（calcineurin）、通道和收缩装置传播。calmodulin 含四个 EF-hand Ca$^{2+}$ 结合位点，其占据与靶蛋白响应可呈协同性和梯度性。

胞质 Ca$^{2+}$ 由肌质／内质网 Ca$^{2+}$-ATPase（sarco/endoplasmic reticulum Ca$^{2+}$-ATPase，SERCA）、质膜 Ca$^{2+}$-ATPase（plasma membrane Ca$^{2+}$-ATPase，PMCA）、Na$^+$／Ca$^{2+}$ exchanger、线粒体摄取和缓冲蛋白共同回收。正、负反馈使其形成局部微域、波或脉冲；不同频率可选择性调动 NFAT、NF-$\kappa$B 等转录程序，说明同样的离子可用时间结构增加信息量。[^calcium-oscillations] DAG 与 Ca$^{2+}$ 共同激活经典型蛋白激酶 C（conventional protein kinase C，cPKC），新型 PKC（novel PKC，nPKC）依赖 DAG，非典型 PKC（atypical PKC，aPKC）则使用其他激活组合。

## 酶联受体与磷酸化网络 { #enzyme-linked-receptors }

### RTK–Ras–ERK 级联 { #rtk-ras-erk }

多数受体酪氨酸激酶（receptor tyrosine kinase，RTK）是单次跨膜蛋白。配体结合促进受体二聚化或改变既有二聚体的相对构象，使胞内激酶结构域发生交叉磷酸化；胰岛素受体则是预先由二硫键连接的二聚体。受体磷酸酪氨酸随后招募带 SH2／PTB 结构域的蛋白。GRB2 可经 SOS 把 Ras 换成 GTP 状态，Ras–GTP 招募 RAF，随后依次激活 MEK1/2 和 ERK1/2。RAF 和 ERK 主要是 Ser／Thr kinase，MEK 则是双特异性激酶（dual-specificity kinase）。[^enzyme-linked-textbook]

ERK 的底物分布于胞质、膜和细胞核，其输出由强度、持续时间、脉冲频率和亚细胞位置共同决定。PC12 细胞中的经典工作显示，短暂和持续的 ERK 活化可与不同命运相关；现代活细胞传感器进一步观察到异步 ERK 脉冲，并发现 EGF 浓度可主要改变脉冲频率，而群体平均值会掩盖这些轨迹。[^erk-duration][^erk-pulses] Ras 致癌突变常削弱 GAP 促进的 GTP 水解或改变其他调节，使开关长期偏向 GTP 状态；具体效应还取决于突变和组织背景。

### PI3K–AKT–mTOR 轴 { #pi3k-akt-mtor }

IA 类磷脂酰肌醇 3-激酶（class IA phosphoinositide 3-kinase，class IA PI3K）通常由 p85 调节亚基和 p110 催化亚基构成。RTK 或其他上游输入把它招募到质膜后，p110 在 PI(4,5)P$_2$ 的 3 位直接加磷酸，生成 PI(3,4,5)P$_3$。PIP$_3$ 为带 PH 结构域的 PDK1 和 AKT 提供局部 docking surface；PDK1 磷酸化 AKT Thr308，mTORC2 促进 Ser473 磷酸化和充分激活。磷酸酶及张力蛋白同源物（phosphatase and tensin homolog，PTEN）把 PIP$_3$ 去磷酸化回 PIP$_2$，在同一膜面上与 PI3K 对抗。[^pten-lipid-phosphatase][^mtorc2-akt]

AKT 可抑制 FOXO、调节 GSK3，并通过 TSC–Rheb 接入 mTORC1，从而协调生存、代谢、蛋白质合成和细胞生长。它还可经 TBC1D4 等 Rab GAP 促进葡萄糖转运蛋白 4（glucose transporter 4，GLUT4）囊泡向细胞表面转位。mTORC1 调节 S6K 和 4E-BP 等翻译控制器；核糖体蛋白 S6 磷酸化是通路活动读出之一，其转录本选择意义还需独立实验确定。

### TGF-$\beta$–Smad 轴 { #tgfb-smad }

哺乳动物转化生长因子 $\beta$（transforming growth factor-$\beta$，TGF-$\beta$）1–3 常以潜伏复合物存在于 ECM，经过蛋白水解、integrin 受力或其他局部过程后才获得受体可及性；骨形态发生蛋白（bone morphogenetic protein，BMP）等家族成员则有不同的配体成熟和释放方式。配体使组成型活性的 II 型 Ser／Thr 激酶受体与 I 型受体组成复合物，II 型受体磷酸化并激活 I 型受体。III 型 betaglycan 或 endoglin 主要作为共受体调节配体呈递，缺少同类激酶结构域。

激活的 I 型受体磷酸化受体调节型 Smad（receptor-regulated Smad，R-Smad）的 C 端 SSXS 基序：TGF-$\beta$／activin 支路主要使用 Smad2/3，BMP 支路主要使用 Smad1/5/8。R-Smad 与共同介质 Smad4（common-mediator Smad4）组成复合物后在核质间穿梭，并与细胞类型特异的 DNA 结合因子、共激活因子或共抑制因子共同调控转录；Smad6/7 则参与抑制反馈。Smad2、Smad3 和 Smad4 在刺激期间持续核质往返，使转录装置能够追踪受体活性。[^smad-shuttling]

### 细胞因子受体–JAK–STAT 轴 { #jak-stat }

许多细胞因子受体（cytokine receptor）缺少内在激酶活性，而在胞质尾结合 Janus 激酶（Janus kinase，JAK）。配体改变受体亚基的间距和取向，使 JAK 相互磷酸化并产生受体磷酸酪氨酸对接位点；信号转导及转录激活蛋白（signal transducer and activator of transcription，STAT）经 SH2 结构域结合后被磷酸化，形成同源或异源二聚体并进入细胞核。部分受体在静息时已经预组装，激活主要依赖几何重排。

STAT 输出受 phosphatase、活化 STAT 蛋白抑制因子（protein inhibitor of activated STAT，PIAS）、受体内吞和细胞因子信号抑制因子（suppressor of cytokine signaling，SOCS）限制。SOCS 可由 STAT 诱导，形成延迟负反馈；JAK–STAT 还可与 Ras–ERK、PI3K 和免疫受体支路相接。细胞因子在造血和免疫中的专门效应见[免疫学](../immunology/index.md)，受体结合型 JAK 则是这类受体的胞内催化装置。

## 受控蛋白水解与发育信号 { #regulated-proteolysis-pathways }

### Wnt–$\beta$-catenin { #wnt-beta-catenin }

经典 Wnt 输入缺席时，AXIN、APC、GSK3 和 CK1 组成的降解复合体（destruction complex）依次磷酸化游离 $\beta$-catenin，促使 $\beta$-TrCP 识别、泛素化和蛋白酶体降解。蛋白酶体抑制和磷酸化位点突变的早期实验直接支持了这一周转机制。[^beta-catenin-degradation] Wnt 与 Frizzled、LRP5/6 结合后，经 Dishevelled、受体尾部磷酸化和复合物重排抑制 destruction complex 对新生 $\beta$-catenin 的处理；积累的 $\beta$-catenin 进入细胞核，与 TCF／LEF 及 coactivator 共同改变转录。降解机器在膜、胞质和复合物之间的动态重分配实现这一转换。

### Hedgehog 与初级纤毛 { #hedgehog-cilium }

Hedgehog 前体经过自切割并获得 C 端胆固醇，信号片段的 N 端还可由 Hedgehog 酰基转移酶（Hedgehog acyltransferase，HHAT）棕榈酰化，这些脂质修饰影响分泌、传播和受体作用。在脊椎动物中，无配体时 PTCH1 抑制 Smoothened（SMO）进入或活化于初级纤毛，SUFU 与纤毛运输参与 GLI2/3 的抑制和加工；配体结合 PTCH1 后，SMO 在纤毛积累并改变 GLI 调控。小鼠遗传研究表明 IFT172、IFT88 和 KIF3A 缺失会破坏 Hedgehog 响应，确立了纤毛内运输的必要性。[^hedgehog-cilium]

果蝇使用 Ihog、Cos2、Fu 和 Ci，脊椎动物则主要使用 PTCH–SMO–SUFU–GLI 体系；初级纤毛的中心地位也主要见于脊椎动物机制。两套系统共享受体解除抑制和转录效应器状态转换，但具体分子装置应按物种描述。初级纤毛的建造与 IFT 见[纤毛内运输](cytoskeleton.md#ciliary-architecture)。

### Notch 的力依赖切割 { #notch-cleavage }

Notch 受体在 Golgi 经 S1 加工后以异二聚体到达细胞表面。相邻细胞的 Delta-like 或 Jagged 配体结合其胞外结构域，并在配体内吞过程中施加拉力，使负调控区（negative regulatory region，NRR）暴露 S2 位点；ADAM 蛋白酶切割后，$\gamma$-分泌酶再作 S3 膜内切割，释放 Notch 胞内结构域（Notch intracellular domain，NICD）。单分子力学与蛋白水解实验显示，生理可达的牵拉可把受保护的 S2 位点转换为可切割状态。[^notch-force]

NICD 进入细胞核后与 CSL／RBPJ、MAML 组成转录激活复合物。一个受体分子主要释放一个 NICD，因此 Notch 以直接接触、受力和蛋白周转传递邻细胞状态，缺少 kinase cascade 式的逐级酶放大。它与 cadherin 连接都发生在细胞接触面，但 Notch 专门通过受力暴露切割位点来传递信号。

## NF-$\kappa$B 与泛素门控的转录响应 { #nfkb-signaling }

核因子 $\kappa$B（nuclear factor-$\kappa$B，NF-$\kappa$B）家族蛋白形成多种二聚体。经典通路（canonical pathway）中，静息时 I$\kappa$B 把 NF-$\kappa$B 留在胞质；受体输入激活 IKK 复合体后，I$\kappa$B$\alpha$ 被磷酸化、由 SCF$^{\beta\text{-TrCP}}$ 泛素化并交给蛋白酶体，NF-$\kappa$B 随即进入细胞核。新生 I$\kappa$B$\alpha$ 又能从核内移走 NF-$\kappa$B，形成快速负反馈。非经典通路（noncanonical pathway）主要经 NIK、IKK$\alpha$ 和 p100 加工生成 p52–RelB，使用区别于经典通路的门控装置。

群体和单细胞实验显示，I$\kappa$B 反馈可使核内 NF-$\kappa$B 出现衰减、持续或振荡轨迹，刺激类别和持续方式由此影响靶基因选择。早期模块重构研究已经证明，改变 I$\kappa$B 家族反馈会改变时间轨迹和基因输出。[^nfkb-dynamics] 泛素依赖性蛋白水解、核质穿梭和转录反馈共同编码输入；免疫和炎症效应见[免疫学](../immunology/index.md)。

## 细胞内受体与可扩散气体 { #intracellular-receptors-gases }

核受体（nuclear receptor）通常含变化较大的 N 端激活结构域、保守的 C4 锌指 DNA 结合结构域、铰链区和 C 端配体结合结构域。糖皮质激素受体等类固醇受体可在无配体时与含 Hsp90 的复合物结合，配体使其重排并入核；甲状腺激素受体和视黄酸受体则常在无配体时已经结合 DNA 与共抑制因子。这两种主要静息策略分别适用于不同家族成员。核受体识别 DNA 后仍须与其他转录因子及染色质调节器协作，因此相同受体在不同细胞中控制的基因集合也会不同。[^signaling-overview]

一氧化氮合酶（nitric oxide synthase，NOS）从精氨酸生成一氧化氮（nitric oxide，NO）；NO 在受调节的合成后短距离扩散。靶细胞胞质中的可溶性鸟苷酸环化酶（soluble guanylyl cyclase，sGC）以血红素感受 NO 并生成 cGMP，随后由蛋白激酶 G（protein kinase G，PKG）、环核苷酸门控通道（cyclic nucleotide-gated channel）或 PDE 等读取和终止。NO 的短寿命、合成位置和清除共同限制其作用范围。血管舒缩等组织效应见[内皮与血管旁分泌调节](../physiology/blood/blood_regulation.md#endothelial-and-kinin-control)，胞质 sGC 则是 NO 的受体和第一读取器。[^no-sgc]

## 整联蛋白的力学—生化耦联 { #integrin-signaling }

integrin 的 outside-in signaling 可在配体结合和受力后招募 talin、kindlin、FAK、Src、paxillin 等蛋白，并接入 Rho GTPase、Ras–ERK 与 PI3K–AKT；inside-out signaling 又由胞内调节使 integrin 胞外结构域提高配体结合能力。FAK 与 Src 的激活、互相磷酸化和 docking protein 招募构成并行且反馈的复合过程。黏着斑的[承力结构](cell_interactions.md#load-bearing-adhesions)因而也是局部信号平台。

integrin 输入会与可溶性生长因子受体协同：配体、基质刚度、骨架张力和受体运输共同决定某些细胞能否维持生长或迁移。细胞脱离适当基质后可能发生 anoikis，悬浮细胞和不同组织则具有各自的生存程序。机械输入改变 mTORC1 和翻译时，磷酸化 S6 是通路活动的读出，其转录本选择仍需独立检验。

## 空间与时间共同编码信号 { #spatiotemporal-coding }

通路图中的分子还受到相遇位置约束。PI(4,5)P$_2$、PIP$_3$ 和 DAG 被限制在特定膜叶，Ca$^{2+}$ 可在通道口形成微域，AKAP 把 cAMP 酶固定在局部，初级纤毛把 Hedgehog 组分压缩到狭小表面。受体内吞后也可继续发出信号：部分受体—效应器复合物在早期内体产生空间上不同的信号，随后才在回收与溶酶体降解之间分流。相关膜交通见[内体回收与成熟](endomembrane.md#endosomal-sorting)。

时间结构同样携带信息。一个短促高峰、一个低水平持续信号和等总面积的间歇脉冲，可以因 phosphatase、反馈、转录因子停留时间与靶标周转不同而产生不同结果。Ca$^{2+}$ 频率、ERK 脉冲和 NF-$\kappa$B 振荡是可直接成像的例子；激素的脉冲与昼夜节律则在更长尺度上重复同一原则，见[激素分泌的脉冲与节律](../physiology/endo/index.md#temporal-coding)。通路身份、信号强度和持续时间共同参与细胞决策。

## 衰减、终止与适应 { #signal-attenuation }

可响应系统持续清除自己的活化状态。phosphatase 去除蛋白磷酸基，GAP 加速 GTP 水解，PDE 降解环核苷酸，SERCA／PMCA 等泵恢复 Ca$^{2+}$ 梯度，PTEN 消除 PIP$_3$，泛素系统则改变受体和效应器的寿命。短寿命中间体需要持续合成才能维持高水平，也因而能在输入撤去后迅速下降。

GPCR 可被 G 蛋白偶联受体激酶（G protein-coupled receptor kinase，GRK）磷酸化并结合 $\beta$-抑制蛋白（$\beta$-arrestin），后者既阻断进一步的 G 蛋白偶联，又连接 clathrin／AP-2 装置促进内吞；$\beta_2$ 肾上腺素能受体的实验直接确立了 arrestin 的适配功能。[^arrestin-endocytosis] 内吞后的受体可被去磷酸化并回收，或被泛素化后送往溶酶体。RTK 也可通过内吞、phosphatase、Ras GAP 和诱导型抑制因子衰减。受体内吞的膜形变入口见[受体介导内吞](membrane_transport.md#receptor-mediated-endocytosis)，后续去向则由内体网络决定。

持续刺激时，受体数量、偶联效率或下游增益可下降，使输出回到接近基线，同时保留对新变化的敏感性；负反馈还可能产生脉冲和振荡。正反馈、染色质重塑或稳定蛋白网络则可让短暂输入留下较长记忆。终止、适应与记忆是同一网络在不同时间尺度上的结果。

## 从通路图到因果证据 { #signaling-evidence }

磷酸化免疫印迹、报告基因或终点 RNA 测序（RNA sequencing，RNA-seq）能说明通路某处发生了变化。要确定信号传播顺序，还需把位置、时间和必要性／充分性放在一起检验。

| 证据路线 | 能直接回答的问题 | 主要解释边界 |
| --- | --- | --- |
| 磷酸化特异性抗体、靶向蛋白质组学 | 哪些位点在何时改变 | 位点变化与酶活性需要分别测量，也会被细胞群平均掩盖 |
| 活细胞荧光共振能量转移（fluorescence resonance energy transfer，FRET）／转位传感器 | 单细胞中活性、位置和脉冲怎样变化 | 传感器表达量、动态范围和空间缓冲可能扰动系统 |
| 急性抑制剂、降解剂或光遗传学输入 | 某节点在特定时间是否必要，特定动态是否足以驱动输出 | 药物脱靶、光输入几何和补偿路线必须有对照 |
| 免疫共沉淀、邻近标记与结构测定 | 分子能否接触以及界面如何组织 | 共现只显示接触可能，稳定结构也可能漏掉瞬态状态 |
| 单细胞转录组／报告系统与谱系追踪 | 异质轨迹怎样连接长期命运 | 相关性仍需扰动检验，单时间点快照需结合真实轨迹 |
| 重构与定量建模 | 最小组分是否足以产生开关、放大或振荡 | 参数可辨识性及缺失的细胞几何限制外推 |

例如，固定时间点的群体平均 phospho-ERK 容易把异步脉冲平滑成“持续低水平”；活细胞传感器揭示轨迹后，还需用受控脉冲、急性扰动和下游命运读出检验这些轨迹是否具有因果意义。信号研究最终要确定何种分子状态在何处、以何种时间结构，足以改变哪一个细胞过程。

## 参考资料与延伸阅读 { #references }

[^signaling-overview]: 细胞通信距离、受体背景、第二信使、核受体、NO 及通路反馈的基础框架见 Alberts 等的[细胞通信一般原理](https://www.ncbi.nlm.nih.gov/books/NBK26813/)。
[^osm-cell-signaling]: 组织结构实质性改编自 osm.bio《[第十五章 细胞信号转导](https://osm.bio/index.php?oldid=11867&title=第十五章_细胞信号转导)》固定版本，贡献者包括 Tsusha、长河、Astelle、Sofia，原文按 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans) 许可；相关内容经教材和所列研究交叉核验。
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
