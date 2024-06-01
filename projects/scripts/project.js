// FOR FOOTER
// select the DOM element for output
const year = document.querySelector("#currentYear");
const lstModif = document.querySelector('#lastModified');

// use the date object
const today = new Date();

year.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;
lstModif.innerHTML = new Date(document.lastModified);

// FOR SMALL MENU
const menu = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menu.addEventListener('click', () => {
    menu.classList.toggle('show');
    navigation.classList.toggle('show');
})

const pianos = [
    {
        pianoName: "Roland GP-9 Digital Grand Piano",
        brand: "Roland",
        classification: "Grand",
        type: "Digital Grand Piano",
        operation: "Digital",
        price: 15999.99,
        imageURL: "images/grand_piano.webp",
    },
    {
        pianoName: "C. Bechstein A 160 Baby Grand Piano",
        brand: "C. Bechstein",
        classification: "Grand",
        type: "Baby Grand Piano",
        operation: "Acoustic",
        price: 102602.74,
        imageURL: "images/grand_piano.webp",
    },
    {
        pianoName: "Johannes Seiler GS175 Grand Piano",
        brand: "Johannes Seiler",
        classification: "Grand",
        type: "Grand Piano",
        operation: "Acoustic",
        price: 32995,
        imageURL: "images/grand_piano.webp",
    },
    {
        pianoName: "Kawai GX-7 Semi-Concert Grand Piano",
        brand: "Kawai",
        classification: "Grand",
        type: "Semi-Concert Grand Piano",
        operation: "Acoustic",
        price: 100695,
        imageURL: "images/grand_piano.webp",
    },
    {
        pianoName: "Kawai GX-5 Chamber Grand Piano",
        brand: "Kawai",
        classification: "Grand",
        type: "Chamber Grand Piano",
        operation: "Acoustic",
        price: 80295,
        imageURL: "images/grand_piano.webp",
    },
    {
        pianoName: "Schimmel C213 Grand Piano",
        brand: "Schimmel",
        classification: "Grand",
        type: "Grand Piano",
        operation: "Acoustic",
        price: 107350,
        imageURL: "images/grand_piano.webp",
    },
    {
        pianoName: "Schimmel K280 Concert Grand Piano",
        brand: "Schimmel",
        classification: "Grand",
        type: "Concert Grand Piano",
        operation: "Acoustic",
        price: 243175,
        imageURL: "images/grand_piano.webp",
    },
    {
        pianoName: "Shigeru Kawai SK-EX Concert Grand Piano",
        brand: "Shigeru Kawai",
        classification: "Grand",
        type: "Concert Grand Piano",
        operation: "Acoustic",
        price: 217095,
        imageURL: "images/grand_piano.webp",
    },
    {
        pianoName: "Shigeru Kawai SK-7 Semi-Concert Grand Piano",
        brand: "Shigeru Kawai",
        classification: "Grand",
        type: "Semi-Concert Grand Piano",
        operation: "Acoustic",
        price: 132295,
        imageURL: "images/grand_piano.webp",
    },
    {
        pianoName: "W. Hoffmann V158 Baby Grand Piano",
        brand: "W. Hoffmann",
        classification: "Grand",
        type: "Baby Grand Piano",
        operation: "Acoustic",
        price: 47808,
        imageURL: "images/grand_piano.webp",
    },
    {
        pianoName: "Wilhelm Schimmel W180 Grand Piano",
        brand: "Wilhelm Schimmel",
        classification: "Grand",
        type: "Grand Piano",
        operation: "Acoustic",
        price: 45650,
        imageURL: "images/grand_piano.webp",
    },
    {
        pianoName: "C. Bechstein Concert 8 Upright Piano",
        brand: "C. Bechstein",
        classification: "Upright",
        type: "Upright Piano",
        operation: "Acoustic",
        price: 100000,
        imageURL: "images/upright_piano.webp",
    },
    {
        pianoName: "C. Bechstein Milleniuum 116 K Upright Piano",
        brand: "C. Bechstein",
        classification: "Upright",
        type: "Upright Piano",
        operation: "Acoustic",
        price: 49315.07,
        imageURL: "images/upright_piano.webp",
    },
    {
        pianoName: "Johannes Seiler GS122 Upright Piano",
        brand: "Johannes Seiler",
        classification: "Upright",
        type: "Upright Piano",
        operation: "Acoustic",
        price: 7450,
        imageURL: "images/upright_piano.webp",
    },
    {
        pianoName: "Kawai K-400 Upright Piano",
        brand: "Kawai",
        classification: "Upright",
        type: "Upright Piano",
        operation: "Acoustic",
        price: 16495,
        imageURL: "images/upright_piano.webp",
    },
    {
        pianoName: "Kawai ND-21 Upright Piano",
        brand: "Kawai",
        classification: "Upright",
        type: "Upright Piano",
        operation: "Acoustic",
        price: 8995,
        imageURL: "images/upright_piano.webp",
    },
    {
        pianoName: "Kawai ST-1 Upright Piano",
        brand: "Kawai",
        classification: "Upright",
        type: "Upright Piano",
        operation: "Acoustic",
        price: 13295,
        imageURL: "images/upright_piano.webp",
    },
    {
        pianoName: "Schimmel C121 Upright Piano",
        brand: "Schimmel",
        classification: "Upright",
        type: "Upright Piano",
        operation: "Acoustic",
        price: 40475,
        imageURL: "images/upright_piano.webp",
    },
    {
        pianoName: "Seiler ED132 Upright Piano",
        brand: "Seiler",
        classification: "Upright",
        type: "Upright Piano",
        operation: "Acoustic",
        price: 17995,
        imageURL: "images/upright_piano.webp",
    },
    {
        pianoName: "W. Hoffmann V131 Upright Piano",
        brand: "W. Hoffmann",
        classification: "Upright",
        type: "Upright Piano",
        operation: "Acoustic",
        price: 25890,
        imageURL: "images/upright_piano.webp",
    },
    {
        pianoName: "Willhelm Schimmel W123 Upright Piano",
        brand: "Willhelm Schimmel",
        classification: "Upright",
        type: "Upright Piano",
        operation: "Acoustic",
        price: 19695,
        imageURL: "images/upright_piano.webp",
    },
    {
        pianoName: "Casio AP-750 Digital Piano",
        brand: "Casio",
        classification: "Digital",
        type: "Digital Piano",
        operation: "Digital",
        price: 4999.99,
        imageURL: "images/digital_piano.webp",
    },
    {
        pianoName: "Kawai CA701 Premium Digital Piano",
        brand: "Kawai",
        classification: "Digital",
        type: "Digital Piano",
        operation: "Digital",
        price: 6299,
        imageURL: "images/digital_piano.webp",
    },
    {
        pianoName: "Roland LX-9 Premium Digital Piano",
        brand: "Roland",
        classification: "Digital",
        type: "Digital Piano",
        operation: "Digital",
        price: 9999,
        imageURL: "images/digital_piano.webp",
    },
    {
        pianoName: "Kawai ES-120 Portable Digital Piano",
        brand: "Kawai",
        classification: "Digital",
        type: "Portable Digital Piano",
        operation: "Digital",
        price: 1099,
        imageURL: "images/digital_piano.webp",
    },
    {
        pianoName: "Roland RP701 Digital Piano",
        brand: "Roland",
        classification: "Digital",
        type: "Digital Piano",
        operation: "Digital",
        price: 2549.99,
        imageURL: "images/digital_piano.webp",
    },
]

