# 基因组设计、代谢工程与生物制造

代谢工程把细胞看作持续摄取、转化和排出物质的开放反应网络。研究者可以增强天然产物的合成，接入来自其他生物的反应，也可以组合出宿主原本没有的转化路线；每一种改造都要与细胞生长、能量、还原力和大分子合成共享资源。Nielsen 和 Keasling 将这项工作概括为重新布置细胞代谢，使天然产物的形成增加，或赋予细胞合成新产物的能力。[^metabolic-engineering-scope]

基因组设计把修改尺度从若干通路扩大到整套遗传背景。大片段合成、染色体重排、基因组精简和密码子替换能够改变底盘的调控接口、遗传冗余与信息容量。生物制造再把经过设计的细胞置入具有供料、混合、传质和产物回收的过程，检验实验室中的通量分配能否在更长时间、更大体积和更不均一的环境中保持。

本页沿 pathway—genome—process 三个尺度展开。天然代谢物、热力学、辅因子和控制系数的基础见[代谢总论](../biochem/metabolism.md)，化学计量约束、flux balance analysis（FBA）和 metabolic control analysis（MCA）的模型实现见[系统建模、参数推断与实验检验](systems_modeling_inference.md)。本页集中讨论怎样改写这些量，以及怎样用产物和制造性能检验设计。

## 细胞工厂中的通量分配 { #cell-factory-flux }

细胞工厂（cell factory）由宿主代谢网络、目标通路、遗传控制和培养边界共同组成。底物进入后，一部分碳、氮、硫和磷形成目标产物，一部分进入 biomass，一部分变成副产物，还有一部分通过 maintenance metabolism、呼吸或发酵耗散。目标通量增加时，前体池、ATP、NADH／NADPH、CoA、氧和膜转运能力都可能成为新的约束。

代谢物池与通量需要分开观察。中间物浓度升高可能来自上游生成加快，也可能来自下游消耗受阻；酶量增加只表示潜在容量变化，底物供应、产品抑制、热力学驱动力和竞争支路仍会决定净通量。工程判断因而要把 intracellular concentration、摄取与分泌速率、isotopic labeling 和 product formation 放在同一物质平衡中。

### titer、rate 与 yield { #titer-rate-yield }

生物制造常用三个彼此不能替代的量评价产物。若 $m_P$ 是产物量，$m_S$ 是消耗的底物量，$V$ 是培养体积，则可写成

$$
\begin{aligned}
T_P&=\frac{m_P}{V},\\
r_P&=\frac{\Delta m_P}{V\,\Delta t},\\
Y_{P/S}&=\frac{\Delta m_P}{\Delta m_S}.
\end{aligned}
$$

titer $T_P$ 是收获时单位体积的产物量，影响后续浓缩与分离负担；volumetric production rate $r_P$ 表示反应器体积在单位时间内形成多少产物，连接设备占用时间；yield $Y_{P/S}$ 表示底物有多少进入目标产物，反映物质利用。实际报告还要说明质量或物质的量单位、底物边界、是否扣除初始产物，以及采用平均速率还是某一阶段的瞬时速率。

三项指标可沿不同方向变化。延长培养可能提高 titer，却降低平均 productivity；提高 feed rate 可能加快生产，同时使 overflow metabolism 和副产物增加而降低 yield；把更多碳强制导向产物又可能限制 biomass formation，使早期生长不足。selectivity、product purity、strain stability 和 downstream recovery 也会影响整体结果，因此 cell factory 的目标通常是多目标折中，而不是单独最大化某一终点浓度。

### 前体、辅因子与热力学边界 { #precursor-cofactor-thermodynamics }

目标通路首先服从化学计量和元素守恒。若一个分支点的输入通量为 $v_{in}$，则它在准稳态附近要分配给 product、biomass、by-product 和其他需求：

$$
\begin{aligned}
v_{in}\approx{}&v_{product}+v_{biomass}\\
&+v_{byproduct}+v_{maintenance}.
\end{aligned}
$$

增加 $v_{product}$ 可以提高共同前体的供应、降低竞争支路、增强目标酶或移走产物；每一种操作都会改变其他项。完全切断 biomass precursor 或 redox-balancing branch 可能让模型中的碳收率提高，却使真实细胞无法维持合成能力。gene knockout 的价值要由生长、交换通量和补偿支路共同检验。

