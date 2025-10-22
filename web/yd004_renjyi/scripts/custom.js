// device
// 判斷是否為觸控+行動裝置
const isMobileTouch = () => device.isTouchDevice() && device.isMobile().any;
const getWindowSize = () => device.windowSize;

// 根據結果動態切換 body class
const updateDeviceClass = () => {
  document.body.classList.toggle('mobile', isMobileTouch());
  document.body.classList.toggle('desktop', !isMobileTouch());

  const getWinW =  getWindowSize().width;
  if (getWinW > 1200) {
    $('.c-sidebar__ctr').removeClass('is-open');
  }
};

// 建立偵測器，並在狀態變更時執行 updateDeviceClass
const device = new getDevice(1280, updateDeviceClass, false);

// 立即執行一次以初始化 class
updateDeviceClass();

// store
const useStore = new LocalStore('useData',{isPlicyShow : false});

const $store = useStore.get();
const $cookie = document.querySelector('.c-cookie');

// policy
(function policy() {
  if ($cookie) {
    !$store.isPlicyShow && $cookie.classList.add('an-in');
  }
})();

const closeCookie = () => {
  $cookie.classList.add('an-out');

  useStore.set({isPlicyShow: true});

  setTimeout(() => {
    $cookie.classList.remove('an-in');
  }, 1000);
}

jhuangPingJqTool.scroll();

jhuangPingJqTool.click({
  gotop: {
    enable: true,
    bk: '.ft',
    btn: '.js-gotop',
  },
  back: {
    enable: true,
    ele: '.js-back',
  },
});

// imgfit
imgfit.init();

// menu
(function menuToggle() {
  $('.hd .is-mobile .c-btn--toggle').click(function (e) {
    e.stopPropagation();
    $('.hd .is-mobile .menu').toggleClass('is-menu-open');
    $('.hd').toggleClass('is-menu-open');
  })
  
  $('.hd .is-mobile .menu-close').click(function (e) {
    e.stopPropagation();
    $('.hd .is-mobile .menu').removeClass('is-menu-open');
    $('.hd').removeClass('is-menu-open');
  })
  
  $(document).on('click', function () {
    $('.hd .is-mobile .menu').removeClass('is-menu-open');
    $('.hd').removeClass('is-menu-open');
  });
})();

// products
(function proInit() {
  $('.c-sidebar-toggle').click(function (e) {
    e.stopPropagation();
    $('.c-sidebar__ctr').toggleClass('is-open');
  })

  $('.c-sidebar__mask').click(function (e) {
    e.stopPropagation();
    $('.c-sidebar__ctr').removeClass('is-open');
  })
})();

// lightbox
const openPrivacyLbx = () => FetchLightbox.open({
  page: "./privacy-policy.html",
  cssClass: "c-lbx:privacy",
  init: () => {}
});

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("is-loaded");
});