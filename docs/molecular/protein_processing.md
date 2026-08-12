# 蛋白质成熟、定位与质量控制

核糖体释放的是一条具有确定序列的多肽，细胞实际使用的却往往是已经折叠、定位、切割、共价修饰并与其他亚基装配的蛋白质分子种。上述事件可以在翻译进行时开始，也可以在多肽释放后很久才发生；有些形成稳定成熟产物，有些则随信号、代谢状态或细胞周期反复改变。由同一基因产生、但序列加工、修饰或构象状态不同的分子通常称为不同 proteoforms。蛋白质生物合成因此并不止于肽链延伸，而是一直延续到分子取得合适结构、区室和寿命。

折叠、分选与质量控制是彼此耦联的过程。疏水信号序列刚从核糖体出口出现时，既可能招募膜靶向装置，也可能被伴侣蛋白暂时遮蔽；糖链和二硫键既参与成熟，也成为内质网检查折叠状态的依据；未装配亚基或暴露的疏水表面又可转化为降解信号。多种识别反应从翻译过程中开始竞争，并共同决定最终命运。

## 新生链在合成过程中取得结构 { #nascent-chain-folding }

### 共翻译折叠受链长和延伸动力学约束 { #cotranslational-folding }

新生肽以 N 端先出现、C 端仍连接 peptidyl-tRNA 的方式逐段离开核糖体。短螺旋可在出口通道较宽处形成，较大的三级结构通常要等到相应序列抵达通道外侧；多结构域蛋白的 N 端结构域还可能在 C 端结构域尚未合成时开始折叠。每增加一段序列，可形成的接触和能量景观都会改变，共翻译折叠因而是一组随链长变化的非平衡过程，而不是完整蛋白在溶液中复性的缩小版。[^cotranslational-folding]

局部延伸速度、核糖体表面、新生链电荷、配体和伴侣蛋白都会改变中间体的寿命。某些 synonymous substitutions 确实会通过翻译动力学影响最终构象，但 codon rarity、核糖体停顿和折叠结果之间没有脱离 mRNA 结构、tRNA 供给与细胞状态的固定对应。核糖体 profiling 显示的局部占据峰也可能来自慢延伸、起始变化、碰撞或样品处理，不能单独证明某个结构域正在折叠。

### 伴侣网络管理聚集风险 { #molecular-chaperones }

分子伴侣优先识别未折叠链上暴露的疏水片段或特定构象状态，抑制非生产性聚集并给予底物再次尝试折叠的机会。它们通常不成为成熟结构的一部分，也不把一套外部“结构模板”强加给所有底物。最终可达到的构象仍受氨基酸序列、溶剂、膜、配体与辅因子决定；伴侣主要改变折叠动力学、隔离空间和不同命运之间的分配。[^molecular-chaperones]

细菌 trigger factor 位于核糖体出口附近，不水解 ATP，能够暂时包容多类新生链。DnaK–DnaJ–GrpE 系统以 ATP 控制底物结合和释放，GroEL–GroES 则把部分底物封闭在可容纳单个分子的腔室中。古菌常以 prefoldin 接收未折叠链，再交给 group II chaperonin；不同谱系是否具有典型 Hsp70 系统并不一致。真核胞质中的 NAC、Hsp70、Hsp90 与 TRiC/CCT 等装置分工重叠：Hsp70 广泛服务新生链和受损蛋白，TRiC/CCT 封闭折叠一组较复杂底物，Hsp90 更多参与激酶、受体等客户蛋白的后期成熟。把 Hsp60、Hsp70 或 Hsp90 各自写成一种固定“折叠酶”，会忽略核苷酸状态、co-chaperone 与底物类别共同决定的循环。

### 折叠催化、辅因子结合与复合体装配 { #folding-catalysis-assembly }

某些局部化学步骤慢于其他构象变化。肽基脯氨酰顺反异构酶加快 X–Pro 肽键异构化；PDI 家族在内质网等氧化区室催化巯基氧化、还原和二硫键重排；细菌周质中的 Dsb 系统承担相似的氧化折叠任务。金属离子、血红素、铁硫簇、黄素或其他辅因子还可稳定局部结构并完成活性中心。辅因子的装入时间依蛋白而异，过早结合有时会阻塞转位，过晚又可能使不稳定中间体暴露。

