# 气体交换与运输

肺通气只把环境气体送到肺泡，真正决定组织能否获得氧的，是随后连续发生的肺泡—毛细血管扩散、肺内通气与血流的匹配、血液携带以及组织交换。四个环节使用的量并不相同：分压决定净扩散方向，血红蛋白饱和度描述结合位点的占据比例，血氧含量才表示单位血量实际携带多少氧；心输出量进一步把“每分升血含多少氧”转成“每分钟送出多少氧”。把这些量混写，是理解低氧血症、贫血和循环衰竭时最常见的障碍。

## 分压把气相与溶解气体连接起来 { #partial-pressure }

混合气体中某组分的分压等于该组分摩尔分数与总压的乘积。吸入气进入上气道后被水蒸气饱和，干燥空气的总压不再全部由 O$_2$、N$_2$ 等气体分担；在体温下计算吸入氧分压时，应先从大气压中扣除水蒸气分压。肺泡气又持续接受静脉血带来的 CO$_2$ 并向血液失去 O$_2$，所以其组成不同于吸入气。呼出气则混合了解剖无效腔中较接近吸入气的部分与肺泡气，不能直接视为一份均一的“肺泡样品”。[^respiratory-gas-laws]

稳态、吸入气中 CO$_2$ 很低并采用近似呼吸商 $R$ 时，肺泡气体方程可写成：

$$
P_{A\mathrm O_2}\approx F_{I\mathrm O_2}(P_B-P_{H_2O})-\frac{P_{a\mathrm{CO}_2}}{R}
$$

其中 $P_{A\mathrm O_2}$ 是肺泡氧分压，$F_{I\mathrm O_2}$ 是吸入氧分数，$P_B$ 是大气压。肺泡 CO$_2$ 与充分交换后的动脉 $P_{a\mathrm{CO}_2}$ 通常很接近；后者在代谢性 CO$_2$ 生成相对稳定时与肺泡通气量成反比。这个近似式说明，高原降低 $P_B$、低通气升高 $P_{a\mathrm{CO}_2}$，都会压低肺泡氧分压，但二者不能由同一种机制解释。肺泡—动脉氧分压差还可帮助区分单纯低吸入氧／低通气与 V/Q 不均、弥散限制或分流，不过具体判读必须同时交代吸入氧、年龄和测量条件。[^alveolar-gas-equation]

气体由高分压处向低分压处净扩散，而不是由“总含量高”处机械地流向“总含量低”处。血红蛋白结合大量 O$_2$ 后，血液总氧含量可以很高，直接建立扩散梯度的却仍是血浆中物理溶解 O$_2$ 所对应的分压。结合态与溶解态迅速再平衡，使血红蛋白能够在分压仅逐步变化时连续装载或释放氧。

## 肺泡—毛细血管屏障把分压差转成通量 { #alveolar-capillary-diffusion }

### 菲克关系同时约束面积、距离与气体性质 { #fick-diffusion }

对一种气体，跨屏障通量可用菲克关系概括：

$$
\dot V_{\mathrm{gas}}=D_{\mathrm{gas}}\frac{A}{T}(P_A-P_c)
$$

$A$ 是可交换面积，$T$ 是有效扩散距离，$P_A-P_c$ 是肺泡与毛细血管之间的分压差；扩散系数 $D_{\mathrm{gas}}$ 近似随气体在组织中的溶解度增加、随分子量平方根增加而减小。CO$_2$ 分子量虽大于 O$_2$，但溶解度高得多，因此穿越同一屏障的扩散能力明显更高。不能只看分子量判断哪种气体“扩散快”。[^respiratory-gas-laws]

所谓肺泡—毛细血管屏障不是一张独立薄膜，而是肺泡表面液层与Ⅰ型肺泡上皮、两侧基底膜及其间质、毛细血管内皮、血浆，直至红细胞膜和血红蛋白的连续路径。间质增厚会增加扩散距离，肺泡隔破坏会减少交换面积；运动时毛细血管募集和扩张、交换面积增大，又可提高整体气体转移能力。肺内巨噬细胞承担清除颗粒和病原相关物的防御任务，但它们并不是构成每一次 O$_2$/CO$_2$ 扩散的固定“膜层”。

