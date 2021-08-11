const sumButton = document.querySelector("#sumButton");
const sumInput = document.querySelector("#sumInput");

const xhr = new XMLHttpRequest();
xhr.responseType = "json";
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.response.message);
    let resultNumber = xhr.response.message;
    const resultArea = document.querySelectorAll(".hidden")[0];
    const backButton = document.querySelectorAll(".hidden")[1];
    resultArea.classList.toggle("hidden");
    backButton.classList.toggle("hidden");
    sumButton.classList.toggle("hidden");
    sumInput.classList.toggle("hidden");
    resultArea.textContent = resultNumber;
  }
};

sumInput.addEventListener("input", (e) => {
  let url = `http://localhost:3000/getNumber?number=${e.target.value}`;
  xhr.open("GET", url);
});

sumButton.addEventListener("click", () => {
  xhr.send();
});
