export default function Debounce(func, delay) {
    let timer = null;

    return function () {
      const context = this;
      const args = arguments;
      
      clearTimeout(timer);
      timer = setTimeout(function () {
        func.apply(context, args)
      }, delay);
    }
  }