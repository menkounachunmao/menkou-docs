<!--
 * @Author: xx
 * @Date: 2021-06-25 15:28:16
 * @LastEditors: 青峰
 * @LastEditTime: 2021-06-25 15:41:45
 * @FilePath: /vue-press/docs/css-doc/code-block.md
-->
[[toc]]

# 常见需求场景

## 阴影实现叠层显示

```css
box-shadow : 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2)
```

## 纯css实现滚动条

```html
<div class="indicator"></div>
```

```css
body {
    position: relative;
}
.indicator {
    position: absolute;
    top: 0; right: 0; left: 0; bottom: 0;
    background: linear-gradient(to right top, teal 50%, transparent 50%) no-repeat;
    background-size: 100% calc(100% - 100vh);
    z-index: 1;
    pointer-events: none;
    mix-blend-mode: darken;
}
.indicator::after {
    content: '';
    position: fixed;
    top: 5px; bottom: 0; right: 0; left: 0;
    background: #fff;
    z-index: 1;
}
```

## html 文字只显示一行或多行

1行表示

```css
 overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
   
 ```

2行表示

```css
 display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
```
