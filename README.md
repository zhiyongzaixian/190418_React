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
  
## 路由: 
  1. 理解路由
      - 后端路由
          - 注册： 服务器端注册接口地址
          - 请求： 前端请求该地址
          - 传输数据： json
      - 前端路由
          - 注册： 前端注册
          - 请求： 前端请求
          - 传输数据： 组件
  2. 家里上网
    1. 路由器： 管理路由请求(路由地址)，分发路由
    2. 网线
    3. 发送请求
  3. router路由 react-router-dom
    1. 路由器: 1)	<BrowserRouter>2)	<HashRouter>
    2. 路由：3)	<Route path='路由路径' component={路由组件}>
        - 通过浏览器测试路由是否注册成功
    3. 路由链接: <Link to='路由路径'/> <NavLink to='路由路径' activeClassName='路由地址生效后的动态class类，默认是active'/>
    4. 路由性能优化： 
        -  React路由中默认是模糊匹配，当有多个路由的时候会一次从上往下匹配，中间即使匹配成功，不会停止匹配，直到匹配所有的路由
        -  Switch ---> 一旦匹配成功就停止匹配 
        -  扩展： 数组性能好的方法： find, findIndex,性能不好的方法： forEach
    5. 路由重定向： Redirect
        -  <Redirect to='重定向之后的路由路径'>: 不配合Switch有强制性，每次都会重定向
        -  通常会和Switch匹配使用
        -  <Redirect from='重定向之前的路由路径' to='重定向之后的路由路径'>
        -  Redirect路由组件不要放在路由的最前边，通常放在最后
        
## 在二级路由下刷新外部样式丢失(BrowserRouter)
  1. 使用HashRouter
  2. <link rel="stylesheet" href="%PUBLIC_URL%/bootstrap.css">
  
  
## React如何向路由组件传参
  1. params传参
    1. 注册路由： <Route path='路由路径/:key' component={路由组件}>
    2. 请求路由:  <Link to='路由路径/value'/>
    3. 组件内部获取参数数据： this.props.match.params.key = value;
  2. props传参
    1. 注册路由：<Route path='/home/news' render={() => <路由组件 key='我是通过props向路由组件传递的参数'/>}></Route>
    2. 请求路由： <Link to='路由路径'/>
    3. 组件内部获取参数数据： this.props.key = value;
    
    
## React项目打包
  1. npm run build
  2. npm install serve -g
  3. serve -s build ----> 在build文件夹的上一级目录
  
  
## Redux
  1. store
      -  管理state
      -  管理reducer
  2. reducer
      -  负责修改state状态值
      -  数据源需要action提供
  3. action
      -  本质： {type: 修改state的方式， data: 参与修改state的数据}
      -  定义： 函数， 目的是动态给action设置data
  4. dispatch
      -  作用： 分发action
      -  到底做什么了： 
          -  传递action对象
          -  间接导致store去reducer调用
  5. 获取state
      -  store.getState();
  6. 监听state变化
      - store.subscribe(callback)