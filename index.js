$(document).ready(function () {
  var menu = $("li");
  var need = $("a");
  var card = $(".cenimg");

  $(".header_top span i").on("click", function () {
    $(".header_top .menu ").slideToggle();
  });

  var audio = document.querySelector(".audio");

  $(".imgAudio").on("mouseover", function (e) {
    console.log(audio.play());
  });

  $(menu).on("mouseover", function (e) {
    $(this).css({
      transform: "rotate(" + "20" + "deg)",
      transition: "600ms",
      "font-size": "40px",
    });
    e.preventDefault();
  });
  $(menu).on("mouseout", function (e) {
    $(need).css({ color: "black" });
    $(this).css({ transform: "rotate(" + "0" + "deg)", "font-size": "16px" });
    e.preventDefault();
  });

  $(need).on("mouseover", function (e) {
    $(this).css({ color: "mediumslateblue" });
    e.preventDefault();
  });

  function himg() {
    if (!(window.scrollY >= $(".section_top")[0].offsetTop)) {
      $(".imghead")
        .animate(
          {
            top: "6%",
          },
          1000
        )
        .animate(
          {
            top: "-5%",
          },
          1000
        );
    }
  }

  himg();

  setInterval(himg, 1000);

  // if (scrollY > $(".section_end2")) {
  //   function lol(e) {
  //     $imghead().e.preventDefault;
  //   }
  //   lol();
  // }

  let section_centerNumber = 0;
  $(window).scroll(function () {
    if (window.scrollY >= document.querySelector(".section_center").offsetTop) {
      if (section_centerNumber == 0) {
        $(".imgc2").animate(
          {
            left: "27%",
            opacity: "1",
          },
          1000
        );
        section_centerNumber++;
      }
    }
  });

  /*    $(card).on("click" , function () {
         $(this).animate({
            width: "35%",
            border: "red"
         })
      })
       */

  let section_centerNumber2 = 0;
  $(window).scroll(function () {
    if (window.scrollY >= document.querySelector(".section_center").offsetTop) {
      if (section_centerNumber2 == 0) {
        $(".imgc2").animate(
          {
            left: "14%",
            opacity: "1",
          },
          1000
        );
        section_centerNumber2++;
      }
    }
  });

  let section_center2Number = 0;
  $(window).scroll(function () {
    if (
      window.scrollY >= document.querySelector(".section_center2").offsetTop
    ) {
      if (section_center2Number == 0) {
        $(".imgc3").animate(
          {
            right: "14%",
            opacity: "1",
          },
          1000
        );
        section_center2Number++;
      }
    }
  });

  let section_center3Number = 0;
  $(window).scroll(function () {
    if (
      window.scrollY >= document.querySelector(".section_center3").offsetTop
    ) {
      if (section_center3Number == 0) {
        $(".imgc4").animate(
          {
            left: "14%",
            opacity: "1",
          },
          1000
        );
        section_center3Number++;
      }
    }
  });

  $(".clickk").on("click", function () {
    $(".toggle").css("transform", "scale(1)").slideToggle(1000);
  });




  var $click_a = $('.header_top ul li a')
  

  $click_a.click(function (e) {
      e.preventDefault()
      $click_a.removeClass('active')
      var id = $(this).addClass('active').attr('href')
      var href = $(id).offset().top +100
      $('html , body').animate({
          scrollTop: href
      },500)
  })


  $(window).scroll(function () {
      var scrol = $(this).scrollTop()
      $click_a.each(function () {
          var id__ = $(this).attr('href')
          var hreff = $(id__).offset().top 
          console.log(scrol , hreff);
          if (scrol >= hreff) {
              $click_a.removeClass('active')
             $(this).addClass('active')
          }
      })
  })



});
$(window).scroll(function () {
        
  if($(this).scrollTop() > 100){

      $('#top').fadeIn(600);

  }else{

      $('#top').fadeOut(600);

  }
});
$('#top').click(function(){

   $('html , body').animate({
       scrollTop:0
   } , 900)

});

