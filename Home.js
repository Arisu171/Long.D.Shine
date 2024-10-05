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

// // Hàm phát hiện DevTools đang mở
// function detectDevTools() {
//     let devtoolsOpened = false;

//     const devtools = /./;
//     devtools.toString = function () {
//         devtoolsOpened = true;
//         // Thay thế nội dung của body khi DevTools mở
//         document.body.innerHTML = `
//                     <h1>DevTools đã bị phát hiện</h1>
//                     <p>Nội dung trang đã được thay thế vì bạn đã mở Developer Tools.</p>
//                 `;
//     };

//     // Kiểm tra console để phát hiện DevTools mở
//     console.log(devtools);

//     // Kiểm tra lại sau một thời gian ngắn để tránh báo cáo sai
//     setTimeout(function () {
//         if (!devtoolsOpened) {
//             detectDevTools();
//         }
//     }, 1000);
// }

// Gọi hàm khi tài liệu đã sẵn sàng
// window.onload = function () {
//     detectDevTools();
// }; gjhymgvj

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

