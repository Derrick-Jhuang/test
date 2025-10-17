// device
const device = new getDevice(1280, false);

// 偵測是否為行動裝置
// console.log(device.isMobile().any); // true/false

// 偵測是否為觸控裝置
// console.log(device.isTouchDevice()); // true/false

// 取得螢幕尺寸
// console.log(device.getWindowSize()); 

// store
const useStore = new LocalStore('useData',{isPlicyShow : false});

const $store = useStore.get();
const $cookie = document.querySelector('.c-cookie');

// policy
// (function policy() {
//  !$store.isPlicyShow && $cookie.classList.add('an-in');
// })();

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

// lightbox
const openPrivacyLbx = () => FetchLightbox.open({
  page: "./privacy-policy.html",
  cssClass: "c-lbx:privacy",
  init: () => {}
});

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("is-loaded");
});
