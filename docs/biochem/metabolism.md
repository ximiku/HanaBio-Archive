# 代谢总论

代谢是生物体内彼此连接的化学转化总和。营养物进入细胞后并不是沿一条孤立的路线走到终点，而是在酶、转运体和膜结构共同组织的网络中被拆解、重排和重新合成。这个网络既要供给 ATP、还原当量和大分子前体，也要维持离子、氧化还原状态与代谢物浓度，使细胞能够在不断交换物质的同时保持可工作的内部环境。[^metabolism-network]

教科书把网络划成糖酵解、三羧酸循环、脂肪酸氧化等“通路”，是为了显示一组反应的共同功能和调节逻辑。真实细胞却没有这些画在图上的边框：葡萄糖-6-磷酸可流向糖酵解、磷酸戊糖途径或糖原，乙酰 CoA 可被氧化也可用于合成，氨基酸碳骨架还会进入糖和脂质代谢。理解代谢的关键因而不是背诵箭头，而是同时追踪物质从哪里来、向哪里去，反应在何处发生，以及通量为何在当前条件下如此分配。

本页建立阅读具体通路所需的网络、稳态、热力学与控制框架。ATP 和氧化还原反应的定量基础见[生物能学](bioenergetics.md)，辅酶怎样携带电子和基团见[维生素与辅酶](vitamin_and_coenzyme.md)，具体调节酶的别构、修饰和装配机制见[酶的催化机制与调控](enzyme_mechanism_regulation.md)。

## 代谢反应构成开放的化学网络 { #metabolic-network }

分解代谢把较复杂的分子转化为较小的产物，并把一部分自由能保存为 ATP、还原型电子载体或跨膜电化学梯度。合成代谢以小分子前体建造氨基酸、核苷酸、脂质和多糖，通常需要 ATP 及 NADPH 等还原力。二者不是两套互不相干的反应：同一个中间物可接收分解通量，也可离开主干进入合成；同一条通路兼有分解和合成用途时，常称两用代谢途径（amphibolic pathway）。三羧酸循环既氧化乙酰基，又提供草酰乙酸、$\alpha$-酮戊二酸、琥珀酰 CoA 等合成前体，是典型的两用途径。

| 组织方式 | 物质变化与代表性联系 | 需要保留的边界 |
| --- | --- | --- |
| 分解代谢 | 大分子或还原程度较高的燃料转为较小产物，回收自由能；如糖酵解、脂肪酸 β-氧化和氨基酸分解 | 分解不等于每一步都氧化，也不保证全部能量都被 ATP 捕获 |
| 合成代谢 | 由前体形成细胞组分、储存物或信号分子；如脂肪酸、核苷酸与非必需氨基酸合成 | 合成不一定只是分解通路倒放，常需不同酶和能量耦联 |
| 两用代谢 | 同一反应网络兼顾氧化供能和前体供应；如三羧酸循环 | 中间物被抽走后须由补充反应恢复，才能维持循环通量 |
| 中心代谢节点 | 汇合多种来源并分配到多种去路；如葡萄糖-6-磷酸、丙酮酸和乙酰 CoA | “中心”依物种、组织和营养状态而变，不是固定的分子排行榜 |

生物氧化描述电子从某个物质转移出去，不要求该步直接使用 O$_2$。乳酸脱氢酶可把乳酸的电子转给 NAD$^+$，脂酰 CoA 脱氢酶先把电子交给 FAD，直到呼吸链末端才可能由氧接受电子；厌氧生物还可使用硝酸盐、硫酸盐或有机分子作末端受体。因此，把生物氧化概括成“碳、氢与氧分离”既不能给出电子去向，也不能区分脱氢、加氧和水解。[^biological-oxidation]

## 反应计量、通量与代谢物池 { #flux-and-pools }

代谢图中的每个箭头都包含化学计量。若把 $m$ 个代谢物的量写成向量 $\mathbf{x}$，把 $n$ 个反应速率写成 $\mathbf{v}$，化学计量矩阵 $\mathbf{N}$ 的每一列记录一个反应消耗和生成各物质的系数。开放系统还要加入跨边界的输入与输出：

$$
\frac{d\mathbf{x}}{dt}=\mathbf{N}\mathbf{v}+\mathbf{v}_{in}-\mathbf{v}_{out}.
$$

