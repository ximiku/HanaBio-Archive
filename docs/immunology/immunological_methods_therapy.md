# 免疫检测与免疫干预

抗体、抗原受体和细胞因子既是免疫系统工作的分子，也是观察或改变免疫反应的工具。检测把一次结合、一次酶反应或一群细胞的荧光转换为关于样本的推断；干预则用抗体、蛋白、小分子或活细胞改变某个免疫节点。两者都需要从“工具能做什么”继续追问到“读出支持什么结论”：检测到结合不等于证明疾病因果，改变一个药效标志也不等于患者已经获得临床获益。

## 从待测对象到可解释读出 { #measurement-chain }

免疫检测首先要确定待测对象。它可以是血清中的抗原或抗体、细胞表面的受体、组织中的蛋白分布，也可以是补体活性、细胞因子释放或靶细胞杀伤等功能。随后选择能够识别它的试剂，把结合事件转换成吸光度、荧光、发光、沉淀线、细胞比例或生物学效应，最后用阴性、阳性、空白和校准材料判断信号是否来自预期对象。这四层中的任一层改变，所得结果的含义都会改变。

采样属于这条测量链的一部分。血清与抗凝血浆所含成分不同，冻融、溶血、储存时间和药物干扰会改变读数；组织固定可保存空间结构，也可能遮蔽抗体表位；细胞分离、低温保存和体外刺激会改变表面分子与功能状态。一个分析方法即使在理想标准品上稳定，也要在预定样本基质、浓度范围和采样条件中验证，才能回答实际研究或临床问题。[^assay-validation]

## 抗体试剂的识别能力与验证 { #antibody-validation }

多克隆抗体来自多个 B 细胞克隆，可同时结合一个抗原上的多个表位，常能提高总信号，却会随动物、采血批次和亲和纯化而改变组成。单克隆抗体来自一个选定克隆，识别结构较一致，杂交瘤使这种抗体得以长期生产；重组表达还可固定重、轻链序列并有目的地改造同种型或 Fc。单克隆只说明克隆来源单一，并不保证它在复杂样本中只结合一个分子。

抗体与单个表位结合的强弱通常用亲和力描述，多个结合位点共同作用形成的总体稳定性则属于亲合力。高亲和或多价结合可以提高低丰度靶标的捕获，却不能消除相似表位、Fc 受体、带电表面或基质成分造成的交叉反应。抗体性能还具有应用依赖性：能识别变性蛋白条带的抗体，未必能结合固定组织中的天然构象；适合流式细胞术的抗体，也未必适合免疫沉淀。

可靠验证要让抗体信号与靶标变化建立独立联系。靶基因敲除或敲低、已知阳性与阴性细胞、独立抗体、重组表达、质谱或 RNA／蛋白的正交测量可以从不同方向检验特异性；滴定和批次比较则确定背景与可用范围。无一抗或仅二抗对照可发现检测系统的背景，匹配同种型对照主要评估 Fc 相关或非特异染色，二者都不能单独证明一抗识别了正确靶标。[^antibody-validation-pillars]

## 凝集、沉淀与功能性检测 { #classical-functional-assays }

颗粒表面的多价抗原被抗体交联时形成凝集，可溶性多价抗原与抗体形成足够大的网络时出现沉淀。两类可见反应都要求抗原、抗体价数与浓度处在适当范围：抗体过量时各颗粒或抗原被分别占据，抗原过量时复合物又可能过小，均可产生看似阴性的前带或后带现象。序列稀释能够暴露这种比例依赖，并用仍呈阳性的最高稀释度给出滴度；滴度是特定方法下的相对终点，不能脱离标准曲线直接当成绝对物质浓度。[^agglutination-precipitation]

免疫扩散和免疫电泳把沉淀网络放入扩散距离或电泳迁移的空间背景，可比较抗原关系或分离后的组分；这些方法保留了经典的读图逻辑，但灵敏度、分辨率和定量能力受扩散、抗体组成与凝胶条件限制。补体结合试验的读出方向更需留意：待测抗原—抗体复合物若先消耗补体，指示红细胞反而不溶血，因此“不溶血”才是阳性。现代检测很少需要复述其完整操作，却仍可借它理解间接读出必须经过对照系统解释。

中和试验询问抗体是否抑制病毒入胞、毒素作用或酶活性，读取的是功能而不只是结合。一个抗体可强烈结合抗原却不遮挡关键功能面，也可能在不同细胞、病毒株或补体条件下呈现不同效力。调理吞噬、抗体依赖细胞毒、淋巴细胞增殖、细胞因子释放和靶细胞杀伤同样属于功能检测；结果会同时受到效应细胞状态、效靶比、刺激强度和培养时间影响。

## 固相与标记免疫分析 { #labeled-immunoassays }

