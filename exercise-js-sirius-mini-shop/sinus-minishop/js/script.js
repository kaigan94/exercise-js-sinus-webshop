// #1.
const firstHoodieName = document.querySelector(".art-1 h3");
firstHoodieName.innerText = "Potato";

// #2.
const homeBtn = document.querySelector("nav a");
homeBtn.innerText = "Start";

// #3.
const contactBtn = document.querySelectorAll("nav a")[2];
contactBtn.innerText = "Mail Us";

// #4.
const fireHoodieDescription = document.querySelector(".art-2 p");
fireHoodieDescription.innerText =
  "Vår Fire hoodie är både bekväm och stilig, perfekt för alla dagar och väder!";

// #5.
const firstHoodieBtn = document.querySelector(".art-1 button");
firstHoodieBtn.style.backgroundColor = "#FF5733";
firstHoodieBtn.innerText = "Add to cart";

// #6.
const secondHoodie = document.querySelector(".art-2");
secondHoodie.style.backgroundColor = "lightgrey";

// #7.
const newAddress = document.querySelector("footer section article p");
newAddress.innerText = "Sinus skateboards\nNew Address Road 10\n12345 New City"; // \n = radbyte

// #8.
const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((p) => {
  p.style.color = "darkblue"; // for each loop som kör genom alla p element och ändrar färgen till mörkblå
});

// #9.
const allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.innerText = "Add to cart"; // samma som förra uppg. for each loop som ändrar alla knappar till "add to cart" i texten
});

// #10.
const homeLink = document.querySelector("nav a");
homeLink.classList.add("active"); // lägger till en tjockare text på den aktiva knappen/fönstret/sidan

// #11.
const logo = document.querySelector("header img.logo");
logo.classList.remove("logo");

// #12.
const newMenuItem = document.createElement("span");
newMenuItem.innerText = "New Menu Item";
newMenuItem.style.margin = "0 1.2rem";

const nav = document.querySelector("header nav");

nav.appendChild(newMenuItem);

// #13.
document.addEventListener("DOMContentLoaded", function () {
  // Skapa ett nytt artikel-element för produkten
  const newProduct = document.createElement("article");
  newProduct.classList.add("art-4"); // Lägg till en ny klass om du vill styla den

  // Skapa figure och bild
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = "img/hoodie-forrest.png"; // Bilden för produkten
  img.alt = "hoodie";
  figure.appendChild(img);

  // Skapa rubriker och beskrivning
  const h2 = document.createElement("h2");
  h2.innerText = "Sinus Hoodie"; // Produktnamn
  const h3 = document.createElement("h3");
  h3.innerText = "Forrest"; // Färg på hoodien
  const p = document.createElement("p");
  p.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores."; // Beskrivning av produkten

  // Skapa knapp
  const button = document.createElement("button");
  button.innerText = "buy";

  // Lägg till alla element till newProduct
  newProduct.appendChild(figure);
  newProduct.appendChild(h2);
  newProduct.appendChild(h3);
  newProduct.appendChild(p);
  newProduct.appendChild(button);

  // Lägg till den nya produkten till main
  const main = document.querySelector("main");
  main.appendChild(newProduct);
});

// #14.
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", function () {
      console.log("found you!");
    });
  } else {
    console.log("Logo not found!");
  }
});

// #15.
document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll("main article");

  articles.forEach((article) => {
    article.addEventListener("click", function () {
      const productName = article.querySelector("h3").innerText;

      console.log(`Hi, I'm article ${productName}`);
    });
  });
});
