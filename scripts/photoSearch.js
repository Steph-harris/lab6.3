$(document).ready(function(){ 
  $(".btn-default").on("click", function(e){
    e.preventDefault();
    var userInp = $("#userAddress").val();
    alert(userInp);

    var googleMapURL = "https://maps.googleapis.com/maps/api/geocode/json"
    googleMapURL += "?address=" + $("#userAddress").val()
    googleMapURL += "?key=AIzaSyAKTEVBldar7wIy2cSl-vYikXkOiW5Sxig"

    $.ajax({
      type: "GET",
      url: googleMapURL,
      success: googleAPISuccessHandler
    });
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

