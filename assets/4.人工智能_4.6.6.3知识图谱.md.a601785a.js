import{_ as e,o as a,c as t,U as r}from"./chunks/framework.489e5108.js";const g=JSON.parse('{"title":"知识图谱","description":"","frontmatter":{},"headers":[],"relativePath":"4.人工智能/4.6.6.3知识图谱.md","filePath":"4.人工智能/4.6.6.3知识图谱.md","lastUpdated":1696176798000}'),l={name:"4.人工智能/4.6.6.3知识图谱.md"},o=r('<h1 id="知识图谱" tabindex="-1">知识图谱 <a class="header-anchor" href="#知识图谱" aria-label="Permalink to &quot;知识图谱&quot;">​</a></h1><h2 id="谷歌的新概念" tabindex="-1">谷歌的新概念 <a class="header-anchor" href="#谷歌的新概念" aria-label="Permalink to &quot;谷歌的新概念&quot;">​</a></h2><p>2012 年，谷歌工程师阿米特・辛格尔（Amit Singhal）在自己的 official blog 发表了一篇名叫《Introduce the Knowledge Graph》的文章，初次提出了知识图谱的概念，并将知识图谱运用于 Google 搜索中，文中介绍到，结合了知识图谱的 Google 搜索有了更强的能力：</p><ul><li>Find the right thing ：如果碰到要找的事物有同名时，你可以在相关推荐中看到</li><li>Get the best Summary：你能得到相关领域的一个很好概述</li><li>Go deeper and broader：除了你要找的知识外，你可能可以意外获得新领域的事物</li></ul><p>原文：</p><ul><li><a href="https://www.blog.google/products/search/introducing-knowledge-graph-things-not/" target="_blank" rel="noreferrer">https://www.blog.google/products/search/introducing-knowledge-graph-things-not/</a></li></ul><h2 id="发展脉络" tabindex="-1">发展脉络 <a class="header-anchor" href="#发展脉络" aria-label="Permalink to &quot;发展脉络&quot;">​</a></h2><p>不过知识图谱并非是一种新的技术和研究方向，更准确来说是一个新壶装老酒的概念包装，它的核心已有非常悠久的发展历史，甚至最早可以追溯到二十世纪五六年代，人工智能刚作为一个学科成立的时候，其中三大学派之一 —— 符号主义。</p><p>具体其发展历程参考：</p><ul><li><a href="https://mp.weixin.qq.com/s/Mcikp99bsVgxAaykctmcAw" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/Mcikp99bsVgxAaykctmcAw</a> 知识图谱的前世今生</li></ul><p>在大致了解知识图谱的历史发展脉络后，我们或许对它有了一个初步的认知 —— 一个由抽象符号构成的知识库，目的是为了让计算机理解人类的语义信息，打个不太恰当的比方，就是个计算机理解人类世界的大脑。</p><p>从中我们可以也窥探到当年符号主义学派学者们的野心，不过很显然，这条道路发展并不顺利，如今知识图谱还无法完全担任 “大脑” 这种重要的角色，绝大多时候，都是作为一个辅助位的角色，不过这个方向的潜力无疑是巨大的，并且它所能勾连的方向是非常宽广繁多的（不仅仅局限于 NLP 里），这导致了其复杂程度很高，但也衬托出其上限也可以很高。</p><p>不过这些都是题外话，继续深入，我们可能会从这个认知上延申出两个问题，一是如何存储这个知识库，而是形成这个知识库后又如何让计算机理解，毕竟计算机只懂 01。这两个问题也是知识图谱的发展方向。</p><h2 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-label="Permalink to &quot;构建&quot;">​</a></h2><p>在了解了抽象的概念后，我们将视角移到具体实现上，如何来存储这个知识库？于是，现在就需要寻找一种较为简单方便的，并且能够表达语义关系的数据结构，然后图 (Graph) 就被拉来了。了解过图的都知道，图由节点和边构成。所以如果当我们将节点看作实体，即一个个具体的事物或概念（例如小明，小红，人），再由边代表实体之间的关系（朋友关系，种族），虽然可能存在一定程度上语义表达的不完备性，但面对生活中的大多数事物，这种简单的三元组 (RDF) 关系都可以进行表示，不够就多来几组。</p><p>于是这种由 head (头实体)，relation (关系)，tail (尾实体) 所构成的有向图的数据结构，就变成了如今知识图谱的大致构成方式。不过它的整个构建流程是有一套更加详细且具体的流程的，从知识抽取到实体消歧到知识推理。</p><p>更具体的可参考：</p><ul><li><a href="https://www.woshipm.com/pmd/5328539.html" target="_blank" rel="noreferrer">https://www.woshipm.com/pmd/5328539.html</a> 产品视角下的知识图谱构建</li></ul><h2 id="让计算机理解" tabindex="-1">让计算机理解 <a class="header-anchor" href="#让计算机理解" aria-label="Permalink to &quot;让计算机理解&quot;">​</a></h2><p>在成功搭建起知识图谱这个数据库后，接下来就是最重要的一步了，让计算机理解 —— 表示学习。目前这个方向，最重要的就是向量化，将节点和关系全部向量化，一方面有向量的平移不变性的好处，另一方面也方便计算，在从中穿插点图论的相关知识，例如将知识图谱看成特大号异构图进行处理。不过这方面方向太多，难以一一列举。</p><ul><li><a href="https://www.cnblogs.com/fengwenying/default.html?page=5" target="_blank" rel="noreferrer">https://www.cnblogs.com/fengwenying/default.html?page=5</a> 胡萝不青菜的博客</li><li><a href="https://space.bilibili.com/497998686?spm_id_from=333.337.0.0" target="_blank" rel="noreferrer">up 主 骰子 AI</a> up 主 骰子 AI，知识图谱在推荐系统上的利用</li></ul>',21),i=[o];function n(h,p,s,c,d,_){return a(),t("div",null,i)}const u=e(l,[["render",n]]);export{g as __pageData,u as default};
