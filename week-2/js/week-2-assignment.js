// Assignment 4 - Request 1: Click to Change Text.
const welcomeMessage = document.querySelector("h1");

welcomeMessage.addEventListener("click", () => {
  welcomeMessage.textContent = "Have a Good Time!";
});

// Assignment 5 - Request 2: Floating Menu
const menuIcon = document.querySelector(".heading img");

const floatingMenu = document.querySelector(".floating-menu");

menuIcon.addEventListener("click", () => {
  const menuDiv = document.createElement("div");
  menuDiv.className = "menuDiv";

  const menuExit = document.createElement("img");
  menuExit.src = "image/crossIcon.svg";
  menuExit.className = "menu-exit";

  const menuUl = document.createElement("ul");
  menuUl.className = "menuUl";

  for (let i = 1; i <= 4; i++) {
    const item = document.createElement("li");
    item.textContent = `Item ${i}`;
    item.style.listStyle = "none";
    menuUl.appendChild(item);
  }

  menuDiv.appendChild(menuExit);
  menuDiv.appendChild(menuUl);
  floatingMenu.appendChild(menuDiv);
  const parent = menuDiv.parentNode;

  menuExit.addEventListener("click", () => {
    parent.removeChild(menuDiv);
  });
});
