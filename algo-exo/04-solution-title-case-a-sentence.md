# Solution

```
function titleCase(str) {
  // Create they array with all lower case letters
  str = str.toLowerCase().split(' ');

  // Then split, modify and join the first letter
  for(var i = 0; i < str.length; i++){
    str[i] = str[i].split('');
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join('');
  }
  // Join the array in order to make a new string
  return str.join(' ');
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
```
