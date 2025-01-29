// Latihan 8: Filter, Map, dan Reduce.
// Di playlist Bahasa Pemogramman dasar seharusnya kalian sudah mengenali method filter, dan map. Seperti yang kita tahu fungsi method Filter adalah untuk mensorting elemet Array yang memenuhi kondisi tertentu dan di kembalikan dalam bentuk Array baru, sementara Map melakukan sesuatu pada setiap element Array lalu setelah itu dikembalikan dalam bentuk Array yang baru

let nama = ["Mita","Aiz","Cappie","Syr","Diandra"];
let waifu = nama.map(function(e) {
    return e.charAt(0).toUpperCase() + e.slice(1,e.length)
});


const angkaPalsu = [1,2];
const hasil = angkaPalsu.reduce(function(nilaisebelum,element) {
    return nilaisebelum + element
});


// For lebih besar dari angka 
const angka = [-1,8,9,1,4,-5,-4,3,2,9];
let angkaBaru = [];

// Menggunaakn pengulangan For
// for(let i = 0; i < angka.length; i++) {
//     if(angka[i] >= 3) angkaBaru.push(angka[i]);
// }
// console.info(angkaBaru)

// Menggunakan filter
// angka.filter(e => { if(e >= 3) angkaBaru.push(e) } )
// console.info(angkaBaru)

// Menggunakan Map
// angka.map(e => angkaBaru.push(e*2) )
// console.info(angkaBaru)

// Menggunaakn Reduce
let hasil5 = 0;
angka.reduce((a,b) => {
    hasil5 += a + b
},0)
console.info(hasil5)