const cards = document.querySelectorAll(".panel");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClass();
    card.classList.add("active");
  });
});

const removeActiveClass = () => {
  cards.forEach((card) => card.classList.remove("active"));
};
