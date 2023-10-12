import{_ as e,o as a,c as s,U as p}from"./chunks/framework.489e5108.js";const b=JSON.parse('{"title":"软件破解、软件加固","description":"","frontmatter":{},"headers":[],"relativePath":"6.计算机安全/6.2.2软件破解、软件加固.md","filePath":"6.计算机安全/6.2.2软件破解、软件加固.md","lastUpdated":1696176798000}'),t={name:"6.计算机安全/6.2.2软件破解、软件加固.md"},o=p('<h1 id="软件破解、软件加固" tabindex="-1">软件破解、软件加固 <a class="header-anchor" href="#软件破解、软件加固" aria-label="Permalink to &quot;软件破解、软件加固&quot;">​</a></h1><h2 id="软件加壳、脱壳技术" tabindex="-1">软件加壳、脱壳技术 <a class="header-anchor" href="#软件加壳、脱壳技术" aria-label="Permalink to &quot;软件加壳、脱壳技术&quot;">​</a></h2><p>壳是一种常见的软件保护技术，通过对前面基础工具的使用，我们很容易发现正常编译出来的程序逆向的难度并不高，只需按 IDA 的 F5 即可浏览程序的大部分逻辑。但加壳后的软件，会将主要逻辑 以一定的规律加密 / 压缩等，使其不可直接 F5 查看逻辑。</p><p>按壳的效果来分，主要分压缩壳和加密壳两种。压缩壳如 UPX，可以将程序体积较大的缩小。加密壳如 VMP，可以对程序起到非常大的防逆向作用，以目前的技术，对 VMP 加壳的程序几乎没有逆向的可能。</p><h3 id="简单的-upx-壳" tabindex="-1">简单的 UPX 壳 <a class="header-anchor" href="#简单的-upx-壳" aria-label="Permalink to &quot;简单的 UPX 壳&quot;">​</a></h3><p>UPX 是一个常见的压缩壳，通过该工具可以比较大的缩小二进制程序的体积，而不影响正常功能</p><p>UPX 壳的官网：<a href="https://upx.github.io" target="_blank" rel="noreferrer">https://upx.github.io</a></p><p>加壳命令（示例）：</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">upx </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> 文件名</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">upx </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> 文件名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>脱壳命令：</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">upx </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">d 文件名</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">upx </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">d 文件名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="esp-定律脱壳法-本节来源于-ctf-wiki-https-ctf-wiki-org-reverse-platform-windows-unpack-esp" tabindex="-1">ESP 定律脱壳法（本节来源于 ctf-wiki：<a href="https://ctf-wiki.org/reverse/platform/windows/unpack/esp/" target="_blank" rel="noreferrer">https://ctf-wiki.org/reverse/platform/windows/unpack/esp/</a>） <a class="header-anchor" href="#esp-定律脱壳法-本节来源于-ctf-wiki-https-ctf-wiki-org-reverse-platform-windows-unpack-esp" aria-label="Permalink to &quot;ESP 定律脱壳法（本节来源于 ctf-wiki：[https://ctf-wiki.org/reverse/platform/windows/unpack/esp/](https://ctf-wiki.org/reverse/platform/windows/unpack/esp/)）&quot;">​</a></h3><p>ESP 定律法是脱壳的利器，是应用频率最高的脱壳方法之一。</p><h4 id="要点" tabindex="-1">要点 <a class="header-anchor" href="#要点" aria-label="Permalink to &quot;要点&quot;">​</a></h4><p>ESP 定律的原理在于利用程序中堆栈平衡来快速找到 OEP.</p><p>由于在程序自解密或者自解压过程中，不少壳会先将当前寄存器状态压栈，如使用 <code>pushad</code> , 在解压结束后，会将之前的寄存器值出栈，如使用 <code>popad</code> . 因此在寄存器出栈时，往往程序代码被恢复，此时硬件断点触发。然后在程序当前位置，只需要少许单步操作，就很容易到达正确的 OEP 位置。</p><ol><li>程序刚载入开始 pushad/pushfd</li><li>将全部寄存器压栈后就设对 ESP 寄存器设硬件断点</li><li>运行程序，触发断点</li><li>删除硬件断点开始分析</li></ol><h4 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h4><p>示例程序可以点击此处下载：<a href="https://github.com/ctf-wiki/ctf-challenges/blob/master/reverse/unpack/2_esp.zip" target="_blank" rel="noreferrer">2_esp.zip</a></p><p>还是上一篇的示例，入口一句 <code>pushad</code> , 我们按下 F8 执行 <code>pushad</code> 保存寄存器状态，我们可以在右边的寄存器窗口里发现 <code>ESP</code> 寄存器的值变为了红色，也即值发生了改变。</p><p><img src="https://cdn.xyxsw.site/boxcnJdWqlHmhlvB471dIGT4GEh.png" alt=""></p><p>我们鼠标右击 <code>ESP</code> 寄存器的值，也就是图中的 <code>0019FF64</code> , 选择 <code>HW break[ESP]</code> 后，按下 <code>F9</code> 运行程序，程序会在触发断点时断下。如图来到了 <code>0040D3B0</code> 的位置。这里就是上一篇我们单步跟踪时到达的位置，剩余的就不再赘述。</p><h2 id="软件加密常用算法" tabindex="-1">软件加密常用算法 <a class="header-anchor" href="#软件加密常用算法" aria-label="Permalink to &quot;软件加密常用算法&quot;">​</a></h2><p>逆向中通常出现的加密算法包括 base64、TEA、AES、RC4、MD5、DES 等。</p><h2 id="序列号生成与破解与反破解" tabindex="-1">序列号生成与破解与反破解 <a class="header-anchor" href="#序列号生成与破解与反破解" aria-label="Permalink to &quot;序列号生成与破解与反破解&quot;">​</a></h2><p>早期软件序列号都是软件内部一套验证算法，本地进行验证序列号是否正确，或者本地校验格式再向服务器请求。这种软件的序列号破解只需找到内部验证算法，生成出一个合适的序列号即可，联网的软件就将联网屏蔽 / 做个假的服务器返回正确的信息等办法。如何找到验证算法是关键，此处就需要一定的逆向基础。现有的 CTF 逆向题基本都是从序列号破解的角度抽象出来的。</p><p>如今的很多软件都已不再采用序列号机制，比如 steam 游戏，或者序列号的生成是单向不可逆的，此时就对软件的破解造成了一定的困难</p>',27),r=[o];function l(n,i,c,d,h,u){return a(),s("div",null,r)}const f=e(t,[["render",l]]);export{b as __pageData,f as default};
