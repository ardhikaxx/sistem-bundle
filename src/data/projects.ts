export interface Project {
	slug: string;
	name: string;
	short: string;
	description: string;
	readme: string;
}

export const projects: Project[] = [
	{
		slug: 'siakad-template',
		name: 'SIAKAD',
		short: 'Sistem Informasi Akademik Sekolah',
		description:
			'Manajemen akademik sekolah lengkap: portal publik, kehadiran, penilaian, rapor PDF, hingga keuangan sekolah.',
		readme: 'Dokumentasi lengkap SIAKAD — fitur, instalasi, akun demo, dan data seeder.',
	},
	{
		slug: 'crm-template',
		name: 'CRM System',
		short: 'Customer Relationship Management',
		description:
			'Kelola seluruh siklus hubungan pelanggan: leads, pipeline, quotation, invoice, hingga tiket dukungan.',
		readme: 'Dokumentasi lengkap CRM — modul, teknologi, instalasi, dan akun demo.',
	},
	{
		slug: 'cms-template',
		name: 'Nusantara Digital CMS',
		short: 'Company Profile CMS',
		description:
			'Company profile dinamis dengan page builder, blog, galeri, media library, dan manajemen konten penuh.',
		readme: 'Dokumentasi lengkap CMS — fitur, requirement, instalasi, dan struktur direktori.',
	},
	{
		slug: 'wms-template',
		name: 'WMS',
		short: 'Warehouse Management System',
		description:
			'Sistem gudang enterprise: multi-warehouse, transaksi stok, opname, dan laporan operasional real-time.',
		readme: 'Dokumentasi lengkap WMS — modul, arsitektur, instalasi, dan akun demo.',
	},
	{
		slug: 'erp-template',
		name: 'Micro-ERP',
		short: 'Enterprise Resource Planning',
		description:
			'ERP akuntansi double-entry: jurnal otomatis, buku besar, invoice/bill, rekonsiliasi bank, dan laporan keuangan.',
		readme: 'Dokumentasi lengkap Micro-ERP — fitur, testing, instalasi, dan akun demo.',
	},
];

export const author = {
	name: 'Yanuar Ardhika Rahmadhani Ubaidillah',
	role: 'Full-stack Web Developer',
	portfolio: 'https://yanuar-ardhika.vercel.app/',
	email: 'yanuarardhika05@gmail.com',
};

export const bundle = {
	name: 'Bundle 5 Sistem Web Laravel 13',
	price: 'Rp75.000',
	priceLabel: 'untuk 5 sistem lengkap',
};