# 继承

> JavaScrript中只有实现继承，依靠原型链来实现，或者叫做委托，因为js继承时并没有复制对象，只有依靠原型链委托实现伪继承

## 1. 原型链实现继承

> 将一个类型的实例赋值给另一个构造函数的原型

```js
function SuperType () {
    this.foo = true;
}

SuperType.prototype.getFooValue = function () {
    return this.foo;
}

function SubType() {
this.subFoo = false;
}
// 继承SuperType
SubType.prototype = new SuperType();

SuperType.prototype.getSubFooValue = function () {
    return this.subFoo;
}

var instance = new SubType();
console.log(instance.getFooValue()); // true
```

缺点：引用类型会被共享

## 2. 构造函数实现继承

```js
function SuperType (name) {
    this.name = name;
    this.color = ['red', 'blue', 'green'];
}

function subType () {
    // 继承了SuperType,同时传递参数
    SuperType.call(this, 'Lihua');
}

var instance1 = new subType();
instance1.color.push('black');
console.log(instance1.color); // [ 'red', 'blue', 'green', 'black' ]
var instance2 = new subType();
console.log(instance2.color); // [ 'red', 'blue', 'green' ]
console.log(instance1 instanceof SuperType); // false
```

构造函数模式可以实现子类型构造函数向超类构造函数传递参数

问题：方法在构造函数中定义，无法进方法复用

### 3. 组合继承（原型链 + 借用构造函数）

```js

function SuperType(name) {
    this.name = name;
    this.color = ['red','black','green'];
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
}

function SubType(name) {
    SuperType.call(this, name);
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
var instance1 = new SubType('张三');
instance1.sayName();
instance1.color.push('yellow');

var instance2 = new SubType('李四');
console.log(instance2.color);
```

问题：会调用两次超类型的构造函数

### 4.寄生模式

```js

function createAnother(original) {
    var clone = Object.create(original);
    clone.sayHi = function () {
        console.log('Hi~');
    }
    return clone;
}

var person = {
    name: 'LiLi',
    age: 3,
};

var anotherPerson = createAnother(person);
anotherPerson.sayHi();
```

## ⭐ 5.寄生组合式继承

> 基本步骤：创建对象-> 增强对象-> 指定对象

```js
function parasitic (target,original) {
var prototype = Object(original.prototype);
prototype.constructor = target;
target.prototype = prototype;
}

function SuperType(name,age) {
this.name = name;
this.age = age;
this.friends = ['lic','aric']
}

SuperType.prototype.sayHi = function() {
    console.log(`我是${this.name},我今年${this.age}岁`);
}

function SubType (name,age) {
SuperType.call(this,name,age);
}

parasitic(SubType,SuperType);

var instance = new SubType('张三', 3);
instance.sayHi();
```
