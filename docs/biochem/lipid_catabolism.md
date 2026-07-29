# 脂肪酸分解代谢

三酰甘油把高度还原的脂肪酸压缩在无水脂滴中；需要供能时，脂肪酸先从甘油骨架释放，再被活化为脂酰辅酶 A（fatty acyl-CoA），最后由线粒体或过氧化物酶体逐段缩短。对多数哺乳动物组织而言，线粒体 β-氧化是这条碳流的主体：碳以乙酰-CoA离开，电子分别进入 NADH和电子转移黄素蛋白（electron-transferring flavoprotein, ETF），再与三羧酸循环和呼吸链汇合。肝脏还可把过量乙酰碳改装为水溶性的酮体，送给其他器官利用。

脂肪酸分解包括脂滴动员、脂酰基活化与运输、链长适配、细胞器接力及 $\beta$-氧化反应螺旋。进食或禁食时的组织分工进一步决定这些脂肪酸是否成为可用燃料。本页沿这些层次展开；脂肪酸的结构与命名见[脂质](lipid.md#fatty-acids)，合成方向则由[脂质生物合成](lipid_synthesis.md)承接。

## 脂肪酸动员与线粒体入口 { #fatty-acid-mobilization-entry }

### 脂滴脂解与循环运输 { #adipose-lipolysis }

白色脂肪细胞把三酰甘油储存在由磷脂单分子层包围的脂滴中。经典中性脂解依次由脂肪组织三酰甘油脂肪酶（ATGL／PNPLA2）、激素敏感性脂肪酶（HSL／LIPE）和单酰甘油脂肪酶（MGL／MGLL）完成：TAG先成为DAG，DAG成为MAG，最后释放甘油；每次水解还各释放一分子非酯化脂肪酸。ATGL更偏向起始的TAG水解，HSL对DAG尤其重要，MGL则完成最后一步水解。[^adipose-lipolysis]

儿茶酚胺经肾上腺素能受体、cAMP和蛋白激酶A促进脂滴表面重排，使HSL接近底物，并通过PLIN1—ABHD5轴解除对ATGL的限制。进食后的胰岛素则降低cAMP信号并促进脂肪酸再酯化，抑制净释放。全身脂解通量由脂滴大小、局部血流、脂肪酸再酯化、不同脂肪库的受体组成以及HSL等酶的修饰状态共同决定。

释放的脂肪酸与血浆白蛋白非共价结合，可被肝、心、骨骼肌、肾等多种组织摄取。甘油主要由肝和肾等具有甘油激酶活性的组织处理，可进入糖异生或甘油脂代谢。这个器官间过程把储藏脂质的动员与细胞内氧化区分开：脂解增加底物供应，各接收组织的实际氧化速率还受转运、能量需求和代谢状态控制。

### 脂肪酸活化与区室化脂酰-CoA 池 { #fatty-acid-activation }

游离脂肪酸的羧基必须先与CoA形成高能硫酯，才成为多数分解酶识别的底物。脂酰-CoA合成酶（acyl-CoA synthetase）先生成脂酰腺苷酸，再由CoA取代AMP：

$$
\begin{aligned}
&\mathrm{fatty\ acid+CoA\text{-}SH+ATP}\\
&\qquad\rightarrow\mathrm{fatty\ acyl\text{-}CoA+AMP+PP_i},\\
&\mathrm{PP_i+H_2O\rightarrow2P_i}.
\end{aligned}
$$

ATP裂解到AMP并伴随焦磷酸水解，因而从游离脂肪酸起算要付出两个高能磷酸键当量。长链脂酰-CoA合成酶分布在内质网、线粒体外膜和过氧化物酶体膜等处；“在线粒体外膜活化”描述的是膜上的胞质侧反应界面，不表示长链脂酰-CoA已经进入基质。酶的链长偏好和膜定位把同一种脂肪酸分配给氧化、再酯化、膜脂重塑或信号脂质合成，细胞内也就不存在一个完全混合的“脂酰-CoA总池”。[^fatty-acid-activation]

### 长链脂酰基的肉碱穿梭 { #carnitine-shuttle }

线粒体内膜不允许长链脂酰-CoA自由通过，肉碱穿梭搬运的是脂酰基，而不是整分子CoA。外膜上的肉碱棕榈酰转移酶1（CPT1）把脂酰基从CoA转给L-肉碱；内膜的肉碱／酰基肉碱易位酶（CACT，SLC25A20）以酰基肉碱入基质、游离肉碱出基质的方式交换；位于内膜基质侧的CPT2再把脂酰基交给基质CoA。胞质侧和基质侧的CoA池由此保持分隔，而肉碱循环使用。Reactome的人工审校路径及CPT1A、CACT、CPT2的UniProt条目给出了三者的膜拓扑和反应分工。[^carnitine-shuttle]

L-肉碱可由赖氨酸来源的三甲基赖氨酸与甲硫氨酸提供的甲基共同支持合成，也可由膳食和转运获得；它不是一种进入蛋白质的标准氨基酸。肉碱还参与短链酰基缓冲，但这不改变长链脂酰基进入基质时对CPT1—CACT—CPT2的依赖。

短链和部分中链脂肪酸的情形不同。部分非酯化脂肪酸可绕过肉碱系统进入基质，随后由基质酰基-CoA合成酶活化；脂酰-CoA本身仍受内膜通透性限制。可绕行的链长范围具有组织依赖性：小鼠肝可在无肉碱条件下氧化比肾更长的中链游离脂肪酸，心和骨骼肌则仍表现出明显的肉碱依赖。因此，链长界线应结合组织的酶表达和膜运输能力解释。[^medium-chain-entry]

## β-氧化的反应螺旋 { #beta-oxidation-cycle }

脂酰-CoA进入基质后，羧基碳记作C1，邻近的C2和C3分别是α、β碳。每一轮反应在α、β碳之间建立双键，再把水加到双键上，将β碳氧化成酮，最后由CoA从羰基邻位发动硫解。产物是一分子乙酰-CoA和缩短两个碳、可再次进入螺旋的脂酰-CoA。

| 阶段 | 代表反应 | 化学与电子去向 |
| --- | --- | --- |
| 第一次脱氢 | 脂酰-CoA → *trans*-Δ$^2$-烯酰-CoA | 链长特异的脂酰-CoA脱氢酶以结合型FAD接收两个电子，随后交给ETF |
| 水合 | *trans*-Δ$^2$-烯酰-CoA＋H$_2$O → L-3-羟脂酰-CoA | 烯酰-CoA水合酶立体专一地加水，为下一步形成β-酮基 |
| 第二次脱氢 | L-3-羟脂酰-CoA＋NAD$^+$ → 3-酮脂酰-CoA＋NADH＋H$^+$ | 3-羟脂酰-CoA脱氢酶把β-羟基氧化为羰基，电子进入NADH |
| 硫解 | 3-酮脂酰-CoA＋CoA-SH → 乙酰-CoA＋缩短的脂酰-CoA | β-酮硫解酶完成逆Claisen缩合式的C2—C3断裂，不是加水水解 |

短、中、长和超长链底物由相互重叠而非互不相容的酶谱处理。超长链和长链底物的后三步多由线粒体三功能蛋白HADHA／HADHB协作，链缩短后又可转交其他水合酶、脱氢酶和硫解酶。四个反应的教科书顺序保持不变，但实际螺旋是多种同工酶按链长和组织表达接力的系统。[^mitochondrial-beta-oxidation]

### 电子传递与碳能量计量 { #electron-and-carbon-accounting }

第一次脱氢时，脂酰-CoA脱氢酶的FAD是酶内辅基。还原后的黄素把电子交给可溶性ETF，再经内膜ETF:泛醌氧化还原酶（ETFDH／ETF-QO）还原辅酶Q；它不会以一分子游离FADH$_2$的形式离开酶。第二次脱氢产生的NADH则向复合物I供电子。两条电子流在Q池及其下游会合，分别具有近似Q水平和NADH水平的P/O账本。[^etf-electron-transfer]

软脂酰-CoA（C16:0）经过7轮产生8分子乙酰-CoA、7分子NADH和7对经ETF送入Q池的电子。若乙酰-CoA全部进入[三羧酸循环](tca_cycle.md#cycle-stoichiometry)，并采用[电子传递与氧化磷酸化](oxp.md#proton-and-po-ratios)中常用的NADH约2.5 ATP、Q水平电子对约1.5 ATP计量，则从游离软脂酸开始的条件化账本为：

$$
\begin{aligned}
&8\times10+7\times2.5+7\times1.5-2\\
&\qquad=106\ \mathrm{ATP\ equivalents}.
\end{aligned}
$$

其中减去的2来自活化；若起点已经是软脂酰-CoA，则不再扣除。106 ATP是以特定P/O比、完全氧化和足量ADP、氧与三羧酸循环中间物为前提的标准换算；过氧化物酶体先行缩短、质子漏、组织穿梭及不完全氧化都会改变实际回收。

## 不饱和与奇数链脂肪酸的辅助反应 { #unsaturated-and-odd-chain }

### 不饱和脂肪酸的双键重排 { #unsaturated-fatty-acids }

常见天然不饱和脂肪酸含顺式双键，而β-氧化主螺旋要求*trans*-Δ$^2$-烯酰-CoA。螺旋推进到顺式Δ$^3$中间物时，烯酰-CoA异构酶将其改成*trans*-Δ$^2$构型，随后直接进入水合步骤。由于绕过一次脂酰-CoA脱氢，每遇到这种入口就少形成一对经ETF进入Q池的电子，因而不饱和脂肪酸的ATP回收略低于同碳数饱和脂肪酸。

多不饱和脂肪酸还会形成2,4-二烯酰-CoA。2,4-二烯酰-CoA还原酶消耗NADPH，把共轭二烯还原为可由异构酶继续处理的中间物。所需异构酶和还原酶的种类与次数取决于原始双键位置及已经完成的 β-氧化轮数。[^unsaturated-beta-oxidation]

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

哺乳动物ABCD家族转运体把特定脂酰底物导入过氧化物酶体。第一步由脂酰-CoA氧化酶而不是线粒体脂酰-CoA脱氢酶催化，还原黄素的电子直接传给O$_2$形成H$_2$O$_2$，随后由过氧化氢酶等清除；这部分自由能没有经ETF和呼吸链转成ATP。第二、三步常由双功能蛋白承担，硫解仍释放乙酰-CoA或丙酰-CoA。NADH须借代谢物穿梭在细胞器外被再氧化，缩短的脂酰基则可转成酰基肉碱、游离脂肪酸或其他形式输出，再由线粒体继续氧化。[^peroxisomal-beta-oxidation]

过氧化物酶体常把长链底物缩短至约6–8个碳，但实际终点随底物类型、酶谱和物种而变。植物和许多真菌的过氧化物酶体承担更广的脂肪酸氧化，萌发油料种子还把生成的乙酰-CoA接到[乙醛酸循环](other_glc_pathway.md#plant-compartments)，其细胞器分工不同于哺乳动物。

ABCD1缺陷降低某些饱和超长链脂酰-CoA进入过氧化物酶体及其后续β-氧化的能力，导致C26:0等超长链脂质升高，并与肾上腺皮质和神经系统损害相关。X连锁肾上腺脑白质营养不良的神经炎症、髓鞘损伤和表型差异并不能简化为“脂肪酸积累把白质溶掉”；生化异常、基因型和临床进程之间没有一一对应关系。[^abcd1-xald]

### 植烷酸 α-氧化 { #alpha-oxidation }

植烷酸的C3甲基阻碍常规β-氧化。它在过氧化物酶体中活化后，由植烷酰-CoA 2-羟化酶（PHYH）在α碳羟化，再由2-羟酰-CoA裂解酶1（HACL1）移去羧基端 C1，形成姥鲛醛；后者氧化为姥鲛酸后可继续β-氧化。HACL1 反应由此具有明确的碳原子定位和细胞器定位。[^phytanic-alpha-oxidation]

成人Refsum病多由*PHYH*双等位基因致病变异引起，少数与*PEX7*导致的酶导入缺陷有关。植烷酸积累可伴视网膜色素变性、嗅觉缺失、周围神经病、共济失调和听力损害。这个疾病把底物几何与细胞器定位连接起来：β位甲基挡住主螺旋，α-氧化缺陷便使整个后续降解链中断。

### 内质网 ω-氧化与二羧酸生成 { #omega-oxidation }

肝、肾等组织的内质网CYP4A／CYP4F酶系利用O$_2$和NADPH羟化末端ω碳，醇再依次氧化为醛和羧酸，形成二羧酸。ω-氧化通常不是能量回收主路，却会在禁食、糖尿病或线粒体β-氧化受限时增加；尿中中链二羧酸升高因此可成为脂肪酸氧化障碍的线索。二羧酸随后仍须活化，才能在过氧化物酶体和线粒体中继续β-氧化，所以“ω-氧化不需要ATP”只适用于起始羟化本身，不能概括整条处置路线。[^omega-oxidation]

## 酮体代谢 { #ketone-body-metabolism }

### 肝线粒体的酮体生成 { #ketogenesis }

肝细胞在禁食、长时间运动、低碳水摄入或胰岛素作用不足时接收较多脂肪酸，β-氧化使基质乙酰-CoA和NADH升高。与此同时，糖异生及其他输出改变草酰乙酸池，低胰岛素／高胰高血糖素信号又通过脂肪酸供应、丙二酸单酰-CoA和基因表达促进生酮。生酮是由底物供应、三羧酸循环容量、氧化还原状态和HMGCS2表达共同决定的分流；草酰乙酸相对可用性下降即可参与推动乙酰-CoA向酮体分流。[^ketogenesis-regulation]

两分子乙酰-CoA先由线粒体硫解酶ACAT1缩合为乙酰乙酰-CoA。线粒体3-羟基-3-甲基戊二酰-CoA合酶2（HMGCS2）再加入第三个乙酰-CoA，HMG-CoA裂解酶（HMGCL）随后释放乙酰乙酸和一分子乙酰-CoA：

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

乙酰乙酸可由内膜相关的BDH1利用NADH可逆还原为D-β-羟丁酸；较高的线粒体NADH／NAD$^+$比推动β-羟丁酸比例上升。少量乙酰乙酸自发或酶促脱羧形成丙酮，主要随呼气排出。乙酰乙酸、D-β-羟丁酸和丙酮合称酮体，但β-羟丁酸在化学上并没有酮基。它们是由乙酰-CoA新合成并输出的代谢物，不宜称作“脂肪酸部分氧化的中间产物”。[^ketone-body-metabolism]

线粒体HMGCS2与胞质HMGCS1虽催化同类缩合，却处在不同区室并承接不同碳流。生酮使用线粒体 HMGCS2 所在的 HMG-CoA 池；胆固醇合成则使用胞质／内质网侧 HMGCS1—HMGCR 碳流。

### 肝外线粒体的酮体利用 { #ketolysis }

D-β-羟丁酸和乙酰乙酸溶于水，可经单羧酸转运体跨细胞膜，在心、骨骼肌、肾和长时间禁食时的脑等组织中进入线粒体。BDH1先把D-β-羟丁酸氧化回乙酰乙酸；琥珀酰-CoA:3-酮酸CoA转移酶（OXCT1／SCOT）把CoA从琥珀酰-CoA转给乙酰乙酸，生成乙酰乙酰-CoA；ACAT1再硫解成两分子乙酰-CoA，进入三羧酸循环。[^ketone-body-enzymes]

正常肝细胞几乎不表达 OXCT1，因此以输出酮体为主而很少利用自身产生的酮体，避免了同一细胞中的生酮—酮解无效循环。成熟红细胞缺少线粒体，其他肝外组织的转运体和酶量也各不相同。正常进食状态下脑仍主要氧化葡萄糖，只有在延长禁食等适应过程中酮体贡献才显著增加。

生理性营养性酮症与糖尿病酮症酸中毒也不是同义词。前者仍受胰岛素和外周利用约束，酮体浓度和酸碱平衡通常受到控制；后者常伴严重胰岛素不足、脂解失控、酮体生成超过利用与排泄，并造成高阴离子间隙代谢性酸中毒。机制页说明二者的碳流边界，诊断和处置留给[代谢紊乱](../physiology/pathophysiology/metabolic_disorders.md)。

## 脂肪酸氧化的通量调节 { #fatty-acid-oxidation-regulation }

| 控制层 | 进食或能量充足时 | 禁食、运动或能量需求升高时 |
| --- | --- | --- |
| 脂肪酸供应 | 胰岛素抑制脂滴净脂解并促进再酯化 | 儿茶酚胺等信号提高脂解，白蛋白结合脂肪酸供应增加 |
| 线粒体入口 | ACC生成的丙二酸单酰-CoA抑制CPT1，限制长链脂酰基进入 | AMPK等使ACC磷酸化并降低丙二酸单酰-CoA，CPT1抑制减弱 |
| 基质反应容量 | 高NADH／NAD$^+$、高乙酰-CoA／CoA和低ADP可形成产物与呼吸回压 | ADP需求、CoA可用性、呼吸链再氧化和TCA容量共同允许通量升高 |
| 长时程适应 | 胰岛素和合成程序偏向储存 | PPARα等转录网络提高肝脏脂肪酸摄取、氧化与生酮能力 |

丙二酸单酰-CoA对CPT1的抑制把胞质脂肪酸合成和线粒体长链脂肪酸氧化错开，但不同CPT1同工型的组织分布与敏感性不同；中链脂肪酸、过氧化物酶体底物也不全经过这一节点。AMPK通过抑制ACC可间接促进脂肪酸进入线粒体，却不直接保证后续四步、呼吸链和三羧酸循环都有足够容量。脂肪酸氧化的通量控制分布在底物供应、CPT1入口、基质 CoA、电子受体、呼吸链和 ATP 需求等多个层次。[^fatty-acid-oxidation-regulation]

心肌在安静有氧条件下常较多利用脂肪酸，同时保留随底物、激素、负荷和缺血状态改变葡萄糖、乳酸、酮体与脂肪酸比例的代谢灵活性。

## 脂肪酸氧化障碍与毒物抑制 { #fatty-acid-oxidation-disorders }

中链脂酰-CoA脱氢酶缺乏症（MCADD）由*ACADM*致病变异引起。患者在进食正常时可以无症状，但禁食、发热或呕吐使糖原耗竭后，不能充分利用中链脂肪酸，也难以形成与禁食程度相称的酮体，因而可出现低酮性低血糖、肝功能异常和脑病。新生儿筛查与避免过长禁食已显著改变预后；它曾被误认作Reye样综合征或部分婴幼儿猝死，却不能把“脂酰-CoA脱氢酶缺乏”直接等同于婴儿猝死综合征。[^mcad-deficiency]

未成熟西非荔枝果（ackee）中的降糖氨酸A经代谢形成亚甲基环丙基乙酰-CoA（MCPA-CoA），可机制性抑制若干短、中链脂酰-CoA脱氢酶，也干扰支链氨基酸分解，造成获得性的多种酰基-CoA脱氢障碍和严重低血糖，即牙买加呕吐病。它与遗传性MCADD在部分代谢标志上相似，却不是“同一种酶缺陷”；毒物剂量、果实成熟度和多条脱氢酶受累决定其表现。[^hypoglycin-ackee]

这类疾病共同说明，脂肪酸氧化的生理价值在禁食和应激时最清楚：肝需要β-氧化提供ATP、还原力和乙酰-CoA以支持糖异生与生酮，心和骨骼肌则需持续的氧化底物。单个酶节点受阻会同时改变碳、电子、CoA和酰基肉碱等多个代谢池，临床化验因而常观察到一组链长特异的酰基肉碱和有机酸。

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
[^abcd1-xald]: ABCD1转运缺陷、C26:0／C26:0-LPC升高及临床表型边界见 GeneReviews [X-Linked Adrenoleukodystrophy](https://www.ncbi.nlm.nih.gov/books/NBK1315/)；人工审校蛋白条目见UniProt [ABCD1（P33897）](https://www.uniprot.org/uniprotkb/P33897/entry)。
[^phytanic-alpha-oxidation]: 植烷酸的过氧化物酶体α-氧化及PHYH—HACL1反应见 van den Brink, D. M. & Wanders, R. J. A. [Phytanic acid: production from phytol, its breakdown and role in human disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC11136310/)；疾病基因与表型见 GeneReviews [Adult Refsum Disease](https://www.ncbi.nlm.nih.gov/books/NBK1353/)；人工审校PHYH条目见UniProt [O14832](https://www.uniprot.org/uniprotkb/O14832/entry)。
[^omega-oxidation]: CYP4A／CYP4F催化的ω-羟化、二羧酸形成及后续β-氧化见 Ranea-Robles, P. & Houten, S. M. [The biochemistry and physiology of long-chain dicarboxylic acid metabolism](https://pmc.ncbi.nlm.nih.gov/articles/PMC10214252/). *Biochemical Journal* 480, 607–627 (2023)。
[^ketogenesis-regulation]: 生酮通量与脂肪酸供应、草酰乙酸池、HMGCS2及激素／转录调节的关系见 Puchalska, P. & Crawford, P. A. [Metabolic and Signaling Roles of Ketone Bodies in Health and Disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC8922216/). *Annual Review of Nutrition* 41, 49–77 (2021)。
[^ketone-body-metabolism]: 乙酰乙酸、D-β-羟丁酸与丙酮的形成、输出和化学边界见 Reactome [Ketone body metabolism](https://reactome.org/content/detail/R-HSA-74182)及 Newman, J. C. & Verdin, E. [Ketone bodies as signaling metabolites](https://pmc.ncbi.nlm.nih.gov/articles/PMC4176946/). *Trends in Endocrinology & Metabolism* 25, 42–52 (2014)。
[^ketone-body-enzymes]: HMGCS2与OXCT1在生酮／酮解中的分工见UniProt [HMGCS2（P54868）](https://www.uniprot.org/uniprotkb/P54868/entry)、[OXCT1（P55809）](https://www.uniprot.org/uniprotkb/P55809/entry)及Reactome [OXCT transfers CoA from succinyl-CoA to acetoacetate](https://reactome.org/content/detail/R-HSA-74177)。
[^fatty-acid-oxidation-regulation]: 肉碱入口、丙二酸单酰-CoA、呼吸需求和组织表达共同控制线粒体脂肪酸氧化，见Houten等2016年综述与Reactome [Carnitine shuttle](https://reactome.org/content/detail/R-HSA-200425)。
[^mcad-deficiency]: 禁食诱发的低酮性低血糖、酰基肉碱／有机酸模式及新生儿筛查后的预后见 GeneReviews [Medium-Chain Acyl-Coenzyme A Dehydrogenase Deficiency](https://www.ncbi.nlm.nih.gov/books/NBK1424/)；人工审校ACADM条目见UniProt [P11310](https://www.uniprot.org/uniprotkb/P11310/entry)。
[^hypoglycin-ackee]: 降糖氨酸A、MCPA-CoA与牙买加呕吐病的暴露标志和机制见 Isenberg, S. L. et al. [Quantification of Metabolites for Assessing Human Exposure to Soapberry Toxins Hypoglycin A and Methylenecyclopropylglycine](https://pmc.ncbi.nlm.nih.gov/articles/PMC4592145/). *Chemical Research in Toxicology* 28, 1753–1759 (2015)；对脂酰-CoA脱氢酶的选择性抑制见 Kean, E. A. [Selective inhibition of acyl-CoA dehydrogenases by a metabolite of hypoglycin](https://pubmed.ncbi.nlm.nih.gov/1247597/). *Biochimica et Biophysica Acta* 422, 8–14 (1976)。
