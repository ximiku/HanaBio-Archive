# 共价工具、化学蛋白质组学与靶点鉴定

小分子与蛋白质的相遇往往短暂而稀少。配体解离后，细胞裂解、稀释和洗涤会抹去许多非共价复合物；质谱随后看到的只是保留下来的分子。化学蛋白质组学通过共价反应、光激活捕获或酶促邻近标记，把一段时间内发生过的结合、催化状态或空间接近转成稳定化学记录，再用富集和质谱读出这些记录。它因此连接了化学探针的分子识别与蛋白质组学的全局测量。

稳定记录并不具有单一含义。activity-based probe（活性探针）通常标记处于特定催化状态的酶，photoaffinity probe（光亲和探针）记录光照瞬间能够被反应中间体触及的分子，BioID、TurboID 和 APEX 则记录一定时间与空间范围内可被酶促修饰的蛋白。富集名单首先描述“什么被记录下来”，靶标身份和功能归因还需要竞争、位点、动力学、生化与遗传证据逐层收束。

本页从探针的识别骨架、反应基团和报告把手出发，进入共价抑制动力学、activity-based protein profiling（ABPP）、光亲和捕获、邻近标记和定量竞争，再说明怎样区分结合蛋白、直接靶标与功能靶标。谱图搜索、蛋白推断、定量模型和错误发现率见[蛋白质组与质谱数据分析](../bioinfo/proteomics.md)，生物正交连接反应的机制与选择见[生物正交化学、标记与成像](chemical_bioorthogonal.md)。

## 探针结构把分子识别变成稳定记录 { #probe-architecture }

一支典型化学蛋白质组学探针可拆成三个模块。recognition scaffold（识别骨架）通过形状、电荷和非共价作用让探针优先停留在某类蛋白或某个口袋；reactive group（反应基团，常称 warhead）在合适几何环境中与氨基酸侧链成键；reporter handle（报告把手）用于荧光检测、亲和富集或后续生物正交连接。三个模块共同决定信号，单独列出一个“高反应性基团”不足以说明蛋白选择性。

### 识别骨架、反应基团与报告把手 { #recognition-warhead-reporter }

识别骨架先提高反应基团在目标位点附近的有效浓度，并把它定向到具有适当亲核性和微环境的残基。许多定向共价抑制剂由已有可逆配体衍生，在不破坏关键结合的部位接入温和 electrophile，使成键主要发生在结合口袋附近的 cysteine、serine、lysine 或其他可反应残基。反应基团的内在活性过低会让记录来不及形成，过高则会在到达目标前与 glutathione、血清蛋白和大量非目标蛋白反应；有效选择性来自识别、几何和化学反应性的乘积。

报告基团若直接做成 biotin 或大 fluorophore，富集和观察方便，却可能改变膜通透、细胞器分配或靶标亲和力。minimalist probe 常只携带 alkyne 或 azide，把较大的 biotin、fluorophore 或 cleavable enrichment tag 留到细胞标记结束后再通过 click chemistry 接入。这样可以把“探针在活体系中的行为”与“裂解后用于分析的把手”分开，但第二步连接效率和未反应标签背景仍需测量。

linker 决定三个模块之间的距离和自由度。反应基团太靠近骨架可能无法接近目标残基，过长柔性链又会扩大捕获半径并提高疏水结合。用带标签探针支持母体小分子的靶标结论之前，应比较两者的生化效力、细胞内占有和表型排序；若标签使活性显著变化，探针所记录的可能是一个新的化学实体。

### 共价占有的两步动力学 { #covalent-kinetics }

许多定向共价抑制剂可用“先可逆识别、后成键”的两步模型表示：

$$
E+I \rightleftharpoons EI \xrightarrow{k_{\mathrm{inact}}} E{-}I.
$$

在抑制剂浓度近似恒定且过程符合这一简化机制时，表观一级成键速率可写为

$$
k_{\mathrm{obs}}=\frac{k_{\mathrm{inact}}[I]}{K_I+[I]},
\qquad
f_{\mathrm{cov}}(t)=1-e^{-k_{\mathrm{obs}}t}.
$$

