/**
 * If-Else Statement di Javascript
 * 
 * @format
 */
// if-else statement adalah percabangan dalam pemrograman.Dengan if-else, kita bisa membuat program yang mengambil keputusan berdasarkan kondisi tertentu.
// Logikanya seperti ini:
// Kalau kondisi benar (true), jalankan kode A.
// Kalau kondisi salah (false), jalankan kode B.

// Sintaks Dasar
// if (kondisi) {
  // kode yang dijalankan jika kondisi benar
  // } else {
  // kode yang dijalankan jika kondisi salah
  // }

  let age = 15;

  if (age >= 18) {
    console.log('Kamu sudah dewasa')
  } else {
    console.log('Kamu belum dewasa kawan')
  }

// If-Else-If digunakan  untuk memeriksa beberapa kondisi secara berurutan . Blok kode pertama yang kondisinya benar (true) akan dijalankan, dan eksekusi akan berhenti setelah itu.

// Sintaks Dasar
// if (kondisi1) {
//   // kode jika kondisi1 benar
// } else if (kondisi2) {
//   // kode jika kondisi2 benar
// } else {
//   // kode jika semua kondisi di atas salah
// }

let score = 89;

if (score >= 90) {
    console.log('Grade A');
} else if(score >= 80) {
    console.log('Grade B');
} else if(score >= 70) {
    console.log('Grade C');
} else if(score >= 60) {
    console.log('Grade D');
} else {
    console.log('Grade F');
}


// Nested If Else (If-Else Bertingkat), kita juga bisa menempatkan If-Else di dalam blok If-Else lainnya. Hal ini disebut sebagai Nested If-Else.

// Sintaks Dasar
// if (kondisi1) {
//     // kode jika kondisi1 benar
// } else {
//     if (kondisi2) {
//         // kode jika kondisi2 benar
//     } else {
//         // kode jika kondisi2 salah
//     }
// }

let num = 10

if (num>0) {
  if (num % 2 == 0) {
    console.log('Number ini Positif dan dia bilangan genap')
  } else {
    console.log('Number ini Positif dan dia bilangan ganjil')
  }
} else {
  console.log('Number ini bilangan Negatif')
}

