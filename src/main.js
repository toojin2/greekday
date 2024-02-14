"use strict";

// document.addEventListener("DOMContentLoaded", () => {
//   let docElement = document.docElement;
//   window.addEventListener("scroll", function () {
//     let scrollAmount = docElement.scrolltop; //문서의 스크롤양
//     console.log(scrollAmount);
//   });
// });

$(function () {
  //버튼 호버시 효과
  $(".brand_btn")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find(".brand_btn_pointer").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find(".brand_btn_pointer").css({ top: relY, left: relX });
    });
});
