<!--
 * @Author: xx
 * @Date: 2021-06-25 16:05:11
 * @LastEditors: 青峰
 * @LastEditTime: 2021-06-25 16:17:38
 * @FilePath: /vue-press/docs/css-doc/css3.md
-->

[[toc]]

# css3

## 字体

### 使用自定义字体

> 这是一个叫做`@font-face` 的css规则，它允许网页开发者为其网页指定在线字体。也会收到同源限制

在@font-face 中自定义规则

```css
<style> 
@font-face
{
font-family: myFirstFont;
src: url('Sansation_Light.ttf'),
     url('Sansation_Light.eot'); /* IE9+ */
}

div
{
font-family:myFirstFont;
}
</style>
```

`Font-family`

所指定的字体名字将会被用于font或font-family属性

`src`

远程字体文件位置的URL或者用户计算机上的字体名称

## 文本效果

`text-shadow`

```css
text-overflow:ellipsis|clip;
```

```css
text-shadow: 5px 5px 5px #FF0000;
```

`word-break`

> 指定怎么在单词内断行

- normal 使用默认的断行规则。
- break-all 对于non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行。
- keep-all CJK 文本不断行。 Non-CJK 文本表现同 `normal`。

`overflow-wrap`（word-wrap）

> 与`word-break`相比，`overflow-wrap`仅在无法将整个单词放在自己的行而不会溢出的情况下才会产生中断。

- **normal** 表示在正常的单词结束处换行。
- **break-word** 表示如果行内没有多余的地方容纳该单词到结尾，则那些正常的不能被分割的单词会被强制分割换行。

## 背景

### 多背景图片

```css
background-image:url(bg_flower.gif),url(bg_flower_2.gif);
```

### background-clip

> 设置元素的背景（背景图片或颜色）是否延伸到边框下面

- border-box   背景延伸至边框外沿（但是在边框下层）
- padding-box 背景延伸至内边距（[`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding)）外沿。不会绘制到边框处。
- content-box 背景被裁剪至内容区（content box）外沿。
- text // 实验性 背景被裁剪成文字的前景色。

实现文字背景

```css
background-clip: text;
-webkit-background-clip: text;
color: transparent; // 透明
```

### background-origin

> `background-origin` 规定了指定背景图片 `background-image` 属性的原点位置的背景相对区域。当使用 background-attachment 为fixed时，该属性将被忽略不起作用

背景图片的摆放以border区域为参考

```css
border-box
```

背景图片的摆放以padding区域为参考

```css
padding-box
```

背景图片的摆放以content区域为参考

```css
content-box
```

### background-size

> 设置背景图片大小。图片可以保有其原有的尺寸，或者拉伸到新的尺寸，或者在保持其原有比例的同时缩放到元素的可用空间的尺寸。

- 使用关键词 `contain`  把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。(不一定会铺满)
- 使用关键词 `cover` 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。(铺满)，如果大于容器则展示部分
- 设定宽度和高度值 （只设置一个第二个就为auto）

多背景用逗号分隔

## 边框

### box-shadow

边框阴影

```css
box-shadow: h-shadow v-shadow blur spread color inset;
```

| *h-shadow* | 必需。水平阴影的位置。允许负值。         |
| ---------- | :--------------------------------------- |
| *v-shadow* | 必需。垂直阴影的位置。允许负值。         |
| *blur*     | 可选。模糊距离。                         |
| *spread*   | 可选。阴影的尺寸。                       |
| *color*    | 可选。阴影的颜色。请参阅 CSS 颜色值。    |
| inset      | 可选。将外部阴影 (outset) 改为内部阴影。 |

### border-radius

```css
border-radius: length|% length|% length|% length|%; // 上右下左
```

### border-image

| 值                    | 描述                                                         |
| :-------------------- | :----------------------------------------------------------- |
| *border-image-source* | 用在边框的图片的路径。                                       |
| *border-image-slice*  | 图片边框向内偏移。                                           |
| *border-image-width*  | 图片边框的宽度。                                             |
| *border-image-outset* | 边框图像区域超出边框的量。                                   |
| *border-image-repeat* | 图像边框是否应平铺(repeated)、铺满(rounded)或拉伸(stretched)。 |

## 图形变换

`translate`

元素从其当前位置移动，根据给定的 left（x 坐标） 和 top（y 坐标）

```css
transform: translate(120px, 50%);
```

`rotate()`

元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。

```css
transform: rotate(30deg);
```

`scale()`

修改元素的大小,当坐标值处于区间 [`-1, 1]` 之外时，该变换将在相应的坐标方向上放大该元素，当处在区间之中时，该变换将在相应的坐标方向上缩小该元素。当值为1时将不进行任何处理，当为负数时，将进行*像素点反射*之后再进行大小的修改。

```css
scale(sx, sy)
```

`skew()`

元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数

```css
transform: skew(30deg,20deg);
```

也可同时使用

```css
transform: translateX(10px) rotate(10deg) translateY(5px);
```

### 3D变化

`rotate3d`
``
rotate3d(x, y, z, a)
``

- *x* 可以是0到1之间的数值，表示旋转轴X坐标方向的矢量。
- *y*  可以是0到1之间的数值，表示旋转轴Y坐标方向的矢量。
- *z* 可以是0到1之间的数值，表示旋转轴Z坐标方向的矢量。
- *a*表示旋转角度。正的角度值表示顺时针旋转，负值表示逆时针旋转。

## 过渡

`transition`

> 过渡可以为一个元素在不同状态之间切换的时候定义不同的过渡效果

transition 属性是一个简写属性，用于设置下面四个过渡属性：

`transition-property`

​ 规定应用过渡效果的 CSS 属性的名称

- none 没有属性会获得过渡效果
- all 所有属性都将获得过渡效果
- *property* 定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔

`transition-duration`

​ 完成过渡效果需要花费的时间

```css
transition-duration: time;
```

`transition-timing-function`

​ 过渡效果的速度曲线

| 值                                        | 描述                                                         |
| :---------------------------------------- | :----------------------------------------------------------- |
| linear                                    | 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。 |
| ease                                      | 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。 |
| ease-in                                   | 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。  |
| ease-out                                  | 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。  |
| ease-in-out                               | 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。 |
| cubic-bezier(*n*,*n*,*n*,*n*)(贝塞尔曲线) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。 |

`transition-delay`

过渡效果何时开始

```css
transition-delay: time; // 以秒或毫秒计
```
