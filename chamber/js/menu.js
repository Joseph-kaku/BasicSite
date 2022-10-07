// const date_now = new Date();

// const full_date = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(date_now);

const hamburgerBtn = document.querySelector('.ham')
const navigation = document.querySelector('.navigation')

let date = new Date();
let currentDate = document.lastModified;
let year = date.getFullYear();
document.querySelector('.year').textContent = year;
document.querySelector('.updated').textContent = currentDate;

