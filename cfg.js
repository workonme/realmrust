window.productsGrid = 4;
window.currency = 'руб'
window.monitoring = { id: "42403" };
window.server_connect_1 = "46.174.48.216:28015";
window.promo_copy_start = "RLMSTART";
window.widget_discord_link = "taSEdyTyNg";

const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://cdn.jsdelivr.net/gh/workonme/realmrust@main/goida.css'
document.head.appendChild(link)

const script = document.createElement('script')
script.src = 'https://cdn.jsdelivr.net/gh/workonme/realmrust@main/zv.js'
script.async = true
script.onload = () => {
  console.log('%c Version: ', 'color: white; background-color: #f2a358', '1.0.0');
  console.log('%c Author: ', 'color: white; background-color: #696969', 'Realm Rust');
}
script.onerror = () => {
  console.log('%c Ошибка ', 'color: white; background-color: #cc0000', 'Сервис недоступен');
}
document.body.appendChild(script)
