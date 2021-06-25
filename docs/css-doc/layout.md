<!--
 * @Author: xx
 * @Date: 2021-06-25 11:11:02
 * @LastEditors: 青峰
 * @LastEditTime: 2021-06-25 11:29:23
 * @FilePath: /vue-press/docs/css-doc/layout.md
-->

# 布局

## Flex布局

[mdn解释](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

### 1. 主轴和交叉轴

1. 主轴由 **flex-direction** 定义

- row--------------inline方向，水平
- row-reverse------从相反方向开始
- column-----------block 排列的方向，垂直
- column-reverse

2.交叉轴垂直于主轴

- 主轴水平交叉轴的方向就是沿着列向下的
- 如果主轴方向设成了 column 或者 column-reverse，交叉轴就是水平方向。

### 2. 起始线和终止线

如果 flex-direction 是 row ，并且我是在书写英文，那么主轴的起始线是左边，终止线是右边
![image](./assets/flex.png)

### 3. flex容器

我们把一个容器的 display 属性值改为 flex 或者 inline-flex。 完成这一步之后，容器中的直系子元素就会变为 flex 元素。所有CSS属性都会有一个初始值，所以 flex 容器中的所有 flex 元素都会有下列行为：

- 元素排列为一行 (flex-direction 属性的初始值是 row)。
- 元素从主轴的起始线开始。
- 元素不会在主维度方向拉伸，但是可以缩小。
- 元素被拉伸来填充交叉轴大小。
- flex-basis 属性为 auto。
- flex-wrap 属性为 nowrap。

```flex-direction```

> 属性决定主轴的方向

- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，始线和终止线交换，起点在右端。
- column：主轴交叉轴交换，主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。

```flex-wrap```

> 实现多行Flex容器,多主轴

- nowrap 不换行
- wrap 换行，第一行在上方
- wrap-reverse 换行，第一行在下方

```flex-flow```

> 属性简写 ``flex-direction`` 和 ```flex-wrap``` 组合为简写属性 ```flex-flow```

```css
flex-flow: <flex-direction> || <flex-wrap>;
flex-flow:row wrap-reverse;
```

```justify-content```

> 定义主轴上的对齐方式（不是定义水平居中或垂直居中，取决于主轴的方向）

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

```align-items```

> 属性定义项目在交叉轴上如何对齐

- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

```align-content```

> 多根轴线的对齐方式

- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个交叉轴。

### 4 flex元素属性

改变了 flex 容器中的可用空间的行为

简写 Flex

```css
 flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```

```flex-basissfad```

定义元素的空间大小,默认值是 auto,如果没有给元素设定尺寸，flex-basis 的值采用元素内容的尺寸

```flex-grow```

定义增加空间,如果第一个元素 flex-grow 值为2， 其他元素值为1，则第一个元素将占有2/4 另外两个元素各占有1/4。

```flex-shrink```

定义缩小空间

```align-self```

属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```
