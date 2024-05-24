const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
currentYear.innerHTML = `<span id="currentYear">${today.getFullYear()}</span>`;
lastModified.innerHTML = new Date(document.lastModified);
