---
id: npm-cache
title: npm-cache 解压失败
layout: docs
category: 常见问题
permalink: docs/npm-cache.html
---

可能是 `npm-cache` 内部指定的 node 版本和 `build.sh` 中指定的 node 版本不一致，将两者的版本修改成一致的即可。

修改的方法是：在文件头部增加下面代码。

```
export PATH=/usr/local/n/versions/node/6.2.1/bin:$PATH
```
