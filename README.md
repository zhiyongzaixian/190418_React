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