# Vue3 BaiduMap Gl

<div style="display:flex;justify-content:flex-start;margin-top:15px;">
<img src="https://img.shields.io/github/license/yue1123/img-previewer?style=flat-square" alt="GitHub license" >
<img src="https://img.shields.io/github/package-json/v/yue1123/vue3-baidu-map-gl?color=f90&style=flat-square" alt="" style="margin-left:10px">
</div>

基于百度地图 JavaScript GL 版（使用了 WebGL 对地图、覆盖物等进行渲染，支持 3D 视角展示地图） API 封装设计的 Vue3 组件库，开发体验良好，代码优雅。

## :sparkles: 特性

- 🚀 自动加载百度地图 SDK，将百度地图繁琐的 Api 封装进组件，你只需关注组件本身
- 📦 20+ 高质量的开箱即用 Vue 3 组件以及 7+ hooks 封装
- 📐 遵循直觉的、简约的 Api 设计
- ⚡ Composition Api，更好的性能
- 🔨 完整的 TypeScript 支持，更好的体验
- 🧩 tree shaking 支持，模块分包，只打包你想要的的
- 🌏 基于百度地图 Gl 版 SDK，通过 WebGL 对地图、覆盖物等进行渲染，支持 3D 视角展示地图
- 🖇️ 组件同时兼容纯净式大驼峰命名(Map)和短横线命名(b-map)
- 🚀 支持 volar，组件提供完善的代码提示

## 安装

### npm

```shell
# with npm
npm i vue3-baidu-map-gl

# or with yarn
yarn add vue3-baidu-map-gl

# or with pnpm
pnpm add vue3-baidu-map-gl
```

### CDN

参考 [使用 CDN](/zh/guide/usage-cdn)。

## 申请 ak 密钥

使用 `vue3-baidu-map-gl` 组件库前，需要先在百度地图开发者后台申请百度地图 ak 密钥，然后在项目中[配置 ak 密钥](./config)，详细请阅读下面两个链接内容：

> [官方密钥 ak 申请指引](https://lbs.baidu.com/index.php?title=jspopularGL/guide/getkey)

> [申请开发者密钥 ak](https://lbsyun.baidu.com/apiconsole/key?application=key)

## License

[MIT licenses](https://opensource.org/licenses/MIT)
