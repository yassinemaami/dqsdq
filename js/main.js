let megaMenu = document.querySelector(".mega-menu");
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("target")) {
    megaMenu.style = "z-index: 1; opacity: 1; top:calc(100% + 1px);";
  } else {
    megaMenu.style = "z-index: -1; opacity: 0;";
  }
});
