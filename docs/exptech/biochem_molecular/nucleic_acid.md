# 核酸提取、质量与电泳

从组织、细胞或培养物中得到一管“核酸”，实际经历了样本保存、裂解、核酸酶失活、杂质分离、目标分子富集和重新溶解。每一步都可能选择性保留某些分子而损失另一些分子：较难裂解的细胞会在群落样品中被低估，短 RNA 可能穿过不合适的固相，长 DNA 会被剪切，闭环质粒、线性 DNA 和开环分子又会以不同方式通过纯化和电泳。提取因此不是分析之前的一段中性准备，而是测量链的第一部分。

质粒碱裂解、植物 CTAB、动物组织柱法、酸性胍盐—酚 RNA 提取和手工琼脂糖凝胶构成经典学习路径，浓度、纯度、完整性、抑制物和用途适配则贯穿整条质量证据链。核酸的吸收、沉淀、黏度与拓扑基础见[核酸与核苷酸](../../biochem/nucleic_acid.md#solution-properties)，下游操作分别见[核酸扩增与定量](amplification_cloning.md)、[分子克隆与构建设计](molecular_cloning.md)和[基因组编辑与验证](genome_editing.md)，测序产生的读段质量则见[测序技术、读段与质量控制](../../bioinfo/sequencing.md#molecule-to-read)。

## 先定义要回收的分子 { #sample-to-molecule }

提取方案首先由分析对象决定。总产量最高的方法未必最适合下游，外观最完整的高分子 DNA 也未必没有酶抑制物。实验开始前应写明目标分子、希望保留的长度和拓扑、允许共存的核酸类型、最低输入量，以及最终用于酶切、扩增、杂交、测序还是转染。

| 目标 | 需要重点保留的性质 | 常见损失或偏倚 | 放行时优先看的证据 |
| --- | --- | --- | --- |
| 细菌质粒 | 共价闭环分子、序列正确、可被限制酶或转染体系使用 | 菌体过量、基因组 DNA 剪切混入、内毒素、不同拓扑比例变化 | 浓度、琼脂糖拓扑带、酶切图谱；高要求用途另测内毒素 |
| 常规基因组 DNA | 足够长度、低蛋白和低抑制物、代表原样本 | 难裂解细胞低估、核酸酶降解、RNA 共纯化、盐或多酚残留 | 靶向荧光定量、吸收光谱、凝胶／片段分析、功能性扩增 |
| 高分子量 DNA | 数十至数百 kb 甚至更长的连续分子 | 研磨、涡旋、窄枪头和反复冻融剪切；短片段选择性富集 | 温和定量、脉冲场／场反转或相应片段分析、长读长建库小试 |
| 总 RNA | 预定 RNA 尺寸范围、低 RNase 损伤、低基因组 DNA | 取样延迟、RNase、相分离带入 DNA／酚、小 RNA 丢失 | RNA 专一荧光、毛细管／变性胶完整性、无逆转录对照、抑制检查 |
| 小 RNA 或特定 RNA 亚群 | 尺寸、末端化学和目标亚群的代表性 | 固相截止、沉淀效率、富集与连接偏倚 | 与目标尺寸匹配的定量／电泳，外源过程对照和下游回收率 |

同一批比较样品应使用一致的采样量、保存时间、裂解强度和纯化化学，并把样本顺序随机或平衡到提取批次中。低生物量样品尤其需要提取空白，因为试剂和环境带入的少量核酸可能与真实样品同量级；群落研究还应使用组成已知的过程对照，检查厚壁细胞、孢子或其他难裂解成员是否被系统性低估。不同 DNA 提取方法确实会改变所见微生物群落的组成，因此“抽到了 DNA”不能证明原样本获得了等比例代表。[^extraction-bias]

采样后至裂解前的状态也属于实验变量。新鲜材料、冻存材料、固定石蜡材料和保存液中的材料具有不同的核酸断裂与交联背景；RNA 还会随缺血时间、室温停留和冻融迅速改变。样本编号、组织部位、质量或细胞数、采集到稳定化的时间、保存液、温度、冻融次数和预处理必须与提取批次一起记录。

## 从裂解到纯化 { #extraction-logic }

### 裂解、失活与释放 { #lysis-nuclease-control }

机械破碎打开细胞壁或坚韧组织，去污剂破坏膜和脂质—蛋白相互作用，蛋白酶消化膜蛋白、核蛋白和部分核酸酶，胍盐等离液剂使蛋白展开并帮助核酸酶失活，EDTA 通过螯合二价阳离子削弱许多金属依赖核酸酶。它们不是可以任意叠加的“裂解强度”：强烈研磨有利于难裂解材料，却会剪切高分子 DNA；EDTA 保护核酸，却可能妨碍后续依赖 Mg$^{2+}$ 的反应；去污剂和胍盐残留又可能抑制酶。

RNase 可清除 DNA 制备物中的 RNA，DNase 可清除 RNA 制备物中的 DNA。DNase I 是依赖二价阳离子的内切核酸酶，离子组成会影响切割方式；其用途是受控地降解 DNA，不是用来证明 RNA 样品已经“绝对无 DNA”。酶处理之后须按下游要求失活或再次纯化，并以无逆转录对照、限制性酶切或其他功能试验检验残留，而不能只凭加过酶这一操作作结论。

### 分相、固相结合与沉淀 { #partition-binding-precipitation }

酚—氯仿抽提通过蛋白变性和两相分配把多数核酸留在水相，把变性蛋白集中在界面或有机相；酸性条件还能使总 RNA 与多数 DNA 的分配出现差异。界面并非锋利的化学边界，吸取过深会带入蛋白、脂质、DNA 或酚，吸取过浅又牺牲产量。有机溶剂的毒性、挥发性和废物路线必须在开始前按机构规则安排。

硅胶膜、二氧化硅颗粒和硅包覆磁珠常在胍盐与醇存在的结合环境中吸附核酸，随后以含醇洗液清除杂质，在低盐水相中洗脱。这里的关键是特定固相、盐、pH、醇比例和核酸长度共同决定的结合—洗脱平衡，不能简化成所有产品都遵守“高盐低 pH 结合、低盐高 pH 洗脱”。Boom 等将胍硫氰酸盐的裂解／失活作用与二氧化硅结合结合起来，奠定了许多现代固相纯化流程的基础。[^boom-silica]

阴离子交换介质利用核酸磷酸骨架的负电荷，在适当 pH 和低盐条件下结合、再由较高盐洗脱；磁珠则把固相搬运改成磁分离，便于自动化。两者同样具有容量、尺寸选择和污染物耐受边界。更早的盐析与密度梯度方法曾利用核蛋白、RNA、单链 DNA、双链 DNA 和不同质粒拓扑在特定盐或梯度介质中的溶解、沉降或浮力密度差异；这些差异取决于 CsCl、Cs$_2$SO$_4$、嵌入染料和离心条件，不能写成一条对所有溶液成立的固定密度次序。CsCl—ethidium bromide 梯度对闭环质粒的历史纯化价值应保留，同时也要看到其超速离心、染料暴露和废物处置成本。

乙醇或异丙醇沉淀依靠反离子和较低介电环境削弱核酸的水化与电荷排斥。异丙醇所需体积通常较小，却也容易使盐和其他大分子共沉淀；乙醇较易挥发，但并不天然保证纯度。70%–75% 乙醇洗涤用于移除可溶性盐，沉淀过度干燥会难以复溶，残留乙醇又会抑制后续酶反应。沉淀效率同时受链长、浓度、盐、温度和共沉淀剂影响，DNA 与 RNA 都可用两种醇沉淀，不能按“乙醇只沉 DNA、异丙醇只沉 RNA”分类。

常用 TE 缓冲液可由 10 mmol/L Tris–HCl（pH 8.0）与 1 mmol/L 乙二胺四乙酸（ethylenediaminetetraacetic acid，EDTA）组成。Tris 提供近中性的缓冲环境，EDTA 有助于抑制金属依赖核酸酶；若核酸即将进入依赖 Mg$^{2+}$ 的低体积反应，EDTA 的带入也须计入。水、低 EDTA 缓冲液或其他洗脱液各有保存与下游兼容性边界。部分离心柱需要使用前平衡或预润湿，具体要求由膜和说明书决定。

## 质粒 DNA 的碱裂解 { #plasmid-alkaline-lysis }

碱裂解利用高分子染色体 DNA 与共价闭环质粒在短时碱处理和中和后的不同复性、缠结与沉淀行为。细菌先在含 Tris、EDTA 和葡萄糖的悬液中均匀重悬；SDS 裂解细胞并使蛋白变性，NaOH 使 DNA 碱基配对破坏。共价闭环质粒的两条链仍受拓扑约束，快速中和时较容易恢复可溶结构；高分子染色体 DNA 若被剪切、完全分散或延迟中和，则更容易混入上清。Birnboim 与 Doly 的原始方法正是以选择性碱变性和中和后沉淀实现快速质粒筛查。[^birnboim-doly]

醋酸钾中和碱，并使钾离子与十二烷基硫酸根形成难溶盐，连同变性蛋白、膜碎片和大量染色体 DNA 聚集。这里应温和颠倒混合；剧烈吹打或涡旋会把黏稠的染色体 DNA 剪成较短片段，使其难以随絮状物去除。菌体输入超过裂解液和柱的容量时，重悬不完全、黏度升高与杂质穿透会同时发生，不能靠延长离心解决。

下列小量柱式流程展示了操作顺序，但 `Buffer 1/2/3`、`DW1`、`Wash Solution` 和柱膜都属于特定试剂盒体系；离心速度、培养体积和洗脱量需要结合相应说明书使用。

示例配方把 Buffer 1 设为 50 mmol/L 葡萄糖、10 mmol/L EDTA、25 mmol/L Tris–HCl（pH 8.0），Buffer 2 设为 0.2 mol/L NaOH 和 1% SDS，Buffer 3 设为 2 mol/L 醋酸／3 mol/L 醋酸钾（pH 4.8）。这些浓度保存了经典葡萄糖—Tris—EDTA、碱—SDS 与醋酸钾中和体系，但 Buffer 3 的配制表述、各液最终 pH 和试剂盒兼容性仍须按实际配方核对。

| 阶段 | 示例条件 | 操作意义与核对点 |
| --- | --- | --- |
| 收菌与重悬 | 菌液共 2 mL，分两次约 8,000 ×g、2 min 收集；Buffer 1 250 μL | 完全去培养基并无可见菌块；葡萄糖主要维持渗透环境并帮助形成均匀悬液，不是靠“增稠”保护质粒 |
| 碱裂解 | Buffer 2 250 μL，温和颠倒，约 2 min | 观察由浑浊转澄清和黏稠；短时、均匀处理，避免涡旋和超时 |
| 中和 | Buffer 3 350 μL，温和颠倒，约 2 min；约 12,000 ×g、5 min | 形成白色絮状物；转移澄清上清时不扰动沉淀 |
| 结合与洗涤 | 上清上柱，约 9,000 ×g、30 s；DW1 500 μL、洗液 500 μL，各离心后倒废液 | 加液到膜上且不触碰膜；最后空柱离心移除乙醇 |
| 洗脱 | 膜中央加洗脱液 70 μL，静置约 1 min，离心 | 换新收集管并记录洗脱体积；浓度、回收率和纯度要由实测决定 |

未酶切质粒常在凝胶上出现超螺旋、开环、线性及多聚体等多个条带。超螺旋分子在许多常用条件下比同长度线性 DNA 快，开环分子常较慢，但迁移还受凝胶浓度、电场和嵌入染料影响。一个克隆出现多带并不自动表示含有多个不同大小的质粒；用未切、单切线性化和预期限制性片段三个层次比较，才能把拓扑与序列结构区分开。

## 不同材料的基因组 DNA 提取 { #genomic-dna-extraction }

### 植物材料的 CTAB 路线 { #plant-ctab }

植物细胞壁、储藏多糖、色素和酚类次生代谢物使 DNA 提取同时面对裂解与共纯化。十六烷基三甲基溴化铵（CTAB）是阳离子表面活性剂；在适宜盐浓度下，它可破坏膜并使核酸与多糖、蛋白的溶解行为产生差异。早期 Murray–Thompson 方法以 CTAB 获得可供限制性酶切的高分子植物 DNA，但也明确得到的是核、叶绿体和线粒体 DNA 的混合总量，不是核基因组的选择性制备。[^ctab-plant-dna]

幼嫩、代谢物较少的组织常较容易处理；富多酚、富多糖、木质化或储藏组织需要按物种和器官优化。PVP／PVPP 可结合部分多酚，β-巯基乙醇等还原剂可抑制酚类氧化和醌形成；其主要作用不应写成“切断多酚氧化酶的二硫键”。CTAB 裂解液预热有助于保持体系均一并促进裂解，不等于温度本身已彻底抑制所有 DNase。异丙醇也会共沉淀盐和多糖，不能宣称它会选择性排除这些杂质。

酚／氯仿／异戊醇 25∶24∶1 是一种经典抽提液：酚使蛋白变性，氯仿改善分相并减少水相中的酚，少量异戊醇可降低起泡和界面乳化。具体比例、酚的 pH 与抗氧化剂取决于目标是 DNA 还是 RNA；有机抽提也不能替代对残余酚和下游抑制的检查。

一套植物教学流程以 0.15 g 叶片、600 μL `PCL Buffer`、12 μL β-巯基乙醇和少量 SiO$_2$ 研磨，取 400 μL 匀浆在 65 ℃ 放置 45 min，其间约每 10 min 温和混匀；随后加入 200 μL `Buffer PP`，在 −20 ℃ 放置 5 min，离心后取上清，以 500 μL 氯仿分相。约 300 μL 水相再用等体积异丙醇或 2.5 倍体积乙醇沉淀，75% 乙醇洗涤，短时晾干后用 70 μL TE 溶解。这个版本呈现“研磨—裂解—除杂—分相—沉淀—洗涤—复溶”的顺序；商业缓冲液成分、离心转子的相对离心力（relative centrifugal force，RCF）、氯仿稳定剂与通风条件仍须由产品说明和实验室方案补足。

高分子 DNA 的混匀强度不能仅按“吹打、震荡、弹打”的名称排序。剪切取决于枪头内径、黏度、速度、时间、涡旋几何和分子长度。目标是长读长或大片段酶切时，优先使用宽口枪头、缓慢倒转、较少转移和充分静置复溶；目标只是短扩增子时，可接受的片段化程度更高。

### 动物组织的蛋白酶 K—固相路线 { #animal-tissue-dna }

动物组织常以 SDS 或其他去污剂裂解，并用蛋白酶 K 消化结构蛋白、膜蛋白和核蛋白。蛋白酶 K 是较耐去污剂和一定温度范围的丝氨酸蛋白酶，但活性仍取决于实际缓冲液、温度和抑制物；不能以“耐酸碱和螯合剂”推导在所有配方中都不会失活。完全消化且不使固相过载，比盲目增加组织量更重要。

一套柱法先向 `AC` 柱加入 500 μL 平衡液，并以 13,000 r/min 离心 1 min；随后从 30 mg 新鲜组织开始，加入 200 μL `TL` 和 20 μL 蛋白酶 K，55 ℃ 消化约 30 min；再加 200 μL `CB`，70 ℃ 约 10 min，冷却后加 100 μL 异丙醇。去除大块不溶物后上柱，以 `IR` 500 μL 和 `WB` 500 μL 依次洗涤，空柱离心，再向膜中央加入 100 μL、约 65 ℃ 的 `EB`，静置 5 min 后洗脱。只有 rpm 而没有转子半径时无法换算 RCF；温度、缓冲液缩写和柱容量也都是试剂盒专属条件，报告时必须补齐厂家、版本和偏离说明。动物来源、病原风险和处置要求见[实验安全、伦理与风险管理](../foundations/safety_ethics.md#animal-and-field-ethics)。

### 高分子量 DNA 与提取偏倚 { #high-molecular-weight-dna }

常规柱法追求快速、洁净和适合扩增的 DNA，不一定保留极长分子。长读长测序、光学图谱或超大片段分析要求从取样开始减少机械剪切，避免长时间强涡旋、窄孔高速吹打和不必要的冻融，并用能够解析高分子范围的方法检查长度。PacBio 的样品技术说明也把双链 DNA 特异定量与高分子片段分析并列，而不是用微量吸光比值替代长度检查。[^hmw-dna-qc]

微生物群落、混合组织和亚细胞组分还存在代表性偏倚：不同细胞的裂解效率不同，线粒体／叶绿体 DNA 拷贝数高，游离 DNA 与胞内 DNA 的进入概率也不同。若研究问题要求比较组成，应把裂解过程对照加在纯化之前；只在洗脱后加一段标准 DNA，只能检验后续反应，无法发现前端没有裂开的细胞。

## RNA 的提取与保护 { #rna-extraction }

### RNase 控制与工作区 { #rnase-control }

RNA 比 DNA 更容易在碱性条件下发生主链断裂，环境中又普遍存在稳定的 RNase。有效控制依靠缩短取样到失活的时间、使用经验证的 RNase-free 耗材与水、保持手套和工作面清洁、将 RNA 前处理与扩增产物区分，并让样本尽早进入强变性或稳定化环境。口罩、帽子和手套可以减少污染，但只有在更换频率、工作方向和洁净耗材管理明确时才有意义。

传统 RNA 实验曾采用玻璃器皿 180 ℃ 干烤 6 h、塑料器皿以 0.1% 焦碳酸二乙酯（diethyl pyrocarbonate，DEPC）水浸泡 12 h，以及有机玻璃电泳槽用去污剂—水—乙醇—3% H$_2$O$_2$—DEPC 水处理的路线。高温和氧化剂会损伤部分塑料与设备，DEPC 会与胺类缓冲成分反应，而且浓缩试剂对皮肤、眼和呼吸道有刺激危害。现在通常优先采用认证的无核糖核酸酶（RNase-free）一次性耗材、专用工作区和与设备兼容的商业去污剂；确需 DEPC 时须按安全数据表（safety data sheet，SDS）、材料兼容性和机构标准操作规程（standard operating procedure，SOP）配制、分解与处置。[^rnase-control-source]

### 酸性胍盐—酚—氯仿提取 { #agpc-rna-extraction }

酸性胍硫氰酸盐—酚—氯仿法以胍盐迅速使蛋白和核糖核蛋白解聚，以酚促进蛋白变性；加入氯仿并离心后，酸性条件使总 RNA 主要留在上层水相，多数 DNA 富集于界面和有机相，再由异丙醇沉淀回收 RNA。Chomczynski 与 Sacchi 1987 年的单步法把这一过程压缩为可批量操作的经典路线。[^agpc-rna]

商品化单相试剂的具体组成随产品而异，不能把异硫氰酸胍、酚、8-羟基喹啉、β-巯基乙醇等一张历史成分表视作所有 `TRIzol` 类试剂的公开配方。RNase 抑制蛋白也只抑制相应 RNase 家族，无法替代快速失活、无 RNase 操作和完整性检查。

一套小鼠肝流程以 900 μL 单相试剂裂解组织，室温放置约 5 min，约 12,000 ×g、4 ℃ 离心；加入 200 μL 氯仿并充分乳化，静置后再次离心，取上层水相约 400 μL，以等体积异丙醇沉淀，乙醇洗涤，短时干燥后用 25 μL RNase-free 水溶解。流程遵循“均质—分相—取水相—沉淀—洗涤—复溶”的主线。氯仿具有挥发和暴露风险，胍盐废液不得与含次氯酸盐的废物流任意混合；实际体积、温度和时间必须以所用试剂说明书、样本量和机构化学卫生要求为准。

吸取水相时宁可保留少量界面上方液体，也不要把白色界面带入新管；但过度保守会降低产量，因此需记录实际回收体积。RNA 沉淀过度风干会难以复溶，未去尽乙醇又会抑制逆转录或连接酶。若下游要求无基因组 DNA，应安排柱上或溶液中 DNase 处理和后续净化，并设置无逆转录对照。

### RNA 亚群、尺寸与用途 { #rna-size-purpose }

“总 RNA”由 rRNA、mRNA、tRNA、snRNA、miRNA 等多种长度和结构的分子组成。固相、醇比例、结合缓冲液和洗涤条件都可能形成尺寸截止或结构偏好；若研究小 RNA、环状 RNA、长非编码 RNA 或完整转录本，应先确认所用方法是否保留相应对象。富集 poly(A) RNA、去除 rRNA 或选择小 RNA 属于后续选择步骤，它们改变的是可观测 RNA 群体，不能在报告中只写成“RNA 纯化”。

互补 DNA（complementary DNA，cDNA）文库、Northern 印迹和逆转录聚合酶链式反应（reverse-transcription PCR，RT-PCR）对完整性的敏感程度由文库构建方式、目标长度、引物位置、是否需要全长信息和允许的降解背景决定。短 RT-qPCR 扩增子可能在部分降解样本中仍能产生信号，却可能出现 3′／5′ 偏倚；Northern 需要目标区域和迁移长度可解释；全长转录本和异构体分析对长分子连续性更敏感。质量阈值应由预定用途和验证实验决定。

## 浓度、纯度、完整性与可用性 { #quality-evidence }

核酸质量至少包含四个相互独立的问题：回收了多少目标分子，混入了什么，分子是否保持所需长度／拓扑，以及它能否完成预定反应。NCI 生物样本最佳实践也把浓度、纯度和完整性视为用途相关的独立质量属性，并列举电泳、紫外／可见吸收和荧光光谱等互补评估。[^nucleic-acid-quality]

### 浓度与光谱纯度 { #quantity-purity }

| 方法 | 直接读出 | 优势 | 不能单独回答的问题 |
| --- | --- | --- | --- |
| 紫外吸收全谱 | 260 nm 吸收及 260/280、260/230 等比值 | 快速、不耗染料，可观察酚、胍盐或浑浊造成的谱形异常 | 不区分 DNA、RNA、游离核苷酸；低浓度比值不稳定；不报告长度 |
| 目标选择性荧光 | 染料结合 dsDNA、ssDNA、RNA 或特定尺寸后的荧光 | 低浓度下更灵敏，可减少非目标核酸和部分污染物对定量的影响 | 结果依赖染料选择、标准和范围；不等于纯度或完整性 |
| 凝胶／毛细管电泳 | 片段尺寸分布、拓扑或 RNA 峰形 | 直接观察完整性、降解和部分污染 | 染色响应随分子和构象改变，通常不是最准确的总浓度测量 |
| 功能性反应 | 内参扩增、限制酶切、连接、建库或外源过程对照 | 最接近最终用途，可暴露抑制物 | 同时受模板序列、酶和反应设计影响，不能反推出唯一污染物 |

光程归一到 1 cm 时，$A_{260}=1$ 常以约 50 μg/mL 双链 DNA、约 40 μg/mL RNA、约 33 μg/mL 单链 DNA 作经验换算；短寡核苷酸更适合按实际序列消光系数计算。精确定量仍需实际光程、合适空白和与分子相符的系数。浓度与洗脱体积相乘得到回收总量，回收总量再除以输入质量或细胞数才便于比较批次。吸收机制见[核酸与核苷酸](../../biochem/nucleic_acid.md#uv-absorbance)。

$A_{260}/A_{280}$ 约 1.8（DNA）或约 2.0（RNA）、$A_{260}/A_{230}$ 约 2 左右常用作经验参考。比值会受 pH、离子强度、空白、仪器光程和样品浓度影响；低 260/230 可见于酚、胍盐、糖类、EDTA 或其他提取成分，低 260/280 可提示蛋白或酚，但单一比值通常无法诊断唯一污染物。约 320–340 nm 的基线更适合发现浑浊、气泡和散射，`OD310` 偏高本身缺少直接指向盐污染的特异性。微量吸光和目标选择性荧光的互补边界亦见仪器技术资料。[^spectral-fluorescence-qc]

### 完整性、抑制物与用途适配 { #integrity-functionality }

常规 DNA 凝胶可区分高分子主带、连续拖尾和明显 RNA 共纯化，却难以准确解析远大于普通梯度范围的 DNA。长读长用途需用脉冲场、场反转或专门片段分析确认高分子分布。质粒还要区分超螺旋、开环与线性构象；同样长度的构象不同，不能用普通线性 ladder 直接换算其大小。

真核总 RNA 的变性胶可观察大、小亚基 rRNA 带及低分子拖尾；早期常以 28S 与 18S rRNA 条带强度关系判断完整性。条带“宽度为 1–2 倍”不是规范指标，强度也会受物种、组织、染料和上样量影响。毛细管电泳把整条电泳图转为 RNA integrity number（RIN）或平台相应指标，提高了标准化程度，但 RIN 仍以特定总 RNA 模式训练，不能对所有物种、固定样本、小 RNA 或特定转录本提供同样解释。[^rna-integrity-number] 严重降解的固定石蜡样本常另报告长于 200 nt 的比例等片段指标，并使用与下游建库相适的阈值。

抑制物可以在浓度和比值看似正常时仍影响反应。把样品作一组合理稀释后，若扩增回收或外源标准的响应不按预期变化，常提示基质抑制；加入提取前和提取后的不同过程对照，可进一步定位损失发生在裂解纯化还是检测反应。MIQE 指南要求报告 RNA 质量、基因组 DNA 污染、逆转录、扩增效率和对照等信息，正说明一次吸光读数不能替代下游适用性验证。[^miqe-guidelines]

## 琼脂糖凝胶电泳 { #agarose-electrophoresis }

### 迁移、凝胶浓度与缓冲液 { #agarose-migration-buffer }

DNA 和 RNA 的磷酸骨架在常用缓冲 pH 下带负电，在电场中由阴极侧向阳极侧迁移。线性双链 DNA 的电荷大致随长度增加，琼脂糖网络对较长分子产生更大阻力，因而在合适范围内较短片段迁移较快。迁移率同时受琼脂糖浓度、电场、缓冲液离子强度、温度、构象和嵌入染料影响；普通凝胶给出相对于同胶 ladder 的表观长度，不是脱离条件的绝对分子尺。琼脂糖电泳的分析与回收基础可参见 Green 与 Sambrook 的方法综述。[^agarose-electrophoresis-source]

提高琼脂糖浓度通常缩小有效孔径，改善较短片段的分辨；降低浓度有利于较大片段进入和展开，但凝胶更脆。0.70%、1.0%、1.40% 和 2.0% 胶可构成由大片段到小片段的教学梯度，具体分辨范围须由琼脂糖类型、缓冲液、场强和分子长度标准（ladder）实测。

TAE（Tris–acetate–EDTA）缓冲容量相对较低，常用于需要后续回收或较长片段迁移的常规实验；TBE（Tris–borate–EDTA）缓冲容量较高，长时间运行时 pH 较稳定，常对部分较短片段有较好分辨。两者都可用于广泛片段范围，实际选择还受电压、运行时间、酶反应兼容性和实验室验证影响。磷酸盐体系（TPE）在部分历史方法中使用，但磷酸根或高盐带入会妨碍某些后续酶反应；因此不作为常规回收胶的默认缓冲液。配胶液与电泳槽液应采用同一缓冲体系和工作浓度，避免离子组成突变。

上样液中的甘油、蔗糖或其他密度成分使样品沉入孔内，溴酚蓝和二甲苯青等示踪染料显示前沿，并不代表 DNA 本身。下表近似位置未限定缓冲液、场强、染料配方和 DNA ladder，只用于说明示踪染料速度会随胶浓度改变，目标片段位置仍需由同胶标准判断。

溴酚蓝的颜色随酸碱条件改变，在常用近中性电泳液中呈蓝紫色；颜色变化不是核酸反应。部分历史上样液还加入 SDS 以终止或削弱残余蛋白／聚合酶作用，这并非所有 DNA 样品都需要的通用组分，过量去污剂反而可能改变样品进入凝胶的状态。

| 琼脂糖浓度 | 0.70% | 1.0% | 1.40% | 2.0% |
| --- | ---: | ---: | ---: | ---: |
| 溴酚蓝的近似等效位置 | 约 1 kb | 约 0.6 kb | 约 0.2 kb | 约 0.15 kb |
| 二甲苯青的近似等效位置 | 未记录 | 约 2 kb | 约 1.6 kb | 未记录 |

### 制胶、上样与运行 { #gel-casting-running }

一套课堂实验以 0.3 g 琼脂糖加入 30 mL TBE，得到名义 1% 凝胶；微波加热至完全透明，冷却到约 60 ℃ 后加入 3 μL `EB`，插梳并灌胶，凝固后让电泳液刚好覆盖胶面。`EB` 可能指溴化乙锭（ethidium bromide），但缺少储液浓度，因此这 3 μL 无法用于重建安全浓度。实际操作应使用经验证的染料配方，按其危害、成像光源、废物路线和是否影响迁移选择胶内染色或后染。

微波加热会造成延迟暴沸和热玻璃烫伤；容器应留足空间，间歇加热并在取出前观察。灌胶时气泡可用洁净枪头从侧面移除，不能用会划伤胶盘或引入污染的随手物品。梳子拔出后确认孔底完整、胶方向正确，核酸样品置于阴极侧。电泳槽加液、移动凝胶或开盖前断开电源，不能把“槽盖盖好”仅理解为防蒸发。

样品应在洁净管或封口膜上与上样缓冲液混匀，避免以手套作为混合表面；枪头进入缓冲液并停在孔口上方，缓慢排尽液体但不排出空气，以免污染或把样品推出孔外。泳道位置和 ladder 必须预先记录；边缘泳道是否可用取决于胶盘、温度和设备，可先用缓冲液或对照样品验证。过量 DNA、盐或颗粒会造成拖尾、孔内滞留和局部导电异常。

约 5 V/cm 可作为常规起始条件，其中距离应按两电极间距而不是凝胶长度计算；温度、缓冲容量和目标片段会改变合适场强。高场强使迁移加快，也会增加焦耳热、压缩高分子片段的分辨并造成弯曲带。运行中记录电压、电流、时间、缓冲液批次和温度，观察气泡和染料方向确认回路与极性，而不是只等待某条示踪染料到达固定位置。

### 成像与条带解释 { #gel-imaging-interpretation }

嵌入染料与核酸结合后产生荧光，条带亮度在经验证的范围内可反映该位置的核酸质量。染料对双链、单链、构象和序列的响应可能不同，成像也会饱和；因此未知样品必须与适当质量和长度标准同胶，并保存未过曝原图。Ethidium bromide 应按机构危害评估和废物规定处理；替代染料也须查阅 SDS，不能仅凭商品名推定无害。

短波 UV 可损伤核酸并降低后续克隆或连接效率，需要切胶回收时可缩短曝光、采用与染料相容的较长波长 UV 或蓝光方案，并设置回收对照。图像裁切、亮度调整和泳道拼接必须保留原始文件和完整胶图；若为展示而拼接，应清楚标出边界。

条带位置的解释应遵循分子状态。限制性酶切完全的线性片段可与线性 ladder 比较；未切质粒受拓扑影响；高分子基因组 DNA 滞留在孔口可能代表分子很长，也可能是过载、未裂解组织或蛋白／多糖聚集；连续拖尾可能来自降解、机械剪切、核酸酶、盐、上样过量或运行过热。凝胶是定位问题的证据，不应把一个图形绑定为唯一原因。

### RNA、超大 DNA 与其他电泳模式 { #rna-pfge-electrophoresis }

RNA 具有稳定的二级结构，天然条件下同长度分子可能因构象不同而迁移不同。甲醛—琼脂糖、乙二醛等变性体系先破坏多数二级结构，再按长度观察较长 RNA；甲醛具有显著化学危害，配胶和废物必须纳入通风与机构 SOP。短 RNA 或单核苷酸级分辨通常改用含尿素的变性聚丙烯酰胺凝胶。常规非变性琼脂糖胶可作快速完整性筛查，但不能替代需要精确长度解释的变性分析。[^denaturing-rna-gel]

普通直流场中，极长 DNA 会沿电场方向取向，大小不同的分子迁移率逐渐难以区分。脉冲场凝胶电泳（PFGE）交替改变电场方向，使大分子不断重新取向，重新取向时间随长度变化，从而分开染色体大小的 DNA。Schwartz 与 Cantor 1984 年用这种思想分离了完整酵母染色体 DNA。[^pulsed-field-gel] PFGE、场反转和普通凝胶覆盖的尺寸范围不同；样品塞制备、脉冲时间、角度、温度和总运行时长都需匹配目标，不能把普通胶的电压和分子量标准直接照搬。

## 故障定位与结果交付 { #troubleshooting-reporting }

| 观察 | 优先检查 | 进一步区分 |
| --- | --- | --- |
| 总量低 | 输入是否准确、裂解是否完全、是否超过／低于固相范围、洗脱是否到膜中央 | 提取前 spike-in 与提取后 spike-in；重复洗脱是否只是在稀释 |
| 吸光浓度远高于荧光浓度 | RNA、游离核苷酸、酚、胍盐或其他 260 nm 吸收物 | 查看完整光谱、做目标选择性荧光和核酸酶处理对照 |
| 260/230 低或谱形异常 | 空白是否匹配、胍盐／酚／糖／EDTA 是否残留、样品是否太稀 | 再纯化或稀释后做功能反应；不根据比值猜唯一污染物 |
| 质粒样品黏稠、孔内有高分子带 | 菌体是否过量、重悬是否完全、碱裂解后是否涡旋、吸取是否扰动沉淀 | 单切线性化、未切对照和基因组 DNA 特异检测 |
| 植物 DNA 褐色或难以酶切 | 组织多酚／多糖、还原与吸附条件、醇和盐共沉淀 | 比较幼嫩组织、PVP／PVPP 条件、再纯化及内参酶切／扩增 |
| 高分子 DNA 明显拖尾 | 取样降解、核酸酶、研磨／吹打／涡旋和冻融 | 过程分段取样；用适合高分子范围的片段分析，而非普通 ladder 外推 |
| RNA 低分子拖尾、rRNA 峰消失 | 取样延迟、RNase、反复冻融、碱性或高温暴露 | 同批完整样本、RIN／相应片段指标、不同长度扩增子或 5′–3′ 检验 |
| DNA 凝胶无迁移或方向反 | 电源、电极、内外槽液面、缓冲液工作浓度与极性 | 看电极气泡、示踪染料方向和实际电流；断电后再检查装配 |
| 条带弯曲、扩散或泳道互串 | 电压和温升、缓冲液耗尽、胶厚、上样盐和过载 | 记录实际电流／温度，降低场强或负载并使用新鲜同体系缓冲液 |

可复现实验记录至少包括样本来源与保存、输入量、提取方法和试剂批次、任何偏离、裂解与混匀方式、离心 RCF 与温度、纯化和洗脱体积、核酸酶处理、浓度方法及原始读数、完整性图或指标、抑制试验、凝胶配方、缓冲体系、场强、时间、ladder、染料、成像条件和完整原图。最终报告应把“产量合格”“光谱可接受”“长度满足要求”“下游反应可用”分别陈述；其中任何一项都不能替另外三项背书。

## 参考资料与延伸阅读 { #references }

- Green, M. R. & Sambrook, J. [Analysis of DNA by Agarose Gel Electrophoresis](https://pubmed.ncbi.nlm.nih.gov/30602561/). *Cold Spring Harbor Protocols* (2019).
- Bustin, S. A. et al. [The MIQE Guidelines: Minimum Information for Publication of Quantitative Real-Time PCR Experiments](https://pubmed.ncbi.nlm.nih.gov/19246619/). *Clinical Chemistry* 55, 611–622 (2009).
- NCI. [Best Practices for Biospecimen Resources, 4th edition](https://dctd.cancer.gov/data-tools-biospecimens/biospecimens-biobanks/resources/best-practices/2026-4th-edition-nci-best-practices.pdf) (2026).
- Thermo Fisher Scientific. [NanoDrop nucleic acid technical reference](https://www.thermofisher.com/TFS-Assets/CAD/manuals/ts-nanodrop-nucleicacid-olv-r2.pdf)；[Qubit dsDNA assay user guide](https://documents.thermofisher.com/TFS-Assets/LSG/manuals/MAN0019617_Qubit_1X_dsDNA_BR_Assay_UG.pdf).

[^extraction-bias]: Roopnarain, A. et al. [Biases during DNA extraction affect bacterial and archaeal community profile of anaerobic digestion samples](https://pubmed.ncbi.nlm.nih.gov/29071172/). *3 Biotech* 7, 375 (2017)。研究比较不同提取方法的产量、抑制物与群落代表性，正文据此说明裂解和纯化可成为组成偏倚来源，不把某一方法推广为所有样本的最佳方案。
[^boom-silica]: Boom, R. et al. [Rapid and simple method for purification of nucleic acids](https://pubmed.ncbi.nlm.nih.gov/1691208/). *Journal of Clinical Microbiology* 28, 495–503 (1990)。原文以胍硫氰酸盐和二氧化硅颗粒从多类样本回收 DNA／RNA，也报告 DNA 可发生明显剪切，说明“硅法”不自动保证高分子完整性。
[^birnboim-doly]: Birnboim, H. C. & Doly, J. [A rapid alkaline extraction procedure for screening recombinant plasmid DNA](https://academic.oup.com/nar/article/7/6/1513/2380972). *Nucleic Acids Research* 7, 1513–1523 (1979)。
[^ctab-plant-dna]: Murray, M. G. & Thompson, W. F. [Rapid isolation of high molecular weight plant DNA](https://pmc.ncbi.nlm.nih.gov/articles/PMC324241/). *Nucleic Acids Research* 8, 4321–4325 (1980)。
[^hmw-dna-qc]: PacBio, [Preparing DNA for PacBio HiFi sequencing: extraction and quality control](https://www.pacb.com/literature/technical-note-preparing-dna-for-pacbio-hifi-sequencing-extraction-and-quality-control/)。这是当前平台技术资料，正文只据其说明高分子完整性须独立于浓度和纯度测量；具体输入量随建库版本变化，不写成通用阈值。
[^rnase-control-source]: Thermo Fisher Scientific, [Avoiding RNase Contamination](https://tools.thermofisher.com/content/sfs/manuals/MAN0011925_Avoiding_RNase_Contamination_UG.pdf)；DEPC 危害见 PubChem [Laboratory Chemical Safety Summary](https://pubchem.ncbi.nlm.nih.gov/compound/3051)。前者保留历史去 RNase 路线，后者用于校准皮肤、眼和呼吸道刺激风险；实际控制仍服从本机构 SDS 与设备兼容性。
[^agpc-rna]: Chomczynski, P. & Sacchi, N. [Single-step method of RNA isolation by acid guanidinium thiocyanate–phenol–chloroform extraction](https://pubmed.ncbi.nlm.nih.gov/2440339/). *Analytical Biochemistry* 162, 156–159 (1987)；后续方法说明见二位作者的 [twenty-something years on](https://www.nature.com/articles/nprot.2006.83)。
[^nucleic-acid-quality]: National Cancer Institute, [NCI Best Practices for Biospecimen Resources, 4th edition](https://dctd.cancer.gov/data-tools-biospecimens/biospecimens-biobanks/resources/best-practices/2026-4th-edition-nci-best-practices.pdf) (2026)，Appendices 的 nucleic acid quality control 部分。
[^spectral-fluorescence-qc]: 吸收比值、全谱污染与低浓度边界见 Thermo Fisher Scientific [NanoDrop technical reference](https://www.thermofisher.com/TFS-Assets/CAD/manuals/ts-nanodrop-nucleicacid-olv-r2.pdf)；dsDNA 选择性荧光的测量对象与校准见 [Qubit assay user guide](https://documents.thermofisher.com/TFS-Assets/LSG/manuals/MAN0019617_Qubit_1X_dsDNA_BR_Assay_UG.pdf)。两类资料均为具体仪器／试剂说明，正文仅提炼测量原理，不把产品范围推广为所有荧光或吸光平台的性能。
[^rna-integrity-number]: Schroeder, A. et al. [The RIN: an RNA integrity number for assigning integrity values to RNA measurements](https://pmc.ncbi.nlm.nih.gov/articles/PMC1413964/). *BMC Molecular Biology* 7, 3 (2006)。
[^miqe-guidelines]: Bustin, S. A. et al. [The MIQE Guidelines](https://pubmed.ncbi.nlm.nih.gov/19246619/). *Clinical Chemistry* 55, 611–622 (2009)。正文只引用与上游 RNA／DNA 质量、抑制、污染和报告有关的部分；扩增设计详见后续实验页。
[^agarose-electrophoresis-source]: Green, M. R. & Sambrook, J. [Analysis of DNA by Agarose Gel Electrophoresis](https://pubmed.ncbi.nlm.nih.gov/30602561/). *Cold Spring Harbor Protocols* (2019), doi:10.1101/pdb.top100388。
[^denaturing-rna-gel]: Rio, D. C. et al. [Denaturation and electrophoresis of RNA with formaldehyde](https://cshprotocols.cshlp.org/content/2015/2/pdb.prot080994.abstract). *Cold Spring Harbor Protocols* (2015)；长 RNA 的替代流程与染色边界见 Masek et al., [Separation of long RNA by agarose–formaldehyde gel electrophoresis](https://pmc.ncbi.nlm.nih.gov/articles/PMC3755752/) (2013)。
[^pulsed-field-gel]: Schwartz, D. C. & Cantor, C. R. [Separation of yeast chromosome-sized DNAs by pulsed field gradient gel electrophoresis](https://pubmed.ncbi.nlm.nih.gov/6373014/). *Cell* 37, 67–75 (1984)。
