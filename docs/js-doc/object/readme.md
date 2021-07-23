[[toc]]

# 对象

> 定义：无序的集合，其属性可以包过基本值、对象或者函数

## 语法

- 声明形式

```js
var myObj = { 
    key: value // ...
};
```

- 构造形式

```js
var myObj = new Object(); 
myObj.key = value;
```

## 内置对象

- String
- Number
- Boolean
- Object
- Function
- Array
- Date
- RegExp
- Error
  
null 和 undefined 没有对应的构造形式，它们只有文字形式。相反，Date 只有构造，没有 文字形式。

## 访问方式

- `.x` 属性访问
- `['x']` 键访问

## 属性

> 在对象中，属性名永远都是字符串。如果你使用 string（字面量）以外的其他值作为属性名，那它首先会被转换为一个字符串。

### 属性类型

两种属性：**数据属性**和**访问器属性**

### 数据属性/数据描述符

- [[Configurable]] 表示能否通过delete删除属性从而重新定义，能否修改属性的特性
- [[Enumerable]] 能否通过 ```for-in``` 循环返回属性
- [[Writable]] 能否修改属性的值
- [[Value]] 包含这个属性的数据值，读取时从这个位置读取；写入时把新值写入在这个位置，默认undefined

直接在对象上定义的属性，上面几个特征都为true,value为对应的值

要修改属性默认的特征，使用 **Object.defineProperty()** 方法

```js
var person = {};
Object.defineProperty(person, 'name', {
    writable: false,
    value: '张三'
})
console.log(person.name); // 张三
person.name = '李四';
console.log(person.name); // 张三
```

`Object.defineProperty()` 方法调用时如果不指定特征的默认值则都为false

`getOwnPropertyDescriptor` 查看属性的特征

```js
console.log(Object.getOwnPropertyDescriptor(book,'year'));

输出：
{ get: [Function: get],
  set: [Function: set],
  enumerable: true,
  configurable: true }
```

- [[Get]] 在读取属性时调用的函数；默认undefined
- [[Set]] 在写入属性时调用的函数；默认undefined

当把 `configurable` 属性设置为 `false` 后，就不能再变回可配置，此时除了把 `writable` 设置为 `false` 之外其他特征都不能修改

```js
var book = {
    _year: 2004,
    edition: 1
}
Object.defineProperty(book, 'year', {
    get: function () {
        return this._year;
    },
    set: function (value) {
        this._year = value;
        this.edition = value*10;
    },
    enumerable:true,
    configurable:true,
});

book.year = 2005;
console.log(book.edition);
console.log(book.year);
for(key in book){
console.log(key);
}

输出：
20050
2005
_year
edition
year
```

### 访问器属性/访问描述符

- [[Configurable]] 表示能否通过delete删除属性从而重新定义，能否修改属性的特性
- [[Enumerable]] 能否通过 ```for-in``` 循环返回属性
- [[Get]] 在读取属性时调用的函数；默认undefined
- [[Set]] 在写入属性时调用的函数；默认undefined

当把configurable 属性设置为false后，就不能再变回可配置，此时除了writable之外其他特征都不能修改

```js
var book = {
    _year: 2004,
    edition: 1
}
Object.defineProperty(book, 'year', {
    get: function () {
        return this._year;
    },
    set: function (value) {
        this._year = value;
        this.edition = value*10;
    },
    enumerable:true,
    configurable:true,
});

book.year = 2005;
console.log(book.edition);
console.log(book.year);
for(key in book){
console.log(key);
}

输出：
20050
2005
_year
edition
year
```

特征不设置时为false|undefined

### 不变性

- 对象常量

结合 `writable:false` 和 `configurable:false` 就可以创建一个真正的常量属性（不可修改、 重定义或者删除）：

- 禁止扩展

如果你想禁止一个对象添加新属性并且保留已有属性，可以使用 `Object.prevent Extensions(..)`：

- 密封

`Object.seal(..)` 这个方法实际上会在一个现有对象上调用 `Object.preventExtensions(..)` 并把所有现有属性标记为 `configurable:false`。密封之后不仅不能添加新属性，也不能重新配置或者删除任何现有属性（虽然可以 修改属性的值）。

- 冻结

`Object.freeze(..)` 会创建一个冻结对象，这个方法实际上会在一个现有对象上调用 `Object.seal(..)` 并把所有“数据访问”属性标记为 `writable:false`，这样就无法修改它们的值。

## 创建对象

[创建对象](./create.md)

## 原型

创建的每个函数都有一个prototype,指向函数的原型对象，所有原型对象都会自动获得一个constructor属性，这个属性包含一个指向prototype属性所在函数的指针(值回构造函数)，在脚本中无法访问[[Prototype]]

在对象中添加属性会**屏蔽**原型对象中保存的同名属性，即使设置为null也会，使用delete操作符可以重新访问原型中的属性

- 用来判断属性是否存在于对象实例上

`hasOwnProperty()`

- `in` 操作符

能访问到的属性都返回true(无论是否可枚举)

- 自定义用来判断是否只存在原型上

```js
function hasOwnProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object)
}
```

- 获取所有实例属性无论是否可以枚举

````Object.getOwnpropertyNames()````


- 检查对象之间的关系

```Foo.prototype.isPrototypeOf( a ); // true```