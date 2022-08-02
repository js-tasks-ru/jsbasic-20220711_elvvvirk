function getMinMax(str) {
  const result = {}
  let arr = str.split(" ")
  let arrNumbers = arr.filter(item => isFinite(item)).map(item => parseFloat(item))
  result.min = arrNumbers.reduce((min, current) => {
    if (min > current) min = current
    return min
  });
  result.max = arrNumbers.reduce((max, current) => {
    if (max < current) max = current
    return max
  });
  return result
}
