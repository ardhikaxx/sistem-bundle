# CRM System — Customer Relationship Management

Sistem **CRM (Customer Relationship Management)** berbasis web yang dibangun di atas **Laravel 13** untuk mengelola seluruh siklus hubungan dengan pelanggan: dari **lead** & **prospek**, hingga **quotation**, **invoice**, **pembayaran**, dan **tiket dukungan** — semuanya dalam satu dashboard terpadu.

## 🚀 Modul & Fitur Utama

### 📊 Dashboard & Navigasi
*   **Dashboard**: KPI penjualan, statistik lead/pelanggan, dan ringkasan kinerja.
*   **Global Search**: Pencarian cepat di seluruh modul dari satu kolom pencarian.
*   **Activity Logs (Audit Trail)**: Riwayat lengkap setiap aksi pengguna.

### 👥 Master Data
*   **Customers**: CRUD lengkap, ekspor **CSV**, dan impor **Excel**.
*   **Contacts**: Kontak per pelanggan.
*   **Products**: Katalog produk beserta detailnya.

### 💼 Sales & Pipeline
*   **Leads**: Kelola calon pelanggan, **konversi lead → prospek/pelanggan**, ekspor CSV.
*   **Opportunities (Pipeline)**: Visualisasi tahapan penjualan dengan perpindahan *stage* secara dinamis.
*   **Quotations**: Pembuatan penawaran harga dengan item terperinci.
*   **Invoices**: Faktur penjualan dengan **download PDF** (dompdf) & pelacakan **pembayaran**.

### 🗓️ Aktivitas & Jadwal
*   **Activities**: Catat interaksi/kegiatan dengan pelanggan.
*   **Calendar**: Kalender visual untuk follow-up, kegiatan, dan tenggat.

### 📂 Dokumentasi & Dukungan
*   **Documents**: Upload, download, dan hapus dokumen terkait bisnis.
*   **Helpdesk Tickets**: Manajemen tiket dukungan pelanggan (status, prioritas, penugasan).

### 📈 Laporan
*   **Reports**: Laporan ringkasan penjualan & performa tim.

### 🔐 Keamanan & Manajemen
*   **Authentication manual**: login aman, throttling brute-force, validasi sesi (tanpa starter kit).
*   **Roles & Permissions**: Otorisasi granular per modul (view / create / update / delete) untuk Super Admin, Sales, dan tim lainnya.
*   **Users**: Manajemen pengguna sistem.

## 🧰 Teknologi

| Komponen | Teknologi |
| :------- | :-------- |
| Framework | Laravel ^13.17 |
| PHP | ^8.3 |
| Database | MySQL / MariaDB |
| PDF | barryvdh/laravel-dompdf |
| Excel | maatwebsite/excel |
| Frontend | Bootstrap + Vite |

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
    ```bash
    php artisan migrate:fresh --seed
    ```

4.  **Compile Assets (Vite)**
    ```bash
    npm run build
    ```

5.  **Jalankan Aplikasi**
    ```bash
    php artisan serve
    ```

## 🔐 Akun Demo

Seeder menyediakan akun demo berikut. Semua akun menggunakan password: `password`

| Role | Email / Username | Akses |
| :--- | :--- | :--- |
| **Super Admin** | `superadmin@gmail.com` | Akses penuh seluruh sistem |
| **Admin/CRM Manager** | `manager@gmail.com` | Manajemen sistem dan laporan operasional |
| **Sales Manager** | `salesmanager@gmail.com` | Manajemen tim sales, pipeline, dan laporan penjualan |
| **Sales Representative** | `budi@gmail.com`, `andi@gmail.com`, `tono@gmail.com` | Kelola leads, prospek, quotation, dan aktivitas pelanggan |
| **Finance** | `siti@gmail.com` | Kelola invoice dan pembayaran |
| **Customer Support** | `dewi@gmail.com` | Manajemen tiket bantuan / helpdesk |

## 🏗️ Arsitektur Inti

### Authorization
Setiap modul dilindungi middleware `permission:*` sehingga aksi divalidasi di sisi UI sekaligus server. Permission dapat dikelola per role untuk membatasi akses view/create/update/delete.

### Audit Trail
Setiap aksi penting otomatis tercatat ke tabel `activity_logs` — riwayat lengkap siapa melakukan apa dan kapan.

### Pengaturan Sistem
Konfigurasi dinamis (nama perusahaan, mata uang, zona waktu) disimpan via tabel `settings` dan dapat diubah tanpa kode.

## 📝 Troubleshooting

*   **Target class does not exist**: Jalankan `composer dump-autoload`.
*   **Vite manifest not found**: Pastikan sudah `npm run build` atau `npm run dev` berjalan.
*   **Database connection refused**: Pastikan MySQL berjalan dan kredensial `.env` sesuai.

## 🤝 Contributing

Silakan baca [CONTRIBUTING.md](CONTRIBUTING.md) untuk panduan kontribusi dan *pull request*.

## 🛡️ Security

Jika menemukan celah keamanan, ikuti prosedur pelaporan di [SECURITY.md](SECURITY.md).

## 💖 Dukungan & Donasi

Jika proyek CRM ini bermanfaat bagi Anda dan telah menghemat banyak jam kerja Anda, Anda dapat menunjukkan apresiasi dengan memberikan traktiran kopi (donasi) melalui pemindaian kode QRIS di bawah ini:

<img src="./qris.png" alt="QRIS Donasi" width="300"/>

## 📄 License

Proyek ini dirilis dengan lisensi open-source [MIT](LICENSE).

Copyright (c) 2026 **Yanuar Ardhika Rahmadhani Ubaidillah**