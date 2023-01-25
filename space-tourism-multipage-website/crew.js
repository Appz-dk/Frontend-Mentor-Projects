const crewSource = document.getElementById("crew-source");
const crewImage = document.getElementById("crew-image");
const crewSubtitle = document.getElementById("crew-subtitle");
const crewMember = document.getElementById("crew-member");
const crewContent = document.getElementById("crew-content");

// Dots
const dots = document.querySelectorAll(".dot-indicators button");
const [commanderBtn, specialistBtn, pilotBtn, engineerBtn] = dots;

// Helper functions
const adjustSelectedBtn = (currentDot) => {
  dots.forEach((btn) => {
    btn.setAttribute("aria-selected", "false");
  });
  currentDot.setAttribute("aria-selected", "true");
};

const adjustPageContent = (data) => {
  crewSource.setAttribute("srcset", data.images.webp);
  crewImage.setAttribute("src", data.images.png);
  crewSubtitle.innerText = data.role;
  crewMember.innerText = data.name;
  crewContent.innerText = data.bio;
};

// Page eventhandler functions
const commanderEvent = (commanderData) => {
  adjustPageContent(commanderData);
  adjustSelectedBtn(commanderBtn);
};

const specialistEvent = (specialistData) => {
  adjustPageContent(specialistData);
  adjustSelectedBtn(specialistBtn);
};

const pilotEvent = (pilotData) => {
  adjustPageContent(pilotData);
  adjustSelectedBtn(pilotBtn);
};

const engineerEvent = (engineerData) => {
  adjustPageContent(engineerData);
  adjustSelectedBtn(engineerBtn);
};

// Fetching data and setting up event listeners
fetch("data.json")
  .then((res) => res.json())
  .then(function ({ crew }) {
    const [commander, specialist, pilot, engineer] = crew;
    commanderBtn.addEventListener("click", () => {
      commanderEvent(commander);
    });
    specialistBtn.addEventListener("click", () => {
      specialistEvent(specialist);
    });
    pilotBtn.addEventListener("click", () => {
      pilotEvent(pilot);
    });
    engineerBtn.addEventListener("click", () => {
      engineerEvent(engineer);
    });
  });