辅因子形成另一组网络约束。还原性合成常需要 NADPH，有些异源酶偏好 NADH；ATP、GTP、CoA、SAM、UDP-sugar 和金属离子又连接不同反应。只补充碳前体而忽略 cofactor specificity，会造成目标酶有底物却缺少电子、能量或基团载体。调整 transhydrogenase、cofactor regeneration、呼吸和发酵分配时，还要追踪整个细胞的 redox balance，而不是把还原当量当作无限试剂。

热力学边界取决于实际底物／产物活度。接近平衡的步骤可随质量作用比改变方向，远离平衡的步骤可能需要 product removal、ATP coupling 或替代路线才能维持目标方向。氧化还原反应还受氧供和电子受体影响；在摇瓶中有利的通路进入氧传递受限的反应器后，NADH reoxidation、ATP generation 和 by-product spectrum 都可能改变。转运体决定底物能否进入、产物能否排出以及区室间是否形成局部瓶颈，本身也可能消耗膜势或 ATP。

### 酶量、通路平衡与空间组织 { #enzyme-balance-spatial-organization }

目标通路很少由一个永久固定的“限速酶”决定。上游过强会积累有反应性或有毒的中间物，下游过强可能耗尽共享前体，膜蛋白过量会占用 membrane insertion machinery，P450 等氧化酶还需还原伴侣与氧。通量控制会随营养、酶饱和度、产物抑制和细胞状态重新分配，工程上常用 promoter／RBS 梯度、copy number、protein degradation 和 enzyme variant 形成多维表达组合。

Ajikumar 等把异戊二烯前体模块与 taxadiene 形成模块分开调节，通过 multivariate–modular optimization 平衡上下游能力，并显著提高 *Escherichia coli* 中 Taxol 前体的形成。[^taxadiene-pathway-balance] 这个例子说明模块化的对象可以是共享前体与目标支路，而模块接口仍要由中间物、负担和通量测量定义。

空间组织可以缩短中间物在相关酶之间扩散的平均距离，或把互相冲突的反应分配到不同 compartment。Dueber 等用具有不同 binding domains 的 synthetic protein scaffold 调节三种异源酶的相对招募，提高了 mevalonate 和 glucaric acid pathway 的产出。[^synthetic-metabolic-scaffolds] scaffold 的效果同时可能来自局部酶比例、稳定性和有效浓度；证明真正 substrate channeling 还需同位素、动力学或结构证据。真核细胞中的 cytosol、mitochondrion、peroxisome、endoplasmic reticulum 和 lipid droplet 提供天然区室，重新定位酶时还要补齐 transporter、cofactor 和膜拓扑。

### 静态通路重构与新反应路线 { #static-pathway-engineering }

静态重构在整个生产阶段维持相对固定的基因型与表达结构。常见操作包括提高 precursor-forming reaction、删除 competing pathway、引入 heterologous enzyme、改变 cofactor preference、增加 transporter 和整合 pathway cassette。FBA 可在守恒与交换边界下列出可行的通量重排，MCA 可判断稳态附近哪些酶量变化更可能改变目标通量；模型得到的是候选设计，仍需由摄取、分泌、生长和 $^{13}$C metabolic flux analysis 检验。

全新产物路线需要在反应数据库、热力学和宿主代谢之间寻找可连接的步骤。Yim 等为 1,4-butanediol 选择并实现宿主原本没有的合成路径，再通过 enzyme selection、pathway balance 和 strain engineering 使葡萄糖碳流进入目标产物。[^de-novo-bdo-pathway] 这类 de novo pathway 同时检验反应可行性、酶的实际底物谱和细胞网络能否供应所需前体；计算上存在的一条路线只有在完整细胞中形成可测通量后才成为制造通路。

## 动态代谢控制 { #dynamic-metabolic-control }

许多生产通路在快速生长期并不适合持续高表达。异源酶和目标产物会消耗 protein synthesis capacity，中间物可能损伤膜或抑制生长，过早抽走中心代谢前体又会限制 biomass accumulation。动态控制让线路读取时间、cell density、metabolite 或 stress state，在不同阶段改变 enzyme abundance，把“先形成催化细胞量、后集中生产”写入调控过程。

