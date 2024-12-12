const addBtn = document.querySelector(".add-btn");
const addBtnClicked = document.querySelector(".add-btn-clicked");
const modeBtn = document.querySelector(".mode-btn");
const modeBtnClicked = document.querySelector(".mode-btn-clicked");
let darkmode = document.querySelector(".mode-btn-img");
let search = document.querySelector(".search-img");

modeBtn.addEventListener("mousedown", () => {
  if (darkmode.src.includes("moon.png")) {
    darkmode.src = "./images/sun.svg";
    document.body.style.backgroundColor = "#1E1E1E";
    document.body.style.color = "white";
    document.querySelector("input").style.borderColor = "white";
    document.querySelector("input").style.backgroundColor = "#1E1E1E";
    search.src = "./images/search.png";
  } else {
    darkmode.src = "./images/moon.png";
    search.src = "./images/search.svg";
    document.body.style.backgroundColor = "#F7F7F7";
    document.body.style.color = "black";
    document.querySelector("input").style.backgroundColor = "#F7F7F7";
    document.querySelector("input").style.borderColor = "#6C63FF";
  }
});

modeBtn.addEventListener("mousedown", () => {
  modeBtnClicked.style.display = "block";
  modeBtn.addEventListener("mouseleave", () => {
    setTimeout(() => {
      modeBtnClicked.style.display = "none";
    }, 100);
  });
  modeBtn.addEventListener("mouseup", () => {
    modeBtnClicked.style.display = "none";
  });
});

addBtn.addEventListener("mousedown", () => {
  addBtnClicked.style.display = "block";
  addBtn.addEventListener("mouseleave", () => {
    setTimeout(() => {
      addBtnClicked.style.display = "none";
    }, 100);
  });
  addBtn.addEventListener("mouseup", () => {
    addBtnClicked.style.display = "none";
  });
});
