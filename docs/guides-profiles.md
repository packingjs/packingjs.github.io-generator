---
id: profiles
title: profiles
layout: docs
category: 使用指南
next: eslint
permalink: docs/profiles.html
---

在开发过程中经常会碰到代码需要在不同的环境下某些变量的值是不同的，比如某些请求地址、debug 开关等。为了解决这类问题， packing 提供了类似 maven 中的 profiles 功能。

>profile可以让我们定义一系列的配置信息，然后指定其激活条件。这样我们就可以定义多个profile，然后每个profile对应不同的激活条件和配置信息，从而达到不同环境使用不同配置信息的效果。

Packing 目前只支持 `NODE_ENV` 激活方式。

## 使用 NODE_ENV 环境变量

在不同的环境下开发者关注的东西不一样。在开发环境下开发者希望修改代码后，在最短的时间内看到最终效果；在生产环境下，更关注网页的加载速度和运行效率等。这是因为关注点有差异，编译脚本会根据环境的差异做一些差异化的编译。

Packing 共有4种环境：

- `local`：本地环境
- `development`：开发服务器
- `beta`：测试服务器
- `production`：生产环境
