function myResult(result) {
  return result;
}

function delayedResult(n1, n2, delayTime, myFunc) {
  let sum = n1 + n2;
  const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      sum ? resolve(myFunc(sum)) : reject("error");
    }, delayTime);
  });
  mypromise.then((res) => {
    console.log(res);
    alert(res);
  });
}

delayedResult(-5, 10, 3000, myResult);
