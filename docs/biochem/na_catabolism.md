# 核酸降解与核苷酸分解代谢

核酸降解依次经历聚合物水解、核苷酸去磷酸化以及核苷或碱基的回收与继续分解。内切与外切核酸酶产生寡核苷酸和核苷酸，磷酸酶或核苷酸酶释放核苷；碱基和戊糖随后可以进入回收合成，也可以继续分解。分解与回收共享同一个核苷酸池，方向取决于组织、底物供应和细胞对特定核苷酸的需求。[^turnover-scope]

嘌呤环含氮而稳定，人体把腺嘌呤和鸟嘌呤支路汇入尿酸后排出；多数其他哺乳动物和许多微生物则保留尿酸之后的反应。嘧啶环的命运不同：尿嘧啶和胸腺嘧啶先被还原，再水解开环，最后分别形成 $\beta$-丙氨酸和 $\beta$-氨基异丁酸。两条路线的末端产物和酶系应按具体物种判断。

## 核酸的逐级解聚与单体去向 { #nucleic-acid-depolymerization }

细胞外食物核酸、凋亡细胞释放的核酸和细胞内正常周转的核酸所处区室不同，但都要经历磷酸二酯键的逐级水解。核酸内切酶在链内切开，外切酶从既有末端逐个移除单体；不同脱氧核糖核酸酶（DNase）、核糖核酸酶（RNase）和溶酶体核酸酶各有特定的底物、末端与pH要求。核酸周转产生可回收的单体；DNA修复中的局部切除则由损伤识别与修复系统完成。

核苷酸的磷酸基团使其难以自由跨膜，也妨碍核糖苷键直接接受下一步反应。5′-核苷酸酶把核苷一磷酸水解为核苷和正磷酸；底物可按嘌呤、嘧啶及区室由多种同工酶分担。核苷随后有三类主要去向：由核苷激酶消耗三磷酸腺苷（ATP）重新磷酸化，由核苷磷酸化酶用无机磷酸进行磷酸解，或由某些生物的核苷水解酶直接水解糖苷键。磷酸化酶生成戊糖-1-磷酸，激酶则把ATP等供体的磷酰基转给核苷，反应物和产物均不相同。[^monomer-release]

在人类嘌呤代谢中，嘌呤核苷磷酸化酶（PNP）可逆催化肌苷或鸟苷及其脱氧形式的磷酸解：

$$
\begin{aligned}
\text{肌苷}+\mathrm{P_i}
&\rightleftharpoons \text{次黄嘌呤}+\text{核糖-1-磷酸}\\
\text{鸟苷}+\mathrm{P_i}
&\rightleftharpoons \text{鸟嘌呤}+\text{核糖-1-磷酸}
\end{aligned}
$$

