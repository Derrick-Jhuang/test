// swiper
let swiper = {
  index: function () {
    let productsSwiper = new Swiper('.js-swiper-idx-hot .swiper-container', {
      slidesPerView: 2,
      spaceBetween: 30,
      // mousewheel: true,
      // centeredSlides: true,
      // loop: true,
      // pagination: {
      //   el: '.js-idx-hot .c-bn__dot',
      //   type: 'fraction',
      //   // clickable: true,
      // },
      navigation: {
        nextEl: '.js-swiper-idx-hot .js-btn-next',
        prevEl: '.js-swiper-idx-hot .js-btn-prev'
      },
      breakpoints: {
        1920: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        575: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      },
    });
  },
  productsDetail: function () {
    let viewSub = new Swiper('.prod-product-view__option', {
      spaceBetween: 30,
      slidesPerView: 4,
      breakpoints: {
        1920: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        575: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 5,
        }
      }
    });
    let viewMain = new Swiper('.prod-product-view__main', {
      spaceBetween: 0,
      slidesPerView: 1,
      // loop: true,
      speed: 2000,
      // pagination: {
      //   el: '.product-detail-info__pic .product-detail-dot',
      //   clickable: true,
      // },
      thumbs: {
        swiper: viewSub,
      },
    });
  }
}

// web page
let page = {
  init: () => {
    jhuangPing.buildStore({
      key: 'jhuangPingStore',
    }, {
      isPlicyShow: false,
    });
    jhuangPing.reloadPage();
    jhuangPing.menu();
    jhuangPing.lightbox();
    jhuangPing.click({
      gotop: {
        enable: true,
        bk: '.ft-gotop',
        btn: '.js-gotop',
      },
      back: {
        enable: true,
        ele: '.js-prev-page',
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

    (function mobileMenu() {
      let item = $('.mobile-menu__item');
      let list = $('.mobile-menu__dropdown');
      list.parent(item).addClass('is-dropdown');

      $('.is-dropdown .mobile-menu__link.js-link').click(function (e) {
        // e.stopPropagation();
        e.preventDefault();
        $(this).next(list).stop().slideToggle();
      });
    })();

    (function langToggle() {
      $('.hd-lang__toggle').click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $('.hd-lang__list').toggleClass('show');
      });

      $(document).on('click', function () {
        $('.hd-lang__toggle').removeClass('active');
        $('.hd-lang__list').removeClass('show');
      });
    })();

    (function policy() {
      const _store = jhuangPing.getStore('jhuangPingStore')
      if (_store.isPlicyShow) {
        $('.ft-cookie').addClass('hide')
      }
    })();

    $('.c-btn-ft-cookie').click(function () {
      $('.ft-cookie').addClass('an-hide')
      jhuangPing.setStore('jhuangPingStore', {
        isPlicyShow: true
      });
    });
  },
  index: () => {
    swiper.index();

    if (!isMobile) {
      $('.idx-section-1 li').each(function (i, val) {
        $(val).attr('data-aos-delay', i * 100)
      });

      $('.idx-section-2 li').each(function (i, val) {
        $(val).attr('data-aos-delay', i * 100)
      })

      $('.idx-hot__content .swiper-slide').each(function (i, val) {
        $(val).attr('data-aos-delay', i * 100)
      });
    }

    // AOS.refresh();
  },
  products: () => {
    swiper.productsDetail();

    $('.prod-anchor').find('.el-point').click(function () {
      $('.prod-anchor').find('.el-info').removeClass('is-open');
      $(this).next('.el-info').addClass('is-open');
    });

    $(document).on('click', function (e) {
      if (!$(e.target).closest('.prod-anchor .el-point').length) {
        $('.prod-anchor').find('.el-info').removeClass('is-open');
      }
    });
  },
  faq: () => {
    $('.js-qa-title').click(function (event) {

      var $qa_title = $('.js-qa-title');
      var $qa_answer = $(this).next('div.js-qa-answer');

      if (!$qa_answer.is(':visible')) {
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

