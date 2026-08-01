# 躯体运动调控

躯体运动不是一条从“意志中枢”通往肌肉的单向命令链。伸手取杯时，皮层网络根据目标和环境形成候选动作，基底神经节调节这些候选动作被选择和维持的机会，小脑利用运动副本与感觉后果预测时序和误差，脑干同时稳定凝视与姿势；脊髓局部回路再把下行驱动、本体和皮肤反馈转化为运动神经元群的放电。肌肉收缩产生的新感觉立即返回各层，使准备、执行和修正成为相互嵌套的闭环。

## 运动由目标、身体和环境共同约束 { #control-architecture }

反射、节律和随意运动描述的是控制来源的不同侧重，而不是彼此隔离的三类动作。牵张反射的短潜伏期支路仍受任务和下行输入调节；步行可由脊髓节律网络产生基本交替模式，却需要脑干启动、感觉反馈改相和皮层选择路线；随意伸手具有显著前馈成分，也持续依靠视觉、本体感觉和触觉修正。咀嚼、呼吸等行为还会把自动节律与随意启动、停止以及内稳态信号结合起来。[^control-levels]

运动控制要解决至少四个相互关联的问题：选择什么动作，把目标转换成身体坐标中的关节与肌肉活动，在感觉和传导延迟存在时保持稳定，以及根据结果更新下一次控制。皮层、基底神经节、小脑、脑干和脊髓都参与其中，只是输入、输出和计算偏重不同。把大脑联络区称为“总规划”、小脑称为“协调者”、脊髓称为“执行者”可以帮助初学者定位，却不能表示信息只沿这一顺序流动。

## 运动单位把神经放电转换为分级肌力 { #motor-units }

一个 α 运动神经元及其轴突支配的全部梭外肌纤维构成一个运动单位。单个运动神经元的动作电位通常使该单位内的肌纤维共同收缩，但整块肌肉的力量可以通过募集更多运动单位、改变已募集单位的放电率和调整不同肌群的共同活动连续变化。运动单位的肌纤维散布在肌肉横截面内，因此少数单位活动产生的力不会只集中在一个小束；精细控制肌的神经支配比通常较小，强力肌的单个运动神经元可支配更多肌纤维。[^motor-unit]

| 运动单位的连续谱 | 典型收缩与代谢特性 | 在渐增共同驱动中的偏重 |
| --- | --- | --- |
| 慢速、抗疲劳单位（S） | 单次力量较小，收缩较慢，氧化代谢能力强 | 阈值通常较低，先用于站立和低强度持续活动 |
| 快速、抗疲劳单位（FR） | 力量和速度居中，可维持中等时间 | 随驱动增强逐步加入 |
| 快速、易疲劳单位（FF） | 单次力量大、收缩快，但持续能力较低 | 阈值通常较高，在快速或大力动作中后加入 |

这种从低阈值小单位到高阈值大单位的有序募集称为 Henneman size principle。它源于运动神经元大小、输入电阻和阈电流的系统差异，使共同突触驱动能自动产生经济的力量等级。原则适用于接受相似共同输入的功能群，并非每项任务中每个运动神经元都必须保持绝对不变的总排序；选择性输入、抑制和神经调质能够改变局部募集关系。[^size-principle]

α 运动神经元支配梭外肌纤维，γ 运动神经元支配梭内肌纤维两端的收缩区。随意收缩时常出现 α—γ 协同激活：梭外肌缩短的同时，γ 驱动维持肌梭中央感受区的张力，使 Ia、II 传入仍能报告长度和变化。所谓“γ 环”因而是调节感觉增益的一部分，并非高位中枢必须绕行肌梭才能驱动 α 运动神经元的唯一通路。β 运动神经元可同时支配梭内和梭外肌纤维，在不同物种和肌群中的比例与作用不宜作为统一主线。[^alpha-gamma]

## 本体反馈调节长度、张力和关节阻抗 { #proprioceptive-feedback }

