// let n = '10';
// n= Number.parseFloat(n); //ep so
// let m = 20;
// let s = n - m;
// console.log(s);
// let time = `21:30`;
// let mess = `bay gio la ${time} \n quang anh den`; // ${} dung de truyen tham so vao chuoi
// let upperString = mess.toUpperCase();
// console.log(mess , upperString);
let myString = 'Dang om vai chuong';
// let pos = myString.indexOf('ng');
// console.log (pos);
// //tach chuoi;
// let newMyStr = myString.slice(2,-5);
// console.log(newMyStr);
// let newMyStr2 = myString.replace('Dang', 'Quang Anh dang om');
// console.log(newMyStr2);
let str1 = "hello";
let str2 = "sinn";
let str3 = str1 + str2;
let str4 = str1.concat(str2);
console.log(str1 ,str2 , str3 , str4);

function test(a, ...b)
{
    return a + b;
}
 let s123 = test(1,2,3,4,5,6);
 console.log(s123);