---
id: commands
title: 命令
layout: docs
category: 快速入门
next: configuration
permalink: docs/commands.html
---

packing 内置了以下几个命令：

命令|参数|说明
---|---|---
packing serve|-c, --clean_cache 强制清除 `dll` 缓存<br>-o, --open_browser 自动打开浏览器 |启动开发服务器
packing build|无|编译项目
packing serve-dist|无|预览编译后的产出物

这些命令可以在 `package.json` 的 scripts 直接使用

```json
"scripts": {
  "start": "npm run serve",
  "build": "packing build",
  "build:dev": "NODE_ENV=development packing build",
  "build:beta": "NODE_ENV=beta packing build",
  "build:prod": "NODE_ENV=production packing build",
  "serve": "webpack-dashboard --title a -- packing serve",
  "serve:normal": "packing serve",
  "serve:dist": "packing build && packing serve-dist",
  "eslint": "eslint src"
},

```

也可以在命令行下使用

```
./node_modules/packing/.bin/packing serve -o -c
./node_modules/packing/.bin/packing build
./node_modules/packing/.bin/packing serve-dist
```
