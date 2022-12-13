var searchInput = document.querySelector('.search');
var cardWrapper = document.querySelector('main');


function fetchMovies(event) {
    var keyCode = event.keyCode;
    var searchText = searchInput.value;

    if (keyCode === 13 && searchText) {
        console.log('works')
    }
}


function init(){
    searchInput.addEventListener('keydown', fetchMovies)
}

init();

























{/* <div class="movie-card"></div>
<h3>Movie Title</h3>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
<a href="#">View More Info Here</a>
</div> */}