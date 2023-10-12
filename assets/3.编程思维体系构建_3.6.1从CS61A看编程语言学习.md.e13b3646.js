import{_ as e,o as a,c as r,U as t}from"./chunks/framework.489e5108.js";const b=JSON.parse('{"title":"从 CS61A 看编程语言学习","description":"","frontmatter":{},"headers":[],"relativePath":"3.编程思维体系构建/3.6.1从CS61A看编程语言学习.md","filePath":"3.编程思维体系构建/3.6.1从CS61A看编程语言学习.md","lastUpdated":1696176798000}'),o={name:"3.编程思维体系构建/3.6.1从CS61A看编程语言学习.md"},p=t('<h1 id="从-cs61a-看编程语言学习" tabindex="-1">从 CS61A 看编程语言学习 <a class="header-anchor" href="#从-cs61a-看编程语言学习" aria-label="Permalink to &quot;从 CS61A 看编程语言学习&quot;">​</a></h1><h2 id="什么是-cs61a" tabindex="-1">什么是 CS61A <a class="header-anchor" href="#什么是-cs61a" aria-label="Permalink to &quot;什么是 CS61A&quot;">​</a></h2><p>首先声明，本教程的 python 部分很多内容摘自 CS61A</p><p>如果你看过 CS 自学指南，想必你在第一页就看过这样的描述</p><blockquote><p>大一入学时我是一个对计算机一无所知的小白，装了几十个 G 的 Visual Studio 天天和 OJ 你死我活。凭着高中的数学底子我数学课学得还不错，但在专业课上对竞赛大佬只有仰望。提到编程我只会打开那笨重的 IDE，新建一个我也不知道具体是干啥的命令行项目，然后就是 <code>cin</code> , <code>cout</code> , <code>for</code> 循环，然后 CE, RE, WA 循环。当时的我就处在一种拼命想学好但不知道怎么学，课上认真听讲但题还不会做，课后做作业完全是用时间和它硬耗的痛苦状态。我至今电脑里还存着自己大一上学期计算概论大作业的源代码 —— 一个 1200 行的 C++ 文件，没有头文件、没有类、没有封装、没有 unit test、没有 Makefile、没有 Git，唯一的优点是它确实能跑，缺点是 “能跑” 的补集。我一度怀疑我是不是不适合学计算机，因为童年对于极客的所有想象，已经被我第一个学期的体验彻底粉碎了。<br>这一切的转机发生在我大一的寒假，我心血来潮想学习 Python。无意间看到知乎有人推荐了 CS61A 这门课，说是 UC Berkeley 的大一入门课程，讲的就是 Python。我永远不会忘记那一天，打开 <a href="https://cs61a.org/" target="_blank" rel="noreferrer">CS61A</a> 课程网站的那个瞬间，就像哥伦布发现了新大陆一样，我开启了新世界的大门。<br>我一口气 3 个星期上完了这门课，它让我第一次感觉到原来 CS 可以学得如此充实而有趣，原来这世上竟有如此精华的课程。<br>为避免有崇洋媚外之嫌，我单纯从一个学生的视角来讲讲自学 CS61A 的体验：<br>- 独立搭建的课程网站：一个网站将所有课程资源整合一体，条理分明的课程 schedule、所有 slides, hw, discussion 的文件链接、详细明确的课程给分说明、历年的考试题与答案。这样一个网站抛开美观程度不谈，既方便学生，也让资源公正透明。<br>- 课程教授亲自编写的教材：CS61A 这门课的开课老师将 MIT 的经典教材 Structure and Interpretation of Computer Programs (SICP) 用 Python 这门语言进行改编（原教材基于 Scheme 语言），保证了课堂内容与教材内容的一致性，同时补充了更多细节，可以说诚意满满。而且全书开源，可以直接线上阅读。<br>- 丰富到让人眼花缭乱的课程作业：14 个 lab 巩固随堂知识点，10 个 homework，还有 4 个代码量均上千行的 project。与大家熟悉的 OJ 和 Word 文档式的作业不同，所有作业均有完善的代码框架，保姆级的作业说明。每个 Project 都有详尽的 handout 文档、全自动的评分脚本。CS61A 甚至专门开发了一个<a href="https://okpy.org/" target="_blank" rel="noreferrer">自动化的作业提交评分系统</a>（据说还发了论文）。当然，有人会说 “一个 project 几千行代码大部分都是助教帮你写好的，你还能学到啥？”。此言差矣，作为一个刚刚接触计算机，连安装 Python 都磕磕绊绊的小白来说，这样完善的代码框架既可以让你专注于巩固课堂上学习到的核心知识点，又能有 “我才学了一个月就能做一个小游戏了！” 的成就感，还能有机会阅读学习别人高质量的代码，从而为自己所用。我觉得在低年级，这种代码框架可以说百利而无一害。唯一的害也许是苦了老师和助教，因为开发这样的作业可想而知需要相当的时间投入。<br>- 每周 Discussion 讨论课，助教会讲解知识难点和考试例题：类似于北京大学 ICS 的小班研讨，但习题全部用 LaTeX 撰写，相当规范且会明确给出 solution。<br>这样的课程，你完全不需要任何计算机的基础，你只需要努力、认真、花时间就够了。此前那种有劲没处使的感觉，那种付出再多时间却得不到回报的感觉，从此烟消云散。这太适合我了，我从此爱上了自学。<br>试想如果有人能把艰深的知识点嚼碎嚼烂，用生动直白的方式呈现给你，还有那么多听起来就很 fancy，种类繁多的 project 来巩固你的理论知识，你会觉得他们真的是在倾尽全力想方设法地让你完全掌握这门课，你会觉得不学好它简直是对这些课程建设者的侮辱。<br>如果你觉得我在夸大其词，那么不妨从 <a href="https://cs61a.org/" target="_blank" rel="noreferrer">CS61A</a> 开始，因为它是我的梦开始的地方。</p></blockquote><p>如果看完了这些，你可能会震惊，会怀疑并且试着打开它并且去尝试这门课程，但是也有可能你会被纯英文的视频或者油管劝退，也有可能你会怀疑我在使用别人的课程体系的前提下仍然要把它放到自己的内容里面的目的，That&#39;s all right，我会在下面对她讲的东西进行一定的补充，并且附着上自己的学习建议以及学习思考。</p><h2 id="错误的学习方式" tabindex="-1">错误的学习方式 <a class="header-anchor" href="#错误的学习方式" aria-label="Permalink to &quot;错误的学习方式&quot;">​</a></h2><p>很多人看到要自学 python 之后，第一时间想到的是，我要去 B 站 / 百度搜一搜，然后一般搜出来就是菜鸟教程，然后就是一连串枯燥乏味的知识堆叠，或者说是培训班的网课，给我们一种知识好像就是这么枯燥乏味以及自己好像学到了很多但是真的用起来却一无所知痛苦万分的感觉。</p><p>我觉得在这个时候大伙可以思考的是，是否我们停留在舒适区的学习方法是错误的呢？</p><p>当然这个时候会出现勇敢的人，尝试这个推荐，但是根据我目前的发现来说，杭电百分之九十五的学生学习一两章之后就荒废了。</p><p>课好吗？</p><p>是很好。</p><p>但是为什么坚持不下来呢？</p><p>根据我的统计，原因无外乎是以下几点：英语太难太劝退了！课程设置太难，好像听懂了但是写起东西来却还是推行不下去！我不知道学了这个能干什么，所以没有动力！学了一两章虽然好像学到了东西，但是感觉有很多东西学了却记不住，导致难度曲线陡增了！<del>游戏太好玩了！</del></p><p>舒适区看起来很难打破！</p><h2 id="正确的思考方式" tabindex="-1">正确的思考方式 <a class="header-anchor" href="#正确的思考方式" aria-label="Permalink to &quot;正确的思考方式&quot;">​</a></h2><p>面对英语，我们前文有过一而再再而三的提醒过使用正确的工具，但是不得不说的是，在翻译的过程中可能难免丢失了一定的信息，使得我们在困惑中可能变得没有了前进的动力，或者从另一个角度来说我们没有动力是因为没有足够的原因来告诉我们的意识，我们到底应该在做这个超过看菜鸟教程所需精力好多倍的工作，到底能得到除了一点新奇感以外的什么东西，以此来给我们更为充分的理由支撑自己学习完成。</p><h2 id="建立正确的认知论" tabindex="-1">建立正确的认知论 <a class="header-anchor" href="#建立正确的认知论" aria-label="Permalink to &quot;建立正确的认知论&quot;">​</a></h2><p>编程思想本身远比学习某一门编程语言的具体内容更为重要，我们很多的同学在进行这方面内容的时候总是只想着记忆某一门语言的某些内容，然后学的非常的痛苦。</p><p>但不得不提到的是，你学到的语言，技术框架等等在信息化发展如此迅速的现在，可能随时都会过时，诸如早些年间的 B 语言，PHP 等等，到现在都是很少有些人在用的东西了，如果你只扣着一些编程的具体语法，那你学的东西很有可能在某一天就扔进了历史的垃圾堆。</p><p>但是编程语言的设计思想一般不会出现太大的波动，并且就算是发展也有其适配的场景和知识脉络的，如果你乐于去发掘这个知识脉络和思想，那么你就可以优雅的掌握一种思维方式而不是简单的拧螺丝一样的机械化工作。而好的思考方式往往是可以应用在同类的所有语言甚至是在所有的更多的</p><h2 id="更有趣的练习方式" tabindex="-1">更有趣的练习方式 <a class="header-anchor" href="#更有趣的练习方式" aria-label="Permalink to &quot;更有趣的练习方式&quot;">​</a></h2><p>我不得不承认的一点是，越痛苦的练习往往可以让你获得更大的提升模拟的成长往往与你面对苦难以及解决他的时间是成正比的。</p><p>不过遗憾的是，我们大多数的同学是在面对跳起来都够不到的反馈的时候，会选择放弃。（除非你有 M 的倾向）</p><p>因此，有时候我们说大道至简。好的东西往往是能让人们快速理解的东西，我觉得 61A 的难度梯度设计，就是兼具了趣味性和间接性的，并且全面优于互联网上的非常多的教程，比硬啃要给我们更多的正反馈（当然，改变思维和学习方式是很重要的。</p>',25),n=[p];function c(s,h,l,i,d,_){return a(),r("div",null,n)}const S=e(o,[["render",c]]);export{b as __pageData,S as default};
