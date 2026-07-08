//document betyder att den hämtar från den nuvarande öppna html filen
const artCards = document.querySelectorAll(".art-card");//hämtar alla "art-card" classer från html filen
const overlay = document.getElementById("imageOverlay");//hämtar efter id
const overlayImage = document.getElementById("overlayImage");//men finns indet somh eter endast art card?
const closeOverlay = document.querySelector(".close-overlay");//hämtar dom här från alla filer i projektet?
//close overlay är "X" knappen på bilden


artCards.forEach(card => {//gör alla bilder klickbara
  card.addEventListener("click", () => {

    const image = card.querySelector("img");//hittar själva bilden

    overlayImage.src = image.src;//ger bildens sökväg till overlay bilden
    overlayImage.alt = image.alt;//samma sak med bildens "alt text"

    overlay.style.display = "flex";//displayar bilden över hela skärmen
  });
});

//denna metod sätter stäng overlay systemet på x knappen
closeOverlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

//gör så att ifall du klickar någonstans där overlay bilden inte är, så stängs den
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});