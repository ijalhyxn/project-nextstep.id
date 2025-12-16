document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. LOGIKA UNTUK SEARCH BAR (Pencarian) ---
    // Mencari tombol search di dalam container pencarian yang kita buat di CSS
    const searchContainers = [
        '.search-wrapper', 
        '.search-wrapper-magang', 
        '.search-wrapper-beasiswa', 
        '.search-box', 
        '.search-box-wide'
    ];

    searchContainers.forEach(selector => {
        const container = document.querySelector(selector);
        if (container) {
            const input = container.querySelector('input');
            const button = container.querySelector('button');

            if (input && button) {
                // Fungsi ketika tombol 'Cari' diklik
                button.addEventListener('click', function() {
                    const keyword = input.value.trim();
                    if (keyword) {
                        alert(`Sedang mencari: "${keyword}"...\n(Fitur pencarian database belum terhubung)`);
                    } else {
                        alert("Mohon ketik kata kunci pencarian terlebih dahulu.");
                        input.focus();
                    }
                });

                // Fungsi agar bisa tekan 'Enter' di keyboard
                input.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        button.click();
                    }
                });
            }
        }
    });

    // --- 2. LOGIKA TOMBOL "DAFTAR KEGIATAN" (Halaman Home) ---
    const btnDaftar = document.querySelector('.btn-daftar');
    if (btnDaftar) {
        btnDaftar.addEventListener('click', function() {
            // Arahkan ke halaman Lomba sebagai default
            window.location.href = 'HalamanAwal_lomba.html';
        });
    }

    // --- 3. LOGIKA TOMBOL KATEGORI (Semua Halaman) ---
    // Mengambil semua jenis tombol kategori yang ada di CSS
    const categoryButtons = document.querySelectorAll('.btn-category, .lomba-btn, .btn-magang, .btn-beasiswa, .cat-btn, .card-btn');

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Ambil teks kategori dari dalam tombol (contoh: "Finance & Business")
            // Kita perlu membersihkan teks dari panah '>' atau ikon jika ada
            let categoryName = btn.innerText.replace('>', '').trim();
            
            // Tampilkan pesan interaktif
            
            
            // Di sini nanti kamu bisa tambahkan logika pindah halaman, contoh:
            // window.location.href = `kategori_${categoryName.toLowerCase().replace(/ /g, '_')}.html`;
        });
    });

    // --- 4. EFEK AKTIF OTOMATIS PADA NAVBAR (Opsional) ---
    // Kode ini membuat menu navbar otomatis menyala (active) sesuai halaman yang dibuka
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-links li a');
    const menuLength = menuItem.length;
    
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            // Hapus class active dari yang lain (jika ada hardcode di HTML)
            menuItem.forEach(item => item.classList.remove('active'));
            // Tambahkan ke yang cocok
            menuItem[i].classList.add('active');
        }
    }
    // --- 5. LOGIKA HAMBURGER MENU (Responsive) ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            // Toggle class 'active' untuk mengubah bentuk burger dan memunculkan menu
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // (Opsional) Tutup menu saat salah satu link diklik
        document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }
    /* =========================================
   1. DATA LOMBA (SESUAI GAMBAR REFERENSI)
   ========================================= */
const dataLomba = [
    // --- KATEGORI CREATIVE (Sesuai gambar image_56599b.jpg) ---
    {
        category: 'Creative',
        title: 'Roushon Fikr Fair 2026',
        img: 'poster_rf_fair.jpg', // Ganti dengan file aslimu
        likes: 0,
        views: 32,
        target: 'SD / Sederajat',
        price: 'Rp 25.000',
        location: 'Offline',
        date: '3 Des 2025 - 10 Jan 2026',
        organizer: 'SMP Islam Roushon Fikr',
        logo: 'logo_rf.png'
    },
    {
        category: 'Creative',
        title: 'INFLAMÄ: Calling All Participants',
        img: 'poster_inflama.jpg',
        likes: 0,
        views: 92,
        target: 'SD, SMP, SMA / Sederajat',
        price: 'Rp 100.000',
        location: 'Offline',
        date: '6 Okt - 28 Des 2025',
        organizer: 'IPEKA Sunter',
        logo: 'logo_ipeka.png'
    },
    {
        category: 'Creative',
        title: 'International Creative and Innovative Idea Competition (ICIIC)',
        img: 'poster_iciic.jpg',
        likes: 0,
        views: 217,
        target: 'SMP, SMA, Mahasiswa',
        price: 'Rp 0 (Gratis)',
        location: 'Online',
        date: '10 - 31 Des 2025',
        organizer: 'The Innovator Generation',
        logo: 'logo_tig.png'
    },
    {
        category: 'Creative',
        title: 'MOSaiG FEST 3.0: Photography Competition',
        img: 'poster_mosaig.jpg',
        likes: 1,
        views: 73,
        target: 'SMA, Gapyear, Mahasiswa',
        price: 'Rp 20.000',
        location: 'Online',
        date: '9 - 17 Des 2025',
        organizer: 'HIMA SaIG',
        logo: 'logo_hima.png'
    },
    
    // --- KATEGORI TECHNOLOGY (Dummy Data) ---
    {
        category: 'Technology',
        title: 'Hackta Camp x RuangGuru 2026',
        img: 'poster_hackta.jpg',
        likes: 0,
        views: 103,
        target: 'SMP, SMA / Sederajat',
        price: 'Rp 80.000 - Rp 100.000',
        location: 'Online & Offline',
        date: '23 Nov 2025 - 10 Jan 2026',
        organizer: 'Hackta x Ruangguru',
        logo: 'logo_rg.png'
    },
    {
        category: 'Technology',
        title: 'ILPC 2026: Logic & Programming',
        img: 'poster_ilpc.jpg',
        likes: 0,
        views: 36,
        target: 'SMA / Sederajat',
        price: 'Rp 150.000',
        location: 'Online & Offline',
        date: '8 Des 2025 - 18 Jan 2026',
        organizer: 'Teknik Informatika UBAYA',
        logo: 'logo_ubaya.png'
    },

    // --- KATEGORI FINANCE & BUSINESS (Dummy Data) ---
    {
        category: 'Finance & Business',
        title: 'Micro Referral Competition',
        img: 'poster_referral.jpg',
        likes: 0,
        views: 297,
        target: 'Mahasiswa / Umum',
        price: 'Gratis',
        location: 'Online',
        date: '1 - 12 Des 2025',
        organizer: 'Detekcam Indonesia',
        logo: 'logo_detekcam.png'
    },

    // --- KATEGORI ACADEMICS (Dummy Data) ---
    {
        category: 'Academics',
        title: 'ARMASO 2026: Math & Science',
        img: 'poster_armaso.jpg',
        likes: 2,
        views: 182,
        target: 'SD / Sederajat',
        price: 'Rp 35.000',
        location: 'Offline',
        date: '15 Nov 2025 - 17 Jan 2026',
        organizer: 'OPPRA AR-RAHMAT',
        logo: 'logo_oppra.png'
    }
];

