"use strict";

// device
var device = new getDevice(1280, function (size) {
  console.log('螢幕更新:', size);
}, false);

// 偵測是否為行動裝置
console.log(device.isMobile().any); // true/false

// 偵測是否為觸控裝置
console.log(device.isTouchDevice()); // true/false

// 取得螢幕尺寸
console.log(device.getWindowSize());

// store
var useStore = new LocalStore('useData', {
  isPlicyShow: false
});
var $store = useStore.get();
var $cookie = document.querySelector('.c-cookie');

// policy
// (function policy() {
//   !$store.isPlicyShow && $cookie.classList.add('an-in');
// })();

var closeCookie = function closeCookie() {
  $cookie.classList.add('an-out');
  useStore.set({
    isPlicyShow: true
  });
  setTimeout(function () {
    $cookie.classList.remove('an-in');
  }, 1000);
};

// imgfit
imgfit.init();

// lightbox
var openPrivacyLbx = function openPrivacyLbx() {
  return FetchLightbox.open({
    page: "./privacy-policy.html",
    cssClass: "c-lbx:privacy",
    init: function init() {}
  });
};
var openAILbx = function openAILbx() {
  return FetchLightbox.open({
    page: "./ai.html",
    cssClass: "is-ai",
    init: function init() {
      console.log("Lightbox initialized");
    }
  });
};
document.addEventListener("DOMContentLoaded", function () {
  var menuConfig = function menuConfig() {
    var _item = $('.menu-item');
    var _list = $('.menu-dropdown');
    var _btn = $('<div class="dropdown-toggle"></div>');
    _list.parent(_item).addClass('is-dropdown');
    _list.before(_btn);
  };
  var globalSidebar = function globalSidebar() {
    var _el = $('.js-g-sidebar');
    var _toggle = _el.find('.el-toggle');
    var _itemToggle = _el.find('.el-item__toggle');
    var _itemList = _el.find('.el-item__list');
    var _firstToggle = _itemToggle.first();
    _firstToggle.addClass('is-active').next('.el-item__list').stop().slideDown();
    _itemToggle.click(function () {
      _itemList.stop().slideUp();
      _itemToggle.removeClass('is-active');
      $(this).toggleClass('is-active').next('.el-item__list').stop().slideToggle();
    });
  };

  // pageInit
  (function pageInit() {
    var cmpHeader = getCls("js:header");
    jhuangPingJqTool.scroll(cmpHeader, 150);
    $('.hd .lang-toggle').click(function (e) {
      e.preventDefault();
      $(this).stop().toggleClass('is:active');
      $('.hd .lang-list').stop().toggleClass('is:open');
    });
    jhuangPingJqTool.outsideClose('.hd .lang-toggle, .hd .lang-list', function () {
      $('.hd .lang-toggle').removeClass('is:active');
      $('.hd .lang-list').removeClass('is:open');
    });
    jhuangPingJqTool.click({
      // <!-- 置頂 -->
      gotop: {
        enable: true,
        // 是否啟用
        bk: '.ft',
        // 滾動按鈕區域
        btn: '.js-gotop' // 按鈕本身
      },
      // <!-- 返回上一頁 -->
      back: {
        enable: true,
        // 是否啟用
        ele: '.js-back' // 返回按鈕的選擇器
      }
    });
    menuConfig();
    globalSidebar();
  })();
});
var page = {
  home: function home() {
    var bnItem = $('.js-bn-index .swiper-slide').length;
    console.log('bnItem : ', bnItem);
    bnItem > 1 ? $('.js-bn-index').removeClass('is-slide-only') : $('.js-bn-index').addClass('is-slide-only');
    var bannerSwiper = new Swiper('.js-bn-index', {
      spaceBetween: 0,
      slidesPerView: 1,
      loop: bnItem > 1 ? true : false,
      autoplay: bnItem > 1 ? true : false,
      speed: 3000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      // pagination: {
      //   el: '.js-bn-index .c-bn__dot',
      //   type: 'fraction',
      //   clickable: true,
      // },
      navigation: {
        nextEl: '.js-bn-index .js-btn-next',
        prevEl: '.js-bn-index .js-btn-prev'
      }
    });
    var newsTab = new CmpTab('.js-tab');
  },
  business: function business() {},
  products: function products() {},
  productsList: function productsList() {},
  productsDetail: function productsDetail() {},
  news: function news() {},
  "new": function _new() {},
  contact: function contact() {},
  inquiry: function inquiry() {}
};