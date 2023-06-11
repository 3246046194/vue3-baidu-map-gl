import{_ as d,c as p,G as n,C as c,A as t,S as s,a,H as e,o as r}from"./chunks/framework.ded5427d.js";const N=JSON.parse('{"title":"BPolyline 折线","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/components/overlay/polyline.md","filePath":"zh-CN/components/overlay/polyline.md","lastUpdated":1686473991000}'),C={name:"zh-CN/components/overlay/polyline.md"},i=s("",4),u=t("p",null,"overlay/polyline",-1),E=t("h2",{id:"静态组件-props",tabindex:"-1"},[a("静态组件 Props "),t("a",{class:"header-anchor",href:"#静态组件-props","aria-label":'Permalink to "静态组件 Props"'},"​")],-1),D=t("thead",null,[t("tr",null,[t("th",null,"属性"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"可选值"),t("th",null,"默认值"),t("th",null,"版本")])],-1),h=t("tr",null,[t("td",null,"enableClicking"),t("td",null,"是否响应点击事件"),t("td",null,[t("code",null,"boolean")]),t("td",null,"-"),t("td",null,[t("code",null,"true")]),t("td")],-1),A=t("tr",null,[t("td",null,"geodesic"),t("td",null,"是否开启大地线模式，true 时，两点连线将以大地线的形式。"),t("td",null,[t("code",null,"boolean")]),t("td",null,"-"),t("td",null,[t("code",null,"false")]),t("td")],-1),F=t("tr",null,[t("td",null,"clip"),t("td",null,"是否进行跨经度 180 度裁剪，绘制跨精度 180 时为了优化效果"),t("td",null,[t("code",null,"boolean")]),t("td",null,"-"),t("td",null,[t("code",null,"true")]),t("td")],-1),k=t("td",null,"linkRight",-1),_=t("td",null,[a("连接右线，配合"),t("code",null,"clip"),a("解决跨 ±180 度经线绘制问题")],-1),m=t("td",null,[t("code",null,"boolean")],-1),g=t("td",null,"-",-1),y=t("td",null,[t("code",null,"true")],-1),b=s("",4);function B(v,P,f,q,T,S){const o=e("Demo"),l=e("Badge");return r(),p("div",null,[i,n(o,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E16%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBPolyline%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Apath%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%5B%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.404%2C%20lat%3A%2039.915%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.404%2C%20lat%3A%2039.92%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.41%2C%20lat%3A%2039.92%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.41%2C%20lat%3A%2039.915%20%7D%0A%20%20%20%20%20%20%5D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Estroke-color%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23000%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Astroke-opacity%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E1%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Astroke-weight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E3%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3EenableEditing%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"overlay/polyline","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20v-bind%3D%22%24attrs%22%20%3Azoom%3D%2216%22%3E%0A%20%20%20%20%3CBPolyline%0A%20%20%20%20%20%20%3Apath%3D%22%5B%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.404%2C%20lat%3A%2039.915%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.404%2C%20lat%3A%2039.92%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.41%2C%20lat%3A%2039.92%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.41%2C%20lat%3A%2039.915%20%7D%0A%20%20%20%20%20%20%5D%22%0A%20%20%20%20%20%20stroke-color%3D%22%23000%22%0A%20%20%20%20%20%20%3Astroke-opacity%3D%221%22%0A%20%20%20%20%20%20%3Astroke-weight%3D%223%22%0A%20%20%20%20%20%20enableEditing%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E5%9C%A8%E5%9C%B0%E5%9B%BE%E4%B8%8A%E7%BB%98%E5%88%B6%E5%8F%AF%E7%BC%96%E8%BE%91%E7%9A%84%E6%8A%98%E7%BA%BF%3C%2Fp%3E%0A"},{default:c(()=>[u]),_:1}),E,t("table",null,[D,t("tbody",null,[h,A,F,t("tr",null,[k,_,m,g,y,t("td",null,[n(l,{type:"tip",text:"^2.1.0"})])])])]),b])}const V=d(C,[["render",B]]);export{N as __pageData,V as default};
