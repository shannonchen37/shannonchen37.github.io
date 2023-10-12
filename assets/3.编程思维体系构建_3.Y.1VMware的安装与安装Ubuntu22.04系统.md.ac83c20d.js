import{_ as t,o as p,c as s,U as n}from"./chunks/framework.489e5108.js";const m=JSON.parse('{"title":"VMware 的安装与安装 Ubuntu22.04 系统","description":"","frontmatter":{},"headers":[],"relativePath":"3.编程思维体系构建/3.Y.1VMware的安装与安装Ubuntu22.04系统.md","filePath":"3.编程思维体系构建/3.Y.1VMware的安装与安装Ubuntu22.04系统.md","lastUpdated":1696176798000}'),e={name:"3.编程思维体系构建/3.Y.1VMware的安装与安装Ubuntu22.04系统.md"},o=n('<h1 id="vmware-的安装与安装-ubuntu22-04-系统" tabindex="-1">VMware 的安装与安装 Ubuntu22.04 系统 <a class="header-anchor" href="#vmware-的安装与安装-ubuntu22-04-系统" aria-label="Permalink to &quot;VMware 的安装与安装 Ubuntu22.04 系统&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>一般与 wsl 安装二选一，因为都是虚拟系统，安装了 wsl 不用 VMware</p><p>文章撰写于 2022 年，可能其中的一些内容已过时。</p></div><p>首先下载 VMware</p><p>如果是 pro16 版本（key <strong>ZF3R0-FHED2-M80TY-8QYGC-NPKYF</strong>）</p><p>如果是 pro17 版本（key <strong>JU090-6039P-08409-8J0QH-2YR7F</strong>）</p><p>本文写的时候用的版本是 pro16，但目前已经更新到 pro17 所以来更新个 key（如下安装与 16 版本无异）</p><p><a href="https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html" target="_blank" rel="noreferrer">https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html</a></p><p>一路下一步</p><p><img src="https://cdn.xyxsw.site/boxcntUYJNAaOwB8L6KSEhJJojh.png" alt=""></p><p><img src="https://cdn.xyxsw.site/boxcnQkVQ4uyYCveO6toBujoGOc.png" alt=""></p><p>这俩我推荐勾掉</p><p><img src="https://cdn.xyxsw.site/boxcndgDKfTuio3nF0QboemIPHe.png" alt=""></p><p>安装过后点许可证 输上面的 key 激活</p><p><a href="https://mirror.nju.edu.cn/ubuntu-releases/22.04" target="_blank" rel="noreferrer">https://mirror.nju.edu.cn/ubuntu-releases/22.04</a></p><p>去这里下载 Ubuntu22.04 镜像包 iso 选择 <code>ubuntu-&lt;version&gt;-desktop-amd64.iso</code></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这里推荐使用多线程下载器下载，比如 <a href="./../2.高效学习/2.2优雅的使用工具">IDM</a>，如果直接用浏览器下载（线程少）可能会出现下载慢、下载失败的情况。</p></div><p>下好回到 VMware</p><p><img src="https://cdn.xyxsw.site/boxcnGHnjgZvtcBrm0XXitFl4Jg.png" alt=""></p><p>创建新的虚拟机 - 典型（推荐）- 下一步 - 安装程序 iso 选中你刚下的 iso 下一步</p><p><img src="https://cdn.xyxsw.site/boxcnXilUhHNEyU4r95FxiVgCdg.png" alt=""></p><p>这里填你一会儿要登录 linux 的个人信息</p><p><img src="https://cdn.xyxsw.site/boxcnp33Oc3Ia2HzASTZJNOhEWb.png" alt=""></p><p>这里建议把位置改到其他盘</p><p>一路下一步直到完成</p><p>启动后进入 Ubuntu 安装</p><p><img src="https://cdn.xyxsw.site/boxcn5Uk41JyjjdTzXWQqUkexzc.png" alt=""></p><p>键盘映射 直接 continue</p><p>接下来一路 continue install now</p><p><img src="https://cdn.xyxsw.site/boxcnLxZnyFN3ohE8zrTwNaCA8e.png" alt=""></p><p>最后 restart</p><p><img src="https://cdn.xyxsw.site/boxcnLguvbHihJ3ngqrtyGLI6zf.png" alt=""></p><p><img src="https://cdn.xyxsw.site/boxcnCX92JHjg8PU3quKs4GziZb.png" alt=""></p><p><img src="https://cdn.xyxsw.site/boxcnL5Jn3g7AdzVzoBb6ZINs1f.png" alt=""></p><p>这个 skip</p><p>后面一路 next 最后 done</p><p>点右上角 settings</p><p><img src="https://cdn.xyxsw.site/boxcn85Yb3JIQ3520KeaSoyPVDd.png" alt=""></p><p><img src="https://cdn.xyxsw.site/boxcnZLHO1JGWoSqhM9zEEhSMAd.png" alt=""></p><p><img src="https://cdn.xyxsw.site/boxcnvLxCTKYfogPm9GNaKmusEf.png" alt=""></p><p>然后按指引 restart 系统</p><p><img src="https://cdn.xyxsw.site/boxcn30VJILYpO81pq89mAmzjTf.png" alt=""></p><p>会提示你要不要重新命名这些用户下的文件夹</p><p>我建议选 <code>keep old names</code></p><p>如果你的语言还没有变过来的话</p><p><img src="https://cdn.xyxsw.site/boxcnKzJjY8Dvj13A49bnMAztPg.png" alt=""></p><p>点击这个他会安装语言</p><p><img src="https://cdn.xyxsw.site/boxcndHnAuGC7TXhQgLkpLkHghf.png" alt=""></p><p>把汉语拖到英文之上 点应用到整个系统</p><p><img src="https://cdn.xyxsw.site/boxcnltCL3atXHtC3BUj5VI1Lqf.png" alt=""></p><p>右上角 logout 重新登陆 就是中文辣</p><p>最后在设置 - 电源把息屏改成从不</p><p><img src="https://cdn.xyxsw.site/boxcnnLCJzGoFrUbWIMAPGFkxcb.png" alt=""></p><p><strong>至此 恭喜安装完成！</strong></p><p>之后就可以在桌面上右键</p><p><img src="https://cdn.xyxsw.site/boxcnG6z1VpAYUGMSkSwDBUxEvf.png" alt=""></p><p>打开命令行</p><p><strong>开始你的 Linux 学习吧</strong></p>',57),r=[o];function c(a,i,x,g,l,u){return p(),s("div",null,r)}const b=t(e,[["render",c]]);export{m as __pageData,b as default};