代谢通量（flux）是物质沿某个反应或一组反应在单位时间内通过的量，常按细胞数、蛋白量、组织质量或体积归一化。代谢物池（pool）则是在指定空间范围和化学形态下存在的量。一个很大的池可以周转很慢，一个很小的池也可以被快速生成和消耗；只看浓度不能知道流速。

当每个内部代谢物的总生成速率等于总消耗速率时，$d\mathbf{x}/dt=0$，系统处于动力学稳态。稳态意味着宏观池量在观察时段内近似不变，不意味着分子静止，也不意味着所有反应达到平衡。水持续流入和流出的水池可以保持水位不变；同样，葡萄糖持续进入、乳酸和 CO$_2$ 持续离开时，中间物浓度仍可稳定。细胞生长、昼夜变化和刺激响应又会让稳态缓慢移动或暂时被打破。[^steady-state]

| 量 | 回答的问题与典型单位 | 常见误读 |
| --- | --- | --- |
| 代谢物浓度或池量 | 某时刻有多少；如 mmol·L$^{-1}$、nmol·mg$^{-1}$ 蛋白 | 浓度升高不必表示合成通量升高，也可能是消耗受阻 |
| 单步净通量 | 单位时间有多少物质净通过一个反应；如 mmol·L$^{-1}$·s$^{-1}$ | 净通量会掩盖同时存在的正、逆向交换通量 |
| 交换或循环通量 | 分子在池、区室或相反方向间多快交换；如 mol·time$^{-1}$ | 大交换通量可以伴随很小的净位移 |
| 酶量或转录本量 | 催化容量的一个来源；如 mol、copies·cell$^{-1}$ | 丰度不能单独给出活性、底物供应或整条通路的净通量 |

## 热力学限定反应方向而不单独决定通量 { #thermodynamic-direction }

在恒温恒压下，实际反应自由能由标准转化自由能和细胞中的质量作用比共同决定：

$$
\Delta_rG=\Delta_rG^{\circ\prime}+RT\ln Q.
$$

$Q$ 由反应物和产物活度按化学计量数组成。达到平衡时 $Q=K$、$\Delta_rG=0$，正逆通量相等而净通量为零；$\Delta_rG<0$ 时正向在热力学上有利，$\Delta_rG>0$ 时则逆向有利。细胞通过维持底物和产物浓度、移走产物以及把不利反应与 ATP 水解、焦磷酸水解或离子梯度耗散耦联，改变总反应的方向边界。[^thermodynamic-flux]

接近平衡的反应对底物／产物比很敏感，外部通量改变时常可迅速反向；远离平衡的反应在当前条件下具有较大的单向驱动力，通常需要另一条反应绕行才能完成相反的净转化。但“远离平衡”“生理上不可逆”“受调节”和“控制通量”并不是同义词。一个步骤的 $\Delta_rG$ 很负，只说明当前浓度下逆向净流动困难；它对全通路通量有多大控制，还取决于其他反应、转运、分支和需求。接近平衡的步骤若受到容量或底物限制，也可能贡献显著控制。

!!! warning "不存在普适的单一限速酶"

    把一条代谢通路想成串联水管，进而寻找永远最慢的一根管，忽略了酶速率会随中间物浓度改变。提高某个酶的活性后，上下游池量会重新分配，其他步骤可能接管更多控制。日常叙述中的“限速酶”可以指特定条件下控制较显著、远离平衡或受强调节的步骤，但不能据此断言其通量控制系数恒为 1。

## 区室、转运与局部代谢池 { #metabolic-compartments }

同名代谢物不一定属于同一个均匀池。真核细胞的胞质与线粒体可分别维持 NADH/NAD$^+$、NADPH/NADP$^+$、pH 和乙酰 CoA 等状态；内膜对许多分子不通透，物质须经特异转运体或穿梭系统交换。过氧化物酶体、内质网、溶酶体和叶绿体又提供不同的氧化还原环境、底物来源和反应界面。组织与器官把这种空间分工再放大，例如肝、肌、脂肪组织和脑对葡萄糖、乳酸、脂肪酸与酮体的输入输出不同。[^compartmentalization]

区室化可以把相互冲突的反应分开、限制活泼或有毒中间物扩散，并让转运本身成为控制点。多酶复合体和短距离底物传递还可能建立微区，但只有动力学、结构或示踪证据支持时，才应称为代谢通道；从两种酶相邻或能共沉淀，不能直接推出中间物从不进入体相。

