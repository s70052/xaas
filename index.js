let money =10000
let name =prompt('Введите ваше имя');
if(name.toLowerCase().trim() !=='alex'){
    alert('Пользователь не найден');
} else{
    let num =prompt('номер счета ?');
  num=parseInt(num);

    if(num !== 7777){
        alert('Пользователь не найден');
    }else{
    let number =prompt('Сколько обналичить ?');
    number=parseInt(number);
 if(number >=0 && number <=10000){
    alert('все отлично');
    alert('cколько осталось?');
 alert('сколько снял?')
 }else{
    alert('Недостаточно средств')
 } 
}
}
// let a =prompt("введите вашу первую букву");

// if (a.charAt(0).toLowerCase()==="a"){
//     let old =prompt('Сколько вам лет ?');
//     old=parseInt(old);
//     if (old >=20 && old <=40){
//         let money =prompt("Сколько у вас денег ?")
//         money=parseInt(money);
//         if(money >=100){
//             let how_much=prompt('Сколько вас ?')
//             if(how_much <=10){
//                 alert('добро пожаловать')
//             }else{
//                 alert('dosvidos')
//             }
//         }
//     }
// }