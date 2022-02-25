const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");
const containerEl = document.querySelector(".container");

leftEl.addEventListener("mouseenter", () =>
  containerEl.classList.add("left-hover")
);
leftEl.addEventListener("mouseleave", () =>
  containerEl.classList.remove("left-hover")
);
rightEl.addEventListener("mouseenter", () =>
  containerEl.classList.add("right-hover")
);
rightEl.addEventListener("mouseleave", () =>
  containerEl.classList.remove("right-hover")
);
