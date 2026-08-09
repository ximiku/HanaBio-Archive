# 结构生物信息学

蛋白质结构把序列中的残基顺序转化为三维空间中的距离、取向和相互作用网络。催化残基能否共同围成活性中心，跨膜螺旋如何组成通道，两个亚基是否形成互补界面，通常都要在这一空间层次上讨论。结构生物信息学由此连接了序列分析、实验结构测定、物理化学建模和功能研究：它整理结构数据，比较已经观察到的折叠，预测尚未测定的构象，并把模型转化为可以接受实验检验的假说。

结构文件中的坐标并不是分子的照片。实验结构是由衍射、共振或成像数据在模型假设和精修约束下得到的解释；计算预测则是算法根据序列、进化信息、结构模板或能量函数给出的模型。二者都可能十分有用，也都带有适用范围和不确定性。读懂结构的第一步，因而是追问坐标从何而来、对应哪个分子对象、哪些部分有数据支持，以及准备据此作出多强的结论。

## 结构数据、坐标模型与生物学对象 { #structure-data-model }

一条数据库记录首先描述的是实验或计算中使用的**构建体**。它可能只包含天然蛋白的一个结构域，可能删除了柔性末端，也可能带有亲和标签、稳定化突变、融合伙伴或非天然交联。记录里的聚合物实体、实验样品中的分子和参考蛋白序列并不总是一一相同；残基编号也可能同时存在作者编号、文件顺序编号和参考序列编号。研究变异、剪接异构体或活性位点时，应先完成序列、构建体、链和编号体系之间的映射。

坐标模型以原子位置为主体，还记录化学组分、共价连接、占有率、原子位移参数以及可能的替代构象。一个残基没有坐标，常表示该区域在数据中无法可靠建模，而非样品中一定不存在；侧链缺少末端原子也不等于残基被截短。相反，坐标表中出现一个原子，并不保证其位置在当前分辨率和局部信号下同样确定。PDBx/mmCIF 通过相互关联的数据类别保存这些信息，已经取代字段宽度有限的传统 PDB 格式成为 PDB 档案的标准交换格式。[^wwpdb-mmcif]

晶体学记录还要区分**不对称单元**、由晶体对称产生的接触和作者或数据库提出的**生物学组装体**。不对称单元是描述晶体的最小独立部分，不必等于细胞中发挥功能的寡聚体；一个看似紧密的界面也可能只是晶格接触。冷冻电镜和预测模型虽没有同样的晶格问题，仍可能只覆盖某种化学计量、截短体或稳定状态。组装体的合理性应结合界面面积与化学、同源结构、溶液实验、交联、突变和细胞证据判断。[^pdb101-assemblies]

结构所代表的还是特定条件下的构象。温度、pH、离子、膜模拟体系、配体、核苷酸状态、共价修饰和结合伙伴都可能改变局部环区乃至结构域排布。同一蛋白的多个记录不是简单的重复品，而可组成一个带条件标签的构象集合。将其中一个模型直接称为“蛋白质的结构”，容易抹去这一重要的状态依赖性。

## 实验结构档案与派生数据库 { #experimental-archives }

Protein Data Bank（PDB）保存生物大分子及其复合物的三维坐标模型，并把模型连接到结构因子、化学位移、约束或电镜图等实验资料。全球 wwPDB 伙伴共同维护统一档案，RCSB PDB、PDBe 和 PDBj 提供不同的检索与展示入口。使用记录时，稳定的 PDB 标识符只是起点，还应记录结构测定方法、发布日期与修订状态、所选链和组装体，以及引用时采用的版本。

对于三维电子显微学，Electron Microscopy Data Bank（EMDB）保存重建后的三维体数据和断层数据；与之关联的原子模型进入 PDB，较大的原始二维图像、电影和断层序列可存入 EMPIAR。模型、处理后的密度图和原始图像处在不同的数据层，能够回答的问题也不同。只下载坐标而不查看相应密度，会失去检查局部模型—数据一致性的机会。[^emdb-about]

核磁共振结构的坐标集合则应与 BioMagResBank（BMRB）中的化学位移、耦合常数、弛豫和其他谱学资料联系起来。NMR 常以一组同时满足约束的构象表示结果；构象间分散既包含真实运动，也包含约束不足和建模选择，不能直接把每一点差异都解释为分子动力学。[^bmrb]

