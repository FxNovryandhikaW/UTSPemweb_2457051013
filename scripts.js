// Memilih elemen DOM
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Mengecek tema di Local Storage agar saat pindah halaman tema tidak kereset
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
}

// Menambahkan Event Listener (Syarat UTP)
themeBtn.addEventListener('click', function() {
    // Toggle class 'dark-mode' pada body
    body.classList.toggle('dark-mode');
    
    // Mengecek apakah body memiliki class dark-mode sekarang
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️'; // Ubah ikon ke matahari
        localStorage.setItem('theme', 'dark'); // Simpan preferensi
    } else {
        themeBtn.textContent = '🌙'; // Ubah ikon ke bulan
        localStorage.setItem('theme', 'light');
    }
});