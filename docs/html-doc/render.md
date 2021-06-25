<!--
 * @Author: xx
 * @Date: 2021-06-25 16:19:37
 * @LastEditors: 青峰
 * @LastEditTime: 2021-06-25 16:42:22
 * @FilePath: /vue-press/docs/html-doc/render.md
-->

# 渲染

## HTML解析过程

### HTML解析过程

构建DOM树 ——》 构建CSSOM ——》根据DOM树和CSSOM树构建render树 ——》有了render树就开始布局Layout ——》 最后绘制paint

#### 1、构建DOM树

将HTML构建成一个DOM树，也就是构建节点，把所有的节点都构建出来。

#### 2、构建CSSOM

解析css去构建CSSOM树

#### 3、构建render树

DOM已经构建好了，css也有了，浏览器就会根据这两个来构造render树，浏览器就知道了有哪些节点、各个节点的CSS定义以及他们的从属关系。

#### 4、布局

当render树有了，通过render树，浏览器开始计算各个节点的位置和样式。

#### 5、绘制

遍历render树，在页面上绘制每个节点。

#### 6、重排reflow

当render树绘制完成之后，比如JavaScript改变样式或添加节点，这时候render树就需要重新计算。

#### 7、重绘repaint

既然重排了，最后当然得重新绘制页面。

### HTML整个解析过程看起来很简单，但是我们要知道解析过程中css、js和dom的加载顺序。我们都知道HTML是自上往下解析的，在解析过程中

1. 如果遇到link和style，那就就会去下载这些外部的css资源，但是css跟DOM的构建是并行的，就是说不会阻塞DOM树的构建。
2. 如果遇到script，那么页面就会把控制权交给JavaScript，直到脚本加载完毕或者是执行完毕。
3. 页面的渲染是依靠render树，也就是说如果css没有加载完成，页面也不会渲染显示。
4. JavaScript执行过程中有可能需要改变样式，所以css加载也会阻塞JavaScript的加载。
5. JavaScript执行过程中如果操作DOM，但是DOM树又是在JavaScript之后才能构建，就会报错，找不到节点。

这就是HTML的渲染过程，因为DOM和css并行构建，我们会把css用外部引入，可以更快的构建DOM，因为JavaScript会阻塞DOM和 css构建，且操作DOM一定要在DOM构建完成，我们选择把script放在最下面。如果我们过多的在render渲染完成后改变render，那么重排和重绘就会一直被动重发执行，这也会造成渲染速度变慢。
