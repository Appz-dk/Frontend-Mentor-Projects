// Elements
const technologySubtitleEl = document.getElementById("technology-subtitle");
const technologyContentEl = document.getElementById("technology-content");
const technologyImgMobileEl = document.getElementById("technology-img-mobile");
const technologyImgDesktopEl = document.getElementById("technology-img-desktop");
// Btns
const technologyDotList = document.querySelector("[role='tablist']");
const technologyDots = document.querySelectorAll("[role='tab']");

// Wanted to try a different approach of setting up
// the eventlisteners etc with less lines of repeated code
const adjustTechnologyPageContent = (data) => {
  technologySubtitleEl.innerText = data.name;
  technologyContentEl.innerText = data.description;
  technologyImgMobileEl.setAttribute("src", data.images.landscape);
  technologyImgDesktopEl.setAttribute("src", data.images.portrait);
};

// Fetch json & setup eventlisteners
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    technologyDots.forEach((dot, idx) => {
      const technologyData = data.technology[idx];
      dot.addEventListener("click", (e) => {
        adjustSelectedBtn(technologyDots, e.target);
        adjustTechnologyPageContent(technologyData);
      });
    });
  });
