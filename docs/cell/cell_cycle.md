# 细胞周期与细胞分裂

细胞从一次分裂结束走向下一次分裂，需要积累足以维持两个子细胞的物质，复制整套遗传信息，再把复制产物连同细胞质结构分配出去。这些彼此制约的工作被组织成有方向的状态转换；周期蛋白依赖性激酶建立推进力，受控蛋白水解使关键转换难以倒退，检查点网络则在复制受阻、DNA 损伤或染色体附着异常时延缓转换。由此形成的细胞周期既是一个振荡系统，也是一套将生长、遗传与空间力学耦联起来的控制系统。[^cell-cycle-control][^osm-cell-cycle]

## 周期状态与复制—分裂耦联 { #cycle-states }

增殖中的典型真核体细胞依次经历 G$_1$、S、G$_2$ 和 M 期。G$_1$ 期承接上一次胞质分裂，细胞恢复间期结构、积累生物量并整合营养、促分裂信号与组织环境；S 期完成核 DNA 复制并建立姐妹染色单体间的黏连；G$_2$ 期延续生长，同时为染色体分离和分裂装置重构作准备；M 期包括有丝分裂与通常从后期开始的胞质分裂。相位名称描述一组占优势的分子状态，显微镜下的形态边界与控制网络的切换并不总在同一瞬间发生。

| 状态 | DNA 与染色体的主要事件 | 控制系统的代表状态 | 常见判读边界 |
| --- | --- | --- | --- |
| G$_1$ | 复制起点获得许可，染色体各含一条染色单体 | CDK 活性较低，随后由 cyclin D／E 相关 CDK 推高 | 与静息 G$_0$ 常有相同 DNA 含量 |
| S | 起点依时序启动，复制叉推进，姐妹染色单体黏连建立 | S-CDK 与 DDK 促进起始，同时抑制重新许可 | DNA 含量介于复制前后，复制压力可显著延长此期 |
| G$_2$ | 复制大体结束，姐妹染色单体仍相连 | cyclin A／B–CDK1 逐步蓄势，损伤与复制压力可抑制入 M | 仅凭 DNA 含量不能与 M 期区分 |
| M | 染色体凝缩、附着、分离，随后重建细胞核并分割胞质 | M-CDK 先升高；APC/C 依次清除 securin 与 M cyclin | 胞质分裂同有丝分裂后半程重叠 |

四相框架会随细胞类型和发育阶段压缩或延展。许多早期胚胎在母源物质充足时交替进行短 S 期与 M 期，G$_1$、G$_2$ 极短甚至难以辨认；进入静息的细胞可以较长时间维持 G$_0$ 状态，仍保持代谢、感知环境并有机会重返周期；终末分化细胞则可能长期缺乏再进入能力。单细胞追踪还显示，同一培养群体的子细胞可在有丝分裂退出时便分化为 CDK2 活性上升或保持低水平的两条轨迹，说明增殖—静息决定可以跨母子细胞继承，并覆盖晚 G$_1$ 以外的决定窗口。[^proliferation-quiescence]

## 周期蛋白—CDK 振荡与方向性 { #cyclin-cdk-engine }

### 底物磷酸化驱动状态转换 { #cdk-activation }

周期蛋白依赖性激酶（cyclin-dependent kinase，CDK）的催化亚基需要结合周期蛋白（cyclin）才能有效识别并磷酸化底物。脊椎动物周期中，cyclin D–CDK4/6 主要响应 G$_1$ 期生长信号，cyclin E–CDK2 推动 G$_1$/S 转换，cyclin A–CDK2／CDK1 支持 S、G$_2$ 进程，cyclin B–CDK1 则建立进入 M 期所需的高 CDK 状态。具体配对具有物种和细胞类型差异：酵母可以用一个主要 CDK 依次更换周期蛋白，哺乳动物不同 CDK 间也存在部分代偿，这组名称表示主要功能阶段，而非每次转换唯一的复合物。[^cell-cycle-control]