const priceCurrency = {
    style: "currency",
    currency: "USD"
}

const currencyFormat = new Intl.NumberFormat('en-US', priceCurrency);


// Function to add cards
function cardMake(someArray) {
    document.querySelector(".pianoCard").innerHTML = "";
    // Run through each item on the list
    someArray.forEach(item => {
  
      // Creating html elements
      let container = document.createElement("div");
      let name = document.createElement("h3");
      let brand = document.createElement("p");
      let type = document.createElement("p");
      let price = document.createElement("p");
      let image = document.createElement("img");
  
      // Adding content to the elements
      container.setAttribute("class", "card");
      name.textContent = item.pianoName;
      brand.innerHTML = `<span class="label">Brand:</span> ${item.brand}`;
      type.innerHTML = `<span class="label">Type:</span> ${item.type}`;
      price.innerHTML = `<span class="label">Price:</span> ${currencyFormat.format(item.price)}`;
      image.setAttribute("src", item.imageURL);
      image.setAttribute("alt", `An image of ${item.pianoName}`);
      image.setAttribute("loading", "lazy");
  
      // Adding contents to the container
      container.appendChild(name);
      container.appendChild(brand);
      container.appendChild(type);
      container.appendChild(price);
      container.appendChild(image);
  
      // Appending the container to the existing html element
      document.querySelector(".pianoCard").appendChild(container);
    })
  }
  
// Makes the initial view upon loading
cardMake(pianos);

// Creates different selections depending on the option chosen in nav bar
const menuHome = document.querySelector("#menuAll");
menuHome.addEventListener("click", () => {
  cardMake(pianos);
});

const menuOld = document.querySelector("#menuGrand");
menuOld.addEventListener("click", () => {
  cardMake(pianos.filter(item => item.classification == "Grand"));
});

const menuNew = document.querySelector("#menuUpright");
menuNew.addEventListener("click", () => {
  cardMake(pianos.filter(item => item.classification == "Upright"));
});

const menuLarge = document.querySelector("#menuDigital");
menuLarge.addEventListener("click", () => {
  cardMake(pianos.filter(item => item.classification == "Digital"));
});
