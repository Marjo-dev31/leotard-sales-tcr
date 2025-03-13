const soloUlElement = document.getElementById("solo-container");
const duoUlElement = document.getElementById("duo-container");
const teamUlElement = document.getElementById("team-container");
const diversUlElement = document.getElementById("divers-container");
const combiSoloUlElement = document.getElementById(
   "combi-solo-container"
);
const combiDuoUlElement = document.getElementById(
   "combi-duo-container"
);

function getSoloImg() {
   for (let i = 1; i <= 13; i++) {
      const liElement = document.createElement("li");
      soloUlElement.append(liElement);
      const imgElement = document.createElement("img");
      liElement.append(imgElement);
      imgElement.setAttribute("src", `/assets/solo/solo${i}.jpg`);
      if (i === 2 || i === 10) {
         imgElement.classList.add("rotate-180");
      }
      if (i === 4 || i === 6 || i === 9 || i === 12 || i === 13) {
         imgElement.classList.add("rotate-90");
      }
      if (i === 16) {
         imgElement.classList.add("rotate-270");
      }
   }
}

function getDuoImg() {
   for (let i = 1; i <= 18; i++) {
      const liElement = document.createElement("li");
      duoUlElement.append(liElement);
      const imgElement = document.createElement("img");
      liElement.append(imgElement);
      imgElement.setAttribute("src", `/assets/duo/duo${i}.jpg`);
      if (
         i === 2 ||
         i === 5 ||
         i === 6 ||
         i === 8 ||
         i === 14 ||
         i === 16 ||
         i === 17
      ) {
         imgElement.classList.add("rotate-90");
      }
      if (i === 7 || i === 9) {
         imgElement.classList.add("rotate-270");
      }
      if (i === 15 || i === 18) {
         imgElement.classList.add("rotate-180");
      }
   }
}

function getTeamImg() {
   for (let i = 1; i <= 14; i++) {
      const liElement = document.createElement("li");
      teamUlElement.append(liElement);
      const imgElement = document.createElement("img");
      liElement.append(imgElement);
      imgElement.setAttribute("src", `/assets/team/team${i}.jpg`);
      if (
         i === 5 ||
         i === 9 ||
         i === 10 ||
         i === 11 ||
         i === 12 ||
         i === 14
      ) {
         imgElement.classList.add("rotate-90");
      }
      if (i === 7) {
         imgElement.classList.add("rotate-270");
      }
      if (i === 6 || i === 8) {
         imgElement.classList.add("rotate-180");
      }
   }
}

function getDiversImg() {
   for (let i = 1; i <= 16; i++) {
      const liElement = document.createElement("li");
      diversUlElement.append(liElement);
      const imgElement = document.createElement("img");
      liElement.append(imgElement);
      imgElement.setAttribute("src", `/assets/divers/divers${i}.jpg`);
      if (
         i === 2 ||
         i === 6 ||
         i === 7 ||
         i === 12 ||
         i === 13 ||
         i === 14 ||
         i === 16 ||
         i === 11 ||
         i === 10
      ) {
         imgElement.classList.add("rotate-90");
      }
      if (i=== 1 || i===3 || i===4 || i===8|| i===15 ) {
         imgElement.classList.add("rotate-270");
      }
      if (i=== 5 || i===9 ) {
         imgElement.classList.add("rotate-180");
      }
   }
}

function getSoloCombiImg() {
   for (let i = 1; i <= 8; i++) {
      const liElement = document.createElement("li");
      combiSoloUlElement.append(liElement);
      const imgElement = document.createElement("img");
      liElement.append(imgElement);
      imgElement.setAttribute("src", `/assets/combi/solo${i}.jpg`);
   }
}
function getDuoCombiImg() {
   for (let i = 1; i <= 10; i++) {
      const liElement = document.createElement("li");
      combiDuoUlElement.append(liElement);
      const imgElement = document.createElement("img");
      liElement.append(imgElement);
      imgElement.setAttribute("src", `/assets/combi/duo${i}.jpg`);
   }
}

getSoloImg();
getDuoImg();
getTeamImg();
getDiversImg();
getSoloCombiImg();
getDuoCombiImg();
