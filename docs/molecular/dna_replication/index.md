# DNA 复制 { #dna }

DNA 的两条链互相配对，也各自带着合成另一条链所需的序列信息。如果让它们分开，再分别合成一条互补链，就能从一个双螺旋得到两个。不过，要把这件事做成，还得解决几个具体问题：两条模板方向相反，聚合酶却只会朝一个方向延长新链；双螺旋不断打开，前面的 DNA 会越拧越紧；到了线性染色体的末端，常规复制又会留下缺口。

细胞用许多蛋白质共同完成这项工作。我们从亲代链的去向开始，看一个核苷酸怎样接上新链，再把这些反应放到向前推进的复制叉上。以 RNA 为模板合成 DNA 的过程另见[逆转录](reverse_transcription.md)；本页讲到端粒酶时，也会遇到这类反应。

## 半保留复制 { #semiconservative-replication }

**半保留复制（semiconservative replication）**指一次复制后，每个子代双链 DNA 各含一条亲代链和一条新生链。两条亲代链因此分别进入两个子代双螺旋，各自保存着完整的一份序列。

如果只知道 DNA 的互补结构，也仍可以提出其他模型：亲代双链完整保留，另外产生一条全新的双链；或者旧链被分散到子代 DNA 中，使每条链都含新旧片段。要区分它们，需要有办法认出旧 DNA，而不能只看复制前后 DNA 总量增加了多少。

[![保守、半保留与分散复制在重氮转轻氮后对密度条带的预测](../_img/dna_replication/semiconservative-models.jpg){ width="560" height="777" }](../_img/dna_replication/semiconservative-models.jpg)
/// caption
蓝色表示原有重标记，粉色表示新合成的轻标记。先比较第一代：保守模型预测两带，其余两种预测中间带；第二代的预测才把半保留与分散模型进一步分开。[^fig-weaver-20-3]
///

Meselson 与 Stahl 让大肠杆菌先在含 $^{15}$N 的培养基中生长，使 DNA 获得较重的氮同位素标记，再转入含 $^{14}$N 的培养基。新合成的链主要使用轻氮，旧链仍保留重氮；取出不同时间的 DNA，就能追踪旧材料去了哪里。[^meselson-stahl]

关键在于怎样把它们分开。在 CsCl 的平衡密度梯度离心中，DNA 会聚集到与自身浮力密度相应的位置。全重 DNA、全轻 DNA 和一重一轻的杂合双链有不同的密度，因而形成不同位置的条带。重标记比例越高，DNA 的浮力密度越大，条带就越靠近梯度中密度较高的一端。

[![Meselson–Stahl 实验中不同世代 DNA 的密度条带与光密度曲线](../_img/dna_replication/meselson-stahl-bands.jpg){ width="430" height="678" loading="lazy" }](../_img/dna_replication/meselson-stahl-bands.jpg)
/// caption
每一横行对应右侧标出的世代数。原始重带逐渐被中间带替代；约两代时，中间与轻带并存。底部混样帮助比较各带位置，右侧曲线是条带的光密度读数。[^fig-weaver-20-4]
///

复制约一代后，主要出现一条中间密度带。这排除了“旧双链完整保留、旁边生成全新双链”的保守模型，因为后者应该同时产生重带和轻带。但只到这一步，半保留与分散模型还没有分出胜负。

再过一代，半保留模型预测：每条杂合双链分开后，旧重链会再次得到一条新轻链，原来的轻链则配上一条新轻链，于是杂合 DNA 与全轻 DNA 各占约一半。分散模型却预测新旧材料仍混在每个分子中，只是重材料的比例继续降低，主要条带应整体向轻侧移动。实验得到前一种结果。这个实验漂亮的地方，就在于两代之间的变化：第一代排除了保守模型，第二代又区分了半保留和分散模型。

!!! note "双链分开后的密度分布"

    两种模型的差别，还可以从单链的组成来理解。假设取重氮培养转到轻氮培养后的第一代 DNA，使双链完全分开：半保留模型预测，一条单链保留旧的重标记，另一条是新合成的轻链；分散模型则预测，每条单链内部都混有新旧材料。前者因而预期出现重、轻两类单链，后者则仍以中间密度的单链为主。

    这是根据模型作出的预测。若用密度实验检验，需要维持 DNA 的单链状态，并设置相应的重、轻单链对照。单双链的浮力密度不同，条带位置也应分别标定。

## DNA 的聚合反应 { #replication-chemistry }

### 模板、引物和 dNTP { #dntp }

DNA 聚合酶需要一个**引物—模板接头（primer–template junction）**。模板提供下一步配对的碱基；引物已经与模板配对，并留下可以继续延长的 3′-OH。图中的短链是引物，较长的链是模板。后续核苷酸将逐个接到引物的 3′ 端上，延长这条与模板互补的新链。

[![dNTP 的三个磷酸基及配对的引物—模板接头](../_img/dna_replication/primer-template.jpg){ width="750" height="140" loading="lazy" }](../_img/dna_replication/primer-template.jpg)
/// caption
左图从糖向外依次辨认 α、β、γ 磷酸；右图找到引物暴露的 3′-OH，以及它前方尚未配对的模板。模板与新生链反向平行。[^fig-gene-9-1]
///

原料是四种**脱氧核苷三磷酸（dNTP）**：dATP、dGTP、dCTP 和 dTTP。它们既提供要加入链中的核苷酸，也以三磷酸形式参与反应的能量收支。常规复制型 DNA 聚合酶不能直接把两个游离 dNTP 接成第一段新链；它需要先有这个配对好的末端，才适合继续工作。引发酶能先合成一段引物，为 DNA 聚合酶提供起步的末端。[^replication-chemistry]

### 3′ 端的延长 { #3 }

沿反应图看，引物末端的 3′-OH 进攻来袭 dNTP 的 α 磷酸，形成新的磷酸二酯键。β、γ 两个磷酸一起以焦磷酸的形式离开，后续焦磷酸水解有利于合成方向的净推进。来袭核苷酸的糖上又留下一个新的 3′-OH，于是同样的反应可以再做一次。

[![引物 3′-OH 与来袭 dNTP 反应，释放焦磷酸并延长新链](../_img/dna_replication/polymerization-chemistry.jpg){ width="680" height="431" loading="lazy" }](../_img/dna_replication/polymerization-chemistry.jpg)
/// caption
先找上图引物的 3′-OH，再在下图找到接入后新的 3′-OH。模板碱基决定配对选择，红箭头所指的是化学反应位置。[^fig-gene-9-2]
///

