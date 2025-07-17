# Belajar_JavaScript01

## Module-1
console.log() adalah fungsi dalam JavaScript yang digunakan untuk menampilkan pesan atau nilai variabel ke konsol (browser atau lingkungan pengembangan lainnya seperti Node.js). 
console.log() yaitu mencetak pesan sederhana,

**Contoh**
```bash
console.log("Halo, dunia!");
```

## Module-2-variable
Dalam JavaScript, variabel adalah nama yang digunakan untuk menyimpan nilai (data) yang dapat diubah selama eksekusi program. Bayangkan variabel seperti kotak berlabel yang dapat menampung berbagai jenis data, seperti angka, teks, objek, atau array.

**Deklarasi Variabel:**
Dalam JavaScript, variabel dideklarasikan menggunakan kata kunci var, let, atau const, diikuti dengan nama variabel. 
var: Digunakan untuk mendeklarasikan variabel dengan cakupan fungsi. 
let: Digunakan untuk mendeklarasikan variabel dengan cakupan blok (lebih disukai daripada var). 
const: Digunakan untuk mendeklarasikan konstanta, yaitu nilai yang tidak dapat diubah setelah deklarasi. 

**Contoh**
```bash
var nama = "Budi"; // Mendeklarasikan variabel 'nama' dengan nilai string "Budi"
let umur = 30; // Mendeklarasikan variabel 'umur' dengan nilai angka 30
const PI = 3.14; // Mendeklarasikan konstanta 'PI' dengan nilai 3.14
```

## Module-3-tipe-data
Tipe data dalam JavaScript adalah cara untuk mengklasifikasikan jenis data yang disimpan dalam sebuah variabel. 

**Tipe Data Primitif:**
Number: Digunakan untuk menyimpan angka, baik bilangan bulat maupun desimal. 
String: Digunakan untuk menyimpan teks atau karakter. String harus diapit oleh tanda kutip tunggal (') atau ganda ("). 
Boolean: Digunakan untuk menyimpan nilai kebenaran, yaitu true atau false. 
Null: Digunakan untuk menunjukkan tidak adanya nilai, secara sengaja. 
Undefined: Digunakan untuk menunjukkan bahwa suatu variabel telah dideklarasikan tetapi belum diberi nilai. 
Symbol: Digunakan untuk membuat pengenal unik yang tidak dapat diubah. 
BigInt: Digunakan untuk mewakili bilangan bulat yang lebih besar dari rentang angka biasa. 


## Module-4-type-conversion
Konversi tipe (type conversion atau typecasting) dalam JavaScript adalah proses mengubah nilai dari satu tipe data ke tipe data lain. Ini memungkinkan Anda untuk menggunakan nilai dalam berbagai konteks atau melakukan operasi yang membutuhkan tipe data tertentu. 

**Berikut adalah beberapa contoh konversi tipe yang umum dalam JavaScript:**
1. Konversi ke String: 
- String(nilai): Mengonversi nilai menjadi string.
- nilai.toString(): Mengonversi nilai menjadi string (jika nilai tersebut bukan null atau undefined). 
2. Konversi ke Angka:
- Number(nilai): Mengonversi nilai menjadi angka.
- parseInt(nilai): Mengonversi string menjadi bilangan bulat.
- parseFloat(nilai): Mengonversi string menjadi bilangan desimal. 
3. Konversi ke Boolean:
- Boolean(nilai): Mengonversi nilai menjadi boolean. 

**Contoh**
```bash
let angka = 10;
let stringAngka = "5";

let hasilPenjumlahan = angka + stringAngka; // Hasilnya adalah "105" (konversi implisit dari angka menjadi string)
let hasilPerkalian = angka * stringAngka; // Hasilnya adalah 50 (konversi implisit dari string menjadi angka)
```

