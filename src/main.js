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

const homeEventHandler = () => {
  // window 화면 상단에서 한 요소의 가장 높은 위치까지 크기와 윈도우 높이를 비교
  //console.log(partnerCon.getBoundingClientRect().top, windowHeight);

  // 스크롤시 배너 슬라이드업
  if (bannerImg1.getBoundingClientRect().top - 100 < windowHeight) {
    setTimeout(() => {
      bannerImg1.classList.add("animate");
      // 화면에 시간간격마다 차례대로 화면에 요소를 띄움, 띄어지는 요소는 CSS animation 이 걸려있어서 부드럽게 동작
      setTimeout(() => {
        bannerImg2.classList.add("animate");
      }, 600);
    }, 300);
  }
  //스크롤시 파트너섹션 슬라이드업
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

// product 이전 다음 버튼 클릭시 이동
const menuCon = document.querySelector(".menu_inr_container");
const menu = document.querySelectorAll(".menu_frame");
let menuWidth = menu[0].offsetWidth; // 각 메뉴 요소의 너비
let currentIdx = menu.length; // 초기값을 중앙에 위치한 메뉴로 설정
const menuCount = menu.length * 3; // 3배로 복제하여 무한 루프 구현
const p_prev_btn = document.querySelector(".menu_arrow_btn_left");
const p_next_btn = document.querySelector(".menu_arrow_btn_right");

makeClone();

function makeClone() {
  for (let i = 0; i < menuCount; i++) {
    let cloneMenu = menu[i % menu.length].cloneNode(true); // 메뉴의 개수로 나눈 나머지로 복제
    cloneMenu.classList.add("clone");
    menuCon.appendChild(cloneMenu);
  }
}

// 이전 버튼 클릭 이벤트 리스너
p_prev_btn.addEventListener("click", function () {
  if (!isAnimating) {
    currentIdx--;
    moveSlider();
  }
});

// 다음 버튼 클릭 이벤트 리스너
p_next_btn.addEventListener("click", function () {
  if (!isAnimating) {
    currentIdx++;
    moveSlider();
  }
});

let isAnimating = false; // 애니메이션 중인지 여부를 나타내는 플래그

// 슬라이드 이동 함수
function moveSlider() {
  isAnimating = true;
  menuCon.style.transition = "transform 0.3s ease-in-out";
  menuCon.style.transform = `translateX(-${currentIdx * menuWidth}px)`;

  // 슬라이드가 처음이나 마지막으로 이동하면
  if (currentIdx === 0 || currentIdx === menuCount - 1) {
    setTimeout(() => {
      menuCon.style.transition = "none";
      menuCon.style.transform = `translateX(-${menu.length * menuWidth}px)`;
      currentIdx = menu.length;
    }, 300);
  }

  setTimeout(() => {
    isAnimating = false;
    menuCon.style.transition = "";
  }, 300);
}

// 초기화 함수 호출
moveSlider();

// 윈도우 리사이즈 이벤트 핸들러
window.addEventListener("resize", function () {
  menuWidth = menu[0].offsetWidth;
  menuCon.style.transform = `translateX(-${currentIdx * menuWidth}px)`;
});

// 배너 이전 다음 버튼킅릭시 좌우이동, 배경색 변경
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
