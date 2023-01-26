const crewSourceEl = document.getElementById("crew-source");
const crewImageEl = document.getElementById("crew-image");
const crewSubtitleEl = document.getElementById("crew-subtitle");
const crewMemberEl = document.getElementById("crew-member");
const crewContentEl = document.getElementById("crew-content");

// crewDots
const crewDots = document.querySelectorAll(".dot-indicators button");
const [commanderDot, specialistDot, pilotDot, engineerDot] = crewDots;

const adjustCrewPageContent = (data) => {
  crewSourceEl.setAttribute("srcset", data.images.webp);
  crewImageEl.setAttribute("src", data.images.png);
  crewSubtitleEl.innerText = data.role;
  crewMemberEl.innerText = data.name;
  crewContentEl.innerText = data.bio;
};

// Page eventhandler functions
const commanderEvent = (commanderData) => {
  adjustCrewPageContent(commanderData);
  adjustSelectedBtn(crewDots, commanderDot);
};

const specialistEvent = (specialistData) => {
  adjustCrewPageContent(specialistData);
  adjustSelectedBtn(crewDots, specialistDot);
};

const pilotEvent = (pilotData) => {
  adjustCrewPageContent(pilotData);
  adjustSelectedBtn(crewDots, pilotDot);
};

const engineerEvent = (engineerData) => {
  adjustCrewPageContent(engineerData);
  adjustSelectedBtn(crewDots, engineerDot);
};

// Fetching data and setting up event listeners
fetch("data.json")
  .then((res) => res.json())
  .then(function ({ crew }) {
    const [commander, specialist, pilot, engineer] = crew;
    commanderDot.addEventListener("click", () => {
      commanderEvent(commander);
    });
    specialistDot.addEventListener("click", () => {
      specialistEvent(specialist);
    });
    pilotDot.addEventListener("click", () => {
      pilotEvent(pilot);
    });
    engineerDot.addEventListener("click", () => {
      engineerEvent(engineer);
    });
  });
