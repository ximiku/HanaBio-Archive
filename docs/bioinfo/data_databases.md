# 生物数据、格式与数据库

生物信息学中的“数据”很少只是碱基、氨基酸或一列测量值。一条测序读段来自某次实验和某个样本，一段基因组坐标依附于特定组装版本，一个蛋白质名称可能对应多个物种、基因、剪接异构体和成熟产物，一项功能注释还要说明它来自直接实验、序列推断还是自动传播。文件保存这些对象的某种表示，数据库则进一步保存对象之间的关系、版本、证据和来源。离开这些上下文，即使文件能够被软件读入，分析对象也可能已经发生改变。

公共生物数据库由多种机构和协作网络共同维护。它们承担的任务并不相同：有些忠实归档研究者提交的数据，有些在公开数据之上建立参考序列或专家注释，有些按基因组坐标整合多来源信息，还有些提供本体、通路或结构化知识。理解这些分工，比记忆数据库名称更重要；它决定了一个记录能否作为原始观察、参考对象、功能断言或检索入口来使用。

## 从样本到数字记录 { #data-objects }

一次组学研究通常同时产生若干层次的对象。研究项目说明总体目的和设计，生物样本记录物种、组织、处理、个体和采样条件，实验记录文库构建、仪器与测定策略，运行记录承载实际产生的读段文件，组装、比对、定量和变异检测则生成派生分析。NCBI 的 BioProject 与 BioSample、SRA 的 Study—Experiment—Run 关系，以及 ENA 的相应对象，都是为了避免把“一个文件”误当成“一个实验”或“一个样本”。[^insdc-data-model]

在这些对象之上，还会形成参考序列、基因模型、蛋白质条目、结构模型、变异断言和功能注释。它们与原始观测之间的距离不同，维护方式也不同。数据库因而可以按主要职责分成几类，但同一资源可能兼有多种职责。

| 资源类型 | 主要保存内容 | 典型例子 | 阅读时首先确认 |
| --- | --- | --- | --- |
| 原始或提交型档案库 | 提交者产生的读段、组装、序列、表达矩阵、结构坐标及相关元数据 | INSDC 的 GenBank／ENA／DDBJ、SRA、GEO、BioStudies、wwPDB | 谁提交、何时提交、对象是否更新、质量控制做到哪一步 |
| 参考集合、知识库与断言档案 | 从公开数据中选择、校验、整合或人工注释的记录，以及带证据的提交断言 | RefSeq、UniProtKB、ClinVar | 选择标准、注释证据、审校状态、版本和冲突断言 |
| 坐标浏览与整合平台 | 在特定基因组组装上叠加基因、变异、表达、保守性等注释轨道 | Ensembl、UCSC Genome Browser、NCBI Genome Data Viewer | 物种、组装、注释发布版、轨道来源和坐标制度 |
| 本体、分类与通路知识系统 | 受控术语、关系、功能断言、通路和分子对象之间的知识图 | GO、Sequence Ontology、InterPro、KEGG | 术语版本、关系类型、证据代码、物种和许可 |

“原始”也不表示完全未经处理。测序平台会进行碱基识别，档案库会校验格式并可能生成标准化副本；“人工审校”也不表示每个字段都由实验直接证明。应当沿着记录中的提交者、处理过程、引用、证据代码和交叉引用追踪来源，而不是用数据库的整体声誉替代对具体字段的判断。

## 标识符、版本与坐标 { #identifiers-versions }

### 登录号与显示名称

稳定标识符用于指向数字对象，显示名称则方便人阅读。基因符号、蛋白名称和网页标题会重名或改名，不适合作为唯一身份；登录号也并非总能脱离版本使用。INSDC 在核酸序列中采用 `accession.version`：小数点前的登录号标识记录系列，序列发生改变时小数点后的版本号递增；只写登录号通常会指向当前版本。基因组组装也有独立登录号，例如提交型 GenBank 组装以 `GCA_` 开头，RefSeq 组装以 `GCF_` 开头，两者即使配对，版本号也可能不同。[^ncbi-identifiers]

