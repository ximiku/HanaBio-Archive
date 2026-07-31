# 孟德尔遗传及其扩展

孟德尔遗传首先是一套由杂交结果反推遗传单位行为的方法。研究者选择差异清楚的亲本，控制交配方向，逐代记录子代，再用概率模型判断某种遗传解释能否产生所见计数。分离律和独立分配律描述的是等位基因进入配子的方式；显性、共显性、上位效应和外显率描述的则是基因型怎样映射为可观察表型。把这两个层次分开，许多看似“偏离孟德尔比例”的现象仍可由正常分离与另一套表型分类共同解释。

经典模型把遗传信息视为可分离的颗粒，这一判断没有要求基因在物理上不可再分。基因内部可以发生突变和重组，同一基因也可以有许多等位变异；在一次特定杂交中，只要这些变异能够作为座位上的状态被追踪，传递遗传学仍可把它们当作分析单位。现代遗传学因而保留孟德尔的实验逻辑，同时用染色体、DNA 序列和分子通路解释这些单位为何分离、何时不独立，以及为何同一基因型未必产生同一表型。[^mendel-chromosome]

## 杂交设计把表型差异转化为可检验的遗传模型 { #cross-design }

性状（character）是所研究的可变属性，表型（phenotype）是个体在给定尺度上的可观察状态。座位（locus）指染色体上的遗传位置，等位基因（allele）是该位置可区别的序列或功能状态，基因型（genotype）则记录个体在一个或多个座位上的等位组合。二倍体在某座位携带两个相同等位基因时为纯合，携带两个不同等位基因时为杂合；这些术语只说明组合，不预先规定表型。

一个典型单因子杂交从两个稳定传递相反表型的纯系开始。以 $AA\times aa$ 表示亲本代（P），两亲本分别只产生 $A$ 或 $a$ 配子，第一子代（F$_1$）因此全为 $Aa$。让 F$_1$ 自交或彼此杂交得到 F$_2$，再继续检查 F$_3$，可以区分表型相同而基因型不同的个体。正交与反交交换雌雄亲本，用来识别伴性、母体效应或细胞质来源；回交是子代与某一亲本类型交配，测交则特指把待测个体与在目标座位纯合隐性的个体交配，使待测者产生的配子直接显现在子代中。育种中反复接受回交的亲本称轮回亲本，提供待导入等位基因的另一亲本称非轮回亲本或供体亲本；这些名称描述育种设计，不是新的遗传方式。

棋盘格可以枚举少数座位的配子组合，却不是遗传规律本身。真正需要说明的是每类配子的概率、受精组合的概率，以及哪些基因型被合并成同一表型。这个表达方式也更容易扩展到多座位、复等位基因和不完全外显的情形。

## 分离律来自同源染色体上的等位分配 { #segregation }

杂合体 $Aa$ 形成配子时，两种等位基因通常等概率分开，因此 $P(A)=P(a)=1/2$。两个 $Aa$ 个体交配时，合子由两次独立取样形成：$AA$ 的概率为 $1/4$，$Aa$ 为 $1/2$，$aa$ 为 $1/4$。这就是 F$_2$ 的 $1:2:1$ 基因型比。若 $AA$ 与 $Aa$ 在所测表型上相同，才进一步合并为 $3:1$ 表型比；不完全显性或共显性会保留三个可辨表型，但等位基因仍按 $1:2:1$ 分离。

在细胞层面，同源染色体于减数第一次分裂分向两极，使同一座位的两个等位基因进入不同的单倍体产物；受精再恢复成对状态。这个解释以规则减数分裂、配子随机结合、各基因型在观察前没有差异性死亡或取样偏倚为前提。染色体不分离、减数分裂驱动、配子竞争、合子致死和分型误差都可能改变实测计数，但应根据独立证据逐项检验，而不能看到比例不整齐便笼统宣布“分离律失效”。[^segregation-boundaries]

测交把这种分离转成直接读出。若显性表型个体是 $AA$，与 $aa$ 交配的子代全为 $Aa$；若它是 $Aa$，子代预期为 $Aa:aa=1:1$。同一设计用于两个座位时还可揭示连锁，但重组分数和遗传图距属于[连锁、交换与遗传作图](linkage_mapping.md)，不应把“测交”本身等同于某一种用途。

