$(document).ready(function () {

  const pageTitle = document.getElementById("page-title");

  // make pagetitle editable
  pageTitle.addEventListener("input", function () {
    this.setAttribute("data-heading", this.innerText);
  });

  // add glitch effect on img on hover and remove when not
  $('.card-item').hover(
    function () {
      $(this).find('.card-item-image').addClass("glitch-img");

      $(this).find('.card-item-image').mgGlitch({
        destroy: false,
        glitch: true,
        scale: true,
        blend: true,
        blendModeType: 'hue',
        glitch1TimeMin: 200,
        glitch1TimeMax: 400,
        glitch2TimeMin: 10,
        glitch2TimeMax: 100,
      });
    },
    function () {
      $(this).find('.card-item-image').removeClass("glitch-img");
      $(this).find('.card-item-image').mgGlitch({
        destroy: true
      });
    }
  );

  // show cards when scrolling
  ScrollReveal({
    reset: true
  }).reveal('.card-item');

});
