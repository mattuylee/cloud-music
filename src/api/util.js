export const getCount = (count) => {
  if (count < 0) { return; }
  if (count < 10000) {
    return count;
  }
  else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  }
  else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
};

export function throttle(fn, time) {
  let canRun = true;
  return function () {
    if (!canRun) { return; }
    const args = arguments.slice();
    canRun = false;
    fn.apply(this, args);
    setTimeout(() => {
      canRun = true;
    }, time || 100);
  };
}

export function debounce(fn, time) {
  let timer;
  return function () {
    timer && clearTimeout(timer);
    const args = arguments.slice();
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, time || 100);
  };
}