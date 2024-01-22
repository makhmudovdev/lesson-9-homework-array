// function arrayNumber(n) {
//   let arr = [];

//   for (let i = 1; i <= n; i++) {
//     if (i % 5 == 0 && i % 3 == 0)
//     arr.push(i);
//   }

//   return arr;
// }

// let n = 100;
// let result = arrayNumber(n);

// console.log(result);




// let arr = []
// function sumtoq(n){
// let juft = 0
// let toq = 0
// for(let i=0 ; 
// }


// --------------------------------  homework ---------------------------//


// --------------------------------  10 masala ---------------------------//

// function engKichikJuft(arr) {

//     var juftIndeksArray = [];
//     for (var i = 0; i < arr.length; i += 2) {
//         juftIndeksArray.push(arr[i]);
//     }

//     var engKichik = juftIndeksArray[0];
//     for (var j = 1; j < juftIndeksArray.length; j++) {
//         if (juftIndeksArray[j] < engKichik) {
//             engKichik = juftIndeksArray[j];
//         }
//     }

//     return engKichik;
// }
// var testArray = [5, 2, 9, 1, 7, 4, 8, 3, 6];
// var natija = engKichikJuft(testMassiv);

// console.log("Massiv orasidagi juft indekslari ichidan eng kichigi: " + natija);



// --------------------------------  11 masala ---------------------------//


// function engKattaToq(arr) {
//     var toqIndeksArray = [];
//     for (var i = 1; i < arr.length; i += 2) {
//         toqIndeksArray.push(arr[i]);
//     }

//     var engKatta = toqIndeksArray[0];
//     for (var j = 1; j < toqIndeksArray.length; j++) {
//         if (toqIndeksArray[j] > engKatta) {
//             engKatta = toqIndeksArray[j];
//         }
//     }

//     return engKatta;
// }
// var testArray = [5, 2, 9, 1, 7, 4, 8, 3, 6];
// var natija = engKattaToq(testMassiv);

// console.log("Array orasidagi toq indekslari ichidan eng kattasi: " + natija);



// --------------------------------  12 masala ---------------------------//

// function ortaArifmetika(arr) {
//     var yigindi = 0;
//     var uzunlik = arr.length;

//     for (var i = 0; i < uzunlik; i++) {
//         yigindi += arr[i];
//     }
//     var ortaArifmetika = yigindi / uzunlik;

//     return ortaArifmetika;
// }
// var testArray = [5, 2, 9, 1, 7, 4, 8, 3, 6];
// var natija = ortaArifmetika(testMassiv);

// console.log("Arrayning o'rta arifmetikasi: " + natija);



// --------------------------------  13 masala ---------------------------//


// function toqIndeksElementlari(arr) {
//     var toqIndeksElementlari = [];
//     for (var i = 1; i < arr.length; i += 2) {
//         toqIndeksElementlari.push(arr[i]);
//     }

//     return toqIndeksElementlari;
// }
// var testArray = [5, 2, 9, 1, 7, 4, 8, 3, 6];
// var toqIndeksElements = toqIndeksElementlari(testMassiv);
// console.log("To'q indeksli elementlar: " + toqIndeksElements);




// --------------------------------  14 masala ---------------------------//


// function murakkabSonlar(arr) {
//     var murakkabSonlar = [];
//     for (var i = 0; i < arr.length; i++) {
//         var indeksStr = i.toString();
//         if (indeksStr.includes('1') || indeksStr.includes('4') || indeksStr.includes('6') || indeksStr.includes('8') || indeksStr.includes('9')) {
//             murakkabSonlar.push(arr[i]);
//         }
//     }
//     return murakkabSonlar;
// }
// var testArray = [5, 2, 9, 1, 7, 4, 8, 3, 6];
// var murakkabSonlarArrayi = murakkabSonlar(testArray);
// console.log("Indeksini murakkab sondan iborat bo'lgan elementlar: " + murakkabSonlarArrayi);



// --------------------------------  15 masala ---------------------------//


// function toqIndeksQiymatlar(arr) {
//     var toqIndeksQiymatlar = [];
//     for (var i = 1; i < arr.length; i += 2) {
//         toqIndeksQiymatlar.push(arr[i]);
//     }

//     return toqIndeksQiymatlar;
// }
// var testArray = [5, 2, 9, 1, 7, 4, 8, 3, 6];
// var toqIndeksQiymatlarArrayi = toqIndeksQiymatlar(testMassiv);
// console.log("Toq indeksdagi qiymatlar: " + toqIndeksQiymatlarArrayi);



// --------------------------------  16 masala ---------------------------//

// function stringQiymatlar(arr) {

//     var stringQiymatlar = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'string') {
//             stringQiymatlar.push(arr[i]);
//         }
//     }

//     return stringQiymatlar;
// }
// var testMassiv = [5, "salom", 9, "bu", 7, "string", 8, 3, "qiymatlar"];
// var stringQiymatlarArrayi = stringQiymatlar(testArray);
// console.log("String tipidagi qiymatlar: " + stringQiymatlarArrayi);



// --------------------------------  17 masala ---------------------------//


// function tengQiymatlar(a, b) {
//     if (a.length !== b.length) {
//         return "Arraylarning uzunligi teng emas.";
//     }
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] !== b[i]) {
//             return "Arraylarning " + (i + 1) + "-chi indeksidagi qiymatlar bir xil emas: " + a[i] + " ≠ " + b[i];
//         }
//     }

//     return "Arraylarning barcha elementlari bir xil.";
// }
// var a = [1, 2, 3, 4, 5];
// var b = [1, 2, 3, 4, 5];
// var natija = tengQiymatlar(a, b);
// console.log(natija);



// --------------------------------  18 masala ---------------------------//



// var n = prompt("Array uzunligini kiriting:");
// n = parseInt(n);
// var array = [];
// for (var i = 0; i < n; i++) {
//     var qiymat = prompt((i + 1) + "-chi indeksdagi qiymatni kiriting:");
//     array.push(parseInt(qiymat));
// }
// console.log("Yaratilgan array: " + array);



// --------------------------------  19 masala ---------------------------//


// var n = prompt("Massiv uzunligini kiriting:");
// n = parseInt(n);
// var massiv = [];
// for (var i = 0; i < n; i++) {
//     var qiymat = prompt((i + 1) + "-chi indeksdagi qiymatni kiriting:");
//     massiv.push(parseInt(qiymat));
// }
// var yigindi = 0;
// for (var j = 0; j < massiv.length; j++) {
//     yigindi += massiv[j];
// }

// console.log("Yaratilgan massiv: " + massiv);
// console.log("Massiv yig'indisi: " + yigindi);



// --------------------------------  20 masala ---------------------------//


// var n = prompt("Massiv uzunligini kiriting:");
// n = parseInt(n);
// var massiv = [];
// for (var i = 0; i < n; i++) {
//     var qiymat = prompt((i + 1) + "-chi indeksdagi qiymatni kiriting:");
//     massiv.push(parseInt(qiymat));
// }
// var tip = prompt("Juft yoki toq kiriting (juft/toq):");
// var ajratilganMassiv = [];
// for (var j = 0; j < massiv.length; j++) {
//     if ((tip === 'juft' && j % 2 === 0) || (tip === 'toq' && j % 2 !== 0)) {
//         ajratilganMassiv.push(massiv[j]);
//     }
// }
// console.log(tip.charAt(0).toUpperCase() + tip.slice(1) + " indekslardagi qiymatlar: " + ajratilganMassiv);


// --------------------------------  homework end ---------------------------//








