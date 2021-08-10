<!--
 * @Author: xx
 * @Date: 2021-06-28 11:43:01
 * @LastEditors: 青峰
 * @LastEditTime: 2021-06-28 14:32:16
 * @FilePath: /vue-press/docs/js-doc/this.md
-->

# This相关

1. this不是指向自身。
2. 不指向函数的词法作用域。

```js
function foo() { 
  var a = 2; 
  this.bar();
}
function bar() { 
  console.log( this.a );
} 
foo(); // ReferenceError: a is not defined
```

## this机制

this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

## 绑定规则

找调用位置 -> 套用规则

规则优先级：new > 显示绑定 > 隐式绑定 > 默认绑定

- 默认规则：

对直接使用不带任何修饰的函数引用进行调用，采用默认绑定，this指向全局对象。

- 隐式绑定：

当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象，比如 `foo.bar()` `bar()` 里面的 `this` 指向foo。

- 强制绑定：

通过 `apply()`和`call`强制给this绑定对象

- new绑定：
  
  new对函数进行构造调用时会把新创建的对象绑定到 `this`

绑定例外：

1. `var bar = foo.bind( null, 2 );` 强绑定传入null,会采用默认绑定规则。

2. 间接引用：

```js
function foo() { 
  console.log( this.a );
}
  var a = 2; 
  var o = { a: 3, foo: foo }; 
  var p = { a: 4 };
  o.foo(); // 3 
  (p.foo = o.foo)(); // 2
```

赋值表达式 p.foo = o.foo 的返回值是目标函数的引用，因此调用位置是 foo() 而不是 p.foo() 或者 o.foo()。根据我们之前说过的，这里会应用默认绑定。

## 箭头函数

箭头函数不使用 this 的四种标准规则，而是根据外层（函数或者全局）作用域来决 定 this。

## Call

### call简单实现

1. 将函数设为对象的属性
2. 执行该函数
3. 删除该函数

```js
Function.prototype.call2 = function (obj){
    // 如果没传入者绑定window
    obj = obj || window;
    // 构建参数数组
    var args = [];
    for(var i= 1; i< arguments.length; i++){
        args.push('arguments[' + i + ']');
    }
    // 获取调用call的函数，用this可以获取
    obj.fn = this;
    obj.fn();
    // 拼接参数执行
    var result = eval('obj.fn(' + args + ')');
    // 删除临时属性
    delete obj.fn;
    return result;
}

var value = 2;

var obj = {value: 1}

function bar (name,age){
    return {
        value: this.value,
        name: name,
        age: age
      }
}

bar.call2(null)

console.log(bar.call2(obj, 'kevin', 18));
```

## Apply

### apply简单实现

```js
var value = 1;

var test = {
 value: 'test'
};

function printValue(name, age) {
 return {
        value: this.value,
        name: name,
        age: age
    }
}

Function.prototype.apply2 = function(obj,arrs){
  var obj = obj || window;
  obj.fn = this;
  if(!arrs){
    obj.fn();
     }else{
       var arrEval = [];
       for(var i = 0; i < arrs.length; i++){
         arrEval.push('arrs[' + i +']');
       }
       console.log(arrEval);
      var result = eval('obj.fn(' + arrEval +')')
     }
  delete obj.fn;
  return result;
}
console.log(printValue.apply2(test,['sdf','fsdf']))

```
