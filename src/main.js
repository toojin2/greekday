"use strict";
//스크롤시 header배경색
let header = document.querySelector("#header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  } //header배경색
});

let windowHeight = window.innerHeight;
const partner = document.querySelector(".partner_wrap_list");
const bannerImg1 = document.querySelector(".banner_img_middle");
const bannerImg2 = document.querySelector(".banner_img_bottom");

// 스크롤시 배너 슬라이드업 애니메이션
const homeEventHandler = () => {
  // window 화면 상단에서 한 요소의 가장 높은 위치까지 크기와 윈도우 높이를 비교
  console.log(partner.getBoundingClientRect().top, windowHeight);

  if (bannerImg1.getBoundingClientRect().top - 100 < windowHeight) {
    setTimeout(() => {
      bannerImg1.classList.add("animate");
      // 화면에 시간간격마다 차례대로 화면에 요소를 띄움, 띄어지는 요소는 CSS animation 이 걸려있어서 부드럽게 동작
      setTimeout(() => {
        bannerImg2.classList.add("animate");
      }, 600);
    }, 300);
    // 성능 최적화를 위하여 한번 사용한 eventListener를 제거 => 딱 한번만 동작하게 됨
    window.removeEventListener("scroll", homeEventHandler);
  } else if (partner.getBoundingClientRect().top - 100 > windowHeight) {
    partner.classList.add("animate");
  }
};
window.addEventListener("scroll", homeEventHandler);

// 배너 이전 다음 버튼킅릭시 배경색 변경
const b_prev_btn = document.querySelector("#banner_arrow_btn .arrow_btn_left");
const b_next_btn = document.querySelector("#banner_arrow_btn .arrow_btn_right");
const b_container1 = document.querySelector(".banner_slide1");
const b_container2 = document.querySelector(".banner_slide2");
const banner = document.querySelector("#greek_banner");
const banner2Img1 = document.querySelector(".banner2_img_middle");
const banner2Img2 = document.querySelector(".banner2_img_bottom");

b_prev_btn.addEventListener("click", function (e) {
  e.preventDefault();
  b_container1.style.transform = "translateX(0%)";
  b_container2.style.transform = "translateX(0%)";
  banner.classList.remove("active"); //배너 배경색 변경
  setTimeout(() => {
    bannerImg1.classList.add("animate");
    banner2Img1.classList.remove("animate");
    setTimeout(() => {
      bannerImg2.classList.add("animate");
      banner2Img2.classList.remove("animate");
    }, 600);
  }, 300);
});
b_next_btn.addEventListener("click", function (e) {
  e.preventDefault();
  b_container1.style.transform = "translateX(-100%)";
  b_container2.style.transform = "translateX(-100%)";
  banner.classList.add("active"); //배너 배경색 변경
  setTimeout(() => {
    banner2Img1.classList.add("animate");
    bannerImg1.classList.remove("animate");
    setTimeout(() => {
      banner2Img2.classList.add("animate");
      bannerImg2.classList.remove("animate");
    }, 600);
  }, 300);
});

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
});
