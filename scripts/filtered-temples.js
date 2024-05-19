const menu = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menu.addEventListener('click', () => {
    menu.classList.toggle('show');
    navigation.classList.toggle('show');
})

// FOR FOOTER
// select the DOM element for output
const year = document.querySelector("#currentYear");
const lstModif = document.querySelector('#lastModified');

// use the date object
const today = new Date();

year.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;
lstModif.innerHTML = new Date(document.lastModified);

// Adding temples
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
  ];


// Function to add cards
function cardMake(someArray) {
  document.querySelector(".templeCard").innerHTML = "";
  // Run through each item on the list
  someArray.forEach(item => {

    // Creating html elements
    let container = document.createElement("div");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let image = document.createElement("img");

    // Adding content to the elements
    container.setAttribute("class", "card");
    name.textContent = item.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${item.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${item.dedicated}`;
    area.innerHTML = `<span class="label">Area:</span> ${item.area} sq.ft&#178;`;
    image.setAttribute("src", item.imageUrl);
    image.setAttribute("alt", `${item.templeName} Temple`);
    image.setAttribute("loading", "lazy");

    // Adding contents to the container
    container.appendChild(name);
    container.appendChild(location);
    container.appendChild(dedication);
    container.appendChild(area);
    container.appendChild(image);

    // Appending the container to the existing html element
    document.querySelector(".templeCard").appendChild(container);
  })
}

// Makes the initial view upon loading
cardMake(temples);


// Creates different selections depending on the option chosen in nav bar
const menuHome = document.querySelector("#menuHome");
menuHome.addEventListener("click", () => {
  cardMake(temples);
});

const menuOld = document.querySelector("#menuOld");
menuOld.addEventListener("click", () => {
  cardMake(temples.filter(item => parseFloat(item.dedicated.slice(0, 4)) < 2000));
});

const menuNew = document.querySelector("#menuNew");
menuNew.addEventListener("click", () => {
  cardMake(temples.filter(item => parseFloat(item.dedicated.slice(0, 4)) >= 2000));
});

const menuLarge = document.querySelector("#menuLarge");
menuLarge.addEventListener("click", () => {
  cardMake(temples.filter(item => item.area > 50_000));
});

const menuSmall = document.querySelector("#menuSmall");
menuSmall.addEventListener("click", () => {
  cardMake(temples.filter(item => item.area < 50_000));
});

