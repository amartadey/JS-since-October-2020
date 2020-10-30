const searchForm = document.querySelector('form');
const searchResult = document.querySelector(".search-result");
const container = document.querySelector(".container");
const APP_ID = '51530db5';
const APP_KEY = '59ddae211418509b4777d396fe07dc79';


let searchQuery = '';
const searchFunction = (e)=>{
     e.preventDefault();
    searchQuery = searchForm.querySelector('input').value;
    console.log(searchQuery);
    fetchAPI(searchQuery);
}


searchForm.addEventListener('submit',searchFunction);
document.querySelector('#ion-icon-btn').addEventListener('click',searchFunction);


async function fetchAPI(searchQuery){
    const BASE_URL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`;
    const response = await fetch(BASE_URL);
    const data = await response.json();
    generateHTML (data.hits);
    console.log(data);
}

function generateHTML(results){
    let generatedHTML = '';
    results.map(result =>{
        generatedHTML += 
        `
        <div class="item">
                        <img src="${result.recipe.image}" alt="">
                        <div class="flex-container">
                            <h1 class="title">${result.recipe.label}</h1>
                            <a href="${result.recipe.url}" target="_blank" class="view-button">View Recipe</a>
                        </div>
                        <p class="item-data">Calories: ${(result.recipe.calories).toFixed(2)}</p>
                    </div>
        `
    });
    searchResult.innerHTML = generatedHTML;
}