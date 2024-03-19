import{_ as e,D as l,c as n,k as s,a as i,I as p,R as a,o as h}from"./chunks/framework.aeLSa5ZG.js";const C=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/guide/installation.md","filePath":"zh-CN/guide/installation.md","lastUpdated":1710870588000}'),k={name:"zh-CN/guide/installation.md"},d=a('<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><h2 id="使用包管理器" tabindex="-1">使用包管理器 <a class="header-anchor" href="#使用包管理器" aria-label="Permalink to &quot;使用包管理器&quot;">​</a></h2><p>我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 Vue3 BaiduMap GL，然后您就可以使用打包工具，例如 Vite 或 webpack。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-GoWPE" id="tab-Oa_XhM4" checked="checked"><label for="tab-Oa_XhM4">pnpm</label><input type="radio" name="group-GoWPE" id="tab-DSYkPEz"><label for="tab-DSYkPEz">yarn</label><input type="radio" name="group-GoWPE" id="tab-LqGh9Kr"><label for="tab-LqGh9Kr">npm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue3-baidu-map-gl</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue3-baidu-map-gl</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue3-baidu-map-gl</span></span></code></pre></div></div></div>',4),r={id:"浏览器直接引入",tabindex:"-1"},o=s("a",{class:"header-anchor",href:"#浏览器直接引入","aria-label":'Permalink to "浏览器直接引入 <Badge type="tip" text="^0.0.21" />"'},"​",-1),c=a(`<p>直接通过浏览器的 HTML 标签导入 Vue3 BaiduMap GL，然后就可以使用全局变量 <code>Vue3baiduMapGl</code> 了。</p><p>不同的 CDN 提供商有不同的引入方式， 我们在这里以 <a href="https://unpkg.com" target="_blank" rel="noreferrer">unpkg</a> 和 <a href="https://www.jsdelivr.com" target="_blank" rel="noreferrer">jsDelivr</a> 举例。 你也可以使用其它的 CDN 供应商。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-A905q" id="tab-Zs5_nMX" checked="checked"><label for="tab-Zs5_nMX">unpkg</label><input type="radio" name="group-A905q" id="tab-5JhjvfM"><label for="tab-5JhjvfM">jsDelivr</label></div><div class="blocks"><div class="language-html vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;utf-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Import Vue3 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://unpkg.com/vue@3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Import Vue3 BaiduMap GL --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Would use latest version, you&#39;d better specify a version --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://unpkg.com/vue3-baidu-map-gl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Import Vue 3 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https//cdn.jsdelivr.net/npm/vue@3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Import Vue3 BaiduMap GL --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/vue3-baidu-map-gl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>我们建议使用 CDN 引入 Vue3 BaiduMap GL 的用户在链接地址上锁定版本，以免将来 ElementPlus 升级时受到非兼容性更新的影响</p></div><h2 id="hello-world" tabindex="-1">Hello World <a class="header-anchor" href="#hello-world" aria-label="Permalink to &quot;Hello World&quot;">​</a></h2><p><a href="https://codepen.io/yue1123/pen/oNyQWeP" target="_blank" rel="noreferrer">在线演示</a></p>`,6),g=s("iframe",{allow:"accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write;",allowfullscreen:"true",allowpaymentrequest:"true",height:"500",style:{width:"100%"},scrolling:"no",title:"Vue3 BaiduMap GL",src:"https://codepen.io/yue1123/embed/oNyQWeP?default-tab=html%2Cresult&theme-id=light",frameborder:"no",loading:"lazy"},`
`,-1);function E(u,y,b,m,v,_){const t=l("Badge");return h(),n("div",null,[d,s("h2",r,[i("浏览器直接引入 "),p(t,{type:"tip",text:"^0.0.21"}),i(),o]),c,g])}const D=e(k,[["render",E]]);export{C as __pageData,D as default};
