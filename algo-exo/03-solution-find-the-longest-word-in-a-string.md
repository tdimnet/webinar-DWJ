# Solution

```
function findLongestWord(str) {
  // We create an empty variable with 0 as value.
  var word = 0;
  str = str.split(' ');
  // Loop through all words inside the array and asign the longest one to var word
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > word) {
      word = str[i].length;
    }
  }
  return word;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
findLongestWord("Google do a barrel roll");
findLongestWord("What is the average airspeed velocity of an unladen swallow");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");
```
