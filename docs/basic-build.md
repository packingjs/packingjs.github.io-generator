---
id: build
title: 编译
layout: docs
category: 基础知识
next: router
permalink: docs/build.html
---

所有前端项目上线前都需要编译打包，Packing 提供了下面的命令来做打包：
```
packing build
```

编译过程会做以下两件事情：
- 将 js 和 css 打包。
- 根据 entry 文件生成对应的模版文件。

## 万事屋配置
CM 在万事屋专门建了一种名叫 `node` 的编译方式来完成 packing 编译。[这里](/docs/jenkins.html#content)有详细的说明文档.
