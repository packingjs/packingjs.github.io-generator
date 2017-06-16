---
id: webpack-jsonp
title: 找不到 webpackJsonp
layout: docs
category: 常见问题
next: webpack-require
permalink: docs/webpack-jsonp.html
---

错误信息如下：
```
webpackJsonp is not defined
```

可能配置了common chunks，公共文件打到了 `vendor.js`，需要在页面引用 `vendor.js`，在模版文件中增加下面的代码：

```html
<script src="/vendor.js"></script>
```

如果 vendor.js 引用了 css，页面还需要引用 `vendor.css`：

```html
<link href="/vendor.css" media="all" rel="stylesheet" />
```
