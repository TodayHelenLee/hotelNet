var aLink = document.querySelectorAll('a');
for(var i = 0 ;i < aLink.length;i++){
  aLink[i].onclick = function(event){
    event.preventDefault()
  }
}

$(document).ready(function () {
    $(".images>li").hide();
    $(".rooms>div>.six,.four").hide();
    $(".foot,.bar").hide();
    $(".main>h1").hide();

    window.onscroll = function () {
      if (document.documentElement.scrollTop > 1200) {
        $(".bar").show();
      } else {
        $(".bar").hide();
      }
      if (document.documentElement.scrollTop > 650) {
        $(".main>h1").show();
        $(".main>h1").addClass("rotateInUpRight");
      }
      if (document.documentElement.scrollTop > 900) {
        $(".images>li").show();
        $(".images>li").addClass("fadeInUp");
      }
      if (document.documentElement.scrollTop > 1600) {
        $(".rooms>div>.six,.four").show();
        $(".rooms>div>.six,.four").addClass("fadeInUp");
      }
      if (document.documentElement.scrollTop > 2100) {
        $(".foot").fadeIn(4000);
      }
    };

    document.querySelector(".menu").onclick = function () {
      document.querySelector("body").style.overflow = "hidden";
      $(".table").addClass("new");
      $(".lists,.leftpage,.rightpage").removeClass("add");

      $(".lists")
        .mouseenter(function () {
          $(".topButton,.bottomButton").css("color", "rgb(0, 128, 0)");
        })
        .mouseleave(function () {
          $(".topButton,.bottomButton").css("color", "rgb(139, 0, 0)");
        });
    };
    document.querySelector(".fas.fa-times").onclick = function () {
      $(".lists,.leftpage,.rightpage").addClass("add");
      function vanish() {
        $(".table").removeClass("new");
        document.querySelector("body").style.overflow = "auto";
      }
      setTimeout(vanish, 2600);
    };

    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var images = document.getElementById("images");
    $(p1).on("click", function () {
      $(images).css({
        transform: "translateX(0)",
      });
    });
    $(p2).on("click", function () {
      $(images).css({
        transform: "translateX(-1200px)",
      });
    });
    $(p3).on("click", function () {
      $(images).css({
        transform: "translateX(-2400px)",
      });
    });
  });