## 独立分配把多座位问题拆成概率乘积 { #independent-assortment }

不同同源染色体对在减数第一次分裂中各自定向。若 $A/a$ 与 $B/b$ 位于不同染色体，$AaBb$ 个体产生 $AB$、$Ab$、$aB$、$ab$ 四类配子的概率各为 $1/4$。两个双杂合体交配时，每个座位单独仍给出 $3/4$ 显性表型与 $1/4$ 隐性表型；乘法法则得到

$$
P(A\_B\_)=\frac{3}{4}\times\frac{3}{4}=\frac{9}{16},
$$

其余三类依次为 $3/16$、$3/16$ 和 $1/16$，由此形成 $9:3:3:1$。这里的下划线表示该位置可以是显性纯合或杂合。加法法则用于互斥途径，例如 $Aa$ 可以由母方给 $A$、父方给 $a$，也可以反向形成；乘法法则用于需要同时发生的独立事件。对于 $n$ 次同类独立试验，某事件恰出现 $k$ 次的概率为

$$
P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}.
$$

同一条染色体上相距较近的座位通常不会独立分配；交换可使距离较远的同染色体座位在统计上接近独立。因而“非等位基因自由组合”必须附带染色体位置和重组条件，不能写成对所有不同基因都成立的无条件定律。[^independent-assortment]

## 子代计数检验的是概率模型 { #goodness-of-fit }

分离比是大量重复下的期望比例，不是每一窝、每一果荚都必须精确复制的整数模板。样本越小，随机波动相对于总数越大；培养条件、表型判定时点和遗漏死亡个体还会引入系统偏差。实验记录因此应保留原始计数、交配单位与重复，而不只把结果约成一个比例。

当零假设规定了各类别概率时，可用拟合优度卡方统计量概括观察值与期望值的差距：

$$
\chi^2=\sum_{i=1}^{k}\frac{(O_i-E_i)^2}{E_i},
$$

其中 $O_i$ 是第 $i$ 类观察数，$E_i=Np_i$ 是模型给出的期望数。若 $k$ 类概率均由理论预先给定且总数固定，自由度通常为 $k-1$；若从同一数据估计了额外参数，还要扣除相应自由度。卡方分布只是离散计数分布的渐近近似，期望数很小或类别极不均衡时，应预先合并有生物学意义的类别，或改用精确二项／多项方法。[^chi-square]

$p$ 值表示在零假设及抽样模型成立时，获得当前或更极端偏差的概率。$p$ 较小提示数据与该模型不相容；$p$ 不小只表示现有样本没有检出足够大的偏离，并不证明遗传定律为真，也不排除低外显、轻度选择或连锁等效应。检验前还须明确表型类别、显著性阈值和备择机制，避免在观察结果后反复改分组直到“符合比例”。

## 等位基因关系决定杂合体怎样被分类 { #allelic-relationships }

显性描述的是同一座位两个等位基因在某个表型层级上的关系。一个等位基因在外观上显性，不表示它更常见、更有适合度，也不表示其产物必然抑制另一产物。许多功能缺失变异呈隐性，是因为一份正常拷贝提供的产物已超过该表型所需阈值；单倍剂量不足、显性负效应、功能获得或异位表达则可使变异在杂合体中显现。换用分子读出时，原先“完全显性”的两个基因型也可能可以区分。[^dominance-mechanisms]

完全显性时，杂合体与一种纯合体在所测表型上归为同类；不完全显性时，杂合体处在两个纯合表型之间；共显性时，两种等位产物或抗原可同时被检出。MNS 血型中，*GYPA* 的 M 与 N 等位基因在杂合红细胞上共同表达相应糖蛋白抗原，是共显性的直接例子。所谓“镶嵌显性”不宜作为与共显性并列的普遍等位关系：个体不同区域表达不同状态，还可能来自细胞谱系、体细胞变异、随机单等位表达或染色体失活，必须另寻细胞层面的证据。

一个二倍体个体在一个座位最多携带两个等位基因，但群体中可存在复等位系列。若某座位有 $n$ 个等位基因且所有二等位组合均可存活，纯合与无序杂合基因型合计为

