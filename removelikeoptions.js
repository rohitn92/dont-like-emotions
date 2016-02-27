var byebyeemotions = function() {
  var likeHover = document.querySelectorAll('._1oxj'); //accessible_elem
  for(var i=0 ; i<likeHover.length ; i++) {
    likeHover[i].remove()
  }
}
window.addEventListener ('load', function () {
  setTimeout(function () {
    console.log(byebyeemotions())
  }, 1000)
}, false);

$(document).ready(function(){

$(document).on("scroll", function(){

				if ($(document).scrollTop()> 2000) byebyeemotions();

	
		});
});