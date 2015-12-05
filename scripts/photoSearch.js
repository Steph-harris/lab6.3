$(document).ready(function(){
  
  $(".btn-default").on("click", function(e){
    e.preventDefault();
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