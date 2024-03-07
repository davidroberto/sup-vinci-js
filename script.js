// Je créé un event listener, qui au se déclenche au moment ou
// une touche du clavier est enfoncée
// la variable event est fournie par le navigateur
// elle contient des infos sur l'évènement (keydown) qui vient de se produire
document.addEventListener("keydown", (event) => {
  // la méthode preventDefault() de la variable event
  // permet d'empêcher le comportement par défaut du navigateur pour l'évènement
  event.preventDefault();

  // je cherche dans le DOM un élément qui a pour class "avatar"
  // et je stocke le résultat dans la variable avatarNode
  const avatarNode = document.querySelector(".avatar");

  // je récupère la position gauche de mon avatar
  // si elle a pas été définie en CSS, je lui donne en valeur 0;
  const left = parseInt(avatarNode.style.left || 0);

  // je récupère la position top de mon avatar
  // si elle a pas été définie en CSS, je lui donne en valeur 0;
  const top = parseInt(avatarNode.style.top || 0);

  // si la touche pressée est la gauche
  if (event.key === "ArrowLeft") {
    // je prends la position à gauche de l'avatar
    // et je lui enlève 10 px
    avatarNode.style.left = `${left - 10}px`;
  } else if (event.key === "ArrowRight") {
    avatarNode.style.left = `${left + 10}px`;
  } else if (event.key === "ArrowDown") {
    avatarNode.style.top = `${top + 10}px`;
  } else if (event.key === "ArrowUp") {
    avatarNode.style.top = `${top - 10}px`;
  }
});
