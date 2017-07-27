$( document ).ready(function(){
  $("body").on("click", ".mark-as-read", markAsRead)
});

function markAsRead(e) {
  e.preventDefault();
  var thisLink = $(this).closest('.link')
  var linkId = thisLink.data("link-id");

  $.ajax({
    type: "PATCH",
    url: "/api/v1/links/" + linkId,
    data: { read: true },
  }).then(updateLinkStatus)
    .fail(displayFailure);
}

function updateLinkStatus(link) {
  $(`.link[data-link-id=${link.id}]`).find(".read-status").text(link.read);
  $(`.link[data-link-id=${link.id}]`).css('text-decoration', 'line-through')
  $(`.link[data-link-id=${link.id}]`).find('.mark-as-read').text("Mark as unread")
  $(`.link[data-link-id=${link.id}]`).find('.mark-as-read').toggleClass('mark-as-read mark-as-unread');
}

function displayFailure(failureData){
  console.log("FAILED attempt to update Link: " + failureData.responseText);
}