### 弥散限制取决于通行时间与平衡速度 { #diffusion-perfusion-limitation }

若血液流出肺毛细血管前已与肺泡气达到分压平衡，继续增加屏障转移能力不会明显增加该单位的摄取，气体交换更受灌流量限制。健康人静息、海平面呼吸空气时，O$_2$ 通常在毛细血管前段就接近平衡；运动缩短毛细血管通行时间后仍常保留一定余量。高海拔降低肺泡氧分压、弥漫性间质病增加屏障距离、肺气肿减少面积，或极高血流缩短通行时间时，O$_2$ 可表现出更显著的弥散限制。[^mechanisms-hypoxemia]

CO 与血红蛋白的亲和力很高，少量吸入 CO 在通过毛细血管时被迅速结合，使毛细血管 CO 分压在测量近似中维持很低。因此单次呼吸 CO 摄取试验以肺泡 CO 的消失估算 $D_{LCO}$。所得值并非一张膜的纯几何参数，还受肺泡容积、血红蛋白浓度、肺毛细血管血容量、吸气与屏气动作及测量条件影响；规范报告需按技术标准完成质量控制和必要校正。[^dlco-standard]

## 通气—灌流匹配决定肺内单位如何合并 { #ventilation-perfusion }

局部肺单位的通气—灌流比写作 $\dot V_A/\dot Q$：分子是到达肺泡、参与交换的通气，分母是流经该单位的血流。以全肺静息平均量估算常得到约 0.8，但这个数不是每个肺泡都应达到的设定点。直立时通气和灌流都从肺尖向肺底增加，灌流的重力梯度通常更陡，因此肺尖单位平均 $\dot V_A/\dot Q$ 较高，肺底较低；健康肺最后输出的是许多不同单位的混合结果。[^vq-relationships]

低 V/Q 单位获得的通气相对不足，肺泡 $P_{\mathrm O_2}$ 下降而 $P_{\mathrm{CO}_2}$ 上升，流出血保留更多静脉血特征。高 V/Q 单位的通气相对过剩，部分通气未充分遇到血流，形成无效腔样效应。两个极端分别是 $\dot V_A/\dot Q=0$ 的分流样单位和 $\dot V_A/\dot Q\to\infty$ 的无效腔单位；其间是连续谱，而不是互不相干的三类肺泡。

低 V/Q 血液与高 V/Q 血液混合后，前者造成的低氧不容易被后者完全抵消。原因不是“氧比 CO$_2$ 扩散慢”这一条，而是高 V/Q 单位的血红蛋白已位于氧解离曲线平台，再提高 $P_{\mathrm O_2}$ 只增加很少的结合氧；相反，CO$_2$ 含量—分压关系在生理范围更接近线性，提高总体通气也可排出更多 CO$_2$。所以局部 V/Q 不均最常见的后果是低氧血症和通气功增加，并非无条件同时出现高碳酸血症；只有整体有效通气不足、代偿失败或病变广泛时，$P_{a\mathrm{CO}_2}$ 才明显升高。[^vq-relationships]