### 代谢传感器与反馈调节 { #metabolic-sensor-feedback }

metabolite-responsive transcription factor、riboswitch、enzyme-coupled sensor 和 stress promoter 可以把隐藏的内部状态转换为基因表达。sensor 的输入范围要覆盖实际 intermediate concentration，下游 promoter 的阈值、leakiness 和 response time 又要与代谢池的变化速度匹配。反馈若过慢，中间物已积累到抑制范围后才启动；反馈过强则可能反复开关或压低平均通量。

Zhang 等构建的 dynamic sensor–regulator system 以 fatty-acyl-CoA-responsive regulator 读取脂肪酸代谢状态，协调 fatty-acid-derived product pathway 与宿主代谢，使表达随内部通量而改变。[^dynamic-fatty-acid-control] Dahl 等则从 heterologous pathway 引起的 stress response 中筛选可用 promoter，让累积中间物所触发的细胞响应反过来调节通路，降低 toxic intermediate burden。[^stress-responsive-control] 两类工作都把传感器接入生产反馈；promoter、logic、delay 与 burden 的线路原理见[生物元件与合成基因线路](synthetic_circuits.md)。

### 生长—生产转换与群体演化 { #growth-production-evolution }

两阶段过程可以由外源诱导、营养转换、quorum signal 或内源代谢传感器触发。生产阶段降低 growth rate 会减少新 biomass 对前体的竞争，却也降低 protein renewal、cofactor regeneration 和总体活性；最优切换时刻取决于细胞量、enzyme lifetime、product toxicity 和预计运行时间。连续培养还需要考虑低产突变体的 fitness advantage，短期产量高的线路未必能长期保持 population-level productivity。

adaptive laboratory evolution（ALE）可以在规定底物、毒性或 growth-coupled objective 下富集性能更好的变体。它常找到 transporter、global regulator、membrane 或 stress response 中不易由局部通路模型预见的改变。ALE 得到的 phenotype 需要 genome sequencing、allele reconstruction 和 reverse engineering 才能分清 causal mutation 与 hitchhiker；若选择压力只奖励生长而没有奖励产物，进化也可能降低生产通路的活性。

## 代表性通路与制造链 { #representative-pathways }

### 青蒿酸通路的跨尺度优化 { #artemisinic-acid-case }

Ro 等在 *Saccharomyces cerevisiae* 中增强 mevalonate pathway 的前体供应，引入 amorphadiene synthase，并利用来自青蒿的 cytochrome P450 system 把 amorphadiene 氧化为 artemisinic acid。[^artemisinic-acid-production] 这项工作把中心代谢、异源 terpene synthase、membrane-associated P450、redox partner 和产物形成连接起来，显示“引入一条反应”之外还要重构宿主供应网络。

Paddon 等进一步通过 pathway and fermentation optimization 实现高水平 artemisinic acid production，并把发酵产物接入化学转化形成半合成 artemisinin。[^semisynthetic-artemisinin] 从基因线路到酵母生理、反应器供氧和产品转化的连续优化说明，cell factory 的输出常是下一制造步骤的 substrate；最终路线由生物转化与后续化学、分离过程共同组成。

Taxadiene、1,4-butanediol 和 artemisinic acid 分别展示了三种常见路径：平衡天然前体与异源天然产物支路、从候选反应组合宿主原本没有的路线、以及把发酵中间体交给后续转化。三类案例都要以通路身份、碳与辅因子平衡、时序通量、宿主适合度和过程性能之间相互吻合的证据说明产物从何而来、为何增加。

## 基因组作为设计对象 { #genome-as-design-object }

局部 genome editing 改变一个或少数位点，genome design 则先规定大片段或整条染色体的目标结构，再通过 synthesis、assembly、replacement 或 transplantation 实现。设计变量可包括 gene order、regulatory boundary、repeat content、codon usage、chromosome architecture 和 embedded recombination sites。大片段改写会把原本分散的 context effect 汇聚起来，验证必须同时检查 sequence identity、染色体稳定、表达和细胞表型。

### 基因组精简与底盘重构 { #genome-reduction-chassis }

