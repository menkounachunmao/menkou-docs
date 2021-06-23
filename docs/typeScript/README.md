<!--
 * @Author: xx
 * @Date: 2021-06-23 18:02:04
 * @LastEditors: 青峰
 * @LastEditTime: 2021-06-23 18:20:31
 * @FilePath: /vue-press/docs/TypeScript/README.md
-->

# TypeScript

## Ts优点

- 类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了
- 可以在编译阶段就发现大部分错误，这总比在运行时候出错好
- 增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等

## 关于类型

### 1，基本数据类型

​   boolean，number，string，void (只能赋值为null和undefined)，null，undefined

### 2，联合属性

​当```TypeScript```不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的,所有类型里共有的属性或方法。

```javascript
function getLength(something: string | number): number {
    return something.length;
}

// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
```

​联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型

```javascript
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.
```

### 3，对象的类型——接口

```javascript
interface Person {
    name: string;
    readonly id: number; // 表示只读
    age?: number; // 表示可选
    [propName: string]: any; // 表示可以有任意属性，但是得包括已经定义的类型,如果有可选属性要加上undefined
}
```

### 4，数组类型

​    1. 类型 + []  表示

```javascript
let fibonacci: number[] = [1, 1, 2, 3, 5];
```

​    2. 泛型表示

```javascript
let fibonacci: Array<number> = [1, 1, 2, 3, 5]; 
```

​    3. 接口表示 (类数组)

```javascript
function sum() {
    let args: {
        [index: number]: number; // 索引的类型是数字时，那么值的类型必须是数字。
        length: number;
        callee: Function;
    } = arguments;
}
```

### 5，函数类型

```javascript
function buildName(firstName: string, lastName?: string):string {}
```

​    通过接口定义函数表达式

```javascript
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

## 类型别名

```javascript
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```

## 字符串字面量类型

> 字符串字面量类型用来约束取值只能是某几个字符串中的一个。

```javascript
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

```

### 类型断言 as

>将一个联合类型断言为其中一个类型。
>类型断言不是类型转换，类型断言只会影响 TypeScript 编译时的类型

1. 联合类型可以被断言为其中一个类型

2. 父类可以被断言为子类

3. 任何类型都可以被断言为 any

4. any 可以被断言为任何类型

5. 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可

Tips

1. 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型。
2. 如果没有明确的指定类型，会按照定义时赋值的内容进行推断，如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查。

   ​

   ​

## 元组

> 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。

```javascript
let tom: [string, number] = ['Tom', 25];
```

## 枚举

普通枚举

```javascript
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
```

常量枚举

```javascript
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```

常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。

## 类

> 类（Class）：定义了一件事物的抽象特点，包含它的属性和方法
> 对象（Object）：类的实例，通过 new 生成

- 面向对象（OOP）的三大特性：封装、继承、多态
- 存取器（getter & setter）：用以改变属性的读取和赋值行为
- 修饰符（Modifiers）：public,private,project
- 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
- 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口

**Tips:**

1. 接口继承接口
2. 接口继承类 (声明类时会自动声明同名的类型)

## 泛型

> 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

```javascript
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray<string>(3, 'x'); // ['x', 'x', 'x'] // <string>可省略
```

### 泛型接口

```javascript
interface CreateArrayFunc<T> {
    (length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc<any>;
createArray = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
```

## 声明文件

### declare

- declare var 声明全局变量
- declare function 声明全局方法
- declare class 声明全局类
- declare enum 声明全局枚举类型
- declare namespace 声明（含有子属性的）全局对象
- interface 和 type 声明全局类型
