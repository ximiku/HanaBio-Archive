# 抗原加工、呈递与 MHC

适应性免疫先把复杂病原体拆解为受体能够读取的局部结构。B 细胞受体和抗体可以直接接触蛋白、糖、脂质或小分子表面的结构，常规 αβ T 细胞受体则主要读取细胞表面的“肽—主要组织相容性复合体”组合。细胞先取得蛋白质，在特定区室将其加工成肽，再把合适片段装入 MHC 分子的结合沟槽；T 细胞由此能够检查本来位于胞质、囊泡或细胞外的蛋白质。[^recognition-forms]

这套过程把分子降解、膜交通和淋巴细胞选择接到一起。蛋白酶切出的片段中只有一部分能被某个 MHC 等位基因稳定结合，形成的肽—MHC 复合物又只有一部分遇得到相应 T 细胞克隆。抗原是否产生应答，因而取决于摄取、加工、装载、细胞状态、宿主基因和淋巴细胞库的连续筛选；“外来程度”和分子大小只是其中两个变量。

## 抗原、免疫原与表位描述不同层次 { #antigen-immunogen-epitope }

抗原是能被抗体、B 细胞受体、T 细胞受体或其他特异性免疫受体识别的对象；免疫原则能在给定宿主和条件下诱导免疫应答。一个分子可以与既有抗体结合，却因剂量、进入途径、缺少先天激活、不能被有效呈递或宿主缺少相应细胞克隆而不能单独诱导显著应答。免疫原性是分子性质与宿主情境共同产生的结果，“抗原性”不宜同时承担结合能力和诱导能力两种含义。[^antigen-terms]

表位是某一克隆受体实际接触的局部结构。同一蛋白含有许多可能重叠的表位，因而可同时招募多个 B、T 细胞克隆。B 细胞和抗体常识别天然分子表面的构象表位，也能识别连续序列表位；构象表位可由一级序列中相距很远的残基在折叠后共同形成。常规 αβ T 细胞识别的蛋白表位则通常是加工后装入 MHC 的短肽，原蛋白内部原本不可接近的序列也能成为 T 细胞表位。[^b-t-epitopes]

半抗原是能被特异抗体或 B 细胞受体结合、却通常不能独立产生充分免疫原性的小化学基团。它与载体蛋白共价连接后，重复半抗原可促进 BCR 交联，载体又提供能由 MHC II 呈递的肽，使载体特异性辅助 T 细胞向半抗原特异性 B 细胞提供帮助。这种关联识别解释了半抗原—载体实验，也构成蛋白结合多糖疫苗的免疫学基础。核酸、多糖和脂质各自的免疫原性取决于结构、重复性、受体与递送环境，它们作为非蛋白分子并不自动取得半抗原身份。[^hapten-carrier]

细菌荚膜、细胞壁、鞭毛、菌毛和毒素都可提供抗原，但这些名称描述来源位置，不代表每种成分只含一个表位。不同物种或分子共享相似表位时，既有抗体或 TCR 可能发生交叉反应；强弱取决于接触面的保守程度、受体亲和力和多价几何。凝集吸收等传统方法怎样利用交叉反应区分抗体，将在[免疫检测与免疫干预](immunological_methods_therapy.md)中讨论。

## MHC 把肽的来源信息展示在细胞表面 { #mhc-restriction }

主要组织相容性复合体（major histocompatibility complex，MHC）最初因移植排斥中的强遗传效应得名，其持续的生理任务是装载细胞产生的肽并将其展示给 T 细胞。人的 MHC 称人类白细胞抗原（human leukocyte antigen，HLA）系统。常规 αβ TCR 同时接触肽和 MHC 沟槽边缘，识别对象是完整的肽—MHC 表面，而不是先后独立读取“外来肽”和“自身标签”。Doherty 与 Zinkernagel 的病毒感染细胞实验所揭示的 MHC 限制，后来由肽—MHC—TCR 的分子结构得到解释。[^mhc-restriction-history]

MHC I 由一条跨膜 α 重链与 β₂-微球蛋白组成，肽结合沟槽位于 α1、α2 结构域之间，两端相对封闭，常容纳 8—10 个氨基酸的肽。MHC II 由跨膜 α、β 两条链组成，沟槽两端开放，常结合约 13—17 个或更长的肽，肽两端可伸出沟槽。等位基因间差异集中在沟槽口袋，某些肽侧链作为锚定残基插入口袋，其余朝上残基与 MHC 表面共同构成 TCR 可读取的形状。[^mhc-structure]

