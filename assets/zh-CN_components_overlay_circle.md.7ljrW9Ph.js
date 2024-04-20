import{_ as o,D as l,c,I as e,w as u,k as t,R as n,a,o as r}from"./chunks/framework.aeLSa5ZG.js";const R=JSON.parse('{"title":"BCircle 圆形","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/components/overlay/circle.md","filePath":"zh-CN/components/overlay/circle.md","lastUpdated":1713613566000}'),p={name:"zh-CN/components/overlay/circle.md"},i=n('<h1 id="bcircle-圆形" tabindex="-1">BCircle 圆形 <a class="header-anchor" href="#bcircle-圆形" aria-label="Permalink to &quot;BCircle 圆形&quot;">​</a></h1><p>在地图上绘制简单的圆形</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BCircle } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue3-baidu-map-gl&#39;</span></span></code></pre></div><h2 id="组件示例" tabindex="-1">组件示例 <a class="header-anchor" href="#组件示例" aria-label="Permalink to &quot;组件示例&quot;">​</a></h2>',4),E=t("p",null,"overlay/circle",-1),C=n('<h2 id="静态组件-props" tabindex="-1">静态组件 Props <a class="header-anchor" href="#静态组件-props" aria-label="Permalink to &quot;静态组件 Props&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>enableClicking</td><td>是否响应点击事件</td><td><code>boolean</code></td><td><code>true </code></td></tr><tr><td>geodesic</td><td>是否开启大地线模式，true 时，两点连线将以大地线的形式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>clip</td><td>是否进行跨经度 180 度裁剪，绘制跨精度 180 时为了优化效果</td><td><code>boolean</code></td><td><code>true </code></td></tr></tbody></table><h2 id="动态组件-props" tabindex="-1">动态组件 Props <a class="header-anchor" href="#动态组件-props" aria-label="Permalink to &quot;动态组件 Props&quot;">​</a></h2>',3),h=t("thead",null,[t("tr",null,[t("th",null,"属性"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"可选值"),t("th",null,"默认值"),t("th",null,"版本")])],-1),_=t("tr",null,[t("td",null,"center"),t("td",null,"圆形中心点经纬度"),t("td",null,[t("code",null,"{ lng: number, lat: number}")]),t("td",null,"-"),t("td",null,[t("code",null,"required")]),t("td",null,"-")],-1),k=t("tr",null,[t("td",null,"radius"),t("td",null,"圆形的半径，单位为米"),t("td",null,[t("code",null,"number")]),t("td",null,"-"),t("td",null,[t("code",null,"required")]),t("td",null,"-")],-1),D=t("tr",null,[t("td",null,"strokeColor"),t("td",null,"描边的颜色，同 CSS 颜色"),t("td",null,[t("code",null,"string")]),t("td",null,"-"),t("td",null,[t("code",null,"#000")]),t("td",null,"-")],-1),F=t("tr",null,[t("td",null,"strokeOpacity"),t("td",null,"描边的透明度，范围 0-1"),t("td",null,[t("code",null,"number")]),t("td",null,[t("code",null,"0-1 ")]),t("td",null,"1"),t("td",null,"-")],-1),m=t("tr",null,[t("td",null,"fillColor"),t("td",null,"面填充颜色，同 CSS 颜色"),t("td",null,[t("code",null,"string")]),t("td",null,"-"),t("td",null,[t("code",null,"#fff")]),t("td",null,"-")],-1),b=t("tr",null,[t("td",null,"fillOpacity"),t("td",null,"面填充的透明度，范围 0-1"),t("td",null,[t("code",null,"number")]),t("td",null,[t("code",null,"0-1 ")]),t("td",null,[t("code",null,"0.3 ")]),t("td",null,"-")],-1),g=t("tr",null,[t("td",null,"strokeWeight"),t("td",null,"描边的宽度，单位为像素"),t("td",null,[t("code",null,"number")]),t("td",null,"-"),t("td",null,[t("code",null,"2 ")]),t("td",null,"-")],-1),v=t("tr",null,[t("td",null,"strokeStyle"),t("td",null,"描边的样式，为实线、虚线、或者点状线"),t("td",null,[t("code",null,"string")]),t("td",null,[t("code",null,"solid / dashed / dotted")]),t("td",null,[t("code",null,"solid ")]),t("td",null,"-")],-1),A=t("tr",null,[t("td",null,"enableMassClear"),t("td",null,[a("是否在调用 "),t("code",null,"map.clearOverlays"),a(" 清除此覆盖物")]),t("td",null,[t("code",null,"boolean")]),t("td",null,"-"),t("td",null,[t("code",null,"true ")]),t("td",null,"-")],-1),B=t("tr",null,[t("td",null,"enableEditing"),t("td",null,"是否启用线编辑"),t("td",null,[t("code",null,"boolean")]),t("td",null,"-"),t("td",null,[t("code",null,"false ")]),t("td",null,"-")],-1),y=t("td",null,"visible",-1),f=t("td",null,"是否显示",-1),T=t("td",null,[t("code",null,"boolean")],-1),P=t("td",null,"-",-1),q=t("td",null,[t("code",null,"true")],-1),S=n('<h2 id="组件事件" tabindex="-1">组件事件 <a class="header-anchor" href="#组件事件" aria-label="Permalink to &quot;组件事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>initd</td><td>组件初始化后，调用的方法，返回一个地图实例</td><td><code>{ map, BmapGL, instance }</code></td></tr><tr><td>unload</td><td>组件卸载时会调用此方法</td><td>-</td></tr><tr><td>click</td><td>鼠标左键单击事件的回调函数。 当双击时，产生的事件序列为：<code>click -&gt; click -&gt; dblclick</code></td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>dblclick</td><td>鼠标左键双击事件的回调函数</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>mousedown</td><td>鼠标左键在该覆盖物上按下的回调函数</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>mouseup</td><td>鼠标左键在该覆盖物上抬起的回调函数</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>mouseout</td><td>鼠标指针移出该覆盖物事件的回调函数</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>mouseover</td><td>鼠标指针移入该覆盖物事件的回调函数</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>remove</td><td>该覆盖物被移除的回调函数</td><td><code>((e: Event) =&gt; void) </code></td></tr><tr><td>lineupdate</td><td>覆盖物被编辑后的回调函数</td><td><code>((e: Event) =&gt; void) </code></td></tr></tbody></table>',2);function x(N,V,I,z,M,w){const s=l("Demo"),d=l("Badge");return r(),c("div",null,[i,e(s,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E16%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBCircle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Estroke-style%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edashed%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.403901%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aradius%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E300%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"overlay/circle","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20v-bind%3D%22%24attrs%22%20%3Azoom%3D%2216%22%3E%0A%20%20%20%20%3CBCircle%20stroke-style%3D%22dashed%22%20%3Acenter%3D%22%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.403901%20%7D%22%20%3Aradius%3D%22300%22%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E5%9C%A8%E5%9C%B0%E5%9B%BE%E4%B8%8A%E6%B7%BB%E5%8A%A0%E5%9C%86%E5%BD%A2%3C%2Fp%3E%0A"},{default:u(()=>[E]),_:1}),C,t("table",null,[h,t("tbody",null,[_,k,D,F,m,b,g,v,A,B,t("tr",null,[y,f,T,P,q,t("td",null,[e(d,{type:"tip",text:"^2.2.0"})])])])]),S])}const $=o(p,[["render",x]]);export{R as __pageData,$ as default};