top-down genome reduction 从可生长细胞出发，删除在指定条件下不再需要的 gene、mobile element、prophage、repeat 或 alternative pathway。精简可减少不希望的重组、背景表达和未知支路，却也可能移除 stress tolerance、nutrient flexibility 或环境切换所需的功能。“非必需”始终依赖培养基、温度、群体密度和评价时间，较小的 genome 不自动等于更快生长或更易工程化。

Gibson 等从数字序列出发合成并组装 1.08 Mb 的 *Mycoplasma mycoides* genome，再把它移植到 *M. capricolum* recipient cell，使受体由合成基因组控制。[^synthetic-genome-transplantation] 这个实验把 genome sequence、assembly、transplantation 和 cell phenotype 连成证据链，也显示 synthetic genome 仍依赖 recipient cytoplasm、membrane 和已有的分子机器启动运行。

Hutchison 等在这一平台上结合 whole-genome design、化学合成和实验删减，得到 531 kb、473 genes 的 minimal bacterial genome；其中相当一部分保留基因当时仍缺少明确功能。[^minimal-genome-design] 精简实验由“能否删除”识别当前条件下的必要集合，却不会自动解释每个必要基因的机制。最小 genome 与最小 cell 的 top-down 路径将在[无细胞系统、最小细胞与人工细胞](synthetic_cell_free.md)继续展开。

### 合成染色体与基因组重构 { #synthetic-chromosomes }

合成染色体允许在保持总体基因功能的同时统一设计规则。Synthetic Yeast Genome Project（Sc2.0）在 *Saccharomyces cerevisiae* 染色体中系统替换 TAG 终止密码子，删除选定的重复序列、内含子和 tRNA 基因，并插入 loxPsym 位点作为可诱导基因组重排的接口。Dymond 等首先展示合成染色体臂可在酵母中工作并按设计产生表型多样性；Annaluru 等随后完成一条 272,871-bp 设计染色体，Richardson 等总结了整套合成酵母基因组的设计原则。[^synthetic-yeast-chromosomes]

染色体“能够组装”只是第一层验收。研究者还要比较 growth、cell cycle、chromosome segregation、transcript abundance、stress response 和不同环境中的 fitness，定位由预期设计、assembly error 或长程 sequence context 引起的表型。synthetic chromosome 提供的是可系统扰动的遗传平台，设计规则仍由逐轮构建与校正形成。

### 全基因组重编码与密码子压缩 { #genome-recoding }

genome recoding 用 synonymous replacement 系统改变 codon usage。若先把某个 codon 的全部天然用途替换为同义 codon，再移除负责读取它的 tRNA 或 release factor，这个 codon 就可能从原有任务中释放出来，成为新的信息通道。替换范围必须覆盖 protein-coding gene，也要考虑 overlapping gene、RNA element、translation speed、mRNA structure 和 annotation error。

Lajoie 等把 *E. coli* 中已知 UAG stop codon 改为 UAA，并删除 release factor 1，使 UAG 可被重新分配给 noncanonical amino acid。[^genome-recoding-uag] Fredens 等进一步合成全基因组重编码的 *E. coli*，以 synonymous replacement 移除两种 serine codon 和一种 stop codon 的使用，形成以 61 种 codon 支持生长的 genome。[^recoded-ecoli] 这些构建表明遗传密码具有可压缩空间，也显示大规模同义替换会累积局部 translation 和 fitness effect，需要逐段测试与修复。

### 扩展遗传密码与遗传字母 { #expanded-genetic-information }

扩展遗传密码通常使用一对与宿主体系相互正交的 aminoacyl-tRNA synthetase（aaRS）和 tRNA。aaRS 选择 noncanonical amino acid 并为 orthogonal tRNA 充氨，tRNA 再读取 amber stop codon、freed sense codon 或 quadruplet codon，把新的 side-chain chemistry 放入指定 protein site。正交性要求宿主 synthetase 不误充该 tRNA、engineered aaRS 不大量识别天然 amino acid，还要控制 release factor competition、uptake、incorporation efficiency 和 proteome-wide mistranslation。

Wang 等在 *E. coli* 中建立 orthogonal tRNA／aaRS pair，以 amber suppression 在蛋白特定位点编码 O-methyl-L-tyrosine，展示了活细胞中扩展遗传密码的经典路线。[^expanded-genetic-code] 在 genome-wide codon compression 之后，Robertson 等删除对应 tRNA 并重新分配 freed sense codon，使细胞能够编码含多种 noncanonical monomer 的 polymer；这同时改变了外来遗传信息能否被宿主翻译。[^sense-codon-reassignment]

