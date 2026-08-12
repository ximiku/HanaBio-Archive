# 乙醛酸循环与寡糖代谢

乙醛酸循环和寡糖代谢分属中央碳代谢与糖链生物合成，却共享一条组织原则：常见碳中间物经过活化、转移和区室调配后进入新的化学用途。前者保存乙酰基碳，使植物、真菌和部分细菌能够利用脂肪酸或乙酸建立细胞物质；后者连接活化单糖与糖链装配，由糖基转移酶选择受体和连接方式，形成乳糖、蔗糖以及更复杂的糖链。

## 乙醛酸循环 { #glyoxylate-bypass }

[三羧酸循环](tca_cycle.md#acetyl-to-succinyl-coa)中的异柠檬酸通常经异柠檬酸脱氢酶和 $\alpha$-酮戊二酸脱氢酶复合体连续失去两个二氧化碳（CO$_2$）。这套反应适合把乙酰基充分氧化，但不造成循环中间物的净积累。乙醛酸循环保留柠檬酸合酶和顺乌头酸酶形成异柠檬酸的共同上游，随后以两种特征酶跨过这两个脱羧步骤：

$$
\mathrm{isocitrate\rightarrow succinate+glyoxylate}
$$

$$
\begin{aligned}
&\mathrm{glyoxylate+acetyl\text{-}CoA+H_2O}\\
&\qquad\rightarrow\mathrm{malate+CoA\text{-}SH+H^+}.
\end{aligned}
$$

第一步由异柠檬酸裂合酶（isocitrate lyase，ICL）催化，第二步由苹果酸合酶（malate synthase，MS）催化。苹果酸再经苹果酸脱氢酶氧化为草酰乙酸，草酰乙酸与新的乙酰辅酶 A（acetyl coenzyme A，乙酰-CoA）缩合，因而作为催化性中间物再生；琥珀酸则是可离开旁路的四碳净产物。Rhea 反应知识库和经审校的 *Escherichia coli* UniProt 条目分别给出了两项特征反应与对应的 AceA、AceB 蛋白。[^glyoxylate-reactions]

这条旁路的首要作用是保存碳。每轮有两分子乙酰-CoA 进入，一分子用于形成异柠檬酸，另一分子在苹果酸合酶反应中与乙醛酸缩合；原本会在两次脱羧中逸出的碳由此保留在琥珀酸和再生的草酰乙酸池中。

### 乙醛酸循环的净反应与能量计量 { #stoichiometry-and-carbon }

把柠檬酸合酶、顺乌头酸酶、ICL、MS和苹果酸脱氢酶的反应相加，常用的离子化净式可写为：

$$
\begin{aligned}
&2\,\mathrm{acetyl\text{-}CoA}+\mathrm{NAD^+}+2\,\mathrm{H_2O}\\
&\qquad\rightarrow\mathrm{succinate}+2\,\mathrm{CoA\text{-}SH}\\
&\qquad\phantom{\rightarrow{}}+\mathrm{NADH}+\mathrm{H^+}.
\end{aligned}
$$

不同数据库对水和质子的配平写法可略有差异，但碳和电子账本保持一致：草酰乙酸作为催化性中间物再生；该净反应把一份氧化型烟酰胺腺嘌呤二核苷酸（oxidized nicotinamide adenine dinucleotide，NAD$^+$）还原为 NADH，不生成还原型黄素腺嘌呤二核苷酸（FADH$_2$）或泛醇；输出的琥珀酸还需经三羧酸循环其余反应转成苹果酸或草酰乙酸，再接入[糖异生](gng.md#precursor-entry)。乙醛酸循环由此提供“从两个乙酰单位得到一个可输出四碳骨架”的碳守恒条件。

若碳源是乙酸，乙酸还须先被活化。许多生物使用腺苷一磷酸（adenosine monophosphate，AMP）形成型乙酰-CoA 合成酶：

$$
\begin{aligned}
&\mathrm{acetate+CoA\text{-}SH+ATP}\\
&\qquad\rightarrow\mathrm{acetyl\text{-}CoA+AMP+PP_i},\\
&\mathrm{PP_i+H_2O\rightarrow 2\,P_i}.
\end{aligned}
$$

反应经乙酰腺苷酸中间体进行；腺苷三磷酸（adenosine triphosphate，ATP）裂解到 AMP，并伴随无机焦磷酸（inorganic pyrophosphate，PP$_i$）水解，合计消耗两个高能磷酸键当量。某些细菌还能用乙酸激酶—磷酸转乙酰酶路线处理乙酸，说明“乙酸进入乙酰-CoA”本身也有物种和浓度依赖的实现方式。[^acetate-activation]

### 植物乙醛酸循环的区室分工 { #plant-compartments }

萌发中的油料种子先在过氧化物酶体内以 $\beta$-氧化把脂肪酸拆成乙酰-CoA，ICL 和 MS 也主要位于这类特化过氧化物酶体，即乙醛酸循环体（glyoxysome）。琥珀酸、苹果酸或相关四碳中间物在过氧化物酶体、线粒体和胞质之间交换，随后由线粒体反应和胞质糖异生共同把储藏脂质的碳送向蔗糖及其他合成出口；碳流因此跨越三个区室。[^plant-glyoxysome]

拟南芥缺失 ICL的幼苗在强光和外源碳充足的实验条件下仍可萌发，说明光合作用和其他碳流能够部分补偿；但在黑暗、短光周期或长时间缺碳时，其下胚轴伸长和恢复明显受损。乙醛酸循环对萌发后生长的贡献依赖光照和外源碳，在异养阶段及缺碳条件下尤其重要。[^arabidopsis-icl]

### 微生物乙醛酸循环的通量调节 { #microbial-regulation }

在以乙酸为碳源的 *E. coli* 中，异柠檬酸同时面对异柠檬酸脱氢酶（isocitrate dehydrogenase，IDH）和 ICL。若全部碳流进入氧化支路，乙酰碳会以 CO$_2$ 丢失；若全部进入乙醛酸旁路，能量和还原力回收又受限。该分支的通量由 IDH 与 ICL 的竞争以及能量、还原力需求共同分配。

*E. coli* 的双功能 AceK可磷酸化IDH并降低其活性，也可去磷酸化使其恢复；碳源及代谢物信号由此改变IDH与ICL的竞争。AceK—IDH是 *E. coli* 等部分细菌的调节方案，植物、真菌和其他细菌采用不同机制。[^acek-regulation]

这条旁路在病原生物中的作用同样依环境而变。结核分枝杆菌的 ICL 还参与甲基柠檬酸循环，MS 缺失会同时阻断乙酰碳同化并造成乙醛酸积累；在小鼠感染模型中耗竭 MS 会降低细菌存活。哺乳动物细胞缺少经典 ICL—MS 组合，使这些酶具有药物靶点吸引力；抑制剂的有效性和安全性仍取决于酶的多功能性、宿主体内碳源、代偿路线和药理性质。[^pathogen-glyoxylate]

## 核苷酸糖供体与糖链装配 { #nucleotide-sugar-donors }

多数生物合成型糖基转移酶使用核苷酸糖而非游离单糖作为供体。细胞先把单糖转成核苷酸糖，使糖基连接到便于识别和离去的核苷酸部分，再由特定糖基转移酶选择受体、受体羟基的位置以及新键的立体化学。供体名称说明转移的糖基种类，产物形成 $\alpha$ 还是 $\beta$ 连接则由酶与受体共同决定。[^glycosyltransferases]

| 供体家族 | 代表性活化糖 | 常见去向示例 |
| --- | --- | --- |
| 尿苷二磷酸糖（UDP-糖） | UDP-Glc、UDP-Gal、UDP-GlcNAc、UDP-GalNAc、UDP-GlcA、UDP-Xyl | 二糖、糖蛋白、糖脂、蛋白聚糖与细胞外多糖 |
| 鸟苷二磷酸糖（GDP-糖） | GDP-Man、GDP-Fuc | 甘露糖基化、岩藻糖基化及多种微生物／植物多糖 |
| 胞苷一磷酸糖（CMP-糖） | CMP-Neu5Ac 及其他 CMP-唾液酸 | 动物和部分微生物糖链末端的唾液酸化 |
| 细菌特有的重要供体 | UDP-MurNAc 等 | 肽聚糖及细胞包被结构的装配 |

表中的 Glc、Gal、GlcNAc、GalNAc、GlcA、Xyl、Man、Fuc、Neu5Ac 和 MurNAc 分别表示葡萄糖、半乳糖、N-乙酰葡糖胺、N-乙酰半乳糖胺、葡糖醛酸、木糖、甘露糖、岩藻糖、N-乙酰神经氨酸和 N-乙酰胞壁酸。唾液酸的常见活化供体采用胞苷一磷酸形式，如 CMP-Neu5Ac。供体家族并非生物界中的封闭分类：细菌和植物拥有更丰富的核苷酸糖谱，同一种单糖在不同通路中也可能采用不同活化形式。[^nucleotide-sugar-spectrum]

在真核细胞中，许多核苷酸糖在胞质或细胞核生成，而大量糖蛋白、糖脂和蛋白聚糖的延伸发生在内质网或高尔基体腔面。带电供体不能自由穿膜，需要特异核苷酸糖转运体输入，并常与腔内生成的核苷一磷酸反向交换。糖链组成由供体供应、跨膜运输、转移酶表达和受体到达顺序共同决定。[^nucleotide-sugar-transport]

## 乳糖代谢 { #lactose-metabolism }

### 乳糖合酶复合体与乳糖生成 { #lactose-synthesis }

乳糖是 Gal$\beta(1\rightarrow4)$Glc，结构与还原性见[糖类](carbohydrate.md#common-disaccharides)。在多数非乳腺细胞中，$\beta$-1,4-半乳糖基转移酶 1（$\beta$-1,4-galactosyltransferase 1，B4GALT1）偏好以末端 GlcNAc 为受体，用 UDP-Gal 延长糖缀合物并形成 Gal$\beta(1\rightarrow4)$GlcNAc，即 N-乙酰乳糖胺（N-acetyllactosamine，LacNAc）单元。

泌乳乳腺上皮细胞表达并分泌大量 $\alpha$-乳白蛋白（$\alpha$-lactalbumin，LALBA）。它与高尔基体腔面的 B4GALT1 结合后改变受体结合环境，使葡萄糖成为有效受体；两个蛋白组成乳糖合酶复合体：

$$
\mathrm{UDP\text{-}Gal+glucose
\rightarrow lactose+UDP}.
$$

LALBA 是改变 B4GALT1 受体特异性的调节亚基。人 B4GALT1 结构研究与经审校的 B4GALT1、LALBA 条目共同支持这一分工。[^lactose-synthase]

乳糖在高尔基体腔内形成并进入分泌囊泡；它的积累参与乳汁渗透压和水分泌，因此乳糖合成既是糖基转移反应，也是乳腺分泌生理的一部分。乳汁生成的激素调节和整体过程见[泌乳建立与吸吮反射](../physiology/reproductive.md#lactation)。

### 小肠乳糖水解与乳糖酶持续性 { #lactose-breakdown }

膳食乳糖在小肠刷状缘由乳糖酶-根皮苷水解酶（lactase-phlorizin hydrolase，LPH；基因 *LCT*）水解为半乳糖和葡萄糖，随后由上皮细胞吸收；半乳糖可经[糖酵解页所述 Leloir 途径](emp.md#other-hexoses)转成可进入中央代谢的糖磷酸。LPH 是膜结合糖苷酶，B4GALT1—LALBA 则是高尔基体腔内的合成复合体，两个方向由不同酶系统承担。[^intestinal-lactase]

许多人的 *LCT* 表达在断乳后随发育降低，形成乳糖酶非持续性表型；另一些人因 *MCM6* 内含子中的顺式调控变异及相应染色质状态，在成年仍保持较高乳糖酶活性。乳糖酶持续性属于发育调控表型。即使乳糖吸收不良已经发生，是否出现腹胀、腹泻等乳糖不耐受症状仍受摄入剂量、食物基质、肠道转运和微生物发酵影响；吸收不良和有症状的不耐受是不同的临床概念。[^lactase-persistence]

### 细菌别乳糖的调节功能 { #allolactose-regulation }

别乳糖（allolactose）主要属于细菌调控语境。*E. coli* 的 $\beta$-半乳糖苷酶 LacZ 除水解乳糖外，还能把半乳糖基转移给葡萄糖，形成 Gal$\beta(1\rightarrow6)$Glc；别乳糖结合乳糖阻遏蛋白 LacI，并解除对乳糖操纵子的阻遏。人类小肠乳糖水解以葡萄糖和半乳糖为产物，乳糖合酶则生成 Gal$\beta(1\rightarrow4)$Glc。[^allolactose]

## 蔗糖代谢 { #sucrose-metabolism }

### 蔗糖合成与 SPS—SPP 系统 { #sucrose-synthesis }

蔗糖把葡萄糖和果糖两个异头碳以 Glc$\alpha1\leftrightarrow2\beta$Fru连接，因而没有游离还原端。在植物胞质中，主要合成路线先由蔗糖磷酸合酶（sucrose-phosphate synthase, SPS）把 UDP-Glc的葡糖基转移给果糖-6-磷酸，再由蔗糖-6-磷酸磷酸酶（SPP）水解磷酸酯：

$$
\begin{aligned}
&\mathrm{UDP\text{-}Glc+fructose\text{-}6\text{-}P}\\
&\qquad\rightarrow\mathrm{sucrose\text{-}6\text{-}P+UDP},\\
&\mathrm{sucrose\text{-}6\text{-}P+H_2O}\\
&\qquad\rightarrow\mathrm{sucrose+P_i}.
\end{aligned}
$$

第二步移走蔗糖-6-磷酸，帮助第一步在细胞中保持合成方向。拟南芥有多个SPS和SPP同工型，表达位置、催化能力以及对葡萄糖-6-磷酸、无机磷酸和磷酸化的响应并不完全相同；不同 SPS／SPP同工型的调节方式具有组织和物种特异性。[^sps-spp]

叶片生成的蔗糖可装载入韧皮部并运往根、茎尖、果实和种子等库组织，成为远距离分配光合碳的主要形式之一。转运、卸载和库强度对整株碳分配的影响见[同化物运输与次生代谢](../botany/physiology/transport_metabolism.md)。

### 蔗糖裂解的水解与转糖基途径 { #sucrose-cleavage }

蔗糖合酶（sucrose synthase, SuSy）催化可逆反应：

$$
\mathrm{sucrose+UDP
\rightleftharpoons UDP\text{-}Glc+fructose}.
$$

酶名来自可逆反应的历史命名；在许多植物组织的体内条件下，SuSy 主要沿蔗糖裂解方向运行。产物 UDP-Glc 可作为纤维素和胼胝质合成的直接糖基供体，也可先转为糖磷酸，再经二磷酸腺苷葡萄糖（ADP-glucose，ADP-Glc）等节点参与淀粉合成；各组织中的净通量由底物、产物、区室和下游需求决定。拟南芥 SuSy1 的底物复合物结构同时捕捉到 UDP-Glc 和 UDP＋果糖状态，清楚显示反应的可逆化学基础。[^susy-reversible]

转化酶（invertase）则以水水解蔗糖，直接产生葡萄糖和果糖。两条入口的产物和能量账本不同：转化酶产物若进入糖酵解，通常还需分别磷酸化；SuSy产生的UDP-Glc已是活化糖，可接入细胞壁和储藏多糖合成，但其利用方向仍受UDP、果糖和下游反应牵引。拟南芥多突变体实验还表明，部分组织的正常生长主要依赖胞质转化酶；体内净方向由底物、产物和下游需求共同决定。[^invertase-versus-susy]

## 寡糖代谢的结构、区室与物种差异 { #oligosaccharide-fates }

寡糖的合成与分解由连接方式、酶谱和区室共同决定。乳糖与蔗糖在小肠刷状缘分别需要 LPH 和蔗糖酶-异麦芽糖酶复合体；棉子糖、水苏糖含有 $\alpha$-半乳糖苷键，人类消化道缺少相应内源 $\alpha$-半乳糖苷酶，因而较多到达结肠并被微生物发酵。糖蛋白和糖脂的糖链周转又常发生在内体—溶酶体系统，需要按末端残基和连接方式依次工作的外切糖苷酶。详细消化吸收、生物膜发酵与溶酶体病理分别见[消化与吸收](../physiology/digestive/digestion_absorption.md)、微生物学和细胞生物学页面。

| 问题层次 | 决定因素 | 典型结果 |
| --- | --- | --- |
| 合成 | 核苷酸糖、转移酶、受体和区室共定位 | 决定糖基组成、连接位置与异头构型 |
| 食物消化 | 刷状缘糖苷酶能否识别特定连接 | 单糖被吸收，或未消化寡糖进入结肠 |
| 胞内周转 | 囊泡运输与有序外切糖苷酶 | 糖缀合物逐步拆解并回收单糖 |
| 微生物利用 | 物种所具转运体、糖苷酶和调控回路 | 同一种寡糖可成为碳源、信号或不可利用底物 |

完整描述寡糖代谢需同时注明糖苷键、相关酶、反应方向和发生区室，由此才能解释同一分子在不同细胞中的去向。

## 参考资料与延伸阅读

- Rhea, [isocitrate lyase reaction](https://www.rhea-db.org/rhea/13245) 与 [malate synthase reaction](https://www.rhea-db.org/rhea/18181)。
- Eastmond, P. J. et al., [Postgerminative growth and lipid catabolism in oilseeds lacking the glyoxylate cycle](https://pmc.ncbi.nlm.nih.gov/articles/PMC25886/). *Proceedings of the National Academy of Sciences*, 2000。
- Yates, S. P. et al., [Structural basis of the substrate specificity of bifunctional isocitrate dehydrogenase kinase/phosphatase](https://pmc.ncbi.nlm.nih.gov/articles/PMC3354702/). *Biochemistry*, 2011。
- Puckett, S. et al., [Glyoxylate detoxification is an essential function of malate synthase required for carbon assimilation in *Mycobacterium tuberculosis*](https://pmc.ncbi.nlm.nih.gov/articles/PMC5358392/). *Proceedings of the National Academy of Sciences*, 2017。
- *Essentials of Glycobiology*, 4th ed., [Glycosylation Precursors](https://www.ncbi.nlm.nih.gov/books/NBK579932/) 与 [Glycosyltransferases and Glycan-Processing Enzymes](https://www.ncbi.nlm.nih.gov/books/NBK579908/)。
- Harrus, D. et al., [The dimeric structure of wild-type human glycosyltransferase B4GalT1](https://pmc.ncbi.nlm.nih.gov/articles/PMC6198961/). *PLoS ONE*, 2018。
- Labrie, V. et al., [Lactase nonpersistence is directed by DNA-variation-dependent epigenetic aging](https://www.nature.com/articles/nsmb.3227). *Nature Structural & Molecular Biology*, 2016。
- Volkert, K. et al., [Loss of the two major leaf isoforms of sucrose-phosphate synthase in *Arabidopsis thaliana*](https://pmc.ncbi.nlm.nih.gov/articles/PMC4400537/). *Journal of Experimental Botany*, 2014。
- Zheng, Y. et al., [The structure of sucrose synthase-1 from *Arabidopsis thaliana* and its functional implications](https://pmc.ncbi.nlm.nih.gov/articles/PMC3195635/). *Journal of Biological Chemistry*, 2011。

[^glyoxylate-reactions]: 两项特征反应据 Rhea [isocitrate lyase reaction（RHEA:13245）](https://www.rhea-db.org/rhea/13245)与[malate synthase reaction（RHEA:18181）](https://www.rhea-db.org/rhea/18181)；*E. coli* K-12经审校蛋白条目见 UniProt [AceA（P0A9G6）](https://www.uniprot.org/uniprotkb/P0A9G6/entry)和[AceB（P08997）](https://www.uniprot.org/uniprotkb/P08997/entry)。
[^acetate-activation]: AMP形成型乙酰-CoA合成酶反应及乙酰腺苷酸中间体见 UniProt [*E. coli* Acs（P27550）](https://www.uniprot.org/uniprotkb/P27550/entry)和 NC-IUBMB [EC 6.2.1.1](https://iubmb.qmul.ac.uk/enzyme/EC6/2/1/1.html)；Rhea [RHEA:23177](https://www.rhea-db.org/rhea/23177)给出净方向反应。
[^plant-glyoxysome]: 油料种子萌发时过氧化物酶体 $\beta$-氧化、ICL／MS及跨细胞器碳流，见 [Postgerminative growth and lipid catabolism in oilseeds lacking the glyoxylate cycle](https://pmc.ncbi.nlm.nih.gov/articles/PMC25886/)；过氧化物酶体蛋白导入缺陷对储藏脂质利用的影响见 [Identification and Functional Characterization of Arabidopsis PEROXIN4 and the Interacting Protein PEROXIN22](https://pmc.ncbi.nlm.nih.gov/articles/PMC1315379/)。
[^arabidopsis-icl]: 拟南芥 *icl*突变体在光照、黑暗和外源糖条件下的表型及脂质仍可呼吸利用的结论，见 [Postgerminative growth and lipid catabolism in oilseeds lacking the glyoxylate cycle](https://pmc.ncbi.nlm.nih.gov/articles/PMC25886/)。
[^acek-regulation]: *E. coli* AceK对IDH的可逆磷酸化及旁路分流功能见 UniProt [AceK（P11071）](https://www.uniprot.org/uniprotkb/P11071/entry)和 [The complex of isocitrate dehydrogenase kinase/phosphatase with isocitrate dehydrogenase](https://pmc.ncbi.nlm.nih.gov/articles/PMC3354702/)。
[^pathogen-glyoxylate]: 结核分枝杆菌MS的乙醛酸解毒、脂肪酸利用和感染模型结果，见 [Glyoxylate detoxification is an essential function of malate synthase](https://pmc.ncbi.nlm.nih.gov/articles/PMC5358392/)；ICL的多通路作用及衣康酸共价抑制结构见 [Itaconate is a covalent inhibitor of the *Mycobacterium tuberculosis* isocitrate lyase](https://pmc.ncbi.nlm.nih.gov/articles/PMC8130629/)。
[^glycosyltransferases]: 糖基供体、受体特异性、键位和立体化学由糖基转移酶共同决定，见 *Essentials of Glycobiology*, 4th ed., [Glycosyltransferases and Glycan-Processing Enzymes](https://www.ncbi.nlm.nih.gov/books/NBK579908/)。
[^nucleotide-sugar-spectrum]: UDP、GDP和CMP核苷酸糖的合成、互变及CMP-Neu5Ac例外见 *Essentials of Glycobiology*, 4th ed., [Glycosylation Precursors](https://www.ncbi.nlm.nih.gov/books/NBK579932/)及[Sialic Acids and Other Nonulosonic Acids](https://www.ncbi.nlm.nih.gov/books/NBK579976/)。
[^nucleotide-sugar-transport]: 核苷酸糖合成区室、ER／Golgi反向转运和转运体底物谱见 *Essentials of Glycobiology*, 4th ed., [Glycosylation Precursors](https://www.ncbi.nlm.nih.gov/books/NBK579932/)与[Cellular Organization of Glycosylation](https://www.ncbi.nlm.nih.gov/books/NBK579926/)。
[^lactose-synthase]: B4GALT1与LALBA形成乳糖合酶并改变受体特异性，见 [The dimeric structure of wild-type human glycosyltransferase B4GalT1](https://pmc.ncbi.nlm.nih.gov/articles/PMC6198961/)及 UniProt [B4GALT1（P15291）](https://www.uniprot.org/uniprotkb/P15291/entry)、[LALBA（P00709）](https://www.uniprot.org/uniprotkb/P00709/entry)。
[^intestinal-lactase]: 人乳糖酶-根皮苷水解酶的刷状缘定位、成熟加工和底物功能见 UniProt [LPH（P09848）](https://www.uniprot.org/uniprotkb/P09848/entry)。
[^lactase-persistence]: *LCT*调控区变异、年龄相关表观遗传变化与乳糖酶持续／非持续表型见 [Lactase nonpersistence is directed by DNA-variation-dependent epigenetic aging](https://www.nature.com/articles/nsmb.3227)；乳糖吸收不良与有症状不耐受的区别见 NIDDK [Definition & Facts for Lactose Intolerance](https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/definition-facts)。
[^allolactose]: LacZ通过转半乳糖基作用形成 Gal$\beta(1\rightarrow6)$Glc并使其成为乳糖操纵子天然诱导物的结构基础，见 [Structural Explanation for Allolactose Synthesis by lacZ $\beta$-Galactosidase](https://pmc.ncbi.nlm.nih.gov/articles/PMC3642343/)。
[^sps-spp]: SPS—SPP两步反应、拟南芥同工型分工及调节差异见 [Loss of the two major leaf isoforms of sucrose-phosphate synthase in *Arabidopsis thaliana*](https://pmc.ncbi.nlm.nih.gov/articles/PMC4400537/)和 [Characterization of the Sucrose Phosphate Phosphatase Isoforms from *Arabidopsis thaliana*](https://pmc.ncbi.nlm.nih.gov/articles/PMC5113954/)；经审校SPSA1条目见 UniProt [Q94BT0](https://www.uniprot.org/uniprotkb/Q94BT0/entry)。
[^susy-reversible]: SuSy1 的 UDP-Glc 与 UDP＋果糖复合物及反应可逆性见 [The Structure of Sucrose Synthase-1 from *Arabidopsis thaliana*](https://pmc.ncbi.nlm.nih.gov/articles/PMC3195635/)；拟南芥叶片淀粉的 ADP-Glc 主要由质体 ADP-Glc 焦磷酸化酶生成，见 [Sucrose synthases are not involved in starch synthesis in Arabidopsis leaves](https://pmc.ncbi.nlm.nih.gov/articles/PMC9122829/)；经审校蛋白条目见 UniProt [SUS1（P49040）](https://www.uniprot.org/uniprotkb/P49040/entry)。
[^invertase-versus-susy]: 转化酶与SuSy作为两类生理蔗糖裂解入口，以及拟南芥多突变体对二者组织作用的区分，见 [Normal growth of Arabidopsis requires cytosolic invertase but not sucrose synthase](https://pmc.ncbi.nlm.nih.gov/articles/PMC2722301/)。
