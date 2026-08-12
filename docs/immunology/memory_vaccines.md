# 免疫记忆与疫苗

一次适应性免疫应答结束后，抗原特异性保护并不会随效应细胞收缩而全部消失。骨髓中的长寿命浆细胞继续分泌抗体，记忆 B 细胞保留可再次扩增和分化的克隆，循环及组织中的记忆 T 细胞则维持不同的迁移与效应准备状态。它们分处不同区室、在不同时间尺度上工作，共同构成免疫记忆。

疫苗利用这套生物学，在不经历相应自然疾病的条件下向免疫系统提供抗原及适当的启动背景。保护结果不仅取决于选了什么抗原，还取决于抗原在体内怎样产生或递送、哪些先天信号同时出现、从何处接种以及各剂次相隔多久。因而，“产生了抗体”只是疫苗应答的一个读出，不能概括记忆质量和临床保护。

## 长期保护由多个细胞库共同维持 { #distributed-memory }

### 长寿命浆细胞提供预置抗体 { #long-lived-plasma-cells }

部分浆细胞迁入骨髓等生存生态位，在基质细胞和髓系细胞提供的 CXCL12、APRIL、IL-6 等信号中长期存活。它们已经终末分化，不再以膜型 BCR 巡查抗原，却能在没有持续抗原刺激时不断分泌同一克隆的抗体。血液和黏膜中预先存在的抗体可在再次暴露伊始中和病原体、阻断毒素或标记靶物，因此是反应速度最快的一层保护。长寿命浆细胞的来源和寿命具有异质性，某次应答产生浆细胞并不保证相应抗体终身维持。[^plasma-cell-memory]

### 记忆 B 细胞保留可更新的克隆 { #memory-b-cells }

记忆 B 细胞仍表达 BCR，在再遇抗原后可增殖并产生新的浆细胞，也可重新进入生发中心。一个人即使血清抗体已经下降，仍可能保留能识别该抗原的记忆 B 细胞；反过来，稳定抗体也可能主要来自既有浆细胞，而不表示记忆 B 细胞正在持续活动。这两类细胞分别形成预置抗体和召回应答两道防线，不能合并为同一个“体液记忆细胞”。[^b-cell-memory]

