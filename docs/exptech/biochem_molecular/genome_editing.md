# 基因组编辑与验证

基因组编辑让可编程核酸酶或编辑酶在细胞内染色体上产生预定改变。实验结果不仅取决于靶向模块，还取决于递送持续时间、细胞修复通路、克隆选择和检测覆盖范围；短扩增子中的预期小变异只是候选等位基因，不能排除大片段缺失、倒位、供体异常整合或克隆漂变。

本页从 ZFN、TALEN 与 CRISPR-Cas 的靶向逻辑进入双链断裂修复、碱基／先导编辑、递送、结构与功能验证，并讨论生物安全和人类基因组编辑治理。编辑器载体和供体构建见[分子克隆与构建设计](molecular_cloning.md)，靶位点扩增和定量见[核酸扩增与定量](amplification_cloning.md)。

## 基因组编辑工具谱系 { #genome-editing-toolkit }

可编程核酸酶把靶向模块与 DNA 切割连接起来。归巢核酸酶识别较长序列但重新定向困难；ZFN 以多个锌指识别 DNA，并常让成对 FokI 核酸酶结构域在相邻半位点二聚；TALEN 用串联 TALE repeat 的重复可变双残基识别碱基，也通常依赖成对 FokI；CRISPR-Cas9 则以 guide RNA 与靶 DNA 配对，并受 PAM 和局部染色质约束。ZFN 在 2005 年已用于内源位点的定向修复，TALEN 随后提供了较模块化的蛋白识别路径，RNA 引导 Cas9 则显著降低了重新定向的构建设计门槛。[^programmable-nucleases]

| 工具 | 靶向模块 | 产生切割的条件 | 仍有价值的场景与主要限制 |
| --- | --- | --- | --- |
| 归巢核酸酶 | 蛋白质识别长 DNA 序列 | 单体或特定寡聚体识别并切割 | 蛋白小、某些位点特异性高；改造新靶点困难 |
| ZFN | 串联锌指蛋白 | 成对半位点使 FokI 二聚 | 体积较小且有成熟历史；指间上下文和蛋白工程复杂 |
| TALEN | TALE repeat 阵列 | 成对半位点使 FokI 二聚 | 识别规则直观、可靶向多类位点；重复阵列构建和递送负担较大 |
| CRISPR-Cas 核酸酶 | guide RNA 与靶序列配对 | 合适 PAM、R-loop 与活性核酸酶 | 易于多重设计；PAM、递送、RNA—DNA 容错和细胞修复影响结果 |

这些工具不能用一张绝对的“成本、效率、特异性”排名表决定。靶序列、细胞类型、递送方式、表达时间、染色质状态、核酸酶版本和检测深度都会改变比较。ZFN 与 TALEN 也没有因 CRISPR 出现而失去方法学意义：它们展示了蛋白质识别与成对切割的设计逻辑，并在某些递送容量、知识产权、既有验证和靶序列条件下仍可成为合理选择。

## 编辑结果、递送与验证 { #editing-outcomes-validation }

核酸酶产生双链断裂后，细胞可经经典非同源末端连接、微同源介导的末端连接或同源定向修复形成多种等位基因。所谓“knockout”常依赖小插入缺失造成移码或破坏关键序列，但三的倍数缺失、可变剪接、替代起始和残余蛋白都可能保留功能；提供 donor 也不保证按预期 HDR，供体随机整合和一侧正确连接同样会产生筛选阳性。应把预期等位基因、可接受副产物和验证方案在编辑前一起设计。

基因敲低和显性负效应属于相邻但不同的功能扰动。RNAi、反义寡核苷酸或转录抑制降低 RNA／蛋白水平，通常不改变目标 DNA 序列；显性负突变蛋白则通过进入复合物或竞争结合位点妨碍内源蛋白。它们能处理必需基因、剂量和急性效应，却分别受残余表达、脱靶、递送和过表达伪影影响。把敲低、显性负效应与敲除并列保留，有助于按生物学问题选择证据，而不是把所有功能缺失都误称为基因编辑。

碱基编辑器把失活或切口型 Cas 与脱氨酶结合，在一定编辑窗口内实现特定碱基转换，避免有意产生双链断裂；先导编辑器把切口型 Cas 与逆转录酶结合，由 pegRNA 同时指定靶位点和待写入序列，可实现多类小型替换、插入或缺失。[^precision-editors] 它们减少了对 DSB 或双链 donor 的依赖，却仍会出现旁观者编辑、非目标碱基转换、indel、RNA／DNA 脱靶、效率差异和递送限制，不能概括成“无副作用的精确编辑”。

递送形式会改变暴露时间和风险。质粒易制备但表达持续且可能整合；mRNA 缩短表达窗口；Cas 蛋白—guide RNA 的 RNP 作用更短，却对制备、运输和进入细胞有要求；病毒载体具有特定嗜性和持续性，也带来容量、免疫、整合与生产质控问题。群体细胞中的编辑比例不能替代单克隆基因型，胚胎或组织中的编辑还可能形成嵌合。筛选压力会选择生长较快的少数克隆，使表型同时混入递送、克隆化和培养选择效应。

验证应覆盖预期位点的两条等位基因、两端连接点和足够远的邻近区域。短扩增子测序容易漏掉破坏引物位点的大片段缺失、倒位、易位或供体串联，因此关键构建可联合长片段 PCR、数字 PCR、长读长测序、拷贝数和核型／结构检测。CRISPR 断裂后出现大片段缺失与复杂重排已有直接实验观察。[^large-on-target] 脱靶预测用于提出候选位点，不是阴性证明；GUIDE-seq 等实验方法可在给定细胞和条件下发现一部分全基因组断裂位点，也受检测灵敏度和生物学情境限制。[^guide-seq]