CD8 结合 MHC I 重链较保守的 α3 区域，CD4 结合 MHC II 的非多态区域。两种共受体既稳定细胞接触，也把 Lck 等信号分子带到 TCR—CD3 复合体附近，因此 CD8 与 MHC I、CD4 与 MHC II 的配对同时具有结构和信号意义。成熟 T 细胞为何取得相应限制性由胸腺选择建立，见[淋巴细胞发育与受体多样性](lymphocyte_development_repertoire.md)。

## MHC I 通路持续抽样胞质蛋白 { #mhc-class-i-pathway }

经典 MHC I 表达于多数有核细胞，使组织细胞可以报告自身胞质和细胞核蛋白的组成。呈递库包含正常自身蛋白、病毒或其他胞内病原体蛋白、肿瘤突变蛋白以及快速失败的新生蛋白产物。蛋白质周转产生的底物经泛素—蛋白酶体系统等途径降解；炎症和干扰素可诱导免疫蛋白酶体亚基，改变部分切割偏好，但常规蛋白酶体同样持续提供 MHC I 肽源。[^mhc-i-source]

蛋白酶体产生的胞质肽主要由 TAP1／TAP2 组成的 ATP 依赖转运体送入内质网。过长肽的氨基端可由 ERAP 等氨肽酶修剪；新合成的 MHC I α 链先与 β₂-微球蛋白装配，再由 calreticulin、ERp57、tapasin 和 TAP 等组成的肽装载复合体协助取得稳定配体。合适肽进入沟槽后提高 MHC I 的稳定性，复合物经高尔基体到达质膜；空载或结合不稳的分子更容易被保留、回收或降解。少数肽可使用不依赖 TAP 或经典蛋白酶体的来源路线，不改变这条主干的组织原则。[^mhc-i-loading]

MHC I 通路显示的是抽样结果，不是把胞质蛋白等比例缩小。底物生成速率、蛋白酶体切口、TAP 转运偏好、ERAP 修剪、等位基因结合基序和复合物寿命会连续改变肽的丰度。感染细胞表面也仍以自身肽为多数；少量病原肽—MHC 只要遇到相应效应 CD8 T 细胞，便可能触发细胞毒反应。杀伤程序将在[T 细胞激活与效应](t_cell_immunity.md)中展开。

## MHC II 通路连接内吞货物与 CD4 T 细胞 { #mhc-class-ii-pathway }

经典 MHC II 持续高表达于树突状细胞、B 细胞和巨噬细胞，并见于胸腺上皮等专门细胞；炎症因子还可在部分其他细胞诱导表达。胞外蛋白经受体介导内吞、吞噬或大胞饮进入内体—溶酶体系统，酸化和 cathepsin 等蛋白酶使其展开并分段。B 细胞借 BCR 选择性浓缩相应抗原，巨噬细胞擅长吞噬并向已分化效应 T 细胞呈递，树突状细胞则把广泛取样与初始 T 细胞启动连接起来。[^apc-specialization]

MHC II 的 α、β 链在内质网合成时与不变链（invariant chain，Ii／CD74）装配。不变链占据肽沟槽，避免内质网肽过早结合，其胞质尾又把复合物导向酸性内体。蛋白酶逐步降解不变链后，沟槽中留下 class II-associated invariant chain peptide（CLIP）；HLA-DM 催化 CLIP 释放和肽交换，并偏向保留较稳定的肽—MHC II 复合物，HLA-DO 可在特定细胞与状态下调节 DM。装载后的复合物运到表面供 CD4 T 细胞检查。[^mhc-ii-loading]

“胞外蛋白进入 MHC II”是主要物流方向，却不是绝对来源边界。自噬可把胞质成分送入溶酶体相关区室，膜蛋白也会随内吞和更新进入 MHC II 加工系统。反过来，进入内体的抗原也可能转入 MHC I 通路。两类 MHC 的差异来自优先使用的细胞区室、装载机器和表达细胞，并非每个肽都能按来源被预先分进互不相通的管道。

## 交叉呈递让树突状细胞报告其他细胞 { #cross-presentation }

某些病毒不感染树突状细胞，肿瘤抗原也可能主要位于转化细胞内。cDC1 等树突状细胞可以摄取感染细胞、肿瘤细胞或其碎片，再把外源性蛋白产生的肽装入自身 MHC I，这一过程称交叉呈递。抗原可从吞噬体转入胞质并使用蛋白酶体、TAP 等装置，也可在囊泡内完成某些切割和装载；不同抗原和细胞使用的路线权重不同。[^cross-presentation]

