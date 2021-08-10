const sumButton = document.querySelector("#sumButton");
const sumInput = document.querySelector("#sumInput");

const xhr = new XMLHttpRequest();
xhr.responseType = document;
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const parser = new DOMParser();
    const content = parser.parseFromString(xhr.responseText, "text/html");
    let resultNumber = content.getElementsByTagName("H1")[0].innerHTML;
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
  let url = `http://localhost:3000/getData?number=${e.target.value}`;
  xhr.open("GET", url);
});

sumButton.addEventListener("click", () => {
  xhr.send();
});