新链总是在 3′ 端增加核苷酸，所以把整条新链的增长方向记作 **5′→3′**；聚合酶沿模板读取的方向则是 3′→5′。图中模板和新链反向平行：聚合酶每沿模板向 5′ 端移动一步，就在新链的 3′ 端接入一个核苷酸。

聚合酶不只是把互补碱基凑在一起。它要定位引物末端、来袭 dNTP 和催化所需的金属离子，使反应基团形成合适的空间关系。许多 DNA 聚合酶的结构常用手掌、手指、拇指来描述：这是对结构形状的称呼，方便我们在三维图中找位置。

[![DNA 聚合酶手状结构示意与真实结构模型](../_img/dna_replication/polymerase-structure.jpg){ width="690" height="315" loading="lazy" }](../_img/dna_replication/polymerase-structure.jpg)
/// caption
左图用手掌、手指和拇指标明位置，右图显示蛋白质与 DNA 的三维结构。找到 DNA 进入的位置，再把反应末端接到前一幅化学图上。[^fig-gene-9-5]
///

### 选择、校对与错配修复 { #replication-fidelity }

正确的碱基配对有利于底物进入适合催化的构象。错配不只改变两块碱基之间的氢键，也会影响引物末端的位置，使继续反应变得困难。如果错误已经接进去了，许多复制型聚合酶还能把新链末端送到另一个活性位点，切掉末端核苷酸，再回到聚合位点继续合成。

[![错配的新生链末端进入核酸外切位点，切除后返回聚合位点](../_img/dna_replication/proofreading.jpg){ width="410" height="1067" loading="lazy" }](../_img/dna_replication/proofreading.jpg)
/// caption
a 中错配末端难以继续延长；b 中新链 3′ 端进入外切位点；c 中修正后的末端重新合成。聚合与校对发生在不同活性位置。[^fig-gene-9-11]
///

这种 **3′→5′ 核酸外切校对**，方向与 DNA 合成相反：它从刚刚增长的末端往回切。逃过聚合酶选择和校对的错配，还可以由复制后的**错配修复**识别，并优先在新生链上纠正。错配修复处理的是已经留在 DNA 中的错误，与聚合酶延伸时的末端校对分属不同步骤。它们共同使正常细胞的复制错误达到极低的水平，常见概括在每 $10^9$ 个核苷酸一次或更低的量级；具体数值取决于物种、序列、聚合酶与测量方式。[^replication-fidelity]

dNTP 的浓度与比例也影响反应速度和误配机会。引发酶以及真核起始用的 Pol α 没有复制型聚合酶那样的完整校对能力，后来将引物区段移除、重新合成，因而也有利于提高最终产物质量。损伤跨越、复制叉重启与修复性合成的取舍，见[DNA 损伤、修复与突变](../dna_repair.md)。

### 滑动钳 { #_1 }

一个聚合酶每秒能接入多少核苷酸，与它一次结合能连续合成多长，是两个问题。即使单步反应很快，如果动不动就从 DNA 上掉下来，长链复制仍会受到影响。环抱 DNA 的**滑动钳（sliding clamp）**为聚合酶提供了可随 DNA 移动的连接点。

[![滑动钳环抱双链 DNA 的结构模型及其与聚合酶的连接示意](../_img/dna_replication/sliding-clamp.jpg){ width="680" height="408" loading="lazy" }](../_img/dna_replication/sliding-clamp.jpg)
/// caption
上排从侧面和孔口看钳环，下排显示它怎样让聚合酶与 DNA 保持联系。钳围住双链，但不把 DNA 锁死在某一个核苷酸位置。[^fig-gene-9-19]
///

细菌常用 β 钳，古菌和真核常用 PCNA。钳装载复合物在 ATP 结合与水解循环中打开钳、识别合适的引物—模板接头、将钳留在 DNA 上并释放。不同生物的钳和装载器有各自的结构组成：细菌使用细菌型钳装载复合物，古菌与真核则使用 RFC 类装载器。

## 复制叉 { #replication-fork }

### 前导链与后随链 { #_2 }

复制进行时，亲代双链在一个分叉处打开，后方是已经复制的部分，前方是尚未打开的双链。这个 Y 形区域称为**复制叉（replication fork）**。以下图中向右推进的复制叉为例。

[![向右移动的复制叉、前导链与后随链上的合成方向](../_img/dna_replication/replication-fork.jpg){ width="760" height="323" loading="lazy" }](../_img/dna_replication/replication-fork.jpg)
/// caption
灰色为亲代模板，红色为新生 DNA，绿色短段为 RNA 引物。上侧新链的 3′ 端随叉向右延伸；下侧每个片段的 3′ 端向左延伸，但新的片段不断在靠近叉的位置启动。[^fig-gene-9-12]
///

上方那条模板以 3′→5′ 方向朝右延伸，聚合酶可以一边随复制叉前进，一边在新链的 3′ 端加原料，这条新链称为**前导链（leading strand）**。

下方模板的方向反过来了。聚合酶仍然只能延长新链的 3′ 端，所以每次合成的方向朝左，远离正在向右推进的叉。等叉继续向右打开一段模板，就需要在新的位置再起一个头，合成下一段。这条新链称为**后随链（lagging strand）**，由一段段冈崎片段连接而成。

“半不连续”说的是这种合成组织；“半保留”说的是旧链进入哪个子代双链。它们回答的问题不同，可以同时成立。正常复制叉的前导链较连续，遇到损伤、障碍或重启时也可出现间隙；这些情况要放回相应反应中看。

### 解链与模板保护 { #_3 }

解旋酶利用 ATP 反应沿 DNA 移动，推动双链打开。许多复制型解旋酶是环形复合体，单链穿过中央孔道。下图展示乳头瘤病毒 E1 解旋酶的一个结构实例；单链 DNA 穿过它的中央孔道，内侧的蛋白环依次与 DNA 接触。细菌 DnaB 与真核 CMG 也采用环状结构，但亚基组成和运动方向有所不同。

[![乳头瘤病毒 E1 解旋酶六聚体结构与 DNA 结合环的运动模型](../_img/dna_replication/helicase-structure.jpg){ width="740" height="403" loading="lazy" }](../_img/dna_replication/helicase-structure.jpg)
/// caption
上排从侧面和孔口看六聚体；下排比较不同核苷酸状态中接触单链 DNA 的蛋白环。下排根据不同核苷酸状态的结构，推测蛋白环如何依次牵引 DNA。[^fig-gene-9-15]
///