肌梭与梭外肌纤维并联，主要感受肌长及其变化；Ia 组初级末梢同时响应动态和静态牵拉，II 组次级末梢更偏向持续长度。Ia 传入可直接兴奋同名肌和协同肌的 α 运动神经元，并经抑制性中间神经元降低拮抗肌活动。快速腱反射利用了这条短支路，但自然运动中的牵张响应还包含多突触脊髓支路、脑干和皮层长潜伏期成分，其增益会随姿势稳定需求和动作意图变化。详细回路见[反射与神经回路](neuro_reflex.md#stretch-reflex-circuit)。

Golgi 腱器官与肌腱胶原串联，Ib 组传入更直接反映主动收缩和外力共同造成的张力。经典离体模型强调 Ib 抑制同名肌运动神经元，现实行为中 Ib 中间神经元的符号和目标会随站立、步行相位与下行状态重配，因此腱器官不是只在危险张力下启动的“保险丝”。肌梭、腱器官、关节和皮肤输入共同估计肢体状态，并调节肌肉共同收缩形成的关节阻抗。局部反馈既能抵抗扰动，也能在需要柔顺接触时降低增益。[^proprioceptive-control]

## 脊髓回路生成协同活动和节律骨架 { #spinal-networks }

脊髓前角的运动神经元池是所有躯体运动输出的共同末端，但其输入已经由局部中间神经元网络重组。交互抑制让屈肌与伸肌在某些动作中交替，Renshaw 回返联系和感觉传入的突触前抑制改变运动池及其输入增益，多节段固有脊髓神经元则把肩—肘、髋—膝和左右肢回路连接起来。屈曲—对侧伸展反射展示了伤害输入如何在同侧撤回肢体的同时支撑对侧负重，却不是正常步行的完整发生器。

步行等节律运动依赖可在缺少逐拍皮层命令时产生交替输出的中央模式发生器（central pattern generator, CPG）。哺乳动物证据支持节律生成与具体肌群模式由分布式脊髓中间神经元网络完成，而感觉反馈通过负重、关节位置和足底接触延长或切换相位；网状脊髓等下行输入则启动、停止并设置速度和方向。人类脊髓网络的细胞类型和组织方式不能从猫、鼠或七鳃鳗模型逐项照搬，因此“存在节律生成能力”比指定一个单独步行中枢更可靠。[^spinal-rhythm]

## 脑干在动作发生前后稳定身体 { #brainstem-posture }

前庭核和网状结构发出的下行系统广泛作用于轴向、近端肌群和脊髓局部回路，使重心、支持面和头眼方向在肢体动作前后保持可控。外侧前庭脊髓束偏重抗重力伸肌和全身平衡，内侧前庭脊髓束偏重头颈稳定；网状脊髓投射随任务和觉醒状态双向调节姿势、反射增益与步行。上丘还把突发视觉、听觉和躯体输入转成头眼定向。各束的走行与交叉见[神经系统传导通路](neuro_pathway.md#brainstem-descending)。[^brainstem-control]

姿势不是在随意动作结束后才补上的背景。抬臂前，躯干和下肢肌已出现 anticipatory postural adjustment，以抵消即将发生的重心移动；受到推挤后，踝、髋、跨步和抓握策略又根据扰动大小、支持面与经验组合。动物的紧张性颈反射、迷路反射和翻正反射揭示了这些感觉—运动联系，但在人类自然行为中，它们被皮层目标、小脑校准和多感觉估计整合，不能作为固定姿势口诀。

经典去大脑僵直实验通过切断特定脑干水平，显示前庭、网状下行驱动与脊髓牵张回路失衡可造成伸肌过度紧张。它是研究完整网络被解耦后的实验现象，不代表正常肌张力由一个“易化区”与一个“抑制区”简单相减；α 和 γ 运动神经元、感觉反馈及多条下行通路都可参与异常姿势。[^decerebrate-boundary]

## 运动皮层以重叠群体活动组织动作 { #motor-cortex }

初级运动皮层（M1）、外侧前运动区、辅助运动区和扣带运动区与顶叶、躯体感觉及前额叶网络相互连接。外侧前运动区较多利用视觉、听觉等外部线索选择动作，内侧前运动区和辅助运动区较多参与内部发起、序列与双手协调，但这些是功能偏重而非互斥模块。许多前运动神经元会在动作开始前数百毫秒到数秒改变放电，说明准备活动已经在探索和约束即将到来的状态。[^premotor]

M1 保留粗略身体拓扑，手、面等精细控制部位占据较大皮层面积；相邻代表区高度重叠，同一点活动常影响多个肌肉和关节。一枚皮层神经元的放电可与方向、力量、关节状态或任务阶段相关，稳定动作则由大量神经元随时间变化的群体轨迹共同产生。所谓“运动小人”适合表示代表面积，却不能解释为每个皮层点指挥一块固定肌肉。练习、损伤和使用经验还会改变这些功能图。[^motor-population]

皮质脊髓轴突来自 M1、前运动区及部分感觉和顶叶皮层，多数先接触脊髓中间神经元；灵长类尤其支配手指的部分轴突可直接接触运动神经元，为独立手指控制提供重要通路。皮质脑干束、前庭脊髓束和网状脊髓束与之并行，而非作为“锥体系”的对立面。下行束的解剖与侧别定位已在[神经系统传导通路](neuro_pathway.md#corticospinal-corticobulbar)展开，本页关注它们如何被共同招募。

## 基底神经节调节动作选择、抑制和活力 { #basal-ganglia }

运动相关基底神经节环路以纹状体为主要输入，以 globus pallidus internus（GPi）和 substantia nigra pars reticulata（SNr）为主要输出。GPi／SNr 神经元保持较高的自发 GABA 能放电，对丘脑和脑干靶区施加持续抑制；选择某项动作时，特定通道的输出抑制下降，使相应丘脑—皮层或脑干活动得到去抑制。基底神经节因此改变候选动作的竞争、时机、幅度和 vigor，而不是把完整肌肉命令逐级传给脊髓。[^basal-output]

| 通路 | 核心连接 | 经典净效应与现行边界 |
| --- | --- | --- |
| 直接通路 | 纹状体 D1 型投射神经元抑制 GPi／SNr | 减少特定输出通道的持续抑制，有利于被选动作；不能等同全脑统一的“启动键” |
| 间接通路 | 纹状体 D2 型投射神经元抑制 GPe，经底丘脑核增强 GPi／SNr 输出 | 有助于压制竞争动作和调节切换；运动开始时可与直接通路共同活跃 |
| 超直接通路 | 皮层直接兴奋底丘脑核，再兴奋 GPi／SNr | 提供较快而较广的制动或阈值调整，随后可由更选择性的通路重塑 |

直接／间接通路的“Go／No-go”图解正确抓住了去抑制的符号，却过度暗示二者在时间上互斥。细胞记录与干预实验表明，D1、D2 striatal projection neuron 可在动作开始和序列转换时并行活动；一种有用解释是直接通路突出被选通道，间接通路抑制竞争通道，但具体作用依任务、纹状体区域和下游靶点而异。[^basal-selection]

substantia nigra pars compacta 的 dopamine 对 D1 与 D2 细胞、胆碱能中间神经元和 corticostriatal plasticity 产生多层调节。经典模型中，dopamine 倾向增强 D1 直接通路并降低 D2 间接通路活动；行为学习中，phasic dopamine 还携带与预期结果偏差有关的教学信号，影响动作价值和习惯形成。多巴胺丢失造成的运动迟缓不能简化为“直接通路关闭”，而是整个基底神经节—丘脑—皮层和脑干网络的活动模式改变。帕金森病、亨廷顿病等具体病理与治疗证据留在[神经系统疾病](neuro_disease.md)。

## 小脑以重复微回路校准时序与预测 { #cerebellar-circuit }

小脑从脑桥核、脊髓、前庭和其他脑干来源接收 mossy fiber 输入，经 granule cell—parallel fiber 系统把运动副本、感觉和情境广泛送入小脑皮层；inferior olive 的 climbing fiber 则对 Purkinje cell 产生强而稀疏的 complex spike。Purkinje cell 是小脑皮层唯一输出神经元，以 GABA 抑制 deep cerebellar nuclei 或前庭核；深核同时接收 mossy／climbing fiber 侧支，并向丘脑—皮层、红核、前庭核和网状结构输出。由此，小脑通过改变已有运动通路的预测、时序和增益发挥作用，而不直接形成一条独立的“协调束”。[^cerebellar-microcircuit]

按连接和功能可辨认前庭小脑、脊髓小脑与大脑小脑的偏重：绒球小结叶—前庭网络参与凝视和平衡，蚓部和中间区利用躯体状态调节姿势与正在进行的肢体动作，外侧半球经脑桥—齿状核—丘脑环路参与复杂动作准备和学习。这些区域相互作用，也与传统“古／旧／新小脑”的系统发育名称并不严格一一对应；外侧小脑仍可接收由皮层处理过的感觉和状态信息，不能说它完全不接受外周信息。[^cerebellar-zones]

小脑常被解释为 forward internal model：利用运动副本预测动作的感觉后果，在真实反馈尚未到达时协助快速控制，并以预测与结果的偏差更新模型。该框架得到适应行为、患者和神经活动研究支持，却不是已经定位到单一细胞或突触的完整算法。climbing fiber 的 complex spike 能表示误差，也能编码运动事件、奖励和状态变化；parallel fiber—Purkinje cell LTD 是重要可塑性机制之一，但 deep nuclei、其他小脑突触和皮层网络同样参与学习。[^cerebellar-models]

## 运动学习把预测、选择和技能重组到多个网络 { #motor-learning }

棱镜、旋转视觉或力场扰动造成的 sensorimotor adaptation，会使动作逐次抵消可预测误差，并在扰动移除后产生 aftereffect；这类现象突出小脑依赖的预测更新。反复练习动作序列还会改变皮层表征、corticostriatal 选择和脊髓协同，使执行更快、更稳定并减少对显性注意的依赖。程序性技能、习惯和适应的实验操作可以分开，神经基础却有重叠，不宜分别归给基底神经节、小脑和皮层中的单一结构。

感觉反馈也不只是事后纠错。运动开始前的状态估计决定前馈命令，运动中皮肤和本体输入按任务相位重新加权，结果反馈则改变下一次动作策略。练习形成的是能够适应身体、工具和环境变化的控制策略，而非一串固定肌肉收缩。生理稳态如何提前配合运动，见[稳态调节的控制逻辑](../physiology/internal_env.md#feedforward)；感觉状态如何编码，见[感觉编码与躯体感觉](neuro_sensation.md#proprioception)。

## 损伤体征反映失去的回路层次 { #motor-localization }

急性脊髓横断后，病变以下可先出现 spinal shock：反射、肌张力和自主活动暂时降低，随后部分脊髓反射逐渐恢复并可能亢进。这个时间过程说明突然失去下行输入会改变局部网络状态；恢复不等于感觉和随意运动通路重新连通，也不能用“高位中枢平时只有易化作用”概括全部机制。

下运动神经元或其轴突损伤会使相应运动单位出现弛缓性无力、萎缩、反射减弱和失神经活动。上运动神经元系统损伤急性期也可低张力、低反射，随后才形成速度依赖性痉挛、腱反射亢进、阵挛和伸性跖反射；这些体征来自皮质及脑干下行控制、感觉增益和脊髓内在性质的共同重组，不是皮质脊髓束单独“释放一个反射”。小脑损伤更常造成同侧辨距不良、分解运动、意向性震颤和共济失调而无初级瘫痪，还可出现眼震及音节时距、重音异常的扫描样构音障碍（scanning dysarthria）；基底神经节异常则突出运动贫乏、过多或时序与活力改变。定位逻辑见[神经系统传导通路](neuro_pathway.md#tract-localization)，疾病机制见[神经系统疾病](neuro_disease.md)。[^motor-lesions]

## 参考资料与延伸阅读 { #references }

- Purves D, et al. [The Motor Unit](https://www.ncbi.nlm.nih.gov/books/NBK10874/)、[The Spinal Cord Circuitry Underlying Muscle Stretch Reflexes](https://www.ncbi.nlm.nih.gov/books/NBK10809/) 与 [Upper Motor Neuron Control of the Brainstem and Spinal Cord](https://www.ncbi.nlm.nih.gov/books/NBK10805/). *Neuroscience*. 2nd ed.
- Purves D, et al. [The Premotor Cortex](https://www.ncbi.nlm.nih.gov/books/NBK10796/) 与 [The Primary Motor Cortex](https://www.ncbi.nlm.nih.gov/books/NBK10962/). *Neuroscience*. 2nd ed.
- Young CB, Reddy V, Sonne J. [Neuroanatomy, Basal Ganglia](https://www.ncbi.nlm.nih.gov/books/NBK537141/). *StatPearls*.
- Goulding M. [Circuits Controlling Vertebrate Locomotion](https://pmc.ncbi.nlm.nih.gov/articles/PMC2847453/). *Neuron*. 2009.
- Li H, Jin X. [Multiple Dynamic Interactions from Basal Ganglia Direct and Indirect Pathways Mediate Action Selection](https://pubmed.ncbi.nlm.nih.gov/37751468/). *eLife*. 2023.
- Streng ML, Popa LS, Ebner TJ. [Cerebellar Representations of Errors and Internal Models](https://pubmed.ncbi.nlm.nih.gov/35471627/). *Cerebellum*. 2022.

[^control-levels]: 反射、节律和目标导向动作共享局部感觉反馈、脊髓节律网络与下行控制，参见 Goulding [Circuits Controlling Vertebrate Locomotion](https://pmc.ncbi.nlm.nih.gov/articles/PMC2847453/) 和 Purves 等 [Upper Motor Neuron Control of the Brainstem and Spinal Cord](https://www.ncbi.nlm.nih.gov/books/NBK10805/)。
[^motor-unit]: 运动单位定义、肌纤维空间分布及不同肌肉神经支配比，参见 Purves 等 [The Motor Unit](https://www.ncbi.nlm.nih.gov/books/NBK10874/)。
[^size-principle]: size principle 的膜性质基础、共同输入边界和任务依赖偏离，参见 Hug 等 [Common Synaptic Input, Synergies and Size Principle](https://pmc.ncbi.nlm.nih.gov/articles/PMC10098498/) 与 [Structure and Function of the Mammalian Neuromuscular Junction](https://pmc.ncbi.nlm.nih.gov/articles/PMC10461538/) 中的运动单位综述。
[^alpha-gamma]: γ 运动神经元维持肌梭张力及 α—γ 协同激活，参见 Purves 等 [The Spinal Cord Circuitry Underlying Muscle Stretch Reflexes](https://www.ncbi.nlm.nih.gov/books/NBK10809/)。
[^proprioceptive-control]: 肌梭、Golgi 腱器官与任务依赖反馈对运动稳定性的作用，参见 Purves 等 [The Influence of Afferent Activity on Motor Behavior](https://www.ncbi.nlm.nih.gov/books/NBK11119/)；本文不沿用“肌梭阈值高而先兴奋、腱器官阈值低而后兴奋”的倒置概括。
[^spinal-rhythm]: 脊髓 locomotor CPG、感觉反馈和下行调制的跨物种证据，参见 Goulding [Circuits Controlling Vertebrate Locomotion](https://pmc.ncbi.nlm.nih.gov/articles/PMC2847453/) 与 Goulding、Bollu、Büschges [Sensory Feedback and the Dynamic Control of Movement](https://pubmed.ncbi.nlm.nih.gov/40198854/)；人类细胞级组织保留证据边界。
[^brainstem-control]: 前庭、网状、顶盖和红核相关下行系统的姿势与定向功能，参见 Purves 等 [Upper Motor Neuron Control of the Brainstem and Spinal Cord](https://www.ncbi.nlm.nih.gov/books/NBK10805/)。
[^decerebrate-boundary]: 去大脑僵直作为下行系统被实验性解耦后的伸肌过度活动，参见 NCBI Bookshelf [Neuroanatomy, Decerebrate Rigidity](https://www.ncbi.nlm.nih.gov/books/NBK547687/)；正文不把动物切断实验直接等同人类正常肌张力控制。
[^premotor]: 外侧与内侧前运动区对外部线索、内部发起和动作序列的相对偏重，参见 Purves 等 [The Premotor Cortex](https://www.ncbi.nlm.nih.gov/books/NBK10796/)。
[^motor-population]: M1 身体拓扑、重叠代表和群体编码，参见 Purves 等 [The Primary Motor Cortex](https://www.ncbi.nlm.nih.gov/books/NBK10962/)；本页将单神经元偏好视为群体活动的一部分，不以固定“一点—一肌”解释自然动作。
[^basal-output]: 纹状体、GPe、GPi、底丘脑核、SNr 和 SNc 的连接及输出去抑制，参见 NCBI Bookshelf [Neuroanatomy, Basal Ganglia](https://www.ncbi.nlm.nih.gov/books/NBK537141/)。
[^basal-selection]: 直接与间接通路在动作选择中的并行活动和经典 Go／No-go 模型边界，参见 Li 与 Jin [Multiple Dynamic Interactions from Basal Ganglia Direct and Indirect Pathways Mediate Action Selection](https://pubmed.ncbi.nlm.nih.gov/37751468/) 及 Cui 等 [Concurrent Activation of Striatal Direct and Indirect Pathways During Action Initiation](https://pubmed.ncbi.nlm.nih.gov/23354054/)。
[^cerebellar-microcircuit]: mossy fiber—granule／parallel fiber、climbing fiber、Purkinje cell 与 deep cerebellar nuclei 的基本连接，参见 Sathyanesan 等 [Contributions of the Cerebellum for Predictive and Instructional Control of Movement](https://pmc.ncbi.nlm.nih.gov/articles/PMC6436720/)。
[^cerebellar-zones]: 小脑连接分区与运动体征，参见 NCBI Bookshelf [Neuroanatomy, Cerebellum](https://www.ncbi.nlm.nih.gov/books/NBK538167/)；功能分区用作连接偏重，不作为封闭模块或严格系统发育阶梯。
[^cerebellar-models]: forward internal model 的支持证据及 complex spike 并非单一误差信号的边界，参见 Streng、Popa 与 Ebner [Cerebellar Representations of Errors and Internal Models](https://pubmed.ncbi.nlm.nih.gov/35471627/)。
[^motor-lesions]: 上、下运动神经元体征及急性到慢性变化，参见 NCBI Bookshelf [Neuroanatomy, Upper Motor Neuron Signs](https://www.ncbi.nlm.nih.gov/books/NBK541082/) 与 [Neuroanatomy, Lower Motor Neuron Lesion](https://www.ncbi.nlm.nih.gov/books/NBK539814/)；病理诊断须结合病程和解剖分布。
