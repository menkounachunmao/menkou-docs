# 原生拖拽

## 可拖动

默认情况下，图片、链接、文本是可以拖动的。其他元素需要设置 `draggable`。

## 拖拽事件

拖拽元素

- `dragstart`
- `drag` 元素拖动期间会持续触发
- `dragend` 无论是有效放置目标还是无效都会触发

放置目标

- `dragenter`
- `dragover`
- `dragleave或drop` 拖出放置元素触发 dragleave

## 放置目标

当元素不可放置时，需要重写 `dragover` 和 `dragenter` 事件，并阻止默认行为 `preventDefault()` 使其可以用来放置。

## dataTransfer 对象

在拖拽时实现数据交换

`setData()` 和 `getData()`

`DataTransfer.dropEffect` 和 `DataTransfer.effectAllowed` 属性控制在拖放操作中给用户的反馈（视觉上显示不同光标）。

## 原生实现图片拖拽排序

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    div {
        width: 100px;
        height: 100px;
        margin: 15px;
    }
    .div1{
        background: red;
    }
    .div2{
        background: blue;
    }
    .div3{
        background: grey;
    }
</style>
<body>
    <div id="dragContainer">
        <ol>
            <li class="item"><div class="div1" draggable="true"></div></li>
            <li class="item"><div class="div2" draggable="true"></div></li>
            <li class="item"><div class="div3" draggable="true"></div></li>
        </ol>
    </div>
    <script>
        var originDom = null; // 当前移动的图片；
        init();
        // 初始化
        function init(){
           var dragContainerDom = document.getElementById('dragContainer');
           dragContainerDom.addEventListener('dragover',preventDefault);
           dragContainerDom.addEventListener('dragenter',preventDefault);
           dragContainerDom.addEventListener('dragstart',handlerStart);
           dragContainerDom.addEventListener('drop',handlerDrop)
        }

        // 拖拽开始事件，事件代理
        function handlerStart(e){
            originDom = e.target;
        }

        // 阻止默认事件
        function preventDefault(e) {
            e.preventDefault && e.preventDefault();
        }

        // 拖拽释放处理
        function handlerDrop(e){
            // 获取目标元素
            var tragetDom =  e.target; 
            // 获取目标元素父容器，用于添加拖拽的元素
            var originDomParent = originDom.parentNode;
            // 交换两个元素
            tragetDom.parentNode.appendChild(originDom);
            originDomParent.appendChild(tragetDom);
        }
    </script>
</body>
</html>
```
