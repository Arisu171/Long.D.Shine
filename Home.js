alert("welcome to my world");
// chặn Devtool
setInterval(function () {
    if (window.outerHeight - window.innerHeight > 100 || window.outerWidth - window.innerWidth > 100) {
        alert("Wut ảe u doing bro?");
        window.location.reload();
    }
}, 1000);

document.addEventListener('keydown', function (event) {
    if (event.key === 'F12' ||
        ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'I') ||
        ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'J') ||
        ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'C') ||
        ((event.ctrlKey || event.metaKey) && event.key === 'U')) {
        event.preventDefault();
        alert("Wellcome to Devtool Lmao");
    }
});

document.addEventListener('copy', function (event) {
    event.preventDefault();
    alert("Coppy Failed Successful !!!");
});

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert("Rai cờ líc đít sa bờ lẹt");
});

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

