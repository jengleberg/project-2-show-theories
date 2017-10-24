// Document ready
$(function () {

let url = 'https://api.themoviedb.org/3/discover/tv?api_key=6c9ee9c307b42ea4d152062ce4a5e1eb&language=en-US&sort_by=popularity.desc';
let searchurl = 'https://api.themoviedb.org/3/search/tv?api_key=6c9ee9c307b42ea4d152062ce4a5e1eb&language=en-US&query=';
let showPoster = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";

// JQ call to pull the popular tv shows from the API and append the information into the single ejs template
  $.get(url)
  .done(function(data) {
    let showList = data.results; // creates array from data returned
      for (let i = 0; i < showList.length; i++) { // itterate through the showList array
      let showId = showList[i].id; // grabbing the ID from the showList
          if (showList[i].poster_path !==null) { // checking to see if the show has an image and if not do not use
            $('.showsAlbum').append( // appending the shows.ejs table with the images
              ('<a href="/single?id=' + showId + '">'+'<img src="' + showPoster + showList[i].poster_path + '">' + '</a>'));
            }
            $("img").addClass('col-md-3').attr('id', 'showFrames');}
            });

// event listener on the search button to display the matching shows based on search text.  
  $('#searchButton').on('click', function() {
    event.preventDefault();
    let searchText = $('#search-bar').val(); // grabbing the text entered in to the search field

// JQ call to the api to include the value from the search text.    
  $.get(searchurl+searchText)
  .done(function(data) {
// repeating the same itteration and html append from the popular shows search above
      $('.showsAlbum').empty();
      let showList = data.results;
        for (let i = 0; i < showList.length; i++) {
        let showId = showList[i].id;
        if (showList[i].poster_path !==null) {
            $('.showsAlbum').append(
              ('<a href="/single?id=' + showId + '">'+'<img src="' + showPoster + showList[i].poster_path + '">' + '</a>'));
          }
            $("img").addClass('col-md-3').attr('id', 'showFrames');}
          });
 
        });
   
// resets the search field to be empty
    $('#search-bar').val('');

  });
// Used this for the go back button on the view theories page
function goBack() {
    window.history.back();
}

function createTheory() {
var baseUrl = (window.location).href; // You can also use document.URL
var koopId = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
alert(koopId);
}


