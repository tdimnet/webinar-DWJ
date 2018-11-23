# Solution

```
function palindrome(str) {
  // Formate the two strings properly
  str = str.replace(/[\W_]/g, '').toLowerCase();
  var strReverse = str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');

  // Then compare them
  if (str === strReverse) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye"); // -> should return true
palindrome("_eye"); // -> should return true
palindrome("not a palindrome"); // -> should return false
palindrome("My age is 0, 0 si ega ym."; // -> should return true
```
