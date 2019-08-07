import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, HashRouter} from 'react-router-dom'

import App from './App'
// 渲染整个应用
ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));