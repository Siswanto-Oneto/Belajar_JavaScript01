// 💡 Soal 1: Klasifikasi Umur
// Buat program untuk menentukan kategori umur:
// Usia 0 - 5 tahun → Balita
// Usia 6 - 12 tahun → Anak-anak
// Usia 13 - 17 tahun → Remaja
// Usia 18 - 59 tahun → Dewasa
// Usia 60 tahun ke atas → Lansia

let usia = 5;

if (usia >= 0 && usia <= 5) {
  console.log('Balita');
} else if (usia <= 12){
  console.log('Anak-anak');
} else if (usia <= 17){
  console.log('Remaja');
} else if (usia <= 59){
  console.log('Dewasa');
} else if (usia >= 60){
  console.log('Lansia');
} else {
  console.log('Usia tidak valid');
}

// 💡 Soal 2: Menentukan Biaya Parkir
// Buat program untuk menghitung biaya parkir motor:
// Parkir 1 - 2 jam → Rp 2.000
// Parkir 3 - 5 jam → Rp 5.000
// Parkir lebih dari 5 jam → Rp 10.000
// Jika input jam kurang dari 1 → Tampilkan "Minimal parkir 1 jam"

let jam = 4;
let biaya = '';

if (jam < 1) {
  biaya = 'Minimal parkir 1 jam';
} else if (jam <= 2) {
  biaya = 'Rp 2.000';
} else if (jam <= 5) {
  biaya = 'Rp 5.000';
} else {
  biaya = 'Rp 10.000';
} 

console.log('Biaya Parkir: '+ biaya)


// 💡 Soal 3: Menentukan Hari dalam Seminggu
// Buat program untuk menampilkan nama hari berdasarkan input angka:
// 1 → Senin
// 2 → Selasa
// 3 → Rabu
// 4 → Kamis
// 5 → Jumat
// 6 → Sabtu
// 7 → Minggu
// Jika input bukan 1 - 7 → Tampilkan "Hari tidak valid"

let angka = 5;
let hari = '';

if (angka == 1) {
  hari = 'Senin';
} else if (angka == 2) {
  hari = 'Selasa';
} else if (angka == 3) {
  hari = 'Rabu';
} else if (angka == 4) {
  hari = 'Kamis';
} else if (angka == 5) {
  hari = 'Jumat';
} else if (angka == 6) {
  hari = 'Sabtu';
} else if (angka == 7) {
  hari = 'Minggu';
} else {
  hari = 'Hari tidak valid';
}

console.log('Hari: '+ hari)


// 💡 Soal Latihan: Menentukan Ukuran Baju
// Buat program untuk menentukan ukuran baju berdasarkan lebar dada (dalam cm) berikut:
// Lebar dada ≤ 90 cm → Ukuran S
// Lebar dada 91 - 100 cm → Ukuran M
// Lebar dada 101 - 110 cm → Ukuran L
// Lebar dada 111 - 120 cm → Ukuran XL
// Lebar dada > 120 cm → Ukuran XXL
// Jika lebar dada kurang dari atau sama dengan 0 → Tampilkan "Ukuran tidak valid"

let lebarDada = 105;
let ukuran = '';

if (lebarDada <= 0) {
  ukuran = 'Ukuran tidak valid';
} else if (lebarDada <= 90 ){
  ukuran = 'S';
} else if (lebarDada <= 100 ){
  ukuran = 'M';
} else if (lebarDada <= 110 ){
  ukuran = 'L';
} else if (lebarDada <= 120 ){
  ukuran = 'XL';
} else {
  ukuran = 'XXL';
}

console.log('Ukuran: '+ ukuran);


// 💡 Soal 1: Penilaian Karyawan
// Buat program untuk menentukan penilaian performa karyawan berdasarkan skor kinerja:
// Skor 90 - 100 → "Sangat Baik"
// Skor 80 - 89 → "Baik"
// Skor 70 - 79 → "Cukup"
// Skor 60 - 69 → "Kurang"
// Skor di bawah 60 → "Sangat Kurang"
// Jika skor di bawah 0 atau di atas 100 → tampilkan "Skor tidak valid"

let skor = 0;
let kriteria = '';


if (skor < 0 || skor > 100) {
  kriteria = 'Skor tidak valid';
} else if (skor <= 60){
  kriteria = 'Sangat Kurang';
} else if (skor <= 69){
  kriteria = 'Kurang';
} else if (skor <= 79){
  kriteria = 'Cukup';
} else if (skor <= 89){
  kriteria = 'Baik';
} else {
  kriteria = 'Sangat Baik';
}