标记把肉眼不可见的结合转换为可测信号。直接免疫标记把荧光团、酶或其他报告分子连接到识别抗体；间接格式先让未标记一抗结合靶标，再用标记二抗放大信号。放射性、荧光、化学发光和酶促显色的共同任务是产生可分辨读出，差别在信号生成、动态范围、空间分辨率和安全条件，而不是“标记越灵敏就越特异”。

ELISA 将反应物固定在微孔板等固相上，并用洗涤分开结合与游离试剂。夹心格式用捕获抗体和检测抗体识别同一抗原的不同表位，适合在复杂基质中测抗原；间接格式常以固相抗原捕获样本抗体，再由抗免疫球蛋白二抗显色；竞争格式让样本分析物与标记或固相配体竞争，信号可随分析物增加而降低。每种格式都要匹配空白、阴性、阳性和校准曲线，确定检出限、定量范围、精密度、回收率及稀释平行性。高浓度抗原在某些夹心检测中可分别占据两种抗体而不形成完整夹心，产生高剂量钩状效应；基质干扰则可能让标准品曲线不能直接代表真实样本。[^ligand-binding-assays]

## 空间定位与免疫印迹 { #spatial-western }

免疫荧光和免疫组织化学在细胞或组织结构中定位抗原。共定位、细胞内区室和病灶边界都依赖这种空间背景，但观察到重叠像素不能独自证明两种蛋白直接相互作用。固定、抗原修复、组织自发荧光、二抗背景、图像阈值和细胞分割都会改变阳性范围；已知表达组织、缺失靶标材料和无一抗对照分别回答不同的质量问题。

Western blot 先按电泳迁移分开蛋白，再转印到膜上用抗体检测，因此把免疫识别与表观分子质量结合起来。预期位置的单条带增强了身份判断，但剪接异构体、蛋白水解、糖基化和其他修饰都可改变迁移，非特异结合也可能恰好落在相近位置。定量还要求目标信号与归一化参照都处于线性范围，避免饱和，并控制上样、转印和曝光差异；单张经裁切的条带图不能展示这些证据。[^western-quantification]

## 流式细胞术的群体与功能读出 { #flow-cytometry }

流式细胞仪让悬液中的细胞或颗粒逐个通过光束，记录散射光和多个荧光通道。散射提供大小与内部复杂度的近似信息，荧光抗体、染料或报告系统读取表面分子、细胞内蛋白、活力、增殖和信号状态。荧光激活细胞分选在此基础上把满足门控条件的事件导向不同收集管；能否继续培养取决于染料、压力、无菌条件和细胞本身，而不是“流式分选”这一名称自动保证活性。

从原始事件到“某细胞群占比”要经过仪器质控、单细胞与活细胞筛选、光谱补偿或解混以及门控。单染对照用于估计各荧光团的溢出，缺一荧光对照（FMO）帮助判断多色面板中连续或稀有阳性群的边界；生物学阳性、阴性与刺激对照检验群体是否按预期变化。CD 分子组合定义的是所测时刻的表型，细胞因子、磷酸化蛋白、增殖或杀伤读出才能进一步支持功能结论。高维聚类可以减少逐门观察的局限，仍不能替代样本质量、批次控制与可重复的注释规则。[^flow-guidelines]

## 分析性能与临床解释 { #clinical-interpretation }

分析灵敏度描述方法能可靠检出的最低量或变化，临床诊断灵敏度则描述具有目标状态的人中有多少检测阳性；分析特异性关注测量中其他分子的干扰，诊断特异度关注不具有目标状态的人中有多少检测阴性。后两者必须相对于预先定义且独立于待评方法的参考标准估计。若新方法只与另一个并不等同真实状态的检测比较，所得是阳性／阴性符合率，不能无条件写成诊断灵敏度和特异度。[^diagnostic-performance]

阳性预测值还取决于受检人群中的目标状态频率。同样的灵敏度和特异度用于低患病率筛查时，阳性结果中假阳性的比例可明显增加；用于高风险人群时，结果组成又会改变。感染或免疫后的采样时间、既往疫苗、被动输入抗体、免疫抑制和宿主免疫缺陷都会改变抗原、抗体或细胞读出。因此，检测阳性只能在适用人群、阈值、参考标准和临床情境内解释。

## 抗体药物的靶向与工程 { #therapeutic-antibodies }

治疗性抗体可阻断配体—受体结合、激动特定受体、耗竭表达靶标的细胞，或借 Fc 受体与补体募集效应。Fc 同种型、糖基化和工程改造会改变半衰期、Fc 受体结合与效应强度，因此两种识别同一抗原的抗体不一定产生相同药理作用。双特异性分子可把两个靶标或靶细胞与效应细胞拉近；抗体—药物偶联物则把细胞毒载荷送入表达靶标的细胞。靶标在正常组织的表达、可溶性抗原、内吞速率和抗药抗体都会影响疗效与毒性。[^antibody-therapeutics]

