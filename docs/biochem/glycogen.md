# 糖原合成与分解

糖原是动物、真菌和许多细菌储存葡萄糖的分支多糖。在哺乳动物细胞中，它并不是一团裸露的糖链，而是与糖原合酶、磷酸化酶、分支酶、去分支酶以及调节蛋白结合成不断更新的颗粒。进食、禁食、运动或应激改变的并非一个简单“仓门”，而是葡萄糖进入、糖链延伸、分支重塑、末端磷酸解和产物去向之间的净通量。[^glycogen-overview]

## 分支颗粒同时解决储存与动员问题 { #granule-architecture }

糖原的线性区段由葡萄糖残基以 $\alpha(1\rightarrow4)$ 糖苷键连接，分支点则是 $\alpha(1\rightarrow6)$ 键。一个颗粒只有一个还原端，成熟颗粒的还原端通常位于内部；外周却有许多非还原端，糖原合酶和糖原磷酸化酶都从这些末端工作。详细的糖苷键、还原端和糖原—淀粉结构比较见[糖类](carbohydrate.md#starch-glycogen)。

把许多葡萄糖残基连接为一个大分子，能显著减少具有渗透活性的独立粒子数；适度而有规则的分支又提高水合与可溶性，并让多组酶同时接近不同非还原端。分支不是越多越好：链长与分支分布共同决定颗粒能否紧密装配、快速动员而又避免形成难溶的多聚葡聚糖。糖原颗粒还可按大小和亚细胞位置形成不同群体，说明“总糖原量”不足以描述每个局部储库的代谢作用。[^granule-dynamics]

## 肝与骨骼肌把同一产物送往不同终点 { #tissue-fates }

肝糖原主要在餐后储存来自门静脉和肝内碳流的葡萄糖，在吸收后期与短期禁食中参与缓冲血糖。肝细胞把糖原产生的葡萄糖-6-磷酸（G6P）送入内质网的 G6Pase 系统，生成游离葡萄糖并输出；这一终末步骤与[糖异生](gng.md#g6pase-bypass)共用。肝糖原分解与糖异生在时间上重叠，其相对贡献随禁食时长、营养组成、激素状态和个体代谢而变，不能用固定时点划出绝对接力线。

骨骼肌缺少足以承担血糖输出的 G6Pase 系统，所以肌糖原产生的 G6P主要留在细胞内，经[糖酵解](emp.md)支持收缩或进入其他支路。糖原来源的 G6P又已经越过己糖激酶步骤，适合快速供给高通量糖酵解。肝糖原由血糖稳态优先调用，肌糖原则服务局部能量需求；二者使用相似的反应化学，却依靠组织同工酶、受体和调节蛋白形成不同的生理输出。其他组织也有较小而局部化的糖原池，不宜把肝—肌二分推广为所有细胞的完整规则。[^tissue-specialization]

## UDP-葡萄糖把六碳磷酸接入糖链 { #glycogen-synthesis }

### 糖磷酸互变与 UDP-葡萄糖活化 { #udp-glucose-activation }

进入糖原合成的葡萄糖通常先成为 G6P。磷酸葡萄糖变位酶 1（PGM1）借磷酸化丝氨酸与葡萄糖-1,6-二磷酸中间体，催化 G6P与葡萄糖-1-磷酸（G1P）互变。随后 UDP-葡萄糖焦磷酸化酶 2（UGP2）催化

$$
\mathrm{G1P+UTP\rightleftharpoons UDP\!\text{-}glucose+PP_i}.
$$

焦磷酸酶继续水解 PP$_i$，在细胞条件下把净反应推向 UDP-葡萄糖生成。UDP-葡萄糖的异头碳已被核苷二磷酸离去基团活化，因而能把葡糖基转给正在延长的糖链；这比把合成笼统称为“缩醛反应”更能说明能量从哪里进入。[^udp-glucose]

### 糖原素提供经典引发方式，但不是绝对开关 { #glycogenin-priming }

在经典模型中，糖原素（glycogenin）先把 UDP-葡萄糖的葡糖基共价转移到自身 Tyr 残基，再自糖基化形成一段短 $\alpha(1\rightarrow4)$ 葡聚糖；糖原合酶随后接手延长。糖原素因此位于许多颗粒的还原端，也能与糖原合酶相互作用，但不能由此推出“糖原颗粒数严格等于糖原素分子数”或“糖原合酶离开糖原素便失活”。[^glycogenin-classic]

人类双等位 *GYG1* 缺陷的肌肉仍可形成大量糖原和多聚葡聚糖，糖原素缺失小鼠也能合成糖原。这些观察说明糖原素是重要的颗粒组织与质量控制因子，却不是所有体内糖原新生都不可替代的蛋白质引物；替代引发底物怎样形成仍未完全解决。因而教材中的自糖基化路线应保留为主线，同时把“绝对必需”降为可检验而已被反例修正的模型。[^glycogenin-dispensable]

### 糖原合酶延长主链，分支酶重新连接链段 { #elongation-branching }

糖原合酶把 UDP-葡萄糖的葡糖基转移到既有葡聚糖的非还原端，形成新的 $\alpha(1\rightarrow4)$ 键并释放 UDP。GYS1主要见于骨骼肌等肝外组织，GYS2是肝脏主要同工酶。糖原分支酶 GBE1则从足够长的链上切取末端链段，常为约 6–8 个残基，把它的还原端连接到同一颗粒另一位置的 C6羟基，生成 $\alpha(1\rightarrow6)$ 分支。[^synthase-branching]

| 反应层次 | 主要酶 | 化学结果 |
| --- | --- | --- |
| 糖磷酸互变 | PGM1 | G6P 与 G1P可逆互变 |
| 糖基活化 | UGP2、焦磷酸酶 | 生成 UDP-葡萄糖，并以 PP$_i$水解推动净合成 |
| 经典引发 | 糖原素 | 在蛋白质上形成短 $\alpha(1\rightarrow4)$ 葡聚糖接受体 |
| 主链延长 | GYS1／GYS2 | 向非还原端加入葡糖基并形成 $\alpha(1\rightarrow4)$ 键 |
| 分支生成 | GBE1 | 转移链段并形成新的 $\alpha(1\rightarrow6)$ 键 |

GBE1进行的是链内转糖基作用，不需要为每个分支另加 ATP。它也不是去分支酶的逆向版本：分支酶转移较长链段以建立结构，去分支酶则在分解受阻时先移动三个残基，再水解暴露的单个分支葡萄糖。

## 胞质分解以磷酸解保存糖苷键能量 { #cytosolic-glycogenolysis }

### 糖原磷酸化酶从非还原端释放 G1P { #glycogen-phosphorylase }

糖原磷酸化酶以无机磷酸而不是水进攻外周的 $\alpha(1\rightarrow4)$ 键：

$$
\mathrm{glycogen}_{n}+\mathrm{P_i}
\rightleftharpoons
\mathrm{glycogen}_{n-1}+\mathrm{G1P}.
$$

产物已经带有磷酸基，因而分解保留了一部分糖苷键的化学势。酶结合的磷酸吡哆醛（PLP）参与酸碱催化；这里使用的是 PLP 的磷酸基功能，而不是它在转氨反应中常见的醛基—亚胺电子汇化学。PLP 的反应多样性见[维生素与辅酶](vitamin_and_coenzyme.md#pyridoxal-phosphate)。[^phosphorylase-mechanism]

磷酸化酶沿线性链工作，到距 $\alpha(1\rightarrow6)$ 分支点四个残基时停止，留下极限糊精。葡萄糖酸-1,5-内酯等环状类似物的抑制研究曾用于探测葡糖基转移中类氧碳正离子过渡态，但抑制剂相似性本身不能证明反应中存在可自由扩散的氧鎓离子中间体。[^phosphorylase-transition-state]

### 双功能去分支酶清除极限糊精 { #debranching-and-pgm }

一个 AGL 多肽具有两种催化活性。4-$\alpha$-葡聚糖转移酶先把分支末端三个 $\alpha(1\rightarrow4)$ 连接的残基移到邻近非还原端，只在分支点留下一个葡萄糖；随后淀粉-$\alpha$-1,6-葡糖苷酶以水解切开该 $\alpha(1\rightarrow6)$ 键，释放游离葡萄糖。只有第二步是水解，不能把整个去分支过程概括为单一水解反应。[^debranching]

分支被清除后，磷酸化酶可继续处理新暴露的线性链。因此大多数残基以 G1P离开，分支点残基以游离葡萄糖离开；两者比例取决于实际分支频率，不能视作恒定整数。G1P再由 PGM1经葡萄糖-1,6-二磷酸中间体变为 G6P。肌细胞把它送入糖酵解，肝和肾的适当细胞还可借 G6Pase 系统生成血糖。

## 溶酶体降解是独立的并行路线 { #lysosomal-turnover }

部分胞质糖原可经自噬相关过程送入溶酶体，由酸性 $\alpha$-葡糖苷酶 GAA在酸性腔内水解 $\alpha(1\rightarrow4)$ 与 $\alpha(1\rightarrow6)$ 键，产物主要是游离葡萄糖。这条路线不使用胞质糖原磷酸化酶—AGL反应链，其相对贡献随组织、发育和代谢状态改变。GAA缺陷造成 Pompe病（糖原贮积病 II 型）：溶酶体糖原持续积累，尤其损害心肌、骨骼肌和呼吸相关肌群。[^lysosomal-glycogen]

把全部糖原分解都画成磷酸解，会漏掉这一细胞器路线；反过来，把 Pompe病解释成胞质磷酸化酶失活也会错置病变区室。溶酶体是否膨大、糖原结构是否异常以及可利用 G6P是否不足，是不同缺陷需要分别追踪的层次。

## 能量账本取决于从哪里开始、到哪里结束 { #energy-accounting }

从游离葡萄糖合成一个糖原残基时，HK或 GCK生成 G6P消耗 1 ATP，UGP2步骤又消耗 1 UTP；UDP通常由核苷二磷酸激酶借 ATP再生成 UTP。因此从游离葡萄糖起算，常说需要两个核苷三磷酸高能键当量；若起点本来就是 G6P，则只计算 UDP-葡萄糖活化所需的 UTP当量。分支酶本身不再消耗 ATP或 UTP。[^glycogen-energy]

在相反方向，多数糖原残基直接以 G1P离开并转为 G6P，绕过糖酵解最初的己糖激酶耗能步骤。若一路进行到乳酸，一份由线性糖原残基产生的 G6P可净生成 3 ATP，而一分子游离葡萄糖净生成 2 ATP；分支点释放的游离葡萄糖仍须先磷酸化。这个优势解释了糖原为何适合快速供能，却不意味着糖原分解本身已经生成 ATP：ATP是在后续糖酵解的底物水平磷酸化步骤形成的。

## 磷酸化网络与变构效应共同决定净通量 { #reciprocal-regulation }

### 共价修饰偏置活性，不制造绝对开关 { #covalent-regulation }

糖原合酶受到多位点磷酸化。总体上，去磷酸化形式活性较高，GSK3、PKA等激酶的某些磷酸化作用降低活性；但磷酸化酶并非必然完全关闭，G6P还能变构激活糖原合酶，并促进其成为磷酸酶底物。糖原磷酸化酶在磷酸化酶激酶作用下由 b型转向磷酸化的 a型，通常更偏向活性构象；肌型磷酸化酶 b仍可被 AMP显著激活。a／b命名因此表示共价状态与构象偏好，不等于跨组织通用的“全开／全关”。[^enzyme-regulation]

蛋白质磷酸酶 1（PP1）在糖原靶向亚基帮助下去磷酸化两条相向支路：它通常使糖原合酶趋于活化，同时使磷酸化酶和磷酸化酶激酶趋于失活。胰岛素信号还可经 AKT抑制 GSK3，并支持糖原合酶去磷酸化；胰高血糖素或肾上腺素引起的 cAMP—PKA信号则促进磷酸化酶激酶和糖原磷酸化酶活化，同时抑制糖原合酶。这样的互补调节降低大规模底物循环，却不要求合成和分解在每个颗粒、每一时刻绝不并存。[^pp1-insulin]

### 肝细胞感受血糖，肌细胞感受收缩与能荷 { #tissue-specific-regulation }

| 信号 | 肝糖原的典型响应 | 骨骼肌糖原的典型响应 |
| --- | --- | --- |
| 胰高血糖素 | 经 cAMP—PKA促进糖原动员，并与糖异生协同维持血糖 | 骨骼肌缺少相应的有效受体通路，不把胰高血糖素列作直接主调节者 |
| 肾上腺素 | 可经肾上腺素能信号促进糖原分解 | 经 $\beta$-肾上腺素能—cAMP通路促进糖原分解 |
| Ca$^{2+}$ | 可与肝细胞受体信号耦联 | 收缩时 Ca$^{2+}$结合磷酸化酶激酶的钙调蛋白型 $\delta$亚基，直接加强激酶活性 |
| AMP／ATP／G6P | 肝型磷酸化酶的调节重点不等同于肌型 | AMP提示能量不足并激活肌型磷酸化酶 b；ATP与 G6P通常对抗这一效应 |
| 葡萄糖 | 结合肝型磷酸化酶 a并稳定易被去磷酸化的构象，帮助停止净分解 | 不承担同样的血糖传感主线 |

收缩引起的 Ca$^{2+}$信号与 AMP升高能在激素变化之前迅速动员肌糖原。肝细胞则把葡萄糖本身、胰岛激素和神经内分泌信号汇合起来。具体响应还受颗粒定位、PP1靶向亚基、酶同工型、训练与营养状态影响，因此“胰岛素合成、胰高血糖素分解”只是全身方向，不足以替代组织内机制。运动中不同供能系统的相对贡献将在[肌细胞生理](../physiology/muscle.md)中展开，胰岛激素的分泌控制见[胰岛内分泌](../physiology/endo/endo_islet.md)。

## 肝糖原可经直接与间接路径补充 { #direct-indirect-pathways }

餐后肝糖原的直接路径把肝细胞摄取的葡萄糖依次转成 G6P、G1P和 UDP-葡萄糖，六碳骨架不先拆成三碳单位。间接路径则先由乳酸、丙氨酸等三碳前体经糖异生形成 G6P，再进入同一套 UDP-葡萄糖—糖原反应。两条路径在 G6P处汇合，所以同一颗粒无法仅凭终产物结构判断某个葡糖基来自哪条路径，通常需要稳定同位素与代谢模型估计。[^direct-indirect]

两条路径的相对贡献随膳食组成、肝葡萄糖摄取、激素背景、物种和测量方案改变。间接路径也不等于“食物葡萄糖必须先在肝外组织全部变成乳酸”：三碳前体可来自肠道、肝内糖酵解及多种外周组织。把间接路径写成餐后唯一或恒定占优的路线，会把条件依赖的示踪结果误成普遍生理定律。

## 遗传缺陷把反应区室与组织任务分离出来 { #glycogen-storage-diseases }

“糖原贮积病”（GSD）包含合成、胞质分解、溶酶体降解、糖酵解和葡萄糖输出等不同缺陷。其共同点不是糖原一定增多：糖原合酶缺陷可使储量降低，分支酶缺陷可形成难溶多聚葡聚糖，G6Pase缺陷则主要阻断游离葡萄糖输出。旧式罗马数字表在发现新基因后不断扩展，编号也有历史差异；当前判断应同时写出基因、区室、组织和被阻断的化学步骤。[^gsd-overview]

| 代表类型与基因 | 主要阻断位置 | 生化与组织后果 |
| --- | --- | --- |
| 0 型肝型，*GYS2* | 肝糖原合酶 | 肝糖原不足，易在禁食时出现酮性低血糖，餐后血糖与乳酸可升高 |
| I 型，*G6PC1*／*SLC37A4* | 内质网 G6P水解或转运 | 糖异生与糖原分解都难以完成游离葡萄糖输出；详见[糖异生](gng.md#clinical-boundaries) |
| II 型，*GAA* | 溶酶体酸性 $\alpha$-葡糖苷酶 | 溶酶体糖原积累，突出影响心肌、骨骼肌和呼吸肌 |
| III 型，*AGL* | 胞质去分支的转移酶／葡糖苷酶活性 | 极限糊精样糖原积累，肝受累并可伴骨骼肌或心肌表现 |
| IV 型，*GBE1* | 分支生成 | 分支不足、长链多聚葡聚糖积累，表型可偏肝脏或神经肌肉 |
| V 型，*PYGM* | 肌型糖原磷酸化酶 | 运动时难以动员肌糖原，出现活动不耐受、肌痛或横纹肌溶解风险 |
| VI 型，*PYGL* | 肝型糖原磷酸化酶 | 肝糖原动员受限，常见肝大与禁食耐受下降 |
| IX 型，*PHKA2*、*PHKB*、*PHKG2*等 | 磷酸化酶激酶 | 依亚基与组织表达形成肝型、肌型或复合表型 |

旧素材把“肝糖原合酶缺陷”列为 IX 型并单列 VIII 型磷酸化酶激酶缺陷，已不适合当前分子分类：肝糖原合酶缺陷通常列作 0 型，多种磷酸化酶激酶缺陷归入 IX 型谱系。VII 型 Tarui病由肌磷酸果糖激酶 *PFKM*缺陷导致，历史上虽纳入 GSD，却直接阻断糖酵解而非糖原末端切除，机制见[糖酵解](emp.md#nonequilibrium-control)。疾病表现、诊断和治疗须在[糖与能量代谢紊乱](../physiology/pathophysiology/metabolic_disorders.md)中结合临床证据讨论；这里的表格只用于定位反应层次。[^gsd-classification]

## 参考资料与延伸阅读

- Reactome, [Glycogen metabolism](https://reactome.org/content/detail/R-HSA-8982491)、[Glycogen synthesis](https://reactome.org/content/detail/R-HSA-3322077)与[Glycogen breakdown](https://reactome.org/content/detail/R-HSA-70221)。
- Roach, P. J. et al., [Glycogen and its metabolism: some new developments and old themes](https://pmc.ncbi.nlm.nih.gov/articles/PMC4945249/). *Biochemical Journal*, 2012。
- Prats, C. et al., [The dynamic life of the glycogen granule](https://pmc.ncbi.nlm.nih.gov/articles/PMC5949993/). *Journal of Biological Chemistry*, 2018。
- Adeva-Andany, M. M. et al., [Glycogen metabolism in humans](https://pmc.ncbi.nlm.nih.gov/articles/PMC4802397/). *BBA Clinical*, 2016。
- Petersen, M. C. et al., [Regulation of hepatic glucose metabolism in health and disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC5777172/). *Nature Reviews Endocrinology*, 2017。
- GeneReviews, [Glycogen Storage Disease Type I](https://www.ncbi.nlm.nih.gov/books/NBK1312/)、[Pompe Disease](https://www.ncbi.nlm.nih.gov/books/NBK1261/)、[Glycogen Storage Disease Type III](https://www.ncbi.nlm.nih.gov/books/NBK26372/)、[McArdle Disease](https://www.ncbi.nlm.nih.gov/books/NBK1344/)与[Phosphorylase Kinase Deficiency](https://www.ncbi.nlm.nih.gov/books/NBK55061/)。

[^glycogen-overview]: 人类合成、胞质分解及组织同工酶的通路层级据 Reactome [Glycogen metabolism（R-HSA-8982491）](https://reactome.org/content/detail/R-HSA-8982491)；颗粒作为多糖—蛋白质动态装配体的概念参见 [The dynamic life of the glycogen granule](https://pmc.ncbi.nlm.nih.gov/articles/PMC5949993/)。
[^granule-dynamics]: 糖原颗粒的层级、亚细胞分布与代谢酶结合参见 [The dynamic life of the glycogen granule](https://pmc.ncbi.nlm.nih.gov/articles/PMC5949993/)；糖原结构并非固定理想树状模型的边界另见 [Glycogen metabolism in humans](https://pmc.ncbi.nlm.nih.gov/articles/PMC4802397/)。
[^tissue-specialization]: 肝、肌及其他组织糖原的不同生理去向和同工酶调节，见 [Glycogen metabolism in humans](https://pmc.ncbi.nlm.nih.gov/articles/PMC4802397/)及 Reactome [Glycogen breakdown](https://reactome.org/content/detail/R-HSA-70221)。
[^udp-glucose]: PGM1、UGP2与 PP$_i$水解构成的 UDP-葡萄糖入口见 Reactome [Glycogen synthesis](https://reactome.org/content/detail/R-HSA-3322077)和 NCBI Bookshelf [Biochemistry, Glycogen](https://www.ncbi.nlm.nih.gov/books/NBK539802/)。
[^glycogenin-classic]: 糖原素自糖基化、与糖原合酶协作的经典模型参见 [Glycogen and its metabolism](https://pmc.ncbi.nlm.nih.gov/articles/PMC4945249/)及 Reactome [Glycogen synthesis](https://reactome.org/content/detail/R-HSA-3322077)。
[^glycogenin-dispensable]: 人类 *GYG1* 双等位缺陷与小鼠敲除对“必需引物”模型的修正，见 [Glycogenin is Dispensable for Glycogen Synthesis in Human Muscle](https://pmc.ncbi.nlm.nih.gov/articles/PMC7046021/)。
[^synthase-branching]: GYS1／GYS2延长、GBE1链段转移与分支长度，见 Reactome [Glycogen synthesis](https://reactome.org/content/detail/R-HSA-3322077)和 [Glycogen metabolism in humans](https://pmc.ncbi.nlm.nih.gov/articles/PMC4802397/)。
[^phosphorylase-mechanism]: 糖原磷酸化酶的磷酸解、PLP作用及组织同工酶，见 NCBI Bookshelf [Biochemistry, Glycogenolysis](https://www.ncbi.nlm.nih.gov/books/NBK549820/)和 GeneReviews [Glycogen Storage Disease Type VI](https://www.ncbi.nlm.nih.gov/books/NBK5941/)。
[^phosphorylase-transition-state]: 葡萄糖酸-1,5-内酯的抑制和类氧碳正离子过渡态解释，见 [Catalytic mechanism of alpha-retaining glucosyl transfer](https://pubmed.ncbi.nlm.nih.gov/15535798/)；相关抑制证据的早期来源见 [Isotopic effects and inhibition of polysaccharide phosphorylase](https://pubmed.ncbi.nlm.nih.gov/4928624/)。
[^debranching]: AGL先转移三个残基、再水解分支葡萄糖的双功能机制，见 NCBI Bookshelf [Biochemistry, Glycogen](https://www.ncbi.nlm.nih.gov/books/NBK539802/)和 Reactome [Glycogen breakdown](https://reactome.org/content/detail/R-HSA-70221)。
[^lysosomal-glycogen]: 溶酶体糖原自噬递送、GAA水解与 Pompe病区室病理，见 GeneReviews [Pompe Disease](https://www.ncbi.nlm.nih.gov/books/NBK1261/)及 NCBI Bookshelf [Biochemistry, Glycogenolysis](https://www.ncbi.nlm.nih.gov/books/NBK549820/)。
[^glycogen-energy]: UDP-葡萄糖活化的核苷酸账本与糖原来源 G6P绕过己糖激酶的 ATP差异，参见 [Glycogen metabolism in humans](https://pmc.ncbi.nlm.nih.gov/articles/PMC4802397/)和 NCBI Bookshelf [Biochemistry, Glycogen](https://www.ncbi.nlm.nih.gov/books/NBK539802/)。
[^enzyme-regulation]: 糖原合酶的多位点磷酸化、G6P变构激活及糖原磷酸化酶 a／b状态，见 [Glycogen metabolism in humans](https://pmc.ncbi.nlm.nih.gov/articles/PMC4802397/)和 [Glycogen and its metabolism](https://pmc.ncbi.nlm.nih.gov/articles/PMC4945249/)。
[^pp1-insulin]: PP1对合酶／磷酸化酶的相向去磷酸化，以及胰岛素—AKT—GSK3和 cAMP—PKA信号，见 [Regulation of hepatic glucose metabolism in health and disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC5777172/)及 [Glycogen metabolism in humans](https://pmc.ncbi.nlm.nih.gov/articles/PMC4802397/)。
[^direct-indirect]: 肝糖原直接与间接合成路径及条件依赖的贡献，见 [Regulation of hepatic glucose metabolism in health and disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC5777172/)和 [Glycogen metabolism in humans](https://pmc.ncbi.nlm.nih.gov/articles/PMC4802397/)。
[^gsd-overview]: GSD的异质性、不同酶缺陷与糖原量／结构并不一致，见 [Glycogen metabolism in humans](https://pmc.ncbi.nlm.nih.gov/articles/PMC4802397/)及 NCBI Bookshelf [Biochemistry, Glycogen](https://www.ncbi.nlm.nih.gov/books/NBK539802/)。
[^gsd-classification]: GSD I、II、III、V与磷酸化酶激酶缺陷的基因和组织谱分别见 GeneReviews [GSD I](https://www.ncbi.nlm.nih.gov/books/NBK1312/)、[Pompe Disease](https://www.ncbi.nlm.nih.gov/books/NBK1261/)、[GSD III](https://www.ncbi.nlm.nih.gov/books/NBK26372/)、[McArdle Disease](https://www.ncbi.nlm.nih.gov/books/NBK1344/)和[Phosphorylase Kinase Deficiency](https://www.ncbi.nlm.nih.gov/books/NBK55061/)；*GYS2*与肝型 0 型 GSD的对应关系见 [NCBI Gene](https://www.ncbi.nlm.nih.gov/gene/2998)。
