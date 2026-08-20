# Nusantara Digital CMS

Full Dynamic Company Profile CMS berbasis Laravel 13 dengan desain Premium Monochrome.

## 🌟 Features

- **Manual Authentication:** Sistem login tanpa package eksternal (Breeze/Jetstream).
- **Role-based Access Control:** Middleware kustom untuk otorisasi berdasarkan role (Super Admin, Editor).
- **Premium Monochrome UI:** Dibangun dengan CSS Custom Properties yang elegan, menggunakan struktur UX modern.
- **Dynamic Page Builder:** Halaman dapat disusun secara dinamis menggunakan berbagai tipe *Section* (Hero, Text, Image, Features, CTA).
- **Master Modules:**
  - Services (Layanan)
  - Portfolios (Proyek)
  - Blog/News (Artikel)
  - Team Members
  - Testimonials
  - Clients / Partners
  - Careers (Lowongan)
  - FAQ
  - Inquiries (Kontak)
- **Media Library:** Sistem pengunggahan aset terintegrasi dengan pratinjau dan *copy URL*.
- **SweetAlert2 Integration:** Notifikasi UX modern untuk setiap aksi CRUD.

## 🚀 Requirement

- PHP >= 8.2 (Kompatibel dengan Laravel 13)
- Composer
- MySQL / MariaDB
- Node.js & NPM (Opsional untuk asset bundling tingkat lanjut)

## 🛠️ Instalasi & Setup Lokal

1. **Clone repositori:**
   ```bash
   git clone https://github.com/ardhikaxx/cms-sistem-web.git
   cd cms-sistem-web
   ```

2. **Install dependensi PHP:**
   ```bash
   composer install
   ```

3. **Konfigurasi Environment:**
   Salin `.env.example` ke `.env` dan konfigurasi database:
   ```bash
   cp .env.example .env
   ```
   *Edit `.env` dan sesuaikan DB_DATABASE, DB_USERNAME, DB_PASSWORD.*

4. **Generate Application Key:**
   ```bash
   php artisan key:generate
   ```

5. **Link Storage:**
   ```bash
   php artisan storage:link
   ```

6. **Migrasi Database & Seeding (PENTING):**
   Ini akan mengenerate seluruh skema beserta role dan default super admin.
   ```bash
   php artisan migrate:fresh --seed
   ```

7. **Jalankan Server Lokal:**
   ```bash
   php artisan serve
   ```

## 🔐 Akun Demo

Gunakan kredensial ini untuk login ke halaman Administrator (`/login`):

**Password untuk semua akun:** `password`

| Role / Jabatan | Email |
| :--- | :--- |
| **Super Admin** | `superadmin@gmail.com` |
| **Admin** | `manager@gmail.com` |
| **Content Manager** | `supervisor@gmail.com` |
| **Editor** | `staff@gmail.com` |
| **Author** | `purchasing@gmail.com` |
| **SEO Manager** | `controller@gmail.com` |
| **Viewer** | `viewer@gmail.com` |

## 📁 Struktur Direktori Penting

- `app/Models/`: Model Eloquent untuk seluruh entitas CMS.
- `app/Http/Controllers/Admin/`: Controller untuk area Admin CMS Dashboard.
- `app/Http/Controllers/PublicController.php`: Controller utama untuk merender halaman publik dinamis.
- `app/Http/Middleware/CheckPermission.php`: Middleware keamanan untuk hak akses.
- `resources/views/admin/`: Layout dan komponen halaman Admin (Monochrome theme).
- `resources/views/public/`: Tampilan *Company Profile* Frontend.

## 🧪 Testing

Jalankan test suite menggunakan perintah bawaan Artisan (PHPUnit):
```bash
php artisan test
```

## 🔧 Maintenance Mode

Untuk mengaktifkan mode maintenance (publik melihat 503, admin bisa tetap login apabila dikonfigurasi):
```bash
php artisan down
```
Mengembalikan ke normal:
```bash
php artisan up
```

## 👨‍💻 Git Workflow

Gunakan pola *Conventional Commits*:
- `feat:` untuk fitur baru
- `fix:` untuk perbaikan bug
- `refactor:` untuk pembersihan kode tanpa menambah/mengubah fitur fungsional
- `style:` untuk perubahan styling CSS/Blade

## 💖 Dukungan & Donasi

Jika proyek CMS ini bermanfaat bagi Anda dan telah menghemat banyak jam kerja Anda, Anda dapat menunjukkan apresiasi dengan memberikan traktiran kopi (donasi) melalui pemindaian kode QRIS di bawah ini:

<img src="/qris/cms.png" alt="QRIS Donasi" width="300"/>

---
Copyright (c) 2026 **Yanuar Ardhika Rahmadhani Ubaidillah**
