const searchBtn = document.querySelector(".btn");
const searchEl = document.querySelector(".search");
const inputEl = document.querySelector(".input");

searchBtn.addEventListener("click", () => {
  searchEl.classList.toggle("active");
  inputEl.focus();
});