遗传字母扩展发生在更上游的信息载体层。Malyshev 等让半合成 *E. coli* 在 plasmid DNA 中复制由 d5SICS–dNaM 构成的第三对碱基；体系需要从培养环境摄取相应 unnatural nucleoside triphosphates。随后 Zhang 等进一步让 expanded alphabet 中的信息被转录和翻译，形成含 noncanonical amino acid 的蛋白。[^expanded-genetic-alphabet] 这一路线把信息容量从 codon reassignment 推到新的 base-pairing channel，也增加了 nucleotide transport、polymerase fidelity、DNA repair、transcription 和 translation 的多层接口。

## 生物制造的尺度连接 { #biomanufacturing-scale }

一株在微孔板或摇瓶中表现良好的 strain 进入 bioreactor 后，会遇到新的时间与空间边界。batch culture 一次加入大部分底物，fed-batch 用 feed profile 控制 substrate 和 growth，continuous culture 则以 dilution rate 连接输入、输出和群体更新。process choice 会改变碳流、氧需求、protein expression、population selection 和收获时点，必须与 strain design 同时确定。

### 传质、供料与反应器梯度 { #mass-transfer-gradients }

大型反应器中的 mixing time 不再远小于细胞代谢响应时间。靠近 feed port 的细胞可能经历短暂高底物和 overflow metabolism，离开该区域后又进入 starvation；gas–liquid transfer 限制 oxygen availability，局部 pH、CO$_2$、temperature 和 shear 也随位置变化。细胞循环穿过这些区域时，代谢与转录不断切换，平均 dissolved oxygen 或平均 substrate concentration 不能代表单细胞实际经历。

Lara 等将 dissolved gas、pH、substrate concentration 和 shear gradient 归纳为大型 bioreactor 中影响细胞状态的主要非均一性。[^bioreactor-heterogeneity] 提高搅拌和通气可改善 transfer，却增加 power input、heat 和 shear；降低 feed peak 可减轻 overflow，却可能限制 productivity。process optimization 因而要同时处理 mass transfer、cell physiology 和 equipment constraint。

### scale-down 与动态环境复现 { #scale-down-models }

scale-down system 在小规模设备中主动复现大型反应器的代表性时间序列。例如把细胞在 well-mixed reactor 与高 substrate／低 oxygen zone 之间循环，或施加 measured feed、pH 与 oxygen fluctuation，再观察 product rate、by-product、stress response 和 population distribution。Neubauer 与 Junne、Noorman 分别总结了用 scale-down simulator 连接 large-scale heterogeneity、metabolic analysis 和 process improvement 的方法。[^scale-down-bioreactors]

有效的 scale-down 不能只让平均值相同。细胞穿越梯度的 amplitude、period、residence-time distribution 和变量之间的相关性都会影响响应；持续处于中等氧和在高氧／缺氧之间快速切换，即使平均 oxygen 相同，也可能形成不同 redox state。large-scale measurement、computational fluid dynamics 与 scale-down experiment 要共同确定应重现的扰动波形。

### 遗传稳定、群体组成与产物回收 { #manufacturing-stability-recovery }

制造周期延长后，copy-number variation、plasmid loss、recombination 和 disabling mutation 会改变 population composition。chromosomal integration 通常降低 copy fluctuation，却可能减少表达量并受 locus context 影响；selection marker 可以维持部分构建，也不能阻止内部突变获得 growth advantage。长期验证应同时追踪 viable cell density、single-cell output、genotype frequency 和 productivity，而不是只在终点测 bulk titer。

产物位置和化学性质又决定 recovery boundary。分泌产物可减少 cell disruption，却可能需要跨膜 transport 并受到 extracellular degradation；胞内产物要从 biomass 中释放，疏水产物可能分配到 membrane、lipid droplet 或有机相，有挥发性或反应性的产物则可能在培养过程中损失。工程宿主时预先考虑 secretion、phase partition、product stability 和 purification selectivity，能避免只在发酵阶段形成高 titer、却在回收阶段失去整体性能。

## 多尺度设计的实验检验 { #multiscale-validation }

