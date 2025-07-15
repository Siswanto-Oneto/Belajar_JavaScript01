/**
 * Object di JavaScript
 * 
 * @format
 */

// ⁡⁣⁢⁢Pengertian Object,⁡ ⁡⁣⁣⁢Object di JavaScript adalah tipe data yang digunakan untuk menyimpan koleksi data dan entitas yang lebih kompleks. Sebuah object adalah pasangan antara key dan value (disebut juga properti).⁡
// Membuat Object
// 1. Object Literal

let mobil = {
    merk : 'Toyota',
    model : 'Avanza',
    tahun : 2025
}
console.log(mobil)

// 2. Menggunakan Constructor new Object
let buku = new Object()
buku.judul = 'Belajar JavaScript'
buku.penulis = 'Siswanto'

console.log(buku)


let mahasiswa = {
    nama: "Siswanto",
    umur: 26,
    jurusan: "Teknologi Informasi",
}
// console.log(mahasiswa) //untuk contoh
// Mengakses Properti Object
// 1. Menggunakan Notasi Titik (Dot Notation . ):
console.log(mahasiswa.nama) // soalnya di atas

// 2. Menggunakan Notasi Kurung (Bracket Notation [] ):
console.log(mahasiswa['jurusan']) // harus sertakan string

// Menambah, Mengubah, dan Menghapus Properti
// 1. Menambah Properti:
mahasiswa.alamat = 'Jakarta'
console.log(mahasiswa)

// 2. Mengubah Properti:
mahasiswa.nama = 'Wanto Keren'
console.log(mahasiswa)

// 3. Menghapus Properti:
delete mahasiswa.alamat
console.log(mahasiswa)

// Nested Object (Object di dalam Object)
let universitas = {
    "nama": "Ofi Cantik",
    fakultas: {
        nama: 'Fakultas Teknik',
        jurusan: 'Teknologi Informasi'        
    }
}
console.log(universitas)


// Destructuring Object
let {nama, umur, jurusan} = mahasiswa
console.log(jurusan) // bisa dipanggil semuanya satau salah satu saja, ini sering digunakan
