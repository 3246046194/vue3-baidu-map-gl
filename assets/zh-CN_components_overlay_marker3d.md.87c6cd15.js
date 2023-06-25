import{_ as l,E as p,c as E,H as n,C as o,A as a,S as s,a as t,o as c}from"./chunks/framework.c482a5a7.js";const U=JSON.parse('{"title":"BMarker3d 带高度的点","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/components/overlay/marker3d.md","filePath":"zh-CN/components/overlay/marker3d.md","lastUpdated":1687704233000}'),D={name:"zh-CN/components/overlay/marker3d.md"},u=s('<h1 id="bmarker3d-带高度的点" tabindex="-1">BMarker3d 带高度的点 <a class="header-anchor" href="#bmarker3d-带高度的点" aria-label="Permalink to &quot;BMarker3d 带高度的点&quot;">​</a></h1><p>在地图上绘制带高度的点覆盖物</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BMarker3d</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="组件示例" tabindex="-1">组件示例 <a class="header-anchor" href="#组件示例" aria-label="Permalink to &quot;组件示例&quot;">​</a></h2>',4),M=a("p",null,"overlay/marker3d/index",-1),r=a("h2",{id:"纹理贴图",tabindex:"-1"},[t("纹理贴图 "),a("a",{class:"header-anchor",href:"#纹理贴图","aria-label":'Permalink to "纹理贴图"'},"​")],-1),i=a("p",null,"overlay/marker3d/withImg",-1),d=s('<h2 id="静态组件-props" tabindex="-1">静态组件 Props <a class="header-anchor" href="#静态组件-props" aria-label="Permalink to &quot;静态组件 Props&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>点高度</td><td><code>number</code></td><td><code>required</code></td></tr><tr><td>size</td><td>点大小(宽/高)</td><td><code>number</code></td><td><code>50</code></td></tr><tr><td>shape</td><td>点的<a href="#点形状">形状</a></td><td><code>BMAP_SHAPE_CIRCLE | BMAP_SHAPE_RECT</code></td><td><code>BMAP_SHAPE_CIRCLE</code></td></tr></tbody></table><h2 id="点形状" tabindex="-1">点形状 <a class="header-anchor" href="#点形状" aria-label="Permalink to &quot;点形状&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>BMAP_SHAPE_CIRCLE</td><td>圆形</td></tr><tr><td>BMAP_SHAPE_RECT</td><td>正方形</td></tr></tbody></table><h2 id="动态组件-props" tabindex="-1">动态组件 Props <a class="header-anchor" href="#动态组件-props" aria-label="Permalink to &quot;动态组件 Props&quot;">​</a></h2>',5),A=a("thead",null,[a("tr",null,[a("th",null,"属性"),a("th",null,"说明"),a("th",null,"类型"),a("th",null,"可选值"),a("th",null,"默认值"),a("th",null,"版本")])],-1),k=a("tr",null,[a("td",null,"position"),a("td",null,"点的坐标"),a("td",null,[a("code",null,"{ lng: number, lat: number}")]),a("td",null,"-"),a("td",null,[a("code",null,"required")]),a("td",null,"-")],-1),g=a("tr",null,[a("td",null,"icon"),a("td",null,[t("点的图或"),a("a",{href:"#自定义纹理贴图"},"自定义纹理贴图")]),a("td",null,[a("code",null,"string ")]),a("td",null,"-"),a("td"),a("td",null,"-")],-1),N=a("tr",null,[a("td",null,"fillColor"),a("td",null,"点填充颜色，同 CSS 颜色"),a("td",null,[a("code",null,"string ")]),a("td",null,"-"),a("td",null,[a("code",null,"#f00")]),a("td",null,"-")],-1),F=a("tr",null,[a("td",null,"fillOpacity"),a("td",null,"点填充的透明度，范围 0-1"),a("td",null,[a("code",null,"number ")]),a("td",null,[a("code",null,"0-1")]),a("td",null,[a("code",null,"0.8 ")]),a("td",null,"-")],-1),I=a("tr",null,[a("td",null,"enableMassClear"),a("td",null,[t("是否在调用 "),a("code",null,"map.clearOverlays"),t(" 清除此覆盖物")]),a("td",null,[a("code",null,"boolean")]),a("td",null,"-"),a("td",null,[a("code",null," true")]),a("td",null,"-")],-1),z=a("td",null,"visible",-1),j=a("td",null,"是否显示",-1),y=a("td",null,[a("code",null,"boolean")],-1),T=a("td",null,"-",-1),h=a("td",null,[a("code",null,"true")],-1),m=s('<h2 id="自定义纹理贴图" tabindex="-1">自定义纹理贴图 <a class="header-anchor" href="#自定义纹理贴图" aria-label="Permalink to &quot;自定义纹理贴图&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>anchor</td><td>贴图的定位点相对于贴图左上角的偏移值</td><td><code>{ x: number, y: number }</code></td><td>-</td></tr><tr><td>imageOffset</td><td>贴图所用的图片相对于可视区域的偏移值，此功能的作用等同于 CSS 中的 <code>background-position</code> 属性</td><td><code>{ x: number, y: number }</code></td><td>-</td></tr><tr><td>imageSize</td><td>贴图所用的图片的大小，此功能的作用等同于 CSS 中的<code>background-size</code>属性。可用于实现高清屏的高清效果</td><td><code>{ width: number, height: number }</code></td><td><code>required</code></td></tr><tr><td>imageUrl</td><td>贴图所用图像资源的位置</td><td><code>string</code></td><td><code>required</code></td></tr><tr><td>printImageUrl</td><td>设置 icon 打印图片的 url，该打印图片只针对 IE6 有效，解决 IE6 使用 PNG 滤镜导致的错位问题。如果您的 icon 没有使用 PNG 格式图片或者没有使用 CSS Sprites 技术，则可忽略此配置</td><td><code>string </code></td><td>-</td></tr></tbody></table><h2 id="组件事件" tabindex="-1">组件事件 <a class="header-anchor" href="#组件事件" aria-label="Permalink to &quot;组件事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>initd</td><td>组件初始化后，调用的方法，返回一个地图实例</td><td><code>{ map, BmapGL, instance }</code></td></tr><tr><td>unload</td><td>组件卸载时会调用此方法</td><td>-</td></tr><tr><td>click</td><td>鼠标左键单击事件的回调函数。当双击时，产生的事件序列为：click -&gt; click -&gt; dblclick</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>dblclick</td><td>鼠标左键双击事件的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>mousedown</td><td>鼠标左键在该覆盖物上按下的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>mouseup</td><td>鼠标左键在该覆盖物上抬起的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>mouseout</td><td>鼠标指针移出该覆盖物事件的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>mouseover</td><td>鼠标指针移入该覆盖物事件的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>remove</td><td>该覆盖物被移除的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr><tr><td>rightclick</td><td>鼠标右键单击事件的回调函数</td><td><code>((e: Event) =&gt; void)</code></td></tr></tbody></table>',4);function O(x,L,Q,S,_,B){const e=p("Demo"),C=p("Badge");return c(),E("div",null,[u,n(e,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E16%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aheading%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E64.5%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Atilt%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E73%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EenableScrollWheelZoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker3d%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Epoint1%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E1200%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Asize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E200%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3EfillColor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23454399%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AfillOpacity%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E0.5%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eshape%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EBMAP_SHAPE_CIRCLE%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20point1%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elat%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.915185%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elng%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E116.400901%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"overlay/marker3d/index","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20v-bind%3D%22%24attrs%22%20%3Azoom%3D%2216%22%20%3Aheading%3D%2264.5%22%20%3Atilt%3D%2273%22%20enableScrollWheelZoom%3E%0A%20%20%20%20%3CBMarker3d%0A%20%20%20%20%20%20%3Aposition%3D%22point1%22%0A%20%20%20%20%20%20%3Aheight%3D%221200%22%0A%20%20%20%20%20%20%3Asize%3D%22200%22%0A%20%20%20%20%20%20fillColor%3D%22%23454399%22%0A%20%20%20%20%20%20%3AfillOpacity%3D%220.5%22%0A%20%20%20%20%20%20shape%3D%22BMAP_SHAPE_CIRCLE%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20const%20point1%20%3D%20%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.400901%20%7D%0A%3C%2Fscript%3E%0A",description:"%3Cp%3E%E5%9C%A8%E5%9C%B0%E5%9B%BE%E4%B8%8A%E7%BB%98%E5%88%B6%E5%B8%A6%E9%AB%98%E5%BA%A6%E7%9A%84%E7%82%B9%E8%A6%86%E7%9B%96%E7%89%A9%3C%2Fp%3E%0A"},{default:o(()=>[M]),_:1}),r,n(e,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E16%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aheading%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E64.5%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Atilt%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E73%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EenableScrollWheelZoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker3d%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Epoint1%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E1200%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Asize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E200%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eshape%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EBMAP_SHAPE_CIRCLE%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%0A%20%20%20%20%20%20%20%20imageUrl%3A%20base64Icon%2C%0A%20%20%20%20%20%20%20%20imageSize%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%20200%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker3d%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Epoint2%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E800%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Asize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E200%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eshape%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EBMAP_SHAPE_CIRCLE%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aicon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%0A%20%20%20%20%20%20%20%20imageUrl%3A%20base64Icon%2C%0A%20%20%20%20%20%20%20%20imageSize%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%20200%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20point1%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elat%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.925185%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elng%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E116.400901%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20point2%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elat%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.915185%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elng%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E116.400901%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20base64Icon%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQgNEMxMi45NTQzIDQgNCAxMi45NTQzIDQgMjRDNCAzNS4wNDU3IDEyLjk1NDMgNDQgMjQgNDRDMzUuMDQ1NyA0NCA0NCAzNS4wNDU3IDQ0IDI0QzQ0IDEyLjk1NDMgMzUuMDQ1NyA0IDI0IDRaTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iIzAwMDAwMCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkuMTgzMyA0NS40NzE2QzE4Ljk4OTggNDUuMjIxOSAxOC45ODk4IDQyLjk5NzMgMTkuMTgzMyAzOC43OThDMTcuMTExNCAzOC44Njk2IDE1LjgwMjQgMzguNzI1OCAxNS4yNTYzIDM4LjM2NjdDMTQuNDM3IDM3LjgyOCAxMy42MTY5IDM2LjE2NjcgMTIuODg5MSAzNC45OTU5QzEyLjE2MTQgMzMuODI1MSAxMC41NDYzIDMzLjY0IDkuODk0MDUgMzMuMzc4M0M5LjI0MTgyIDMzLjExNjUgOS4wNzgwOSAzMi4wNDk2IDExLjY5MTMgMzIuODU2NUMxNC4zMDQ0IDMzLjY2MzQgMTQuNDMxOSAzNS44NjA3IDE1LjI1NjMgMzYuMzc0NUMxNi4wODA2IDM2Ljg4ODMgMTguMDUxNSAzNi42NjM1IDE4Ljk0NDggMzYuMjUxOUMxOS44MzgyIDM1Ljg0MDMgMTkuNzcyNCAzNC4zMDc4IDE5LjkzMTcgMzMuNzAwN0MyMC4xMzMxIDMzLjEzNCAxOS40MjMzIDMzLjAwODMgMTkuNDA3NyAzMy4wMDM3QzE4LjUzNTUgMzMuMDAzNyAxMy45NTM5IDMyLjAwNzMgMTIuNjk1NSAyNy41NzA2QzExLjQzNyAyMy4xMzQgMTMuMDU4MSAyMC4yMzQxIDEzLjkyMjkgMTguOTg3NUMxNC40OTk1IDE4LjE1NjQgMTQuNDQ4NSAxNi4zODUyIDEzLjc2OTkgMTMuNjczN0MxNi4yMzM1IDEzLjM1ODkgMTguMTM0NyAxNC4xMzQzIDE5LjQ3MzQgMTYuMDAwMUMxOS40NzQ3IDE2LjAxMDggMjEuMjI4NSAxNC45NTcyIDI0LjAwMDMgMTQuOTU3MkMyNi43NzIgMTQuOTU3MiAyNy43NTUzIDE1LjgxNTQgMjguNTE0MiAxNi4wMDAxQzI5LjI3MzEgMTYuMTg0OCAyOS44OCAxMi43MzQxIDM0LjU2NjggMTMuNjczN0MzMy41ODgzIDE1LjU5NjkgMzIuNzY4OSAxOC4wMDAxIDMzLjM5NDMgMTguOTg3NUMzNC4wMTk4IDE5Ljk3NDkgMzYuNDc0NSAyMy4xMTQ3IDM0Ljk2NjYgMjcuNTcwNkMzMy45NjE0IDMwLjU0MTMgMzEuOTg1MyAzMi4zNTIzIDI5LjAzODQgMzMuMDAzN0MyOC43MDA1IDMzLjExMTUgMjguNTMxNSAzMy4yODU1IDI4LjUzMTUgMzMuNTI1NUMyOC41MzE1IDMzLjg4NTYgMjguOTg4NCAzMy45MjQ5IDI5LjY0NjUgMzUuNjExN0MzMC4wODUzIDM2LjczNjIgMzAuMTE3IDM5Ljk0OCAyOS43NDE2IDQ1LjI0N0MyOC43OTA2IDQ1LjQ4OTEgMjguMDUwOCA0NS42NTE2IDI3LjUyMjEgNDUuNzM0N0MyNi41ODQ3IDQ1Ljg4MiAyNS41NjY5IDQ1Ljk2NDYgMjQuNTY2OSA0NS45OTY1QzIzLjU2NjkgNDYuMDI4NCAyMy4yMTk2IDQ2LjAyNDggMjEuODM3IDQ1Ljg5NjFDMjAuOTE1NCA0NS44MTAzIDIwLjAzMDggNDUuNjY4OCAxOS4xODMzIDQ1LjQ3MTZaIiBmaWxsPSIjMDAwMDAwIi8%2BPC9zdmc%2B'%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"overlay/marker3d/withImg","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20v-bind%3D%22%24attrs%22%20%3Azoom%3D%2216%22%20%3Aheading%3D%2264.5%22%20%3Atilt%3D%2273%22%20enableScrollWheelZoom%3E%0A%20%20%20%20%3CBMarker3d%0A%20%20%20%20%20%20%3Aposition%3D%22point1%22%0A%20%20%20%20%20%20%3Aheight%3D%221200%22%0A%20%20%20%20%20%20%3Asize%3D%22200%22%0A%20%20%20%20%20%20shape%3D%22BMAP_SHAPE_CIRCLE%22%0A%20%20%20%20%20%20%3Aicon%3D%22%7B%0A%20%20%20%20%20%20%20%20imageUrl%3A%20base64Icon%2C%0A%20%20%20%20%20%20%20%20imageSize%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%20200%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%22%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CBMarker3d%0A%20%20%20%20%20%20%3Aposition%3D%22point2%22%0A%20%20%20%20%20%20%3Aheight%3D%22800%22%0A%20%20%20%20%20%20%3Asize%3D%22200%22%0A%20%20%20%20%20%20shape%3D%22BMAP_SHAPE_CIRCLE%22%0A%20%20%20%20%20%20%3Aicon%3D%22%7B%0A%20%20%20%20%20%20%20%20imageUrl%3A%20base64Icon%2C%0A%20%20%20%20%20%20%20%20imageSize%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20width%3A%20200%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%20200%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20const%20point1%20%3D%20%7B%20lat%3A%2039.925185%2C%20lng%3A%20116.400901%20%7D%0A%20%20const%20point2%20%3D%20%7B%20lat%3A%2039.915185%2C%20lng%3A%20116.400901%20%7D%0A%20%20const%20base64Icon%20%3D%20'data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQgNEMxMi45NTQzIDQgNCAxMi45NTQzIDQgMjRDNCAzNS4wNDU3IDEyLjk1NDMgNDQgMjQgNDRDMzUuMDQ1NyA0NCA0NCAzNS4wNDU3IDQ0IDI0QzQ0IDEyLjk1NDMgMzUuMDQ1NyA0IDI0IDRaTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iIzAwMDAwMCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkuMTgzMyA0NS40NzE2QzE4Ljk4OTggNDUuMjIxOSAxOC45ODk4IDQyLjk5NzMgMTkuMTgzMyAzOC43OThDMTcuMTExNCAzOC44Njk2IDE1LjgwMjQgMzguNzI1OCAxNS4yNTYzIDM4LjM2NjdDMTQuNDM3IDM3LjgyOCAxMy42MTY5IDM2LjE2NjcgMTIuODg5MSAzNC45OTU5QzEyLjE2MTQgMzMuODI1MSAxMC41NDYzIDMzLjY0IDkuODk0MDUgMzMuMzc4M0M5LjI0MTgyIDMzLjExNjUgOS4wNzgwOSAzMi4wNDk2IDExLjY5MTMgMzIuODU2NUMxNC4zMDQ0IDMzLjY2MzQgMTQuNDMxOSAzNS44NjA3IDE1LjI1NjMgMzYuMzc0NUMxNi4wODA2IDM2Ljg4ODMgMTguMDUxNSAzNi42NjM1IDE4Ljk0NDggMzYuMjUxOUMxOS44MzgyIDM1Ljg0MDMgMTkuNzcyNCAzNC4zMDc4IDE5LjkzMTcgMzMuNzAwN0MyMC4xMzMxIDMzLjEzNCAxOS40MjMzIDMzLjAwODMgMTkuNDA3NyAzMy4wMDM3QzE4LjUzNTUgMzMuMDAzNyAxMy45NTM5IDMyLjAwNzMgMTIuNjk1NSAyNy41NzA2QzExLjQzNyAyMy4xMzQgMTMuMDU4MSAyMC4yMzQxIDEzLjkyMjkgMTguOTg3NUMxNC40OTk1IDE4LjE1NjQgMTQuNDQ4NSAxNi4zODUyIDEzLjc2OTkgMTMuNjczN0MxNi4yMzM1IDEzLjM1ODkgMTguMTM0NyAxNC4xMzQzIDE5LjQ3MzQgMTYuMDAwMUMxOS40NzQ3IDE2LjAxMDggMjEuMjI4NSAxNC45NTcyIDI0LjAwMDMgMTQuOTU3MkMyNi43NzIgMTQuOTU3MiAyNy43NTUzIDE1LjgxNTQgMjguNTE0MiAxNi4wMDAxQzI5LjI3MzEgMTYuMTg0OCAyOS44OCAxMi43MzQxIDM0LjU2NjggMTMuNjczN0MzMy41ODgzIDE1LjU5NjkgMzIuNzY4OSAxOC4wMDAxIDMzLjM5NDMgMTguOTg3NUMzNC4wMTk4IDE5Ljk3NDkgMzYuNDc0NSAyMy4xMTQ3IDM0Ljk2NjYgMjcuNTcwNkMzMy45NjE0IDMwLjU0MTMgMzEuOTg1MyAzMi4zNTIzIDI5LjAzODQgMzMuMDAzN0MyOC43MDA1IDMzLjExMTUgMjguNTMxNSAzMy4yODU1IDI4LjUzMTUgMzMuNTI1NUMyOC41MzE1IDMzLjg4NTYgMjguOTg4NCAzMy45MjQ5IDI5LjY0NjUgMzUuNjExN0MzMC4wODUzIDM2LjczNjIgMzAuMTE3IDM5Ljk0OCAyOS43NDE2IDQ1LjI0N0MyOC43OTA2IDQ1LjQ4OTEgMjguMDUwOCA0NS42NTE2IDI3LjUyMjEgNDUuNzM0N0MyNi41ODQ3IDQ1Ljg4MiAyNS41NjY5IDQ1Ljk2NDYgMjQuNTY2OSA0NS45OTY1QzIzLjU2NjkgNDYuMDI4NCAyMy4yMTk2IDQ2LjAyNDggMjEuODM3IDQ1Ljg5NjFDMjAuOTE1NCA0NS44MTAzIDIwLjAzMDggNDUuNjY4OCAxOS4xODMzIDQ1LjQ3MTZaIiBmaWxsPSIjMDAwMDAwIi8%2BPC9zdmc%2B'%0A%3C%2Fscript%3E%0A",description:"%3Cp%3E%E7%BB%99%E7%82%B9%E8%B4%B4%E4%B8%8A%E7%BA%B9%E7%90%86%3C%2Fp%3E%0A"},{default:o(()=>[i]),_:1}),d,a("table",null,[A,a("tbody",null,[k,g,N,F,I,a("tr",null,[z,j,y,T,h,a("td",null,[n(C,{type:"tip",text:"^2.2.0"})])])])]),m])}const w=l(D,[["render",O]]);export{U as __pageData,w as default};
