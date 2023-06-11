import{_ as n,c as s,G as e,C as o,S as t,H as p,o as d,A as l}from"./chunks/framework.ded5427d.js";const v=JSON.parse('{"title":"BBezierCurve 折线","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/components/overlay/bezierCurve.md","filePath":"zh-CN/components/overlay/bezierCurve.md","lastUpdated":1686473991000}'),c={name:"zh-CN/components/overlay/bezierCurve.md"},r=t('<h1 id="bbeziercurve-折线" tabindex="-1">BBezierCurve 折线 <a class="header-anchor" href="#bbeziercurve-折线" aria-label="Permalink to &quot;BBezierCurve 折线&quot;">​</a></h1><p>在地图上绘制二阶贝塞尔曲线</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BBezierCurve</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>不了解贝塞尔曲线的小伙伴可以先学习一下: <a href="https://zh-CN.javascript.info/bezier-curve" target="_blank" rel="noreferrer">https://zh-CN.javascript.info/bezier-curve</a></p></div><h2 id="组件示例" tabindex="-1">组件示例 <a class="header-anchor" href="#组件示例" aria-label="Permalink to &quot;组件示例&quot;">​</a></h2>',5),C=l("p",null,"overlay/bezierCurve",-1),E=t('<h2 id="动态组件-props" tabindex="-1">动态组件 Props <a class="header-anchor" href="#动态组件-props" aria-label="Permalink to &quot;动态组件 Props&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>path</td><td>贝塞尔曲线的坐标数组</td><td><code>{ lng: number, lat: number}[]</code></td><td>-</td><td><code>required</code></td></tr><tr><td>controlPoints</td><td>贝塞尔曲线控制点的坐标数组</td><td><code>{ lng: number, lat: number}[][]</code></td><td>-</td><td><code>required</code></td></tr><tr><td>strokeColor</td><td>描边的颜色，同 CSS 颜色</td><td><code>string</code></td><td>-</td><td><code>#000000</code></td></tr><tr><td>strokeWeight</td><td>描边的宽度，单位为像素</td><td><code>string</code></td><td>-</td><td><code>2</code></td></tr><tr><td>strokeOpacity</td><td>描边的透明度，范围 <code>0-1</code></td><td><code> number</code></td><td>-</td><td><code> 1</code></td></tr><tr><td>strokeStyle</td><td>描边的样式，为实线、虚线、或者点状线</td><td><code>string</code></td><td><code>solid / dashed / dotted</code></td><td>-</td></tr><tr><td>enableMassClear</td><td>是否在调用 <code>map.clearOverlays</code> 清除此覆盖物</td><td><code>boolean</code></td><td>-</td><td><code>true </code></td></tr></tbody></table><h2 id="组件事件" tabindex="-1">组件事件 <a class="header-anchor" href="#组件事件" aria-label="Permalink to &quot;组件事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>initd</td><td>组件初始化后，调用的方法，返回一个地图实例</td><td><code>{ map, BmapGL, instance }</code></td></tr><tr><td>unload</td><td>组件卸载时会调用此方法</td><td>-</td></tr><tr><td>click</td><td>鼠标左键单击事件的回调函数。 当双击时，产生的事件序列为： click click dblclick</td><td>((e: Event) =&gt; void)</td></tr><tr><td>dblclick</td><td>鼠标左键双击事件的回调函数</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mousedown</td><td>鼠标左键在该覆盖物上按下的回调函数</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mouseup</td><td>鼠标左键在该覆盖物上抬起的回调函数</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mouseout</td><td>鼠标指针移出该覆盖物事件的回调函数</td><td>((e: Event) =&gt; void)</td></tr><tr><td>mouseover</td><td>鼠标指针移入该覆盖物事件的回调函数</td><td>((e: Event) =&gt; void)</td></tr><tr><td>remove</td><td>该覆盖物被移除的回调函数</td><td>((e: Event) =&gt; void)</td></tr><tr><td>lineupdate</td><td>覆盖物被编辑后的回调函数</td><td>((e: Event) =&gt; void)</td></tr></tbody></table>',4);function i(u,D,A,k,F,h){const a=p("Demo");return d(),s("div",null,[r,e(a,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lng%3A%20113.399%2C%20lat%3A%2039.91%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E8%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBBezierCurve%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Apath%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%5B%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.399%2C%20lat%3A%2039.911%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20113.399%2C%20lat%3A%2039.91%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20110.399%2C%20lat%3A%2039.91%20%7D%0A%20%20%20%20%20%20%5D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AcontrolPoints%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%5B%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20115.399%2C%20lat%3A%2040.91%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20114.399%2C%20lat%3A%2038.91%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20112.399%2C%20lat%3A%2038.911%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20112.399%2C%20lat%3A%2038.41%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%5D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Estroke-color%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23000%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Astroke-opacity%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E1%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Astroke-weight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E2%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"overlay/bezierCurve","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20v-bind%3D%22%24attrs%22%20%3Acenter%3D%22%7B%20lng%3A%20113.399%2C%20lat%3A%2039.91%20%7D%22%20%3Azoom%3D%228%22%3E%0A%20%20%20%20%3CBBezierCurve%0A%20%20%20%20%20%20%3Apath%3D%22%5B%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.399%2C%20lat%3A%2039.911%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20113.399%2C%20lat%3A%2039.91%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20110.399%2C%20lat%3A%2039.91%20%7D%0A%20%20%20%20%20%20%5D%22%0A%20%20%20%20%20%20%3AcontrolPoints%3D%22%5B%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20115.399%2C%20lat%3A%2040.91%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20114.399%2C%20lat%3A%2038.91%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20112.399%2C%20lat%3A%2038.911%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20112.399%2C%20lat%3A%2038.41%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%5D%22%0A%20%20%20%20%20%20stroke-color%3D%22%23000%22%0A%20%20%20%20%20%20%3Astroke-opacity%3D%221%22%0A%20%20%20%20%20%20%3Astroke-weight%3D%222%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E5%9C%A8%E5%9C%B0%E5%9B%BE%E4%B8%AD%E6%B7%BB%E5%8A%A0%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF%3C%2Fp%3E%0A"},{default:o(()=>[C]),_:1}),E])}const m=n(c,[["render",i]]);export{v as __pageData,m as default};
