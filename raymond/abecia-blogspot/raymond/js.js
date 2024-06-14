$(document).ready(function() {
    $('.menu-trigger').click(function() {
      $('ul li').slideToggle(500);
    });//end slide toggle
    
    $(window).resize(function() {		
          if (  $(window).width() > 500 ) {			
              $('ul li').removeAttr('style');
           }
      });//end resize
  });//end ready
  $("figure").mouseleave(
    function () {
    $(this).removeClass("hover");
    }
    );
    /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );