### JavaScript Demo: Promise.then()
refer:
[参考1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
[参考2](http://siwei.me/blog/posts/es6-promise-new-promise-resolve)

Promise 实例的 then() 方法最多接受两个参数：Promise 的已完成和已拒绝情况的回调函数。
它会立即返回一个等效的 Promise 对象，允许链接对其他 Promise 方法的调用。
经常用于做一些比较耗时的异步操作, 常见的是HTTP中:
例如：new Promise(发送http请求 ).then( 处理返回的response).fail(如果失败了该怎么操作)
有3个状态：
 resove (正常) ,
 reject （出错) ,
 pending ( 运行中)

demo1:
vim promise_then.js
```
const promise1 = new Promise((resolve, reject) => {
  resolve('Success!');
});

promise1.then((value) => {
  console.log(value);
  // Expected output: "Success!"
});
```
运行:
```
node promise_then.js
```
输出：
```
> "Success!"
```


demo2:
vim promise_then_2.js

```
let result = new Promise( (resolve, reject ) => {
  let result = 0
  setTimeout( () => {
    console.info("sleep n ms...")
    result = 200
    resolve(result)   // 注意，这里的 resolve, 就相当于是返回了。resolve和reject必须返回一个才行。
  }, 3000)
})

result.then( (temp) => {
  console.info("result : ", temp)
})
```

运行:
```
node promise_then_2.js
```
输出:

```
sleep n ms...
result :  200
```
### axios
如果使用axios, 需要安装依赖:
```
npm install axios
```