周期蛋白结合只完成 CDK 激活的一部分。CDK 激活激酶（CDK-activating kinase，CAK）对 CDK1 的 Thr161 等活化环位点进行磷酸化；Wee1／Myt1 在 Thr14、Tyr15 加入抑制性磷酸，CDC25 磷酸酶将这些抑制性磷酸移除。Thr161 与 Thr14／Tyr15 的修饰具有相反作用，分别由不同的酶建立或解除。活化的 cyclin B–CDK1 又能促进 CDC25、抑制 Wee1，形成正反馈，使入 M 从缓慢积累转成陡峭切换。Cip/Kip 家族的 p21、p27 和 INK4 家族的 p16 等 CDK 抑制因子（CDK inhibitor，CKI）则通过结合 CDK 或 cyclin–CDK 复合物改变阈值。

### 受控降解重置周期引擎 { #regulated-proteolysis }

磷酸化多数可逆，周期方向性还依赖泛素化后的选择性降解。Skp1–Cullin–F-box（SCF）类 E3 泛素连接酶通常识别已经磷酸化的底物，可清除部分 CKI 和 G$_1$ 调节物；后期促进复合物／周期体（anaphase-promoting complex/cyclosome，APC/C）在不同激活因子协助下接管 M 期后半程与下一个 G$_1$。APC/C$^{Cdc20}$ 降解安全蛋白（securin），释放分离酶（separase）；随后对 cyclin B 等底物的清除使 M-CDK 活性下降。APC/C$^{Cdh1}$ 在有丝分裂退出和 G$_1$ 维持较低 CDK 状态，直至新一轮周期承诺建立。蛋白合成、磷酸化反馈和降解共同产生振荡；周期蛋白快速周转是核心环节，CDK 的丰度、定位和周转也可变化。

酵母 `cdc` 突变、蛙卵成熟促进因子（maturation-promoting factor，MPF）以及海胆卵中周期性合成并在每轮卵裂时消失的 cyclin，分别从遗传学、生化转移实验和蛋白周转三个方向汇聚到同一控制框架。CDK1–cyclin B 是经典 MPF 的核心，大量底物与磷酸酶网络共同产生染色体凝缩、核被膜解体、纺锤体形成和膜系统重排。[^cell-cycle-history]

## G$_1$ 的增殖承诺与复制许可 { #g1-s-commitment }

### 外界信号经 RB–E2F 接入周期引擎 { #restriction-point }

