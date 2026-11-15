# HM NET GRIBIG - Billing & Network Management System

Aplikasi Manajemen Billing RT/RW Net & Jaringan FTTH terintegrasi Realtime Cloud (Supabase).

## Fitur Utama:
- **Billing & Tagihan Otomatis**: Riwayat pembayaran 6 periode bulan (Juli - Desember 2026).
- **Status Pembayaran Fleksibel**: Lunas, Dicicil (parsial), dan Belum Bayar.
- **WhatsApp 1-Klik**: Template notifikasi 4 kondisi (Belum Bayar, Gangguan Jaringan, Normal Kembali, Bukti Lunas).
- **Studio Nota & Struk Resmi**: Cetak nota kwitansi thermal/A4 dan simpan ke gambar PNG/JPG.
- **Monitoring Redaman Optik (dB) & OLT**: Jalur PON 1 & PON 2 serta peringatan redaman kritis.
- **Akses Remote Cepat**: Tombol direct akses ke WebFig MikroTik & Web OLT.
- **Multi-User RBAC**: Hak akses Owner, Admin, dan Teknisi.
- **Audit Trail & Keamanan**: Jejak forensik seluruh mutasi data dan login pengguna.
- **Pembukuan Keuangan Pribadi & Bisnis**: Cashflow, realisasi bulanan, dan catatan konsumsi makan harian.
- **Backup & Impor Excel**: Unduh template Excel, impor data merge/replace, dan backup database penuh JSON.
- **Realtime Cloud Synchronization**: Terhubung ke database Supabase sehingga data di Localhost, Vercel Hosting, dan HP teknisi selalu sinkron secara otomatis.

## Menjalankan di Localhost:
Buka PowerShell di direktori ini lalu jalankan:
```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\server.ps1
```
Buka browser di: `http://localhost:2006/`

## Deployment ke Vercel:
Proyek ini siap di-deploy langsung ke Vercel:
1. Hubungkan repository GitHub ini ke Vercel.
2. Framework Preset: **Other**.
3. Output Directory: `./`.
4. Deploy!
