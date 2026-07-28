# 肾小球滤过与肾小管转运

肾脏并不是把血浆简单“滤成尿”。肾小球先以较高通量生成超滤液，肾小管再沿肾单位逐段取回水、Na$^+$、HCO$_3^-$、葡萄糖和氨基酸等物质，同时把 H$^+$、NH$_4^+$、有机离子和部分药物由血液或上皮细胞送入管腔。最终排泄量由三个通量共同决定：

$$
\text{排泄率}=\text{滤过负荷}+\text{分泌率}-\text{重吸收率}.
$$

滤过决定进入肾小管的起始负荷，分段转运决定多少被保存、多少被排出。二者还通过管球反馈、肾小球—肾小管平衡和激素调节相互耦联。本页先讨论这一“滤过—转运”主线；肾单位的器官位置与集合系统见[泌尿生理总论](index.md)，髓质渗透梯度、尿液浓缩稀释和清除率则由[尿液浓缩、稀释与肾清除](concentration_clearance.md)继续展开。

## 肾血浆流量限定了可供滤过的血浆 { #renal-plasma-flow }

肾血流量（RBF）包括血细胞和血浆，真正进入肾小球超滤计算的是肾血浆流量（RPF）。血细胞比容为 $Hct$ 时，两者近似满足

$$
\mathrm{RPF}=\mathrm{RBF}(1-Hct).
$$

肾小球滤过率（GFR）是两肾所有肾小球单位时间形成超滤液的总和，滤过分数则为

$$
\mathrm{FF}=\frac{\mathrm{GFR}}{\mathrm{RPF}}.
$$

一个可自由滤过溶质的滤过负荷等于 GFR 与其血浆水浓度之积。若溶质与血浆蛋白结合，计算时还要乘以未结合、可滤过的比例；把总血浆浓度直接代入会高估滤过负荷。细胞不进入正常超滤液，大分子蛋白受到强烈限制，但“超滤液等于去掉血细胞和全部蛋白的血浆”仍过于绝对：少量白蛋白和低分子量蛋白可以通过屏障，随后由近端小管的 cubilin—megalin 内吞系统大量回收。[^filtered-load]

