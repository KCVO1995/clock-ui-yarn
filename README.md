# 轱辘 - 一个 Vue UI 组件

[![Build Status](https://www.travis-ci.org/KCVO1995/gulu.svg?branch=master)](https://www.travis-ci.org/KCVO1995/gulu)

![npm](https://img.shields.io/npm/dw/gulu-kcvo)

## 介绍

## 开始使用

* ### 安装

1. 使用本框架前，请在 CSS 中开启 border-box

```css
* {box-sizing: border-box}
```
IE 8 及以上浏览器都支持此样式

你还需要设置默认颜色等变量 (后续会改为 SCSS 变量)
```css
:root{
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666;
    }
```
IE 15 及以上浏览器都支持此样式

2. 安装 gulu-kcvo
`npm i --save gulu-kcvo`

3. 引入 gulu-kcvo
```javascript
import {Button, ButtonGroup, Icon} from 'gulu-kcvo'
import 'gulu-kcvo/dist/index.css'

export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-icon': Icon,
    'g-button-group': ButtonGroup
  }
}
```


## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码