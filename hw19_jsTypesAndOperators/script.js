
//мінімум 
 
let sum = 0.1 + 0.2;
console.log(sum.toFixed(1));

let a = "1";
let b = 2;
console.log(Number(a) + b);

let flashSize = prompt("Вкажи обсяг флешки в Гб");
let sizeInMb = flashSize * 1024;
let filesNumber = Math.trunc(sizeInMb / 820);
alert(`Hа флешку поміщається ${filesNumber}`);

//Норма

let userMoney = prompt("Вкажи скільки грошей у гаманці");
let chocolatePrice = prompt("Вкажи ціну шоколадки");
let amount = Math.trunc(userMoney / chocolatePrice);
let rest = userMoney - (chocolatePrice * amount);
alert(`Отримаєш ${amount} шоколадок та ${rest} решти`);

let userNumber = prompt("Вкажи тризначне число");
let reversedNumber =  userNumber.toString().split('').reverse().join('');
alert(`${reversedNumber}`);

// максимум

let userInvestment = prompt("Вкажи суму вкладу");
let percent = 0.05; 
let term = 61;  //два місяці по 30 і 31 дні
let yearDays = 365;
let profit = ((userInvestment * percent) / yearDays) * term;
alert(`Отримаєш ${profit.toFixed(2)}`);

// 2 && 0 && 3 - виведе 0 
//  2 || 0 || 3 - виведе 2 
//  2 && 0 || 3 - виведе 3 
