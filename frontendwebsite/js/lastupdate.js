let date = new Date();
let currentDate = document.lastModified;
let year = date.getFullYear();
document.querySelector('.year').textContent = year;
document.querySelector('.updated').textContent = currentDate;

document.querySelector(".updated").textContent = `Last Modification: ${document.lastModified}`;