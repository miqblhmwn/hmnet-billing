// ==========================================
// SUPABASE REALTIME CLOUD SYNC CONFIGURATION
// ==========================================
const SUPABASE_CONFIG = {
  url: "https://taltsyvllkvosxbqmusf.supabase.co",
  key: "sb_publishable_gOhpXFOAJhUVkmtjaPoU5Q_stHH9TaW"
};

// ==========================================
// DATA MASTER INITIAL HM NET GRIBIG
// ==========================================
const DEFAULT_COMPANY = {
  name: "HM NET GRIBIG",
  tagline: "Akses Internet Rumahan",
  phone: "085691693286",
  address: "Desa Gribig RT 05 / RW 03, Gebog, Kudus",
  showAddressOnReceipt: false, // Default: tidak usah dikasih alamat di nota
  receiptStamp: "LUNAS / PAID",
  receiptFooter: "Terima kasih atas pembayaran tepat waktu. Simpan struk ini sebagai bukti pembayaran yang sah.",
  receiptTemplateUpdated: true,
  paymentAccounts: [
    { bank: "Bank Mandiri", number: "135-00-1234567-8", name: "HM NET GRIBIG" },
    { bank: "Bank BRI", number: "0082-01-098765-53-1", name: "HM NET GRIBIG" },
    { bank: "DANA / LinkAja", number: "0856-9169-3286", name: "HM NET GRIBIG" }
  ],
  waTemplateReminder: `Halo Kak *{nama}*,\n\nIni pengingat tagihan WiFi *HM NET GRIBIG* ({slogan}) untuk periode *{periode}*:\n-------------------------------------\n📦 Paket: *{paket}* ({kecepatan})\n💰 Total Tagihan: *Rp {tagihan}*\n📅 Status: *BELUM LUNAS*\n-------------------------------------\nMohon melakukan pembayaran via transfer:\n{rekening}\natau bayar tunai ke admin/teknisi.\n\nJika sudah transfer, mohon kirim bukti transfer ya kak. Terima kasih! 🙏`,
  waTemplateReceipt: `Terima kasih Kak *{nama}*! 🙏\n\nPembayaran tagihan WiFi *HM NET GRIBIG* ({slogan}) telah kami terima:\n-------------------------------------\n🧾 No Invoice: *{no_inv}*\n📅 Periode: *{periode}*\n📦 Paket: *{paket}* ({kecepatan})\n💵 Jumlah Bayar: *Rp {bayar}*\n💳 Metode: *{metode}*\n🕒 Tgl Bayar: *{tgl_bayar}*\n✅ Status: *LUNAS*\n-------------------------------------\n(Lampiran gambar nota kwitansi resmi telah disertakan). Terima kasih atas kerjasamanya! 🚀`,
  // TEMPLATE PESAN WHATSAPP 4 KONDISI:
  waTemplateUnpaid: `Halo Kak *{nama}* (Pelanggan HM NET GRIBIG - {alamat}) 🙏\n\nKami menginfokan bahwa tagihan WiFi Internet HM NET untuk periode *{periode}* sebesar *Rp {tagihan}* saat ini belum tercatat lunas.\n\nPembayaran dapat ditransfer via rekening resmi kami:\n{rekening}\natau bayar tunai langsung ke admin/teknisi.\n\nJika sudah melakukan transfer, mohon konfirmasi bukti transfer ya kak. Terima kasih atas kerjasamanya! 🚀✨`,
  waTemplateDisturbance: `Pemberitahuan Gangguan Jaringan WiFi HM NET ⚠️\n\nYth. Kak *{nama}* ({alamat}),\n\nKami informasikan bahwa saat ini sedang terjadi kendala teknis / gangguan jaringan internet WiFi di wilayah Anda dikarenakan perbaikan kabel optik / maintenance jalur upstream.\n\nTim teknisi HM NET saat ini sedang berada di lokasi untuk melakukan penanganan dan perbaikan secepat mungkin agar koneksi kembali normal.\n\nMohon maaf yang sebesar-besarnya atas ketidaknyamanan yang terjadi. Kami akan segera menginfokan kembali begitu koneksi sudah pulih normal. Terima kasih atas kesabarannya 🙏`,
  waTemplateNormal: `Informasi Jaringan Sudah Normal Kembali 🟢✨\n\nHalo Kak *{nama}* ({alamat}),\n\nKabar baik! Perbaikan teknis pada jaringan WiFi HM NET telah selesai dilakukan. Saat ini koneksi internet di wilayah Anda sudah kembali *NORMAL & STABIL* 100% 🚀\n\nSilakan dicoba kembali. Jika modem Anda masih merah/loss, silakan restart modem (matikan 10 detik lalu nyalakan kembali).\n\nJika masih ada kendala, hubungi kami di nomor ini ya kak. Selamat beraktivitas kembali dan terima kasih! 🙏`,
  waTemplatePaid: `Terima kasih Kak *{nama}*! 🙏\n\nPembayaran tagihan WiFi *HM NET GRIBIG* ({slogan}) telah kami terima:\n-------------------------------------\n🧾 No Invoice: *{no_inv}*\n📅 Periode: *{periode}*\n📦 Paket: *{paket}* ({kecepatan})\n💵 Jumlah Bayar: *Rp {bayar}*\n💳 Metode: *{metode}*\n🕒 Tgl Bayar: *{tgl_bayar}*\n✅ Status: *LUNAS*\n-------------------------------------\n(Lampiran gambar nota kwitansi resmi telah disertakan). Terima kasih banyak atas pembayaran tepat waktu! Semoga koneksinya lancar selalu. 🚀`,
  waTemplateCicil: `Halo Kak *{nama}* (Pelanggan HM NET GRIBIG) 🙏\n\nPembayaran cicilan tagihan WiFi periode *{periode}* telah kami terima:\n-------------------------------------\n📦 Paket: *{paket}* ({kecepatan})\n💰 Total Tagihan: *Rp {tagihan}*\n💵 Pembayaran Masuk: *Rp {bayar}*\n⚠️ Sisa Tagihan: *Rp {sisa_tagihan}*\n📅 Status: *DICICIL (SEBAGIAN)*\n-------------------------------------\nTerima kasih atas cicilan pembayarannya. Mohon segera melunasi sisa tagihan ya kak. Terima kasih! 🚀`
};

