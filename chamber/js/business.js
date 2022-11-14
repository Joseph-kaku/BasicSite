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
    let businessname = document.createElement('h1');
    let addy = document.createElement('p');
    let phone = document.createElement('p')
    let web  = document.createElement("a");
    // let img = document.createElement('img');

    businessname.textContent = item.name;
    addy.textContent = item.address;
    phone.textContent = item.phone;
    web.setAttribute('href', item.website);
    // img.setAttribute('src', item.image);

    card.appendChild(businessname);
    card.appendChild(addy);
    card.appendChild(phone);
    card.appendChild(web);

    // card.appendChild(img);

    document.querySelector('.cards').appendChild(card);
}

// function displayList(item) {
//     let row = document.createElement('td');

//     row.textContent = item.name

//     list.appendChild(td);

//     document.querySelector('.list').appendChild(list)
// }


getBusiness(requestURL);

