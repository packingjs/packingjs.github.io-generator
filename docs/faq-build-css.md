---
id: build-css
title: 单独编译 less
layout: docs
category: 常见问题
next: npm-cache
permalink: docs/build-css.html
---

HTML 需要引入一个 less 文件，这个 less 没有被任何 js 文件引用，按正常逻辑，webpack 不会编译这个 less 文件，但期望编译后的效果是所有 less 都编译成 CSS，这问题可以用以下方法来处理。

## 把 less 文件添加到 entries 中
在 `config/packing.js` 的 `entries` 添加这个 less 文件。

```js
entries: {
  abc: './src/entries/abc.less'
  // 需要输出到不同路径的话可以随意修改key值
  // 'test/abc': './src/entries/abc.less'
}
```

编译时会把 `abc.less` 编译成 `prd/css/abc-xxxxxxxx.css`，同时 HTML 中的引用也会自动更新。

编译前的 HTML 代码:

```html
<link href="/abc.css" rel="stylesheet" />
```

编译后的 HTML 代码:

```html
<link href="/abc-xxxxxxxx.css" rel="stylesheet" />
```

## 其他静态资源
其他静态资源如图片也能使用上面的方法强制 webpack 来编译。

这种方式能充分的利用 webpack 的 [longTermCaching](https://webpack.js.org/guides/caching/#components/sidebar/sidebar.jsx) 功能，但编译后会新增一个无用的 js 文件。
