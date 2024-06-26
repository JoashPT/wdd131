// Modify Date
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
currentYear.innerHTML = `<span id="currentYear">${today.getFullYear()}</span>`;
lastModified.innerHTML = new Date(document.lastModified);

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

function addProducts(someArray) {
  someArray.forEach(item => {
    
    let option = document.createElement("option");
    option.textContent = item.name;
    option.setAttribute("value", item.id);
    document.querySelector("#productList").appendChild(option);
  })
}

addProducts(products);

const counter = document.querySelector("#counter");
const visit = document.querySelector("#visit");

let numVisits = Number(window.localStorage.getItem("numberOfVisits")) || 0;

if (numVisits !== 0) {
  counter.textContent = numVisits;
} else {
  visit.textContent = "This is the first time you visited this page!";
}

numVisits++;

localStorage.setItem("numberOfVisits", numVisits);