交叉呈递描述肽怎样到达 MHC I，交叉启动（cross-priming）则描述这种呈递最终使初始 CD8 T 细胞增殖并取得效应功能。相同呈递在缺少炎症和共刺激时也可能促进交叉耐受。由此，发现表面存在特定肽—MHC I 不能单独推定应答方向，还要知道呈递细胞的成熟状态和伴随信号。

树突状细胞还可从其他细胞获得已经装载好的完整肽—MHC 复合物并直接展示，称为交叉装扮（MHC cross-dressing，也译交叉修饰）。它省略了受体细胞内的再加工，与“摄取蛋白后重新装载”的交叉呈递属于不同机制；实验中需要用供、受体 MHC 来源和加工依赖性将二者区分。[^cross-dressing]

## 呈递细胞的状态决定识别是否成为启动 { #presentation-costimulation }

多数有核细胞都能用 MHC I 向已经形成的 CD8 效应细胞报告胞内肽，却通常缺少启动初始 T 细胞所需的完整装置。树突状细胞在组织摄取抗原和感知危险后，上调 MHC、CD80／CD86、CCR7 与存活程序，迁入引流淋巴结，在同一细胞表面把抗原特异性和炎症背景交给稀少的初始 T 细胞。这里的“专业抗原呈递细胞”（professional antigen-presenting cell，常简称 APC）强调能够加工抗原并有效启动 T 细胞，不表示只有它们的表面存在 MHC。[^professional-apc]

初始 T 细胞激活常用三个层次描述：TCR 与肽—MHC 加上 CD4／CD8 提供抗原特异性信号，CD80／CD86 与 CD28 等组合提供共刺激，呈递细胞和组织产生的细胞因子塑造分化方向。只得到 TCR 信号的细胞可能进入无反应、删除或其他耐受结局；同一肽在成熟树突状细胞和稳态组织细胞上出现，免疫后果因此可以不同。三类信号在时间和空间上相互影响，并非三个彼此独立、达到固定剂量便自动完成的开关。[^three-signal-context]

B 细胞和巨噬细胞在已经建立的应答中同样重要。BCR 把低浓度蛋白浓缩并送入 MHC II 通路，使 B 细胞能从识别同一分子复合物的辅助 T 细胞获得关联帮助；巨噬细胞呈递吞噬对象产生的肽，可从效应 CD4 T 细胞得到进一步激活。初始启动、效应细胞回访和 B 细胞帮助发生在不同细胞组合与阶段，不能用一条“APC 呈递后 T 细胞激活”的直线代替。

## HLA 多样性塑造个体的呈递范围 { #hla-genetics }

人的经典 MHC I 基因主要为 *HLA-A*、*HLA-B*、*HLA-C*，经典 MHC II 主要为 *HLA-DP*、*HLA-DQ*、*HLA-DR*。这些基因位于 6 号染色体短臂的紧密区域，每条同源染色体携带的一组连锁等位基因构成 HLA 单倍型；来自父母的等位基因通常共显性表达。所谓 MHC III 区包含补体和炎症相关基因，却不产生另一类用于呈递的“MHC III 分子”。[^hla-loci]

HLA 位点具有极高多态性，许多变异集中在肽结合沟槽，改变可容纳的锚定残基和肽谱。多基因、共显性表达使一个杂合个体能同时展示多组肽，但任何个体都只携带群体等位基因库的一小部分。某种病原肽在一个人中成为优势表位，在另一 HLA 背景中可能结合很弱；特定 HLA 等位基因也可改变感染控制、药物超敏或自身免疫风险。关联表示呈递和选择机制受到影响，不表示携带等位基因便注定发生疾病。正式等位基因命名和序列以 IPD-IMGT/HLA 数据库为准。[^hla-polymorphism]

同一抗原最终常只激发针对少数优势表位的强 T 细胞应答。蛋白丰度和稳定性、摄取与切割、TAP 和修剪、肽—MHC 结合稳定性、表面复合物寿命、相应 T 细胞前体频率及克隆间竞争都会参与这套免疫优势层级。MHC 结合预测只覆盖其中一层，预测到高亲和肽不能替代对天然加工、表面展示和 T 细胞反应的实验证明。[^immunodominance]

