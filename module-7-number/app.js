/* Numbers di JavaScript */
/* di JavaScript, Tipe data Number digunakan untuk merepresentasikan angka. Angka ini bisa berupa bilangan bulat (Integer), pecahan (Floating Point), atau bilangan khusus seperti Infinity dan NaN (Not-a-Number). */

// contoh penggunaan numbers
let bilanganBulat = 26
let bilanganPecahan = 27.5
let bilanganNegatif = -8
let infinityValue = Infinity
let notANumber = NaN
// console.log(infinityValue)


// JavaScript menyediakan beberapa properti pada objek Number yang berguna:

// 1. Number.MAX_VALUE
console.log(Number.MAX_VALUE)

// 2. Number.MIN_VALUE
console.log(Number.MIN_VALUE)

// 3. Number.POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY)

// 4. Number.NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY)

// 5. Number.NaN    // car pengertiannya kalau lupa
console.log(0/0)

// Metode Bawaan Number

// 1. toString(), Mengubah Angka menjadi string.
let num = 732.9
let str = num.toString()
console.log(str, typeof str)

// 2. toFixed(digits), Mengubah Angka menjadi string dengan jumlah digit desimal yang ditentukan.
let floating = 3.124824
console.log(floating.toFixed(4), typeof floating.toFixed(4))

// 3. toPrecision(digits), Mengubah Angka menjadi string dengan panjang total yang ditentukan.
let float = 3.1418494
console.log(float.toPrecision(5), typeof float.toPrecision(5))

// 4. parseInt() dan parseFloat(), Mengubah string menjadi angka integer atau floating point.
let str2 = "123.7"
let int = parseInt(str2)
console.log(int)

let str3 = "123.7"
let int1 = parseFloat(str3)
console.log(int1)