$K_I$ 描述形成非共价前复合物的浓度尺度，$k_{\mathrm{inact}}$ 描述该复合物转为共价产物的最大速率，低浓度区的 $k_{\mathrm{inact}}/K_I$ 则比较总体共价标记效率。[^covalent-kinetics] 单个固定孵育时间下的 $IC_{50}$ 会把亲和、反应速率和时间积分混在一起；比较共价探针时应记录完整浓度—时间矩阵，并确认底物耗竭、慢结合、可逆共价步骤或多位点反应是否破坏简化模型。

“形成共价键”与“在生物时间尺度上不可逆”是两个层次。一些 boronate、nitrile 或经过设计的 Michael acceptor 可形成可逆共价加合物；即使化学键本身长期稳定，细胞内占有也会因蛋白降解和新生合成而下降。洗脱后的功能恢复时间因此同时报告键的寿命、靶蛋白周转和通路补偿。

### 标记选择性与化学计量 { #labeling-selectivity-stoichiometry }

质谱强度受蛋白丰度、可接近残基数、成键比例、富集回收率和肽段响应共同影响。高丰度蛋白在很低标记化学计量下也可能给出强信号，低丰度靶标即使接近完全占有仍可能位于检测下限。把富集强度直接排序为“最强靶标”会混合这些变量；位点肽与未修饰肽、输入蛋白丰度及标准品能帮助分离占有率和总量。

基础对照应沿三个模块设置。无反应基团的骨架对照显示非共价吸附和珠子背景，失活或几何错配的 warhead 对照显示反应基团依赖，游离母体竞争显示识别骨架依赖，缺失报告把手的样品显示富集材料和内源 biotinylated protein 背景。浓度升高时新出现的大量蛋白常提示较弱结合位点或广泛副反应，需要与目标占有和细胞状态一同解释。

## 活性探针读取蛋白功能状态 { #activity-based-protein-profiling }

activity-based protein profiling 以可与催化机制成键的探针读取酶的功能状态。经典探针常含 substrate-like recognition group、mechanism-based reactive group 和 reporter。它们能够在复杂蛋白质组中直接标记具有催化能力或保持适当活性位点构象的酶，因此提供的信息不同于总蛋白丰度、转录量或抗体识别。

### 机制导向的酶家族探针 { #mechanism-directed-probes }

Liu、Patricelli 和 Cravatt 用 fluorophosphonate–biotin 标记多种 serine hydrolase，展示同一反应基团如何借助这一酶家族共有的活性位点 nucleophilic serine 形成稳定加合物，并在组织蛋白质组中显示活性模式。[^abpp-serine-hydrolases] 随后，针对 cysteine protease、metallohydrolase、glycosidase 和其他酶类的探针利用 electrophile、mechanism-based inhibitor、光反应基团或可交换金属配位设计扩展了 ABPP 的范围。[^abpp-review]

同一家族探针可以宽泛覆盖许多成员，也可通过 recognition element 获得亚家族或单蛋白偏好。宽谱探针适合比较一个酶家族在组织、发育阶段或刺激前后的活性状态；定向探针则更适合测量某个靶标的占有。两者的解释都依赖催化位点可达性：内源 inhibitor、zymogen activation、氧化还原状态、辅因子和复合物装配都可改变信号，而蛋白总量并未同步变化。

### 竞争性 ABPP 与靶点占有 { #competitive-abpp }

competitive ABPP 先让未标记候选分子与蛋白质组作用，再加入能够标记同一活性位点的 broad-spectrum probe。候选分子若占据、共价修饰或改变该位点构象，probe signal 就会下降。将这种竞争对许多蛋白或位点同时定量，可以在同一实验中比较 intended target 与 off-target 的占有窗口，也能从表型命中物反向寻找可能靶标。

