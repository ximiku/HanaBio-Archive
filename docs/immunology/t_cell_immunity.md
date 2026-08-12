# T 细胞激活与效应

T 细胞在胸腺中取得可用受体并通过选择后，仍只是尚未遇到相应抗原的初始细胞。它们要在次级淋巴器官中遇到携带同源肽—主要组织相容性复合体（major histocompatibility complex，MHC）的抗原呈递细胞（antigen-presenting cell，APC），综合共刺激和局部细胞因子，才会进入增殖、分化和迁移程序。由一个稀少克隆产生的子代随后分赴不同位置：一部分 CD4 T 细胞组织其他免疫细胞的工作，一部分 CD8 T 细胞直接清除呈递相应抗原的靶细胞，调节性 T 细胞则同步限制应答的强度和范围。

细胞免疫与抗体应答通过 T—B 协作、细胞因子和抗原呈递紧密相连。T 细胞既能直接杀伤，也能借细胞接触和细胞因子改变巨噬细胞、B 细胞、粒细胞、上皮和基质细胞；同一克隆的结局还会随抗原持续时间、组织位置和代谢环境而改变。初始启动、效应分化、迁移和收缩构成连续过程；长期记忆、耐受失效和临床干预见相应专题。

## 初始 T 细胞的启动 { #naive-t-cell-priming }

初始 T 细胞沿血液、淋巴结和淋巴循环反复巡查，其主要任务是在树突状细胞表面寻找同源肽—MHC。T 细胞受体（T-cell receptor，TCR）—CD3 复合物识别配体，CD4 或 CD8 共受体同时结合 MHC 并把 Lck 带到受体附近；CD28 与 APC 的 CD80／CD86 结合，提供维持存活、代谢和白细胞介素-2（interleukin-2，IL-2）产生的重要共刺激。呈递细胞释放或诱导的细胞因子又偏置后续分化。“抗原、共刺激、细胞因子三类信号”概括了同一次细胞接触中相互影响的三个层次。[^priming-signals]

