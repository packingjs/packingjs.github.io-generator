---
id: dev-dependencies
title: 编译机上找不到某些依赖包
layout: docs
category: 常见问题
next: build-css
permalink: docs/dev-dependencies.html
---

本地编译正常，在编译服务器上发布时却提示找不到某些依赖包。

这可能有2种原因：

- 忘记把依赖添加到 `package.json`
- 依赖包放置的位置错误

## 忘记把依赖添加到 `package.json`
这种情况只需要把缺失的依赖包加上即可。

```
# 假设包名称为 xxx
npm install xxx --save
```

## 依赖包放置的位置错误
本地开发时用的npm安装命令是 `npm install` ，它会`devDependencies`和`dependencies`包含的所有包，为了减少不必要的包安装、提高安装速度。在编译服务器上用的npm安装命令是 `npm install --production`，它只会安装`dependencies`下的包。

出现这种情况是因为包的位置摆放错误，你需要把在编译服务器上提示找不到的这些包从 `devDependencies` 移动到 `dependencies`下。
