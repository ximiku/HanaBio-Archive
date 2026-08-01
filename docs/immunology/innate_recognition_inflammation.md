# 固有免疫识别与炎症

固有免疫不是一套只会笼统排斥异物的“非特异性防线”。上皮细胞、组织驻留巨噬细胞、树突状细胞、肥大细胞和募集而来的粒细胞，都能用胚系编码的受体读取微生物结构、细胞损伤和分子所在区室，再把这些输入转换为吞噬、抗病毒状态、细胞因子分泌或炎症性细胞死亡。它的反应通常在感染早期迅速展开，同时决定抗原呈递和淋巴细胞应答所处的刺激背景。[^innate-overview]

同一种分子在不同位置可有不同意义：DNA 留在细胞核和线粒体内通常不会触发胞质 DNA 感知，而微生物 DNA 或泄漏到胞质的自身 DNA 可以成为警报。固有免疫因而识别的是“结构—位置—组织状态”的组合，而不是给每一种病原体配置一个专用受体。

## 模式识别把分子位置变成危险线索 { #pattern-recognition }

模式识别受体（pattern-recognition receptor, PRR）识别微生物中相对保守的分子模式，也识别组织损伤释放或暴露的内源性信号。前者常称病原体相关分子模式（PAMP），但其中许多结构也存在于无致病性的微生物，称微生物相关分子模式更能体现其来源；后者称损伤相关分子模式（DAMP）。受体所处的细胞区室限制了它能够接触的输入，也减少了对正常自身成分的误判。[^prr-families]

| 受体位置与家族 | 代表性输入 | 主要输出偏向 |
| --- | --- | --- |
| 质膜及内体的 Toll 样受体（TLR），质膜的 C 型凝集素受体（CLR） | 脂多糖、脂蛋白、微生物糖链，以及内体中的核酸 | NF-κB、AP-1 或 IRF 程序；炎症介质、吞噬和抗病毒应答 |
| 胞质的 NOD 样受体（NLR） | 细菌细胞壁片段或细胞内稳态扰动 | 炎症基因表达，部分成员组装炎症小体 |
| 胞质的 RIG-I 样受体（RLR） | 具有特定末端或双链特征的病毒 RNA | IRF3／IRF7 与 I 型干扰素程序 |
| 胞质 cGAS—STING 与 AIM2 | 错位于胞质的双链 DNA | I 型干扰素，或 AIM2 炎症小体 |

这张表表示信号的常见偏向，而非一一对应的封闭线路。一个微生物可同时提供多种配体，同一家族成员也会因细胞类型、受体密度、共受体和刺激时程而产生不同输出。cGAS 生成第二信使 cGAMP 后激活内质网上的 STING，可响应病原体 DNA，也可响应基因组不稳定、线粒体损伤等过程产生的自身 DNA；持续误激活因此会参与自身炎症和组织损伤。[^cgas-sting]

## 识别信号汇入转录与细胞因子网络 { #signaling-cytokines }

许多 TLR 通过 MyD88 或 TRIF 等衔接蛋白，把受体聚集传向激酶网络，最终激活 NF-κB、AP-1 和干扰素调节因子。静息细胞中的 NF-κB 常被 IκB 蛋白留在胞质；IκB 被磷酸化并降解后，NF-κB 进入细胞核，诱导炎症介质、抗凋亡蛋白和反馈抑制因子。新合成的 IκB 又可限制信号持续时间，因此“打开炎症基因”从一开始就伴随制动回路。

巨噬细胞、树突状细胞和组织细胞由此产生 TNF、IL-1、IL-6、IL-12 等细胞因子以及 CXCL8 等趋化因子。它们分别改变局部内皮、促进粒细胞募集、调节造血和急性期反应，并影响 NK 与 T 细胞的功能。收到细胞因子的邻近或远处细胞还会用另一套受体继续传递信息：许多白细胞介素和干扰素受体没有内在激酶活性，而是借助 JAK 磷酸化 STAT，使 STAT 二聚体进入细胞核。PRR 近端信号与细胞因子受体的 JAK—STAT 信号前后相接，不应合并成同一步骤。[^cytokine-network]