树突状细胞在外周组织取得抗原并感知感染或损伤后，上调肽—MHC、共刺激分子和 CCR7，迁入引流淋巴结。初始 T 细胞在这里先经历短暂接触，随后与合适的树突状细胞形成较稳定的相互作用并开始分裂。同一呈递细胞同时提供同源抗原和共刺激，使扩增集中于真正读到抗原的克隆；单独、持续的 TCR 刺激却可能导致无反应或删除。抗原怎样进入 MHC I／II、交叉呈递怎样启动 CD8 T 细胞，见[抗原加工、呈递与 MHC](immuno_apc_mhc.md#presentation-costimulation)。

启动阈值取决于肽—MHC 数量与寿命、TCR 亲和力、共受体和黏附、抑制性受体以及细胞此前的状态。TCR 需要经过一系列可逆磷酸化和分子组装才能形成完整输出；持续时间较短的非同源接触往往在级联完成前中止，这种动力学校对有助于把细小的配体寿命差异转化为较大的功能差异。阈值具有连续可调性，细胞是否增殖及其效应分化需要结合配体动力学、共同信号和细胞状态判断。[^tcr-discrimination]

## TCR 信号与克隆扩增 { #tcr-signaling-expansion }

TCR 结合肽—MHC 后，Lck 磷酸化 CD3 和 ζ 链上的 ITAM，招募并激活 ZAP-70；LAT、SLP-76 等支架随后在膜附近组装信号复合物。由此分出的 Ca$^{2+}$—calcineurin—NFAT、Ras—MAPK—AP-1 和 PKC$\theta$—NF-$\kappa$B 等支路在细胞核内协同调节基因。黏附分子 LFA-1 与 ICAM 的亲和力也被细胞内信号提高，使细胞接触得以维持。免疫突触是不断重排受体、黏附和分泌装置的动态界面，其显微结构会随接触阶段改变。[^tcr-network]

被充分激活的 T 细胞开始表达 IL-2 受体 α 链 CD25，与原有的 β、共同 γ 链组成高亲和力受体。自分泌和旁分泌 IL-2 经 JAK1／JAK3—STAT5 促进存活与连续分裂，PI3K—AKT—mTOR 等网络则把营养摄取和生物合成接到克隆扩增。细胞因子受体的一般结构和 [JAK—STAT 信号](../cell/cell_signaling.md#jak-stat)在细胞栏目另有展开。数轮分裂产生大量共享同一 TCR 的子代，但细胞获得的抗原、共刺激、细胞因子和代谢资源并不完全相同，扩增群体从一开始便可形成不同效应潜能。

CD8 T 细胞的高质量初始启动尤其依赖树突状细胞状态。某些感染能直接促使交叉呈递的树突状细胞成熟；另一些情境需要 CD4 T 细胞以 CD40L 刺激树突状细胞，或提供 IL-2 等帮助，使 CD8 克隆获得充分扩增和持久功能。这种帮助作用发生在共同抗原和呈递细胞构成的局部网络中，因而具有抗原与空间关联。

## CD4 T 细胞的效应程序 { #cd4-effector-programs }

CD4 T 细胞取得效应能力后，主要通过 CD40L 等膜分子和分泌型细胞因子改变其他细胞。常用的 Th1、Th2、Th17 与滤泡辅助 T 细胞（T follicular helper cell，Tfh cell）名称，分别概括了偏向不同转录因子、迁移受体和效应分子的状态。它们是理解群体功能的坐标；炎症环境、抗原持续和组织信号可产生混合表型，也可使已经分化的细胞改写部分程序。细胞状态的判定需要结合转录因子、分泌谱、迁移位置和功能，单次细胞因子测量只提供其中一层证据。[^cd4-plasticity]

### 1 型辅助反应 { #type-1-helper-response }

IL-12、干扰素-$\gamma$（IFN-$\gamma$）等信号通过 STAT4、STAT1 和 T-bet 偏置 1 型程序。Th1 细胞产生 IFN-$\gamma$，并通过 CD40L 与巨噬细胞接触，增强吞噬体成熟、活性氧／氮中间体生成和抗原呈递，使已经吞入病原体的巨噬细胞更有能力清除胞内微生物。1 型帮助也能支持适合调理和补体作用的抗体应答，并促进 CD8 T 细胞反应。反应过强时，同一套巨噬细胞激活和炎症回路可造成迟发型组织损伤；“迟发型超敏 T 细胞”描述这一效应情境，对应的细胞可处于多种相关功能状态。

### 2 型辅助反应 { #type-2-helper-response }

IL-4—STAT6 与 GATA3 支持 2 型程序，Th2 细胞产生 IL-4、IL-5、IL-13 等因子，连接嗜酸性粒细胞、肥大细胞、杯状细胞、平滑肌和替代激活的巨噬细胞。黏液分泌、组织收缩、蠕虫排出和损伤修复由多个细胞共同完成；在不适当抗原或持续暴露下，这一网络也可驱动 IgE 应答、嗜酸性炎症和纤维化。具体的类别转换和过敏机制分别见[B 细胞与抗体应答](b_cell_antibody.md)和[超敏反应与过敏](hypersensitivity_allergy.md)。

### 3 型辅助反应 { #type-3-helper-response }

IL-1、IL-6、IL-23 和组织中的 TGF-$\beta$ 环境共同影响 STAT3、ROR$\gamma$t 主导的 Th17 程序。IL-17 促使上皮和基质细胞产生趋化因子及粒细胞生成信号，IL-22 则改变上皮抗菌和修复状态，因此 3 型帮助尤其适合对付屏障处的胞外细菌和真菌。它与 ILC3、$\gamma\delta$ T 细胞等先天样淋巴细胞的输出部分重叠；持续失控时也可维持中性粒细胞性炎症和自身免疫病变。

### Tfh 细胞与滤泡内辅助 { #tfh-help }

获得 ICOS 信号并上调 BCL6、CXCR5 的活化 CD4 T 细胞可向滤泡和生发中心迁移，形成 Tfh 程序。Tfh 细胞用 TCR 检查 B 细胞呈递的肽—MHC II，再以 CD40L、IL-21 等信号帮助识别同一复合抗原的 B 细胞存活、增殖和选择。这种关联识别把 T 细胞对载体肽的判断与 B 细胞对天然抗原表面的识别接在一起；生发中心、亲和成熟和类别转换见[B 细胞与抗体应答](b_cell_antibody.md)。[^tfh-help]

Th9、Th22、产生 IL-10 的 Tr1 细胞等名称描述特定稳定程度和功能背景下的群体，与 Th1、Th2、Th17、Tfh 的分类粒度并不完全等价。实际研究通常结合转录因子、染色质、分泌谱、迁移位置和功能实验说明群体状态。

## CD8 T 细胞的定向杀伤 { #cd8-cytotoxicity }

效应 CD8 T 细胞离开淋巴器官后，可用 TCR 检查多数有核细胞表面的肽—MHC I。识别同源配体后，LFA-1 等黏附分子稳定接触，中心体和分泌性溶酶体朝免疫突触极化，细胞毒颗粒在狭窄接触面释放。穿孔素帮助颗粒酶跨越靶细胞膜或从内吞囊泡进入胞质；颗粒酶 B 可激活 caspase 并切割 BID 等底物，其他颗粒酶还通过不同底物推动受控死亡。靶细胞因而主要以凋亡方式被清除，减少胞内病原体或细胞内容物突然外泄。[^perforin-granzyme]

Fas 配体（Fas ligand，FasL）与 Fas 死亡受体结合，可启动另一条杀伤路线；IFN-$\gamma$、肿瘤坏死因子（tumor necrosis factor，TNF）等分泌物还可抑制病毒复制或改变周围细胞。颗粒释放具有方向性，杀伤细胞在短暂接触后能够脱离并连续寻找新靶标。这种空间约束降低邻近健康细胞受损，炎症细胞因子、交叉反应或大量靶细胞死亡仍可能造成旁观者损伤。效应 CD8 T 细胞以靶细胞展示的相应肽—MHC I 为识别依据。

## 调节性 T 细胞的抑制机制 { #regulatory-t-cells }

以 FOXP3、CD25 表达和抑制功能为特征的调节性 T 细胞（Treg）包括胸腺产生的群体，也包括在外周适宜抗原与细胞因子环境中诱导的群体。它们依赖环境中的 IL-2 维持，却通常不把大量 IL-2 作为主要输出。Treg 的 TCR 识别使调节作用集中到正在呈递相关抗原的局部环境，随后的效应可以同时影响呈递细胞和邻近淋巴细胞。[^treg-identity]

Treg 通过多条互补途径发挥抑制作用。其 CTLA-4 可结合 CD80／CD86 并降低抗原呈递细胞提供共刺激的能力，高表达 CD25 会改变局部 IL-2 的可用性，IL-10、TGF-$\beta$ 等因子可限制特定组织中的炎症；某些 Treg 还取得与相应效应群体相似的迁移或转录模块，从而进入同一位置实施调节。部分组织 Treg 同时参与修复和代谢稳态。FOXP3 是核心身份因子，稳定抑制功能的判定还需结合表达持续性、细胞状态和功能证据。现行分类以 FOXP3$^+$ Treg 为核心框架。[^treg-mechanisms]

## 效应 T 细胞的组织归巢 { #effector-trafficking }

激活伴随迁移受体的重新配置。许多效应前体降低初始细胞进入淋巴结所需的 CCR7 和 CD62L，重新表达鞘氨醇-1-磷酸（sphingosine-1-phosphate，S1P）受体 S1P$_1$ 后沿 S1P 梯度离开淋巴器官；进入血液后，它们用选择素配体、趋化因子受体和整联蛋白识别炎症血管。局部树突状细胞和组织代谢物还能留下归巢偏向，例如肠道相关环境诱导 $\alpha4\beta7$ 与 CCR9，使细胞更容易回到表达 MAdCAM-1 和相应趋化因子的肠黏膜。[^t-cell-migration]

迁移地址决定效应分子在何处释放，也改变细胞接触到的抗原、氧、营养和存活信号。进入感染组织的细胞因此会继续分化；部分停留在组织中的细胞后来可建立驻留记忆，其长期维持和再次应答见[免疫记忆与疫苗](memory_vaccines.md)。

## 应答收缩与慢性刺激 { #contraction-chronic-stimulation }

急性感染得到控制后，肽—MHC、共刺激和炎症因子减少，扩增期形成的大多数效应 T 细胞失去存活信号并发生凋亡。收缩既撤去潜在组织损伤源，也使淋巴细胞数量回到可维持范围；少数细胞渡过这一阶段，形成具有不同再循环、组织驻留和再增殖能力的记忆群体。各细胞进入收缩的时间并不同步，其速度与幅度受抗原负荷、炎症时程、IL-7／IL-15 等稳态信号以及效应细胞分化程度影响。[^contraction-memory]

病毒持续感染或肿瘤中的长期抗原刺激会形成另一种适应性状态。细胞逐步降低部分效应功能并表达程序性死亡受体-1（programmed cell death protein 1，PD-1）等抑制性受体，TOX 等转录和表观遗传程序参与维持这一变化；群体内部仍可包含具有 TCF1 表达和增殖潜能的祖细胞样耗竭细胞，以及更终末的耗竭细胞。耗竭一方面限制慢性刺激下的免疫病理，另一方面削弱病原体或肿瘤控制，是具有内部异质性的适应性状态。抑制性受体也可在近期活化的功能性 T 细胞上出现，无反应、衰老和耗竭的区分需要结合多种分子标志、功能和刺激史。[^t-cell-exhaustion]

## 参考资料与延伸阅读 { #references }

- Murphy K, Weaver C, Berg LJ. *Janeway's Immunobiology*. 10th ed. W. W. Norton, 2022.
- Brownlie RJ, Zamoyska R. T cell receptor signalling networks: branched, diversified and bounded. *Nature Reviews Immunology*. 2013;13:257–269.
- Zhu J, Paul WE. CD4 T cells: fates, functions, and faults. *Blood*. 2008;112:1557–1569.
- Crotty S. T follicular helper cell biology: a decade of discovery and diseases. *Immunity*. 2019;50:1132–1148.
- Vignali DAA, Collison LW, Workman CJ. How regulatory T cells work. *Nature Reviews Immunology*. 2008;8:523–532.
- Voskoboinik I, Whisstock JC, Trapani JA. Perforin and granzymes: function, dysfunction and human pathology. *Nature Reviews Immunology*. 2015;15:388–400.
- Masopust D, Schenkel JM. The integration of T cell migration, differentiation and function. *Nature Reviews Immunology*. 2013;13:309–320.
- Harty JT, Badovinac VP. Shaping and reshaping CD8$^+$ T-cell memory. *Nature Reviews Immunology*. 2008;8:107–119.
- Blank CU, Haining WN, Held W, et al. Defining T cell exhaustion. *Nature Reviews Immunology*. 2019;19:665–674.

[^priming-signals]: 初始 T 细胞由同一抗原呈递细胞整合肽—MHC、CD28 共刺激和细胞因子的教材框架，参见 NCBI Bookshelf [The production of armed effector T cells](https://www.ncbi.nlm.nih.gov/books/NBK27118/)。
[^tcr-discrimination]: TCR 配体动力学校对、阈值与表型模型，参见 Lever 等 [Phenotypic models of T cell activation](https://www.nature.com/articles/nri3728)。
[^tcr-network]: TCR—CD3、Lck、ZAP-70、LAT 及多支路时空信号，参见 Brownlie 与 Zamoyska [T cell receptor signalling networks](https://www.nature.com/articles/nri3403)；免疫突触的动态组织参见 Huppa 与 Davis [T-cell-antigen recognition and the immunological synapse](https://www.nature.com/articles/nri1245)。
[^cd4-plasticity]: CD4 效应群体的分化、功能与可塑性，参见 Zhu 与 Paul [CD4 T cells: fates, functions, and faults](https://pubmed.ncbi.nlm.nih.gov/18725574/)及 Bluestone 等 [The functional plasticity of T cell subsets](https://www.nature.com/articles/nri2654)。
[^tfh-help]: Tfh 的 BCL6／CXCR5 程序、滤泡定位和对 B 细胞的关联帮助，参见 Crotty [T follicular helper cells in space-time](https://www.nature.com/articles/nri.2016.94)。
[^perforin-granzyme]: 细胞毒颗粒极化、穿孔素帮助颗粒酶进入胞质、颗粒酶触发死亡及连续杀伤，参见 Voskoboinik、Whisstock 与 Trapani [Perforin and granzymes](https://www.nature.com/articles/nri3839)。
[^treg-identity]: 胸腺与外周 Treg、FOXP3 身份程序及组织适应，参见 Campbell 与 Koch [Phenotypical and functional specialization of FOXP3$^+$ regulatory T cells](https://www.nature.com/articles/nri2916)及 Trujillo-Ochoa 等 [The role of transcription factors in shaping regulatory T cell identity](https://www.nature.com/articles/s41577-023-00893-7)。
[^treg-mechanisms]: CTLA-4、IL-2 可用性、抑制性细胞因子及其他并行调节机制，参见 Vignali、Collison 与 Workman [How regulatory T cells work](https://www.nature.com/articles/nri2343)。
[^t-cell-migration]: 初始、效应和组织定位 T 细胞的 CCR7／CD62L、S1P、整联蛋白与组织归巢程序，参见 Masopust 与 Schenkel [The integration of T cell migration, differentiation and function](https://www.nature.com/articles/nri3442)。
[^contraction-memory]: 急性应答的扩增、收缩与 CD8 T 细胞记忆前体异质性，参见 Harty 与 Badovinac [Shaping and reshaping CD8$^+$ T-cell memory](https://www.nature.com/articles/nri2251)。
[^t-cell-exhaustion]: 耗竭的操作性定义、与其他低反应状态的边界及群体异质性，参见 Blank 等 [Defining T cell exhaustion](https://www.nature.com/articles/s41577-019-0221-9)与 Wherry、Kurachi [Molecular and cellular insights into T cell exhaustion](https://www.nature.com/articles/nri3862)；TOX 驱动耗竭程序的原始证据见 Khan 等 [TOX transcriptionally and epigenetically programs CD8$^+$ T cell exhaustion](https://www.nature.com/articles/s41586-019-1325-x)。
