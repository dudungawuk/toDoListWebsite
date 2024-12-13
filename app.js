// Element Selection
const addBtn = document.querySelector(".add-btn");
const addBtnClicked = document.querySelector(".add-btn-clicked");
const modeBtn = document.querySelector(".mode-btn");
const modeBtnClicked = document.querySelector(".mode-btn-clicked");
const catBtn = document.querySelector(".category-btn");
const catBtnClicked = document.querySelector(".category-btn-clicked");
const dropdown = document.querySelector(".dropdown");
let darkmode = document.querySelector(".mode-btn-img");
let search = document.querySelector(".search-img");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const apply = document.querySelector(".apply");
const cancel = document.querySelector(".cancel");
const task = document.querySelector(".task");

countTask = 0;

if (countTask == 0) {
  document.querySelector(".empty-wrap").style.display = "flex";
} else {
  document.querySelector(".empty-wrap").style.display = "none";
}

apply.addEventListener("click", () => {
  taskValue = task.value;
  modal.style.display = "none";
});

cancel.addEventListener("click", () => {
  modal.style.display = "none";
});

// State Management
let isRotated = false; // Status untuk rotasi dropdown

// Dropdown Rotation Event
catBtn.addEventListener("click", () => {
  isRotated = !isRotated;
  dropdown.style.transform = isRotated ? "rotate(180deg)" : "rotate(0deg)";
});

// Category Button Interaction
catBtn.addEventListener("mousedown", () => {
  catBtnClicked.style.display = "block";
});

catBtn.addEventListener("mouseup", () => {
  catBtnClicked.style.display = "none";
});

catBtn.addEventListener("mouseleave", () => {
  setTimeout(() => {
    catBtnClicked.style.display = "none";
  }, 100);
});

// Dark Mode Toggle
modeBtn.addEventListener("mousedown", () => {
  const isDarkMode = darkmode.src.includes("moon.png");

  darkmode.src = isDarkMode ? "./images/sun.svg" : "./images/moon.png";
  search.src = isDarkMode ? "./images/search.png" : "./images/search.svg";

  document.body.style.backgroundColor = isDarkMode ? "#1E1E1E" : "#F7F7F7";
  document.body.style.color = isDarkMode ? "white" : "black";

  const input = document.querySelector("input");
  input.style.borderColor = isDarkMode ? "white" : "#6C63FF";
  input.style.backgroundColor = isDarkMode ? "#1E1E1E" : "#F7F7F7";
});

// Mode Button Interaction
modeBtn.addEventListener("mousedown", () => {
  modeBtnClicked.style.display = "block";
});

modeBtn.addEventListener("mouseleave", () => {
  setTimeout(() => {
    modeBtnClicked.style.display = "none";
  }, 100);
});

modeBtn.addEventListener("mouseup", () => {
  modeBtnClicked.style.display = "none";
});

// Add Button Interaction
addBtn.addEventListener("mousedown", () => {
  addBtnClicked.style.display = "block";
});

addBtn.addEventListener("mouseleave", () => {
  setTimeout(() => {
    addBtnClicked.style.display = "none";
  }, 100);
});

addBtn.addEventListener("mouseup", () => {
  addBtnClicked.style.display = "none";
});

// Modal Interaction
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
