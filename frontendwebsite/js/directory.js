const requestURL = "https://joseph-kaku.github.io/wdd230/manga.json"

async function getBusiness(requestURL) 
{
    const response = await fetch(requestURL)
    if (response.ok) 
    {
        const jsObject = await response.json();
        const manga = jsObject['manga'];
        manga.forEach(displayCards);
    }
}

function displayCards(item)
{
    let card = document.createElement('section');
    

    // web.innerHTML = `<a href="${item.website}">${item.website}</a>`

    img.setAttribute('src', item.image);
    img.setAttribute('alt', item.name + 'img');

    manganame.textContent = item.name;
   

    card.appendChild(img);
   
    

   


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



