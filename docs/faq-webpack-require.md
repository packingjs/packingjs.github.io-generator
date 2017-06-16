---
id: webpack-require
title: __webpack_require__ 未定义
layout: docs
category: 常见问题
next: dev-dependencies
permalink: docs/webpack-require.html
---

错误信息如下：

```
dll_vendor:Uncaught ReferenceError: __webpack_require__ is not defined
```

`vendor.js` 里没有打入任何js，检查 `packing.js` 的 `commonChunks.vendor` 配置