记忆 B 细胞群也不是初次应答克隆的静态复制品。不同亚群在同种型、亲和成熟程度、组织位置和再次分化倾向上不同，部分较宽泛的克隆在病原体变异后仍可能识别保守或新暴露表位。它们怎样从滤泡外或[生发中心](b_cell_antibody.md#germinal-center-reaction)产生，会随抗原形式、T 细胞帮助和炎症时程改变。

### 记忆 T 细胞按迁移位置分工 { #memory-t-cells }

循环中的中央记忆 T 细胞常保留进入次级淋巴器官和较强再增殖能力，效应记忆群体更容易在外周巡查并较快取得效应功能；组织驻留记忆 T（tissue-resident memory T，T$_{RM}$）细胞则长期留在皮肤、肺、肠道等局部，很少参加常规血液再循环。CCR7、CD62L、CD69、CD103 等标志有助于描述这些状态，却没有一组标志能跨组织和物种无条件定义全部群体。[^t-cell-memory]

抗原清除后，记忆 T 细胞仍可利用稳态细胞因子和组织生态位维持。IL-7 支持多类 T 细胞存活，IL-15 对许多记忆 CD8 T 细胞的基础增殖尤为重要；不同组织与 CD4／CD8 亚群对这些信号的依赖并不完全相同。记忆维持因此不要求病原体或疫苗抗原永久留在体内，也不是所有细胞都以同一速度不断分裂。[^t-cell-homeostasis]

## 再次暴露的防御按时间和位置展开 { #recall-response }

再次遇到同一病原体时，预置抗体首先在体液和屏障表面发挥作用；局部 T$_{RM}$ 可迅速识别感染细胞并改变邻近组织；随后，循环记忆 B、T 细胞被招募、增殖并补充新的抗体和效应细胞。初次应答产生的多层资源叠加，常表现为较短潜伏期、更高或更成熟的抗体应答和更快的 T 细胞效应，但每一层的强度会随病原体、暴露途径和既有记忆组成而变。所谓“二次反应更强”是常见总体结果，不是所有抗体类别、细胞群和时间点都同步升高的定律。

免疫衰减也需要分层解释。血清抗体下降可能降低阻止感染建立的能力，记忆 B、T 细胞却仍可在数日内补充反应，从而继续降低重症或死亡风险；对于复制很快、潜伏期很短或首先从黏膜进入的病原体，这段召回时间可能来不及实现完全阻断。因此，防止任何感染、减少有症状疾病和防止重症是不同的保护终点。[^waning-protection]

这里的适应性记忆来自经克隆选择的 BCR 或 TCR 谱系。固有细胞经感染或接种后发生代谢和表观遗传重塑形成的[训练性免疫](innate_recognition_inflammation.md#innate-memory)，可以改变以后对多种刺激的反应，却不具有同一套受体克隆和抗原特异性召回机制。

## 疫苗组合抗原、递送与先天背景 { #vaccine-design }

有效接种要让相关抗原抵达能够启动免疫的组织，并以适当形式被 B 细胞直接识别或被抗原呈递细胞加工。与此同时，组织损伤、模式识别受体配体、递送颗粒和佐剂等信号改变树突状细胞成熟、共刺激、细胞因子和细胞迁移，进而影响 Tfh、生发中心、CD8 T 细胞及不同组织记忆的形成。疫苗设计实际是在协调抗原身份、剂量和持续时间与这些先天背景，而不是把纯抗原交给免疫系统后等待固定结果。[^vaccinology]

现代用语中的疫苗包括针对病毒、细菌及其毒素等靶标的制剂，不再把细菌来源制品单独限定为“菌苗”。同一种病原体也可采用多种平台；平台提供的是一组可调整的递送和免疫学属性，不能脱离具体抗原、制剂、接种人群和终点排列出恒定优劣。

## 佐剂改变抗原被看见的方式 { #adjuvants }

许多纯化蛋白或多糖本身缺少足够的感染背景，单独接种时难以形成强而持久的应答。佐剂可通过形成颗粒或改变抗原递送、招募和激活先天细胞、诱导局部细胞因子与危险信号等方式，提高抗原呈递、T 细胞帮助和抗体应答的幅度、广度或持续时间。不同佐剂偏置的细胞类型和反应质量并不相同，增加免疫原性的同时也会改变局部或全身反应原性。[^adjuvant-science]

铝盐常被概括为让抗原缓慢释放的“储库”，但注射部位的抗原滞留并不足以解释其作用。颗粒摄取、局部细胞损伤和炎症介质等多种过程都可能参与，而且对铝盐不同制剂、抗原和宿主的重要性并不一致。佐剂也不是独立于抗原的平台装饰：同一先天信号若与抗原错开时间或空间，未必能支持对应克隆获得帮助。

## 平台决定抗原在体内出现的路径 { #vaccine-platforms }

### 减毒与灭活平台 { #whole-organism-vaccines }

减毒活疫苗可在宿主体内有限复制，使抗原在接近自然感染的细胞和组织背景中持续一段时间，常能同时调动抗体与 T 细胞应答。复制能力也使其受宿主免疫状态、温度和接种途径限制，需要特别评估免疫缺陷者风险、遗传稳定性和储运条件。灭活疫苗不在宿主体内复制，提供较完整的病原体抗原集合，但抗原量和先天背景由制备工艺决定，通常更依赖佐剂和后续剂次维持应答。这里的差别来自能否复制及抗原呈递方式，不等于“活的一定持久、灭活的一定安全”的无条件结论。

### 类毒素、蛋白亚单位与病毒样颗粒 { #protein-vaccines }

类毒素通过去除细菌外毒素的致病活性而保留可诱导中和抗体的抗原结构，保护目标是阻断毒素作用，不是直接清除全部细菌。重组蛋白和其他亚单位疫苗只呈递选择出的抗原，可避免携带完整病原体，却需维持关键表位构象，并常借佐剂、颗粒化或多聚展示增强启动。病毒样颗粒以重复表面几何有效交联 BCR，但不含可完成复制的病毒基因组；其具体 T 细胞帮助仍取决于颗粒蛋白能否被加工呈递。

### 多糖与蛋白结合疫苗 { #conjugate-vaccines }

许多细菌荚膜多糖可重复交联 BCR，却难以让多糖特异性 B 细胞获得经典 Tfh 帮助，婴幼儿的这类 T 非依赖应答尤其有限。把多糖共价连接到载体蛋白后，B 细胞以 BCR 摄取整个结合物，再向识别载体肽的 CD4 T 细胞呈递肽—MHC II。关联识别由此把抗多糖克隆接入类别转换、生发中心和记忆形成，这也是结合疫苗与单纯混合多糖、蛋白在机制上的关键差别。[^conjugate-vaccines]

### 病毒载体与核酸平台 { #vector-nucleic-acid-vaccines }

病毒载体把编码抗原的核酸送入宿主细胞，利用细胞内表达产生抗原，既可进入 MHC I 路径，也可经抗原释放、摄取和 MHC II 呈递支持 CD4 T 细胞与抗体应答。载体是否复制、进入哪些细胞以及既有抗载体免疫，都会改变表达量、可重复接种性和反应质量。[^viral-vectors]

mRNA 疫苗通常以脂质纳米颗粒等系统将转录本送入胞质，由宿主核糖体短暂合成抗原；mRNA 不需要进入细胞核，也不形成可复制的感染。DNA 疫苗则必须让质粒进入细胞核后先转录再翻译，递送效率成为重要设计问题。核酸序列、修饰、纯度、递送颗粒、剂量和接种位置共同决定表达与先天感知，不能把某个平台概括成固定的“免疫力强”或“无副作用”。[^nucleic-acid-vaccines]

## 剂次、间隔和接种途径塑造记忆 { #schedule-route }

首剂接种启动稀少克隆并建立浆细胞、记忆 B 细胞和记忆 T 细胞库；后续剂次在已有抗体和记忆背景中再次提供抗原，可扩大某些克隆、推动更多亲和成熟并补充效应细胞。间隔过短时，应答可能仍处在扩增或收缩期，既有抗体也可能改变抗原可用性；较长间隔则允许记忆成熟，但会延长保护尚不充分的窗口。实际程序需依据平台、年龄、流行风险和临床证据确定，不能从“加强免疫”推导出剂次越多或间隔越长必然越好。[^vaccine-schedules]

同源加强重复同一平台，异源加强则更换平台或抗原呈递方式，两者都可能在特定组合中有效。肌内接种容易形成系统性应答，却未必在呼吸道或肠道建立强烈的分泌型 IgA 和 T$_{RM}$；黏膜接种有机会把应答部署到入侵门户，同时面临黏液清除、耐受环境、剂量控制和安全性等限制。接种途径因此是抗原送达与组织归巢程序的一部分，而不只是给药位置。

## 保护评价需要连接免疫读出与临床终点 { #protection-evaluation }

免疫原性描述接种后产生了哪些免疫反应，例如结合抗体、中和抗体、记忆 B 细胞或 T 细胞的频率与功能；临床试验中的效力（efficacy）比较受控条件下接种组与对照组的疾病结局，真实世界的效果（effectiveness）还受到接种执行、人群构成、病原体流行和医疗行为影响。三者互相关联，却不是可以互换的同义词。[^efficacy-effectiveness]

保护相关指标是与某一保护终点统计关联、并可能用于预测保护的免疫测量。某些毒素或病毒有较明确的中和抗体阈值，另一些疾病需要抗体、T 细胞和组织免疫共同作用；即使同一种疫苗，防感染、防有症状疾病和防重症也可能对应不同指标。一个检测值能否作为替代终点，必须在确定人群、检测方法、暴露背景和临床终点中验证，抗体结合滴度高本身不等于已经证明保护。[^correlates-protection]

抗原变异还会使原始株上的滴度高估对流行株的覆盖，免疫功能、年龄和基础疾病则会改变同一读出对应的风险。评价持久性时应同时看测量随时间的轨迹和临床事件，而不是把某日低于阈值直接解释为记忆消失。

## 个体保护与群体间接效应属于不同尺度 { #population-protection }

接种者因自身免疫反应得到的是直接保护。若疫苗还减少感染建立、病原体载量、传染期或接触后的传播概率，传播链被打断后，未接种者也可能获得间接保护。间接效应的大小取决于疫苗对传播各环节的影响、保护持续时间、接种覆盖、年龄和空间分布、接触网络以及病原体传播能力；一款主要降低重症而较少阻断感染的疫苗，仍可带来重要个体获益，却未必产生同等强度的群体保护。[^population-immunity]

“群体免疫阈值”是特定模型和假设下的群体尺度量，不是每种疫苗自带的固定百分数。病原体变异、免疫衰减、异质接触和输入病例都能改变结果；公共卫生决策还需同时考虑疾病负担、接种安全性、可及性和公平性。

## 主动免疫与被动抗体解决不同时间问题 { #active-passive-immunity }

感染或接种让受者自己的 B、T 细胞发生克隆扩增并建立记忆，属于主动免疫。它需要经过启动和分化才逐渐形成保护，但可留下持续分泌抗体的浆细胞和可召回的记忆细胞。被动免疫则直接给予已有抗体，例如人免疫球蛋白、针对毒素的抗毒素或特异性单克隆抗体；抗体到达有效浓度后可立即作用，随后按其分布和半衰期衰减，不会凭自身存在替受者建立相应 B、T 细胞记忆。[^passive-immunization]

多克隆免疫球蛋白覆盖多个表位，单克隆抗体的成分、亲和力和 Fc 性质更可控，却可能受靶抗原变异影响。异种动物血清还可能引起速发反应、血清病等针对外来蛋白的免疫反应，现代制剂会依据情境优先采用人源或工程化抗体并严格控制质量。某些暴露后处置会在不同部位同时给予抗体和疫苗：前者填补即时保护窗口，后者建立后续主动记忆；是否联用及其时间、剂量必须遵循针对具体病原体的临床方案。

## 参考资料与延伸阅读 { #references }

- Murphy K, Weaver C, Berg LJ. *Janeway's Immunobiology*. 10th ed. W. W. Norton, 2022.
- Pollard AJ, Bijker EM. A guide to vaccinology: from basic principles to new developments. *Nature Reviews Immunology*. 2021;21:83–100.
- Akkaya M, Kwak K, Pierce SK. B cell memory: building two walls of protection against pathogens. *Nature Reviews Immunology*. 2020;20:229–238.
- Mueller SN, Mackay LK. Tissue-resident memory T cells: local specialists in immune defence. *Nature Reviews Immunology*. 2016;16:79–89.
- Pulendran B, Arunachalam PS, O'Hagan DT. Emerging concepts in the science of vaccine adjuvants. *Nature Reviews Drug Discovery*. 2021;20:454–475.
- Pardi N, Hogan MJ, Porter FW, Weissman D. mRNA vaccines — a new era in vaccinology. *Nature Reviews Drug Discovery*. 2018;17:261–279.
- World Health Organization. *Correlates of vaccine-induced protection: methods and implications*. 2013.

[^plasma-cell-memory]: 长寿命浆细胞的多种发生来源、生存生态位和寿命异质性，参见 Fooksman 等 [New insights into the ontogeny, diversity, maturation and survival of long-lived plasma cells](https://www.nature.com/articles/s41577-024-00991-0)；浆细胞与记忆 B 细胞的发育接口见[B 细胞与抗体应答](b_cell_antibody.md#plasma-cell-differentiation)。
[^b-cell-memory]: 长寿命浆细胞提供预置抗体、记忆 B 细胞负责可更新召回的“两道防线”框架，参见 Akkaya、Kwak 与 Pierce [B cell memory: building two walls of protection against pathogens](https://www.nature.com/articles/s41577-019-0244-2)。
[^t-cell-memory]: 中央记忆、效应记忆与组织驻留记忆的迁移和功能异质性，参见 Weng、Araki 与 Subedi [The molecular basis of the memory T cell response](https://www.nature.com/articles/nri3173)及 Mueller 与 Mackay [Tissue-resident memory T cells](https://www.nature.com/articles/nri.2015.3)。
[^t-cell-homeostasis]: IL-7、IL-15 对记忆 T 细胞存活与稳态增殖的作用及亚群差异，参见 Schluns 与 Lefrançois [Cytokine control of memory T-cell development and survival](https://www.nature.com/articles/nri1052)；骨髓中静息维持与增殖模型的边界见 Di Rosa [Maintenance of memory T cells in the bone marrow](https://www.nature.com/articles/nri.2016.31)。
[^waning-protection]: 疫苗诱导免疫的组成、时间变化及感染与疾病终点边界，参见世界卫生组织 [The Immunological Basis for Immunization Series](https://www.who.int/teams/immunization-vaccines-and-biologicals/policies/the-immunological-basis-for-immunization-series)和 Pollard、Bijker 的疫苗学综述。
[^vaccinology]: 抗原设计、先天激活、递送平台和宿主因素共同决定疫苗应答，参见 Pollard 与 Bijker [A guide to vaccinology](https://www.nature.com/articles/s41577-020-00479-7)。
[^adjuvant-science]: 佐剂对抗原递送、先天感知、应答广度与持续时间的多重作用，以及铝盐“储库”模型的局限，参见 Pulendran、Arunachalam 与 O'Hagan [Emerging concepts in the science of vaccine adjuvants](https://www.nature.com/articles/s41573-021-00163-y)。
[^conjugate-vaccines]: 多糖—蛋白结合物通过载体肽招募 CD4 T 细胞帮助并诱导 IgG 与记忆 B 细胞，参见 NCBI Bookshelf [Neisseria meningitidis Vaccines](https://www.ncbi.nlm.nih.gov/books/NBK6030/)；关联识别的一般机制见[B 细胞与抗体应答](b_cell_antibody.md#t-dependent-b-cell-activation)。
[^viral-vectors]: 病毒载体的细胞内抗原表达、复制能力、组织嗜性与抗载体免疫等设计变量，参见 Ura 等 [Viral vectors for vaccine development](https://www.nature.com/articles/s41541-022-00503-y)。
[^nucleic-acid-vaccines]: mRNA 的胞质表达、递送和先天感知，参见 Pardi 等 [mRNA vaccines — a new era in vaccinology](https://www.nature.com/articles/nrd.2017.243)及 Pardi 与 Krammer [mRNA vaccines for infectious diseases](https://www.nature.com/articles/s41573-024-01042-y)。
[^vaccine-schedules]: 初免、加强、间隔、抗原可用性与记忆成熟的设计原则，参见 Pollard 与 Bijker [A guide to vaccinology](https://www.nature.com/articles/s41577-020-00479-7)；具体接种程序应以相应国家或地区的现行指南为准。
[^efficacy-effectiveness]: 临床试验效力、真实世界效果与免疫保护的区分，参见世界卫生组织 [Vaccine efficacy, effectiveness and protection](https://www.who.int/news-room/feature-stories/detail/vaccine-efficacy-effectiveness-and-protection)。
[^correlates-protection]: 保护相关指标、替代终点及其验证边界，参见世界卫生组织 [Correlates of vaccine-induced protection: methods and implications](https://www.who.int/publications/i/item/WHO-IVB-13.01)。
[^population-immunity]: 群体免疫是传播减少带来的间接保护，参见世界卫生组织 [Coronavirus disease: Herd immunity, lockdowns and COVID-19](https://www.who.int/news-room/questions-and-answers/item/herd-immunity-lockdowns-and-COVID-19)；该页面已停止更新，本页仅采用其中不依赖特定变异株的概念定义。
[^passive-immunization]: 主动免疫的延迟记忆与被动抗体的即时、有限保护，以及异种抗血清风险，参见 NCBI Bookshelf [Vaccines: Past, Present, and Future](https://www.ncbi.nlm.nih.gov/books/NBK216821/)；抗体工程和治疗应用留待[免疫干预](immune_interventions.md)。