实验档案之上还有多类派生资源。DSSP 根据主链几何和氢键模式为已有坐标指定二级结构；FSSP 和 DALI 以三维距离模式寻找结构相似关系；SCOP／SCOPe 与 CATH 把结构域组织为层级分类。CATH 的 class、architecture、topology 和 homologous superfamily 依次强调二级结构组成、空间排列、拓扑连接和同源超家族；SCOPe 延续 SCOP 的人工审校传统，而 SCOP2 采用更能表达多重关系的网络式分类。[^cath-classification] 这些资源的分类单元、版本和边界定义并不完全相同，分析结果应保留所用数据库及发布版。

结构分类首先服务于比较和知识组织，并不把连续演化硬性切成唯一真值。相似折叠可能源于共同祖先，也可能在物理约束下趋同出现；同一超家族内部也会发生功能分化。结构分类可为远缘同源和功能假说提供强线索，最终仍要与序列、基因组背景、关键残基及实验相互印证。

## 结构质量与方法特异验证 { #structure-validation }

结构验证同时检查模型自身是否合理，以及模型是否受到实验数据支持。键长、键角、手性、肽键构象、Ramachandran 分布、侧链旋转异构体和原子碰撞属于几何层面的通用检查。理想几何不等于模型正确：经过强约束的错误模型也可能很“漂亮”。因此还要读取与测定方法相应的模型—数据指标。wwPDB 验证报告把这些指标按同类结构的分布给出，适合在选用结构和解释局部区域前作为统一入口。[^wwpdb-validation]

X 射线晶体学中，分辨率描述可辨细节的整体尺度，`Rwork` 和 `Rfree` 衡量模型计算的衍射与观测数据的一致程度，其中 `Rfree` 使用未参与精修的反射监测过拟合。电子密度图能进一步显示某个主链、侧链、配体或水分子是否得到局部支持。整体分辨率和 R 值良好，仍可能伴随柔性环、低占有率配体或替代构象的不确定。

单颗粒冷冻电镜通常报告由两份独立半图估计的 Fourier shell correlation，并给出全局和局部分辨率；模型还需检查图—模型拟合、几何和可能的过拟合。高分辨率核心不能代表外周区域，锐化后醒目的密度也不自动证明某个原子解释。对配体、离子和侧链方向的断言，应回到未被展示效果掩盖的局部图和验证指标。

NMR 结构应查看距离、二面角、残余偶极耦合等约束的数量、分布和违反情况，同时考察集合几何与无约束区。残基数较多却约束稀疏的片段，常比结构紧密的核心更不确定。对于任何方法，配体的化学组成、质子化状态、键级、金属配位和立体化学也需要独立检查；把不恰当的化学字典精修进密度，同样可以得到表面上连续的模型。

选择结构时不宜只按最高整体分辨率排序。更合适的记录应覆盖研究所需的异构体、结构域和状态，具有可信的局部数据，使用合理的生物学组装体，并且没有会改变问题本身的构建体改造。结构质量是面向具体问题的判断，而非一个总分替代所有检查。

## 结构比较与远缘关系 { #structure-comparison }

三维结构比对试图建立残基对应关系，并寻找使对应原子在空间上尽可能一致的叠合。若序列对应已经可靠，可以在固定对齐上做刚体最小二乘叠合；远缘蛋白则常需同时搜索残基对应和空间变换。DALI 比较残基间距离矩阵，TM-align 优化对蛋白长度较稳定的 TM-score，这些方法比单纯沿用序列比对更能识别远缘折叠关系。[^tm-align]

均方根偏差（RMSD）依赖选入的原子、比对长度、异常点和是否分域叠合。只对十几个高度保守的核心残基得到很低 RMSD，与在全长数百个残基上得到同一数值意义不同。报告结构相似性时，应同时给出覆盖范围、残基对应、结构域划分和所用评分；比较多结构域蛋白时，还要区分每个结构域内部是否相似与结构域相对取向是否相同。

柔性铰链、开闭运动和结构域交换会使单一刚体叠合产生较大偏差，但这些差异可能恰是功能信息。柔性结构比对或分别叠合结构域可以揭示运动单元，随后再联系配体状态、晶体环境和样品条件。观测到两种构象只表明档案中存在两个受支持状态，并不能仅凭坐标确定它们之间的真实转换路径或细胞内占比。

结构相似对远缘同源推断很有价值，因为三维折叠常比序列保守更久。然而小型二级结构组合、重复结构和物理上容易形成的折叠可独立出现。可信的共同祖先判断通常还需要拓扑细节、核心残基对应、序列 profile、结构域架构及物种分布；功能转移还要额外检查催化残基、口袋化学和生物学背景。

## 二级结构、溶剂暴露与无序预测 { #secondary-structure-prediction }

