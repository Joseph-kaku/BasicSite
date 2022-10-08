// const date_now = new Date();
const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

const hamburgerBtn = document.querySelector('.ham');
const navigation = document.querySelector('.navigation');

// hamburgerBtn.addEventListener('click', () => {navigation.classList.toggle('responsive')});


function show()
{
    navigation.classList.toggle('gone')
}

hamburgerBtn.addEventListener('click', show);

let date = new Date();
let currentDate = document.lastModified;
let year = date.getFullYear();
document.querySelector('.year').textContent = year;
document.querySelector('.updated').textContent = currentDate;

document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