const INITIAL_CUSTOMERS = [
  { id: 1, name: "Falah", phone: "88239353031", address: "Mbuak RT 1/3 Gribig", modem: "GPON ZTE F6600PV9", sn: "ZTEGd3be73c7", statusOnt: "NEW", pon: 2, redaman: -14.8, speed: "20 Mbps", price: 150000, status: "AKTIF" },
  { id: 2, name: "Siril", phone: "85602772271", address: "Muneng RT 5/3 Gribig", modem: "GPON ZTE F670L", sn: "ZTEGd1dee05c", statusOnt: "NEW", pon: 1, redaman: -16.8, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 3, name: "Masyito", phone: "85600180702", address: "Muneng RT 3/3 Gribig", modem: "GPON Fiberhome HG6145D2", sn: "FHTTc180531f", statusOnt: "NEW", pon: 2, redaman: -17.7, speed: "1 Mbps", price: 0, status: "AKTIF" },
  { id: 4, name: "Yahya", phone: "87761477706", address: "Muneng RT 1/3 Gribig", modem: "GPON Fiberhome HG6145D2", sn: "FHTTc180613c", statusOnt: "NEW", pon: 2, redaman: -19.4, speed: "10 Mbps", price: 50000, status: "AKTIF" },
  { id: 5, name: "Ratna", phone: "87751981469", address: "Muneng RT 5/3 Gribig", modem: "GPON Fiberhome HG6145D2", sn: "FHTTc1806f83", statusOnt: "NEW", pon: 1, redaman: -20.8, speed: "8 Mbps", price: 75000, status: "AKTIF" },
  { id: 6, name: "Silfia", phone: "85701616796", address: "Muneng RT 5/3 Gribig", modem: "GPON Fiberhome HG6145D2", sn: "FHTTc1807614", statusOnt: "NEW", pon: 1, redaman: -13.8, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 7, name: "Galih", phone: "85290641422", address: "Muneng RT 5/3 Gribig", modem: "GPON Fiberhome HG6145D2", sn: "FHTTc18058d1", statusOnt: "NEW", pon: 1, redaman: -20.1, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 8, name: "Zainal", phone: "85718235294", address: "Muneng RT 2/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGca879855", statusOnt: "NEW", pon: 2, redaman: -22.2, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 9, name: "Eva Toko", phone: "81931921956", address: "Muneng RT 5/3 Gribig", modem: "GPON Fiberhome HG6145D2", sn: "FHTTc18061b7", statusOnt: "NEW", pon: 2, redaman: -18.2, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 10, name: "Ramadhan", phone: "89654969496", address: "Muneng RT 5/3 Gribig", modem: "GPON Fiberhome HG6145D2", sn: "FHTTc18079f5", statusOnt: "NEW", pon: 1, redaman: -13.9, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 11, name: "Indra", phone: "85721250773", address: "Muneng RT 2/3 Gribig", modem: "GPON Fiberhome HG6145D2", sn: "FHTTc1806f89", statusOnt: "NEW", pon: 2, redaman: -16.4, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 12, name: "Angga", phone: "895363640644", address: "Muneng RT 5/3 Gribig", modem: "GPON Fiberhome HG6145D2", sn: "FHTTc18060fe", statusOnt: "NEW", pon: 2, redaman: -11.7, speed: "50 Mbps", price: 300000, status: "AKTIF" },
  { id: 13, name: "Putra", phone: "85647459563", address: "Muneng RT 5/3 Gribig", modem: "GPON Fiberhome HG6145F", sn: "FHTT999ce590", statusOnt: "NEW", pon: 1, redaman: -22.2, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 14, name: "Ajeng", phone: "895620010619", address: "Muneng RT 5/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcb6f0e0a", statusOnt: "NEW", pon: 1, redaman: -16.6, speed: "10 Mbps", price: 120000, status: "AKTIF" },
  { id: 15, name: "Abdul Wahid", phone: "8882754363", address: "Muneng RT 5/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcb8cb24b", statusOnt: "NEW", pon: 1, redaman: -18.4, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 16, name: "Selvi Regita", phone: "81575999483", address: "Muneng RT 5/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcc088aa0", statusOnt: "NEW", pon: 1, redaman: -19.8, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 17, name: "Rifi", phone: "81567954548", address: "Muneng RT 5/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcbb50685", statusOnt: "NEW", pon: 1, redaman: -16.3, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 18, name: "Subuh", phone: "85321038807", address: "Muneng RT 4/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcc10ed46", statusOnt: "NEW", pon: 2, redaman: -19.9, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 19, name: "Arif", phone: "87734935554", address: "Muneng RT 3/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcb6ef6c9", statusOnt: "NEW", pon: 2, redaman: -20.7, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 20, name: "Giyono", phone: "81804083804", address: "Muneng RT 2/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcb597668", statusOnt: "NEW", pon: 2, redaman: -27.7, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 21, name: "Rohman", phone: "85726239994", address: "Muneng RT 3/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcc10df07", statusOnt: "NEW", pon: 2, redaman: -20.1, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 22, name: "Imam Abu", phone: "87700079776", address: "Muneng RT 1/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcc146919", statusOnt: "NEW", pon: 2, redaman: -18.7, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 23, name: "Nasi Padang", phone: "8128826960", address: "Muneng RT 5/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcc68e150", statusOnt: "NEW", pon: 2, redaman: -12.4, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 24, name: "Syaiful Annas", phone: "85227903322", address: "Muneng RT 3/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcb82c403", statusOnt: "NEW", pon: 2, redaman: -26.4, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 25, name: "Riyan", phone: "85876373835", address: "Muneng RT 3/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcb46987d", statusOnt: "NEW", pon: 2, redaman: -12.2, speed: "15 Mbps", price: 120000, status: "AKTIF" },
  { id: 26, name: "Yan", phone: "8562751582", address: "Muneng RT 2/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcc351158", statusOnt: "NEW", pon: 2, redaman: -27.1, speed: "20 Mbps", price: 150000, status: "AKTIF" },
  { id: 27, name: "Yahya Mber", phone: "8886544208", address: "Muneng RT 5/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcc25ed24", statusOnt: "NEW", pon: 2, redaman: -21.8, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 28, name: "Aris", phone: "85290398393", address: "Muneng RT 3/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGca83561d", statusOnt: "NEW", pon: 2, redaman: -17.9, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 29, name: "Irfan Panjul", phone: "82220441267", address: "Muneng RT 5/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGca86abd9", statusOnt: "NEW", pon: 2, redaman: -23.0, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 30, name: "Zuhri", phone: "82326211865", address: "Muneng RT 5/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGca7af83b", statusOnt: "NEW", pon: 2, redaman: -23.6, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 31, name: "Seblak Cikmay", phone: "87713847260", address: "Muneng RT 5/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGCA813047", statusOnt: "NEW", pon: 2, redaman: -9.2, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 32, name: "Eva Rumah", phone: "81931921956", address: "Muneng RT 5/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGCB97DAB2", statusOnt: "NEW", pon: 1, redaman: -16.1, speed: "8 Mbps", price: 80000, status: "AKTIF" },
  { id: 33, name: "Shodiqin", phone: "82253900135", address: "Muneng RT 5/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGCAC44152", statusOnt: "NEW", pon: 1, redaman: -18.5, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 34, name: "Soka", phone: "81288663496", address: "Muneng RT 2/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGCB9A7DF3", statusOnt: "NEW", pon: 2, redaman: -16.4, speed: "15 Mbps", price: 120000, status: "AKTIF" },
  { id: 35, name: "Yasin", phone: "87882765917", address: "Muneng RT 5/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGCB96DC31", statusOnt: "NEW", pon: 1, redaman: -12.8, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 36, name: "Kholik", phone: "82133113209", address: "Muneng RT 4/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcb6a2a53", statusOnt: "NEW", pon: 2, redaman: -18.7, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 37, name: "Yuni", phone: "85712167560", address: "Muneng RT 3/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcc00073d", statusOnt: "NEW", pon: 2, redaman: -15.9, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 38, name: "Andi Azka", phone: "85700213470", address: "Muneng RT 2/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcc11aa36", statusOnt: "NEW", pon: 2, redaman: -27.1, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 39, name: "Sakinah Madura", phone: "89529334919", address: "Muneng RT 1/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZICG00b54d77", statusOnt: "NEW", pon: 2, redaman: -17.8, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 40, name: "Salim", phone: "87831326408", address: "Muneng RT 5/3 Gribig", modem: "XPON ZTE F663NV9", sn: "ZTEGcde60177", statusOnt: "NEW", pon: 1, redaman: -21.8, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 41, name: "Yudistira", phone: "81934164086", address: "Muneng RT 5/3 Gribig", modem: "XPON ZTE F663NV9", sn: "ZTEGcda472ae", statusOnt: "NEW", pon: 1, redaman: -15.1, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 42, name: "Desi", phone: "87764553694", address: "Muneng RT 3/3 Gribig", modem: "XPON ZTE F663NV9", sn: "ZTEGcd04c986", statusOnt: "NEW", pon: 2, redaman: -15.4, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 43, name: "Sari", phone: "89647006497", address: "Muneng RT 1/3 Gribig", modem: "XPON ZTE F663NV9", sn: "ZTEGcd146ca1", statusOnt: "NEW", pon: 2, redaman: -18.1, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 44, name: "Agung", phone: "85640118191", address: "Muneng RT 4/3 Gribig", modem: "XPON ZTE F663NV3A", sn: "ZTEGcc0c236d", statusOnt: "NEW", pon: 2, redaman: -17.1, speed: "10 Mbps", price: 100000, status: "AKTIF" },
  { id: 45, name: "Mas'ud", phone: "87785719424", address: "Klumpit RT 3/5 Klumpit", modem: "XPON GGCLink G699", sn: "GGCL298e3ca6", statusOnt: "GANTI", pon: 2, redaman: -10.9, speed: "7 Mbps", price: 50000, status: "AKTIF" },
  { id: 46, name: "Ihsan", phone: "89617150806", address: "Muneng RT 1/3 Gribig", modem: "XPON GGCLink G699", sn: "GGCL297a3e54", statusOnt: "SECOND", pon: 2, redaman: -18.9, speed: "8 Mbps", price: 80000, status: "AKTIF" },
  { id: 47, name: "Dafa", phone: "87746312102", address: "Muneng RT 1/3 Gribig", modem: "XPON GGCLink G699", sn: "GGCL2974397b", statusOnt: "SECOND", pon: 2, redaman: -17.7, speed: "8 Mbps", price: 80000, status: "AKTIF" },
  { id: 48, name: "Rafiqi", phone: "85642220686", address: "Muneng RT 1/3 Gribig", modem: "XPON GGCLink G699", sn: "GGCLc913bb68", statusOnt: "SECOND", pon: 2, redaman: -18.6, speed: "15 Mbps", price: 120000, status: "AKTIF" },
  { id: 49, name: "Eko", phone: "85640444431", address: "Muneng RT 4/3 Gribig", modem: "GPON Fiberhome HG6145D2", sn: "FHTTc18079ef", statusOnt: "NEW", pon: 2, redaman: -17.5, speed: "10 Mbps", price: 100000, status: "AKTIF" }
];

