$(document).ready(function () {

  const pageTitle = document.getElementById("page-title");

  pageTitle.addEventListener("input", function () {
    this.setAttribute("data-heading", this.innerText);
  });

});
