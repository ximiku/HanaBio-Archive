# 分子、基因与基因组进化

DNA 序列既保存谱系历史，也不断成为新的演化材料。点突变改变一个位点，重组改换等位组合，基因复制产生可分化的拷贝，转座元件和染色体重排重塑更大的片段；这些变化能否保留，则取决于功能约束、选择、漂变、重组和种群历史。**分子进化**（molecular evolution）研究序列、蛋白质、基因家族、染色体乃至整个基因组怎样在共同祖先的基础上改变。

分子进化研究通常先比较同源序列，再识别保守位点和结构域；先确定重复、缺失或重排的边界，再讨论新功能；先重建基因树和染色体历史，再解释适应意义。基因组学扩大了可观察的尺度，而基因数、基因组大小和形态复杂度分别记录不同层面的生物学性质。

## 序列演化由突变输入与功能约束共同决定 { #sequence-evolution }

同源基因在谱系分开后逐渐积累替换。编码区的**同义替换**（synonymous substitution）通常不改变氨基酸，**非同义替换**（nonsynonymous substitution）则改变蛋白质序列；“同义”描述的是遗传密码层面的结果，密码子使用、mRNA 结构、剪接调控和翻译准确性仍可能使部分同义变化受到选择。非同义位点受到的约束也不均匀：催化残基、配体结合位点、亚基界面和维持折叠的核心残基常比溶剂暴露且功能宽容的位点演化缓慢。序列差异的计算、替换饱和与速率模型见[分子进化速率与保守性](phylogenetics.md#molecular-rates-and-conservation)，选择证据的解释见[分子与基因组中的选择证据](selection_adaptation.md#molecular-evidence)。

基因的不可缺少程度可用敲除后的适合度下降来衡量，跨基因比较显示它与序列保守性之间的关系较弱，并随生物、环境和测量方式而变。一个蛋白质的演化速率还受表达量、结构稳定性、相互作用界面、亚细胞位置、有效种群大小和历史偶然性影响；实验室标准环境下的敲除表型只覆盖相应环境和生活史阶段。

许多物种中，高表达蛋白质平均演化较慢。翻译错误会产生错误折叠或异常相互作用的分子，高表达使这些小概率事件累积为更大的细胞代价，于是能够提高翻译稳健性、降低表面非特异黏附或减少错误折叠的序列更容易受到纯化选择。蛋白质合成本身的能量成本、对准确翻译的选择以及高表达基因所承担的核心功能也能产生相似相关。因此，“表达量—演化速率负相关”需要结合多类证据分解各机制的相对贡献。[^protein-rate]

保守序列也存在于非编码区。最初定义的哺乳动物**超保守元件**（ultraconserved element，UCE），是在人、鼠和大鼠之间连续至少 200 bp 完全相同的一组区段，许多位于发育调控基因附近、内含子中或 RNA 加工相关外显子内。极端保守支持长期而强的限制，具体组织、环境和功能则需由扰动实验确定；部分元件的单独缺失在实验室小鼠中没有产生明显的存活或生殖异常，提示冗余、细微效应和条件依赖。[^ultraconserved]

## 蛋白质结构域与分子协同进化 { #protein-domain-evolution }

蛋白质的结构域常能相对独立折叠或承担一部分功能，是比较蛋白质演化的重要单位。一个蛋白质可以在保守催化核心之外获得新的调控结构域，也可以丢失、复制或重新排列原有结构域。结构域、模体和折叠的层次区别见[蛋白质三级结构](../biochem/protein_structure.md#motif-domain-fold)。真核基因中，一些结构域边界与外显子边界接近，读框相容的内含子可使**外显子改组**（exon shuffling）更容易保留完整结构单元。这种统计关联支持外显子改组参与了部分蛋白质家族的历史；外显子与结构域之间仍是多对多关系，结构域也可由其他过程形成。[^exon-domain]

蛋白质之间还会发生协同进化。直接接触的两个残基中，一个替换若破坏电荷、体积或形状匹配，另一处补偿性替换可能恢复相互作用；配体与受体、酶与底物通路、线粒体与核编码亚基也可出现相互依赖的变化。序列协变同时会受到共同祖先、重组、群体结构和间接网络关系影响，因此需要在系统树背景下校正，再结合结构接触、突变组合和功能测定，才能把相关性落实为补偿机制。

**祖先序列重建**（ancestral sequence reconstruction，ASR）把现生同源序列比对到基因树上，以替换模型推断内部节点最可能的序列，再合成蛋白质测量其稳定性、活性或特异性。它让“哪个历史替换改变了功能”成为可实验的问题，但结果依赖序列取样、比对、树、替换模型和不确定位点。可靠研究会报告各位点的后验支持，并测试备选祖先序列；复活的分子代表模型支持的祖先假说。[^ancestral-reconstruction]

## 基因组大小与组成受多重过程塑造 { #genome-size-composition }

真核生物的基因组大小可相差几个数量级，差异很大一部分来自内含子、转座元件、卫星 DNA 和其他重复序列，而非蛋白质编码基因数。某些单细胞真核生物、两栖类和植物的基因组远大于人类；相近形态复杂度的物种也可有悬殊的 DNA 含量。这一**C 值谜**（C-value enigma）显示，基因组大小是扩增、删除、转座、倍性改变和种群过程共同作用的历史结果，与形态复杂度之间没有单调对应关系。

**转座元件**（transposable element，TE）包括以 DNA 中间体移动的 DNA 转座子，以及经 RNA 和逆转录步骤扩增的反转录转座子。插入会打断编码或调控序列，同源元件之间的异位重组可造成缺失、重复和倒位；宿主也可把元件序列共选为增强子、启动子、蛋白质结构域或新的基因边界。多数新插入可能中性、近中性或有害，少数产生可利用的调控创新。不同谱系中元件扩增、清除和宿主抑制的平衡不同，因而形成截然不同的重复序列景观。[^transposable-elements]

有效种群大小为理解这种差异提供了一条种群遗传路径。选择系数很小的插入、内含子扩张或冗余调控元件，在有效种群较小的谱系中更容易受漂变支配；在有效种群很大的谱系中，微弱的删除优势更可能被选择辨认。突变偏向、DNA 删除率、转座活性、细胞体积和复制成本也会改变结果。这一漂变屏障或突变危害框架可以解释部分基因组复杂化趋势；各谱系的基因组大小还取决于具体的扩增、删除和选择历史。[^genome-complexity]

碱基组成同样由多种过程塑造。GC 含量可受突变偏向、重组相关的 **GC 偏向基因转换**（GC-biased gene conversion，gBGC）、转座元件组成和选择共同影响；G≡C 配对有三条氢键、A=T 配对有两条氢键这一化学差异，只描述分子配对性质。密码子使用偏好也可能来自突变—漂变平衡、tRNA 丰度和翻译准确性选择，gBGC 还会模拟选择信号。估计翻译选择的贡献，需要先建立局部突变和重组的零模型。[^codon-bias]

**查格夫第二对称规则**（Chargaff's second parity rule）描述另一层现象：取双链 DNA 的任意一条长链单独统计，A 与 T、G 与 C 的总量常近似相等，短的寡核苷酸与其反向互补序列也常有近似频率。它不同于两条互补链之间由碱基配对必然产生的一一对应；局部复制、转录和链特异突变可造成偏离，词长增加后近似也会减弱。该规则为复制方向、倒位和长期突变过程提供待解释的组成模式，具体偏离还需结合功能与突变过程分析。

## 重复、转换与基因家族更新 { #duplication-and-gene-families }

基因重复可由不等交换、复制滑移、DNA 片段转座、逆转录插入、大片段重复、染色体重复或**全基因组复制**（whole-genome duplication，WGD）产生。WGD 使整套染色体拷贝数增加；多倍体谱系随后经历基因丢失、同源交换、表达分工和二倍体化，现生基因组常只保留被长期改写后的重复痕迹。异源多倍体和同源多倍体具有不同的形成方式、减数配对与遗传后果，详见[整倍性与多倍体](../genetics/chromosome_variation.md#euploidy-polyploidy)。

相似拷贝组成基因家族后，可以沿不同方式演化。在核糖体 RNA、组蛋白等串联重复家族中，不等交换和基因转换可使同一物种内各拷贝彼此相似，形成**协同进化**（concerted evolution）。免疫球蛋白、嗅觉受体等许多家族则更符合**出生—死亡演化**（birth-and-death evolution）：复制不断产生新成员，一部分长期保留和分化，另一部分删除或失活。两种过程可在不同时间、不同家族甚至同一家族的不同区域占优势，具体模式需由拷贝树、转换片段和基因组位置判断。[^gene-family-evolution]

失去完整编码能力的拷贝称为**假基因**（pseudogene）。DNA 片段复制形成的未加工假基因常保留内含子和邻近调控区；mRNA 逆转录后重新插入形成的加工假基因通常缺少内含子，并可带有 poly(A) 来源痕迹。多数假基因不再产生原蛋白，但有些仍被转录、影响亲本基因调控，或后来获得新的表达和功能。因此“假基因”首先是基于同源关系和编码完整性的结构注释，具体功能仍需逐个验证。

## 染色体在数目、结构和功能上演化 { #chromosome-evolution }

染色体数目可因整条染色体融合或裂分、非整倍性和 WGD 而改变。人 2 号染色体的内部保留反向排列的端粒样重复和祖先着丝粒遗迹，比较基因组与细胞遗传证据共同支持它源自人族谱系中两条祖先类人猿染色体的端对端融合。这个例子说明核型差异可以由可定位的历史事件形成；染色体数与遗传信息量、形态复杂度之间需要分别比较。[^human-chromosome-2]

缺失、重复、倒位和易位改变片段的拷贝数、方向或邻接关系。断点可能破坏基因、改变位置效应或重组景观；结构杂合体在减数分裂中的配对和交换还可能产生不平衡配子。重排因而能降低不同核型之间的基因流，并让其中的分化等位基因更少被重组拆散。由核型差异走向生殖隔离，还取决于重排类型、杂合适合度、种群结构、选择和后续分化。变异在个体中的细胞遗传后果见[染色体结构变异](../genetics/chromosome_variation.md#structural-variant-formation)。

性染色体展示了染色体功能分化。常染色体上的性别决定因子出现后，其周围重组受抑区域可逐步扩展；非重组的 Y 或 W 区域更易积累重复序列和失去基因，X 或 Z 与异配性染色体之间则产生剂量差异，促进剂量补偿系统演化。不同动物和植物多次独立形成、替换或融合性染色体，有些系统长期保持较弱分化。“重组抑制—退化—剂量补偿”是常见模型，各谱系的终态仍由自身历史决定。[^sex-chromosome-evolution]

## 新基因从多种序列材料产生 { #new-gene-origins }

基因复制是新基因来源中研究最充分的一类。片段重复或 WGD 保留原有外显子—内含子结构，逆转录复制产生最初通常缺少启动子和内含子的反转录拷贝；外显子改组和基因融合能组合已有结构域，基因裂分则把原有功能模块分配到不同开放阅读框。水平基因转移把其他谱系的序列带入受体基因组，在原核生物中尤其重要，真核生物也存在经内共生、病毒或其他载体发生的转移。基因树与物种树的对应关系由[复制、丢失与水平转移](phylogenetics.md#gene-trees-and-species-trees)继续展开。

原先不编码蛋白质的序列也可逐步成为基因。新的转录起始、剪接位点或开放阅读框先产生低水平转录本和短肽，其中多数消失，少数在表达、定位或分子作用上获得可选择的效应，随后积累提高稳定性和功能的变化，这就是**从头基因起源**（de novo gene birth）。判定这一路径需要确认近缘物种的同线性区域缺少祖先编码基因，并排查快速分化、组装缺口或基因丢失造成的同源物漏检。[^de-novo-genes]

重叠基因可在同一 DNA 区段使用不同读框或相反链，替代启动子和选择性剪接则让一个基因产生多个转录本。后两者扩展表达和蛋白质同工型，基因计数仍依赖可遗传的序列边界；它们也能通过新的外显子组合、组织特异表达或调控边界促进功能创新。稳定表达、序列边界和功能证据共同界定新基因，一次转录事件则提供候选线索。

## 重复基因具有多种保留命运 { #duplicate-gene-fates }

Ohno 的经典模型指出，复制产生冗余拷贝后，一份可维持祖先功能，另一份较少受原有约束，因而有机会积累新功能。但新功能突变通常很少见，未受选择维持的冗余拷贝更常先被删除或失活；若两份都被原功能的强选择约束，自由分化的空间又会缩小。这一张力称为 **Ohno 困境**（Ohno's dilemma）。

重复后的实际命运包括多条路径。拷贝失活形成假基因最常见；总剂量有利或蛋白质复合物需要化学计量平衡时，两份可直接受到保留；祖先基因原有的组织、时期或生化任务被两份互补分配，称**亚功能化**（subfunctionalization）；其中一份获得祖先没有的新表达或新活性，称**新功能化**（neofunctionalization）。两份也可在保留共同核心功能的同时分别专门化。调控元件的互补退化可使任何一份单独都不足以覆盖祖先表达范围，从而把最初的冗余转化为共同必需，这一复制—退化—互补模型解释了许多长期保留的旁系同源基因。[^duplicate-fates]

祖先蛋白常具有微弱的次级活性，即分子功能的“兼营性”。环境改变使次级活性变得有利时，增加拷贝数能先提高该活性的总量，选择因而在新催化功能尚未完善前就维持扩增；随后某些拷贝改进次级活性，另一些保留原功能，多余拷贝再丢失。这一**创新—扩增—分化模型**（innovation–amplification–divergence model，IAD model）把新功能的萌芽放在复制之前，并已在细菌实验演化中直接观察到。它与剂量选择、亚功能化等模型共同化解 Ohno 困境，不同家族可沿不同顺序演化。[^iad-model]

## 内含子、选择性剪接与基因共享扩展功能 { #introns-splicing-gene-sharing }

关于内含子起源的“内含子早现”与“内含子晚现”争论，曾分别强调内含子在早期基因拼装中的作用，或它们在真核生物出现后进入基因。比较完整基因组表明，最后真核共同祖先已经拥有较丰富的剪接体内含子，此后各谱系发生大量丢失和不同时期的获得；剪接体内含子很可能与 II 类自剪接内含子的扩散有关。现有证据由此支持早期真核生物中已经存在复杂外显子—内含子结构，以及后续持续的内含子增失。[^intron-evolution]

内含子为选择性剪接、外显子改组和调控元件提供了空间。每个内含子的保留原因需要结合其功能、种群历史和删除效应分别判断。剪接位点和调控序列的改变可以使同一前体 RNA 在组织或时期之间组合不同外显子，肌钙蛋白、原肌球蛋白等基因家族的多种同工型是经典例子。比较其演化时要区分古老外显子的差异使用、新外显子获得、基因复制后的表达分工和真正的新基因起源。

同一蛋白质序列还可能在不同组织或分子环境中承担不同任务，称为**基因共享**（gene sharing）或蛋白质兼职。鸟类和其他脊椎动物晶状体中的一些晶状体蛋白，就是原有代谢酶或应激蛋白被高水平招募到晶状体后，同时承担透明介质的结构功能；有些谱系直接使用同一基因，有些随后复制并分化。这里的创新首先来自表达位置和蛋白质用量改变，催化位点可以稍后改变，说明调控演化可以先于明显的编码序列新功能化。[^gene-sharing]

## 多层证据重建基因组变化 { #genome-evolution-evidence }

基因组中的相似性提供历史假说的入口。判断基因重复，需要同源序列、基因树以及染色体共线性或断点证据；判断外显子改组，需要结构域边界、内含子相位和近缘基因结构；判断水平转移，要排查污染、基因丢失和不完整物种取样；判断新功能，则要比较表达、蛋白质活性、互作、扰动表型和适合度。不同证据定位不同环节，彼此叠加才能从“序列不同”走到“发生了什么历史事件”。

基因组注释也会随测序完整度和算法改变。一个物种中未找到同源序列，可能来自真实缺失或从头起源，也可能来自着丝粒、端粒和重复区尚未组装，或远缘同源已经超出常规相似性搜索能力。可靠的分子进化叙述需要保留这些不确定性，并把序列、结构、染色体、种群和功能证据放在同一系统发育框架内。分子资料由此与比较解剖、胚胎和化石记录共同重建生物演化史。

## 参考资料与延伸阅读 { #references }

[^protein-rate]: Drummond, D. A. & Wilke, C. O. (2008). [Mistranslation-induced protein misfolding as a dominant constraint on coding-sequence evolution](https://doi.org/10.1016/j.cell.2008.05.042). *Cell*, 134, 341–352；Cherry, J. L. (2010). [Expression level, evolutionary rate, and the cost of expression](https://doi.org/10.1093/gbe/evq059). *Genome Biology and Evolution*, 2, 757–769.
[^ultraconserved]: Bejerano, G. et al. (2004). [Ultraconserved elements in the human genome](https://doi.org/10.1126/science.1098119). *Science*, 304, 1321–1325；Ahituv, N. et al. (2007). [Deletion of ultraconserved elements yields viable mice](https://doi.org/10.1371/journal.pbio.0050234). *PLoS Biology*, 5, e234.
[^exon-domain]: Liu, M. & Grigoriev, A. (2004). [Protein domains correlate strongly with exons in multiple eukaryotic genomes—evidence of exon shuffling?](https://doi.org/10.1016/j.tig.2004.06.013). *Trends in Genetics*, 20, 399–403.
[^ancestral-reconstruction]: Hanson-Smith, V., Kolaczkowski, B. & Thornton, J. W. (2010). [Robustness of ancestral sequence reconstruction to phylogenetic uncertainty](https://doi.org/10.1093/molbev/msq081). *Molecular Biology and Evolution*, 27, 1988–1999；Aadland, K. et al. (2020). [Alignment-integrated reconstruction of ancestral sequences improves accuracy](https://doi.org/10.1093/gbe/evaa164). *Genome Biology and Evolution*, 12, 1549–1565.
[^transposable-elements]: Bourque, G. et al. (2018). [Ten things you should know about transposable elements](https://doi.org/10.1186/s13059-018-1577-z). *Genome Biology*, 19, 199.
[^genome-complexity]: Lynch, M. & Conery, J. S. (2003). [The origins of genome complexity](https://doi.org/10.1126/science.1089370). *Science*, 302, 1401–1404.
[^codon-bias]: Hershberg, R. & Petrov, D. A. (2008). [Selection on codon bias](https://doi.org/10.1146/annurev.genet.42.110807.091442). *Annual Review of Genetics*, 42, 287–299；Duret, L. & Galtier, N. (2009). [Biased gene conversion and the evolution of mammalian genomic landscapes](https://doi.org/10.1146/annurev-genom-082908-150001). *Annual Review of Genomics and Human Genetics*, 10, 285–311.
[^gene-family-evolution]: Nei, M., Gu, X. & Sitnikova, T. (1997). [Evolution by the birth-and-death process in multigene families of the vertebrate immune system](https://doi.org/10.1073/pnas.94.15.7799). *Proceedings of the National Academy of Sciences USA*, 94, 7799–7806.
[^human-chromosome-2]: Ijdo, J. W. et al. (1991). [Origin of human chromosome 2: an ancestral telomere–telomere fusion](https://doi.org/10.1073/pnas.88.20.9051). *Proceedings of the National Academy of Sciences USA*, 88, 9051–9055；Fan, Y. et al. (2002). [Genomic structure and evolution of the ancestral chromosome fusion site in 2q13–2q14.1 and paralogous regions on other human chromosomes](https://doi.org/10.1101/gr.337602). *Genome Research*, 12, 1651–1662.
[^sex-chromosome-evolution]: Saunders, P. A. & Muyle, A. (2024). [Sex chromosome evolution: hallmarks and question marks](https://doi.org/10.1093/molbev/msae218). *Molecular Biology and Evolution*, 41, msae218.
[^de-novo-genes]: Ruiz-Orera, J. et al. (2015). [Origins of de novo genes in human and chimpanzee](https://doi.org/10.1371/journal.pgen.1005721). *PLoS Genetics*, 11, e1005721；Van Oss, S. B. & Carvunis, A.-R. (2019). [De novo gene birth](https://doi.org/10.1371/journal.pgen.1008160). *PLoS Genetics*, 15, e1008160.
[^duplicate-fates]: Force, A. et al. (1999). [Preservation of duplicate genes by complementary, degenerative mutations](https://doi.org/10.1093/genetics/151.4.1531). *Genetics*, 151, 1531–1545.
[^iad-model]: Bergthorsson, U., Andersson, D. I. & Roth, J. R. (2007). [Ohno's dilemma: evolution of new genes under continuous selection](https://doi.org/10.1073/pnas.0707158104). *Proceedings of the National Academy of Sciences USA*, 104, 17004–17009；Näsvall, J. et al. (2012). [Real-time evolution of new genes by innovation, amplification, and divergence](https://doi.org/10.1126/science.1226521). *Science*, 338, 384–387.
[^intron-evolution]: Rogozin, I. B. et al. (2012). [Origin and evolution of spliceosomal introns](https://doi.org/10.1186/1745-6150-7-11). *Biology Direct*, 7, 11.
[^gene-sharing]: Wistow, G., Anderson, A. & Piatigorsky, J. (1990). [Evidence for neutral and selective processes in the recruitment of enzyme-crystallins in avian lenses](https://doi.org/10.1073/pnas.87.16.6277). *Proceedings of the National Academy of Sciences USA*, 87, 6277–6280.
