# 脂肪酸分解代谢

三酰甘油把高度还原的脂肪酸压缩在无水脂滴中；需要供能时，脂肪酸先从甘油骨架释放，再被活化为脂酰辅酶 A（fatty acyl-coenzyme A，脂酰-CoA），最后由线粒体或过氧化物酶体逐段缩短。对多数哺乳动物组织而言，线粒体 $\beta$-氧化是这条碳流的主体：碳以乙酰辅酶 A（acetyl-coenzyme A，乙酰-CoA）离开，电子分别进入还原型烟酰胺腺嘌呤二核苷酸（NADH）和电子转移黄素蛋白（electron-transferring flavoprotein，ETF），再与三羧酸循环和呼吸链汇合。肝脏还可把过量乙酰碳改装为水溶性的酮体，送给其他器官利用。

脂肪酸分解包括脂滴动员、脂酰基活化与运输、链长适配、细胞器接力及 $\beta$-氧化反应螺旋。进食或禁食时的组织分工进一步决定这些脂肪酸是否成为可用燃料。脂肪酸的结构与命名见[脂质](lipid.md#fatty-acids)，合成方向见[脂质生物合成](lipid_synthesis.md)。

## 脂肪酸动员与线粒体入口 { #fatty-acid-mobilization-entry }

### 脂滴脂解与循环运输 { #adipose-lipolysis }

白色脂肪细胞把三酰甘油（triacylglycerol，TAG）储存在由磷脂单分子层包围的脂滴中。经典中性脂解依次由脂肪组织三酰甘油脂肪酶（adipose triglyceride lipase，ATGL；基因 *PNPLA2*）、激素敏感性脂肪酶（hormone-sensitive lipase，HSL；基因 *LIPE*）和单酰甘油脂肪酶（monoacylglycerol lipase，MGL；基因 *MGLL*）完成：TAG 先成为二酰甘油（diacylglycerol，DAG），DAG 成为单酰甘油（monoacylglycerol，MAG），最后释放甘油；每次水解还各释放一分子非酯化脂肪酸。ATGL 更偏向起始的 TAG 水解，HSL 对 DAG 尤其重要，MGL 则完成最后一步水解。[^adipose-lipolysis]

儿茶酚胺经肾上腺素能受体、环腺苷一磷酸（cyclic adenosine monophosphate，cAMP）和蛋白激酶 A（protein kinase A，PKA）促进脂滴表面重排，使 HSL 接近底物，并通过脂滴包被蛋白 1（perilipin 1，PLIN1）—$\alpha/\beta$ 水解酶结构域蛋白 5（ABHD5）轴解除对 ATGL 的限制。进食后的胰岛素则降低 cAMP 信号并促进脂肪酸再酯化，抑制净释放。全身脂解通量由脂滴大小、局部血流、脂肪酸再酯化、不同脂肪库的受体组成以及 HSL 等酶的修饰状态共同决定。

释放的脂肪酸与血浆白蛋白非共价结合，可被肝、心、骨骼肌、肾等多种组织摄取。甘油主要由肝和肾等具有甘油激酶活性的组织处理，可进入糖异生或甘油脂代谢。这个器官间过程把储藏脂质的动员与细胞内氧化区分开：脂解增加底物供应，各接收组织的实际氧化速率还受转运、能量需求和代谢状态控制。

### 脂肪酸活化与区室化脂酰-CoA 池 { #fatty-acid-activation }

游离脂肪酸的羧基必须先与辅酶 A（coenzyme A，CoA）形成高能硫酯，才成为多数分解酶识别的底物。脂酰-CoA 合成酶（acyl-CoA synthetase）先生成脂酰腺苷酸，再由 CoA 取代腺苷一磷酸（adenosine monophosphate，AMP）：

$$
\begin{aligned}
&\mathrm{fatty\ acid+CoA\text{-}SH+ATP}\\
&\qquad\rightarrow\mathrm{fatty\ acyl\text{-}CoA+AMP+PP_i},\\
&\mathrm{PP_i+H_2O\rightarrow2P_i}.
\end{aligned}
$$

腺苷三磷酸（adenosine triphosphate，ATP）裂解到 AMP，并伴随无机焦磷酸（inorganic pyrophosphate，PP$_i$）水解，因而从游离脂肪酸起算要付出两个高能磷酸键当量。长链脂酰-CoA 合成酶分布在内质网、线粒体外膜和过氧化物酶体膜等处；“在线粒体外膜活化”描述的是膜上的胞质侧反应界面，长链脂酰-CoA 此时尚未进入基质。酶的链长偏好和膜定位把同一种脂肪酸分配给氧化、再酯化、膜脂重塑或信号脂质合成，形成彼此区室化而非完全混合的脂酰-CoA 池。[^fatty-acid-activation]

### 长链脂酰基的肉碱穿梭 { #carnitine-shuttle }

线粒体内膜不允许长链脂酰-CoA 自由通过，肉碱穿梭搬运的是脂酰基而非整分子 CoA。外膜上的肉碱棕榈酰转移酶 1（carnitine palmitoyltransferase 1，CPT1）把脂酰基从 CoA 转给 L-肉碱；内膜的肉碱／酰基肉碱易位酶（carnitine-acylcarnitine translocase，CACT；基因 *SLC25A20*）以酰基肉碱入基质、游离肉碱出基质的方式交换；位于内膜基质侧的肉碱棕榈酰转移酶 2（CPT2）再把脂酰基交给基质 CoA。胞质侧和基质侧的 CoA 池由此保持分隔，而肉碱循环使用。Reactome 的人工审校路径及 CPT1A、CACT、CPT2 的 UniProt 条目给出了三者的膜拓扑和反应分工。[^carnitine-shuttle]

L-肉碱可由赖氨酸来源的三甲基赖氨酸与甲硫氨酸提供的甲基共同支持合成，也可由膳食和转运获得；它不是一种进入蛋白质的标准氨基酸。肉碱还参与短链酰基缓冲，但这不改变长链脂酰基进入基质时对CPT1—CACT—CPT2的依赖。

短链和部分中链脂肪酸的情形不同。部分非酯化脂肪酸可绕过肉碱系统进入基质，随后由基质酰基-CoA合成酶活化；脂酰-CoA本身仍受内膜通透性限制。可绕行的链长范围具有组织依赖性：小鼠肝可在无肉碱条件下氧化比肾更长的中链游离脂肪酸，心和骨骼肌则仍表现出明显的肉碱依赖。因此，链长界线应结合组织的酶表达和膜运输能力解释。[^medium-chain-entry]

## β-氧化的反应螺旋 { #beta-oxidation-cycle }

脂酰-CoA进入基质后，羧基碳记作C1，邻近的C2和C3分别是α、β碳。每一轮反应在α、β碳之间建立双键，再把水加到双键上，将β碳氧化成酮，最后由CoA从羰基邻位发动硫解。产物是一分子乙酰-CoA和缩短两个碳、可再次进入螺旋的脂酰-CoA。

| 阶段 | 代表反应 | 化学与电子去向 |
| --- | --- | --- |
| 第一次脱氢 | 脂酰-CoA → *trans*-Δ$^2$-烯酰-CoA | 链长特异的脂酰-CoA 脱氢酶以结合型黄素腺嘌呤二核苷酸（flavin adenine dinucleotide，FAD）接收两个电子，随后交给 ETF |
| 水合 | *trans*-Δ$^2$-烯酰-CoA＋H$_2$O → L-3-羟脂酰-CoA | 烯酰-CoA水合酶立体专一地加水，为下一步形成β-酮基 |
| 第二次脱氢 | L-3-羟脂酰-CoA＋NAD$^+$ → 3-酮脂酰-CoA＋NADH＋H$^+$ | 3-羟脂酰-CoA 脱氢酶把 $\beta$-羟基氧化为羰基，氧化型烟酰胺腺嘌呤二核苷酸（NAD$^+$）接收电子形成 NADH |
| 硫解 | 3-酮脂酰-CoA＋CoA-SH → 乙酰-CoA＋缩短的脂酰-CoA | β-酮硫解酶完成逆Claisen缩合式的C2—C3断裂，不是加水水解 |

短、中、长和超长链底物由相互重叠的酶谱处理。超长链和长链底物的后三步多由线粒体三功能蛋白的 $\alpha$、$\beta$ 亚基 HADHA／HADHB 协作，链缩短后又可转交其他水合酶、脱氢酶和硫解酶。四个反应的化学顺序保持不变，实际螺旋则由多种同工酶按链长和组织表达接力。[^mitochondrial-beta-oxidation]

### 电子传递与碳能量计量 { #electron-and-carbon-accounting }

第一次脱氢时，脂酰-CoA 脱氢酶的 FAD 是酶内辅基。还原后的黄素把电子交给可溶性 ETF，再经内膜 ETF:泛醌氧化还原酶（ETF dehydrogenase，ETFDH；又称 ETF-QO）还原辅酶 Q；还原型黄素不会以游离 FADH$_2$ 的形式离开酶。第二次脱氢产生的 NADH 则向复合物 I 供电子。两条电子流在 Q 池及其下游会合，分别具有近似 Q 水平和 NADH 水平的磷氧比（P/O）账本。[^etf-electron-transfer]

棕榈酰-CoA（palmitoyl-CoA，C16:0）经过 7 轮产生 8 分子乙酰-CoA、7 分子 NADH 和 7 对经 ETF 送入 Q 池的电子。若乙酰-CoA 全部进入[三羧酸循环](tca_cycle.md#cycle-stoichiometry)，并采用[电子传递与氧化磷酸化](oxp.md#proton-and-po-ratios)中常用的 NADH 约 2.5 ATP、Q 水平电子对约 1.5 ATP 计量，则从游离棕榈酸开始的条件化账本为：

$$
\begin{aligned}
&8\times10+7\times2.5+7\times1.5-2\\
&\qquad=106\ \mathrm{ATP\ equivalents}.
\end{aligned}
$$

其中减去的 2 来自活化；若起点已经是棕榈酰-CoA，则不再扣除。106 ATP 是以特定 P/O 比、完全氧化和足量二磷酸腺苷（adenosine diphosphate，ADP）、氧与三羧酸循环中间物为前提的标准换算；过氧化物酶体先行缩短、质子漏、组织穿梭及不完全氧化都会改变实际回收。

## 不饱和与奇数链脂肪酸的辅助反应 { #unsaturated-and-odd-chain }

### 不饱和脂肪酸的双键重排 { #unsaturated-fatty-acids }

常见天然不饱和脂肪酸含顺式双键，而β-氧化主螺旋要求*trans*-Δ$^2$-烯酰-CoA。螺旋推进到顺式Δ$^3$中间物时，烯酰-CoA异构酶将其改成*trans*-Δ$^2$构型，随后直接进入水合步骤。由于绕过一次脂酰-CoA脱氢，每遇到这种入口就少形成一对经ETF进入Q池的电子，因而不饱和脂肪酸的ATP回收略低于同碳数饱和脂肪酸。

多不饱和脂肪酸还会形成 2,4-二烯酰-CoA。2,4-二烯酰-CoA 还原酶消耗还原型烟酰胺腺嘌呤二核苷酸磷酸（NADPH），把共轭二烯还原为可由异构酶继续处理的中间物。所需异构酶和还原酶的种类与次数取决于原始双键位置及已经完成的 $\beta$-氧化轮数。[^unsaturated-beta-oxidation]

### 奇数链脂肪酸的丙酰-CoA 去路 { #odd-chain-fatty-acids }

奇数链脂肪酸最后一轮留下一个乙酰-CoA和一个丙酰-CoA。丙酰-CoA先由生物素依赖的丙酰-CoA羧化酶消耗ATP形成D-甲基丙二酰-CoA，再经甲基丙二酰-CoA差向异构酶成为L-异构体，最后由腺苷钴胺素依赖的甲基丙二酰-CoA变位酶重排为琥珀酰-CoA：

$$
\begin{aligned}
&\mathrm{propionyl\text{-}CoA+HCO_3^-+ATP}\\
&\qquad\rightarrow\mathrm{D\text{-}methylmalonyl\text{-}CoA}\\
&\qquad\phantom{\rightarrow{}}+\mathrm{ADP+P_i},\\
&\mathrm{D\text{-}methylmalonyl\text{-}CoA}\\
&\qquad\rightleftharpoons\mathrm{L\text{-}methylmalonyl\text{-}CoA},\\
&\mathrm{L\text{-}methylmalonyl\text{-}CoA}\\
&\qquad\rightarrow\mathrm{succinyl\text{-}CoA}.
\end{aligned}
$$

琥珀酰-CoA可补入三羧酸循环，并在相应碳流条件下支持[糖异生](gng.md#precursor-entry)，所以奇数链末端的三碳单元具有生糖潜力。它也来自缬氨酸、异亮氨酸、蛋氨酸、苏氨酸和肠道丙酸。维生素B$_{12}$缺乏或变位酶系统缺陷可使甲基丙二酸升高，但不能由此直接推出“甲基丙二酸必然抑制糖异生并造成酮症”；临床表型取决于缺陷节点、底物负荷及继发毒性。[^propionyl-coa-pathway]

## 特殊脂肪酸的替代氧化途径 { #alternative-fatty-acid-oxidation }

| 路线 | 主要位置与底物 | 与线粒体主线的区别 |
| --- | --- | --- |
| 过氧化物酶体β-氧化 | 过氧化物酶体；超长链脂肪酸、部分支链脂肪酸、二羧酸和胆汁酸中间物 | 首次氧化把电子直接交给O$_2$形成H$_2$O$_2$；多为链缩短和分流，不直接建立质子动力势 |
| α-氧化 | 过氧化物酶体；β碳带甲基而阻碍β-氧化的植烷酸 | 先移去羧基端一个碳，生成可继续β-氧化的姥鲛烷酸 |
| ω-氧化 | 内质网；多种中、长链脂肪酸 | 从末端甲基开始羟化并形成二羧酸，之后再活化并进入过氧化物酶体或线粒体β-氧化 |

### 过氧化物酶体 β-氧化 { #peroxisomal-beta-oxidation }

哺乳动物 ATP 结合盒转运体 D 亚家族（ATP-binding cassette subfamily D，ABCD）把特定脂酰底物导入过氧化物酶体。第一步由脂酰-CoA 氧化酶而非线粒体脂酰-CoA 脱氢酶催化，还原黄素的电子直接传给 O$_2$ 形成 H$_2$O$_2$，随后由过氧化氢酶等清除；这部分自由能没有经 ETF 和呼吸链转成 ATP。第二、三步常由双功能蛋白承担，硫解仍释放乙酰-CoA 或丙酰-CoA。NADH 须借代谢物穿梭在细胞器外被再氧化，缩短的脂酰基则可转成酰基肉碱、游离脂肪酸或其他形式输出，再由线粒体继续氧化。[^peroxisomal-beta-oxidation]

哺乳动物过氧化物酶体的酰基-CoA 氧化酶不接受短链底物，因此这套系统主要完成链缩短，输出乙酰-CoA、丙酰-CoA 和不同链长的中链酰基，而不是固定停在 6–8 个碳。实际终点随底物类型、酶谱和物种而变。植物和许多真菌的过氧化物酶体承担更广的脂肪酸氧化，萌发油料种子还把生成的乙酰-CoA 接到[乙醛酸循环](other_glc_pathway.md#plant-compartments)，其细胞器分工不同于哺乳动物。[^peroxisomal-chain-shortening]

ABCD1 缺陷降低某些饱和超长链脂酰-CoA 进入过氧化物酶体及其后续 $\beta$-氧化的能力，导致 C26:0 等超长链脂质升高，并与肾上腺皮质和神经系统损害相关。X 连锁肾上腺脑白质营养不良涉及超长链脂质失衡、神经炎症和髓鞘损伤；生化异常、基因型和临床进程之间并非一一对应。[^abcd1-xald]

### 植烷酸 α-氧化 { #alpha-oxidation }

植烷酸的 C3 甲基阻碍常规 $\beta$-氧化。它在过氧化物酶体中活化后，由植烷酰-CoA 2-羟化酶（phytanoyl-CoA 2-hydroxylase，PHYH）在 $\alpha$ 碳羟化，再由 2-羟酰-CoA 裂解酶 1（2-hydroxyacyl-CoA lyase 1，HACL1）切开 C1—C2 键，生成姥鲛醛和甲酰-CoA；姥鲛醛氧化为姥鲛酸后可继续 $\beta$-氧化。HACL1 反应由此具有明确的碳原子定位、产物和细胞器定位。[^phytanic-alpha-oxidation]

成人Refsum病多由*PHYH*双等位基因致病变异引起，少数与*PEX7*导致的酶导入缺陷有关。植烷酸积累可伴视网膜色素变性、嗅觉缺失、周围神经病、共济失调和听力损害。这个疾病把底物几何与细胞器定位连接起来：β位甲基挡住主螺旋，α-氧化缺陷便使整个后续降解链中断。

### 内质网 ω-氧化与二羧酸生成 { #omega-oxidation }

肝、肾等组织的内质网细胞色素 P450 4A／4F（CYP4A／CYP4F）酶系利用 O$_2$ 和 NADPH 羟化末端 $\omega$ 碳，醇再依次氧化为醛和羧酸，形成二羧酸。$\omega$-氧化通常不是能量回收主路，却会在禁食、糖尿病或线粒体 $\beta$-氧化受限时增加；尿中中链二羧酸升高因此可成为脂肪酸氧化障碍的线索。起始羟化不直接消耗 ATP，生成的二羧酸仍须活化，才能在过氧化物酶体和线粒体中继续 $\beta$-氧化。[^omega-oxidation]

## 酮体代谢 { #ketone-body-metabolism }

### 肝线粒体的酮体生成 { #ketogenesis }

肝细胞在禁食、长时间运动、低碳水摄入或胰岛素作用不足时接收较多脂肪酸，β-氧化使基质乙酰-CoA和NADH升高。与此同时，糖异生及其他输出改变草酰乙酸池，低胰岛素／高胰高血糖素信号又通过脂肪酸供应、丙二酸单酰-CoA和基因表达促进生酮。生酮是由底物供应、三羧酸循环容量、氧化还原状态和HMGCS2表达共同决定的分流；草酰乙酸相对可用性下降即可参与推动乙酰-CoA向酮体分流。[^ketogenesis-regulation]

两分子乙酰-CoA 先由乙酰-CoA 乙酰转移酶 1（acetyl-CoA acetyltransferase 1，ACAT1）缩合为乙酰乙酰-CoA。线粒体 3-羟基-3-甲基戊二酰-CoA 合酶 2（3-hydroxy-3-methylglutaryl-CoA synthase 2，HMGCS2）再加入第三个乙酰-CoA，HMG-CoA 裂解酶（3-hydroxy-3-methylglutaryl-CoA lyase，HMGCL）随后释放乙酰乙酸和一分子乙酰-CoA：

$$
\begin{aligned}
&2\,\mathrm{acetyl\text{-}CoA}\\
&\qquad\rightleftharpoons\mathrm{acetoacetyl\text{-}CoA+CoA\text{-}SH},\\
&\mathrm{acetoacetyl\text{-}CoA+acetyl\text{-}CoA+H_2O}\\
&\qquad\rightarrow\mathrm{HMG\text{-}CoA+CoA\text{-}SH},\\
&\mathrm{HMG\text{-}CoA}\\
&\qquad\rightarrow\mathrm{acetoacetate+acetyl\text{-}CoA}.
\end{aligned}
$$

乙酰乙酸可由 D-$\beta$-羟丁酸脱氢酶 1（D-$\beta$-hydroxybutyrate dehydrogenase 1，BDH1）利用 NADH 可逆还原为 D-$\beta$-羟丁酸；较高的线粒体 NADH／NAD$^+$ 比推动 $\beta$-羟丁酸比例上升。少量乙酰乙酸自发脱羧形成丙酮，主要随呼气排出。乙酰乙酸、D-$\beta$-羟丁酸和丙酮合称酮体，但 $\beta$-羟丁酸在化学上没有酮基。酮体是由乙酰-CoA 新合成并输出的代谢物，并非脂肪酸 $\beta$-氧化螺旋的中间物。[^ketone-body-metabolism]

线粒体 HMGCS2 与胞质 3-羟基-3-甲基戊二酰-CoA 合酶 1（HMGCS1）虽催化同类缩合，却处在不同区室并承接不同碳流。生酮使用线粒体 HMGCS2 所在的 HMG-CoA 池；胆固醇合成则使用胞质／内质网侧 HMGCS1—HMG-CoA 还原酶（HMGCR）碳流。

### 肝外线粒体的酮体利用 { #ketolysis }

D-$\beta$-羟丁酸和乙酰乙酸溶于水，可经单羧酸转运体跨细胞膜，在心、骨骼肌、肾和长时间禁食时的脑等组织中进入线粒体。BDH1 先把 D-$\beta$-羟丁酸氧化回乙酰乙酸；琥珀酰-CoA:3-酮酸 CoA 转移酶（succinyl-CoA:3-oxoacid CoA-transferase 1，OXCT1；又称 SCOT）把 CoA 从琥珀酰-CoA 转给乙酰乙酸，生成乙酰乙酰-CoA；乙酰-CoA 乙酰转移酶 1（ACAT1）再硫解成两分子乙酰-CoA，进入三羧酸循环。[^ketone-body-enzymes]

正常肝细胞几乎不表达 OXCT1，因此以输出酮体为主而很少利用自身产生的酮体，避免了同一细胞中的生酮—酮解无效循环。成熟红细胞缺少线粒体，其他肝外组织的转运体和酶量也各不相同。正常进食状态下脑仍主要氧化葡萄糖，只有在延长禁食等适应过程中酮体贡献才显著增加。

生理性营养性酮症仍受胰岛素和外周利用约束，酮体浓度和酸碱平衡通常受到控制；糖尿病酮症酸中毒常伴严重胰岛素不足、脂解失控、酮体生成超过利用与排泄，并造成高阴离子间隙代谢性酸中毒。诊断和处置见[糖与能量代谢紊乱](../physiology/pathophysiology/metabolic_disorders.md)。

## 脂肪酸氧化的通量调节 { #fatty-acid-oxidation-regulation }

| 控制层 | 进食或能量充足时 | 禁食、运动或能量需求升高时 |
| --- | --- | --- |
| 脂肪酸供应 | 胰岛素抑制脂滴净脂解并促进再酯化 | 儿茶酚胺等信号提高脂解，白蛋白结合脂肪酸供应增加 |
| 线粒体入口 | 乙酰-CoA 羧化酶（acetyl-CoA carboxylase，ACC）生成的丙二酸单酰-CoA 抑制 CPT1，限制长链脂酰基进入 | AMP 活化蛋白激酶（AMP-activated protein kinase，AMPK）等使 ACC 磷酸化并降低丙二酸单酰-CoA，CPT1 抑制减弱 |
| 基质反应容量 | 高NADH／NAD$^+$、高乙酰-CoA／CoA和低ADP可形成产物与呼吸回压 | ADP需求、CoA可用性、呼吸链再氧化和TCA容量共同允许通量升高 |
| 长时程适应 | 胰岛素和合成程序偏向储存 | 过氧化物酶体增殖物激活受体 $\alpha$（peroxisome proliferator-activated receptor $\alpha$，PPAR$\alpha$）等转录网络提高肝脏脂肪酸摄取、氧化与生酮能力 |

丙二酸单酰-CoA 对 CPT1 的抑制把胞质脂肪酸合成和线粒体长链脂肪酸氧化错开，但不同 CPT1 同工型的组织分布与敏感性不同；中链脂肪酸、过氧化物酶体底物也不全经过这一节点。AMPK 通过抑制 ACC 可间接促进脂肪酸进入线粒体；后续四步、呼吸链和三羧酸循环的容量仍分别受到各自底物与产物约束。脂肪酸氧化的通量控制分布在底物供应、CPT1 入口、基质 CoA、电子受体、呼吸链和 ATP 需求等多个层次。[^fatty-acid-oxidation-regulation]

心肌在安静有氧条件下常较多利用脂肪酸，同时保留随底物、激素、负荷和缺血状态改变葡萄糖、乳酸、酮体与脂肪酸比例的代谢灵活性。

## 脂肪酸氧化障碍与毒物抑制 { #fatty-acid-oxidation-disorders }

中链脂酰-CoA 脱氢酶缺乏症（medium-chain acyl-CoA dehydrogenase deficiency，MCADD）由 *ACADM* 双等位致病变异引起。患者在进食正常时可以无症状，但禁食、发热或呕吐使糖原耗竭后，难以充分利用中链脂肪酸并形成与禁食程度相称的酮体，因而可出现低酮性低血糖、肝功能异常和脑病；危象中出现少量酮体也不能排除诊断。新生儿筛查与避免过长禁食已显著改变预后。MCADD 可造成猝死或 Reye 样表现，具体诊断仍须结合酰基肉碱、有机酸、酶活或分子遗传证据。[^mcad-deficiency]

未成熟西非荔枝果（ackee）中的降糖氨酸 A 经代谢形成亚甲基环丙基乙酰-CoA（methylenecyclopropylacetyl-CoA，MCPA-CoA），可机制性抑制若干短、中链脂酰-CoA 脱氢酶，也干扰支链氨基酸分解，造成获得性的多种酰基-CoA 脱氢障碍和严重低血糖，即牙买加呕吐病。它与遗传性 MCADD 可呈现部分相似的代谢标志，但受累酶谱取决于毒物剂量、果实成熟度和代谢过程。[^hypoglycin-ackee]

脂肪酸氧化障碍常在禁食和应激时显现，因为肝 $\beta$-氧化需提供 ATP、线粒体还原当量和乙酰-CoA 信号，以支持糖异生与生酮；糖异生所需的胞质 NADH 则取决于前体和跨膜穿梭。心和骨骼肌也需要持续的氧化底物。单个酶节点受阻会同时改变碳、电子、CoA 和酰基肉碱等多个代谢池，临床化验因而常观察到一组链长特异的酰基肉碱和有机酸。[^faox-gng-interface]

## 参考资料与延伸阅读

- Nelson, D. L., Cox, M. M. & Hoskins, A. A. *Lehninger Principles of Biochemistry*, 8th ed., Chapters 17–18. Macmillan Learning, 2021.
- Houten, S. M. et al. [The Biochemistry and Physiology of Mitochondrial Fatty Acid β-Oxidation and Its Genetic Disorders](https://www.annualreviews.org/content/journals/10.1146/annurev-physiol-021115-105045). *Annual Review of Physiology* 78, 23–44 (2016).
- Wanders, R. J. A. & Waterham, H. R. [Biochemistry of Mammalian Peroxisomes Revisited](https://www.annualreviews.org/content/journals/10.1146/annurev.biochem.74.082803.133329). *Annual Review of Biochemistry* 75, 295–332 (2006).
- Puchalska, P. & Crawford, P. A. [Multi-dimensional Roles of Ketone Bodies in Fuel Metabolism, Signaling, and Therapeutics](https://pmc.ncbi.nlm.nih.gov/articles/PMC5313038/). *Cell Metabolism* 25, 262–284 (2017).
- Reactome: [Carnitine shuttle](https://reactome.org/content/detail/R-HSA-200425)、[Mitochondrial Fatty Acid Beta-Oxidation](https://reactome.org/content/detail/R-HSA-77289)与[Ketone body metabolism](https://reactome.org/content/detail/R-HSA-74182)。
- GeneReviews: [Medium-Chain Acyl-Coenzyme A Dehydrogenase Deficiency](https://www.ncbi.nlm.nih.gov/books/NBK1424/)、[X-Linked Adrenoleukodystrophy](https://www.ncbi.nlm.nih.gov/books/NBK1315/)与[Adult Refsum Disease](https://www.ncbi.nlm.nih.gov/books/NBK1353/)。

[^adipose-lipolysis]: ATGL—HSL—MGL依次水解脂滴TAG、DAG和MAG，以及PLIN1、ABHD5和激素信号的调节，见 Young, S. G. & Zechner, R. [Biochemistry and pathophysiology of intravascular and intracellular lipolysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC3605461/). *Genes & Development* 27, 459–484 (2013)。
[^fatty-acid-activation]: 脂肪酸先形成脂酰腺苷酸、再生成脂酰-CoA，以及不同合成酶的链长和区室分工，见 Houten, S. M. et al. [The Biochemistry and Physiology of Mitochondrial Fatty Acid β-Oxidation and Its Genetic Disorders](https://www.annualreviews.org/content/journals/10.1146/annurev-physiol-021115-105045). *Annu. Rev. Physiol.* 78, 23–44 (2016)。
[^carnitine-shuttle]: 三组分穿梭及膜定位见 Reactome [Carnitine shuttle](https://reactome.org/content/detail/R-HSA-200425)；人CPT1A、CACT和CPT2的人工审校条目见UniProt [P50416](https://www.uniprot.org/uniprotkb/P50416/entry)、[O43772](https://www.uniprot.org/uniprotkb/O43772/entry)和[P23786](https://www.uniprot.org/uniprotkb/P23786/entry)。
[^medium-chain-entry]: 短、中链游离脂肪酸入基质后活化的经典边界见 Schönfeld, P. & Wojtczak, L. [Short- and medium-chain fatty acids in energy metabolism](https://pmc.ncbi.nlm.nih.gov/articles/PMC4878196/)；组织特异的肉碱依赖性见 Pereyra, A. S. et al. [Medium-chain fatty acid oxidation is independent of L-carnitine in liver and kidney but not in heart and skeletal muscle](https://pmc.ncbi.nlm.nih.gov/articles/PMC10642992/). *Am. J. Physiol. Endocrinol. Metab.* 325, E676–E688 (2023)。
[^mitochondrial-beta-oxidation]: 四步螺旋、链长特异酶及线粒体三功能蛋白见Houten等2016年综述；人工审校反应见Reactome [Mitochondrial Fatty Acid Beta-Oxidation](https://reactome.org/content/detail/R-HSA-77289)。
[^etf-electron-transfer]: ETF接受多种线粒体黄素脱氢酶的电子并经ETFDH送入Q池，见 Henriques, B. J. et al. [Electron transfer flavoprotein and its role in mitochondrial energy metabolism in health and disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC7949704/). *Gene* 776, 145407 (2021)；人工审校ETFDH条目见UniProt [Q16134](https://www.uniprot.org/uniprotkb/Q16134/entry)。
[^unsaturated-beta-oxidation]: 顺式双键异构、2,4-二烯酰-CoA还原及其对电子账本的影响见Houten等2016年综述与Reactome [Mitochondrial beta-oxidation of unsaturated fatty acids](https://reactome.org/content/detail/R-HSA-77288)。
[^propionyl-coa-pathway]: 丙酰-CoA羧化酶的结构、底物来源和甲基丙二酰-CoA—琥珀酰-CoA通路见 Wongkittichote, P. et al. [Propionyl-CoA Carboxylase—A Review](https://pmc.ncbi.nlm.nih.gov/articles/PMC5725275/). *Molecular Genetics and Metabolism* 122, 145–152 (2017)；生物素与腺苷钴胺素反应化学见[维生素与辅酶](vitamin_and_coenzyme.md#biotin-folate-one-carbon)及[钴胺素小节](vitamin_and_coenzyme.md#cobalamin-chemistry)。
[^peroxisomal-beta-oxidation]: 哺乳动物过氧化物酶体底物、脂酰-CoA氧化酶的H$_2$O$_2$出口与NADH再氧化见 Wanders, R. J. A. & Waterham, H. R. [Biochemistry of Mammalian Peroxisomes Revisited](https://www.annualreviews.org/content/journals/10.1146/annurev.biochem.74.082803.133329)；链缩短产物输出见 Visser, W. F. et al. [Metabolite transport across the peroxisomal membrane](https://pmc.ncbi.nlm.nih.gov/articles/PMC1820816/)；人工审校路径见Reactome [Beta-oxidation of very long chain fatty acids](https://reactome.org/content/detail/R-HSA-390247)。
[^peroxisomal-chain-shortening]: 哺乳动物过氧化物酶体酰基-CoA 氧化酶的链长选择性及乙酰-CoA、丙酰-CoA 和多种中链酰基输出，见 [Disorders of fatty acid homeostasis](https://pmc.ncbi.nlm.nih.gov/articles/PMC11730842/)；该终点依底物和酶谱变化，不采用固定 6–8 碳通则。
[^abcd1-xald]: ABCD1转运缺陷、C26:0／C26:0-LPC升高及临床表型边界见 GeneReviews [X-Linked Adrenoleukodystrophy](https://www.ncbi.nlm.nih.gov/books/NBK1315/)；人工审校蛋白条目见UniProt [ABCD1（P33897）](https://www.uniprot.org/uniprotkb/P33897/entry)。
[^phytanic-alpha-oxidation]: 植烷酸的过氧化物酶体α-氧化及PHYH—HACL1反应见 van den Brink, D. M. & Wanders, R. J. A. [Phytanic acid: production from phytol, its breakdown and role in human disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC11136310/)；疾病基因与表型见 GeneReviews [Adult Refsum Disease](https://www.ncbi.nlm.nih.gov/books/NBK1353/)；人工审校PHYH条目见UniProt [O14832](https://www.uniprot.org/uniprotkb/O14832/entry)。
[^omega-oxidation]: CYP4A／CYP4F催化的ω-羟化、二羧酸形成及后续β-氧化见 Ranea-Robles, P. & Houten, S. M. [The biochemistry and physiology of long-chain dicarboxylic acid metabolism](https://pmc.ncbi.nlm.nih.gov/articles/PMC10214252/). *Biochemical Journal* 480, 607–627 (2023)。
[^ketogenesis-regulation]: 生酮通量与脂肪酸供应、草酰乙酸池、HMGCS2及激素／转录调节的关系见 Puchalska, P. & Crawford, P. A. [Metabolic and Signaling Roles of Ketone Bodies in Health and Disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC8922216/). *Annual Review of Nutrition* 41, 49–77 (2021)。
[^ketone-body-metabolism]: 乙酰乙酸、D-β-羟丁酸与丙酮的形成、输出和化学边界见 Reactome [Ketone body metabolism](https://reactome.org/content/detail/R-HSA-74182)及 Newman, J. C. & Verdin, E. [Ketone bodies as signaling metabolites](https://pmc.ncbi.nlm.nih.gov/articles/PMC4176946/). *Trends in Endocrinology & Metabolism* 25, 42–52 (2014)。
[^ketone-body-enzymes]: HMGCS2与OXCT1在生酮／酮解中的分工见UniProt [HMGCS2（P54868）](https://www.uniprot.org/uniprotkb/P54868/entry)、[OXCT1（P55809）](https://www.uniprot.org/uniprotkb/P55809/entry)及Reactome [OXCT transfers CoA from succinyl-CoA to acetoacetate](https://reactome.org/content/detail/R-HSA-74177)。
[^fatty-acid-oxidation-regulation]: 肉碱入口、丙二酸单酰-CoA、呼吸需求和组织表达共同控制线粒体脂肪酸氧化，见Houten等2016年综述与Reactome [Carnitine shuttle](https://reactome.org/content/detail/R-HSA-200425)。
[^mcad-deficiency]: 禁食诱发的低酮性低血糖、酰基肉碱／有机酸模式及新生儿筛查后的预后见 GeneReviews [Medium-Chain Acyl-Coenzyme A Dehydrogenase Deficiency](https://www.ncbi.nlm.nih.gov/books/NBK1424/)；人工审校ACADM条目见UniProt [P11310](https://www.uniprot.org/uniprotkb/P11310/entry)。
[^hypoglycin-ackee]: 降糖氨酸A、MCPA-CoA与牙买加呕吐病的暴露标志和机制见 Isenberg, S. L. et al. [Quantification of Metabolites for Assessing Human Exposure to Soapberry Toxins Hypoglycin A and Methylenecyclopropylglycine](https://pmc.ncbi.nlm.nih.gov/articles/PMC4592145/). *Chemical Research in Toxicology* 28, 1753–1759 (2015)；对脂酰-CoA脱氢酶的选择性抑制见 Kean, E. A. [Selective inhibition of acyl-CoA dehydrogenases by a metabolite of hypoglycin](https://pubmed.ncbi.nlm.nih.gov/1247597/). *Biochimica et Biophysica Acta* 422, 8–14 (1976)。
[^faox-gng-interface]: 肝脂肪酸氧化以 ATP 和乙酰-CoA 激活丙酮酸羧化酶、支持糖异生，而不提供净生糖碳，见 [Regulation of hepatic glucose metabolism in health and disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC5777172/)；胞质 NADH 需求随前体与苹果酸等穿梭安排改变，详见[糖异生的区室与还原力](gng.md#compartment-and-redox)。