不同资源对“稳定”的定义并不相同。Ensembl 尽量让基因、转录本、蛋白和外显子 ID 跨发布版延续，但基因模型发生根本变化时旧 ID 仍可能退役；UniProtKB 的主登录号适合长期引用，而 UniRef 聚类每次发布都会重新计算，代表序列改变时聚类 ID 也可能改变。稳定标识符因此减少身份漂移，却不能消除生物学模型和数据库规则的演化。[^ensembl-uniprot-ids]

引用记录时应保留能够重建对象的最小身份集合：数据库名称、登录号及版本、数据库发布版或访问日期，以及必要的组装、样本和分析登录号。下载整个集合时，还要记录查询式、筛选条件、返回字段和文件校验和。只保存一个网页链接或一个基因符号，通常不足以在数月后找回同一对象。

### 基因组坐标的参照系

基因组坐标至少由物种、组装版本、序列区域、区间起止、链方向和坐标约定共同定义。`chr1:100-200` 若没有说明是 GRCh37 还是 GRCh38、是否包含端点，就不是完整的数据对象。BED 通常使用从 0 开始、左闭右开的区间，GFF3 和许多浏览器显示采用从 1 开始、两端包含的区间；VCF 的 `POS` 也是从 1 开始的位置，但结构变异还需要结合 `END`、符号等位基因和断点语义解读。坐标换算必须同时处理组装差异、间隙、重复序列和无法映射的区段，不能把整体加减 1 当作跨格式或跨组装转换。[^coordinate-formats]

序列本身也可以成为身份依据。GA4GH 的 refget 用由序列内容计算的标识符取得参考序列，能发现“名称相同、内容不同”或“名称不同、内容相同”的情况；但内容寻址不会自动携带物种、组装角色和生物学注释，仍需与常规元数据结合。[^refget-spec]

## 文件格式及其语义边界 { #file-formats }

文件格式是一份关于字段、顺序、数据类型和缺失值的约定。扩展名只提示可能的格式，不能证明文件符合规范；同一格式还可能有不同版本、可选标签和实现差异。可靠流程会在读入时校验格式，在输出中保留版本声明、字段定义和参考对象。

| 格式 | 主要对象 | 核心语义 | 常见误读 |
| --- | --- | --- | --- |
| FASTA | 一条或多条核酸或蛋白质序列 | `>` 开头的描述行后接序列；描述行的内部字段没有统一通用模式 | 把描述行中的名称当作稳定 ID；认为 FASTA 自带碱基质量、坐标或注释 |
| FASTQ | 测序读段及逐碱基质量 | 每条记录包含名称、序列、分隔行和等长质量字符串 | 忽略质量编码、配对关系和档案库可能提供的简化质量值 |
| GenBank／ENA flat file | 带注释的核酸记录 | 记录元数据、特征表、位置表达式、限定词、引用和序列 | 把每个 feature 当作实验验证的基因，或在解析时丢失复合位置和链方向 |
| GFF3／GTF | 基因组特征及层级关系 | 序列区域、来源、特征类型、坐标、链、phase 和属性；GFF3 可用 `ID`／`Parent` 表达层级 | 混用 GFF3 与 GTF 的属性规则，或假定文件已按父子关系和坐标排序 |
| BED／bedGraph | 基因组区间与轨道数值 | BED 是从 0 开始的左闭右开区间；后续列随 BED 子型扩展 | 与从 1 开始的坐标直接拼接；把浏览器显示区间原样写回 BED |
| SAM／BAM／CRAM | 读段与参考序列的比对 | SAM 为文本，BAM 为相应二进制编码；CRAM 强调参考相关压缩；header、FLAG、CIGAR 和可选标签共同定义记录 | 只看起点而忽略软剪切、缺口、补充比对和参考序列；保存 CRAM 却没有锁定参考 |
| VCF／BCF | 变异位点、等位基因、基因型和注释 | header 声明参考、INFO／FORMAT 字段与版本；BCF 是二进制编码 | 把一个 VCF 行等同于单一生物事件，忽略规范化、多等位、倍性和缺失基因型 |
| PDBx/mmCIF | 大分子结构模型及实验元数据 | 以数据字典定义的类别、键值和表格表达实体、实验、坐标、装配体与修订史 | 只读取原子坐标而忽略实验对象、非对称单元／生物装配体和残基编号映射 |

