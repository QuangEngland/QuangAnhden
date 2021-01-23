// symbol data
// let id = Symbol('id-code');
// console.log(id);
// let id2 = Symbol('iname-code');
// if(id == id2 || id === id2) 
// {
//     console.log('Ok');
// } 
// else
// {
//     console.log('No');
// }   
// console.log(id.description);

// let a = Symbol('test');
// let b = Symbol.for('test');
// let c = Symbol.for('test');
// if (c == b || c === b)
// {
//     console.log('y');
// }
// else
// {
//     console.log('N');
// }
// ************** ARRAY JS **************
// let arrFruice = new Array('cam' ,'xoai' ,'dua' ,'mia');
// let arrFruice2 = ['cam' ,'xoai' ,'dua' ,'mia'];
// console.log(arrFruice , arrFruice2);
// let arrNumber = [1,2,3, [100,200,300], 5, 6 , [1,2,3] ];
// let arrNumber2 = new Array (1,2,3, Array(100,200,300), 5, 6 ,  Array(1,2,3));
// let count = arrFruice2.length;
// console.log(count);
 // truy cap vao 1 phan tu trong mang
 // cu phap: nameArray[key] key: vitri ( chi so) cua phan tu trong mang (bat dau tu 0)
//  console.log(arrFruice[3]);
//  console.log(arrNumber2[6][2]);
 
//  let number = [1,2,3,4,5,6,7,8,9];
//  for(let i = 0 ; i< number.length; i++ )
//  {
//     console.log(number[i]);
//  }
//  number.forEach(function(e , i, a)
//  {
//     console.log(`value: ${e} - key: ${i}`);
//  });
//  for(let j of number)
//  {
//      console.log(j);
//  }
// let number2 = [1,2,3,4,5,6,7,8,9];
// number2.push(100);
// console.log(number2);
// // let lastNum = number2.pop();
// // console.log(number2);
// // console.log(lastNum);

// let firtNum = number2.shift();
// console.log(firtNum, number2);

// let number3 = [1,2,3,4,5,6,7,8,9];
// let newArr = number3.slice(2,4);
// // console.log(newArr);
//  let newArr1 = number3.splice(3,3, 100, 200,300);
//  console.log(number3 ,newArr1);
// let number3 = [1,2,3,4,5,6,7,8,9];
// let string = number3.join('*');
// console.log(string, typeof string);
// let string1 = number3.toString();
// console.log(string1, typeof string1);
// // chuyen chuoi ve array
// let myArray = string1.split(',');
// console.log(myArray);
// // kiem tra xem co phai array
// if(Array.isArray(myArray))
// {
//     console.log('OKKK');
// }
// else
// {
//     console.log('Qa dz');
// }
// sap xep tang dan
// let randomNumber = [100,23,4,66,11,532,6,1];
// randomNumber.sort((a,b) => b - a);
// console.log(randomNumber);
// let s = randomNumber.filter( e => e % 3===0);
// console.log(s);
// function demo(arr ,n)
// {
//     let result = [];
//     for(let i = 0; i< arr.length ; i++)
//     {
//         if(arr[i] % n === 0)
//         {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// let s2 = demo(randomNumber, 3);
// let category = ['home', 'contact', 'about'];
// let menu =` 
// <ul>
//     ${
//         category.map((item, index) =>(`
//         <li key=${index}>
//         <a href= "#">${item}</a></li>`) )
//     }
// </ul>
// `;
// console.log(menu);
let randomNumber = [100,5,6,8,11,66,16,55];