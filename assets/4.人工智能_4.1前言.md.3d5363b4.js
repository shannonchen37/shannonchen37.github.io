import{_ as a,o as t,c as e,U as r}from"./chunks/framework.489e5108.js";const x=JSON.parse('{"title":"对 AI 大致方向的概述","description":"","frontmatter":{},"headers":[],"relativePath":"4.人工智能/4.1前言.md","filePath":"4.人工智能/4.1前言.md","lastUpdated":1696176798000}'),n={name:"4.人工智能/4.1前言.md"},o=r('<h1 id="对-ai-大致方向的概述" tabindex="-1">对 AI 大致方向的概述 <a class="header-anchor" href="#对-ai-大致方向的概述" aria-label="Permalink to &quot;对 AI 大致方向的概述&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在这个时代，相关内容是非常泛滥的，我们在本章内容中，大致的写一些目前比较有名的方向以及它的简介（也许会比 wiki 和百度有趣一点？）</p><h2 id="深度学习-的大致方向分类" tabindex="-1">深度学习 的大致方向分类 <a class="header-anchor" href="#深度学习-的大致方向分类" aria-label="Permalink to &quot;深度学习 的大致方向分类&quot;">​</a></h2><p>本模块会粗略地介绍目前审读学习的研究与应用领域，在这里提前说明：笔者也只是一名普通的杭电学生，视野与认知有限，某些领域我们了解较多就会介绍地更加详细，某些领域了解较少或笔者中无人从事相关研究，就难免会简略介绍甚至有所偏颇，欢迎大家的指正。</p><h3 id="cv-计算机视觉" tabindex="-1">CV (计算机视觉) <a class="header-anchor" href="#cv-计算机视觉" aria-label="Permalink to &quot;CV(计算机视觉)&quot;">​</a></h3><p>计算机视觉旨在<strong>用计算机模拟人类处理图片信息的能力</strong>，就比如这里有一张图片 —— 手写数字 9</p><p><img src="https://cdn.xyxsw.site/boxcnvQiaAx6WgPx64s8fBklVwh.png" alt=""></p><p>对我们人类而言，能够很轻松地知道这张图片中包含的信息（数字 9），而对计算机来说这只是一堆像素。计算机视觉的任务就是让计算机能够从这堆像素中得到‘数字 9’这个信息。</p><p>相信你通过上面简单的介绍应该能够了解到计算机视觉是在干嘛了，接下来我会举几个相对复杂的例子来让大家了解一下目前的 cv 是在做怎样的研究：</p><div class="warning custom-block"><p class="custom-block-title">🐱 <strong>图像分割</strong>是在图片中对物体分类，并且把它们所对应的位置标示出来。下图就是把人的五官，面部皮肤和头发分割出来，效 (小) 果 (丑) 图如下：</p></div><table><tr><td><img src="https://cdn.xyxsw.site/boxcnxn5GlJZmsrMV5qKNwMlDPc.jpg" width="175"></td><td><img src="https://cdn.xyxsw.site/boxcnokdWGegr2XCi1vfg0ZZiWg.png" width="200"></td><td><img src="https://cdn.xyxsw.site/boxcn2o9ilOZg6jI6ssTYWhoeme.png" width="200"></td></tr></table><div class="warning custom-block"><p class="custom-block-title">🐱 <strong>图像生成</strong>相信大家一定不陌生，NovalAI 在 2022 年火的一塌糊涂，我觉得不需要我过多赘述，对它 (Diffusion model) 的改进工作也是层出不穷，这里就放一张由可控姿势网络 (ControlNet) 生成的图片吧：</p></div><p><img src="https://cdn.xyxsw.site/boxcnUjnRociXua1yKj6dmU1A3c.png" alt=""></p><div class="warning custom-block"><p class="custom-block-title">🐱 <strong>三维重建</strong>也是很多研究者关注的方向，指的是传入对同一物体不同视角的照片，来生成 3D 建模的任务。这方面比图像处理更加前沿并且难度更大。具体见<a href="./4.6.5.4神经辐射场(NeRF).html"> 4.6.5.4 神经辐射场 (NeRF)</a> 章节。</p></div><p>如果对计算机视觉有兴趣，可以通过以下路线进行学习：深度学习快速入门 —&gt; 经典网络。本块内容的主要撰写者之一<strong> SRT 社团</strong>多数成员主要从事 CV 方向研究，欢迎与我们交流。</p><h3 id="nlp-自然语言处理" tabindex="-1">NLP (自然语言处理) <a class="header-anchor" href="#nlp-自然语言处理" aria-label="Permalink to &quot;NLP(自然语言处理)&quot;">​</a></h3><p>这就更好理解了，让计算机能够像人类一样，理解文本中的 “真正含义”。在计算机眼中，文本就是单纯的字符串，NLP 的工作就是把字符转换为计算机可理解的数据。举个例子，ChatGPT (或者 New Bing) 都是 NLP 的成果。在过去，NLP 领域被细分为了多个小任务，比如文本情感分析、关键段落提取等。而 ChatGPT 的出现可以说是集几乎所有小任务于大成，接下来 NLP 方向的工作会向 ChatGPT 的方向靠近。</p><table><tr><td><img src="https://cdn.xyxsw.site/boxcnyh6pakAkcxCKq6pLylSdef.png" width="580"></td><td><img src="https://cdn.xyxsw.site/boxcnwWnoEDulgWdqGkY0WeYogc.png" width="200"></td></tr></table><h3 id="多模态-跨越模态的处理" tabindex="-1">多模态 (跨越模态的处理) <a class="header-anchor" href="#多模态-跨越模态的处理" aria-label="Permalink to &quot;多模态 (跨越模态的处理)&quot;">​</a></h3><p>模态，可以简单理解为数据形式，比如图片是一种模态，文本是一种模态，声音是一种模态，等等……</p><p>而多模态就是让计算机能够将不同模态的信息相对应，一种常用的方法就是让计算机把图片的内容和文本的内容理解为相同的语义（在这个领域一般用一个较长的向量来表示语义）。</p><p>也就是说我<strong>传入一张狗子的照片经过模型得到的向量</strong>与<strong> DOG 这个单词经过模型得到的向量</strong>相近。</p><p>具体的任务比如说<strong>图片问答</strong>，传入一张图片，问 AI 这张图片里面有几只猫猫，它们是什么颜色，它告诉我有一只猫猫，是橙色的：</p><p><img src="https://cdn.xyxsw.site/boxcnrMvM1THshjXXOuh8WXi2zr.jpg" alt=""></p><h3 id="对比学习" tabindex="-1">对比学习 <a class="header-anchor" href="#对比学习" aria-label="Permalink to &quot;对比学习&quot;">​</a></h3><p>因为传统 AI 训练一般都需要数据集标注，比如说图片分割数据集需要人工在数万张图片上抠出具体位置，才能进行训练，这样的人力成本是巨大的，而且难以得到更多数据。因此，对比学习应运而生，这是一种不需要进行标注或者只需要少量标注的训练方式，具体可见<a href="./4.6.8对比学习"> 4.6.8 对比学习</a> 。</p><h3 id="强化学习" tabindex="-1">强化学习 <a class="header-anchor" href="#强化学习" aria-label="Permalink to &quot;强化学习&quot;">​</a></h3><p>强调模型如何依据环境（比如扫地机器人在学习家里的陈设，这时陈设就是环境）的变化而改进，以取得最大的收益（比如游戏得到最高分）。</p><p>强化学习是除了监督学习和非监督学习之外的第三种基本的机器学习方法。与监督学习不同的是，强化学习不需要带标签的输入输出对，同时也无需对非最优解的精确地纠正。其关注点在于寻找探索（对未知领域的）和利用（对已有知识的）的平衡。 -------wiki</p><p>强化学习主要理论来源于心理学中的动物学习和最优控制的控制理论。说的通俗点，强化学习就是操控智能体与环境交互、去不断试错，在这个过程中进行学习。因此，强化学习被普遍地应用于游戏、资源优化分配、机器人等领域。强化学习本身已经是个老东西了，但是和深度学习结合之后焕发出了第二春 —— 深度强化学习（DRL）。</p><p>深度强化学习最初来源是 2013 年谷歌 DeepMind 团队发表的《Playing Atari with Deep Reinforcement Learning》一文，正式提出 Deep Q-network（DQN）算法。在这篇论文中，DeepMind 团队训练智能体 Agent 玩雅达利游戏，并取得了惊人的成绩。事实上，深度强化学习最为人熟知的成就是 AlphaGO Zero，它没有使用任何人类棋谱进行训练，训练了三天的成就就已经超过了人类几千年的经验积累<del>导致柯洁道心破碎</del>。</p><h2 id="交叉学科-经典机器学习算法" tabindex="-1">交叉学科 &amp; 经典机器学习算法 <a class="header-anchor" href="#交叉学科-经典机器学习算法" aria-label="Permalink to &quot;交叉学科&amp;经典机器学习算法&quot;">​</a></h2><p>交叉学科巨大的难度在于你往往需要掌握多个学科以及其相对应的知识。</p><p>举个例子：如果你想要做出一个可以识别病人是否得了某种疾病，现在你得到了一批数据，你首先得自己可以标注出或者找到这个数据中，哪些是有问题的，并且可以指明问题在哪，如果你想分出更具体的，比如具体哪里有问题，那你可能甚至需要熟悉他并且把他标注出来。</p><p>目前其实全学科都有向着 AI 走的趋势，例如量化金融，医疗，生物科学 (nature 的那篇有关氨基酸的重大发现真的很 cool)。他们很多都在用非常传统的机器学习算法，甚至有的大公司的算法岗在处理某些数据的时候，可能会先考虑用最简单的决策树试一试</p><p>当然，在大语言模型出现的趋势下，很多学科的应用会被融合会被简化会被大一统 (科研人的崇高理想)，但是不得不提的是，传统的机器学习算法和模型仍然希望你能去了解甚至更进一步学习。</p><p>除了能让你了解所谓前人的智慧，还可以给你带来更进一步的在数学思维，算法思维上的提高。</p><h2 id="and-more" tabindex="-1">And more? <a class="header-anchor" href="#and-more" aria-label="Permalink to &quot;And more?&quot;">​</a></h2><p>我们对 AI 的定义如果仅仅只有这些内容，我认为还是太过于狭隘了，我们可以把知识规划，知识表征等等东西都可以将他划入 AI 的定义中去，当然这些还期待着你的进一步探索和思考～</p><h2 id="特别致谢" tabindex="-1">特别致谢 <a class="header-anchor" href="#特别致谢" aria-label="Permalink to &quot;特别致谢&quot;">​</a></h2><p>非常荣幸能在本章中得到 IIPL 智能信息处理实验室 <a href="http://iipl.net.cn" target="_blank" rel="noreferrer">http://iipl.net.cn</a> 的宝贵贡献，衷心感谢他们的无私支持与帮助！</p><p>希望加入 IIPL？欢迎移步<a href="./SRT"> SRT 社团介绍</a>～</p>',43),i=[o];function s(p,l,c,h,d,g){return t(),e("div",null,i)}const b=a(n,[["render",s]]);export{x as __pageData,b as default};
