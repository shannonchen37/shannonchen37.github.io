import{_ as a,o as e,c as t,U as r}from"./chunks/framework.489e5108.js";const b=JSON.parse('{"title":"如何读论文","description":"","frontmatter":{},"headers":[],"relativePath":"1.杭电生存指南/1.10如何读论文.md","filePath":"1.杭电生存指南/1.10如何读论文.md","lastUpdated":1696176798000}'),l={name:"1.杭电生存指南/1.10如何读论文.md"},o=r('<h1 id="如何读论文" tabindex="-1">如何读论文 <a class="header-anchor" href="#如何读论文" aria-label="Permalink to &quot;如何读论文&quot;">​</a></h1><h2 id="讲在前面" tabindex="-1">讲在前面 <a class="header-anchor" href="#讲在前面" aria-label="Permalink to &quot;讲在前面&quot;">​</a></h2><p>仅供参考，如有不足，不吝赐教。</p><p>如何找论文、读论文的工具</p><p><a href="https://www.connectedpapers.com/" target="_blank" rel="noreferrer">connectedpaper</a> 输出一篇论文名字以后，会展示与之相关的论文。可以迭代的搜索。</p><p><a href="https://paperswithcode.com/" target="_blank" rel="noreferrer">Paperwithcode</a> 顾名思义，此外有 SOTA 的 list 。</p><h2 id="明确读论文的目的" tabindex="-1">明确读论文的目的 <a class="header-anchor" href="#明确读论文的目的" aria-label="Permalink to &quot;明确读论文的目的&quot;">​</a></h2><p>读一篇论文需要明确目的，目的不同也决定了读论文的方式不同。读论文的目的无外乎一下几点：</p><ol><li>纯小白，第一次读论文，导师让我读一读这一篇论文。</li><li>了解这个领域。</li><li>了解这篇 paper 的方法。</li><li>要复现这篇论文。</li><li>寻找一些灵感。</li></ol><p>第一种通常的目的通常会包含在其他情况下。</p><h2 id="论文的结构" tabindex="-1">论文的结构 <a class="header-anchor" href="#论文的结构" aria-label="Permalink to &quot;论文的结构&quot;">​</a></h2><ol><li>Abstract 一个简单的对于论文的介绍，以及概括性的描述。</li><li>Introduction 大致介绍论文的背景知识，以及论文的贡献点。</li><li>Related work 介绍一些之前的相关工作。</li><li>Method 分模块详细介绍论文的方法。</li><li>Result and evaluation (experiment) 实验部分。</li><li>Conclusion 结论，通常会写一些优缺点，以及未来的展望。</li><li>Supplement 补充材料。一些细节的实现已经更多的实验结果。（不是每一篇论文都有）</li></ol><h2 id="如何读论文-1" tabindex="-1">如何读论文 <a class="header-anchor" href="#如何读论文-1" aria-label="Permalink to &quot;如何读论文&quot;">​</a></h2><p>在读论文之前需要先看一看有没有对应的 video，code，project page，talk 等等。</p><p>读论文需要迭代，一篇论文是其他团队耗时数月的结果，不要想着花极短的时间就能看懂 100% 。</p><p>通常看懂剩下的 10%-20% 是最花时间的，但不是每一篇论文都需要看懂剩下的 10%-20% 。</p><h3 id="第一遍——快速了解论文" tabindex="-1">第一遍 —— 快速了解论文 <a class="header-anchor" href="#第一遍——快速了解论文" aria-label="Permalink to &quot;第一遍——快速了解论文&quot;">​</a></h3><p>看论文先看 Abstract，然后再看论文的第一张图片以及对应的描述。然后看实验部分的结果。最后看论文的结论。</p><p>这一遍看论文的目的在于明确知道论文在研究什么问题。这个问题输入是什么输出是什么。论文的方法达到了一个怎样的结果。看着过程中要根据自己的目的判断一下是否需要继续读这篇论文，如果需要的话，那么在读 Conclusion 的时候要关注一下论文分为了哪几个模块。</p><h3 id="第二遍——了解这个领域-了解这篇-paper-的方法" tabindex="-1">第二遍 —— 了解这个领域 / 了解这篇 paper 的方法 <a class="header-anchor" href="#第二遍——了解这个领域-了解这篇-paper-的方法" aria-label="Permalink to &quot;第二遍——了解这个领域 / 了解这篇 paper 的方法&quot;">​</a></h3><p>这一遍读论文，目的不同关注的文章的部分就要有所区分。</p><p>再重新读第二遍之前，不妨先想想如果是自己的话，自己会如何考虑论文要解决的问题。</p><ul><li>了解这个领域</li></ul><p>如果是要通过这篇文章了解这个领域，那么论文的 Introduction 以及 Related work 部分就要仔细的阅读。</p><p>同时记录提到的论文，结合 connectedpaper 。把相关论文的 Related work 都读一读。然后把高引用的，多篇论文都提到的论文拿出来要精读。</p><ul><li>了解这篇 paper 本身提到的方法</li></ul><p>如果是了解 paper 本身提到的方法，那么 Introduction 以及 Related work 可以非常快的过一下。甚至 Related work 也可以完全不看。</p><p>剩下的重点要关注 Method 部分。这一部分通常是论文最不太容易看懂的部分，通常会涉及到很多公式以及方法的描述。个人建议仍然采用迭代的方法，按模块划分。Method 结束以后通常要看一下实验部分，效果如何，以及实验是如何设计的，是否公平等等。</p><h3 id="第三遍——总结" tabindex="-1">第三遍 —— 总结 <a class="header-anchor" href="#第三遍——总结" aria-label="Permalink to &quot;第三遍——总结&quot;">​</a></h3><p>第三遍通常要针对论文，自己看不太懂的地方去查阅一些资料，整理。其次可以开始思考论文的 Contribution 究竟是否有效，是否合理。哪里导致了论文性能的提升，哪里又存在缺陷。</p><p>至此论文基本算是看完了。如果要复现论文，那么就需要迭代更多次，去阅读论文了。</p>',31),i=[o];function p(n,d,h,c,s,_){return e(),t("div",null,i)}const m=a(l,[["render",p]]);export{b as __pageData,m as default};
