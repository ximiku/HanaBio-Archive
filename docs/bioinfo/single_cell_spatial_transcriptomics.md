# 单细胞与空间转录组学

单细胞转录组将组织平均拆成细胞尺度的稀疏表达向量，空间转录组再把 RNA 测量连接到组织位置。两者共享表达计数的基础，却新增了 barcode、独特分子标识符（unique molecular identifier，UMI）、细胞或捕获位置、图像与坐标等数据对象，中心问题也转向细胞类型、连续状态、发育轨迹、组织域和细胞邻域。群体样本的 qPCR、芯片、bulk RNA-seq、转录本结构和差异表达见[转录组测量与 RNA-seq 分析](transcriptomics.md)。

## 单细胞和单核转录组 { #single-cell-rna }

单细胞 RNA-seq 将组织平均拆成许多细胞的稀疏表达向量。plate-based 全长方法能在较少细胞中获得较丰富的转录本结构，droplet-based 3′／5′ 标签方法用微液滴和分子条码并行处理成千上万细胞。Drop-seq 的关键设计是让同一 bead 上的引物共享 cell barcode，而每条引物携带随机 UMI；读段因而能先归属细胞，再按基因和 UMI 近似计数原始分子。[^dropseq] cell barcode、sample index 和 UMI 回答三个不同层级的问题，不能互换。

单核 RNA-seq 从细胞核而非完整细胞制备 RNA，适合冻存组织、难解离组织和大型脆弱细胞，也可减少解离造成的选择性丢失。它更偏向核内、未剪接和内含子信号，胞质成熟 mRNA 与局部转录本较少；与 whole-cell 数据整合时要把这种 compartment difference 当作 assay effect，而非简单“批次”。解离本身会诱发即时早期和应激基因，并选择更易释放或更耐受的细胞。细胞图谱的缺失类群可能是生物学稀有，也可能在取材前已经丢失。

### barcode、UMI 与稀疏计数矩阵 { #barcode-umi-matrix }

droplet 中的 barcode 并不保证只来自一个完整细胞。空液滴可捕获环境 RNA，两个或多个细胞同入一滴形成 doublet／multiplet，受损细胞释放的 RNA 会进入其他液滴。barcode rank、总 UMI、检测基因数、线粒体／核糖体比例和 empty-droplet 模型可帮助区分细胞与背景；物种混合、基因型或抗体标签能提供更直接的 doublet 证据。ambient RNA correction 是带模型的估计，不能把校正后的每个低计数都当作真实胞内分子。

UMI 把共享 cell barcode、基因和近似 UMI 序列的 reads 合并，降低 PCR 扩增造成的重复计数。UMI 空间有限，会发生 collision；测序错误又可把一个分子拆成多个 UMI，因此 deduplication 需要距离和丰度规则。多数 droplet 数据的 gene-by-cell matrix 记录“捕获并识别到的分子数”，捕获效率远低于细胞内真实总数。零值可以是真实未表达，也可以是分子未被捕获；稀疏性是抽样、文库深度和细胞状态共同结果。

质量过滤应在样本和细胞类型语境中进行。线粒体比例高常提示膜受损或濒死，却也可能是某些高代谢细胞的真实特征；总 UMI 很高可能是 doublet，也可能是大细胞；总 RNA 较少的静息细胞会被统一下限优先删除。先按每个样本检查分布，再结合 marker、doublet score、组织知识和敏感性分析设置阈值，能减少质量控制本身改变细胞组成。

### 归一化、特征选择与降维 { #single-cell-normalization }

常见归一化先按每细胞总 UMI 缩放并进行 log transformation，或以 count model 同时估计测序深度和技术变异。缩放后的值便于距离、可视化和 marker 探索，原始计数仍应保留给需要计数似然的模型。细胞总 RNA 在细胞周期、激活和体积变化中可能真实改变；把每个细胞都强制成相同总量会把这种变化折叠进相对组成。外源参照和成像分子计数在需要绝对量时更有价值。

highly variable genes 把细胞间变异超过均值—方差背景的基因用于构建低维空间，减少 housekeeping 与抽样噪声对距离的支配。PCA 给出线性轴，diffusion map 强调局部连续结构，非线性的 t-SNE 和 UMAP 常把高维邻域投影到二维。二维图会扭曲全局距离、簇面积和密度；不同参数、随机种子和预处理可改变岛屿形态。UMAP 上相邻是候选相似，图上远离也不等于发育或空间上遥远。

细胞周期、线粒体程序和应激程序可以解释主要变化。回归这些 covariates 有时有助于观察另一条轴，有时却会删除与研究过程真实耦联的信号。是否校正应由问题决定，并比较校正前后的 marker、样本混合和已知连续过程；“回归掉”不是证明变异纯属技术的证据。

### 聚类与细胞注释 { #clustering-annotation }

