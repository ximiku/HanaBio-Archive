# 免疫检测

免疫检测把抗原—抗体结合、酶反应、荧光信号或细胞功能转换为关于样本的推断。可靠结论依次取决于待测对象、样本条件、识别试剂、信号读出、对照与分析性能；结合、细胞表型、功能和疾病因果属于需要逐层连接的证据。

测量链和抗体试剂验证是凝集、沉淀、固相分析、空间定位、免疫印迹与流式细胞术的共同基础，分析性能最终连接临床解释。利用抗体、细胞因子、小分子或活细胞改变免疫节点的机制与证据见[免疫干预](immune_interventions.md)。

## 免疫检测的测量链 { #measurement-chain }

免疫检测首先要确定待测对象。它可以是血清中的抗原或抗体、细胞表面的受体、组织中的蛋白分布，也可以是补体活性、细胞因子释放或靶细胞杀伤等功能。随后选择能够识别它的试剂，把结合事件转换成吸光度、荧光、发光、沉淀线、细胞比例或生物学效应，最后用阴性、阳性、空白和校准材料判断信号是否来自预期对象。这四层中的任一层改变，所得结果的含义都会改变。

采样属于这条测量链的一部分。血清与抗凝血浆所含成分不同，冻融、溶血、储存时间和药物干扰会改变读数；组织固定可保存空间结构，也可能遮蔽抗体表位；细胞分离、低温保存和体外刺激会改变表面分子与功能状态。一个分析方法即使在理想标准品上稳定，也要在预定样本基质、浓度范围和采样条件中验证，才能回答实际研究或临床问题。[^assay-validation]

## 抗体试剂与应用验证 { #antibody-validation }

多克隆抗体来自多个 B 细胞克隆，可同时结合一个抗原上的多个表位，常能提高总信号，其组成会随动物、采血批次和亲和纯化改变。单克隆抗体来自一个选定克隆，识别结构较一致，杂交瘤使这种抗体得以长期生产；重组表达还可固定重、轻链序列并有目的地改造同种型或 Fc。单克隆描述克隆来源，复杂样本中的分子特异性仍需通过实验验证。

抗体与单个表位结合的强弱通常用亲和力描述，多个结合位点共同作用形成的总体稳定性则属于亲合力。高亲和或多价结合可以提高低丰度靶标的捕获，相似表位、Fc 受体、带电表面或基质成分仍可能造成交叉反应。抗体性能还具有应用依赖性：能识别变性蛋白条带的抗体，对固定组织中天然构象的表现可能不同；适合流式细胞术的抗体也需要另行验证免疫沉淀性能。

可靠验证要让抗体信号与靶标变化建立独立联系。靶基因敲除或敲低、已知阳性与阴性细胞、独立抗体、重组表达、质谱或 RNA／蛋白的正交测量可以从不同方向检验特异性；滴定和批次比较则确定背景与可用范围。无一抗或仅二抗对照可发现检测系统的背景，匹配同种型对照主要评估 Fc 相关或非特异染色；靶标身份则由遗传、正交或其他特异性证据确认。[^antibody-validation-pillars]

## 凝集、沉淀与功能性检测 { #classical-functional-assays }

颗粒表面的多价抗原被抗体交联时形成凝集，可溶性多价抗原与抗体形成足够大的网络时出现沉淀。两类可见反应都要求抗原、抗体价数与浓度处在适当范围：抗体过量时各颗粒或抗原被分别占据，抗原过量时复合物又可能过小，均可产生看似阴性的前带或后带现象。序列稀释能够暴露这种比例依赖，并用仍呈阳性的最高稀释度给出滴度；滴度是特定方法下的相对终点，绝对物质浓度则需要标准曲线换算。[^agglutination-precipitation]

