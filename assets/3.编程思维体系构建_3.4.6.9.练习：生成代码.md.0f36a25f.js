import{_ as s,o as n,c as a,U as e}from"./chunks/framework.489e5108.js";const q=JSON.parse('{"title":"9.练习：生成代码","description":"","frontmatter":{},"headers":[],"relativePath":"3.编程思维体系构建/3.4.6.9.练习：生成代码.md","filePath":"3.编程思维体系构建/3.4.6.9.练习：生成代码.md","lastUpdated":1696176798000}'),l={name:"3.编程思维体系构建/3.4.6.9.练习：生成代码.md"},p=e(`<h1 id="_9-练习-生成代码" tabindex="-1">9. 练习：生成代码 <a class="header-anchor" href="#_9-练习-生成代码" aria-label="Permalink to &quot;9.练习：生成代码&quot;">​</a></h1><p><em>到目前为止，我们的冒险游戏有 10 个对象。每个对象由有 5 个属性组成。一个真正的文本冒险可能有数百个甚至数千个对象，并且每个对象的属性数量也可能增加（请参阅下一章）。在目前的形式下，维护如此庞大的对象和属性列表将很困难。</em></p><p>例如，当我们在添加对象 <em>wallField</em> 和 <em>wallCave</em> 时，我们必须在三个不同的位置执行此操作：一次在 <em>object.h</em> 中（作为<em>#define</em>），两次在 <em>object.c</em> 中（数组 <em>objs</em> 中的一个元素，以及一个单独的标签数组）。这显然十分笨拙并且容易出错。</p><p>我们将不再手工维护 object. h 和 object. c，而是从更适合我们需要的单一源开始生成文件。这个新的源文件可以用你喜欢的任何语言 (典型的是某些特定领域的语言)，只要你有工具把它转换回 C。下面是一个简单的例子，考虑下列布局来组织我们的对象：</p><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">                 /* Raw C code (declarations) */</span></span>
<span class="line"><span style="color:#e1e4e8;">- ObjectName</span></span>
<span class="line"><span style="color:#e1e4e8;">      AttributeName AttributeValue</span></span>
<span class="line"><span style="color:#e1e4e8;">      AttributeName AttributeValue</span></span>
<span class="line"><span style="color:#e1e4e8;">      ...</span></span>
<span class="line"><span style="color:#e1e4e8;">- ObjectName</span></span>
<span class="line"><span style="color:#e1e4e8;">      AttributeName AttributeValue</span></span>
<span class="line"><span style="color:#e1e4e8;">      AttributeName AttributeValue</span></span>
<span class="line"><span style="color:#e1e4e8;">      ...</span></span>
<span class="line"><span style="color:#e1e4e8;">- ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">                 /* Raw C code (declarations) */</span></span>
<span class="line"><span style="color:#24292e;">- ObjectName</span></span>
<span class="line"><span style="color:#24292e;">      AttributeName AttributeValue</span></span>
<span class="line"><span style="color:#24292e;">      AttributeName AttributeValue</span></span>
<span class="line"><span style="color:#24292e;">      ...</span></span>
<span class="line"><span style="color:#24292e;">- ObjectName</span></span>
<span class="line"><span style="color:#24292e;">      AttributeName AttributeValue</span></span>
<span class="line"><span style="color:#24292e;">      AttributeName AttributeValue</span></span>
<span class="line"><span style="color:#24292e;">      ...</span></span>
<span class="line"><span style="color:#24292e;">- ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>根据到目前为止收集的对象，我们可以构造以下源文件。文件名并不重要；我只是简单地将其命名为<em> object.txt</em>，以明确它与<em> object.h</em> 和<em> object.c</em> 相关。</p><h2 id="object-txt" tabindex="-1">object.txt <a class="header-anchor" href="#object-txt" aria-label="Permalink to &quot;object.txt&quot;">​</a></h2><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &quot;object.h&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">typedef struct object {</span></span>
<span class="line"><span style="color:#e1e4e8;">   const char    *description;</span></span>
<span class="line"><span style="color:#e1e4e8;">   const char   **tags;</span></span>
<span class="line"><span style="color:#e1e4e8;">   struct object *location;</span></span>
<span class="line"><span style="color:#e1e4e8;">   struct object *destination;</span></span>
<span class="line"><span style="color:#e1e4e8;">} OBJECT;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">extern OBJECT objs[];</span></span>
<span class="line"><span style="color:#e1e4e8;">//对象</span></span>
<span class="line"><span style="color:#e1e4e8;">- field</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;an open field&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;field&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- cave</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;a little cave&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;cave&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- silver</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;a silver coin&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;silver&quot;, &quot;coin&quot;, &quot;silver coin&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    field</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- gold</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;a gold coin&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;gold&quot;, &quot;coin&quot;, &quot;gold coin&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    cave</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- guard</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;a burly guard&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;guard&quot;, &quot;burly guard&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    field</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- player</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;yourself&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;yourself&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    field</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- intoCave</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;a cave entrance to the east&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;east&quot;, &quot;entrance&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    field</span></span>
<span class="line"><span style="color:#e1e4e8;">     destination cave</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- exitCave</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;an exit to the west&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;west&quot;, &quot;exit&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    cave</span></span>
<span class="line"><span style="color:#e1e4e8;">     destination field</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- wallField</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;dense forest all around&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;west&quot;, &quot;north&quot;, &quot;south&quot;, &quot;forest&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    field</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- wallCave</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;solid rock all around&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;east&quot;, &quot;north&quot;, &quot;south&quot;, &quot;rock&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    cave</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &quot;object.h&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">typedef struct object {</span></span>
<span class="line"><span style="color:#24292e;">   const char    *description;</span></span>
<span class="line"><span style="color:#24292e;">   const char   **tags;</span></span>
<span class="line"><span style="color:#24292e;">   struct object *location;</span></span>
<span class="line"><span style="color:#24292e;">   struct object *destination;</span></span>
<span class="line"><span style="color:#24292e;">} OBJECT;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">extern OBJECT objs[];</span></span>
<span class="line"><span style="color:#24292e;">//对象</span></span>
<span class="line"><span style="color:#24292e;">- field</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;an open field&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;field&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- cave</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;a little cave&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;cave&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- silver</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;a silver coin&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;silver&quot;, &quot;coin&quot;, &quot;silver coin&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    field</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- gold</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;a gold coin&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;gold&quot;, &quot;coin&quot;, &quot;gold coin&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    cave</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- guard</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;a burly guard&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;guard&quot;, &quot;burly guard&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    field</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- player</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;yourself&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;yourself&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    field</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- intoCave</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;a cave entrance to the east&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;east&quot;, &quot;entrance&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    field</span></span>
<span class="line"><span style="color:#24292e;">     destination cave</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- exitCave</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;an exit to the west&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;west&quot;, &quot;exit&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    cave</span></span>
<span class="line"><span style="color:#24292e;">     destination field</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- wallField</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;dense forest all around&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;west&quot;, &quot;north&quot;, &quot;south&quot;, &quot;forest&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    field</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- wallCave</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;solid rock all around&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;east&quot;, &quot;north&quot;, &quot;south&quot;, &quot;rock&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    cave</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">🤔 思考题：你能否自己用 C 来实现这段伪代码？</p></div>`,9),o=[p];function t(c,r,i,u,b,y){return n(),a("div",null,o)}const m=s(l,[["render",t]]);export{q as __pageData,m as default};
