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

// Keyboard navigation
const tabList = document.querySelector("[role='tablist']");
const tabs = document.querySelectorAll("[role='tab']");

if (tabList) {
  let tabFocus = 0;
  addKeyboardNavigation(tabList, tabFocus, tabs);

  // tabList.addEventListener("keydown", (e) => {
  //   const arrowKeyRight = 39;
  //   const arrowKeyLeft = 37;

  //   if (e.keyCode === arrowKeyRight) {
  //     tabs[tabFocus].setAttribute("tabindex", "-1");

  //     if (tabFocus === tabs.length - 1) {
  //       tabFocus = 0;
  //     } else {
  //       tabFocus++;
  //     }
  //   }

  //   if (e.keyCode === arrowKeyLeft) {
  //     tabs[tabFocus].setAttribute("tabindex", "-1");

  //     if (tabFocus === 0) {
  //       tabFocus = tabs.length - 1;
  //     } else {
  //       tabFocus--;
  //     }
  //   }

  //   tabs[tabFocus].setAttribute("tabindex", "0");
  //   tabs[tabFocus].focus();
  // });
}

const primaryNavList = document.querySelector("#primary-navigation");

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
