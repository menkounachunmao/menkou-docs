<!--
 * @Author: xx
 * @Date: 2021-06-25 16:57:56
 * @LastEditors: 青峰
 * @LastEditTime: 2021-06-25 16:59:11
 * @FilePath: /vue-press/docs/web-socket-doc/README.md
-->

# WebSocket

## 服务端

1, 使用 [websocketd](http://websocketd.com/) 作为服务器

```bash
brew install websocketd    
```

2, 创建服务器脚本

```bash
#!/bin/bash

# Count from 1 to 10 with a sleep
for ((COUNT = 1; COUNT <= 10; COUNT++)); do
  echo $COUNT
  sleep 0.5
done
```

```chmod +x 文件名.sh```

3, 运行服务器

```bash
websocketd --port=8080 ./文件名.sh
```

## 客户端

```js
  var ws = new WebSocket('ws://localhost:8080/');

        ws.onopen = function (evt) {
            console.log("Connection open ...");
            ws.send("Hello WebSockets!");
        };

        ws.onmessage = function (evt) {
            console.log("Received Message: " + evt.data);
            //   ws.close();
        };

        ws.onclose = function (evt) {
            console.log("Connection closed.");
        };      
```
