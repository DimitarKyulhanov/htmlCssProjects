const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  prev.disabled = false;
  if (currentActive === 4) {
    next.disabled = true;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  next.disabled = false;
  if (currentActive === 1) {
    prev.disabled = true;
  }
  update();
});

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
    progress.style.width = ((currentActive - 1) / 3) * 100 + "%";
  });
};
