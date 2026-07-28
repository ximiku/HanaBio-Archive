# 核酸降解与核苷酸分解代谢

核酸的降解不是把 DNA 和 RNA 一步“烧掉”，而是先拆除聚合物，再决定每个单体的去向。内切与外切核酸酶产生寡核苷酸和核苷酸，磷酸酶或核苷酸酶释放核苷；碱基和戊糖随后可以进入回收合成，也可以继续分解。分解与回收因此共享同一个核苷酸池，方向取决于组织、底物供应和细胞对特定核苷酸的需求。[^turnover-scope]

嘌呤环含氮而稳定，人体把腺嘌呤和鸟嘌呤支路汇入尿酸后排出，并不继续打开嘌呤环；多数其他哺乳动物和许多微生物则保留尿酸之后的反应。嘧啶环的命运不同：尿嘧啶和胸腺嘧啶先被还原，再水解开环，最后分别形成 $\beta$-丙氨酸和 $\beta$-氨基异丁酸。比较这两条路线时，不能把某一物种的末端产物或酶系推广为跨生物界的固定阶梯。

## 核酸先被拆成可回收的单体 { #nucleic-acid-depolymerization }

细胞外食物核酸、凋亡细胞释放的核酸和细胞内正常周转的核酸所处区室不同，但都要经历磷酸二酯键的逐级水解。核酸内切酶在链内切开，外切酶从既有末端逐个移除单体；不同 DNase、RNase 和溶酶体核酸酶对底物、末端与 pH 的要求并不相同。这里的任务是回收核苷酸，不应与 DNA 修复中只移除一个损伤碱基或一小段核苷酸的精密切除混为一谈。

核苷酸的磷酸基团使其难以自由跨膜，也妨碍核糖苷键直接接受下一步反应。5′-核苷酸酶把核苷一磷酸水解为核苷和正磷酸；底物可按嘌呤、嘧啶及区室由多种同工酶分担。核苷随后有三类主要去向：由核苷激酶消耗 ATP 重新磷酸化，由核苷磷酸化酶用正磷酸进行**磷酸解**，或由某些生物的核苷水解酶直接水解糖苷键。磷酸化酶使用的是无机磷酸并生成戊糖-1-磷酸，激酶则把 ATP 等供体的磷酰基转给核苷，二者不只是名称不同。[^monomer-release]

在人类嘌呤代谢中，嘌呤核苷磷酸化酶（PNP）可逆催化肌苷或鸟苷及其脱氧形式的磷酸解：

$$
\begin{aligned}
\text{肌苷}+\mathrm{P_i}
&\rightleftharpoons \text{次黄嘌呤}+\text{核糖-1-磷酸}\\
\text{鸟苷}+\mathrm{P_i}
&\rightleftharpoons \text{鸟嘌呤}+\text{核糖-1-磷酸}
\end{aligned}
$$

