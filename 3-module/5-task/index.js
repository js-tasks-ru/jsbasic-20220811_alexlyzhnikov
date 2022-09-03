function getMinMax(str) {
  let numberArr = str.split(' ').map(elem => Number(elem)).filter(number => !isNaN(number));
  let numObj = {
    min: Math.min(...numberArr),
    max: Math.max(...numberArr),
  }
  return numObj;
}
