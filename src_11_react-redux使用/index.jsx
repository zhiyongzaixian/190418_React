import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
// import Test from './Test'
// import store1 from './test1'

import App from './containers/App'
// 渲染整个应用
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

// 监听store对象发生变化
// store.subscribe(() => {
//   console.log('我监听到你变化了。。。');
//   ReactDOM.render((
//     <App store={store}/>
//   ), document.getElementById('root'));
// })

// ReactDOM.render(<Test store1={store1}/>, document.getElementById('root'))