const INITIAL_PAYMENTS = [
  { customerId: 1, period: "November 2026", tariff: 150000, paid: 150000, status: "LUNAS", payDate: "2026-11-12", method: "DANA / LinkAja", notes: "" },
  { customerId: 2, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-11", method: "Transfer BRI", notes: "" },
  { customerId: 3, period: "November 2026", tariff: 0, paid: 0, status: "LUNAS", payDate: "2026-11-01", method: "Gratis / Free", notes: "Langganan 1 Mbps (-)" },
  { customerId: 4, period: "November 2026", tariff: 50000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 5, period: "November 2026", tariff: 75000, paid: 75000, status: "LUNAS", payDate: "2026-11-11", method: "DANA / LinkAja", notes: "" },
  { customerId: 6, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-10-26", method: "Transfer Mandiri", notes: "" },
  { customerId: 7, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-10", method: "Transfer Mandiri", notes: "" },
  { customerId: 8, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-09", method: "Transfer Mandiri", notes: "" },
  { customerId: 9, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-03", method: "DANA / LinkAja", notes: "" },
  { customerId: 10, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-07", method: "Transfer Mandiri", notes: "" },
  { customerId: 11, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 12, period: "November 2026", tariff: 300000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 13, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-10", method: "Cash / Tunai", notes: "" },
  { customerId: 14, period: "November 2026", tariff: 120000, paid: 120000, status: "LUNAS", payDate: "2026-11-01", method: "Transfer BRI", notes: "" },
  { customerId: 15, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 16, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 17, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-09", method: "Transfer BRI", notes: "" },
  { customerId: 18, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-10", method: "Transfer Mandiri", notes: "" },
  { customerId: 19, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-08", method: "Transfer BRI", notes: "" },
  { customerId: 20, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 21, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 22, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-10", method: "Transfer BRI", notes: "" },
  { customerId: 23, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 24, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 25, period: "November 2026", tariff: 120000, paid: 120000, status: "LUNAS", payDate: "2026-10-27", method: "Transfer Mandiri", notes: "" },
  { customerId: 26, period: "November 2026", tariff: 150000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 27, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 28, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-11", method: "Transfer Mandiri", notes: "" },
  { customerId: 29, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-13", method: "Transfer Mandiri", notes: "" },
  { customerId: 30, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-11", method: "Transfer BRI", notes: "" },
  { customerId: 31, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 32, period: "November 2026", tariff: 80000, paid: 80000, status: "LUNAS", payDate: "2026-11-03", method: "DANA / LinkAja", notes: "" },
  { customerId: 33, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 34, period: "November 2026", tariff: 120000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 35, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 36, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-11", method: "DANA / LinkAja", notes: "" },
  { customerId: 37, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 38, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 39, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 40, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 41, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 42, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 43, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-08", method: "Transfer Mandiri", notes: "" },
  { customerId: 44, period: "November 2026", tariff: 100000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 45, period: "November 2026", tariff: 50000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 46, period: "November 2026", tariff: 80000, paid: 80000, status: "LUNAS", payDate: "2026-11-01", method: "Transfer Mandiri", notes: "" },
  { customerId: 47, period: "November 2026", tariff: 80000, paid: 0, status: "BELUM", payDate: "", method: "", notes: "" },
  { customerId: 48, period: "November 2026", tariff: 120000, paid: 120000, status: "LUNAS", payDate: "2026-11-02", method: "Transfer Mandiri", notes: "" },
  { customerId: 49, period: "November 2026", tariff: 100000, paid: 100000, status: "LUNAS", payDate: "2026-11-13", method: "Cash / Tunai", notes: "" }
];

const INITIAL_EXPENSES = [
  { id: 1, category: "Bandwidth Utama", description: "Biaya Bandwidth utama ISP Pokok (Dedicated)", period: "November 2026", amount: 2370000, date: "2026-11-02" }
];

// ==========================================
// DATA MASTER USERS & HAK AKSES (RBAC)
// ==========================================
const DEFAULT_USERS = [
  {
    id: 1,
    username: "himanet",
    password: "060602",
    name: "Bos Hima (HM Net)",
    role: "Owner",
    permissions: {
      dashboard: true,
      billing: true,
      customers: true,
      remoteNetwork: true,
      receiptStudio: true,
      userManagement: true,
      personalFinance: true,
      settings: true
    }
  },
  {
    id: 2,
    username: "izza",
    password: "izzasayangg",
    name: "Bu Bos (HM Net)",
    role: "Admin",
    permissions: {
      dashboard: false,
      billing: true,
      customers: false,
      remoteNetwork: false,
      receiptStudio: true,
      userManagement: false,
      personalFinance: false,
      settings: false
    }
  }
];

// ==========================================
// DATA KEUANGAN PRIBADI & BISNIS (MUHAMMAD IQBAL HIMAWAN)
// ==========================================
const DEFAULT_PERSONAL_FINANCE = {
  userName: "Muhammad Iqbal Himawan",
  
  // 1. Plan / Patokan Referensi Keuangan Bulanan (Gambar 1)
  plan: {
    businessIncome: [
      { id: 1, name: "HM Net Jetak", amount: 2900000 },
      { id: 2, name: "HM Net Gribig", amount: 4525000, linkToBilling: true }
    ],
    businessExpense: [
      { id: 1, category: "Internet & Listrik", detail: "Indihome Jetak", amount: 555000 },
      { id: 2, category: "Internet & Listrik", detail: "My Republik Jetak", amount: 370000 },
      { id: 3, category: "Internet & Listrik", detail: "Si Cakra Gribig", amount: 2000000 },
      { id: 4, category: "Internet & Listrik", detail: "PLN", amount: 120000 },
      { id: 5, category: "Internet & Listrik", detail: "My Republik Gribig", amount: 370000 },
      { id: 6, category: "Dana Darurat", detail: "Dana Darurat", amount: 85000 }
    ],
    investmentDebts: [
      { id: 1, name: "Irfan Kembali Modal", amount: 7000000 },
      { id: 2, name: "Irfan Fee Investasi", amount: 3000000 }
    ],
    personalIncome: [
      { id: 1, name: "Agrapana", amount: 300000 },
      { id: 2, name: "Gaji Telkom", amount: 2700000 }
    ],
    personalExpense: [
      { id: 1, category: "Kebutuhan", detail: "Makan", amount: 1000000 },
      { id: 2, category: "Kebutuhan", detail: "Bensin", amount: 200000 },
      { id: 3, category: "Rumah Tangga", detail: "Abah", amount: 250000 },
      { id: 4, category: "Rumah Tangga", detail: "Gas", amount: 50000 },
      { id: 5, category: "Sekolah", detail: "Kuliah", amount: 1400000 },
      { id: 6, category: "Perangkat", detail: "Kuota & Pulsa", amount: 60000 },
      { id: 7, category: "Perangkat", detail: "Drive", amount: 40000 }
    ]
  },

  // 2. Realisasi Pengelolaan Keuangan Bulanan (Gambar 2 & 3)
  realisations: {
    "Oktober 2026": {
      period: "Oktober 2026",
      personalIncome: [
        { id: 1, name: "Mandiri", amount: 2030000, note: "Gaji / Rekening Utama" },
        { id: 2, name: "Agrapana Oktober", amount: 350000, note: "Pemasukan Sampingan" },
        { id: 3, name: "Bensin", amount: 75000, note: "Reimburse Bensin" },
        { id: 4, name: "Cash", amount: 120000, note: "Tunai Dompet" },
        { id: 5, name: "HM NET Gribig", amount: 250000, note: "Tarik profit untuk pribadi" }
      ],
      businessIncome: [
        { id: 1, name: "HM NET Jetak", amount: 2900000, note: "Omset Jetak" },
        { id: 2, name: "HM NET Gribig", amount: 2600000, syncWithBilling: true, note: "Sinkron billing realtime" }
      ],
      personalExpense: [
        { id: 1, name: "Makan", amount: 320000, syncWithFoodSheet: true, note: "Akumulasi kalender makan 26-25" },
        { id: 2, name: "Bensin", amount: 100000, note: "Bensin motor" },
        { id: 3, name: "Kuota", amount: 50000, note: "Paket data bulanan" },
        { id: 4, name: "Kas", amount: 400000, note: "Kas / Keperluan lain" }
      ],
      businessExpense: [
        { id: 1, name: "Indihome Jetak", amount: 555000, note: "Upstream ISP Jetak" },
        { id: 2, name: "Si Cakra Gribig", amount: 2000000, note: "Upstream ISP Gribig" }
      ],
      foodExpenses: [
        { date: "26 September", day: "Sabtu", note: "", amount: 0 },
        { date: "27 September", day: "Minggu", note: "", amount: 0 },
        { date: "28 September", day: "Senin", note: "", amount: 0 },
        { date: "29 September", day: "Selasa", note: "", amount: 0 },
        { date: "30 September", day: "Rabu", note: "", amount: 0 },
        { date: "1 Oktober", day: "Kamis", note: "", amount: 0 },
        { date: "2 Oktober", day: "Jumat", note: "", amount: 0 },
        { date: "3 Oktober", day: "Sabtu", note: "", amount: 0 },
        { date: "4 Oktober", day: "Minggu", note: "", amount: 0 },
        { date: "5 Oktober", day: "Senin", note: "", amount: 0 },
        { date: "6 Oktober", day: "Selasa", note: "", amount: 0 },
        { date: "7 Oktober", day: "Rabu", note: "", amount: 0 },
        { date: "8 Oktober", day: "Kamis", note: "", amount: 0 },
        { date: "9 Oktober", day: "Jumat", note: "", amount: 0 },
        { date: "10 Oktober", day: "Sabtu", note: "", amount: 0 },
        { date: "11 Oktober", day: "Minggu", note: "", amount: 0 },
        { date: "12 Oktober", day: "Senin", note: "", amount: 0 },
        { date: "13 Oktober", day: "Selasa", note: "", amount: 0 },
        { date: "14 Oktober", day: "Rabu", note: "", amount: 0 },
        { date: "15 Oktober", day: "Kamis", note: "", amount: 0 },
        { date: "16 Oktober", day: "Jumat", note: "Makan", amount: 20000 },
        { date: "17 Oktober", day: "Sabtu", note: "Makan", amount: 40000 },
        { date: "18 Oktober", day: "Minggu", note: "Makan", amount: 40000 },
        { date: "19 Oktober", day: "Senin", note: "Makan", amount: 20000 },
        { date: "20 Oktober", day: "Selasa", note: "Makan", amount: 20000 },
        { date: "21 Oktober", day: "Rabu", note: "Makan", amount: 40000 },
        { date: "22 Oktober", day: "Kamis", note: "Makan", amount: 40000 },
        { date: "23 Oktober", day: "Jumat", note: "Makan", amount: 40000 },
        { date: "24 Oktober", day: "Sabtu", note: "Makan", amount: 30000 },
        { date: "25 Oktober", day: "Minggu", note: "Makan", amount: 30000 }
      ]
    },
    "November 2026": {
      period: "November 2026",
      personalIncome: [
        { id: 1, name: "Mandiri", amount: 2030000 },
        { id: 2, name: "Agrapana November", amount: 400000 },
        { id: 3, name: "Bensin", amount: 75000 },
        { id: 4, name: "Cash", amount: 87000 },
        { id: 5, name: "HM NET Gribig", amount: 220000, note: "Tarik profit untuk pribadi" }
      ],
      businessIncome: [
        { id: 1, name: "HM NET Jetak", amount: 2900000 },
        { id: 2, name: "HM NET Gribig", amount: 2550000, syncWithBilling: true }
      ],
      personalExpense: [
        { id: 1, name: "Makan", amount: 340000, syncWithFoodSheet: true },
        { id: 2, name: "Bensin", amount: 100000 },
        { id: 3, name: "Kuota", amount: 50000 },
        { id: 4, name: "Kas", amount: 460000 }
      ],
      businessExpense: [
        { id: 1, name: "Indihome Jetak", amount: 555000 },
        { id: 2, name: "Si Cakra Gribig", amount: 2000000 }
      ],
      // Pengaturan Uang Makan Harian (Siklus 26 Okt s/d 25 Nov)
      foodExpenses: [
        { date: "26 Oktober", day: "Senin", note: "", amount: 0 },
        { date: "27 Oktober", day: "Selasa", note: "", amount: 0 },
        { date: "28 Oktober", day: "Rabu", note: "", amount: 0 },
        { date: "29 Oktober", day: "Kamis", note: "", amount: 0 },
        { date: "30 Oktober", day: "Jumat", note: "", amount: 0 },
        { date: "31 Oktober", day: "Sabtu", note: "", amount: 0 },
        { date: "1 November", day: "Minggu", note: "", amount: 0 },
        { date: "2 November", day: "Senin", note: "", amount: 0 },
        { date: "3 November", day: "Selasa", note: "", amount: 0 },
        { date: "4 November", day: "Rabu", note: "", amount: 0 },
        { date: "5 November", day: "Kamis", note: "", amount: 0 },
        { date: "6 November", day: "Jumat", note: "", amount: 0 },
        { date: "7 November", day: "Sabtu", note: "", amount: 0 },
        { date: "8 November", day: "Minggu", note: "", amount: 0 },
        { date: "9 November", day: "Senin", note: "", amount: 0 },
        { date: "10 November", day: "Selasa", note: "", amount: 0 },
        { date: "11 November", day: "Rabu", note: "", amount: 0 },
        { date: "12 November", day: "Kamis", note: "", amount: 0 },
        { date: "13 November", day: "Jumat", note: "", amount: 0 },
        { date: "14 November", day: "Sabtu", note: "Makan", amount: 40000 },
        { date: "15 November", day: "Minggu", note: "Makan", amount: 40000 },
        { date: "16 November", day: "Senin", note: "Makan", amount: 20000 },
        { date: "17 November", day: "Selasa", note: "Makan", amount: 20000 },
        { date: "18 November", day: "Rabu", note: "Makan", amount: 20000 },
        { date: "19 November", day: "Kamis", note: "Makan", amount: 20000 },
        { date: "20 November", day: "Jumat", note: "Makan", amount: 20000 },
        { date: "21 November", day: "Sabtu", note: "Makan", amount: 40000 },
        { date: "22 November", day: "Minggu", note: "Makan", amount: 40000 },
        { date: "23 November", day: "Senin", note: "Makan", amount: 40000 },
        { date: "24 November", day: "Selasa", note: "Makan", amount: 20000 },
        { date: "25 November", day: "Rabu", note: "Makan", amount: 20000 }
      ]
    }
  }
};

// ==========================================
// STATE MANAGEMENT & LOCAL STORAGE
// ==========================================
class HMNetStore {
  constructor() {
    this.load();
    this.loadUsers();
    this.loadPersonalFinance();
    this.loadAuditLogs();
  }

  loadAuditLogs() {
    try {
      const stored = localStorage.getItem("HMNET_AUDIT_LOGS_V1");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.auditLogs = parsed;
          return;
        }
      }
    } catch (e) {
      console.warn("Error loading audit logs:", e);
    }
    // Seed initial activity logs
    const now = new Date();
    this.auditLogs = [
      {
        id: "log_init_01",
        timestamp: now.toISOString(),
        timeFormatted: now.toLocaleString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        userId: 1,
        username: "owner",
        name: "Bos Hima (HM Net)",
        role: "Owner",
        category: "SISTEM",
        action: "INISIALISASI",
        details: "Sistem Keamanan & Audit Trail HM NET GRIBIG aktif. Seluruh mutasi data dan login pengguna terekam otomatis.",
        metadata: { status: "Active" }
      }
    ];
    this.saveAuditLogs();
  }

  saveAuditLogs() {
    try {
      if (!Array.isArray(this.auditLogs)) this.auditLogs = [];
      // Keep up to 500 latest logs to ensure performance and prevent storage overflow
      if (this.auditLogs.length > 500) {
        this.auditLogs = this.auditLogs.slice(0, 500);
      }
      localStorage.setItem("HMNET_AUDIT_LOGS_V1", JSON.stringify(this.auditLogs));
      if (window.cloudSync) {
        window.cloudSync.schedulePush();
      }
    } catch (e) {
      console.warn("Error saving audit logs:", e);
    }
  }

  addAuditLog({ category = "SISTEM", action = "AKTIVITAS", details = "", metadata = {} }) {
    try {
      const user = this.getCurrentUser();
      const now = new Date();
      const newLog = {
        id: "log_" + Date.now() + "_" + Math.floor(Math.random() * 10000),
        timestamp: now.toISOString(),
        timeFormatted: now.toLocaleString('id-ID', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),
        userId: user ? user.id : 0,
        username: user ? user.username : 'system',
        name: user ? user.name : 'Sistem HM NET',
        role: user ? user.role : 'System',
        category: String(category).toUpperCase(),
        action: String(action).toUpperCase(),
        details: String(details || '-'),
        metadata: metadata || {}
      };

      if (!Array.isArray(this.auditLogs)) this.auditLogs = [];
      this.auditLogs.unshift(newLog);
      this.saveAuditLogs();
      return newLog;
    } catch (err) {
      console.warn("Failed to record audit log:", err);
      return null;
    }
  }

  clearAuditLogs() {
    const user = this.getCurrentUser();
    const now = new Date();
    this.auditLogs = [
      {
        id: "log_cleared_" + Date.now(),
        timestamp: now.toISOString(),
        timeFormatted: now.toLocaleString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        userId: user ? user.id : 1,
        username: user ? user.username : 'owner',
        name: user ? user.name : 'Owner',
        role: user ? user.role : 'Owner',
        category: "KEAMANAN",
        action: "BERSIHKAN_LOG",
        details: `Riwayat audit trail dibersihkan oleh ${user ? user.name : 'Owner'}. Log lama berhasil diarsipkan.`,
        metadata: { clearedBy: user ? user.username : 'owner' }
      }
    ];
    this.saveAuditLogs();
    return true;
  }

  loadUsers() {
    try {
      const storedUsers = localStorage.getItem("HMNET_USERS_V1");
      if (storedUsers) {
        const parsed = JSON.parse(storedUsers);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.users = parsed;
          return;
        }
      }
    } catch (e) {
      console.warn("Error loading users, using defaults:", e);
    }
    this.users = JSON.parse(JSON.stringify(DEFAULT_USERS));
  }

  saveUsers() {
    localStorage.setItem("HMNET_USERS_V1", JSON.stringify(this.users));
    if (window.cloudSync) {
      window.cloudSync.schedulePush();
    }
  }

  load() {
    try {
      const stored = localStorage.getItem("HMNET_DATA_V1");
      if (stored) {
        const parsed = JSON.parse(stored);
        let custs = parsed.customers;

        // Validasi dan migrasi otomatis: pastikan tidak kosong, ada 49 data, dan memiliki field teknis modem/SN/redaman/PON
        if (!Array.isArray(custs) || custs.length < INITIAL_CUSTOMERS.length || !custs[0] || !custs[0].modem || !custs[0].sn) {
          console.info("Migrating customer data to full 49 technical records...");
          const existingMap = new Map((Array.isArray(custs) ? custs : []).map(c => [Number(c.id), c]));
          custs = INITIAL_CUSTOMERS.map(ic => {
            const ex = existingMap.get(ic.id);
            if (!ex) return { ...ic };
            return {
              ...ic,
              name: ex.name || ic.name,
              phone: String(ex.phone || ic.phone || ''),
              address: ex.address || ic.address,
              speed: ex.speed || ic.speed,
              price: ex.price !== undefined ? Number(ex.price) : ic.price,
              modem: ex.modem || ic.modem,
              sn: ex.sn || ic.sn,
              statusOnt: ex.statusOnt || ic.statusOnt || 'NEW',
              pon: ex.pon || ic.pon,
              redaman: (ex.redaman !== undefined && ex.redaman !== null && !isNaN(ex.redaman)) ? Number(ex.redaman) : ic.redaman,
              status: ex.status || ic.status || 'AKTIF'
            };
          });
        } else {
          // Normalisasi tipe data: phone string, redaman number
          custs.forEach((c, idx) => {
            c.phone = String(c.phone || (INITIAL_CUSTOMERS[idx] ? INITIAL_CUSTOMERS[idx].phone : ''));
            if (!c.statusOnt) c.statusOnt = (INITIAL_CUSTOMERS[idx] ? INITIAL_CUSTOMERS[idx].statusOnt : 'NEW');
            if (!c.modem && INITIAL_CUSTOMERS[idx]) {
              c.modem = INITIAL_CUSTOMERS[idx].modem;
              c.sn = INITIAL_CUSTOMERS[idx].sn;
              c.pon = INITIAL_CUSTOMERS[idx].pon;
              c.redaman = INITIAL_CUSTOMERS[idx].redaman;
            }
          });
        }

        this.customers = custs;
        this.payments = (Array.isArray(parsed.payments) && parsed.payments.length > 0) ? parsed.payments : [...INITIAL_PAYMENTS];
        this.expenses = (Array.isArray(parsed.expenses) && parsed.expenses.length > 0) ? parsed.expenses : [...INITIAL_EXPENSES];
        
        // Merge with defaults & ensure user requirements (tagline, phone, hide address)
        this.company = { ...DEFAULT_COMPANY, ...(parsed.company || {}) };
        this.company.tagline = "Akses Internet Rumahan";
        this.company.phone = "085691693286";
        this.company.showAddressOnReceipt = false;
        this.company.receiptStamp = "LUNAS / PAID";
        this.company.receiptFooter = "Terima kasih atas pembayaran tepat waktu. Simpan struk ini sebagai bukti pembayaran yang sah.";
        this.company.receiptTemplateUpdated = true;
        if (!this.company.waTemplateUnpaid) this.company.waTemplateUnpaid = DEFAULT_COMPANY.waTemplateUnpaid;
        if (!this.company.waTemplateDisturbance) this.company.waTemplateDisturbance = DEFAULT_COMPANY.waTemplateDisturbance;
        if (!this.company.waTemplateNormal) this.company.waTemplateNormal = DEFAULT_COMPANY.waTemplateNormal;
        if (!this.company.waTemplatePaid) this.company.waTemplatePaid = DEFAULT_COMPANY.waTemplatePaid;
        if (!this.company.waTemplateCicil) this.company.waTemplateCicil = DEFAULT_COMPANY.waTemplateCicil;
        this.save();
        return;
      }
    } catch (e) {
      console.warn("Using initial state due to parse error:", e);
    }
    this.customers = [...INITIAL_CUSTOMERS];
    this.payments = [...INITIAL_PAYMENTS];
    this.expenses = [...INITIAL_EXPENSES];
    this.company = { ...DEFAULT_COMPANY };
    this.save();
  }

  ensureCustomerDataIntegrity() {
    if (!Array.isArray(this.customers) || this.customers.length === 0) {
      this.customers = [...INITIAL_CUSTOMERS];
      this.save();
    }
  }

  exportFullBackup() {
    this.addAuditLog({
      category: "BACKUP",
      action: "CADANGKAN_SISTEM",
      details: `Mengunduh berkas cadangan sistem lengkap (.JSON) memuat ${this.customers.length} pelanggan & ${(this.users || []).length} user.`
    });

    return {
      appName: "HM NET GRIBIG BILLING & NETWORK SYSTEM",
      backupVersion: "2.1",
      createdAt: new Date().toISOString(),
      systemInfo: {
        totalCustomers: this.customers.length,
        totalPayments: this.payments.length,
        totalExpenses: this.expenses.length,
        totalUsers: (this.users || []).length,
        totalAuditLogs: (this.auditLogs || []).length
      },
      data: {
        customers: this.customers,
        payments: this.payments,
        expenses: this.expenses,
        company: this.company,
        users: this.users || [],
        personalFinance: this.personalFinance || {},
        auditLogs: this.auditLogs || []
      }
    };
  }

  importFullBackup(backupObj) {
    if (!backupObj || typeof backupObj !== 'object') {
      throw new Error("Format berkas backup tidak valid.");
    }
    const data = backupObj.data || backupObj;
    if (!Array.isArray(data.customers)) {
      throw new Error("Berkas cadangan tidak memuat data pelanggan yang sah.");
    }

    this.customers = data.customers;
    if (Array.isArray(data.payments)) this.payments = data.payments;
    if (Array.isArray(data.expenses)) this.expenses = data.expenses;
    if (data.company && typeof data.company === 'object') {
      this.company = { ...DEFAULT_COMPANY, ...data.company };
    }
    if (Array.isArray(data.users)) this.users = data.users;
    if (data.personalFinance && typeof data.personalFinance === 'object') {
      this.personalFinance = data.personalFinance;
    }
    if (Array.isArray(data.auditLogs)) {
      this.auditLogs = data.auditLogs;
      this.saveAuditLogs();
    }

    this.save();
    this.saveUsers();
    this.savePersonalFinance();

    this.addAuditLog({
      category: "BACKUP",
      action: "RESTORE_SISTEM",
      details: `Database sistem berhasil dipulihkan dari cadangan. Memuat ${this.customers.length} pelanggan & ${(this.users || []).length} pengguna.`
    });

    return true;
  }

  importCustomersFromRows(rows, mode = 'append') {
    if (!Array.isArray(rows) || rows.length === 0) return 0;

    let baseList = (mode === 'replace') ? [] : [...this.customers];
    let nextId = (mode === 'replace') ? 1 : (this.customers.reduce((max, c) => Math.max(max, c.id || 0), 0) + 1);

    const newCustomers = rows.map((r, idx) => {
      let rawPhone = String(r.phone || r.telepon || r.wa || r.no_wa || r.kontak || '').trim().replace(/[^0-9]/g, '');
      if (rawPhone.startsWith('62')) rawPhone = rawPhone.substring(2);
      else if (rawPhone.startsWith('0')) rawPhone = rawPhone.substring(1);

      return {
        id: nextId + idx,
        name: String(r.name || r.nama || r.nama_pelanggan || `Pelanggan ${nextId + idx}`).trim(),
        phone: rawPhone || '81234567890',
        address: String(r.address || r.alamat || 'Gribig').trim(),
        modem: String(r.modem || r.tipe_modem || 'GPON ZTE F670L').trim(),
        sn: String(r.sn || r.serial_number || 'ZTEG' + Math.random().toString(36).substring(2, 10)).trim(),
        statusOnt: 'NEW',
        pon: Number(r.pon || r.jalur_pon || 1) || 1,
        redaman: Number(r.redaman || -18.5),
        speed: String(r.speed || r.kecepatan || r.paket || '10 Mbps').trim(),
        price: Number(r.price || r.tarif || r.harga || 100000) || 0,
        status: 'AKTIF'
      };
    });

    this.customers = [...baseList, ...newCustomers];
    this.save();

    this.addAuditLog({
      category: "EXCEL",
      action: "IMPOR_EXCEL",
      details: `Mengimpor data pelanggan dari file Excel: ${newCustomers.length} baris diproses (${mode === 'replace' ? 'Ganti Seluruh Data' : 'Gabung/Tambah'}). Total pelanggan aktif: ${this.customers.length}.`
    });

    return newCustomers.length;
  }

  save() {
    const payload = {
      customers: this.customers,
      payments: this.payments,
      expenses: this.expenses,
      company: this.company,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem("HMNET_DATA_V1", JSON.stringify(payload));
    if (window.cloudSync) {
      window.cloudSync.schedulePush();
    }
  }

  resetDefault() {
    this.customers = [...INITIAL_CUSTOMERS];
    this.payments = [...INITIAL_PAYMENTS];
    this.expenses = [...INITIAL_EXPENSES];
    this.company = { ...DEFAULT_COMPANY };
    this.users = JSON.parse(JSON.stringify(DEFAULT_USERS));
    this.personalFinance = JSON.parse(JSON.stringify(DEFAULT_PERSONAL_FINANCE));
    this.save();
    this.saveUsers();
    this.savePersonalFinance();

    this.addAuditLog({
      category: "SISTEM",
      action: "RESET_DATA",
      details: "Database direset kembali ke kondisi awal 49 pelanggan."
    });
  }

  getCustomer(id) {
    return this.customers.find(c => c.id === Number(id));
  }

  getAllPeriods() {
    return ["Juli 2026", "Agustus 2026", "September 2026", "Oktober 2026", "November 2026", "Desember 2026"];
  }

  getPayment(customerId, period = "November 2026") {
    let p = this.payments.find(item => item.customerId === Number(customerId) && item.period === period);
    if (!p) {
      const c = this.getCustomer(customerId);
      const tariff = c ? c.price : 100000;
      if (period === "November 2026") {
        return null;
      } else if (period === "Oktober 2026") {
        // Pelanggan nunggak dari Oktober: ID 4 (Yahya), ID 12 (Angga), ID 38 (Andi Azka)
        const isUnpaid = [4, 12, 38].includes(Number(customerId)) && tariff > 0;
        return {
          customerId: Number(customerId),
          period: period,
          tariff: tariff,
          paid: isUnpaid ? 0 : tariff,
          status: isUnpaid ? "BELUM" : (tariff === 0 ? "LUNAS" : "LUNAS"),
          payDate: isUnpaid ? "" : "2026-10-10",
          method: isUnpaid ? "" : "Transfer Mandiri",
          notes: isUnpaid ? "Tunggakan Oktober" : ""
        };
      } else if (period === "September 2026") {
        const isUnpaid = [12].includes(Number(customerId)) && tariff > 0;
        return {
          customerId: Number(customerId),
          period: period,
          tariff: tariff,
          paid: isUnpaid ? 0 : tariff,
          status: isUnpaid ? "BELUM" : "LUNAS",
          payDate: isUnpaid ? "" : "2026-09-08",
          method: isUnpaid ? "" : "Cash / Tunai",
          notes: isUnpaid ? "Tunggakan September" : ""
        };
      } else if (period === "Agustus 2026" || period === "Juli 2026") {
        return {
          customerId: Number(customerId),
          period: period,
          tariff: tariff,
          paid: tariff,
          status: "LUNAS",
          payDate: period === "Agustus 2026" ? "2026-08-07" : "2026-07-06",
          method: "Cash / Tunai",
          notes: ""
        };
      } else if (period === "Desember 2026") {
        return {
          customerId: Number(customerId),
          period: period,
          tariff: tariff,
          paid: 0,
          status: "BELUM",
          payDate: "",
          method: "",
          notes: "Periode Mendatang"
        };
      }
    }
    return p;
  }

  setPaymentStatus(customerId, status, paymentDetails = {}, period = "November 2026") {
    let p = this.payments.find(item => item.customerId === Number(customerId) && item.period === period);
    const customer = this.getCustomer(customerId);
    if (!p) {
      p = {
        customerId: Number(customerId),
        period: period,
        tariff: customer ? customer.price : 100000,
        paid: 0,
        status: "BELUM",
        payDate: "",
        method: "",
        notes: ""
      };
      this.payments.push(p);
    }

    p.status = status; // "LUNAS", "CICIL", "BELUM"
    p.tariff = customer ? customer.price : (p.tariff || 100000);

    if (status === "LUNAS") {
      p.paid = paymentDetails.paid !== undefined ? Number(paymentDetails.paid) : p.tariff;
      p.payDate = paymentDetails.payDate || new Date().toISOString().split("T")[0];
      p.method = paymentDetails.method || "Cash / Tunai";
      p.notes = paymentDetails.notes || "";
    } else if (status === "CICIL") {
      const inputPaid = paymentDetails.paid !== undefined ? Number(paymentDetails.paid) : 0;
      p.paid = Math.min(p.tariff, Math.max(0, inputPaid));
      p.payDate = paymentDetails.payDate || new Date().toISOString().split("T")[0];
      p.method = paymentDetails.method || "Cash / Tunai";
      p.notes = paymentDetails.notes || `Dicicil Rp ${p.paid.toLocaleString('id-ID')}`;
    } else {
      p.paid = 0;
      p.payDate = "";
      p.method = "";
      p.notes = paymentDetails.notes || "";
    }
    this.save();

    // Audit Trail: Catat mutasi penagihan / pembayaran
    const cName = customer ? customer.name : `Pelanggan #${customerId}`;
    let actDetail = "";
    if (status === "LUNAS") {
      actDetail = `Mencatat pembayaran LUNAS untuk ${cName} (${period}) - Rp ${Number(p.paid).toLocaleString('id-ID')} via ${p.method || 'Tunai'}`;
    } else if (status === "CICIL") {
      const sisa = Math.max(0, p.tariff - p.paid);
      actDetail = `Mencatat pembayaran DICICIL untuk ${cName} (${period}) - Dibayar: Rp ${Number(p.paid).toLocaleString('id-ID')}, Sisa: Rp ${sisa.toLocaleString('id-ID')}`;
    } else {
      actDetail = `Mengubah status tagihan ${cName} (${period}) menjadi BELUM BAYAR (Nunggak Rp ${Number(p.tariff).toLocaleString('id-ID')})`;
    }
    this.addAuditLog({
      category: "BILLING",
      action: `STATUS_${status}`,
      details: actDetail,
      metadata: { customerId: Number(customerId), customerName: cName, period, status, paid: p.paid, tariff: p.tariff }
    });

    return p;
  }

  getCustomerArrears(customerId) {
    const periods = ["Juli 2026", "Agustus 2026", "September 2026", "Oktober 2026", "November 2026"];
    const unpaidPeriods = [];
    let totalDebt = 0;
    periods.forEach(per => {
      const p = this.getPayment(customerId, per);
      if (p && Number(p.tariff) > 0) {
        if (p.status === "BELUM") {
          unpaidPeriods.push({ period: per, tariff: Number(p.tariff), paid: 0, sisa: Number(p.tariff), status: "BELUM" });
          totalDebt += Number(p.tariff);
        } else if (p.status === "CICIL") {
          const sisa = Math.max(0, Number(p.tariff) - Number(p.paid || 0));
          if (sisa > 0) {
            unpaidPeriods.push({ period: per, tariff: Number(p.tariff), paid: Number(p.paid || 0), sisa: sisa, status: "CICIL" });
            totalDebt += sisa;
          }
        }
      }
    });
    return {
      customerId: Number(customerId),
      count: unpaidPeriods.length,
      unpaidCount: unpaidPeriods.length,
      periods: unpaidPeriods,
      unpaidPeriods: unpaidPeriods,
      totalDebt: totalDebt
    };
  }

  addCustomer(cust) {
    const nextId = this.customers.length > 0 ? Math.max(...this.customers.map(c => c.id)) + 1 : 1;
    const newCust = {
      id: nextId,
      name: cust.name,
      phone: cust.phone.replace(/^0/, ""),
      address: cust.address,
      modem: cust.modem,
      sn: cust.sn,
      statusOnt: cust.statusOnt || "NEW",
      pon: Number(cust.pon) || 1,
      redaman: Number(cust.redaman) || -18.0,
      speed: cust.speed || "10 Mbps",
      price: Number(cust.price) || 100000,
      status: "AKTIF"
    };
    this.customers.push(newCust);
    this.payments.push({
      customerId: nextId,
      period: "November 2026",
      tariff: newCust.price,
      paid: 0,
      status: "BELUM",
      payDate: "",
      method: "",
      notes: ""
    });
    this.save();

    this.addAuditLog({
      category: "PELANGGAN",
      action: "TAMBAH_PELANGGAN",
      details: `Menambahkan pelanggan baru: "${newCust.name}" - Paket ${newCust.speed} (Rp ${Number(newCust.price).toLocaleString('id-ID')}) - Jalur PON ${newCust.pon} - Alamat: ${newCust.address}`,
      metadata: { customerId: nextId, name: newCust.name }
    });

    return newCust;
  }

  updateCustomer(id, cust) {
    const idx = this.customers.findIndex(c => c.id === Number(id));
    if (idx !== -1) {
      const oldName = this.customers[idx].name;
      this.customers[idx] = {
        ...this.customers[idx],
        name: cust.name,
        phone: cust.phone.replace(/^0/, ""),
        address: cust.address,
        modem: cust.modem,
        sn: cust.sn,
        pon: Number(cust.pon),
        redaman: Number(cust.redaman),
        speed: cust.speed,
        price: Number(cust.price)
      };
      const p = this.getPayment(id);
      if (p && p.status === "BELUM") {
        p.tariff = Number(cust.price);
      }
      this.save();

      this.addAuditLog({
        category: "PELANGGAN",
        action: "EDIT_PELANGGAN",
        details: `Memperbarui data teknis/profil pelanggan "${cust.name}" (Paket: ${cust.speed}, Modem: ${cust.modem || '-'}, Redaman: ${cust.redaman} dB, Jalur PON ${cust.pon})`,
        metadata: { customerId: id, name: cust.name }
      });
    }
  }

  deleteCustomer(id) {
    const targetCust = this.getCustomer(id);
    const targetName = targetCust ? targetCust.name : `#${id}`;
    this.customers = this.customers.filter(c => c.id !== Number(id));
    this.payments = this.payments.filter(p => p.customerId !== Number(id));
    this.save();

    this.addAuditLog({
      category: "PELANGGAN",
      action: "HAPUS_PELANGGAN",
      details: `Menghapus data pelanggan "${targetName}" (ID #${id}) beserta seluruh riwayat tagihannya.`,
      metadata: { customerId: id, name: targetName }
    });
  }

  getFinancials(period = "November 2026") {
    let totalTarget = 0;
    let totalPaid = 0;
    let totalUnpaid = 0;
    let paidCount = 0;
    let unpaidCount = 0;
    let cicilCount = 0;

    this.customers.forEach(c => {
      const p = this.getPayment(c.id, period);
      const tariff = p ? p.tariff : c.price;
      totalTarget += tariff;
      if (p && p.status === "LUNAS") {
        totalPaid += p.paid;
        paidCount++;
      } else if (p && p.status === "CICIL") {
        totalPaid += (p.paid || 0);
        totalUnpaid += Math.max(0, tariff - (p.paid || 0));
        cicilCount++;
      } else {
        totalUnpaid += tariff;
        unpaidCount++;
      }
    });

    const totalExpense = this.expenses
      .filter(e => e.period === period)
      .reduce((sum, e) => sum + e.amount, 0);

    const netProfitNow = totalPaid - totalExpense;
    const projectedProfit = totalTarget - totalExpense;

    return {
      totalTarget,
      totalPaid,
      totalUnpaid,
      paidCount,
      unpaidCount,
      totalExpense,
      netProfitNow,
      projectedProfit
    };
  }

  // ==========================================
  // METODE PENGELOLAAN USER & HAK AKSES
  // ==========================================
  getUsers() {
    return this.users || [];
  }

  getUser(id) {
    return (this.users || []).find(u => u.id === Number(id));
  }

  getUserByUsername(username) {
    if (!username) return null;
    return (this.users || []).find(u => u.username.toLowerCase() === String(username).toLowerCase().trim());
  }

  getDefaultPermissionsForRole(role) {
    if (role === "Owner") {
      return {
        dashboard: true,
        billing: true,
        customers: true,
        remoteNetwork: true,
        receiptStudio: true,
        userManagement: true,
        personalFinance: true,
        settings: true
      };
    } else if (role === "Admin") {
      return {
        dashboard: false,
        billing: true,
        customers: false,
        remoteNetwork: false,
        receiptStudio: true,
        userManagement: false,
        personalFinance: false,
        settings: false
      };
    } else if (role === "Teknisi") {
      return {
        dashboard: false,
        billing: false,
        customers: true,
        remoteNetwork: true,
        receiptStudio: false,
        userManagement: false,
        personalFinance: false,
        settings: false
      };
    }
    // Custom
    return {
      dashboard: false,
      billing: true,
      customers: false,
      remoteNetwork: false,
      receiptStudio: false,
      userManagement: false,
      personalFinance: false,
      settings: false
    };
  }

  addUser(userData) {
    const nextId = (this.users && this.users.length > 0) ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
    const role = userData.role || "Admin";
    const perms = userData.permissions || this.getDefaultPermissionsForRole(role);
    const username = String(userData.username).trim().toLowerCase();
    
    // Check duplication
    if (this.getUserByUsername(username)) {
      throw new Error(`Username "${username}" sudah digunakan! Gunakan username lain.`);
    }

    const newUser = {
      id: nextId,
      username: username,
      password: String(userData.password || "123456"),
      name: String(userData.name || userData.username).trim(),
      role: role,
      permissions: perms,
      createdAt: new Date().toISOString()
    };
    this.users.push(newUser);
    this.saveUsers();

    this.addAuditLog({
      category: "PENGGUNA",
      action: "TAMBAH_USER",
      details: `Menambahkan akun pengguna baru: "${newUser.name}" (@${newUser.username}) dengan role ${newUser.role}`,
      metadata: { userId: newUser.id, username: newUser.username, role: newUser.role }
    });

    return newUser;
  }

  updateUser(id, userData) {
    const idx = (this.users || []).findIndex(u => u.id === Number(id));
    if (idx !== -1) {
      const u = this.users[idx];
      const newUsername = userData.username !== undefined ? String(userData.username).trim().toLowerCase() : u.username;
      
      // Check duplicate username if changed
      if (newUsername !== u.username && this.getUserByUsername(newUsername)) {
        throw new Error(`Username "${newUsername}" sudah digunakan!`);
      }

      const role = userData.role !== undefined ? userData.role : u.role;
      const perms = userData.permissions !== undefined ? userData.permissions : (userData.role ? this.getDefaultPermissionsForRole(role) : u.permissions);
      
      this.users[idx] = {
        ...u,
        name: userData.name !== undefined ? String(userData.name).trim() : u.name,
        username: newUsername,
        password: userData.password ? String(userData.password).trim() : u.password,
        role: role,
        permissions: perms,
        updatedAt: new Date().toISOString()
      };
      this.saveUsers();

      // If active session user was updated, update active session
      const current = this.getCurrentUser();
      if (current && current.id === Number(id)) {
        this.setCurrentUser(this.users[idx]);
      }

      this.addAuditLog({
        category: "PENGGUNA",
        action: "EDIT_USER",
        details: `Memperbarui akun user: "${this.users[idx].name}" (@${this.users[idx].username}) - Role: ${this.users[idx].role}`,
        metadata: { userId: id, username: this.users[idx].username, role: this.users[idx].role }
      });

      return this.users[idx];
    }
    throw new Error("User tidak ditemukan!");
  }

  deleteUser(id) {
    if (Number(id) === 1) {
      throw new Error("Akun Owner Utama (ID 1) tidak dapat dihapus demi keamanan sistem!");
    }
    const current = this.getCurrentUser();
    if (current && current.id === Number(id)) {
      throw new Error("Anda tidak dapat menghapus akun yang sedang Anda gunakan saat ini!");
    }
    const target = this.getUser(id);
    const targetName = target ? `${target.name} (@${target.username})` : `User #${id}`;
    this.users = (this.users || []).filter(u => u.id !== Number(id));
    this.saveUsers();

    this.addAuditLog({
      category: "PENGGUNA",
      action: "HAPUS_USER",
      details: `Menghapus akun user: ${targetName} dari sistem`,
      metadata: { userId: id }
    });
  }

  login(username, password) {
    const u = this.getUserByUsername(username);
    if (!u) {
      this.addAuditLog({
        category: "AUTH",
        action: "GAGAL_LOGIN",
        details: `Percobaan login gagal untuk username tak dikenal: "${username}"`,
        metadata: { attemptedUsername: username }
      });
      return { success: false, message: "Username tidak ditemukan dalam sistem!" };
    }
    if (u.password !== String(password).trim()) {
      this.addAuditLog({
        category: "AUTH",
        action: "PASSWORD_SALAH",
        details: `Percobaan login dengan password salah untuk akun: "${u.name}" (@${u.username})`,
        metadata: { userId: u.id, username: u.username }
      });
      return { success: false, message: "Password yang Anda masukkan salah!" };
    }
    this.setCurrentUser(u);

    this.addAuditLog({
      category: "AUTH",
      action: "LOGIN",
      details: `User "${u.name}" (@${u.username}) berhasil login ke sistem sebagai ${u.role}.`,
      metadata: { userId: u.id, username: u.username, role: u.role }
    });

    return { success: true, user: u };
  }

  getCurrentUser() {
    try {
      const sess = localStorage.getItem("HMNET_CURRENT_SESSION_V1");
      if (sess) {
        const u = JSON.parse(sess);
        // Refresh with latest in-memory user to reflect updated permissions
        const latest = this.getUser(u.id);
        return latest || u;
      }
    } catch (e) {
      console.warn("Session read error:", e);
    }
    return null;
  }

  setCurrentUser(user) {
    if (user) {
      localStorage.setItem("HMNET_CURRENT_SESSION_V1", JSON.stringify(user));
    } else {
      localStorage.removeItem("HMNET_CURRENT_SESSION_V1");
    }
  }

  logout() {
    const cur = this.getCurrentUser();
    if (cur) {
      this.addAuditLog({
        category: "AUTH",
        action: "LOGOUT",
        details: `User "${cur.name}" (@${cur.username}) telah logout dari sistem.`,
        metadata: { userId: cur.id, username: cur.username }
      });
    }
    this.setCurrentUser(null);
  }

  // ==========================================
  // METODE KEUANGAN PRIBADI & BISNIS (OWNER)
  // ==========================================
  loadPersonalFinance() {
    try {
      const stored = localStorage.getItem("HMNET_PERSONAL_FINANCE_V1");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.plan && parsed.realisations) {
          this.personalFinance = parsed;
          return;
        }
      }
    } catch (e) {
      console.warn("Error loading personal finance:", e);
    }
    this.personalFinance = JSON.parse(JSON.stringify(DEFAULT_PERSONAL_FINANCE));
    this.savePersonalFinance();
  }

  savePersonalFinance() {
    localStorage.setItem("HMNET_PERSONAL_FINANCE_V1", JSON.stringify(this.personalFinance));
    if (window.cloudSync) {
      window.cloudSync.schedulePush();
    }
  }

  getPersonalFinance() {
    return this.personalFinance || JSON.parse(JSON.stringify(DEFAULT_PERSONAL_FINANCE));
  }

  parsePeriod(periodStr) {
    const MONTH_NAMES = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    if (!periodStr || typeof periodStr !== "string") {
      return { monthIndex: 10, year: 2026, monthName: "November" };
    }
    const parts = periodStr.trim().split(/\s+/);
    let mName = parts[0] || "November";
    let yr = parseInt(parts[1], 10) || 2026;
    let idx = MONTH_NAMES.findIndex(m => m.toLowerCase() === mName.toLowerCase());
    if (idx === -1) idx = 10;
    return { monthIndex: idx, year: yr, monthName: MONTH_NAMES[idx] };
  }

  generateDefaultFoodDates(period = "November 2026") {
    const MONTH_NAMES = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const DAYS = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    
    const { monthIndex, year } = this.parsePeriod(period);
    
    // Siklus dimulai tanggal 26 bulan sebelumnya s/d tanggal 25 bulan berjalan
    const start = new Date(year, monthIndex - 1, 26);
    const end = new Date(year, monthIndex, 25);
    
    const items = [];
    const cur = new Date(start);
    while (cur <= end) {
      items.push({
        date: `${cur.getDate()} ${MONTH_NAMES[cur.getMonth()]}`,
        day: DAYS[cur.getDay()],
        note: "",
        amount: 0
      });
      cur.setDate(cur.getDate() + 1);
    }
    return items;
  }

  getDefaultMonthlyTemplate() {
    return {
      personalIncome: [
        { id: 1, name: "Mandiri", amount: 2030000, note: "Gaji / Rekening Utama" },
        { id: 2, name: "Agrapana", amount: 400000, note: "Pemasukan Sampingan" },
        { id: 3, name: "Bensin", amount: 75000, note: "Reimburse / Subsidi Bensin" },
        { id: 4, name: "Cash", amount: 87000, note: "Uang Tunai Dompet" },
        { id: 5, name: "HM NET Gribig", amount: 220000, note: "Tarik profit untuk pribadi" }
      ],
      businessIncome: [
        { id: 1, name: "HM NET Jetak", amount: 2900000, note: "Omset Tetap Jetak" },
        { id: 2, name: "HM NET Gribig", amount: 0, syncWithBilling: true, note: "Sinkron Piutang Billing realtime" }
      ],
      personalExpense: [
        { id: 1, name: "Makan", amount: 0, syncWithFoodSheet: true, note: "Akumulasi kalender makan 26-25" },
        { id: 2, name: "Bensin", amount: 100000, note: "Transport harian" },
        { id: 3, name: "Kuota", amount: 50000, note: "Paket data" },
        { id: 4, name: "Kas", amount: 460000, note: "Kas / Lain-lain" }
      ],
      businessExpense: [
        { id: 1, name: "Indihome Jetak", amount: 555000, note: "Upstream ISP Jetak" },
        { id: 2, name: "Si Cakra Gribig", amount: 2000000, note: "Upstream ISP Dedicated Gribig" }
      ]
    };
  }

  getMonthlyTemplate() {
    if (!this.personalFinance.monthlyTemplate) {
      this.personalFinance.monthlyTemplate = this.getDefaultMonthlyTemplate();
      this.savePersonalFinance();
    }
    return this.personalFinance.monthlyTemplate;
  }

  saveMonthlyTemplate(newTemplate) {
    if (newTemplate && typeof newTemplate === 'object') {
      this.personalFinance.monthlyTemplate = {
        personalIncome: Array.isArray(newTemplate.personalIncome) ? newTemplate.personalIncome : [],
        businessIncome: Array.isArray(newTemplate.businessIncome) ? newTemplate.businessIncome : [],
        personalExpense: Array.isArray(newTemplate.personalExpense) ? newTemplate.personalExpense : [],
        businessExpense: Array.isArray(newTemplate.businessExpense) ? newTemplate.businessExpense : []
      };
      this.savePersonalFinance();
      return this.personalFinance.monthlyTemplate;
    }
    return null;
  }

  resetMonthlyTemplateToDefault() {
    this.personalFinance.monthlyTemplate = this.getDefaultMonthlyTemplate();
    this.savePersonalFinance();
    return this.personalFinance.monthlyTemplate;
  }

  getRealisationTemplate(period = "November 2026") {
    const { monthName } = this.parsePeriod(period);
    const tmpl = this.getMonthlyTemplate();
    const cloneSection = (items) => (items || []).map((it, idx) => {
      let name = it.name;
      if (name.includes("Agrapana") && !name.includes(monthName)) {
        name = `${name} ${monthName}`;
      }
      return {
        id: it.id || (idx + 1),
        name: name,
        amount: Number(it.amount) || 0,
        note: it.note || "",
        ...(it.syncWithBilling ? { syncWithBilling: true } : {}),
        ...(it.syncWithFoodSheet ? { syncWithFoodSheet: true } : {})
      };
    });

    return {
      period: period,
      personalIncome: cloneSection(tmpl.personalIncome),
      businessIncome: cloneSection(tmpl.businessIncome),
      personalExpense: cloneSection(tmpl.personalExpense),
      businessExpense: cloneSection(tmpl.businessExpense),
      foodExpenses: this.generateDefaultFoodDates(period)
    };
  }

  getFinancePeriods() {
    const builtIn = ["Juli 2026", "Agustus 2026", "September 2026", "Oktober 2026", "November 2026", "Desember 2026"];
    const existing = Object.keys(this.personalFinance.realisations || {});
    const combined = Array.from(new Set([...builtIn, ...existing]));
    
    combined.sort((a, b) => {
      const pa = this.parsePeriod(a);
      const pb = this.parsePeriod(b);
      return (pa.year * 12 + pa.monthIndex) - (pb.year * 12 + pb.monthIndex);
    });
    return combined;
  }

  getRealisation(period = "November 2026") {
    if (!this.personalFinance.realisations) {
      this.personalFinance.realisations = {};
    }
    if (!this.personalFinance.realisations[period]) {
      this.personalFinance.realisations[period] = this.getRealisationTemplate(period);
      this.savePersonalFinance();
    }

    const real = this.personalFinance.realisations[period];

    // Ensure foodExpenses array is generated and non-empty
    if (!real.foodExpenses || real.foodExpenses.length === 0) {
      real.foodExpenses = this.generateDefaultFoodDates(period);
      this.savePersonalFinance();
    }

    // 1. Sync food expenses total to personalExpense "Makan"
    const foodTotal = this.getFoodExpenseTotal(period);
    const makanItem = real.personalExpense.find(e => e.syncWithFoodSheet || (e.name && e.name.toLowerCase() === "makan"));
    if (makanItem) {
      makanItem.syncWithFoodSheet = true;
      makanItem.amount = foodTotal;
    }

    // 2. Sync billing revenue to businessIncome "HM NET Gribig" (or item with syncWithBilling)
    const gribigItem = real.businessIncome.find(e => e.syncWithBilling || (e.name && e.name.toLowerCase().includes("gribig")));
    if (gribigItem) {
      if (gribigItem.syncWithBilling === undefined) gribigItem.syncWithBilling = true;
      if (gribigItem.syncWithBilling) {
        const fin = this.getFinancials(period);
        if (fin) {
          // REVISI USER: Nominal kotak merah adalah JUMLAH PIUTANG / NOMINAL PELANGGAN BELUM BAYAR (fin.totalUnpaid)
          gribigItem.amount = fin.totalUnpaid;
        }
      }
    }

    return real;
  }

  resetRealisationToTemplate(period) {
    this.personalFinance.realisations[period] = this.getRealisationTemplate(period);
    this.savePersonalFinance();
    return this.getRealisation(period);
  }

  addFinancePeriod(period) {
    if (!this.personalFinance.realisations[period]) {
      this.personalFinance.realisations[period] = this.getRealisationTemplate(period);
      this.savePersonalFinance();
    }
    return this.personalFinance.realisations[period];
  }

  getFoodExpenses(period = "November 2026") {
    const real = this.getRealisation(period);
    return real.foodExpenses || [];
  }

  updateFoodExpenseItem(period = "November 2026", index, amount, note = null) {
    const real = this.getRealisation(period);
    if (real.foodExpenses && real.foodExpenses[index]) {
      real.foodExpenses[index].amount = Math.max(0, Number(amount) || 0);
      if (note !== null) real.foodExpenses[index].note = note;
      
      const totalFood = this.getFoodExpenseTotal(period);
      const makanItem = real.personalExpense.find(e => e.name.toLowerCase() === "makan" || e.syncWithFoodSheet);
      if (makanItem) {
        makanItem.amount = totalFood;
      }
      this.savePersonalFinance();
    }
  }

  getFoodExpenseTotal(period = "November 2026") {
    const real = this.personalFinance.realisations[period];
    if (!real || !Array.isArray(real.foodExpenses)) return 0;
    return real.foodExpenses.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
  }

  addRealisationItem(period, sectionKey, name, amount, note = "") {
    const real = this.getRealisation(period);
    if (!real[sectionKey]) real[sectionKey] = [];
    const nextId = real[sectionKey].length > 0 ? Math.max(...real[sectionKey].map(i => i.id || 0)) + 1 : 1;
    const newItem = {
      id: nextId,
      name: String(name).trim(),
      amount: Number(amount) || 0,
      note: note
    };
    real[sectionKey].push(newItem);
    this.savePersonalFinance();
    return newItem;
  }

  getRealisationItem(period, sectionKey, id) {
    const real = this.getRealisation(period);
    if (real && real[sectionKey]) {
      return real[sectionKey].find(i => i.id === Number(id)) || null;
    }
    return null;
  }

  updateRealisationItem(period, sectionKey, id, name, amount, note = null) {
    const real = this.getRealisation(period);
    if (real[sectionKey]) {
      const item = real[sectionKey].find(i => i.id === Number(id));
      if (item) {
        if (name !== undefined) item.name = String(name).trim();
        // Hanya update amount manual jika bukan item otomatis (syncWithBilling / syncWithFoodSheet)
        if (!item.syncWithBilling && !item.syncWithFoodSheet) {
          if (amount !== undefined) item.amount = Number(amount) || 0;
        }
        if (note !== null) item.note = note;
        this.savePersonalFinance();
        return item;
      }
    }
    return null;
  }

  deleteRealisationItem(period, sectionKey, id) {
    const real = this.getRealisation(period);
    if (real[sectionKey]) {
      real[sectionKey] = real[sectionKey].filter(i => i.id !== Number(id));
      this.savePersonalFinance();
    }
  }

  toggleBillingSync(period, enabled) {
    const real = this.getRealisation(period);
    const gribig = real.businessIncome.find(e => e.syncWithBilling || (e.name && e.name.toLowerCase().includes("gribig")));
    if (gribig) {
      gribig.syncWithBilling = enabled;
      if (enabled) {
        const fin = this.getFinancials(period);
        gribig.amount = fin ? fin.totalUnpaid : 2050000;
      }
      this.savePersonalFinance();
    }
  }

  getGribigBillingSummary(period = "November 2026") {
    const fin = this.getFinancials(period);
    return {
      totalTarget: fin ? fin.totalTarget : 4995000,
      totalPaid: fin ? fin.totalPaid : 2745000,
      totalUnpaid: fin ? fin.totalUnpaid : 2250000,
      paidCount: fin ? fin.paidCount : 26,
      unpaidCount: fin ? fin.unpaidCount : 23
    };
  }

  addPlanItem(sectionKey, itemData) {
    if (!this.personalFinance.plan[sectionKey]) this.personalFinance.plan[sectionKey] = [];
    const list = this.personalFinance.plan[sectionKey];
    const nextId = list.length > 0 ? Math.max(...list.map(i => i.id || 0)) + 1 : 1;
    const newItem = {
      id: nextId,
      ...itemData,
      amount: Number(itemData.amount) || 0
    };
    list.push(newItem);
    this.savePersonalFinance();
    return newItem;
  }

  getPlanItem(sectionKey, id) {
    if (this.personalFinance.plan && this.personalFinance.plan[sectionKey]) {
      return this.personalFinance.plan[sectionKey].find(i => i.id === Number(id)) || null;
    }
    return null;
  }

  updatePlanItem(sectionKey, id, itemData) {
    const list = this.personalFinance.plan[sectionKey];
    if (list) {
      const idx = list.findIndex(i => i.id === Number(id));
      if (idx !== -1) {
        list[idx] = { ...list[idx], ...itemData, amount: Number(itemData.amount) || 0 };
        this.savePersonalFinance();
        return list[idx];
      }
    }
    return null;
  }

  deletePlanItem(sectionKey, id) {
    if (this.personalFinance.plan[sectionKey]) {
      this.personalFinance.plan[sectionKey] = this.personalFinance.plan[sectionKey].filter(i => i.id !== Number(id));
      this.savePersonalFinance();
    }
  }

  applyRemotePayload(payload) {
    if (!payload || typeof payload !== 'object') return false;
    let changed = false;

    if (Array.isArray(payload.customers) && payload.customers.length > 0) {
      this.customers = payload.customers;
      changed = true;
    }
    if (Array.isArray(payload.payments) && payload.payments.length > 0) {
      this.payments = payload.payments;
      changed = true;
    }
    if (Array.isArray(payload.expenses)) {
      this.expenses = payload.expenses;
      changed = true;
    }
    if (payload.company && typeof payload.company === 'object') {
      this.company = { ...DEFAULT_COMPANY, ...payload.company };
      changed = true;
    }
    if (Array.isArray(payload.users) && payload.users.length > 0) {
      this.users = payload.users;
      changed = true;
    }
    if (payload.personalFinance && typeof payload.personalFinance === 'object') {
      this.personalFinance = payload.personalFinance;
      changed = true;
    }
    if (Array.isArray(payload.auditLogs)) {
      this.auditLogs = payload.auditLogs;
      changed = true;
    }

    if (changed) {
      this.saveLocalDirect();
    }
    return changed;
  }

  saveLocalDirect() {
    const payload = {
      customers: this.customers,
      payments: this.payments,
      expenses: this.expenses,
      company: this.company,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem("HMNET_DATA_V1", JSON.stringify(payload));
    localStorage.setItem("HMNET_USERS_V1", JSON.stringify(this.users || []));
    localStorage.setItem("HMNET_PERSONAL_FINANCE_V1", JSON.stringify(this.personalFinance || {}));
    localStorage.setItem("HMNET_AUDIT_LOGS_V1", JSON.stringify(this.auditLogs || []));
  }
}

// ==========================================
// CLOUD SYNC MANAGER (SUPABASE REALTIME)
// ==========================================
class CloudSyncManager {
  constructor(store) {
    this.store = store;
    this.clientId = 'client_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8);
    this.supabase = null;
    this.isConnected = false;
    this.isSyncing = false;
    this.lastSyncTime = null;
    this.syncDebounceTimer = null;
    this.channel = null;
  }

  init() {
    if (typeof window !== 'undefined' && window.supabase && window.supabase.createClient) {
      try {
        this.supabase = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.key, {
          auth: { persistSession: false },
          realtime: {
            params: {
              eventsPerSecond: 10
            }
          }
        });
        this.updateSyncUI("connecting", "Menghubungkan ke Cloud...");
        this.subscribeRealtime();
        this.pullLatestFromCloud();

        // Auto-pull whenever user focuses the tab/window
        window.addEventListener('focus', () => {
          this.pullLatestFromCloud();
        });
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') {
            this.pullLatestFromCloud();
          }
        });

        // Background heartbeat pull every 5 seconds to guarantee 100% sync
        if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = setInterval(() => {
          this.pullLatestFromCloud();
        }, 5000);

      } catch (err) {
        console.warn("Supabase init error:", err);
        this.updateSyncUI("offline", "Cloud Offline (Mode Lokal)");
      }
    } else {
      this.updateSyncUI("offline", "Cloud SDK Belum Siap");
    }
  }

  async pullLatestFromCloud() {
    if (!this.supabase) return;
    try {
      this.isSyncing = true;
      const { data, error } = await this.supabase
        .from('hmnet_sync')
        .select('*')
        .eq('id', 'primary_store')
        .maybeSingle();

      if (error) {
        console.warn("Error fetching cloud data:", error);
        this.updateSyncUI("error", "Tabel Cloud Belum Siap");
        return;
      }

      if (data && data.payload && Array.isArray(data.payload.customers) && data.payload.customers.length > 0) {
        const remote = data.payload;
        console.info("Cloud data received. Timestamp:", data.updated_at);
        const changed = this.store.applyRemotePayload(remote);
        this.isConnected = true;
        this.lastSyncTime = new Date();
        this.updateSyncUI("connected", "Cloud Sync: Realtime");
        if (changed && typeof window.refreshAllViews === 'function') {
          window.refreshAllViews();
        }
      } else {
        // Table exists but row is empty or uninitialized -> push our local data to cloud as initial seed!
        console.info("Cloud store is empty. Seeding local data to cloud...");
        await this.pushToCloud(true);
      }
    } catch (e) {
      console.warn("Cloud pull exception:", e);
      this.updateSyncUI("error", "Koneksi Cloud Terputus");
    } finally {
      this.isSyncing = false;
    }
  }

  subscribeRealtime() {
    if (!this.supabase) return;
    try {
      this.channel = this.supabase
        .channel('hmnet_global_sync', {
          config: {
            broadcast: { self: false }
          }
        })
        .on('broadcast', { event: 'store_update' }, (evt) => {
          console.info("⚡ Supabase Broadcast received:", evt);
          if (evt && evt.payload && evt.payload.payload) {
            if (evt.payload.updated_by === this.clientId) return;
            const changed = this.store.applyRemotePayload(evt.payload.payload);
            this.lastSyncTime = new Date();
            this.updateSyncUI("connected", "Cloud Sync: Realtime");
            if (changed && typeof window.refreshAllViews === 'function') {
              window.refreshAllViews();
            }
            if (typeof showToast === 'function') {
              showToast("Data disinkronkan otomatis dari Cloud!", "info");
            }
          }
        })
        .on('postgres_changes', { event: '*', schema: 'public', table: 'hmnet_sync' }, (payload) => {
          console.info("⚡ Postgres changes received:", payload);
          if (payload.new && payload.new.payload) {
            if (payload.new.updated_by === this.clientId) return;
            const changed = this.store.applyRemotePayload(payload.new.payload);
            this.lastSyncTime = new Date();
            this.updateSyncUI("connected", "Cloud Sync: Realtime");
            if (changed && typeof window.refreshAllViews === 'function') {
              window.refreshAllViews();
            }
            if (typeof showToast === 'function') {
              showToast("Data disinkronkan otomatis dari Cloud!", "info");
            }
          }
        })
        .subscribe((status) => {
          console.info("Supabase realtime channel status:", status);
          if (status === 'SUBSCRIBED') {
            this.isConnected = true;
            this.updateSyncUI("connected", "Cloud Sync: Realtime");
          }
        });
    } catch (err) {
      console.warn("Realtime subscribe error:", err);
    }
  }

  schedulePush() {
    if (this.syncDebounceTimer) {
      clearTimeout(this.syncDebounceTimer);
    }
    this.syncDebounceTimer = setTimeout(() => {
      this.pushToCloud();
    }, 300); // 300ms debounce
  }

  async pushToCloud(isInitialSeed = false) {
    if (!this.supabase) return;
    try {
      const payload = {
        customers: this.store.customers,
        payments: this.store.payments,
        expenses: this.store.expenses,
        company: this.store.company,
        users: this.store.users || [],
        personalFinance: this.store.personalFinance || {},
        auditLogs: (this.store.auditLogs || []).slice(0, 200),
        updatedAt: new Date().toISOString()
      };

      const row = {
        id: 'primary_store',
        payload: payload,
        version: 1,
        updated_at: new Date().toISOString(),
        updated_by: this.clientId
      };

      // 1. Kirim instant WebSocket Broadcast ke seluruh browser/device (Vercel & Local)
      if (this.channel) {
        this.channel.send({
          type: 'broadcast',
          event: 'store_update',
          payload: {
            payload: payload,
            updated_by: this.clientId,
            updated_at: row.updated_at
          }
        }).catch(e => console.warn("Broadcast send warn:", e));
      }

      // 2. Simpan permanen ke tabel database Supabase hmnet_sync
      const { data, error } = await this.supabase
        .from('hmnet_sync')
        .upsert(row);

      if (error) {
        console.warn("Failed pushing to cloud:", error);
        this.updateSyncUI("error", "Gagal Sync Cloud");
      } else {
        this.isConnected = true;
        this.lastSyncTime = new Date();
        this.updateSyncUI("connected", "Cloud Sync: Realtime");
        if (isInitialSeed && typeof showToast === 'function') {
          showToast("Data awal berhasil diunggah ke Cloud Supabase!", "success");
        }
      }
    } catch (e) {
      console.warn("Push to cloud exception:", e);
      this.updateSyncUI("error", "Koneksi Cloud Error");
    }
  }

  updateSyncUI(status, label) {
    const dot = document.getElementById('cloud-sync-dot');
    const textLabel = document.getElementById('cloud-sync-label');
    const icon = document.getElementById('cloud-sync-icon');
    const btn = document.getElementById('topbar-btn-cloud-sync');

    if (!dot || !textLabel) return;

    if (status === 'connected') {
      dot.className = "w-2 h-2 rounded-full bg-emerald-500 animate-pulse";
      if (icon) icon.className = "fa-solid fa-cloud-arrow-up text-emerald-600";
      if (btn) btn.className = "flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs px-2.5 sm:px-3 py-1.5 rounded-xl font-bold shadow-2xs transition active:scale-95 cursor-pointer";
      textLabel.innerText = label || "Cloud Sync: Realtime";
    } else if (status === 'syncing') {
      dot.className = "w-2 h-2 rounded-full bg-amber-500 animate-ping";
      if (icon) icon.className = "fa-solid fa-rotate text-amber-600 animate-spin";
      if (btn) btn.className = "flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs px-2.5 sm:px-3 py-1.5 rounded-xl font-bold shadow-2xs transition active:scale-95 cursor-pointer";
      textLabel.innerText = label || "Sinkronisasi...";
    } else if (status === 'connecting') {
      dot.className = "w-2 h-2 rounded-full bg-blue-500 animate-pulse";
      if (icon) icon.className = "fa-solid fa-cloud text-blue-600";
      if (btn) btn.className = "flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-300 text-xs px-2.5 sm:px-3 py-1.5 rounded-xl font-bold shadow-2xs transition active:scale-95 cursor-pointer";
      textLabel.innerText = label || "Menghubungkan...";
    } else {
      dot.className = "w-2 h-2 rounded-full bg-rose-500";
      if (icon) icon.className = "fa-solid fa-cloud-slash text-rose-500";
      if (btn) btn.className = "flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-300 text-xs px-2.5 sm:px-3 py-1.5 rounded-xl font-bold shadow-2xs transition active:scale-95 cursor-pointer";
      textLabel.innerText = label || "Cloud Offline";
    }
  }
}

// Global instance
window.store = new HMNetStore();
window.cloudSync = new CloudSyncManager(window.store);
if (typeof window !== 'undefined') {
  window.cloudSync.init();
}