免疫肽组学将细胞表面的 MHC 复合物免疫富集，洗脱其结合肽并用质谱鉴定，从而直接观察某种细胞在给定状态下展示的肽库。该方法仍受样本量、HLA 归属、低丰度肽和质谱检出偏好限制；检测到肽证明展示发生过，能否激活 T 细胞还需用肽—MHC 多聚体、功能测定或其他受体层证据检验。[^immunopeptidomics]

## 非经典呈递扩展了可被读取的化学空间 { #nonclassical-presentation }

肽并非 T 细胞能读取的唯一分子。CD1 家族具有与 MHC I 相似的折叠，却以疏水沟槽结合脂质及糖脂，并由 NKT 细胞等 T 细胞群识别；MR1 能呈递微生物核黄素合成途径产生的某些小分子代谢物，激活黏膜相关不变 T（MAIT）细胞。HLA-E 常结合经典 MHC I 信号肽来源片段，并通过 CD94／NKG2 受体向自然杀伤（NK）细胞报告 MHC I 装配状态，也可在特定情境呈递其他肽给 T 细胞。[^nonclassical-mhc]

这些系统的分子多态性、配体来源和受体库不同于经典 HLA-A／B／C 与 DP／DQ／DR，不能把它们简单称为 MHC I、II 通路的少数例外。它们共同说明“抗原呈递”的核心是把细胞内部或环境中的化学信息稳定放到细胞表面，供具有相应受体的淋巴细胞检查。

## 参考资料与延伸阅读 { #references }

- Murphy K, Weaver C, Berg LJ. *Janeway's Immunobiology*. 10th ed. W. W. Norton, 2022.
- Pishesha N, Harmand TJ, Ploegh HL. A guide to antigen processing and presentation. *Nature Reviews Immunology*. 2022;22:751–764.
- Neefjes J, Jongsma MLM, Paul P, Bakke O. Towards a systems understanding of MHC class I and MHC class II antigen presentation. *Nature Reviews Immunology*. 2011;11:823–836.
- Roche PA, Furuta K. The ins and outs of MHC class II-mediated antigen processing and presentation. *Nature Reviews Immunology*. 2015;15:203–216.
- Joffre OP, Segura E, Savina A, Amigorena S. Cross-presentation by dendritic cells. *Nature Reviews Immunology*. 2012;12:557–569.
- Dendrou CA, Petersen J, Rossjohn J, Fugger L. HLA variation and disease. *Nature Reviews Immunology*. 2018;18:325–339.
- Rossjohn J, Gras S, Miles JJ, Turner SJ, Godfrey DI, McCluskey J. T cell antigen receptor recognition of antigen-presenting molecules. *Annual Review of Immunology*. 2015;33:169–200.