相对分子质量、理论等电点、氨基酸组成、疏水曲线和消光系数可由序列直接计算或按经验参数估计，是准备结构实验和识别异常区域的常用背景；它们的算法、参数和证据边界已在[序列特征、基因识别与功能位点](sequence_features.md)中说明。结构预测在此基础上进一步询问残基如何形成局部构象并通过长程接触组装为三维折叠。

二级结构预测是结构预测史中最适合观察方法演进的一条线。早期 Chou—Fasman 方法统计氨基酸在 α 螺旋、β 折叠和转角中的出现倾向，用局部窗口寻找可能成核和延伸的片段。谷氨酸、丙氨酸等残基在特定数据集中表现出螺旋倾向，脯氨酸常打断规则主链氢键，但这些是受环境影响的统计倾向，不是由单个残基下达的结构命令。经典方法保留了“序列中存在局部构象偏好”这一重要思想，也暴露了小样本统计和忽略长程相互作用的限制。[^chou-fasman]

随后出现的 DMP、DSC、PHDsec、SOPMA、MLRC、JPred 和 PredictProtein 等方法，采用立体化学与疏水模式、最邻近统计、信息论、神经网络、多个序列比对或多个预测器的共识。PSIPRED 把迭代数据库搜索得到的位置特异性打分矩阵输入两级神经网络，展示了进化 profile 如何显著改善三态二级结构预测；JPred 等服务器继续整合 profile 与不同算法。[^psipred] 这些名称记录了方法史，但旧服务器能否访问、底层数据库是否更新以及默认参数是否改变，都要在实际使用时重新核对。

预测标签还依赖定义。实验结构可由 DSSP 等规则细分为不同类型的螺旋、折叠、转角和无规状态，算法训练和评估时常把它们合并为 helix、strand、coil 三类。Q3 准确率统计逐残基分类是否正确，容易被长而常见的状态主导；segment overlap 等指标更关心片段边界和连续性。比较算法时必须使用相同的数据集去冗余规则、训练—测试分离、标签映射和评价指标。

溶剂可及性、跨膜拓扑、卷曲螺旋和内在无序也可以从序列预测，但它们代表不同问题。低复杂度、净电荷和疏水性有助于识别无序倾向；跨膜预测依赖膜环境中的疏水和拓扑信号；卷曲螺旋关注周期性残基模式。一个区域可在游离状态下无序、结合后折叠，也可因修饰或环境改变而重排。预测应给出逐残基分数、阈值、模型版本和覆盖，而不把“coil”“low confidence”和“biological disorder”混为同义词。

## 比较建模：模板、比对与局部误差 { #comparative-modeling }

比较建模又称同源建模，其出发点是同源蛋白往往保留共同折叠。完整流程包括界定目标序列和结构域、搜索候选模板、判断模板的实验质量与生物状态、建立目标—模板比对、生成骨架、重建插入缺失和侧链、优化模型并作独立验证。MODELLER 用空间约束满足把序列比对转化为三维模型，SWISS-MODEL 则把模板库、自动建模和质量估计组成可复用的服务器流程。[^modeller]

模型质量的主要决定因素不只是一项序列一致性。模板与目标是否覆盖同一结构域，目标序列是否对应正确异构体，插入缺失是否落在活性环或界面，模板是否处于所需配体和寡聚状态，都可能比全局百分比更重要。较高一致性通常使保守核心可靠，却不能自动修复错误的结构域边界、序列错位或模板中的局部建模错误；多个低一致性模板也可能借互补覆盖改善模型。

序列比对是比较建模中最容易被坐标外观遮蔽的误差来源。若一个空位位置错移，后续主链仍可能形成平滑而看似合理的结构，却把催化残基或结合残基放到错误空间。低一致性区域应结合 profile—profile 比对、二级结构预测、保守基序和结构环境反复审查。模型生成后还需检查几何、异常接触、疏水核心、暴露残基、模板依赖程度和逐残基质量估计。

环区、长插入、柔性末端和无模板结构域通常比保守核心更难。侧链构象即使在主链准确时也可能不确定，尤其是口袋中的极性网络、离子和水分子。比较模型适合提出突变位点、结构域边界或可能口袋，却不应凭一个未验证的局部构象精确解释立体选择性和结合能。

## fold recognition 与 threading { #fold-recognition-threading }

