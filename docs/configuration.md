---
id: configuration
title: 配置
layout: docs
category: 快速入门
next: deploy
permalink: docs/configuration.html
---

为了简化使用门槛，packing 隐藏了很多 webpack 配置，内置了一些常用的 loader 和 plugin，工程师甚至可以不做任何配置就能使用 packing。

packing 中有2种配置文件。

- 一种是 packing 的配置，这个是控制项目的配置。
- 一种是 webpack 配置文件。

## packing 配置文件
packing 配置文件是一个对象(configuration object)。

[查看 packing 默认的配置项](https://github.com/packingjs/packing/blob/master/src/config/packing.js)

修改项目根目录下的 `config/packing.js` (如果没有你需要新建一个)文件可以覆盖 packing 默认配置。

```js
/**
 * 演示修改项目模版为 pug 模版
 *
 * @param object packing 默认配置对象
 */

/**
 * @param {Object} packing packing默认配置对象
 * @return {Object}
 */
export default (packing) => {
  const p = packing;
  // 模版引擎类型
  p.templateEngine = 'pug';
  // 模版文件扩展名
  p.templateExtension = '.pug';

  return p;
};
```

## webpack 配置文件

webpack 有3个配置文件

- 开发环境 webpack 配置 [webpack.serve.babel.js](https://github.com/packingjs/packing/blob/master/src/config/webpack.serve.babel.js)
- 生产环境 webpack 配置 [webpack.build.babel.js](https://github.com/packingjs/packing/blob/master/src/config/webpack.build.babel.js)
- 开发环境打包 [Dll](https://webpack.js.org/plugins/dll-plugin/) 配置 [webpack.dll.babel.js](https://github.com/packingjs/packing/blob/master/src/config/webpack.dll.babel.js)

通常来说，如果不是新增了 loader 或 plugins，一般不需要修改 `webpack.dll.babel.js`。

如果默认配置满足不了你的要求，你也可以编写自己的配置文件来覆盖默认配置。配置文件使用很方便，它自动继承了默认配置，可以通过自定义配置来完全控制所有 webpack 功能。

```js
/**
 * 演示修改 webpack 默认配置的 output 值 *
 */

 /**
  * @param {Object} webpackConfig 默认配置对象
  * @return {Object} 符合 webpack 配置规范的对象
  */
export default (webpackConfig) => {
  const config = webpackConfig;
  // lib文件输出名称
  config.output.filename = 'abc.js';

  // lib暴露在 window 下的名称
  config.output.library = 'ABC';

  // 打包方式，一般不需要修改
  // 详细文档请看 https://webpack.js.org/configuration/output/#output-librarytarget
  config.output.libraryTarget = 'umd';
  return config;
};
```

[查看更多 webpack 详细配置信息](https://webpack.js.org/configuration/)
