const loapApi=() => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => disPlay(data));
}
const disPlay=quetes1 => {
    
    const blockqutes=document.getElementById('quetes');
    blockqutes.innerText=quetes1.quote;
    // const p=document.createElement('p');
    // p.innerText=quetes1.quote
    // blockqutes.appendChild(p)
}