磷酸戊糖变位酶可把核糖-1-磷酸转为核糖-5-磷酸，使碳骨架接入[磷酸戊糖途径](ppp.md#nonoxidative-phase)。脱氧核糖-1-磷酸同样先变位为脱氧核糖-5-磷酸，后者再由2-脱氧核糖-5-磷酸醛缩酶（DERA）裂解为甘油醛-3-磷酸和乙醛。[^sugar-phosphate-fates]

## 嘌呤分解代谢 { #purine-catabolism }

### 嘌呤分解支路的汇合 { #purine-branch-convergence }

腺嘌呤核苷酸有两条常见入口。腺苷一磷酸（AMP）可先被AMP脱氨酶转为次黄嘌呤核苷酸（IMP），再去磷酸形成肌苷；也可先去磷酸形成腺苷，再由腺苷脱氨酶（ADA）生成肌苷。两条入口在肌苷汇合，再经PNP形成次黄嘌呤；人类主线由此在核苷酸或核苷层级完成脱氨。

鸟苷一磷酸（GMP）则先去磷酸为鸟苷，经PNP形成鸟嘌呤；鸟嘌呤脱氨酶（GDA）把鸟嘌呤水解脱氨为黄嘌呤。两支在含氧条件下由同一黄嘌呤氧化还原酶（XOR，*XDH*基因产物）继续处理：次黄嘌呤先羟化为黄嘌呤，黄嘌呤再羟化为尿酸盐。路线汇合在碱基层级，但上游可以在核苷酸、核苷和碱基之间由回收反应来回分流。[^purine-branches]

### 黄嘌呤氧化还原酶的电子传递 { #xanthine-oxidoreductase }

XOR每个亚基含一个钼-钼蝶呤（Mo-MPT）中心、黄素腺嘌呤二核苷酸（FAD）和两组$[2\mathrm{Fe}-2\mathrm{S}]$簇。底物在钼中心被羟化，电子经铁硫簇传向FAD；脱氢酶型黄嘌呤脱氢酶（XDH）主要把氧化型烟酰胺腺嘌呤二核苷酸（NAD$^+$）还原为NADH，氧化酶型黄嘌呤氧化酶（XO）则把电子交给O$_2$，可形成过氧化氢（H$_2$O$_2$）和超氧阴离子。蛋白水解或巯基氧化可改变两种形式的比例；完整机制因此同时包括三类辅因子、辅因子间电子传递和XDH／XO的形式转换。[^xor-chemistry]

$$
\begin{aligned}
&\text{次黄嘌呤}+\mathrm{NAD^+}+\mathrm{H_2O}\\
&\qquad\rightarrow \text{黄嘌呤}+\mathrm{NADH}+\mathrm{H^+}\\[4pt]
&\text{黄嘌呤}+\mathrm{NAD^+}+\mathrm{H_2O}\\
&\qquad\rightarrow \text{尿酸盐}+\mathrm{NADH}+\mathrm{H^+}
\end{aligned}
$$

上式以XDH方向展示电子账本；XO完成相同两次羟化时以O$_2$为末端电子受体。尿酸氧化酶（uricase／UOX）不依赖金属辅因子，先把尿酸氧化为5-羟基异尿酸（HIU）并产生H$_2$O$_2$，随后由HIU水解酶和2-氧代-4-羟基-4-羧基-5-脲基咪唑啉（OHCU）脱羧酶依次形成尿囊素。[^urate-oxidation]

### 嘌呤分解终点的物种差异 { #purine-species-boundaries }

人和其他人猿的 *UOX* 已失活，尿酸因而成为嘌呤环的主要终末产物。许多其他哺乳动物保留 UOX，可把尿酸转成更易溶的尿囊素；具有尿囊素酶、尿囊酸酶及下游酶的生物还能继续形成尿囊酸、尿素、乙醛酸，乃至 NH$_4^+$ 和 CO$_2$。这些酶在不同脊椎动物、无脊椎动物、植物、真菌和细菌中的丢失并不同步，终点也受组织和排氮生态影响。

嘌呤分解终点应逐个物种依据 *UOX* 及下游基因、酶活性和实际排泄物判断。传统的单线等级表无法表示这些酶的独立丢失；头足类等动物以鸟嘌呤参与体表反光或储氮，也只说明特定组织用途。[^purine-evolution]

### 尿酸盐稳态 { #urate-homeostasis }

在生理 pH 下，尿酸主要以尿酸盐存在。血浆尿酸盐由内源核酸周转、ATP 分解和食物嘌呤共同贡献；清除则依赖肾小球滤过、近端小管的重吸收与分泌，以及肠道排泄。肾近端小管顶端的 URAT1（SLC22A12）和基底外侧的 GLUT9（SLC2A9）参与重吸收，ABCG2 参与肾与肠上皮向腔面的外排。血尿酸升高可由生成增多或肾、肠清除减少形成。[^urate-transport]

当体液过饱和并形成单钠尿酸盐晶体时，晶体可触发先天免疫炎症并导致痛风。无症状高尿酸血症只描述血液浓度异常，痛风还涉及晶体沉积及临床炎症；性别、年龄、绝经状态、肾功能、遗传变异和药物会共同改变风险。雌激素相关状态可增加尿酸清除并降低群体风险。具体诊断和药物选择须结合现行指南与个体风险。

别嘌呤醇是次黄嘌呤的结构类似物，也是XOR的机制型底物。XOR把它氧化为氧嘌呤醇；产物在还原态钼中心重新取向并形成紧密复合物，复合物随后可随酶再氧化而缓慢解离。上游次黄嘌呤增加后可被次黄嘌呤-鸟嘌呤磷酸核糖基转移酶（HGPRT）回收并消耗PRPP，IMP／GMP的反馈又能间接降低从头合成通量。药物的直接靶点是XOR，对PRPP与从头合成的影响来自回收和终产物反馈。[^allopurinol-mechanism]

### 嘌呤分解缺陷与脱氧核苷酸池 { #purine-catabolism-disorders }

ADA同时作用于腺苷和脱氧腺苷。严重ADA缺乏时，脱氧腺苷被细胞激酶磷酸化，导致脱氧三磷酸腺苷（dATP）等脱氧腺苷酸累积；高dATP抑制核糖核苷酸还原酶，破坏DNA前体平衡并损伤快速增殖的淋巴细胞。腺苷信号、甲基化代谢和线粒体等效应也参与表型，严重联合免疫缺陷（SCID）由此是多层代谢失衡的结果。[^ada-deficiency]

PNP缺乏则使脱氧鸟苷等底物积累，继而增加脱氧三磷酸鸟苷（dGTP），并尤其损伤T细胞发育与存活。ADA与PNP缺乏共同说明，核苷磷酸解同时承担底物清除、信号分子周转和脱氧核苷酸池平衡；某一入口受阻会使这些层面一并改变。遗传诊断、酶替代、造血干细胞移植和基因治疗的适应证与风险须依据[免疫缺陷病](../immunology/immunodeficiency.md)及临床免疫学规范。[^pnp-deficiency]

## 嘧啶分解代谢 { #pyrimidine-ring-opening }

### 胞嘧啶衍生物的分解入口 { #cytidine-catabolic-entry }

胞嘧啶衍生物可在核苷酸或核苷层级进入分解。人细胞可由脱氧胞苷一磷酸（dCMP）脱氨酶形成脱氧尿苷一磷酸（dUMP），也可先去磷酸，再由胞苷脱氨酶把胞苷或脱氧胞苷转为尿苷或脱氧尿苷；核苷磷酸化酶随后释放尿嘧啶。具体入口随酶与组织而变。[^cytidine-entry]

### 尿嘧啶与胸腺嘧啶的三步分解 { #uracil-thymine-catabolism }

尿嘧啶和胸腺嘧啶进入一套平行的三步还原分解。第一步由二氢嘧啶脱氢酶（DPD，由*DPYD*编码）使用NADPH还原C5—C6双键；第二步由二氢嘧啶酶（DHP，由*DPYS*编码）水解并打开环；第三步由$\beta$-脲基丙酸酶（$\beta$-UP，由*UPB1*编码）释放CO$_2$和NH$_4^+$。[^pyrimidine-pathway]

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

Rhea 为可逆氧化还原反应登记的标准方程可写成“二氢嘧啶 + NADP$^+$ → 嘧啶 + NADPH”，但 *DPYD* 在人体分解通量中的生理方向是上述还原方向，反应消耗 NADPH 并完成氢化物转移。两种 $\beta$-氨基酸可排出，也可进一步进入碳代谢；“终产物”的表述须同时说明组织和物种。

### 嘧啶分解缺陷与氟尿嘧啶清除 { #pyrimidine-clinical-boundaries }

DPD也是5-氟尿嘧啶（5-FU）分解的首个和主要限速酶，DHP与$\beta$-UP继续处理其含氟中间物。*DPYD*功能降低可显著减少5-FU清除并增加严重毒性风险；*DPYS*或*UPB1*缺陷则分别积累二氢嘧啶或N-氨甲酰-$\beta$-氨基酸，先天表型从无症状到神经系统异常均可出现。生化通路能够解释底物积累与药物清除能力改变；具体变异判读、给药调整和临床处置必须依据药物基因组学与专科指南。[^pyrimidine-defects]

## 分解与回收的核苷酸池平衡 { #catabolism-salvage-balance }

回收与继续分解竞争核酸周转释放的同一底物池。HGPRT和腺嘌呤磷酸核糖基转移酶（APRT）可把嘌呤碱基与5-磷酸核糖-1-焦磷酸（PRPP）重新连接为核苷酸，腺苷、尿苷、胞苷和胸苷也可由相应激酶重新磷酸化；这些回收反应通常比从头搭建完整嘌呤环或嘧啶环节省能量。当碱基供应超过回收能力、细胞需要调整核苷酸组成，或某些组织缺少相应回收酶时，分解通量继续向尿酸或开环产物推进。[^salvage-balance]

核苷磷酸化酶的化学反应可逆，细胞中的净方向由磷酸、碱基和戊糖-1-磷酸浓度共同决定；它在代谢图中应表示为连接分解与回收的双向节点。[核苷酸生物合成](na_synthesis.md)从PRPP、从头合成和回收途径一侧追踪同一个物质池。

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
