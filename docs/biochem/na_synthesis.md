# 核苷酸生物合成

核苷酸池并不只为核酸复制服务。ATP、GTP参与能量转换和信号，UTP、CTP活化糖与脂质前体，腺苷酸结构还嵌入 NAD、FAD和辅酶 A。细胞必须同时调节碱基种类、核糖与脱氧核糖形式以及磷酸化层级；总量不足会限制 RNA、DNA和辅酶合成，比例失衡则会提高聚合酶错配和基因组损伤的风险。

这些分子来自两套互补路线：从氨基酸、一碳单位、HCO$_3^-$和核糖-5-磷酸逐步装配的**从头合成**，以及重新利用碱基或核苷的**回收合成**。二者与[核酸和核苷酸分解](na_catabolism.md#catabolism-salvage-balance)共享底物，并由 PRPP、终产物反馈、细胞周期、区室转运和核苷酸降解共同塑造实际通量。[^nucleotide-biosynthesis-overview]

## PRPP 把五碳糖送入多条合成路线 { #prpp-junction }

[磷酸戊糖途径](ppp.md#biosynthetic-roles)提供核糖-5-磷酸，PRPP合成酶（核糖-磷酸焦磷酸激酶，PRPS）再把 ATP的焦磷酸基转移给它：

$$
\text{核糖-5-磷酸}+\mathrm{ATP}
\longrightarrow \mathrm{PRPP}+\mathrm{AMP}
$$

PRPP的 C1带有易离去的焦磷酸基，因而能把核糖磷酸高效交给含氮碱基或让其接受氮亲核体。它不仅进入嘌呤和嘧啶合成，也用于嘌呤回收、组氨酸合成以及烟酸、烟酰胺等前体向 NAD汇合。由ATP生成AMP，并在后续反应释放且水解 PP$_i$，使这一活化过程付出两个高能磷酸键当量。[^prpp-synthesis]

PRPP因此是共享资源，而不是只属于某一条“核苷酸通路”的中间物。核糖-5-磷酸供应、ATP状态、PRPS同工酶活性和下游消耗都会改变其浓度；PRPP升高可以推动嘌呤承诺步骤并激活哺乳动物 CAD中的 CPS2，AMP、GMP、ADP和GDP等又在不同节点抑制入口。所谓限速酶只有在给定细胞和底物条件下才有意义，不能脱离整张网络指定唯一开关。

## 嘌呤环在 PRPP 上逐原子建造 { #purine-de-novo }

嘌呤从头合成先把谷氨酰胺的酰胺氮接到 PRPP的 C1，形成不稳定的 5-磷酸核糖胺（PRA）；随后才围绕已经存在的 N-糖苷键逐步闭合双环。人体由六种蛋白质提供十项连续催化活性，依次经过 GAR、FGAR、FGAM、AIR、CAIR、SAICAR、AICAR和 FAICAR，最终形成 IMP。多功能蛋白 GART、PAICS和 ATIC各承担不止一步，所以“十步反应”并不等于“十种独立酶”。[^human-purine-pathway]

| 组装区段 | 主要变化 | 人体催化蛋白 |
| --- | --- | --- |
| PRPP → PRA | Gln提供首个酰胺氮，PP$_i$离去；这是进入嘌呤从头合成的首个承诺反应 | PPAT |
| PRA → GAR → FGAR → FGAM → AIR | 依次接入 Gly、10-甲酰-THF和第二个 Gln酰胺氮，并首次闭合五元环 | GART、PFAS、GART |
| AIR → CAIR → SAICAR → AICAR | 加入 HCO$_3^-$/CO$_2$和 Asp，随后释放延胡索酸 | PAICS、ADSL |
| AICAR → FAICAR → IMP | 第二个 10-甲酰-THF提供一碳单位，随后闭合六元环 | ATIC |

环原子来自少数可追踪的供体；甘氨酸的羧基碳、$\alpha$-碳和氨基氮整体进入 C4、C5和 N7，而两个甲酰碳均由 10-甲酰-THF提供。把它们记成“甲酸盐直接进环”会跳过真正的叶酸载体。

| 环原子 | 嘌呤的供体 | 嘧啶的供体 |
| --- | --- | --- |
| N1 | Asp | Asp |
| C2 | 10-甲酰-THF | HCO$_3^-$ |
| N3 | Gln酰胺氮 | Gln酰胺氮 |
| C4、C5 | Gly | Asp |
| C6 | HCO$_3^-$/CO$_2$ | Asp |
| N7 | Gly | — |
| C8 | 10-甲酰-THF | — |
| N9 | Gln酰胺氮 | — |

若从核糖-5-磷酸起算，形成 IMP消耗一分子 ATP生成AMP，并有四分子 ATP生成ADP；把 ATP→AMP及随后 PP$_i$水解按两个高能键计入，总计为六个高能磷酸键当量。Gly、Gln、Asp和一碳单位又分别连接[氨基酸合成](aa_synthesis.md#precursor-pathways)、线粒体碳流和[叶酸载体化学](vitamin_and_coenzyme.md#biotin-folate-one-carbon)，所以从头合成能力不能从一张“全在胞质”的路线图单独推出。

从 PRPP到 IMP的催化步骤在人细胞中主要注释于胞质，但酶可在高通量状态下形成动态的 purinosome组装体，并与微管和线粒体邻近。其组装、凝聚和中间物通道化已有多种细胞与生化证据，仍不宜把它画成始终存在、有固定膜边界的细胞器。不同组织和分化状态对从头合成与回收的依赖也连续变化；脑、骨髓或血细胞中某些细胞偏重回收，不等于整个器官绝对缺少从头路线。[^purinosome-tissue-boundary]

## IMP 分成 AMP 与 GMP 两条互相配平的支路 { #imp-branches }

IMP的次黄嘌呤环尚未决定最终走向。AMP支路先由腺苷琥珀酸合成酶以 Asp和 GTP形成腺苷琥珀酸，再由腺苷琥珀酸裂解酶释放延胡索酸得到 AMP。GMP支路先由 IMP脱氢酶以 NAD$^+$把 IMP氧化为 XMP，再由 GMP合成酶以 Gln酰胺氮完成氨化；后一反应使 ATP变为 AMP和 PP$_i$。省略水和质子后，两支的主物质流可合并写为：[^imp-branch-reactions]

$$
\begin{aligned}
\mathrm{IMP}+\mathrm{Asp}+\mathrm{GTP}
&\longrightarrow \mathrm{AMP}+\text{延胡索酸}+\mathrm{GDP}+\mathrm{P_i}\\
\mathrm{IMP}+\mathrm{NAD^+}+\mathrm{Gln}+\mathrm{ATP}
&\longrightarrow \mathrm{GMP}+\mathrm{NADH}+\mathrm{Glu}+\mathrm{AMP}+\mathrm{PP_i}
\end{aligned}
$$

AMP支路使用 GTP，GMP支路使用 ATP，这种交叉供能有助于让一类嘌呤核苷三磷酸的充足状态支持另一类的补充。AMP、GMP及其更高磷酸化形式还能反馈入口或本支路；分支点酶、PRPP供应、回收底物和核苷酸互变共同维持比例，而不是由 PPAT一个节点独占全部控制。

## 回收反应节省能量并反馈从头合成 { #purine-salvage }

HGPRT把次黄嘌呤或鸟嘌呤与 PRPP连接，分别生成 IMP或 GMP；APRT以同样方式把腺嘌呤回收为 AMP。腺苷还可由腺苷激酶直接磷酸化。与重新搭建整个嘌呤环相比，这些反应只需一次磷酸核糖基转移或磷酸化，因而在可利用碱基、核苷充足时具有明显能量优势。[^purine-salvage-enzymes]

$$
\begin{aligned}
\text{次黄嘌呤}+\mathrm{PRPP}&\rightleftharpoons \mathrm{IMP}+\mathrm{PP_i}\\
\text{鸟嘌呤}+\mathrm{PRPP}&\rightleftharpoons \mathrm{GMP}+\mathrm{PP_i}\\
\text{腺嘌呤}+\mathrm{PRPP}&\rightleftharpoons \mathrm{AMP}+\mathrm{PP_i}
\end{aligned}
$$

HPRT1功能严重缺失时，次黄嘌呤和鸟嘌呤不能正常回收，PRPP消耗减少，IMP／GMP对从头入口的反馈也减弱；增加的嘌呤合成与未回收碱基的分解共同造成尿酸生成过多。Lesch–Nyhan病的运动和行为表型不能仅由尿酸升高解释，具体神经机制与临床处理应留给相应疾病页面。PRPS1活性增高也可通过扩大 PRPP供应造成嘌呤过量，说明“回收缺陷”和“入口过强”可以从不同方向改变同一网络。[^hprt-deficiency]

## 嘧啶环先形成，再与 PRPP 连接 { #pyrimidine-de-novo }

嘧啶从头合成采用相反的装配次序：先用 Gln、HCO$_3^-$、Asp形成六元环，再把乳清酸接到 PRPP。人和其他动物的前三项活性融合在胞质多功能蛋白 CAD中：CPS2消耗两分子 ATP，以 Gln的酰胺氮和 HCO$_3^-$生成氨甲酰磷酸；ATCase加入 Asp形成氨甲酰天冬氨酸；DHOase脱水闭环为二氢乳清酸。[^cad-reactions]

二氢乳清酸随后到达线粒体内膜，由含 FMN的二氢乳清酸脱氢酶 DHODH氧化为乳清酸，电子交给泛醌并形成泛醇。乳清酸回到胞质后，由双功能 UMP合成酶 UMPS先以 PRPP形成 OMP，再脱羧生成 UMP。因而人类通路跨越胞质与线粒体内膜，旧式反应式把 NAD$^+$、FAD和 FMN同时列成 DHODH游离反应物，并不能表示实际电子路线。[^dhodh-umps]

$$
\begin{aligned}
\mathrm{Gln}+\mathrm{HCO_3^-}+2\,\mathrm{ATP}
{}+\mathrm{H_2O}
&\longrightarrow \text{氨甲酰磷酸}+\mathrm{Glu}+2\,\mathrm{ADP}+\mathrm{P_i}+2\,\mathrm{H^+}\\
\text{二氢乳清酸}+\mathrm{CoQ}
&\longrightarrow \text{乳清酸}+\mathrm{CoQH_2}\\
\text{乳清酸}+\mathrm{PRPP}
&\longrightarrow \mathrm{OMP}+\mathrm{PP_i}
\longrightarrow \mathrm{UMP}+\mathrm{CO_2}
\end{aligned}
$$

UMP依次由核苷酸一磷酸激酶和二磷酸激酶升为 UDP、UTP；CTP合成酶再消耗 ATP，以 Gln为氮源把 UTP氨化为 CTP。人 CAD的 CPS2活性受 UTP反馈抑制、PRPP变构激活，并可被生长信号相关磷酸化调节；CTP又抑制 CTP合成酶。细菌常把 ATCase作为显著调控节点，但其酶的分离方式和变构配体不能原样套到动物 CAD。[^pyrimidine-regulation]

UMPS双等位功能缺陷会阻断乳清酸向 UMP的两步转化，产生遗传性乳清酸尿症。尿中乳清酸升高也可来自尿素循环中 OTC缺陷造成的线粒体氨甲酰磷酸外溢，两者的氨状态和血液学表现不同；单凭一个代谢物不能跳过通路定位做诊断。[^orotic-aciduria]

## 嘧啶回收主要在核苷层级进行 { #pyrimidine-salvage }

人细胞可由尿苷—胞苷激酶将尿苷和胞苷分别磷酸化为 UMP和 CMP，也可由胞质 TK1或线粒体 TK2回收胸苷；dCK、DGUOK等激酶补充其他脱氧核苷酸。核苷激酶消耗核苷三磷酸，核苷磷酸化酶则以 P$_i$在核苷与“碱基＋戊糖-1-磷酸”之间可逆反应，两者的底物和产物不能混写。[^pyrimidine-salvage-kinases]

许多细菌和真核微生物具有尿嘧啶磷酸核糖转移酶，可用尿嘧啶和 PRPP直接生成 UMP；这不是人类嘧啶回收的通用主路。旧素材所列“尿嘧啶＋核糖-1-磷酸生成 UMP＋ADP”同时混入了磷酸化酶、磷酸核糖转移酶和激酶三类反应，应分别改写而不能平衡为一条方程。

## 核糖核苷酸还原酶建立脱氧核苷酸池 { #ribonucleotide-reductase }

人体 I类核糖核苷酸还原酶（RNR）由 RRM1大亚基与 RRM2或 RRM2B小亚基协作，把 ADP、GDP、CDP和 UDP的 2′-羟基还原为相应 dNDP。小亚基金属—氧中心产生稳定自由基，长程自由基转移启动 RRM1活性位点的硫自由基化学；催化半胱氨酸被氧化后，再由硫氧还蛋白或谷氧还蛋白系统还原。NADPH位于上游还原链，并非直接把氢化物交给核苷酸的 RNR结合辅酶。[^human-rnr]

RNR还必须控制四种底物的比例。活性位点附近的特异性位点结合 ATP、dATP、dTTP或 dGTP，依配体改变优先还原的 NDP；另一个活性位点读取 ATP／dATP比例，高 dATP可关闭整体活性。这种调节使新形成的 dNDP与既有 dNTP池相互校准。随后 NDP激酶把 dNDP磷酸化为 dNTP；合成、回收、消耗和 SAMHD1等水解反应共同决定最终池大小。[^rnr-allostery]

RNR的三类并不是一张“金属＋需氧性＋底物”口诀。I类以金属—氧化学建立自由基，真核生物采用这一类；II类以腺苷钴胺素产生自由基，对 O$_2$本身不敏感；III类由自由基 SAM激活酶和 $[4\mathrm{Fe}-4\mathrm{S}]$簇建立甘氨酰自由基，通常只在厌氧条件工作。各类内部仍有亚型、不同金属配置和 NDP／NTP底物差异，某一种细菌的配置不能代表整个类群。[^rnr-classes]

## dTMP 合成把 RNR、叶酸循环和回收接在一起 { #thymidylate-synthesis }

dTMP不是由胸腺嘧啶环从头独立组装。RNR产生的 dUDP可经磷酸化为 dUTP，再由 dUTPase水解为 dUMP；dCMP也可经脱氨生成 dUMP。dUTPase一面提供 dUMP，一面压低 dUTP／dTTP比，减少 DNA聚合酶误掺尿嘧啶。胸苷酸合成酶（TYMS）随后把 5,10-亚甲基-THF的一碳单位转给 dUMP并将其还原，形成 dTMP和二氢叶酸。[^thymidylate-cycle]

$$
\mathrm{dUMP}+5,10\text{-亚甲基-THF}
\longrightarrow \mathrm{dTMP}+\mathrm{DHF}
$$

二氢叶酸还原酶（DHFR）以 NADPH把 DHF还原回 THF，丝氨酸羟甲基转移酶等再补充 5,10-亚甲基-THF，构成胸苷酸—叶酸循环。另一方面，TK1在增殖细胞胞质中回收胸苷，TK2在线粒体内回收胸苷和脱氧胞苷；线粒体 DNA不局限于 S期复制，因而还依赖 RRM2B支持的胞质从头供给、线粒体回收和跨膜运输。[^dntp-compartments]

## 抗代谢物作用于不同层级而非同一种“合成抑制” { #antimetabolite-boundaries }

核苷酸合成节点能放大增殖细胞对底物短缺的敏感性，但结构类似并不等于直接抑制同一个酶。药物还涉及摄取、酶促活化、分解、靶酶同工型和 DNA／RNA掺入；下面只比较生化作用点，不提供适应证、剂量或联合用药建议。

| 化合物或类别 | 主要生化节点 | 必须保留的边界 |
| --- | --- | --- |
| 甲氨蝶呤；甲氧苄啶 | 分别偏向抑制哺乳动物和细菌 DHFR，限制 THF再生 | 物种选择性不是绝对，药效也不只由体外 $K_i$决定 |
| 5-氟尿嘧啶 | 代谢为 FdUMP后与 TYMS、5,10-亚甲基-THF形成稳定共价三元复合物 | 不是简单的“$k_{cat}$型抑制”；其他代谢物还可进入 RNA或 DNA |
| 6-巯基嘌呤等硫嘌呤 | 先经 HPRT等活化为硫代核苷酸，再影响嘌呤合成与核酸代谢 | 不能概括为直接抑制 HGPRT；HGPRT在这里参与药物活化 |
| 羟基脲 | 破坏 I类 RNR小亚基自由基，降低 dNTP供给 | 不代表 II、III类 RNR具有相同靶点 |
| 核苷类似物 | 经特定激酶逐级活化后抑制聚合酶、造成链终止或扰乱核苷酸池 | AZT、阿糖胞苷等的激活酶和主要靶点不同，不能作为单一机制类 |

FdUMP—TYMS复合物的形成具有时间依赖性和缓慢可逆特征；把 5-FU直接称为胸苷酸合成酶的“不可逆底物”同样不准确。重氮丝氨酸等 Gln类似物又能影响多种谷氨酰胺酰胺转移酶，实验中观察到核苷酸下降时，仍须排除更广泛的氮代谢和毒性效应。

Hadacidin（羽田杀菌素）是 Asp类似物，可在实验体系中竞争性抑制腺苷琥珀酸合成酶；麦芽酚镓则通过扰乱铁稳态和线粒体功能，在特定肿瘤模型中降低含铁 RRM2的活性。前者适合作为特定分支酶的实验探针，后者对 RNR的影响具有细胞和铁代谢背景，二者都不宜列作跨物种、跨体系的通用核苷酸合成抑制剂。[^antimetabolites]

## 核苷酸结构也被嵌入多种辅酶 { #nucleotide-coenzymes }

“核苷酸辅酶”不是另一套碱基从头合成，而是把已经形成的核苷酸样模块与维生素来源前体结合。它们的电子或基团转移化学见[维生素与辅酶](vitamin_and_coenzyme.md#water-soluble-vitamin-coenzymes)，这里关注核苷酸部分怎样接入。

烟酸经 NAPRT与 PRPP形成 NaMN，色氨酸分解形成的喹啉酸也可由 QPRT进入 NaMN；烟酰胺则由 NAMPT与 PRPP形成 NMN。NMNAT使用 ATP把 NaMN或 NMN腺苷化，分别形成 NaAD或 NAD；前者还需 NADSYN1以 Gln和 ATP酰胺化。NAD激酶再把 NAD的腺苷核糖 2′位磷酸化为 NADP。因而 NAD可以来自从头、Preiss–Handler和回收入口，不应只画成“烟酸三步生成”。[^nad-biosynthesis]

核黄素先由核黄素激酶消耗 ATP形成 FMN，FAD合成酶 FLAD1再把 ATP的 AMP部分转给 FMN，生成 FAD并释放 PP$_i$。辅酶 A合成则从泛酸开始，经 PANK磷酸化、半胱氨酸接入与脱羧形成 4′-磷酸泛酰巯基乙胺；双功能 COASY最后先以 ATP腺苷化形成去磷酸-CoA，再以另一分子 ATP磷酸化为 CoA。原素材只写“泛酸、半胱氨酸、产生 PP$_i$”，遗漏了核苷酸部分的来源和第二次磷酸化。[^flavin-coa-biosynthesis]

## 核苷酸池由合成、互变、转运与消耗共同维持 { #nucleotide-pool-homeostasis }

从头合成通常先产生一磷酸或二磷酸核苷酸，NMP激酶和 NDP激酶再把磷酸化层级与 ATP／GTP池耦联。RNA、DNA、糖基化、膜脂合成、能量转换和信号反应的需求不同，细胞也会通过核苷酸酶、脱氨酶、磷酸化酶和专一水解酶回收或清除过量组分。线粒体与胞质核苷酸池之间存在交换，但不同核苷、核苷酸和组织使用的转运与回收酶并不相同。

因此，核苷酸稳态不能简化为“合成越多越好”。RNR或 dUTPase调节失灵、回收酶缺陷、叶酸循环受阻以及某一 NTP支路过强，都可能在总量尚可时造成比例失衡。可靠的通路判断需要同时观察同位素来源、多个磷酸化层级和消耗端，而不能只凭单个代谢物浓度推断某条合成路线的通量。[^dntp-homeostasis]

## 参考资料与延伸阅读

- Reactome, [Nucleotide biosynthesis](https://reactome.org/content/detail/R-HSA-8956320)、[Purine ribonucleoside monophosphate biosynthesis](https://reactome.org/content/detail/R-HSA-73817)与[Pyrimidine biosynthesis](https://reactome.org/content/detail/R-HSA-500753)。
- Pareek, V., Pedley, A. M. & Benkovic, S. J., [Human de novo purine biosynthesis](https://pmc.ncbi.nlm.nih.gov/articles/PMC7869020/). *Critical Reviews in Biochemistry and Molecular Biology*, 2021。
- Moreno-Morcillo, M. et al., [Deciphering CAD: Structure and function of a mega-enzymatic pyrimidine factory in health and disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC8442968/). *Protein Science*, 2021。
- Ahmad, M. F. & Dealwis, C. G., [The Structural Basis for the Allosteric Regulation of Ribonucleotide Reductase](https://pmc.ncbi.nlm.nih.gov/articles/PMC4059395/). *Progress in Molecular Biology and Translational Science*, 2013。
- Dalle Vedove, A. et al., [Inherited Disorders of Coenzyme A Biosynthesis: Models, Mechanisms, and Treatments](https://pmc.ncbi.nlm.nih.gov/articles/PMC10054636/). *International Journal of Molecular Sciences*, 2023。

[^nucleotide-biosynthesis-overview]: 人类核苷酸从头合成的主要通路、参与物和区室见 Reactome [Nucleotide biosynthesis](https://reactome.org/content/detail/R-HSA-8956320)；核苷酸的化学层级与非核酸功能见本站[核酸与核苷酸](nucleic_acid.md#free-nucleotides)。
[^prpp-synthesis]: PRPS1反应、ATP生成AMP及 PRPP的通路归属见 UniProt [PRPS1／P60891](https://www.uniprot.org/uniprotkb/P60891/entry)；PRPP与 PPP、一碳及氨基酸来源的连接参见 Pareek等[人类嘌呤从头合成综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7869020/)。
[^human-purine-pathway]: 人体六种蛋白提供十项 PRPP→IMP催化活性的顺序见 Pareek等[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7869020/)与 Reactome [R-HSA-73817](https://reactome.org/content/detail/R-HSA-73817)；PPAT、GART、PFAS、PAICS、ADSL和 ATIC的反应注释可由该 Reactome通路逐项展开。
[^purinosome-tissue-boundary]: purinosome的组装、动态凝聚、通道化证据及其与线粒体邻近关系见 Pareek等[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7869020/)；组织对从头与回收路线的相对利用存在连续差异，参见 Tran等[跨组织同位素研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC11246224/)。
[^imp-branch-reactions]: AMP支路的 ADSS2与 GMP支路的 IMPDH2、GMPS反应分别见 UniProt [ADSS2／P30520](https://www.uniprot.org/uniprotkb/P30520/entry)、[IMPDH2／P12268](https://www.uniprot.org/uniprotkb/P12268/entry)和[GMPS／P49915](https://www.uniprot.org/uniprotkb/P49915/entry)。
[^purine-salvage-enzymes]: 次黄嘌呤／鸟嘌呤和腺嘌呤的磷酸核糖基转移反应见 UniProt [HPRT1／P00492](https://www.uniprot.org/uniprotkb/P00492/entry)与[APRT／P07741](https://www.uniprot.org/uniprotkb/P07741/entry)。
[^hprt-deficiency]: HPRT缺陷如何同时减少回收、提高 PRPP并减弱 IMP／GMP反馈，以及神经行为表型不能由尿酸单独解释，见 Jinnah等[Lesch–Nyhan表型综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3408650/)。
[^cad-reactions]: CAD的 Gln依赖 CPS2、ATCase、DHOase结构和前三步反应见 Moreno-Morcillo等[CAD综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8442968/)与 UniProt [CAD／P27708](https://www.uniprot.org/uniprotkb/P27708/entry)。
[^dhodh-umps]: 人体 DHODH位于线粒体内膜并把电子交给泛醌，见 Reactome [Pyrimidine biosynthesis](https://reactome.org/content/detail/R-HSA-500753)、Rhea [RHEA:28691](https://www.rhea-db.org/rhea/28691)与 UniProt [DHODH／Q02127](https://www.uniprot.org/uniprotkb/Q02127/entry)；OMP→UMP两项活性见 UniProt [UMPS／P11172](https://www.uniprot.org/uniprotkb/P11172/entry)。
[^pyrimidine-regulation]: 人 CAD的 UTP／PRPP变构调节、磷酸化调节及与细菌分离酶系的差异，见 Moreno-Morcillo等[CAD综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8442968/)；CTP合成反应见 UniProt [CTPS1／P17812](https://www.uniprot.org/uniprotkb/P17812/entry)。
[^orotic-aciduria]: UMPS双等位缺陷、乳清酸积累及与其他乳清酸尿原因的边界见 Wortmann等[UMPS杂合子与遗传性乳清酸尿症研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC5393157/)。
[^pyrimidine-salvage-kinases]: 代表性胞质和线粒体脱氧核苷回收反应见 UniProt [TK1／P04183](https://www.uniprot.org/uniprotkb/P04183/entry)、[TK2／O00142](https://www.uniprot.org/uniprotkb/O00142/entry)和[dCK／P27707](https://www.uniprot.org/uniprotkb/P27707/entry)。
[^human-rnr]: 人 RNR的 RRM1、RRM2／RRM2B组成和 NDP还原反应见 UniProt [RRM1／P23921](https://www.uniprot.org/uniprotkb/P23921/entry)、[RRM2／P31350](https://www.uniprot.org/uniprotkb/P31350/entry)与[RRM2B／Q7LG56](https://www.uniprot.org/uniprotkb/Q7LG56/entry)；自由基转移及硫氧还蛋白电子链参见 Ahmad与 Dealwis[结构综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4059395/)。
[^rnr-allostery]: RNR活性位点与特异性位点如何读取 ATP／dATP及不同 dNTP，见 Ahmad与 Dealwis[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4059395/)以及 Greene等[Convergent allostery in ribonucleotide reductase](https://pmc.ncbi.nlm.nih.gov/articles/PMC6572854/)。
[^rnr-classes]: I、II、III类 RNR的自由基生成体系、氧边界和跨物种分布见 Lundin等[Ribonucleotide reduction—horizontal transfer of a required function spans all three domains](https://pmc.ncbi.nlm.nih.gov/articles/PMC3019208/)。
[^thymidylate-cycle]: TYMS反应的标准方程见 Rhea [RHEA:12104](https://www.rhea-db.org/rhea/12104)与 UniProt [TYMS／P04818](https://www.uniprot.org/uniprotkb/P04818/entry)；DHFR和 dUTPase条目见 UniProt [DHFR／P00374](https://www.uniprot.org/uniprotkb/P00374/entry)与[DUT／P33316](https://www.uniprot.org/uniprotkb/P33316/entry)。
[^dntp-compartments]: 胞质 RNR、胞质 TK1／dCK、线粒体 TK2／DGUOK及跨膜交换对线粒体 dNTP池的贡献，见 [Mitochondrial DNA Instability in Mammalian Cells](https://pmc.ncbi.nlm.nih.gov/articles/PMC9127837/)。
[^antimetabolites]: FdUMP、TYMS和 5,10-亚甲基-THF形成稳定共价三元复合物，见 [Evaluating the drug-target relationship between thymidylate synthase expression and tumor response to 5-fluorouracil](https://pmc.ncbi.nlm.nih.gov/articles/PMC3081718/)；hadacidin对腺苷琥珀酸合成酶的竞争性抑制见 [PMC4869520](https://pmc.ncbi.nlm.nih.gov/articles/PMC4869520/)，麦芽酚镓在胶质母细胞瘤模型中的铁代谢和 RRM2效应见 [PMC5984712](https://pmc.ncbi.nlm.nih.gov/articles/PMC5984712/)。本节只概括生化靶点与实验边界，不替代临床药理资料。
[^nad-biosynthesis]: 人 NAD从色氨酸、烟酸、烟酰胺和烟酰胺核糖苷入口汇合的路线见 [The human NAD metabolome](https://pmc.ncbi.nlm.nih.gov/articles/PMC4673589/)；末端酰胺化和 NAD磷酸化反应见 UniProt [NADSYN1／Q6IA69](https://www.uniprot.org/uniprotkb/Q6IA69/entry)与[NADK／O95544](https://www.uniprot.org/uniprotkb/O95544/entry)，后者的标准方程亦见 Rhea [RHEA:18629](https://www.rhea-db.org/rhea/18629)。
[^flavin-coa-biosynthesis]: 核黄素激酶与 FAD合成酶分别见 UniProt [RFK／Q969G6](https://www.uniprot.org/uniprotkb/Q969G6/entry)和[FLAD1／Q8NFF5](https://www.uniprot.org/uniprotkb/Q8NFF5/entry)，FAD反应见 Rhea [RHEA:17237](https://www.rhea-db.org/rhea/17237)；人 CoA五步路线与 COASY最后两项活性见 Dalle Vedove等[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC10054636/)、UniProt [COASY／Q13057](https://www.uniprot.org/uniprotkb/Q13057/entry)及 Rhea [RHEA:19801](https://www.rhea-db.org/rhea/19801)、[RHEA:18245](https://www.rhea-db.org/rhea/18245)。
[^dntp-homeostasis]: dNTP从头合成、回收、分解和线粒体供应之间的平衡及其对 DNA稳定性的意义，见 [Mitochondrial DNA Instability in Mammalian Cells](https://pmc.ncbi.nlm.nih.gov/articles/PMC9127837/)与 Greene等[RNR变构综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6572854/)。
