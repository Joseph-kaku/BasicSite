// SEQUENCE

// dynamic date
let date = new Date();

console.log(date);

//dynamic year
let year = date.getFullYear();

console.log(year);

document.querySelector('h1').textContent = year;

let currentDate = document.lastModified;

console.log(currentDate);

document.querySelector('div').textContent = currentDate;