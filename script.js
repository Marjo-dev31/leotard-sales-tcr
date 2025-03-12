const soloUlElement = document.getElementById("solo-container");
const duoUlElement = document.getElementById("duo-container");
const teamUlElement = document.getElementById("team-container");
const diversUlElement = document.getElementById("divers-container");
const combiSoloUlElement = document.getElementById("combi-solo-container");
const combiDuoUlElement = document.getElementById("combi-duo-container");


function getSoloImg() {
   for (let i = 1; i <= 13; i++) {
      const liElement = document.createElement("li");
      soloUlElement.append(liElement);
      const imgElement = document.createElement('img')
      liElement.append(imgElement)
      imgElement.setAttribute("src", `/assets/solo/solo${i}.jpg`)
   }
}

function getDuoImg() {
    for (let i = 1; i <= 18; i++) {
       const liElement = document.createElement("li");
       duoUlElement.append(liElement);
       const imgElement = document.createElement('img')
       liElement.append(imgElement)
       imgElement.setAttribute("src", `/assets/duo/duo${i}.jpg`)
    }
 }

 function getTeamImg() {
    for (let i = 1; i <= 14; i++) {
       const liElement = document.createElement("li");
       teamUlElement.append(liElement);
       const imgElement = document.createElement('img')
       liElement.append(imgElement)
       imgElement.setAttribute("src", `/assets/team/team${i}.jpg`)
    }
 }

 function getDiversImg() {
    for (let i = 1; i <= 16; i++) {
       const liElement = document.createElement("li");
       diversUlElement.append(liElement);
       const imgElement = document.createElement('img')
       liElement.append(imgElement)
       imgElement.setAttribute("src", `/assets/divers/divers${i}.jpg`)
    }
 }

 function getSoloCombiImg() {
    for (let i = 1; i <= 8; i++) {
       const liElement = document.createElement("li");
       combiSoloUlElement.append(liElement);
       const imgElement = document.createElement('img')
       liElement.append(imgElement)
       imgElement.setAttribute("src", `/assets/combi/solo${i}.jpg`)
    }
 }
 function getDuoCombiImg() {
    for (let i = 1; i <= 10; i++) {
       const liElement = document.createElement("li");
       combiDuoUlElement.append(liElement);
       const imgElement = document.createElement('img')
       liElement.append(imgElement)
       imgElement.setAttribute("src", `/assets/combi/duo${i}.jpg`)
    }
 }

getSoloImg()
getDuoImg()
getTeamImg()
getDiversImg()
getSoloCombiImg()
getDuoCombiImg()