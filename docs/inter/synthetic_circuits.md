# 生物元件与合成基因线路

合成基因线路把感知、信息处理和细胞输出连接起来。外界小分子、光、温度、细胞内代谢物或另一种调节因子先被传感模块读取，信号随后经过转录、翻译、RNA 配对、蛋白互作或 DNA 重排，最终改变报告基因、效应蛋白或细胞状态。线路图上的 promoter、repressor、RNA regulator 和 reporter 看似是可分离的元件，实际行为却由它们的剂量—响应关系、反应时间、分子噪声以及所在宿主共同决定。

本页从元件怎样获得可测量的功能描述出发，依次讨论组合逻辑、反馈、开关、振荡、脉冲、计数和记忆。天然启动子、增强子、操纵子、RNA 加工和翻译调节的分子机制见[原核与真核基因表达调控](../molecular/gene_regulation.md)；反馈、双稳态、极限环和分岔的通用动力学见[反馈、开关与振荡](systems_dynamics.md)。这里关注的是这些机制经过选择和重组后，如何形成具有指定输入—输出行为的人工线路。[^circuit-design-principles]

## 线路元件的功能表征 { #parts-as-measured-functions }

遗传线路中的 part 不是仅由一段序列或一种蛋白质命名的静态对象。它还包含功能边界：接受什么输入，在怎样的宿主和培养条件下工作，以何种分子作为输出，输出强度与时间过程如何，又会占用多少转录、翻译和降解能力。同一个 promoter 接在不同 5′ untranslated region（UTR）、copy number 或下游 coding sequence 前，表达量可能发生显著变化；同一个 transcription factor 面对不同数量和位置的 binding sites，也会呈现不同阈值与最大抑制程度。

线路设计通常区分 cis-acting element 与 trans-acting regulator。promoter、operator、enhancer、ribosome-binding site（RBS）、Kozak sequence、terminator 和绝缘序列随所在核酸分子发挥作用；transcription factor、small RNA、dCas9–guide RNA complex、protease 和 signaling protein 则可以扩散并作用于多个靶标。cis 元件确定局部接口，trans 调节器承担线路节点之间的“信号线”，二者必须连同宿主机器一起表征。

### 转录与翻译表达接口 { #transcription-translation-parts }

promoter 决定 RNA polymerase 在何处、以多大概率启动转录；operator 或 enhancer 等调控位点把 transcription factor 的结合转换为激活或抑制。位点数目、相对 core promoter 的位置、调节因子浓度和 DNA 拓扑共同塑造 transfer function。细菌线路常把 promoter 与 operator 紧密组合，真核线路则还要考虑 chromatin accessibility、core promoter、enhancer–promoter communication 和转录因子的组合占位。

转录产生的 mRNA 仍需经过翻译接口。细菌 RBS 周围的 RNA secondary structure、Shine–Dalgarno pairing、起始密码子邻域和上游 coding sequence 会共同改变 translation initiation；真核系统相应受到 5′ cap-dependent scanning、Kozak context、upstream open reading frame 和 UTR 调节。RBS Calculator 一类模型尝试把序列和 RNA 折叠能量转换为翻译起始速率，但模型输出仍要在具体构建与宿主中校准。[^rbs-calculator]

terminator 结束转录并降低相邻 transcriptional unit 的串读。终止效率不足会把上游表达状态传入下游元件，形成意外耦合；相反，强终止子或成对绝缘结构能使相邻单元的边界更清楚。对 582 个天然与合成终止子的系统测量显示，terminator strength 有很大跨度，并受序列结构和局部上下文制约，因而“有 terminator”不能代替定量测量。[^terminator-library]

Mutalik 等把 promoter 与 translation initiation element 置于标准化 expression cassette 中，分别测量转录和翻译贡献，说明表达强度可以通过接口设计变得更可预测，同时也显示可靠性来自对 context 的主动控制。[^standard-expression-elements] 这类元件库的价值不只在于提供“强、中、弱”几个标签，而在于给出可比较的动态范围、宿主条件和不确定性。

