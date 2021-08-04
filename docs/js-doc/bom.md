# BOM（浏览器对象模型）

## window 对象

> 表示浏览器的一个实例，即使 JavaScript 访问浏览器窗口的一个接口，又是 ECM 规定的 Global 对象。

### 框架

如果页面中包含框架，则每个框架都拥有自己的 `window` 对象，并且保存在 `iframe` 集合中。

`top` 始终指向最高（最外）层的框架。
`parent` 指向当前框架的直接上层框架。

### 窗口位置

`screenLeft` 和 `screenTop` 浏览器距离显示器左上角的位置。

`moveTo` 和 `moveBy`

```js
window.moveTo(0,0)
```

移动窗口，一般被浏览器禁用。

### 窗口大小

`innerWidth` 和 `innerHeight` 返回页面视图区的大小。

`resizeTo()` 和 `resizeBy()` 调整浏览器窗口的大小，一般被禁用。

### 导航和打开新窗口

`window.open`

四个参数：

1. url 需要加载的地址
2. 窗口目标（窗口或者框架名或者 `_self`、`_parent`、`_top`、`_blank`）
3. 标签页配置，用逗号隔开
4. 是否取代当前浏览记录,布尔值（非打开新窗口下有效）

该方法返回一个指向新窗口的引用。

`window.close()` 关闭窗口（只适用于 `open()` 打开的窗口）

### 间接调用和超时调用

`setTimeout()`

两个参数：

- 回调函数或者字符串（不建议）。
- 等待的毫秒数

返回一个 ID

`clearTimeout(id)` 取消超时调用

`setInterval` 和 `clearInterval` 设置和取消间接调用。

### 系统对话框

- `alert()`

生成一个只有`ok`按钮的确认框。

- `confirm`

生成一个带有确认和取消的对话框，可接受其返回值

```js
if(confirm('are you sure ?')){
    console.log(1)
}else{
    console.log(0)
}
```

- `prompt`

生成一个带输入框的对话框,接受两个参数，文本提示和输入框的默认值

### location 对象

> 即可以从 `window` 中访问到，也可以从 `document` 中访问到，指向同一个对象

- hash
- host 服务器名称和端口号
- hostname 服务器名称
- href 完整 URL
- pathname
- port 端口号
- protocol 协议
- search 查询字符串，以问好开头

改变location的属性会重新加载界面，会新加一条历史记录。`hash` 除外

`assign` 打开新URL并且在浏览器生成一条记录。将 `location.href` 和 `window.location` 也会调用该方法

`replace` 替换当前界面

`reload` 重载当前界面

### navigator 对象

用来标识客户端浏览器

常用属性:

- language
- platform 浏览器所在系统平台
- onLine 是否连网
- userAgent 浏览器的用户代理字符串

### history

保存用户的上网记录，从窗口被打开的一刻开始，出于安全无法得知具体访问过的 url 但是可以通过 `go()` 方法前进或者后退（负值表示向后），也可以传入字符串，此时浏览器会跳转到历史记录中包含该字符串的第一个位置。还可以通过 `length` 访问其长度。

### screen

记录和显示器相关的属性
