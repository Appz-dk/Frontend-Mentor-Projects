const destinationSource = document.getElementById("destination-source");
const destinationImage = document.getElementById("destination-image");
const destinationSubtitle = document.getElementById("destination-subtitle");
const destinationContent = document.getElementById("destination-content");
const destinationMeta = document.getElementById("destination-meta");

const btns = document.querySelectorAll("[role='tab']");
const [moonBtn, marsBtn, europaBtn, titanBtn] = btns;

// Helper functions
const adjustSelectedBtn = (currentBtn) => {
  tabs.forEach((btn) => {
    btn.setAttribute("aria-selected", "false");
  });
  currentBtn.setAttribute("aria-selected", "true");
};

const adjustPageContent = (data) => {
  destinationSource.setAttribute("srcset", data.images.webp);
  destinationImage.setAttribute("src", data.images.png);
  destinationImage.setAttribute("alt", data.name);
  destinationSubtitle.innerText = data.name;
  destinationContent.innerText = data.description;
  destinationMeta.innerHTML = `
  <div>
    <h3 class="fs-200 text-light ff-sans-cond uppercase letter-spacing-3">Avg. Distance</h3>
    <p class="ff-serif text-white uppercase">${data.distance}</p>
  </div>
  <div>
    <h3 class="fs-200 text-light ff-sans-cond uppercase letter-spacing-3">Est. travel time</h3>
    <p class="ff-serif text-white uppercase">${data.travel}</p>
  </div>
  `;
};

// Page content updater functions
const moonEvent = (moon) => {
  adjustPageContent(moon);
  adjustSelectedBtn(moonBtn);
};

const marsEvent = (mars) => {
  adjustPageContent(mars);
  adjustSelectedBtn(marsBtn);
};

const europaEvent = (europa) => {
  adjustPageContent(europa);
  adjustSelectedBtn(europaBtn);
};

const titanEvent = (titan) => {
  adjustPageContent(titan);
  adjustSelectedBtn(titanBtn);
};

// Adding eventlisterners & fetching json data
fetch("data.json")
  .then((res) => res.json())
  .then(function ({ destinations }) {
    const [moon, mars, europa, titan] = destinations;
    moonBtn.addEventListener("click", () => {
      moonEvent(moon);
    });
    marsBtn.addEventListener("click", () => {
      marsEvent(mars);
    });
    europaBtn.addEventListener("click", () => {
      europaEvent(europa);
    });
    titanBtn.addEventListener("click", () => {
      titanEvent(titan);
    });
  });