竞争信号说明两个分子在标记链上相互排斥，具体机制仍需分辨。候选物可能直接占据同一口袋，也可能结合别构位点、改变蛋白状态或降低蛋白丰度。完整解释应比较候选物浓度、预孵育时间、probe concentration 和成键时间，并用纯化蛋白、位点突变或结构证据确认竞争发生在哪一步。若候选物在细胞中降低 probe signal 的浓度与近端功能和表型浓度一致，机制链会显著收紧。

### 残基反应性与蛋白质组可配体性 { #residue-reactivity-ligandability }

reactivity-based profiling 使用较通用的 electrophilic probe 测量 proteome 中一类 nucleophilic residue 的可反应性。isoTOP-ABPP 以 iodoacetamide–alkyne 标记 cysteine，再用同位素编码、可切割的富集标签比较不同 probe concentration 或处理条件。Weerapana 等由浓度依赖比值识别一组高度 reactive cysteine，并发现这些位点常富集于催化和调控功能，但序列中没有简单共识可替代实测。[^cysteine-reactivity]

competitive cysteine profiling 进一步用 electrophilic fragment library 与通用 cysteine probe 竞争：某一 fragment 使特定位点信号下降，说明该位点附近形成了可配体的化学环境。Backus 等将这一路线扩展到活细胞和组织蛋白质组，发现许多 ligandable cysteine 位于此前缺乏小分子配体的蛋白，并可由后续结构和功能研究发展为选择性工具。[^covalent-ligandability]

高反应性、可配体性和功能必需性分别回答不同问题。某 cysteine 可因低 pKa 或局部催化环境而高度 reactive，却不一定控制目标表型；另一个反应性普通的 cysteine 可能恰好位于关键调控界面。位点突变应先确认蛋白仍能表达、折叠和完成基础功能，再以 mutant resistance、正交配体和功能 rescue 判断该位点是否连接到表型。

## 光亲和探针捕获短暂结合 { #photoaffinity-labeling }

photoaffinity labeling（PAL）把光反应基团接到保留活性的配体上。探针在暗处主要依靠可逆分子识别定位，短时照光后生成寿命很短的反应中间体，与附近蛋白形成共价键。它适合捕获弱、快速解离或难以在裂解后维持的复合物，也可在候选靶标未知时将表型分子转为可富集探针。[^photoaffinity-labeling]

### 光反应基团与捕获半径 { #photoreactive-groups }

常用 photophore 包括 aryl azide、benzophenone 和 diazirine。aryl azide 受光生成 nitrene，benzophenone 经激发态从邻近 C–H 键夺氢，diazirine 则可生成高度活泼的 carbene；它们在波长、体积、中间体寿命和对水或不同侧链的反应偏好上各有特点。diazirine 体积较小，常用于 minimalist probe；benzophenone 较大但可通过反复激发增加捕获机会。

光中间体的短寿命使成键偏向探针附近，却没有固定不变的“半径”。配体在照光前的驻留时间、photophore 在 linker 上的方向、局部水和氨基酸组成、光剂量及中间体与溶剂的竞争都会改变捕获谱。一个真实结合蛋白也可能因附近缺少合适反应位点而不被标记，邻近的复合物成员则可能比直接接触的靶标获得更强信号。

### 靶蛋白与结合位点的定位 { #photoaffinity-site-mapping }

完整 PAL 实验通常比较有光与无光、带 photophore 与母体配体、可竞争与不可竞争条件。过量未标记母体若降低某蛋白富集，说明记录依赖配体识别；结构相近的失活类似物和位置不同的 photophore 可检验标签位置造成的新选择性。使用多个保持活性的 probe isomer，若共同捕获同一蛋白却标记不同邻近肽段，可为口袋位置和配体取向提供互补约束。

protein-level enrichment 先指出候选蛋白，binding-site mapping 则要鉴定携带 probe adduct 的肽段。后者受 adduct 质量、光反应产物异质性、modified peptide ionization 和碎裂影响，检出率通常低于蛋白层富集。可切割 linker、稳定同位素编码和专门搜索质量偏移有助于保留位点信息；候选位点仍需结构、生化竞争或定点突变复核。