免疫扩散和免疫电泳把沉淀网络放入扩散距离或电泳迁移的空间背景，可比较抗原关系或分离后的组分；这些方法保留了经典的读图逻辑，但灵敏度、分辨率和定量能力受扩散、抗体组成与凝胶条件限制。补体结合试验的读出方向更需留意：待测抗原—抗体复合物若先消耗补体，指示红细胞反而不溶血，因此“不溶血”判为阳性。这个例子说明间接读出必须经过对照系统解释。

中和试验询问抗体是否抑制病毒入胞、毒素作用或酶活性，读取结合之后的功能。一个抗体可强烈结合抗原却不遮挡关键功能面，也可能在不同细胞、病毒株或补体条件下呈现不同效力。调理吞噬、抗体依赖细胞毒、淋巴细胞增殖、细胞因子释放和靶细胞杀伤同样属于功能检测；结果会同时受到效应细胞状态、效靶比、刺激强度和培养时间影响。

## 固相标记免疫分析 { #labeled-immunoassays }

标记把肉眼不可见的结合转换为可测信号。直接免疫标记把荧光团、酶或其他报告分子连接到识别抗体；间接格式先让未标记一抗结合靶标，再用标记二抗放大信号。放射性、荧光、化学发光和酶促显色的共同任务是产生可分辨读出，其信号生成、动态范围、空间分辨率和安全条件各异；分析灵敏度与分子特异性需要分别评价。

酶联免疫吸附试验（enzyme-linked immunosorbent assay，ELISA）将反应物固定在微孔板等固相上，并用洗涤分开结合与游离试剂。夹心格式用捕获抗体和检测抗体识别同一抗原的不同表位，适合在复杂基质中测抗原；间接格式常以固相抗原捕获样本抗体，再由抗免疫球蛋白二抗显色；竞争格式让样本分析物与标记或固相配体竞争，信号可随分析物增加而降低。每种格式都要匹配空白、阴性、阳性和校准曲线，确定检出限、定量范围、精密度、回收率及稀释平行性。高浓度抗原在某些夹心检测中可分别占据两种抗体而不形成完整夹心，产生高剂量钩状效应；基质干扰则可能让标准品曲线不能直接代表真实样本。[^ligand-binding-assays]

## 空间定位与免疫印迹 { #spatial-western }

免疫荧光和免疫组织化学在细胞或组织结构中定位抗原。共定位、细胞内区室和病灶边界都依赖这种空间背景；重叠像素提供空间邻近证据，蛋白直接相互作用还需其他方法验证。固定、抗原修复、组织自发荧光、二抗背景、图像阈值和细胞分割都会改变阳性范围；已知表达组织、缺失靶标材料和无一抗对照分别回答不同的质量问题。

免疫印迹（Western blot）先按电泳迁移分开蛋白，再转印到膜上用抗体检测，因此把免疫识别与表观分子质量结合起来。预期位置的单条带增强了身份判断，但剪接异构体、蛋白水解、糖基化和其他修饰都可改变迁移，非特异结合也可能恰好落在相近位置。定量还要求目标信号与归一化参照都处于线性范围，避免饱和，并控制上样、转印和曝光差异；完整膜图、分子量标志和采集条件共同构成可解释证据。[^western-quantification]

## 流式细胞术的群体与功能分析 { #flow-cytometry }

流式细胞仪让悬液中的细胞或颗粒逐个通过光束，记录散射光和多个荧光通道。散射提供大小与内部复杂度的近似信息，荧光抗体、染料或报告系统读取表面分子、细胞内蛋白、活力、增殖和信号状态。荧光激活细胞分选（fluorescence-activated cell sorting，FACS）在此基础上把满足门控条件的事件导向不同收集管；后续培养还取决于染料、压力、无菌条件和细胞本身。

从原始事件到“某细胞群占比”要经过仪器质控、单细胞与活细胞筛选、光谱补偿或解混以及门控。单染对照用于估计各荧光团的溢出，缺一荧光对照（fluorescence minus one，FMO）帮助判断多色面板中连续或稀有阳性群的边界；生物学阳性、阴性与刺激对照检验群体是否按预期变化。CD 分子组合定义所测时刻的表型，细胞因子、磷酸化蛋白、增殖或杀伤读出进一步支持功能结论。高维聚类可以减少逐门观察的局限，其可靠性仍依赖样本质量、批次控制与可重复的注释规则。[^flow-guidelines]