SAM／BAM／CRAM、VCF／BCF 和 BED 的现行规范由 GA4GH 大规模基因组学工作组维护；GFF3 的规范由 Sequence Ontology 社区维护。FASTQ 则来自长期形成的事实标准，历史上存在多种质量编码，因此档案库和分析软件仍需明确实现约定。PDBx/mmCIF 自 2014 年起成为 PDB 档案的标准格式，旧式定宽 PDB 格式不再扩展，且无法完整表示一些大型结构。[^hts-formats][^gff3-format][^pdbx-format]

大数据格式常与压缩和索引共同工作。bgzip 压缩的 VCF 可由 tabix 或 CSI 按区间访问，BAM 常配 BAI／CSI，CRAM 需要参考序列身份能够被可靠解析。索引是派生加速结构，不是原数据的替代品；移动、重命名或更新主体文件后，应重新检查索引和校验和是否仍匹配。

## 核酸档案与基因组资源 { #nucleotide-genome-resources }

### INSDC 与参考序列

国际核酸序列数据库合作组织（INSDC）把日本 DDBJ、欧洲 ENA 和美国 NCBI 的核酸档案连接成共同的公共记录体系。成员接收原始读段、样本和项目元数据、组装序列、功能注释及派生分析，分配可引用的登录号，并定期交换公开数据与更新。GenBank、ENA 和 DDBJ 因此是协作归档入口，而不是三套需要分别累加计数的独立证据。它们保存提交者记录和科学史，也可能保留冗余、错误或后来被修订的注释。[^insdc-archive]

RefSeq 在 INSDC 公开序列之上建立参考集合，使用自动流程、协作注释和不同程度的人工审校，提供基因组、转录本和蛋白质的整合记录。它的“非冗余”和“参考”是资源的生产策略，不意味着每个物种只有一条序列，也不意味着所有 RefSeq 条目都经过同等程度的人工审阅。分析时应说明使用的是提交型 `GCA_` 组装还是 RefSeq `GCF_` 组装，并记录具体版本。[^refseq-resource]

BioProject 描述一个研究计划，BioSample 描述被测的生物材料，SRA／ENA 的实验与运行记录再连接文库和文件。把这些登录号共同保存下来，可以区分生物重复、技术重复、同一样本的不同测定，以及一个项目中多种数据类型。GSS、EST 和 dbEST 等历史分区记录了早期基因组探查序列和表达序列标签；随着完整参考基因组和短读长测序普及，它们已不再是表达分析的主要入口，但对追溯旧基因模型、cDNA 克隆和方法史仍有价值。

### 组装、注释与坐标浏览

Ensembl、UCSC Genome Browser 和 NCBI Genome Data Viewer 以基因组组装为坐标骨架，整合基因模型、转录本、变异、同源关系、调控和比较基因组信息。UCSC 以轨道叠加和区间浏览见长，Table Browser、数据下载和 track hub 支持批量提取与自定义数据；Ensembl 还提供稳定 ID 历史、BioMart、REST API 和发布版档案。浏览器把多来源证据并置，却不会替用户决定哪条轨道最正确。每条轨道的来源、生成方法、发布日期和组装必须单独阅读。[^genome-browsers]

UniGene 曾在参考基因组尚不充分时把 EST 和转录本按基因聚类，也曾用于近似表达谱和 cDNA 克隆索引。NCBI 已于 2019 年关闭其网页界面；旧构建仅适合历史追溯，现代基因与转录本检索应转向 NCBI Gene、RefSeq、Ensembl 及相应表达档案。旧教材中的 Ensembl Genomes、SRS、Sequin 等入口也应按当前服务重查：资源名称、提交工具和网站界面会变，登录号、发布版档案和正式 API 通常比点击路径更耐久。[^legacy-resources]

