// swiper
let swiper = {
  index: function () {
    let bnItem = $('.js-bn-index .swiper-slide').length;
    bnItem > 1 ? $('.js-bn-index').removeClass('is-slide-only') : $('.js-bn-index').addClass('is-slide-only');

    let bannerSwiper = new Swiper('.js-bn-index', {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: bnItem > 1 ? true : false,
        autoplay: bnItem > 1 ? true : false,
        speed: 3000,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.js-bn-index .c-bn__dot',
          type: 'fraction',
          // clickable: true,
        },
        navigation: {
          nextEl: '.js-bn-index .js-btn-next',
          prevEl: '.js-bn-index .js-btn-prev'
        },
    });

    let productsSwiper = new Swiper('.js-idx-hot .swiper-container', {
      slidesPerView: 6,
      spaceBetween: 35,
      // mousewheel: true,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.js-idx-hot .c-bn__dot',
        type: 'fraction',
        // clickable: true,
      },
      navigation: {
        nextEl: '.js-idx-hot .js-btn-next',
        prevEl: '.js-idx-hot .js-btn-prev'
      },
      breakpoints: {
        1920: {
          slidesPerView: 6,
        },
        // 1680: {
        //   slidesPerView: 6,
        //   spaceBetween: 40,
        // },
        1366: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        // 992: {
        //   slidesPerView: 3,
        //   spaceBetween: 20,
        // },
        820: {
          slidesPerView: 2,
          spaceBetween: 22,
        }
      },
    });
  },
  about: function () {
    let nowWindow = $(window).width()
    if (nowWindow > 1024) {
      let historySwiper = new Swiper('.js-abt-history', {
        slidesPerView: 3,
        navigation: {
          nextEl: '.js-abt-history .js-btn-next',
          prevEl: '.js-abt-history .js-btn-prev'
        },
        breakpoints: {
          1366: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 2,
          }
        }
      });
    }
  },
  productsDetail: function () {
    let productsDetailSwiper = new Swiper('.product-detail-swiper', {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        speed: 2000,
        pagination: {
          el: '.product-detail-info__pic .product-detail-dot',
          clickable: true,
        },
    });
  }
}

// web page
let page = {
  init: () => {
    jhuangPing.browserIE();
    jhuangPing.reloadPage();
    jhuangPing.menu();
    jhuangPing.click({
      back: {
        enable: true,
        ele: '.js-prev-page', // 返回按鈕的選擇器
      },
    });
    jhuangPing.edit({
      element: '.l-edit',
      isAnimation: true,
    });

    AOS.init({
      duration: 1000,
      // easing: 'ease-in-out-quad',
      // default easing for AOS animations
      offset: 100,
      once: true,
      mirror: true
      // whether animation should happen only once - while scrolling down
    });
  },
  faq: () => {
    $('.js-qa-title').click(function(event) {

      var $qa_title = $('.js-qa-title');
      var $qa_answer = $(this).next('div.js-qa-answer');

      if(!$qa_answer.is(':visible')){
        $qa_title.removeClass('active');
        $('.js-qa-answer:visible').stop().slideUp();
      }

      $(this).toggleClass('active');
      $qa_answer.slideToggle();

    }).siblings('.js-qa-answer').hide();
  }
}

$(document).ready(function () {
  page.init();
});