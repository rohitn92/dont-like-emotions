var byebyeemotions = function() {
  var likeHover = document.querySelectorAll('._1oxj');
  for(var i=0 ; i<likeHover.length ; i++) {
    likeHover[i].remove()
  }
}
window.addEventListener ('load', function () {
  setTimeout(function () {
    console.log(byebyeemotions())
  }, 2000)
}, false)
