function myResult1(result) {
  console.log(result);
}

function delayedResult(n1, n2, delayTime, myFunc) {
  let sum = n1 + n2;
  setTimeout(() => {
    myFunc(sum);
  }, delayTime);
}

delayedResult(4, 5, 3000, myResult1);