功能结论最好来自多个独立编辑克隆或独立 guide、未编辑和递送对照、基因型—表达—蛋白—表型的连续证据，以及重新引入野生型基因或精确回复突变的救援。若只有一个克隆出现表型，无法区分目标编辑、脱靶、克隆漂变和培养选择。

## 生物安全、伦理与可复现记录 { #biosafety-reporting }

重组或合成核酸实验的风险不仅来自目标基因本身，还来自宿主范围、复制能力、递送载体、抗性标记、毒素或致病相关功能、环境持留和暴露途径。开始实验前应按机构制度完成风险评估和审批，确定适用的物理与生物控制、废物处理、运输和事故响应；涉及病毒载体、whole-animal transfer、基因驱动或可能增强危害的构建时，不能由研究者仅凭普通质粒经验自行降级。NIH 指南把多类重组／合成核酸实验置于机构生物安全委员会的事前审查之下，具体辖区仍须遵守所在地法规和机构要求。[^nih-guidelines]

体细胞基因转移可以在体外改造细胞后回输，也可以在体内递送载体；基因补充不必改变内源位点，基因编辑也不自动等同于治疗。人类体细胞、胚系和可遗传编辑在科学风险、受试者保护、后代同意、公平性和社会治理上并不等价。WHO 的建议强调由机构、国家和国际层级共同治理人类基因组编辑，并同时考察安全、有效性、伦理与公共利益。[^who-editing] 教学页面可以解释工具和证据边界，不提供绕过审查的人体、生殖系或环境释放操作方案。通用风险评估与放行条件见[实验安全、伦理与风险管理](../foundations/safety_ethics.md#risk-assessment)。

可复现记录至少包括参考序列版本、全部 guide 序列、编辑器与供体构建、递送形式与时间、细胞或生物材料来源、群体与单克隆谱系、预期位点检测范围、等位基因组成、脱靶调查、表达与表型读出，以及失败和异常结构。只有把阴性与异常克隆一并保存，后续研究者才能判断未检出究竟来自真实生物学结果还是检测链盲区。

## 故障定位 { #editing-troubleshooting }

| 观察 | 优先检查 | 不能直接下的结论 |
| --- | --- | --- |
| 编辑群体显示高 indel 率 | 等位基因组成、大片段变化、细胞选择和嵌合 | 平均 indel 百分比不等于纯合 knockout |
| 单个编辑克隆有强表型 | 脱靶、克隆漂变、递送毒性、染色体变化和独立克隆 | 不能只凭单克隆归因于目标基因 |

## 参考资料与延伸阅读 { #references }

- Jinek, M. et al. [A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity](https://pubmed.ncbi.nlm.nih.gov/22745249/). *Science* 337, 816–821 (2012).
- Kosicki, M., Tomberg, K. & Bradley, A. [Repair of double-strand breaks induced by CRISPR–Cas9 leads to large deletions and complex rearrangements](https://pmc.ncbi.nlm.nih.gov/articles/PMC6390938/). *Nature Biotechnology* 36, 765–771 (2018).
- World Health Organization. [Human genome editing: recommendations](https://www.who.int/publications/i/item/9789240030381) (2021).

[^programmable-nucleases]: Urnov, F. D. et al. [Highly efficient endogenous human gene correction using designed zinc-finger nucleases](https://doi.org/10.1038/nature03556). *Nature* 435, 646–651 (2005), doi:10.1038/nature03556；Christian, M. et al. [Targeting DNA double-strand breaks with TAL effector nucleases](https://pubmed.ncbi.nlm.nih.gov/20660643/). *Genetics* 186, 757–761 (2010), doi:10.1534/genetics.110.120717；Jinek, M. et al. [A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity](https://pubmed.ncbi.nlm.nih.gov/22745249/). *Science* 337, 816–821 (2012), doi:10.1126/science.1225829。
[^precision-editors]: Komor, A. C. et al. [Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage](https://pubmed.ncbi.nlm.nih.gov/27096365/). *Nature* 533, 420–424 (2016), doi:10.1038/nature17946；Anzalone, A. V. et al. [Search-and-replace genome editing without double-strand breaks or donor DNA](https://pmc.ncbi.nlm.nih.gov/articles/PMC6907074/). *Nature* 576, 149–157 (2019), doi:10.1038/s41586-019-1711-4。
[^large-on-target]: Kosicki, M., Tomberg, K. & Bradley, A. [Repair of double-strand breaks induced by CRISPR–Cas9 leads to large deletions and complex rearrangements](https://pmc.ncbi.nlm.nih.gov/articles/PMC6390938/). *Nature Biotechnology* 36, 765–771 (2018), doi:10.1038/nbt.4192。
[^guide-seq]: Tsai, S. Q. et al. [GUIDE-seq enables genome-wide profiling of off-target cleavage by CRISPR-Cas nucleases](https://pubmed.ncbi.nlm.nih.gov/25513782/). *Nature Biotechnology* 33, 187–197 (2015), doi:10.1038/nbt.3117。
[^nih-guidelines]: National Institutes of Health. [NIH Guidelines for Research Involving Recombinant or Synthetic Nucleic Acid Molecules](https://osp.od.nih.gov/policies/biosafety-and-biosecurity-policy/#tab2)；2024 年修订通知见 [NOT-OD-24-093](https://grants.nih.gov/grants/guide/notice-files/NOT-OD-24-093.html)。正文将其作为风险分类与机构审查的权威实例，不替代所在地法规。
[^who-editing]: World Health Organization. [Human genome editing: recommendations](https://www.who.int/publications/i/item/9789240030381) (2021)。
