// Mobile navigation
const mobileNav = document.getElementById("primary-navigation");
const mobileNavBtn = document.querySelector(".mobile-nav-toggle");

mobileNavBtn.addEventListener("click", () => {
  const hidden = mobileNav.getAttribute("data-hidden");

  if (hidden === "true") {
    // Change visablity for Screen readers & data-hidden attribute
    mobileNavBtn.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("data-hidden", "false");
  } else {
    // Revert changes
    mobileNavBtn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("data-hidden", "true");
  }
});

// Keyboard navigation setup
const primaryNav = document.querySelector("#primary-navigation");
const primaryNavLinks = document.querySelectorAll("#primary-navigation li a");
let navFocus = 0;
addKeyboardNavigation(primaryNav, navFocus, primaryNavLinks);

const tabList = document.querySelector("[role='tablist']");
const tabs = document.querySelectorAll("[role='tab']");

if (tabList) {
  let tabFocus = 0;
  addKeyboardNavigation(tabList, tabFocus, tabs);
}

/**
 * Fuction to set up keyboard navigation
 * @param {Element} element The HTML element you want to add keyboard nav too
 * @param {Number} currentTab An integer to keep track of which nav link is in focus (usally starts at 0)
 * @param {NodeListOf<Element>} tabs The NodeList of navigation elements to navigate between
 */

function addKeyboardNavigation(element, currentTab, tabs) {
  element.addEventListener("keydown", (e) => {
    const arrowKeyRight = 39;
    const arrowKeyLeft = 37;

    if (e.keyCode === arrowKeyRight) {
      tabs[currentTab].setAttribute("tabindex", "-1");

      if (currentTab === tabs.length - 1) {
        currentTab = 0;
      } else {
        currentTab++;
      }
    }

    if (e.keyCode === arrowKeyLeft) {
      tabs[currentTab].setAttribute("tabindex", "-1");

      if (currentTab === 0) {
        currentTab = tabs.length - 1;
      } else {
        currentTab--;
      }
    }

    tabs[currentTab].setAttribute("tabindex", "0");
    tabs[currentTab].focus();
  });
}
