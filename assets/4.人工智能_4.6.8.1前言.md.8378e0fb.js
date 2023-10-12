import{_ as t,o,c as p,U as e}from"./chunks/framework.489e5108.js";const u=JSON.parse('{"title":"前言","description":"","frontmatter":{},"headers":[],"relativePath":"4.人工智能/4.6.8.1前言.md","filePath":"4.人工智能/4.6.8.1前言.md","lastUpdated":1696176798000}'),a={name:"4.人工智能/4.6.8.1前言.md"},r=e('<h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><blockquote><p>作者：可可</p></blockquote><p>对比学习是近来比较热门的一个方向，它属于无监督学习的一种，在阅读本文前，请确保已经掌握 cv 和 nlp 的基础知识并且了解 transformer。本文致力于把论文本身讲的故事通俗的概括出来，以便大家理解发展路程。</p><p>打个比方，一个梨很甜，用数学的语言可以表述为糖分含量 90%，但只有亲自咬一口，你才能真正感觉到这个梨有多甜，也才能真正理解数学上的 90% 的糖分究竟是怎么样的。</p><p>如果对比学习是个梨，本文的目的就是带领大家咬一口。</p><p>这类方法训练需要消耗巨大的算力（微调改进那种另说），我也没有能力去训练这类模型（好贵！</p><h1 id="何为对比" tabindex="-1">何为对比 <a class="header-anchor" href="#何为对比" aria-label="Permalink to &quot;何为对比&quot;">​</a></h1><p>对比学习，故名思意，是对比着来学习。而我们拿来对比的东西就是在模型眼里的语义，也就是我们叫做特征的向量。</p><p>在具体讲对比之前，我们先看看传统的<strong>监督学习</strong>是怎么学特征的：</p><p>数据 + 模型 =&gt; 特征，特征对人工标注进行学习，也就是说我们要把模型抽取的特征尽可能的靠近人工标注</p><p>而在无监督学习中，我们不希望有人工标注的出现，那么一种方法就是让同类的特征进可能相近，也就是我们说的聚类。</p><p>直观来讲，我们把特征的向量进行一下归一化，它们就分布在一个超球面上。简单起见，我们先看 3 维向量</p><p><img src="https://cdn.xyxsw.site/boxcnJ6HpIJqxJuxiz7Cw5GopSh.png" alt=""></p><p>我们通过<strong>正样本</strong>（跟拿到的特征<strong>应当相近</strong>的另一个特征）与<strong>负样本</strong>（反之）的对比，使得</p><p>越相近的物体，它们的特征就在超球面上越靠近，越不像的物体离的越远，去学习图片更本质的特征</p><p>那么具体的对比学习方法我在后面结合一些论文一起讲吧～</p><p>这部分内容更像一个综述，讲述对比学习这几年的发展路程，所以我会尽可能的描述作者在论文里讲的<strong>故事</strong>，来方便大家弄清为什么要这么做。</p><p><strong>可能会有很多我的主观理解在此</strong>，并且<strong>不会</strong>深入细节。可以算是一个总结和分享，我会在这里带着读者过一遍近期对比学习的工作来给大家一个对比学习方向的直观感性理解。</p><p>同时因为笔者水平，视野，精力有限，不可能包含所有的算法，也不可能保证完全正确。因此仅作为笔记分享使用。若有错误，请多多指正。</p><blockquote><p>若对文章内容有任何疑惑或者批评指正，可以联系我</p></blockquote>',20),s=[r];function n(_,c,i,l,d,g){return o(),p("div",null,s)}const m=t(a,[["render",n]]);export{u as __pageData,m as default};
