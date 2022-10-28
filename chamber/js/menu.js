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

document.querySelector(".updated").textContent = `Last Modification: ${document.lastModified}`;

// Mon Tues announcement  
const parent = document.querySelector('.mon-tues');

if (now.getDay() == 1 || now.getDay() == 2) {
    document.querySelector('.mon-tues'). 
    style.display = 'block';
}

// calculate the windchill 
const temp = document.querySelector('#t').textContent;
const windspeed = document.querySelector('#ws').textContent;

if (temp < 50 && windspeed > 4.8) {

    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow 
    (windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

    const windchill = document.querySelector('#wc')

    windchill.innerHTML = chill + '&#8457';
}

// calculate days since last visited

if(!localStorage.getItem('lastvisit'))
{
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('diff').textContent = 'This is your first visit';
}
else
{
    setStyles();
}

function setStyles()
{
    let prevDate = localStorage.getItem('lastvisit');
    let currDate = new Date('2022-03-28');

    let difference = currDate - prevDate;
        console.log(difference);
        let daysDifference = Math.floor(difference/1000/60/60/24);

    document.getElementById('diff').textContent = daysDifference;

    localStorage.setItem('lastvisit', Date.now());
}
// lazyload 