# 电子传递与氧化磷酸化

糖酵解、丙酮酸氧化、三羧酸循环和脂肪酸分解把底物的电子汇集到 NADH、酶结合的 FADH$_2$ 或其他还原载体。线粒体呼吸链再让这些电子沿还原电势逐渐升高的方向流向氧，把一部分自由能保存为内膜两侧的质子动力势；ATP 合酶利用质子回流完成 ADP 的磷酸化。这两段通过同一跨膜梯度耦联，合称氧化磷酸化。

本页以哺乳动物线粒体为主线，并在需要时指出细菌、真菌和其他真核生物的差异。氧化还原势、电化学势与反应耦联的定量语言见[生物能学](bioenergetics.md)，还原当量来自哪些代谢步骤见[三羧酸循环](tca_cycle.md)及后续各分解代谢页，呼吸测定、差示光谱和人工电子受体等实验操作留给[生化与分子检测](../exptech/biochem_molecular/spectroscopy_assays.md)。

## 内膜把电子流与质子动力势连接起来 { #respiratory-chain-architecture }

线粒体外膜对许多小分子相对通透，内膜却对 H$^+$ 和多数离子高度不通透，并以嵴扩大反应表面。复合物 I、III、IV 把基质侧（N 侧）的质子移向膜间隙侧（P 侧），由此形成两项相加的驱动力：P 侧相对更正的膜电势差 $Delta\psi$，以及基质相对更碱的 $\Delta\mathrm{pH}$。常用质子动力势表示为

$$
\Delta p=\Delta\psi-\frac{2.303RT}{F}\Delta\mathrm{pH},
$$

但符号会随起点、终点和 $\Delta\mathrm{pH}$ 定义而变；解释数值前必须先说明方向。在线粒体通常条件下，膜电势项占较大比例。呼吸链建立的不是一份静止“质子库存”，而是电子传递、质子泵出、漏回、ATP 合成和其他内膜运输共同维持的非平衡稳态。[^respiratory-chain-overview]

两种移动载体把固定在内膜中的复合物连成电子通路。辅酶 Q（CoQ、泛醌）在脂双层中扩散，可依次接受两个电子和两个质子而形成半醌与泛醇 QH$_2$；细胞色素 c 位于膜间隙侧，是可溶、周边膜结合的血红素蛋白，每次只传递一个电子。CoQ 因而也是多个脱氢酶共享的双电子入口，细胞色素 c 则把复合物 III 的两个单电子输出逐个交给复合物 IV。

细胞色素 c 由核基因编码，先在胞质中合成为不含血红素的 apo 形式，再跨外膜进入膜间隙；holocytochrome c synthase 把血红素共价连接到保守 CXXCH 基序，形成成熟 holo 蛋白。成熟细胞色素 c 可在膜间隙水相与内膜表面之间移动，并非“固定在膜间隙”。还原型细胞色素的 $\alpha$、$\beta$ 与 Soret（$\gamma$）带适合用差示光谱辨认种类和氧化还原状态，但氧化型也有吸收光谱，不能用“无吸收峰”定义；详细峰位和测定方法迁往实验页。[^cytochrome-c-biogenesis]

## 复合物 I 与 II 把不同还原当量汇入 CoQ { #complexes-i-ii }

复合物 I，即 NADH:泛醌氧化还原酶，具有伸入基质的亲水臂和埋入内膜的膜臂。哺乳动物酶约有 45 个亚基，其中 14 个核心亚基在细菌与线粒体中保守；FMN 先接受 NADH 的两个电子，铁硫簇再把电子逐个传到 CoQ 结合腔。CoQ 的还原化学通过远距离构象和质子转移网络驱动膜臂工作，每氧化一个 NADH、转移两个电子，净泵出约 4 个 H$^+$。复合物 I 的精细耦联机制仍在研究，但“四质子计量”已有直接的比较测量支持。[^complex-i-structure][^complex-i-stoichiometry]

复合物 II 就是三羧酸循环中的琥珀酸脱氢酶。琥珀酸把电子交给酶结合的 FAD，随后经铁硫簇等中心还原 CoQ；这一过程不跨膜泵质子。这里的 FADH$_2$ 是催化循环中的酶结合中间状态，不是像 NADH 那样从溶液中扩散来“进入复合物 II”的通用电子载体。以琥珀酸为起点的电子绕过复合物 I，所以之后只能利用复合物 III 和 IV 建立梯度，ATP 计量也相应较低。

