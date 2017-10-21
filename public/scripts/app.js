$(function () {


	if (top.location.pathname === '/shows') {
		// Brings in our shows from the api
		$.get('https://www.episodate.com/api/most-popular?page=1').done(function(data) {
			let showsList = data.results;
			let showsImg = "https://static.episodate.com/images/tv-show/thumbnail/35624.jpg";

			// Iterate through the results array and display the results on the page.
			for (let i = 0; i < showsList.length; i++) {
				let showsId = showsList[i].id;
				if (showsList[i].image_thumbnail_path !==null) {
				// Creates images and takes path from results to create the src
				$('.shows-list').append(('<a href="/single?id=' + showsId + '">'+'<img src="' + showsImg + showsList[i].image_thumbnail_path + '">' + '</a>'));
			}
			// Gives the imgs a bootstrap class to display four in a row.
			$("img").addClass('col-md-3').attr('id', 'showsAlbum');
		}
});

		}
});