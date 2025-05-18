document.getElementById("year").textContent = new Date().getFullYear();

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});
