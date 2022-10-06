// Your code here
const urlOne = 'http://localhost:3000/films/1';
const urlTwo = 'http://localhost:3000/films';
//let currentFilm; 
//let currentCapacity;
let films;
let film;

fetchFirstFilm(urlOne);

function fetchFirstFilm(urlOne){
fetch(urlOne)
.then(resp => resp.json())
.then(json => renderFilms(json))
}

function fetchAllFilms(urlTwo){
 fetch(urlTwo)
.then(resp => resp.json())
.then(json => renderFilms(json))
}

//fetchFilms(url);

function renderFilms(films){
    films.forEach(displayFilmDetails)
}

//displayFilmDetails(film)

function displayFilmDetails(film){

    const filmTitle = document.querySelector('#title')
    const filmRuntime = document.querySelector('#runtime')
    const filmShowtime = document.querySelector('#showtime')
    const filmDescription = document.querySelector('.description')
    const filmPoster = document.querySelector('#poster')

    filmPoster.src = film.poster
    filmTitle.textContent = film.title
    filmRuntime.textContent = film.runtime
    filmShowtime.textContent = film.showtime
    filmDescription.textContent = film.description

    const filmCard = document.querySelector('.card')
    filmCard.append(filmTitle, filmRuntime, filmShowtime, filmDescription, filmPoster);
}

function displayFilmTitles(film){
    
    fetchAllFilms();
    const filmDiv = document.getElementById('films')
    const filmTitle = document.createElement('li')
    filmTitle.textContent = film.Title
    filmDiv.append(filmTitle)
}