当目标与模板的序列关系远到普通相似性搜索难以识别时，fold recognition 仍可询问目标是否适合已知折叠库中的某种骨架。profile—profile 或 HMM—HMM 比较把一个家族每个位点的替换和插缺模式与另一个家族相比较；threading 则把目标序列“穿”到候选骨架上，以环境偏好、接触势、二级结构相容性和空位代价评价匹配。Phyre2 等服务器将远缘同源识别、模板建模和无模板片段处理组合起来。[^phyre2]

这一层的关键不是把所有低相似匹配都称为同源。某个目标可能与模板共享整体拓扑，却缺少支持共同祖先的序列证据；也可能只有一个结构域匹配，而其余部分采用不同架构。结果应同时报告命中覆盖、置信度、候选模板间的一致性、profile 对齐和结构域边界，并将“可能采用此折叠”“可能同源”“可能具有相同功能”视为逐级增强、需要不同证据的命题。

threading 也说明模板库的边界：它善于在已有折叠空间中寻找解释，不能保证发现真正新颖的拓扑。若数据库搜索、profile 方法和多个 fold-recognition 程序都没有可靠模板，才进入更依赖能量函数、片段组合或学习到的结构先验的无模板建模，同时保留“未检出模板”不等于“自然界中不存在相似结构”的谨慎。

## 从头预测、能量函数与构象采样 { #de-novo-energy-sampling }

Anfinsen 的核糖核酸酶复性实验表明，在相应条件下，蛋白质一级序列包含形成天然构象所需的信息，由此奠定了从序列预测结构的物理基础。[^anfinsen] 这条原则并不意味着所有蛋白都能在任意环境中独立达到唯一构象：膜、配体、金属、共价修饰、分子伴侣、装配伙伴和动力学陷阱会改变实际能量景观，天然状态也可能是多个构象的集合。

传统“ab initio”或 de novo 建模不是分子动力学的同义词。它需要用某种能量函数或统计势区分较合理的构象，并用搜索策略在庞大的构象空间中取样。早期 LINUS 以局部构象和简化物理作用探索折叠倾向；Rosetta 的经典路线从短片段库组合主链，通过 Monte Carlo 搜索和统计能量筛选低能构象，再作全原子优化。CASP III 中的 Rosetta 结果展示了这种片段组装在小型、无明显同源模板蛋白上的能力。[^rosetta-ab-initio]

能量函数可以显式描述键合项、范德华力、静电、溶剂和氢键，也可从已知结构统计常见接触和构象。近似使大规模搜索成为可能，同时引入偏差；搜索不足则会错过真正的低能区域。得到一个能量较低的模型，只说明它在特定函数和采样空间下表现较好，不能证明它是热力学全局最低点，更不能复原真实折叠途径。

从头建模常输出一组候选构象。模型是否形成稳定簇、不同独立运行是否收敛、局部几何和疏水核心是否合理、与二级结构或低分辨率实验约束是否一致，通常比只查看排名第一的结构更有信息。对于较长、多结构域、跨膜或复合体系统，分域建模、组装约束和实验数据往往不可缺少。

## 盲测、基准集与无信息泄漏评估 { #benchmarking }

结构预测方法若只在已经公开、甚至参与训练的结构上演示，很难判断能否泛化。Critical Assessment of protein Structure Prediction（CASP）在待公开的实验结构上组织盲测：预测者只看到目标信息，独立评估者在结构释放后比较模型。历史上的 CAFASP 强调全自动服务器，LiveBench 和 EVA 进行连续或自动评估；今天的 CAMEO 延续对新释放结构的持续盲测。它们共同建立了一条重要规范——评估对象在预测时必须真正未知。[^casp-cameo]

不同指标观察结构的不同层次。GDT_TS 计算若干距离阈值下可叠合残基的比例，TM-score 对蛋白长度作归一化，lDDT 通过局部距离差评价无需全局叠合的准确度。整体折叠正确的模型仍可能在活性环、界面或配体口袋失准；多结构域模型也可能各域准确而相对排布错误。因此基准结果应按结构域和任务拆解，并报告覆盖、局部质量及失败类型。

现代模型还面临训练集近邻、模板日期和序列数据库时间造成的信息泄漏。严格评估应按结构发布日期和同源关系隔离训练与测试，记录使用的序列库、模板截止日期和模型权重版本。若为一个具体生物学问题选择工具，除了排行榜平均分，还要查看与目标长度、寡聚状态、无序比例、膜环境和配体类型相似的子集表现。

## AlphaFold 类深度学习模型 { #alphafold-models }