## 亲和富集与定量竞争 { #affinity-competition-proteomics }

不含共价 warhead 的小分子也可通过 affinity matrix 进入化学蛋白质组学。配体固定到珠子上后与细胞裂解物孵育，结合蛋白被保留，再由游离化合物竞争洗脱或抑制捕获。kinobeads 将多种广谱 kinase ligand 固定在同一基质上，使大量 endogenous kinase 及其复合物可以并行竞争；Bantscheff 等由此比较 imatinib、dasatinib 和 bosutinib 的浓度依赖靶标谱，并连接到各药物不同的作用机制。[^kinobeads]

### 固相配体与活细胞捕获的互补性 { #matrix-versus-live-cell }

固相富集提供高容量和强洗涤条件，适合从复杂裂解物中寻找直接或间接结合者。固定位置和 linker 可能遮挡关键结合面，裂解又会打散区室、改变复合物和暴露原本不可达的蛋白表面。活细胞共价或光亲和探针在裂解前完成记录，更接近细胞内通透、代谢和区室条件；它也引入探针进入率、反应时间和细胞状态等变量。两条路线命中重叠时证据更强，差异则可用于定位膜通透、复合物稳定或固定化结构造成的边界。

固定基质常共同富集复合物成员。直接接触 ligand 的蛋白、稳定结合在其上的 partner 和高丰度 bead binder 可能同时出现。游离母体的浓度依赖竞争支持该信号与 ligand recognition 相关，但复合物成员也会随直接靶标一起消失；变性条件下的直接成键、纯化蛋白结合、site mapping 或结构证据用于进一步区分。

### 竞争曲线与多条件定量 { #competition-quantification }

可靠竞争实验保留剂量维度，而不只比较一个高浓度处理。每个蛋白或位点的 enrichment ratio 随 competitor concentration 变化，可拟合表观 $EC_{50}$ 或达到某一占有阈值的浓度。这个数值受基质 ligand 密度、probe concentration、孵育时间、细胞内游离浓度和蛋白丰度影响，适合在同一实验体系内比较靶标窗口，不宜直接当作纯化蛋白的 $K_d$。

