$(document).ready(function(){
  
  $(".btn-default").on("click", function(){
    //code goes here!
  });
});

	function buildThumbnail(photoData) {
		var photoUrl = "https://farm" + photoData.farm;
		photoUrl += ".staticflickr.com/" + photoData.server;
		photoUrl += "/" + photoData.id;
		photoUrl += "_" + photoData.secret + ".jpg";

		var colDiv = $("<div>").addClass("col-md-3");
		var thumbnailDiv = $("<div>").addClass("thumbnail");
		var photoImg = $("<img>").attr("src", photoUrl);
		var captionDiv = $("<div").addClass("caption");
		var picTitle = $("<p>").appened(photoData.title);

		colDiv.append(thumbnailDiv
			.append(photoImg)
			.append(captionDiv
				.append(picTitle)
			)
		);
		
		return colDiv;

	}

