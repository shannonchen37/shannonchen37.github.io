import{_ as s,o as n,c as a,U as e}from"./chunks/framework.489e5108.js";const E=JSON.parse('{"title":"LLM Agent 之结构化输出","description":"","frontmatter":{},"headers":[],"relativePath":"4.人工智能/4.12LLMAgent之结构化输出.md","filePath":"4.人工智能/4.12LLMAgent之结构化输出.md","lastUpdated":1696176798000}'),l={name:"4.人工智能/4.12LLMAgent之结构化输出.md"},p=e(`<h1 id="llm-agent-之结构化输出" tabindex="-1">LLM Agent 之结构化输出 <a class="header-anchor" href="#llm-agent-之结构化输出" aria-label="Permalink to &quot;LLM Agent 之结构化输出&quot;">​</a></h1><p>author:Marlene</p><p><em>Last revised 2023/07/26</em></p><h2 id="引言" tabindex="-1">引言 <a class="header-anchor" href="#引言" aria-label="Permalink to &quot;引言&quot;">​</a></h2><p>自去年年底以来，GPT 的迅速发展诞生了一系列大模型。出现了更新、更大、更强的 GPT-4。OpenAI 不断推出 GPT-4，ChatGPT Plugins，代码解释器，Function calling，图片处理等等。7 月的 WAIC 上，笔者也有幸见到了国内一众企业相继展示自家的大模型。在这段时间里，LLM 从最初的 PE 工程走向智能体交互。而笔者从最开始考虑 LLM 能不能多人协作，思考” 一个专家完成所有任务好还是很多人分工完成好 “，到各种论文层出不穷，到如今火热的 LLM Agent 开发模式。可以说，如果你从大学里随便问某个人都知道 GPT，甚至大部分都用过。</p><p>好了，前言少叙。进入正题。众所周知，Agent 基本 = LLM（大型语言模型）+ 记忆 + 规划技能 + 工具使用。</p><p>想要使用工具，让 GPT 掌握如何使用工具，常见的方法是告知 GPT 工具（通常是一个可以调用的函数）的参数，让 GPT 生成这些参数即可。那么如何让 GPT 可靠的生成这些规定的参数呢？换一种说法，如何让 GPT 输出结构化的数据信息呢？</p><h2 id="原理及相关框架" tabindex="-1">原理及相关框架 <a class="header-anchor" href="#原理及相关框架" aria-label="Permalink to &quot;原理及相关框架&quot;">​</a></h2><p>现如今大部分的结构化输出工具的原理都是：告诉 GPT 要输出一个怎么样的结构即可。没错～当然，为什么会出现这么多开发工具都用来解决这个问题，明明是一个简单的原理呢？</p><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1. 通过 prompt 告知 LLM 我们所需要的返回格式，并进行生成。</span></span>
<span class="line"><span style="color:#e1e4e8;">2. 通过一些规则来检查返回结果，如果不符合格式，生成相关错误信息。</span></span>
<span class="line"><span style="color:#e1e4e8;">3. 将上一次的生成内容和检查的错误信息告知 LLM，进行下一次的修正生成。</span></span>
<span class="line"><span style="color:#e1e4e8;">4. 重复 2-3 步骤，直到生成的内容完全符合我们的要求。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. 通过 prompt 告知 LLM 我们所需要的返回格式，并进行生成。</span></span>
<span class="line"><span style="color:#24292e;">2. 通过一些规则来检查返回结果，如果不符合格式，生成相关错误信息。</span></span>
<span class="line"><span style="color:#24292e;">3. 将上一次的生成内容和检查的错误信息告知 LLM，进行下一次的修正生成。</span></span>
<span class="line"><span style="color:#24292e;">4. 重复 2-3 步骤，直到生成的内容完全符合我们的要求。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>首先，关于怎样描述这样一个结构的 prompt 模板，众口难调。有些人认为结构就应该用自然语言描述，这样足够简单，上手难度足够低，方便快速迭代开发。有些人认为结构描述？JSON Schema 不就够了？有些人觉得 YAML 也可以。有些人觉得上面这些对于我的需求还是够不着啊，于是自己造了一个伪代码描述。 其次，自动处理修正机制也可以做很多文章。还有许多对性能和开销的优化。 下文就是关于一众框架的简单分析。希望会对选择困难症的你有所帮助。</p><h3 id="guardrails" tabindex="-1"><strong>guardrails</strong> <a class="header-anchor" href="#guardrails" aria-label="Permalink to &quot;**guardrails**&quot;">​</a></h3><p>guardrails 这个项目，就是将上述的步骤做了进一步的抽象与封装，提供更加 high level 的配置与 API 来完成整个过程。 优点：</p><ol><li>定义了一套 RAIL spec</li><li>更聚焦于错误信息</li></ol><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;rail version=&quot;0.1&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;output&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;object name=&quot;patient_info&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;string name=&quot;gender&quot; description=&quot;Patient&#39;s gender&quot; /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;integer name=&quot;age&quot; format=&quot;valid-range: 0 100&quot; /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;list</span></span>
<span class="line"><span style="color:#E1E4E8;">            name=&quot;symptoms&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            description=&quot;Symptoms that the patient is currently experiencing. Each symptom should be classified into a separate item in the list.&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;object&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;string name=&quot;symptom&quot; description=&quot;Symptom that a patient is experiencing&quot;/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;string</span></span>
<span class="line"><span style="color:#E1E4E8;">                    name=&quot;affected area&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    description=&quot;What part of the body the symptom is affecting&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    format=&quot;valid-choices: {[&#39;head&#39;, &#39;neck&#39;, &#39;chest&#39;]}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    on-fail-valid-choices=&quot;reask&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/object&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/list&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;list name=&quot;current_meds&quot; description=&quot;Medications the patient is currently taking and their response&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;object&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;string name=&quot;medication&quot; description=&quot;Name of the medication the patient is taking&quot; /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;string</span></span>
<span class="line"><span style="color:#E1E4E8;">                    name=&quot;response&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    description=&quot;How the patient is responding to the medication&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/object&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/list&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/object&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/output&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;prompt&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Given the following doctor&#39;s notes about a patient, please extract a dictionary that contains the patient&#39;s information.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{{doctors_notes}}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">@complete_json_suffix_v2</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/prompt&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/rail&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;rail version=&quot;0.1&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;output&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;object name=&quot;patient_info&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;string name=&quot;gender&quot; description=&quot;Patient&#39;s gender&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;integer name=&quot;age&quot; format=&quot;valid-range: 0 100&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;list</span></span>
<span class="line"><span style="color:#24292E;">            name=&quot;symptoms&quot;</span></span>
<span class="line"><span style="color:#24292E;">            description=&quot;Symptoms that the patient is currently experiencing. Each symptom should be classified into a separate item in the list.&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;object&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;string name=&quot;symptom&quot; description=&quot;Symptom that a patient is experiencing&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;string</span></span>
<span class="line"><span style="color:#24292E;">                    name=&quot;affected area&quot;</span></span>
<span class="line"><span style="color:#24292E;">                    description=&quot;What part of the body the symptom is affecting&quot;</span></span>
<span class="line"><span style="color:#24292E;">                    format=&quot;valid-choices: {[&#39;head&#39;, &#39;neck&#39;, &#39;chest&#39;]}&quot;</span></span>
<span class="line"><span style="color:#24292E;">                    on-fail-valid-choices=&quot;reask&quot;</span></span>
<span class="line"><span style="color:#24292E;">                /&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/object&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/list&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;list name=&quot;current_meds&quot; description=&quot;Medications the patient is currently taking and their response&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;object&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;string name=&quot;medication&quot; description=&quot;Name of the medication the patient is taking&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;string</span></span>
<span class="line"><span style="color:#24292E;">                    name=&quot;response&quot;</span></span>
<span class="line"><span style="color:#24292E;">                    description=&quot;How the patient is responding to the medication&quot;</span></span>
<span class="line"><span style="color:#24292E;">                /&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/object&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/list&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/object&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/output&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;prompt&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Given the following doctor&#39;s notes about a patient, please extract a dictionary that contains the patient&#39;s information.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{{doctors_notes}}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">@complete_json_suffix_v2</span></span>
<span class="line"><span style="color:#24292E;">&lt;/prompt&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/rail&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>可以看到，guardrails 定义了一套类似 xml 的语言用于结构化输出，又结合了自然语言的 prompt。虽然比起常见的模板语言要更加 “繁琐”，但可以包含的内容也可以更加完善。比如可以提供字段的描述信息，检查规范，一定程度上也能帮助 LLM 更好地理解需求，生成预期的结果。</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">I was given the following JSON response, which had problems due to incorrect values.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  &quot;patient_info&quot;: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    &quot;symptoms&quot;: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        &quot;affected area&quot;: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          &quot;incorrect_value&quot;: &quot;face &amp; hair&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">          &quot;error_message&quot;: &quot;Value face &amp; hair is not in choices [&#39;head&#39;, &#39;neck&#39;, &#39;chest&#39;].&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        &quot;affected area&quot;: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          &quot;incorrect_value&quot;: &quot;beard, eyebrows &amp; nares&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">          &quot;error_message&quot;: &quot;Value beard, eyebrows &amp; nares is not in choices [&#39;head&#39;, &#39;neck&#39;, &#39;chest&#39;].&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Help me correct the incorrect values based on the given error messages.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">I was given the following JSON response, which had problems due to incorrect values.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  &quot;patient_info&quot;: {</span></span>
<span class="line"><span style="color:#24292E;">    &quot;symptoms&quot;: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        &quot;affected area&quot;: {</span></span>
<span class="line"><span style="color:#24292E;">          &quot;incorrect_value&quot;: &quot;face &amp; hair&quot;,</span></span>
<span class="line"><span style="color:#24292E;">          &quot;error_message&quot;: &quot;Value face &amp; hair is not in choices [&#39;head&#39;, &#39;neck&#39;, &#39;chest&#39;].&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        &quot;affected area&quot;: {</span></span>
<span class="line"><span style="color:#24292E;">          &quot;incorrect_value&quot;: &quot;beard, eyebrows &amp; nares&quot;,</span></span>
<span class="line"><span style="color:#24292E;">          &quot;error_message&quot;: &quot;Value beard, eyebrows &amp; nares is not in choices [&#39;head&#39;, &#39;neck&#39;, &#39;chest&#39;].&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Help me correct the incorrect values based on the given error messages.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>后续 LLM 的返回可以仅针对这部分问题的修正，而不需要再重复生成整个 json。生成的新结果会由 guardrails 再自动填写回原来的位置，非常丝滑。除了 json 格式的检查外，RAIL spec 中还提供了通过脚本检查的扩展支持，可以用来检查更加复杂的内容，例如 Python 代码是否合法，结果中是否有敏感信息，甚至通过 LLM 再来检查生成的内容是否有害，做结果过滤等。</p><h3 id="nemo-guardrails" tabindex="-1"><strong>NeMo-Guardrails</strong> <a class="header-anchor" href="#nemo-guardrails" aria-label="Permalink to &quot;**NeMo-Guardrails**&quot;">​</a></h3><p>来自 Nvidia 的一个同名项目，其目标相比 guardrails 更有野心，想要确保 LLM 应用整体的可信度，无害性以及数据安全性等，而不仅仅只是输出的结构化检查和修复。因此其实现思路上也复杂不少，设计了一种专门的 Colang 语言，来支持更加通用多样的业务流，而不仅仅是生成 -&gt; 检查 -&gt; 修复。不过它的设计都是基于对话做的。实际开发应用可能不太合适。</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">define user ask capabilities</span></span>
<span class="line"><span style="color:#E1E4E8;">  &quot;What can you do?&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &quot;What can you help me with?&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &quot;tell me what you can do&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &quot;tell me about you&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &quot;How can I use your help?&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">define flow</span></span>
<span class="line"><span style="color:#E1E4E8;">  user ask capabilities</span></span>
<span class="line"><span style="color:#E1E4E8;">  bot inform capabilities</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">define bot inform capabilities</span></span>
<span class="line"><span style="color:#E1E4E8;">  &quot;I am an AI assistant which helps answer questions based on a given knowledge base. For this interaction, I can answer question based on the job report published by US Bureau of Labor Statistics.&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">define user ask capabilities</span></span>
<span class="line"><span style="color:#24292E;">  &quot;What can you do?&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &quot;What can you help me with?&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &quot;tell me what you can do&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &quot;tell me about you&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &quot;How can I use your help?&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">define flow</span></span>
<span class="line"><span style="color:#24292E;">  user ask capabilities</span></span>
<span class="line"><span style="color:#24292E;">  bot inform capabilities</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">define bot inform capabilities</span></span>
<span class="line"><span style="color:#24292E;">  &quot;I am an AI assistant which helps answer questions based on a given knowledge base. For this interaction, I can answer question based on the job report published by US Bureau of Labor Statistics.&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>从代码可以看出其结合了 python 和自然语言，方便相似度检索。 其整体的运作流程如下：</p><ol><li>根据用户输入识别用户意图。在这一步，系统会将用户的输入在 flow 定义的各种用户回复文本中做相似性查找，也就是上面文件中 “What can you do?” 这一连串内容。这些检索到的预设用户意图内容，结合其它信息如对话样例，最近聊天记录等，形成整体的 prompt，发给 LLM 来生成回复。最终再从回复中提取用户意图。</li><li>根据意图，判断下一步操作动作。这一步有两种做法，一是当前的状态能够匹配上预定义的 flow。例如用户就是提了一个 bot 能力的问题，那么就会匹配上面定义的 user ask capabilities，下一步动作自然就是 bot inform capabilities。如果没有匹配上，就要由 LLM 自己来决定下一步动作，这时候也会跟生成用户意图一样，对于 flow 定义做一个相似性查找，将相关信息发给 LLM 来做生成。</li><li>生成 bot 回复。如果上一步生成的 bot 回复意图已经有明确定义了（例如上面的 bot 能力的回复），那么就直接用预定义的回复内容来回复用户。如果没有，就跟生成用户意图一样，做意图的相似性查找，将相关信息给 LLM 来生成回复。注意到很多动态的问题例如 QA 场景，是很难预先定义好回复内容的，这里也支持对接知识库，同样是做 vector search 之后，将相关 context 信息发给 LLM 来生成具体回复。</li></ol><h3 id="guidance" tabindex="-1">guidance <a class="header-anchor" href="#guidance" aria-label="Permalink to &quot;guidance&quot;">​</a></h3><p>之前在 guardrails 中的做法是在 prompt 中给出说明和示范，希望 LLM 能够遵循指令来输出。但现实中往往会出现各种问题，例如额外带了一些其它的文字说明，或者生成的 json 格式不正确等，所以需要后续的 ReAsk 来进行修正。LangChain 里也提供了各种 output parser 来帮忙提取回复中的结构化信息部分，但也经常容易运行失败。</p><p>在 guidance 中，也是通过 “模板语言” 来定义 LLM 的输出结构，以确保输出格式的正确性。</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;font-weight:bold;"># load a model locally (we use LLaMA here)</span></span>
<span class="line"><span style="color:#E1E4E8;">guidance.llm = guidance.llms.Transformers(&quot;your_local_path/llama-7b&quot;, device=0)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;"># we can pre-define valid option sets</span></span>
<span class="line"><span style="color:#E1E4E8;">valid_weapons = [&quot;sword&quot;, &quot;axe&quot;, &quot;mace&quot;, &quot;spear&quot;, &quot;bow&quot;, &quot;crossbow&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;"># define the prompt</span></span>
<span class="line"><span style="color:#E1E4E8;">program = guidance(&quot;&quot;&quot;The following is a character profile for an RPG game in JSON format.</span></span>
<span class="line"><span style="color:#E1E4E8;">json</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    &quot;description&quot;: &quot;{{description}}&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    &quot;name&quot;: &quot;{{gen &#39;name&#39;}}&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    &quot;age&quot;: {{gen &#39;age&#39; pattern=&#39;[</span><span style="color:#DBEDFF;text-decoration:underline;">0-9</span><span style="color:#E1E4E8;">]+&#39; stop=&#39;,&#39;}},</span></span>
<span class="line"><span style="color:#E1E4E8;">    &quot;armor&quot;: &quot;{{#select &#39;armor&#39;}}leather{{or}}chainmail{{or}}plate{{/select}}&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    &quot;weapon&quot;: &quot;{{select &#39;weapon&#39; options=valid_weapons}}&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    &quot;class&quot;: &quot;{{gen &#39;class&#39;}}&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    &quot;mantra&quot;: &quot;{{gen &#39;mantra&#39;}}&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    &quot;strength&quot;: {{gen &#39;strength&#39; pattern=&#39;[</span><span style="color:#DBEDFF;text-decoration:underline;">0-9</span><span style="color:#E1E4E8;">]+&#39; stop=&#39;,&#39;}},</span></span>
<span class="line"><span style="color:#E1E4E8;">    &quot;items&quot;: [{{#geneach &#39;items&#39; num_iterations=3}}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &quot;{{gen &#39;this&#39;}}&quot;,{{/geneach}}</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}&quot;&quot;&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;"># execute the prompt</span></span>
<span class="line"><span style="color:#E1E4E8;">program(description=&quot;A quick and nimble fighter.&quot;, valid_weapons=valid_weapons)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;font-weight:bold;"># load a model locally (we use LLaMA here)</span></span>
<span class="line"><span style="color:#24292E;">guidance.llm = guidance.llms.Transformers(&quot;your_local_path/llama-7b&quot;, device=0)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;"># we can pre-define valid option sets</span></span>
<span class="line"><span style="color:#24292E;">valid_weapons = [&quot;sword&quot;, &quot;axe&quot;, &quot;mace&quot;, &quot;spear&quot;, &quot;bow&quot;, &quot;crossbow&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;"># define the prompt</span></span>
<span class="line"><span style="color:#24292E;">program = guidance(&quot;&quot;&quot;The following is a character profile for an RPG game in JSON format.</span></span>
<span class="line"><span style="color:#24292E;">json</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    &quot;description&quot;: &quot;{{description}}&quot;,</span></span>
<span class="line"><span style="color:#24292E;">    &quot;name&quot;: &quot;{{gen &#39;name&#39;}}&quot;,</span></span>
<span class="line"><span style="color:#24292E;">    &quot;age&quot;: {{gen &#39;age&#39; pattern=&#39;[</span><span style="color:#032F62;text-decoration:underline;">0-9</span><span style="color:#24292E;">]+&#39; stop=&#39;,&#39;}},</span></span>
<span class="line"><span style="color:#24292E;">    &quot;armor&quot;: &quot;{{#select &#39;armor&#39;}}leather{{or}}chainmail{{or}}plate{{/select}}&quot;,</span></span>
<span class="line"><span style="color:#24292E;">    &quot;weapon&quot;: &quot;{{select &#39;weapon&#39; options=valid_weapons}}&quot;,</span></span>
<span class="line"><span style="color:#24292E;">    &quot;class&quot;: &quot;{{gen &#39;class&#39;}}&quot;,</span></span>
<span class="line"><span style="color:#24292E;">    &quot;mantra&quot;: &quot;{{gen &#39;mantra&#39;}}&quot;,</span></span>
<span class="line"><span style="color:#24292E;">    &quot;strength&quot;: {{gen &#39;strength&#39; pattern=&#39;[</span><span style="color:#032F62;text-decoration:underline;">0-9</span><span style="color:#24292E;">]+&#39; stop=&#39;,&#39;}},</span></span>
<span class="line"><span style="color:#24292E;">    &quot;items&quot;: [{{#geneach &#39;items&#39; num_iterations=3}}</span></span>
<span class="line"><span style="color:#24292E;">        &quot;{{gen &#39;this&#39;}}&quot;,{{/geneach}}</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}&quot;&quot;&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;"># execute the prompt</span></span>
<span class="line"><span style="color:#24292E;">program(description=&quot;A quick and nimble fighter.&quot;, valid_weapons=valid_weapons)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>在之前传统的做法中，这一整个 json 都需要由 LLM 来生成。但是 json 的结构是我们预先定义的，例如有哪些字段，开闭的花括号等，其实都不需要 LLM 来生成。 优点：</p><ol><li>生成的 json 结构是保证合法且可控的，不会出现语法错误或者缺失 / 错误字段等。</li><li>通过 LLM 生成的 token 数量减少了，理论上可以提升生成速度。</li></ol><p>除了 prompt 模板，它还提供了：</p><ul><li>支持 hidden block，例如 LLM 的一些推理过程可能并不需要暴露给最终用户，就可以灵活利用这个特性来生成一些中间结果。</li><li>Generation caching，自动把已经生成过的结果缓存起来，提升速度。</li><li>支持 HuggingFace 模型的 guidance acceleration，进一步提升生成速度。</li><li>Token healing，不看这个我还不知道 LLM 有这种问题……</li><li>Regex pattern guide，在模板的基础上进一步通过正则表达来限定生成的内容规范。</li></ul><p>从项目代码来看，还是有比较浓的 “research 味道” 的，可读性并不好。实际测试结果也比较翻车。</p><h3 id="lmql" tabindex="-1">lmql <a class="header-anchor" href="#lmql" aria-label="Permalink to &quot;lmql&quot;">​</a></h3><p>在 guidance 的基础上，lmql 这个项目进一步把 “prompt 模板” 这个概念推进到了一种新的编程语言。从官网能看到给出的一系列示例。语法结构看起来有点像 SQL，但函数与缩进都是 Python 的风格。 <img src="https://marlene-1254110372.cos.ap-shanghai.myqcloud.com/blog/%7B92E71406-7249-4345-894C-AC646F47D05A%7D.png" alt=""> 从支持的功能来看，相比 guidance 毫不逊色。例如各种限制条件，代码调用，各种 caching 加速，工具集成等基本都具备。这个框架的格式化输出是其次，其各种可控的输出及语言本身或许更值得关注。</p><h3 id="typechat" tabindex="-1">TypeChat <a class="header-anchor" href="#typechat" aria-label="Permalink to &quot;TypeChat&quot;">​</a></h3><p>TypeChat 将 prompt 工程替换为 schema 工程：无需编写非结构化的自然语言 prompt 来描述所需输出的格式，而是编写 TS 类型定义。TypeChat 可以帮助 LLM 以 JSON 的形式响应，并且响应结果非常合理：例如用户要求将这句话「我可以要一份蓝莓松饼和一杯特级拿铁咖啡吗？」转化成 JSON 格式，TypeChat 响应结果如下： <img src="https://marlene-1254110372.cos.ap-shanghai.myqcloud.com/blog/%7BECFBBC78-BFE8-45d0-99EF-5E13E30E2A18%7D.png" alt=""> 其本质原理是把 interface 之类的 ts 代码作为 prompt 模板。因此它不仅可以对输出结果进行 ts 校验，甚至能够输入注释描述，不可谓非常方便 js 开发者。不过，近日 typechat 爆火，很多开发者企图尝试将 typechat 移植到 python，笔者认为这是缘木求鱼，因为其校验本身依赖的是 ts。笔者在开发过程中，将 typechat 融合到自己的库中，效果不错。但是它本身自带的 prompt 和笔者输入的 prompt 还是存在冲突，还是需要扣扣源码。</p><h3 id="langchain" tabindex="-1">Langchain <a class="header-anchor" href="#langchain" aria-label="Permalink to &quot;Langchain&quot;">​</a></h3><p>如果你关注了过去几个月中人工智能的爆炸式发展，那你大概率听说过 LangChain。简单来说，LangChain 是一个 Python 和 JavaScript 库，由 Harrison Chase 开发，用于连接 OpenAI 的 GPT API（后续已扩展到更多模型）以生成人工智能文本。</p><p>langchain 具有特别多的结构化输出工具。例如使用 yaml 定义 Schema，输出结构化 JSON。使用 zodSchema 定义 Schema，输出结构化 JSON。使用 FunctionParameters 定义 Schema，输出结构化 JSON。</p><p>但是笔者这里不打算介绍 langchain。究其原因，是笔者被 langchain 折磨不堪。明明可以几行代码写清楚的东西，langchain 可以各种封装，花了好几十行才写出来。更何况，笔者是用 ts 开发，开发时甚至偷不了任何懒，甚至其文档丝毫不友好。这几天，《机器之心》发布文章表示放弃 langchain。要想让 LangChain 做笔者想让它做的事，就必须花大力气破解它，这将造成大量的技术负担。因为使用人工智能本身就需要花费足够的脑力。LangChain 是为数不多的在大多数常用情况下都会增加开销的软件之一。所以笔者建议非必要，不使用 langchain。</p><h2 id="llm-对于结构化信息的理解" tabindex="-1">LLM 对于结构化信息的理解 <a class="header-anchor" href="#llm-对于结构化信息的理解" aria-label="Permalink to &quot;LLM 对于结构化信息的理解&quot;">​</a></h2><p>LLM 的可控性、稳定性、事实性、安全性等问题是推进企业级应用中非常关键的问题，上面分享的这些项目都是在这方面做了很多探索，也有很多值得借鉴的地方。总体思路上来说，主要是：</p><ul><li>提供一套 prompt 模板定义，允许用户指定 LLM 生成的格式或内容主题。</li><li>在模板基础上，也有不少项目进一步设计了相应的编程语言，让 LLM 与确定性程序的交互更加直观。</li><li>提供各类 validator，保证生成内容符合预期，并且提供了自动处理 / 修正机制。</li><li>更进一步，也可以在生成前进行干预，例如在 prompt 中给近似案例，修改模型 decode 时的概率分布等。</li><li>其它在可控性基础上做的各种性能与开销的优化，例如缓存，减少 token 消耗量，对开源模型能力的挖掘等。</li></ul><p>即使我们不直接使用上述的项目做开发，也可以从中学习到很多有用的思路。当然也非常期待这个领域出现更多有意思的想法与研究，以及 prompt 与编程语言结合能否碰撞出更多的火花。</p><p>同时笔者认为自动处理机制、自己设计的编程语言等等内容，随着时间发展，一定会层出不穷，不断迭代更新。笔者抛去这些时效性较弱的内容，从描述信息和位置信息两方面思考 peompt 模板该如何设计，当然只是浅浅的抛砖引玉一下。</p><h3 id="描述信息" tabindex="-1">描述信息 <a class="header-anchor" href="#描述信息" aria-label="Permalink to &quot;描述信息&quot;">​</a></h3><p>到底哪种方式更容易于 LLM 去理解？我们不谈框架的设计，只考虑 prompt 的设计。上述框架关于这方面有一些参考，例如有些直接拿 json 作为 prompt 模板，有些拿 xml 作为 prompt 模板，有些拿自己设计的语言作为 prompt，有些拿自然语言作为 prompt 模板。时至今日，选用哪种最适合 LLM 去理解格式化的信息，输出格式化的内容完全没有盖棺定论。甚至时至今日，格式化输出问题还是没有得到可靠稳定的解决，要不然笔者肯定不会介绍这么多框架实践了。</p><p>笔者认为不管哪种方式，都可以从两个方面考量：更简单，更结构。如果想要在开发的时候更简单，或者在使用时更简单，选择 md、yaml 方式描述结构化信息更合适。如果想要更结构化的方式，选择 json、xml、ts，输出都能更有结构，甚至之后做结构校验都更方便。</p><p>想要 LLM 结构化输出更加稳定和理想，笔者认为选择 prompt 模板时必须考虑每个字段是否有足够的辅助信息。例如 xml 描述时，每个标签都有一个描述属性描述这个标签时什么意思。</p><h4 id="额外引申" tabindex="-1">额外引申 <a class="header-anchor" href="#额外引申" aria-label="Permalink to &quot;额外引申&quot;">​</a></h4><p>笔者之前在开发 LLM 应用时，也曾思考类似的问题。笔者需要将多模态的数据进行结构化的标注，方便 LLM 去理解。但是标注成什么样却是一个很大的难题。笔者选择的是 JSON。但是，关于里面许多内容的标注。笔者在众多方案中徘徊。在细节处深挖，如何设计一种既简单，又能表示各种结构复杂关系，还能够节约 token 的方案及其的难。</p><blockquote><p>关于后续如何解决，请容笔者卖个关子 sai~</p></blockquote><h3 id="位置信息" tabindex="-1">位置信息 <a class="header-anchor" href="#位置信息" aria-label="Permalink to &quot;位置信息&quot;">​</a></h3><p>是否有人注意到 llm 对于关键信息在 prompt 中的位置会对结果产生影响呢？在设计 prompt 方面，人们通常建议为语言模型提供详尽的任务描述和背景信息。近期的一些语言模型有能力输入较长的上下文，但它究竟能多好地利用更长的上下文？这一点却相对少有人知。近日，有学者研究发现如果上下文太长，语言模型会更关注其中的前后部分，中间部分却几乎被略过不看，导致模型难以找到放在输入上下文中部的相关信息。下文部分是该论文一些核心内容： <img src="https://marlene-1254110372.cos.ap-shanghai.myqcloud.com/blog/%7B59E03114-A066-4394-B1F0-B09357F76B39%7D.png" alt=""> 这是由其本身训练和结构设计有关的，但却对于我们开发有着莫大的帮助和指导意义。 <img src="https://marlene-1254110372.cos.ap-shanghai.myqcloud.com/blog/%7B9EA47A4E-3EF3-4800-99F4-109EE713746B%7D.png" alt=""> 相比之下，在多文档问答任务上，查询感知型上下文化的影响很小。特别指出，当相关信息位于输入上下文的最开始时，它可以提高性能，但在其他设置中会稍微降低性能。借此，我们可以认为，将重要的信息放在开头，结尾放置结构化模板，或许是一种优质选择。</p><p>那么如果真的为其提供这么多 token，那会真的有用吗？这个问题的答案是：由下游任务决定。因为这取决于所添加上下文的边际价值以及模型有效使用长输入上下文的能力。所以如果能有效地对检索文档排序（让相关信息与输入上下文的起始处更近）或对已排序的列表进行截断处理（必要时返回更少的文档），那么也许可以提升基于语言模型的阅读器使用检索上下文的能力。</p><h2 id="题外话" tabindex="-1">题外话 <a class="header-anchor" href="#题外话" aria-label="Permalink to &quot;题外话&quot;">​</a></h2><p>之前，妙鸭相机突然爆火。其只需 9.9 即可生成同款数字分身，效果拔群。但是很多人发现，其生成的内容极其容易造成肖像权侵犯，这显然是有问题的。更有甚至的是，用户发现妙鸭相机的用户协议存在问题。根据该应用最初版本的用户服务协议，用户需授权妙鸭相机在全世界（包括元宇宙等虚拟空间）范围内享有永久的、不可撤销的、可转让的、可转授权的、免费的和非独家的许可，使得妙鸭相机可以任何形式、任何媒体或技术（无论现在已知或以后开发）使用用户的内容。对于上述内容，妙鸭相机称系 “为了使我方能够提供、确保和改进本服务（包括但不限于使用 AI 生成内容作为再训练数据等）”。</p><p>一句话理解，就是你的肖像它随便用，与你无关。</p><p>这不禁让我联想到一部非常发人深省的剧作：《黑镜》。它的第六季第一集讲述的同样是隐私的问题。该集中，主人公的生活隐私由于同意了用户协议，被无时无刻搜集。然后当天晚上就发现流媒体电视上居然出现了跟她同名的电视剧，内容与它当天的生活一模一样，台词甚至更加夸张。于是她的不方便公之于众的生活变得一塌涂地，但她甚至没有办法打官司，因为肯定会输。更令人深省的是，电视剧的主人公是 AI 生成的视频，其肖像确是根据现实存在的明星生成的。那位明星也无法对她的肖像有任何权利。这样一个荒诞的故事，但是仔细想想，却又非常可能发生。</p><p>如今的社会出现了各种大模型。大模型的发展必定需要大数据的支撑。企业为了盈利必定会想方设法的搜集数据，然后肆意使用，转卖。而很多用户对此不自知，更有甚至是非常乐意。例如抖音、B 站，当你对其交互时，你希望它推荐更适合你的视频，它也在搜集你的数据，这是明知且主动的。</p><p>隐私的掠夺是无声的。你认为你的一下点击是没啥价值的隐私数据，殊不知这正中了资本家的下怀。几年前，我也是这样的。高中的大门出现了闸机，可以刷脸进校园。我当时以为这需要像手机解锁一样需要扫描人脸 ID。结果发现，我可以直接进去，闸机上甚至会出现我的照片。我仔细看了看，发现是我入学的证件照。原来一张照片就能刷脸进校园。原来就连学校也可以不经同学同意，将照片用作其他用途。那更何况其他的呢。 我想，未来，这样的隐私问题会越来越多。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&amp;mid=2650885029&amp;idx=4&amp;sn=ac01576a8957b41529dd3c877d262d5e&amp;chksm=84e48fdbb39306cd8979a4fa7f7da14a9428dc28ccc47880d668ef6293b1a8b7b0964569ec36&amp;mpshare=1&amp;scene=23&amp;srcid=0725w9FPsVnOOzkPGPB7lH8h&amp;sharer_sharetime=1690303766527&amp;sharer_shareid=d2396b329b12f49d34967e2b183540dd#rd" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&amp;mid=2650885029&amp;idx=4&amp;sn=ac01576a8957b41529dd3c877d262d5e&amp;chksm=84e48fdbb39306cd8979a4fa7f7da14a9428dc28ccc47880d668ef6293b1a8b7b0964569ec36&amp;mpshare=1&amp;scene=23&amp;srcid=0725w9FPsVnOOzkPGPB7lH8h&amp;sharer_sharetime=1690303766527&amp;sharer_shareid=d2396b329b12f49d34967e2b183540dd#rd</a><a href="https://mp.weixin.qq.com/s/BngY2WgCcpTOlvdyBNJxqA" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/BngY2WgCcpTOlvdyBNJxqA</a><a href="https://microsoft.github.io/TypeChat/" target="_blank" rel="noreferrer">https://microsoft.github.io/TypeChat/</a><a href="https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&amp;mid=2650885029&amp;idx=4&amp;sn=ac01576a8957b41529dd3c877d262d5e&amp;chksm=84e48fdbb39306cd8979a4fa7f7da14a9428dc28ccc47880d668ef6293b1a8b7b0964569ec36&amp;mpshare=1&amp;scene=23&amp;srcid=0725w9FPsVnOOzkPGPB7lH8h&amp;sharer_sharetime=1690303766527&amp;sharer_shareid=d2396b329b12f49d34967e2b183540dd#rd" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&amp;mid=2650885029&amp;idx=4&amp;sn=ac01576a8957b41529dd3c877d262d5e&amp;chksm=84e48fdbb39306cd8979a4fa7f7da14a9428dc28ccc47880d668ef6293b1a8b7b0964569ec36&amp;mpshare=1&amp;scene=23&amp;srcid=0725w9FPsVnOOzkPGPB7lH8h&amp;sharer_sharetime=1690303766527&amp;sharer_shareid=d2396b329b12f49d34967e2b183540dd#rd</a></p>`,63),t=[p];function o(r,i,c,u,m,d){return n(),a("div",null,t)}const h=s(l,[["render",o]]);export{E as __pageData,h as default};