| 元件或模块 | 主要作用 | 常见调节变量 | 需要记录的功能量 |
| --- | --- | --- | --- |
| promoter／operator／enhancer | 把调节因子占位转换为转录 | 位点序列、数目、位置和间距 | basal output、最大输出、阈值、斜率、诱导时间 |
| RBS／Kozak／5′ UTR | 调节翻译起始与蛋白产量 | RNA 结构、起始序列、上游 reading context | 翻译速率、蛋白／mRNA 比值、context sensitivity |
| terminator／绝缘序列 | 结束转录并分隔相邻单元 | 发卡结构、终止序列、方向和间距 | termination efficiency、read-through、上下游干扰 |
| transcription factor／dCas regulator | 连接上游输入与靶 promoter | affinity、expression level、binding-site copy number | transfer function、cross-talk、load、turnover |
| RNA regulator | 以 RNA 配对或结构改变转录、翻译和降解 | trigger sequence、结构自由能、processing rate | ON／OFF ratio、activation time、sequence orthogonality |
| sensor | 把化学或物理量转换为线路信号 | ligand affinity、受体丰度、转导结构 | detection range、specificity、response time、adaptation |
| reporter／actuator | 读出线路状态或实施功能 | maturation、degradation tag、localization | signal per cell、delay、dynamic range、cellular cost |

### RNA 调节器与可编程接口 { #rna-regulators }

RNA 可以直接承担传感、逻辑和表达控制。早期 engineered riboregulator 将 RBS 封闭在 cis-repressive RNA structure 中，再用匹配的 trans-activating RNA 打开结构，使翻译从 OFF 状态转为 ON 状态。后来的 toehold switch 把 RBS 和起始密码子包埋在发卡结构中，由 trigger RNA 与暴露的 toehold sequence 配对并逐步解开结构。输入和输出的配对关系主要由序列设计，因此可建立一组相互干扰较低的 RNA 通道，并把内源 RNA 或上游线路输出接入翻译控制。[^rna-riboregulators]

RNA 可编程性仍受结构竞争、核酸酶降解、宿主 RNA-binding proteins 和 trigger abundance 影响。两个计算上正交的序列若形成非预期 secondary structure，或共同占用有限的 RNA processing machinery，实际 ON／OFF ratio 与响应速度都会改变。RNA 元件因此也需要在单独状态与组合状态下分别测量。

CRISPR interference（CRISPRi）提供另一类可寻址调节器。catalytically inactive Cas9（dCas9）与 guide RNA 结合后，可依靠 guide sequence 定位 promoter 或 coding region，阻碍 transcription initiation 或 elongation；更换 guide 即可改变靶位点，而不必为每个新靶点重新寻找 DNA-binding protein。[^crispri-regulation] 多个 guide 共享 dCas9 时会竞争同一蛋白池，近似正交的寻址规则并没有消除 resource competition，这一点在大线路中尤其重要。

### 传感器、报告器与输入—输出边界 { #sensors-reporters }

sensor 将原本不能直接驱动线路的量转换为一种可传播的内部信号。小分子可改变 allosteric transcription factor 的 DNA-binding state，光可改变 photosensory domain 的构象或二聚化，代谢物可由 riboswitch 或 enzyme-coupled sensor 读取，细胞内 protein state 则可借助 protease、phosphorylation 或 protein–protein interaction 接到转录输出。设计传感器时要同时描述 detection limit、有效浓度范围、饱和区、选择性、可逆性和响应时间；只给出“能检测某物”无法判断它是否能驱动下游 gate。

reporter 把难以直接观察的线路状态转换为 fluorescence、luminescence、colorimetric product、growth phenotype 或可测酶活。fluorescent protein 的成熟需要时间，稳定 reporter 会积累并平滑快速波动，过强表达又可能消耗翻译资源。加入 degradation tag 可以提高时间分辨率，却降低瞬时信号并增加蛋白周转负担。报告器属于测量系统的一部分，它的动力学必须与被测线路的时间尺度共同解释。

### 静态传递函数与动态指标 { #part-characterization }

对连续输入 $u$，激活与抑制元件常用经验性 Hill curve 描述：

$$
\begin{aligned}
y_{+}(u)&=y_{\min}+(y_{\max}-y_{\min})\frac{u^{n}}{K^{n}+u^{n}},\\
y_{-}(u)&=y_{\min}+(y_{\max}-y_{\min})\frac{K^{n}}{K^{n}+u^{n}}.
\end{aligned}
$$