磷酸戊糖变位酶可把核糖-1-磷酸转为核糖-5-磷酸，使碳骨架接入[磷酸戊糖途径](ppp.md#nonoxidative-phase)。脱氧核糖-1-磷酸也须先变位为脱氧核糖-5-磷酸，后者才由 DERA 裂解为甘油醛-3-磷酸和乙醛；原素材省略了这一步而把“1-磷酸”直接写成醛缩酶底物。[^sugar-phosphate-fates]

## 嘌呤支路在次黄嘌呤和黄嘌呤处汇合 { #purine-branch-convergence }

腺嘌呤核苷酸有两条常见入口。AMP 可先被 AMP 脱氨酶转为 IMP，再去磷酸形成肌苷；也可先去磷酸形成腺苷，再由腺苷脱氨酶（ADA）生成肌苷。肌苷经 PNP 形成次黄嘌呤。因而“腺嘌呤先脱氨”只是对多层级反应的压缩，人类主线通常在核苷酸或核苷水平脱氨，并非游离腺嘌呤统一先变成次黄嘌呤。

GMP 则先去磷酸为鸟苷，经 PNP 形成鸟嘌呤；鸟嘌呤脱氨酶（GDA）把鸟嘌呤水解脱氨为黄嘌呤。两支在含氧条件下由同一黄嘌呤氧化还原酶（XOR，*XDH* 基因产物）继续处理：次黄嘌呤先羟化为黄嘌呤，黄嘌呤再羟化为尿酸盐。路线汇合在碱基层级，但上游可以在核苷酸、核苷和碱基之间由回收反应来回分流。[^purine-branches]

## XOR 把两次羟化与电子受体相连 { #xanthine-oxidoreductase }

XOR 每个亚基含一个 Mo-钼蝶呤中心、FAD 和两组 $[2\mathrm{Fe}-2\mathrm{S}]$ 簇。底物在钼中心被羟化，电子经铁硫簇传向 FAD；脱氢酶型 XDH 主要把 NAD$^+$ 还原为 NADH，氧化酶型 XO 则把电子交给 O$_2$，可形成 H$_2$O$_2$ 和超氧阴离子。蛋白水解或巯基氧化可改变两种形式的比例，所以把它简单称为“含 Mo、Fe 的黄嘌呤氧化酶”会漏掉 FAD、电子传递路线和酶型转换。[^xor-chemistry]

$$
\begin{aligned}
&\text{次黄嘌呤}+\mathrm{NAD^+}+\mathrm{H_2O}\\
&\qquad\rightarrow \text{黄嘌呤}+\mathrm{NADH}+\mathrm{H^+}\\[4pt]
&\text{黄嘌呤}+\mathrm{NAD^+}+\mathrm{H_2O}\\
&\qquad\rightarrow \text{尿酸盐}+\mathrm{NADH}+\mathrm{H^+}
\end{aligned}
$$

这里用 XDH 方向展示电子账本；XO 完成相同两次羟化时以 O$_2$ 为末端电子受体。尿酸氧化酶（uricase／UOX）也不是“铜酶”：已知反应不需要金属辅因子，先把尿酸氧化为 5-羟基异尿酸并产生 H$_2$O$_2$，随后还需 HIU 水解酶和 OHCU 脱羧酶形成尿囊素。把三步压成“尿酸直接生成尿囊素和 CO$_2$”会遮蔽真正的中间体和酶。[^urate-oxidation]

## 嘌呤环能否继续打开取决于物种 { #purine-species-boundaries }

人和其他人猿的 *UOX* 已失活，尿酸因而成为嘌呤环的主要终末产物。许多其他哺乳动物保留 UOX，可把尿酸转成更易溶的尿囊素；具有尿囊素酶、尿囊酸酶及下游酶的生物还能继续形成尿囊酸、尿素、乙醛酸，乃至 NH$_4^+$ 和 CO$_2$。这些酶在不同脊椎动物、无脊椎动物、植物、真菌和细菌中的丢失并不同步，终点也受组织和排氮生态影响。

因此，不能用“灵长类到尿酸、哺乳类到尿囊素、鱼类到尿素、低等生物到氨”的单线等级表。头足类等动物以鸟嘌呤参与体表反光或储氮，也不等于其全身嘌呤分解一律停在鸟嘌呤。可靠的比较应逐个物种检查 *UOX* 及下游基因、酶活性和实际排泄物，而不是从类群名称直接推出代谢终点。[^purine-evolution]

## 尿酸稳态同时受生成与排泄控制 { #urate-homeostasis }

在生理 pH 下，尿酸主要以尿酸盐存在。血浆尿酸盐由内源核酸周转、ATP 分解和食物嘌呤共同贡献；清除则依赖肾小球滤过、近端小管的重吸收与分泌，以及肠道排泄。肾近端小管顶端的 URAT1（SLC22A12）和基底外侧的 GLUT9（SLC2A9）参与重吸收，ABCG2 参与肾与肠上皮向腔面的外排。血尿酸升高既可能来自生成增多，也常与肾或肠排泄不足有关，不能只解释成“肝脏产生太多”。[^urate-transport]

当体液过饱和并形成单钠尿酸盐晶体时，晶体可触发先天免疫炎症并导致痛风；无症状高尿酸血症与痛风不是同义词。性别、年龄、绝经状态、肾功能、遗传变异和药物会共同改变风险。雌激素相关状态可增加尿酸清除并降低群体风险，但不能表述为“雌激素防止痛风”。具体诊断和药物选择属于临床问题，本页只讨论生化节点。

别嘌呤醇是次黄嘌呤的结构类似物，也是 XOR 的机制型底物。XOR 把它氧化为氧嘌呤醇；产物在还原态钼中心重新取向并形成紧密复合物，复合物随后可随酶再氧化而缓慢解离。因此它不是以 $k_{cat}$ 命名的简单永久不可逆抑制剂，也没有证据支持“与 PRPP 结合、阻止 PRPP 酰胺转移酶被激活”这一旧式解释。上游次黄嘌呤增加后可被 HGPRT 回收并消耗 PRPP，IMP／GMP 的反馈又能间接降低从头合成通量，但这与药物直接结合 PRPP 是两回事。[^allopurinol-mechanism]

## 嘌呤代谢缺陷会重塑脱氧核苷酸池 { #purine-catabolism-disorders }

ADA 同时作用于腺苷和脱氧腺苷。严重 ADA 缺乏时，脱氧腺苷被细胞激酶磷酸化，导致 dATP 等脱氧腺苷酸累积；高 dATP 抑制核糖核苷酸还原酶，破坏 DNA 前体平衡并损伤快速增殖的淋巴细胞。腺苷信号、甲基化代谢和线粒体等效应也会参与表型，不能把严重联合免疫缺陷（SCID）缩减为“dATP 关闭一种酶”的单因果链。[^ada-deficiency]

PNP 缺乏则使脱氧鸟苷等底物积累，继而增加 dGTP，并尤其损伤 T 细胞发育与存活。ADA 与 PNP 缺乏共同说明，核苷磷酸解并非只负责清除“废物”：某一入口受阻会同时改变底物、信号分子和整个脱氧核苷酸池。遗传诊断、酶替代、造血干细胞移植和基因治疗的适应证与风险由临床免疫学页面承接。[^pnp-deficiency]

## 嘧啶环经还原、水解和开环而被拆散 { #pyrimidine-ring-opening }

胞嘧啶核苷酸并不要求先在游离碱基层级脱氨。人细胞可由 dCMP 脱氨酶在核苷酸层级形成 dUMP，也可先去磷酸，再由胞苷脱氨酶把胞苷或脱氧胞苷转为尿苷或脱氧尿苷；核苷磷酸化酶随后释放尿嘧啶。底物层级随酶与组织而变，人体也没有一条由游离胞嘧啶脱氨酶统领全部嘧啶分解的通路。[^cytidine-entry]

尿嘧啶和胸腺嘧啶进入一套平行的三步还原分解。第一步由二氢嘧啶脱氢酶（DPD，*DPYD*）使用 NADPH 还原 C5—C6 双键；第二步由二氢嘧啶酶（DHP，*DPYS*）水解并打开环；第三步由 $\beta$-脲基丙酸酶（$\beta$-UP，*UPB1*）释放 CO$_2$ 和 NH$_4^+$。[^pyrimidine-pathway]

$$
\begin{aligned}
\text{尿嘧啶}
&\xrightarrow[\mathrm{NADPH}]{\mathrm{DPD}}
\text{二氢尿嘧啶}\\
&\xrightarrow[\mathrm{H_2O}]{\mathrm{DHP}}
\beta\text{-脲基丙酸}\\
&\xrightarrow[\mathrm{H_2O}]{\beta\text{-UP}}
\beta\text{-丙氨酸}+\mathrm{CO_2}+\mathrm{NH_4^+}\\[6pt]
\text{胸腺嘧啶}
&\xrightarrow[\mathrm{NADPH}]{\mathrm{DPD}}
\text{二氢胸腺嘧啶}\\
&\xrightarrow[\mathrm{H_2O}]{\mathrm{DHP}}
\beta\text{-脲基异丁酸}\\
&\xrightarrow[\mathrm{H_2O}]{\beta\text{-UP}}
(R)\text{-}\beta\text{-氨基异丁酸}+\mathrm{CO_2}+\mathrm{NH_4^+}
\end{aligned}
$$

Rhea 为可逆氧化还原反应登记的标准方程可写成“二氢嘧啶 + NADP$^+$ → 嘧啶 + NADPH”，但 *DPYD* 在人体分解通量中的生理方向是上述还原方向。原素材把 NAD(P)H 同时写在反应式两侧，既没有保存氢化物转移，也掩盖了这是耗用还原力的步骤。两种 $\beta$-氨基酸可排出，也可进一步进入碳代谢；是否称为“终产物”须说明所讨论的组织和物种。

## 药物清除暴露了嘧啶分解的临床边界 { #pyrimidine-clinical-boundaries }

DPD 也是 5-氟尿嘧啶（5-FU）分解的首个和主要限速酶，DHP 与 $\beta$-UP 继续处理其含氟中间物。*DPYD* 功能降低可显著减少 5-FU 清除并增加严重毒性风险；*DPYS* 或 *UPB1* 缺陷则分别积累二氢嘧啶或 N-氨甲酰-$\beta$-氨基酸，先天表型从无症状到神经系统异常均可出现。这里能够由生化通路直接解释的是“底物积累与药物清除能力改变”，具体变异判读、给药调整和临床处置必须依据药物基因组学与专科指南，不能从本页自行推算。[^pyrimidine-defects]

## 分解与回收共同控制核苷酸池 { #catabolism-salvage-balance }

核酸周转释放的分子并不会自动走到最终排泄物。HGPRT 和 APRT 可把嘌呤碱基与 PRPP 重新连接为核苷酸，腺苷、尿苷、胞苷和胸苷也可由相应激酶重新磷酸化；这些回收反应通常比从头搭建完整嘌呤环或嘧啶环节省能量。相反，当碱基供应超过回收能力、细胞需要调整核苷酸组成，或某些组织缺少相应回收酶时，分解通量才会继续向尿酸或开环产物推进。[^salvage-balance]

这也解释了为何“核苷磷酸化酶”不能只画成单向降解酶：PNP 的化学反应可逆，细胞中的净方向由磷酸、碱基和戊糖-1-磷酸浓度共同决定。下一页[核苷酸生物合成](na_synthesis.md)将从 PRPP、从头合成和回收途径一侧继续追踪同一个物质池。

## 参考资料与延伸阅读

- Nelson, D. L. & Cox, M. M. *Lehninger Principles of Biochemistry*, 8th ed.，核苷酸分解与回收章节。
- Reactome, [Nucleotide catabolism](https://reactome.org/content/detail/R-HSA-8956319)、[Purine catabolism](https://reactome.org/content/detail/R-HSA-74259)与[Pyrimidine catabolism](https://reactome.org/content/detail/R-HSA-73621)，人类核苷酸分解的反应和区室入口。
- Ichida et al., [The Evolutionary Fate of the Genes Encoding the Purine Catabolic Enzymes](https://pmc.ncbi.nlm.nih.gov/articles/PMC2877996/)，人猿、鸟类与爬行动物嘌呤分解酶丢失的比较研究。
- Nishino et al., [Allopurinol and oxypurinol differ in their strength and mechanisms of inhibition of xanthine oxidoreductase](https://pmc.ncbi.nlm.nih.gov/articles/PMC10511816/)，XOR 辅因子电子链与别嘌呤醇抑制机制。
- van Kuilenburg et al., [In Vitro Assessment of Fluoropyrimidine-Metabolizing Enzymes](https://pmc.ncbi.nlm.nih.gov/articles/PMC7464968/)，DPD—DHP—$\beta$-UP 三步通路及 5-FU 分解边界。

[^turnover-scope]: 分解、回收与合成共享核苷酸池，参见 Reactome [Nucleotide catabolism](https://reactome.org/content/detail/R-HSA-8956319)与[Nucleotide salvage](https://reactome.org/content/detail/R-HSA-8956321)；核苷酸的化学层级见本站[核酸与核苷酸](nucleic_acid.md#nucleotide-chemistry)。
[^monomer-release]: 人体嘌呤和嘧啶 5′-核苷酸酶反应见 Reactome [NT5C1A 催化嘌呤核苷酸水解](https://reactome.org/content/detail/R-HSA-109387)与[NT5C3A 催化嘧啶核苷酸水解](https://reactome.org/content/detail/R-HSA-109449)；PNP 的可逆磷酸解见 UniProt [PNP／P00491](https://www.uniprot.org/uniprotkb/P00491/entry)。
[^sugar-phosphate-fates]: PNP 生成核糖-1-磷酸和脱氧核糖-1-磷酸的反应见 Rhea [RHEA:27646](https://www.rhea-db.org/rhea/27646)与[RHEA:27750](https://www.rhea-db.org/rhea/27750)；真正接受醛缩裂解的是脱氧核糖-5-磷酸，见 UniProt [DERA／Q9Y315](https://www.uniprot.org/uniprotkb/Q9Y315/entry)。
[^purine-branches]: 人体两条嘌呤支路的汇合见 Reactome [Purine catabolism](https://reactome.org/content/detail/R-HSA-74259)；腺苷／脱氧腺苷脱氨和鸟嘌呤脱氨分别见 UniProt [ADA／P00813](https://www.uniprot.org/uniprotkb/P00813/entry)与[GDA／Q9Y2T3](https://www.uniprot.org/uniprotkb/Q9Y2T3/entry)。
[^xor-chemistry]: XOR 的 Mo-钼蝶呤、FAD和两组 $[2\mathrm{Fe}-2\mathrm{S}]$ 辅因子及两次羟化反应见 UniProt [XDH／P47989](https://www.uniprot.org/uniprotkb/P47989/entry)，XDH 型反应的配平式见 Rhea [RHEA:24670](https://www.rhea-db.org/rhea/24670)与[RHEA:16669](https://www.rhea-db.org/rhea/16669)。
[^urate-oxidation]: 尿酸氧化后还需 HIU 水解酶与 OHCU 脱羧酶才能形成尿囊素，参见 Ichida et al. [Purine catabolic enzymes in hominoids, birds, and reptiles](https://pmc.ncbi.nlm.nih.gov/articles/PMC2877996/)及 Kratzer et al. [Evolutionary history and metabolic insights of ancient mammalian uricases](https://pmc.ncbi.nlm.nih.gov/articles/PMC3956161/)。
[^purine-evolution]: *UOX* 与下游基因并非按传统“动物等级”同步丢失，参见 Ichida et al. [比较基因组分析](https://pmc.ncbi.nlm.nih.gov/articles/PMC2877996/)；人猿尿酸酶活性丧失的时间与功能演变见 Kratzer et al. [祖先尿酸酶重建](https://pmc.ncbi.nlm.nih.gov/articles/PMC3956161/)。
[^urate-transport]: 肾与肠上皮的 URAT1、GLUT9、ABCG2 及尿酸生成—排泄平衡，参见 [Urate Transport in Health and Disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC8678298/)与[Urate Transporters in the Kidney](https://pmc.ncbi.nlm.nih.gov/articles/PMC8267069/)。
[^allopurinol-mechanism]: 别嘌呤醇被 XOR 氧化、还原钼中心与氧嘌呤醇形成紧密但可解离复合物，参见 Nishino et al. [Allopurinol and oxypurinol differ in their strength and mechanisms of inhibition](https://pmc.ncbi.nlm.nih.gov/articles/PMC10511816/)；其对回收和从头合成的间接影响见 Reactome [Purine salvage](https://reactome.org/content/detail/R-HSA-74217)。
[^ada-deficiency]: ADA 缺乏时脱氧腺苷酸、dATP 与淋巴细胞毒性的联系，参见 Flinn & Gennery [Adenosine deaminase deficiency: a review](https://pmc.ncbi.nlm.nih.gov/articles/PMC5916829/)；ADA 的两种核苷底物反应见 Rhea [RHEA:24408](https://www.rhea-db.org/rhea/24408)与[RHEA:28190](https://www.rhea-db.org/rhea/28190)。
[^pnp-deficiency]: PNP 的底物范围及 dGTP 相关 T 细胞毒性，参见 [The Molecular Pathology of Primary Immunodeficiencies](https://pmc.ncbi.nlm.nih.gov/articles/PMC1867474/)与 Reactome [Nucleotide salvage defects](https://reactome.org/content/detail/R-HSA-9734207)。
[^cytidine-entry]: 人胞苷脱氨酶作用于胞苷和脱氧胞苷，见 UniProt [CDA／P32320](https://www.uniprot.org/uniprotkb/P32320/entry)；嘧啶核苷酸去磷酸入口见 Reactome [R-HSA-109449](https://reactome.org/content/detail/R-HSA-109449)。
[^pyrimidine-pathway]: 人体尿嘧啶与胸腺嘧啶的三步并行分解见 Reactome [Pyrimidine catabolism](https://reactome.org/content/detail/R-HSA-73621)；末步配平反应见 Rhea [RHEA:11184](https://www.rhea-db.org/rhea/11184)与[RHEA:37339](https://www.rhea-db.org/rhea/37339)。
[^pyrimidine-defects]: DPD、DHP 与 $\beta$-UP 分别由 *DPYD*、*DPYS*、*UPB1* 编码，且同一通路参与 5-FU 分解，参见 [In Vitro Assessment of Fluoropyrimidine-Metabolizing Enzymes](https://pmc.ncbi.nlm.nih.gov/articles/PMC7464968/)及 UniProt [DPYD／Q12882](https://www.uniprot.org/uniprotkb/Q12882/entry)、[DPYS／Q14117](https://www.uniprot.org/uniprotkb/Q14117/entry)、[UPB1／Q9UBR1](https://www.uniprot.org/uniprotkb/Q9UBR1/entry)。
[^salvage-balance]: 人体嘌呤与嘧啶回收反应分别见 Reactome [Purine salvage](https://reactome.org/content/detail/R-HSA-74217)与[Pyrimidine salvage](https://reactome.org/content/detail/R-HSA-73614)。
