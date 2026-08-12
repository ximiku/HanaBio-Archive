# 反射与神经回路

触碰热物后缩手、站立时抵消身体摇摆、动脉压变化后调整心率，都表现为特定输入引出的协调响应。反射描述的是这种输入—输出关系：感受信息经神经系统处理后，改变肌肉、腺体或其他效应器活动。它不以意识是否参与来定义，也不意味着中枢只执行一条预先焊死的指令。同一感觉输入可以一面触发局部反应，一面沿上行通路进入知觉和学习；下行指令、行为状态和刚刚发生的活动又会改变局部回路的增益。

反射弧常写成“感受器—传入通路—中枢—传出通路—效应器”。这五个环节便于定位故障，但每一项都可能包含多个细胞和分支：感受器可以是感觉神经末梢或独立的感受细胞，中枢可跨越多个脊髓节段或脑区，传出侧也可能经过自主神经节。因而，反射弧是分析框架，实际运行单位是会聚、辐散并受调制的神经回路。[^reflex-framework]

## 反射的分类与边界 { #reflex-classification }

按整合位置可区分脊髓、脑干及包含更高脑区的反射，按效应器可区分躯体运动与自主反射，按中枢突触数可区分单突触和多突触反射。这些分类回答的是不同问题，不能互相替代。所谓“单突触反射”只指传入神经元在中枢内直接突触到传出神经元；感受器换能、轴突传导以及运动神经元与肌纤维之间的神经肌接头仍然存在。肌梭 Ia 传入到同名肌 α 运动神经元的支路是代表性例子，但牵张反射同时还通过中间神经元抑制拮抗肌，所以一个完整行为可以并列包含单突触和多突触支路。[^stretch-reflex]

先天形成的反应常称非条件反射，经过经验建立的刺激—反应联系常称条件反射。经典条件化中，原先不能稳定引出某反应的条件刺激，在与非条件刺激形成预测关系后能够引出条件反应；学习改变的是刺激的意义和回路权重，并非在大脑皮层中新增一个孤立的“条件反射中枢”。条件化、消退、习惯化和敏感化也具有不同的行为判据与细胞机制。旧生理学中的“内抑制”“外抑制”可作为巴甫洛夫实验传统中的行为描述，却不等同于某一种突触后抑制或一条固定解剖通路。详细的学习与记忆机制由[学习、记忆与语言认知](learning_memory_language.md)承接。[^learning-boundary]

## 回路连接决定输入如何变换 { #circuit-motifs }

局部回路神经元把感觉传入、下行指令和其他中间神经元接到传出神经元。轴突短、投射局限是其中一类常见形态，但“局部”首先描述连接范围，不能据是否看见长轴突或动物演化等级硬性划分。传出运动神经元接受的净输入是多条局部和下行通路共同作用的结果，因此它常被称作支配骨骼肌的最终共同通路，而不是反射弧中唯一进行整合的部位。

| 回路组织 | 连接关系 | 常见运算结果 |
| --- | --- | --- |
| 会聚 | 多路输入到达同一神经元或神经元群 | 综合不同感觉、双侧信息和下行状态；也可提高一致信号相对噪声的可靠性 |
| 辐散 | 一路输入分支到多个靶点 | 同时协调协同肌、拮抗肌、自主反应和上行报告 |
| 前馈抑制 | 输入同时兴奋主通路和稍后到达的抑制性中间神经元 | 限定响应时窗、调节增益并抑制不合适的输出 |
| 反馈／回返抑制 | 输出神经元或其群体募集抑制性中间神经元，再抑制原群体 | 根据已产生的输出限制持续时间和群体募集 |
| 侧向抑制 | 活跃通路抑制相邻并行通路 | 增强输入间差异，使空间或功能选择更集中 |
| 相互抑制 | 两个功能群相互抑制 | 支持状态选择及屈肌—伸肌、左右侧等交替活动 |

这些连接模体可以叠加在同一网络中。会聚和辐散本身不分别属于“传出”或“传入”专用结构；环路也不必只产生正反馈或负反馈。兴奋性回返连接、慢突触电位和具有持续放电特性的神经元可使刺激结束后仍有后发放；抑制性反馈、突触压抑与适应则限制它。输出节律、持续时间和空间范围由连接权重、传导延迟、细胞膜性质及当时的调质状态共同形成。[^circuit-architectures]

