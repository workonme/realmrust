window.productsGrid = 4;
window.currency = '₽'
window.monitoring = { id: "42403" };
window.server_connect_1 = "46.174.48.216:28015";
window.promo_copy_start = "RLMSTART";
window.widget_discord_link = "taSEdyTyNg";

const cssScript = document.createElement('script')
cssScript.src = 'https://cdn.jsdelivr.net/gh/workonme/realmrust@main/allah.js'
document.head.appendChild(cssScript)

const swiperCSS = document.createElement('link')
swiperCSS.rel = 'stylesheet'
swiperCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
document.head.appendChild(swiperCSS)

const swiperScript = document.createElement('script')
swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
swiperScript.onload = () => {
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/gh/workonme/realmrust@main/zv.js'
  script.async = true
  script.onload = () => {
  }
  document.body.appendChild(script)
}
document.body.appendChild(swiperScript)
