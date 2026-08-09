# 多元统计、降维与分类

一个生物样本往往同时留下许多测量：植物个体有株高、叶面积、花期和多种元素含量，一个样地有数十至数百个物种的丰度，一个细胞则有成千上万个基因的表达量。逐个变量分别分析可以回答每个指标的边际变化，却会丢失变量之间的协同、权衡和冗余；把所有变量直接放进一张图或一个模型，又会遇到尺度不一致、维数过高、共线和多重解释等问题。

多元统计以“每个观察单位对应一个变量向量”为出发点。它可以压缩相关变量、按样本间差异重建低维结构、寻找未知分组、利用已知类别作预测，也可以联合检验多个响应。方法名称很多，但选择顺序始终应从研究对象开始：哪些行是独立单位，哪些列是响应或特征，距离或协方差表达了什么生物学差异，最终目标是探索、解释、检验还是预测。

## 多变量问题与数据矩阵 { #multivariate-questions }

### 多预测变量、多响应与条件关联

原素材把回归和相关分为一元回归、多元回归、单相关、复相关与偏相关。这套术语保留了从两个变量走向多个变量的经典入口，但“多元”在不同语境中指向不同结构：

| 数据结构 | 典型记号 | 核心问题 | 常用方法 |
| --- | --- | --- | --- |
| 一个响应、多个预测变量 | \(\mathbf y,\mathbf X\) | 在其他预测变量给定时，某变量与响应怎样关联或怎样预测响应 | 多元（多重）回归、GLM、正则化 |
| 两个变量间的条件关联 | \(X,Y\mid\mathbf Z\) | 去除 \(\mathbf Z\) 的线性部分后，\(X\) 与 \(Y\) 还剩多少线性关联 | 偏相关、部分回归 |
| 一个响应与一组预测变量的总体线性关联 | \(Y,\mathbf X\) | \(Y\) 与全部预测变量最优线性组合的相关有多强 | 复相关系数 |
| 同一单位上的多个响应 | \(\mathbf Y\in\mathbb R^{n\times q}\) | 处理是否改变整体响应向量，各响应怎样共同变化 | MANOVA、多响应回归、典范分析 |
| 一组多维特征，没有预设响应 | \(\mathbf X\in\mathbb R^{n\times p}\) | 样本间的主要变化轴、邻近关系或未知分组是什么 | PCA、排序、聚类 |
| 多维特征与已知类别 | \(\mathbf X,g\) | 能否把新样本归入已定义类别 | 判别分析及其他监督分类 |

