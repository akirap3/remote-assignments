// Assignment 4 - Request 1: Click to Change Text.
const welcomeMessage = document.querySelector("h1");

welcomeMessage.addEventListener("click", () => {
  welcomeMessage.textContent = "Have a Good Time!";
});

// Assignment 4 - Request 2: Floating Menu
const menuIcon = document.querySelector(".heading img");

const floatingMenu = document.getElementById("floating-menu");
const menuExit = document.getElementById("menu-exit");

menuIcon.addEventListener("click", () => {
  floatingMenu.style.width = "50vw";
});

menuExit.addEventListener("click", () => {
  floatingMenu.style.width = "0";
});

// Assignment 4 - Request 3: Click to show mor content boxes

const callToAction = document.querySelector(".call-to-action");

const toggleContent = document.getElementsByClassName("toggle")[0];

callToAction.addEventListener("click", (event) => {
  if (event.target.textContent === "Call to Action") {
    event.target.textContent = "Show Content";
    toggleContent.style.display = "none";
  } else {
    toggleContent.style.display = "flex";
    event.target.textContent = "Call to Action";
  }
});
