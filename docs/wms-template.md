# WMS — Warehouse Management System

Sistem **Warehouse Management System (WMS)** kelas enterprise yang dibangun di atas **Laravel 13**. Didesain dengan UI monokrom premium menggunakan Bootstrap 5, FontAwesome 6, dan SweetAlert2.

## 🚀 Modul & Fitur Utama

### 📊 Dashboard & Navigasi
*   **Dashboard Real-time**: KPI lengkap (Total Stok, Nilai Stok, Peringatan Stok Menipis) dan visualisasi Chart.js.
*   **Inventory**: Ringkasan saldo stok per produk & gudang.
*   **Notifications**: Notifikasi sistem (stok menipis, dsb).
*   **Activity Logs**: Audit trail lengkap seluruh aktivitas pengguna.
*   **Settings**: Konfigurasi sistem dinamis.

### 👥 Master Data
*   **Products**: Manajemen produk dengan pagination, pencarian, dan filter.
*   **Categories**: Kategori produk.
*   **Units**: Satuan produk beserta faktor konversi.
*   **Suppliers**: Data pemasok.
*   **Customers**: Data pelanggan.

### 🏭 Warehouse & Lokasi
*   **Warehouses**: Dukungan multi-gudang.
*   **Locations**: Penyimpanan / lokasi rak dalam gudang.

### 🔄 Transaksi Stok
*   **Purchase Orders**: Pengelolaan pesanan pembelian dari supplier.
*   **Stock In**: Penerimaan barang masuk.
*   **Stock Out**: Pengeluaran barang keluar.
*   **Stock Transfers**: Transfer antar gudang.
*   **Stock Adjustments**: Penyesuaian saldo stok.
*   **Stock Opname**: Stok opname fisik.

### 🔐 Keamanan & Manajemen
*   **Authentication manual**: Login aman dengan pemeriksaan akun aktif, *brute-force throttling*, dan validasi sesi (tanpa starter kit).
*   **Users & Roles**: Otorisasi granular (Super Admin, Warehouse Manager, Supervisor, Staff, Purchasing, Controller, Viewer).
*   **Reports**: Laporan ringkasan operasional.

## 🧰 Teknologi

| Komponen | Teknologi |
| :------- | :-------- |
| Framework | Laravel ^13.17 |
| PHP | ^8.3 |
| Database | MySQL / MariaDB |
| Frontend | Bootstrap 5, FontAwesome 6, SweetAlert2, Chart.js |

## 📋 System Requirements

*   PHP ^8.3
*   Laravel Framework ^13.0
*   MySQL / MariaDB
*   Composer
*   Node.js & NPM

## 🛠️ Installation & Setup

1.  **Install Dependencies**
    ```bash
    composer install
    npm install
    ```

2.  **Environment Configuration**
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```
    Sesuaikan kredensial database di file `.env`.

3.  **Database Migration & Seeding**
    Perintah ini membuat skema dan mengisi database dengan data uji realistis (Gudang, Produk, Stok Awal, Role, Pengguna).
    ```bash
    php artisan migrate:fresh --seed
    ```

4.  **Compile Assets (Vite)**
    Karena Tailwind telah dihapus dan memakai Bootstrap CDN, Vite hanya digunakan untuk bundling `app.css` dan JS.
    ```bash
    npm run build
    ```

5.  **Jalankan Aplikasi**
    ```bash
    php artisan serve
    ```

## 🔐 Akun Demo

Seeder menyediakan akun demo lengkap. Semua akun menggunakan password: `password`

| Role | Email / Username | Level Akses |
| :--- | :--- | :--- |
| **Super Admin** | `superadmin@gmail.com` | Akses penuh seluruh sistem |
| **Warehouse Manager** | `manager@gmail.com` | Mengelola seluruh gudang & laporan |
| **Warehouse Supervisor** | `supervisor@gmail.com` | Mengawasi operasional & persetujuan |
| **Warehouse Staff** | `staff@gmail.com` | Operasional fisik (ditugaskan di WH Jember) |
| **Purchasing Staff** | `purchasing@gmail.com` | Mengelola Supplier dan Purchase Orders |
| **Inventory Controller** | `controller@gmail.com` | Akurasi stok, Opname & Adjustments |
| **Viewer** | `viewer@gmail.com` | Akses baca-saja |

## 🏗️ Arsitektur Inti

### Konkurensi & Perhitungan Stok
Untuk mencegah stok negatif saat banyak operator bekerja bersamaan, `StockService` menggunakan *pessimistic locking* (`lockForUpdate`). Saldo dijamin selalu ada melalui `firstOrCreate` di dalam blok `DB::transaction()`.

### Audit Trail Imutable
Setiap perubahan pada `stock_balances` otomatis menghasilkan catatan `stock_movements`, menjamin:
`Saldo Awal + Stok Masuk - Stok Keluar + Penyesuaian = Saldo Fisik Saat Ini`.
*Movement* diperlakukan sebagai buku besar append-only dan tidak dapat dihapus melalui UI.

### Authorization
Validasi backend secara ketat menegakkan penugasan gudang. Staf Warehouse yang ditugaskan ke "Gudang Pusat Jember" tidak dapat memproses Stock Out untuk "Gudang Cabang Malang".

## 📝 Troubleshooting

*   **Target class does not exist**: Jalankan `composer dump-autoload`.
*   **Vite manifest not found**: Pastikan sudah `npm run build` atau `npm run dev` berjalan.
*   **Database connection refused**: Pastikan MySQL berjalan dan kredensial `.env` sesuai.

## 🤝 Contributing

Silakan baca [CONTRIBUTING.md](CONTRIBUTING.md) untuk panduan kontribusi dan *pull request*.

## 🛡️ Security

Jika menemukan celah keamanan, ikuti prosedur pelaporan di [SECURITY.md](SECURITY.md).

## 💖 Dukungan & Donasi

Jika proyek WMS ini bermanfaat bagi Anda dan telah menghemat banyak jam kerja Anda, Anda dapat menunjukkan apresiasi dengan memberikan traktiran kopi (donasi) melalui pemindaian kode QRIS di bawah ini:

<img src="./qris.png" alt="QRIS Donasi" width="300"/>

## 📄 License

Proyek ini dirilis dengan lisensi open-source [MIT](LICENSE).

Copyright (c) 2026 **Yanuar Ardhika Rahmadhani Ubaidillah**