<!--
 * @Author: xx
 * @Date: 2021-06-28 11:43:01
 * @LastEditors: 青峰
 * @LastEditTime: 2021-06-28 14:32:16
 * @FilePath: /vue-press/docs/js-doc/this.md
-->

# This相关

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
