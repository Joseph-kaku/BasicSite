const requestURL = "https://joseph-kaku.github.io/wdd230/data.json"

async function getBusiness(requestURL) 
{
    const response = await fetch(requestURL)
    if (response.ok) 
    {
        const jsObject = await response.json();
        const businesses = jsObject['businesses'];
        businesses.forEach(displayCards);
    }
}

function displayCards(item)
{
    let card = document.createElement('section');
    let businessname = document.createElement('h3');
    let addy = document.createElement('p');
    let phone = document.createElement('p')
    let web  = document.createElement('p');
    let img = document.createElement('img');

    web.innerHTML = `<a href="${item.website}">${item.website}</a>`

    img.setAttribute('src', item.image);
    img.setAttribute('alt', item.name + 'img');

    businessname.textContent = item.name;
    addy.textContent = item.address;
    phone.textContent = item.phone;

    card.appendChild(businessname);
    card.appendChild(addy);
    card.appendChild(phone);
    card.appendChild(web);
    card.appendChild(img)

   


    document.querySelector('.cards').appendChild(card);
}



getBusiness(requestURL);



const gridView = document.querySelector("#d-card");
const listView = document.querySelector("#d-list");

const currentDivView = document.querySelector(".cards");

gridView.addEventListener('click', togridView);

function togridView() {
    currentDivView.classList.remove("list");
    currentDivView.classList.add("cards");
}

listView.addEventListener('click', tolistView);

function tolistView() {
    currentDivView.classList.remove("cards");
    currentDivView.classList.add("list");
}



