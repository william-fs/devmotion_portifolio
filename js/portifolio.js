

$(document).ready(function(){

        $('.modal').on('hidden.bs.modal', function () {
          location.reload();
        });

        $("#btn-all").click(function() {
          $("#cat01").show("300");
          $("#cat02").show("300");
          $("#cat03").show("300");
          $("#cat04").show("300");
        });

        $("#btn-01").click(function() {
          $("#cat01").show("300");
          $("#cat02").hide("300");
          $("#cat03").hide("300");
          $("#cat04").hide("300");
        });

        $("#btn-02").click(function() {
          $("#cat01").hide("300");
          $("#cat02").show("300");
          $("#cat03").hide("300");
          $("#cat04").hide("300");
        });

        $("#btn-03").click(function() {
          $("#cat01").hide("300");
          $("#cat02").hide("300");
          $("#cat03").show("300");
          $("#cat04").hide("300");
        });

        jQuery(function($) {
        $(document).on('click', '.lightboxgallery-gallery-item', function(event) {
          event.preventDefault();
          $(this).lightboxgallery({
            showCounter: true,
            showTitle: true,
            showDescription: true
          });
        });
      });




      });