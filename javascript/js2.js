// function sumNumber ( a, b)
// {
//     return a + b;
//     // return tra ve ket qua cho ham -- thoat khoi ham
// }
// // su dung ham
// let sum = sumNumber(3, 4);
// console.log(sum);

// let kiemTraChanLe = function(n)
// {
//     if(n%2==0)
//     {
//         return true;
//     }
//     return false;    
// }

// let myNumber = 10;
// if(kiemTraChanLe(myNumber))
// {
//     console.log('so chan');
// }
// else
// {
//     console.log('so le');
// }
//viet ham kiem tra tu 30-70 co bao nhieu so nguyen to
let count =0;
function checkSnt(n)
{
    var check = true;
    if (n < 2){
        check = false;
    }
    else{
        for (var i = 2; i <n/2; i++)
        {
            if (n % i == 0){
                check = false;
                break;
            }
        }
      }
      return check;
}
for (let index = 30; index <= 70; index++) {
  if (checkSnt(index)) {
    count ++;
  }
 }
 console.log(count);
