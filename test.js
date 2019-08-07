var arr = [12,7,3,5,8,4];


var result = arr.find(function (item, index) {
  console.log(item, index);
  // 返回条件true
  return item < 5;
})

console.log(result);