<!--
 * @Author: xx
 * @Date: 2021-06-25 16:45:26
 * @LastEditors: 青峰
 * @LastEditTime: 2021-06-25 16:46:31
 * @FilePath: /vue-press/docs/jest-doc/README.md
-->

# JEST

## 简单使用

### 安装

```bash
npm install --save-dev jest
```

简单例子

```bash
 test('adds 1 + 2 to equal 3', () => {
     expect(sum(1, 2)).toBe(3);
   });
```

### 匹配器

对象用equal

```bash
 expect(data).toEqual({a:1,b:2});
```

 不是0

 ```bash
  expect(i+j).not.toBe(0);
 ```

  超过3

  ```bash
  expect(value).toBeGreaterThan(3);
  ```

  [更多匹配器](https://jestjs.io/docs/zh-Hans/expect)

### 异步测试

```javascript
  test('test promise',() =>{
return expect(testPromise()).resolves.toBe('hello');
  })

  function testPromise(){
return new Promise((resolve)=>{
    setTimeout(() => {
        resolve('hello');
    }, 1000);
});
  }
```

也可以使用 asyn awit 方式

### 前置后置方法

> 可用于代码复用以及测试准备工作

```javascript
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
```

describe用于声明作用域，默认情况下，`before` 和 `after` 的块可以应用到文件中的每个测试。 此外可以通过 `describe` 块来将测试分组。 当 `before` 和 `after` 的块在 `describe` 块内部时，则其只适用于该 `describe` 块内的测试。