console.log('Penilaian: '+ kriteria)


// 💡 Soal 2: Diskon Belanja
// Buat program untuk menghitung diskon belanja berdasarkan total belanja:
// Belanja ≥ Rp 500.000 → Diskon 20%
// Belanja Rp 300.000 - Rp 499.999 → Diskon 15%
// Belanja Rp 150.000 - Rp 299.999 → Diskon 10%
// Belanja Rp 100.000 - Rp 149.999 → Diskon 5%
// Belanja < Rp 100.000 → Tidak ada diskon
// Jika total belanja negatif → tampilkan "Belanja tidak valid"

// Keluaran program:
// Total Belanja Awal
// Diskon yang Didapat
// Total Bayar Akhir

let totalBelanja = 900000;
let diskon = 0;

if (totalBelanja < 0) {
  console.log('Belanja tidak valid');
} else if (totalBelanja < 100000) {
  diskon = 0;
} else if (totalBelanja <= 149999) {
  diskon = 0.05; // 5%
} else if (totalBelanja <= 299999) {
  diskon = 0.10; // 10%
} else if (totalBelanja <= 499999) {
  diskon = 0.15; // 15%
} else {
  diskon = 0.20; // 20%
}

if (totalBelanja >= 0) {
  console.log('Total Belanja: ' + totalBelanja);

  let potongan = totalBelanja * diskon;
  console.log('Diskon: '+ potongan);
  
  let totalBayar = totalBelanja - potongan;
  console.log('Total Bayar: '+ totalBayar);
} 

// 💡 Soal 1: Tarif Pengiriman Barang
// Buat program untuk menghitung biaya pengiriman berdasarkan berat barang (kg) dan jenis layanan:
// Jika berat ≤ 0 → tampilkan “Berat tidak valid”
// Jenis layanan ada dua:
// 'reguler' → biaya per kg = Rp 5.000
// 'ekspres' → biaya per kg = Rp 8.000
// Jika berat > 20 kg (untuk layanan apapun), berikan diskon 10% dari total biaya
// Output:
// Jenis layanan
// Berat
// Biaya sebelum diskon
// Diskon
// Total bayar

let berat = 25;
let jenisLayanan = 'reguler';
let diskon1 = 0;
let biayaAwal = 0;
let biayaPerKg = 0;
let totalBayar = 0;

if (berat <= 0 ) {
  console.log('Berat tidak valid');
} else if (jenisLayanan !== 'reguler' && jenisLayanan !== 'ekspres') {
  console.log('Jenis Layanan tidak dikenal');
} else {

// Tentukan biaya per kg
  if (jenisLayanan === 'reguler') {
    biayaPerKg = 5000;
  } else if (jenisLayanan === 'ekspres') {
    biayaPerKg = 8000;
}

// Hitung biaya awal
biayaAwal = berat * biayaPerKg;

// Hitung diskon jika berat > 20kg
if (berat > 20){
  diskon1 = 0.10 * biayaAwal;
}

// Hitung total bayar
totalBayar = biayaAwal - diskon1;

// Tampilkan hasil
console.log('Layanan: ' + jenisLayanan);
console.log('Berat: ' + berat + ' Kg');
console.log('Biaya Sebelum Diskon: Rp ' + biayaAwal);
console.log('Diskon: Rp ' + diskon1);
console.log('Total Bayar: Rp ' + totalBayar);
}


// 💡 Soal 2: Penilaian Ujian Masuk
// Buat program untuk menentukan kelulusan berdasarkan nilai ujian:
// Jika nilai teori dan praktik masing-masing ≥ 70 → "Lulus"
// Jika salah satu < 70 → "Remedial"
// Jika ada nilai < 0 atau > 100 → "Nilai tidak valid"
// Output:
// Nilai teori
// Nilai praktik
// Status kelulusan

let nilaiTeori = 80;
let nilaiPraktik = 65;
let status1 = '';

if (nilaiTeori < 0 || nilaiTeori > 100 || nilaiPraktik < 0 || nilaiPraktik > 100 ) {
  status1 = 'Nilai tidak valid';
} else if (nilaiTeori >= 70 && nilaiPraktik >= 70) { 
  status1 = 'Lulus';
} else {
  status1 = 'Remidial';
}

console.log('Nilai Teori: ' + nilaiTeori);
console.log('Nilai Praktik: ' + nilaiPraktik);
console.log('Status: ' + status1);


