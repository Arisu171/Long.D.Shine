window.onload = function () {
    const ngaySelect = document.getElementById('ngay');
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        ngaySelect.appendChild(option);
    }

    const namSelect = document.getElementById('nam');
    for (let i = 1950; i <= new Date().getFullYear(); i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        namSelect.appendChild(option);
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        let isValid = true;

        document.querySelectorAll('.error-message').forEach(function (element) {
            element.innerHTML = '';
        });

        const ho = document.getElementById('ho').value.trim();
        if (!ho) {
            document.getElementById('ho-error').innerHTML = 'Họ không được để trống.';
            isValid = false;
        }

        const ten = document.getElementById('ten').value.trim();
        if (!ten) {
            document.getElementById('ten-error').innerHTML = 'Tên không được để trống.';
            isValid = false;
        }

        const sodienthoai = document.getElementById('sodienthoai').value.trim();
        const phonePattern = /^[0-9]{10}$/;
        if (!sodienthoai) {
            document.getElementById('sodienthoai-error').innerHTML = 'Số điện thoại không được để trống.';
            isValid = false;
        } else if (!phonePattern.test(sodienthoai)) {
            document.getElementById('sodienthoai-error').innerHTML = 'Số điện thoại phải có 10 chữ số và không chứa ký tự khác.';
            isValid = false;
        }

        const ngay = document.getElementById('ngay').value;
        const thang = document.getElementById('thang').value;
        const nam = document.getElementById('nam').value;
        if (!ngay || !thang || !nam) {
            document.getElementById('ngaysinh-error').innerHTML = 'Ngày sinh không được để trống.';
            isValid = false;
        }

        const gioitinh = document.querySelector('input[name="gioitinh"]:checked');
        if (!gioitinh) {
            document.getElementById('gioitinh-error').innerHTML = 'Giới tính không được để trống.';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            alert('Gửi thành công!');
            window.location.reload();
        }
    });
};
