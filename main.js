// Find the form element in the page
let form = document.querySelector('form');
//Listen for submit event on the form and display artisit info
form.addEventListener('submit',displayArtistInfo);

// API Keys
let giphyApiKey ='AoXagPnxpYhzo2HWzj3KaWNTZkwVZ8io';
let scrobblerApiKey ='0a9eb4523d8b519bfda857a49973daeb';

// Function to display artist info
function displayArtistInfo(e) {

// Prevent a link from opening the URL
  e.preventDefault();

// Get the input elment from the HTML and store it in the artistInput variable
  let artistInput = document.querySelector("input");

// Get the value from the input and store it in the artistName variable
  let artistName = artistInput.value;

// this fetch gets and displays the artist album covers
  fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${artistName}&api_key=${scrobblerApiKey}&format=json`)
  .then(res => res.json()) //convert result to json
  .then(response => { //process the json
    console.log(response)
    document.querySelector('h2').innerHTML = response.results.albummatches.album[0].artist
    document.querySelector('#albumCoverOne').src = response.results.albummatches.album[0].image[3]["#text"]
    document.querySelector('#albumCoverTwo').src = response.results.albummatches.album[1].image[3]["#text"]
    document.querySelector('#albumCoverThree').src = response.results.albummatches.album[2].image[3]["#text"]
    document.querySelector('#albumCoverFour').src = response.results.albummatches.album[3].image[3]["#text"]
  });

//this fetch gets and displays the artist bio
  fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${scrobblerApiKey}&format=json`)
  .then(res => res.json())
  .then(response => {
    document.querySelector('#artistBio').textContent = response.artist.bio.content
  });

//this fetch gets and displays a Gif of the artist
  fetch(`https://api.giphy.com/v1/gifs/search?q=${artistName}&api_key=${giphyApiKey}&limit=5`)
  .then(res => res.json())
  .then(json => {
    console.log("image", json.data[0].images.original.url);
    document.querySelector('#artistImage').src= json.data[0].images.original.url
  });
}
