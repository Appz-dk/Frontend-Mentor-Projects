// Mobile navigation
const mobileNav = document.getElementById("primary-navigation");
const mobileNavBtn = document.querySelector(".mobile-nav-toggle");

mobileNavBtn.addEventListener("click", () => {
  const hidden = mobileNav.getAttribute("data-hidden");

  if (hidden === "true") {
    // mobileNav.style.transform = "translateX(0%)";
    // mobileNavBtn.style.backgroundImage = "url(./assets/shared/icon-close.svg)";

    // Change visablity for Screen readers & data-hidden attribute
    mobileNavBtn.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("data-hidden", "false");
  } else {
    // mobileNav.style.transform = "translateX(100%)";
    // mobileNavBtn.style.backgroundImage = "url(./assets/shared/icon-hamburger.svg)";

    // Revert changes
    mobileNavBtn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("data-hidden", "true");
  }
});
