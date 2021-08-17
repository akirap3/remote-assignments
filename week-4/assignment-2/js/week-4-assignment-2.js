const url =
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products";
const myList = document.getElementById("my-list");

const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      }
    };
    xhr.onerror = () => {
      reject({
        status: xhr.status,
        statusText: xhr.statusText,
      });
    };
    xhr.open("GET", url);
    xhr.send();
  });
};

const render = (data) => {
  const products = JSON.parse(data);
  products.forEach((product) => {
    const inner = document.createElement("div");
    inner.classList.add("fw-bold");
    const productName = document.createTextNode(product.name);
    inner.appendChild(productName);
    const middle = document.createElement("div");
    const desc = document.createTextNode(product.description);
    middle.classList.add("ms-2", "me-auto");
    middle.append(inner, desc);
    const span = document.createElement("span");
    span.classList.add("badge", "bg-primary", "rounded-pill");
    const productPrice = document.createTextNode(`$ ${product.price}`);
    span.appendChild(productPrice);
    const outer = document.createElement("li");
    outer.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-start"
    );
    outer.append(middle, span);
    myList.appendChild(outer);
  });
};

const ajax = async (src, callbackfn) => {
  const data = await requestPromise(src);
  callbackfn(data);
};

ajax(url, render);
