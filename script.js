const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    items.forEach((item) => {
      if (item.classList.contains(filterValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Show items of the first category by default
const defaultCategory = filterButtons[0].getAttribute("data-filter");
items.forEach((item) => {
  if (item.classList.contains(defaultCategory)) {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }
});
