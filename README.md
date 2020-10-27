# 📊 Project: Complex API 2

1. The requirements were to make request to 2 separate APIs and combine the results on a webpage.

2. The project meets the requirements by using client side Javascript to fetch data from the album search API found at http://ws.audioscrobbler.com to return albums and bios of the artist supplied by the user. Then, it uses the GIF API found at https://api.giphy.com to fetch an image featuring the artist. Then the program places the combined output of the two APIs into the page.

3. The project uses the fetch function to make calls to the APIs, and then places the results on the page using document.querySelector to find the HTML elements in which to insert the content into the DOM.

4. I wrote the code myself with the help of Resilient Coders mentors.

5. I would improve the UX/UI design by using CSS to change the layout of the page, the colors, fonts, and spacing. I would also work on beautifying the input and the button contained in the form where the user enters and submits the artist's name to the Javascript code. In the Javascript code I would add a conditional to clear the GIF if one is not found for the artist. Currently the expected behavior is to show 4 albums. However, in the process of testing the app for the interview I noticed that not all artists have 4 albums. To fix this, I would add a loop which will not go past the end of the albums returned by the API.

6. This project is purely client side HTML, CSS, and Javascript and therefore it does not require a web server. You may download the files from Github in the form of a zip file and open the index.html file in your browser. Alternatively, one could set up a web server and configure it to serve these files via the HTTP protocol. Or simply click on this URL hosted at GitHub pages: https://faisalrashed89.github.io/artistinfo/