SILAC、isobaric tag、isotope-coded cleavable tag 与 label-free quantification 都可承载这种比较。化学蛋白质组学关心的是对照如何定义候选记录：vehicle 给出基线富集，active／inactive analog 分离特异识别，free-parent competition 分离同一骨架依赖，time course 分离快速占有和后续丰度变化。肽段峰如何归一化、汇总为蛋白并控制 FDR，继续由[蛋白质组与质谱数据分析](../bioinfo/proteomics.md#protein-quantification)处理。

## 邻近标记记录空间历史 { #proximity-labeling }

proximity labeling 把可催化共价标记的 enzyme 融合到 bait protein 或定位到特定 organelle。酶生成寿命有限的 activated tag，使附近可接近的蛋白侧链获得 biotin 等稳定标记，随后用 streptavidin 富集和质谱鉴定。它能够记录膜、细胞骨架、动态细胞器和难以温和纯化的复合物环境，其基本对象是“可标记的空间邻域”；direct protein–protein interaction 需要进一步的接触证据。

### BioID 与 TurboID 的时间积分 { #bioid-turboid }

BioID 使用 promiscuous biotin ligase BirA* 融合蛋白。Roux 等以 lamin A fusion 展示 BirA* 可在哺乳动物细胞中 biotinylate proximal protein，并从核纤层环境中识别已知与候选组分。[^bioid] BirA* 生成 activated biotin intermediate，标记附近可接近的 lysine；较长孵育会累积稳定邻近、短暂接近和随 bait 移动经过的蛋白，最终名单因此是一段空间历史。

TurboID 和 miniTurbo 由酵母展示定向进化获得，显著加快 promiscuous biotinylation。Branon 等报告在多种细胞和生物体中约十分钟即可取得有用标记，而经典 BioID 常需数小时。[^turboid] 更短 pulse 能减少时间积分并追踪刺激前后邻域变化，但快速 enzyme 也会扩大低水平 background；无 biotin pulse、未定位 enzyme、定位对照和 bait abundance 校准仍是解释组成部分。

### APEX 的短脉冲空间标记 { #apex-proximity-labeling }

APEX 是工程化 ascorbate peroxidase。加入 biotin–phenol 并给予短时 hydrogen peroxide pulse 后，APEX 生成短寿命 phenoxyl radical，radical 在局部与富电子侧链反应。Rhee 等将 APEX 定位于 mitochondrial matrix，在活细胞中用约一分钟标记获得此前难以纯化的空间蛋白质组，并以已知定位和显微结果验证边界。[^apex]

APEX 的短脉冲适合捕捉较快空间变化，也要求精确对齐底物到达、氧化脉冲和终止时间。radical 寿命短却仍受膜通透、局部抗氧化环境和侧链接近性影响；一个未被检出的蛋白可能缺少合适标记位点或丰度过低。peroxidase activity、底物和 pulse 都可能改变当前细胞状态，因此匹配的无酶、无底物、无脉冲与定位对照用于界定记录链。

### 邻域、互作与跨区室污染 { #proximity-interpretation }

bait fusion 的位置和表达量决定邻域。过量表达可把 bait 推入非生理区室，fusion enzyme 的体积也可能改变复合物装配；定位到 membrane 两侧时，tag generation 和侧链可达性还具有拓扑方向。选择与 bait 相同区室但不参与其复合物的 reference enzyme，比仅用无 enzyme 对照更能扣除共享空间背景。

稳定互作蛋白通常在多个重复和 bait orientation 中持续富集，短暂互作、共同区室蛋白和随机经过者则形成不同时间依赖。将 proximity labeling 与 co-immunoprecipitation、crosslinking、FRET、遗传互作或功能扰动组合，可把“邻域成员”进一步拆成直接接触、同一复合物、共同区室和下游运输关系。

## 从富集样品到蛋白与位点 { #enrichment-to-identification }

稳定标记的价值在于它能经受 denaturation 和 stringent washing。常见流程是在完整细胞或裂解物中完成标记，接入 biotin 等 tag，用 streptavidin 或其他 affinity reagent 捕获，充分洗去非共价成分，再进行 on-bead digestion 或释放标记分子。每一步都重新塑造可见集合：裂解决定哪些区室混合，连接决定多少把手进入可捕获状态，珠子容量决定是否饱和，洗涤决定背景，消化与洗脱决定哪些肽段送入质谱。

### 蛋白层富集与位点层证据 { #protein-site-evidence }

on-bead digestion 常把未带 tag 的普通肽段释放出来，因此能鉴定“哪个蛋白被富集”，却未必看到真正携带共价 adduct 的位点肽。若研究问题是识别 protein target，蛋白层竞争和正交验证可能足够；若要说明 warhead 与哪一个残基成键、photophore 位于哪个口袋，必须保留并搜索 modified peptide。cleavable tag、isotope-coded linker、orthogonal protease 和 targeted MS 可提高位点回收。

一个蛋白由多个肽段定量时，只有少数位点肽可能随竞争改变，其他肽段反映总丰度。把 site-level ratio 与 protein-level ratio 并列，可以区分“特定位点占有下降”和“整个蛋白量下降”。共享肽、低丰度 modified peptide 和开放修饰搜索的错误率仍需按[目标—诱饵、FDR 与蛋白推断](../bioinfo/proteomics.md#fdr-protein-inference)处理。

### 背景蛋白与批次结构 { #background-batch-structure }

streptavidin matrix 会保留内源 biotin-dependent carboxylase，珠子和 linker 也有重复出现的非特异结合者。背景数据库可以辅助识别常见污染物；本实验对照仍然必需，因为细胞类型、裂解剂、盐浓度和洗涤条件都会改变背景。生物学重复应从独立培养和标记开始，而不是把一次富集分成多个进样当作独立样本。

多条件实验还要平衡批次、标记通道和质谱运行顺序。若全部 vehicle 在一批、全部 probe 在另一批，batch effect 会与化学效应完全重合。pooled reference、channel swap、randomized run order 和 QC mixture 能让漂移可估计；这些设计不会修复错误的探针选择，却能避免把仪器或富集批次解释成靶标选择性。

## 靶点鉴定的证据层级 { #target-evidence-hierarchy }

化学蛋白质组学产生候选集，机制鉴定则逐层排除替代解释。Schenone 等将 affinity-based、phenotypic、genetic 和 computational 路线视为相互补充的靶点鉴定方法；关键在于让独立证据在同一分子、同一细胞背景和相近剂量—时间尺度上会合。[^target-identification]

| 证据层级 | 直接观测 | 支持的结论 | 仍待排除的解释 |
| --- | --- | --- | --- |
| 富集命中 | 蛋白相对 vehicle 或负探针增加 | 蛋白进入了稳定记录与富集链 | 珠子背景、高丰度吸附、复合物共富集 |
| 浓度依赖竞争 | 母体或独立配体降低 protein／site signal | 记录依赖可饱和的分子识别 | 别构改变、复合物解离、蛋白量下降 |
| 共价位点 | 质谱鉴定明确 adduct peptide 与 residue | 探针在该残基附近直接成键 | 位点是否决定结合选择性和功能 |
| 纯化体系重构 | 纯化蛋白出现结合、成键或活性改变 | 无其他细胞组分时仍可直接作用 | 细胞暴露、内源状态与选择性 |
| 细胞内占有与近端读出 | 占有、底物或通路近端事件同剂量变化 | 靶标作用在细胞环境中发生 | 远端表型是否由该作用产生 |
| 抗性与救援 | 保持基础功能的 resistant allele 减弱探针效应，或恢复靶标救援表型 | 靶标作用与表型之间形成因果连接 | 多靶标共同作用与系统补偿 |

### 结合蛋白、直接靶标与功能靶标 { #binding-direct-functional-targets }

binding protein 是在捕获或邻近实验中可重复进入候选集的蛋白；direct target 还要求直接结合、成键、竞争位点或简化体系重构；functional target 则要求这一分子事件对观察表型具有必要或足够的贡献。一个探针可以有多个直接靶标，其中只有部分参与当前表型；某些复合物成员虽不直接结合探针，却因共同富集而成为重要机制节点。

靶点术语应与证据层级对齐。PAL 命中且被母体竞争的蛋白可称 candidate binding protein；明确 adduct site 并在纯化蛋白中重构后可称 direct molecular target；resistant allele、target depletion、rescue 和 pathway-specific readout 进一步支持 functional target。将富集名单直接命名为“作用机制”会跳过中间层次，也掩盖多个靶标共同贡献的可能。

### 位点突变、抗性等位基因与救援 { #resistance-rescue }

将共价位点改成不可反应残基是强力实验，但突变也可能改变蛋白折叠、催化和复合物。适用的 resistant allele 应先在无探针条件下恢复野生型表达、定位和基础功能，再检查它是否选择性降低探针占有、近端读出和远端表型。若突变同时使蛋白失活，细胞耐受或敏感性的变化无法单独归给共价成键。

遗传缺失和化学抑制也作用于不同层面。缺失移除催化、支架和定位功能，并允许长期补偿；探针可只占据一个口袋或一个 proteoform。target knockdown 使探针表型减弱可能来自靶标减少，也可能来自通路重布线。急性降解、正交抑制剂、催化缺陷与探针抗性突变的组合，有助于分开蛋白量、催化活动和特定化学位点。

### 剂量、时间与机制闭环 { #dose-time-mechanism }

完整机制链应在相近时间尺度上比较：探针何时到达并占据靶标，何时改变近端底物或复合物，何时出现细胞表型。共价占有先于近端读出、近端读出先于远端表型，且三者浓度窗口一致时，因果方向得到支持。若表型早于可测占有，或只在远高于靶标饱和浓度时出现，需要寻找更快的其他靶标、代谢产物或非特异化学效应。

化学蛋白质组学的核心产物是一条可以反复检验的证据链：定义探针化学身份，说明何种分子状态被记录，定量竞争和位点，重构直接作用，再用细胞内占有、抗性和救援连接到功能。沿着这条链，质谱中的富集比值才能逐步变成关于靶标、位点和生命过程的机制解释。

## 参考资料与延伸阅读 { #references }

- Liu, Y., Patricelli, M. P. & Cravatt, B. F. [Activity-based protein profiling: the serine hydrolases](https://doi.org/10.1073/pnas.96.26.14694). *Proceedings of the National Academy of Sciences USA* 96, 14694–14699 (1999).
- Cravatt, B. F., Wright, A. T. & Kozarich, J. W. [Activity-based protein profiling: from enzyme chemistry to proteomic chemistry](https://doi.org/10.1146/annurev.biochem.75.101304.124125). *Annual Review of Biochemistry* 77, 383–414 (2008).
- Strelow, J. M. [A perspective on the kinetics of covalent and irreversible inhibition](https://doi.org/10.1177/1087057116671509). *SLAS Discovery* 22, 3–20 (2017).
- Weerapana, E. et al. [Quantitative reactivity profiling predicts functional cysteines in proteomes](https://doi.org/10.1038/nature09472). *Nature* 468, 790–795 (2010).
- Backus, K. M. et al. [Proteome-wide covalent ligand discovery in native biological systems](https://doi.org/10.1038/nature18002). *Nature* 534, 570–574 (2016).
- Bantscheff, M. et al. [Quantitative chemical proteomics reveals mechanisms of action of clinical ABL kinase inhibitors](https://doi.org/10.1038/nbt1328). *Nature Biotechnology* 25, 1035–1044 (2007).
- Smith, E. & Collins, I. [Photoaffinity labeling in target- and binding-site identification](https://doi.org/10.4155/fmc.14.152). *Future Medicinal Chemistry* 7, 159–183 (2015).
- Roux, K. J. et al. [A promiscuous biotin ligase fusion protein identifies proximal and interacting proteins in mammalian cells](https://doi.org/10.1083/jcb.201112098). *Journal of Cell Biology* 196, 801–810 (2012).
- Rhee, H.-W. et al. [Proteomic mapping of mitochondria in living cells via spatially restricted enzymatic tagging](https://doi.org/10.1126/science.1230593). *Science* 339, 1328–1331 (2013).
- Branon, T. C. et al. [Efficient proximity labeling in living cells and organisms with TurboID](https://doi.org/10.1038/nbt.4201). *Nature Biotechnology* 36, 880–887 (2018).
- Schenone, M., Dančík, V., Wagner, B. K. & Clemons, P. A. [Target identification and mechanism of action in chemical biology and drug discovery](https://doi.org/10.1038/nchembio.1199). *Nature Chemical Biology* 9, 232–240 (2013).

[^covalent-kinetics]: Strelow, J. M. [A perspective on the kinetics of covalent and irreversible inhibition](https://doi.org/10.1177/1087057116671509). *SLAS Discovery* 22, 3–20 (2017)。该综述区分 time-dependent $IC_{50}$、$K_I$、$k_{\mathrm{inact}}$、$k_{\mathrm{inact}}/K_I$ 和占有率，并讨论底物耗竭、可逆步骤及不同动力学机制对参数估计的影响。
[^abpp-serine-hydrolases]: Liu, Y., Patricelli, M. P. & Cravatt, B. F. [Activity-based protein profiling: the serine hydrolases](https://doi.org/10.1073/pnas.96.26.14694). *Proceedings of the National Academy of Sciences USA* 96, 14694–14699 (1999)。原始研究以 fluorophosphonate–biotin 在复杂组织样品中共价标记 active serine hydrolase，建立按酶活性而非蛋白量描绘家族谱的经典路径。
[^abpp-review]: Cravatt, B. F., Wright, A. T. & Kozarich, J. W. [Activity-based protein profiling: from enzyme chemistry to proteomic chemistry](https://doi.org/10.1146/annurev.biochem.75.101304.124125). *Annual Review of Biochemistry* 77, 383–414 (2008)。综述系统归纳 serine hydrolase、cysteine protease、metalloprotease、kinase 等 ABPP 探针的识别与反应机制，并比较 gel-based、LC–MS 和 competitive formats。
[^cysteine-reactivity]: Weerapana, E. et al. [Quantitative reactivity profiling predicts functional cysteines in proteomes](https://doi.org/10.1038/nature09472). *Nature* 468, 790–795 (2010)。研究以不同浓度 iodoacetamide–alkyne 和 isotope-coded TEV tag 定量 cysteine reactivity，说明高度 reactive site 常与催化或调控功能相关，但不存在可替代实验测量的简单序列规则。
[^covalent-ligandability]: Backus, K. M. et al. [Proteome-wide covalent ligand discovery in native biological systems](https://doi.org/10.1038/nature18002). *Nature* 534, 570–574 (2016)。研究以 electrophilic fragment 和 cysteine-reactive probe 的竞争在 native proteome 中定位 ligandable cysteine，并将部分命中发展为具细胞功能的选择性 covalent ligand。
[^photoaffinity-labeling]: Smith, E. & Collins, I. [Photoaffinity labeling in target- and binding-site identification](https://doi.org/10.4155/fmc.14.152). *Future Medicinal Chemistry* 7, 159–183 (2015)。综述比较 aryl azide、benzophenone 与 diazirine 的光化学性质，并以靶点发现和 binding-site mapping 说明 probe placement、竞争和质谱位点鉴定的证据要求。
[^kinobeads]: Bantscheff, M. et al. [Quantitative chemical proteomics reveals mechanisms of action of clinical ABL kinase inhibitors](https://doi.org/10.1038/nbt1328). *Nature Biotechnology* 25, 1035–1044 (2007)。原始研究以 immobilized broad-spectrum kinase inhibitors 和定量质谱比较多种 ABL inhibitor 的浓度依赖靶标谱，并识别与临床作用和副作用相关的差异结合蛋白。
[^bioid]: Roux, K. J. et al. [A promiscuous biotin ligase fusion protein identifies proximal and interacting proteins in mammalian cells](https://doi.org/10.1083/jcb.201112098). *Journal of Cell Biology* 196, 801–810 (2012)。原始研究将 BirA* 与 lamin A 融合，在哺乳动物细胞中对邻近蛋白进行 promiscuous biotinylation，并由 streptavidin 富集识别核纤层环境。
[^turboid]: Branon, T. C. et al. [Efficient proximity labeling in living cells and organisms with TurboID](https://doi.org/10.1038/nbt.4201). *Nature Biotechnology* 36, 880–887 (2018)。研究经定向进化获得 TurboID／miniTurbo，在多种细胞与生物体中显著缩短 biotin-dependent proximity labeling 所需时间，并展示组织和亚细胞邻域的蛋白质组读出。
[^apex]: Rhee, H.-W. et al. [Proteomic mapping of mitochondria in living cells via spatially restricted enzymatic tagging](https://doi.org/10.1126/science.1230593). *Science* 339, 1328–1331 (2013)。研究用定位于 mitochondrial matrix 的 engineered peroxidase 产生短寿命 biotin–phenoxyl radical，在活细胞内快速标记局部蛋白质组，并以已知定位和显微证据检验空间特异性。
[^target-identification]: Schenone, M., Dančík, V., Wagner, B. K. & Clemons, P. A. [Target identification and mechanism of action in chemical biology and drug discovery](https://doi.org/10.1038/nchembio.1199). *Nature Chemical Biology* 9, 232–240 (2013)。综述比较直接生化、亲和捕获、表型、遗传和计算靶点鉴定策略，强调以相互独立的方法建立 target identity 与 mechanism of action。
