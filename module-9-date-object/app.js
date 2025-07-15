/* Date Object di JavaScript */

// Apa itu Date Object, Data Object di JavaScript digunakan untuk bekerja dengan tanggal dan waktu object ini memungkinkan kita untuk mendapatkan, mengatur, dan memanipulasi tanggal dan waktu.

// Membuat Data Object

//Tanggal dan waktu saat ini
// let now = new Date()
// console.log(now)

// Menggunakan String
// let specificDate = new Date('Fri May 30 2025 11:25:48');
// console.log(specificDate)

// Menggunakan Parameter (Tahun, Bulan, Hari, jam, Menit, Detik, Milidetik)
// let customDate = new Date(2025, 4, 30, 11, 32)
// console.log(customDate) // hitungan bulan d mulai dari angka 0

// Mengambil Informasi Tahun, tanggal, hari, waktu
// let today = new Date();
// console.log(today.getFullYear())
// console.log(today.getMonth())
// console.log(today.getDate())
// console.log(today.getDay())
// console.log(today.getHours())
// console.log(today.getMinutes())
// console.log(today.getSeconds())
// console.log(today.getMilliseconds())
// console.log(today.getTime())


// Mengatur Tanggal dan Waktu
// let date = new Date();

// Mengatur Tahun Menjadi 2026
// date.setFullYear(2026)
// console.log(date)

// // Mengatur Bulan Menjadi Desember(Desember di angka 11 karna hitungan bulan dimuali dari angka 0)
// date.setMonth(11)
// console.log(date)

// // Mengatur Hari Menjadi Naik atau Turun
// date.setDate(31)
// console.log(date)


// // Perhitungan Waktu dengan Date Object
// let startDate = new Date(2025, 4, 30, 11, 32)
// let endDate = new Date(2025, 5, 4, 11, 32)

// let diff = endDate - startDate
// console.log(diff)  // Mliseconds

// let diffIndays = diff / (1000 * 3600 * 24)
// console.log(diffIndays)