原素材所称能在可溶态和膜结合态之间转换的“**双关酶**”，更准确地属于可逆膜结合的 amphitropic enzyme。以磷脂酰胆碱合成中的 CTP:磷酸胆碱胞苷酰转移酶为例，膜脂环境是调节配体，膜结合会解除自抑制并提高催化活性。这种空间开关只适用于具备相应膜结合机制的蛋白，不能作为所有代谢酶的共同定义；它也不同于一条多肽催化两种反应的“双功能酶”。[^amphitropic-enzyme]

## 能量与还原状态连接分解和合成 { #energy-redox-coupling }

ATP/ADP、NADH/NAD$^+$、NADPH/NADP$^+$ 和泛醌等载体把相隔较远的反应连接起来。分解代谢常把燃料电子交给 NAD$^+$ 或 FAD，并通过底物水平磷酸化或膜上能量转换形成 ATP；合成代谢常消耗 ATP 和 NADPH。这里的“常”很重要：NADH 也参与合成反应，NADPH 也用于抗氧化和某些分解过程，实际方向由酶专一性、区室与载体池状态共同决定。

Atkinson 提出的腺苷酸能荷把 ATP、ADP、AMP 池压缩为一个介于 0 与 1 的无量纲指标：

$$
\mathrm{AEC}=\frac{[\mathrm{ATP}]+\tfrac12[\mathrm{ADP}]}
{[\mathrm{ATP}]+[\mathrm{ADP}]+[\mathrm{AMP}]}.
$$

全部为 AMP 时 AEC 为 0，全部为 ATP 时为 1，全部为 ADP 时为 0.5。许多生长或稳态细胞的测值接近 0.8–0.95，但物种、组织、缺氧、营养状态和取样淬灭都会改变结果；原素材的 0.85–0.95 只能作为常见观察范围，不能充当所有活细胞的生死阈值。能荷也不等于 ATP 浓度，因为总腺苷酸池大小可能同时改变。[^adenylate-energy-charge]

能量和还原状态通过多种酶与信号网络被读取。AMP 或 ADP 升高可以直接调节某些酶，也可在动物细胞中影响 AMPK；NADH/NAD$^+$ 比值影响可逆脱氢反应的方向；NADPH 供应又限制还原性生物合成和过氧化物清除。这些比值具有明显区室性，整细胞提取所得平均值不能自动代表线粒体或胞质的局部状态。

## 代谢调节跨越多个时间和空间尺度 { #regulatory-layers }

代谢调节不是一套独立于通路的“开关”，而是底物、酶和需求共同改变通量的过程。秒级的底物供应和别构作用、分钟级的可逆修饰与转位、较长时间的蛋白合成和降解可以同时作用；多细胞生物还通过激素、神经信号和器官间底物交换协调这些层次。[^metabolic-regulation]

“调节”和“控制”在一般叙述中常交替使用。代谢控制分析则给二者较严格的分工：调节机制描述效应物、修饰或表达怎样改变局部反应，控制系数描述这些局部性质对系统通量或稳态浓度有多大影响。原素材把“调节”限定为维持代谢物稳态、把“控制”限定为适应环境而改变通量，适合作为两个目标的提示，却不是通行的术语定义；真实响应往往同时改变通量并把若干代谢物池带到新的稳态。

| 调节层次 | 直接对象与响应实例 | 解释边界 |
| --- | --- | --- |
| 底物供应与产物移除 | 改变质量作用比和酶占据；如葡萄糖摄取、脂肪酸进入线粒体、产物被下游消耗 | 不需酶本身发生修饰，也可大幅改变通量 |
| 别构效应与反馈 | 改变现有酶的构象和动力学；如 ATP、AMP、柠檬酸或终产物调节上游酶 | 反馈说明网络位置；不等同于竞争性抑制或固定的第一步 |
| 共价修饰与蛋白相互作用 | 改变活性、定位或装配；如磷酸化、乙酰化和调节亚基结合 | 同一种修饰可在不同蛋白上激活或抑制 |
| 酶量和同工酶表达 | 改变反应容量及调节性质；如转录、翻译、降解和组织特异同工酶 | 丰度变化只有结合底物和网络状态才能推断净通量 |
| 区室化与转运 | 改变可接触的局部底物池；如线粒体载体、膜招募和器官间循环 | 转运步骤本身也消耗能量并接受调节 |
| 系统性协调 | 改变多组织的输入、储存和输出；如进食与禁食时胰岛素、胰高血糖素等信号 | 激素效应依组织和时间而异，不能写成全身同向开关 |

