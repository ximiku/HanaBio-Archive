# 核苷酸生物合成

核苷酸池同时服务核酸合成、能量转换、信号传递、糖脂活化和辅酶构建。三磷酸腺苷（ATP）和三磷酸鸟苷（GTP）参与能量转换与信号，三磷酸尿苷（UTP）和三磷酸胞苷（CTP）用于生成活化的糖与脂质前体，腺苷酸结构还嵌入烟酰胺腺嘌呤二核苷酸（NAD）、黄素腺嘌呤二核苷酸（FAD）和辅酶A（CoA）。细胞必须同时调节碱基种类、核糖与脱氧核糖形式以及磷酸化层级；总量不足会限制核糖核酸（RNA）、脱氧核糖核酸（DNA）和辅酶合成，比例失衡则会提高聚合酶错配和基因组损伤的风险。

这些分子来自两套互补路线：从氨基酸、一碳单位、HCO$_3^-$和核糖-5-磷酸逐步装配的从头合成，以及重新利用碱基或核苷的回收合成。二者与[核酸降解及核苷酸分解](na_catabolism.md#catabolism-salvage-balance)共享底物，并由5-磷酸核糖-1-焦磷酸（PRPP）、终产物反馈、细胞周期、区室转运和核苷酸降解共同塑造实际通量。[^nucleotide-biosynthesis-overview]

## PRPP 共享入口 { #prpp-junction }

[磷酸戊糖途径](ppp.md#biosynthetic-roles)提供核糖-5-磷酸，PRPP合成酶（ribose-phosphate pyrophosphokinase，PRPS）再把ATP的焦磷酸基转移给它：

$$
\text{核糖-5-磷酸}+\mathrm{ATP}
\longrightarrow \mathrm{PRPP}+\mathrm{AMP}
$$

PRPP的C1带有易离去的焦磷酸基，因而能把核糖磷酸高效交给含氮碱基或让其接受氮亲核体。它不仅进入嘌呤和嘧啶合成，也用于嘌呤回收、组氨酸合成以及烟酸、烟酰胺等前体向NAD汇合。ATP在反应中生成腺苷一磷酸（AMP），后续释放的焦磷酸（PP$_i$）继续水解，使这一活化过程付出两个高能磷酸键当量。[^prpp-synthesis]

PRPP是嘌呤、嘧啶、回收、组氨酸和 NAD前体合成共享的活化核糖节点。核糖-5-磷酸供应、ATP状态、PRPS同工酶活性和下游消耗都会改变其浓度；PRPP升高可以推动嘌呤承诺步骤并激活哺乳动物 CAD中的 CPS2，AMP、GMP、ADP和GDP等又在不同节点抑制入口。各入口的控制程度取决于给定细胞和底物条件，并随整张网络的状态改变。

## 嘌呤核苷酸合成 { #purine-nucleotide-synthesis }

### 嘌呤核苷酸从头合成 { #purine-de-novo }

嘌呤从头合成先把谷氨酰胺（Gln）的酰胺氮接到PRPP的C1，形成不稳定的5-磷酸核糖胺（PRA）；随后围绕已经存在的N-糖苷键逐步闭合双环。人体由六种蛋白质提供十项连续催化活性，依次经过甘氨酰胺核苷酸（GAR）、甲酰甘氨酰胺核苷酸（FGAR）、甲酰甘氨脒核苷酸（FGAM）、氨基咪唑核苷酸（AIR）、羧基氨基咪唑核苷酸（CAIR）、琥珀酰氨基咪唑甲酰胺核苷酸（SAICAR）、氨基咪唑甲酰胺核苷酸（AICAR）和甲酰氨基咪唑甲酰胺核苷酸（FAICAR），最终形成次黄嘌呤核苷酸（IMP）；其中GART、PAICS和ATIC是承担多步反应的多功能蛋白。[^human-purine-pathway]

| 组装区段 | 主要变化 | 人体催化蛋白 |
| --- | --- | --- |
| PRPP → PRA | Gln提供首个酰胺氮，PP$_i$离去；这是进入嘌呤从头合成的首个承诺反应 | PPAT |
| PRA → GAR → FGAR → FGAM → AIR | 依次接入 Gly、10-甲酰-THF和第二个 Gln酰胺氮，并首次闭合五元环 | GART、PFAS、GART |
| AIR → CAIR → SAICAR → AICAR | 加入 HCO$_3^-$/CO$_2$和 Asp，随后释放延胡索酸 | PAICS、ADSL |
| AICAR → FAICAR → IMP | 第二个 10-甲酰-THF提供一碳单位，随后闭合六元环 | ATIC |

环原子来自少数可追踪的供体；甘氨酸的羧基碳、$\alpha$-碳和氨基氮整体进入 C4、C5和 N7，而两个甲酰碳均由 10-甲酰-THF提供。叶酸载体先接纳并活化一碳单位，再把甲酰基转入嘌呤环。

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

若从核糖-5-磷酸起算，形成IMP共消耗五分子ATP：PRPS的一分子ATP生成AMP，另有四分子ATP生成ADP。把ATP→AMP及随后PP$_i$水解按两个高能键计入，总计为六个高能磷酸键当量。甘氨酸（Gly）、Gln、天冬氨酸（Asp）和一碳单位又分别连接[氨基酸合成](aa_synthesis.md#precursor-pathways)、线粒体碳流和[叶酸载体化学](vitamin_and_coenzyme.md#biotin-folate-one-carbon)，因此从头合成能力还取决于跨区室的前体与一碳单位供应。

从PRPP到IMP的催化步骤在人细胞中主要位于胞质，高通量状态下相关酶可形成与微管和线粒体邻近的动态、非膜性嘌呤合成体（purinosome）。其组装、凝聚和中间物通道化已有多种细胞与生化证据。不同组织和分化状态对从头合成与回收的依赖程度连续变化；脑、骨髓或血细胞中的特定细胞可偏重回收，同时保留不同程度的从头合成能力。[^purinosome-tissue-boundary]

### IMP 向 AMP 与 GMP 的分支 { #imp-branches }

IMP的次黄嘌呤环尚未决定最终走向。AMP支路先由腺苷琥珀酸合成酶（ADSS2）以Asp和GTP形成腺苷琥珀酸，再由腺苷琥珀酸裂解酶（ADSL）释放延胡索酸得到AMP。鸟苷一磷酸（GMP）支路先由IMP脱氢酶（IMPDH）以NAD$^+$把IMP氧化为黄嘌呤核苷酸（XMP），再由GMP合成酶（GMPS）以Gln酰胺氮完成氨化；后一反应使ATP变为AMP和PP$_i$。省略水和质子后，两支的主物质流可合并写为：[^imp-branch-reactions]

$$
\begin{aligned}
\mathrm{IMP}+\mathrm{Asp}+\mathrm{GTP}
&\longrightarrow \mathrm{AMP}+\text{延胡索酸}+\mathrm{GDP}+\mathrm{P_i}\\
\mathrm{IMP}+\mathrm{NAD^+}+\mathrm{Gln}+\mathrm{ATP}
&\longrightarrow \mathrm{GMP}+\mathrm{NADH}+\mathrm{Glu}+\mathrm{AMP}+\mathrm{PP_i}
\end{aligned}
$$

AMP支路使用 GTP，GMP支路使用 ATP，这种交叉供能有助于让一类嘌呤核苷三磷酸的充足状态支持另一类的补充。AMP、GMP及其更高磷酸化形式还能反馈入口或本支路；分支点酶、PRPP供应、回收底物和核苷酸互变共同分担对嘌呤比例的控制。

### 嘌呤回收合成 { #purine-salvage }

次黄嘌呤-鸟嘌呤磷酸核糖基转移酶（HGPRT）把次黄嘌呤或鸟嘌呤与PRPP连接，分别生成IMP或GMP；腺嘌呤磷酸核糖基转移酶（APRT）以同样方式把腺嘌呤回收为AMP。腺苷还可由腺苷激酶直接磷酸化。与重新搭建整个嘌呤环相比，这些反应只需一次磷酸核糖基转移或磷酸化，因而在可利用碱基、核苷充足时具有明显能量优势。[^purine-salvage-enzymes]

$$
\begin{aligned}
\text{次黄嘌呤}+\mathrm{PRPP}&\rightleftharpoons \mathrm{IMP}+\mathrm{PP_i}\\
\text{鸟嘌呤}+\mathrm{PRPP}&\rightleftharpoons \mathrm{GMP}+\mathrm{PP_i}\\
\text{腺嘌呤}+\mathrm{PRPP}&\rightleftharpoons \mathrm{AMP}+\mathrm{PP_i}
\end{aligned}
$$

HPRT1功能严重缺失时，次黄嘌呤和鸟嘌呤回收减少，PRPP消耗降低，IMP／GMP对从头入口的反馈也减弱；增加的嘌呤合成与未回收碱基的分解共同造成尿酸生成过多。Lesch–Nyhan病的运动和行为表型还涉及独立于尿酸浓度的神经代谢改变，具体机制与临床处理见[糖与能量代谢紊乱](../physiology/pathophysiology/metabolic_disorders.md)。PRPS1活性增高也可通过扩大PRPP供应造成嘌呤过量，说明回收缺陷和入口过强可以从不同方向改变同一网络。[^hprt-deficiency]

## 嘧啶核苷酸合成 { #pyrimidine-nucleotide-synthesis }

### 嘧啶核苷酸从头合成 { #pyrimidine-de-novo }

嘧啶从头合成采用与嘌呤不同的装配次序：先用Gln、HCO$_3^-$、Asp形成六元环，再把乳清酸接到PRPP。人和其他动物的前三项活性融合在胞质多功能蛋白CAD中：氨甲酰磷酸合成酶2（CPS2）消耗两分子ATP，以Gln的酰胺氮和HCO$_3^-$生成氨甲酰磷酸；天冬氨酸氨甲酰转移酶（ATCase）加入Asp形成氨甲酰天冬氨酸；二氢乳清酸酶（DHOase）脱水闭环为二氢乳清酸。[^cad-reactions]

二氢乳清酸随后到达线粒体内膜，由含黄素单核苷酸（FMN）的二氢乳清酸脱氢酶（DHODH）氧化为乳清酸，电子交给泛醌并形成泛醇。乳清酸回到胞质后，由双功能尿苷一磷酸合成酶（UMPS）先以PRPP形成乳清苷酸（OMP），再脱羧生成尿苷一磷酸（UMP）。人类通路由此跨越胞质与线粒体内膜，DHODH的电子沿FMN—泛醌路线传递。[^dhodh-umps]

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

UMP依次由核苷酸一磷酸激酶和二磷酸激酶升为尿苷二磷酸（UDP）和UTP；CTP合成酶再消耗ATP，以Gln为氮源把UTP氨化为CTP。人CAD的CPS2活性受UTP反馈抑制、PRPP变构激活，并可被生长信号相关磷酸化调节；CTP又抑制CTP合成酶。细菌常把ATCase作为显著调控节点，其分离酶系与变构配体不同于动物CAD。[^pyrimidine-regulation]

UMPS双等位功能缺陷会阻断乳清酸向 UMP的两步转化，产生遗传性乳清酸尿症。尿中乳清酸升高也可来自尿素循环中 OTC缺陷造成的线粒体氨甲酰磷酸外溢，两者的氨状态和血液学表现不同；单凭一个代谢物不能跳过通路定位做诊断。[^orotic-aciduria]

### 嘧啶核苷回收 { #pyrimidine-salvage }

人细胞可由尿苷—胞苷激酶将尿苷和胞苷分别磷酸化为UMP和胞苷一磷酸（CMP），也可由胞质胸苷激酶1（TK1）或线粒体胸苷激酶2（TK2）回收胸苷；脱氧胞苷激酶（dCK）、脱氧鸟苷激酶（DGUOK）等补充其他脱氧核苷酸。核苷激酶消耗核苷三磷酸，核苷磷酸化酶则以P$_i$在核苷与“碱基＋戊糖-1-磷酸”之间可逆反应，两者具有不同的底物和产物。[^pyrimidine-salvage-kinases]

许多细菌和真核微生物具有尿嘧啶磷酸核糖转移酶，可用尿嘧啶和 PRPP直接生成 UMP；人类嘧啶回收则主要使用核苷激酶。磷酸化酶、磷酸核糖转移酶和激酶的底物与能量账本不同，应分别书写相应反应。

## 脱氧核苷酸合成 { #deoxyribonucleotide-synthesis }

### 核糖核苷酸还原酶与 dNTP 生成 { #ribonucleotide-reductase }

人体I类核糖核苷酸还原酶（RNR）由RRM1大亚基与RRM2或RRM2B小亚基协作，把腺苷、鸟苷、胞苷和尿苷二磷酸（ADP、GDP、CDP和UDP）的2′-羟基还原为相应脱氧核苷二磷酸（dNDP）。小亚基金属—氧中心产生稳定自由基，长程自由基转移启动RRM1活性位点的硫自由基化学；催化半胱氨酸被氧化后，再由硫氧还蛋白或谷氧还蛋白系统还原。NADPH位于上游还原链，通过蛋白质电子载体向RNR供电子，而非直接与核苷酸反应。[^human-rnr]

RNR还必须控制四种底物的比例。活性位点附近的底物特异性位点结合ATP、脱氧三磷酸腺苷（dATP）、脱氧三磷酸胸苷（dTTP）或脱氧三磷酸鸟苷（dGTP），依配体改变优先还原的NDP；另一个总体活性位点读取ATP／dATP比例，高dATP可关闭整体活性。这种调节使新形成的dNDP与既有脱氧核苷三磷酸（dNTP）池相互校准。随后NDP激酶把dNDP磷酸化为dNTP；合成、回收、消耗和SAMHD1等水解反应共同决定最终池大小。[^rnr-allostery]

三类 RNR采用不同的自由基来源与氧依赖方式。I类以金属—氧化学建立自由基，真核生物采用这一类；II类以腺苷钴胺素产生自由基，对 O$_2$本身不敏感；III类由自由基 SAM激活酶和 $[4\mathrm{Fe}-4\mathrm{S}]$簇建立甘氨酰自由基，通常只在厌氧条件工作。各类内部还包括不同亚型、金属配置和 NDP／NTP底物偏好。[^rnr-classes]

### dTMP 合成与叶酸循环 { #thymidylate-synthesis }

脱氧胸苷一磷酸（dTMP）由脱氧尿苷一磷酸（dUMP）接受5,10-亚甲基四氢叶酸（5,10-亚甲基-THF）的一碳单位形成。RNR产生的dUDP可经磷酸化为dUTP，再由dUTPase水解为dUMP；dCMP也可经脱氨生成dUMP。dUTPase一面提供dUMP，一面压低dUTP／dTTP比，减少DNA聚合酶误掺尿嘧啶。胸苷酸合成酶（TYMS）随后完成一碳单位转移与还原，形成dTMP和二氢叶酸（DHF）。[^thymidylate-cycle]

$$
\mathrm{dUMP}+5,10\text{-亚甲基-THF}
\longrightarrow \mathrm{dTMP}+\mathrm{DHF}
$$

二氢叶酸还原酶（DHFR）以NADPH把DHF还原回四氢叶酸（THF），丝氨酸羟甲基转移酶等再补充5,10-亚甲基-THF，构成胸苷酸—叶酸循环。另一方面，TK1在增殖细胞胞质中回收胸苷，TK2在线粒体内回收胸苷和脱氧胞苷；线粒体DNA可在细胞周期各期复制，因而还依赖RRM2B支持的胞质从头供给、线粒体回收和跨膜运输。[^dntp-compartments]

## 核苷酸合成靶点与抗代谢物 { #antimetabolite-boundaries }

核苷酸合成节点能放大增殖细胞对底物短缺的敏感性。结构类似物的作用还取决于摄取、酶促活化、分解、靶酶同工型和DNA／RNA掺入；下表比较生化作用点，适应证、剂量和联合用药须依据现行临床指南。

| 化合物或类别 | 主要生化节点 | 必须保留的边界 |
| --- | --- | --- |
| 甲氨蝶呤；甲氧苄啶 | 分别偏向抑制哺乳动物和细菌DHFR，限制THF再生 | 物种选择性存在剂量与酶型边界，药效还受药代与细胞环境影响 |
| 5-氟尿嘧啶 | 代谢为5-氟脱氧尿苷一磷酸（FdUMP）后，与TYMS、5,10-亚甲基-THF形成稳定共价三元复合物 | 其他代谢物还可进入RNA或DNA，整体作用超过单一TYMS抑制 |
| 6-巯基嘌呤等硫嘌呤 | 先经HGPRT等活化为硫代核苷酸，再影响嘌呤合成与核酸代谢 | HGPRT在此参与药物活化，随后才出现多靶点代谢效应 |
| 羟基脲 | 破坏I类RNR小亚基自由基，降低dNTP供给 | II、III类RNR使用不同自由基生成体系 |
| 核苷类似物 | 经特定激酶逐级活化后抑制聚合酶、造成链终止或扰乱核苷酸池 | 叠氮胸苷（AZT）、阿糖胞苷等具有不同的激活酶和主要靶点 |

FdUMP—TYMS复合物的形成具有时间依赖性和缓慢可逆特征；把 5-FU直接称为胸苷酸合成酶的“不可逆底物”同样不准确。重氮丝氨酸等 Gln类似物又能影响多种谷氨酰胺酰胺转移酶，实验中观察到核苷酸下降时，仍须排除更广泛的氮代谢和毒性效应。

Hadacidin（羽田杀菌素）是 Asp类似物，可在实验体系中竞争性抑制腺苷琥珀酸合成酶；麦芽酚镓则通过扰乱铁稳态和线粒体功能，在特定肿瘤模型中降低含铁 RRM2的活性。前者适合作为特定分支酶的实验探针，后者对 RNR的影响具有细胞和铁代谢背景，二者都不宜列作跨物种、跨体系的通用核苷酸合成抑制剂。[^antimetabolites]

## 核苷酸衍生辅酶 { #nucleotide-coenzymes }

NAD、FAD和CoA的合成把已经形成的核苷酸样模块与维生素来源前体连接。它们的电子或基团转移化学见[维生素与辅酶](vitamin_and_coenzyme.md#water-soluble-vitamin-coenzymes)，以下反应说明核苷酸部分怎样接入。

烟酸经烟酸磷酸核糖基转移酶（NAPRT）与PRPP形成烟酸单核苷酸（NaMN），色氨酸分解形成的喹啉酸也可由喹啉酸磷酸核糖基转移酶（QPRT）进入NaMN；烟酰胺则由烟酰胺磷酸核糖基转移酶（NAMPT）与PRPP形成烟酰胺单核苷酸（NMN）。烟酰胺／烟酸单核苷酸腺苷转移酶（NMNAT）使用ATP把NaMN或NMN腺苷化，分别形成烟酸腺嘌呤二核苷酸（NaAD）或NAD；前者还需NAD合成酶1（NADSYN1）以Gln和ATP酰胺化。NAD激酶再把NAD的腺苷核糖2′位磷酸化为NADP。NAD生物合成由色氨酸从头途径、Preiss–Handler途径和烟酰胺回收途径三个入口汇合。[^nad-biosynthesis]

核黄素先由核黄素激酶消耗 ATP形成 FMN，FAD合成酶 FLAD1再把 ATP的 AMP部分转给 FMN，生成 FAD并释放 PP$_i$。辅酶 A合成则从泛酸开始，经 PANK磷酸化、半胱氨酸接入与脱羧形成 4′-磷酸泛酰巯基乙胺；双功能 COASY最后先以 ATP腺苷化形成去磷酸-CoA，再以另一分子 ATP磷酸化为 CoA。两条路线都把 ATP来源的核苷酸部分接入维生素骨架，而 CoA 形成还需要末端的第二次磷酸化。[^flavin-coa-biosynthesis]

## 核苷酸池稳态 { #nucleotide-pool-homeostasis }

从头合成通常先产生一磷酸或二磷酸核苷酸，NMP激酶和 NDP激酶再把磷酸化层级与 ATP／GTP池耦联。RNA、DNA、糖基化、膜脂合成、能量转换和信号反应的需求不同，细胞也会通过核苷酸酶、脱氨酶、磷酸化酶和专一水解酶回收或清除过量组分。线粒体与胞质核苷酸池之间存在交换，但不同核苷、核苷酸和组织使用的转运与回收酶并不相同。

核苷酸稳态要求总量、碱基比例、核糖／脱氧核糖形式和磷酸化层级同时平衡。RNR或 dUTPase调节失灵、回收酶缺陷、叶酸循环受阻以及某一 NTP支路过强，都可能在总量尚可时造成比例失衡。可靠的通路判断需要同时观察同位素来源、多个磷酸化层级和消耗端；单个代谢物浓度只提供池量的一部分信息。[^dntp-homeostasis]

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
