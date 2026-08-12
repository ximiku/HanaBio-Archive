# 生活史与有性生殖的进化

一个个体何时成熟、繁殖多少次、每次产生多少后代，以及把多少资源留给自身存活，合在一起构成它的生活史。有性生殖又把配子形成、配偶获得、重组和亲代投入带入同一套适合度核算。两类问题看似一类讨论年龄，一类讨论配偶，实质上都在追踪有限资源和遗传材料怎样跨越生命阶段与世代分配。

经典生活史理论从年龄别存活率和繁殖率出发，经典性选择理论从雌雄投入、交配成功和后代质量出发。这些模型仍是学习的骨架。现代种群遗传学、实验演化与系统发育比较补充了模型成立的条件，也揭示同一表型相关可以由资源分配、个体质量、共同祖先或环境差异产生。因而，“最优”表示在给定约束下选择可达的局部结果，不是生物为了物种延续而预先设计的完美方案。

## 年龄别存活与繁殖共同决定生活史适合度 { #age-specific-fitness }

设雌性活到年龄 $x$ 的概率为 $l_x$，在该年龄平均产生的雌性后代数为 $m_x$。一个出生个体在一生中留下的预期雌性后代数，即净繁殖率，可写为

$$
R_0=\sum_x l_xm_x.
$$

$R_0$ 把各年龄的贡献相加，却没有区分后代何时出生。若种群处于稳定年龄结构，并以瞬时增长率 $r$ 衡量长期增长，年龄别贡献由 Euler–Lotka 方程联系：

$$
\sum_x e^{-rx}l_xm_x=1.
$$

当 $r>0$ 时，较早出生的后代能更早进入繁殖，因而在长期增长中权重较高；在衰退种群或强烈波动的环境中，结论会随人口过程改变。由此可见，“一生留下多少后代”和“这些后代何时出现”是两个相关而不同的适合度维度。繁殖后个体也未必失去进化作用：继续护幼、供食、传递信息或帮助后代繁殖，都可能经亲缘个体的成功进入包容适合度。

最优性模型先列出可行策略，再以存活、繁殖或种群增长的某个适合度量寻找极值。**进化稳定策略**（evolutionarily stable strategy, ESS）则强调频率依赖：当群体主要采用某策略时，稀有的替代策略不能入侵。两者都需要明确环境、遗传变异、权衡函数与竞争背景。发育途径、系统发育历史和遗传相关会限制实际可达的表型，环境随机性还可能使最大化算术平均后代数的策略输给降低失败风险的策略。ESS 最初由 Maynard Smith 与 Price 在动物冲突模型中明确提出，后来才广泛用于生活史与性分配问题。[^ess]

## 资源获取与资源分配共同塑造权衡 { #acquisition-allocation-tradeoffs }