反馈调节由较后端的产物或状态影响前端反应，使供给跟随需求；前馈调节则由较早的底物或信号预先影响下游步骤，减少中间物过度积累。相向通路常采用不同酶并接受相反调节，避免同时高速运行。不过，底物循环并非必然“无效”：有控制的循环会消耗 ATP，却可放大响应、提高热生成或加快通量方向切换。

## 分支途径通过组合反馈分配共同前体 { #branched-feedback }

分支网络面临一个特殊问题：一种终产物过量时，应减少它自己的合成，却仍允许共同前体流向其他分支。微生物氨基酸和核苷酸合成研究形成了若干历史术语；不同教材的中文译名并不统一，真正可检验的是“哪个产物作用于哪个酶，以及组合效应怎样变化”。[^feedback-architecture]

| 历史名称 | 简化回路 | 对共同前体分配的意义 |
| --- | --- | --- |
| 分支特异反馈 | 每个终产物抑制本分支的第一个专一步骤 | 单一产物过量主要减少自己的分支，不立即关闭其他产物合成 |
| 累积反馈抑制 | 多种终产物各自造成部分抑制，组合后逐步增强 | 共同入口读取多种需求；大肠杆菌谷氨酰胺合成酶的经典结果是各抑制效应共同累积，残余活性不宜简单写成线性相加 |
| 协同／一致反馈抑制 | 只有多种终产物同时较高时，共同入口才受到强抑制 | 避免仅一种产物充足就切断其他分支；有些教材称 concerted feedback |
| 增效反馈抑制 | 终产物组合的抑制强于任一单独效应及其简单预期 | 对“多个产物都充足”产生陡峭响应；须由组合剂量实验区分于普通累积 |
| 顺序反馈抑制 | 终产物先抑制各自分支，分支点中间物积累后再抑制更上游步骤 | 把分支需求变化逐级传回共同入口；具体回路必须按生物和通路绘出 |

这些回路会与同工酶、转录阻遏、酶修饰和交叉激活叠加。单次体外测得两个产物共同降低活性，不足以命名整个细胞内控制架构；还需确认效应物浓度范围、结合位点、分支通量及其他酶是否同步改变。

## 代谢控制分析量化整条网络的贡献 { #metabolic-control-analysis }

代谢控制分析（metabolic control analysis, MCA）由 Kacser 与 Burns、Heinrich 与 Rapoport 在 20 世纪 70 年代分别建立。它不先指定一个“限速步骤”，而是在某个稳态附近对系统作小扰动，量化每个反应对通量和中间物浓度的局部影响。[^mca-history]

对通量 $J$，反应 $i$ 的活性参数记为 $E_i$，通量控制系数定义为

$$
C_{E_i}^{J}=\frac{\partial\ln J}{\partial\ln E_i}.
$$

若 $C_{E_i}^{J}=0.2$，表示在当前状态附近把该反应活性小幅提高 1%，通量约提高 0.2%；这不是把某酶永久标记成“贡献 20%”。中间物 $X$ 的浓度控制系数定义为

$$
C_{E_i}^{X}=\frac{\partial\ln X}{\partial\ln E_i}.
$$

浓度控制系数可为正或负，分支网络中的通量控制系数也可能为负，因为增强一条支路可降低另一条支路的通量。

弹性系数描述单个反应在周围状态暂不重新调整时，对底物或效应物的局部敏感性：

$$
\varepsilon_{X}^{v_i}=\frac{\partial\ln v_i}{\partial\ln X}.
$$

控制系数是整个网络的性质，弹性系数是特定反应在当前环境下的性质。一个米氏酶对底物的弹性可随饱和度从接近 1 降到接近 0；别构、产物抑制和可逆性又会改变数值，因此不能给所有“米氏酶”或“别构酶”规定固定范围。[^mca-coefficients]

在经典、连续且各反应活性可独立缩放的稳态模型中，通量控制满足求和定理：

