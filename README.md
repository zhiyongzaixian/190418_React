## React发送ajax请求
## axios
  1. 专门用于发送ajax请求的库
  2. 基于promise对象封装的
  3. 用法
      -  npm install axios
      -  import axios from 'axios'
      
  4. 语法
      
      
       axios.get('/user?ID=12345')
         .then(function (response) {
           // handle success
           console.log(response);
         })
         .catch(function (error) {
           // handle error
           console.log(error);
         })
         .finally(function () {
           // always executed
         });
         
         
## pubsub-js
  1. npm install pubsub-js
  2. 消息订阅发布：
      - 定报纸(定牛奶) --- 订阅方 --- 获取数据 --- PubSub.subscribe(事件名，事件的回调函数)
      - 送报纸(送牛奶) --- 发布方 --- 提供数据(数据源) --- PubSub.publish(事件名，发布的数据)
  3. 自定义事件机制
      - 绑定事件
          - 事件名
          - 事件的回调函数(1. 随时知道事件什么时候被触发2. 触发事件提供的参数对象)
      - 触发事件
          - 事件名
          - 事件参数对象 === 标准事件的event对象
  4.