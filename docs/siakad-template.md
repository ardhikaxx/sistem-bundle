# SIAKAD — Sistem Informasi Akademik Sekolah

Aplikasi manajemen akademik sekolah berbasis **Laravel 13** dengan **Bootstrap 5**. Mencakup portal publik, manajemen data akademik, kehadiran, penilaian, rapor, keuangan sekolah, serta akun khusus untuk admin, guru, wali kelas, siswa, orang tua, dan petugas keuangan.

## Fitur Utama

- **Portal Publik** — beranda, berita, agenda, prestasi, dan galeri.
- **Autentikasi & RBAC** — login email/username, 9 peran, 68 permission, dashboard khusus per peran.
- **Akademik** — tahun ajaran, semester, jurusan, kelas, mata pelajaran, penjadwalan (dengan deteksi bentrok), penempatan guru.
- **Kehadiran** — input harian oleh guru, rekap/laporan per kelas dan per siswa.
- **Penilaian** — materi, tugas, ujian (assessments), nilai akhir otomatis, rapor yang bisa diunduh (PDF) dan dicetak.
- **Keuangan** — jenis tagihan, pembuatan tagihan massal, pembayaran, status lunas/tunggakan.
- **Ekstrakurikuler, Prestasi Siswa, Pengumuman, Berita, Agenda, Galeri, Fasilitas, Aktivitas (log).**

## Persyaratan

- PHP 8.3+
- Composer 2
- MySQL / MariaDB / SQLite (untuk testing)
- Node tidak diperlukan (CSS di `public/css`, JS via CDN)

## Instalasi

```bash
git clone <repo-url> siakad-template
cd siakad-template

composer install
copy .env.example .env        # lalu sesuaikan konfigurasi database (Windows)
# atau:  cp .env.example .env  # (Linux/macOS)

php artisan key:generate
php artisan migrate:fresh --seed
php artisan storage:link
php artisan serve
```

Buka `http://127.0.0.1:8000` untuk portal publik, `http://127.0.0.1:8000/login` untuk login.

> `php artisan storage:link` diperlukan agar file upload (foto, galeri, logo) dapat diakses melalui `/storage/*`.

## Akun Demo

Semua password akun seeder: **`password`**

| Peran | Email / Username |
| --- | --- |
| Super Admin | `superadmin@example.com` |
| Administrator | `admin@example.com` |
| Kepala Sekolah | `kepala@example.com` |
| Waka Kurikulum | `kurikulum@example.com` |
| Petugas Keuangan | `keuangan@example.com` |
| Tata Usaha | `tatausaha@example.com` |
| Guru | `guru001@example.com` s.d. `guru012@example.com` |
| Siswa | `siswa001@example.com` s.d. `siswa054@example.com` |
| Orang Tua | `ortu001@example.com` s.d. `ortu018@example.com` |

Login menerima **email** atau **username** (username sama dengan nama sebelum `@`, mis. `admin`, `guru003`, `siswa001`).

## Data Seeder

`DatabaseSeeder` memuat data contoh lengkap: 90 user, 9 peran, 68 permission, 1 sekolah, 2 tahun ajaran, 4 semester, 3 jurusan, 9 kelas, 14 mapel, 12 guru, 54 siswa, 18 wali, 162 enrollment, 36 penugasan mengajar, 36 jadwal, 540 kehadiran, materi/tugas/penilaian/rapor/keuangan/berita/agenda/galeri/ekstrakurikuler. Tahun ajaran aktif: **2026/2027**, semester **Ganjil**.

## Menjalankan Pengujian

```bash
vendor\bin\phpunit          # Windows
# atau
./vendor/bin/phpunit        # Linux/macOS
```

Termasuk `tests/Feature/RouteRenderSmokeTest.php` yang me-*crawl* seluruh route GET dengan user per peran dan memastikan tidak ada error server (status >= 500).

## Teknologi

- Laravel 13, Eloquent, Blade
- Bootstrap 5.3.3, Font Awesome 6.5.2, SweetAlert2 11 (CDN)
- Font: Plus Jakarta Sans

## 💖 Dukungan & Donasi

Jika proyek SIAKAD ini bermanfaat bagi Anda dan telah menghemat banyak jam kerja Anda, Anda dapat menunjukkan apresiasi dengan memberikan traktiran kopi (donasi) melalui pemindaian kode QRIS di bawah ini:

<img src="./qris.png" alt="QRIS Donasi" width="300"/>

## 📄 License

Proyek ini dirilis dengan lisensi open-source [MIT](LICENSE).

Copyright (c) 2026 **Yanuar Ardhika Rahmadhani Ubaidillah**