AlphaFold2 把多序列比对和可选模板转化为按残基组织的序列表示与按残基对组织的关系表示，通过反复交换信息建立远距离几何约束，再端到端地产生三维坐标。它在 CASP14 的盲测中显著提高了许多单链结构域的准确度，使大规模蛋白结构假说从“逐个建模”转向“可系统检索”。[^alphafold2] RoseTTAFold 等同时期模型也通过一维序列、二维残基关系和三维坐标之间的信息传递推进了这一方向。

这类网络学习了序列家族、共进化和已知结构中的规律，但输出不是分子动力学轨迹，也不是蛋白从伸展链折叠到天然态的录像。模型可能利用同源家族与模板信息，也可能在浅多序列比对下依靠学习到的结构先验。预测成功说明网络能给出与目标结构相容的坐标，不直接揭示细胞中的折叠机制、速率或伴侣依赖性。

AlphaFold Database 为参考蛋白质组提供预计算模型，并保留模型版本、覆盖和置信度。数据库条目与实验 PDB 记录的证据性质不同：前者便于规模化提出结构域、位点和远缘关系假说，后者能够连接真实样品、条件和实验数据。研究者应保存所用序列的数据库版本和异构体，避免把同一基因的不同蛋白产物混用。[^alphafold-db]

AlphaFold3 将建模对象扩展到蛋白质、核酸、小分子、离子及修饰残基组成的复合物，并以扩散式结构生成模块处理原子坐标。[^alphafold3] 对象范围扩大并未取消输入假设和验证要求：化学计量、序列组成、配体形式、共价连接和候选伙伴如果输入错误，模型可以为错误问题生成几何上很有说服力的答案。

### pLDDT、PAE、pTM 与 ipTM { #alphafold-confidence }

`pLDDT` 是模型对每个残基局部原子环境准确度的预测，不是实验分辨率，也不是某个区域在细胞中“存在的概率”。高 pLDDT 通常支持局部折叠，低 pLDDT 可能来自内在无序、柔性连接、缺乏进化信息、错误边界或模型未能解决的区域。把所有低值片段一律删除，会同时丢失真实无序和重要的条件性结构。

Predicted Aligned Error（PAE）估计在以残基 *j* 所在结构为对齐参照时，残基 *i* 的位置误差。PAE 图中沿对角线的低误差方块常对应内部可信的结构域；结构域之间 PAE 较高，则表示相对取向不确定。于是一个模型可以在每个结构域内都有高 pLDDT，却不能可靠支持两域之间的距离。读取结构域运动、界面或远距离位点时，PAE 往往比着色后的单一坐标更关键。

`pTM` 估计整体拓扑的可信程度，复合物模型中的 `ipTM` 更着重亚基界面和相对排布。大型高置信单体可能主导总体分数，因此复合物还需查看跨链 PAE、界面残基的 pLDDT、不同随机种子或输入组合是否收敛，以及候选伙伴与化学计量的生物学证据。置信度是模型对自身预期误差的校准结果，不是实验验证的替代品。[^alphafold-confidence]

### 覆盖、构象和化学环境 { #alphafold-boundaries }

预测前要确认输入是否覆盖信号肽、跨膜区、成熟肽、低复杂度连接区和研究位点。数据库模型常按参考全长序列计算，但实验对象可能经过加工或剪接。超长序列被分段预测时，片段间的相对排布不再由同一个模型保证；多结构域蛋白的高 PAE 也提示不应把展开显示的任意取向当作固定构象。

一个静态模型难以表达配体诱导、膜电位、pH、磷酸化、别构调控和机械力塑造的构象集合。AlphaFold2 对小分子、共价修饰、核酸和许多复合物没有直接建模；后续多聚体模型和 AlphaFold3 扩大了范围，但仍可能选择错误状态、产生不合理局部化学或遗漏水、离子和竞争伙伴。官方训练材料也把构象多样性、点突变、配体和修饰列为解释时必须检查的边界。[^alphafold-limitations]

多序列比对深度和组成也会影响结果。丰富的同源序列可提供残基共变线索，但旁系同源混入、结构域融合、物种配对错误和强烈的家族偏倚会误导复合物接触。孤儿蛋白或快速演化蛋白缺少这类信息，模型置信度和候选构象间一致性应被更谨慎地解释。

## 复合物与整合结构建模 { #complex-integrative-modeling }

复合物预测首先是一个生物学对象定义问题。哪些链在同一细胞区室、何时表达、以何种化学计量结合、是否需要核酸、膜、配体或修饰，决定了值得建模的组合。把任意两条蛋白序列输入多聚体模型后得到界面，不足以证明二者相互作用；大规模筛选尤其要用亚细胞定位、共表达、遗传、亲和纯化或邻近标记证据限制候选空间。

