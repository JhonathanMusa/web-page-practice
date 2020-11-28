let btnBar = document.getElementById("btnBar");

function navigationResponsive() {
  let drop = document.getElementById("navSection");
  if (drop.classList === "nav") {
    drop.classList += " responsive";
  } else {
    drop.classList = "nav";
  }
}

btnBar.addEventListener("click", navigationResponsive);
