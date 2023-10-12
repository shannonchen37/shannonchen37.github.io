import{_ as a,o as t,c as r,U as o}from"./chunks/framework.489e5108.js";const m=JSON.parse('{"title":"SwAV","description":"","frontmatter":{},"headers":[],"relativePath":"4.人工智能/4.6.8.6SwAV.md","filePath":"4.人工智能/4.6.8.6SwAV.md","lastUpdated":1696176798000}'),e={name:"4.人工智能/4.6.8.6SwAV.md"},n=o('<h1 id="swav" tabindex="-1">SwAV <a class="header-anchor" href="#swav" aria-label="Permalink to &quot;SwAV&quot;">​</a></h1><h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><p>与前面的一些工作不同，SwAV<strong> 不再进行个体判别任务</strong>，而是提出了新的任务 ————<strong> 聚类</strong></p><p>并在训练的模型结构上也做了相应改动，而非只调整训练方法。</p><p>这里因为涉及到了聚类，具体数学推导难度较大，有兴趣可以跟着我后面贴的视频走一遍</p><h1 id="提出的背景" tabindex="-1">提出的背景 <a class="header-anchor" href="#提出的背景" aria-label="Permalink to &quot;提出的背景&quot;">​</a></h1><h2 id="个体判别任务的局限性" tabindex="-1">个体判别任务的局限性 <a class="header-anchor" href="#个体判别任务的局限性" aria-label="Permalink to &quot;个体判别任务的局限性&quot;">​</a></h2><p>1. 进行个体判别任务时，我们有可能选到与正样本属于一个类的特征作为负样本，比如两张不同狗的图片等等，这会影响学习的效率。</p><p>2. 个体判别任务把类别分的过细，不能很好地抽取特征，过多的类也增大了计算压力和字典储存压力。作者认为这过于原始和暴力。</p><h1 id="模型结构" tabindex="-1">模型结构 <a class="header-anchor" href="#模型结构" aria-label="Permalink to &quot;模型结构&quot;">​</a></h1><p>下图左边是常规的对比学习（比如 SimCLR）的结构，右图是 SWAV 的结构，不难看出多了一个叫 prototypes 的东西。这个东西其实是聚类中心向量所构成的矩阵。</p><p><img src="https://cdn.xyxsw.site/boxcnGteJZelEtVqBFwwukw7c8g.png" alt=""></p><p>下面的内容可能有些理解上的难度（反正我第一次听讲解的时候就云里雾里的），我会尽可能直白地描述这个过程。</p><h2 id="聚类中心" tabindex="-1">聚类中心？ <a class="header-anchor" href="#聚类中心" aria-label="Permalink to &quot;聚类中心？&quot;">​</a></h2><p>首先我们有个新的东西<strong> prototypes</strong>，它是<strong>聚类中心的集合</strong>，也就是许多作为聚类中心的向量构成的矩阵。</p><p>这些聚类中心是我设定在超球面上的，离散的一些点，我希望让不同的特征向它们靠拢以进行区分（也就是所谓聚类）。</p><p>更直白地讲，我在地上撒了一把面包屑，地上本来散乱的蚂蚁会向面包屑聚集，形成一个个<strong>小团体</strong>。蚂蚁就是<strong>不同图像的特征</strong>，面包屑就是<strong>我设定的聚类中心</strong></p><h2 id="聚类中心我知道了-然后呢" tabindex="-1">聚类中心我知道了，然后呢？ <a class="header-anchor" href="#聚类中心我知道了-然后呢" aria-label="Permalink to &quot;聚类中心我知道了，然后呢？&quot;">​</a></h2><p>先说我拿他干了什么，再一步步讲为什么要这么做吧。</p><p>首先我们手里有抽取出来的特征<strong> z1</strong>，<strong>z2</strong>，以及一个我随机初始化的<strong>聚类中心矩阵 c</strong>。我分别求这个<strong>矩阵</strong>和<strong> z1</strong>，<strong>z2</strong> 的内积，并<strong>进行一些变换</strong>得到 Q1,Q2。当 z1，z2 都是正样本时，我希望<strong> Q1 与 z2 相近</strong>，<strong>Q2 与 z1 相近</strong>。如果有一个是负样本则尽可能远离。也就是拿 Q 当 ground-truth 做训练。最后这步前面已经讲过 NCEloss 等损失函数了，用它们就可以达成这个任务。</p><p>而我们的优化要采用 <a href="https://zhuanlan.zhihu.com/p/78798251" target="_blank" rel="noreferrer">K-means</a> (不懂可以看这里) 的类似做法，先对聚类中心进行优化，再对特征进行优化。</p><p><img src="https://cdn.xyxsw.site/boxcnKe4DzDfdNbhhHowdE4BJEf.png" alt=""></p><p>so，why？相信你现在肯定是一脸懵，不过别急，希望我能为你讲懂。</p><h2 id="首先是第一步-为什么要求内积" tabindex="-1">首先是第一步，为什么要求内积？ <a class="header-anchor" href="#首先是第一步-为什么要求内积" aria-label="Permalink to &quot;首先是第一步，为什么要求内积？&quot;">​</a></h2><p>如果你有好好了解线性代数的几何性质，应当了解<strong>两个向量的内积就是一个向量在另一个向量上的投影</strong>，而一个向量与一个矩阵的内积，<strong>就是把这个向量投影到这个矩阵代表的基空间中</strong>。</p><p>我做的第一步就是把<strong>抽出来的特征 z 用聚类中心的向量表示，这样更加方便对比聚类成功与否</strong>。</p><h2 id="然后是第二步-我说的变换是什么呢" tabindex="-1">然后是第二步，我说的变换是什么呢？ <a class="header-anchor" href="#然后是第二步-我说的变换是什么呢" aria-label="Permalink to &quot;然后是第二步，我说的变换是什么呢？&quot;">​</a></h2><p>我们现在求内积是为了把特征投影到聚类中心空间，为了避免模型训练坍塌（就是网络把特征全部聚到同一个点，<del>开摆～</del>）我要保证每个聚类中心被 **&quot;使用&quot;<strong> 的次数，所以我们请出了</strong> Sinkhorn-Knopp 算法。** 这个算法比较硬核，我在这里不展开了，大家知道它是干啥的就行，具体的推导可以看我后面贴的视频，那里面有讲。</p><h2 id="第三步应该不用怎么讲了吧" tabindex="-1">第三步应该不用怎么讲了吧？ <a class="header-anchor" href="#第三步应该不用怎么讲了吧" aria-label="Permalink to &quot;第三步应该不用怎么讲了吧？&quot;">​</a></h2><p>就是普通的对比学习，也没啥特殊的了。正样本是自身通过数据增强和上面两步处理得到的特征，负样本则是同一 batch 中的其他特征。</p><h1 id="数据增强的小-trick-multi-crop" tabindex="-1">数据增强的小 trick：multi-crop <a class="header-anchor" href="#数据增强的小-trick-multi-crop" aria-label="Permalink to &quot;数据增强的小 trick：multi-crop&quot;">​</a></h1><p>其实就是一个工程经验，一般我们数据增强是取 2 个 224*224 的块，这里换成了面积基本不变的 2 大 2 小的 4 个块，事实证明效果不错。想了解这个的话可以看看原论文的实验</p><h1 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h1><p>主要贡献是上面我说的三步聚类算法以及后面的小 trick，<strong>Sinkhorn-Knopp 算法难度较高，大家有兴趣的话自行观看后面这个视频理解哈～</strong></p><h1 id="相关资料" tabindex="-1">相关资料 <a class="header-anchor" href="#相关资料" aria-label="Permalink to &quot;相关资料&quot;">​</a></h1><p>【[论文简析] SwAV: Swapping Assignments between multiple Views [2006.09882]】</p>',36),s=[n];function i(h,p,l,c,d,g){return t(),r("div",null,s)}const b=a(e,[["render",i]]);export{m as __pageData,b as default};
