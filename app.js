const mobileNavToggleBtn = document.querySelector(".mobile-nav-links-toggle-btn");
const headerNavLinksUl = document.querySelector(".nav-links-ul");

mobileNavToggleBtn.addEventListener('click', () => {
  const isVisible = headerNavLinksUl.classList.contains("visible");
  if(isVisible) {
    headerNavLinksUl.classList.remove("visible")
  } else {
    headerNavLinksUl.classList.add("visible");
    headerNavLinksUl.focus();
  }
})

headerNavLinksUl.addEventListener('blur', (e) => {
  const relatedTarget = e.relatedTarget;
  if(!headerNavLinksUl.contains(relatedTarget) && (relatedTarget !== mobileNavToggleBtn)) {
    headerNavLinksUl.classList.remove("visible");
  }
})

headerNavLinksUl.addEventListener('click', (e) => {
  // e.preventDefault();
  if(e.currentTarget)
    e.currentTarget.classList.remove("visible");
})