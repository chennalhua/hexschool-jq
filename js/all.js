$(document).ready(function() {
  //選單hover
  $(".media a").hover(function() {
    $(this).toggleClass('animate__animated animate__rubberBand');
  });
  $(".menu-list a").hover(function() {
    $(this).toggleClass('animate__animated animate__pulse')
  });
  //下拉選單
  $('.menu-list a').click(function(event) {
    event.preventDefault();//去除a預設連結
    $(this).addClass('active').parent().siblings('li').find('a').removeClass('active');
    $(this).siblings('ul').slideToggle(300).parent().siblings('li').find('ul').slideUp(300);
  });
});

//swiper
var swiper = new Swiper('.swiper-container', {
    //自動播放
    autoplay: {
        delay: 4000,
    },
    //循環
    loop:true, 

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

//lightbox
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'positionFromTop':200,
  'imageFadeDuration':650,
});

//aos
AOS.init();