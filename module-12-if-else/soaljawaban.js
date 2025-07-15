
// Latihan If-Else Bertingkat
// Soal 1
// Buat program untuk menentukan kategori umur:
// Jika umur lebih dari atau sama dengan 60 → "Lansia"
// Jika umur lebih dari atau sama dengan 18 → "Dewasa"
// Jika umur lebih dari atau sama dengan 12 → "Remaja"
// Jika umur kurang dari 12 → "Anak-anak"

// Jawaban.
let umur = 45

if (umur >= 60) {
  console.log('Lansia');
} else if (umur >= 18){
  console.log('Dewasa');
} else if (umur >= 12) {
  console.log('Remaja');
} else {
  console.log('Anak-Anak');
}

// Soal 2
// Buat program untuk menilai hasil ujian:
// Jika nilai lebih dari atau sama dengan 90 → "Sangat Baik"
// Jika nilai lebih dari atau sama dengan 75 → "Baik"
// Jika nilai lebih dari atau sama dengan 60 → "Cukup"
// Jika nilai kurang dari 60 → "Kurang"

// Jawaban.
let nilai = 72

if (nilai >= 90) {
  console.log('Sangat Baik');
} else if (nilai >= 75) {
  console.log('Baik');
} else if (nilai >= 60) {
  console.log('Cukup');
} else{
  console.log('Kurang');
}

// Soal 3
// Buat program untuk menentukan jenis kendaraan berdasarkan jumlah roda:
// Jika roda 4 → "Mobil"
// Jika roda 2 → "Motor"
// Jika roda lebih dari 4 → "Kendaraan Berat"
// Selain itu → "Jenis tidak diketahui"

// Jawaban.
let kendaraan = 2

if (kendaraan == 4) {
  console.log('Mobil')
} else if (kendaraan == 2){
  console.log('Motor')
} else if (kendaraan > 4) {
  console.log('Kendaraan Berat')
} else {
  console.log('Jenis Tidak Diketahui')
}


// contoh soal yang lebih sulit

// Soal 1: Kalkulator Diskon Belanja
// Buat program untuk menentukan total harga setelah diskon berdasarkan keterangan berikut:
// Jika belanja lebih dari 500.000, diskon 20%.
// Jika belanja lebih dari 300.000, diskon 15%.
// Jika belanja lebih dari 100.000, diskon 10%.
// Jika belanja kurang dari atau sama dengan 100.000, tidak dapat diskon.

// Jawaban soal 1;
let totalBelanja = 500000;
let diskon = '';

if (totalBelanja > 500000) {
    diskon = 0.2; // 20%
} else if (totalBelanja > 300000) {
    diskon = 0.15; // 15%
} else if (totalBelanja > 100000) {
    diskon = 0.1; // 10%
} else {
    diskon = 0; // tidak dapat diskon
}

let potongan = totalBelanja * diskon;
let totalBayar = totalBelanja - potongan;

console.log("Total yang harus dibayar: " + totalBayar);
// Output:
// Tampilkan total harga yang harus dibayar setelah diskon.
// Input: totalBelanja = 450000
// Output: Total yang harus dibayar: 382500



// Soal 2: Penentuan Kategori Nilai dan Status Lulus
// Buat program untuk menentukan:
// Kategori nilai:
// 90-100 → "A (Sangat Baik)"
// 80-89 → "B (Baik)"
// 70-79 → "C (Cukup)"
// 60-69 → "D (Kurang)"
// Di bawah 60 → "E (Gagal)"

// Status kelulusan:
// Lulus jika nilai minimal 70
// Tidak lulus jika nilai di bawah 70

let nilai2 = 85;
let kategori = '';
let status1 = '';

if (nilai2 >= 90 && nilai2 <= 100) {
    kategori = 'A (Sangat Baik)';
} else if (nilai2 >= 80) {
    kategori = 'B (Baik)';
} else if (nilai2 >= 70) {
    kategori = 'C (Cukup)';
} else if (nilai2 >= 60) {
    kategori = 'D (Kurang)';
} else {
    kategori = 'E (Gagal)';
}

if (nilai2 >= 70) {
    status1 = 'Lulus';
} else {
    status1 = 'Tidak Lulus';
}

console.log('Nilai Anda: ' + kategori);
console.log('Status: ' + status1);

// Output:
// Tampilkan kategori nilai dan status kelulusan.
// Input: nilai = 85
// Output: Nilai Anda: B (Baik)
//         Status: Lulus


// Soal 3: Penilaian Kelulusan Siswa (Gabungan Nilai Teori dan Praktik)
// Buat program yang menentukan apakah seorang siswa Lulus atau Tidak Lulus berdasarkan kriteria berikut:

// Siswa Lulus jika:
// Nilai teori minimal 70.
// Nilai praktik minimal 75.

// Jika nilai teori atau praktik kurang dari syarat minimal, maka Tidak Lulus.

// Tampilkan juga penilaian akhir berdasarkan rata-rata:
// Rata-rata ≥ 90 → "Sangat Baik"
// Rata-rata ≥ 80 → "Baik"
// Rata-rata ≥ 70 → "Cukup"
// Rata-rata < 70 → "Perlu Perbaikan"

let nilaiTeori = 80;
let nilaiPraktik = 78;

let rataRata = (nilaiTeori + nilaiPraktik) / 2;
let kategori1 = '';
let status2 = '';