多亚基复合体的装配可以在所有亚基释放后发生，也可以由已完成亚基结合另一条新生链，甚至由两条新生链共翻译结合。细菌 operon 使相邻编码序列的翻译位置接近，真核细胞则可借 mRNA 定位、局部翻译和专用 assembly factors 提高伙伴相遇的选择性。未装配亚基暴露的界面往往不同于成熟复合体表面，伴侣或降解系统会据此限制孤立亚基积累；“能在试管中自组装”并不意味着细胞内完全不需要装配顺序和辅助因子。[^complex-assembly]

## 分选信号把蛋白质送入合适区室 { #protein-targeting }

多数蛋白质都在胞质核糖体上起始合成。没有被其他靶向装置捕获的可溶蛋白通常留在胞质，而主动定位信号可以位于 N 端、C 端或链内，由疏水性、带电残基、三维表面和相邻序列共同构成；剪接、翻译起点、磷酸化、配体结合或亚基装配还能暴露或遮蔽它。一个蛋白也可具有竞争信号，在不同细胞状态或蛋白质分子型（proteoform）中进入不同区室。

### 细菌与古菌使用 Sec、SRP 和 Tat 等路线 { #prokaryotic-protein-export }

细菌 SRP 在疏水跨膜段露出时结合 ribosome–nascent-chain complex，经受体 FtsY 把它交给 SecYEG 或 YidC，使许多内膜蛋白共翻译插入。大量分泌或周质蛋白则在合成后由 SecB 等伴侣维持为可转位状态，SecA 以 ATP 驱动它们通过 SecYEG；实际底物中也存在共翻译 SecA 参与和不同路线交叉。Sec 通常运输未折叠链，twin-arginine translocation（Tat）则可转运已经折叠并常已结合辅因子的底物。信号肽酶切除许多 N 端 export signals，signal anchor 和一部分定位信号则保留在成熟蛋白中。[^bacterial-targeting]

古菌具有同源的 SRP–FtsY 与 SecY 装置，也可具有 Tat 和 YidC/Oxa1-family insertases，但组成随谱系而变。细菌内膜外侧是周质或细胞外环境，古菌膜和细胞表面结构又具有自身拓扑；二者的分选路线需要按自身膜拓扑理解，而非套用真核内质网、高尔基体和分泌囊泡系统。跨膜之后的 signal-peptide cleavage、脂化、糖基化和折叠同样构成成熟过程。

### 内质网入口同时建立分泌蛋白和膜蛋白拓扑 { #er-targeting-translocation }

真核分泌蛋白、内膜系统腔内蛋白及多数质膜蛋白先进入内质网。SRP 识别新生链中的疏水信号并与 SRP receptor 完成交接，ribosome 随后结合 Sec61；可溶区段穿入内质网腔，跨膜螺旋则经 translocon lateral gate 分配到脂双层。可切除 signal peptide、内部 signal anchor 和 stop-transfer sequence 的先后组合决定单跨膜与多跨膜拓扑，正电残基分布、疏水段性质以及 EMC 等辅助装置还会修正插入结果。[^er-translocation]

