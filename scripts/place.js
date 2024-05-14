// FOR FOOTER
// select the DOM element for output
const year = document.querySelector("#currentYear");
const lstModif = document.querySelector('#lastModified');

// use the date object
const today = new Date();

year.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;
lstModif.innerHTML = new Date(document.lastModified);

// WINDCHILL
// select the DOM element for output
const windChill = document.querySelector("#windChill");
const temperature = parseFloat(document.querySelector("#temperature").textContent);
const wind = parseFloat(document.querySelector("#wind").textContent);

// const chillData = document.createElement("td");
// chillData.style.textAlign = 'left';

function calculateWindChill(t, v){
    return 35.74 + (0.6215*t) - (35.75*(v**0.16)) + (0.4275*(v**0.16));
}

if (temperature <= 10 && wind > 4.8) {
    windChill.innerHTML = `${calculateWindChill(temperature, wind).toFixed(2)} &#8451;`;
}
else {
    windChill.innerHTML = "N/A";
}