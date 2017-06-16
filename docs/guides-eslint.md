---
id: eslint
title: eslint
layout: docs
category: 使用指南
next: es6
permalink: docs/eslint.html
---

使用 eslint 的目的是为了统一团队的编码风格、完成初级的代码校验。

大家都知道 eslint 是通过 `eslintrc.js` 来定义规则的， Packing 默认内置了一套 eslint 规则，用 `packing-generator` 生成项目时，会自动在项目根目录生成这个配置文件。如果不想使用默认规则，可以直接编辑这个文件，通常只需要增加 `rules` 来覆盖默认配置即可。

默认规则包含以下插件：

- [react](https://github.com/yannickcr/eslint-plugin-react)
- [import](https://github.com/benmosher/eslint-plugin-import)

## 相关网站

- [eslint-config-qunar](https://github.com/zhongzhi107/eslint-config-qunar)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