共翻译 Sec61 路线是主干而非唯一入口。部分较短或弱疏水底物可在翻译后经 Sec62/Sec63 等路线进入；尾锚定蛋白的 C 端跨膜段只有在终止后才完全露出，可由 GET/TRC、EMC 或其他途径插入。进入内质网只确定了分泌通路拓扑，最终驻留、回收和输出还要读取后续信号。膜泡运输不让蛋白再次跨越脂双层，腔内结构域因此沿高尔基体、内体和分泌囊泡一直保持非胞质朝向，详见[蛋白质进入内质网](../cell/endomembrane.md#er-protein-entry)。

### 核、能量细胞器与过氧化物酶体采用不同输入逻辑 { #organelle-protein-import }

核定位信号由 importin 等 transport receptors 读取，货物通过核孔时通常保持折叠，信号也常保留并可反复使用；Ran nucleotide gradient 为输入和输出赋予方向。线粒体与质体的许多前体带有可切除 N 端 targeting peptide，分别经 TOM／TIM 或 TOC／TIC 输入，并常由胞质及细胞器内伴侣维持可转位状态；内膜、膜间隙或类囊体等次级终点还需要内部信号和专门装置。两类细胞器也有不依赖典型 N 端导肽的路线，双重定位信号及 alternative translation initiation 又可使同一基因产生不同去向。[^organelle-targeting]

过氧化物酶体 PEX5／PEX7 分别读取 PTS1／PTS2 类信号，能够输入已经折叠甚至装配的蛋白；受体在卸载货物后经单泛素化和 AAA ATPase 回收。核孔、线粒体、质体与过氧化物酶体输入的孔道状态、货物折叠要求、能量来源和信号是否切除都不同。各细胞器的结构与完整装置见[细胞核与核孔](../cell/nucleus_chromatin.md#nuclear-pore-transport)和[细胞器与能量转换](../cell/organelles.md#organelle-overview)。

## 成熟加工改变主链、侧链与膜亲和性 { #protein-maturation }

### 限量蛋白水解产生新的分子边界 { #proteolytic-processing }

起始 methionine 是否被 methionine aminopeptidase 移除，取决于第二个残基和 N 端可达性；切除后形成的新 N 端还可能被 acetylated、arginylated 或读取为 degron。分泌蛋白 signal peptide、线粒体／质体 targeting peptide 通常在转位时或转位后切除。许多酶、凝血因子和肽类激素先以 zymogen 或 proprotein 合成，再在特定区室和位点被 endoprotease 激活；另一些切割则使蛋白失活、释放调控结构域或直接把底物送向降解。蛋白水解不可逆，但是否发生由区室、构象和 protease activation 严格限制。

胰岛素展示了定位、折叠与切割的顺序联系。preproinsulin 的信号肽引导新生链进入内质网并被切除，proinsulin 在腔内形成三条正确配对的二硫键，经高尔基体进入分泌颗粒后，再由 PC1/3、PC2 和 carboxypeptidase E 处理两处连接区，生成 A、B 两链胰岛素和 C-peptide。C-peptide 在前体中帮助两端进入可折叠拓扑，成熟后不再属于胰岛素分子；这不同于把一条已折叠链任意剪成两段。[^proinsulin-processing]

蛋白质剪接（protein splicing）是另一种主链重排。intein 在前体中自催化切除自身，同时把两侧 exteins 以新的肽键连接；许多 full-length inteins 还含 homing endonuclease domain，mini-inteins 则只保留剪接核心。典型 class 1 反应经历酰基转移、支链中间体、末端 Asn 环化和最终酯—酰胺重排，变体 inteins 可绕过其中部分典型亲核步骤。它与 spliceosome 切除 RNA intron 分属不同分子层次，也不是一般蛋白酶先切两刀再由连接酶补回。[^protein-splicing]

### 小基团与小蛋白修饰构成动态状态网络 { #covalent-modifications }

磷酸化、乙酰化、甲基化、ADP-ribosylation、AMPylation、硝基化与多种氧化还原修饰能够改变电荷、构象、催化活性和结合界面。真核 signaling 常讨论 Ser／Thr／Tyr phosphorylation，细菌和古菌同样具有 Ser／Thr／Tyr kinases；细菌 two-component systems 中又常由 His kinase 把 phosphoryl group 转给 response regulator 的 Asp。将“原核磷酸化”全部写成 His modification 会把两套化学和更多例外压成一条规则。

泛素（ubiquitin）、小泛素相关修饰蛋白（small ubiquitin-like modifier，SUMO）及其他泛素样蛋白通过酶级联连接到底物，既可改变稳定性，也可控制相互作用、DNA repair、核质运输或膜分选。修饰后果取决于 attachment site、链连接方式、长度、空间和读取蛋白，单个 ubiquitin 标记只表明发生了相应修饰，是否进入蛋白酶体还取决于链型与识别环境。细菌也有 Pup 等不同的 protein-tagging systems，古菌可使用 SAMP／Ubl 类标记；这些系统在结构和酶学上与真核泛素化各有区别。

羟化、γ-carboxylation、tyrosine sulfation、citrullination 和 C-terminal amidation 展示了不同成熟化学。胶原 Pro／Lys hydroxylation 与后续 glycosylation、分泌后交联共同决定纤维性质；凝血因子的 vitamin-K-dependent γ-carboxyglutamate 帮助结合 Ca$^{2+}$ 和膜。肽类激素的 C-terminal amidation 常以末端 Gly 提供 amidating group，Gly 随反应被移除，并非简单“把 Gly 本身酰胺化以延长半衰期”。hypusination 则几乎专属于 eIF5A 的一个 Lys，经 deoxyhypusine 中间体形成 hypusine，不能概括为普遍 Lys modification。[^ptm-diversity]

### 糖链与二硫键把成熟状态接入分泌通路检查 { #glycosylation-disulfides }

多数真核 secretory-pathway N-glycans 先以 lipid-linked Glc$_3$Man$_9$GlcNAc$_2$ 前体整体转移到 Asn-X-Ser/Thr，其中 X 通常不能为 Pro；sequon 存在仍不保证位点被占据。ER 中 glucose trimming、UGGT reglucosylation 与 calnexin／calreticulin cycle 把糖链状态接入 folding quality control，高尔基体再依货物、酶区室和通过时间修剪与延伸。mucin-type O-GalNAc glycosylation 多从高尔基体逐糖建立，胞质和细胞核的 O-GlcNAc 则由另一套酶动态加到 Ser／Thr。细菌和古菌也具有多样的 N-或 O-glycosylation pathways，但 lipid carrier、linking sugar、acceptor context 和 glycan structure 随谱系变化；N-linked／O-linked 只说明连接原子，不能把跨生命域路线视作同一种加工。[^glycoprotein-quality-control]

内质网和许多细菌周质具有适合 oxidative folding 的环境，PDI／Ero1 或 DsbA／DsbB 等网络催化 disulfide formation 与 isomerization。胞质通常较还原，却仍有受调氧化还原开关和能在特定古菌胞内环境稳定存在的二硫键；“二硫键只在胞外蛋白”因此只是常见分布趋势。正确配对由序列、局部折叠、氧化还原供体和异构酶共同决定，形成二硫键本身不保证全链已正确折叠。

### 脂质化建立可调或永久的膜联系 { #protein-lipidation }

N-myristoylation 把 myristate 以 amide bond 连接到暴露的 N-terminal Gly，可在 initiator Met 去除后共翻译发生，也可在蛋白水解暴露新 Gly 后发生。S-acylation 常把 palmitate 等脂酰基以 thioester 连接到 Cys，因硫酯可被酶促去除而适合动态改变膜亲和性；受体 Cys 不限于 C 端。prenylation 则把 farnesyl 或 geranylgeranyl 连接到 CaaX 等末端 motif 的 Cys，随后常伴随 aaX cleavage 和 carboxyl methylation。[^protein-lipidation]

GPI anchoring 在内质网腔面发生：transamidase 切除前体 C 端疏水 segment，并把新 C 端连接到预组装 glycosylphosphatidylinositol，使成熟蛋白最终位于质膜非胞质侧。GPI-anchored proteins 广布于动物、真菌、植物和多类原生生物，并非动物特有。四类脂锚的键型、安装区室、可逆性和膜朝向不同；“脂锚定”描述共同的膜联系，不意味着它们共享一种酶或相同寿命。

## 蛋白质稳态在修复、隔离与清除之间分流 { #proteostasis-quality-control }

### 降解信号读取蛋白质的状态和装配关系 { #degron-recognition }

degron 是能被降解装置识别的结构特征，可由短序列、特定 N／C terminus、phosphorylation、氧化损伤、未装配界面或异常暴露的疏水面构成。许多 degrons 在正常构象中被埋藏，只有解折叠、亚基解离或 regulated cleavage 后才可及；也有 phosphodegron 只在 kinase 与 phosphatase 共同设定的时间窗中出现。N-degron pathways 读取的不只是“第一个氨基酸名称”，还包括 N-terminal modification、可达性及相应 recognin；真核 ubiquitin-dependent branches 还要求可利用的 ubiquitin-acceptor site。C-degrons 同样依赖末端序列和结构背景。[^degron-pathways]

质量控制由动力学竞争产生。伴侣结合可以促成 refolding，也可把持续失败底物交给 E3 ligase；protease cleavage 既可能生成活性蛋白，也可能暴露 degron；复合体装配可遮蔽降解信号，过量的 orphan subunit 则被清除。蛋白质半衰期因此是特定细胞状态下合成、成熟、再循环和降解速率共同形成的结果，不是由 N 端或某一种 ubiquitin chain 单独写定的常数。

### 各生命域使用不同的隔离型蛋白酶 { #compartmentalized-proteolysis }

细菌 Lon、ClpXP／ClpAP、HslUV 和膜内 FtsH 等 ATP-dependent proteases 先识别并展开底物，再把多肽送入隔离的 proteolytic chamber；不同 proteases 读取的 adaptor、tag 和 cellular localization 各异。tmRNA–SmpB 为 non-stop translation 产物添加 ssrA tag 后，正是这些装置承担不完整肽链清除，翻译端的救援过程见[停滞核糖体质控](translation.md#ribosome-rescue)。

古菌广泛使用 20S proteasome 与 AAA$^+$ unfoldases，也可用 SAMP 等 ubiquitin-like modifiers 标记底物；不同古菌还保留 Lon、proteasome-activating proteins 或其他 proteases。真核 26S proteasome 在同源 20S core 外增加 19S regulatory particle，用 E1–E2–E3 ubiquitin cascade 选择大量底物。三者都把展开与肽键水解置于受控腔室，却不能因结构同源便假设底物标签和调节网络完全相同。[^cross-domain-proteolysis]

### 真核区室质量控制连接蛋白酶体与自噬 { #eukaryotic-proteostasis }

胞质和细胞核中可被展开的单个底物多由 ubiquitin–proteasome system 处理；ER lumen 或膜中的异常蛋白可先经 ER-associated degradation（ERAD）逆向抽提到胞质，再被 proteasome 降解。内质网 folding load 超过处理能力时，未折叠蛋白反应（unfolded protein response，UPR）会调整 translation input、chaperones、ERAD、膜发生和 stress transcription。UPR 是系统级负荷响应，而具体错误折叠分子由多类识别与处置装置处理。具体 ERAD 与 UPR 路线见[内质网质量控制](../cell/endomembrane.md#er-proteostasis)。[^er-quality-control]

内吞膜蛋白、分泌通路腔内货物和细胞外物质多在内体—溶酶体路线（endosome–lysosome route）中水解；大自噬（macroautophagy）能包围大复合体、聚集体和完整细胞器，伴侣介导的自噬（chaperone-mediated autophagy）则逐个转运一类具有可识别 motif 的可溶性底物。线粒体、过氧化物酶体与细胞核的蛋白质质量控制还含区室内 proteases、逆向输出或选择性自噬。蛋白酶体和自噬的完整降解化学见[蛋白质周转](../biochem/pr_aa_catabolism.md#protein-turnover)；成熟失败会暴露识别信号并使底物进入这些出口。

## 多层证据区分定位、修饰与成熟功能 { #protein-processing-evidence }

pulse–chase labeling 可追踪 precursor 到 mature product 的时间顺序，配合 immunoprecipitation、protease inhibitor 或 organelle isolation 能分辨切割和降解。protease-protection assay、selective membrane permeabilization、engineered glycosylation site 和 crosslinking 可检验跨膜拓扑；荧光融合蛋白与 proximity labeling 提供细胞内位置，但大标签、过量表达和邻近标记都可能改变原有分选。单独观察共定位不能证明货物真正进入某个 organelle lumen。

tandem mass spectrometry 能根据 precursor mass 和 fragment ions 发现 modified peptides，并把修饰定位到候选 residue；富集方法又可提高低丰度 phosphopeptide、glycopeptide 或 ubiquitin-remnant peptide 的检出率。peptide identification、site localization、相对丰度和 site occupancy 是四个不同判断：只检出一条修饰肽不能说明细胞中多数蛋白都处于该状态，也不能仅凭质量差确定具有相同 nominal mass 的化学结构。site-localization probability、false localization rate、未修饰肽和独立化学或遗传验证共同决定结论强度。[^ptm-evidence]

功能验证还要区分修饰位点与替换突变。Ser→Ala 可阻止 phosphorylation，却也同时改变氢键、构象和其他潜在修饰；Asp／Glu 只在部分环境模拟负电荷，并不复制 phosphate 的体积、价态和可逆读取。更强的机制链需要显示相应 writer／eraser／reader、内源位点占据、定位或活性改变以及可恢复的因果关系。成熟蛋白的名称由此只是入口，真正实验对象应尽可能明确 sequence boundary、subcellular compartment、modification combination、assembly state 和时间条件。

## 参考资料与延伸阅读 { #references }

- Alberts B, Johnson A, Lewis J, et al. [The Endoplasmic Reticulum](https://www.ncbi.nlm.nih.gov/books/NBK26841/). In: *Molecular Biology of the Cell*. 4th ed. Garland Science; 2002.
- Waudby CA, Dobson CM, Christodoulou J. [Nature and Regulation of Protein Folding on the Ribosome](https://pmc.ncbi.nlm.nih.gov/articles/PMC7471843/). *Trends in Biochemical Sciences*. 2019;44:914–926.
- Hartl FU, Bracher A, Hayer-Hartl M. [Molecular chaperones in protein folding and proteostasis](https://pubmed.ncbi.nlm.nih.gov/21776078/). *Nature*. 2011;475:324–332.
- Saraogi I, Shan SO. [Co-translational protein targeting to the bacterial membrane](https://pmc.ncbi.nlm.nih.gov/articles/PMC3999308/). *Biochimica et Biophysica Acta*. 2014;1843:1433–1441.
- Adams BM, Oster ME, Hebert DN. [Protein Quality Control in the Endoplasmic Reticulum](https://pmc.ncbi.nlm.nih.gov/articles/PMC6589386/). *The Protein Journal*. 2019;38:317–329.
- Jiang H, Zhang X, Chen X, et al. [Protein Lipidation: Occurrence, Mechanisms, Biological Functions, and Enabling Technologies](https://pmc.ncbi.nlm.nih.gov/articles/PMC5985209/). *Chemical Reviews*. 2018;118:919–988.
- Varshavsky A. [N-degron and C-degron pathways of protein degradation](https://pmc.ncbi.nlm.nih.gov/articles/PMC6329975/). *Proceedings of the National Academy of Sciences USA*. 2019;116:358–366.
- Mills KV, Johnson MA, Perler FB. [Protein splicing: how inteins escape from precursor proteins](https://pmc.ncbi.nlm.nih.gov/articles/PMC4031507/). *Journal of Biological Chemistry*. 2014;289:14498–14505.
- Maupin-Furlow JA. [Proteolytic systems of archaea: slicing, dicing, and mincing in the extreme](https://pmc.ncbi.nlm.nih.gov/articles/PMC7497159/). *Emerging Topics in Life Sciences*. 2018;2:561–580.
- Weiss MA, Dhayalan B, Chatterjee D. [Biosynthesis, structure, and folding of the insulin precursor protein](https://pmc.ncbi.nlm.nih.gov/articles/PMC6463291/). *Diabetes, Obesity and Metabolism*. 2018;20 Suppl 2:13–21.
- Olsen JV, Mann M. [Status of Large-scale Analysis of Post-translational Modifications by Mass Spectrometry](https://pmc.ncbi.nlm.nih.gov/articles/PMC3861698/). *Molecular & Cellular Proteomics*. 2013;12:3444–3452.

[^cotranslational-folding]: 随链长变化的 folding landscape、translation kinetics、ribosome surface 和 trigger factor 对新生链的共同影响，见 Waudby、Dobson 与 Christodoulou 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7471843/)；折叠的热力学边界见本站[蛋白质结构](../biochem/protein_structure.md#folding-denaturation)。
[^molecular-chaperones]: trigger factor、Hsp70、chaperonin、Hsp90 与 proteostasis network 的分工，见 Hartl、Bracher 与 Hayer-Hartl 的[综述](https://pubmed.ncbi.nlm.nih.gov/21776078/)及 Balchin 等的[综述](https://doi.org/10.1126/science.aac4354)。
[^complex-assembly]: co-post／co-co-translational assembly、局部翻译和 orphan-subunit quality control 的机制与证据边界，见 Morales-Polanco 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC11040709/)。
[^bacterial-targeting]: bacterial SRP–FtsY、SecYEG、SecA／SecB 与 membrane-protein targeting，见 Saraogi 与 Shan 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3999308/)；Sec 与 Tat 对货物折叠状态的差异见[细菌膜蛋白发生综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9099147/)。
[^er-translocation]: SRP–Sec61 co-translational translocation、post-translational routes 和 lateral gating，见 Alberts 等的[内质网教材章节](https://www.ncbi.nlm.nih.gov/books/NBK26841/)及 Hegde 与 Keenan 的[membrane-protein insertion 综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4163802/)。
[^organelle-targeting]: nuclear NLS／importin／Ran 机制见[核质运输教材章节](https://www.ncbi.nlm.nih.gov/books/NBK26932/)；TOM／TIM 与 TOC／TIC 输入的共同点和差异见[线粒体与质体输入教材章节](https://www.ncbi.nlm.nih.gov/books/NBK26828/)；PTS／PEX 及 folded-cargo import 见本站[过氧化物酶体发生](../cell/organelles.md#peroxisome-biogenesis)。
[^proinsulin-processing]: preproinsulin translocation、signal-peptide cleavage、disulfide pairing 和 prohormone-convertase processing，见 Weiss、Dhayalan 与 Chatterjee 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6463291/)及[胰岛素前体遗传学综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC2740536/)。
[^protein-splicing]: class 1 intein 的 acyl shifts、branched intermediate、Asn cyclization 及 variant pathways，见 Mills、Johnson 与 Perler 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4031507/)。
[^ptm-diversity]: small-group、polypeptide、complex-molecule、backbone 和 residue-conversion modifications 的化学分类，见 Vu 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6117579/)；具体功能须按位点、区室和 occupancy 判断。
[^glycoprotein-quality-control]: 真核 N-linked glycan transfer、calnexin／calreticulin cycle 与 ER quality control，见 Adams、Oster 与 Hebert 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6589386/)；N／O-glycan 结构边界见 *Essentials of Glycobiology* 的[教材章节](https://www.ncbi.nlm.nih.gov/books/NBK579972/)；古菌 N-glycosylation 的 lipid carriers、linking sugars 和 species-specific diversity 见 Eichler 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4054257/)。
[^protein-lipidation]: N-myristoylation、S-acylation、prenylation 的键型、位点和动态调节，见 Jiang 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC5985209/)；GPI attachment 的 secretory-pathway topology 见 Alberts 等的[内质网章节](https://www.ncbi.nlm.nih.gov/books/NBK26841/)。
[^degron-pathways]: conditional N-degrons、C-degrons、recognins 及 proteasome／autophagy outcomes，见 Varshavsky 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6329975/)。
[^cross-domain-proteolysis]: archaeal 20S proteasome、AAA$^+$ activators、SAMP／Ubl tagging 与其他 proteases，见 Maupin-Furlow 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7497159/)；真核 ubiquitin–proteasome chemistry 见本站[蛋白质周转](../biochem/pr_aa_catabolism.md#ubiquitin-proteasome)。
[^er-quality-control]: glycan-dependent folding inspection、ERAD、UPR 和 proteasome coupling，见 Adams、Oster 与 Hebert 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6589386/)及本站[内质网蛋白稳态](../cell/endomembrane.md#er-proteostasis)。
[^ptm-evidence]: modified-peptide enrichment、site localization、relative quantification 与 occupancy 的不同证据要求，见 Olsen 与 Mann 的[方法综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3861698/)及 Chalkley 与 Clauser 的[site-localization 评估](https://pmc.ncbi.nlm.nih.gov/articles/PMC3418845/)。