CoQ 池还接收线粒体甘油-3-磷酸脱氢酶、电子转移黄素蛋白:CoQ 氧化还原酶（ETF:QO）和二氢乳清酸脱氢酶等入口的电子。因此“从复合物 I 或 II 开始”只是最常用的教学主干，而不是完整的呼吸网络。各入口是否存在、由什么底物供电子以及与哪些代谢路径相连，随物种、组织和生理状态而变。

## Q 循环把双电子载体连接到细胞色素 c { #q-cycle }

复合物 III，又称细胞色素 $bc_1$ 复合物或泛醇:细胞色素 c 氧化还原酶，必须解决一个计量不匹配：QH$_2$ 可一次携带两个电子，而细胞色素 c 每次只接受一个。Q 循环用膜两侧的两个醌位点和分叉电子路径完成转换。QH$_2$ 在 P 侧的 Q$_o$ 位点氧化，两个质子释放到膜间隙；一个电子经 Rieske 2Fe–2S 中心和细胞色素 c$_1$ 交给细胞色素 c，另一个经细胞色素 b 的两个血红素送往 N 侧 Q$_i$ 位点。

两个 Q$_o$ 位点周转合在一起，才把 Q$_i$ 位点的 CoQ 先还原为半醌、再从基质侧摄取两个质子形成 QH$_2$。扣除被再生的 QH$_2$ 后，每净氧化一个 QH$_2$、还原两个细胞色素 c，P 侧出现 4 个 H$^+$，N 侧摄取 2 个 H$^+$。这是一种由醌在膜两侧分别氧化和还原形成的氧化还原回路，不应与复合物 I、IV 的蛋白质质子泵笼统视作同一机械过程。[^q-cycle]

## 复合物 IV 将电子交给氧并形成水 { #complex-iv }

复合物 IV，即细胞色素 c 氧化酶，含血红素 a、a$_3$ 及铜中心 Cu$_A$、Cu$_B$。四个还原型细胞色素 c 依次提供四个电子，氧在血红素 a$_3$—Cu$_B$ 双核中心被完全还原为两分子水。分步接收和严密配位使酶避免在正常催化循环中大量释放部分还原的氧中间体。

还原一分子 O$_2$ 时，复合物 IV 从基质侧摄取 8 个 H$^+$：其中 4 个进入生成水的化学反应，另有 4 个被泵到膜间隙。按两个电子和 $\tfrac{1}{2}$O$_2$ 记账，就是泵出 2 个 H$^+$，同时消耗 2 个基质侧“化学质子”。化学质子的消耗也有助于建立电化学梯度，但不能把它们再次计入“泵出质子数”。[^complex-iv-protons]

| 复合物 | 两电子的净电子反应 | 每两个电子的泵出量与代表性抑制剂 |
| --- | --- | --- |
| I | NADH → FMN／Fe–S → CoQ | 约 4 H$^+$；鱼藤酮、piericidin A、阿米妥类阻断 CoQ 端电子传递 |
| II | 琥珀酸 → FAD／Fe–S → CoQ | 0 H$^+$；TTFA、carboxin 等抑制该入口 |
| III | QH$_2$ → Rieske／细胞色素 b、c$_1$ → 2 cyt c | P 侧净出现 4 H$^+$；antimycin A 抑制 Q$_i$ 位点，myxothiazol／stigmatellin 作用于 Q$_o$ 位点 |
| IV | 2 cyt c → Cu／血红素中心 → $\tfrac{1}{2}$O$_2$ | 泵出约 2 H$^+$，另取 2 H$^+$ 生成水；氰化物、CO、叠氮化物和 H$_2$S 可抑制氧还原 |

这些抑制剂的选择性取决于剂量、物种、氧化还原状态和测定体系。旧材料把阿的平等化合物列成通用的“复合物 I 入口开关”，或把所有氰化物、CO 作用都归为共价不可逆抑制，都会掩盖真实机制。差示光谱、铁氰化物和亚甲蓝等人工受体适合用于定位受阻区段与测定酶活，但属于实验设计，不是生理电子通路。

## 超复合体组织呼吸链而不封闭电子池 { #respiratory-supercomplexes }

