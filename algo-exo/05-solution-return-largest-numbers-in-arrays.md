# Solution

```
function largestOfFour(arr) {
  var secArr = [];
  // loops inside the global array
  for(var i = 0; i < arr.length; i++) {
    var a = 0;
    var b = 0;
    // loops inside the inside array
    for(var j = 0; j < arr[i].length; j++) {
      a = arr[i][j];
      // compare the number and assign the bigger
      if (a > b) {
        b = a;
      }
    }
    // push the value before relooping the global array.
    secArr.push(b);
  }
  return secArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
```