pathway、genome 与 process 的证据要在同一物质和时间框架中闭合。sequence verification 确认构建身份，RNA 和 protein measurement 判断设计是否表达，metabolite pool 与 $^{13}$C labeling 约束 flux，摄取／分泌和 biomass 给出边界，single-cell measurement 揭示亚群，bioreactor time series 则检验动态环境。若 product increase 伴随 growth、cofactor、by-product 和 genotype change，模型必须解释这些联动，而不能只把终点产量归因于一个被修改的酶。

| 设计层级 | 直接改变量 | 主要读出 | 常见失配来源 |
| --- | --- | --- | --- |
| enzyme／transporter | 催化、亲和力、辅因子偏好、膜运输 | 单步动力学、底物／产物谱、定位 | 体外活性不能代表细胞内底物、热力学和膜环境 |
| pathway／circuit | 酶量、支路、feedback、dynamic switch | flux、intermediate、product、growth | 中间物毒性、共享前体、资源负担和 delay |
| genome／chassis | gene content、order、codon、chromosome architecture | sequence、expression、fitness、stability | 长程 context、隐藏 essentiality、assembly error 和补偿 |
| population | genotype frequency、cell-state distribution | 单细胞产出、谱系、长期 productivity | 低产高适合度变体接管、plasmid loss 和亚群转换 |
| bioreactor／recovery | feed、mixing、gas transfer、residence time、分离条件 | titer、rate、yield、purity、energy／material input | 环境梯度、scale mismatch、product loss 和 downstream bottleneck |

前瞻检验可故意改变 precursor supply、cofactor availability、feed waveform、oxygen transfer 或 growth–production switch time，观察模型能否预测 titer、rate、yield 与副产物的联合变化。基因组设计还需在多个环境中检查 deletion、recoding 和 synthetic chromosome 的表型；manufacturing design 则要由 scale-down 与逐级放大反复验证。只有跨尺度预测经新条件检验，局部改造才真正连接到稳定的生物制造行为。

## 与相邻页面的接口 { #disciplinary-interfaces }

[代谢总论](../biochem/metabolism.md)负责天然网络中的 stoichiometry、thermodynamics、compartment、cofactor 和 control，[系统建模、参数推断与实验检验](systems_modeling_inference.md)负责 FBA、MCA、sensitivity、identifiability 与 isotope constraint 的通用推断；本页把这些量转成目标 product、genome 和 manufacturing process 的设计变量。[生物元件与合成基因线路](synthetic_circuits.md)承接 sensor、feedback、dynamic switch 和 burden 的线路机制，[无细胞系统、最小细胞与人工细胞](synthetic_cell_free.md)将 genome reduction、expression system 和 compartment 进一步拆解，[合成生物学入口页](synthetic_biology.md)则保留 DBTL、host context 与 evolutionary stability 的共同框架。

## 参考资料与延伸阅读 { #references }