## 吞噬把识别与胞内杀伤耦联 { #phagocytosis-killing }

中性粒细胞、巨噬细胞和树突状细胞可用多种 PRR 与清道夫受体直接黏附颗粒，也可用 Fc 受体或补体受体抓取被抗体、C3 片段包被的对象。受体聚集激活 Rho 家族小 GTP 酶和肌动蛋白重排，细胞膜形成吞噬杯并闭合为吞噬体。抗体和补体的调理作用提高了捕获效率，但不是所有吞噬都依赖调理素；补体受体怎样进入这条路线见[补体系统](complement.md)。

新生吞噬体随后改变脂质和 Rab 蛋白组成，与内体、溶酶体或粒细胞颗粒交换膜和内容物。质子泵、离子通量、酸性水解酶、抗菌肽及金属离子限制共同塑造杀伤环境。吞噬体膜上的 NADPH 氧化酶 2（NOX2）把电子传给氧，迅速形成超氧阴离子及后续活性氧；中性粒细胞的髓过氧化物酶还能利用过氧化氢和氯离子产生强氧化剂。所谓“呼吸爆发”指这段耗氧的氧化反应，并非线粒体呼吸突然增强。不同细胞的吞噬体成熟、pH 和颗粒组成并不相同，不能用单一的“强酸溶酶体”描述全部吞噬细胞。[^phagosome]

中性粒细胞还可在特定条件下释放由染色质和颗粒蛋白组成的胞外网（NET），限制胞外微生物的扩散。NET 及泄漏的蛋白酶、氧化剂也可能伤害内皮和周围组织；它们是条件依赖的效应方式，不是吞噬过程必然的终点。

## 炎症小体连接胞质扰动、细胞因子成熟与焦亡 { #inflammasomes-pyroptosis }

炎症小体是胞质中按需组装的蛋白复合体，并非“炎症反应”的统称。以 NLRP3 炎症小体为例，TLR 或细胞因子信号先经 NF-κB 提高 NLRP3 和未成熟 IL-1β 的表达，构成启动阶段；随后离子通量、细胞器损伤或晶体等多类扰动促进复合体组装。NLRP3 更像读取若干共同的细胞稳态变化，而非直接结合所有已知刺激。AIM2 可感知胞质双链 DNA，NAIP—NLRC4 系统则可响应某些细菌鞭毛蛋白或分泌装置成分。[^inflammasome]

组装后的炎症小体激活半胱天冬酶-1，使前体 IL-1β、IL-18 成熟，并切割 gasdermin D。gasdermin D 的氨基端在质膜形成孔，允许细胞因子释放并可推进焦亡。成孔、膜修复和最终裂解之间仍受刺激强度和细胞状态调节，因此释放 IL-1β 与细胞立即完全裂解并非绝对同步。人细胞中的半胱天冬酶-4／5还可直接响应胞质脂多糖，形成与经典炎症小体相连的非经典通路。[^gasdermin]

## 干扰素建立可传播的细胞内抗病毒状态 { #interferons }

病毒核酸被内体 TLR、胞质 RLR 或 cGAS—STING 等系统感知后，IRF3、IRF7 等转录因子促进 I 型干扰素产生。IFN-α、IFN-β 并非分别固定来自 B 细胞和成纤维细胞；多种感染细胞和免疫细胞都能按受体与状态产生它们。I 型干扰素结合广泛表达的 IFNAR，经 JAK1、TYK2 以及 STAT1—STAT2—IRF9 复合体诱导大量干扰素刺激基因。这些蛋白从核酸识别、翻译抑制、核酸降解到病毒组装和出芽等不同环节改变细胞许可性，同时向邻近细胞传播预警。干扰素本身不是直接溶解病毒的毒素。[^type-i-ifn]