常见流程在降维空间建立 k-nearest-neighbor graph，再以 community detection 划分细胞。cluster number 由邻居数、分辨率、特征选择、样本构成和随机性共同决定；连续分化或激活过程也会被算法切成离散段。因此簇首先是当前数据和参数下的计算分组，不自动等同于天然细胞类型。稳定性可通过重抽样、不同参数、独立样本和 marker 一致性评估。

注释需要把多个正、负 marker、转录程序、组织位置、形态与已知生理功能结合。单个 marker 可能在激活、损伤或发育阶段跨类群表达；低捕获又会造成 marker dropout。reference atlas 的 label transfer 能提高一致性，但参考缺少的新状态会被迫分到最相近类别，物种、年龄、组织区域和平台差异也会误导映射。最好同时报告细胞类型层级、注释证据与置信度，对混合或未知群保留较宽名称。

差异丰度问题比较各样本中某类细胞的比例，差异状态问题比较同一类细胞在条件间的表达。二者都以个体或独立样本为重复，而不是以成千上万个细胞把样本量夸大。细胞来自同一个体，技术和生物变异相关；忽略样本来源会产生伪重复和过多假阳性。按“样本 × 细胞类型”汇总原始计数形成 pseudobulk，再用 bulk count model 分析，或使用显式层级／混合模型，能够保留实验单位。单细胞差异分析的系统比较显示，丢弃生物学重复信息是重要的 false-discovery 来源。[^single-cell-pseudobulk]

### 多批次整合与参考映射 { #single-cell-integration }

整合算法寻找数据集间的 mutual neighbors、shared latent factors 或生成模型表示，使相同类型在低维空间对齐。它适合缓解平台、建库日和供体造成的非生物偏移，也可能把真正的条件特异状态压平，或把不同细胞因共享应激程序错误连接。整合空间可用于可视化、聚类和标签转移；条件差异检验通常应回到保留样本和原始计数结构的数据，并在模型中处理 batch。

评价整合不能只看不同批次颜色是否完全混合。已知同类细胞应跨批次邻近，已知不同谱系仍需分开，稀有类型不应被大群吞没，条件特异群也不应被强行配对。marker 保真、local neighborhood、样本混合、未参与训练的验证标签和未整合结果共同提供证据。若 batch 与 condition 完全重合，任何算法都无法从数据本身知道应该保留哪部分差异。

### 轨迹、伪时间与 RNA velocity { #trajectory-velocity }

trajectory inference 在表达空间中连接相似细胞，并以某个 root 为起点给出 pseudotime。它适合描述样本中捕获到的连续状态和候选分支，要求过程中的中间状态被充分取样。细胞周期、应激、不同谱系收敛表达和缺失中间状态都可形成误导路径；root 和分支数还常由研究者或算法先验决定。伪时间是静态细胞集合的相似性排序，不是每个细胞真实经历的时间，也不自动给出亲子谱系。

RNA velocity 利用未剪接与已剪接 RNA 的比例，在转录、剪接和降解模型下估计局部表达变化方向。[^rna-velocity] steady-state 或 dynamical model 的参数、基因选择、内含子注释、诱导／抑制动力学和测序深度都会改变箭头；循环、瞬时响应和多稳态系统尤其需要谨慎。时间序列、pulse labeling、遗传 barcode、克隆追踪和活细胞成像可直接约束方向与谱系。轨迹和 velocity 最适合提出并排序发育假说，不能代替 lineage tracing。

## 空间转录组的数据模型 { #spatial-transcriptomics }

解离单细胞数据保留每个细胞的表达，却丢失它在组织中的位置。空间转录组把 RNA 测量与二维或三维坐标连接，使组织区室、细胞邻域和分子梯度成为可分析对象。不同技术在“测多少基因、捕获多少分子、分辨到多细、覆盖多大面积”之间取舍；所谓空间分辨率必须同时说明物理像素、有效捕获范围和一个测量单位中包含多少细胞。

| 方法家族 | 分子如何获得坐标 | 主要数据对象 | 主要限制 |
| --- | --- | --- | --- |
| 区域切割／显微取样 | 先按组织位置切取区域，再做 RNA-seq | 区域 × 基因矩阵 | 区域含多细胞，边界依赖取样与病理标注 |
| 阵列表面捕获 | 组织 RNA 扩散到带 spatial barcode 的 spot 或 bead | spot／bead × 基因 UMI 矩阵与组织图像 | 捕获扩散、组织厚度和 spot 混合影响有效分辨率 |
| 原位测序 | 在组织内扩增或读取靶 RNA 的序列／barcode | 分子坐标、基因身份与细胞分割 | 化学效率、扩增团重叠、读长与 panel／解码限制 |
| 多轮成像杂交 | 以组合 barcode 和连续成像识别单 RNA | 分子点坐标、基因身份与细胞分割 | panel 设计、光学拥挤、图像配准和分割误差 |

