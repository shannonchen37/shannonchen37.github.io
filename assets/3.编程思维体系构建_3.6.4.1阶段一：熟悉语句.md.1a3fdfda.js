import{_ as s,o as n,c as a,U as l}from"./chunks/framework.489e5108.js";const b=JSON.parse('{"title":"阶段一：熟悉语句","description":"","frontmatter":{},"headers":[],"relativePath":"3.编程思维体系构建/3.6.4.1阶段一：熟悉语句.md","filePath":"3.编程思维体系构建/3.6.4.1阶段一：熟悉语句.md","lastUpdated":1696176798000}'),p={name:"3.编程思维体系构建/3.6.4.1阶段一：熟悉语句.md"},e=l(`<h1 id="阶段一-熟悉语句" tabindex="-1">阶段一：熟悉语句 <a class="header-anchor" href="#阶段一-熟悉语句" aria-label="Permalink to &quot;阶段一：熟悉语句&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">🐱 在进行本章之前，请你谨记一个原则：基本所有的功能都被人提前实现好了</p><p>你需要关心的仅仅是逻辑该如何设立</p><p>在做本章任务前，请熟悉 python 的函数，循环和判断语句即可</p></div><p>P1：请仅使用一行语句求出三个数的最小平方和</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">two_of_three</span><span style="color:#E1E4E8;">(x, y, z):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Return a*a + b*b, where a and b are the two smallest members of the</span></span>
<span class="line"><span style="color:#9ECBFF;">    positive numbers x, y, and z.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">two_of_three(1, 2, 3)</span></span>
<span class="line"><span style="color:#9ECBFF;">    5</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">two_of_three(5, 3, 1)</span></span>
<span class="line"><span style="color:#9ECBFF;">    10</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">two_of_three(10, 2, 8)</span></span>
<span class="line"><span style="color:#9ECBFF;">    68</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">two_of_three(5, 5, 5)</span></span>
<span class="line"><span style="color:#9ECBFF;">    50</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;"># check that your code consists of nothing but an expression (this docstring)</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;"># and a return statement</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">import inspect, ast</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">[type(x).__name__ for x in ast.parse(inspect.getsource(two_of_three)).body[0].body]</span></span>
<span class="line"><span style="color:#9ECBFF;">    [&#39;Expr&#39;, &#39;Return&#39;]</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> _____</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">two_of_three</span><span style="color:#24292E;">(x, y, z):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Return a*a + b*b, where a and b are the two smallest members of the</span></span>
<span class="line"><span style="color:#032F62;">    positive numbers x, y, and z.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">two_of_three(1, 2, 3)</span></span>
<span class="line"><span style="color:#032F62;">    5</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">two_of_three(5, 3, 1)</span></span>
<span class="line"><span style="color:#032F62;">    10</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">two_of_three(10, 2, 8)</span></span>
<span class="line"><span style="color:#032F62;">    68</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">two_of_three(5, 5, 5)</span></span>
<span class="line"><span style="color:#032F62;">    50</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;"># check that your code consists of nothing but an expression (this docstring)</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;"># and a return statement</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">import inspect, ast</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">[type(x).__name__ for x in ast.parse(inspect.getsource(two_of_three)).body[0].body]</span></span>
<span class="line"><span style="color:#032F62;">    [&#39;Expr&#39;, &#39;Return&#39;]</span></span>
<span class="line"><span style="color:#032F62;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> _____</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>提示：可以使用 <code>min()</code> 函数哦</p><p>P2：下降阶乘</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">falling</span><span style="color:#E1E4E8;">(n, k):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Compute the falling factorial of n to depth k.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">falling(6, 3)  # 6 * 5 * 4</span></span>
<span class="line"><span style="color:#9ECBFF;">    120</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">falling(4, 3)  # 4 * 3 * 2</span></span>
<span class="line"><span style="color:#9ECBFF;">    24</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">falling(4, 1)  # 4</span></span>
<span class="line"><span style="color:#9ECBFF;">    4</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">falling(4, 0)</span></span>
<span class="line"><span style="color:#9ECBFF;">    1</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;*** YOUR CODE HERE ***&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">falling</span><span style="color:#24292E;">(n, k):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Compute the falling factorial of n to depth k.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">falling(6, 3)  # 6 * 5 * 4</span></span>
<span class="line"><span style="color:#032F62;">    120</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">falling(4, 3)  # 4 * 3 * 2</span></span>
<span class="line"><span style="color:#032F62;">    24</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">falling(4, 1)  # 4</span></span>
<span class="line"><span style="color:#032F62;">    4</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">falling(4, 0)</span></span>
<span class="line"><span style="color:#032F62;">    1</span></span>
<span class="line"><span style="color:#032F62;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;*** YOUR CODE HERE ***&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>P3：判断一个函数是否有两个或者两个连续的 8</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">double_eights</span><span style="color:#E1E4E8;">(n):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Return true if n has two eights in a row.</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">double_eights(8)</span></span>
<span class="line"><span style="color:#9ECBFF;">    False</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">double_eights(88)</span></span>
<span class="line"><span style="color:#9ECBFF;">    True</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">double_eights(2882)</span></span>
<span class="line"><span style="color:#9ECBFF;">    True</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">double_eights(880088)</span></span>
<span class="line"><span style="color:#9ECBFF;">    True</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">double_eights(12345)</span></span>
<span class="line"><span style="color:#9ECBFF;">    False</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">double_eights(80808080)</span></span>
<span class="line"><span style="color:#9ECBFF;">    False</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;*** YOUR CODE HERE ***&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">double_eights</span><span style="color:#24292E;">(n):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Return true if n has two eights in a row.</span></span>
<span class="line"><span style="color:#032F62;">    </span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">double_eights(8)</span></span>
<span class="line"><span style="color:#032F62;">    False</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">double_eights(88)</span></span>
<span class="line"><span style="color:#032F62;">    True</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">double_eights(2882)</span></span>
<span class="line"><span style="color:#032F62;">    True</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">double_eights(880088)</span></span>
<span class="line"><span style="color:#032F62;">    True</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">double_eights(12345)</span></span>
<span class="line"><span style="color:#032F62;">    False</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">double_eights(80808080)</span></span>
<span class="line"><span style="color:#032F62;">    False</span></span>
<span class="line"><span style="color:#032F62;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;*** YOUR CODE HERE ***&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,9),o=[e];function t(c,r,i,y,F,u){return n(),a("div",null,o)}const E=s(p,[["render",t]]);export{b as __pageData,E as default};