多克隆抗血清和人免疫球蛋白提供即时被动保护，成分、半衰期和病原覆盖面却与单克隆药物不同。异种抗血清可能引起即时超敏反应或免疫复合物病，人源或人源化抗体也可能形成抗药抗体。所谓“药物导弹”因而不是只要有特异抗体就能精准无损地递送：靶标选择、连接子稳定性、组织分布、Fc 效应和载荷释放共同决定治疗窗。

## 细胞因子、受体与细胞内信号 { #cytokine-small-molecule-therapy }

重组细胞因子和造血生长因子可补充短缺信号或扩增特定细胞群；中和抗体、可溶性受体和受体拮抗剂则可截断致病细胞因子。由于同一细胞因子常作用于多种细胞，受体表达又随组织和激活状态改变，全身给药可能同时产生期望效应和广泛炎症、血管或代谢毒性。延长半衰期、局部递送或将细胞因子连接到靶向结构，目的都是重新安排暴露的时间与空间，而非改变其基本受体生物学。[^cytokine-therapy]

小分子可以进入细胞，抑制激酶、代谢酶或转录调控节点。钙调神经磷酸酶抑制剂限制 T 细胞转录程序，mTOR 和抗代谢药改变增殖与代谢，JAK 抑制剂同时影响使用相应 JAK 组合的多种细胞因子受体。口服、半衰期较短和剂量可调是常见药理特点，细胞类型选择性却往往弱于表面靶向抗体。一个通路节点参与多种保护与致病反应，正是小分子既能广泛抑炎又可能增加感染、血细胞或代谢风险的原因。

## 细胞治疗、免疫抑制与耐受 { #cell-tolerance-therapy }

过继细胞治疗把具有预期功能的细胞扩增、选择或工程化后输入受者。CAR 让 T 细胞以抗体样结合结构识别表面抗原，不依赖特定肽—HLA；转基因 TCR 则识别特定 HLA 呈递的肽，可以触及细胞内蛋白来源抗原，却受 HLA 匹配和交叉反应约束。治疗结果取决于细胞产品组成、体内扩增与持久性、抗原密度和组织进入，也要面对抗原逃逸、靶向正常组织、细胞因子释放综合征及神经毒性等风险。[^car-t-therapy]

造血干细胞移植用新的造血系统重建免疫，适用于部分恶性血液病和严重先天免疫错误；其代价包括预处理损伤、感染、移植物抗宿主病和漫长的免疫重建。一般免疫抑制则同时降低多种无关应答，适合迅速控制炎症或防止排斥，却牺牲部分抗感染、疫苗应答和肿瘤监视。治疗强度应随疾病活动、靶器官损伤和宿主风险调整，不能把“增强免疫”或“抑制免疫”本身当成目标。

抗原特异性耐受希望只删除、失活或调节致病克隆，同时保留其余保护性免疫。过敏原免疫治疗已证明在特定疾病中可以沿这一方向重塑应答；自身免疫和移植中的肽、纳米颗粒、耐受性树突状细胞及调节性 T 细胞策略仍受靶抗原选择、表位扩展、给药情境与持久性限制。成分不明确的“转移因子”或笼统“免疫调节剂”名称不能证明它能转移抗原特异性免疫，任何制品都需落实到可定义的活性成分、靶点、剂量、质量控制和适应证证据。[^therapeutic-tolerance]

## 从药效标志到患者获益 { #therapeutic-evidence }

干预评价至少分为靶点结合、通路改变、细胞或组织反应和临床结局。血中细胞因子下降、某类细胞减少或肿瘤标志物改变可以证明药物到达了部分生物学节点，却未必改善症状、器官功能、生存或生活质量；相反，临床获益也可能不能由单一外周血标志完整解释。适用人群、对照组、随机化、随访时间、效应量和不良事件共同决定证据强度。

免疫干预尤其容易出现双向代价。解除检查点可增强抗肿瘤反应并破坏自身耐受，耗竭 B 细胞可降低自身抗体并造成持久体液缺口，强力抑制 T 细胞可保护移植物并增加机会性感染。检测因此不仅用于筛选患者，也用于确认靶点、监测暴露、识别毒性和观察免疫重建；每一种用途都需要重新定义待测对象、阈值和临床行动，而不能让一个伴随标志承担所有决策。

## 参考资料与延伸阅读 { #references }

