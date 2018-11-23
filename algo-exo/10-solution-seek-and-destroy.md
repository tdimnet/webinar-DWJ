# Solution

```
function destroyer(arr) {
  arg = arr.slice.call(arguments);

  arg.splice(0, 1);
  return arr.filter(function(el) {
    return arg.indexOf(el) === -1;
  });

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);
```