$y_{\min}$ 是 basal expression 或 leakiness，$y_{\max}/y_{\min}$ 表示动态范围，$K$ 给出响应中点，$n$ 描述曲线陡峭程度。拟合得到的 $n$ 是有效 Hill coefficient，不必等于实际结合位点数。对数字线路而言，重要的不是把曲线强行称作 0 或 1，而是输入低区和高区能否分别落在下游 gate 的可靠 OFF 与 ON 范围内，中间的不确定区是否足够窄。

静态曲线没有给出响应时间。若蛋白 $x$ 的产生由输入函数 $f(u,t)$ 控制，可写成

$$
\frac{\mathrm{d}x}{\mathrm{d}t}=\alpha f(u,t)-(\delta+\mu)x,
$$

其中 $\delta$ 是主动降解率，$\mu$ 是 growth dilution rate。线性近似下的弛豫时间约为 $1/(\delta+\mu)$；mRNA processing、reporter maturation、transport 和 multi-step cascade 会再增加 delay。完整表征至少要包含 rising time、falling time、overshoot、adaptation、cell-to-cell distribution 和 repeated-input reproducibility，而不只是一个终点均值。

## 多输入组合逻辑 { #combinatorial-logic }

组合逻辑的输出只由当前输入组合决定。repressor 驱动的 gate 天然实现信号反相：上游 regulator 高时，下游 promoter 低，形成 NOT。两个输入分别阻断同一输出，可形成 NOR；两个激活条件都满足才产生输出，可形成 AND；多个并行激活支路中的任一支路足够则接近 OR。由于 NOT 与 NOR 可以组合出任意 Boolean function，一套互相兼容的 repressor–promoter 对能够构成更复杂的数字线路。

生物 gate 的底层响应仍是连续的。一个 AND gate 可能在“双高”条件下产生最高输出，却在单输入条件下保留不同程度的 leak；一个 NOR gate 的四种输入组合也常形成四个重叠分布，而不是两个精确电平。truth table 概括期望逻辑，transfer curve、单细胞分布和时间过程才说明线路是否真正区分这些状态。

Guet 等重排 promoter、repressor 和 reporter 的组合，得到具有不同逻辑关系的网络，并用这些构建说明：拓扑相同或元件集合相同，都不足以唯一决定功能，调节强度和连接次序同样重要。[^combinatorial-networks] 组合文库由此既是寻找可用线路的方法，也是检验结构—功能关系的实验。

### 多级线路的信号匹配 { #signal-matching-layering }

多级线路要求上游输出范围与下游输入范围相容。若上游 ON 状态仍低于下游 activation threshold，信号会在第一层消失；若上游 OFF 泄漏已经超过下游阈值，后续层就无法恢复低状态。noise margin 描述可靠 ON／OFF 区域与判定阈值之间的余量；动态范围、阈值、斜率和极性共同构成 gate 的功能接口。

Moon 等在单个细胞中串联合成 transcriptional logic gates，显示多层遗传程序可以连接 sensor、logic 和 output，同时也暴露表达平衡、传播延迟和宿主背景带来的限制。[^logic-layering] Nielsen 等随后将已测量的 gate library、compatibility rule 和线路约束写入自动化设计流程，使 Boolean specification 能被编译为候选 DNA design。[^circuit-design-automation] 自动化设计的可预测性来自宿主特异的元件测量和约束文件，并非抽象逻辑本身能够消除生物上下文。

### fan-out、retroactivity 与模块接口 { #fanout-retroactivity }

一个 regulator 同时连接多个下游 promoter 时，fan-out 增加。下游 binding sites 会结合并暂时扣留 regulator，使游离浓度、响应速度和上游模块的有效降解过程发生变化；这种下游负载向上游传播的现象称为 retroactivity。线路图中本来独立的两个模块由此产生双向耦合：上游驱动下游，下游也反过来改变上游状态。

