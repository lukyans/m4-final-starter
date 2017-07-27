$( document ).ready(function(){
$("body").on("click", ".mark-as-unread", markAsUnread)
})

function markAsUnread(e) {
  e.preventDefault();
  var thisLink = $(this).closest('.link')
  var linkId = thisLink.data("link-id");
  $.ajax({
    type: "PATCH",
    url: "/api/v1/links/" + linkId,
    data: { read: false },
  }).then(updateLinkStatusRead)
    .fail(displayFailure);
}

function updateLinkStatusRead(link) {
  $(`.link[data-link-id=${link.id}]`).find(".read-status").text(link.read);
  $(`.link[data-link-id=${link.id}]`).css('text-decoration', 'none')
  $(`.link[data-link-id=${link.id}]`).find('.mark-as-unread').text("Mark as read")
  $(`.link[data-link-id=${link.id}]`).find('.mark-as-unread').toggleClass('mark-as-unread mark-as-read');
}

function displayFailure(failureData){
  console.log("FAILED attempt to update Link: " + failureData.responseText);
}
