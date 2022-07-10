function parentFn() {
  var numericCount = 0;
  var alphaCount = 96;

  var numericCounter = function () {
    numericCount++;
    return numericCount;
  };

  var alphaCounter = function () {
    alphaCount++;
    return String.fromCharCode(alphaCount);
  };

  return { numericCounter, alphaCounter };
}

var childFn = new parentFn();

var outsideFn = function (bool) {
  if (bool) {
    return childFn.numericCounter();
  } else {
    return childFn.alphaCounter();
  }
};

console.log(outsideFn(true)); // 1
console.log(outsideFn(true)); // 2
console.log(outsideFn(true)); // 3
console.log(outsideFn(false)); // a
console.log(outsideFn(false)); // b
console.log(outsideFn(false)); // c
