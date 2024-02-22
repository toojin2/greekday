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
const partnerCon = document.querySelector(".partner_container");
const partner = document.querySelectorAll(".partner_wrap_list");
const bannerImg1 = document.querySelector(".banner_img_middle");
const bannerImg2 = document.querySelector(".banner_img_bottom");

// 스크롤시 배너 슬라이드업 애니메이션
const homeEventHandler = () => {
  // window 화면 상단에서 한 요소의 가장 높은 위치까지 크기와 윈도우 높이를 비교
  //console.log(partnerCon.getBoundingClientRect().top, windowHeight);

  if (bannerImg1.getBoundingClientRect().top - 100 < windowHeight) {
    setTimeout(() => {
      bannerImg1.classList.add("animate");
      // 화면에 시간간격마다 차례대로 화면에 요소를 띄움, 띄어지는 요소는 CSS animation 이 걸려있어서 부드럽게 동작
      setTimeout(() => {
        bannerImg2.classList.add("animate");
      }, 600);
    }, 300);
  }
  if (partnerCon.getBoundingClientRect().top - 650 < windowHeight) {
    for (let i = 0; i < partner.length; i++) {
      setTimeout(() => {
        partner[0].classList.add("animate");
        setTimeout(() => {
          partner[1].classList.add("animate");
          setTimeout(() => {
            partner[2].classList.add("animate");
          }, 1200);
        }, 800);
      }, 400);
    }
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
    $(this).stop().toggle();
    $(".x_icon").css({ display: "block" });
    $(".header2").addClass("animate");
  });
  $(".x_icon").on("click", function () {
    $(this).stop().toggle();
    $(".menu_icon").css({ display: "block" });
    $(".header2").removeClass("animate");
    $(".navi_wrap").stop().slideUp();
  });
});
