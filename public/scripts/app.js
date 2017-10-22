$(function () {

	// Only runs this function if on the discover-shows route
	if (top.location.pathname === '/shows') {
		// Pull the discover movies api and make it into an object
		$.get('https://www.episodate.com/api/most-popular?page=1').done(function(data) {
			let showList = data.results;
			let showImage = "https://static.episodate.com/images/tv-show/thumbnail/35624.jpg";

			// Iterate through the results array and display the results on the page.
			for (let i = 0; i < showList.length; i++); {
				let showId = showList[i].id;
				if (showList[i].image_thumbnail_path !==null) {
				// Creates images and takes path from results to create the src
				$('.show-list').append(('<a href="/single?id=' + showId + '">'+'<img src="' + showImage + showList[i].image_thumbnail_path + '">' + '</a>'));
			}
			// Gives the imgs a bootstrap class to display four in a row.
			$("img").addClass('col-md-3').attr('id', 'shows-album');
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
		$.get('https://www.episodate.com/api/search?q=' + searchQuery).done(function(data) {
			console.log(data);
			$('.shows-list').empty();
			let showList = data.results;
			let showImage = "https://static.episodate.com/images/tv-show/thumbnail/35624.jpg";

			// Iterate through the results array and display the results on the page.
			for (let i = 0; i < showList.length; i++) {
				let showId = showList[i].id;
				// Creates images and takes path from results to create the src
				if (showList[i].title !== undefined && showList[i].image_thumbnail_path !==null) {
				$('.shows-list').append(('<a href="/single?id=' + showId + '">'+'<img src="' + showImage + showList[i].image_thumbnail_path + '">' + '</a>'));
				// Gives the imgs a bootstrap class to display four in a row.
				$("img").addClass('col-md-3').attr('id', 'shows-album');
				}
			}
		});
		//clear the search form
		$('#search-var').val('');
	});

	

		
		

	}
});

////////////////////////////////
// Media Profile Page Section //
////////////////////////////////

$('#queue-btn').on('click', function() {
	$('.added').empty();
	$('.added').append('<p>' + 'Successfully Added');


});