Mishra 等以 load driver 提高调节信号的生成和周转，使上游模块在面对不同下游负载时保持更接近原有的 dynamics，实验性地说明绝缘需要额外反应与资源，而不是在模块之间画一条边界。[^load-driver] 其他绝缘方式包括增加 regulator pool、使用 phosphorylation cycle、缩短信号寿命、以 ribozyme 或 RNA processing 固定转录本边界，以及把不同线路分配给正交 polymerase、ribosome 或 protease。绝缘可以降低一种耦合，却可能增加表达负担或新的共享资源竞争。

## 反馈线路的状态与时间行为 { #feedback-dynamics }

反馈使输出的一部分返回上游。negative feedback 通常限制稳态增益，并可在合适的 gain 与 delay 下加快响应、压低部分低频扰动；delay 过长或增益过高时也可产生过冲与振荡。positive feedback 放大自身状态，在足够非线性和适当参数区间内形成 bistability 与 hysteresis。线路行为取决于反馈符号、非线性、反应时间尺度和分子寿命的组合，而不只取决于一条“正”或“负”的箭头。

### 相互抑制与双稳态开关 { #toggle-switch }

genetic toggle switch 由两个 repressor 相互抑制：A 高会压低 B，B 低又解除对 A 的抑制；另一稳定状态则由 B 高、A 低维持。若抑制曲线足够陡、leakiness 足够低且两个支路强度匹配，生成—清除关系可形成两个稳定稳态和一个不稳定分界。短暂输入只要把系统推过吸引域边界，输入撤除后仍可保持新状态。

Gardner、Cantor 和 Collins 在 *Escherichia coli* 中构建的 toggle switch 用相互抑制的 transcriptional repressors 实现了两个可切换的稳定表达状态，并以外部诱导输入写入状态。[^toggle-switch] 它把“记忆”具体化为当前调节蛋白维持的动力学状态。判定真正双稳态需要从低态和高态分别出发，在相同外界条件下观察两个状态能否保持，并通过上、下扫描输入测量不同切换阈值；缓慢蛋白降解造成的暂时滞留并不等同于 bistability。

### 延迟负反馈与合成振荡器 { #synthetic-oscillators }

repressilator 把三个 repressor 首尾相接：A 抑制 B，B 抑制 C，C 再抑制 A。负反馈环包含奇数次反相；转录、翻译和蛋白清除形成 delay，使每个节点依次升高和降低。Elowitz 和 Leibler 的原始构建在单个细胞中产生荧光振荡，但细胞间 period 与 phase 有明显差异，群体平均会因去同步而迅速平滑。[^repressilator]

持续振荡要求反馈回来的时间足够晚、响应足够非线性，并且旧状态能在下一周期前清除。protein degradation tag 可缩短节点寿命，promoter strength 和 copy number 改变增益，growth rate 同时改变 dilution 和资源供给。Stricker 等将 positive 与 negative feedback 结合，构建出较快、可调且在较宽条件下工作的合成振荡器，说明正反馈可以加强状态转换，较慢负反馈负责重置。[^tunable-oscillator]

振荡器至少要报告 period、amplitude、phase、duty cycle 和 coherence。恒定条件下出现多轮循环，才能与外界周期性驱动造成的被迫振荡区分；长时间单细胞追踪则可区分单细胞振幅衰减与细胞间 phase dispersion。reporter maturation 和 degradation 又会对真实波形形成低通滤波，测到的周期和相位需要由测量模型校正。

### 快慢支路与瞬态脉冲 { #pulse-generation }

pulse generator 可以由 incoherent feed-forward loop 构成：输入沿快速支路激活输出，同时沿较慢支路启动抑制；输出先升高，抑制积累后又下降，即使输入仍然存在。脉冲幅度、持续时间与是否出现由两条支路的阈值和时间常数共同决定。若抑制支路过快，输出几乎没有上升窗口；若过慢或过弱，线路会停留在持续高表达。

Basu 等用信号接收细胞构建 pulse-generating network，使细胞面对持续升高的信号仍只产生瞬时表达；pulse 的幅度与出现时间同时受到最终输入浓度和输入上升速率影响，发送细胞形成的扩散场遂被转换为空间受限的输出。[^pulse-network] 本页关注快激活—慢抑制怎样产生 pulse；发送细胞、扩散梯度和群体空间图案将在[多细胞合成系统与空间模式](synthetic_multicellular.md)展开。

