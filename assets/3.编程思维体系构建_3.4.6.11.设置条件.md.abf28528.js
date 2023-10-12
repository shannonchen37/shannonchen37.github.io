import{_ as s,o as n,c as a,U as l}from"./chunks/framework.489e5108.js";const d=JSON.parse('{"title":"11.设置条件","description":"","frontmatter":{},"headers":[],"relativePath":"3.编程思维体系构建/3.4.6.11.设置条件.md","filePath":"3.编程思维体系构建/3.4.6.11.设置条件.md","lastUpdated":1696176798000}'),p={name:"3.编程思维体系构建/3.4.6.11.设置条件.md"},e=l(`<h1 id="_11-设置条件" tabindex="-1">11. 设置条件 <a class="header-anchor" href="#_11-设置条件" aria-label="Permalink to &quot;11.设置条件&quot;">​</a></h1><p>到目前为止，所有对象的属性都是数据：文本、数字。但属性也可以是代码。</p><p>在上一章中，我们通过关闭洞穴入口（进入洞穴的通道）来限制玩家的行动自由。这已经让游戏变得更有挑战性了，但这并没有带来多少谜题，除非我们为玩家提供一个微小的可能性来打开通道。真正的挑战应该是让玩家找到通道打开的条件。</p><p>让我们举一个简单的例子。为了越过守卫进入山洞，玩家必须杀死或贿赂守卫（或两者兼而有之，这很有价值）。换句话说：</p><ul><li>当警卫死亡时（HP=0），入口开放</li><li>当警卫拿着银币 (贿赂警卫) 时，入口开放</li><li>两者都不是，入口关闭</li></ul><p>打开一个封闭的通道（在这里是进入洞穴）涉及到改变一些属性值：</p><ul><li>目的地从 NULL (空地点) 变为洞穴</li><li><strong>textGo</strong> 从 &quot;警卫阻止你......&quot; 改为 &quot;你走进山洞&quot;</li><li>在一些特殊情况下，描述和细节不需要改变。但对于一个门洞或栅栏，其中之一（或两者）通常会包含一些从 &quot;开放&quot; 到 &quot;关闭&quot; 的文字。</li></ul><p>有许多方法来实现这一目标。在这里，我们将讨论一种简单、可维护和通用的方法。</p><p>首先，我们定义了两个独立的通道：一个代表开放通道，另一个代表封闭通道。除了上面列出的那些，这两条通道在每一个属性上都是相同的。(在你下面看到的生成的地图中，注意有两个箭头通向洞穴；一个是实线，一个是虚线)。</p><p>接下来，我们引入一个名为条件的新属性，它决定了某个对象是否存在。这两个通道将被赋予互斥的条件，因此在任何时候都只能有一个存在。</p><p>每个条件将被实现为一个布尔函数：<strong>TRUE</strong> 意味着该对象存在，<strong>FALSE</strong> 意味着它不存在。</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">intoCaveIsOpen</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> guard-&gt;health </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> silver-&gt;location </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> guard;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">intoCaveIsClosed</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> guard-&gt;health </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> silver-&gt;location </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> guard;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">intoCaveIsOpen</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> guard-&gt;health </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> silver-&gt;location </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> guard;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">intoCaveIsClosed</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> guard-&gt;health </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> silver-&gt;location </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> guard;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">🤔 思考题：你能仿照上面例子自己写一些条件函数吗？</p></div><p>新的属性条件是一个指向这样一个函数的指针。</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">condition)(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">condition)(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>接下来，我们可以立即开始为 object.txt 中的新属性分配函数。</p><h2 id="object-txt" tabindex="-1">object.txt <a class="header-anchor" href="#object-txt" aria-label="Permalink to &quot;object.txt&quot;">​</a></h2><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">- intoCave</span></span>
<span class="line"><span style="color:#e1e4e8;">     condition   intoCaveIsOpen</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;a cave entrance to the east&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;east&quot;, &quot;entrance&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    field</span></span>
<span class="line"><span style="color:#e1e4e8;">     destination cave</span></span>
<span class="line"><span style="color:#e1e4e8;">     detail      &quot;The entrance is just a narrow opening in a small outcrop.\\n&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     textGo      &quot;You walk into the cave.\\n&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- intoCaveBlocked</span></span>
<span class="line"><span style="color:#e1e4e8;">     condition   intoCaveIsClosed</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;a cave entrance to the east&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;east&quot;, &quot;entrance&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    field</span></span>
<span class="line"><span style="color:#e1e4e8;">     prospect    cave</span></span>
<span class="line"><span style="color:#e1e4e8;">     detail      &quot;The entrance is just a narrow opening in a small outcrop.\\n&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     textGo      &quot;The guard stops you from walking into the cave.\\n&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">- intoCave</span></span>
<span class="line"><span style="color:#24292e;">     condition   intoCaveIsOpen</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;a cave entrance to the east&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;east&quot;, &quot;entrance&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    field</span></span>
<span class="line"><span style="color:#24292e;">     destination cave</span></span>
<span class="line"><span style="color:#24292e;">     detail      &quot;The entrance is just a narrow opening in a small outcrop.\\n&quot;</span></span>
<span class="line"><span style="color:#24292e;">     textGo      &quot;You walk into the cave.\\n&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- intoCaveBlocked</span></span>
<span class="line"><span style="color:#24292e;">     condition   intoCaveIsClosed</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;a cave entrance to the east&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;east&quot;, &quot;entrance&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    field</span></span>
<span class="line"><span style="color:#24292e;">     prospect    cave</span></span>
<span class="line"><span style="color:#24292e;">     detail      &quot;The entrance is just a narrow opening in a small outcrop.\\n&quot;</span></span>
<span class="line"><span style="color:#24292e;">     textGo      &quot;The guard stops you from walking into the cave.\\n&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">🤔 思考题：尝试自己实现上面的伪代码</p></div><p>这两个 &quot;条件&quot; 函数是如此具体，每一个条件函数都只用这一次。现在，我们可以在我们需要的地方定义这些函数。许多编程语言都支持匿名函数，像这样：</p><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">- intoCave</span></span>
<span class="line"><span style="color:#e1e4e8;">     condition   { return guard-&gt;health == 0 || silver-&gt;location == guard; }</span></span>
<span class="line"><span style="color:#e1e4e8;">     ...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- intoCaveBlocked</span></span>
<span class="line"><span style="color:#e1e4e8;">     condition   { return guard-&gt;health &gt; 0 &amp;&amp; silver-&gt;location != guard; }</span></span>
<span class="line"><span style="color:#e1e4e8;">     ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">- intoCave</span></span>
<span class="line"><span style="color:#24292e;">     condition   { return guard-&gt;health == 0 || silver-&gt;location == guard; }</span></span>
<span class="line"><span style="color:#24292e;">     ...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- intoCaveBlocked</span></span>
<span class="line"><span style="color:#24292e;">     condition   { return guard-&gt;health &gt; 0 &amp;&amp; silver-&gt;location != guard; }</span></span>
<span class="line"><span style="color:#24292e;">     ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>所以现在我们可以把额外的段落和条件添加到 object.txt 中，就像前面解释的那样。</p><h2 id="new-object-txt" tabindex="-1">new object.txt <a class="header-anchor" href="#new-object-txt" aria-label="Permalink to &quot;new object.txt&quot;">​</a></h2><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#include &lt;stdbool.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &quot;object.h&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">typedef struct object {</span></span>
<span class="line"><span style="color:#e1e4e8;">   bool         (*condition)(void);</span></span>
<span class="line"><span style="color:#e1e4e8;">   const char    *description;</span></span>
<span class="line"><span style="color:#e1e4e8;">   const char   **tags;</span></span>
<span class="line"><span style="color:#e1e4e8;">   struct object *location;</span></span>
<span class="line"><span style="color:#e1e4e8;">   struct object *destination;</span></span>
<span class="line"><span style="color:#e1e4e8;">   struct object *prospect;</span></span>
<span class="line"><span style="color:#e1e4e8;">   const char    *details;</span></span>
<span class="line"><span style="color:#e1e4e8;">   const char    *contents;</span></span>
<span class="line"><span style="color:#e1e4e8;">   const char    *textGo;</span></span>
<span class="line"><span style="color:#e1e4e8;">   int            weight;</span></span>
<span class="line"><span style="color:#e1e4e8;">   int            capacity;</span></span>
<span class="line"><span style="color:#e1e4e8;">   int            health;</span></span>
<span class="line"><span style="color:#e1e4e8;">} OBJECT;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">extern OBJECT objs[];</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- field</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;an open field&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;field&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     details     &quot;The field is a nice and quiet place under a clear blue sky.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     capacity    9999</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- cave</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;a little cave&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;cave&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     details     &quot;The cave is just a cold, damp, rocky chamber.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     capacity    9999</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- silver</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;a silver coin&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;silver&quot;, &quot;coin&quot;, &quot;silver coin&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    field</span></span>
<span class="line"><span style="color:#e1e4e8;">     details     &quot;The coin has an eagle on the obverse.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     weight      1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- gold</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;a gold coin&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;gold&quot;, &quot;coin&quot;, &quot;gold coin&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    cave</span></span>
<span class="line"><span style="color:#e1e4e8;">     details     &quot;The shiny coin seems to be a rare and priceless artefact.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     weight      1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- guard</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;a burly guard&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;guard&quot;, &quot;burly guard&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    field</span></span>
<span class="line"><span style="color:#e1e4e8;">     details     &quot;The guard is a really big fellow.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     contents    &quot;He has&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     health      100</span></span>
<span class="line"><span style="color:#e1e4e8;">     capacity    20</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- player</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;yourself&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;yourself&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    field</span></span>
<span class="line"><span style="color:#e1e4e8;">     details     &quot;You would need a mirror to look at yourself.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     contents    &quot;You have&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     health      100</span></span>
<span class="line"><span style="color:#e1e4e8;">     capacity    20</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- intoCave</span></span>
<span class="line"><span style="color:#e1e4e8;">     condition   { return guard-&gt;health == 0 || silver-&gt;location == guard; }</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;a cave entrance to the east&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;east&quot;, &quot;entrance&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    field</span></span>
<span class="line"><span style="color:#e1e4e8;">     destination cave</span></span>
<span class="line"><span style="color:#e1e4e8;">     details     &quot;The entrance is just a narrow opening in a small outcrop.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     textGo      &quot;You walk into the cave.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- intoCaveBlocked</span></span>
<span class="line"><span style="color:#e1e4e8;">     condition   { return guard-&gt;health &gt; 0 &amp;&amp; silver-&gt;location != guard; }</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;a cave entrance to the east&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;east&quot;, &quot;entrance&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    field</span></span>
<span class="line"><span style="color:#e1e4e8;">     prospect    cave</span></span>
<span class="line"><span style="color:#e1e4e8;">     details     &quot;The entrance is just a narrow opening in a small outcrop.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     textGo      &quot;The guard stops you from walking into the cave.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- exitCave</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;an exit to the west&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;west&quot;, &quot;exit&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    cave</span></span>
<span class="line"><span style="color:#e1e4e8;">     destination field</span></span>
<span class="line"><span style="color:#e1e4e8;">     details     &quot;Sunlight pours in through an opening in the cave&#39;s wall.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     textGo      &quot;You walk out of the cave.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- wallField</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;dense forest all around&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;west&quot;, &quot;north&quot;, &quot;south&quot;, &quot;forest&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    field</span></span>
<span class="line"><span style="color:#e1e4e8;">     details     &quot;The field is surrounded by trees and undergrowth.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     textGo      &quot;Dense forest is blocking the way.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- wallCave</span></span>
<span class="line"><span style="color:#e1e4e8;">     description &quot;solid rock all around&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     tags        &quot;east&quot;, &quot;north&quot;, &quot;south&quot;, &quot;rock&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     location    cave</span></span>
<span class="line"><span style="color:#e1e4e8;">     details     &quot;Carved in stone is a secret password &#39;abccb&#39;.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">     textGo      &quot;Solid rock is blocking the way.&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#include &lt;stdbool.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &quot;object.h&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">typedef struct object {</span></span>
<span class="line"><span style="color:#24292e;">   bool         (*condition)(void);</span></span>
<span class="line"><span style="color:#24292e;">   const char    *description;</span></span>
<span class="line"><span style="color:#24292e;">   const char   **tags;</span></span>
<span class="line"><span style="color:#24292e;">   struct object *location;</span></span>
<span class="line"><span style="color:#24292e;">   struct object *destination;</span></span>
<span class="line"><span style="color:#24292e;">   struct object *prospect;</span></span>
<span class="line"><span style="color:#24292e;">   const char    *details;</span></span>
<span class="line"><span style="color:#24292e;">   const char    *contents;</span></span>
<span class="line"><span style="color:#24292e;">   const char    *textGo;</span></span>
<span class="line"><span style="color:#24292e;">   int            weight;</span></span>
<span class="line"><span style="color:#24292e;">   int            capacity;</span></span>
<span class="line"><span style="color:#24292e;">   int            health;</span></span>
<span class="line"><span style="color:#24292e;">} OBJECT;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">extern OBJECT objs[];</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- field</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;an open field&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;field&quot;</span></span>
<span class="line"><span style="color:#24292e;">     details     &quot;The field is a nice and quiet place under a clear blue sky.&quot;</span></span>
<span class="line"><span style="color:#24292e;">     capacity    9999</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- cave</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;a little cave&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;cave&quot;</span></span>
<span class="line"><span style="color:#24292e;">     details     &quot;The cave is just a cold, damp, rocky chamber.&quot;</span></span>
<span class="line"><span style="color:#24292e;">     capacity    9999</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- silver</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;a silver coin&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;silver&quot;, &quot;coin&quot;, &quot;silver coin&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    field</span></span>
<span class="line"><span style="color:#24292e;">     details     &quot;The coin has an eagle on the obverse.&quot;</span></span>
<span class="line"><span style="color:#24292e;">     weight      1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- gold</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;a gold coin&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;gold&quot;, &quot;coin&quot;, &quot;gold coin&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    cave</span></span>
<span class="line"><span style="color:#24292e;">     details     &quot;The shiny coin seems to be a rare and priceless artefact.&quot;</span></span>
<span class="line"><span style="color:#24292e;">     weight      1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- guard</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;a burly guard&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;guard&quot;, &quot;burly guard&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    field</span></span>
<span class="line"><span style="color:#24292e;">     details     &quot;The guard is a really big fellow.&quot;</span></span>
<span class="line"><span style="color:#24292e;">     contents    &quot;He has&quot;</span></span>
<span class="line"><span style="color:#24292e;">     health      100</span></span>
<span class="line"><span style="color:#24292e;">     capacity    20</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- player</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;yourself&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;yourself&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    field</span></span>
<span class="line"><span style="color:#24292e;">     details     &quot;You would need a mirror to look at yourself.&quot;</span></span>
<span class="line"><span style="color:#24292e;">     contents    &quot;You have&quot;</span></span>
<span class="line"><span style="color:#24292e;">     health      100</span></span>
<span class="line"><span style="color:#24292e;">     capacity    20</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- intoCave</span></span>
<span class="line"><span style="color:#24292e;">     condition   { return guard-&gt;health == 0 || silver-&gt;location == guard; }</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;a cave entrance to the east&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;east&quot;, &quot;entrance&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    field</span></span>
<span class="line"><span style="color:#24292e;">     destination cave</span></span>
<span class="line"><span style="color:#24292e;">     details     &quot;The entrance is just a narrow opening in a small outcrop.&quot;</span></span>
<span class="line"><span style="color:#24292e;">     textGo      &quot;You walk into the cave.&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- intoCaveBlocked</span></span>
<span class="line"><span style="color:#24292e;">     condition   { return guard-&gt;health &gt; 0 &amp;&amp; silver-&gt;location != guard; }</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;a cave entrance to the east&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;east&quot;, &quot;entrance&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    field</span></span>
<span class="line"><span style="color:#24292e;">     prospect    cave</span></span>
<span class="line"><span style="color:#24292e;">     details     &quot;The entrance is just a narrow opening in a small outcrop.&quot;</span></span>
<span class="line"><span style="color:#24292e;">     textGo      &quot;The guard stops you from walking into the cave.&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- exitCave</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;an exit to the west&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;west&quot;, &quot;exit&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    cave</span></span>
<span class="line"><span style="color:#24292e;">     destination field</span></span>
<span class="line"><span style="color:#24292e;">     details     &quot;Sunlight pours in through an opening in the cave&#39;s wall.&quot;</span></span>
<span class="line"><span style="color:#24292e;">     textGo      &quot;You walk out of the cave.&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- wallField</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;dense forest all around&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;west&quot;, &quot;north&quot;, &quot;south&quot;, &quot;forest&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    field</span></span>
<span class="line"><span style="color:#24292e;">     details     &quot;The field is surrounded by trees and undergrowth.&quot;</span></span>
<span class="line"><span style="color:#24292e;">     textGo      &quot;Dense forest is blocking the way.&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- wallCave</span></span>
<span class="line"><span style="color:#24292e;">     description &quot;solid rock all around&quot;</span></span>
<span class="line"><span style="color:#24292e;">     tags        &quot;east&quot;, &quot;north&quot;, &quot;south&quot;, &quot;rock&quot;</span></span>
<span class="line"><span style="color:#24292e;">     location    cave</span></span>
<span class="line"><span style="color:#24292e;">     details     &quot;Carved in stone is a secret password &#39;abccb&#39;.&quot;</span></span>
<span class="line"><span style="color:#24292e;">     textGo      &quot;Solid rock is blocking the way.&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">🤔 思考题：尝试自己实现这些功能，并看看与你之前设计的有何不同</p></div><p>为了使这些条件发挥作用，我们需要调整函数 isHolding 和 getDistance。</p><h2 id="misc-c" tabindex="-1">misc.c <a class="header-anchor" href="#misc-c" aria-label="Permalink to &quot;misc.c&quot;">​</a></h2><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdbool.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;object.h&quot;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;misc.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isHolding</span><span style="color:#E1E4E8;">(OBJECT </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">container</span><span style="color:#E1E4E8;">, OBJECT </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">validObject</span><span style="color:#E1E4E8;">(obj) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> obj-&gt;location </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> container;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">OBJECT </span><span style="color:#F97583;">*</span><span style="color:#B392F0;">getPassage</span><span style="color:#E1E4E8;">(OBJECT </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">from</span><span style="color:#E1E4E8;">, OBJECT </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (from </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> to </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">   {</span></span>
<span class="line"><span style="color:#E1E4E8;">      OBJECT </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">obj;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> objs; obj </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> endOfObjs; obj</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">isHolding</span><span style="color:#E1E4E8;">(from, obj) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> obj-&gt;prospect </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> to)</span></span>
<span class="line"><span style="color:#E1E4E8;">         {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> obj;</span></span>
<span class="line"><span style="color:#E1E4E8;">         }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">DISTANCE </span><span style="color:#B392F0;">getDistance</span><span style="color:#E1E4E8;">(OBJECT </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">from</span><span style="color:#E1E4E8;">, OBJECT </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> to </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">                               </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> distUnknownObject </span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">!</span><span style="color:#B392F0;">validObject</span><span style="color:#E1E4E8;">(to)                         </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> distNotHere </span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          to </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> from                               </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> distSelf </span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">isHolding</span><span style="color:#E1E4E8;">(from, to)                      </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> distHeld </span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">isHolding</span><span style="color:#E1E4E8;">(to, from)                      </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> distLocation </span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">isHolding</span><span style="color:#E1E4E8;">(from-&gt;location, to)            </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> distHere </span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">isHolding</span><span style="color:#E1E4E8;">(from, to-&gt;location)            </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> distHeldContained </span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">isHolding</span><span style="color:#E1E4E8;">(from-&gt;location, to-&gt;location)  </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> distHereContained </span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">getPassage</span><span style="color:#E1E4E8;">(from-&gt;location, to) </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> distOverthere </span><span style="color:#F97583;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                                                     distNotHere;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">OBJECT </span><span style="color:#F97583;">*</span><span style="color:#B392F0;">actorHere</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   OBJECT </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">obj;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> objs; obj </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> endOfObjs; obj</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">   {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">isHolding</span><span style="color:#E1E4E8;">(player-&gt;location, obj) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> player </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">          obj-&gt;health </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> obj;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">listObjectsAtLocation</span><span style="color:#E1E4E8;">(OBJECT </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">location</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   OBJECT </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">obj;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> objs; obj </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> endOfObjs; obj</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">   {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (obj </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> player </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isHolding</span><span style="color:#E1E4E8;">(location, obj))</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">         {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%s</span><span style="color:#9ECBFF;">:</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, location-&gt;contents);</span></span>
<span class="line"><span style="color:#E1E4E8;">         }</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%s\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, obj-&gt;description);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> count;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdbool.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;object.h&quot;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;misc.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isHolding</span><span style="color:#24292E;">(OBJECT </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">container</span><span style="color:#24292E;">, OBJECT </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">obj</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">validObject</span><span style="color:#24292E;">(obj) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> obj-&gt;location </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> container;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">OBJECT </span><span style="color:#D73A49;">*</span><span style="color:#6F42C1;">getPassage</span><span style="color:#24292E;">(OBJECT </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">from</span><span style="color:#24292E;">, OBJECT </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">to</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (from </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> to </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">   {</span></span>
<span class="line"><span style="color:#24292E;">      OBJECT </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">obj;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> objs; obj </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> endOfObjs; obj</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">isHolding</span><span style="color:#24292E;">(from, obj) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> obj-&gt;prospect </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> to)</span></span>
<span class="line"><span style="color:#24292E;">         {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> obj;</span></span>
<span class="line"><span style="color:#24292E;">         }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">DISTANCE </span><span style="color:#6F42C1;">getDistance</span><span style="color:#24292E;">(OBJECT </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">from</span><span style="color:#24292E;">, OBJECT </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">to</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> to </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">                               </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> distUnknownObject </span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">validObject</span><span style="color:#24292E;">(to)                         </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> distNotHere </span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">          to </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> from                               </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> distSelf </span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">isHolding</span><span style="color:#24292E;">(from, to)                      </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> distHeld </span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">isHolding</span><span style="color:#24292E;">(to, from)                      </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> distLocation </span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">isHolding</span><span style="color:#24292E;">(from-&gt;location, to)            </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> distHere </span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">isHolding</span><span style="color:#24292E;">(from, to-&gt;location)            </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> distHeldContained </span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">isHolding</span><span style="color:#24292E;">(from-&gt;location, to-&gt;location)  </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> distHereContained </span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">getPassage</span><span style="color:#24292E;">(from-&gt;location, to) </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">   </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> distOverthere </span><span style="color:#D73A49;">:</span></span>
<span class="line"><span style="color:#24292E;">                                                     distNotHere;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">OBJECT </span><span style="color:#D73A49;">*</span><span style="color:#6F42C1;">actorHere</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   OBJECT </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">obj;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> objs; obj </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> endOfObjs; obj</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">   {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">isHolding</span><span style="color:#24292E;">(player-&gt;location, obj) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> player </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">          obj-&gt;health </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> obj;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">listObjectsAtLocation</span><span style="color:#24292E;">(OBJECT </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">location</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   OBJECT </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">obj;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> objs; obj </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> endOfObjs; obj</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">   {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (obj </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> player </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isHolding</span><span style="color:#24292E;">(location, obj))</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">         {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%s</span><span style="color:#032F62;">:</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, location-&gt;contents);</span></span>
<span class="line"><span style="color:#24292E;">         }</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%s\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, obj-&gt;description);</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> count;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">🤔 思考题：想想我们调整了什么</p></div><p>注意：</p><ol><li>警卫不可能会死，所以可以说我们的条件函数中的<strong> HP</strong> 是很无用的。当然，这很容易通过添加一个 kill 命令来解决，见第 20 章。</li><li>这两个条件函数是互补的；它们有资格成为重复的代码。为了消除这一点，我们可能决定让一个函数调用另一个函数（用 &#39;！&#39; 操作符来否定结果）。一个匿名函数没有（稳定的）名字，但我们可以用它的对象来指代它。我们可以用 intoCaveBlocked 的条件函数代替。</li><li>为了简单起见，条件函数没有参数。实际上，传递一个参数 OBJECT *obj 可能更好；这使得编写更多的通用条件函数成为可能，可以在多个对象中重复使用。</li><li>在理论上，任何对象都可以成为 &quot;条件&quot;。在下一章，你可以看到一个类似的技术被应用于此。</li></ol><div class="warning custom-block"><p class="custom-block-title">🤔 思考题：想一想上面第二点要怎么用 C 来实现？</p></div><p>输出样例</p><p>Welcome to Little Cave Adventure. You are in an open field. You see: a silver coin a burly guard a cave entrance to the east dense forest all around</p><p>--&gt; go entrance The guard stops you from walking into the cave.</p><p>--&gt; get coin You pick up a silver coin.</p><p>--&gt; give coin You give a silver coin to a burly guard.</p><p>--&gt; go entrance You walk into the cave.</p><p>You are in a little cave. You see: a gold coin an exit to the west solid rock all around</p><p>--&gt; quit</p><p>Bye!</p>`,41),o=[e];function t(c,r,i,y,E,u){return n(),a("div",null,o)}const m=s(p,[["render",t]]);export{d as __pageData,m as default};