计算界面可由跨链 PAE、界面接触、埋藏表面积、静电与疏水互补、保守性以及独立运行的一致性评价。高分模型仍可能把彼此竞争的伙伴同时装入、混淆瞬时碰撞和稳定复合物，或在重复蛋白和卷曲螺旋中选择错误配准。突变破坏结合可以支持某个界面，却还需排除突变使蛋白整体失折叠、表达下降或定位改变。

整合结构建模把多种分辨率不一的证据写成空间约束。冷冻电镜或断层图提供形状和密度，交联质谱提供带误差的距离上限，NMR、EPR、FRET、SAXS、HDX 和突变数据分别约束局部接触、距离、整体包络、交换保护或功能位点。建模过程在满足约束的候选中搜索，输出常是一组符合数据的模型，而非唯一坐标。

约束数量多不代表信息独立。交联可能共享肽段歧义，低分辨率密度可容纳多种排布，先由预测模型解释实验再用同一实验“验证”会形成循环。可靠报告需要给出每项证据的来源、误差模型、未满足约束、抽样收敛性和模型精度，并保留不能由现有数据区分的替代构象。

## 分子对接与结合位点 { #docking-binding-sites }

分子对接包含两个核心问题：在受体周围搜索配体或伙伴的可能姿态，以及用评分函数对候选姿态排序。小分子对接通常先确定受体口袋和网格，枚举配体平移、旋转与可旋转键，再用近似的范德华、静电、氢键、疏水和溶剂项评分。AutoDock Vina 以高效随机优化和经验评分成为常用工具；HADDOCK 则可把已知界面残基、交联或其他实验信息作为含歧义的约束，进行数据驱动的生物大分子对接。[^autodock-vina] [^haddock]

输入准备决定了许多结果。蛋白和配体的质子化、互变异构、键级、手性、金属配位和共价状态必须与实验条件相符；缺失侧链、错误组装体或低置信口袋会使后续评分失去意义。水分子有时应移除，有时却构成不可替代的桥接网络。受体刚性近似适合有限形变，明显诱导契合则需要多构象对接、柔性采样或实验约束。

对接分数主要用于特定设置下的候选排序，不是标准结合自由能，也不能直接换算为 `Kd` 或 `IC50`。相近姿态的分数差可能小于评分函数误差；大型疏水分子还可能因接触面积得到虚高分。已知配体重对接、交叉对接、活性与诱饵集合、盲法保留化合物和独立实验是检验流程的不同层次。

结合位点预测还可利用凹槽几何、表面电势、残基保守性、同源配体和共现结构域。几何口袋可能只是结构空腔，保守表面也可能承担装配而非小分子结合。结构预测能缩小实验搜索空间；配体身份、亲和力和功能效应仍需生物物理或生化测量确认。

## 分子动力学与构象集合 { #molecular-dynamics }

分子动力学（MD）从给定坐标和速度出发，在力场描述的势能面上数值积分运动方程，产生随时间变化的构象轨迹。它与从头结构预测有交集，却回答不同问题：结构预测寻找与序列相容的模型，MD 研究特定体系、力场和时间尺度下模型如何波动和转换。经典 MD 已成为连接结构与分子运动的重要计算实验。[^md-review]

一个可解释的模拟必须说明初始结构、缺失区处理、质子化与配体参数、膜和溶剂模型、离子条件、边界、力场、时间步长、能量最小化、平衡过程、生产时长和独立重复。预测模型可作为起点，但低置信环区、错误界面或未建模辅因子不会因“跑了一段 MD”自动变真；短暂松弛也不能替代对初始模型的验证。

RMSD 描述相对参考结构的整体偏离，RMSF 描述原子或残基的波动，主成分、接触占有率、距离分布和自由能面则从不同角度概括轨迹。分析前应选择合适的叠合原子和周期性边界处理，并检查多个独立重复是否给出相容分布。轨迹在数百纳秒内“稳定”只表示某些指标进入平台，不证明天然状态、结合稳定性或生物活性。

稀有事件常超出常规模拟可达的时间尺度。增强采样、粗粒化和自由能计算可以针对特定过程提高效率，但引入额外集体变量、路径和收敛假设。报告结果时应给出不确定度、正反过程或重复的收敛证据，并用 NMR、FRET、HDX、动力学测量或突变结果检验关键构象，而不是从一条动画式轨迹推导确定机制。

## 结构辅助功能与变异解释 { #function-variant-interpretation }