内膜中的呼吸复合物既可单独存在，也可形成 I$_1$III$_2$、III$_2$IV$_{1-2}$ 和 I$_1$III$_2$IV$_{1-n}$ 等超复合体；包含 I、III、IV 的组合常称 respirasome。冷冻电镜已解析多种装配形式，并显示物种、膜脂和代谢状态会改变界面与比例。超复合体可稳定复合物、协助装配并影响嵴膜中的空间组织，但并非所有电子传递都必须经过一种固定“固态呼吸链”。[^supercomplex-structure]

结构上相邻也不等于 CoQ 和细胞色素 c 必然被封闭地从一个活性位点直接递送到下一个。对哺乳动物线粒体的动力学测量显示，复合物 I 与 II 可访问共同的 CoQ 池，且没有支持必需 CoQ 通道化的证据；另一些结构研究则观察到由脂质和构象形成的动态底物空间。较稳妥的结论是：超复合体是真实且可变的组织层级，其对稳定性、局部扩散和通量调节的贡献要逐体系验证。[^supercomplex-pool]

## 化学渗透从假说成为可重构机制 { #chemiosmotic-coupling }

早期的“化学中间体”与“构象耦联”方案试图寻找一个由电子传递直接生成、随后把磷酸交给 ADP 的高能中间物。Mitchell 在 1961 年提出化学渗透假说：电子传递建立跨膜质子电化学梯度，梯度本身就是连接氧化与磷酸化的可交换中间形式。该框架把完整、低质子通透性的膜置于耦联中心，也解释了解偶联剂为何能让电子传递继续而 ATP 合成停止。[^mitchell-chemiosmosis]

随后两类重构实验把相关性推进到因果检验。Jagendorf 与 Uribe 让菠菜叶绿体先处于酸性环境，再迅速转入含 ADP 与 P$_i$ 的碱性介质，即使黑暗中没有光驱动电子传递，人工施加的 $\Delta\mathrm{pH}$ 也能短暂生成 ATP。Racker 与 Stoeckenius 又把光驱动质子泵 bacteriorhodopsin 与 ATP 合酶共同装入脂质囊泡，使光照建立的梯度驱动 ATP 合成。两项实验说明：只要膜、梯度与 ATP 合酶三者齐备，质子动力势本身足以连接能量输入和磷酸化。[^acid-base-atp][^reconstituted-atp]

## ATP 合酶把质子回流转换成旋转催化 { #atp-synthase }

F$_o$F$_1$-ATP 合酶由膜内的 F$_o$ 马达与伸向基质的 F$_1$ 催化头组成。F$_o$ 的 a 亚基提供两条不贯通的质子半通道，c 亚基环上的可质子化位点依次与两侧半通道交换质子，从而使 c 环和中央轴 $\gamma\varepsilon$ 相对外围支架旋转。F$_1$ 的 $\alpha_3\beta_3$ 六聚体保持相对静止，三个 $\beta$ 亚基则在中央轴不对称接触下轮流改变构象。

Boyer 的结合改变模型把三个催化位点概括为疏松（L）、紧密（T）和开放（O）状态：底物结合、ATP 形成与 ATP 释放被分配到不同构象，旋转使每个 $\beta$ 位点依次经历这些状态。ATP 与 ADP＋P$_i$ 在紧密位点中的自由能差可被显著压低，质子动力势的关键作用之一是推动构象转换并释放紧密结合的 ATP。单分子实验后来直接观察到 F$_1$ 中 $\gamma$ 亚基相对 $\alpha_3\beta_3$ 的旋转，使“旋转催化”成为可见的机械过程。[^atp-synthase-rotation]

ATP 合酶是可逆机器。若质子动力势崩溃而 ATP 丰富，它可以水解 ATP 并反向泵质子；呼吸正常时则由质子回流推动合成。寡霉素结合 F$_o$ 并阻断质子通路后，不仅 ATP 合成停止，质子动力势的“回压”还会使上游电子传递减慢，这与直接封堵某一呼吸复合物的作用位置不同。

## 质子计量与 P/O 比是条件性账本 { #proton-and-po-ratios }

从一个基质 NADH 到氧的两电子路径经过 I、III、IV，按 4＋4＋2 约泵出 10 个 H$^+$；从琥珀酸、线粒体甘油-3-磷酸脱氢酶或其他 CoQ 水平入口出发，绕过 I，因而约泵出 6 个 H$^+$。这里的 P/O 比表示每把一对电子交给氧、即每还原一个氧原子时生成的 ATP 数，不应把整数“磷酸化位点”直接当作 ATP 分子数。

