import{_ as p,o as l,c as e,j as s,a as n,U as a}from"./chunks/framework.489e5108.js";const o="/assets/4.3.4-0.569cf41a.png",t="/assets/4.3.4-1.cdde284b.png",r="/assets/4.3.4-2.050a21be.png",c="/assets/4.3.4-3.129b4f80.png",i="/assets/4.3.4-4.dbfa7f2c.png",y="/assets/4.3.4-5.4cf30811.png",E="/assets/4.3.4-6.57818cf9.png",u="/assets/4.3.4-7.07402356.png",d="/assets/4.3.4-8.16c869d0.png",m="/assets/4.3.4-9.1c03310c.png",b="/assets/4.3.4-10.c6135948.png",h="/assets/4.3.4-11.ad3f2097.png",g="/assets/4.3.4-12.6ad235d4.png",f="/assets/4.3.4-13.b87e8531.png",_="/assets/4.3.4-14.d72f0050.png",K=JSON.parse('{"title":"最优化","description":"","frontmatter":{},"headers":[],"relativePath":"4.人工智能/4.3.4最优化.md","filePath":"4.人工智能/4.3.4最优化.md","lastUpdated":1696176798000}'),F={name:"4.人工智能/4.3.4最优化.md"},A=a("",26),v=s("code",null,"problem",-1),x=s("code",null,"max",-1),T=s("code",null,"max",-1),C=s("code",null,"T",-1),D=s("code",null,"Temperature",-1),Q=s("code",null,"t",-1),k=s("code",null,"t",-1),B=s("code",null,"ΔE",-1),q=s("code",null,"ΔE>0",-1),w=s("code",null,"ΔE<0",-1),X={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},S={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.174ex",height:"2.046ex",role:"img",focusable:"false",viewBox:"0 -893.3 2287.1 904.3","aria-hidden":"true"},P=a("",1),V=[P],M=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("msup",null,[s("mi",null,"e"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"Δ"),s("mi",null,"E"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mo",null,"/")]),s("mi",null,"t")])])])],-1),H=s("code",null,"ΔE",-1),Y=s("code",null,"t",-1),L=s("code",null,"e",-1),R=s("code",null,"ΔE",-1),I=s("code",null,"t",-1),N=s("code",null,"t",-1),j=a("",37);function W(Z,O,z,U,$,G){return l(),e("div",null,[A,s("ul",null,[s("li",null,[n("该算法将一个 "),v,n(" 和 "),x,n(" 作为输入， "),T,n(" 是它应该重复的次数。对于每个迭代， "),C,n(" 是用一个 "),D,n(" 函数来设置的。这个函数在早期迭代中返回一个较高的值 (当 "),Q,n(" 较低时)，在后期迭代中返回一个较低的值 (当 "),k,n(" 较高时)。然后，随机选择一个邻居状态，并计算 "),B,n(" ，使其量化邻居状态比当前状态好的程度。如果邻居状态比当前状态好 ( "),q,n(" )，像以前一样，我们将当前状态设置为邻居状态。然而，当邻居状态较差时 ( "),w,n(" )，我们仍然可能将我们的当前状态设置为该邻居状态，并且我们以"),s("mjx-container",X,[(l(),e("svg",S,V)),M]),n(" 的概率这样做。这里的意思是，更小的 "),H,n(" 将导致邻居状态被选择的概率降低，而温度 "),Y,n(" 越高，邻居状态被选择的概率越高。这意味着邻居状态越差，被选择的可能性就越小，而算法在其过程中越早，就越有可能将一个较差的邻居状态设置为当前状态。这背后的数学原理如下： "),L,n(" 是一个常数 (大约 2.72)， "),R,n(" 是负数 (因为这个邻居比当前状态更糟糕)。温度 "),I,n(" 越高，ΔE/ "),N,n(" 就越接近于 0，使概率更接近于 1。")])]),j])}const ss=p(F,[["render",W]]);export{K as __pageData,ss as default};
