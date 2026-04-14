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

// --- Scroll Reveal Animations (Intersection Observer) ---
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = {
    threshold: 0.1, 
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;
        
        // Menambahkan sedikit delay terpisah (stagger) jika banyak elemen muncul bersamaan
        setTimeout(() => {
            entry.target.classList.add('active');
        }, index * 150); 
        
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// --- Typewriter Effect ---
const typeTarget = document.getElementById('typewriter');
if (typeTarget) {
    const text = typeTarget.getAttribute('data-text');
    typeTarget.textContent = ''; // Kosongkan text awal
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typeTarget.textContent += text.charAt(i);
            i++;
            // Variasi kecepatan ketik simulasi seperti orang mengetik sungguhan
            let typingSpeed = Math.random() * (50 - 20) + 20; 
            setTimeout(typeWriter, typingSpeed);
        }
    }
    
    // Mulai animasi 600ms setelah halaman dimuat
    setTimeout(typeWriter, 600);
}