## 蛋白质、结构与功能知识系统 { #protein-structure-function-resources }

UniProt 将蛋白质序列的归档、功能注释和去冗余检索分成不同资源。UniProtKB 是功能知识库，其中 Swiss-Prot 部分由人工审校，TrEMBL 部分以计算注释为主并等待进一步审校；UniParc 按精确氨基酸序列去冗余，为每条独特序列分配不被重新使用的 UPI，并保存它在来源数据库中的出现历史；UniRef100、UniRef90 和 UniRef50 则按相同性或相似性与覆盖度聚类，以减少序列搜索空间。聚类成员共享序列相似性，不等于共享所有功能，UniRef 的代表和聚类 ID 也可能随发布版改变。Proteomes 资源把蛋白集合连接到具体基因组组装，一个物种可以有多个 proteome ID。[^uniprot-resources]

wwPDB 由 RCSB PDB、PDBe、PDBj 等伙伴共同管理同一套实验大分子结构档案。一个 PDB 条目包含坐标，还包含实验方法、样品实体、配体、装配体、质量指标和修订历史。CATH、SCOP 等资源在结构档案上建立结构域或折叠分类，SWISS-MODEL Repository 等保存计算模型；它们都是结构资源，却不应与实验结构档案混为一类。具体的结构质量、预测置信度和结构比较将在[结构生物信息学](structural_bioinformatics.md)展开。

GO 由分子功能、生物学过程和细胞组分三个相互关联的本体组成，GO annotation 则是“某个基因产物以某种关系关联某个 GO 类”的带引用和证据代码断言。GO 因而是本体与注释知识库，而不是“基因组数据库”；缺少注释也不等于已经证明该基因不具备某项功能。InterPro 整合蛋白质家族、结构域和功能位点的签名模型，KEGG 组织基因、KO、通路、反应、化合物、疾病和药物等对象。三者都可以辅助功能解释，但术语命中、模型匹配和通路着色的证据强度不同，不能自动变成机制结论。[^functional-resources]

## 表达、变异与表型数据 { #study-resources }

GEO 保存研究者提交的微阵列、测序及其他高通量功能基因组数据。其 Platform、Sample 和 Series 分别描述测量平台、样本记录和相关样本构成的研究；由 GEO 团队整理的 DataSet 只是其中一部分，不能假定每个 GSE 都有对应 GDS。欧洲原 ArrayExpress 网页界面已于 2022 年关闭，数据和登录号迁入 BioStudies 的 ArrayExpress collection；高通量测序研究的原始读段通常再连接到 ENA，而处理后矩阵、样本注释和方案保留在研究级记录中。[^expression-archives]

变异资源按对象和用途分工。dbSNP 聚合短变异及其提交记录，dbVar 主要保存人类结构变异研究和断言，ClinVar 归档提交者对人类变异—疾病或药物反应关系的分类、证据和修订历史。ClinVar 可以同时呈现一致与冲突的断言，NCBI 工作人员负责数据模型和记录质量，却不会脱离提交重新给出统一的临床分类。OMIM 主要是基因与遗传表型的文献型知识资源，HapMap 则是具有重要历史意义的群体单倍型项目，二者都不等同于通用变异档案。[^variation-resources]

miRBase、RNAcentral、ENCODE、Expression Atlas、PRIDE、MetaboLights 等资源分别服务于非编码 RNA、调控元件、表达汇总、蛋白质组和代谢组。早期资料中还列有 SMD、CGED、BodyMap、HGBASE、CANSITE、SPAD、ProNet 等名称；这些清单反映了专业数据库发展的历史，但其中许多入口已经关闭、合并或改变维护范围。检索旧文献时可以用原名称追溯，建立新流程时则应优先确认当前维护者、最后发布版、数据许可和可替代的公共档案。

## 检索、批量访问与标识符映射 { #retrieval-interop }