$$
\sum_i C_{E_i}^{J}=1,
\qquad
\sum_i C_{E_i}^{X}=0.
$$

第一式说明通量控制由系统各步分担；第二式说明若所有反应活性按相同比例放大，稳态中间物浓度不必随之改变。连接定理把系统控制与局部弹性联系起来。外部参数 $p$ 同时作用于多个反应时，通量响应系数为

$$
R_p^J=\frac{\partial\ln J}{\partial\ln p}
=\sum_i C_{E_i}^{J}\varepsilon_p^{v_i}.
$$

只有 $p$ 直接作用于一个反应时，才可把它简写成单个 $C\varepsilon$。原素材写成普遍的 $R=C\cdot\varepsilon$ 会漏掉一个激素、温度或代谢物同时影响多步的常见情形。求和定理本身也有模型前提；基团转移、酶复合物、空间扩散或非稳态系统需要扩展形式，不能把 $\sum C=1$ 当作脱离系统边界的自然常数。[^mca-boundaries]

## 个体状态通过组织间交换实现协同调节 { #integrated-metabolism }

单个反应的调节最终服务于整个生物的物质需求。进食后，肝和肌增加葡萄糖利用与储存，脂肪组织接收并储存脂质；禁食时，肝糖原分解和糖异生支持血糖，脂肪组织释放脂肪酸，肝还可生成酮体。运动中的肌肉、静息脑和增殖细胞又有不同的 ATP、前体和氧化还原需求。所谓“协同调节”不是所有组织同时开启同一条通路，而是不同组织通过血液或体液交换底物，使全身输入与消耗相配。

这种协调含有不同时间尺度。别构调节先改变已有酶的速率，磷酸化和转位把信号接到代谢节点，转录与蛋白降解再改变容量；底物浓度和激素又会在器官间形成反馈。因而同一份代谢图在进食、运动、缺氧、发育或疾病时会有不同通量。Reactome 等数据库提供经过整理的反应与区室关系，却不表示所有列出的反应在每个细胞中同时活跃。[^metabolism-network]

## 通路缺陷揭示节点、旁路与池量变化 { #pathway-defects }

遗传性代谢病说明“堵住一个箭头”会同时改变上游积累、下游缺乏和旁路产物。苯丙氨酸先由四氢生物蝶呤依赖的苯丙氨酸羟化酶生成酪氨酸；酪氨酸依次形成 4-羟苯丙酮酸、尿黑酸、马来酰乙酰乙酸和延胡索酰乙酰乙酸，最终生成延胡索酸与乙酰乙酸。原素材把尿黑酸写成“2,5-二羟苯乙酸”并直接连到 CO$_2$ 和 H$_2$O，会丢失真正的中间物和生糖／生酮结局。[^phenylalanine-tyrosine-pathway]

| 受阻步骤 | 代表性疾病或状态 | 代谢解释 |
| --- | --- | --- |
| 苯丙氨酸 $\rightarrow$ 酪氨酸 | 苯丙氨酸羟化酶缺乏症（经典表型称苯丙酮尿症） | 苯丙氨酸及旁路产物积累，酪氨酸成为条件性必需；BH$_4$ 合成或再生缺陷也可形成高苯丙氨酸血症 |
| 尿黑酸 $\rightarrow$ 马来酰乙酰乙酸 | 尿黑酸症 | HGD 活性缺失使尿黑酸积累；酶名宜写尿黑酸 1,2-双加氧酶，不笼统写“尿黑酸氧化酶” |
| 4-羟苯丙酮酸 $\rightarrow$ 尿黑酸 | Ⅲ型酪氨酸血症 | HPD 缺乏只是酪氨酸血症的一型；Ⅰ型和Ⅱ型分别涉及更下游的 FAH 和更上游的 TAT，不能把“高酪氨酸血症”归于一种酶 |

这个例子在总论中用于显示网络扰动；疾病分型、氮代谢、碳骨架去路与治疗靶点将在[蛋白质降解与氨基酸分解代谢](pr_aa_catabolism.md)中完整承接。

## 代谢研究区分静态组成与动态流动 { #measuring-metabolism }

测量代谢要先说明所问的是池量、交换、净通量还是整个系统的气体和热量。代谢组学可同时记录许多代谢物的相对或绝对丰度，却给出的是取样瞬间的池量；转录组和蛋白质组提示潜在容量；酶测定揭示离体条件下的催化性质。它们都不能单独恢复细胞内每条箭头的实际流速。[^metabolomics-flux]

