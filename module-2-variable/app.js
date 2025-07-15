/* var bisa di akses diluar scopes, dan nilainya bisa diubah */

// if(true) {
//     var name = "Wanto"
// } //scopes
// name = "Siswanto"
// console.log('var : ',name);


/* let tidak bisa di akses diluar scopes, dan nilainya bisa diubah */

// if(true) {
//     let name = "Wanto"
//     name = "Siswanto"
//     console.log('let : ',name);
// } //scopes


/* const tidak bisa di akses diluar scopes, dan nilainya tidak bisa diubah/nilai pasti*/

if(true) {
    const name = "Wanto"
    
    console.log('const : ',name);
} //scopes