F$_o$ 的 c 环亚基数决定转一周需要多少质子，而 F$_1$ 每转一周形成 3 个 ATP。哺乳动物 c$_8$ 环因此给出 F$_o$ 内部约 $8/3=2.67$ H$^+$/ATP；其他生物的环大小可以不同。把 P$_i$ 输入基质所需的一个质子当量以及 ADP/ATP 载体利用膜电势完成的电生交换计入后，动物线粒体每向胞质提供一个 ATP 的总成本约为 3.7 个质子当量，教学估算常近似为 4。ADP/ATP 交换不是“再跨膜运一个 H$^+$”，而是 ATP$^{4-}$ 外排与 ADP$^{3-}$ 内运所产生的电荷成本。[^c-ring-stoichiometry][^adenine-nucleotide-transport]

于是常用近似是每对 NADH 电子约生成 2.5 ATP，每对 CoQ 水平电子约生成 1.5 ATP。这些数值来自机制计量，不是所有条件下的实测常数；质子漏、离子循环、底物运输、ATP 合酶环大小、膜电势和呼吸链滑脱都会改变实际值。葡萄糖完全氧化常写为约 30 或 32 ATP，差别主要来自胞质 NADH 采用何种穿梭入口，但这仍是规定条件下的理论账本，而不是每个细胞都兑现的固定产量。[^po-ratio]

## 抑制、解偶联与离子载体切断不同环节 { #inhibition-and-uncoupling }

直接呼吸链抑制剂阻断电子通路，使阻断点上游载体趋于还原、下游趋于氧化，氧消耗和质子泵出同时下降。ATP 合酶抑制剂阻断质子经 F$_o$ 回流，初始结果是梯度升高并对呼吸链形成回压；ADP/ATP 载体抑制剂 atractyloside 或 bongkrekic acid、磷酸载体受阻，也会因底物或产物无法交换而限制磷酸化。各类抑制必须按作用节点解释，不能合并成“都使 ATP 减少”。

质子载体型解偶联剂如 2,4-dinitrophenol（DNP）、FCCP 和 CCCP 在内膜两侧往返携带质子，耗散 $\Delta p$。当底物与氧充足时，回压解除可使电子传递和氧耗加快，但 ATP 合成下降，氧化自由能更多转成热。valinomycin 选择性转运 K$^+$，gramicidin 形成单价阳离子通道；它们能改变 $\Delta\psi$ 与离子平衡，却不等同于直接运载 H$^+$ 的质子载体。

!!! warning "高氧耗不等于高 ATP 生成"

    氧耗增加可能来自能量需求上升，也可能来自解偶联或离子循环。反之，寡霉素使氧耗下降，是 ATP 合酶被阻后梯度回压增强的继发结果。只有把基础呼吸、ADP 刺激、寡霉素敏感部分、质子载体诱导的最大电子传递能力和非线粒体耗氧结合起来，才能定位限制环节；具体加药顺序与质量控制属于呼吸测定方法学。

## UCP1 与 IF1 改变质子回流的用途 { #ucp1-and-if1 }

哺乳动物棕色与米色脂肪细胞的内膜含解偶联蛋白 1（UCP1）。寒冷等信号促进脂解后，游离脂肪酸解除调控并支持 UCP1 介导的质子漏；嘌呤二、三磷酸核苷酸可抑制 UCP1。质子绕过 ATP 合酶回流，使底物氧化释放的自由能主要转成热，构成非战栗性产热。UCP1 的详细质子／脂肪酸转运机制仍有争论，因此“脂肪酸激活、嘌呤核苷酸抑制、梯度耗散产热”是比单一载体模型更稳妥的功能结论。[^ucp1]

ATP 合酶抑制因子 IF$_1$ 则保护能量危机中的 ATP 池。缺氧或呼吸链受损使质子动力势下降时，ATP 合酶倾向逆向水解 ATP；IF$_1$ 可结合 F$_1$ 并抑制水解。近期在哺乳动物酶上的直接比较支持 IF$_1$ 强烈抑制水解而不抑制由质子动力势驱动的合成，因而不能简单写成“结合时关机、解离时合成”的对称开关。酸性环境可促进其抑制状态，但物种和实验体系会影响调控细节。[^if1]

## 胞质 NADH 通过穿梭系统改变电子入口 { #cytosolic-nadh-shuttles }