III 型干扰素 IFN-λ 可诱导与 I 型干扰素部分重叠的抗病毒程序，但其受体分布更受限制，在上皮屏障尤为重要。II 型干扰素 IFN-γ 主要由 NK 细胞和活化 T 细胞产生，经 IFNGR—STAT1 增强巨噬细胞抗微生物效应和抗原呈递。三型干扰素以受体和生物学情境区分，不构成由弱到强的等级。及时而局部的干扰素有利于限制感染，过久或位置不当的信号也可能促进免疫病理、免疫耗竭或继发易感。[^type-ii-iii-ifn]

## 局部炎症把分子警报放大到组织尺度 { #local-inflammation }

炎症是组织对感染或损伤的整合反应。组胺、前列腺素、白三烯、细胞因子和趋化因子改变血管张力与通透性，并在内皮表面诱导选择素、黏附分子和趋化信号。白细胞由此依次完成滚动、牢固黏附、跨内皮迁移和组织内定向。局部血流增加造成红与热，液体和蛋白外渗参与肿胀，缓激肽、前列腺素、细胞因子以及组织压力共同促成疼痛；组织结构受损和主动保护性行为还会造成不同程度的功能障碍。完整的血管反应与募集时序见[炎症局部反应](../physiology/pathophysiology/fever_inflammation_stress.md#local-inflammation)和[白细胞募集](../physiology/pathophysiology/fever_inflammation_stress.md#leukocyte-recruitment)。

这种局部放大能把效应分子和细胞集中到受损区域，也可能在失控时伤及宿主。发热、急性期反应和全身炎症是局部介质进入循环后的另一层生理组织，见[发热通路](../physiology/pathophysiology/fever_inflammation_stress.md#fever-pathway)与[全身炎症反应](../physiology/pathophysiology/fever_inflammation_stress.md#systemic-inflammatory-response)。皮肤和黏膜怎样减少微生物进入由[屏障与黏膜免疫](mucosal_immunity.md)展开；病原体如何借毒素、组织侵袭与免疫逃逸改变这一平衡，则见[感染、宿主防御与免疫逃逸](../micro/infection_immunity.md#layered-host-defense)。

## 炎症消退是主动的清除与重建 { #resolution }

刺激被控制后，炎症不会只靠介质自然稀释而结束。趋化信号减弱，脂质介质谱发生转换，中性粒细胞停止进入并陆续凋亡；巨噬细胞识别和吞入这些凋亡细胞的过程称胞葬（efferocytosis）。胞葬避免细胞内容物继发泄漏，还促使巨噬细胞减少促炎介质、增加支持修复与清除的信号。淋巴引流、基质重塑和实质细胞再生共同决定组织能否恢复原有结构。[^efferocytosis]

脂氧素、消退素和保护素等促消退脂质介质可限制进一步募集并促进清除。促消退不只是广泛压低免疫反应：它要求终止炎症的同时继续移除微生物、死亡细胞和碎片。持续感染、异物、反复组织损伤或胞葬失败都会使反应转入慢性化和纤维化，炎症与修复的详细组织结局见[炎症消退](../physiology/pathophysiology/fever_inflammation_stress.md#inflammation-resolution)。[^pro-resolving-mediators]

## 反应历史会重设固有免疫阈值 { #innate-memory }

固有免疫细胞及其祖细胞会留下功能状态。强烈或反复的某些刺激可产生耐受样低反应，避免相同警报持续放大；另一些感染或疫苗刺激则通过代谢和表观遗传重编程，使单核细胞、巨噬细胞、NK 细胞甚至造血祖细胞在以后反应得更快或更强，这种现象称训练免疫。它可以改变广谱防御和炎症风险，却没有依靠 V(D)J 重排产生的克隆性抗原受体，因而不等同于 B、T 细胞的抗原特异性记忆。[^trained-immunity]

## 参考资料与延伸阅读 { #references }

- Murphy K, Weaver C, Berg LJ. *Janeway's Immunobiology*. 10th ed. W. W. Norton, 2022.
- Takeuchi O, Akira S. Pattern recognition receptors and inflammation. *Cell*. 2010;140:805–820.
- Swanson KV, Deng M, Ting JP-Y. The NLRP3 inflammasome: molecular activation and regulation to therapeutics. *Nature Reviews Immunology*. 2019;19:477–489.
- Ivashkiv LB, Donlin LT. Regulation of type I interferon responses. *Nature Reviews Immunology*. 2014;14:36–49.
- Serhan CN, Brain SD, Buckley CD, et al. Resolution of inflammation: state of the art, definitions and terms. *FASEB Journal*. 2007;21:325–332.

[^innate-overview]: 固有免疫的胚系编码受体、屏障、吞噬细胞与快速反应框架，参见 NCBI Bookshelf [Innate Immunity](https://www.ncbi.nlm.nih.gov/books/NBK10769/)；免疫细胞的发育来源和组织位置见[免疫细胞、组织与迁移](immune_cells_tissues.md)。
[^prr-families]: TLR、RLR、NLR 和 CLR 的主要家族及其炎症输出，参见 Takeuchi 与 Akira [Pattern recognition receptors and inflammation](https://pubmed.ncbi.nlm.nih.gov/20303872/)；受体的质膜、内体和胞质区室关系参见 Kagan [Innate Immune Pattern Recognition](https://pmc.ncbi.nlm.nih.gov/articles/PMC5146691/)。
[^cgas-sting]: cGAS—STING 对病原体与自身来源胞质 DNA 的感知、第二信使和疾病接口，参见 Zhang 与 Zhang [The cGAS–STING pathway in health and disease](https://www.nature.com/articles/s41577-024-01112-7)。
[^cytokine-network]: TNF、IL-1、IL-6、IL-12 与趋化因子的早期组织作用，参见 NCBI Bookshelf [Induced innate responses to infection](https://www.ncbi.nlm.nih.gov/books/NBK27122/)；JAK—STAT 与 NF-κB 的通用分子接口同时承接本地 S04 对应知识块。
[^phagosome]: 吞噬体形成、颗粒融合、NOX2 呼吸爆发和中性粒细胞吞噬体离子环境，参见 Naish 等 [The formation and function of the neutrophil phagosome](https://pmc.ncbi.nlm.nih.gov/articles/PMC10952784/)；受体驱动的肌动蛋白吞入同时承接本地 S04 胞吞知识块。
[^inflammasome]: NLRP3 的启动、激活、稳态扰动和下游半胱天冬酶-1，参见 Swanson、Deng 与 Ting [The NLRP3 inflammasome](https://www.nature.com/articles/s41577-019-0165-0)。
[^gasdermin]: Gasdermin D 切割、成孔、焦亡及膜修复之间的关系，参见 Devant 与 Kagan [Molecular mechanisms of gasdermin D pore-forming activity](https://www.nature.com/articles/s41590-023-01526-w)。
[^type-i-ifn]: I 型干扰素受体、JAK1／TYK2、ISGF3 与干扰素刺激基因，参见 Ivashkiv 与 Donlin [Regulation of type I interferon responses](https://www.nature.com/articles/nri3581)。
[^type-ii-iii-ifn]: IFN-λ 的受体限制与屏障抗病毒作用，参见 Stanifer、Pervolaraki 与 Boulant [Type III interferons: Beyond antiviral protection](https://pmc.ncbi.nlm.nih.gov/articles/PMC7141597/)；IFN-γ 的来源和巨噬细胞效应参见 NCBI Bookshelf [Innate Immunity](https://www.ncbi.nlm.nih.gov/books/NBK10769/)。
[^efferocytosis]: 凋亡细胞识别、吞入以及胞葬对炎症消退和组织稳态的作用，参见 Doran、Yurdagul 与 Tabas [Efferocytosis in health and disease](https://www.nature.com/articles/s41577-019-0240-6)。
[^pro-resolving-mediators]: 炎症消退的主动程序与脂氧素、消退素、保护素等介质，参见 Serhan 等 [Resolving inflammation](https://www.nature.com/articles/nri2294)。
[^trained-immunity]: 训练免疫的代谢、表观遗传和造血祖细胞基础及其与适应性记忆的边界，参见 Netea 等 [Defining trained immunity and its role in health and disease](https://pubmed.ncbi.nlm.nih.gov/32132681/)。
