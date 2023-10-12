import{_ as l,I as p,o,c as e,j as s,x as t,w as c,a as n,U as r}from"./chunks/framework.489e5108.js";const v=JSON.parse('{"title":"阶段四：高阶函数","description":"","frontmatter":{},"headers":[],"relativePath":"3.编程思维体系构建/3.6.4.4阶段四：高阶函数.md","filePath":"3.编程思维体系构建/3.6.4.4阶段四：高阶函数.md","lastUpdated":1696176798000}'),y={name:"3.编程思维体系构建/3.6.4.4阶段四：高阶函数.md"},i=s("h1",{id:"阶段四-高阶函数",tabindex:"-1"},[n("阶段四：高阶函数 "),s("a",{class:"header-anchor",href:"#阶段四-高阶函数","aria-label":'Permalink to "阶段四：高阶函数"'},"​")],-1),E={class:"warning custom-block"},b=s("p",{class:"custom-block-title"},"🐱 阅读以及完成本部分内容可以帮助你有效减少代码冗余。",-1),u=s("p",null,"让你完成更为优雅的代码",-1),F=s("p",null,"各位要记住的是",-1),g=s("strong",null,"代码首先是给人看的",-1),_=s("p",null,"机器看的永远只是你的机器码。",-1),m=s("p",null,[n("可参考教程 "),s("a",{href:"https://zhuanlan.zhihu.com/p/80960485",target:"_blank",rel:"noreferrer"},"Lambda")],-1),d=r(`<h2 id="lambda-介绍" tabindex="-1">Lambda 介绍 <a class="header-anchor" href="#lambda-介绍" aria-label="Permalink to &quot;Lambda 介绍&quot;">​</a></h2><p>Lambda 表达式是通过指定两件事来评估函数的表达式：参数和返回表达式。</p><p>请尝试阅读以下英文表格，对比函数与 lambda 表达式的不同</p><h2 id="lambda-实验" tabindex="-1">Lambda 实验 <a class="header-anchor" href="#lambda-实验" aria-label="Permalink to &quot;Lambda 实验&quot;">​</a></h2><p>以下代码 python 会显示什么？通过对这些代码的实验，加深你对代码的学习</p><p>提示：当你对解释器输入 x 或 x=none 时什么都没有</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">lambda</span><span style="color:#E1E4E8;"> x: x  </span><span style="color:#6A737D;"># A lambda expression with one parameter x</span></span>
<span class="line"><span style="color:#E1E4E8;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">lambda</span><span style="color:#E1E4E8;"> x: x  </span><span style="color:#6A737D;"># Assigning the lambda function to the name a</span></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> a(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">lambda</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)()  </span><span style="color:#6A737D;"># Using a lambda expression as an operator in a call exp.</span></span>
<span class="line"><span style="color:#E1E4E8;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">lambda</span><span style="color:#E1E4E8;"> x: </span><span style="color:#F97583;">lambda</span><span style="color:#E1E4E8;">: x  </span><span style="color:#6A737D;"># Lambdas can return other lambdas!</span></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> c </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> b(</span><span style="color:#79B8FF;">88</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> c</span></span>
<span class="line"><span style="color:#E1E4E8;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> c()</span></span>
<span class="line"><span style="color:#E1E4E8;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> d </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">lambda</span><span style="color:#E1E4E8;"> f: f(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;"># They can have functions as arguments as well.</span></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">square</span><span style="color:#E1E4E8;">(x):</span></span>
<span class="line"><span style="color:#79B8FF;">...</span><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> x</span></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> d(square)</span></span>
<span class="line"><span style="color:#E1E4E8;">______</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">lambda</span><span style="color:#24292E;"> x: x  </span><span style="color:#6A737D;"># A lambda expression with one parameter x</span></span>
<span class="line"><span style="color:#24292E;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">lambda</span><span style="color:#24292E;"> x: x  </span><span style="color:#6A737D;"># Assigning the lambda function to the name a</span></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> a(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">lambda</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)()  </span><span style="color:#6A737D;"># Using a lambda expression as an operator in a call exp.</span></span>
<span class="line"><span style="color:#24292E;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">lambda</span><span style="color:#24292E;"> x: </span><span style="color:#D73A49;">lambda</span><span style="color:#24292E;">: x  </span><span style="color:#6A737D;"># Lambdas can return other lambdas!</span></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> c </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> b(</span><span style="color:#005CC5;">88</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> c</span></span>
<span class="line"><span style="color:#24292E;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> c()</span></span>
<span class="line"><span style="color:#24292E;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> d </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">lambda</span><span style="color:#24292E;"> f: f(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;"># They can have functions as arguments as well.</span></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">square</span><span style="color:#24292E;">(x):</span></span>
<span class="line"><span style="color:#005CC5;">...</span><span style="color:#24292E;">     </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> x</span></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> d(square)</span></span>
<span class="line"><span style="color:#24292E;">______</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> higher_order_lambda </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">lambda</span><span style="color:#E1E4E8;"> f: </span><span style="color:#F97583;">lambda</span><span style="color:#E1E4E8;"> x: f(x)</span></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> g </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">lambda</span><span style="color:#E1E4E8;"> x: x </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> x</span></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> higher_order_lambda(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)(g)  </span><span style="color:#6A737D;"># Which argument belongs to which function call?</span></span>
<span class="line"><span style="color:#E1E4E8;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> higher_order_lambda(g)(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> call_thrice </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">lambda</span><span style="color:#E1E4E8;"> f: </span><span style="color:#F97583;">lambda</span><span style="color:#E1E4E8;"> x: f(f(f(x)))</span></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> call_thrice(</span><span style="color:#F97583;">lambda</span><span style="color:#E1E4E8;"> y: y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> print_lambda </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">lambda</span><span style="color:#E1E4E8;"> z: </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(z)  </span><span style="color:#6A737D;"># When is the return expression of a lambda expression executed?</span></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> print_lambda</span></span>
<span class="line"><span style="color:#E1E4E8;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> one_thousand </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> print_lambda(</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">&gt;&gt;&gt;</span><span style="color:#E1E4E8;"> one_thousand</span></span>
<span class="line"><span style="color:#E1E4E8;">______</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> higher_order_lambda </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">lambda</span><span style="color:#24292E;"> f: </span><span style="color:#D73A49;">lambda</span><span style="color:#24292E;"> x: f(x)</span></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> g </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">lambda</span><span style="color:#24292E;"> x: x </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> x</span></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> higher_order_lambda(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)(g)  </span><span style="color:#6A737D;"># Which argument belongs to which function call?</span></span>
<span class="line"><span style="color:#24292E;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> higher_order_lambda(g)(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> call_thrice </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">lambda</span><span style="color:#24292E;"> f: </span><span style="color:#D73A49;">lambda</span><span style="color:#24292E;"> x: f(f(f(x)))</span></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> call_thrice(</span><span style="color:#D73A49;">lambda</span><span style="color:#24292E;"> y: y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> print_lambda </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">lambda</span><span style="color:#24292E;"> z: </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(z)  </span><span style="color:#6A737D;"># When is the return expression of a lambda expression executed?</span></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> print_lambda</span></span>
<span class="line"><span style="color:#24292E;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> one_thousand </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> print_lambda(</span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">______</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">&gt;&gt;&gt;</span><span style="color:#24292E;"> one_thousand</span></span>
<span class="line"><span style="color:#24292E;">______</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="任务" tabindex="-1">任务 <a class="header-anchor" href="#任务" aria-label="Permalink to &quot;任务&quot;">​</a></h2><p>P9: 我们发现以下两个函数看起来实现的非常相似，是否可以进行改进，将其整合？</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">count_factors</span><span style="color:#E1E4E8;">(n):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Return the number of positive factors that n has.</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">count_factors(6)</span></span>
<span class="line"><span style="color:#9ECBFF;">    4   # 1, 2, 3, 6</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">count_factors(4)</span></span>
<span class="line"><span style="color:#9ECBFF;">    3   # 1, 2, 4</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    i, count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            count </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> count</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">count_primes</span><span style="color:#E1E4E8;">(n):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Return the number of prime numbers up to and including n.</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">count_primes(6)</span></span>
<span class="line"><span style="color:#9ECBFF;">    3   # 2, 3, 5</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">count_primes(13)</span></span>
<span class="line"><span style="color:#9ECBFF;">    6   # 2, 3, 5, 7, 11, 13</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    i, count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> n:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> is_prime(i):</span></span>
<span class="line"><span style="color:#E1E4E8;">            count </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">        i </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> count</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">is_prime</span><span style="color:#E1E4E8;">(n):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> count_factors(n) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># only factors are 1 and n</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">count_factors</span><span style="color:#24292E;">(n):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Return the number of positive factors that n has.</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">count_factors(6)</span></span>
<span class="line"><span style="color:#032F62;">    4   # 1, 2, 3, 6</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">count_factors(4)</span></span>
<span class="line"><span style="color:#032F62;">    3   # 1, 2, 4</span></span>
<span class="line"><span style="color:#032F62;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    i, count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> n:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            count </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> count</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">count_primes</span><span style="color:#24292E;">(n):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Return the number of prime numbers up to and including n.</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">count_primes(6)</span></span>
<span class="line"><span style="color:#032F62;">    3   # 2, 3, 5</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">count_primes(13)</span></span>
<span class="line"><span style="color:#032F62;">    6   # 2, 3, 5, 7, 11, 13</span></span>
<span class="line"><span style="color:#032F62;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    i, count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> n:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> is_prime(i):</span></span>
<span class="line"><span style="color:#24292E;">            count </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">        i </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> count</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">is_prime</span><span style="color:#24292E;">(n):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> count_factors(n) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># only factors are 1 and n</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>需求：</p><p>你需要通过自己写一个函数： <code>count_cond</code> ，来接受一个含有两个参数的函数 <code>condition(n, i)</code> (使用 lambda 表达式)，</p><p>且 <code>condition</code> 函数应该满足第一个参数为 N，而第二个参数将会在 <code>condition</code> 函数中遍历 1 to N。</p><p><code>count_cond</code> 将返回一个单参数函数 (ps：一个匿名函数)，此单参数函数将会在被调用时返回 1 to N 中所有满足 <code>condition</code> 的数字的个数 (如：1 到 n 中素数的个数)。</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">count_cond</span><span style="color:#E1E4E8;">(condition):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;&quot;&quot;Returns a function with one parameter N that counts all the numbers from</span></span>
<span class="line"><span style="color:#9ECBFF;">    1 to N that satisfy the two-argument predicate function Condition, where</span></span>
<span class="line"><span style="color:#9ECBFF;">    the first argument for Condition is N and the second argument is the</span></span>
<span class="line"><span style="color:#9ECBFF;">    number from 1 to N.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">count_factors = count_cond(lambda n, i: n % i == 0)</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">count_factors(2)   # 1, 2</span></span>
<span class="line"><span style="color:#9ECBFF;">    2</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">count_factors(4)   # 1, 2, 4</span></span>
<span class="line"><span style="color:#9ECBFF;">    3</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">count_factors(12)  # 1, 2, 3, 4, 6, 12</span></span>
<span class="line"><span style="color:#9ECBFF;">    6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">is_prime = lambda n, i: count_factors(i) == 2</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">count_primes = count_cond(is_prime)</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">count_primes(2)    # 2</span></span>
<span class="line"><span style="color:#9ECBFF;">    1</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">count_primes(3)    # 2, 3</span></span>
<span class="line"><span style="color:#9ECBFF;">    2</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">count_primes(4)    # 2, 3</span></span>
<span class="line"><span style="color:#9ECBFF;">    2</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">count_primes(5)    # 2, 3, 5</span></span>
<span class="line"><span style="color:#9ECBFF;">    3</span></span>
<span class="line"><span style="color:#9ECBFF;">    </span><span style="color:#F97583;">&gt;&gt;&gt; </span><span style="color:#9ECBFF;">count_primes(20)   # 2, 3, 5, 7, 11, 13, 17, 19</span></span>
<span class="line"><span style="color:#9ECBFF;">    8</span></span>
<span class="line"><span style="color:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;*** YOUR CODE HERE ***&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">count_cond</span><span style="color:#24292E;">(condition):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;&quot;&quot;Returns a function with one parameter N that counts all the numbers from</span></span>
<span class="line"><span style="color:#032F62;">    1 to N that satisfy the two-argument predicate function Condition, where</span></span>
<span class="line"><span style="color:#032F62;">    the first argument for Condition is N and the second argument is the</span></span>
<span class="line"><span style="color:#032F62;">    number from 1 to N.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">count_factors = count_cond(lambda n, i: n % i == 0)</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">count_factors(2)   # 1, 2</span></span>
<span class="line"><span style="color:#032F62;">    2</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">count_factors(4)   # 1, 2, 4</span></span>
<span class="line"><span style="color:#032F62;">    3</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">count_factors(12)  # 1, 2, 3, 4, 6, 12</span></span>
<span class="line"><span style="color:#032F62;">    6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">is_prime = lambda n, i: count_factors(i) == 2</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">count_primes = count_cond(is_prime)</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">count_primes(2)    # 2</span></span>
<span class="line"><span style="color:#032F62;">    1</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">count_primes(3)    # 2, 3</span></span>
<span class="line"><span style="color:#032F62;">    2</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">count_primes(4)    # 2, 3</span></span>
<span class="line"><span style="color:#032F62;">    2</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">count_primes(5)    # 2, 3, 5</span></span>
<span class="line"><span style="color:#032F62;">    3</span></span>
<span class="line"><span style="color:#032F62;">    </span><span style="color:#D73A49;">&gt;&gt;&gt; </span><span style="color:#032F62;">count_primes(20)   # 2, 3, 5, 7, 11, 13, 17, 19</span></span>
<span class="line"><span style="color:#032F62;">    8</span></span>
<span class="line"><span style="color:#032F62;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;*** YOUR CODE HERE ***&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,16);function h(C,A,D,f,B,x){const a=p("font");return o(),e("div",null,[i,s("div",E,[b,u,F,t(a,{size:"5"},{default:c(()=>[g]),_:1}),_,m]),d])}const k=l(y,[["render",h]]);export{v as __pageData,k as default};
