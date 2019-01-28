$(document).ready(function () {

  const pageTitle = document.getElementById("page-title");

  // make pagetitle editable
  pageTitle.addEventListener("input", function () {
    this.setAttribute("data-heading", this.innerText);
  });

  // add glitch effect on img on hover and remove when not
  $('.portfolio-item').hover(
    function () {
      $(this).find('.portfolio-item-image').addClass("glitch-img");

      $(this).find('.portfolio-item-image').mgGlitch({
        // set 'true' to stop the plugin
        destroy: false,
        // set 'false' to stop glitching
        glitch: true,
        // set 'false' to stop scaling
        scale: true,
        // set 'false' to stop glitch blending
        blend: true,
        // select blend mode type
        blendModeType: 'hue',
        // set min time for glitch 1 elem
        glitch1TimeMin: 200,
        // set max time for glitch 1 elem
        glitch1TimeMax: 400,
        // set min time for glitch 2 elem
        glitch2TimeMin: 10,
        // set max time for glitch 2 elem
        glitch2TimeMax: 100,
      });
    },
    function () {
      $(this).find('.portfolio-item-image').removeClass("glitch-img");
      $(this).find('.portfolio-item-image').mgGlitch({
        // set 'true' to stop the plugin
        destroy: true
      });
    }
  );

});