## 分析性能与临床解释 { #clinical-interpretation }

分析灵敏度描述方法能可靠检出的最低量或变化，临床诊断灵敏度则描述具有目标状态的人中有多少检测阳性；分析特异性关注测量中其他分子的干扰，诊断特异度关注不具有目标状态的人中有多少检测阴性。后两者必须相对于预先定义且独立于待评方法的参考标准估计。若新方法只与另一个未被定义为真实状态参考标准的检测比较，所得指标是阳性／阴性符合率。[^diagnostic-performance]

阳性预测值还取决于受检人群中的目标状态频率。同样的灵敏度和特异度用于低患病率筛查时，阳性结果中假阳性的比例可明显增加；用于高风险人群时，结果组成又会改变。感染或免疫后的采样时间、既往疫苗、被动输入抗体、免疫抑制和宿主免疫缺陷都会改变抗原、抗体或细胞读出。因此，检测阳性应在适用人群、阈值、参考标准和临床情境内解释。

## 参考资料与延伸阅读 { #references }

- Murphy K, Weaver C, Berg LJ. *Janeway's Immunobiology*. 10th ed. W. W. Norton, 2022.
- Uhlen M, Bandrowski A, Carr S, et al. A proposal for validation of antibodies. *Nature Methods*. 2016;13:823–827.
- Cossarizza A, Chang HD, Radbruch A, et al. Guidelines for the use of flow cytometry and cell sorting in immunological studies (third edition). *European Journal of Immunology*. 2021;51:2708–3145.
- Taylor SC, Rosselli-Murai LK, Crobeddu B, Plante I. A critical path to producing high quality, reproducible data from quantitative western blot experiments. *Scientific Reports*. 2022;12:17599.
- US Food and Drug Administration. *Statistical Guidance on Reporting Results from Studies Evaluating Diagnostic Tests*. 2007.

[^assay-validation]: 配体结合与生物标志物测量应在预定用途和样本基质中验证选择性、准确度、精密度、范围、稀释与稳定性，参见 FDA [Bioanalytical Method Validation for Biomarkers](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/bioanalytical-method-validation-biomarkers)。
[^antibody-validation-pillars]: 抗体特异性须针对具体应用，以遗传、正交、独立抗体、重组表达和免疫捕获—质谱等互补策略验证，参见 Uhlen 等 [A proposal for validation of antibodies](https://www.nature.com/articles/nmeth.3995)。
[^agglutination-precipitation]: 抗原价数、抗体价数和浓度比例决定晶格形成；体内抗体效应与检测读出的区别见[B 细胞与抗体应答](b_cell_antibody.md#antibody-effector-functions)。
[^ligand-binding-assays]: 固相配体结合分析的校准、基质、稀释和定量边界参见 FDA [Bioanalytical Method Validation for Biomarkers](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/bioanalytical-method-validation-biomarkers)。
[^western-quantification]: Western blot 的线性范围、饱和、归一化与跨膜比较限制，参见 Taylor 等 [A critical path to producing high quality, reproducible data from quantitative western blot experiments](https://www.nature.com/articles/s41598-022-22294-x)。
[^flow-guidelines]: 仪器质控、补偿／解混、双联体排除、活力、FMO、门控与功能分析，参见 Cossarizza 等 [Guidelines for the use of flow cytometry and cell sorting in immunological studies](https://pmc.ncbi.nlm.nih.gov/articles/PMC11115438/)。
[^diagnostic-performance]: 参考标准、诊断灵敏度／特异度、符合率及置信区间的区别，参见 FDA [Statistical Guidance on Reporting Results from Studies Evaluating Diagnostic Tests](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/statistical-guidance-reporting-results-studies-evaluating-diagnostic-tests-guidance-industry-and-fda)。
