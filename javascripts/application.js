$(document).ready(function() {
  $('#topbar').scrollSpy();
  $(".twipsies a").each(function () {
    $(this).twipsy({
      live: false,
      placement: $(this).attr('data-placement'),
      trigger: 'hover',
      offset: 2
    })
    .twipsy();
  })
});