## 历史依赖的顺序线路 { #sequential-circuits }

组合逻辑只读取当前输入，sequential circuit 还包含内部状态。同一个输入到来时，输出取决于系统此前经历了什么。状态可以由持续的调节蛋白反馈维持，也可以写入 DNA orientation、recombination state、chromatin state 或细胞群体组成。不同载体决定记忆保持时间、写入速度、可擦写性和复制时的遗传稳定性。

### 离散事件计数器 { #event-counting }

counter 需要把重复、形状相近的输入脉冲区分为第 1 次、第 2 次和第 3 次事件。一个实现方式是 sequential cascade：每次输入只推动线路跨过一级，当前级的产物为下一级做好准备；另一种方式是让 recombinase 每次改变一个 DNA state，使后续 promoter orientation 或可表达基因随事件数变化。输入之间必须留出足够时间完成状态转移和分子清除，否则两个脉冲会被合并或漏计。

Friedland 等构建了 riboregulated transcriptional cascade counter 和 DNA invertase cascade counter，分别用表达级联与顺序 DNA 重排记录诱导脉冲。[^synthetic-counter] 计数可靠性要逐个检查漏计、重复计数、不同 pulse width、间隔变化和细胞分裂后的状态分布；群体终点只显示平均输出，可能掩盖不同细胞实际停在不同计数级。

### 反馈状态记忆与 DNA 状态记忆 { #memory-architectures }

toggle switch 的记忆存放在调节蛋白维持的 attractor 中。它写入较快，也能由相反输入切换，但持续保持需要反馈和表达资源；细胞生长、突变或环境变化使参数跨过 bistable region 时，状态会丢失。DNA memory 则把信息写入序列排列。site-specific recombinase 可翻转或切除两个 recognition sites 之间的 DNA，使 promoter 方向、terminator 位置或 coding sequence 选择发生改变；写入后通常不再需要持续表达 regulator。

Bonnet 等利用 integrase 与 recombination directionality factor 控制 DNA 片段在两个方向之间切换，建立可写、可擦并能跨细胞分裂保持的数字状态。[^recombinase-memory] 结构性记忆的优点是保持成本低、读出稳定，代价是写入与擦除依赖酶表达、反应方向和位点完整性。一个完整 memory device 还要分别评价 write fidelity、retention、read disturbance、erase fidelity 和多轮循环后的 state integrity。

## 线路行为中的噪声、负担与上下文 { #noise-burden-context }

合成线路由有限分子数和随机反应构成。promoter switching、transcriptional burst、RNA degradation、translation 和 partition at cell division 都会产生 cell-to-cell variation；细胞大小、cell-cycle stage、ribosome abundance 和局部营养又形成共享的 extrinsic fluctuation。Elowitz 等以双荧光报告器在单细胞中分离 intrinsic 与 extrinsic noise，显示克隆细胞群的表达分布不能由均值替代。[^single-cell-noise]

噪声进入非线性线路后会改变行为而不只是让曲线“变宽”。在 threshold 附近，微小涨落可使一部分细胞提前跨入 ON 状态；在 bistable switch 中，罕见涨落可能造成 spontaneous switching；振荡器中的 period noise 会逐步扩散 phase；多级 gate 则可能沿线路放大或筛除波动。测量需要报告单细胞分布、时间自相关和谱系，而不是只比较两组平均 fluorescence。

### 共享资源与模块耦合 { #host-resource-coupling }

多个 transcriptional units 共同占用 RNA polymerase、ribosome、tRNA、energy、protease 和 membrane capacity。提高一个模块的表达可能降低另一模块的输出；新增一条本来独立的 reporter，也可能因 translation burden 改变 toggle threshold 或 oscillator period。资源竞争使线路之间出现不在调控图上的负耦合，并通过 growth reduction 与 dilution rate 形成 feedback。[^resource-competition]