结构可把分散在线性序列上的残基组织成口袋、通道、界面和别构网络。功能分析通常综合表面形状与电势、残基保守性、已知配体、催化几何、结构相似蛋白和结构域组合。若干保守残基在空间中形成与已知酶相似的化学环境，便可提出底物或反应类型假说；但整体折叠相似、单个基序命中或口袋几何相似都不足以单独赋予精确功能。GO、通路、基因邻域和功能富集的系统方法在[功能注释、富集与功能预测](functional_annotation.md)中继续展开。

变异映射可以识别埋藏疏水核心、盐桥、金属配位、催化残基、蛋白界面和无序调控区。由此可形成不同的机制假说：变异可能降低稳定性、改变局部构象、破坏伙伴结合、改变底物选择，或影响翻译后修饰。稳定性变化预测和结构打分对同一变异可能给出不同结果，应保留方法、方向、数值不确定性以及所用野生型结构状态。

结构解释不能独立判定致病性。计算工具往往共享序列保守性、结构环境和训练数据，其一致意见不等于多份独立证据；高置信结构模型也不提供人群频率、遗传分离、组织表达和表型特异性。变异结论要与群体数据库、家系、功能实验和临床证据框架结合，明确区分“位于重要结构位置”“预测影响分子性质”和“已经证明导致表型”。[^alphafold-applications]

设计突变时还应区分功能位点与结构完整性。删除一个界面残基的电荷可能直接削弱结合，也可能通过失折叠间接降低信号。表达量、溶解性、定位、热稳定性和总体结构对照能帮助分离这些解释；对催化机制的主张则需要动力学、结合或结构捕获等更直接的实验。

## 可复现的结构分析与报告 { #reporting }

结构分析的最小可追溯单位不是一张着色图片，而是“分子对象—数据或模型—处理步骤—结论”的完整链。实验结构应报告 PDB／EMDB／BMRB 标识符、修订日期、方法、链、构建体、配体、组装体和残基编号体系；预测结构应报告确切输入序列、异构体、模型或服务器版本、数据库与模板截止日期、多序列比对和模板设置、随机种子、模型排名及逐残基和跨区域置信度。

比较建模还需保存目标—模板比对和模板选择理由；结构比对需保存算法、选择的原子、覆盖与评分；对接需记录受体和配体准备、质子化、网格、约束、搜索与评分参数；MD 需保存拓扑、力场、运行参数、平衡和分析脚本。坐标、配置、日志和图形脚本应通过稳定目录或工作流连接，避免只留下无法复现视角与选择集的截图。

最终表述应与证据层级相配。实验密度或约束支持的是“在这些样品和条件下，数据与该模型相容”；高置信预测支持的是“该序列很可能采用这一局部折叠”；对接和动力学支持的是“在给定模型与近似下，这一姿态或路径值得检验”。当结构、序列、进化、生化和细胞证据在独立来源中汇合，三维模型才由漂亮坐标转化为可检验、可修正的机制解释。

## 参考资料与延伸阅读 { #references }

