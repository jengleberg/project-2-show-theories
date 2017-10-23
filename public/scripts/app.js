$(function () {



$.get('https://api.themoviedb.org/3/discover/tv?api_key=6c9ee9c307b42ea4d152062ce4a5e1eb&language=en-US&sort_by=popularity.desc')
.done(function(data) {
let showList = data.results; 
let showPoster = "https://image.tmdb.org/t/p/w370_and_h556_bestv2"; 
  for (let i = 0; i < showList.length; i++) {
        let showId = showList[i].id;
          if (showList[i].poster_path !==null) {
            $('.showsAlbum').append(
              ('<a href="/single?id=' + showId + '">'+'<img src="' + showPoster + showList[i].poster_path + '">' + '</a>'));
          }
            $("img").addClass('col-md-3').attr('id', 'showFrames');}
          });
    
    $('#searchButton').on('click', function() {
    event.preventDefault();
    let searchText = $('#search-bar').val();
  
    $.get('https://api.themoviedb.org/3/search/tv?api_key=6c9ee9c307b42ea4d152062ce4a5e1eb&language=en-US&query='+searchText)
    .done(function(data) {
      
      $('.showsAlbum').empty();
      let showList = data.results;
      let showPoster = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";
        for (let i = 0; i < showList.length; i++) {
        let showId = showList[i].id;
        if (showList[i].poster_path !==null) {
            $('.showsAlbum').append(
              ('<a href="/single?id=' + showId + '">'+'<img src="' + showPoster + showList[i].poster_path + '">' + '</a>'));
          }
            $("img").addClass('col-md-3').attr('id', 'showFrames');}
          });
 
        });
   
   
    $('#search-bar').val('');

  });
