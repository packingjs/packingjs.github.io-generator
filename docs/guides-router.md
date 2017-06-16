---
id: router
title: 路由
layout: docs
category: 使用指南
next: mock
permalink: docs/router.html
---

前后端分离的前端工程只包含模版和静态文件，如果不做特殊处理的话，很难在本地开发环境实现和生产环境一样的 URL，这个问题不解决就做不到开发本地化。

packing 实现了将 URL 地址和模版文件相互映射的功能，可以在本地开发环境通过配置正则来建立 URL 和模版的关系，从而保证了页面按着生产环境的 URL 地址在彼此之间跳转。

## 路由配置
通过修改项目根目录下的 `config/packing.js` 文件的 `rewriteRules` 节点的值来完成。

```js
export default (packing) => {
  const p = packing;
  p.rewriteRules = {
    // 网站URL与模版的对应路由关系
    '^/$': '/index.pug',
    // 支持通配符
    '^/hotel/(.*)': '/hotel/$1.pug'
  };

  return p;
};
```
