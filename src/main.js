//https://wsss.tistory.com/479
//버튼 호버시 효과
$(function () {
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
