const images = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

// Buka lightbox saat foto diklik
images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.remove('hidden');
        lightboxImg.src = img.src;
    });
});

// Tutup lightbox saat tombol close diklik
closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
});

// Tutup lightbox saat area luar foto diklik
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.add('hidden');
    }
});