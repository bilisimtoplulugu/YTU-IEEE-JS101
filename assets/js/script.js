var testParagrafi = document.getElementById("test");
testParagrafi.innerHTML = "External'dan değiştiriyorum.";
testParagrafi.style.color = "red";
console.log("");

document.getElementById("mesaj-ver").onclick = function(){
    alert("mesaj ver e tiklandi")
}

// mesajVerButonu.onclick(function(){

//     alert("tiklandi");
// })

// tek satır için yorum satırı

/*
coklu
yorum
satırı
*/

// var kitapIsmi1;
// // var 1kitapismi;
// var $kitapismi;
// var _kitaismi;

// var Kitapismi = 5;
// var kitapismi = 2;
// console.log(kitapismi);
// console.log(Kitapismi);

// var sayi = 1;//1

// sayi = sayi + 1; //2
// sayi++;

// var sayi = 5;
// console.log(5 ** 2);

// var isim = "Ahmet ";
// var soyisim = "Cakici";
// console.log(isim + soyisim + 2);

// console.log("2" + 2);
// console.log(2 + 2 + "2");

// var cars = ["Saab", "Volvo", "BMW",1,1.5]; 
// console.log(cars[0]);

// var kisi = {
//     isim:"Ahmet",
//     yas:"20",
//     cinsiyet:"Erkek",
// }

// console.log(kisi.isim)

// var kisler = [ 
//     {isim:"Ahmet"},
//     {isim:"Mehmet"},
//     {isim:"Ali"},
//     {isim:"Ahmet"},
// ]

// var isim = "disari";
// console.log(isim);



// function tiklandigizaman(){
//     var isim = "disari";
// }

// console.log(isim)

// var person = {
//     firstName: "John",
//     lastName : "Doe",
//     fullName : function() {
//       console.log(this.firstName + " " + this.lastName);
//     }
//   };

// // console.log(person.fullName());
// person.fullName();

var rakam = 1;
var diger_rakam = "1";
if(rakam === diger_rakam) console.log("eşittir");
else console.log("eşit değil");