RBF、RPF、GFR 和 FF 回答的是不同问题。血流量高并不意味着相同比例都会滤出，GFR 相近也不保证肾小球后毛细血管的蛋白浓度和重吸收条件相同。肾血流的皮质—髓质分配及供氧边界见[器官循环](../blood/blood_organ.md#renal-circulation)。

## 滤过由跨屏障压力与滤过系数共同决定 { #glomerular-starling-forces }

单个肾小球的滤过可用 Starling 力近似。把沿毛细血管变化的压力取适当平均后，整体关系写为

$$
\mathrm{GFR}=K_f\left[(P_{GC}-P_{BS})-(\pi_{GC}-\pi_{BS})\right].
$$

$P_{GC}$ 是肾小球毛细血管液压，$P_{BS}$ 是 Bowman 囊腔液压；$\pi_{GC}$ 和 $\pi_{BS}$ 分别是两侧胶体渗透压。健康状态下 Bowman 囊液蛋白很少，$\pi_{BS}$ 通常近似为零。$K_f$ 是滤过系数，由可用滤过表面积与屏障水力传导性共同决定。沿毛细血管从入球端走向出球端，水不断离开而蛋白留在血浆中，$\pi_{GC}$ 随之上升，局部净滤过压因而逐渐减小；不能用一个不变的“毛细血管压减肾小管压”概括整个过程。[^glomerular-hemodynamics]

入球与出球小动脉位于肾小球毛细血管两端，改变任一处阻力都会同时影响肾血浆流量和 $P_{GC}$。入球收缩通常降低二者；适度出球收缩可在降低血浆流量的同时维持或提高 $P_{GC}$，但收缩继续增强时，血浆流量下降和沿程胶体渗透压升高会抵消这一作用，GFR 可能转而下降。因此，“血管紧张素 II 只收缩出球小动脉并必然升高 GFR”不是普遍规则；剂量、容量状态和两段血管的基础张力都很重要。

肾灌注压变化时，入球小动脉的肌源性反应与致密斑介导的管球反馈共同缓冲肾血流和单肾单位 GFR。到达致密斑的 NaCl 增多时，NKCC2 介导的摄取增加，ATP／腺苷等旁分泌信号倾向于收缩入球小动脉并抑制肾素；NaCl 递送减少时，NO、前列腺素和肾素通路的权重增加。这个反馈把远端负荷送回肾小球，却没有一个适用于所有生理状态的固定压力平台，也不保证把每次扰动完全恢复到原值。[^macula-densa]

## 滤过屏障是三个相互依赖的动态层次 { #filtration-barrier }

血浆水要从毛细血管进入 Bowman 囊，依次面对带有表面糖萼的有窗内皮、肾小球基底膜（GBM）以及足细胞足突之间的裂隙膜。内皮表面层限制血细胞和部分大分子靠近孔窗；GBM 的胶原 IV、层粘连蛋白等网络同时提供机械支撑和分子筛环境；足细胞骨架、足突和 nephrin 等组成的裂隙膜维持毛细血管袢外侧的最后一道专门化界面。任何一层受损都可能增加蛋白通透，因而不能把选择性全部归给 GBM 或裂隙膜。[^filtration-barrier]

屏障对分子大小、形状、可变形性以及与表面层和基质的相互作用具有选择性。早期模型常把负电荷写成排斥白蛋白的独立、固定屏障，但实验对“电荷选择性”的贡献大小并未形成如此简单的结论；描述正常屏障时，应保留三层结构、血流动力学和近端小管蛋白回收的共同作用。

系膜细胞及其基质位于毛细血管袢之间，支撑肾小球结构、清除局部大分子并响应收缩与炎症信号；它们改变有效滤过表面积的能力是 $K_f$ 调节的一部分，却不能简化成一种位于屏障上的“平滑肌样吞噬细胞”。滤过表面积、足细胞张力、内皮表面层和毛细血管压力相互影响，使屏障更接近持续重塑的工作界面，而不是静止筛网。

## 分段转运把同一管腔液连续改写 { #segmental-transport }

肾小管上皮具有明确极性。基底外侧 Na$^+$/K$^+$-ATPase 持续降低细胞内 Na$^+$，为许多顶端 Na$^+$ 同向转运和 Na$^+$/H$^+$ 交换提供能量；溶质随后经基底外侧载体进入间质和管周毛细血管。水沿渗透梯度经水通道或细胞旁路径移动，部分溶质还会随水发生溶剂拖曳。这个跨上皮能量接力建立在[极性上皮矢量运输](../membrane_dynamics.md#epithelial-transport)的一般原理上。[^nephron-sodium]

| 肾单位区段 | 突出的顶端转运结构 | 水通透性与电学特征 | 主要任务 |
| --- | --- | --- | --- |
| 近端小管 | NHE3、SGLT2／SGLT1、氨基酸和磷酸盐同向转运体；cubilin—megalin 内吞 | AQP1 与较通透的细胞旁通路使水紧随溶质，管液多保持近等渗 | 大宗回收 NaCl、水、HCO$_3^-$、葡萄糖、氨基酸和小分子蛋白；生成并分泌 NH$_4^+$，处理有机离子 |
| 髓袢细降支 | 以 AQP1 等水通路为主 | 水通透性高，溶质通透性与区域、物种有关 | 使管液随髓质环境浓缩，并向粗升支递送负荷 |
| 髓袢粗升支 | NKCC2、ROMK | 对水通透性低；K$^+$ 回漏形成腔正电位 | 回收 NaCl，细胞旁回收 Ca$^{2+}$、Mg$^{2+}$；生成稀释性管液并参与髓质梯度 |
| 远曲小管早段 | NCC；Ca$^{2+}$ 通路 TRPV5 | 对水通透性低 | 继续回收 NaCl；精细调节 Ca$^{2+}$ |
| 远曲小管晚段、连接小管与集合管 | 主细胞 ENaC、ROMK／BK、AQP2；插入细胞 H$^+$-ATPase、H$^+$/K$^+$-ATPase、pendrin | 水通透性受血管加压素调节；ENaC 造成的腔负电位利于 K$^+$ 分泌 | 最终匹配 Na$^+$、K$^+$、水和酸碱排泄与摄入、容量及渗透需要 |

### 近端小管承担大宗回收与跨器官物质交换 { #proximal-tubule }

近端小管顶端 NHE3 以 Na$^+$ 内流换取 H$^+$ 分泌。管腔 H$^+$ 与滤过的 HCO$_3^-$ 形成 H$_2$CO$_3$，经碳酸酐酶加速转为 CO$_2$ 和 H$_2$O；CO$_2$ 入胞后反向生成 HCO$_3^-$，再主要由基底外侧 NBCe1 送入间质。这里回收的是已滤过 HCO$_3^-$，不等同于净生成新的 HCO$_3^-$。Cl$^-$、水、尿素及多种溶质沿轴向浓度变化，经跨细胞和细胞旁路径继续移动。近端重吸收因而是多通路协作，不存在教材旧图所示的统一“顶端 Na$^+$/K$^+$ 交换器”。

葡萄糖在早段主要经高容量 SGLT2、在较后段经高亲和力 SGLT1 随 Na$^+$ 入胞，再分别以 GLUT2、GLUT1 等由基底外侧离开。健康、正常负荷下几乎全部滤过葡萄糖被回收；当滤过负荷逐渐接近各肾单位转运容量时，重吸收曲线开始弯折并出现尿糖。最大转运量 $T_m$ 是整群肾单位的饱和容量，肾糖阈则是尿中开始可检测到葡萄糖时的血浆浓度。两者受 GFR、性别、肾单位异质性、疾病和药物影响；不同肾单位并非同时饱和，因而从最早尿糖到总体 $T_m$ 之间形成渐进的“拖尾”（splay），不能用一个固定的 180 mg/dL 或 375 mg/min 作为所有人的硬界线。[^renal-glucose]

### 髓袢与远曲小管分离溶质回收和水回收 { #loop-distal-tubule }

粗升支顶端 NKCC2 将 Na$^+$、K$^+$ 和 2Cl$^-$ 同向带入细胞，ROMK 把部分 K$^+$ 返回管腔以维持转运，基底外侧 ClC-K 通道等完成 Cl$^-$ 外流。由此形成的腔正电位促进 Ca$^{2+}$ 和 Mg$^{2+}$ 细胞旁回收。该段对水通透性低，所以溶质离开而水不等量跟随，管液逐渐被稀释。早段远曲小管再由 NCC 回收 NaCl，同样具有较低水通透性。

Ca$^{2+}$ 的大宗回收在近端小管与粗升支主要走细胞旁路径；真正受精细调节的跨细胞入口集中在远曲小管，以顶端 TRPV5、胞内钙结合蛋白以及基底外侧 NCX1 和 PMCA 接力。甲状旁腺激素、活性维生素 D 及粗升支的 CaSR 信号可改变不同区段的钙转运，具体全身反馈见[钙磷调节](../endo/endo_capi.md)。把 Ca$^{2+}$ 的肾处理只归给远曲小管，会遗漏前段的大宗通量；把前段比例写成固定常数，又会遮蔽容量、NaCl 转运和激素状态的影响。[^renal-calcium]

### 远端肾单位完成钠钾与酸碱的最终配平 { #aldosterone-sensitive-distal-nephron }

远曲小管晚段、连接小管和皮质集合管构成醛固酮敏感远端肾单位。主细胞以顶端 ENaC 回收 Na$^+$，基底外侧 Na$^+$/K$^+$-ATPase 把 Na$^+$ 送回血液并使 K$^+$ 入胞；ENaC 的生电性 Na$^+$ 内流造成腔负电位，推动 K$^+$ 经 ROMK 分泌。高管腔流量还可招募 BK 通道。K$^+$ 排泄量因此取决于远端 Na$^+$ 递送、管流、血浆 K$^+$、醛固酮和通道活性，而不是由某个单一酸碱箭头决定。K$^+$ 缺乏时，分泌减弱，部分插入细胞的 H$^+$/K$^+$-ATPase 还可增加 K$^+$ 回收。[^renal-potassium]

主细胞顶端 AQP2 的膜插入受血管加压素 V$_2$ 受体信号调节，水随后经基底外侧 AQP3／AQP4 离开；这一步只有在髓质渗透梯度存在时才能产生强水回收。AQP2 并不是 Na$^+$ 转运体，血管加压素也不是靠“直接把水泵出管腔”工作。梯度如何建立、尿素如何参与以及抗利尿和水利尿的完整过程见[尿液浓缩、稀释与肾清除](concentration_clearance.md)。

$\alpha$ 型插入细胞以顶端 H$^+$-ATPase 和 H$^+$/K$^+$-ATPase 分泌酸，基底外侧 AE1 把 HCO$_3^-$ 送回血液；$\beta$ 型插入细胞则把 H$^+$-ATPase 放在基底外侧，并以顶端 pendrin 交换 Cl$^-$ 与 HCO$_3^-$，能够向管腔分泌碱。两类细胞的位置与蛋白极性不同，不能把集合管的 HCO$_3^-$ 处理都归给主细胞，也不能把插入细胞写成只会单向排酸的固定类型。[^intercalated-cells]

## 新生成的碳酸氢盐与铵排泄彼此相连 { #ammonium-acid-excretion }

机体每天产生的非挥发性酸不能只靠回收滤过 HCO$_3^-$ 处理。近端小管分解谷氨酰胺可生成 NH$_4^+$ 和 HCO$_3^-$；NH$_4^+$ 经 NHE3 等进入管腔，HCO$_3^-$ 经基底外侧进入血液。只有当相应含氮产物最终随尿排出时，这个过程才为全身增加“新”HCO$_3^-$；若氨回到肾静脉并在肝内用于尿素合成，生成 HCO$_3^-$ 的收益会被消耗。它由此闭合了[氨基酸分解中的器官间氮运输](../../biochem/pr_aa_catabolism.md#nitrogen-collection-transport)在肾脏的末端。[^renal-ammonia]

NH$_4^+$ 可在粗升支替代 K$^+$ 进入 NKCC2，进入髓质间质后又以 NH$_3$／NH$_4^+$ 形式循环；集合管的 Rhcg 等蛋白促进 NH$_3$ 跨膜，分泌的 H$^+$ 将其质子化并使 NH$_4^+$ 留在管腔。传统“NH$_3$ 任意自由扩散、NH$_4^+$ 完全不能过膜”的离子陷阱模型只保留了酸碱平衡的一部分，遗漏了 NKCC2、NHE3、Rh 糖蛋白和 K$^+$ 通路参与的专门转运。滴定酸和 NH$_4^+$ 排泄共同构成净酸排泄的重要部分；酸碱指标和紊乱判读由[酸碱平衡紊乱](../pathophysiology/acid_base.md)承接。

## 尿酸和有机离子经历双向、可竞争的近端转运 { #organic-solute-secretion }

尿酸盐可经肾小球滤过，却在近端小管同时发生重吸收和分泌。重吸收侧包括顶端 URAT1 与基底外侧 GLUT9；分泌侧可由基底外侧 OAT1／OAT3 把尿酸盐带入细胞，再由顶端 ABCG2、NPT1／NPT4、MRP4 等送入管腔。最终尿酸排泄是多个方向相反、底物相互影响的通量之和，不能画成“先全部重吸收、再由一种载体分泌”的固定流水线。尿酸的生成、肠排泄和物种边界见[核酸降解与核苷酸分解代谢](../../biochem/na_catabolism.md#urate-homeostasis)。[^urate-transport]

近端小管还用一组底物范围相互重叠的载体清除内源代谢物、毒素和药物。许多有机阴离子由基底外侧 OAT1／OAT3 摄取，再经顶端 MRP 等外排；有机阳离子可由基底外侧 OCT2 摄取，并由顶端 MATE1／MATE2-K 等以 H$^+$ 交换方式排入管腔。载体会饱和，不同底物还会竞争，因此“分泌”既能使某些物质的清除高于单纯滤过，也可能因竞争而改变另一物质的排泄。肌酐除滤过外还有少量小管分泌，酚红则是历史上观察肾血浆流和小管分泌的外源示踪物；它们的定量清除关系留到下一页。[^organic-ion-transport]

## 分段调节使滤过负荷与最终排泄解耦 { #integrated-regulation }

GFR 上升时，近端小管常随之增加绝对重吸收，使被重吸收的比例在一定范围内相对稳定，称肾小球—肾小管平衡。滤过分数改变会重塑出球后管周毛细血管的胶体渗透压和液压，流量、溶质递送及细胞转运也共同参与。这个现象不意味着近端小管永远固定回收某个百分比，更不等同于致密斑把远端 NaCl 信息反馈给肾小球的管球反馈。前者主要限制近端负荷波动向下游传播，后者主要调节单肾单位滤过，两条机制在完整肾脏中同时工作。[^nephron-sodium]

[肾素—血管紧张素—醛固酮系统](../blood/blood_regulation.md#raas)把灌流、致密斑信号、血管阻力和远端 Na$^+$ 保存连在一起；交感神经可同时改变肾血流、肾素和小管转运；ANP 倾向于促进排钠；PTH 调节磷酸盐与 Ca$^{2+}$；血管加压素主要把水通透性与渗透、容量信号相接。这些激素并非分别开关一个孤立区段，而是在不同时间尺度上移动整条肾单位的负荷分配。

利尿剂常被用来识别分段转运，但其临床剂量和适应证不属于本页。袢利尿剂抑制粗升支 NKCC2，噻嗪类抑制远曲小管 NCC，阿米洛利类抑制远端 ENaC，醛固酮受体拮抗剂改变相同远端系统的转录调节，碳酸酐酶抑制剂则减少近端 HCO$_3^-$ 回收。Na$_2$SO$_4$ 不是 NKCC2 的竞争性抑制剂；不可重吸收溶质造成的渗透性利尿与专一阻断载体是两类机制。[^diuretic-sites]

## 渗透性利尿与水利尿改变的并非同一环节 { #osmotic-water-diuresis }

滤过液中存在较多不可重吸收溶质时，管腔渗透活性升高，水重吸收受限并使远端流量增加，形成渗透性利尿。超过转运容量的葡萄糖、某些外源渗透物或被阻断后留在管腔的电解质都可参与；结果常同时增加水和溶质排泄。此时尿量增加并不是因为一种溶质“把水主动拉出细胞”，而是跨上皮水化学势差和沿程转运被重新分配。

水利尿则以排出相对较多的水、较少溶质为特征，常见起点是血浆渗透压下降抑制血管加压素，使集合管 AQP2 减少、对水通透性降低。它不需要 GFR 显著升高，也不能解释为“血浆有效渗透压下降所以肾小球多滤水”。尿量最终还取决于可供排出的自由水、髓质梯度、远端递送和 GFR；这些条件将在下一页用自由水清除和尿液稀释能力统一表达。

## 参考资料与延伸阅读 { #references }

- Pollak MR, Quaggin SE, Hoenig MP, Dworkin LD. [The Glomerulus: The Sphere of Influence](https://pmc.ncbi.nlm.nih.gov/articles/PMC4123398/). *Clinical Journal of the American Society of Nephrology*. 2014;9:1461–1469.
- Jarad G, Miner JH. [Update on the glomerular filtration barrier](https://pmc.ncbi.nlm.nih.gov/articles/PMC2895306/). *Current Opinion in Nephrology and Hypertension*. 2009;18:226–232.
- Palmer LG, Schnermann J. [Integrated Control of Na Transport along the Nephron](https://pmc.ncbi.nlm.nih.gov/articles/PMC4386267/). *Clinical Journal of the American Society of Nephrology*. 2015;10:676–687.
- Peti-Peterdi J, Harris RC. [Macula Densa Sensing and Signaling Mechanisms of Renin Release](https://pmc.ncbi.nlm.nih.gov/articles/PMC4577295/). *Journal of the American Society of Nephrology*. 2010;21:1093–1096.
- Vallon V. [Glucose transporters in the kidney in health and disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC7483786/). *Pflügers Archiv*. 2020;472:1345–1370.
- Weiner ID, Verlander JW. [Renal Ammonia Metabolism and Transport](https://pmc.ncbi.nlm.nih.gov/articles/PMC4319187/). *Comprehensive Physiology*. 2013;3:201–220.
- Chang JH, Kim S. [Role of Pendrin in Acid-base Balance](https://pmc.ncbi.nlm.nih.gov/articles/PMC3041483/). *Electrolyte & Blood Pressure*. 2009;7:20–24.
- Youn JH, McDonough AA. [Recent Advances in Understanding Integrative Control of Potassium Homeostasis](https://pmc.ncbi.nlm.nih.gov/articles/PMC4946439/). *Annual Review of Physiology*. 2009;71:381–401.
- Hanna RM, et al. [Calcium Transport in the Kidney and Disease Processes](https://pmc.ncbi.nlm.nih.gov/articles/PMC8922474/). *Frontiers in Endocrinology*. 2021;12:762130.
- Chung S, Kim GH. [Urate Transporters in the Kidney: What Clinicians Need to Know](https://pmc.ncbi.nlm.nih.gov/articles/PMC8267069/). *Electrolyte & Blood Pressure*. 2021;19:1–9.
- Nigam SK, et al. [Handling of Drugs, Metabolites, and Uremic Toxins by Kidney Proximal Tubule Drug Transporters](https://pmc.ncbi.nlm.nih.gov/articles/PMC4633783/). *Clinical Journal of the American Society of Nephrology*. 2015;10:2039–2049.
- Bell R, Mandalia R. [Diuretics and the kidney](https://pmc.ncbi.nlm.nih.gov/articles/PMC9125415/). *BJA Education*. 2022;22:216–223.
- Hall JE, Hall ME. [Guyton and Hall Textbook of Medical Physiology, 15th ed.](https://evolve.elsevier.com/cs/product/9780443111013?role=student). Elsevier, 2025.
- Boron WF, Boulpaep EL. [Medical Physiology, 3rd ed.](https://evolve.elsevier.com/cs/product/9781455743773?role=faculty). Elsevier, 2016.

[^filtered-load]: 可滤过比例、少量蛋白通过屏障及近端小管 cubilin—megalin 回收的边界参见 Jarad 与 Miner 的[滤过屏障综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC2895306/)及 Dickson 等的[近端小管白蛋白处理综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9255719/)。
[^glomerular-hemodynamics]: 肾小球 Starling 力、$K_f$、血浆流量以及入球—出球阻力对单肾单位 GFR 的联合影响参见 Pollak 等的[肾小球综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4123398/)。
[^macula-densa]: 致密斑 NKCC2 感知、ATP／腺苷、NO／前列腺素和肾素释放的关系参见 Peti-Peterdi 与 Harris 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4577295/)；肌源性反应与肾血流自身调节的整合见 Edwards 与 Kurtcuoglu 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9338895/)。
[^filtration-barrier]: 内皮糖萼、GBM、足细胞裂隙膜的共同作用及电荷选择性争议参见 Jarad 与 Miner 的[更新综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC2895306/)。
[^nephron-sodium]: 肾单位分段 Na$^+$ 转运、肾小球—肾小管平衡与管球反馈的区分参见 Palmer 与 Schnermann 的[综合综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4386267/)。
[^renal-glucose]: SGLT2／SGLT1 的轴向分工、转运上限及肾单位异质性所致 splay 参见 Vallon 的[肾葡萄糖转运综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC7483786/)。
[^renal-calcium]: 近端小管、粗升支与远曲小管的 Ca$^{2+}$ 通路及激素调节参见 Hanna 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8922474/)。
[^renal-potassium]: 近端大宗回收、ENaC—ROMK 耦联、流量依赖性 BK 通路和 K$^+$ 适应参见 Youn 与 McDonough 的[综合综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4946439/)。
[^intercalated-cells]: $\alpha$／$\beta$ 型插入细胞的 H$^+$-ATPase、AE1 与 pendrin 极性参见 Chang 与 Kim 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC3041483/)。
[^renal-ammonia]: 近端谷氨酰胺分解、NH$_4^+$／HCO$_3^-$ 生成、髓袢循环和 Rhcg 介导集合管转运参见 Weiner 与 Verlander 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4319187/)。
[^urate-transport]: URAT1／GLUT9 重吸收与 OAT、ABCG2、NPT、MRP 分泌通路参见 Chung 与 Kim 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC8267069/)。
[^organic-ion-transport]: OAT1／OAT3、OCT2、MATE 与 ABC 转运体的底物重叠、饱和和竞争参见 Nigam 等的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC4633783/)。
[^diuretic-sites]: 不同利尿剂的管腔靶点、蛋白结合药物经近端分泌到达作用位点的机制参见 Bell 与 Mandalia 的[综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC9125415/)。
