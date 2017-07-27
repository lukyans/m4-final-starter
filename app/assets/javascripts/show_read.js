$(document).ready(function(){
  $('.show-read').on('click', showRead)
})

function showRead(e){
    e.preventDefault();
    var filter = "true"
    var readStatus = document.getElementsByClassName('read-status')
    for(var i=0; i<readStatus.length; i++){
      var showRead = readStatus[i].innerText
      if (showRead == filter){
        $(readStatus[i]).parent().toggleClass('showContent')
      }
      else {
        $(readStatus[i]).parent().toggleClass('hideContent')
      }
    }
}