动物细胞在 G$_1$ 期整合 mitogen、营养、能量、细胞大小、黏附和密度等信息。促分裂信号可经 Ras–ERK、PI3K–AKT 等网络提高 cyclin D 表达或稳定性，cyclin D–CDK4/6 与随后增强的 cyclin E–CDK2 改变 RB 家族蛋白对 E2F 的约束，使 DNA 复制、核苷酸合成和周期控制基因逐步进入适合 S 期的表达状态。相应的受体与时空编码机制见[细胞信号转导](cell_signaling.md#enzyme-linked-receptors)。[^restriction-point]

经典限制点指细胞在撤去促分裂原（mitogen）后仍能完成本轮 S 期和分裂的承诺状态。活细胞研究把这一难以逆转的行为进一步定位到 cyclin E–CDK2 触发、Emi1 正反馈锁定的 APC/C$^{Cdh1}$ 失活；RB 磷酸化可先于这个转换，处于两者之间的细胞仍可能在应激下返回静息。限制点因而是一段由多个耦联开关形成的决定窗口。组织中的静息还受母细胞经历、局部密度和代谢状态影响，决定窗口相对 S 期的时间也会变化。[^apccdh1-commitment]

### 复制许可把“装载”与“点火”分开 { #replication-licensing }

每条染色体含许多潜在复制起点；保证每段 DNA 每轮只复制一次的关键，是把解旋酶装载与复制起始放在不同 CDK 状态中。低 CDK 活性的晚 M／G$_1$ 期，起点识别复合体（origin recognition complex，ORC）、CDC6 与 CDT1 把 MCM2–7 双六聚体装到起点 DNA，形成复制前复合体（pre-replicative complex，pre-RC）。进入 S 期后，S-CDK 与 Dbf4 依赖性激酶（Dbf4-dependent kinase，DDK）促进 Cdc45、GINS 等组分同 MCM 组装成活性 Cdc45–MCM–GINS（CMG）解旋酶并启动复制叉。此时较高 CDK 活性、CDT1 的降解或定位变化，以及后生动物 geminin 对 CDT1 的抑制共同阻止新的 MCM 装载；直到 M-CDK 下降，许可窗口才重新开放。[^replication-licensing]

被许可的潜在起点多于正常条件下实际启动的起点，其中一部分可在邻近复制叉受阻时作为备用起点。所有复制叉的推进与终止共同决定复制是否完成，单一 S 期促进因子浓度只能反映其中一部分控制。起点选择、复制叉组成、领先链／后随链合成及终止机制见[DNA复制与逆转录](../molecular/dna_replication.md)。

## 检查点网络延缓危险转换 { #cell-cycle-checkpoints }

检查点是由异常结构持续产生抑制信号的监控网络。它们在周期的不同位置通过压低 CDK、阻止 APC/C 激活或改变转录与蛋白稳定性来争取处理时间。检查点缺陷的细胞仍可能继续分裂，却更易积累断裂、重排和非整倍体。

### DNA 损伤与复制压力响应 { #dna-damage-replication-checkpoints }

双链断裂常由 MRN 复合物参与招募 ATM，带有 RPA 包被单链 DNA 的复制叉与 DNA 接头则强烈激活 ATR–ATRIP；二者的底物与情境存在交叠。ATM–CHK2、ATR–CHK1 等轴可抑制 CDC25、增强 Wee1 作用，降低 CDK2／CDK1 活性，从而减慢新起点启动、稳定受阻复制叉并延迟入 M。DNA 损伤还可稳定 p53，使 p21 增加并维持较长的 G$_1$/S 抑制。修复、复制重启、细胞衰老和受调控死亡是可能的后续去向，强度与持续时间由损伤类型、细胞状态和组织环境共同决定。[^dna-damage-checkpoints]

G$_2$/M 检查点对复制完成度的判断来自未复制 DNA、复制叉结构、断裂及其信号产物。复制压力在 S 期内部便可改变起点使用和叉速，并可延续到 G$_2$。DNA 损伤的化学来源、修复通路选择与突变后果见[DNA损伤、修复与突变](../molecular/dna_repair.md)。

### 纺锤体组装检查点 { #spindle-assembly-checkpoint }

未附着动粒以 MPS1、MAD1–MAD2、BUB1、BUBR1 和 BUB3 等组装信号平台，促进形成含 CDC20 的有丝分裂检查点复合物（mitotic checkpoint complex，MCC）；MCC 抑制 APC/C$^{Cdc20}$，使 securin 持续保护 separase，延缓姐妹染色单体分离。一个未附着动粒即可在许多动物细胞中显著延迟后期。双极附着产生的力学状态同时帮助 Aurora B 区分并纠正同向、单向或一条动粒连两极等错误连接；附着纠错与检查点信号彼此耦联，但使用不同传感步骤。某些 merotelic 连接可以留下足够微管而较少触发 MAD2，成为后期滞后染色体的重要来源。[^spindle-checkpoint]

## 入 M 与双极纺锤体的建立 { #mitotic-entry-spindle }

cyclin B–CDK1 的陡升把间期细胞转入 M 期：condensin、topoisomerase II 与 cohesin 调控共同把复制后的染色质组织成短粗而可分离的染色体；核纤层、核孔及多种核被膜连接蛋白被磷酸化，使许多动物和植物细胞进入核被膜开放的有丝分裂；间期微管阵列变得短而动态，转而形成纺锤体。染色体的分子结构与动粒身份见[细胞核、染色质与核糖体](nucleus_chromatin.md#chromosome-architecture)，微管动态与马达的共同原理见[细胞骨架与细胞运动](cytoskeleton.md#division-cytoskeleton)。[^mitosis-textbook]

前期、前中期、中期、后期与末期是连续动力学过程中的形态路标。前期可见染色体凝缩和纺锤极分离；核被膜开放后进入前中期，微管接触动粒并反复形成、拆除连接；达到双极附着的染色体在赤道附近整列；后期发生姐妹染色单体分离和纺锤极远离；末期随 M-CDK 下降而重建核被膜、核孔和核仁，染色体去凝缩。胞质分裂通常从后期开始，与有丝分裂后半程重叠。

典型动物细胞以复制后的两个中心体作为主要纺锤极组织中心，动粒微管连接染色体，极间微管在中部反向重叠，星体微管把纺锤体接到皮层。染色质附近的 Ran-GTP、augmin 介导的既有微管扩增以及微管交联与马达还能在无中心体条件下自组织出双极纺锤体；高等植物体细胞和许多动物卵母细胞正是重要实例。部分真菌在完整核被膜内完成封闭式有丝分裂，纺锤体由核膜上的 spindle pole body 组织。中心体和核被膜开放方式随谱系变化，双极几何与对每条复制染色体建立可调连接才是共同问题。

## 动粒附着、后期启动与有丝分裂退出 { #chromosome-segregation }

动粒最初捕获微管侧壁，随后形成能跟随微管加聚与解聚的端向连接。姐妹动粒连接同一极称同极附着（syntelic attachment），只有一个姐妹动粒连接微管称单侧附着（monotelic attachment），一侧动粒同时连接两极称混合附着（merotelic attachment）；这些中间态可经微管周转、Aurora B 调节和力学选择反复纠正。染色体整列由动粒微管长度变化、极向通量、染色体臂排斥力及 kinesin／dynein 等马达共同产生，MAD、BUB 则主要生成检查点信号。

所有动粒获得可接受的连接后，MCC 生成减少，APC/C$^{Cdc20}$ 得以泛素化 securin。释放的 separase 切开黏连蛋白（cohesin）的 kleisin 亚基，姐妹染色单体同步失去黏连并进入后期。动粒微管的解聚和通量使染色体向极移动，构成后期 A；反向重叠的极间微管在 kinesin 等作用下滑动、延长，皮层 dynein 可牵引星体微管，使两极进一步分离，构成后期 B。不同细胞中，微管动力学和多类马达对两种运动的贡献各异。[^separase-cohesin]

APC/C 对 cyclin B 的清除和蛋白磷酸酶恢复活性，使 M-CDK 底物逐步去磷酸化。纺锤体拆解、染色体去凝缩、核被膜和核孔重装以及复制许可重开由此协调，各过程按各自动力学完成。膜性细胞器在分裂前后的碎裂、分配和重建依赖细胞器数量、膜接触、骨架运输与随机分配等多种机制；有丝分裂负责核染色体分离，细胞器继承还需额外的质量控制与分配系统。

## 胞质分裂完成空间分配 { #cytokinesis }

### 动物细胞的分裂沟与切断 { #animal-cytokinesis }

动物细胞在后期纺锤体中央建立局部 RhoA 活性区。centralspindlin、ECT2 及星体微管—皮层信号帮助确定赤道皮层位置，随后 actin、myosin II 和多种交联蛋白形成动态收缩环。环收缩与皮层重塑使分裂沟向内推进，胞内膜泡运输补充和重排膜面；中央纺锤体被压缩成中体，两个子细胞由狭窄的 intercellular bridge 暂时连接。最终 ESCRT-III 等膜重塑机器在中体侧方建立切断位点，完成 abscission。若桥中仍有染色质或机械张力过高，Aurora B 相关的切断检查机制可以延迟这一末步，减少染色体桥被直接剪断的风险。[^animal-cytokinesis]

纺锤体位置同时决定分裂面的方向。对称分裂通常让两个子细胞获得相近体积，不对称分裂则可借助皮层极性复合物、定向星体微管和偏心纺锤体，使细胞大小、命运决定因子或微环境接触不同。这里的“对称”指细胞内容与后续命运，不代表两套染色体可以不等量；染色体错误分配属于另一层机制。

### 植物与真菌的分隔结构 { #plant-fungal-cytokinesis }

陆生植物细胞受到细胞壁约束，在两套子核之间由成膜体（phragmoplast）引导细胞板从中央向外建立。成膜体是反平行微管、actin 和相关因子的动态阵列；囊泡沿其运输并融合成管泡网络，网络逐渐展开、成熟为含新质膜和壁材料的细胞板，最终同母细胞质膜及原有细胞壁相接。前期皮层的前期带（preprophase band）可预示分裂面位置，但在核被膜解体前后已经消失。成膜体提供动态引导，细胞板则成为新建的分隔结构。[^plant-cytokinesis]

真菌常以 actomyosin 环收缩并在其后合成隔膜；芽殖酵母把分裂位点预先限定在芽颈，裂殖酵母则在细胞中部建立环。某些细胞完成核分裂却暂不分割胞质，形成合胞体或多核细胞。胞质分裂与核周期可以按细胞类型重新耦联。

## 减数分裂重写染色体配对与分离规则 { #meiosis }

减数分裂在一次 S 期之后连续进行两次染色体分离。前期 I 中，同源染色体借助轴结构、配对与联会复合体靠近；程序化 DNA 双链断裂经同源重组修复，其中一部分形成相互交换（reciprocal crossover）。crossover 与姐妹染色单体臂上的黏连共同维持可见的交叉（chiasma），使一对同源染色体成为能在减数第一次分裂纺锤体上产生张力的二价体。细线期、偶线期、粗线期、双线期和终变期描述轴形成、联会、重组与去联会逐步变化的染色体形态；不同物种对联会复合体的依赖和重组时序存在差异。基因组主体的复制完成于此前的减数前 S 期，偶线期或粗线期的修复合成属于局部 DNA 修复；显微镜下重组结与最终 crossover 的对应关系也随系统而异。[^meiosis-cohesin]

减数第一次分裂的姐妹动粒共同朝向同一极，而同源染色体的动粒朝向相反两极。后期 I，separase 切开染色体臂上的减数分裂特异性 cohesin（许多物种以 Rec8 为 kleisin），释放 chiasma 并分开同源染色体；着丝粒周围的 Rec8 由守护蛋白—蛋白磷酸酶 2A（shugoshin–protein phosphatase 2A，shugoshin–PP2A）保护，姐妹染色单体仍保持连接。中间期不再复制 DNA。减数第二次分裂重新建立姐妹动粒的双极附着，保护解除后切开剩余着丝粒黏连，姐妹染色单体才在后期 II 分离。由此，同一套 APC/C–separase–cohesin 逻辑通过动粒取向和分步解除黏连，被改造成先减数、后等数的两次分离。重组概率、独立分配和遗传图距见[遗传重组与连锁分析](../genetics/linkage_mapping.md)。

卵母细胞可在减数前期 I 或中期 II 停留很久，精子发生与植物孢子发生也具有各自的时空调节；停滞期由信号、磷酸化和蛋白稳定性维持在特定稳态。无交叉同源体、性染色体和多倍体还需要额外的配对与分离方案，其机制随物种差异显著。

## 周期变体与倍性变化 { #cycle-variants }

有丝周期是周期网络的一种输出。内周期（endocycle）在 G 与 S 状态间重复而跳过完整 M 期；内有丝分裂（endomitosis）则进入部分 M 期后跳过或未完成核分裂、胞质分裂。两者都可生成多倍体细胞，例如昆虫和植物的某些高代谢组织、哺乳动物滋养层或巨核细胞。核分裂而不胞质分裂会形成多核细胞，细胞融合也可产生多核体；相似形态可由不同过程形成。多倍化可以支持细胞增大、基因剂量与组织修复，也会改变有丝分裂和基因组稳定性，功能需按组织与发育阶段判断。[^endoreplication]

细菌的复制与分裂也能在快速生长时重叠：一轮染色体复制尚未完成，子代复制起始已经发生。细菌使用区别于真核核被膜、有丝纺锤体和 G$_1$–S–G$_2$–M 的控制系统。跨系统守恒的是复制一次、建立可分离连接、正确分配和重置许可等控制逻辑，具体显微形态和装置则随谱系而变。

## 周期状态的实验判读 { #cell-cycle-evidence }

细胞周期是一条动态轨迹，群体快照读取的是其中某个投影。DNA 染料流式可把复制前、S 期和复制后 DNA 含量分开，却把 G$_0$ 与 G$_1$、G$_2$ 与 M 混在一起；加入 Ki-67、磷酸化组蛋白 H3、cyclin 或 RNA 含量等标记后才能继续区分。短脉冲 5-乙炔基-2′-脱氧尿苷（5-ethynyl-2′-deoxyuridine，EdU）／5-溴-2′-脱氧尿苷（5-bromo-2′-deoxyuridine，BrdU）标记直接读出当时的 DNA 合成，脉冲—追踪（pulse–chase）可追踪队列推进。以 Cdt1、geminin 降解片段构建的荧光泛素化细胞周期指示器（fluorescent ubiquitination-based cell cycle indicator，FUCCI）允许在活细胞和组织中连续观察 G$_1$ 与 S/G$_2$/M 状态，但颜色来自特定降解回路，仍需同复制、CDK 活性或分裂形态交叉验证。[^cell-cycle-measurement]

| 证据 | 主要读出 | 关键解释边界 |
| --- | --- | --- |
| DNA 含量流式／成像 | 复制前、复制中、复制后细胞比例及倍性 | 2C 不能区分 G$_0$ 与 G$_1$；4C 不能区分 G$_2$、M 与部分多倍体状态 |
| EdU／BrdU 脉冲与追踪 | 正在复制的细胞、S 期进入和队列推进 | 掺入与检测本身可扰动复制，不能直接代表后续成功分裂 |
| phospho-H3、cyclin B、动粒与纺锤体标记 | M 期进入、染色体形态及附着结构 | 单一标记难以覆盖整个 M 期，也不能证明分配无误 |
| FUCCI、CDK 活性传感器与延时成像 | 单细胞状态转换、停留时间和母女细胞轨迹 | 报告器动力学、表达量和成像光毒性会改变可见边界 |
| 急性抑制、诱导降解与遗传救援 | 某调节物对转换是否必要及作用时间窗 | 药物脱靶、慢性适应和细胞系背景需独立对照 |

机械振荡收集圆形 M 期细胞、密度分离，以及 thymidine、hydroxyurea、nocodazole 等阻断—释放方法可以富集某一状态，却会同时改变复制压力、微管、代谢、细胞大小和应激反应。同步化后的群体也会迅速失去同步，且“富集”只表示目标状态的比例提高。研究周期依赖性表型时，宜把未处理单细胞追踪、不同原理的富集方法和多标记测量结合；具体培养、流式与同步化操作见[细胞培养、分离与组分分析](../exptech/cell/culture_fractionation.md)。[^synchronization-artifacts]

## 参考资料与延伸阅读 { #references }

[^cell-cycle-control]: 周期状态、cyclin–CDK、Wee1／CDC25、SCF、APC/C 与检查点的一般框架见 Alberts 等的[细胞周期控制系统章节](https://www.ncbi.nlm.nih.gov/books/NBK26824/)。
[^osm-cell-cycle]: 周期状态—控制系统—M 期的组织实质性改编自 osm.bio《[第十七章 细胞周期](https://osm.bio/index.php?title=第十七章_细胞周期&oldid=11577)》固定版本，贡献者为长河、Sofia，原文按 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans) 许可；相关内容经教材和所列研究交叉核验。
[^proliferation-quiescence]: 有丝分裂退出时 CDK2 活性分叉及母细胞状态对增殖—静息决定的单细胞证据见 Spencer 等的[研究](https://pubmed.ncbi.nlm.nih.gov/24075009/)。
[^cell-cycle-history]: `cdc` 基因、CDK 与 cyclin 发现的历史脉络见 Nobel Prize Outreach 的[2001 年生理学或医学奖说明](https://www.nobelprize.org/prizes/medicine/2001/7743-the-nobel-prize-in-physiology-or-medicine-2001/)；海胆卵 cyclin 合成—降解的原始观察见 Evans 等的[研究](https://pubmed.ncbi.nlm.nih.gov/6134587/)。
[^restriction-point]: G$_1$ 期限制点、RB–E2F 与生长因子依赖的经典框架见 NCBI Bookshelf 的[限制点章节](https://www.ncbi.nlm.nih.gov/books/NBK6318/)。
[^apccdh1-commitment]: RB phosphorylation 与不可逆承诺之间的时间分离、APC/C$^{Cdh1}$–Emi1 bistable switch 见 Cappell 等的[活细胞研究](https://pubmed.ncbi.nlm.nih.gov/27368103/)。
[^replication-licensing]: ORC–CDC6–CDT1 装载 MCM、S 期 CMG 激活及高 CDK／geminin 防止重新许可见 Sclafani 与 Holzen 的[复制许可综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3032801/)。
[^dna-damage-checkpoints]: ATM／ATR、CHK1／CHK2、CDC25、p53–p21 与周期延迟的网络见 Reinhardt 与 Yaffe 的[DNA 损伤检查点综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC2699687/)。
[^spindle-checkpoint]: 动粒附着、MCC 对 APC/C$^{Cdc20}$ 的抑制及错误连接类型见 Musacchio 与 Salmon 的[纺锤体组装检查点综述](https://www.nature.com/articles/nrm2163)；单个未附着动粒与 MAD2 的证据见 Waters 等的[研究](https://pubmed.ncbi.nlm.nih.gov/9606210/)。
[^mitosis-textbook]: M 期形态路标、无中心体纺锤体、动粒连接、后期 A／B 与核被膜重建见 Alberts 等的[有丝分裂章节](https://www.ncbi.nlm.nih.gov/books/NBK26934/)及[M 期概述](https://www.ncbi.nlm.nih.gov/books/NBK26931/)。
[^separase-cohesin]: separase 切割 cohesin kleisin 足以触发酵母姐妹染色单体分离的直接证据见 Uhlmann 等的[研究](https://pubmed.ncbi.nlm.nih.gov/11081625/)。
[^animal-cytokinesis]: 收缩环、分裂沟定位、膜补充与胞质分裂时序的教材框架见 Alberts 等的[胞质分裂章节](https://www.ncbi.nlm.nih.gov/books/NBK26831/)；ESCRT-III 切断与染色质桥延迟机制见 Liu 与 Robinson 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6259594/)。
[^plant-cytokinesis]: preprophase band、成膜体动态和细胞板由中央向外形成见 Li、Sun 与 Ren 的[植物有丝分裂与胞质分裂综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4410512/)。
[^meiosis-cohesin]: 减数分裂前期染色体轴、同源体联会、姐妹动粒同向、Rec8 分步切割及 shugoshin–PP2A 保护见 Ishiguro 的[哺乳动物减数分裂 cohesin 综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7379579/)。
[^endoreplication]: endocycle、endomitosis 与发育性多倍化的共同控制逻辑见 Fox 与 Duronio 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3513989/)。
[^cell-cycle-measurement]: DNA 含量与 Ki-67 联合流式的判读见 Kim 与 Sederstrom 的[方法综述](https://pubmed.ncbi.nlm.nih.gov/26131851/)；FUCCI 报告器的设计和组织应用见 Sakaue-Sawano 等的[原始研究](https://pubmed.ncbi.nlm.nih.gov/18267078/)。
[^synchronization-artifacts]: serum starvation、thymidine 与 nocodazole 富集对细胞大小和核性质的持续影响见 Chen 等的[比较研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC3813296/)。
