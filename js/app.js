$(document).ready(function(){

  $(".splash").fadeOut(4000);

  /*** SIGN UP Enable button ***/
    $(".input-phone").on("keyup", function() {
    $(".btn-next-sign").prop("disabled", false);
    if( $(".input-phone").val() == '') {
      $(".btn-next-sign").prop("disabled", true);
     }
    });

  /*** VERIFY PHONE NUMBER Enable button ***/
    $(".btn-lab-code").on("keyup", function() {
    $(".btn-next-code").prop("disabled", false);
    if( $(".btn-lab-code").val() == '') {
      $(".btn-next-code").prop("disabled", true);
     }
    });

  /*** SIGN UP 2 Enable button ***/
    $("#checkbox").click(function (){
      if ($(this).is(".checked")) {
          $("#checkbox-submit").attr("disabled", "disabled");
      } else {
          $("#checkbox-submit").removeAttr("disabled");
      }
    });






});
