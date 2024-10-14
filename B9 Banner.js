let currentBanner = 5;
let isTransitioning = false;
const totalBanners = document.querySelectorAll('.bannerimg').length;
let autoSlideInterval; // Biến lưu trữ setInterval

window.addEventListener('load', () => {
    updateDots();
    document.querySelectorAll('.bannerimg').forEach((banner, index) => {
        banner.classList.add(`bannerimg${index + 1}`);
    });
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 1000);
    startAutoSlide(); // Khởi chạy banner tự động
});

function startAutoSlide() {
    // Xóa khoảng thời gian hiện tại nếu có
    clearInterval(autoSlideInterval);
    // Tạo một setInterval mới cho banner tự chạy
    autoSlideInterval = setInterval(next, 5000);
}

function updateDots() {
    let dots = document.querySelectorAll('.bannercurrent div i');
    dots.forEach((dot, index) => {
        if (index + 1 === currentBanner) {
            dot.classList.remove('fa-regular');
            dot.classList.add('fa-solid');
        } else {
            dot.classList.remove('fa-solid');
            dot.classList.add('fa-regular');
        }
    });
}

function next() {
    if (isTransitioning) return;
    isTransitioning = true;
    let banners = document.querySelectorAll('.bannerimg');
    banners.forEach((banner) => {
        let currentClass = banner.classList[1];
        let currentNumber = parseInt(currentClass.replace('bannerimg', ''));
        let newNumber = currentNumber < totalBanners ? currentNumber + 1 : 1;
        banner.classList.replace(currentClass, `bannerimg${newNumber}`);
    });
    currentBanner = currentBanner < totalBanners ? currentBanner + 1 : 1;
    updateDots();
    setTimeout(() => {
        isTransitioning = false;
    }, 1000);
}

function prev() {
    if (isTransitioning) return;
    isTransitioning = true;

    let banners = document.querySelectorAll('.bannerimg');
    banners.forEach((banner) => {
        let currentClass = banner.classList[1];
        let currentNumber = parseInt(currentClass.replace('bannerimg', ''));
        let newNumber = currentNumber > 1 ? currentNumber - 1 : totalBanners;
        banner.classList.replace(currentClass, `bannerimg${newNumber}`);
    });
    currentBanner = currentBanner > 1 ? currentBanner - 1 : totalBanners;
    updateDots();
    setTimeout(() => {
        isTransitioning = false;
    }, 1000);
}

function goToBanner(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    let banners = document.querySelectorAll('.bannerimg');
    let difference = currentBanner - index;
    banners.forEach((banner) => {
        let currentClass = banner.classList[1];
        let currentNumber = parseInt(currentClass.replace('bannerimg', ''));
        let newNumber = (currentNumber - difference + totalBanners) % totalBanners || totalBanners;
        banner.classList.replace(currentClass, `bannerimg${newNumber}`);
    });

    currentBanner = index;
    updateDots();

    setTimeout(() => {
        isTransitioning = false;
    }, 1000);
}

// Khi người dùng nhấn vào nút hoặc dot, reset lại auto slide
document.querySelectorAll('.bannercurrent div').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToBanner(index + 1);
        startAutoSlide(); // Reset lại auto slide
    });
});

// Gọi updateDots() lần đầu tiên để cập nhật icon ban đầu
updateDots();
setTimeout(() => {
    next();
    startAutoSlide(); // Khởi chạy banner tự động sau lần đầu
}, 500);

