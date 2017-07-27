$(document).ready(function(){
  $('.show-unread').on('click', showUnread)
})

function showUnread(e){
    e.preventDefault();
    var filter = "false"
    var readStatus = document.getElementsByClassName('read-status')
    for(var i=0; i<readStatus.length; i++){
      let  list = document.getElementsByClassName('read-status')
        var showUnread = readStatus[i].innerText
        if (showUnread == filter){
          $(readStatus[i]).parent().toggleClass('showContent')
        }
        else{
          $(readStatus[i]).parent().toggleClass('hideContent')
        }
    }
}