稳定同位素示踪把 $^{13}$C、$^{15}$N 或 $^2$H 标记的底物送入系统，随后用质谱或 NMR 追踪标记进入哪些位置。结合摄取与分泌速率、池量、原子映射和动力学模型，可以估计分支比例、交换通量或绝对通量。标记比例升高仍不自动等于通量升高：池大小、天然未标记来源、同位素稳态和区室混合都会影响结果。

瓦氏呼吸器是早期整体代谢测量的代表。样品与底物置于恒温密闭反应瓶，中心池的碱液吸收 CO$_2$，与反应瓶相连的压力计记录气相压力变化；经过空白、温度、气液体积和气体溶解校正后，压力下降可用于估算 O$_2$ 消耗。若不吸收 CO$_2$ 或改变缓冲体系，还可设计 CO$_2$ 释放测量。它测得的是整个样品的气体交换，不能直接指出氧由哪条通路消耗；装置、现代氧电极与呼吸通量分析的细节迁往[光谱测定与生化定量](../exptech/biochem_molecular/spectroscopy_assays.md)。[^warburg-respirometry]

## 参考资料与延伸阅读

- Nelson, D. L., Cox, M. M. & Hoskins, A. A. *Lehninger Principles of Biochemistry*, 8th ed., Chapters 13–15. Macmillan Learning, 2021.
- Alberts, B. et al. [How Cells Obtain Energy from Food](https://www.ncbi.nlm.nih.gov/books/NBK26882/). *Molecular Biology of the Cell*, 4th ed.
- Reactome. [Metabolism, R-HSA-1430728](https://reactome.org/content/detail/R-HSA-1430728).
- Noor, E. et al. [Thermodynamic constraints on the regulation of metabolic fluxes](https://pmc.ncbi.nlm.nih.gov/articles/PMC6314121/). *Biophysical Journal* 116, 971–985 (2019).
- Heinrich, R. & Rapoport, T. A. [A linear steady-state treatment of enzymatic chains](https://pubmed.ncbi.nlm.nih.gov/4830198/). *European Journal of Biochemistry* 42, 89–95 (1974).
- Atkinson, D. E. [The energy charge of the adenylate pool as a regulatory parameter](https://pubmed.ncbi.nlm.nih.gov/4972613/). *Biochemistry* 7, 4030–4034 (1968).
- Jang, C., Chen, L. & Rabinowitz, J. D. [Metabolomics and isotope tracing](https://pmc.ncbi.nlm.nih.gov/articles/PMC6034115/). *Cell* 173, 822–837 (2018).

[^metabolism-network]: Reactome, [Metabolism](https://reactome.org/content/detail/R-HSA-1430728)；Alberts, B. et al., [How Cells Obtain Energy from Food](https://www.ncbi.nlm.nih.gov/books/NBK26882/)。两者均把糖酵解和三羧酸循环置于更大的分支网络中；Reactome 的人类页面还明确连接供能、储存、合成、解毒与激素协调。
[^biological-oxidation]: Cooper, G. M., [Metabolic Energy](https://www.ncbi.nlm.nih.gov/books/NBK9903/)。该教材按电子载体和氧化还原反应说明营养物氧化，并区分底物把电子交给 NAD$^+$、电子传递与氧在呼吸末端的作用。
[^steady-state]: Sauro, H. M., [Network Dynamics](https://pmc.ncbi.nlm.nih.gov/articles/PMC2793415/)。稳态按各内部物种净生成率为零定义；反应通量和分子周转可以在浓度不变时持续存在。
[^thermodynamic-flux]: Noor, E. et al., [Thermodynamic constraints on the regulation of metabolic fluxes](https://pmc.ncbi.nlm.nih.gov/articles/PMC6314121/)。该分析区分反应自由能、可逆性、酶弹性与通量控制，说明大热力学驱动力不自动等于独占通量控制。
[^compartmentalization]: [Principles and functions of metabolic compartmentalization](https://pmc.ncbi.nlm.nih.gov/articles/PMC10155461/)。区室既建立不同化学环境，也隔离有害中间物，并通过储存、释放和转运参与控制。
[^amphitropic-enzyme]: Lee, J. et al., [Structural basis for autoinhibition of CTP:phosphocholine cytidylyltransferase](https://pmc.ncbi.nlm.nih.gov/articles/PMC3894351/)。该研究把 CCT 定义为以膜为调节配体的 amphitropic enzyme，并以结构说明膜结合区与自抑制之间的联系。
[^adenylate-energy-charge]: Atkinson, D. E., [The energy charge of the adenylate pool as a regulatory parameter](https://pubmed.ncbi.nlm.nih.gov/4972613/)；De la Fuente, I. M. et al., [On the dynamics of the adenylate energy system](https://pmc.ncbi.nlm.nih.gov/articles/PMC4193753/)。前者提出能荷指标，后者汇总不同生物和状态下的测值，支持把约 0.8–0.95 视为常见范围而非固定常数。
[^metabolic-regulation]: Alberts, B. et al., [Metabolism Is Organized and Regulated](https://www.ncbi.nlm.nih.gov/books/NBK26882/)；Reactome, [Metabolism](https://reactome.org/content/detail/R-HSA-1430728)。来源共同支持分支选择、酶调节、细胞类型差异与激素协调的多层结构。
[^feedback-architecture]: Cornish-Bowden, A., [Understanding allosteric and cooperative interactions in enzymes](https://doi.org/10.1111/febs.12469). *FEBS Journal* 281, 621–632 (2014)；[Interpreting the plastid carbon, nitrogen, and energy status](https://pmc.ncbi.nlm.nih.gov/articles/PMC523876/)。后者回顾大肠杆菌谷氨酰胺合成酶的累积反馈命名与多终产物抑制，前者说明反馈主要帮助代谢物稳态和按需求分配通量。
[^mca-history]: Heinrich, R. & Rapoport, T. A., [A linear steady-state treatment of enzymatic chains](https://pubmed.ncbi.nlm.nih.gov/4830198/)；Moreno-Sánchez, R. et al., [Metabolic control analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC2447884/)。原始论文和回顾均说明控制强度是系统对酶性质扰动的响应，而非预先指定单一限速步骤。
[^mca-coefficients]: [Delving deeper using symbolic metabolic control analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC6261606/)；Sauro, H. M., [Network Dynamics](https://pmc.ncbi.nlm.nih.gov/articles/PMC2793415/)。二者给出控制系数、弹性系数、求和与连接关系，并强调控制系数依赖完整网络和当前稳态。
[^mca-boundaries]: van Dam, K. et al., [The sum of the control coefficients of all enzymes on the flux through a group-transfer pathway can be as high as two](https://pubmed.ncbi.nlm.nih.gov/8462550/)。该文说明经典“酶浓度控制系数和为 1”在基团转移体系需要重新界定系统参数；无论采用何种扩展，都必须先声明系统边界和可独立扰动的活动。
[^phenylalanine-tyrosine-pathway]: Reactome, [Tyrosine catabolism](https://reactome.org/content/detail/R-HSA-8963684)；GeneReviews, [Phenylalanine Hydroxylase Deficiency](https://www.ncbi.nlm.nih.gov/books/NBK1504/) 与 [Alkaptonuria](https://www.ncbi.nlm.nih.gov/books/NBK1454/)；NCBI Genetic Testing Registry, [Tyrosinemia type III](https://www.ncbi.nlm.nih.gov/gtr/conditions/C0268623/)。这些来源共同核对苯丙氨酸—酪氨酸降解顺序、终产物以及 PAH、HGD、HPD 缺陷的疾病边界。
[^metabolomics-flux]: Jang, C., Chen, L. & Rabinowitz, J. D., [Metabolomics and isotope tracing](https://pmc.ncbi.nlm.nih.gov/articles/PMC6034115/)。该综述明确区分代谢物浓度与通量，并说明稳定同位素标记结合池量和模型后才能提供动态信息。
[^warburg-respirometry]: [The Warburg effect reinterpreted 100 years on](https://journals.physiology.org/doi/10.1093/function/zqae008)；Koppenol, W. H. et al., [Warburg effect(s)—a biographical sketch](https://pmc.ncbi.nlm.nih.gov/articles/PMC4784299/)。两者回顾 Warburg 用压力计测量组织切片的 O$_2$ 消耗与 CO$_2$ 生成；正文只保留总论所需的测量逻辑，具体校正与现代仪器留给实验页。
