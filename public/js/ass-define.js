$(window).scroll(function(){
        var window_top = $(window).scrollTop() + 12;
        var div_top_1 = $('.section1').offset().top; // the "12" should equal the margin-top value for nav.stick
        var div_top_2 = $('.section2').offset().top;
        var div_top_3= $('.section3').offset().top;
        var div_top_4= $('.section4').offset().top;
        var div_top_5= $('.section5').offset().top;
        var div_top_6= $('.section6').offset().top;
        var div_top_7= $('.footer-section').offset().top;
        // console.log("wind---"+window_top);
        if(window_top > 1212){
          var ggg = parseInt((window_top-1212)/2);
          if(ggg < 200) {
              // console.log("ddddddd---"+ggg);
              $('#tracescg1 .cls-1').css("stroke-dashoffset", 200-ggg);
          }
        }

        if(window_top > 1646){
          var ggg = parseInt((window_top-1646)*1.5);
          if(ggg < 1000) {
              // console.log("ddddddd---"+ggg);
              $('#tracescg2 .cls-2').css("stroke-dashoffset", 1000-ggg);
          }
        }
        if(window_top > 2050){
          var ggg = (window_top-2050)*2;
          if(ggg < 1000) {
              // console.log("ddddddd---"+ggg);
              $('#tracescg3 .cls-2').css("stroke-dashoffset", 1000-ggg);
          }
        }
        if(window_top > 1500){
          var ggg = parseInt((window_top-1500)/3);
          // console.log("ddddddd---"+ggg);
          if(ggg < 200) {
              // console.log("ddddddd---"+ggg);
              $('#tracescg4 .cls-1').css("stroke-dashoffset", 200-ggg);
          }
        }
        if(window_top > 1800){
          var ggg = parseInt((window_top-1800)/3);
          // console.log("ddddddd---"+ggg);
          if(ggg < 200) {
              // console.log("ddddddd---"+ggg);
              $('#tracescg5 .cls-1').css("stroke-dashoffset", 200-ggg);
          }
        }
        // console.log("div---"+div_top_7);
        if(window_top >0 && window_top < div_top_2){
          $(".current").removeClass('current');
          $(".m1").addClass(' current');
        }
        if(window_top >div_top_2 && window_top < div_top_3){
          $(".current").removeClass('current');
          $(".m2").addClass(' current');
        }
        if(window_top >div_top_3 && window_top < div_top_4){
          $(".current").removeClass('current');
          $(".m3").addClass(' current');
        }
        if(window_top >div_top_4 && window_top < div_top_5){
          $(".current").removeClass('current');
          $(".m4").addClass(' current');
        }
        if(window_top >div_top_5 && window_top < div_top_6){
          $(".current").removeClass('current');
          $(".m5").addClass(' current');
        }
        if(window_top >=div_top_6){
          $(".current").removeClass('current');
          $(".m6").addClass(' current');
        }
        if(window_top >=div_top_7-40){
          $(".current").removeClass('current');
          $(".m7").addClass(' current');
        }
    });

$(document).ready(function() {

    $("#menucartimg_id").on("click", function(){
        if($(window).width() < 768)
        {
          document.getElementById('popup1').style.visibility='visible';
         document.getElementById('popup1').style.opacity =1;
       }
     });
  $(".rollover").on("click", function(){
      document.getElementById('popup1').style.visibility='visible';
     document.getElementById('popup1').style.opacity =1;
    });
  $(".close").on("click", function(){
      document.getElementById('popup1').style.visibility='hidden';
     document.getElementById('popup1').style.opacity =0;
    });
  $('.m1').click(function(){
    $('html, body').animate({
        scrollTop: $('.section1').offset().top
    }, 1000);
  });
  $('.m2').click(function(){
    $('html, body').animate({
        scrollTop: $('.section2').offset().top
    }, 1000);
  });
  $('.m3').click(function(){
    $('html, body').animate({
        scrollTop: $('.section3').offset().top
    }, 1000);
  });
  $('.m4').click(function(){
    $('html, body').animate({
        scrollTop: $('.section4').offset().top
    }, 1000);
  });
  $('.m5').click(function(){
    $('html, body').animate({
        scrollTop: $('.section5').offset().top
    }, 1000);
  });
  $('.m6').click(function(){
    $('html, body').animate({
        scrollTop: $('.section6').offset().top
    }, 1000);
  });
  $('.m7').click(function(){
    $('html, body').animate({
        scrollTop: $('.footer-section').offset().top
    }, 1000);
  });
  $('.scrolldown_div').click(function(){
    $('html, body').animate({
        scrollTop: $('.section2').offset().top
    }, 1000);
  });
});