## 牵张反射的闭环控制 { #stretch-reflex-circuit }

肌梭位于骨骼肌内，其梭内肌纤维与产生主要肌力的梭外肌纤维大致并联。肌肉被拉长时，梭中央感觉区变形，Ia 及 II 类传入的放电随长度与变化速率而改变。Ia 轴突进入脊髓后直接兴奋支配同名肌及部分协同肌的 α 运动神经元，同时经 Ia 抑制性中间神经元抑制拮抗肌运动神经元，形成交互抑制。腱反射锤敲击肌腱的直接机械结果正是短暂拉长肌肉和肌梭，并不是肌腱中存在一个专门的“膝跳感受器”。[^stretch-reflex]

α 运动神经元使梭外肌纤维缩短时，若肌梭两端不随之收缩，梭中央会变松而失去敏感性。γ 运动神经元支配梭内肌纤维的收缩端；运动中常见的 α—γ 协同激活使肌肉缩短时仍保持感觉区张力。下行通路还可分别调整 α、γ 运动神经元和传入末梢的突触前抑制，因而同样大小的外部拉伸在站立、行走、精细操作或放松状态下可以产生不同响应。反射增益是任务相关的可调变量，不是某条反射弧固定不变的属性。[^reflex-gain]

把牵张反射画成负反馈有助于理解姿势稳定：肌长偏离当前工作范围，肌梭传入增加，回路产生抵抗该偏离的肌力。不过生物肢体还包含肌腱顺应性、多个关节、传导延迟、梭外肌自身的长度—力和力—速度关系，以及皮肤、关节和前庭输入。高增益与时间延迟组合还可能引起振荡。因此，神经系统不是用一条简单伺服环精确指定每块肌肉的恒定长度，而是在任务中组合前馈指令、感觉反馈和机械性质。

Golgi 腱器官位于肌—腱连接的串联路径，对肌力尤其敏感，其 Ib 传入经脊髓中间神经元影响同名肌、协同肌和拮抗肌。经典“反牵张反射”把它画成 Ib 传入抑制同名肌，但在站立和运动中，这些中间神经元也接受皮肤、关节和下行输入，净效应可随任务和步态相位改变。它更适合作为肌力反馈通路来理解，而不是达到固定危险阈值便强制肌肉放松的单用途保护开关。

## 屈曲与对侧伸展的多突触协调 { #flexion-crossed-extension }

伤害性皮肤输入可经多类脊髓中间神经元兴奋同侧屈肌、抑制同侧伸肌，使肢体离开刺激。若负重肢体突然屈曲，另一侧还需增加支撑：交叉到对侧的支路兴奋伸肌并抑制屈肌，形成对侧伸展反应。传入在多个节段内辐散，并与其他感觉和下行输入会聚，因此撤回方向和参与肌群会随刺激位置、强度、姿势及当前运动相位改变；它不是皮肤输入到某一块屈肌的固定四节点链。[^flexion-reflex]

刺激停止后短暂保留的屈曲活动可来自兴奋性回返连接、不同路径的传导时差、慢受体效应和神经元内在持续放电。这个“后发放”不要求假定冲动在一个封闭环中无限旋转。与此同时，抑制与突触压抑防止活动无界扩散。强刺激更容易募集跨节段和双侧回路，表现为响应范围扩大；这反映阈值和网络募集，而不是“兴奋在中枢必然由一点泛化到全体”。

## 突触后与突触前的选择性控制 { #inhibition-facilitation }

突触后抑制直接提高靶神经元的抑制性电导或使膜电位远离发放条件。牵张反射中的 Ia 交互抑制属于前馈式选择：同一传入一面促进被拉长肌收缩，一面经抑制性中间神经元降低拮抗肌活动。运动神经元轴突侧支还可兴奋 Renshaw 细胞，后者以 glycine 为主要递质反馈抑制运动神经元及相关运动池。Renshaw 回路确实构成回返抑制，但其具体运动功能取决于连接范围和其他输入，不能只概括为“及时终止运动神经元活动”。[^renshaw]

