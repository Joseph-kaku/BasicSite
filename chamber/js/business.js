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
    let h2 = document.createElement('h2');
    let img = document.createElement('img');

    h2.textContent = item.name;
    img.setAttribute('src', item.image);

    card.appendChild(h2);
    card.appendChild(img);

    document.querySelector('.cards').appendChild(card);
}

getBusiness(requestURL);