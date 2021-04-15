/****** main layout javascript file ******/

$(document).ready(function () {
  // Get the modal ---
  var $lightbox = $("#imgModal");
  // Get the image and insert it inside the modal ---
  $('[data-target="#imgModal"]').on("click", function (event) {
    var $img = $(this).find("img"),
      src = $img.attr("src"),
      alt = $img.attr("alt");
    $lightbox.find("img").attr("src", src);
    $lightbox.find("img").attr("alt", alt);
    //$img.css({ display: "block" });
  });

  $lightbox.on("shown.bs.modal", function (e) {
    var $img = $lightbox.find("img");
    var imgalt = $img.attr("alt");
    $("#caption").text(imgalt);
    //$lightbox.find(".close").removeClass("hidden");
  });

  // When the user clicks on img, close the modal ---
  $("#imgElement").on("click", function (e) {
    $("#imgElement").addClass("out");
    setTimeout(function () {
      $("#imgModal").css({ display: "none" });
      $("#imgElement").removeClass("out");
      $("#imgModal").modal("hide");
      $("body").removeClass("modal-open");
      $(".modal-backdrop").remove();
    }, 400);
  });
});
