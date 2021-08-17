const url = "http://13.230.176.178:4000/api/1.0/remote-w4-data";
const myCard = document.getElementById("my-card");
const imageData = [
  {
    imageSrc: "image/pixel-3.png",
    alt: "pixel-3",
  },
  {
    imageSrc: "image/chromecast.jpg",
    alt: "chromecast",
  },
  {
    imageSrc: "image/pixel-book.jpg",
    alt: "pixelBook",
  },
];

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

let cardElement = (imageSrc, alt, name, price, description) => {
  return `<div class="col-12 col-sm-4 col-lg-3 mb-3">
<div class="card h-100">
  <img
    class="img-fluid"
    src=${imageSrc}
    class="card-img-top"
    alt=${alt}
  />
  <div class="card-body">
    <h5 class="card-title">${name} $${price}</h5>
    <p class="card-text">${description}</p>
  </div>
  <div class="card-footer">
    <small class="text-muted">Last updated 3 mins ago</small>
  </div>
</div>
</div>`;
};

const render = (data) => {
  const products = JSON.parse(data);
  let newArr = [];
  let i = 0;
  for (product of products) {
    product = {
      ...product,
      imageSrc: imageData[i].imageSrc,
      alt: imageData[i].alt,
    };
    i++;
    newArr.push(product);
  }
  newArr.forEach((item) => {
    console.log(item);
    let cardString = cardElement(
      item.imageSrc,
      item.alt,
      item.name,
      item.price,
      item.description
    );
    console.log(cardString);
    myCard.insertAdjacentHTML("beforeend", cardString);
  });
};

const ajax = async (src, callbackfn) => {
  const data = await requestPromise(src);
  callbackfn(data);
};

ajax(url, render);
