// Lấy kích thước màn hình thiết bị
let chieuRong = window.screen.width;
let chieuCao = window.screen.height;
// Tính giá trị 1/1080 chiều cao
let motPhanChieuCao = chieuCao / 1080;
let motPhanChieuRong = chieuRong / 1920;
// Gán giá trị cho custom properties trong CSS
document.documentElement.style.setProperty('--wid', chieuRong + 'px');
document.documentElement.style.setProperty('--hig', chieuCao + 'px');

// Gán giá trị cho biến CSS --phan-chieu-cao
document.documentElement.style.setProperty('--pix', motPhanChieuCao + 'px');
document.documentElement.style.setProperty('--pot', motPhanChieuRong + 'px');
// Cập nhật hiển thị trên trang
document.querySelector('.element h1').innerText = `Chiều rộng: ${chieuRong}px, Chiều cao: ${chieuCao}px`;