$$
n+\frac{n(n-1)}{2}=\frac{n(n+1)}{2}.
$$

ABO 座位的常见 $I^A$、$I^B$ 和 $i$ 说明复等位与共显性可以同时出现：$I^AI^B$ 红细胞可形成 A、B 两类抗原，而常见 $i$ 等位基因不产生有活性的相应糖基转移酶。这个三等位模型还依赖另一座位提供底物。*FUT1* 两份均失活时，红细胞不能正常形成 H 前体，即使携带 $I^A$ 或 $I^B$ 也不能内源合成 A、B 抗原；*FUT2* 状态、残余酶活和分泌物来源抗原又会影响经典孟买型与类孟买型的血清学表现。这是上游通路缺陷掩盖下游 ABO 基因型的隐性上位。凝集素只是可用于识别特定糖链的试剂类别，不能一概等同于“抗 H 抗体”。血清学和输血后果见[血型与输血](../physiology/blood/blood_types.md#bombay-phenotype)。[^blood-group-alleles]

致死等位基因改变的是观察前的存活概率。若某等位基因在杂合体产生可见表型、在纯合体胚胎期致死，两个杂合亲本受精时仍形成 $1:2:1$ 合子基因型，存活子代中却只剩 $1:2$。因此“$2:1$”不是新的配子分离律，而是分离以后一类合子被移除的结果。显性致死变异若在生殖前总能致死，通常难以经患病亲本持续传递；迟发、低外显或新生变异可改变这一结论。遗传性视网膜母细胞瘤也不应列作简单“显性致死”：*RB1* 胚系易感按常染色体显性模式传递，肿瘤细胞常需另一份 *RB1* 再受损，家系层级与细胞层级是两个不同问题。[^lethal-and-retinoblastoma]

## 非等位基因互作重排双杂合表型 { #gene-interactions }

在两个独立分配的座位中，$AaBb\times AaBb$ 仍产生四个基础基因型组：$A\_B\_$、$A\_bb$、$aaB\_$、$aabb$，概率分别为 $9/16$、$3/16$、$3/16$、$1/16$。若两个基因的产物参与同一合成链、并行支路或抑制回路，这四组可被合并成较少的表型。经典比例只是这种“基因型组如何合并”的速记，而不是脱离机制的定律。

| 常见 F$_2$ 表型比 | 基因型组的合并方式 | 一种可能的通路解释 |
| --- | --- | --- |
| $9:3:3:1$ | 四组各自可辨 | 两座位分别改变可区分的表型维度 |
| $9:7$ | $A\_B\_$；其余三组 | 两步都需要功能产物，任一步中断都到达同一终点 |
| $9:3:4$ | $A\_B\_$；$A\_bb$；$aaB\_+aabb$ | $aa$ 阻断上游步骤，掩盖 $B/b$ 的差别 |
| $9:6:1$ | $A\_B\_$；$A\_bb+aaB\_$；$aabb$ | 两种产物共同存在、单独存在和都缺失形成三级输出 |
| $12:3:1$ | $A\_B\_+A\_bb$；$aaB\_$；$aabb$ | 显性 $A$ 状态掩盖另一座位 |
| $13:3$ | $A\_B\_+A\_bb+aabb$；$aaB\_$ | 显性抑制状态与双缺失归入同一类 |
| $15:1$ | 除 $aabb$ 外全部；$aabb$ | 任一座位有功能拷贝便足以形成同一输出 |

“互补基因”“隐性上位”“抑制基因”“积加效应”等名称在教材间并不完全统一，真实实验也可能因不完全外显、连锁和生活力差异偏离整数比。分析时应先写出四个基础基因型组，再依据代谢物、酶活、表达或双突变表型判断合并原因。上位效应并不意味着参与互作的等位基因停止按孟德尔方式分离；它表示一个座位改变了另一座位对所测表型的可见效应。[^epistasis-logic]

## 基因型效应随遗传背景和环境展开 { #genotype-environment }

外显率是在规定人群、年龄、环境和判定标准下，具有某一基因型的个体中出现指定表型的比例；表现度描述已经出现该表型的个体之间，表型程度或组成怎样变化。前者回答“是否达到观察阈值”，后者回答“表现到什么程度”。两者都针对明确的基因型—表型关系，不是某个基因永久不变的常数。年龄、性别相关生理、等位变异本身、修饰座位、环境暴露和随机发育过程都可改变它们。[^penetrance-expressivity]

反应规范描述同一基因型在一系列环境中的表型函数，而非一个固定数值。不同基因型的反应规范若不平行，便存在基因型—环境互作。环境诱导出与已知遗传变异相似的表型称为拟表型或表型模写（phenocopy），它不因此成为可遗传的 DNA 变异。遗传同化则是跨世代选择使原先依赖环境诱导的表型逐渐在无诱导环境下也出现的群体演化过程，不能解释成单个个体把获得性表型“改写进”基因组。[^reaction-norm-assimilation]

多效性指同一基因的变异影响多个表型维度；遗传异质性指相似表型可由不同座位或同一座位的不同变异造成。修饰基因、通路上位和环境作用还会进一步改变结果。因此，“单基因性状”表示某个座位在特定家系或实验中具有可追踪的主要因果作用，不表示其他基因和环境完全没有作用。

## 人类孟德尔性状需要家系与变异证据共同解释 { #human-mendelian-inheritance }

在常染色体显性模式中，一份相关等位变异即可显著提高指定表型出现的概率，杂合亲本每次生育向子代传递该变异的概率通常为 $1/2$；在常染色体隐性模式中，指定表型通常需要两份相关变异，两个杂合携带者的子代在模型条件下有 $1/4$ 概率获得双等位基因型。这些数字是每次受精的条件概率，不保证四名子女恰好各占一类，也不能由家庭规模很小的表型计数直接确认致病变异。伴 X、伴 Y 和性别决定的家系特征见[性别决定、伴性遗传与细胞质遗传](sex_cytoplasmic.md)。

人类家系还会受到新生变异、生殖系或体细胞嵌合、年龄相关外显、误诊、收养关系和小家系的影响。相似疾病可有遗传异质性，同一变异也可呈多效性和可变表现度。HbS、地中海贫血、G6PD 缺乏和凝血因子缺陷分别展示了蛋白聚合、亚基供给、氧化防线和止血通路的分子后果；本页只用它们说明“等位传递”与“表型形成”应分层分析，不重复[蛋白质功能](../biochem/protein_function.md#hbs-polymerization)、[磷酸戊糖途径](../biochem/ppp.md#g6pd-deficiency)和[生理性止血](../physiology/blood/blood_hemostasis.md)已有的机制。完整的家系判读、变异证据、遗传检测和伦理边界留给[人类遗传学](developmental_human.md)。[^human-genetic-evidence]

## 参考资料与延伸阅读 { #references }

- Cooper GM. [Heredity, Genes, and DNA](https://www.ncbi.nlm.nih.gov/books/NBK9944/). In: *The Cell: A Molecular Approach*. 2nd ed. Sinauer Associates; 2000.
- Strome S, Bhalla N, Kamakaka R, Sharma U, Sullivan W. [Clarifying Mendelian vs non-Mendelian inheritance](https://pmc.ncbi.nlm.nih.gov/articles/PMC11228857/). *Genetics*. 2024;227:iyae078.
- NIST/SEMATECH. [Chi-Square Goodness-of-Fit Test](https://www.itl.nist.gov/div898/handbook/eda/section3/eda35f.htm). *e-Handbook of Statistical Methods*.
- Wilkie AOM. [The molecular basis of genetic dominance](https://pubmed.ncbi.nlm.nih.gov/8182727/). *Journal of Medical Genetics*. 1994;31:89–98.
- Dean L. [The ABO blood group](https://www.ncbi.nlm.nih.gov/books/NBK2267/), [The Hh blood group](https://www.ncbi.nlm.nih.gov/books/NBK2268/) and [The MNS blood group](https://www.ncbi.nlm.nih.gov/books/NBK2274/). In: *Blood Groups and Red Cell Antigens*. NCBI; 2005.
- National Academies of Sciences, Engineering, and Medicine. [An Evidence Framework for Genetic Testing](https://www.ncbi.nlm.nih.gov/books/NBK425808/). National Academies Press; 2017.
- Ehrenreich IM, Pfennig DW. [Genetic assimilation: a review of its potential proximate causes and evolutionary consequences](https://pmc.ncbi.nlm.nih.gov/articles/PMC4845796/). *Annals of Botany*. 2016;117:769–779.
- Lohmann DR, Gallie BL. [Retinoblastoma](https://www.ncbi.nlm.nih.gov/books/NBK1452/). *GeneReviews®*. Updated 2023.

[^mendel-chromosome]: 孟德尔杂交、基因型／表型、减数分裂与染色体分离之间的关系见 Cooper 的教材章节 [Heredity, Genes, and DNA](https://www.ncbi.nlm.nih.gov/books/NBK9944/)；基因可在分子层面继续分解，不改变等位状态可作为杂交分析单位。
[^segregation-boundaries]: 分离与染色体行为的经典框架见 [Heredity, Genes, and DNA](https://www.ncbi.nlm.nih.gov/books/NBK9944/)；Strome 等的 [Clarifying Mendelian vs non-Mendelian inheritance](https://pmc.ncbi.nlm.nih.gov/articles/PMC11228857/)进一步区分等位分离、表型映射和真正的非孟德尔传递。
[^independent-assortment]: 不同染色体上的基因独立分配、同染色体基因的连锁及重组距离效应见 [Heredity, Genes, and DNA](https://www.ncbi.nlm.nih.gov/books/NBK9944/)；概率乘法只适用于相应事件独立的模型。
[^chi-square]: 统计量、期望频数和自由度的通用定义见 NIST/SEMATECH [Chi-Square Goodness-of-Fit Test](https://www.itl.nist.gov/div898/handbook/eda/section3/eda35f.htm)。卡方是渐近检验，低期望计数不能机械套表。
[^dominance-mechanisms]: NHGRI 将显性界定为观察性状与一对等位基因之间的关系，见 [Dominant Traits and Alleles](https://www.genome.gov/genetics-glossary/Dominant-Traits-and-Alleles)；单倍剂量不足、显性负效应、功能获得等分子来源见 Wilkie 的[综述](https://pubmed.ncbi.nlm.nih.gov/8182727/)。
[^blood-group-alleles]: ABO 糖基转移酶、*FUT1*—H 前体和孟买表型见 NCBI Bookshelf [The ABO blood group](https://www.ncbi.nlm.nih.gov/books/NBK2267/)与 [The Hh blood group](https://www.ncbi.nlm.nih.gov/books/NBK2268/)；M／N 共显性及 *GYPA* 分子基础见 [The MNS blood group](https://www.ncbi.nlm.nih.gov/books/NBK2274/)。
[^lethal-and-retinoblastoma]: 致死等位改变存活子代比例而不改变受精时的分离概率。视网膜母细胞瘤的胚系显性易感、体细胞第二次事件、外显率与嵌合边界见 GeneReviews [Retinoblastoma](https://www.ncbi.nlm.nih.gov/books/NBK1452/)。
[^epistasis-logic]: 双杂合基础分离与表型组重排的区别见 Strome 等的 [Clarifying Mendelian vs non-Mendelian inheritance](https://pmc.ncbi.nlm.nih.gov/articles/PMC11228857/)；经典比例只是特定完全外显、独立分配模型下的分组结果。
[^penetrance-expressivity]: 外显率、表现度、修饰背景与因果推断局限见 National Academies [Evidence](https://www.ncbi.nlm.nih.gov/books/NBK425809/)及 [Understanding Genetic Variance and Phenotype Expression](https://www.ncbi.nlm.nih.gov/books/NBK425811/)。
[^reaction-norm-assimilation]: 基因型—环境互作和反应规范的概念见 NCBI Bookshelf [Human Genetics and the Human Genome Project](https://www.ncbi.nlm.nih.gov/books/NBK225676/)；遗传同化是跨世代选择过程，见 Ehrenreich 与 Pfennig 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4845796/)。
[^human-genetic-evidence]: 单基因病的遗传模式、遗传背景与环境作用概览见 NCBI Bookshelf [Genetics 101](https://www.ncbi.nlm.nih.gov/books/NBK132152/)；外显率不足和表现度变化为何限制从变异直接预测个体表型，见 National Academies [An Evidence Framework for Genetic Testing](https://www.ncbi.nlm.nih.gov/books/NBK425808/)。
