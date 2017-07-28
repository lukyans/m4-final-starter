$(document).ready(function(){
  $("body").on("click", ".mark-as-read", markAsRead)
});

function markAsRead(e) {
  e.preventDefault();
  var thisLink = $(this).closest('.link')
  var linkId = thisLink.data("link-id");
  var link_url = thisLink.children('.link-url')[0].innerText

  $.ajax({
    type: "PATCH",
    url: "/api/v1/links/" + linkId,
    data: { read: true },
  }).then(updateLinkStatus)
    .fail(displayFailure);

    var formData = link_url
    $.ajax({
      type: "POST",
      url: "http://hot-reads-sl.herokuapp.com/api/v1/links/" + linkId,
      dataType: "json",
      data: {url: formData}
    })

    $.ajax({
      type: "GET",
      url: "http://hot-reads-sl.herokuapp.com/api/v1/links/",
    }).then(function(data){
      sortHotRead(data)
      { updateHotLink(data)}
    })
}

function updateLinkStatus(link) {
  $(`.link[data-link-id=${link.id}]`).find(".read-status").text(link.read);
  $(`.link[data-link-id=${link.id}]`).css('text-decoration', 'line-through')
  $(`.link[data-link-id=${link.id}]`).find('.mark-as-read').text("Mark as unread")
  $(`.link[data-link-id=${link.id}]`).find('.mark-as-read').toggleClass('mark-as-read mark-as-unread');
}

function updateHotLink(data){
  var hotLinks = dataUrls(data)
  $('.link-url').each(function(index, link){
    var regularLink = $(this).text();
    var trimed = regularLink.trim()
    if (hotLinks[0] == trimed){
      $(link).parent().find('.hot-read').text("TOP LINK!")
    } else if (hotLinks.includes(trimed)){
      $(link).parent().find('.hot-read').text("HOT!")
    } else {
      $(link).parent().find('.hot-read').text("")
        }
    })
  }

  function dataUrls(data) {
    var urls = [];
    data.forEach(function (link){
      urls.push(link.url);
    });
    return urls;
  }

function sortHotRead(data){
  data.sort(function(a, b){
    var a1= a.count, b1= b.count;
    if(a1== b1) return 0;
    return a1< b1? 1: -1;
  });
}

function displayFailure(failureData){
  console.log("FAILED attempt to update Link: " + failureData.responseText);
}
