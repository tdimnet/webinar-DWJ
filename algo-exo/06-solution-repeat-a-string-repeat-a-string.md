# Solution

```
function repeatStringNumTimes(str, num) {
  if (num > 0) {
    // Creating the variables needed
    var arrOne = [];
    var arrTwo = [];
    var i = 0;

    // Creating a multidimensional array
    for (i = 0; i < num; i++) {
      arrTwo = str.split('');
      arrOne.push(arrTwo);
    }

    // Empty the array
    arrTwo = [];

    // Fill in the array by joining
    for (i = 0; i < arrOne.length; i++) {
      arrTwo.push(arrOne[i].join(''));
    }

    // Empty the array before joining
    arrOne = '';
    arrOne = arrTwo.join('');

    return arrOne;

  } else {
    return '';
  }
}

repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 4);
repeatStringNumTimes("abc", 1);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2);
```