// Pertama Kita tentukan kategori berdasarkan nilai rata rata
if (rataRata >= 90) {
  kategori1 = 'Sangat baik';
} else if (rataRata >= 80){
  kategori1 = 'Baik';
} else if (rataRata >= 70){
  kategori1 = 'Cukup';
} else {
  kategori1 = 'Perlu Perbaikan';
}

// Kedua Kita tentukan Nilai kelulusannya
if (nilaiTeori >= 70 && nilaiPraktik >= 75 ) {
  status2 = 'Lulus';
} else {
  status2 ='Tidak Lulus';
}

// Input:
// Nilai Teori: 80
// Nilai Praktik: 78

console.log('Status: ' + status2);
console.log('Penilaian: ' + kategori1);

// Output:
// Status: Lulus
// Penilaian: Baik


// Soal 4: Penentuan Harga Tiket Berdasarkan Usia dan Hari
// Buat program yang menentukan harga tiket bioskop berdasarkan ketentuan:

// Jika hari adalah Weekend:
// Usia < 5 → Gratis
// Usia 5 - 12 → Rp 20.000
// Usia 13 - 60 → Rp 40.000
// Usia > 60 → Rp 25.000

// Jika hari adalah Weekday:
// Usia < 5 → Gratis
// Usia 5 - 12 → Rp 15.000
// Usia 13 - 60 → Rp 30.000
// Usia > 60 → Rp 20.000

// // Input:
// Hari: Weekday
// Usia: 10

let hari = 'Weekend'; // Bisa di ubah ke Weekday
let usia = 10;
let hargaTiket = 0;

if (hari === 'Weekend') {
  if (usia < 5) {
    hargaTiket = 0;
  } else if(usia <= 12){
    hargaTiket = 20000;
  } else if(usia <= 60){
    hargaTiket = 40000;
  } else {
    hargaTiket = 25000;
  }
} else if(hari === 'Weekday') {
  if (usia < 5) {
    hargaTiket = 0;
  } else if(usia <= 12){
    hargaTiket = 15000;
  } else if(usia <= 60){
    hargaTiket = 30000;
  } else {
    hargaTiket = 20000;
  }
} else {
  console.log('Hari tidak Valid')
}

console.log('Harga Tiket:' + hargaTiket)

// Output:
// Harga Tiket: Rp 20.000


// Latihan If-Else Bertingkat (Level Dasar - Variasi)

// 💡 Soal 1: Menentukan Musim Berdasarkan Bulan
// Buat program untuk menentukan musim berdasarkan input bulan (1-12):
// Jika bulan 12, 1, 2 → Musim Hujan
// Jika bulan 3, 4, 5 → Musim Semi
// Jika bulan 6, 7, 8 → Musim Panas
// Jika bulan 9, 10, 11 → Musim Gugur

let bulan = 8;
let musim = '';

if (bulan === 12 || bulan === 1 || bulan === 2) { //👉 Gunakan operator logika OR || untuk pilihan ganda.
  musim = 'Musim Hujan';
} else if (bulan === 3 || bulan === 4 || bulan === 5){
  musim = 'Musim Semi';
} else if (bulan === 6 || bulan === 7 || bulan === 8) {
  musim = 'Musim Panas';
} else if (bulan === 9 || bulan === 10 || bulan === 11) {
  musim = 'Musim Gugur';
} else {
  musim = 'tidak ada musim';
}

console.log('Musim: '+ musim)

// 💡 Soal 2: Menentukan Ganjil atau Genap
// Buat program untuk mengecek apakah bilangan ganjil atau genap.

let bilangan = 7;

if (bilangan % 2 === 0) {
  console.log('Bilangan Genap')
} else {
  console.log('Bilangan Ganjil')
}

// 💡 Soal 3: Menentukan Tipe Bilangan
// Buat program untuk menentukan apakah bilangan:
// Positif
// Negatif
// Nol

let cekBilangan = -5;

if (cekBilangan > 0) {
  console.log('Bilangan Positif')
} else if(cekBilangan < 0){
  console.log('Bilangan Negatif')
} else {
  console.log('Bilangan Nol')
}

// 💡 Soal 4: Menentukan Kategori Berat Badan
// Buat program untuk menentukan kategori berat badan:
// Berat badan < 40 → Kurus
// Berat badan 40 - 59 → Normal
// Berat badan 60 - 80 → Gemuk
// Berat badan > 80 → Obesitas

let beratBadan = 65;
let kategori2 = '';

if (beratBadan <= 40) {
  kategori2 = 'Kurus';
} else if(beratBadan <= 59){
  kategori2 = 'Normal';
} else if(beratBadan <= 80){
  kategori2 = 'Gemuk';
} else {
  kategori2 = 'Obesitas';
}

console.log('Kategori: ' + kategori2)


// 💡 Soal 5: Menentukan Kategori Waktu
// Buat program untuk menentukan waktu:
// Jam 5 - 11 → Pagi
// Jam 12 - 15 → Siang
// Jam 16 - 18 → Sore
// Jam 19 - 4 → Malam

let jam = 5;
let waktu = '';

if (jam >= 5 && jam <= 11) {
  waktu = 'Pagi';
} else if(jam >= 12 && jam <= 15){
  waktu = 'Siang';
} else if(jam >= 16 && jam <= 18) {
  waktu = 'Sore';
} else {
  waktu = 'Malam'
}

console.log('Sekarang Waktu: ' + waktu)