- Murphy K, Weaver C, Berg LJ. *Janeway's Immunobiology*. 10th ed. W. W. Norton, 2022.
- Uhlen M, Bandrowski A, Carr S, et al. A proposal for validation of antibodies. *Nature Methods*. 2016;13:823–827.
- Cossarizza A, Chang HD, Radbruch A, et al. Guidelines for the use of flow cytometry and cell sorting in immunological studies (third edition). *European Journal of Immunology*. 2021;51:2708–3145.
- Taylor SC, Rosselli-Murai LK, Crobeddu B, Plante I. A critical path to producing high quality, reproducible data from quantitative western blot experiments. *Scientific Reports*. 2022;12:17599.
- US Food and Drug Administration. *Statistical Guidance on Reporting Results from Studies Evaluating Diagnostic Tests*. 2007.
- Weiner GJ. Building better monoclonal antibody-based therapeutics. *Nature Reviews Cancer*. 2015;15:361–370.
- Berraondo P, Sanmamed MF, Ochoa MC, et al. Cytokines in clinical cancer immunotherapy. *British Journal of Cancer*. 2019;120:6–15.
- Larson RC, Maus MV. Recent advances and discoveries in the mechanisms and functions of CAR T cells. *Nature Reviews Cancer*. 2021;21:145–161.
- Kenison JE, Stevens NA, Quintana FJ. Therapeutic induction of antigen-specific immune tolerance. *Nature Reviews Immunology*. 2024;24:338–357.

[^assay-validation]: 配体结合与生物标志物测量应在预定用途和样本基质中验证选择性、准确度、精密度、范围、稀释与稳定性，参见 FDA [Bioanalytical Method Validation for Biomarkers](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/bioanalytical-method-validation-biomarkers)。
[^antibody-validation-pillars]: 抗体特异性须针对具体应用，以遗传、正交、独立抗体、重组表达和免疫捕获—质谱等互补策略验证，参见 Uhlen 等 [A proposal for validation of antibodies](https://www.nature.com/articles/nmeth.3995)。本页据此纠正 S01、S04 与 S07 中把“单克隆”或“特异结合”直接等同可靠检测的表述。
[^agglutination-precipitation]: 抗原价数、抗体价数和浓度比例决定晶格形成；体内抗体效应与检测读出的区别见[B 细胞与抗体应答](b_cell_antibody.md#antibody-effector-functions)。
[^ligand-binding-assays]: 固相配体结合分析的校准、基质、稀释和定量边界参见 FDA [Bioanalytical Method Validation for Biomarkers](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/bioanalytical-method-validation-biomarkers)；本页保留 S01 lines 2173–2182 与 S07 lines 2832–2864 的 ELISA 识别—报告逻辑，具体洗板、封闭和显色条件迁实验栏目。
[^western-quantification]: Western blot 的线性范围、饱和、归一化与跨膜比较限制，参见 Taylor 等 [A critical path to producing high quality, reproducible data from quantitative western blot experiments](https://www.nature.com/articles/s41598-022-22294-x)。osm.bio 的[Western blot 条带结果分析整理](https://osm.bio/Western_blot%E6%9D%A1%E5%B8%A6%E7%BB%93%E6%9E%9C%E5%88%86%E6%9E%90%E6%95%B4%E7%90%86)集中于故障排查和操作参数，故未迁入本页机制正文，相关内容留给实验栏目。
[^flow-guidelines]: 仪器质控、补偿／解混、双联体排除、活力、FMO、门控与功能分析，参见 Cossarizza 等 [Guidelines for the use of flow cytometry and cell sorting in immunological studies](https://pmc.ncbi.nlm.nih.gov/articles/PMC11115438/)。
[^diagnostic-performance]: 参考标准、诊断灵敏度／特异度、符合率及置信区间的区别，参见 FDA [Statistical Guidance on Reporting Results from Studies Evaluating Diagnostic Tests](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/statistical-guidance-reporting-results-studies-evaluating-diagnostic-tests-guidance-industry-and-fda)。
[^antibody-therapeutics]: 抗体直接信号、Fc 效应、载荷递送与双特异性重定向的不同药理层，参见 Weiner [Building better monoclonal antibody-based therapeutics](https://www.nature.com/articles/nrc3930)。
[^cytokine-therapy]: 细胞因子的受体范围、短半衰期、系统毒性与靶向／局部递送思路，参见 Berraondo 等 [Cytokines in clinical cancer immunotherapy](https://www.nature.com/articles/s41416-018-0328-y)；细胞因子信号基础见[固有免疫识别与炎症](innate_recognition_inflammation.md#signaling-cytokines)。
[^car-t-therapy]: CAR 结构、细胞持久性、抗原依赖与非依赖耐药及特异毒性，参见 Larson、Maus [Recent advances and discoveries in the mechanisms and functions of CAR T cells](https://www.nature.com/articles/s41568-020-00323-z)。
[^therapeutic-tolerance]: 抗原特异性耐受的目标、递送策略和转化障碍，参见 Kenison、Stevens 和 Quintana [Therapeutic induction of antigen-specific immune tolerance](https://www.nature.com/articles/s41577-023-00970-x)。