多元回归仍只有一个响应；它已在[相关、回归与模型诊断](correlation_regression.md#multiple-regression)中按设计矩阵、条件系数和共线性展开。复相关系数是观测 \(Y\) 与其多元线性回归拟合值 \(\widehat Y\) 的相关，在含截距的普通最小二乘模型中满足

\[
R_{Y\cdot 1\ldots p}
=\operatorname{cor}(Y,\widehat Y)
=\sqrt{R^2}.
\]

它概括整组预测变量对一个响应的线性拟合程度，却不说明哪一个预测变量有独立贡献，也不产生因果解释。偏相关则是两个变量分别对 \(\mathbf Z\) 线性残差化后的相关，仍属于条件线性关联。把“多个预测变量”和“多个响应变量”混为同一种多元分析，会在模型、自由度和结论对象上造成根本错位。

### 行、列与分析单位

设数据矩阵

\[
\mathbf X=
\begin{pmatrix}
x_{11}&\cdots&x_{1p}\\
\vdots&\ddots&\vdots\\
x_{n1}&\cdots&x_{np}
\end{pmatrix},
\]

通常每行是一个观察或实验单位，每列是一个变量。若同一受试者贡献多个时间点、多个细胞来自同一组织，行之间就不是独立重复；降维图可以显示这些行，却不会自动处理其层级依赖。用于检验或验证时，应保留个体、样地、批次、空间或时间结构。

多变量资料还要区分测量类型。连续形态量、二元性状、物种计数、比例组成和混合型临床特征具有不同的零值、单位和抽样过程。把它们拼成一个矩阵只是存储形式统一，不意味着欧氏距离或普通协方差对每列都合适。Penn State 的多元统计课程同样以均值向量、协方差矩阵、PCA、典型相关、聚类、判别与 MANOVA 组成方法主线，其共同前提是先识别数据结构和研究目标。[^psu-multivariate]

## 协方差、尺度与预处理 { #covariance-and-preprocessing }

### 协方差矩阵与相关矩阵

把每列减去样本均值后记为 \(\mathbf X_c\)，样本协方差矩阵为

\[
\mathbf S=
\frac{1}{n-1}\mathbf X_c^{\mathsf T}\mathbf X_c.
\]

对角线 \(s_{jj}\) 是各变量方差，非对角线 \(s_{jk}\) 是变量对的协方差。若进一步以各列标准差缩放，得到相关矩阵

\[
\mathbf R=\mathbf D^{-1/2}\mathbf S\mathbf D^{-1/2},
\]

其中 \(\mathbf D=\operatorname{diag}(s_{11},\ldots,s_{pp})\)。协方差保留原单位和绝对变异幅度；相关矩阵相当于令每列方差为 1，使不同量纲的变量获得相近起点。

选择哪一个矩阵属于科学决定。若所有基因表达量已经在可比较尺度上，且高变异基因应主导结构，可以使用协方差；若株高以厘米、元素以微克、花期以天记录，未经标准化的 PCA 或聚类会被数值尺度最大的列支配。标准化也不是中性的：一个测量噪声很大的变量会因被缩放到单位方差而获得与稳定指标相同的权重。中心、缩放、变换及变量权重都应写入方法。

离群样本会同时改变均值、协方差、主轴和距离。先用单变量分布、散点矩阵、样本元数据与质量控制指标区分录入错误、技术失败和真实生物极端，不宜只因某点在低维图上孤立就删除。变量近乎常量时不能可靠标准化，也不会提供有效排序信息。

### 缺失、组成约束与计数结构

完整案例分析会删掉任一所选变量缺失的整行；变量很多时，保留下来的样本可能很少且组成发生改变。逐对完整观测可以为每一对变量使用不同样本，却可能得到不正半定的相关矩阵，继而使特征分解或距离几何失效。R 的协方差文档也明确提示逐对缺失处理可能产生非正半定矩阵。[^r-covariance] 缺失机制、插补模型和不确定性应在降维前确定；若分析用于预测，插补参数必须只从训练折估计。

相对丰度、百分比和测序读数常受总和约束。一个组分上升会迫使其他组分的比例下降，即使其绝对量未变；直接计算普通相关可能制造负相关。严格正的组成数据可在 log-ratio 几何下比较，Aitchison 距离等于中心化 log-ratio 后的欧氏距离；零值需要根据检测、取样和结构性缺失过程作有依据的处理，不能为取对数任意加同一个常数。物种计数还具有随均值变化的方差和许多零值，必要时应使用多响应计数模型；距离分析不会显式估计这种均值—方差关系。[^vegan-distance]

## 主成分分析与潜在因子 { #pca-and-factors }

### 最大方差的正交方向

主成分分析（principal component analysis, PCA）寻找原变量的线性组合。第一主成分

\[
z_1=\mathbf X_c\mathbf a_1
\]

选择单位长度方向 \(\mathbf a_1\)，使投影方差

\[
\operatorname{Var}(z_1)
=\mathbf a_1^{\mathsf T}\mathbf S\mathbf a_1
\]

最大。后续主成分在与此前方向正交的条件下依次最大化剩余方差。因此 \(\mathbf a_k\) 是 \(\mathbf S\) 的特征向量，对应特征值 \(\lambda_k\) 是第 \(k\) 个主成分方差；其解释方差比例为

\[
\frac{\lambda_k}{\sum_{j=1}^{p}\lambda_j}.
\]

计算上可对中心化、必要时标准化的矩阵作奇异值分解

\[
\mathbf X_c=\mathbf U\mathbf D\mathbf V^{\mathsf T}.
\]

\(\mathbf V\) 的列给出载荷方向，\(\mathbf X_c\mathbf V=\mathbf U\mathbf D\) 给出各样本的主成分得分。R 的 `prcomp` 正是以奇异值分解计算，并指出这种实现具有较好的数值精度。[^r-prcomp] Jolliffe 与 Cadima 的综述则把 PCA 概括为构造依次最大化方差的互不相关新变量，在减少维数的同时尽量保留变异。[^pca-review]

载荷描述每个原变量对主轴方向的贡献，得分描述样本在该方向上的位置。载荷整体乘以 \(-1\) 会同时翻转得分轴，却不改变任何距离、解释方差或结论，所以不同软件出现相反符号并非结果矛盾。双标图把样本和变量投影到同一低维平面，但点间距离、向量长度和夹角的精确含义取决于采用的缩放方式，图注应说明。

### 保留维数与解释边界

碎石图显示特征值随成分序号下降，累计解释方差显示保留若干轴可覆盖多少总变异。肘部、预设累计比例、平行分析、交叉验证重构误差和下游预测性能回答不同问题，没有一个固定比例适用于所有数据。用于可视化时可保留两三轴；用于去噪或预测时，维数应在训练数据内选择；用于解释生物过程时，还需检验载荷在重抽样、批次和变量选择下是否稳定。

“解释方差最多”只表示在所用尺度和变量集合中保留平方距离最多。高方差轴可能是批次、测序深度或体型大小，低方差方向也可能承载稳定的分类信号。PCA 不利用类别标签，不会主动寻找最能分组的方向；在 PCA 图上看到组间分离后再以同一图证明分组，属于探索性发现而非独立验证。

PCA 是线性投影。弯曲轨迹、分支发育过程和局部邻域可能需要非线性可视化。t-SNE 以高、低维邻域相似度的分布差异构造二维或三维图，UMAP 从近邻图构造低维嵌入；它们在单细胞等高维资料中常能展开局部结构。[^nonlinear-embedding] 低维簇间的空白、簇的面积及远距离通常受超参数、初始化和样本密度影响，不能直接当作原空间中的总体距离或离散亚群证据。应报告随机种子与参数，用原始特征和独立验证确认所见结构。

### PCA 与因子分析

探索性因子分析提出生成模型

\[
\mathbf x=\boldsymbol\mu+\boldsymbol\Lambda\mathbf f+\boldsymbol\varepsilon,
\]

其中少数公共因子 \(\mathbf f\) 通过载荷矩阵 \(\boldsymbol\Lambda\) 产生变量间共同协方差，\(\boldsymbol\varepsilon\) 表示各变量特有部分。PCA 分解观测变量的总方差，目标是重构和压缩；因子分析区分共同方差与特有方差，目标是用潜在结构解释相关。二者会产生相似的载荷表，却不应互称。

因子轴可作正交或斜交旋转，使载荷模式更易解释；旋转改变单个轴的载荷，却在相应条件下保持共同结构的整体拟合。因子数、旋转、估计方法和项目选择都会影响解释。给因子命名需要变量内容、理论和复现支持，不能只根据同一数据中几个较大载荷赋予确定的生物机制。

## 距离、相异度与排序 { #distance-and-ordination }

### 距离选择决定相似性的含义

给定两个样本向量 \(\mathbf x_i,\mathbf x_j\)，距离把多列差异压缩为一个数。这个压缩规定了哪些差异重要、共同缺失是否算相似、总丰度是否保留，因此距离矩阵不是原始数据的无假设替代。

| 距离或相异度 | 适合的对象 | 主要性质与边界 |
| --- | --- | --- |
| Euclidean | 同尺度连续测量、适当变换后的向量 | 保留绝对差值，易被量纲和极端值支配；PCA 的样本几何属于这一类 |
| Manhattan | 连续或稀疏特征 | 各维绝对差相加，对单个极端平方差较不敏感 |
| Gower | 连续、二元和分类变量混合的资料 | 按变量范围或类型标准化后取平均，须明确缺失和变量权重 |
| Jaccard | 物种出现／缺失或集合 | 共同出现进入相似度，通常忽略共同缺失 |
| Bray–Curtis | 非负丰度或计数组成 | 关注共享丰度，对共同零不计贡献；通常为半度量 |
| Aitchison | 严格正的组成数据 | 在 log-ratio 空间比较相对关系，零值处理是模型的一部分 |

生态群落中两个样地都没有某个无法在当地生存的物种，这个“双零”通常不构成强相似证据，Jaccard 和 Bray–Curtis 因而常比普通欧氏距离自然。连续环境变量若量纲不同，应先标准化；基因表达、代谢物或群落计数则要同时考虑变换、测序深度和均值—方差关系。vegan 的正式文档给出了 Euclidean、Gower、Bray–Curtis、Jaccard、Hellinger 与 Aitchison 等相异度的定义和适用数据，并提示空样地、负值及不恰当标准化会产生误导。[^vegan-distance]

### 主坐标分析

主坐标分析（principal coordinates analysis, PCoA），也称经典度量多维尺度分析，从任意给定的样本间相异度矩阵 \(\mathbf D\) 出发。令

\[
\mathbf J=\mathbf I-\frac1n\mathbf 1\mathbf 1^{\mathsf T},
\qquad
\mathbf B=-\frac12\mathbf J\mathbf D^{(2)}\mathbf J,
\]

其中 \(\mathbf D^{(2)}\) 把每个距离平方。对 \(\mathbf B\) 作特征分解，正特征值及其特征向量给出低维坐标。若输入是原始变量的欧氏距离，PCoA 与相应 PCA 样本构型等价；PCoA 的优势是可使用为物种组成、遗传差异或混合特征专门定义的相异度。

非欧氏相异度可产生负特征值，表示该距离无法无损嵌入普通欧氏空间。少量数值负值可能只是舍入，较大负值则需要报告并评估；加常数或其他 Euclid 化校正会改变距离，应说明方法。R 的 `cmdscale` 文档明确给出 PCoA 的双中心化距离表示、旋转／反射不确定性及 Cailliez 加常数校正。[^r-pcoa]

### 非度量多维尺度分析

非度量多维尺度分析（non-metric multidimensional scaling, NMDS）主要保存相异度的秩次，而非要求低维点间距离等于原相异度。算法寻找低维构型，使较小原相异度尽量对应较近点、较大原相异度对应较远点。常见 stress 概括排序距离与拟合距离的不一致，例如一种形式为

\[
\operatorname{stress}
=\sqrt{
\frac{\sum_{i<j}(d_{ij}^{\ast}-\widehat d_{ij})^2}
{\sum_{i<j}(d_{ij}^{\ast})^2}
},
\]

其中 \(d_{ij}^{\ast}\) 是低维构型距离，\(\widehat d_{ij}\) 是由原相异度 \(\delta_{ij}\) 经单调回归得到的拟合差异值（disparity）。stress 越小，低维距离与原相异度的次序越一致，但其绝对阈值还受样本数、维数、距离并列和所用定义影响。

NMDS 优化可能停在局部极小值，应从多个随机初值运行并检查最佳解能否重复；维数过低会留下高 stress，维数过高又失去可视化目的。vegan 的 `metaMDS` 文档说明其用多次随机起点寻找可重复解，并强调轴方向可以任意旋转，构型内的点间距离才是稳定对象。[^vegan-nmds] 除 stress 数值外，还应看 Shepard 图或原相异度与排序距离的关系，辨认少数样本是否主导失配。

### 对应分析与约束排序

对应分析（correspondence analysis, CA）适合非负列联表或样本×类别计数表。令总频率矩阵为 \(\mathbf P\)，行、列边际比例为 \(\mathbf r,\mathbf c\)，并令 \(\mathbf D_r=\operatorname{diag}(\mathbf r)\)、\(\mathbf D_c=\operatorname{diag}(\mathbf c)\)。CA 对标准化偏离

\[
\mathbf D_r^{-1/2}
(\mathbf P-\mathbf r\mathbf c^{\mathsf T})
\mathbf D_c^{-1/2}
\]

作奇异值分解。它以 \(\chi^2\) 距离比较行剖面和列剖面，可在同一图中显示样本与类别的关联。惯量（inertia）对应相对于独立模型的标准化变异。Greenacre 对生态丰度资料的分析详细说明了 CA 的剖面、\(\chi^2\) 距离和双标图几何。[^greenacre-ca]

稀有类别因边际频率很小可能获得很大权重，少数极端单元会牵动轴；沿单一长梯度的数据还可能出现弯曲的“拱形”构型。解释前应查看边际频率、贡献和原始表。多重对应分析（MCA）把多个分类变量的类别关系投影到低维空间，但类别编码会扩大维数，惯量比例也需按相应定义解释。

PCA、CA 和 PCoA 都属于无约束排序，轴由响应矩阵自身的变异决定。若问题是“群落组成中有多少变化与土壤水分和处理相关”，冗余分析（RDA）、典范对应分析或距离约束排序把环境变量作为约束，形成多响应回归与排序的结合。约束解释量、条件变量和置换方案必须对应设计；在同一数据中先筛选环境变量再检验，会夸大解释与显著性。

## 聚类与未知结构 { #clustering }

### 层次聚类

聚类在没有预设类别标签时寻找相对相似的样本组。凝聚型层次聚类从每个样本单独成簇开始，每一步合并两个簇；分裂型方法从一个总簇逐步拆分。树状图的合并高度由样本相异度与簇间链接共同决定：

- single linkage 使用两簇中最近样本的距离，容易沿一串中间点形成链；
- complete linkage 使用最远样本距离，倾向产生较紧凑的簇；
- average linkage 使用跨簇样本对的平均距离，在链化与紧凑之间折中；
- Ward 方法每步选择使簇内平方和增加最小的合并，通常与平方欧氏几何配套。

同一数据更换标准化、距离或链接后可能得到另一棵树。树状图只记录算法的逐步合并历史，分支高度不是谱系分化时间，左右排列也没有次序含义。Penn State 的聚类课程以生态样地说明了距离、凝聚方法、Ward 法和树状图之间的关系，并明确不存在对所有资料都最优的链接。[^psu-cluster]

### k-means 与簇数

k-means 预先给定簇数 \(K\)，寻找簇中心 \(\boldsymbol\mu_k\) 和分配 \(C_k\)，使

\[
\sum_{k=1}^{K}\sum_{i\in C_k}
\lVert\mathbf x_i-\boldsymbol\mu_k\rVert^2
\]

最小。它偏好近似球形、尺度相近的簇，并由欧氏平方距离决定；初始中心不同可能落入不同局部解，所以需多次初始化。明显弯曲、大小悬殊或密度不同的群体不适合只用 k-means 表达。基于概率混合分布的模型聚类可以容纳不同协方差形状，并以似然描述归属不确定性，但结论仍依赖分布成分的设定。

簇数可参考轮廓宽度、簇内离差、gap statistic、稳定性及模型信息准则。它们衡量紧凑、分离、预测或模型拟合的不同方面，不会自动发现一个客观自然分类。连续生态梯度也会被任何指定 \(K\) 的算法切成若干段；是否称为类型或亚群，需要外部性状、重复数据和生物机制支持。

用于评价聚类的变量不能在同一数据中再当作完全独立的“验证证据”。更有说服力的验证来自重抽样稳定性、独立批次复现、未参与聚类的表型或功能变量，以及聚类方案对距离、变换和算法的敏感性。

## 已知类别的判别与分类 { #supervised-classification }

### 从生成分布到分类边界

分类数据包含已知标签 \(G\) 与特征向量 \(\mathbf x\)，目标是为新样本估计类别或类别概率。Bayes 规则将样本分到后验概率最大的类别：

\[
P(G=k\mid\mathbf x)
\propto
\pi_k f_k(\mathbf x),
\]

其中 \(\pi_k\) 是先验类别概率，\(f_k\) 是第 \(k\) 类的特征分布。线性判别分析（LDA）假定各类近似多元正态且共享协方差矩阵 \(\boldsymbol\Sigma\)，判别得分为

\[
\delta_k(\mathbf x)
=\mathbf x^{\mathsf T}\boldsymbol\Sigma^{-1}\boldsymbol\mu_k
-\frac12\boldsymbol\mu_k^{\mathsf T}
\boldsymbol\Sigma^{-1}\boldsymbol\mu_k
+\log\pi_k,
\]

所以类别边界是线性的。二次判别分析（QDA）允许每类有自己的协方差矩阵，边界为二次曲面，也需要更多样本估计参数。Penn State 的判别分析课程从先验概率、类条件密度和 Bayes 分类建立 LDA／QDA，并把误分类率评估作为分析的一部分。[^psu-discriminant]

其他分类器改变了边界和假设。多项 logistic 回归直接建模类别概率；k-nearest neighbours 由局部邻居投票，强烈依赖尺度与维数；支持向量机寻找具有最大间隔的边界并可通过核函数弯曲；决策树以变量阈值递归划分，随机森林和 boosting 再集合许多树。算法复杂度应由样本量、预测目标和验证性能支持。相关特征下的单一“变量重要性”也可能在可替代变量之间任意分摊，仍需用机制知识、稳定性和外部数据解释。

类别先验和误判代价会改变决策。稀有疾病筛查中，把全部样本判为阴性可以获得很高准确率，却没有筛查价值；灵敏度、特异度、阳性预测值、阴性预测值、balanced accuracy、ROC 或 precision–recall 曲线应按使用情境选择。概率预测还需检查校准。若 \(p\) 接近或超过 \(n\)，类内协方差不可稳定求逆，应降维、正则化或采用适合高维的分类器，并把所有选择放入验证循环。

### 无监督降维不能偷看标签

PCA 虽不使用类别标签，但若先在全数据上计算中心、尺度和主成分，再把得分送入交叉验证分类器，测试折已经参与了投影方向估计。变量筛选、缺失插补、批次校正、特征缩放、PCA、选择成分数和调参都必须在每个训练折内完成，再把学得的变换应用到验证折。scikit-learn 的正式指南把这类预处理明确定义为数据泄漏，并专门列出标准化、插补、特征选择和 PCA 的风险。[^sklearn-validation]

拆分单位要对应推广对象。同一个体的多个细胞、同一患者的多个切片或同一地点的重复样本若被随机分到训练和测试集，模型可通过个体或批次特征获得虚高性能；预测新个体时应整个人、整地点或整批次留出。官方交叉验证指南也要求依赖样本按组拆分，使测试组完全不出现在训练折。[^sklearn-validation]

模型开发可用嵌套交叉验证：内层选择特征、维数和超参数，外层估计完整流程的泛化误差。最终报告应给出每折或重抽样分布、类别样本数、阈值选择、混淆矩阵和置信区间；只有一次随机训练／测试划分时，结果会对偶然分割高度敏感。

## 多响应检验与典范关系 { #multivariate-inference }

### 均值向量与 Hotelling \(T^2\)

多个连续响应的均值形成向量。单样本 Hotelling \(T^2\) 检验

\[
H_0:\boldsymbol\mu=\boldsymbol\mu_0
\]

时使用

\[
T^2
=n(\bar{\mathbf x}-\boldsymbol\mu_0)^{\mathsf T}
\mathbf S^{-1}
(\bar{\mathbf x}-\boldsymbol\mu_0).
\]

它是用变量协方差校正后的均值向量距离：高度相关的两个指标不会像两个独立指标那样重复计权。在独立多元正态样本且 \(p<n\) 时，

\[
\frac{n-p}{p(n-1)}T^2\sim F_{p,n-p}.
\]

两独立样本版本以两组均值向量之差和 pooled 协方差构造；配对多响应资料则先形成每个单位的差值向量。Hotelling \(T^2\) 是单变量 *t* 检验的多元延伸，也构成多组 MANOVA 的入口。协方差近奇异、维数接近样本数或存在明显离群时，矩阵求逆和参照分布都会不稳定，需要降维、正则化或与设计相符的重抽样方法。[^psu-hotelling]

### MANOVA 的均值向量检验

多元方差分析（MANOVA）把同一实验单位上的 \(q\) 个连续响应联合起来。单因素模型检验

\[
H_0:
\boldsymbol\mu_1=\boldsymbol\mu_2=\cdots=\boldsymbol\mu_g,
\]

即各组的响应均值向量相同。它把处理所致的平方和与交叉乘积记为 \(\mathbf H\)，组内误差记为 \(\mathbf E\)，再以 \(\mathbf H\) 相对于 \(\mathbf E\) 的特征根构造总体检验。

| 统计量 | 矩阵表达或方向 | 读法 |
| --- | --- | --- |
| Wilks’ \(\Lambda\) | \(|\mathbf E|/|\mathbf H+\mathbf E|\) | 越小表示处理相对误差越强 |
| Pillai trace | \(\operatorname{tr}[\mathbf H(\mathbf H+\mathbf E)^{-1}]\) | 越大表示处理解释的典范方向越强 |
| Hotelling–Lawley trace | \(\operatorname{tr}(\mathbf H\mathbf E^{-1})\) | 累加处理相对误差的特征根 |
| Roy 最大根 | \(\lambda_{\max}(\mathbf H\mathbf E^{-1})\) | 只关注最强的一个典范方向 |

MANOVA 保留响应间协方差，可以发现多个指标共同移动的处理效应，并为一个预设响应集合提供总体检验。它的零假设仍是均值向量相等；显著结果只说明至少一个线性组合不同，随后应依据预设对比、同时区间或经多重性控制的单响应分析说明差异位于哪些指标和方向。Penn State 的 MANOVA 课程给出 \(\mathbf H\)、\(\mathbf E\) 与四类检验统计量，并强调独立、组内多元正态和协方差矩阵同质等条件。[^psu-manova]

响应高度冗余会使 \(\mathbf E\) 近奇异，样本数相对响应数过小时也无法稳定估计协方差。离群值、异协方差和层级依赖会影响参照分布。多个响应若包含计数、二项或强偏斜变量，逐列恰当的广义模型及其多响应扩展往往比强行套用正态 MANOVA 更能反映抽样过程。

### PERMANOVA 与交换性

PERMANOVA 从样本间相异度出发，把距离平方和按处理和残差分解，形成 pseudo-\(F\)，再通过在零假设下可交换的标签或残差排列获得参照分布。它允许使用 Bray–Curtis、Jaccard 等非欧氏相异度，因而常用于群落组成。Anderson 的原始论文把这一方法推广到任意线性模型的距离分解。[^anderson-permanova]

“置换”不会自动消除设计假设。区组、配对、重复测量、时间或空间层级会限制哪些观测可以互换；排列方案必须在相应层级内进行。顺序平方和与边际平方和也回答不同问题，尤其在不平衡设计和相关预测变量中应预先确定。vegan 的 `adonis2` 文档明确支持连续变量、因素、交互、条件变量和受限排列，并区分顺序、边际及总体检验。[^vegan-permanova]

组间位置和组内离散都能改变距离分布。若一组样本围绕同一中心散得更开，PERMANOVA 可能显著，即使质心差异不大；应同时查看排序图、各组到质心的距离并检验多元离散。`betadisper` 正是距离空间中类似 Levene 检验的离散比较。[^vegan-dispersion] Warton 等进一步指出，对多物种计数选用与均值—方差关系不匹配的距离，会把位置、离散和高丰度物种的影响混合；距离法和多响应 GLM 因而应按科学问题与数据生成过程比较，而不是视为互换的“参数／非参数”版本。[^warton-distance]

### 典型相关与两组变量

典型相关分析（canonical correlation analysis）研究同一批样本上的两组连续变量 \(\mathbf X\) 和 \(\mathbf Y\)。第一对典型变量

\[
U_1=\mathbf X\mathbf a_1,
\qquad
V_1=\mathbf Y\mathbf b_1
\]

选择系数使 \(\operatorname{cor}(U_1,V_1)\) 最大；后续典型变量对在各自组内与前面对不相关的约束下依次提取。它回答“哪两个跨组线性组合共同变化最强”，关系对 \(\mathbf X\) 与 \(\mathbf Y\) 是对称的。R 的 `cancor` 文档保留了 Hotelling 的原始定义，并明确其寻找两组矩阵中相关最大的线性组合。[^r-cancor]

典型相关系数容易在变量多、样本少时过拟合；同组内强共线会使标准化系数不稳定。解释应同时查看典型相关、每个原变量与本组典型变量的结构相关、交叉载荷和冗余比例，并用重抽样或独立数据验证。若一组明确作为预测、另一组作为响应，冗余分析、偏最小二乘或多响应回归提供方向性更清楚的替代；“典型相关”也不要与生态学中以环境约束物种排序的“典范对应分析”混淆。

## 从探索图到可复核结论 { #workflow-and-reporting }

### 探索、检验与预测的分工

一张低维图可以揭示批次、梯度、离群点和候选亚群，却不能同时充当发现和确认。若研究者先尝试多种变换、距离、维数和颜色映射，再选最清晰的一张图提出组差异，这一过程属于探索；确认性检验应使用预设分析或独立数据，并把探索过的方法空间计入不确定性。

一个稳健的多元分析通常按以下顺序推进：

1. 明确行的独立单位、列的测量类型、目标总体，以及探索、检验或预测目标；
2. 保留原始量纲图和质量控制，预先说明缺失、零值、变换、中心、缩放及变量过滤；
3. 让协方差、距离或概率分布对应生物学差异，比较少数有明确理由的候选选择；
4. 用载荷、贡献、原变量分布和样本元数据解释低维结构，不只给彩色散点图；
5. 检验时尊重随机化、交换性和层级，分类时让全部预处理进入按个体或群组划分的验证循环；
6. 通过重抽样、独立批次、敏感性分析和负对照判断轴、簇、特征与性能是否稳定。

降维之后再检验保留主成分，有时可减少响应维数和共线；然而成分由数据估计，解释对象也从原指标变成线性组合。若保留维数按同一结果数据调到显著，仍会产生选择偏差。聚类后在原聚类变量上检验组间差异主要是在描述算法怎样切分数据，不能当作独立发现证据。

### 报告要素

报告应让读者能够恢复从原始矩阵到结论的每个决定。至少应说明：

- 样本数、变量数、行与列的含义、独立或层级单位，以及缺失、零值和质量过滤；
- 中心、缩放、变换、组成数据处理、变量权重和批次处理的具体规则；
- PCA／因子分析的输入矩阵、保留维数、载荷缩放和选择依据，或距离／相异度的名称与参数；
- 排序维数、解释方差或 stress、随机起点、负特征值及校正，聚类的链接、初始化、簇数和稳定性；
- MANOVA／PERMANOVA 的模型式、响应集合、统计量、排列次数与受限排列结构，及位置—离散诊断；
- 分类的类别定义、先验或误判代价、完整预处理流程、训练／验证划分、调参层级、混淆矩阵、校准和不确定性；
- 软件与关键版本、随机种子、预设与探索性选择，以及替代尺度、距离、维数或模型下的敏感性结果。

多元方法的结果是对一个高维对象的特定投影、距离表示或概率模型。把这些选择公开，并返回原始变量和生物学单位核对，才能让“主轴”“簇”“典型关系”或“分类准确率”成为可复核知识，而不只是一次漂亮的图形压缩。

## 参考资料与延伸阅读 { #references }

[^psu-multivariate]: Penn State Department of Statistics. [STAT 505: Applied Multivariate Statistical Analysis](https://online.stat.psu.edu/stat505/)。

[^r-covariance]: R Core Team. [`cor`: Correlation, Variance and Covariance Matrices](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/cor.html)。

[^vegan-distance]: Oksanen, J. et al. [`vegdist`: Dissimilarity Indices for Community Ecologists](https://vegandevs.github.io/vegan/reference/vegdist.html), *vegan* documentation。

[^r-prcomp]: R Core Team. [`prcomp`: Principal Components Analysis](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/prcomp.html)。

[^pca-review]: Jolliffe, I. T. & Cadima, J. (2016). [Principal component analysis: a review and recent developments](https://pmc.ncbi.nlm.nih.gov/articles/PMC4792409/). *Philosophical Transactions of the Royal Society A*, 374, 20150202. DOI: [10.1098/rsta.2015.0202](https://doi.org/10.1098/rsta.2015.0202)。

[^nonlinear-embedding]: van der Maaten, L. & Hinton, G. (2008). [Visualizing Data using t-SNE](https://www.jmlr.org/papers/v9/vandermaaten08a.html). *Journal of Machine Learning Research*, 9, 2579–2605；McInnes, L. et al. (2018). [UMAP: Uniform Manifold Approximation and Projection](https://joss.theoj.org/papers/10.21105/joss.00861). *Journal of Open Source Software*, 3(29), 861。

[^r-pcoa]: R Core Team. [`cmdscale`: Classical Multidimensional Scaling](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/cmdscale.html)。

[^vegan-nmds]: Oksanen, J. et al. [`metaMDS`: Nonmetric Multidimensional Scaling with Stable Solution from Random Starts](https://vegandevs.github.io/vegan/reference/metaMDS.html), *vegan* documentation。

[^greenacre-ca]: Greenacre, M. (2010). [Correspondence analysis of raw data](https://esajournals.onlinelibrary.wiley.com/doi/10.1890/09-0239.1). *Ecology*, 91(4), 958–963. DOI: [10.1890/09-0239.1](https://doi.org/10.1890/09-0239.1)。

[^psu-cluster]: Penn State Department of Statistics. [STAT 505, Lesson 14: Cluster Analysis](https://online.stat.psu.edu/stat505/Lesson14)。

[^psu-discriminant]: Penn State Department of Statistics. [STAT 505, Lesson 10: Discriminant Analysis](https://online.stat.psu.edu/stat505/Lesson10)。

[^sklearn-validation]: scikit-learn developers. [Common pitfalls and recommended practices](https://scikit-learn.org/stable/common_pitfalls.html)；[Cross-validation: evaluating estimator performance](https://scikit-learn.org/stable/modules/cross_validation.html)。

[^psu-manova]: Penn State Department of Statistics. [STAT 505, Lesson 8: Multivariate Analysis of Variance](https://online.stat.psu.edu/stat505/Lesson08)。

[^psu-hotelling]: Penn State Department of Statistics. [STAT 505, Lesson 7: Inferences Regarding Multivariate Population Means](https://online.stat.psu.edu/stat505/Lesson07)。

[^anderson-permanova]: Anderson, M. J. (2001). [A new method for non-parametric multivariate analysis of variance](https://doi.org/10.1111/j.1442-9993.2001.01070.pp.x). *Austral Ecology*, 26, 32–46。

[^vegan-permanova]: Oksanen, J. et al. [`adonis2`: Permutational Multivariate Analysis of Variance Using Distance Matrices](https://vegandevs.github.io/vegan/reference/adonis.html), *vegan* documentation。

[^vegan-dispersion]: Oksanen, J. et al. [`betadisper`: Multivariate Homogeneity of Group Dispersions](https://vegandevs.github.io/vegan/reference/betadisper.html), *vegan* documentation。

[^warton-distance]: Warton, D. I., Wright, S. T. & Wang, Y. (2012). [Distance-based multivariate analyses confound location and dispersion effects](https://doi.org/10.1111/j.2041-210X.2011.00127.x). *Methods in Ecology and Evolution*, 3, 89–101。

[^r-cancor]: R Core Team. [`cancor`: Canonical Correlations](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/cancor.html)。
