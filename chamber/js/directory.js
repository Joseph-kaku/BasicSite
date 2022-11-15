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
    // let businessname = document.createElement('h1');
    let addy = document.createElement('p');
    let phone = document.createElement('p')
    let web  = document.createElement('p');

    let tr = document.createElement('tr');
    let td = document.createElement('td');
    // let img = document.createElement('img');

    web.innerHTML = `<a href="${item.website}">${item.website}</a>`

    // img.setAttribute('src', item.image);
    // img.setAttribute('alt', item.name + 'img');

    addy.textContent = item.address;
    phone.textContent = item.phone;

    card.appendChild(addy);
    card.appendChild(phone);
    card.appendChild(web);

    tr.innerHTML = `<td>${item.name}</td><td>${item.address}</td><td>${item.phone}</td><td><a href=${item.website}>${item.website}</a></td>`


    document.querySelector('.cards').appendChild(card);
    document.querySelector('.list').appendChild(list);
}


getBusiness(requestURL);