繁殖需要能量、营养和时间，也会增加暴露于捕食、感染或损伤的机会。资源投入当前繁殖后，通常不能同时用于生长、体细胞维持和未来繁殖，于是形成成熟早晚、后代大小与数目、当前与未来繁殖等经典权衡。这一分配原则在[生活史性状与资源分配](../ecology/life_history.md#allocation-principle)中从生态条件展开；这里关心的是相关模式如何转化为进化证据。

若研究者在资源总量相近的个体间比较，当前繁殖投入多者可能表现出较低的未来存活或繁殖，形成负相关。若个体获得资源的能力差异很大，高质量个体却可同时长得快、存活久并产生更多后代，表型相关便会转为正值。van Noordwijk 与 de Jong 的资源获取—分配模型说明，正相关并不能推翻权衡，负相关也不自动证明资源分配是唯一原因。[^acquisition-allocation]

权衡可在多个层次检验。跨种群或跨物种比较能显示长期分化，但须控制体型、环境与共同祖先；同一种群内的表型相关接近个体实际差异，却混合了基因、年龄、感染和资源条件；定量遗传分析可估计性状间遗传协方差；操纵窝卵数、食物或繁殖投入，再追踪后续存活与繁殖，最接近成本的因果检验。喜鹊窝卵数操纵实验发现，自然窝卵数接近当年离巢幼鸟数的最大值，是 Lack 窝卵数假说的经典支持；然而亲本未来繁殖和幼鸟离巢后的存活仍须纳入完整的终生适合度。[^clutch-manipulation]

## 成熟、繁殖次数与后代投入构成联动策略 { #maturity-parity-offspring }

早熟能缩短世代时间并降低未繁殖即死亡的风险，却常以较小体型、较低单次繁殖力或较少的生长积累为代价；延迟成熟可换取更强竞争力和更高繁殖能力，但个体必须先存活到成熟。选择作用的不是一个孤立年龄，而是成熟年龄、成熟体型、成体存活和繁殖间隔组成的联合策略。年龄或体型改变带来的边际繁殖收益，以及延迟期间的死亡风险，共同决定选择方向。

一生仅有一次集中繁殖称为**一次繁殖**或单次繁殖（semelparity），多次繁殖称为**多次繁殖**或迭次繁殖（iteroparity）。Cole 的早期模型曾指出，在某些简化条件下，多年生多次繁殖相对一年生一次繁殖的增长优势可能只相当于每年多产生一个后代。随后模型加入幼体建立率、年龄别成体存活和繁殖成本，显示一次繁殖与多次繁殖的分界取决于整个生命表，而不由寿命长短单独决定。[^cole-revisited]

当成体存活较低、一次性高投入能显著增加成功，或繁殖机会短暂而可预测时，一次繁殖更可能有利；成体存活较高、单次繁殖失败风险大或年度环境波动使“分散下注”有效时，多次繁殖更可能保留未来机会。环境波动的影响取决于波动发生在幼体存活、成体存活还是繁殖收益的哪一环，也取决于各年龄结果是否相关，不能化约为“环境多变必然多次繁殖”。[^fluctuating-reproduction]

随着剩余繁殖价值下降，个体增加当前繁殖投入可形成年龄相关的繁殖努力，生命末期还可能出现**终末投资**。但衰老个体的生理状态会限制可投入资源，较高质量个体也可能在早期就承担较高投入；观察到老年个体繁殖较多或较少，都需要区分选择形成的分配规则与状态变化。

后代大小与数目是另一项核心权衡。Smith–Fretwell 模型把亲代总投入看作有限预算：后代过小，单个后代存活率很低；后代继续增大到某一点后，额外投入带来的存活收益递减，把同样资源分给更多后代反而更有利。模型由此预测在给定环境下存在使“单位亲代投入产生的存活后代数”最大的后代大小。实际最优值还受亲代未来生存、兄弟姐妹竞争、后代扩散、照料方式和环境异质性影响。[^offspring-size-number]

密度依赖会改变这些权衡的边际收益。低密度下快速成熟和高繁殖率可能迅速增加后代数；高密度下，竞争能力、存活和对拥挤的耐受可能更重要。传统 $r/K$ 选择把两端概括为一组对照性状，适合作为历史模型，但现实性状并不总沿一条轴协同变化，内禀增长率 $r$ 也不等于特定密度下观察到的实际增长率。其现代用法与局限见[生活史连续统](../ecology/life_history.md#r-k-selection)。

## 年龄增长使自然选择的作用力重新分布 { #evolution-of-senescence }

衰老表现为年龄增长后存活率、繁殖率或生理功能的持续下降。若一个突变主要在许多个体已经死亡或完成繁殖后才表达，它对适合度的平均影响通常较小，选择清除它的效率也较弱。Hamilton 用年龄别生命表形式化了这一点：对存活或繁殖的选择作用力一般随年龄下降，而不是在某个年龄突然归零。[^hamilton-senescence]

这一年龄梯度支持三类相互补充的经典机制。**突变积累**允许晚年有害、早年近乎中性的突变在群体中保留；**拮抗性多效性**指同一等位基因若提高早年存活或繁殖，即使损害晚年功能，也可能获得净选择优势；**可弃置体细胞理论**则从资源分配出发，认为在外源死亡风险和繁殖回报给定时，无限提高体细胞修复并非最优，有限维护会使分子损伤随年龄积累。Williams 的拮抗性多效性论文和 Kirkwood 的体细胞维护模型分别奠定了后两条路径。[^williams-pleiotropy] [^disposable-soma]

三类机制产生可区分的遗传与生理预测，却可在同一物种中并存。晚年亲代照料、知识传递和祖辈帮助会延长晚年性状的选择窗口；年龄结构改变、性别差异和环境风险也会改变选择作用力。因此，演化理论解释的是为什么衰老相关变异能产生和保留，并不把每一种晚年损伤都归为适应，也不预言所有物种以同一速率衰老。生态页的[衰老机制与比较](../ecology/life_history.md#evolution-of-senescence)继续讨论不同生命史中的例外。

## 有性生殖同时承担传递、配偶与重组成本 { #costs-of-sex }

讨论性的代价前，须区分几个常被合并的过程：**有性生殖**是来自不同配子核的遗传材料结合，**异交**指配子来自不同个体，**减数分裂**使染色体套数减半，**重组**在同源染色体间改换遗传组合。许多生物可以自交而仍进行减数分裂和重组，细菌可重组却没有真核式有性生殖，无融合生殖也可能保留减数过程的部分改型。不同假说解释的是这些过程中的不同部分。

在雌性数量限制种群增长、后代的限制性资源由母体承担、雄性只提供遗传物质、出生性比约为 $1:1$ 等严格条件下，无性雌性的后代都能继续生殖，而有性雌性约一半资源用于产生雄性，这构成经典的**雄性成本**或性的两倍成本。自然蜗牛系统的实验比较确实观察到无性型在适当条件下接近两倍的增长优势，也同时显示生态相互作用会改变优势大小。[^twofold-cost]

其他成本包括寻找和争夺配偶所需的时间与能量、交配传播疾病、求偶增加捕食风险、减数分裂与配子形成的成本，以及重组拆散适应性等位基因组合的风险。所谓**重组负荷**只有在亲本组合优于重组后代的平均组合时才成立；重组也能拆开有害关联。因而“有性谱系把一半基因传给每个后代”本身不是额外代价——亲本仍会把每个位点的一个拷贝传入配子——真正需要核算的是后代产量、亲代投入和遗传组合的差异。

无性谱系屡次由有性祖先产生，完整有性过程一旦丢失却较难重新获得，这种不对称使性的广泛保留成为经典难题。现存有性与无性谱系的比较会混合起源时间、杂交背景、倍性和生态差异，短期个体成本、群体适应速度与谱系长期存续也处于不同尺度。性的解释因而通常不是一项普遍收益抵消全部成本，而是若干条件依赖机制共同作用。[^enigma-sex]

## 重组改变连锁选择与遗传组合 { #benefits-of-recombination }

在有限无重组群体中，选择作用于整条遗传背景。两个有利突变若分别出现在不同克隆中，只能相互竞争，直到其中一条背景胜出；重组可把它们带到同一后代中，这就是 Fisher–Muller 思路。反过来，有利突变若与有害突变同处一条背景，重组也可将二者分开。酵母实验演化显示，性既缓解了有利突变间的克隆干扰，也帮助选择把有利与有害变异分离，从而加快适应。[^sex-speeds-adaptation]

更一般地，连锁位点上的选择会相互干扰，降低每个位点对选择的独立响应，称为 **Hill–Robertson 干扰**。选择性扫荡携带邻近中性变异、背景选择清除与有害等位基因连锁的变异，都是连锁选择的具体情形。重组降低位点间关联，通常能提高选择效率；作用大小取决于有效群体大小、突变输入、选择强度、重组图谱和上位性，并非只在“大种群”或“强选择”中才有意义。[^hill-robertson]

若无性群体中当前有害突变最少的那一类个体因随机取样消失，而没有重组重新生成该组合，群体的最低突变负荷就上升一格，这称为 **Muller 棘轮**。棘轮速度受群体大小、有害突变率、选择、上位性和补偿突变影响；它特别适合解释小型、有限、长期无重组群体的累积风险，不是每代必然发生的机械过程。

环境改变还会改变基因型的相对优势。寄生物追踪常见宿主基因型时，重组产生稀有组合可暂时逃离感染，宿主与寄生物由此发生负频率依赖的红皇后动力学。在线虫与细菌共同演化实验中，能够共同演化的寄生物选择维持了双亲有性生殖，而不共同演化的处理未产生同样结果。该实验给出机制支持，却不意味着寄生物能解释所有类群的性；空间结构、基因型特异性和共同演化速度决定机制能否工作。[^red-queen]

## 突变率修饰基因通过遗传背景接受间接选择 { #mutation-rate-evolution }

改变复制校对或 DNA 修复的等位基因称为突变率修饰基因。提高突变率的 **mutator** 自身未必提高适合度，但在无性群体中，它与其背景中新产生的有利突变保持紧密关联，可随有利克隆搭便车上升；同时产生的有害突变又会拖累它。环境变化、适应所需突变的数量和群体大小共同决定两种效应的平衡。[^mutator-hitchhiking]

有性重组会更快拆开 mutator 与有利突变的关联，使它更难持续搭便车，而其反复产生有害突变的代价仍在后代中表现。因此重组改变了突变率修饰基因的间接选择路径。自然选择通常偏好更高复制保真度，但校对和修复有能量与时间成本，某些损伤也无法完全避免；当进一步降低突变率带来的适合度收益小于漂变和生化成本时，突变率会停留在非零水平。突变率的演化结果是选择、漂变、突变偏向和分子约束的平衡，不是朝绝对最小值单向前进。

## 性比与性分配由频率依赖的边际收益决定 { #sex-ratio-allocation }

性比可以指受精时的初级性比、出生或孵化时的性比、成体性比，也可以指某一时刻可交配个体组成的操作性性比；它们会因性别决定、差异死亡、迁移和繁殖时序而不同。还须区分某个亲本对子代的性分配与整个种群观察到的比例。行为生态中的术语和测量方法见[性分配与性别改变](../ecology/behavioral_ecology/sexual_selection.md#sex-allocation)。

Fisher 原理从频率依赖出发：若一种性别稀少，投向该性别的每个后代平均可获得更多交配机会，选择会增加对稀有性别的投入，直到两性的边际回报相等。若产生一个儿子和一个女儿的成本相同，平衡常表现为接近 $1:1$ 的后代数；成本不同，预测的是总亲代投入相等，而非数目必然相等。差异死亡可使出生比与成体比偏离，遗传系统和群体结构也会改变平衡。

局域交配会改变稀有性的收益。Hamilton 的**局域配偶竞争**模型中，少数母体的子代在出生斑块内交配，儿子主要与兄弟争夺姐妹，而女儿交配后扩散；产生足以完成交配的少量儿子，再把更多投入给女儿，可形成强烈雌偏。共同产卵的母体数增加后，雄性面对较多非亲缘竞争者，偏斜通常减弱。该理论对寄生蜂等类群的精确性比预测，是适应主义模型与自然观察结合最成功的案例之一。[^extraordinary-sex-ratios]

**局域资源竞争**关注留居性别的亲缘个体竞争食物、巢位或繁殖机会。若女儿留居而儿子扩散，偏向儿子可减少母女与姐妹间竞争；若雄性留居，方向可相反。Clark 以大婴猴的雄偏次级性比提出了经典模型，但后来比较研究也提示，资源竞争、资源增益、母体状态和人口过程可能同时作用，不能仅凭偏斜方向指定机制。[^local-resource-competition]

雌雄同体生物把资源分配给雄性与雌性功能。性分配理论用**收益曲线**描述追加资源产生的交配或后代收益；若某一功能很快出现边际收益递减，把一部分资源转给另一功能就可能提高总回报。局域精子竞争、花粉输出、配偶数量、自交干扰与亲代照料会改变曲线。收益曲线可以解释雌雄功能的分配，却不能由一条曲线单独推出雌雄同体、雌雄异体或性别转换；发育约束和生态时序同样重要。

## 自交与异交交换繁殖保障和遗传负荷 { #selfing-outcrossing }

自交能在缺少配偶或传粉者时提供繁殖保障。一个自交等位基因还可同时通过胚珠和花粉进入后代，在不考虑花粉折损、近交衰退等条件时具有经典的自动传递优势；高度适应的整套基因组合也较少被异交拆散。另一方面，自交提高纯合度，使隐性或部分隐性有害等位基因暴露，造成后代存活与繁殖下降，即**近交衰退**；它还降低有效重组和群体内遗传多样性，使连锁选择干扰增强。

反复自交能让部分强有害隐性等位基因以纯合形式被选择清除，这称为遗传负荷的**净化**。净化效果取决于等位基因效应、连锁、群体大小和人口损失：弱有害等位基因及超显性造成的近交衰退不易清除，净化期间死亡或不育本身也有代价。Lande 与 Schemske 的经典模型说明，自交率与近交衰退可以共同演化并形成不同稳定状态，而不是自交必然持续提高平均适合度。[^selfing-inbreeding]

异交补充遗传变异、降低近交并产生新组合，但亲本差异过大时，后代可能丢失局部适应、共适应基因组合或核—质匹配，出现**远交衰退**。第一代杂交优势与后续世代重组衰退可以先后发生。因此自交与异交不是“保守”与“进步”的两级，而是一组由配偶可得性、传粉生态、遗传负荷、环境异质性和群体历史共同决定的繁育系统。[^inbreeding-outbreeding]

## 配偶选择可获得直接、间接与相容性收益 { #mate-choice-models }

配偶选择的直接收益在本代即可进入选择者的存活或繁殖，例如食物型婚礼礼物、领地与巢址、防御、精包营养和亲代照料。雄性舞虻、蝎蛉等类群的婚礼礼物把求偶、交配时长和雌性营养直接连接起来，形态和行为细节见[婚礼礼物](../zoology/behavior/reproduction_parental.md#nuptial-gifts)。直接收益会随资源稀缺度、欺骗概率与照料可靠性改变。

间接收益通过后代基因型实现。**Fisher 失控模型**中，偏好和被偏好的性状都可遗传；具有偏好的个体更常与性状显著者交配，使偏好等位基因与性状等位基因在后代中形成遗传关联，儿子较易获得吸引力，女儿较易获得相同偏好，二者因而相互加强。存活成本、偏好成本、遗传变异耗竭或环境改变可使过程停止，模型并不预言夸张性状无限增长。Lande 的数量遗传模型把偏好—性状协同演化和稳定线、失控条件写成了可检验形式。[^lande-sexual-selection]

**指示性状**假说认为装饰或信号反映携带者的总体条件、抗病能力或发育稳定性，选择者由此给后代获得平均较优的等位基因；**遗传相容性**则是相对标准，同一个配偶未必适合所有选择者，关键在杂合度、免疫基因互补或避免不利组合。“好基因”与“合适的基因”可同时影响选择，须用亲子鉴定、半同胞设计或交叉繁殖把直接收益、父系效应和母体环境分开。[^good-genes-good-fit]

偏好还可利用感官系统原有的响应倾向。雌性 túngara 蛙的内耳对复合叫声频率成分敏感，播放实验表明这种感官结构使加入 chuck 的雄性叫声更有吸引力；这支持**感官偏向**或感官利用，但要证明偏好先于信号演化，还需近缘种系统发育比较。[^sensory-bias] 另一类**追逐式性选择**模型强调性冲突：信号先提高对异性的刺激，接受方因交配成本演化抵抗，双方发生拮抗协同演化。它提供了夸张信号的一条路径，并不把所有偏好都解释为受骗。[^chase-away]

性选择是自然选择中由交配与受精成功差异构成的部分。它可以与存活选择方向相反，也可以通过筛除遗传负荷促进群体适应；某些性状提高携带者交配成功的同时，会增加配偶损伤或降低种群增长。个体、配偶和种群层面的结果须分别测量，不能把性选择一概写成有利于物种或一概有害于种群。配偶竞争、交配后选择和婚配制度的完整行为链见[性选择与婚配制度](../ecology/behavioral_ecology/sexual_selection.md#sexual-selection)与[求偶、交配与婚配制度](../zoology/behavior/reproduction_parental.md#reproductive-sequence)，跨类群的照料动作则见[亲代照料与亲子关系](../zoology/behavior/parental_care.md#parental-care-sequence)。

## 从相关模式到进化机制的证据链 { #life-history-sex-evidence }

生活史与生殖策略跨越一个个体的一生，证据也须跨越相应时间尺度。标记重捕和长期谱系记录给出年龄别存活、繁殖与亲缘关系；共同园和资源操纵分离环境与遗传差异；窝卵数、交配机会或寄生压力实验直接改变模型中的关键变量；亲子鉴定与数量遗传模型估计实际交配成功、偏好—性状协方差和遗传相容性；实验演化追踪性、重组和突变率在数十至数百代中的变化；系统发育比较则检验某种繁育系统是否与谱系存续、寄生压力或环境波动反复关联。

每种方法都只覆盖因果链的一段。现生物种间有性与无性谱系的差异可能早于性方式变化，短期繁殖优势不等于长期谱系优势，实验室中有效的选择机制也未必在野外强到足以决定结果。可靠结论会先明确适合度量和时间窗，再排除个体质量、年龄结构、共同祖先和人口史，最后把统计模式与行为、生理和遗传机制接合起来。

## 参考资料与延伸阅读

[^ess]: Maynard Smith, J. & Price, G. R. (1973). [The Logic of Animal Conflict](https://doi.org/10.1038/246015a0). *Nature*, 246, 15–18.

[^acquisition-allocation]: van Noordwijk, A. J. & de Jong, G. (1986). [Acquisition and Allocation of Resources: Their Influence on Variation in Life History Tactics](https://doi.org/10.1086/284547). *The American Naturalist*, 128, 137–142.

[^clutch-manipulation]: Högstedt, G. (1980). [Evolution of Clutch Size in Birds: Adaptive Variation in Relation to Territory Quality](https://doi.org/10.1126/science.210.4474.1148). *Science*, 210, 1148–1150.

[^cole-revisited]: Charnov, E. L. & Schaffer, W. M. (1973). [Life-History Consequences of Natural Selection: Cole's Result Revisited](https://doi.org/10.1086/282877). *The American Naturalist*, 107, 791–793.

[^fluctuating-reproduction]: Schaffer, W. M. (1974). [Optimal Reproductive Effort in Fluctuating Environments](https://doi.org/10.1086/282954). *The American Naturalist*, 108, 783–790.

[^offspring-size-number]: Smith, C. C. & Fretwell, S. D. (1974). [The Optimal Balance between Size and Number of Offspring](https://doi.org/10.1086/282929). *The American Naturalist*, 108, 499–506.

[^hamilton-senescence]: Hamilton, W. D. (1966). [The Moulding of Senescence by Natural Selection](https://doi.org/10.1016/0022-5193(66)90184-6). *Journal of Theoretical Biology*, 12, 12–45.

[^williams-pleiotropy]: Williams, G. C. (1957). [Pleiotropy, Natural Selection, and the Evolution of Senescence](https://doi.org/10.1111/j.1558-5646.1957.tb02911.x). *Evolution*, 11, 398–411.

[^disposable-soma]: Kirkwood, T. B. L. (1977). [Evolution of Ageing](https://doi.org/10.1038/270301a0). *Nature*, 270, 301–304.

[^twofold-cost]: Gibson, A. K., Delph, L. F. & Lively, C. M. (2017). [The Two-Fold Cost of Sex: Experimental Evidence from a Natural System](https://doi.org/10.1002/evl3.1). *Evolution Letters*, 1, 6–15.

[^enigma-sex]: Otto, S. P. (2009). [The Evolutionary Enigma of Sex](https://doi.org/10.1086/599084). *The American Naturalist*, 174, S1–S14.

[^sex-speeds-adaptation]: McDonald, M. J., Rice, D. P. & Desai, M. M. (2016). [Sex Speeds Adaptation by Altering the Dynamics of Molecular Evolution](https://doi.org/10.1038/nature17143). *Nature*, 531, 233–236.

[^hill-robertson]: Hill, W. G. & Robertson, A. (1966). [The Effect of Linkage on Limits to Artificial Selection](https://doi.org/10.1017/S0016672300010156). *Genetical Research*, 8, 269–294.

[^red-queen]: Morran, L. T., Schmidt, O. G., Gelarden, I. A., Parrish, R. C. & Lively, C. M. (2011). [Running with the Red Queen: Host-Parasite Coevolution Selects for Biparental Sex](https://doi.org/10.1126/science.1206360). *Science*, 333, 216–218.

[^mutator-hitchhiking]: Palmer, M. E. & Lipsitch, M. (2006). [The Influence of Hitchhiking and Deleterious Mutation upon Asexual Mutation Rates](https://doi.org/10.1534/genetics.105.049445). *Genetics*, 173, 461–472.

[^extraordinary-sex-ratios]: Hamilton, W. D. (1967). [Extraordinary Sex Ratios](https://doi.org/10.1126/science.156.3774.477). *Science*, 156, 477–488.

[^local-resource-competition]: Clark, A. B. (1978). [Sex Ratio and Local Resource Competition in a Prosimian Primate](https://doi.org/10.1126/science.201.4351.163). *Science*, 201, 163–165.

[^selfing-inbreeding]: Lande, R. & Schemske, D. W. (1985). [The Evolution of Self-Fertilization and Inbreeding Depression in Plants. I. Genetic Models](https://doi.org/10.1111/j.1558-5646.1985.tb04077.x). *Evolution*, 39, 24–40.

[^inbreeding-outbreeding]: Edmands, S. (2007). [Between a Rock and a Hard Place: Evaluating the Relative Risks of Inbreeding and Outbreeding for Conservation and Management](https://doi.org/10.1111/j.1365-294X.2006.03148.x). *Molecular Ecology*, 16, 463–475.

[^lande-sexual-selection]: Lande, R. (1981). [Models of Speciation by Sexual Selection on Polygenic Traits](https://doi.org/10.1073/pnas.78.6.3721). *Proceedings of the National Academy of Sciences*, 78, 3721–3725.

[^good-genes-good-fit]: Mays, H. L. Jr. & Hill, G. E. (2004). [Choosing Mates: Good Genes versus Genes That Are a Good Fit](https://doi.org/10.1016/j.tree.2004.07.018). *Trends in Ecology & Evolution*, 19, 554–559.

[^sensory-bias]: Ryan, M. J. & Rand, A. S. (1990). [The Sensory Basis of Sexual Selection for Complex Calls in the Túngara Frog](https://doi.org/10.1111/j.1558-5646.1990.tb05200.x). *Evolution*, 44, 305–314.

[^chase-away]: Holland, B. & Rice, W. R. (1998). [Chase-Away Sexual Selection: Antagonistic Seduction versus Resistance](https://doi.org/10.1111/j.1558-5646.1998.tb05132.x). *Evolution*, 52, 1–7.
