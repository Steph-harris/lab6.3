$(document).ready(function(){ 
  $(".btn-default").on("click", function(e){
    e.preventDefault();
    var userInp = $("#userAddress").val();
    alert(userInp);
  });
});