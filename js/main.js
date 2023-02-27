const movie = 'http://www.omdbapi.com/?i=tt3896198&apikey=534bf77b';
const slider = document.querySelector(".slider");
const info = document.querySelector(".information");
const next = document.querySelector(".next");
const movie_rating = document.querySelector(".movie-rating");
const plus_information = document.querySelector(".plus-information");
const imbd_rating = document.querySelector(".iMBD-rating");
fetch(movie).then((response)=> response.json()).then((element)=> {
    console.log(element);
    slider.innerHTML = `<a href="#"><img src="${element.Poster}" alt="${element.Title}"></a>`
    info.innerHTML = `
    <h1>Name: ${element.Title}</h1>
    <p>About: ${element.Plot}</p>
    <span class="d-block">Director: ${element.Director}</span>
    <span class="d-block">Genre: ${element.Genre}</span>
    <span class="d-block">On DVD: ${element.DVD}</span>
    `
    next.innerHTML = `
    <p>Awards: ${element.Awards}</p>
    <span class="d-block">Budget: ${element.BoxOffice}</span>
    <span class="d-block">Country: ${element.Country}</span>
    <span class="d-block">Language: ${element.Language}</span>
    `
    const ratings = element.Ratings;
    const newReyting = ratings.map((e)=>{
        return`
    <li>
		<div class="date">${e.Value}</div>
		<h2 class="entry-title"><a href="#">${e.Source}</a></h2>
	</li>
    `
    });
    movie_rating.innerHTML = newReyting.join();

    plus_information.innerHTML =
    `
    <li>
		<div class="date">${element.Runtime}</div>
		<h2 class="entry-title">Runtime</h2>
	</li>
    <li>
		<div class="date">Writer</div>
		<h2 class="entry-title">${element.Writer}</h2>
	</li>
    <li>
		<div class="date">${element.Year}</div>
		<h2 class="entry-title">Year</h2>
	</li>
    `

    imbd_rating.innerHTML = 
    `
    <li>
		<div class="date">${element.imdbID}</div>
		<h2 class="entry-title">iMdb ID</h2>
	</li>
    <li>
		<div class="date">${element.imdbRating}</div>
		<h2 class="entry-title">iMDB Rating</h2>
	</li>
    <li>
		<div class="date">${element.imdbVotes}</div>
		<h2 class="entry-title">iMDB Votes</h2>
	</li>
    `
    imdbID
: 
"tt3896198"
imdbRating
: 
"7.6"
imdbVotes
: 
"691,435"
})