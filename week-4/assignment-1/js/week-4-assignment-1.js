var worker = new Worker("js/worker.js");

function myResult2(result) {
  alert(result);
}

function delayedResult(n1, n2, delayTime, myFunc) {
  let sum = n1 + n2;
  setTimeout(() => {
    myFunc(sum);
  }, delayTime);
}

delayedResult(-5, 10, 2000, myResult2);
