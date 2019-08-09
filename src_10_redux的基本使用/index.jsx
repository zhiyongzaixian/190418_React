import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'

import App from './App'
// 渲染整个应用
ReactDOM.render((
    <App store={store}/>
), document.getElementById('root'));

// 监听store对象发生变化
store.subscribe(() => {
  console.log('我监听到你变化了。。。');
  ReactDOM.render((
    <App store={store}/>
  ), document.getElementById('root'));
})