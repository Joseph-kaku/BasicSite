// calculate days since last visited

if(!localStorage.getItem('lastvisit'))
{
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('diff').textContent = 'This is your 1st visit';
}
else
{
    setStyles();
}

function setStyles()
{
    let prevDate = localStorage.getItem('lastvisit');
    let currDate = new Date();

    let difference = currDate - prevDate;
        console.log(difference);
        let daysDifference = Math.floor(difference/1000/60/60/24);

    document.getElementById('diff').textContent = daysDifference;

    localStorage.setItem('lastvisit', Date.now());
}