数据库检索首先要把生物学问题转换成对象约束。例如寻找“人 TP53”时，应区分基因、某个转录本、某条蛋白质序列、一个基因组区间、一个变异或一项功能断言，并指定物种与参考版本。关键词适合发现候选记录，登录号适合取得已知对象，序列相似性搜索适合寻找相关序列，坐标查询适合提取与某个组装区间相交的注释。BLAST、BLAT 和 FASTA 属于序列搜索算法，它们的评分与统计边界将在[序列比对与数据库搜索](sequence_analysis.md)说明。

网页界面适合探索单条记录，重复任务和大规模下载则应使用正式 API、批量导出或版本化数据发布。NCBI 的 Entrez 与 E-utilities、EMBL-EBI 各资源的 REST API、UniProt REST、Ensembl REST／BioMart、UCSC Table Browser 和下载服务器都能返回结构化结果。调用时应遵守速率限制和服务政策，分页获取完整结果，并把请求参数、返回格式和失败重试写进分析记录；手工复制网页表格既容易截断，也难以重现。[^programmatic-access]

ID mapping 是有生物学含义的关系查询，而不是简单替换字符串。一个基因可以对应多个转录本和蛋白异构体，一条蛋白序列可以出现在多个物种或组装中，旧 ID 可能拆分、合并或退役。映射结果应保留来源数据库、目标数据库、物种、发布版、关系类型和一对多结果，并在后续过滤前报告有多少输入未映射、映射为多个对象或发生版本变化。

一个可复现的数据子集至少应留下以下信息：

1. 研究对象、物种、样本和基因组组装；
2. 数据库及发布版、登录号版本或访问日期；
3. 完整查询式、筛选条件、返回字段和排序／分页方式；
4. 下载 URL 或 API endpoint、软件版本和必要的身份验证范围；
5. 文件大小、校验和、压缩与索引方式；
6. ID 映射表、排除记录及其理由。

这些内容将在[命令行、工作流与可重复研究](workflows.md)中进一步转化为脚本、环境和工作流记录。

## FAIR、开放与受控访问 { #fair-access }

FAIR 原则要求数字对象可发现（Findable）、可访问（Accessible）、可互操作（Interoperable）和可复用（Reusable）。它强调全局唯一标识符、丰富且可检索的元数据、标准协议、共享的知识表示、明确许可和来源。FAIR 并不等于“所有人无需条件即可下载”：访问协议可以包含认证和授权，敏感数据即使受控，只要元数据可发现、申请条件清晰、获准后能以标准方式取得，仍可具有较高的 FAIR 程度。[^fair-principles]

INSDC 公开档案要求公开数据可自由访问，因此不接收必须受控访问的基因组数据。涉及可识别的人类基因型、表型和临床资料时，应依据知情同意和数据使用条件进入 dbGaP、EGA 等受控资源；研究者需提交用途明确的数据访问申请，并在获准的环境和期限内使用。公开摘要、数据字典和研究级元数据不能被反向用于规避个体数据的访问限制。[^controlled-access]

可复用还包括许可、伦理和群体语境。一个文件技术上可下载，不代表可以任意再分发；一个群体数据集可以用于获批的疾病研究，也未必允许身份推断、商业用途或与其他数据链接。使用数据库前应同时阅读资源许可、提交者声明、同意范围和引用要求，并在发表时引用数据集登录号、具体版本及数据库的推荐文献，使数据生产者和维护者都能获得可追踪的贡献记录。

## 数据库记录的证据边界 { #database-evidence }

数据库能集中证据，却不能消除证据的不完整和冲突。提交型档案中的记录可能含错误；自动注释会传播训练数据和同源推断的偏差；人工审校受文献范围与时间限制；同一基因在不同组装、注释管线和物种中可能具有不同边界。没有检索结果可能意味着对象确实缺失，也可能来自名称不一致、物种或版本错误、权限限制、索引延迟或查询条件过严。