经典 spatial transcriptomics 把带有位置 barcode 的寡核苷酸阵列置于组织切片下方，使每个 spot 捕获到的 RNA 在测序后回到组织坐标。[^spatial-transcriptomics] Slide-seq 以密集的 barcoded bead 提高物理采样分辨率；MERFISH 则用 error-robust combinatorial barcode 和多轮成像在单细胞内定位许多 RNA 分子。[^slide-seq][^merfish] 捕获式方法通常有较广的基因覆盖，成像式方法可保留单分子和亚细胞位置，但 panel、光学密度与成像轮数各有约束。两类结果不能只用“基因数更多”或“分辨率更高”排出单一优劣。

### 坐标、图像与质量控制 { #spatial-qc }

空间数据除表达矩阵外，还包含组织图像、spot／bead 坐标、切片方向、染色、segmentation mask 和尺度信息。图像与表达坐标配准偏移会把 RNA 放进错误结构；组织折叠、裂隙、坏死和切片边缘改变捕获；相邻切片也不是同一细胞层的完全复制。分析应保留原始图像与变换矩阵，并在组织标志基因、形态边界和 fiducial markers 上检查配准。

捕获式数据可检查每位置总 UMI、检测基因数、线粒体／核糖体比例、组织内外背景、空间异常值和批次。低 UMI 既可能是技术失败，也可能是真实细胞稀少或 RNA 少的组织区；邻近高表达区域的 RNA 扩散可造成边界外拖尾。成像式数据还要检查每轮成像漂移、barcode decoding error、点位密度、阴性探针、autofluorescence 和 segmentation。一个 RNA 点被分到哪一个细胞，取决于核、膜或胞质边界模型；细长突起、多核细胞和拥挤组织使分割特别困难。

多个切片或个体的空间比较仍以生物样本为重复。把同一切片中的数千 spot 当成独立样本，会忽略空间自相关和共享制备过程。模型可以显式加入空间邻接或随机效应，但实验单位没有因此变成 spot。组织区域面积、取样方向和病理分级必须在组间平衡或进入模型，否则“区域差异表达”可能只是切到了不同结构。

### 空间域、梯度与空间变异基因 { #spatial-domains }

空间邻接图把每个位置与物理近邻连接，表达和图像特征可共同用于识别组织域。离散 domain 适合上皮—间质、皮层层次或肿瘤区室等相对稳定边界；发育 morphogen、缺氧和炎症浸润常形成连续梯度。聚类算法会把梯度切成若干区，因此区域数和边界需要与组织学、已知 marker 和不同切片重复比较。

空间变异基因检验表达是否随坐标呈现非随机结构。局部热点、周期层次、长程梯度和边界富集需要不同 kernel 或邻接模型；总 UMI、细胞密度和组织结构会形成共同空间趋势。显著空间自相关说明表达具有位置结构，并不指出是哪一种细胞产生，也不证明该基因建立了结构。把 cell-type composition、组织形态和 within-cell-type expression 分开，才能逐步缩小解释。

### 去卷积与单细胞参考映射 { #spatial-deconvolution }

一个 spot 含多个细胞时，可用 scRNA-seq 参考中各细胞类型的表达谱估计组成比例。cell2location 等模型把参考 signature、位置总量和技术变异放入计数模型，借助位置间信息估计细粒度细胞分布。[^cell2location] 结果依赖参考是否覆盖当前组织的类型与状态、平台间基因检测差异、signature 可辨识性和每位置细胞数先验。相近亚型共享大量基因时，数学上可能没有足够信息把它们稳定分开。

另一方向是把每个单细胞表达谱映射到若干空间位置。Tangram 等方法以共享基因使单细胞和空间表达对齐，可把单细胞注释投射回组织，也可借助空间数据推断未测基因的候选模式。[^tangram] 这种映射是满足相似性目标的模型分配，不是找回被解离细胞的真实原坐标；参考来自不同个体、发育阶段或切片时尤其如此。预测的单细胞分辨率或未测基因应以原位杂交、成像 panel、组织学或留出基因验证。

### 细胞邻域与相互作用推断 { #spatial-neighborhood-interaction }

细胞类型在短距离内共同出现，可以定义邻域、生态位和界面。置换检验需保留组织结构、细胞密度和切片边界，否则常见细胞或大区室会天然产生大量邻近。配体—受体数据库可以把发送细胞的 ligand expression、接受细胞的 receptor expression 与空间距离相交，形成候选信号边；mRNA 存在不保证蛋白分泌、成熟、到达受体并触发下游，数据库关系也可能缺少物种、亚基和细胞语境。