[^recognition-forms]: BCR／抗体直接识别多类天然结构，而常规 αβ TCR 识别肽—MHC 复合物的教材框架，参见 NCBI Bookshelf [Summary to Chapter 3](https://www.ncbi.nlm.nih.gov/books/NBK27116/)与 Pishesha 等 [A guide to antigen processing and presentation](https://www.nature.com/articles/s41577-022-00707-2)。
[^antigen-terms]: 抗原、免疫原、表位与半抗原的术语边界，参见 NCBI Bookshelf [Immunobiology Glossary](https://www.ncbi.nlm.nih.gov/books/NBK10759/)；本页据此纠正旧素材把“能诱导应答”和“能发生特异结合”合为一个抗原定义的做法。
[^b-t-epitopes]: B 细胞天然构象识别与 T 细胞加工后肽识别的差别，参见 NCBI Bookshelf [Summary to Chapter 3](https://www.ncbi.nlm.nih.gov/books/NBK27116/)及 [Specific Acquired Immunity](https://www.ncbi.nlm.nih.gov/books/NBK8143/)。
[^hapten-carrier]: 半抗原—载体、关联识别和多糖结合疫苗的逻辑，参见 NCBI Bookshelf [B-cell activation by armed helper T cells](https://www.ncbi.nlm.nih.gov/books/NBK27142/)。
[^mhc-restriction-history]: MHC 限制的实验发现、病毒肽与自身 MHC 共同构成 TCR 配体，参见诺贝尔奖官方 [1996 年生理学或医学奖新闻稿](https://www.nobelprize.org/prizes/medicine/1996/press-release/)。
[^mhc-structure]: MHC I／II 的亚基组成、沟槽两端结构、常见肽长和锚定残基，参见 NCBI Bookshelf [T Cells and MHC Proteins](https://www.ncbi.nlm.nih.gov/books/NBK26926/)与 [Antigen recognition by T cells](https://www.ncbi.nlm.nih.gov/books/NBK27098/)。
[^mhc-i-source]: 胞质和核蛋白、蛋白酶体／免疫蛋白酶体与新生或周转蛋白进入 MHC I 肽库，参见 Neefjes 等 [Towards a systems understanding of MHC class I and MHC class II antigen presentation](https://www.nature.com/articles/nri3084)。
[^mhc-i-loading]: 蛋白酶体、TAP、ERAP、β₂-微球蛋白和肽装载复合体的顺序与质量控制，参见 Pishesha 等的抗原加工指南及 Jhunjhunwala 等 [Antigen presentation in cancer](https://www.nature.com/articles/s41568-021-00339-z)。
[^apc-specialization]: 树突状细胞、B 细胞、巨噬细胞和胸腺上皮的 MHC II 表达、取样及呈递差异，参见 Roche 与 Furuta [The ins and outs of MHC class II-mediated antigen processing and presentation](https://www.nature.com/articles/nri3818)。
[^mhc-ii-loading]: 不变链、CLIP、酸性内体、HLA-DM／DO 和 MHC II 肽编辑，参见 NCBI Bookshelf [Major histocompatibility complex: antigen processing and presentation](https://www.ncbi.nlm.nih.gov/books/NBK459467/)及 Roche 与 Furuta 的综述。
[^cross-presentation]: 外源抗原进入 MHC I、胞质与囊泡路线及交叉启动／耐受边界，参见 Joffre 等 [Cross-presentation by dendritic cells](https://www.nature.com/articles/nri3254)。
[^cross-dressing]: 完整肽—MHC 从供体细胞转移给树突状细胞且无需重新加工的原始证据，参见 Wakim 与 Bevan [Cross-dressed dendritic cells drive memory CD8 T-cell activation after viral infection](https://www.nature.com/articles/nature09863)。
[^professional-apc]: 初始 T 细胞启动需要抗原呈递和共刺激由同一活化 APC 提供的教材证据，参见 NCBI Bookshelf [The production of armed effector T cells](https://www.ncbi.nlm.nih.gov/books/NBK27118/)；细胞身份和迁移路线见[免疫细胞、组织与迁移](immune_cells_tissues.md#mononuclear-phagocytes-dendritic-cells)。
[^three-signal-context]: CD80／CD86—CD28 共刺激、缺少共刺激时的无反应或删除，参见 NCBI Bookshelf [Helper T Cells and Lymphocyte Activation](https://www.ncbi.nlm.nih.gov/books/NBK26827/)；分化程序和负调节留给 T 细胞与耐受页面。
[^hla-loci]: 经典 HLA-A／B／C 与 DP／DQ／DR 的基因和蛋白组成，参见 NCBI Bookshelf [Histocompatibility](https://www.ncbi.nlm.nih.gov/books/NBK608307/)；人 HLA 正式命名与序列由 [IPD-IMGT/HLA Database](https://www.ebi.ac.uk/ipd/imgt/hla/index.html)维护。
[^hla-polymorphism]: HLA 多态性、沟槽变异和疾病机制边界，参见 Dendrou 等 [HLA variation and disease](https://www.nature.com/articles/nri.2017.143)；等位基因—疾病关联不能独立证明个体结局。
[^immunodominance]: 抗原加工、肽稳定性、T 细胞前体与竞争共同塑造免疫优势，参见 Sercarz 与 Maverakis [MHC-guided processing](https://www.nature.com/articles/nri1149)及 Kim 等 [Divergent paths for the selection of immunodominant epitopes](https://www.nature.com/articles/ncomms6369)。
[^immunopeptidomics]: MHC 免疫富集、结合肽洗脱、质谱鉴定及方法局限，参见 Bruno [The genomics revolution comes to the immunopeptidome](https://www.nature.com/articles/s41435-023-00244-5)及 Arshad 等 [Immunopeptidomics for autoimmunity](https://www.nature.com/articles/s41540-024-00482-x)。
[^nonclassical-mhc]: CD1 对脂质、MR1 对小分子代谢物的呈递，参见 McWilliam 等 [Lipid and small-molecule display by CD1 and MR1](https://www.nature.com/articles/nri3889)；HLA-E 与 NK 受体的关系参见 Braud 等 [HLA-E binds to natural killer cell receptors CD94/NKG2A, B and C](https://www.nature.com/articles/35869)。
