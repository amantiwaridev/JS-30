// const endPoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const endPoint = "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/dbae5d894564490a239fff7435841dc120f6ce9e/cities.json";
//I will do the exercise with Indian data
// https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/dbae5d894564490a239fff7435841dc120f6ce9e/cities.json

const cities = [];

// const fet = fetch(endPoint);
// console.log(fet)

// fetch(endPoint)
//     .then(function (blob){
//         console.log(blob);
//     });


fetch(endPoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))

// console.log(cities);

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        //here we need to figure out if name or state matches with searched data
        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex) || place.state.match(regex)
    });
}

function displayMatches(){
    // console.log(this.value);
    let matchArr = findMatches(this.value, cities);
    // console.log(matchArr);
    const html = matchArr.map(place => {
        return `<li>
            <span class="name">${place.name}, ${place.state}</span>
            
        </li>`;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
// console.log(searchInput);
const suggestions = document.querySelector(".suggestions");
// console.log(suggestions)

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);



// <span class="population">${place.population}</span>