// 💡 Soal 1 (Mirip Tarif Pengiriman): Biaya Laundry
// Buat program untuk menghitung biaya laundry berdasarkan:
// Berat cucian (kg)
// Jenis layanan:
// 'biasa' → Rp 6.000/kg
// 'cepat' → Rp 9.000/kg
// Jika berat lebih dari 15 kg, dapat diskon 5% dari total
// Jika berat ≤ 0 → tampilkan "Berat tidak valid"
// Jika jenis layanan salah → tampilkan "Layanan tidak dikenal"
// Output:
// Jenis layanan
// Berat cucian
// Biaya sebelum diskon
// Diskon
// Total bayar

let berat1 = 16;
let jenisLayanan1 = 'cepat';
let biayaAwal1 = 0;
let biayaPerKg1 = 0;
let diskon2 = 0;
let totalBayar1 = 0;

if (berat1 <= 0) {
  console.log('Berat Tidak Valid')
} else if (jenisLayanan1 !== 'biasa' && jenisLayanan1 !== 'cepat'){
  console.log('Jenis Layanan Tidak Dikenal')
} else {

// Tentukan biaya perKilo  
  if (jenisLayanan1 === 'biasa') {
    biayaPerKg1 = 6000;
  } else if (jenisLayanan1 === 'cepat'){
    biayaPerKg1 = 9000;
  }

// Hitung biaya awal
  biayaAwal1 = berat1 * biayaPerKg1;

// Hitung diskon jika berat > 15kg
if (berat1 > 15) {
  diskon2 = 0.05 * biayaAwal1;
}

// Hitung total bayar
totalBayar1 = biayaAwal1 - diskon2;

// Tampilkan hasil
console.log('Jenis Layanan: ' + jenisLayanan1);
console.log('Berat Cucian: ' + berat1 + 'Kg');
console.log('Biaya Sebelum diskon: Rp ' + biayaAwal1);
console.log('Diskon: Rp ' + diskon2);
console.log('Total Bayar: Rp ' + totalBayar1);
}


// 💡 Soal 2 (Mirip Penilaian Ujian): Evaluasi Tes Kompetensi
// Tentukan status peserta berdasarkan nilai tulis dan nilai wawancara:
// Jika ada nilai < 0 atau > 100 → tampilkan "Nilai tidak valid"
// Jika nilai tulis ≥ 75 dan nilai wawancara ≥ 80 → "Lulus"
// Jika hanya salah satu yang tidak memenuhi → "Remedial"
// Output:
// Nilai tulis
// Nilai wawancara
// Status

let nilaiTulis = 75;
let nilaiWawancara = 80;
let status2 = '';

if (nilaiTulis < 0 || nilaiTulis > 100 || nilaiWawancara < 0 || nilaiWawancara > 100) {
  status2 = 'Nilai Tidak Valid';
} else if (nilaiTulis >= 75 && nilaiWawancara >= 80 ){
  status2 = 'Lulus';
} else {
  status2 = 'Remedial';
}

console.log('Nilai Tulis: '+ nilaiTulis);
console.log('Nilai Wawancara: '+ nilaiWawancara);
console.log('Status: '+ status2);


// Challenge
// Buatlah sebuah script menggunakan if-else yang memeriksa sebuah angka apakah angka tersebut positif, negatif, atau nol, dan apakah angka tersebut genap atau ganjil.

let num = -8;

if (num > 0) {
  if (num % 2 === 0) {
    console.log('Angka ini positif dan genap');
  } else {
    console.log('Angka ini positif dan ganjil')
  }
} else if (num < 0) {
  if (num % 2 === 0) {
    console.log('Angka ini Negatif dan genap')
  } else {
    console.log('Angka ini Negatif dan ganjil')
  }
} else {
  console.log('Angka ini adalah Nol')
}


// 💡 Soal Latihan: Cek Suhu dan Kondisi
// Buatlah program untuk menentukan kondisi cuaca berdasarkan nilai suhu (suhu) dalam derajat Celsius.
// 🔹 Aturan:
// Jika suhu > 0, maka:
// Jika suhu <= 20, tampilkan: "Dingin"
// Jika suhu > 20, tampilkan: "Hangat"
// Jika suhu < 0, tampilkan: "Sangat Dingin"
// Jika suhu == 0, tampilkan: "Titik Beku"

let suhu = 21;

if (suhu > 0) {
  if (suhu <= 20) {
    console.log('Dingin');
  } else if (suhu > 20){
    console.log('Hangat');
  }
} else if (suhu < 0) {
  console.log('Sangat Dingin');
} else {
  console.log('Titik Beku')
}