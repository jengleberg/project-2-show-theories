$(function () {

// Loads the list of TV Shows into our album

  //   get the popular shows from the api url
    $.get('https://api.themoviedb.org/3/discover/tv?api_key=6c9ee9c307b42ea4d152062ce4a5e1eb&language=en-US&sort_by=popularity.desc').done(function(data) {
      let showList = data.results; // This is the results from the api query. making it a variable called showList
      let showPoster = "https://image.tmdb.org/t/p/w370_and_h556_bestv2"; // Leading URL for the image

    //   Iterate through the results array and display the results on the page.
      for (let i = 0; i < showList.length; i++) {
        let showId = showList[i].id;
        if (showList[i].poster_path !==null) {
     //    Creates images and takes path from results to create the src
        $('.showsAlbum').append(('<a href="/single?id=' + showId + '">'+'<img src="' + showPoster + showList[i].poster_path + '">' + '</a>'));
      }
    //   Gives the imgs a bootstrap class to display four in a row.
      $("img").addClass('col-md-3').attr('id', 'api-entertainment');
    }
    });

  // Prevents enter key from refreshing page
  $('#search-bar').submit(function() {
    event.preventDefault();
  });

  // Calls api to search when search form is submitted
  $('#search-bar-btn').on('click', function() {
    event.preventDefault();
    let searchQuery = $('#search-bar').val();
    // Make the get request for shows or movies depening on the search query
    $.get('https://api.themoviedb.org/3/search/tv?api_key=6c9ee9c307b42ea4d152062ce4a5e1eb&language=en-US&query=' + searchQuery).done(function(data) {
      console.log(data);
      $('.showsAlbum').empty();
      let showList = data.results;
      let showPoster = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";

      // Iterate through the results array and display the results on the page.
      for (let i = 0; i < showList.length; i++) {
        let showId = showList[i].id;
        // Creates images and takes path from results to create the src
        if (showList[i].title !== undefined && showList[i].poster_path !==null) {
        $('.showsAlbum').append(('<a href="/single?id=' + showId + '">'+'<img src="' + showPoster + showList[i].poster_path + '">' + '</a>'));
        // Gives the imgs a bootstrap class to display four in a row.
        $("img").addClass('col-md-3').attr('id', 'api-entertainment');
        }
      }
    });
    //clear the search form
    $('#search-var').val('');
  });

  

    // Change populated movies based on genre dropdown
    $('#genre-btn-movies').on('click', function() {
      event.preventDefault();
      let genreId = $('.genres-form option:selected').val();
      // Make the get request for the movies depending on the genre
      $.get('https://api.themoviedb.org/3/genre/' + genreId + '/movies?api_key=6c9ee9c307b42ea4d152062ce4a5e1eb&language=en-US&include_adult=false&sort_by=created_at.asc').done(function(data) {
        $('.showsAlbum').empty();
        let showList = data.results;
        let showPoster = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";

        // Iterate through the results array and display the results on the page.
        for (let i = 0; i < showList.length; i++) {
          let showId = showList[i].id;
          if (showList[i].poster_path !==null) {
        // Creates images and takes path from results to create the src
        $('.showsAlbum').append(('<a href="/single?id=' + showId + '">'+'<img src="' + showPoster + showList[i].poster_path + '">' + '</a>'));
      }
      // Gives the imgs a bootstrap class to display four in a row.
      $("img").addClass('col-md-3').attr('id', 'api-entertainment');
    }
      });
    });
  




////////////////////////////////
// Show Profile Page Section //
////////////////////////////////

$('#queue-btn').on('click', function() {
  $('.added').empty();
  $('.added').append('<p>' + 'Successfully Added');
});

});