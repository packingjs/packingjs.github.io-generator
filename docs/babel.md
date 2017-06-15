---
id: babel
title: 用 ES6 开发
layout: docs
category: 高级主题
next: jenkins
permalink: docs/babel.html
---

Packing 默认配置好了 babel ，你可以开箱即用，项目中所有代码都可以使用 ES6 来编写。

下面是 Packing 默认的 .babelrc 配置，你可以根据实际需要修改。

```json
{
  "presets": [
    ["es2015", {"module": false}],
    "stage-0"
  ],

  "plugins": [
    "transform-runtime",
    "add-module-exports",
    "transform-decorators-legacy"
  ]
}
```
