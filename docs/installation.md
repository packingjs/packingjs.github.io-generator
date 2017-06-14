---
id: installation
title: 安装
layout: docs
category: 快速入门
next: migrating
permalink: docs/installation.html
---

## 前提条件

在开始前，先要确认你已经安装 Node.js 的最新版本。使用 Node.js 最新的 LTS 版本，是理想的起步。使用旧版本，你可能遇到各种问题，因为它们可能缺少 packing 功能或缺少相关 package 包。

## 可选

Yarn 让依赖包安装得更快
```
npm install -g yarn
```

## 直接安装

这种方式适用于已经存在的工程，直接使用 `npm` 安装

```
npm install packing --save
```

或者 `yarn` 安装

```
yarn add packing
```

## 使用 generator-packing
[generator-packing](https://github.com/packingjs/generator-packing) 是一个快速创建项目的手脚架工具，整个创建过程是一个问答式的交互，简单回答完几个问题后，手脚架就能根据答案内容初始化一个符合要求的工程。

1. 使用前需要安装 yo 和 generator-packing

```
npm install -g yo generator-packing
```

2. 之后就可以在任何需要的目录创建新工程了

```
yo packing
```
