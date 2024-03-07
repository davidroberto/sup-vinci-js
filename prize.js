// j'utilise document qui symbolise le DOM
// et la fonction querySelector de document
// pour sélectionner un node element (element HTML) dans le DOM
// en fonction de sa balise
const buttonNode = document.querySelector("button");

// j'utilise la variable buttonNode qui contient donc un node element
// avec la fonction addEventListener qui me permet de déclarer un event listener
// sur le bouton
// addEventListener prend deux params : l'évènement attendu et la fonction
// à executer quand l'évènement se déclenche

const prizes = ["Jambon de bayonne", "une poule empaillée", "une photo de Jacques Chirac", "rien"];

//je déclare une variable avec let (pour pouvoir la modifier plus tard)
// avec en valeur false
let isClicked = false;

buttonNode.addEventListener("click", () => {
  //si isClicked est false, j'affiche le gain
  if (!isClicked) {
    const prizeContainerNode = document.querySelector(".prize-container");

    // je vide le contenu texte du container
    prizeContainerNode.textContent = "";

    // je récupère un élément aléatoire dans le tableau de prizes
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];

    // je créé un node élément de type texte
    // avec un message contenant le prix aléatoire
    const prizeText = document.createTextNode("Vous avez gagné : " + randomPrize);

    // j'insère dans le node element "prizeContainerNode" le node texte créé
    prizeContainerNode.appendChild(prizeText);

    // je modifie isClicked à true
    isClicked = true;
  }
});
