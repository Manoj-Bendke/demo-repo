let input = [1, 23, 3, 4, 5, 5, 6];
const ans = input.map((i) => {
  return i * 2;
});
console.log(ans);
// check out how the map fuction is made
Array.prototype.myMap = function(callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
}

var numbers = [16, 25, 36];
var results = numbers.myMap(Math.sqrt);
console.log(results);