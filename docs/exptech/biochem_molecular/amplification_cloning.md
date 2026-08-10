# 扩增、克隆与基因编辑

扩增、克隆和基因组编辑都能改变实验者手中某段核酸的数量或结构，却位于不同的证据层级。PCR 在体外选择性复制模板区段；分子克隆把核酸片段装入可维持、筛选或表达的载体；基因组编辑则让核酸酶或编辑酶作用于细胞内染色体，最终产物还要经过 DNA 修复、细胞选择和遗传传递。三者经常首尾相接，但 PCR 条带、阳性菌落和编辑细胞克隆分别只是各自流程中的候选结果，不能互相替代身份与功能验证。

本页保留限制酶—连接、菌落筛选、基因组与 cDNA 文库、派生 PCR、ZFN、TALEN、GAL4/UAS 和 FLP/FRT 等经典路径，同时补入等温组装、Golden Gate、数字 PCR、CRISPR、碱基编辑和先导编辑。核酸样品制备与凝胶基础见[核酸提取、质量与电泳](nucleic_acid.md)，文库杂交筛选见[核酸杂交、探针与分子互作检测](molecular_probes.md#library-screening)，测序数据和 qPCR 数据处理分别见[测序技术与读段证据](../../bioinfo/sequencing.md#assay-specific-read-evidence)和[qPCR 相对与绝对定量](../../bioinfo/transcriptomics.md#qpcr-quantification)。

## 从实验问题到操作链 { #workflow-selection }

方法选择要从预期产物和所需证据倒推。扩增一个检测片段、获得可长期保存的重组质粒、构建能代表样品复杂度的文库以及改变内源基因，所需的对照和失败模式并不相同。

| 实验目的 | 主要操作链 | 首个可见结果 | 必须继续确认的内容 |
| --- | --- | --- | --- |
| 检出某段 DNA 或 RNA | 提取—PCR／RT-PCR—终点或实时读出 | 预期大小条带或扩增曲线 | 阴阳性对照、产物特异性、检出限；必要时测序 |
| 定量起始核酸 | RT-qPCR、qPCR 或 dPCR | Cq、标准曲线或阳性分区数 | 逆转录与扩增效率、参考基因、阈值、抑制和分区模型 |
| 保存、测序或表达一个片段 | 获得插入片段—组装载体—转入宿主—选择筛选 | 抗性菌落、颜色或报告信号 | 插入方向、连接点、全长序列、载体骨架和表达产物 |
| 建立基因组、cDNA 或测序文库 | 取样—片段化／逆转录—接头或载体连接—扩增与质控 | 文库浓度、片段谱或克隆数 | 代表性、复杂度、插入率、重复、覆盖和批次偏倚 |
| 改变染色体位点 | 设计编辑器—递送—修复／选择—单克隆或后代分离 | 靶位点扩增或筛选阳性 | 双等位基因、大片段变化、脱靶、嵌合、表型与救援 |
| 控制组织、时间或细胞谱系 | 二元表达或位点特异重组—遗传杂交／诱导 | 报告基因或镶嵌表型 | 驱动范围、背景表达、重组效率、遗传背景和独立品系 |

## PCR 反应的化学与循环 { #pcr-chemistry-cycling }

PCR 反应包含模板、成对引物、耐热 DNA 聚合酶、四种 dNTP、含盐和缓冲组分的反应液以及常需精确控制的 Mg$^{2+}$。变性使双链模板分开，退火让引物 3′ 端与模板配对，延伸则由聚合酶从引物末端合成新链；三步循环使两个引物限定的区段获得近似指数扩增。耐热聚合酶使反应能够反复经历高温而不必逐轮补酶，是经典 PCR 走向自动化的关键。[^pcr-taq]

Mg$^{2+}$ 同时参与聚合酶催化、dNTP 配位和核酸结构稳定。浓度不足会降低产量，过高可能提高非特异延伸；模板中的 EDTA、盐、血红素、多糖、酚或乙醇残留也会改变有效离子条件或抑制酶。DMSO、甜菜碱和甘油可在某些高 GC 或结构复杂模板中改善反应，却会改变酶活性、退火和熔解行为，需在目标体系中以梯度验证。

聚合酶的选择取决于产物用途。Taq 类酶延伸快、历史资料丰富，缺少 3′→5′ 校对活性，常在产物 3′ 端添加一个突出 A，适合常规检测和 TA 克隆；具有校对活性的聚合酶或混合酶通常具有较高保真度，常产生平端，更适合长片段、表达构建和定点突变。实际保真度、过程性、可扩增长度、GC 容忍度和末端性质应按具体酶及缓冲体系确认，不能由“Taq”“Pfu”这类家族名称推定全部性能。

教学材料中的一个 25 µL 反应由 1 µL 模板、2.5 µL 10× 缓冲液、1 µL Taq DNA 聚合酶、正反引物各 1 µL、2 µL dNTP 和 16.5 µL 水组成。这一配方保留了“先配共同组分、酶最后加入”的经典训练，但缺少模板浓度、引物和 dNTP 储液浓度、酶活单位以及 Mg$^{2+}$ 信息，不能直接当作跨试剂盒的通用处方。更稳妥的做法是依据酶说明书确定终浓度，为同一批样品配制反应预混液，按反应数加入移液余量，混匀并短暂离心后再分装模板。

循环程序也没有跨模板通用的固定数值。初始变性取决于酶的热启动方式和模板复杂度；退火温度由两条引物在实际盐条件下的熔解行为决定；延伸温度和时间依赖聚合酶与扩增子长度。循环数过少可能低于检出限，过多则进入平台期，增加非特异产物、聚合酶错误和组分耗竭。旧式“95 ℃—固定退火温度—72 ℃、30–40 个循环”可作为理解三阶段循环的范式，实验程序仍应由产物、酶和验证结果共同确定。

## 引物与扩增子设计 { #primer-amplicon-design }

引物设计从写明参考序列版本和目标异构体开始。两条引物的熔解温度应相近，3′ 端要与目标稳定、特异地配对，并避开显著的自身互补、引物间互补、低复杂度、常见变异和不希望扩增的旁系同源序列。长度、GC 比例和退火温度是相互关联的设计变量，不存在适用于所有模板的“18–25 nt、40%–60% GC、3′ 端必须是 G/C、统一 62 ℃”规则。Primer3 等工具可以按热力学和产物约束生成候选，引物仍须对目标物种的参考序列和实际样品背景进行特异性检查。[^primer3]

用途会改变扩增子几何。常规终点 PCR 需要条带在所用凝胶中可分辨；qPCR 通常选择较短且扩增效率稳定的区段；RT-PCR 可让引物跨越外显子连接点，或把两条引物分置于不同外显子，以降低基因组 DNA 造成的假阳性，但基因结构、假基因和可变剪接会影响这一策略。克隆引物的 5′ 端可加限制位点、保护碱基、同源臂、标签或突变碱基；这些尾序列首轮并不与模板完全配对，计算退火条件时要区分模板配对区与附加区，并在最终构建中逐碱基核对阅读框和连接点。

每一批扩增至少安排无模板对照和已知阳性对照。样品经提取时，提取空白可追踪提取过程污染；RNA 实验设置 no-RT 对照可发现基因组 DNA；容易受抑制的基质可加入独立的内扩增对照。阴性对照出现产物时，样品阴阳性已经不可解释；阳性对照失败时，样品无带只能称为该批反应无效。有关对照、批次和记录的共同原则见[实验设计、记录与数据质量](../foundations/design_data.md#controls-quality-samples)。

## 扩增控制、优化与产物确认 { #pcr-control-validation }

前 PCR 区、模板加入区和扩增后产物区应尽量单向分离，移液器、耗材和防护用品分区使用。扩增后的管含有极高拷贝数产物，是下一批假阳性的主要来源；滤芯吸头、封闭反应板、频繁更换手套和定期环境监测比事后反复调退火温度更能控制携带污染。适用时可采用 dUTP—UNG 体系降解既往含 dU 的扩增产物，但它不清除天然 DNA、同批新污染或不含 dU 的旧产物。

优化宜从可解释的小矩阵开始，分别改变退火温度、Mg$^{2+}$、引物浓度、模板输入或添加剂，避免一次同时改变多个因素。无带时先检查模板完整性和抑制、引物序列与方向、循环仪温度、酶和阳性对照；多带时检查引物特异性、退火窗口、模板量和热启动；拖尾可来自过量模板、盐、降解、循环过多或复杂产物。把唯一可见条带切胶回收并不能自动证明特异性，因为同长度非目标产物仍可共迁移。

产物大小只验证了一个物理维度。用于分型、克隆、突变或编辑判定的关键扩增子应通过限制图谱、探针、熔解曲线或测序获得第二种证据；表达构建通常需要覆盖完整插入片段和两端连接点。PCR 本身会引入碱基替换、嵌合体和等位基因偏倚，低频突变尤其要用独立扩增、分子标签或适当的误差模型排除聚合酶与测序噪声。

## RT-PCR、qPCR 与数字 PCR { #rt-qpcr-dpcr }

逆转录先把 RNA 转成 cDNA。oligo(dT) 以 poly(A) 尾起始，偏向成熟多腺苷酸化 RNA，并可能在降解样品中形成 3′ 偏倚；随机引物覆盖较广，也会复制 rRNA 和其他非目标 RNA；基因特异引物选择性高，却限制同一 cDNA 的后续用途。一步法把逆转录和 PCR 放在同一管内，减少转移和污染接口；两步法先制备 cDNA，再分配给多个靶标，便于共享样品但增加冻融、移液和批次来源。旧材料中的固定 10 µL 配方和“15 min 逆转录、5 s 终止”只对应特定酶体系，不能推广到所有逆转录酶。

实时定量 PCR 在每一循环读取荧光。DNA 结合染料能报告所有双链产物，需要熔解曲线和电泳等证据排除引物二聚体与非特异产物；水解探针以靶序列上第二个杂交事件提高辨别力，也仍受探针错配、降解和扩增效率影响。Cq 是荧光跨过所设阈值时的循环位置，不是样品中“基因表达量”的直接单位。相对定量要求目标和参考测定具有经验证的效率，并使用在样品条件下稳定的参考基因；GAPDH、ACTB 等常用基因不能未经验证便视为恒定。MIQE 指南把样品处理、引物序列、效率、对照、阈值和原始数据报告纳入同一质量链。[^miqe]

绝对 qPCR 依赖可溯源标准品、标准浓度赋值和覆盖样品范围的标准曲线。若每循环效率为 $E$，理想扩增可写作 $N_n=N_0(1+E)^n$；真实反应中的效率会随抑制、产物积累和试剂耗竭改变。数字 PCR 把样品分成大量微小反应，以阳性分区比例和泊松模型反推靶分子浓度，减少对外部校准曲线的依赖。分区体积、阈值、分子聚集、限制性消化、雨滴区和逆转录效率仍会带来不确定度，因此 dPCR 也需要完整的样品、分区和分析记录。[^dmiqe]

## 派生 PCR 的实验几何 { #pcr-variants }

多种经典 PCR 变体并非过时名称，而是为模板未知区域、低丰度靶标、空间位置或多个目标重新安排了引物与循环关系。

| 方法 | 设计逻辑 | 主要用途与边界 |
| --- | --- | --- |
| nested PCR | 第一对外引物产物再由第二对内引物扩增 | 提高低丰度靶标的选择性；开管转移会显著增加携带污染，仍可扩增错误模板 |
| touchdown PCR | 退火温度从较严格条件逐步下降 | 让早期较特异产物获得竞争优势；温度范围需由引物和模板验证 |
| inverse PCR | 先切割并环化已知序列邻近 DNA，引物朝已知区外侧延伸 | 获取插入位点或未知侧翼；受限制位点、环化和片段长度约束 |
| RACE | 以转录本内部引物配合 5′ 或 3′ 端接头／尾序列 | 确定转录本末端；模板切换、内部引发和 RNA 降解可产生假末端 |
| colony PCR | 以少量菌落作模板检查插入片段或连接点 | 快速初筛；菌落阳性不代表质粒全长序列、方向和纯度正确 |
| degenerate PCR | 在引物位置混合多个碱基，覆盖保守蛋白区可能的密码子 | 从未知物种或基因家族找同源序列；简并度会稀释有效引物并增加旁系同源产物 |
| asymmetric PCR | 一条引物过量，使后期偏向产生单链 | 制备探针或单链模板；产量与单链纯度需实测 |
| TAIL-PCR | 嵌套特异引物与较低严格性的简并引物交替扩增 | 获取已知插入或基因区段的侧翼；非特异产物须测序定位 |
| multiplex PCR | 同管放入多对引物 | 同时检测多个靶标；引物相互作用、竞争和不同效率使单重性能不能直接外推 |
| overlap-extension PCR | 让两个片段带互补重叠区，再以外引物拼接 | 定点突变、缺失或片段融合；重叠区、阅读框和全长产物均需测序 |
| in situ PCR | 在固定、透化的细胞或组织内扩增 | 保留空间坐标；扩散、可达性、原位背景和组织损伤限制定量解释 |

## 载体结构与经典载体谱系 { #vector-architecture }

克隆载体至少需要在宿主中维持的复制或整合机制、选择标记以及接纳插入片段的区域。表达载体还需与宿主相容的启动子、转录终止信号、翻译起始环境、阅读框和常见的纯化／检测标签；穿梭载体为两种宿主分别提供维持与选择元件。质粒并非在所有状态下都保持共价闭合超螺旋，也不必与宿主形成“共生”关系；它是可在适合宿主内复制或维持的遗传元件，其拷贝数和稳定性由复制子、宿主和培养选择共同决定。

| 载体谱系 | 经典结构与用途 | 选择时需注意 |
| --- | --- | --- |
| 质粒 | 细菌复制起点、选择标记、多克隆位点；用于常规克隆和表达 | 插入大小、拷贝数、重复序列稳定性、宿主毒性和末端结构 |
| λ 噬菌体及 cosmid | 包装信号与噬菌体感染／质粒复制元件；用于经典基因组文库 | 可包装长度窗口、宿主菌株、重排和噬菌斑筛选方式 |
| BAC／PAC | 低拷贝细菌复制子，维持较大片段 | 大插入便于物理图谱和基因组区域保存，但提取、转染和结构验证更困难 |
| YAC | 酵母着丝粒、端粒和自主复制序列模拟线性染色体 | 可承载很大片段，也较易形成嵌合、缺失或重排，须做结构图谱 |
| 人工染色体 | 以着丝粒、端粒及复制相关结构维持大型 DNA | 构建和递送远比普通质粒复杂，不能简单视作 BAC／YAC 的放大版本 |
| 病毒载体 | 利用病毒颗粒递送和特定复制／整合特性 | 容量、细胞嗜性、免疫、整合、生物安全和生产质控因系统而异 |

所谓“容量”通常是经验范围而非固定边界：插入片段的重复性、GC、毒性和宿主重组能力都能让较小构建也不稳定。载体图谱应写明序列版本、复制起点、抗性基因、筛选元件、启动子方向和所有连接点；只凭载体商品名不能恢复实验构建。

## 限制酶、连接与 DNA 组装 { #dna-assembly }

限制性内切酶识别特定序列并切割 DNA。实验室最常用的 II 型限制酶通常以 Mg$^{2+}$ 为催化辅因子，在识别位点内或附近切割，并不像 I 型限制—修饰复合物那样普遍依赖 ATP 完成远距离切割。不同酶可产生 5′ 突出端、3′ 突出端或平端；同裂酶识别相同序列，相容末端则可能来自识别序列不同的酶。相容只表示末端能够连接，连接后是否恢复某个识别位点仍要逐序列判断。

DNA ligase 催化相邻 3′-OH 与 5′-磷酸之间形成磷酸二酯键。双酶切可用不相容末端规定插入方向并降低空载体背景；平端连接不依赖突出端配对，但有效碰撞少且无天然方向性；TA 克隆利用 Taq 产物的单 A 突出端与载体 T 突出端。载体去磷酸化可降低自身环化，同时也会改变连接产物对插入片段 5′-磷酸的要求。多核苷酸激酶可补加 5′-磷酸，聚合酶或核酸酶可修整末端，任何处理都应与后续连接化学相容。

旧教学材料把 5 µL 质粒与缓冲液、水和限制酶在 37 ℃反应 15 min，并要求酶液体积低于总体积的 10%。其中“降低酶储存液带入的甘油和盐”仍是有用考虑，但 DNA 量、酶活单位、缓冲液、反应温度、时间、甲基化敏感性和失活方式都取决于具体酶。双酶切前应查兼容缓冲条件，必要时顺序消化或在中间纯化，不能把 37 ℃和 15 min 作为全部限制酶的共同属性。

现代无缝组装重新安排了末端产生与连接方式。Gibson assembly 在同一等温体系中由外切酶产生互补单链区、聚合酶填补缺口、连接酶封闭切口，可按设计的同源重叠区拼接多个片段。[^gibson] Golden Gate 利用 IIS 型限制酶在识别位点外切割，由自定义突出端规定片段顺序，并在同管切割—连接循环中把模块两端的识别位点排除在最终构建之外，适合模块化多片段组装；模块内部若有同一种酶的识别位点，通常须先改写或改用其他酶。[^golden-gate] 重组克隆和其他 ligation-independent 方法也能避开传统末端限制。方法应按片段数、序列重复、是否允许 scar、内部位点、成本和验证负担选择，而不宜用“新方法一定优于酶切连接”代替设计。

## 转入宿主、选择筛选与克隆确认 { #transformation-screening }

细菌的化学感受态转化常以二价离子、低温处理和短暂热激帮助质粒进入细胞；电转化用瞬时电场形成可逆膜通透，适合多种细胞与较低 DNA 输入，但对盐和电弧敏感。真核细胞中把核酸或核酸—蛋白复合物送入细胞通常称为 transfection，可采用脂质、聚合物、磷酸钙、电穿孔或其他递送体系；病毒介导递送称 transduction。术语区分的是生物学与递送情境，不代表固定的效率排名。

选择使未获得载体的细胞不能生长，筛选则在存活群体中区分候选结构。抗生素抗性和营养缺陷互补属于选择；蓝白斑是利用 lacZ α-complementation 的筛选：在合适宿主、IPTG 和 X-Gal 条件下，空载体的完整 α 片段常形成蓝色菌落，插入打断 α 片段时常呈白色。白色仍可能来自载体缺失、宿主状态或显色不足，浅蓝与蓝色也可能含有不打断阅读框的插入，因此颜色不能替代分子确认。

挑取候选后先保存与主平板坐标对应的单菌落，再用 colony PCR、质粒酶切或连接点测序初筛。最终构建应覆盖两端连接点、插入方向和全长序列；长片段、重复序列和功能构建还要检查载体骨架、拷贝数或结构图谱。来自单个 PCR 产物的多个菌落可能共享同一个早期聚合酶错误，独立克隆最好来自独立扩增或由高保真扩增与最终测序共同控制。

## 基因组、cDNA 与测序文库 { #library-construction }

基因组文库保存某一基因组样品的片段集合，理论上同时包含编码区、内含子、重复序列和调控区；cDNA 文库由 RNA 经逆转录获得，反映取样组织、时期、处理条件和 RNA 类型下能够进入逆转录与克隆流程的转录本。cDNA 文库便于在不能剪接真核内含子的细菌中表达开放阅读框，却不含基因组内含子和大多数远端调控序列，并受 RNA 丰度、完整性、引发方式和逆转录效率影响。

若目标片段占单个克隆的理论比例为 $f$，每个克隆独立且等概率抽样，希望至少一次包含目标的概率为 $p$，所需克隆数可估为

$$
N=\frac{\ln(1-p)}{\ln(1-f)}.
$$

这个公式揭示文库规模与稀有片段的关系，却没有消除非随机剪切、克隆毒性、片段长度选择、重复序列不稳定和扩增偏倚。所谓“几倍基因组覆盖”也只有在插入分布近似随机、克隆独立且有效插入率已知时才有明确概率含义。经典基因组文库可通过菌落或噬菌斑杂交寻找克隆，再以重叠片段进行染色体步移和物理图谱；定位克隆则先用遗传标记逐步缩小区段，再把标记、物理克隆和候选基因验证接起来。现代测序并未抹去这些方法在保存长单倍型、复杂区域和功能构建中的价值。

在完整基因组和转录组易得之前，未知基因还可从已知蛋白序列反推简并引物／探针，以跨物种同源序列筛库，以插入标签和侧翼扩增定位基因，或用外显子捕获法从基因组克隆中寻找可被剪接识别的外显子。减法杂交和差异显示技术比较两个 RNA 群体以寻找差异片段，得到的是候选表达差异而非完整基因和因果机制。这些经典方法把蛋白、表型、物理克隆和表达证据接成可追踪的发现路径；当前数据库搜索和高通量测序提高了广度，候选仍须回到独立扩增、全长转录本和功能验证。

测序文库把片段连接到平台接头，并常加入样本索引、分子条形码或唯一分子标识符（UMI）。样本索引用于混合测序后的样本拆分，UMI 尝试标记原始分子以识别后续 PCR 重复，两者承担的层级不同。片段化、末端修复、大小选择、接头连接、逆转录和 PCR 都会改变序列与长度代表性；低输入样品尤其容易由少数分子过度扩增形成高重复率。3C 家族先把空间邻近变成嵌合连接片段，ATAC 以 Tn5 同时切割和加接头，ChIP／CLIP 则先富集特定复合物再完成接头与扩增；这些特异的捕获化学见[核酸杂交、探针与分子互作检测](molecular_probes.md)，共同的接头、扩增和复杂度问题仍遵循同一建库质量链。文库浓度、片段谱、接头二聚体、有效插入率和复杂度应与最终读段质控一起解释，不能用“总 ng 数合格”替代可测序分子的摩尔浓度与组成。

## 表达构建与条件遗传系统 { #expression-conditional-genetics }

表达构建需要把启动子、5′ UTR、翻译起始环境、开放阅读框、标签和终止／poly(A) 信号放在正确方向与阅读框内。大肠杆菌便于快速扩增和表达，却缺少剪接体以及许多真核糖基化、折叠和加工条件；酵母、昆虫、哺乳动物和植物系统提供不同的修饰、分泌与细胞环境。宿主选择应由蛋白用途、复合物、毒性、定位和质量属性决定。细菌包涵体是高密度聚集物，不是由膜包围的细胞器；从包涵体溶解并复性得到的蛋白仍须检验结构与活性。

GAL4/UAS 把空间控制与响应构建分开：driver 品系在特定调控元件下表达 GAL4，responder 品系把 UAS、最小启动子和目标基因组合在一起，二者后代在 GAL4 出现的细胞中激活目标。UAS 构建并非“完全不需要启动子”，表达强度还受 UAS 数量、最小启动子、插入位点、温度和遗传背景影响。Brand 与 Perrimon 建立的果蝇二元表达路径使组织特异的异位表达成为经典遗传工具。[^gal4-uas]

FLP/FRT 与 Cre/lox 是位点特异重组系统。两个同向靶位点间的序列可被删除，反向位点可导致倒位，位于不同分子或染色体位置的位点还可能产生交换；实际结果取决于位点方向、距离、重组酶表达和细胞谱系。FLP/FRT 在果蝇中形成镶嵌克隆，Cre/lox 广泛用于条件等位基因；它们保留了“在特定时间和组织改变基因”的经典实验逻辑。[^site-specific-tools] 重组阳性报告只能证明报告构建发生相应改变，目标等位基因仍应独立分型。发育表型、遗传镶嵌和谱系推断见[从基因型到发育过程](../../genetics/developmental_genetics.md#genotype-to-development)，重组化学见[位点特异性重组](../../molecular/dna_recombination.md#site-specific-recombination)。

稳定转基因动物的经典路线包括把构建导入受精卵／早期胚胎，或先改造胚胎干细胞再筛选并产生嵌合体；建立品系后还要用后代分离确认遗传传递、拷贝数和插入位点。植物常用 *Agrobacterium* 的二元载体把 T-DNA 递送到植物细胞，也可用粒子轰击等物理方式后经选择与再生获得植株。物种、外植体、基因型和实验目的决定路线，不能再用“单子叶植物不适合农杆菌、只能用基因枪”概括。胚胎操作、组织培养和再生会产生嵌合、体细胞变异与插入位点效应，至少需要独立转化事件和适当空载体／未转化对照。

## 从随机突变到定点构建 { #mutagenesis-engineering }

error-prone PCR 通过降低聚合准确性提高随机突变率，DNA shuffling 则把同源序列片段化后重组，以组合不同亲本的变异。二者用于定向进化时，突变库的规模、突变谱、无功能克隆比例和筛选能力共同限定能探索的序列空间。筛选到的表型可能由多个连锁突变产生，应回测单个突变和组合，并在原始骨架中重建。

寡核苷酸定点突变和 overlap-extension PCR 可引入已知替换、缺失或插入；IIS 型组装和合成 DNA 又把多位点组合扩展到模块层面。噬菌体展示把候选肽／蛋白与编码 DNA 连接在同一颗粒上，核糖体展示以停滞的 mRNA—核糖体—多肽复合物保持基因型—表型联系。展示富集反映当前呈递、结合、洗脱和扩增条件下的选择优势，仍要以独立表达的候选验证亲和、特异性和功能。

## 基因组编辑工具谱系 { #genome-editing-toolkit }

可编程核酸酶把靶向模块与 DNA 切割连接起来。归巢核酸酶识别较长序列但重新定向困难；ZFN 以多个锌指识别 DNA，并常让成对 FokI 核酸酶结构域在相邻半位点二聚；TALEN 用串联 TALE repeat 的重复可变双残基识别碱基，也通常依赖成对 FokI；CRISPR-Cas9 则以 guide RNA 与靶 DNA 配对，并受 PAM 和局部染色质约束。ZFN 在 2005 年已用于内源位点的定向修复，TALEN 随后提供了较模块化的蛋白识别路径，RNA 引导 Cas9 则显著降低了重新定向的构建设计门槛。[^programmable-nucleases]

| 工具 | 靶向模块 | 产生切割的条件 | 仍有价值的场景与主要限制 |
| --- | --- | --- | --- |
| 归巢核酸酶 | 蛋白质识别长 DNA 序列 | 单体或特定寡聚体识别并切割 | 蛋白小、某些位点特异性高；改造新靶点困难 |
| ZFN | 串联锌指蛋白 | 成对半位点使 FokI 二聚 | 体积较小且有成熟历史；指间上下文和蛋白工程复杂 |
| TALEN | TALE repeat 阵列 | 成对半位点使 FokI 二聚 | 识别规则直观、可靶向多类位点；重复阵列构建和递送负担较大 |
| CRISPR-Cas 核酸酶 | guide RNA 与靶序列配对 | 合适 PAM、R-loop 与活性核酸酶 | 易于多重设计；PAM、递送、RNA—DNA 容错和细胞修复影响结果 |

这些工具不能用一张绝对的“成本、效率、特异性”排名表决定。靶序列、细胞类型、递送方式、表达时间、染色质状态、核酸酶版本和检测深度都会改变比较。ZFN 与 TALEN 也没有因 CRISPR 出现而失去方法学意义：它们展示了蛋白质识别与成对切割的设计逻辑，并在某些递送容量、知识产权、既有验证和靶序列条件下仍可成为合理选择。

## 编辑结果、递送与验证 { #editing-outcomes-validation }

核酸酶产生双链断裂后，细胞可经经典非同源末端连接、微同源介导的末端连接或同源定向修复形成多种等位基因。所谓“knockout”常依赖小插入缺失造成移码或破坏关键序列，但三的倍数缺失、可变剪接、替代起始和残余蛋白都可能保留功能；提供 donor 也不保证按预期 HDR，供体随机整合和一侧正确连接同样会产生筛选阳性。应把预期等位基因、可接受副产物和验证方案在编辑前一起设计。

基因敲低和显性负效应属于相邻但不同的功能扰动。RNAi、反义寡核苷酸或转录抑制降低 RNA／蛋白水平，通常不改变目标 DNA 序列；显性负突变蛋白则通过进入复合物或竞争结合位点妨碍内源蛋白。它们能处理必需基因、剂量和急性效应，却分别受残余表达、脱靶、递送和过表达伪影影响。把敲低、显性负效应与敲除并列保留，有助于按生物学问题选择证据，而不是把所有功能缺失都误称为基因编辑。

碱基编辑器把失活或切口型 Cas 与脱氨酶结合，在一定编辑窗口内实现特定碱基转换，避免有意产生双链断裂；先导编辑器把切口型 Cas 与逆转录酶结合，由 pegRNA 同时指定靶位点和待写入序列，可实现多类小型替换、插入或缺失。[^precision-editors] 它们减少了对 DSB 或双链 donor 的依赖，却仍会出现旁观者编辑、非目标碱基转换、indel、RNA／DNA 脱靶、效率差异和递送限制，不能概括成“无副作用的精确编辑”。

递送形式会改变暴露时间和风险。质粒易制备但表达持续且可能整合；mRNA 缩短表达窗口；Cas 蛋白—guide RNA 的 RNP 作用更短，却对制备、运输和进入细胞有要求；病毒载体具有特定嗜性和持续性，也带来容量、免疫、整合与生产质控问题。群体细胞中的编辑比例不能替代单克隆基因型，胚胎或组织中的编辑还可能形成镶嵌。筛选压力会选择生长较快的少数克隆，使表型同时混入递送、克隆化和培养选择效应。

验证应覆盖预期位点的两条等位基因、两端连接点和足够远的邻近区域。短扩增子测序容易漏掉破坏引物位点的大片段缺失、倒位、易位或供体串联，因此关键构建可联合长片段 PCR、数字 PCR、长读长测序、拷贝数和核型／结构检测。CRISPR 断裂后出现大片段缺失与复杂重排已有直接实验观察。[^large-on-target] 脱靶预测用于提出候选位点，不是阴性证明；GUIDE-seq 等实验方法可在给定细胞和条件下发现一部分全基因组断裂位点，也受检测灵敏度和生物学情境限制。[^guide-seq]

功能结论最好来自多个独立编辑克隆或独立 guide、未编辑和递送对照、基因型—表达—蛋白—表型的连续证据，以及重新引入野生型基因或精确回复突变的救援。若只有一个克隆出现表型，无法区分目标编辑、脱靶、克隆漂变和培养选择。

## 生物安全、伦理与可复现记录 { #biosafety-reporting }

重组或合成核酸实验的风险不仅来自目标基因本身，还来自宿主范围、复制能力、递送载体、抗性标记、毒素或致病相关功能、环境持留和暴露途径。开始实验前应按机构制度完成风险评估和审批，确定适用的物理与生物控制、废物处理、运输和事故响应；涉及病毒载体、whole-animal transfer、基因驱动或可能增强危害的构建时，不能由研究者仅凭普通质粒经验自行降级。NIH 指南把多类重组／合成核酸实验置于机构生物安全委员会的事前审查之下，具体辖区仍须遵守所在地法规和机构要求。[^nih-guidelines]

体细胞基因转移可以在体外改造细胞后回输，也可以在体内递送载体；基因补充不必改变内源位点，基因编辑也不自动等同于治疗。人类体细胞、胚系和可遗传编辑在科学风险、受试者保护、后代同意、公平性和社会治理上并不等价。WHO 的建议强调由机构、国家和国际层级共同治理人类基因组编辑，并同时考察安全、有效性、伦理与公共利益。[^who-editing] 教学页面可以解释工具和证据边界，不提供绕过审查的人体、生殖系或环境释放操作方案。通用风险评估与放行条件见[实验安全、伦理与风险管理](../foundations/safety_ethics.md#risk-assessment)。

可复现记录至少包括模板与参考序列版本、全部引物／guide／探针序列、酶与试剂批号、反应终浓度、循环程序、载体全序列或可追溯图谱、宿主基因型、转化／递送方式、选择筛选条件、克隆谱系和原始读出。qPCR 需保留原始扩增与熔解数据、阈值、效率和排除规则；文库需保留片段化、接头、index／UMI、扩增循环和质控；编辑需报告递送形式、时间、群体与单克隆结果、检测覆盖范围以及失败和异常等位基因。只有把失败产物也纳入谱系，后续研究者才能判断“没有看到”究竟是生物学阴性还是检测链断裂。

## 故障定位 { #troubleshooting }

| 观察 | 优先检查 | 不能直接下的结论 |
| --- | --- | --- |
| PCR 无带且阳性对照也失败 | 酶、循环程序、引物、Mg$^{2+}$、仪器和配液 | 不能据此判定样品不含靶标 |
| 无模板对照出现条带 | 产物区携带污染、试剂污染、引物二聚体和板封闭 | 同批样品阳性已不可直接解释 |
| qPCR Cq 漂移或重复离散 | 移液、封板、蒸发、抑制、阈值、效率和低拷贝抽样 | 不能只按 Cq 差异宣称表达改变 |
| 克隆板菌落很多但插入率低 | 载体未切尽／自连、末端化学、插入摩尔比、连接和选择 | 菌落数不等于重组效率或正确克隆数 |
| 蓝白斑颜色与 PCR 不一致 | 宿主 lacZ 基因型、IPTG／X-Gal、培养时间和插入阅读框 | 颜色不能代替连接点及全长测序 |
| 文库浓度够但测序重复率高 | 起始分子数、PCR 循环、接头二聚体、大小选择和 UMI | 总质量合格不代表复杂度或代表性合格 |
| 编辑群体显示高 indel 率 | 等位基因组成、大片段变化、细胞选择和嵌合 | 平均 indel 百分比不等于纯合 knockout |
| 单个编辑克隆有强表型 | 脱靶、克隆漂变、递送毒性、染色体变化和独立克隆 | 不能只凭单克隆归因于目标基因 |

## 参考资料与延伸阅读 { #references }

- Saiki, R. K. et al. [Primer-directed enzymatic amplification of DNA with a thermostable DNA polymerase](https://pubmed.ncbi.nlm.nih.gov/2448875/). *Science* 239, 487–491 (1988).
- Bustin, S. A. et al. [The MIQE guidelines: minimum information for publication of quantitative real-time PCR experiments](https://pubmed.ncbi.nlm.nih.gov/19246619/). *Clinical Chemistry* 55, 611–622 (2009).
- Cohen, S. N. et al. [Construction of biologically functional bacterial plasmids in vitro](https://pubmed.ncbi.nlm.nih.gov/4594039/). *Proceedings of the National Academy of Sciences USA* 70, 3240–3244 (1973).
- Gibson, D. G. et al. [Enzymatic assembly of DNA molecules up to several hundred kilobases](https://pubmed.ncbi.nlm.nih.gov/19363495/). *Nature Methods* 6, 343–345 (2009).
- Jinek, M. et al. [A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity](https://pubmed.ncbi.nlm.nih.gov/22745249/). *Science* 337, 816–821 (2012).
- Kosicki, M., Tomberg, K. & Bradley, A. [Repair of double-strand breaks induced by CRISPR–Cas9 leads to large deletions and complex rearrangements](https://pmc.ncbi.nlm.nih.gov/articles/PMC6390938/). *Nature Biotechnology* 36, 765–771 (2018).
- World Health Organization. [Human genome editing: recommendations](https://www.who.int/publications/i/item/9789240030381) (2021).

[^pcr-taq]: Saiki, R. K. et al. [Primer-directed enzymatic amplification of DNA with a thermostable DNA polymerase](https://pubmed.ncbi.nlm.nih.gov/2448875/). *Science* 239, 487–491 (1988), doi:10.1126/science.2448875。
[^primer3]: Untergasser, A. et al. [Primer3—new capabilities and interfaces](https://pubmed.ncbi.nlm.nih.gov/22730293/). *Nucleic Acids Research* 40, e115 (2012), doi:10.1093/nar/gks596。Primer3 提供候选设计与热力学检查，正文据此同时保留针对实际参考序列的特异性验证。
[^miqe]: Bustin, S. A. et al. [The MIQE guidelines: minimum information for publication of quantitative real-time PCR experiments](https://pubmed.ncbi.nlm.nih.gov/19246619/). *Clinical Chemistry* 55, 611–622 (2009), doi:10.1373/clinchem.2008.112797。
[^dmiqe]: dMIQE Group. [The Digital MIQE Guidelines Update: Minimum Information for Publication of Quantitative Digital PCR Experiments for 2020](https://pubmed.ncbi.nlm.nih.gov/32746458/). *Clinical Chemistry* 66, 1012–1029 (2020), doi:10.1093/clinchem/hvaa125。
[^gibson]: Gibson, D. G. et al. [Enzymatic assembly of DNA molecules up to several hundred kilobases](https://pubmed.ncbi.nlm.nih.gov/19363495/). *Nature Methods* 6, 343–345 (2009), doi:10.1038/nmeth.1318。
[^golden-gate]: Engler, C., Kandzia, R. & Marillonnet, S. [A one pot, one step, precision cloning method with high throughput capability](https://doi.org/10.1371/journal.pone.0003647). *PLoS ONE* 3, e3647 (2008), doi:10.1371/journal.pone.0003647。
[^gal4-uas]: Brand, A. H. & Perrimon, N. [Targeted gene expression as a means of altering cell fates and generating dominant phenotypes](https://genepath.med.harvard.edu/~perrimon/papers/Brand_Perrimon.pdf). *Development* 118, 401–415 (1993)。
[^site-specific-tools]: Golic, K. G. & Lindquist, S. [The FLP recombinase of yeast catalyzes site-specific recombination in the Drosophila genome](https://pubmed.ncbi.nlm.nih.gov/2509077/). *Cell* 59, 499–509 (1989), doi:10.1016/0092-8674(89)90033-0；Sauer, B. & Henderson, N. [Site-specific DNA recombination in mammalian cells by the Cre recombinase of bacteriophage P1](https://pubmed.ncbi.nlm.nih.gov/2839833/). *Proceedings of the National Academy of Sciences USA* 85, 5166–5170 (1988), doi:10.1073/pnas.85.14.5166。
[^programmable-nucleases]: Urnov, F. D. et al. [Highly efficient endogenous human gene correction using designed zinc-finger nucleases](https://doi.org/10.1038/nature03556). *Nature* 435, 646–651 (2005), doi:10.1038/nature03556；Christian, M. et al. [Targeting DNA double-strand breaks with TAL effector nucleases](https://pubmed.ncbi.nlm.nih.gov/20660643/). *Genetics* 186, 757–761 (2010), doi:10.1534/genetics.110.120717；Jinek, M. et al. [A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity](https://pubmed.ncbi.nlm.nih.gov/22745249/). *Science* 337, 816–821 (2012), doi:10.1126/science.1225829。
[^precision-editors]: Komor, A. C. et al. [Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage](https://pubmed.ncbi.nlm.nih.gov/27096365/). *Nature* 533, 420–424 (2016), doi:10.1038/nature17946；Anzalone, A. V. et al. [Search-and-replace genome editing without double-strand breaks or donor DNA](https://pmc.ncbi.nlm.nih.gov/articles/PMC6907074/). *Nature* 576, 149–157 (2019), doi:10.1038/s41586-019-1711-4。
[^large-on-target]: Kosicki, M., Tomberg, K. & Bradley, A. [Repair of double-strand breaks induced by CRISPR–Cas9 leads to large deletions and complex rearrangements](https://pmc.ncbi.nlm.nih.gov/articles/PMC6390938/). *Nature Biotechnology* 36, 765–771 (2018), doi:10.1038/nbt.4192。
[^guide-seq]: Tsai, S. Q. et al. [GUIDE-seq enables genome-wide profiling of off-target cleavage by CRISPR-Cas nucleases](https://pubmed.ncbi.nlm.nih.gov/25513782/). *Nature Biotechnology* 33, 187–197 (2015), doi:10.1038/nbt.3117。
[^nih-guidelines]: National Institutes of Health. [NIH Guidelines for Research Involving Recombinant or Synthetic Nucleic Acid Molecules](https://osp.od.nih.gov/policies/biosafety-and-biosecurity-policy/#tab2)；2024 年修订通知见 [NOT-OD-24-093](https://grants.nih.gov/grants/guide/notice-files/NOT-OD-24-093.html)。正文将其作为风险分类与机构审查的权威实例，不替代所在地法规。
[^who-editing]: World Health Organization. [Human genome editing: recommendations](https://www.who.int/publications/i/item/9789240030381) (2021)。