突触前抑制改变某个轴突末梢的递质释放，可以在几乎不改变突触后细胞整体膜电位的情况下，选择性调低一路输入。脊髓初级感觉传入上的 GABA 能轴—轴突联系是经典例子。感觉轴突末梢的 Cl$^-$ 平衡电位比许多成熟中枢神经元更正，GABA$_\mathrm{A}$ 受体开放常引起初级传入去极化（primary afferent depolarization, PAD）；增加膜电导造成分流、Na$^+$ 通道失活或动作电位在分支处传播失败，均可减少末梢 Ca$^{2+}$ 内流和谷氨酸释放。GABA$_\mathrm{B}$ 受体还可直接抑制 Ca$^{2+}$ 通道。可见，膜去极化与传递易化并非同义，结果取决于去极化发生的位置、幅度和通道状态。[^presynaptic-inhibition]

突触前易化则提高特定末梢的释放概率，可由减少原有抑制、延长末梢动作电位、增强 Ca$^{2+}$ 进入或调节释放机器形成。突触后易化也不只是“几个 EPSP 相加”：背景去极化、膜电导降低、持续内向电流或调质改变通道状态，都可使相同输入更容易触发输出。抑制与易化是作用位置和净效应的组合，需要用突触前释放、突触后电流和神经元发放分别验证。

## 延迟、总和与节律输出 { #circuit-dynamics }

一次反射的潜伏期包括感受器换能、传入和传出轴突传导、中枢突触与神经元整合、神经肌传递及肌肉产力。化学突触数增加通常会增加并扩展延迟，但“中枢延搁”不能简单等于总潜伏期，也不能仅凭慢响应推断突触数量。实验上需扣除已知的外周传导和效应器时间，才能估计中枢处理贡献。

传入放电在中枢经过时间总和、空间会聚、阈值选择和抑制后，传出频率通常不复制传入频率。连续刺激时的响应减弱还可能来自感受器适应、突触压抑、递质耗竭、运动神经元适应或肌肉疲劳；“中枢易疲劳”不是一个足以定位机制的解释。相反，神经调质、持续内向电流和短时程易化可使亚阈输入逐渐获得更大影响。

反射网络之外，脊髓和脑干的中央模式发生器（central pattern generator, CPG）能在缺少逐周期感觉触发时产生有组织的节律活动。相互抑制、细胞适应、内在膜电流和兴奋性连接可共同形成屈—伸或左右交替。感觉反馈仍会校正负重和相位转换，下行输入负责启动、停止并使节律适应目标和环境。行走因此既不是一串被动牵张反射，也不是完全脱离外周感觉的中央程序；实际输出来自节律网络、感觉反馈与上位控制的持续耦合。[^central-pattern-generators]

## 反射检查的定位意义 { #clinical-localization }

临床诱发反射是在受控输入下抽样一条完整通路。反应减弱可来自感受器、传入轴突、脊髓或脑干突触、运动神经元、外周运动轴突、神经肌接头或肌肉任一环节；反应增强则常提示下行调制改变，但也受背景收缩、姿势、焦虑、药物和测试手法影响。单个反射的“有或无”很少能独自定位病变，左右比较、多个节段、感觉和随意运动检查以及时间过程必须合并解释。

反射仍在高级行为中运行。随意伸手时，预测性的肌肉激活先行，牵张与皮肤反射再补偿意外扰动；运动皮层、脑干、小脑和基底神经节通过下行通路设定局部回路的工作状态。反射与随意运动由此不是彼此排斥的两套输出，而是共享运动神经元和局部网络、在不同任务中重新分配权重的控制层次。

## 参考资料与延伸阅读 { #references }