burden 还会产生选择压力。降低线路表达或破坏关键元件的突变体常生长更快，长期培养后可能取代保持功能的细胞。短期 transfer curve、长期 state retention 和 population composition 回答不同问题；评价线路鲁棒性必须明确持续时间和扰动种类。[合成生物学入口页](synthetic_biology.md#host-resource-context)进一步讨论资源守恒、生长反馈与进化稳定。

### 遗传上下文、宿主上下文与可迁移性 { #context-portability }

genetic context 包括 plasmid copy number、genomic integration site、相邻 transcriptional unit、DNA supercoiling、5′ UTR 和 coding sequence 接口。host context 则包括 polymerase 与 ribosome composition、growth physiology、temperature、media、stress response 和 endogenous regulators。一个元件在一种菌株中的 transfer curve 不能直接视为另一宿主中的说明书；真核线路还会受到 chromatin state、nuclear transport、RNA processing 和 cell-type-specific factor 的影响。

可移植性来自系统化重新表征和接口设计。测试元件时应同时记录宿主、载体、copy number、integration locus、培养条件、growth rate 和测量方法；组合后再测 transfer curve、delay 和 load。正交 regulator、insulator、chromosomal landing pad 和宿主特异 library 能减少部分变化，但每一种绝缘方案都有适用尺度和成本。

## 线路的实验检验 { #circuit-testing }

一条线路的验收应从行为规格转成可区分机制的实验。对 combinational gate，逐一施加所有输入组合，测量 steady-state distribution、response time 和 noise margin；对 toggle，从两个初态出发扫描上、下阈值，并在输入撤除后测 retention；对 oscillator，在恒定环境中连续追踪单细胞，改变 degradation、feedback strength 或 delay，检验 period 与 amplitude 是否按模型移动；对 counter 和 memory，则重复 write–read–erase cycle，追踪 state error 和遗传保持。

元件级扰动有助于定位失败。替换 promoter 或 RBS 可移动增益，改变 operator number 可调阈值和 nonlinearity，加入 degradation tag 可缩短时间尺度，减少下游 binding sites 可检验 retroactivity，降低 reporter expression 可检验 burden。若模型只能在构建完成后解释已有曲线，它主要是描述；模型若能预言新的输入波形、连接负载或宿主条件下的行为，并由独立构建验证，才真正参与设计。

合成线路的发展由“构建一个能工作的例子”逐步转向元件库、定量接口、组合规则和失败诊断。早期 toggle、repressilator 与组合网络证明少数元件足以产生状态、节律和逻辑；后续 RNA 调节器、CRISPRi、标准化 cassette、绝缘器和设计自动化扩大了可寻址空间。核心问题始终相同：每个元件的输入和输出是否被充分测量，组合后新增的时间尺度、负载与宿主耦合是否被纳入模型。

## 与相邻页面的接口 { #disciplinary-interfaces }

[原核与真核基因表达调控](../molecular/gene_regulation.md)解释本页所用 promoter、enhancer、operator、RNA processing 与 translation control 的天然机制；[反馈、开关与振荡](systems_dynamics.md)提供稳态、bistability、hysteresis、limit cycle 和 bifurcation 的通用分析。线路输出若进一步调节 enzyme abundance、precursor supply 与 pathway flux，就进入[基因组设计、代谢工程与生物制造](synthetic_genome_metabolic.md)；表达反应离开完整细胞后由[无细胞系统、最小细胞与人工细胞](synthetic_cell_free.md)承接，cell–cell signal、division of labor 与 spatial pattern 则由[多细胞合成系统与空间模式](synthetic_multicellular.md)展开。

## 参考资料与延伸阅读 { #references }

[^circuit-design-principles]: Brophy JAN, Voigt CA. [Principles of genetic circuit design](https://doi.org/10.1038/nmeth.2926). *Nature Methods*. 2014;11:508–520.
[^rbs-calculator]: Salis HM, Mirsky EA, Voigt CA. [Automated design of synthetic ribosome binding sites to control protein expression](https://doi.org/10.1038/nbt.1568). *Nature Biotechnology*. 2009;27:946–950.
[^terminator-library]: Chen YJ, Liu P, Nielsen AAK, et al. [Characterization of 582 natural and synthetic terminators and quantification of their design constraints](https://doi.org/10.1038/nmeth.2515). *Nature Methods*. 2013;10:659–664.
[^standard-expression-elements]: Mutalik VK, Guimaraes JC, Cambray G, et al. [Precise and reliable gene expression via standard transcription and translation initiation elements](https://doi.org/10.1038/nmeth.2404). *Nature Methods*. 2013;10:354–360.
[^rna-riboregulators]: Isaacs FJ, Dwyer DJ, Ding C, Pervouchine DD, Cantor CR, Collins JJ. [Engineered riboregulators enable post-transcriptional control of gene expression](https://doi.org/10.1038/nbt986). *Nature Biotechnology*. 2004;22:841–847；Green AA, Silver PA, Collins JJ, Yin P. [Toehold switches: de-novo-designed regulators of gene expression](https://doi.org/10.1016/j.cell.2014.10.002). *Cell*. 2014;159:925–939.
[^crispri-regulation]: Qi LS, Larson MH, Gilbert LA, et al. [Repurposing CRISPR as an RNA-guided platform for sequence-specific control of gene expression](https://doi.org/10.1016/j.cell.2013.02.022). *Cell*. 2013;152:1173–1183.
[^combinatorial-networks]: Guet CC, Elowitz MB, Hsing W, Leibler S. [Combinatorial synthesis of genetic networks](https://doi.org/10.1126/science.1067407). *Science*. 2002;296:1466–1470.
[^logic-layering]: Moon TS, Lou C, Tamsir A, Stanton BC, Voigt CA. [Genetic programs constructed from layered logic gates in single cells](https://doi.org/10.1038/nature11516). *Nature*. 2012;491:249–253.
[^circuit-design-automation]: Nielsen AAK, Der BS, Shin J, et al. [Genetic circuit design automation](https://doi.org/10.1126/science.aac7341). *Science*. 2016;352:aac7341.
[^load-driver]: Del Vecchio D, Ninfa AJ, Sontag ED. [Modular cell biology: retroactivity and insulation](https://doi.org/10.1038/msb4100204). *Molecular Systems Biology*. 2008;4:161；Mishra D, Rivera PM, Lin A, Del Vecchio D, Weiss R. [A load driver device for engineering modularity in biological networks](https://doi.org/10.1038/nbt.3044). *Nature Biotechnology*. 2014;32:1268–1275.
[^toggle-switch]: Gardner TS, Cantor CR, Collins JJ. [Construction of a genetic toggle switch in *Escherichia coli*](https://doi.org/10.1038/35002131). *Nature*. 2000;403:339–342.
[^repressilator]: Elowitz MB, Leibler S. [A synthetic oscillatory network of transcriptional regulators](https://doi.org/10.1038/35002125). *Nature*. 2000;403:335–338.
[^tunable-oscillator]: Stricker J, Cookson S, Bennett MR, Mather WH, Tsimring LS, Hasty J. [A fast, robust and tunable synthetic gene oscillator](https://doi.org/10.1038/nature07389). *Nature*. 2008;456:516–519.
[^pulse-network]: Basu S, Mehreja R, Thiberge S, Chen MT, Weiss R. [Spatiotemporal control of gene expression with pulse-generating networks](https://doi.org/10.1073/pnas.0307571101). *Proceedings of the National Academy of Sciences USA*. 2004;101:6355–6360.
[^synthetic-counter]: Friedland AE, Lu TK, Wang X, Shi D, Church G, Collins JJ. [Synthetic gene networks that count](https://doi.org/10.1126/science.1172005). *Science*. 2009;324:1199–1202.
[^recombinase-memory]: Bonnet J, Subsoontorn P, Endy D. [Rewritable digital data storage in live cells via engineered control of recombination directionality](https://doi.org/10.1073/pnas.1202344109). *Proceedings of the National Academy of Sciences USA*. 2012;109:8884–8889.
[^single-cell-noise]: Elowitz MB, Levine AJ, Siggia ED, Swain PS. [Stochastic gene expression in a single cell](https://doi.org/10.1126/science.1070919). *Science*. 2002;297:1183–1186.
[^resource-competition]: Qian Y, Huang HH, Jiménez JI, Del Vecchio D. [Resource competition shapes the response of genetic circuits](https://doi.org/10.1021/acssynbio.6b00361). *ACS Synthetic Biology*. 2017;6:1263–1272.
