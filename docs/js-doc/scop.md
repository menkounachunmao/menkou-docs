[[toc]]

# 作用域

## 作用域是什么？

> 作用域是一套规则，用于确定在何处以及如何查找变量（标识符）。

通常编译过程：分词/词法分析-解析/语法分析-代码生成。

### 概念

js 采用**词法作用域**

定义在词法阶段的作用域，词法作用域是在写代码时将变量和块作用域写在哪里来决定的，因此当词法分析器处理代码时会保持作用域 不变（大部分情况下是这样的）。

### 查找标识符

始终从运行时所处的最内部作用域开始，逐级向外或者说向上进行,直到第一个匹配的标识符时停止。在多层的嵌套作用域中可以定义同名的 标识符，这叫作“遮蔽效应”（内部的标识符“遮蔽”了外部的标识符）。

无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处 的位置决定。

词法作用域查找只会查找一级标识符，比如 a、b 和 c。如果代码中引用了 foo.bar.baz， 词法作用域查找只会试图查找 foo 标识符，找到这个变量后，`对象属性访问规则`会分别接 管对 bar 和 baz 属性的访问。

### 欺骗词法

- eval
- with

会影响性能，JavaScript 引擎会在编译阶段进行数项的性能优化。其中有些优化依赖于能够根据代码的 词法进行静态分析，并预先确定所有变量和函数的定义位置，才能在执行过程中快速找到 标识符。

## 函数作用域

> 函数作用域的含义是指，属于这个函数的全部变量都可以在整个函数的范围内使用及复 用（事实上在嵌套的作用域中也可以使用）

### 函数表达式

区分函数声明和表达式最简单的方法是看 function 关键字出现在声明中的位 置（不仅仅是一行代码，而是整个声明中的位置）。如果 function 是声明中 的第一个词，那么就是一个函数声明，否则就是一个函数表达式。

```(function foo(){ .. })``` 作为函数表达式意味着 foo 只能在 .. 所代表的位置中 被访问，外部作用域则不行。foo 变量名被隐藏在自身中意味着不会非必要地污染外部作 用域。

### 匿名和具名

```function()..``` 没有名称标识符，这叫作匿名函数表达式，函数表达式可以是匿名的， 而函数声明则不可以省略函数名——在 JavaScript 的语法中这是非法的。

匿名函数缺点：

- 匿名函数在栈追踪中不会显示出有意义的函数名，使得调试很困难。
- 不能自身引用
- 降低代码可读性

### 立即执行函数（IIFE）

```javascript
var a = 2; 
(function foo() {
 var a = 3; console.log( a ); // 3
})(); 
console.log( a ); // 2
```

由于函数被包含在一对 ( ) 括号内部，因此成为了一个表达式，通过在末尾加上另外一个 ( ) 可以立即执行这个函数，比如 (function foo(){ .. })()。第一个 ( ) 将函数变成表 达式，第二个 ( ) 执行了这个函数。

另一种形式：```(function(){ .. }())```，将括号写在里面。

倒置代码运行顺序：

```javascript
(function IIFE( def ) { 
    def( window );
})(function def( global ) {
 var a = 3; console.log( a ); // 3 console.log( global.a ); // 2
});
```

## 块作用域

```javascript
for (var i=0; i<10; i++) { 
    console.log( i );
}
```

`i`并不是定义在for循环里面，而是和for同级的作用域中。

```javascript
var foo = true;
if (foo) { 
    var bar = foo * 2; 
    bar = something( bar ); 
    console.log( bar );
}
```

使用`var`声明`bar`也不属于`if`里面，属于外面的作用域。

### 实现块级作用域

#### with

用 with 从对象中创建出的作用域仅在 with 声明中而非外 部作用域中有效。

#### try/catch

`catch`的参数只在内部有效。

#### let，const

es6新的变量申明方式，let 关键字可以将变量绑定到所在的任意作用域中（通常是 { .. } 内部）。换句话说，`let` 为其声明的变量`隐式`地了所在的块作用域。

显示的创建块

```js
if (foo) { 
    { 
        let bar = foo * 2; // <-- 显式的块
        bar = something( bar ); 
        console.log( bar );
    }
} 
console.log( bar ); // ReferenceError
```

## 提升

> 无论作用域中的声明出现在什么地方，都将在代码本身被执行前首先进行处理。 可以将这个过程形象地想象成所有的声明（变量和函数）都会被“移动”到各自作用域的 最顶端，这个过程被称为提升。

变量提升：

```js
    a = 2; 
    var a; // 会被提升至作用域上方
    console.log( a );
```

当你看到 ```var a = 2;``` 时，可能会认为这是一个声明。但 JavaScript 实际上会将其看成两个 声明：```var a;``` 和 ```a = 2;```。第一个定义声明是在编译阶段进行的。第二个赋值声明会被留在原地等待执行阶段。

函数提升：

函数声明会被提升到最上方，函数表达式不会

```js
    foo(); // 不是 ReferenceError, 而是 TypeError!
    var foo = function bar() { // ...
    };
```

`foo`是变量，会被提升，但不会被赋值，对`undefined`进行函数调用会导致非法操作。

函数声明会优于变量被提升，同名的变量**忽略**，同名的函数**覆盖**。

## 闭包

产生条件： 当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。

```js
function foo() { 
    var a = 2;
    function bar() { 
        console.log( a );
    }
    return bar; 
}
var baz = foo(); baz(); // 2 —— 朋友，这就是闭包的效果。
```

### 闭包和循环

经典场景

这段代码行为的预期是分别输出数字 1~5，每秒一次，每次一个。

```js
for (var i=1; i<=5; i++) { 
    setTimeout( 
        function timer() { 
            console.log( i );
        }, i*1000 ); 
    }
```

这段代码在运行时会以每秒一次的频率输出五次 6。因为都在全局作用域中共享同一个i。循环结束后i为6

- 使用立即执行函数解决

```js
for (var i=1; i<=5; i++) { 
    (function(j) { 
        setTimeout(function timer() { 
                console.log( j );
            }, j*1000 ); 
    })( i ); 
}
```

在迭代内使用 IIFE 会为每个迭代都生成一个新的作用域，使得延迟函数的回调可以将新的作用域封闭在每个迭代内部，每个迭代中都会含有一个具有正确值的变量供我们访问。

- 使用let解决

```js
for (let i=1; i<=5; i++) { 
    setTimeout( function timer() { console.log( i );
}, i*1000 ); }
```

同样在与利用let的特性为每次循环来构建新的作用域。

### 模块

模块有两个主要特征：

1. 为创建内部作用域而调用了一个包装函数；
2. 包装函数的返回 值必须至少包括一个对内部函数的引用，这样就会创建涵盖整个包装函数内部作用域的闭 包。

保证内部数据隐秘而私有，只提供公用的API。

```js
function CoolModule() { 
    var something = "cool";
    var another = [1, 2, 3];
    function doSomething() { 
        console.log( something );
    }
    function doAnother() { 
        console.log( another.join( " ! " ) );
    }
    return { 
        doSomething: doSomething, 
        doAnother: doAnother
    }; 
} 
var foo = CoolModule();
foo.doSomething(); // cool foo.doAnother(); // 1 ! 2 ! 3
```

## 执行环境

### 作用域链
> 保证对执行环境有权访问的所有变量和函数的有序访问。