暴露的单链很容易局部重新配对，或折成影响复制的二级结构。细菌的 SSB、真核的 RPA，以及古菌中的 SSB/RPA 类蛋白覆盖单链，帮助维持可供复制的模板状态，也减少单链被核酸酶降解的机会。

双螺旋被打开时，拓扑问题会传到前方：如果 DNA 不能自由转动，未复制部分会积累额外扭转；叉本身的旋转又可能把缠绕转移到后方的子代分子之间。解旋酶忙着拆开碱基对，拓扑异构酶则通过受控的切割与重接来改变链的缠绕关系。

[![复制引起正超螺旋及 II 型拓扑异构酶进行链穿越的示意](../_img/dna_replication/replication-topology.jpg){ width="420" height="712" loading="lazy" }](../_img/dna_replication/replication-topology.jpg)
/// caption
沿图看叉前方怎样积累扭转，再看暂时切开一段双链、让另一段穿过并重新连接的过程。图以细菌旋转酶相关的拓扑变化说明原理。[^fig-gene-9-17]
///

细菌 DNA 旋转酶可以引入负超螺旋，I 型或 II 型拓扑异构酶参与解除不同形式的应力；II 型酶还能解开复制产物之间的互锁。连接数和酶类别见[DNA 拓扑与超螺旋](../../biochem/nucleic_acid.md#dna-topology-supercoiling)。

### 冈崎片段与长号模型 { #leading-lagging-coordination }

**引发酶（primase）**能够从头合成一段短核酸，为 DNA 聚合酶准备配对好的 3′-OH。大肠杆菌 DnaG 合成短 RNA，并与 DnaB 解旋酶动态配合；许多古菌使用 PriS–PriL 类引发酶；真核 Pol α–primase 则先合成 RNA，再接上一小段 DNA。

前导链建立起始接头后，可以较长时间连续延伸；后随链必须反复引发。后随链聚合酶又与整个复制体保持联系，于是模板在它附近形成一个动态的环。环的长度随片段合成而改变，因此得名**长号模型（trombone model）**。长号演奏时，伸缩管来回移动；这里随合成伸长、又在片段完成后释放的，是后随链模板形成的环。

以下用大肠杆菌模型走一圈。先认出右侧负责开链的解旋酶，再看下方后随链模板形成的环，始终盯住正在增长的新链 3′ 端。

[![大肠杆菌长号模型中后随链延伸、新 RNA 引物形成与装载新滑动钳的阶段](../_img/dna_replication/trombone-a-c.jpg){ width="470" height="1251" loading="lazy" }](../_img/dna_replication/trombone-a-c.jpg)
/// caption
a：已有冈崎片段正在延长；b：靠近解旋酶的新模板上出现 RNA 引物；c：装载器把新的钳环留在该引物—模板接头。此图裁取原图左列 a–c。[^fig-gene-9-23]
///

随着复制叉继续前进，新的单链模板暴露出来，DnaG 再放下一段 RNA 引物。钳装载器把新钳留在这个接头，一个可工作的后随链聚合酶接上去，开始下一段 DNA 合成。与此同时，前一个片段可以继续延长，直到接近它前面的片段边界。

[![长号模型中新冈崎片段开始、旧片段完成以及聚合酶释放的阶段](../_img/dna_replication/trombone-d-e.jpg){ width="490" height="1065" loading="lazy" }](../_img/dna_replication/trombone-d-e.jpg)
/// caption
d：另一后随链聚合酶接到新装载的钳上；e：前一个片段完成，其聚合酶释放并可参与后续循环。对应原图右列 d–e。[^fig-gene-9-23]
///

这张教材图画出一个前导链聚合酶和两个交替工作的后随链聚合酶，表示前一个冈崎片段尚未完成时，后一个片段已经开始合成。不同物种、复制状态和实验条件下，复制体的组分数目与连接关系会变化。图中引发、装钳、延伸与释放反复进行，让后随链合成能够跟上不断打开的模板。真核的 Pol α–primase、Pol δ 和 CMG 以另一种结构组织完成这些步骤，后面再作比较。

???+ abstract "在显微镜下看一条 DNA 变长"

    长号模型描绘了复制体内各组分的位置。若想进一步测量一个复制体走得多快、会不会中途停顿，可以把它合成的 DNA 直接放到显微镜下观察。Graham 等在 2017 年用纯化的大肠杆菌复制蛋白重构了这样的反应：DNA 的一端固定在玻璃表面，圆形模板不断进行滚环复制，产物则在液流中被拉长。

    [![表面固定的 DNA 模板、复制体装配及滚环复制的实验示意](../_img/dna_replication/single-molecule-replication-setup.jpg){ width="740" height="175" loading="lazy" }](../_img/dna_replication/single-molecule-replication-setup.jpg)
    /// caption
    左侧为 8.6 kb 圆形模板，带生物素的尾端与表面连接；右侧箭头标出液流方向。复制产物逐渐延长，携带复制叉的圆形模板离固定端越来越远。原图 1C，示意图。[^fig-single-molecule-replication]
    ///

    染料 SYTOX Orange 使双链 DNA 发光。连续拍照，就能把圆形模板到固定端的距离换算成已合成的 DNA 长度。下图 D 是反应开始 180 秒时的视野；E 从中挑出三条分子，按时间排列它们的图像。F 再把各时刻的位置连续铺开，得到时空图：纵轴的时间向下增加，横轴表示分子长度，亮线向右延伸就意味着产物在增长。

    [![滚环复制产物的荧光图像、三个分子的延伸轨迹及复制速度分布](../_img/dna_replication/single-molecule-replication-images.jpg){ width="740" height="630" loading="lazy" }](../_img/dna_replication/single-molecule-replication-images.jpg)
    /// caption
    D 中标出的 1、2、3 与 E、F 的三个分子对应，比例尺为 10 μm；F 下半部的拟合得到各分子的平均复制速度。G 汇总 84 个分子，在该体外条件下平均为 470 ± 180 bp/s（平均值 ± 标准差）。原图 1D–G。[^fig-single-molecule-replication]
    ///

    同一视野里的分子，延伸速度也可以不同。论文进一步分析单分子轨迹，还观察到合成中的停顿和速度变化，并通过调整反应组分分别研究前导链与后随链。这样的体外重构，让复制过程中的变化能够被逐个记录下来；群体平均得到的一条平滑曲线，可能就把这些细节藏住了。

### 冈崎片段成熟 { #rna-dna }

冈崎片段之间最初并不是一条完整的 DNA 链。下一个片段的 5′ 端还带着引物，片段之间也有需要封闭的切口。在大肠杆菌中，DNA polymerase I 利用聚合活性向前填补，同时以 5′→3′ 核酸外切活性移除前方引物，让切口的位置向前移动，称为**切口平移（nick translation）**。RNase H 也参与处理 RNA–DNA 杂交中的 RNA。

[![大肠杆菌 Pol I 移除 RNA 引物、填补 DNA 并由连接酶封口的过程](../_img/dna_replication/nick-translation.jpg){ width="480" height="524" loading="lazy" }](../_img/dna_replication/nick-translation.jpg)
/// caption
红段是待移除的引物。Pol I 在去除前方核苷酸的同时，从左侧片段的 3′ 端延长；最后的切口由 DNA 连接酶封闭。[^fig-weaver-20-15]
///

等聚合酶填满缺口后，剩下的是相邻的 3′-OH 与 5′-磷酸之间尚未连接的一处切口。DNA 连接酶在这里形成最后一个磷酸二酯键，两个片段便接成连续的链。

真核细胞主要由 Pol δ 延伸并推开前方片段的 5′ 端，形成小瓣状结构（flap），再由 FEN1 切除。较长的 flap 可需要 Dna2 与 FEN1 协作，RNase H2 参与 RNA 的清除，最终由 DNA ligase I 封口。古菌常见 RNase H、Fen1、PCNA 和连接酶等组合，具体成员依谱系而变。[^lagging-strand-maturation]

???+ abstract "冈崎片段：短 DNA 为什么会先出现，再消失"

    短时间加入带放射性标记的 DNA 前体，可以优先标记刚刚合成的部分，再按产物大小分离。下面左图所示的 T4 噬菌体复制实验中，最短标记时间主要得到短 DNA；时间延长后，较长 DNA 中的标记增加。右图换成连接酶有缺陷的噬菌体，短片段会持续积累。

    [![T4 噬菌体 DNA 短脉冲标记及连接酶缺陷条件下的产物分布](../_img/dna_replication/okazaki-pulse.jpg){ width="730" height="522" loading="lazy" }](../_img/dna_replication/okazaki-pulse.jpg)
    /// caption
    横轴是距离心管顶部的相对距离，纵轴是放射性读数。左图中的长 DNA 随时间增多，右图的连接酶缺陷使短片段难以并成长链。这里按沉降行为分离大小，与前面的 CsCl 平衡密度实验不同。[^fig-weaver-20-6]
    ///

    这组证据把短产物接到了长链形成过程中，支持至少一条新链分段合成。早期某些实验中，前导链也呈现许多短片段，曾使解释更加复杂。后来在大肠杆菌中结合链特异检测与切除修复通路干预，发现新合成前导链可以长得多；误掺核糖核苷酸后的切除，是造成许多前导链断片的原因。因此，实验中提取到的短 DNA，有些是在复制时分段合成的，有些则来自后续切除；区分这两种来源，才能判断新链最初怎样形成。[^okazaki-fragments]

## 复制起点与许可 { #replication-origins }

### 细菌的复制起始 { #_4 }

复制叉负责向前工作，**复制起点（origin of replication）**则是它被建立起来的区域。许多起点会发出两个相背运行的叉，在染色体上形成逐渐扩大的复制泡；一个起点及其复制所覆盖的区域构成一个复制子。

[![大肠杆菌复制中 DNA 的放射自显影、描图与环状双向复制示意](../_img/dna_replication/theta-replication.jpg){ width="760" height="186" loading="lazy" }](../_img/dna_replication/theta-replication.jpg)
/// caption
左侧为复制中分子的实际观察及描图，右侧表示复制泡沿环状 DNA 扩展，最后形成两条环。中间阶段的外形像希腊字母 θ。[^fig-weaver-20-9]
///

大肠杆菌常用一个 oriC 起点启动一轮染色体复制。ATP 结合状态的 DnaA 在起点的多个识别位点协同装配，使 DNA 解链元件打开；随后 DnaB 解旋酶被装载，引发酶与 Pol III 等合成装置加入，两个复制叉向相反方向出发。

[![大肠杆菌起点识别、局部解链、解旋酶装载和双向复制叉建立的示意](../_img/dna_replication/bacterial-initiation.jpg){ width="460" height="1155" loading="lazy" }](../_img/dna_replication/bacterial-initiation.jpg)
/// caption
从 DnaA 结合开始，依次找 DnaB、引发酶和两套合成装置。图中的 9-mer、13-mer 概括经典起点元件，具体 oriC 位点排列比这幅组装示意更细致。[^fig-gene-9-27]
///

复制起始以后，起点还会经历一段暂时难以再次启动的时期。DnaA 的 ATP/ADP 状态、合成与结合位点滴定，以及起始后的失活过程，都会影响下一次启动。在大肠杆菌中，Dam 甲基化与 SeqA 对新复制、半甲基化 oriC 的结合，还能暂时限制再起始。

!!! tip "快速生长时的多轮复制"

    在快速生长条件下，大肠杆菌完成一轮染色体复制所需时间可能长于两次分裂的间隔，于是前一轮尚未结束，下一轮就已从新复制出的起点启动。一个尚未分裂的细胞里，因而可以同时有多轮复制叉工作；这样的重叠使染色体复制能够跟上细胞的快速增殖。

### 真核复制许可 { #eukaryotic-licensing }

真核染色体更长，通常需要许多起点共同完成复制。如果同一区域重复启动，可能多复制；如果一大片区域没有及时启动，又可能留到周期结束仍未复制。细胞把准备起点与真正开动复制叉分成不同的状态。

晚 M 期至 G$_1$ 期，CDK 活性较低，ORC、CDC6 和 CDT1 帮助把两个头对头的 MCM2–7 六聚体装在双链 DNA 上。这个装载过程建立**复制前复合体（pre-replicative complex，pre-RC）**。此时起点获得了**复制许可（licensing）**，但装上的 MCM 尚未作为活性复制叉解旋酶工作。

进入 S 期，DDK 与 S-CDK 促进后续组装与激活，Cdc45、GINS 等加入，形成 **Cdc45–MCM2–7–GINS（CMG）**解旋酶。两个活性复合体分别建立相反方向的复制叉。与此同时，较高 CDK 活性、CDC6/CDT1 的降解或定位变化，以及后生动物 geminin 对 CDT1 的抑制等机制，使新 MCM 的装载受到限制。

[![真核细胞周期中解旋酶装载与激活处于不同状态的示意](../_img/dna_replication/replication-licensing.jpg){ width="680" height="463" loading="lazy" }](../_img/dna_replication/replication-licensing.jpg)
/// caption
上半部允许装载、尚未激活，下半部抑制新装载。正常核基因组的起点主要在 S 期激活；进入 G₂ 和 M 期后，新装载仍受抑制，直到下一轮许可阶段。[^fig-gene-9-33]
///

这样，某个起点可以先准备好，之后再使用；用过之后，在同一轮 S 期中又难以从头装一套新的。并非每个已获许可的起点最终都会启动，一部分会被邻近复制叉经过后被动复制，也能在复制受阻时提供备用起始机会。详细周期调控见[细胞周期中的复制许可](../../cell/cell_cycle.md#replication-licensing)。

真核 Pol α–primase 建立 RNA–DNA 引物后，主要延伸任务交给 Pol ε 与 Pol δ。在通常的未受扰动复制叉中，Pol ε 承担大部分前导链合成，Pol δ 承担大部分后随链合成；Pol δ 也参与起点附近的前导链建立以及某些重启和填补。CMG 周围还有一批辅助蛋白：Mcm10 参与复制起始和解链，Ctf4/And-1 帮助联系 Pol α–primase 与复制体，Mrc1/Claspin 以及 Timeless–Tipin 等则参与稳定复制叉、协调推进及复制压力应答。[^eukaryotic-replisome]

### 不同生物的复制系统 { #_5 }

出芽酵母起点有较明显的序列约束；后生动物常表现为范围较宽、使用概率不同的起始区，受到序列性质、核小体、转录、核内环境和发育状态影响。在动物中寻找复制起点，通常需要把序列特征与细胞内的实际起始位置、染色质状态结合起来判断。[^origin-selection]

许多古菌用 Orc1/Cdc6 类蛋白识别起点、招募 MCM，滑动钳和多种复制叉蛋白也与真核同源；染色体可能有一个或多个起点。一些古菌在实验中删除全部已知起点后，仍能依赖重组相关方式起始复制。许多含 PolD 的古菌以 D 家族聚合酶完成主要染色体复制，另一些谱系主要使用 PolB；这些聚合酶与古菌的解旋酶、滑动钳等共同组成其复制装置。[^archaeal-replication]

| 工作 | 细菌代表系统 | 古菌常见系统 | 真核核基因组 |
| --- | --- | --- | --- |
| 起点识别与装载 | DnaA；DnaC 等装载 DnaB | Orc1/Cdc6 类蛋白；MCM | ORC、CDC6、CDT1 装载 MCM2–7 |
| 解链 | DnaB | MCM 及相关辅助因子 | CMG |
| 引发 | DnaG 合成 RNA | PriS–PriL 类引发酶 | Pol α–primase 合成 RNA–DNA 引物 |
| 主要延伸 | Pol III 全酶 | PolD 或 PolB，依谱系而异 | Pol ε、Pol δ 的主要链分工 |
| 滑动钳与装载器 | β 钳；细菌型装载器 | PCNA；RFC 类装载器 | PCNA；RFC |
| 单链保护 | SSB | SSB/RPA 类蛋白 | RPA |
| 片段成熟 | Pol I、RNase H、连接酶 | RNase H、Fen1、连接酶等 | Pol δ、FEN1/Dna2、RNase H2、ligase I |

## 复制终止 { #replication-termination }

复制叉大多通过与相向而来的复制叉会合而结束。两套机器越来越近，最后一段 DNA 仍要复制，引物仍要处理，后方子代分子之间的缠绕也要解除。序列已经各有一份，不等于染色体已经可以各走各的。

[![环状 DNA 复制产物相互套连并由 II 型拓扑异构酶解开的示意](../_img/dna_replication/decatenation.jpg){ width="390" height="840" loading="lazy" }](../_img/dna_replication/decatenation.jpg)
/// caption
跟随红色的新链看：两个子代环可以仍然互锁。暂时的双链切割、穿越和重接，使它们最终分离。[^fig-gene-9-35]
///

大肠杆菌的 Tus–Ter 系统能从特定方向阻挡复制叉，把许多会合事件限制在终止区。其他细菌可能缺少这套系统，或使用其他屏障。真核染色体大多数终止位置也由相邻复制叉的相遇决定，并不预先固定在一种通用终止序列上。

合成和拓扑处理结束后，复制体还要卸下来。在研究较充分的真核系统中，终止状态的 CMG 受到 MCM7 泛素化标记，再由 Cdc48/p97 类 ATPase 拆解并从染色质移除。若提前做这件事，复制叉会失去继续推进所需的核心装置。核糖体 DNA、着丝粒或强蛋白障碍附近，还可有局部、具方向性的复制叉屏障，需要分别分析。[^replication-termination]

### 端粒复制与维护 { #telomere-replication }

对于环状模板，总可以沿着环继续找到后面的序列；线性染色体终端却真的会走到头。先固定哺乳动物端粒的一端来看：富 G 链朝末端伸出 3′ 单链突出端，与之互补的富 C 链较短。

这个不对称的末端，使两种复制产物遇到不同问题。以前导方式合成的新 G 链，只能复制到旧 C 链的 5′ 末端；旧 G 链原来多伸出去的那一段，没有相应 C 链模板可供它照着合成。以旧 G 链为模板合成的新 C 链，则需要不断放下引物；常规复制体难以一直把末端区域完整复制下来。再加上形成新突出端所需的 5′ 端切除，末端维护不能只靠常规复制叉完成。[^telomere-replication]

**端粒酶**携带自己的 RNA 模板。它的催化蛋白称为端粒酶逆转录酶（TERT）：RNA 与染色体 G 链的 3′ 端配对，TERT 沿这段 RNA 模板延长 DNA；用完一段模板后，重新对齐，再加一轮重复。染色体末端缺少的那段模板，便由端粒酶内部的 RNA 提供。

[![端粒酶内部 RNA 与 DNA 末端对齐、延长、重定位及再次延长的循环](../_img/dna_replication/telomerase-cycle.jpg){ width="460" height="837" loading="lazy" }](../_img/dna_replication/telomerase-cycle.jpg)
/// caption
绿色曲线是酶携带的 RNA，灰色与红色是 DNA。沿 DNA 的 3′ 端看每次增加的部分；模板重定位使同一段 RNA 能指导重复添加。[^fig-gene-9-38]
///

G 链延长后，互补 C 链仍要合成。CST（CTC1–STN1–TEN1）与 Pol α–primase 协作完成 C 链填补。Takai 等在 2024 年结合重构复制和细胞实验，区分了两类末端复制缺口：端粒酶维护 G 链，CST–Pol α–primase 则解决 C 链的不足。两者分别作用于一条链，共同维持端粒末端。[^telomere-two-problems]

[![前导端和后随端端粒的两条链分别受到加工和填补的研究模型](../_img/dna_replication/telomere-end-maintenance.jpg){ width="750" height="300" loading="lazy" }](../_img/dna_replication/telomere-end-maintenance.jpg)
/// caption
从左侧复制叉进入中间两条路径：上方为后随端 C 链不足，下方为前导端加工与 G 链延长。粉色标出 CST–Pol α–primase 的作用，蓝色标出端粒酶作用；数值仅对应论文中的体系。[^fig-telomere-end-maintenance]
///

???+ abstract "端粒酶最初是怎样被找到的"

    Greider 与 Blackburn 在四膜虫提取物中检测到一种活性：它能向合适的端粒引物添加特定重复序列。这个实验把“末端需要额外合成”接到了可以在试管中测量的酶反应上。随后对其 RNA 组分与催化蛋白的研究，才逐步建立了今天的端粒酶机制。[^telomerase-discovery]

富 G 序列形成的二级结构、端粒结合蛋白和复制压力，也会影响复制叉通过。端粒酶活性、末端切除与填补、端粒修剪，以及某些细胞中的重组型端粒替代延长（ALT），共同影响长度稳态。不同细胞及生理状态下，端粒长度的变化可以相差很大。末端保护与染色质结构见[染色体的末端组织](../../cell/nucleus_chromatin.md#chromosome-architecture)。

## 染色质重建 { #chromatin-replication }

真核 DNA 缠绕在组蛋白上，形成核小体。复制叉通过时，前方的核小体需要暂时拆开，后方新合成的 DNA 上则要重新装配核小体。亲代 H3–H4 与 H2A–H2B 可以被复制体附近的伴侣回收，重新放到两条子代 DNA 上；新合成组蛋白则补足另一部分，使复制后的 DNA 恢复相应的核小体密度。

[![复制叉前方亲代核小体拆解、后方旧组蛋白回收与新组蛋白补充的示意](../_img/dna_replication/histone-recycling.jpg){ width="650" height="578" loading="lazy" }](../_img/dna_replication/histone-recycling.jpg)
/// caption
深浅颜色区分亲代与新生组蛋白。旧组蛋白被分配到两条子代 DNA，新组蛋白补足其余位置。图示概括这种分配关系，各局部区域的实际比例可以不同。[^fig-gene-8-43]
///

MCM2、Pol α 相关转移途径及 Pol ε 辅助亚基等，分别参与不同链方向的亲代组蛋白传递；ASF1、CAF-1 等组蛋白伴侣参与递送和装配。总体分配可以近似平衡，局部却会受到转移装置和染色质环境影响。亲代组蛋白的某些修饰为后续读写酶提供线索，新组蛋白上的修饰再逐步成熟。[^parental-histone-recycling]

染色质状态就在组蛋白回收、核小体重新装配和修饰逐渐恢复的过程中延续下来。复制还与姐妹染色单体黏连的建立相协调，为后续染色体分配保留两份复制产物之间的联系。完整背景见[细胞核、染色质与核糖体](../../cell/nucleus_chromatin.md)。

## 其他复制方式 { #alternative-replication-modes }

### θ 型与滚环复制 { #_6 }

前面环状 DNA 上扩大的复制泡，在中间阶段形似 θ，因此称为 θ 型复制。许多细菌、古菌的环状染色体以及质粒，都可以形成这一类复制中间体；具体的起点数和复制方向依系统而异。

另一种做法，是先在环的一条链上产生特定切口。切口留下一个 3′-OH，聚合酶便能沿完整的互补环延伸，把原来那条被切开的链逐渐置换出去。复制可以绕着环继续进行，伸出的链也越来越长，这就是**滚环复制（rolling-circle replication）**。

[![环状 DNA 单链切口引发、链置换与产物切割闭合的滚环复制示意](../_img/dna_replication/rolling-circle.jpg){ width="550" height="507" loading="lazy" }](../_img/dna_replication/rolling-circle.jpg)
/// caption
先找切口产生的 3′ 端，再跟随红色新链沿完整蓝色模板延长。被逐出的旧链伸在环外；图最后显示产物被切出、连接成环，再合成互补链的过程。[^fig-weaver-20-12]
///

不同系统会在不同阶段切割、闭合或合成互补链，产物可以是单体，也可以先形成串联多聚体，再加工成单位基因组。多种质粒、单链 DNA 噬菌体和某些真核病毒使用滚环或相关机制。[^rolling-circle]

### 线粒体复制 { #_7 }

动物线粒体 DNA 常以重链与轻链命名互补的两条链。哺乳动物主要由 Pol γ、Twinkle 解旋酶和线粒体单链结合蛋白 mtSSB 组织复制，RNA 聚合酶还参与提供引物。经典链置换模型中，一条新链先开始合成，逐步暴露另一条模板上的起始区域，再启动互补链合成，因而两条链的合成不同步。

[![脊椎动物线粒体 D 环区域及链置换、RITOLS、链耦联三种复制模型](../_img/dna_replication/mitochondrial-models.jpg){ width="760" height="547" loading="lazy" }](../_img/dna_replication/mitochondrial-models.jpg)
/// caption
A 标出非编码区中的 D 环和相关位点；B 从左到右比较三种模型。实线是 DNA，虚线是 RNA。先看两条新链是否同步形成，再看暴露模板上是否存在长段 RNA。[^fig-mitochondrial-models]
///

一些实验观察到后随链模板上广泛结合 RNA，形成称为 **RITOLS** 的模型；另一些中间体支持更为耦联的双链合成。细胞类型、复制阶段和样品处理，都可能影响检测到的结构。这些模型主要用于讨论动物线粒体。其他物种的线粒体以及叶绿体，在基因组结构、复制酶、引发与终止方式上都有差异，需要各自的实验依据。[^mitochondrial-replication]

## 逆转录 { #reverse-transcription }

端粒酶以 RNA 为模板延长 DNA，是逆转录酶的一种。其他逆转录酶也参与病毒复制、移动遗传元件的增殖，以及部分细菌的抗噬菌体防御。

### 病毒的两次链转移 { #retroviral-reverse-transcription }

逆转录病毒需要通过 tRNA 引发、RNA 降解、两次链转移及两条 DNA 的相互延伸，重建完整末端。具体过程与分阶段图解见[逆转录病毒的两次链转移](reverse_transcription.md#retroviral-reverse-transcription)。

### 其他逆转录系统 { #reverse-transcriptase-diversity }

HBV、逆转座元件、group II intron 和 retron 使用的引物与生成的产物各有特点；系统比较及实验技术入口见[其他逆转录系统](reverse_transcription.md#reverse-transcriptase-diversity)。逆转录的完整讲解见子页，早期讨论仍保留在本页页末。

## 参考资料与延伸阅读 { #references }

本页主要依据 *Molecular Biology of the Gene* 第 7 版第 9 章，染色质装配参照第 8 章；经典复制实验及相应图版补充自 Weaver 第 5 版第 20 章。较新的机制及物种差异在相邻脚注中注明。

- Watson JD, Baker TA, Bell SP, et al. *Molecular Biology of the Gene*. 7th ed. Pearson / Cold Spring Harbor Laboratory Press; 2014。
- Weaver RF. *Molecular Biology*. 5th ed. McGraw-Hill; 2012。
- Meselson M, Stahl FW. [The Replication of DNA in Escherichia coli](https://pmc.ncbi.nlm.nih.gov/articles/PMC528642/). *PNAS*. 1958;44:671–682.
- Okazaki R, et al. [Discontinuous Synthesis of DNA during Replication](https://pmc.ncbi.nlm.nih.gov/articles/PMC305445/). *PNAS*. 1968;60:329–336.
- Burgers PMJ, Kunkel TA. [Eukaryotic DNA Replication Fork](https://www.annualreviews.org/doi/10.1146/annurev-biochem-061516-044709). *Annual Review of Biochemistry*. 2017;86:417–438.
- Graham JE, Marians KJ, Kowalczykowski SC. [Independent and Stochastic Action of DNA Polymerases in the Replisome](https://doi.org/10.1016/j.cell.2017.05.041). *Cell*. 2017;169:1201–1213.
- Takai H, et al. [CST–polymerase α-primase solves a second telomere end-replication problem](https://www.nature.com/articles/s41586-024-07137-1). *Nature*. 2024;627:664–670.

[^fig-weaver-20-3]: Weaver RF. *Molecular Biology*. 5th ed. McGraw-Hill; 2012，图 20.3，印刷页 638。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。
[^meselson-stahl]: $^{15}$N／$^{14}$N 转换、密度梯度结果及不同复制模型的预测见 Meselson 和 Stahl 的[原始论文](https://pmc.ncbi.nlm.nih.gov/articles/PMC528642/)。
[^fig-weaver-20-4]: Weaver RF. *Molecular Biology*. 5th ed. McGraw-Hill; 2012，图 20.4，印刷页 638。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。原始条带及曲线出自 Meselson M、Stahl FW，*PNAS*. 1958;44:671–682（[原文](https://pmc.ncbi.nlm.nih.gov/articles/PMC528642/)）。
[^fig-gene-9-1]: Watson JD, Baker TA, Bell SP, et al. *Molecular Biology of the Gene*. 7th ed. Pearson / Cold Spring Harbor Laboratory Press; 2014，图 9–1，印刷页 258。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。
[^replication-chemistry]: 聚合化学、底物与引物需求、复制叉组织主要依据 Watson 等，*Molecular Biology of the Gene*，第 7 版，第 9 章（2014）；也可参阅 Alberts 等的[复制机制章节](https://www.ncbi.nlm.nih.gov/books/NBK26850/)。
[^fig-gene-9-2]: Watson JD, Baker TA, Bell SP, et al. *Molecular Biology of the Gene*. 7th ed. Pearson / Cold Spring Harbor Laboratory Press; 2014，图 9–2，印刷页 259。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。
[^fig-gene-9-5]: Watson JD, Baker TA, Bell SP, et al. *Molecular Biology of the Gene*. 7th ed. Pearson / Cold Spring Harbor Laboratory Press; 2014，图 9–5，印刷页 264。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。B 为与 DNA 结合的 T7 DNA 聚合酶结构，据 Doublié S 等，*Nature*. 1998;391:251–258 改编。
[^fig-gene-9-11]: Watson JD, Baker TA, Bell SP, et al. *Molecular Biology of the Gene*. 7th ed. Pearson / Cold Spring Harbor Laboratory Press; 2014，图 9–11，印刷页 269。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。
[^replication-fidelity]: 聚合酶底物选择、3′→5′ 校对和复制后错配修复的分层贡献见 Alberts 等的[复制机制章节](https://www.ncbi.nlm.nih.gov/books/NBK26850/)及 Ganai 与 Johansson 的[校对综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6153641/)。
[^fig-gene-9-19]: Watson JD, Baker TA, Bell SP, et al. *Molecular Biology of the Gene*. 7th ed. Pearson / Cold Spring Harbor Laboratory Press; 2014，图 9–19，印刷页 280。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。结构图据 Krishna TS 等，*Cell*. 1994;79:1233–1243 改编；其中 DNA 为模型。
[^fig-gene-9-12]: Watson JD, Baker TA, Bell SP, et al. *Molecular Biology of the Gene*. 7th ed. Pearson / Cold Spring Harbor Laboratory Press; 2014，图 9–12，印刷页 270。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。
[^fig-gene-9-15]: Watson JD, Baker TA, Bell SP, et al. *Molecular Biology of the Gene*. 7th ed. Pearson / Cold Spring Harbor Laboratory Press; 2014，图 9–15，印刷页 274。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。乳头瘤病毒 E1 六聚体结构实例，原结构研究为 Enemark EJ、Joshua-Tor L，*Nature*. 2006;442:270–275。
[^fig-gene-9-17]: Watson JD, Baker TA, Bell SP, et al. *Molecular Biology of the Gene*. 7th ed. Pearson / Cold Spring Harbor Laboratory Press; 2014，图 9–17，印刷页 276。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。
[^fig-gene-9-23]: Watson JD, Baker TA, Bell SP, et al. *Molecular Biology of the Gene*. 7th ed. Pearson / Cold Spring Harbor Laboratory Press; 2014，图 9–23，印刷页 285。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。教材据 O’Donnell M，*Current Biology*. 2001;11:R935–R946 改编；本站分两幅展示 a–c 与 d–e，保留原始配色。
[^fig-weaver-20-15]: Weaver RF. *Molecular Biology*. 5th ed. McGraw-Hill; 2012，图 20.15，印刷页 647。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。
[^lagging-strand-maturation]: 真核 Pol α–primase、Pol δ、PCNA、FEN1／Dna2 和 ligase I 的多路径冈崎片段成熟见 Balakrishnan 与 Bambara 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3044941/)；跨域共同功能见 Alberts 等的[复制机制章节](https://www.ncbi.nlm.nih.gov/books/NBK26850/)。
[^fig-weaver-20-6]: Weaver RF. *Molecular Biology*. 5th ed. McGraw-Hill; 2012，图 20.6，印刷页 640。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。原始 T4 实验据 Okazaki R 等，*Cold Spring Harbor Symposia on Quantitative Biology*. 1968;33:129–143 改编。
[^okazaki-fragments]: 不连续合成的经典实验见 Okazaki 等的[原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC305445/)；前导链合成与合成后切除所致断片的区分见 [2019 年大肠杆菌研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC6347710/)及 Williams、Kunkel 的[评述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6397534/)。
[^fig-weaver-20-9]: Weaver RF. *Molecular Biology*. 5th ed. McGraw-Hill; 2012，图 20.9，印刷页 642。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。A 的放射自显影原出处为 Cairns J，*Cold Spring Harbor Symposia on Quantitative Biology*. 1963;28:43–46。
[^fig-gene-9-27]: Watson JD, Baker TA, Bell SP, et al. *Molecular Biology of the Gene*. 7th ed. Pearson / Cold Spring Harbor Laboratory Press; 2014，图 9–27，印刷页 296。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。
[^fig-gene-9-33]: Watson JD, Baker TA, Bell SP, et al. *Molecular Biology of the Gene*. 7th ed. Pearson / Cold Spring Harbor Laboratory Press; 2014，图 9–33，印刷页 301。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。
[^eukaryotic-replisome]: CMG、Pol α、Pol δ、Pol ε、PCNA 及冈崎片段成熟在真核复制叉中的主要分工见 Burgers 与 Kunkel 的[综述](https://www.annualreviews.org/doi/10.1146/annurev-biochem-061516-044709)。
[^origin-selection]: 后生动物起点由序列、染色质、核内结构和发育状态共同选择的证据与方法边界见 Prioleau 与 MacAlpine 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5002974/)。
[^archaeal-replication]: 古菌起点数量、Orc1/Cdc6–MCM、PolD／PolB 分工及无起点复制的谱系差异见 Greci 与 Bell 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7712474/)。
[^fig-gene-9-35]: Watson JD, Baker TA, Bell SP, et al. *Molecular Biology of the Gene*. 7th ed. Pearson / Cold Spring Harbor Laboratory Press; 2014，图 9–35，印刷页 303。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。
[^replication-termination]: 复制叉会合、最后片段合成、拓扑解连和终止后 CMG 卸载的机制与未解决边界见 Dewar 与 Walter 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6386472/)；MCM7 泛素化与 p97 依赖卸载的跨物种证据见 Low 等的[研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC8695382/)。
[^telomere-replication]: 端粒复制叉障碍、前导／后随末端加工、端粒酶延伸与 CST 介导 C 链填补见 Bonnell 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8047117/)。
[^fig-gene-9-38]: Watson JD, Baker TA, Bell SP, et al. *Molecular Biology of the Gene*. 7th ed. Pearson / Cold Spring Harbor Laboratory Press; 2014，图 9–38，印刷页 306。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。
[^telomere-two-problems]: Takai H, Aria V, Borges P, Yeeles JTP, de Lange T. [CST–polymerase α-primase solves a second telomere end-replication problem](https://www.nature.com/articles/s41586-024-07137-1). *Nature*. 2024;627:664–670。体外重构与细胞链长分析支持端粒酶维护 G 链、CST–Pol α–primase 维护 C 链的分工；文中测得的缩短量对应其体系与条件。
[^fig-telomere-end-maintenance]: Takai 等，*Nature*. 2024;627:664–670，图 4e。截取[出版方图 4](https://www.nature.com/articles/s41586-024-07137-1/figures/4)的模型面板，保留原标记；其中数值来自论文所研究体系，不表示所有端粒每轮固定缩短相同长度。
[^telomerase-discovery]: 四膜虫提取物对端粒引物的序列特异延伸活性见 Greider 与 Blackburn 的[原始论文](https://pubmed.ncbi.nlm.nih.gov/3907856/)。
[^fig-gene-8-43]: Watson JD, Baker TA, Bell SP, et al. *Molecular Biology of the Gene*. 7th ed. Pearson / Cold Spring Harbor Laboratory Press; 2014，图 8–43，印刷页 251。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。
[^parental-histone-recycling]: 亲代组蛋白近似均衡分配、MCM2 与链偏向以及新组蛋白填补的机制见 Tian 等的[研究](https://www.nature.com/articles/s41467-023-39185-y)；染色质装配背景见[细胞核、染色质与核糖体](../../cell/nucleus_chromatin.md#nucleosome-chromatin)。
[^fig-weaver-20-12]: Weaver RF. *Molecular Biology*. 5th ed. McGraw-Hill; 2012，图 20.12，印刷页 645。本站截取教材图版区域，去除页眉与原排版正文，保留图中标记；配中文图注，未重绘。
[^rolling-circle]: 细菌质粒滚环复制的切口引发、链置换和终止机制见 Khan 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC232620/)。
[^fig-mitochondrial-models]: Ciesielski GL, Oliveira MT, Kaguni LS. *Animal Mitochondrial DNA Replication*. 2016，[图 8](https://pmc.ncbi.nlm.nih.gov/articles/PMC4964852/#F8)。保留完整原图并转换为 JPEG；B 由作者据 McKinney EA、Oliveira MT，*Genetics and Molecular Biology*. 2013;36:308–315 改编。
[^mitochondrial-replication]: 链置换、RITOLS 和链耦联模型及物种差异见 Ciesielski GL、Oliveira MT、Kaguni LS 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4964852/)（2016）；哺乳动物复制装置与链置换过程另见 Falkenberg 的[机制概述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6056714/)（2018）。

[^fig-single-molecule-replication]: Graham JE, Marians KJ, Kowalczykowski SC. [Independent and Stochastic Action of DNA Polymerases in the Replisome](https://doi.org/10.1016/j.cell.2017.05.041). *Cell*. 2017;169:1201–1213，图 1C、1D–G，印刷页 1203（[作者公开 PDF](https://kowalczykowskilab.ucdavis.edu/PDF_files/Graham%20et%20al.%20%282017%29%20Cell%20169%2C%201201-1213.pdf)第 4 页）。本站分别截取装配示意及完整的观察与测量面板，保留图中配色、标记、坐标轴与比例尺，配中文说明，未重绘。数值来自文中的体外大肠杆菌蛋白重构体系。