肺泡低氧引起附近肺小动脉收缩，可把部分血流转向通气较好的区域，从而改善局部匹配。这个反应在局灶低通气时有代偿意义，弥漫低氧时却会普遍提高肺血管阻力；完整血流背景见[器官循环](../blood/blood_organ.md#pulmonary-circulation)。

## 分流与静脉掺杂压低动脉氧分压 { #shunt-venous-admixture }

生理性静脉掺杂包括支气管循环的部分静脉回流进入肺静脉，以及少量心最小静脉直接回流左心；正常 V/Q 不均也会扩大肺泡末毛细血管血与体循环动脉血之间的差异。因此，即使换气充分，$P_{a\mathrm O_2}$ 通常仍略低于理想肺泡末毛细血管的氧分压。

真性右向左分流是血液完全绕过有通气的交换单位，或流经完全不通气的肺单位。提高吸入氧能明显提高低 V/Q 单位的肺泡氧分压，因而这类低氧血症通常改善；真性分流中的那部分血液没有接触吸入氧，反应较差。补充氧的反应只是机制线索，不能单凭一次数值替代病因分析。[^mechanisms-hypoxemia]

## 血红蛋白把分压信号放大为氧含量 { #oxygen-carriage }

### 分压、饱和度与含量回答不同问题 { #oxygen-variables }

血中 O$_2$ 一小部分物理溶解，其余与血红蛋白可逆结合。每个血红蛋白四聚体有四个亚铁血红素，最多结合四个 O$_2$；这个过程是氧合，不把 $\mathrm{Fe^{2+}}$ 氧化成 $\mathrm{Fe^{3+}}$。动脉血氧含量可按下式近似：

$$
C_{a\mathrm O_2}=1.34[\mathrm{Hb}]S_{a\mathrm O_2}+0.0031P_{a\mathrm O_2}
$$

当血红蛋白浓度以 g/dL、$P_{a\mathrm O_2}$ 以 mmHg 表示且饱和度写成 0—1 的小数时，$C_{a\mathrm O_2}$ 的单位为 mL O$_2$/dL。1.34 与 0.0031 都是有测量条件的近似系数，不应脱离单位套用。公式也说明，只看 $P_{a\mathrm O_2}$ 会漏掉血红蛋白浓度和异常血红蛋白造成的携氧变化。[^oxygen-content]

| 量 | 主要含义 | 不能单独回答的问题 |
| --- | --- | --- |
| $P_{a\mathrm O_2}$ | 动脉血溶解 O$_2$ 所对应的分压；决定与饱和度的平衡位置 | 每分升血实际带多少氧 |
| $S_{a\mathrm O_2}$ | 可参与测量的血红蛋白氧结合位点中氧合所占比例 | 血红蛋白浓度是否充足；COHb、MetHb 是否被正确区分 |
| $C_{a\mathrm O_2}$ | 结合氧与溶解氧之和 | 每分钟流向组织的血量 |
| $D_{\mathrm O_2}$ | 心输出量与动脉氧含量的乘积 | 各器官如何分配血流、组织是否能利用氧 |
| $S_{\bar v\mathrm O_2}$ | 混合静脉血氧饱和度，反映全身输送与提取的综合结果 | 单个器官的局部缺血位置 |

贫血时 $P_{a\mathrm O_2}$ 和血红蛋白饱和度可以正常，$C_{a\mathrm O_2}$ 却因血红蛋白减少而下降；循环衰竭时三者都可接近正常，单位时间送达组织的氧仍会因血流不足而下降。相反，单纯把 $P_{a\mathrm O_2}$ 降低称为“组织缺氧”也跨过了血红蛋白、心输出量、器官分配和提取多个中间环节。低氧血症与组织缺氧的完整病理整合留给[缺氧](../pathophysiology/hypoxia.md)。

### 氧解离曲线协调肺内装载与组织卸载 { #oxygen-dissociation-curve }

血红蛋白四个位点通过亚基界面相互耦联，氧结合使构象集合从低亲和力 T 态一侧偏向高亲和力 R 态，后续氧更易结合，因而饱和度—氧分压关系呈 S 形。T/R 是描述构象平衡的端点模型，不是每个分子只能在两种刚性形状间瞬间翻转；分子结构、Hill 方程和肌红蛋白对照见[蛋白质功能](../../biochem/protein_function.md#hemoglobin-cooperativity-allostery)。[^oxygen-transport]

曲线高分压段较平，肺泡氧分压在一定范围波动时仍能维持较高饱和度；中低分压段较陡，组织 $P_{\mathrm O_2}$ 下降会释放较大比例的结合氧。$P_{50}$ 是血红蛋白达到 50% 饱和所需的氧分压：$P_{50}$ 增大表示表观亲和力降低、曲线右移，$P_{50}$ 减小则表示亲和力升高、曲线左移。所谓“上段、中段、下段”只是读图区域，不代表血红蛋白分三步独立工作。

代谢活跃组织中 CO$_2$ 与 H$^+$ 增加，使血红蛋白氧亲和力降低并促进卸载，这一耦联是 Bohr 效应。温度升高与 2,3-BPG 增加也使曲线右移，但二者有各自的热力学和别构机制，不能都写成“先增加 H$^+$，再产生 Bohr 效应”。2,3-BPG 由红细胞 Rapoport–Luebering 旁路生成，优先结合去氧 HbA 中央腔并稳定低亲和力状态；其代谢来源见[糖酵解](../../biochem/emp.md#shunts-and-inhibitors)。HbF 的 γ 链使其结合 2,3-BPG 较弱，因而相对 HbA 左移，有利于胎盘氧转移。[^hemoglobin-effectors]

CO 一方面占据亚铁血红素、减少可结合氧的位点，另一方面提高剩余位点的氧亲和力、妨碍组织卸载；因此患者可在 $P_{a\mathrm O_2}$ 并未下降时发生严重组织缺氧。高铁血红蛋白中的 $\mathrm{Fe^{3+}}$ 位点不能结合 O$_2$。普通双波长脉搏血氧法也未必能把氧合血红蛋白与这些异常衍生物可靠区分，异常暴露须结合共氧测定等方法解释。[^dyshemoglobins]

发绀取决于皮肤与黏膜中去氧血红蛋白的绝对量、局部灌流、色素和观察条件，不是氧饱和度的直接读数。红细胞增多时较易出现发绀，重度贫血或 CO 中毒即使组织缺氧也可能不明显；“樱桃红”同样不是敏感而稳定的 CO 中毒标志。[^cyanosis]

## 组织交换把血流输送与细胞消耗闭合 { #tissue-oxygen-exchange }

氧输送量是血流与血氧含量的乘积。若心输出量以 L/min、$C_{a\mathrm O_2}$ 以 mL/dL 表示，则需乘以 10 完成单位换算：

$$
D_{\mathrm O_2}=\mathrm{CO}\times C_{a\mathrm O_2}\times10
$$

全身氧耗可由 Fick 原理连接到动静脉氧含量差：

$$
\dot V_{\mathrm O_2}=\mathrm{CO}(C_{a\mathrm O_2}-C_{\bar v\mathrm O_2})\times10
$$

这两个关系把肺、血液和循环串在一起。组织代谢增强时可增加局部血流、扩大氧提取并降低局部静脉氧含量；心输出量不足时，即使动脉氧含量正常，全身提取率也可能上升而混合静脉饱和度下降。混合静脉值是各器官不同流量与不同提取的加权结果，不能据此定位某个器官。[^oxygen-supply-demand]

系统毛细血管内，O$_2$ 依次从红细胞释放到血浆、跨内皮进入间质，再沿组织分压梯度向细胞和线粒体扩散；CO$_2$ 的净通量方向相反。扩散距离、毛细血管密度、血流异质性和细胞耗氧共同塑造局部分压场。肌红蛋白可在横纹肌细胞内缓冲结合氧并参与向线粒体方向的扩散，但不是一个只有氧耗尽才开启的应急仓库。

## 二氧化碳运输与氧合状态相互耦联 { #carbon-dioxide-transport }

### 三种形式在组织与肺之间连续转换 { #carbon-dioxide-forms }

CO$_2$ 以物理溶解、碳酸氢盐和氨基甲酸化合物三类形式运输。各形式所占比例依动静脉位置、氧合状态、pH、血红蛋白浓度和取样定义改变，因此“5%／88%／7%”之类数字只能是特定条件下的近似，不能当作跨情境常数。溶解 CO$_2$ 直接决定 $P_{\mathrm{CO}_2}$；其余形式作为可逆储库，使血液在分压变化不大的范围内携带更多总 CO$_2$。[^carbon-dioxide-transport]

组织产生的 CO$_2$ 进入红细胞后，碳酸酐酶迅速催化：

$$
\mathrm{CO_2+H_2O\rightleftharpoons HCO_3^-+H^+}
$$

去氧血红蛋白结合一部分 H$^+$，而 AE1（band 3）以电中性方式将细胞内 HCO$_3^-$ 换到血浆、把 Cl$^-$ 换入红细胞，这就是氯转移。它不是 HCO$_3^-$ 和 Cl$^-$ 通过脂双层自由扩散，也不需要假定红细胞“只允许所有小阴离子通过”。血液到达肺后，低 $P_{\mathrm{CO}_2}$ 梯度、氧合和反向 AE1 交换共同推动反应逆转，生成的 CO$_2$ 扩散入肺泡并被通气排出。[^ae1-carbonic-anhydrase]

一部分 CO$_2$ 还与珠蛋白链 N 端氨基形成氨基甲酸盐，而不是结合在血红素的 O$_2$ 位点。去氧血红蛋白比氧合血红蛋白更能结合 H$^+$ 和形成氨基甲酸化合物；组织卸氧因而促进 CO$_2$ 摄取，肺内氧合则促进 CO$_2$ 和 H$^+$ 释放，这一氧合状态对总 CO$_2$ 容量的影响称为 Haldane 效应。Bohr 效应描述 H$^+$／CO$_2$ 如何改变血红蛋白对 O$_2$ 的亲和力，Haldane 效应描述氧合如何改变血液携带 CO$_2$／H$^+$ 的能力，二者方向相互配合，却不是同一个定义。

血液总 CO$_2$ 含量随 $P_{\mathrm{CO}_2}$ 上升而增加，在常见生理范围内比氧解离曲线更接近线性，但“近似线性”不等于永无容量边界。去氧血的 CO$_2$ 解离曲线位于同分压氧合血之上，正是 Haldane 效应在整血尺度的表现。碳酸酐酶抑制剂会改变这一快速转化，但具体药理、适应证与酸碱后果不由本页的一条反应式直接推出。

## 肺以 CO$_2$ 通量参与酸碱稳态 { #respiratory-acid-base }

机体每日代谢产生的大量 CO$_2$ 与水形成可挥发酸体系，肺通过改变肺泡通气在分钟尺度调节 $P_{a\mathrm{CO}_2}$；肾则处理固定酸排出、HCO$_3^-$ 重吸收与新生。所谓“肺排酸”主要指清除 CO$_2$，不能据此把所有酸性代谢产物都归入呼气排出。呼吸调节如何感知 CO$_2$/H$^+$ 并改变通气，见[呼吸调节与环境适应](regulation.md)；酸碱变量及代偿判读见[酸碱平衡紊乱](../pathophysiology/acid_base.md)。

动脉血气直接测得的核心量通常包括 pH、$P_{a\mathrm O_2}$ 与 $P_{a\mathrm{CO}_2}$，HCO$_3^-$ 等项目常由规定模型计算或结合电解质方法报告。血气结果必须与吸入氧、肺泡通气、血红蛋白及循环状态一起解释；pH 落在参考区间不等于没有酸碱紊乱，也不能把存在代偿的原发性酸中毒命名为“代偿性酸中毒”。

## 参考资料与延伸阅读 { #references }

- Pittman, R. N. [The Respiratory System and Oxygen Transport](https://www.ncbi.nlm.nih.gov/books/NBK54114/) 与 [Oxygen Transport](https://www.ncbi.nlm.nih.gov/books/NBK54103/). *Regulation of Tissue Oxygenation* (2011).
- Petersson, J. & Glenny, R. W. [Gas exchange and ventilation-perfusion relationships in the lung](https://pubmed.ncbi.nlm.nih.gov/25063240/). *European Respiratory Journal* 44, 1023–1041 (2014).
- Graham, B. L. et al. [2017 ERS/ATS standards for single-breath carbon monoxide uptake in the lung](https://pubmed.ncbi.nlm.nih.gov/28049168/). *European Respiratory Journal* 49, 1600016 (2017).
- Pittman, R. N. [Matching Oxygen Supply to Oxygen Demand](https://www.ncbi.nlm.nih.gov/books/NBK54115/). *Regulation of Tissue Oxygenation* (2011).
- Jennings, M. L. [Cell physiology and molecular mechanism of anion transport by erythrocyte band 3/AE1](https://pmc.ncbi.nlm.nih.gov/articles/PMC8714990/). *American Journal of Physiology—Cell Physiology* 321, C1028–C1059 (2021).

[^respiratory-gas-laws]: NCBI Bookshelf, [The Respiratory System and Oxygen Transport](https://www.ncbi.nlm.nih.gov/books/NBK54114/)。该章从气体定律、湿化到菲克扩散关系建立肺内气体交换的物理基础。
[^alveolar-gas-equation]: NCBI Bookshelf, [Alveolar Gas Equation](https://www.ncbi.nlm.nih.gov/books/NBK482268/)。完整方程在高吸入氧等条件下还包含校正项，正文使用的是教学中常见的近似式。
[^mechanisms-hypoxemia]: Sarkar, M. et al. [Mechanisms of hypoxemia](https://pmc.ncbi.nlm.nih.gov/articles/PMC5234199/). *Lung India* 34, 47–60 (2017)。综述比较低吸入氧、低通气、弥散限制、V/Q 不均和分流，并说明低 V/Q 与真性分流对补充氧的不同反应。
[^dlco-standard]: Graham, B. L. et al. [2017 ERS/ATS standards for single-breath carbon monoxide uptake in the lung](https://publications.ersnet.org/content/erj/49/1/1600016). *European Respiratory Journal* 49, 1600016 (2017)。标准同时说明 $D_{LCO}$ 的测量假设、单位、动作质量和影响因素。
[^vq-relationships]: Petersson, J. & Glenny, R. W. [Gas exchange and ventilation-perfusion relationships in the lung](https://pubmed.ncbi.nlm.nih.gov/25063240/). *European Respiratory Journal* 44, 1023–1041 (2014)。作者指出高 V/Q 所致浪费通气常表现为分钟通气和呼吸功增加，而非必然高碳酸血症。
[^oxygen-content]: Sarkar, M. et al. [Mechanisms of hypoxemia](https://pmc.ncbi.nlm.nih.gov/articles/PMC5234199/)。文中给出 $C_{a\mathrm O_2}=1.34[\mathrm{Hb}]S_{a\mathrm O_2}+0.0031P_{a\mathrm O_2}$ 的近似，并区分低氧血症与组织缺氧。
[^oxygen-transport]: Pittman, R. N. [Oxygen Transport](https://www.ncbi.nlm.nih.gov/books/NBK54103/)。该章系统讨论气体扩散、血红蛋白协同性、$P_{50}$、Bohr 效应、2,3-BPG 与 CO。
[^hemoglobin-effectors]: Kaufman, D. P. et al. [Physiology, Oxyhemoglobin Dissociation Curve](https://www.ncbi.nlm.nih.gov/books/NBK499818/)；蛋白质结构层面的交叉核验见 [Hemoglobin: Structure, Function and Allostery](https://pmc.ncbi.nlm.nih.gov/articles/PMC7370311/)。
[^dyshemoglobins]: NCBI Bookshelf, [Oxygen Transport](https://www.ncbi.nlm.nih.gov/books/NBK54103/) 与 [Methemoglobinemia](https://www.ncbi.nlm.nih.gov/books/NBK537317/)。两者分别说明 CO 对容量和剩余位点亲和力的双重影响，以及高铁血红蛋白的氧结合与测量边界。
[^cyanosis]: NCBI Bookshelf, [Cyanosis](https://www.ncbi.nlm.nih.gov/books/NBK367/)。经典的 5 g/dL 去氧血红蛋白可见阈值并未被精密方法严格确证，故正文不把它写成诊断常数。
[^oxygen-supply-demand]: Pittman, R. N. [Matching Oxygen Supply to Oxygen Demand](https://www.ncbi.nlm.nih.gov/books/NBK54115/)。该章以 Fick 原理连接动脉输入、静脉输出、血流与组织氧耗。
[^carbon-dioxide-transport]: NCBI Bookshelf, [Physiology, Carbon Dioxide Transport](https://www.ncbi.nlm.nih.gov/books/NBK532988/)。其中的比例是生理条件下的近似；正文强调运输形式会随氧合、pH 与取样位置变化。
[^ae1-carbonic-anhydrase]: Jennings, M. L. [Cell physiology and molecular mechanism of anion transport by erythrocyte band 3/AE1](https://pmc.ncbi.nlm.nih.gov/articles/PMC8714990/). *American Journal of Physiology—Cell Physiology* 321, C1028–C1059 (2021)；Swietach, P. et al. [Hydrogen ion dynamics in human red blood cells](https://pmc.ncbi.nlm.nih.gov/articles/PMC3036193/). *Journal of Physiology* 588, 4995–5014 (2010)。
