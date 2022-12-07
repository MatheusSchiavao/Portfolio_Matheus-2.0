$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 550) {
      $(".navbar").addClass("solid");
      $(".back-to-top").addClass("visible");
    } else {
      $(".navbar").removeClass("solid");
      $(".back-to-top").removeClass("visible");
    }
  });
})