/* =========================================
   2. FUNGSI RENDER (MENAMPILKAN DATA)
   ========================================= */
function filterLomba(kategoriDipilih) {
    const container = document.getElementById('lomba-result-container');
    
    // Validasi container
    if (!container) return;

    // Bersihkan isi container
    container.innerHTML = '';

    // Filter data array
    const hasilFilter = dataLomba.filter(item => item.category === kategoriDipilih);

    // Judul sementara saat loading (opsional)
    // container.innerHTML = '<p>Memuat data...</p>';

    // Jika data kosong
    if (hasilFilter.length === 0) {
        container.innerHTML = `<p style="text-align:center; width:100%; grid-column: 1 / -1; padding: 40px; color:#666;">
            Belum ada lomba untuk kategori <b>${kategoriDipilih}</b> saat ini.
        </p>`;
        return;
    }

    // Loop data dan buat kartu HTML
    hasilFilter.forEach(item => {
        const kartuHTML = `
            <div class="lomba-card">
                <img src="${item.img}" alt="${item.title}" class="card-img-top" 
                     onerror="this.src='https://via.placeholder.com/300x250?text=Poster+Lomba'">
                
                <div class="card-stats">
                    <span><i class="heart-icon">♡</i> ${item.likes} suka</span>
                    <span>👁️ ${item.views}x dilihat</span>
                </div>

                <button class="btn-detail-full">More Detail ></button>
                
                <div class="card-body">
                    <h4 class="card-title">${item.title}</h4>
                    <ul class="card-info">
                        <li>🎓 ${item.target}</li>
                        <li>💰 ${item.price}</li>
                        <li>📍 ${item.location}</li>
                        <li>📅 ${item.date}</li>
                    </ul>
                </div>

                <div class="card-footer">
                    <img src="${item.logo}" class="organizer-logo" 
                         onerror="this.src='https://via.placeholder.com/30?text=Org'">
                    <span class="organizer-name">Diselenggarakan oleh<br><b>${item.organizer}</b></span>
                </div>
            </div>
        `;
        container.innerHTML += kartuHTML;
    });

    // Scroll otomatis ke hasil dengan smooth
    setTimeout(() => {
        const headerOffset = 100; // Jarak margin atas agar tidak ketutup navbar
        const elementPosition = container.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
    }, 100);
}

/* =========================================
   3. EVENT LISTENER (GLOBAL)
   ========================================= */
document.addEventListener('DOMContentLoaded', function() {
    // Burger Menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }

    // Default Search
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(btn => {
        if(btn.innerText.includes('Cari')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Sedang mencari... (Fitur Database Belum Terhubung)');
            });
        }
    });
});
});
/* ==========================================================
   FUNGSI FILTER KATEGORI (Show/Hide)
   ========================================================== */

function filterCategory(categoryId, btnElement) {
    // 1. Ubah tampilan tombol Aktif (Biru)
    // Hapus class 'active' dari semua tombol beasiswa
    document.querySelectorAll('.btn-beasiswa').forEach(btn => {
        btn.classList.remove('active');
    });
    // Tambahkan class 'active' ke tombol yang baru diklik
    btnElement.classList.add('active');

    // 2. Logika Menyembunyikan/Menampilkan Bagian
    const allSections = document.querySelectorAll('.category-section');

    allSections.forEach(section => {
        if (categoryId === 'all') {
            // Jika pilih 'Tampilkan Semua', munculkan semua section
            section.style.display = 'block';
            
            // Animasi halus (Fade In)
            section.style.opacity = '0';
            setTimeout(() => section.style.opacity = '1', 100);
        } else {
            // Cek apakah ID section sama dengan kategori yang dipilih
            if (section.id === categoryId) {
                section.style.display = 'block';
                
                // Animasi halus
                section.style.opacity = '0';
                setTimeout(() => section.style.opacity = '1', 100);
            } else {
                // Sembunyikan yang tidak cocok
                section.style.display = 'none';
            }
        }
    });
}