空间邻近比解离数据中的共表达增加了一层条件，却仍不是直接相互作用证据。蛋白定位、磷酸化或转录响应、阻断配体／受体、细胞类型特异扰动、时间顺序与救援（rescue）实验能逐步加强因果链。空间图谱最可靠的作用是界定“哪些细胞在何处有机会作用”，再据此设计机制实验。

## 多模态整合与结论边界 { #multiomic-integration }

同一细胞可同时测量 RNA 与表面蛋白、染色质可及性、TCR／BCR 序列或遗传扰动；不同细胞的多组学也可通过共同 barcode、共同特征或统计映射整合。同细胞测量减少样本组成不一致，但每种 modality 的捕获深度通常下降，共同 barcode 也不表示两个信号存在直接分子作用。跨细胞整合则依赖 shared latent state、paired samples 或已知 feature linkage，映射的不确定性应保留。

RNA 与 ATAC 峰的相关、转录因子基序、染色质接触和空间共定位可以组成候选调控链：某状态中增强子更开放，目标基因同时升高，二者在同类细胞和空间区域共现。这个链仍可能由第三个因子共同驱动。遗传变异、CRISPR 扰动、时间序列、位点编辑和救援实验能检验方向；多组学增加可相互约束的观测，不会自动把相关转化为因果。

单细胞与空间结果还必须回到分子、细胞和组织尺度验证。原位杂交和成像可核对转录本位置，流式或组织计数检验细胞组成，蛋白定位与磷酸化检验信号链，功能扰动检验必要性和充分性。验证对象应覆盖不同丰度、细胞群、空间区域和机制层级，而不只挑 UMAP 或组织图上最醒目的 marker。

## 可复现分析与报告 { #reporting }

单细胞项目应保存样本表、原始 reads、参考和注释版本、barcode／UMI 结构、未过滤 gene-by-barcode matrix、细胞 metadata、过滤与 doublet 规则、原始计数、低维表示的生成步骤、随机种子以及 cluster 和 annotation 版本。多个样本之间的整合还要保存未整合对象、batch／condition 关系和用于条件检验的样本级计数；只保留最终 UMAP 坐标会丢失几乎全部可复查的分析链。

空间项目还应保存原始组织图像、切片方向、尺度、spot／bead／分子坐标、segmentation mask、坐标变换、组织内外标记和去卷积或映射的模型输出。GEO、SRA／ENA 等档案分别承接 processed matrix、实验 metadata 与原始 reads，图像和病理资料还要处理可识别信息与受控访问。命令行、环境、容器、工作流与 provenance 的具体组织见[命令行、工作流与可重复研究](workflows.md)。

图表应让读者看见独立实验单位和空间尺度。单细胞结果应按样本分层显示细胞数、比例和 pseudobulk 变化，空间结果要同时给组织图像、尺度、切片身份和重复。无论细胞或位置数量多大，最终结论都应回到“测到了什么单位、在哪些独立样本中重复、模型假设是什么、还需要哪一种验证”。

## 参考资料与延伸阅读 { #references }

[^dropseq]: droplet、cell barcode、UMI 与 digital expression matrix 的经典实现见 Macosko 等的 [Drop-seq 研究](https://pubmed.ncbi.nlm.nih.gov/26000488/)。

[^single-cell-pseudobulk]: 在多样本单细胞差异表达中保留生物学重复、避免把同一样本细胞当作独立重复的系统评估见 Squair 等的[研究](https://www.nature.com/articles/s41467-021-25960-2)；单细胞分析从质量控制到轨迹推断的共同框架见 Luecken 与 Theis 的[教程](https://pmc.ncbi.nlm.nih.gov/articles/PMC6582955/)。

[^rna-velocity]: 由 unspliced／spliced RNA 动力学估计局部表达变化方向的原始框架见 La Manno 等的 [RNA velocity 研究](https://www.nature.com/articles/s41586-018-0414-6)。

[^spatial-transcriptomics]: 以带空间 barcode 的阵列表面捕获组织 RNA 并重建表达坐标的经典方法见 Ståhl 等的[研究](https://pubmed.ncbi.nlm.nih.gov/27365449/)。

[^slide-seq]: 高密度 barcoded beads 与组织 RNA 转移构成的 Slide-seq 方法见 Rodriques 等的[研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC6927209/)。

[^merfish]: 以组合标记、连续成像和 error-robust code 在单细胞中定位大量 RNA 的 MERFISH 方法见 Chen 等的[研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC4662681/)。

[^cell2location]: 以单细胞参考、计数模型和空间位置共同估计细胞类型组成的 cell2location 方法见 Kleshchevnikov 等的[研究](https://www.nature.com/articles/s41587-021-01139-4)。

[^tangram]: 在共享基因空间中将 sc／snRNA-seq 与成像或捕获式空间数据对齐的 Tangram 方法见 Biancalani 等的[研究](https://www.nature.com/articles/s41592-021-01264-7)。
