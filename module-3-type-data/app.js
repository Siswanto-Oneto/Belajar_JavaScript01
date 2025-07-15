/*TYPE DATA PRIMITIVE*/


// STRING
const nama = 'Wanto'
const negara = "Indonesia"
const domisili = `${nama}Bandung`

//NUMBER
const umur = 26

//BOOLEAN
const isMerried = true

//UNDIFINED
var x ;

//NULL
const person = null

//SYMBOL
const symbol1 = Symbol("description 1")

//BIGINT
const bigInt1 = 122344567788n



/* TYPE DATA REFERENCE */

//OBJECT
const orang = {
    nama: "wanto",
    umur: 26,
    negara: "indonesia",
}

//ARRAY
const hobby = ['futsal', 'Berenang', '6',]

//FUNCTION
function sayHello() {
    return "Hello from semangat koding"
}


const output = sayHello




console.log(output, typeof output)


/*Perbedaan tipe data primitive dan reference*/

//Tipe data primitive
let a = 10
let b = a //'b' menyimpan nilai salinan dari a , b = 10

a = 20

console.log(b) //output : 10

//Tipe data reference
let obj1 = {nama: "Siswanto"}
let obj2 = obj1 //obj2 akan menyimpan referensi yang sama dengan obj1
obj1.nama = "khofifah"

console.log(obj2)