[^metabolic-engineering-scope]: Nielsen J, Keasling JD. [Engineering Cellular Metabolism](https://doi.org/10.1016/j.cell.2016.02.004). *Cell*. 2016;164:1185–1197；Keasling JD. [Manufacturing molecules through metabolic engineering](https://doi.org/10.1126/science.1193990). *Science*. 2010;330:1355–1358.
[^taxadiene-pathway-balance]: Ajikumar PK, Xiao WH, Tyo KEJ, et al. [Isoprenoid pathway optimization for Taxol precursor overproduction in *Escherichia coli*](https://doi.org/10.1126/science.1191652). *Science*. 2010;330:70–74.
[^synthetic-metabolic-scaffolds]: Dueber JE, Wu GC, Malmirchegini GR, et al. [Synthetic protein scaffolds provide modular control over metabolic flux](https://doi.org/10.1038/nbt.1557). *Nature Biotechnology*. 2009;27:753–759.
[^de-novo-bdo-pathway]: Yim H, Haselbeck R, Niu W, et al. [Metabolic engineering of *Escherichia coli* for direct production of 1,4-butanediol](https://doi.org/10.1038/nchembio.580). *Nature Chemical Biology*. 2011;7:445–452.
[^dynamic-fatty-acid-control]: Zhang F, Carothers JM, Keasling JD. [Design of a dynamic sensor-regulator system for production of chemicals and fuels derived from fatty acids](https://doi.org/10.1038/nbt.2149). *Nature Biotechnology*. 2012;30:354–359.
[^stress-responsive-control]: Dahl RH, Zhang F, Alonso-Gutierrez J, et al. [Engineering dynamic pathway regulation using stress-response promoters](https://doi.org/10.1038/nbt.2689). *Nature Biotechnology*. 2013;31:1039–1046.
[^artemisinic-acid-production]: Ro DK, Paradise EM, Ouellet M, et al. [Production of the antimalarial drug precursor artemisinic acid in engineered yeast](https://doi.org/10.1038/nature04640). *Nature*. 2006;440:940–943.
[^semisynthetic-artemisinin]: Paddon CJ, Westfall PJ, Pitera DJ, et al. [High-level semi-synthetic production of the potent antimalarial artemisinin](https://doi.org/10.1038/nature12051). *Nature*. 2013;496:528–532.
[^synthetic-genome-transplantation]: Gibson DG, Glass JI, Lartigue C, et al. [Creation of a bacterial cell controlled by a chemically synthesized genome](https://doi.org/10.1126/science.1190719). *Science*. 2010;329:52–56.
[^minimal-genome-design]: Hutchison CA III, Chuang RY, Noskov VN, et al. [Design and synthesis of a minimal bacterial genome](https://doi.org/10.1126/science.aad6253). *Science*. 2016;351:aad6253.
[^synthetic-yeast-chromosomes]: Dymond JS, Richardson SM, Coombes CE, et al. [Synthetic chromosome arms function in yeast and generate phenotypic diversity by design](https://doi.org/10.1038/nature10403). *Nature*. 2011;477:471–476；Annaluru N, Muller H, Mitchell LA, et al. [Total synthesis of a functional designer eukaryotic chromosome](https://doi.org/10.1126/science.1249252). *Science*. 2014;344:55–58；Richardson SM, Mitchell LA, Stracquadanio G, et al. [Design of a synthetic yeast genome](https://doi.org/10.1126/science.aaf4557). *Science*. 2017;355:1040–1044.
[^genome-recoding-uag]: Lajoie MJ, Rovner AJ, Goodman DB, et al. [Genomically recoded organisms expand biological functions](https://doi.org/10.1126/science.1241459). *Science*. 2013;342:357–360.
[^recoded-ecoli]: Fredens J, Wang K, de la Torre D, et al. [Total synthesis of *Escherichia coli* with a recoded genome](https://doi.org/10.1038/s41586-019-1192-5). *Nature*. 2019;569:514–518.
[^expanded-genetic-code]: Wang L, Brock A, Herberich B, Schultz PG. [Expanding the genetic code of *Escherichia coli*](https://doi.org/10.1126/science.1060077). *Science*. 2001;292:498–500.
[^sense-codon-reassignment]: Robertson WE, Funke LFH, de la Torre D, et al. [Sense codon reassignment enables viral resistance and encoded polymer synthesis](https://doi.org/10.1126/science.abg3029). *Science*. 2021;372:1057–1062.
[^expanded-genetic-alphabet]: Malyshev DA, Dhami K, Lavergne T, et al. [A semi-synthetic organism with an expanded genetic alphabet](https://doi.org/10.1038/nature13314). *Nature*. 2014;509:385–388；Zhang Y, Ptacin JL, Fischer EC, et al. [A semi-synthetic organism that stores and retrieves increased genetic information](https://doi.org/10.1038/nature24659). *Nature*. 2017;551:644–647.
[^bioreactor-heterogeneity]: Lara AR, Galindo E, Ramírez OT, Palomares LA. [Living with heterogeneities in bioreactors: understanding the effects of environmental gradients on cells](https://doi.org/10.1385/MB:34:3:355). *Molecular Biotechnology*. 2006;34:355–381.
[^scale-down-bioreactors]: Neubauer P, Junne S. [Scale-down simulators for metabolic analysis of large-scale bioprocesses](https://doi.org/10.1016/j.copbio.2010.02.001). *Current Opinion in Biotechnology*. 2010;21:114–121；Noorman H. [An industrial perspective on bioreactor scale-down: what we can learn from combined large-scale bioprocess and model fluid studies](https://doi.org/10.1002/biot.201000406). *Biotechnology Journal*. 2011;6:934–943.