- Purves D, Augustine GJ, Fitzpatrick D, et al., editors. [The Spinal Cord Circuitry Underlying Muscle Stretch Reflexes](https://www.ncbi.nlm.nih.gov/books/NBK10809/)、[The Influence of Afferent Activity on Motor Behavior](https://www.ncbi.nlm.nih.gov/books/NBK11119/)、[Flexion Reflex Pathways](https://www.ncbi.nlm.nih.gov/books/NBK11091/). *Neuroscience*, 2nd ed.
- Purves D, Augustine GJ, Fitzpatrick D, et al., editors. [Upper Motor Neuron Control of the Brainstem and Spinal Cord](https://www.ncbi.nlm.nih.gov/books/NBK10805/). *Neuroscience*, 2nd ed.
- Luo L. [Architectures of Neuronal Circuits](https://pmc.ncbi.nlm.nih.gov/articles/PMC8916593/). *Science*. 2021;373:eabg7285.
- Goulding M. [Circuits controlling vertebrate locomotion: moving in a new direction](https://pmc.ncbi.nlm.nih.gov/articles/PMC2847453/). *Nat Rev Neurosci*. 2009;10:507–518.
- Hughes DI, Todd AJ. [Inhibition downunder: an update from the spinal cord](https://pmc.ncbi.nlm.nih.gov/articles/PMC4059017/). *Curr Opin Neurobiol*. 2014;26:161–166.

[^reflex-framework]: 反射的感觉输入、局部回路、运动神经元和下行调制框架，参见 Purves 等 [The Spinal Cord Circuitry Underlying Muscle Stretch Reflexes](https://www.ncbi.nlm.nih.gov/books/NBK10809/) 与 [Upper Motor Neuron Control of the Brainstem and Spinal Cord](https://www.ncbi.nlm.nih.gov/books/NBK10805/)。
[^stretch-reflex]: 肌梭 Ia 传入、同名肌单突触兴奋与拮抗肌交互抑制，参见 [The Spinal Cord Circuitry Underlying Muscle Stretch Reflexes](https://www.ncbi.nlm.nih.gov/books/NBK10809/)；“单突触”只描述中枢直接支路。
[^learning-boundary]: 习惯化、敏感化和经典条件化的行为定义与突触可塑性边界，参见 NCBI Bookshelf [The Nervous System and Behavior](https://www.ncbi.nlm.nih.gov/books/NBK217810/)；复杂学习回路在高级功能页展开。
[^circuit-architectures]: 会聚、辐散、前馈／反馈抑制、侧向和相互抑制等常见连接模体及其运算意义，参见 Luo 的综述 [Architectures of Neuronal Circuits](https://pmc.ncbi.nlm.nih.gov/articles/PMC8916593/)。
[^reflex-gain]: γ 运动神经元、α—γ 协同激活、局部和下行通路对牵张反射增益的调节，参见 [The Influence of Afferent Activity on Motor Behavior](https://www.ncbi.nlm.nih.gov/books/NBK11119/)；任务依赖的长潜伏期响应边界见 [Stretch sensitive reflexes as an adaptive mechanism for maintaining limb stability](https://pmc.ncbi.nlm.nih.gov/articles/PMC2932821/)。
[^flexion-reflex]: 同侧屈曲、同侧伸肌抑制、对侧伸肌兴奋以及多源输入会聚，参见 Purves 等 [Flexion Reflex Pathways](https://www.ncbi.nlm.nih.gov/books/NBK11091/)。
[^renshaw]: 运动神经元侧支—Renshaw 细胞—运动神经元的回返抑制结构及功能不确定性，参见 Alvarez 与 Fyffe [Principles of interneuron development learned from Renshaw cells and the motoneuron recurrent inhibitory circuit](https://pmc.ncbi.nlm.nih.gov/articles/PMC3870136/)。
[^presynaptic-inhibition]: 脊髓感觉传入的 GABA 能轴—轴突联系、PAD、分流和通道机制，参见 Hughes 与 Todd [Inhibition downunder](https://pmc.ncbi.nlm.nih.gov/articles/PMC4059017/)及 Zimmerman 等 [Presynaptic Inhibition of Pain and Touch in the Spinal Cord](https://pmc.ncbi.nlm.nih.gov/articles/PMC7795800/)。
[^central-pattern-generators]: 脊髓节律网络、相互抑制以及感觉和下行调制的证据，参见 Goulding [Circuits controlling vertebrate locomotion](https://pmc.ncbi.nlm.nih.gov/articles/PMC2847453/)与 Dougherty 等 [The rhythm section](https://pmc.ncbi.nlm.nih.gov/articles/PMC6550992/)。