[^wwpdb-mmcif]: wwPDB, [PDBx/mmCIF General FAQ](https://mmcif.wwpdb.org/docs/faqs/pdbx-mmcif-faq-general.html)；PDBx/mmCIF 数据类别和关系见 [User Guide](https://mmcif.wwpdb.org/docs/user-guide/guide.html)。

[^pdb101-assemblies]: RCSB PDB-101, [Missing Coordinates and Biological Assemblies](https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/missing-coordinates-and-biological-assemblies)。

[^emdb-about]: Electron Microscopy Data Bank, [About EMDB](https://www.ebi.ac.uk/emdb/about)；验证资料见 [EMDB Documentation](https://www.ebi.ac.uk/emdb/documentation)。

[^bmrb]: Biological Magnetic Resonance Bank, [BMRB](https://bmrb.io/)。

[^cath-classification]: CATH, [CATH Protein Structure Classification Database](https://www.cathdb.info/)；SCOPe, [SCOPe Help](https://scop.berkeley.edu/help/)。

[^wwpdb-validation]: wwPDB, [Validation Reports](https://www.wwpdb.org/validation/)；报告分别覆盖 X 射线、NMR 与三维电子显微学的模型和实验数据验证。

[^tm-align]: Zhang Y, Skolnick J. [TM-align: a protein structure alignment algorithm based on the TM-score](https://doi.org/10.1093/nar/gki524). *Nucleic Acids Research*, 2005, 33(7): 2302–2309.

[^chou-fasman]: Chou PY, Fasman GD. [Prediction of protein conformation](https://doi.org/10.1021/bi00699a002). *Biochemistry*, 1974, 13(2): 222–245；Kabsch W, Sander C. [How good are predictions of protein secondary structure?](https://pubmed.ncbi.nlm.nih.gov/6852232/). *FEBS Letters*, 1983, 155(2): 179–182.

[^psipred]: Jones DT. [Protein secondary structure prediction based on position-specific scoring matrices](https://doi.org/10.1006/jmbi.1999.3091). *Journal of Molecular Biology*, 1999, 292(2): 195–202；Drozdetskiy A, et al. [JPred4: a protein secondary structure prediction server](https://doi.org/10.1093/nar/gkv332). *Nucleic Acids Research*, 2015, 43(W1): W389–W394.

[^modeller]: Šali A, Blundell TL. [Comparative protein modelling by satisfaction of spatial restraints](https://doi.org/10.1006/jmbi.1993.1626). *Journal of Molecular Biology*, 1993, 234(3): 779–815；Bordoli L, et al. [Protein structure homology modeling using SWISS-MODEL workspace](https://doi.org/10.1038/nprot.2008.197). *Nature Protocols*, 2009, 4: 1–13.

[^phyre2]: Kelley LA, et al. [The Phyre2 web portal for protein modeling, prediction and analysis](https://doi.org/10.1038/nprot.2015.053). *Nature Protocols*, 2015, 10: 845–858.

[^anfinsen]: Anfinsen CB. [Principles that govern the folding of protein chains](https://doi.org/10.1126/science.181.4096.223). *Science*, 1973, 181(4096): 223–230.

[^rosetta-ab-initio]: Simons KT, et al. [Ab initio protein structure prediction of CASP III targets using ROSETTA](https://pubmed.ncbi.nlm.nih.gov/10526365/). *Proteins*, 1999, Suppl 3: 171–176.

[^casp-cameo]: [CASP Prediction Center](https://predictioncenter.org/)；CAMEO, [Continuous Automated Model EvaluatiOn](https://cameo3d.org/)。

[^alphafold2]: Jumper J, et al. [Highly accurate protein structure prediction with AlphaFold](https://doi.org/10.1038/s41586-021-03819-2). *Nature*, 2021, 596: 583–589.

[^alphafold-db]: Varadi M, et al. [AlphaFold Protein Structure Database: massively expanding the structural coverage of protein-sequence space with high-accuracy models](https://doi.org/10.1093/nar/gkab1061). *Nucleic Acids Research*, 2022, 50(D1): D439–D444；数据库使用边界见 [AlphaFold DB FAQ](https://alphafold.ebi.ac.uk/faq)。

[^alphafold3]: Abramson J, et al. [Accurate structure prediction of biomolecular interactions with AlphaFold 3](https://doi.org/10.1038/s41586-024-07487-w). *Nature*, 2024, 630: 493–500.

[^alphafold-confidence]: EMBL—EBI Training, [AlphaFold inputs and outputs recap](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/alphafold-inputs-and-outputs-recap/) 与 [Confidence scores in AlphaFold-Multimer](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/evaluating-alphafolds-predicted-structures-using-confidence-scores/confidence-scores-in-alphafold-multimer/)。

[^alphafold-limitations]: EMBL—EBI Training, [Strengths and limitations of AlphaFold](https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/strengths-and-limitations-of-alphafold/) 与 [What AlphaFold 3 struggles with](https://www.ebi.ac.uk/training/online/courses/alphafold-3/what-alphafold-3-struggles-with/)。

[^autodock-vina]: Trott O, Olson AJ. [AutoDock Vina: improving the speed and accuracy of docking](https://doi.org/10.1002/jcc.21334). *Journal of Computational Chemistry*, 2010, 31(2): 455–461.

[^haddock]: de Vries SJ, van Dijk M, Bonvin AMJJ. [The HADDOCK web server for data-driven biomolecular docking](https://doi.org/10.1038/nprot.2010.32). *Nature Protocols*, 2010, 5: 883–897；Honorato RV, et al. [HADDOCK2.4: a web server for integrative modeling of biomolecular complexes](https://doi.org/10.1038/s41596-024-01011-0). *Nature Protocols*, 2024.

[^md-review]: Karplus M, McCammon JA. [Molecular dynamics simulations of biomolecules](https://doi.org/10.1038/nsb0902-646). *Nature Structural Biology*, 2002, 9: 646–652.

[^alphafold-applications]: Akdel M, et al. [A structural biology community assessment of AlphaFold2 applications](https://doi.org/10.1038/s41594-022-00849-w). *Nature Structural & Molecular Biology*, 2022, 29: 1056–1067.
