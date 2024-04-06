"use strict";
$(function () {
  //버튼 호버시 효과
  $(".brand_btn")
    .on("mouseenter", function (e) {
      const parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find(".brand_btn_pointer").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      const parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find(".brand_btn_pointer").css({ top: relY, left: relX });
    });

  /*desktop header2 nav메뉴펼치는*/
  $(".navi").on("mouseover", function () {
    if ($(window).innerWidth() > 1024) {
      $(this).find(".navi_wrap").stop().slideDown(200);
      $(this).parents(".header2").addClass("active");
    }
  });
  $(".navi").on("mouseout", function () {
    if ($(window).innerWidth() > 1024) {
      $(this).find(".navi_wrap").stop().slideUp(200);
      $(this).parents(".header2").removeClass("active");
    }
  });
  /*tablet,mobile header2 nav toggle메뉴 */
  $(".navi_list").on("click", function () {
    if ($(window).innerWidth() < 1024) {
      $(this).children(".navi_wrap").stop().slideToggle(200);
    }
  });
  $(".menu_icon").on("click", function () {
    if ($(window).innerWidth() < 1024) {
      $(this).stop().addClass();
      $(".x_icon").css({ display: "block" });
      $(".header2").addClass("animate");
    }
  });
  $(".x_icon").on("click", function () {
    $(this).stop().toggle();
    $(".menu_icon").css({ display: "block" });
    $(".navi_wrap").stop().slideUp();
    $(".header2").removeClass("animate");
  });
});
