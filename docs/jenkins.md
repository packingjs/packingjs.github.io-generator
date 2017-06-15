---
id: jenkins
title: 用 Jenkins 发布
layout: docs
category: 高级主题
next: migrating
permalink: docs/jenkins.html
---

>本文档 Qunar 专用

## 万事屋配置
在万事屋使用 `node` 方式来编译 packing 项目，schema 参数如下：

```
fe.YOUR_PROJECT_NAME.build_method=node
```

`node` 方式会自动完成以下几件事情：

1. **安装依赖包**：只安装 package.json 中 `dependencies` 节点下的依赖包，**不安装** `devDependencies` 节点下的依赖包。
1. **缓存依赖包**：通过 `npm-cache` 缓存上一步编译后结果，提高下一次发布的速度。
1. **执行项目编译**：运行 `npm run build:$target`，`$target` 是环境标识，有三个值：
    - dev: 向开发机发布
    - beta: 向测试机发布
    - prod: 向生成机发布
