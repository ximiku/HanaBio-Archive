# 植物呼吸与全株碳收支

植物呼吸作用（plant respiration）把糖、有机酸、脂质等底物中的电子汇入线粒体电子传递链，并把释放的自由能分配给 ATP 合成、物质转化和热。它不是只在夜间发生的光合作用“逆反应”：白天的绿色叶片仍在呼吸，根、茎、花、果实和种子等非绿色器官也要依靠输入或储存的有机碳维持代谢。

呼吸速率随器官功能、发育阶段、底物、温度和氧供应改变。理解整株碳收支，既要知道电子从哪里进入线粒体、经过哪条支路，也要区分碳被用于合成新组织、维持现有结构，还是在缺氧、成熟和采后损伤中改走其他路线。本页从植物特有的呼吸网络进入昼夜碳预算；叶绿体怎样固定并输出有机碳，见[光合作用](photosynthesis_respiration.md)。

## 植物呼吸把有机碳接入能量与合成网络 { #plant-respiration }

### 糖酵解、三羧酸循环与磷酸戊糖途径 { #respiratory-carbon-pathways }

叶片输出的蔗糖、夜间降解的淀粉以及库器官储藏物先转成己糖磷酸。植物在胞质和质体中都有糖酵解同工系统，把碳流导向磷酸烯醇式丙酮酸与丙酮酸；线粒体丙酮酸脱氢酶生成乙酰-CoA，三羧酸循环再产生 NADH、泛醇和有机酸骨架。反应化学分别见[糖酵解](../../biochem/emp.md#glycolytic-pathway)与[三羧酸循环](../../biochem/tca_cycle.md#tca-entry-compartment)。

植物三羧酸循环既供电子，也向氨基酸、四吡咯和其他合成途径输出有机酸；光下叶片的循环可呈非循环或分支通量，不能以黑暗异养组织的一套闭合计量代表全部状态。胞质与质体氧化磷酸戊糖途径提供 NADPH 和五碳糖，在伤害、盐旱、衰老或快速合成时常增强，但它并非只在“逆境”才运行。

缺氧时电子传递链受限，糖酵解仍可通过乳酸脱氢酶或丙酮酸脱羧酶—乙醇脱氢酶再生 NAD$^+$。许多植物组织早期可短暂积累乳酸，随后乙醇发酵占比提高；实际组合受组织、pH、底物和缺氧程度影响。发酵只能回收糖酵解的少量 ATP，水稻等耐涝植物的存活还依赖通气组织、糖供应、代谢抑制和复氧修复。萌发油料种子的脂肪酸先在过氧化物酶体分解，再经乙醛酸循环保留碳用于糖异生，见[植物乙醛酸循环](../../biochem/other_glc_pathway.md#plant-compartments)。

### 线粒体电子传递的植物支路 { #plant-mitochondrial-electron-transport }

植物线粒体保留复合物 I—III—IV 的细胞色素主路：NADH 经复合物 I、泛醌、复合物 III、细胞色素 *c* 和复合物 IV 把电子交给 O$_2$，复合物 I、III、IV 建立质子动力势，ATP 合酶利用质子回流。琥珀酸脱氢酶和多种其他脱氢酶也把电子送入泛醌池。呼吸链、质子计量和抑制剂的通用化学见[电子传递与氧化磷酸化](../../biochem/oxp.md#electron-transport-chain)。

植物另有位于内膜两侧的 II 型 NAD(P)H 脱氢酶，可把基质或胞质侧 NAD(P)H 的电子直接交给泛醌而不泵质子；替代氧化酶（alternative oxidase, AOX）则从泛醇取得电子并直接把 O$_2$ 还原为水，绕过复合物 III 与 IV，同样不在这一段泵质子。若电子先经过复合物 I，前段仍可保存部分能量；若由非耦联替代脱氢酶进入再经 AOX 离开，ATP 产率更低。[^plant-respiration]

| 电子路线 | 跨膜耦联 | 主要生理后果 |
| --- | --- | --- |
| 复合物 I → III → IV | 三处质子转移 | 在底物、ADP 和氧适宜时具有较高 ATP 回收 |
| 替代 NAD(P)H 脱氢酶 → III → IV | 绕过复合物 I | 氧化特定侧的 NADH/NADPH，降低每对电子的质子泵出量 |
| 复合物 I → AOX | 只保留复合物 I 的质子泵 | 缓解泛醌池过度还原，牺牲部分 ATP 回收 |
| 替代脱氢酶 → AOX | 这两段均不泵质子 | 形成低耦联电子出口，支持氧化还原平衡与特定热生成 |

AOX 可在过量还原力、寒冷、病原或其他胁迫下限制泛醌池过度还原，并与叶绿体输出和光呼吸 NADH 交换相互作用；某些天南星科等产热花序大量使用替代呼吸，把自由能转成热并帮助挥发气味。AOX 也参与果实成熟等代谢重排，但它并非只有细胞色素主路“饱和”后才被动开启，也不能一概等同于抗逆或增产。氰化物对复合物 IV、SHAM 对 AOX 的差异常用于离体测定，但 SHAM 还影响其他酶，仅凭抑制剂敏感性不能精确计算活体支路通量。

### 其他耗氧酶与呼吸商 { #other-oxidases-rq }

植物还有许多不属于线粒体呼吸链的耗氧反应。质体中的多酚氧化酶在组织破损后接触液泡酚类，参与马铃薯、苹果等切面褐变以及茶叶加工中的酚氧化；质外体抗坏血酸氧化酶改变抗坏血酸氧化还原状态；过氧化物酶体乙醇酸氧化酶属于光呼吸。它们会影响 O$_2$ 消耗、颜色或信号，却不能并列称为“呼吸链末端氧化系统”，加工中促进红茶氧化或抑制绿茶褐变也主要是组织破坏、温度和酶底物接触的控制问题。

呼吸商（respiratory quotient, RQ）定义为 CO$_2$ 释放与 O$_2$ 吸收的摩尔比。完全氧化糖时理论值约为 1，较还原的脂质常低于 1，有机酸可能高于 1；蛋白质、混合底物、硝酸同化、发酵、光呼吸和 CO$_2$ 再固定都会改变实测值。RQ 可提示底物变化，却不能在开放植物组织中单凭一个数值确定唯一底物。[^respiratory-quotient]

## 全株碳收支连接白天、夜晚与生长 { #whole-plant-carbon-balance }

叶片总羧化经过光呼吸和光下呼吸后形成净同化，净同化碳再分给暂时储存、远距离输出、结构生长和防御。夜间及非绿色器官的呼吸继续消耗底物。生长呼吸描述把底物转成新生物量所需的能量和碳损失，维持呼吸则支持离子梯度、蛋白周转、修复和稳态；两者是预算概念，实际分子过程相互交织。

光照增强时，碳同化不一定立即增加生长：韧皮部装载、果实或分生组织容量不足会使糖和淀粉积累，反馈改变磷酸盐回流、基因表达和叶片光合容量。相反，快速生长或灌浆库可维持同化物输出并延缓反馈抑制。昼夜碳预算因此要同时测量叶面积持续时间、冠层受光、器官呼吸和库增长，而不能用中午一片叶的峰值代表整株。叶片固定碳的机制见[光合作用](photosynthesis_respiration.md)，同化物的装载、运输与库反馈见[韧皮部运输与源—库关系](transport_metabolism.md)。

## 冠层光能利用与作物产量 { #canopy-yield }

作物产量可概念性分解为生育期入射光中被冠层截获的部分、截获辐射转成生物量的效率，以及生物量进入收获器官的比例。常用框架写成

$$
Y \approx S_{\mathrm{PAR}}\,\varepsilon_i\,\varepsilon_c\,\varepsilon_p,
$$

其中 $S_{\mathrm{PAR}}$ 是光合有效辐射，$\varepsilon_i$ 为截获效率，$\varepsilon_c$ 为辐射利用效率，$\varepsilon_p$ 为收获指数。呼吸、温度、水分、营养和胁迫都包含在季节尺度的有效效率中。田间平均太阳能转化比例远低于叶片最佳瞬时量子效率，但“通常约 1%”不适合作为所有作物、地区和统计口径的常数。[^crop-photosynthesis]

合理密植、叶角和冠层层次可改善光分布，延长健康叶面积持续时间可增加季节截光；水肥管理只有在对应限制存在时才提高 $\varepsilon_c$，过量氮会增加倒伏、病害、呼吸成本与环境损失。通风或设施 CO$_2$ 供应的效应取决于光、温度和库容量。亚硫酸氢钠曾被零散试验用于影响光呼吸或环式电子流，缺乏可跨作物推广的稳定证据，不能列作普遍增产措施。

育种和工程可瞄准 Rubisco 激活、光保护松弛、电子流、光呼吸旁路或 C$_4$/CAM 组装，但额外固定的碳还须被根、茎、果实和种子接收。提高叶片光合速率、截获辐射、养分获取、库强度与收获指数需要协同，任何一个单项上升都不保证产量同比例增加。

## 呼吸调控收获后存活与贮藏 { #postharvest-respiration }

成熟种子在形成和灌浆中经历强烈合成与呼吸，脱水后代谢显著降低。多数作物的正常型种子可以降低含水量并低温保存，水分与温度共同决定寿命；顽拗型种子脱水即受损，不能套用“越干越耐藏”。油料与淀粉种子的安全含水量还受温度、种皮、初始质量和计量基准影响，不宜设一个固定的高低顺序。低氧可抑制呼吸，也会增加发酵和失活风险，种质库标准通常以合适干燥、密封和低温为核心。[^postharvest-storage]

苹果、梨、香蕉、番茄等呼吸跃变型果实在成熟启动附近出现乙烯自催化和呼吸上升；这标志一组成熟程序展开，不等同于“突然开始衰老”。葡萄、草莓、柑橘等非跃变型果实没有同样的自催化峰，但仍呼吸、感受乙烯并经历受多激素调节的成熟。低温和控制气氛可降低呼吸、乙烯作用和失水，O$_2$ 过低或 CO$_2$ 过高则会引起发酵、异味或生理障碍，适宜范围随品种而变。

块根、块茎和其他贮藏器官在收获、切伤或搬运后常出现伤呼吸，愈伤和周皮形成需要能量。甘薯等作物的预愈伤处理利用适当温湿度促进伤口封闭，随后才转入较低温贮藏；它不是单纯“先让块根发汗”。田间的中耕、灌水、温水浸种等操作只有在改善根区氧、温度、病原或萌发条件时才有益，不能从“呼吸增强”本身推出普遍增产。

## 参考资料与延伸阅读 { #references }

[^plant-respiration]: Schertl, P. & Braun, H.-P. (2014), [*Respiratory Electron Transfer Pathways in Plant Mitochondria*](https://pmc.ncbi.nlm.nih.gov/articles/PMC4010797/)；Vanlerberghe, G. C. (2013), [*Alternative Oxidase: A Mitochondrial Respiratory Pathway to Maintain Metabolic and Signaling Homeostasis*](https://pmc.ncbi.nlm.nih.gov/articles/PMC3645666/)。

[^respiratory-quotient]: RQ 的底物解释、器官测量与从组织到全株的呼吸尺度见 Schmiege, S. C. et al. (2023), [*It's Only Natural: Plant Respiration in Unmanaged Systems*](https://pmc.ncbi.nlm.nih.gov/articles/PMC10231469/)。

[^crop-photosynthesis]: Murchie, E. H. et al. (2013), [*Improving Photosynthesis*](https://pmc.ncbi.nlm.nih.gov/articles/PMC3729760/)；冠层截光、辐射利用效率、源—库与收获指数的共同限制见 Smith, M. R. et al. (2018), [*Source–Sink Relationships in Crop Plants and Their Influence on Yield Development and Nutritional Quality*](https://pmc.ncbi.nlm.nih.gov/articles/PMC6306447/)。

[^postharvest-storage]: 正常型与顽拗型种子的水分—温度边界见 FAO 的 [*Practical Guide for the Application of the Genebank Standards for the Conservation of Orthodox Seeds*](https://www.fao.org/fileadmin/user_upload/wiews/docs/CGRFA_WG-PGR-10_21_2_2Inf1_en.pdf)；果实呼吸、乙烯与低温／控制气氛见 [*Primary Metabolism in Fresh Fruits During Storage*](https://pmc.ncbi.nlm.nih.gov/articles/PMC7042374/)。
