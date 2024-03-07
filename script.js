const menuTriggerNode = document.querySelector(".menu-trigger");

menuTriggerNode.addEventListener("click", () => {
  const menuNode = document.querySelector(".menu");

  if (menuNode.style.display === "none") {
    menuNode.style.display = "block";
    menuNode.style.opacity = 1;
  } else {
    menuNode.style.display = "none";
    menuNode.style.opacity = 0;
  }
});
