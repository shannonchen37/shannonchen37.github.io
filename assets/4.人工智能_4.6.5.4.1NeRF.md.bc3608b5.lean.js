import{_ as l,o as s,c as o,j as t,a as e,U as a}from"./chunks/framework.489e5108.js";const y1=JSON.parse('{"title":"NeRF","description":"","frontmatter":{},"headers":[],"relativePath":"4.人工智能/4.6.5.4.1NeRF.md","filePath":"4.人工智能/4.6.5.4.1NeRF.md","lastUpdated":1696176798000}'),n={name:"4.人工智能/4.6.5.4.1NeRF.md"},i=a("",9),T=t("li",null,"3 个位置坐标 (x,y,z)",-1),Q={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},r={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.292ex",height:"1ex",role:"img",focusable:"false",viewBox:"0 -431 571 442","aria-hidden":"true"},d=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D70E",d:"M184 -11Q116 -11 74 34T31 147Q31 247 104 333T274 430Q275 431 414 431H552Q553 430 555 429T559 427T562 425T565 422T567 420T569 416T570 412T571 407T572 401Q572 357 507 357Q500 357 490 357T476 358H416L421 348Q439 310 439 263Q439 153 359 71T184 -11ZM361 278Q361 358 276 358Q152 358 115 184Q114 180 114 178Q106 141 106 117Q106 67 131 47T188 26Q242 26 287 73Q316 103 334 153T356 233T361 278Z",style:{"stroke-width":"3"}})])])],-1),h=[d],p=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"σ")])],-1),m=t("li",null,"注意：因为每个角度观察的颜色并不相同（光线原因），颜色属于一个会根据观察角度变化的隐藏属性。",-1),c=a("",10),x=t("strong",null,"这是一个输入为 5 维，输出为 4 维向量",-1),_={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.523ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -705 4209 899","aria-hidden":"true"},u=a("",1),w=[u],f=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"R"),t("mo",null,","),t("mi",null,"G"),t("mo",null,","),t("mi",null,"B"),t("mo",null,","),t("mi",null,"σ")])],-1),b=t("p",null,[t("strong",null,"现在我们能够输入坐标和视角信息得到小方块的颜色和不透明度，我们就可以对光线穿过的小方块进行计算了。")],-1),k=t("h2",{id:"进行渲染",tabindex:"-1"},[e("进行渲染 "),t("a",{class:"header-anchor",href:"#进行渲染","aria-label":'Permalink to "进行渲染"'},"​")],-1),y=t("p",null,"（渲染就是得到三维建模的某视角下图片）",-1),H=t("p",null,"得到每条光线上的方块信息后，我们对其进行计算（这里开始介绍上面略过的公式）",-1),v={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},M={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.292ex",height:"1ex",role:"img",focusable:"false",viewBox:"0 -431 571 442","aria-hidden":"true"},L=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D70E",d:"M184 -11Q116 -11 74 34T31 147Q31 247 104 333T274 430Q275 431 414 431H552Q553 430 555 429T559 427T562 425T565 422T567 420T569 416T570 412T571 407T572 401Q572 357 507 357Q500 357 490 357T476 358H416L421 348Q439 310 439 263Q439 153 359 71T184 -11ZM361 278Q361 358 276 358Q152 358 115 184Q114 180 114 178Q106 141 106 117Q106 67 131 47T188 26Q242 26 287 73Q316 103 334 153T356 233T361 278Z",style:{"stroke-width":"3"}})])])],-1),V=[L],Z=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"σ")])],-1),C={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},S={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.645ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2053 1000","aria-hidden":"true"},j=a("",1),A=[j],D=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"T"),t("mo",{stretchy:"false"},"("),t("mi",null,"σ"),t("mo",{stretchy:"false"},")")])],-1),P={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},N={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.292ex",height:"1ex",role:"img",focusable:"false",viewBox:"0 -431 571 442","aria-hidden":"true"},R=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D70E",d:"M184 -11Q116 -11 74 34T31 147Q31 247 104 333T274 430Q275 431 414 431H552Q553 430 555 429T559 427T562 425T565 422T567 420T569 416T570 412T571 407T572 401Q572 357 507 357Q500 357 490 357T476 358H416L421 348Q439 310 439 263Q439 153 359 71T184 -11ZM361 278Q361 358 276 358Q152 358 115 184Q114 180 114 178Q106 141 106 117Q106 67 131 47T188 26Q242 26 287 73Q316 103 334 153T356 233T361 278Z",style:{"stroke-width":"3"}})])])],-1),E=[R],B=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"σ")])],-1),I={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.645ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2053 1000","aria-hidden":"true"},F=a("",1),z=[F],J=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"T"),t("mo",{stretchy:"false"},"("),t("mi",null,"σ"),t("mo",{stretchy:"false"},")")])],-1),G={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},O={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.645ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2053 1000","aria-hidden":"true"},U=a("",1),Y=[U],$=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"T"),t("mo",{stretchy:"false"},"("),t("mi",null,"σ"),t("mo",{stretchy:"false"},")")])],-1),W=t("strong",null,"光线能够行进到这个小方块的概率",-1),K={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},X={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.949ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3071.4 1000","aria-hidden":"true"},t1=a("",1),e1=[t1],s1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mo",{stretchy:"false"},"("),t("mn",null,"1"),t("mo",null,"−"),t("mi",null,"σ"),t("mo",{stretchy:"false"},")")])],-1),o1=t("p",null,[e("这段要仔细看和推导，第一遍不容易直接懂。顺带一提，我们的"),t("strong",null,"小方块"),e("学名叫"),t("strong",null,"体素"),e("，"),t("del",null,"为了显得我们更专业一点以后就叫它体素罢")],-1),a1=t("p",null,[t("img",{src:"https://cdn.xyxsw.site/boxcnnwHy3Hlhbu2bOsi6r2BYJe.png",alt:""})],-1),l1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},n1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.292ex",height:"1ex",role:"img",focusable:"false",viewBox:"0 -431 571 442","aria-hidden":"true"},i1=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D70E",d:"M184 -11Q116 -11 74 34T31 147Q31 247 104 333T274 430Q275 431 414 431H552Q553 430 555 429T559 427T562 425T565 422T567 420T569 416T570 412T571 407T572 401Q572 357 507 357Q500 357 490 357T476 358H416L421 348Q439 310 439 263Q439 153 359 71T184 -11ZM361 278Q361 358 276 358Q152 358 115 184Q114 180 114 178Q106 141 106 117Q106 67 131 47T188 26Q242 26 287 73Q316 103 334 153T356 233T361 278Z",style:{"stroke-width":"3"}})])])],-1),T1=[i1],Q1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"σ")])],-1),r1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},d1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.667ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.855ex",height:"2.084ex",role:"img",focusable:"false",viewBox:"0 -626 2145.8 921","aria-hidden":"true"},h1=a("",1),p1=[h1],m1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mi",null,"t"),t("mi",null,"f")]),t("mo",null,","),t("msub",null,[t("mi",null,"t"),t("mi",null,"n")])])],-1),c1=a("",16);function x1(_1,g1,u1,w1,f1,b1){return s(),o("div",null,[i,t("ul",null,[T,t("li",null,[e("透明度"),t("mjx-container",Q,[(s(),o("svg",r,h)),p])]),m]),c,t("p",null,[e("在这里，作者选择了最简单的 MLP，因此，"),x,e(" ("),t("mjx-container",_,[(s(),o("svg",g,w)),f]),e(") 的简单网络，值得注意的是，不透明度与观察角度无关，这里在网络中进行了特殊处理，让这个值与后两维无关。")]),b,k,y,H,t("p",null,[e("这个公式对光线上的所有小方块的颜色进行加权求和，权重是关于不透明度"),t("mjx-container",v,[(s(),o("svg",M,V)),Z]),e(" 的一个函数"),t("mjx-container",C,[(s(),o("svg",S,A)),D]),e("，不透明度在 [0,1] 之间，越不透明这个值越大。也就是越不透明，占的颜色比重越高，比如空气的"),t("mjx-container",P,[(s(),o("svg",N,E)),B]),e(" 就接近于 0，乐高本身就接近 1。而求和的结果就是这个光线对应像素的颜色。")]),t("p",null,[e("这里展开说一下"),t("mjx-container",I,[(s(),o("svg",q,z)),J]),e("，我们把不透明度理解为光线在这个小方块被阻止的概率，越不透明，越容易阻挡光线，而光线一旦被阻挡，就不用计算后面的小方块颜色了。因此，我们的"),t("mjx-container",G,[(s(),o("svg",O,Y)),$]),e(" 就表示"),W,e("，也就是这点之前所有小方块的"),t("mjx-container",K,[(s(),o("svg",X,e1)),s1]),e(" 的乘积。")]),o1,a1,t("p",null,[e("上面所说的公式具体如下：t 是我们的"),t("mjx-container",l1,[(s(),o("svg",n1,T1)),Q1]),e("，"),t("mjx-container",r1,[(s(),o("svg",d1,p1)),m1]),e(" 分别是离发射点最远的体素和最近的体素。这个公式求得是像素的颜色。")]),c1])}const H1=l(n,[["render",x1]]);export{y1 as __pageData,H1 as default};