线粒体内膜没有让 NADH 自由通过的载体，胞质糖酵解产生的还原当量须以代谢物循环跨膜。苹果酸—天冬氨酸穿梭在胞质用 NADH 把草酰乙酸还原为苹果酸；苹果酸进入基质后再氧化，重新生成基质 NADH。草酰乙酸不能直接出膜，因而经谷氨酸—天冬氨酸转氨反应、苹果酸—$\alpha$-酮戊二酸交换和天冬氨酸—谷氨酸交换闭合循环。电子最终从复合物 I 进入，按常用账本约对应 2.5 ATP／胞质 NADH。

甘油-3-磷酸穿梭先由胞质 NAD 依赖酶把二羟丙酮磷酸还原为甘油-3-磷酸，再由面向膜间隙的线粒体 FAD 依赖甘油-3-磷酸脱氢酶把它氧化回二羟丙酮磷酸，电子直接交给 CoQ。该路径绕过复合物 I，常用账本约为 1.5 ATP／胞质 NADH。不同组织、发育阶段和物种对两种穿梭的使用不同，不宜把“脑和肌肉只用甘油-3-磷酸穿梭、肝和心只用苹果酸—天冬氨酸穿梭”写成绝对分界。[^nadh-shuttles]

旧材料另列“异柠檬酸穿梭”作为胞质 NADH 的第三条通用途径，但胞质 IDH1 与线粒体 IDH2 主要使用 NADP(H)，相关柠檬酸／异柠檬酸交换更多连接碳流与 NADPH 代谢，不能替代上述两种经典 NADH 穿梭。其在脂质合成和还原力分配中的作用留到[脂质生物合成](lipid_synthesis.md)展开。

## 呼吸受 ADP 需求与质子回压控制 { #respiratory-control }

完整、耦联的线粒体在底物和氧充足时，呼吸速率仍会随 ADP 供应改变。ADP 与 P$_i$ 到位后，ATP 合酶加快质子回流，$\Delta p$ 略降，上游泵质子所受回压减小，电子传递和氧耗随之加快；ADP 被磷酸化耗尽后，质子回流变慢，梯度升高，呼吸回落到主要补偿质子漏的水平。这种“受体控制”说明 ATP 需求可由共同的质子动力势反馈到呼吸链，而不是 ADP 直接结合每个呼吸复合物。

Chance 与 Williams 的经典离体线粒体术语把不同底物、ADP 与氧条件分为五种状态：state 1 是线粒体刚加入介质、尚无外加底物和 ADP；state 2 有呼吸底物而无外加 ADP；state 3 是加入 ADP 后的磷酸化呼吸；state 4 是外加 ADP 被耗尽后的非磷酸化、漏呼吸；state 5 是氧耗尽后的无氧状态。现代高分辨率呼吸测定还会区分 ROUTINE、OXPHOS、LEAK 和电子传递系统容量，不能把两套术语逐字等同。[^respiratory-states]

电子显微镜下的 orthodox 与 condensed 构象描述基质体积、嵴形态及离子／渗透状态，是线粒体超微结构语言，不是 state 1–5 的同义词。旧材料把某一形态固定配给 state 3 或 state 4，会把相关现象误写成定义；实际关系依组织、制备、底物和离子环境而变。

## 电子泄漏是呼吸链的条件性副反应 { #electron-leak }

呼吸链载体通常把电子限制在受控路径中，但复合物 I 与 III 等位点的黄素、醌或半醌中间态也可能把单电子交给 O$_2$，形成超氧阴离子。泄漏比例不是一个固定常数：底物组合、CoQ 还原状态、膜电势、反向电子传递、氧浓度和抑制剂都会改变生成速率。少量活性氧可进入氧化还原信号，过量则损伤脂质、蛋白质和核酸；不能因此把呼吸链的主要功能概括为“制造自由基”。

尤其在琥珀酸充足且 $\Delta p$ 很高时，电子可由还原的 CoQ 逆向推回复合物 I，即反向电子传递，并显著增加特定位点的活性氧生成。解偶联剂降低膜电势后可抑制这一过程，却同时破坏 ATP 合成；这再次说明“减少活性氧”“维持梯度”和“提高能量效率”不是可以由单一指标替代的目标。

## 参考资料与延伸阅读

