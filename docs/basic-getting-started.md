---
id: getting-started
title: 概述
layout: docs
category: 基础知识
next: installation
permalink: docs/getting-started.html
---

Packing 是一个基于 webpack 的前端开发环境和项目构建工具。她来源于实际工作，根据公司的实际情况，对 webpack 复杂的配置做了大量的预设置工作，让工程师不必关注 webpack 所有的配置，只需要了解少量和项目相关的配置就能够进行开发，降低了 webpack 的使用门槛，从而达到在团队中快速推广新技术的目录。

Packing 还对多项工程相关的信息做了初始化，通过 generator-packing，工程师能在30秒完成新工程的搭建，工程内置了 eslint、babel 等流行的前端工具，所有代码都支持ES6书写，让工程师有良好的开发体验。

Packing 还针对以往项目中遇到的通用问题进行了抽象和封装，如：数据模拟、URL 转发、模块热替换、配置文件环境差异化等。

## 目录

- 基础知识 basic
    - 介绍 basic-getting-started
    - 安装 basic-installation
    - 命令 basic-commands
    - 配置 basic-configuration
    - 编译 basic-build
- 使用指南 guides
    - 路由 guides-router
    - 数据模拟 guides-mock
    - 打包公共代码 guides-vender
    - profiles guides-profiles
    - eslint guides-eslint
    - ES6 开发 guides-es6
    - 引用静态资源 guides-static
    - Jenkins 发布 guides-jenkins
    - 升级到 v2 guides-migrating-v2
    - Changelog guides-change-log
- 常见问题
    - 找不到 webpackJsonp
    - __webpack_require__ 未定义 webpack-require
    - 编译服务器上提示找不到某些依赖包 faq-dev-dependencies
    - 单独编译 CSS faq-build-css
    - npm-cache 解压失败 faq-npm-cache
    -
