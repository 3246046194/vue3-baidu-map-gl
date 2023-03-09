import{_ as r,c as l,b as a,a as t,f as e,g as c,h as s,i as n,o as d}from"./app.5c88ad70.js";const b=JSON.parse('{"title":"BPanoramaCoverageLayer 全景图层","description":"","frontmatter":{},"headers":[{"level":2,"title":"组件示例","slug":"组件示例","link":"#组件示例","children":[]},{"level":2,"title":"静态组件 Props","slug":"静态组件-props","link":"#静态组件-props","children":[]},{"level":2,"title":"anchor","slug":"anchor","link":"#anchor","children":[]},{"level":2,"title":"组件事件","slug":"组件事件","link":"#组件事件","children":[]}],"relativePath":"zh-CN/components/layer/panorama-coverage.md","lastUpdated":1678340908000}'),C={name:"zh-CN/components/layer/panorama-coverage.md"},E={id:"bpanoramacoveragelayer-全景图层",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#bpanoramacoveragelayer-全景图层","aria-hidden":"true"},"#",-1),i=s(`<p>全景地图服务，360° 全景地图刻画真实世界，将街道场景带入到地图产品中，用户可以拖拽地图从不同的角度浏览真实的街景效果</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BPanoramaCoverageLayer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>全景地图服务属于百度地图高级服务，需要向 <a href="https://lbs.baidu.com/apiconsole/fankui#?typeOne=%E4%BA%A7%E5%93%81%E9%9C%80%E6%B1%82&amp;typeTwo=%E9%AB%98%E7%BA%A7%E6%9C%8D%E5%8A%A1&amp;typeThree=JS%20API%E5%85%A8%E6%99%AF%E5%9B%BE" target="_blank" rel="noreferrer">百度地图申请</a> 才可以使用</p></div><h2 id="组件示例" tabindex="-1">组件示例 <a class="header-anchor" href="#组件示例" aria-hidden="true">#</a></h2><p>单独使用该组件无法查看全景地图，还需要搭配<code>BPanoramaControl</code>组件使用。</p>`,5),_=a("p",null,"layer/panoramaCoverage",-1),F=s('<h2 id="静态组件-props" tabindex="-1">静态组件 Props <a class="header-anchor" href="#静态组件-props" aria-hidden="true">#</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>anchor</td><td>控件的停靠位置</td><td><code>string</code></td><td><a href="#anchor">anchor</a></td><td><code>BMAP_ANCHOR_TOP_RIGHT</code></td></tr><tr><td>offset</td><td>控件的偏移值</td><td><code>{x: number, y: number }</code></td><td>-</td><td><code>{ x: 10, y: 10 }</code></td></tr></tbody></table><h2 id="anchor" tabindex="-1">anchor <a class="header-anchor" href="#anchor" aria-hidden="true">#</a></h2><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>BMAP_ANCHOR_TOP_LEFT</td><td>左上</td></tr><tr><td>BMAP_ANCHOR_TOP_RIGHT</td><td>右上</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_LEFT</td><td>左下</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_RIGHT</td><td>右下</td></tr></tbody></table><h2 id="组件事件" tabindex="-1">组件事件 <a class="header-anchor" href="#组件事件" aria-hidden="true">#</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>initd</td><td>组件初始化后，调用的方法，返回一个地图实例</td><td><code>{ map, BmapGL, instance }</code></td></tr><tr><td>unload</td><td>组件卸载时会调用此方法</td><td>-</td></tr></tbody></table>',6);function u(m,A,D,B,y,g){const o=n("Badge"),p=n("Demo");return d(),l("div",null,[a("h1",E,[t("BPanoramaCoverageLayer 全景图层 "),e(o,{type:"tip",text:"^0.0.31"}),t(),h]),i,e(p,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EenableScrollWheelZoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBPanoramaControl%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBPanoramaCoverageLayer%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"layer/panoramaCoverage","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20v-bind%3D%22%24attrs%22%20enableScrollWheelZoom%20ak%3D%22oW2UEhdth2tRbEE4FUpF9E5YVDCIPYih%22%3E%0A%20%20%20%20%3CBPanoramaControl%20%2F%3E%0A%20%20%20%20%3CBPanoramaCoverageLayer%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E6%98%BE%E7%A4%BA%E5%85%A8%E6%99%AF%E5%9B%BE%E5%B1%82%3C%2Fp%3E%0A"},{default:c(()=>[_]),_:1}),F])}const T=r(C,[["render",u]]);export{b as __pageData,T as default};
