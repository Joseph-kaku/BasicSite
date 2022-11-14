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
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    let n = document.createElement('n')
    let web  = document.createElement("a");
    // let img = document.createElement('img');

    h1.textContent = item.name;
    p.textContent = item.address;
    n.textContent = item.phone;
    web.setAttribute('href', item.website);
    // img.setAttribute('src', item.image);

    card.appendChild(h1);
    card.appendChild(p);
    card.appendChild(n);
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

