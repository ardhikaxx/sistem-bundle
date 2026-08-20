# Micro-ERP — Sistem Enterprise Resource Planning

Aplikasi manajemen operasional dan keuangan perusahaan berbasis **Laravel 13** dengan **Bootstrap 5**. Mencakup pembukuan *double-entry bookkeeping* (jurnal otomatis, buku besar, laporan keuangan real-time), siklus transaksi dengan alur persetujuan, piutang & hutang, rekonsiliasi bank, penutupan periode fiskal, serta kontrol akses berbasis peran (RBAC) untuk Owner, Admin, Finance, Manager, dan Cashier.

## Fitur Utama

- **Akuntansi (Double-Entry)** — Chart of Accounts, jurnal otomatis di setiap transaksi, buku besar (general ledger), jurnal umum, neraca saldo, laba/rugi, neraca (balance sheet), arus kas, buku kas, dan laporan aging piutang/hutang.
- **Siklus Transaksi** — transaksi dibuat sebagai *draft* → diajukan persetujuan (*pending approval*) → disetujui/ditolak → *posting* menjadi jurnal; transaksi terposting dapat dibalik (**reversal**) dengan jurnal kebalikan.
- **Piutang & Hutang** — invoice penjualan dan tagihan vendor (bill) beserta pembayaran (status partially/fully paid otomatis), transfer antar kas/bank.
- **Kas & Bank** — akun kas/bank, transfer, dan rekonsiliasi bank (cocokkan item jurnal, tutup saat selisih nol).
- **Periode Keuangan** — periode buka/tutup, buka kembali, dan kunci permanen dengan validasi transaksi tertunda dan keseimbangan jurnal.
- **Autentikasi & RBAC** — login email dengan rate-limiting, 5 peran, permission dinamis yang diterapkan lewat policy + middleware `can:` di setiap rute.
- **Master Data** — pelanggan, vendor, produk/layanan, pusat biaya (cost centers), pajak (tax config), transfer.
- **Keamanan & Audit** — log audit untuk setiap aksi krusial, notifikasi pengguna, aktivasi akun, dan pemisahan data antar perusahaan (`company_id`).

## Persyaratan

- PHP 8.2+
- Composer 2
- MySQL 8.0+ / MariaDB

## Instalasi

```bash
git clone <repo-url> erp-template
cd erp-template

composer install
copy .env.example .env        # lalu sesuaikan konfigurasi database (Windows)
# atau:  cp .env.example .env  # (Linux/macOS)

php artisan key:generate
php artisan migrate:fresh --seed
php artisan serve
```

Buka `http://127.0.0.1:8000` dan login dengan akun demo di bawah.

## Akun Demo

Semua password akun seeder: **`password`**

| Peran | Email | Nama | Akses Inti |
| --- | --- | --- | --- |
| Owner | `owner@gmail.com` | Budi Santoso | Semua fitur (via `Gate::before`) |
| Admin | `admin@gmail.com` | Siti Aminah | Semua permission |
| Finance | `finance@gmail.com` | Rudi Hartono | Akuntansi, transaksi, invoice/bill, pembayaran, rekonsiliasi, laporan |
| Manager | `manager@gmail.com` | Andi Wijaya | Lihat semua + posting + laporan |
| Cashier | `cashier@gmail.com` | Dewi Kusuma | Transaksi, invoice, pembayaran, pelanggan, kas/bank, laporan (view) |

## Data Seeder

`DatabaseSeeder` memuat data contoh lengkap: 1 perusahaan (**PT ERP Sukses Mandiri**), 5 peran, 5 user, **18 akun** Chart of Accounts (1000–5200), 3 periode keuangan (Tahun Fiskal 2025 *closed*, Tahun Fiskal 2026 & Agustus 2026 *open*), 2 akun kas/bank (`CA-001` Kas Kecil, `CA-002` Bank BCA), 5 transaksi contoh (modal, pendapatan, beban, transfer), 2 invoice + 1 pembayaran, 2 tagihan vendor + 1 pembayaran, dan 11 jurnal terposting.

## Menjalankan Pengujian

Suite pengujian memakai **MySQL** (bukan SQLite). Buat database pengujian lalu jalankan:

```bash
CREATE DATABASE IF NOT EXISTS micro_erp_test CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

php artisan test        # Windows / Linux / macOS
# atau
vendor\bin\phpunit      # Windows
```

Terdapat **35 test / 317 assertions**, mencakup:

- `AccountingFlowTest` — integritas akuntansi end-to-end: draft → approval → posting → invoice/payment → bill/payment → reversal → laporan keuangan.
- `RoleAccessSmokeTest` — matriks akses 5 peran × seluruh rute (200/403) + halaman detail & form untuk owner.
- `RolePermissionActionTest` — aksi per permission (approve transaksi, buat akun, tutup periode).
- `BankReconciliationFlowTest` — pembuatan rekonsiliasi, pencocokan item, penutupan, dan pembatasan peran.
- `FinancialPeriodFlowTest` — tutup/buka kembali/kunci periode dan pembatasan peran.

## Teknologi

- Laravel 13, Eloquent, Blade
- Bootstrap 5.3.3, Font Awesome 6.5.2, SweetAlert2 11, Chart.js (CDN)
- Font: Plus Jakarta Sans

## 💖 Dukungan & Donasi

Jika proyek Micro-ERP ini bermanfaat bagi Anda dan telah menghemat banyak jam kerja Anda, Anda dapat menunjukkan apresiasi dengan memberikan traktiran kopi (donasi) melalui pemindaian kode QRIS di bawah ini:

<img src="./qris.png" alt="QRIS Donasi" width="300"/>

## 📄 License

Proyek ini dirilis dengan lisensi open-source [MIT](LICENSE).

Copyright (c) 2026 **Yanuar Ardhika Rahmadhani Ubaidillah**