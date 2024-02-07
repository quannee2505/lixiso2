const but1 = document.getElementById('but1');
const but2 = document.getElementById('but2');
const wrap = document.querySelector('.wrap');

let currentScale = 1.0; // Biến để lưu tỉ lệ phóng hiện tại của but1

function diChuyen() {
    const wrapRect = wrap.getBoundingClientRect();
    const wrapWidth = wrapRect.width;
    const wrapHeight = wrapRect.height;
    const but2Width = but2.offsetWidth;
    const but2Height = but2.offsetHeight;
    
    // Tính toán vị trí mới cho but2
    const newPosX = Math.random() * (wrapWidth - but2Width);
    const newPosY = Math.random() * (wrapHeight - but2Height);

    // Đảm bảo but2 không vượt ra ngoài ranh giới của .wrap
    but2.style.left = `${newPosX}px`;
    but2.style.top = `${newPosY}px`;
}

but2.addEventListener('mouseover', diChuyen);

but2.addEventListener('mouseover', function() {
    // Phóng to but1
    currentScale += 0.1; // Tăng tỉ lệ phóng lên 10%
    but1.style.transform = `scale(${currentScale})`;
});

but2.addEventListener('mouseout', function() {
    // Không làm gì khi di chuột ra khỏi but2
});






const xin = document.querySelector('.xin');

but1.addEventListener('click', function() {
    xin.classList.toggle('show');
});

