import{_ as s,o as n,c as a,U as p}from"./chunks/framework.489e5108.js";const d=JSON.parse('{"title":"New meaning of C","description":"","frontmatter":{},"headers":[],"relativePath":"5.富有生命的嵌入式/5.2New meaning of C.md","filePath":"5.富有生命的嵌入式/5.2New meaning of C.md","lastUpdated":1696176798000}'),l={name:"5.富有生命的嵌入式/5.2New meaning of C.md"},o=p(`<h1 id="new-meaning-of-c" tabindex="-1">New meaning of C <a class="header-anchor" href="#new-meaning-of-c" aria-label="Permalink to &quot;New meaning of C&quot;">​</a></h1><blockquote><p>Author：肖扬</p></blockquote><p>在上一篇文章中，我们介绍了嵌入式相关的产品，其中芯片充当着及其重要的作用，本篇我们将以孵化器实验室的部分考核流程与教程作为参考，并且加以一定的概念解析，逐步地为大家解开单片机裸机开发的面纱。</p><p>PS：在学习此模块之前，我希望你们能熟练掌握 C 语言的基础知识，特别是指针方面的内容。</p><p>如果你还没有完成 C 语言的学习，可以参考此文章：<a href="./../3.编程思维体系构建/3.4C语言">3.4C 语言</a></p><h2 id="stc89c52-一款入门级的芯片" tabindex="-1">STC89C52-- 一款入门级的芯片 <a class="header-anchor" href="#stc89c52-一款入门级的芯片" aria-label="Permalink to &quot;STC89C52--一款入门级的芯片&quot;">​</a></h2><h3 id="相关介绍" tabindex="-1">相关介绍 <a class="header-anchor" href="#相关介绍" aria-label="Permalink to &quot;相关介绍&quot;">​</a></h3><p>Intel 的 STC89C51\\C52 系列早在上世纪 80 年代就已经广泛运用，考虑到其精简但较为充足的硬件资源以及其低廉的价格，笔者十分建议可以从 51 单片机系列开始去接触整个嵌入式行业（因为你需要知道自己适不适合进入到嵌入式行业，大学本就是一个试错的过程，而低廉的价格使得其试错成本变得很低）</p><p>以下是比较推荐的学习路线：</p><p>1、购买 51 单片机：<a href="https://m.tb.cn/h.UuGJR5G?tk=kN94dm040JX" target="_blank" rel="noreferrer">CZ0001「普中 51 单片机学习板开发板 stc89c52 单片机实验板 C51 单片机 diy 套件」</a></p><p>2、推荐学习视频：<a href="https://b23.tv/KmaWgUK" target="_blank" rel="noreferrer">【51 单片机入门教程 -2020 版 程序全程纯手打 从零开始入门】</a></p><p>3、相关学习资料：</p><p>软件安装包、开发板资料、课件及程序源码百度网盘链接：</p><p><a href="https://pan.baidu.com/s/1vDTN2o8ffvczzNQGfyjHng" target="_blank" rel="noreferrer">https://pan.baidu.com/s/1vDTN2o8ffvczzNQGfyjHng</a> 提取码：gdzf，链接里压缩包的解压密码：51，如果打不开请复制链接到浏览器再打开</p><h3 id="一些简单的任务" tabindex="-1">一些简单的任务 <a class="header-anchor" href="#一些简单的任务" aria-label="Permalink to &quot;一些简单的任务&quot;">​</a></h3><p>咳咳，摆烂一下，放一下 22 年实验室的培养计划（<del>只给第一期，不能再多了</del>）：</p><p>在学习完这些内容后，你可以尝试如下的工程实践：</p><h2 id="寄存器-verry-important" tabindex="-1">寄存器（VERRY--IMPORTANT!!!） <a class="header-anchor" href="#寄存器-verry-important" aria-label="Permalink to &quot;寄存器（VERRY--IMPORTANT!!!）&quot;">​</a></h2><p>相信学完 C51 的内容，你已经对寄存器有了一定的了解。</p><p>但是由于其重要性，以及为了巩固各位的基础知识，防止出现有些人学了 A 只会 A，学了 B 只会 B，而不会 CDEF... 的现象，所以这里我必须要着重重新讲解一下寄存器的概念。</p><p>在 C 语言中我们有 int、short、long 等变量，实际上 C 语言中还可以定义一个寄存器变量（register）。</p><p>那么为什么需要寄存器呢，或者说我们为什么需要一个寄存器变量呢。</p><p>这里我不从计算机组成原理或者微机接口与技术的概念入手，而是举一个简单的例子：</p><p>如果我们在图书馆上准备看书，去获取知识，此时我们是 CPU、书则是数据。</p><p>如果我们去图书馆里的书架上拿书并观看，则需要：走到对应书架 - 拿书（获取数据）- 回到书桌，这需要花费相当一部分的时间，此时硬盘相当于书架；如果我们直接拿书桌上的书，则相对速度会快很多，此时书桌相当于主存；如果我们手上就有一本书，那么我们低头就可以看到，手就相当于寄存器。所以，寄存器是 CPU 内部用来存放数据的一些小型的存储区域，用来暂时存放参与运算的数据和运算结果以及一些 CPU 运行所需要的信息。</p><p>以我举例而言，<strong>可见寄存器获得数据的速度会快于主存与硬盘，而存储数据的大小将会小于主存与硬盘</strong>，如果这块不清楚的话也可以去看 也许你会用上的基础知识 中的存储器知识部分。</p><p>而从汇编语言的角度来讲（此为 Intel 的汇编语法）：</p><div class="language-asm vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">WAIT_FOR_TIMER:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">MOV</span><span style="color:#E1E4E8;"> A, LED_COUNT              </span><span style="color:#6A737D;">;读取当前亮灯的编号</span></span>
<span class="line"><span style="color:#E1E4E8;">    CJNE A, #</span><span style="color:#79B8FF;">00H</span><span style="color:#E1E4E8;">, NOT_FIRST_LED   </span><span style="color:#6A737D;">;如果不是第一个灯，则跳转到NOT_FIRST_LED标签</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">MOV</span><span style="color:#E1E4E8;"> A, #</span><span style="color:#79B8FF;">03H</span><span style="color:#E1E4E8;">                   </span><span style="color:#6A737D;">;如果是第一个灯，则将延时设为3秒</span></span>
<span class="line"><span style="color:#E1E4E8;">    SJMP DELAY                    </span><span style="color:#6A737D;">;跳转到延时</span></span>
<span class="line"><span style="color:#B392F0;">NOT_FIRST_LED:</span></span>
<span class="line"><span style="color:#E1E4E8;">    .......</span></span>
<span class="line"><span style="color:#B392F0;">DELAY:</span></span>
<span class="line"><span style="color:#E1E4E8;">    .......</span></span>
<span class="line"><span style="color:#6A737D;">;此汇编代码块中，累加器A作为一个常用的特殊寄存器，充当着暂时存储数据信息的作用</span></span>
<span class="line"><span style="color:#6A737D;">;存储LED_COUNT的编号并用于比较大小，存储所需延时时间并用于DELAY块</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">WAIT_FOR_TIMER:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">MOV</span><span style="color:#24292E;"> A, LED_COUNT              </span><span style="color:#6A737D;">;读取当前亮灯的编号</span></span>
<span class="line"><span style="color:#24292E;">    CJNE A, #</span><span style="color:#005CC5;">00H</span><span style="color:#24292E;">, NOT_FIRST_LED   </span><span style="color:#6A737D;">;如果不是第一个灯，则跳转到NOT_FIRST_LED标签</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">MOV</span><span style="color:#24292E;"> A, #</span><span style="color:#005CC5;">03H</span><span style="color:#24292E;">                   </span><span style="color:#6A737D;">;如果是第一个灯，则将延时设为3秒</span></span>
<span class="line"><span style="color:#24292E;">    SJMP DELAY                    </span><span style="color:#6A737D;">;跳转到延时</span></span>
<span class="line"><span style="color:#6F42C1;">NOT_FIRST_LED:</span></span>
<span class="line"><span style="color:#24292E;">    .......</span></span>
<span class="line"><span style="color:#6F42C1;">DELAY:</span></span>
<span class="line"><span style="color:#24292E;">    .......</span></span>
<span class="line"><span style="color:#6A737D;">;此汇编代码块中，累加器A作为一个常用的特殊寄存器，充当着暂时存储数据信息的作用</span></span>
<span class="line"><span style="color:#6A737D;">;存储LED_COUNT的编号并用于比较大小，存储所需延时时间并用于DELAY块</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-asm vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ORG </span><span style="color:#79B8FF;">0BH</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">PUSH</span><span style="color:#E1E4E8;"> ACC </span><span style="color:#6A737D;">; 保存寄存器状态</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">PUSH</span><span style="color:#E1E4E8;"> PSW</span></span>
<span class="line"><span style="color:#E1E4E8;">    ......</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">POP</span><span style="color:#E1E4E8;"> PSW </span><span style="color:#6A737D;">; 恢复寄存器状态</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">POP</span><span style="color:#E1E4E8;"> ACC</span></span>
<span class="line"><span style="color:#E1E4E8;">    RETI </span><span style="color:#6A737D;">; 返回中断</span></span>
<span class="line"><span style="color:#6A737D;">;此汇编代码块用于基本的中断处理，我们需要保存ACC、PSW的状态来维持中断以及中断后程序的正常进行</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ORG </span><span style="color:#005CC5;">0BH</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">PUSH</span><span style="color:#24292E;"> ACC </span><span style="color:#6A737D;">; 保存寄存器状态</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">PUSH</span><span style="color:#24292E;"> PSW</span></span>
<span class="line"><span style="color:#24292E;">    ......</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">POP</span><span style="color:#24292E;"> PSW </span><span style="color:#6A737D;">; 恢复寄存器状态</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">POP</span><span style="color:#24292E;"> ACC</span></span>
<span class="line"><span style="color:#24292E;">    RETI </span><span style="color:#6A737D;">; 返回中断</span></span>
<span class="line"><span style="color:#6A737D;">;此汇编代码块用于基本的中断处理，我们需要保存ACC、PSW的状态来维持中断以及中断后程序的正常进行</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>以上简单例举了寄存器的一般作用，以汇编语言出发去讲的原因是：它能有效地展现底层代码的工作原理，既不会像机器语言那样只用 0、1 表示的晦涩难懂，又不会像高级语言那般难以直观地看到底层的工作方式。但是，我们做嵌入式入门开发的过程中并不会让你直接去写汇编语言，而是以最基础的 C 语言（相比汇编而言，C 在功能上、结构性、可读性、可维护性上有明显的优势），通过 Keil、IAR 等拥有交叉编译器的 C 语言软件开发系统来完成高级语言、汇编语言、机器语言的转码工作，从而通过 C 语言的编写来控制单片机等嵌入式系统的开发。</p><p>而抽象层面的 C 代码需要通过访问寄存器来直接控制硬件。所以在嵌入式开发的过程中，C 有了特殊的含义：<strong>C 里的数字代表的可能只是一个地址或者一个数据，但是在嵌入式开发里，这样一个数字也可以代表着一种寄存器状态。</strong></p><p>下面引入一个 STM32F1 系列的 GPIO 部分寄存器图（来源正点原子提供的 F1 参考手册）：</p><p><img src="https://cdn.xyxsw.site/MyDMbeCKLowC1Mx7Q6Ec9BLPn4g.png" alt=""></p><p><img src="https://cdn.xyxsw.site/LJ1SbFfv6oUIgtx8CstcbWTNnRg.png" alt=""></p><p>如果我们想做一个简单的实验 - 驱动一个 LED 灯（假设此 LED 灯以 PB5 为输出驱动口），在对相应的 RCC 时钟等配置之外，最重要的是对相应的 GPIO 口的配置，首先我们查阅其寄存器的物理起始地址：</p><p><img src="https://cdn.xyxsw.site/CZ3cbiEhsoWDgJxhwXIcpUkAnMg.png" alt=""></p><p><img src="https://cdn.xyxsw.site/HTFUbsQCNouQVzx0QYiciQWOnZf.png" alt=""></p><p>可见 GPIO 外设通过 APB2 总线进行地址定位与传输数据的，所以我们要控制 PB5 的话首先需要定位到对应的地址：</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PERIPH_BASE</span><span style="color:#E1E4E8;">           ((</span><span style="color:#F97583;">uint32_t</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">40000000</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;"> //外设基址</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">APB1PERIPH_BASE</span><span style="color:#E1E4E8;">       PERIPH_BASE</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">APB2PERIPH_BASE</span><span style="color:#E1E4E8;">       (PERIPH_BASE </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;"> //APB2 基址</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AHBPERIPH_BASE</span><span style="color:#E1E4E8;">        (PERIPH_BASE </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">20000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AFIO_BASE</span><span style="color:#E1E4E8;">             (APB2PERIPH_BASE </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">0000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EXTI_BASE</span><span style="color:#E1E4E8;">             (APB2PERIPH_BASE </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">0400</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GPIOA_BASE</span><span style="color:#E1E4E8;">            (APB2PERIPH_BASE </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">0800</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GPIOB_BASE</span><span style="color:#E1E4E8;">            (APB2PERIPH_BASE </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">0C00</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;">//GPIOB 基址，计算可得 0x40010C00</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GPIOC_BASE</span><span style="color:#E1E4E8;">            (APB2PERIPH_BASE </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GPIOD_BASE</span><span style="color:#E1E4E8;">            (APB2PERIPH_BASE </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">1400</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GPIOE_BASE</span><span style="color:#E1E4E8;">            (APB2PERIPH_BASE </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">1800</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GPIOF_BASE</span><span style="color:#E1E4E8;">            (APB2PERIPH_BASE </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">1C00</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GPIOG_BASE</span><span style="color:#E1E4E8;">            (APB2PERIPH_BASE </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">0x</span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">//APB2 还有相关定时器的基址，这里就不再展示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GPIOB</span><span style="color:#E1E4E8;">               ((GPIO_TypeDef </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">) GPIOB_BASE)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PERIPH_BASE</span><span style="color:#24292E;">           ((</span><span style="color:#D73A49;">uint32_t</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">40000000</span><span style="color:#24292E;">)</span><span style="color:#6A737D;"> //外设基址</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">APB1PERIPH_BASE</span><span style="color:#24292E;">       PERIPH_BASE</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">APB2PERIPH_BASE</span><span style="color:#24292E;">       (PERIPH_BASE </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">10000</span><span style="color:#24292E;">)</span><span style="color:#6A737D;"> //APB2 基址</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AHBPERIPH_BASE</span><span style="color:#24292E;">        (PERIPH_BASE </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">20000</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AFIO_BASE</span><span style="color:#24292E;">             (APB2PERIPH_BASE </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">0000</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EXTI_BASE</span><span style="color:#24292E;">             (APB2PERIPH_BASE </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">0400</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GPIOA_BASE</span><span style="color:#24292E;">            (APB2PERIPH_BASE </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">0800</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GPIOB_BASE</span><span style="color:#24292E;">            (APB2PERIPH_BASE </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">0C00</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//GPIOB 基址，计算可得 0x40010C00</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GPIOC_BASE</span><span style="color:#24292E;">            (APB2PERIPH_BASE </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GPIOD_BASE</span><span style="color:#24292E;">            (APB2PERIPH_BASE </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">1400</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GPIOE_BASE</span><span style="color:#24292E;">            (APB2PERIPH_BASE </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">1800</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GPIOF_BASE</span><span style="color:#24292E;">            (APB2PERIPH_BASE </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">1C00</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GPIOG_BASE</span><span style="color:#24292E;">            (APB2PERIPH_BASE </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">0x</span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">//APB2 还有相关定时器的基址，这里就不再展示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GPIOB</span><span style="color:#24292E;">               ((GPIO_TypeDef </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">) GPIOB_BASE)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>根据如上提供的 CRL、ODR 寄存器的功能映射，要使得 PB5 推挽输出且初始电平输出为高，则需要：</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LED_Init</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        RCC-&gt;APB2ENR</span><span style="color:#F97583;">|=</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> //GPIOB 的时钟使能，只有使能对应的时钟后 GPIO 才能正常工作                               </span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span></span>
<span class="line"><span style="color:#E1E4E8;">        GPIOB-&gt;CRL</span><span style="color:#F97583;">&amp;=0X</span><span style="color:#79B8FF;">FF0FFFFF</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> //由图可知，CRL 的第 20-23 位控制 5 口，此举是对第 20-23 位清零</span></span>
<span class="line"><span style="color:#E1E4E8;">        GPIOB-&gt;CRL</span><span style="color:#F97583;">|=0X</span><span style="color:#79B8FF;">00300000</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> //此举是对第 20-23 位赋值 0011，根据寄存器功能可知此代表 50Mhz 推挽输出        </span></span>
<span class="line"><span style="color:#E1E4E8;">        GPIOB-&gt;ODR</span><span style="color:#F97583;">|=</span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> //设置 ODR 第 5 位为 1，输出高电平    </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LED_Init</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        RCC-&gt;APB2ENR</span><span style="color:#D73A49;">|=</span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> //GPIOB 的时钟使能，只有使能对应的时钟后 GPIO 才能正常工作                               </span></span>
<span class="line"><span style="color:#24292E;">                    </span></span>
<span class="line"><span style="color:#24292E;">        GPIOB-&gt;CRL</span><span style="color:#D73A49;">&amp;=0X</span><span style="color:#005CC5;">FF0FFFFF</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> //由图可知，CRL 的第 20-23 位控制 5 口，此举是对第 20-23 位清零</span></span>
<span class="line"><span style="color:#24292E;">        GPIOB-&gt;CRL</span><span style="color:#D73A49;">|=0X</span><span style="color:#005CC5;">00300000</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> //此举是对第 20-23 位赋值 0011，根据寄存器功能可知此代表 50Mhz 推挽输出        </span></span>
<span class="line"><span style="color:#24292E;">        GPIOB-&gt;ODR</span><span style="color:#D73A49;">|=</span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> //设置 ODR 第 5 位为 1，输出高电平    </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>其中 GPIOB 的结构体如下所示：</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">typedef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">struct</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  __IO </span><span style="color:#F97583;">uint32_t</span><span style="color:#E1E4E8;"> CRL;</span></span>
<span class="line"><span style="color:#E1E4E8;">  __IO </span><span style="color:#F97583;">uint32_t</span><span style="color:#E1E4E8;"> CRH;</span></span>
<span class="line"><span style="color:#E1E4E8;">  __IO </span><span style="color:#F97583;">uint32_t</span><span style="color:#E1E4E8;"> IDR;</span></span>
<span class="line"><span style="color:#E1E4E8;">  __IO </span><span style="color:#F97583;">uint32_t</span><span style="color:#E1E4E8;"> ODR;</span></span>
<span class="line"><span style="color:#E1E4E8;">  __IO </span><span style="color:#F97583;">uint32_t</span><span style="color:#E1E4E8;"> BSRR;</span></span>
<span class="line"><span style="color:#E1E4E8;">  __IO </span><span style="color:#F97583;">uint32_t</span><span style="color:#E1E4E8;"> BRR;</span></span>
<span class="line"><span style="color:#E1E4E8;">  __IO </span><span style="color:#F97583;">uint32_t</span><span style="color:#E1E4E8;"> LCKR;</span></span>
<span class="line"><span style="color:#E1E4E8;">} GPIO_TypeDef;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">struct</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  __IO </span><span style="color:#D73A49;">uint32_t</span><span style="color:#24292E;"> CRL;</span></span>
<span class="line"><span style="color:#24292E;">  __IO </span><span style="color:#D73A49;">uint32_t</span><span style="color:#24292E;"> CRH;</span></span>
<span class="line"><span style="color:#24292E;">  __IO </span><span style="color:#D73A49;">uint32_t</span><span style="color:#24292E;"> IDR;</span></span>
<span class="line"><span style="color:#24292E;">  __IO </span><span style="color:#D73A49;">uint32_t</span><span style="color:#24292E;"> ODR;</span></span>
<span class="line"><span style="color:#24292E;">  __IO </span><span style="color:#D73A49;">uint32_t</span><span style="color:#24292E;"> BSRR;</span></span>
<span class="line"><span style="color:#24292E;">  __IO </span><span style="color:#D73A49;">uint32_t</span><span style="color:#24292E;"> BRR;</span></span>
<span class="line"><span style="color:#24292E;">  __IO </span><span style="color:#D73A49;">uint32_t</span><span style="color:#24292E;"> LCKR;</span></span>
<span class="line"><span style="color:#24292E;">} GPIO_TypeDef;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>所以由以上提到的例子而言，C 语言可以从如下三方面进行与寄存器之间的控制：</p><ol><li>寄存器的地址可以使用<strong>指针变量</strong>来访问。</li><li>C 语言中的<strong>结构体可以用于表示寄存器映射</strong>。</li><li>C 语言中的<strong>位域可以用于表示寄存器中的位</strong>。</li></ol><p>而且 C 语言中的内联汇编可以用于直接访问寄存器。在某些情况下，如果我们需要直接访问寄存器来完成复杂的硬件控制操作，则可以使用汇编语言指令来直接访问寄存器，从而实现复杂的硬件控制操作。常见的如，堆栈大小的设置等。</p><div class="language-asm vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Stack_Size      </span><span style="color:#79B8FF;">EQU</span><span style="color:#E1E4E8;">     </span><span style="color:#79B8FF;">0x00000400</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">                AREA    STACK, NOINIT, READWRITE, ALIGN=</span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">Stack_Mem       SPACE   Stack_Size</span></span>
<span class="line"><span style="color:#E1E4E8;">__initial_sp</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Stack_Size      </span><span style="color:#005CC5;">EQU</span><span style="color:#24292E;">     </span><span style="color:#005CC5;">0x00000400</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">                AREA    STACK, NOINIT, READWRITE, ALIGN=</span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;">Stack_Mem       SPACE   Stack_Size</span></span>
<span class="line"><span style="color:#24292E;">__initial_sp</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,47),e=[o];function c(r,t,E,y,i,A){return n(),a("div",null,e)}const F=s(l,[["render",c]]);export{d as __pageData,F as default};
