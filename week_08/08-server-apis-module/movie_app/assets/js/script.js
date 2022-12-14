var searchInput = document.querySelector('.search');
var cardWrapper = document.querySelector('main');

function noMatch(matches) {

}
function displayMatches (matches) {
    cardWrapper.innerHTML = '';
    for (var matchObj of matches) {
        cardWrapper.insertAdjacentHTML('beforeend', `
        <div class="movie-card" style='background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${matchObj.movie_image});'>
            <h3>${matchObj.title}</h3>
            <p>${matchObj.description} </p>
            <a href="${matchObj.imdb_link}" target='_blank>'View More info Here</a>
        </div>
        `);

    }
}



function fetchMovies(event) {
    var keyCode = event.keyCode;
    var searchText = searchInput.value.toLowerCase().trim();

    if (keyCode === 13 && searchText) {
        var matches = [];

        for (var movieObj of movieData) {

            if(movieObj.title.toLowerCase().includes(searchText)) {
                    console.log('match')

            }
        }
        
        searchInput.value = '';
        displayMatches(matches);

        fetch('https://www.omdbapi.com/?apikey=a085959a&t=jurassic park').then(function (responseObj){
            var dataPromise = responseObj.json();

            dataPromise.then(function (data) {

            })
            });
        }
}


function init(){
    searchInput.addEventListener('keydown', fetchMovies)
}

init();

























