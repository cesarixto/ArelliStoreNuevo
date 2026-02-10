window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");

  if (!header) {
    return;
  }

  if (window.scrollY > 50) {
    header.classList.add("bg-dark-blue", "shadow-xl", "py-2");
    header.classList.remove("bg-transparent", "py-4");
  } else {
    header.classList.remove("bg-dark-blue", "shadow-xl", "py-2");
    header.classList.add("bg-transparent", "py-4");
  }
});

const searchButton = document.querySelector("[data-search-button]");
const searchInput = document.querySelector("[data-search-input]");

if (searchButton && searchInput) {
  searchButton.addEventListener("click", () => {
    searchInput.focus();
  });
}