- Reactome, [Respiratory electron transport](https://reactome.org/content/detail/R-HSA-611105)。
- Alberts, B. et al., [Electron-Transport Chains and Their Proton Pumps](https://www.ncbi.nlm.nih.gov/books/NBK26904/). *Molecular Biology of the Cell*。
- Alberts, B. et al., [The Mitochondrion](https://www.ncbi.nlm.nih.gov/books/NBK26894/). *Molecular Biology of the Cell*。
- Mitchell, P., [Coupling of Phosphorylation to Electron and Hydrogen Transfer by a Chemi-Osmotic Type of Mechanism](https://www.nature.com/articles/191144a0). *Nature*, 1961。
- Jagendorf, A. T. & Uribe, E., [ATP Formation Caused by Acid-Base Transition of Spinach Chloroplasts](https://pubmed.ncbi.nlm.nih.gov/5220864/). *PNAS*, 1966。
- Noji, H. et al., [Direct Observation of the Rotation of F$_1$-ATPase](https://pubmed.ncbi.nlm.nih.gov/9069291/). *Nature*, 1997。
- Watt, I. N. et al., [Bioenergetic Cost of Making an Adenosine Triphosphate Molecule in Animal Mitochondria](https://pmc.ncbi.nlm.nih.gov/articles/PMC2947889/). *PNAS*, 2010。

[^respiratory-chain-overview]: Reactome 的 [Respiratory electron transport](https://reactome.org/content/detail/R-HSA-611105) 将哺乳动物复合物 I–IV、CoQ、细胞色素 c、化学渗透耦联、受体控制与解偶联置于同一路径；[Electron-Transport Chains and Their Proton Pumps](https://www.ncbi.nlm.nih.gov/books/NBK26904/) 说明内膜、移动载体和质子动力势之间的关系。
[^cytochrome-c-biogenesis]: San Francisco et al., [Human mitochondrial holocytochrome c synthase's heme binding, maturation determinants, and complex formation with cytochrome c](https://pmc.ncbi.nlm.nih.gov/articles/PMC3587199/) 解析 HCCS 介导的血红素结合、apo 蛋白识别与共价成熟；成熟细胞色素 c 是膜间隙中的移动载体，而不是复合物 III 的固定亚基。
[^complex-i-structure]: Fiedorczuk et al., [Atomic structure of the entire mammalian mitochondrial complex I](https://pubmed.ncbi.nlm.nih.gov/27595392/)。绵羊复合物 I 结构解析出 14 个核心亚基、31 个线粒体特有亚基以及含 FMN 与铁硫簇的基质臂。
[^complex-i-stoichiometry]: Jones et al., [Respiratory Complex I in *Bos taurus* and *Paracoccus denitrificans* Pumps Four Protons across the Membrane for Every NADH Oxidized](https://pubmed.ncbi.nlm.nih.gov/28174301/)。该研究以哺乳动物和细菌膜泡比较确认每两个电子约泵 4 H$^+$。
[^q-cycle]: Xia et al., [Structural Analysis of Cytochrome bc$_1$ Complexes](https://pmc.ncbi.nlm.nih.gov/articles/PMC3593749/) 综合结构与机制证据说明两个醌位点及电子分叉；Papa et al., [Redox-linked proton translocation in the b-c$_1$ complex](https://pubmed.ncbi.nlm.nih.gov/6319123/) 在重构囊泡中测得每两个电子向 P 侧释放 4 个质子。
[^complex-iv-protons]: Wikström, [How Does Cytochrome Oxidase Pump Protons?](https://pmc.ncbi.nlm.nih.gov/articles/PMC33910/) 区分每还原一分子 O$_2$ 所摄取的 4 个成水质子与另外泵出的 4 个质子。
[^supercomplex-structure]: Letts et al., [Structures of Respiratory Supercomplex I+III$_2$ Reveal Functional and Conformational Crosstalk](https://pmc.ncbi.nlm.nih.gov/articles/PMC6926478/) 解析多种构象并显示复合物间存在结构串扰；Rathore et al., [Cryo-EM structure of the yeast respiratory supercomplex](https://pubmed.ncbi.nlm.nih.gov/30598556/) 显示酵母与哺乳动物装配界面并不相同。
[^supercomplex-pool]: Blaza et al., [Kinetic evidence against partitioning of the ubiquinone pool and the catalytic relevance of respiratory-chain supercomplexes](https://pubmed.ncbi.nlm.nih.gov/25331896/) 以动力学实验反对必需的 CoQ 分池与通道化；Jeon et al., [A Dynamic Substrate Pool Revealed by cryo-EM of a Lipid-Preserved Respiratory Supercomplex](https://pubmed.ncbi.nlm.nih.gov/34913730/) 则显示脂质保存条件下复合物间空间具有动态性。
[^mitchell-chemiosmosis]: Mitchell, [Coupling of Phosphorylation to Electron and Hydrogen Transfer by a Chemi-Osmotic Type of Mechanism](https://www.nature.com/articles/191144a0)。该文提出以跨膜质子梯度连接电子传递与 ATP 合成。
[^acid-base-atp]: Jagendorf & Uribe, [ATP Formation Caused by Acid-Base Transition of Spinach Chloroplasts](https://pubmed.ncbi.nlm.nih.gov/5220864/)。酸—碱跃迁在黑暗中驱动 ATP 形成，直接检验了外加 $\Delta\mathrm{pH}$ 的充分性。
[^reconstituted-atp]: Racker & Stoeckenius, [Reconstitution of Purple Membrane Vesicles Catalyzing Light-Driven Proton Uptake and Adenosine Triphosphate Formation](https://doi.org/10.1016/S0021-9258(19)43080-9)。该重构体系把 bacteriorhodopsin 的光驱动质子泵与 ATP 合酶连接起来。
[^atp-synthase-rotation]: Noji et al., [Direct Observation of the Rotation of F$_1$-ATPase](https://pubmed.ncbi.nlm.nih.gov/9069291/) 以连接在 $\gamma$ 亚基上的荧光肌动蛋白丝直接观察旋转；Reactome 的 [ATP synthase](https://reactome.org/content/detail/R-HSA-164832) 汇集结合改变与旋转催化的反应和文献背景。
[^c-ring-stoichiometry]: Watt et al., [Bioenergetic Cost of Making an Adenosine Triphosphate Molecule in Animal Mitochondria](https://pmc.ncbi.nlm.nih.gov/articles/PMC2947889/) 解析哺乳动物 c$_8$ 环，并把 F$_o$ 内部的 $8/3$ H$^+$/ATP 与磷酸输入等额外成本分开。
[^adenine-nucleotide-transport]: Ruprecht et al., [The Molecular Mechanism of Transport by the Mitochondrial ADP/ATP Carrier](https://pmc.ncbi.nlm.nih.gov/articles/PMC6349463/) 说明载体以交替开放机制交换 ADP 与 ATP；[The Mitochondrion](https://www.ncbi.nlm.nih.gov/books/NBK26894/) 说明交换利用膜电势，并与磷酸输入共同计入胞质 ATP 的成本。
[^po-ratio]: Mookerjee et al., [Quantifying intracellular rates of glycolytic and oxidative ATP production and consumption](https://pubmed.ncbi.nlm.nih.gov/28270511/) 从质子泵出、c 环与运输成本推导条件性 P/O 上限；Reactome 的 [Respiratory electron transport](https://reactome.org/content/detail/R-HSA-611105) 给出常用约值 2.5、1.5 及理论葡萄糖产量的条件边界。
[^ucp1]: Jones et al., [Structural basis of purine nucleotide inhibition of human uncoupling protein 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC10413660/) 结合重构质子转运与冷冻电镜结构说明脂肪酸依赖的质子漏及嘌呤核苷酸抑制；精细转运模型仍需与其他功能研究共同解释。
[^if1]: Carroll et al., [The inhibitor protein IF$_1$ from mammalian mitochondria inhibits ATP hydrolysis but not ATP synthesis by the ATP synthase complex](https://pmc.ncbi.nlm.nih.gov/articles/PMC10906535/) 直接比较人和牛 IF$_1$ 对水解与合成方向的影响。
[^nadh-shuttles]: Cantó et al., [NAD(H) and NADP(H) Redox Couples and Cellular Energy Metabolism](https://pubmed.ncbi.nlm.nih.gov/28648096/) 逐一给出苹果酸—天冬氨酸穿梭的转氨酶与两种交换载体，以及甘油-3-磷酸穿梭向 CoQ 交电子的步骤；具体 ATP 约值按正文的 P/O 条件计算。
[^respiratory-states]: Chance et al., [Respiratory Enzymes in Oxidative Phosphorylation. V. A Mechanism for Oxidative Phosphorylation](https://doi.org/10.1016/S0021-9258(19)57193-9) 建立经典离体线粒体状态与受体控制框架；现代实验中需把这些历史状态与具体底物、ADP、氧和漏呼吸条件一起报告。
