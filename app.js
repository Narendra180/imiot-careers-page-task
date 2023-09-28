const mobileNavToggleBtn = document.querySelector(".mobile-nav-links-toggle-btn");
const navLinkUl = document.querySelector(".nav-links-ul");

mobileNavToggleBtn.addEventListener('click', () => {
  navLinkUl.classList.add("visible")
})