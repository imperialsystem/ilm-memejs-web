/****** main layout javascript file *****/

$(document).ready(function () {
   // Get the image and insert it inside the modal ---
   $('.imgLink').on('click', function (event) {
      var $img = $(this).find('img'),
         src = $img.attr('src'),
         alt = $img.attr('alt');
      $('#imgModal').find('img').attr('src', src);
      $('#imgModal').find('img').attr('alt', alt);
   });

   $('#imgModal').on('shown.bs.modal', function (e) {
      var $img = $('#imgModal').find('img');
      var imgalt = $img.attr('alt');
      $('#imageModalLabel').text(imgalt);
      $img.css({ width: '100%' });
      $('.modal-title').css({
         'font-family': 'Orbitron'
      });
   });
});
