
document.getElementById('errorId').style.display='none';
document.getElementById('errorId2').style.display='none';
const seachbutton=() =>{
    const seach=document.getElementById('searchInput');
    const seachtext=seach.value;
    if(seach.value==''){
      document.getElementById('errorId2').style.display='block';
      show.textContent='';

    }
    else{
      document.getElementById('errorId2').style.display='none';
    }
  
    seach.value='';
  
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${seachtext}`
    fetch(url)
    .then(res => res.json())
    .then(data =>dispaly(data.meals))
    .catch(error=>dispalyError(error))


}
const dispalyError=error=>{
  document.getElementById('errorId').style.display='block';
}
const dispaly=foods =>{


const show=document.getElementById('seachCard')
show.textContent='';


for (const food of foods){
    // console.log(food)
    const div=document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
    <div onclick="showIngleElement(${food.idMeal})" class="card">
    <img src="${food.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${food.strMeal}</h5>
      <p class="card-text">${food.strInstructions.slice(0,150)}</p>
    </div>
  </div>
    
    `;

    show.appendChild(div)
}
}
const showIngleElement=(sinlgleMelas) =>{

  const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${sinlgleMelas}`
  fetch(url)
  .then(res =>res.json())
  .then(data=>singledetailsdisplay(data.meals[0]))
}
const singledetailsdisplay=(display)=>{
  // console.log(display)
  const cardContainer=document.getElementById('single-element');
  cardContainer.textContent='';
  // console.log(cardContainer)
  const div=document.createElement('div');
  div.classList.add('card');
  div.innerHTML=`
  <div class="card" style="width: 18rem;">
  <img src=${display.strMealThumb} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${display.strMeal}</h5>
    <p class="card-text">${display.strInstructions.slice(0,150)}.</p>
    <a href="#" class="btn btn-primary">${display.strYoutube}</a>
  </div>
</div>`;
console.log(div)
cardContainer.appendChild(div)
}

