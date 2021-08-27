const dataLoad=() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayData(data))
}
dataLoad()
const displayData=countries=>{
    const container=document.getElementById('countries');
   for(const country of countries){
       const div=document.createElement('div');
       div.innerHTML=`<h3>${country.name}</h3>
       <p>${country.capital}</p>
       <button onclick="specifynameDetails('${country.name}')">Details</button>`
       div.classList.add('countryInformation')
       container.appendChild(div)
   }
 
}
const specifynameDetails=name=>{
    const url=`https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayByDetails(data[0]))
}
const displayByDetails=data =>{
    console.log(data)
    const details=document.getElementById('details');
    details.innerHTML=`
    <h3> Name:${data.name} </h3>
    <p>Population:${data.population}</p>
    <img width=200px src="${data.flag}">
   
    `
}