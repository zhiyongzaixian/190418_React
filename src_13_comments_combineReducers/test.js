export const debouce =  function (fn, time) {
  let timer = null;
  return function (event) {
    console.log(this);
    if(timer) clearTimeout(timer);
    event.persist && event.persist();
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, time)
  }
}