阅读一条记录时，可以依次检查其身份、对象、来源和结论：登录号及版本指向什么；它代表样本、序列、模型还是断言；字段来自提交、计算还是审校；引用和证据代码支持到哪一层；与其他记录的交叉引用是一一对应、近似映射还是仅为相关链接。只有把这些问题回答清楚，数据库结果才从“搜索命中”转化为可用于分析和论证的证据。

## 参考资料与延伸阅读 { #references }

- INSDC. [About the International Nucleotide Sequence Database Collaboration](https://www.insdc.org/about-insdc/).
- NCBI. [The NCBI Handbook](https://www.ncbi.nlm.nih.gov/books/NBK143764/)；[Sequence Identifiers](https://www.ncbi.nlm.nih.gov/genbank/sequenceids/).
- EMBL-EBI Training. [Introductory bioinformatics pathway](https://www.ebi.ac.uk/training/online/courses/introductory-bioinformatics-pathway/)；[EMBL-EBI, programmatically](https://www.ebi.ac.uk/training/online/courses/embl-ebi-programmatically/).
- UniProt Consortium. [UniProtKB](https://www.uniprot.org/uniprotkb)、[UniRef](https://www.uniprot.org/help/uniref) 与 [UniParc](https://www.uniprot.org/uniparc) 文档。
- Gene Ontology Consortium. [Gene Ontology overview](https://geneontology.org/docs/ontology-documentation/)；[Introduction to GO annotations](https://geneontology.org/docs/go-annotations/).
- GA4GH Large Scale Genomics Work Stream. [SAM/BAM, CRAM, VCF/BCF and BED specifications](https://github.com/samtools/hts-specs).
- The Sequence Ontology. [GFF3 specification](https://github.com/The-Sequence-Ontology/Specifications/blob/master/gff3.md).
- wwPDB. [PDBx/mmCIF General FAQ](https://mmcif.wwpdb.org/docs/faqs/pdbx-mmcif-faq-general.html).
- Wilkinson MD, et al. [The FAIR Guiding Principles for scientific data management and stewardship](https://doi.org/10.1038/sdata.2016.18). *Scientific Data*. 2016;3:160018.

[^insdc-data-model]: NCBI 对 [BioProject 与 BioSample](https://submit.ncbi.nlm.nih.gov/about/bioproject-biosample/)的定义，以及 INSDC 对 project、sample、experiment、run、assembly 和 analysis 等对象的[最小规范](https://www.insdc.org/insdc-minimal-specifications/)，共同说明研究、材料、测定和文件是相互连接而非彼此等同的记录。
[^ncbi-identifiers]: NCBI [Sequence Identifiers](https://www.ncbi.nlm.nih.gov/genbank/sequenceids/)解释 `accession.version`；[Genome assembly versioning and status](https://www.ncbi.nlm.nih.gov/datasets/docs/v2/policies-annotation/genome-processing/version-status/)说明 `GCA_`、`GCF_` 组装登录号及其独立版本规则。
[^ensembl-uniprot-ids]: Ensembl 的[档案与稳定 ID 说明](https://www.ensembl.org/info/website/archives/index.html)记录 ID 延续、退役和历史映射；UniProt 建议以主登录号链接 UniProtKB，并说明 [UniRef 聚类标识会随重算改变](https://www.uniprot.org/help/linking_to_uniprot)。
[^coordinate-formats]: UCSC 文档明确区分 [BED 的 0-based、half-open 坐标与其他 1-based 表示](https://genome.ucsc.edu/goldenPath/help/decorator.html)；GA4GH [hts-specs](https://github.com/samtools/hts-specs)维护 BED、SAM/BAM/CRAM 与 VCF/BCF 的现行规范。
[^refget-spec]: GA4GH [refget specification](https://samtools.github.io/hts-specs/refget.html)定义按序列摘要标识并取得参考序列的接口，同时要求服务返回算法、长度等元数据。
[^hts-formats]: GA4GH Large Scale Genomics Work Stream, [Specifications of SAM/BAM and related high-throughput sequencing file formats](https://github.com/samtools/hts-specs).
[^gff3-format]: The Sequence Ontology, [GFF3 specification](https://github.com/The-Sequence-Ontology/Specifications/blob/master/gff3.md).
[^pdbx-format]: wwPDB 的 [PDBx/mmCIF General FAQ](https://mmcif.wwpdb.org/docs/faqs/pdbx-mmcif-faq-general.html)说明标准格式、数据字典及旧 PDB 格式的表达限制。
[^insdc-archive]: INSDC 的[组织说明](https://www.insdc.org/about-insdc/)列出成员、公开数据交换、持久标识符、数据范围与开放访问原则；其[技术规范](https://www.insdc.org/technical-specifications/)维护共同的特征表、受控词汇和提交标准。
[^refseq-resource]: NCBI [About RefSeq](https://www.ncbi.nlm.nih.gov/refseq/about/)说明其综合、非冗余、持续维护的参考集合及自动计算、协作和人工审校等不同生产路径。
[^genome-browsers]: UCSC [Genome Browser User Guide](https://genome.ucsc.edu/goldenPath/help/hgTracksHelp.html)说明组装坐标、注释轨道、Table Browser 和自定义轨道；Ensembl [Archives](https://www.ensembl.org/info/website/archives/index.html)说明发布版档案与 ID 历史。
[^legacy-resources]: NCBI 在 [2019 年退役 UniGene](https://ncbiinsights.ncbi.nlm.nih.gov/2019/02/01/ncbi-to-retire-the-unigene-database/)，同时保留旧构建用于历史访问；这也是区分历史数据库名称与当前数据入口的实例。
[^uniprot-resources]: UniProt 对 [UniProtKB](https://www.uniprot.org/uniprotkb)、[UniRef](https://www.uniprot.org/help/uniref)、[UniParc](https://www.uniprot.org/uniparc)和 [Proteomes](https://www.uniprot.org/help/proteome)分别给出知识库、聚类、精确序列档案和组装相关蛋白集合的定义。
[^functional-resources]: GO Consortium 的[本体概览](https://geneontology.org/docs/ontology-documentation/)与[注释说明](https://geneontology.org/docs/go-annotations/)区分术语图和带证据断言；[KEGG overview](https://www.kegg.jp/kegg/)列出其基因、KO、通路、化学物质、疾病与药物等对象体系。
[^expression-archives]: NCBI [GEO Overview](https://www.ncbi.nlm.nih.gov/geo/info/overview.html)说明 Platform、Sample、Series 和 DataSet 的关系；EMBL-EBI 的[迁移公告](https://www.ebi.ac.uk/about/news/updates-from-data-resources/arrayexpress-interface-to-close/)说明 ArrayExpress 数据与登录号进入 BioStudies collection。
[^variation-resources]: NCBI 对 [ClinVar](https://www.ncbi.nlm.nih.gov/clinvar/intro/)的说明强调它归档提交断言、证据、冲突和版本，而非自行改写分类；[dbVar](https://www.ncbi.nlm.nih.gov/dbvar/content/help/)保存人类结构变异研究，适用范围与 dbSNP 不同。
[^programmatic-access]: NCBI 将 [E-utilities](https://www.ncbi.nlm.nih.gov/home/tools/)作为 Entrez 的公共 API；EMBL-EBI 的[程序化访问课程](https://www.ebi.ac.uk/training/online/courses/embl-ebi-programmatically/)说明用 REST API 自动取得并连接多类生物数据。
[^fair-principles]: Wilkinson 等提出的 [FAIR 指导原则](https://doi.org/10.1038/sdata.2016.18)明确涵盖唯一标识符、丰富元数据、标准协议、共享词汇、许可与 provenance，并允许在必要时使用认证和授权。
[^controlled-access]: INSDC 说明公开档案不接收必须受控访问的数据；EMBL-EBI 将 [EGA](https://www.ebi.ac.uk/about/faq)用于敏感人类遗传、表型和临床数据，NCBI 的 [dbGaP](https://www.ncbi.nlm.nih.gov/gap/docs/submissionguide/)则以同意分组和数据访问申请管理个体级基因型—表型数据。
