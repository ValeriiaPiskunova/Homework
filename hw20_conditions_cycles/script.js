// -----мінімум-----

// завдання 1

let age = prompt("Вкажи свій вік")
if (age < 0 || age > 100) {
    alert('помилка');
} else if (age < 12) {
    alert ('ти дитина');
} else if (age < 18) {
    alert ('ти підліток');
} else if (age < 60) {
    alert ('ти дорослий');
} else if (age < 100) {
    alert ('ти пенсіонер');
}


// завдання 2

let number = Number(prompt("Вкажи від 0 до 9"));

switch (number) {
    case 0:
        alert(')');
        break;
    case 1:
        alert('!');
        break;
    case 2:
        alert( '@' );
        break;
    case 3:
        alert( '#' );
        break;
    case 4:
        alert( '$' );
        break;
    case 5:
        alert( '%' );
        break;
    case 6:
        alert( '^' );
        break;
     case 7:
        alert( '&' );
        break;
     case 8:
        alert( '*' );
        break;
     case 9:
        alert( '(' );
        break;
    default:
        alert(':(')
        break;
}


// завдання 3

let x = Number(prompt("Вкажи перше число"));
let y = Number(prompt("Вкажи друге число"));
let sum = 0;

while (x <= y)
{
    if(x <= y)
    {
      sum+=x;
    }

     x++;
}
alert(sum);


// завдання 4

let a = Number(prompt("Вкажи перше число"));
let b = Number(prompt("Вкажи друге число"));
let c = 1;

for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
        c = i;
    }
}
alert(c);


// завдання 5

let d = Number(prompt("Вкажи число щоб знайти всі його дільники"));
let e = 1;

for (let i = 1; i <= d; i++) {
    if (d % i === 0) {
        e = i;
        alert(e);
    }
}


// -----норма-----

// завдання 1

let f = Number(prompt("Вкажи п’ятирозрядне число"));
let ref = 0;
    let temp = f;
    while(f > 0)
    {
        ref = ref * 10 + f % 10;
        f = Math.floor(f / 10);
    }
    if(ref === temp)
    {
        alert ("Паліндром");
    } else {
        alert ("Не паліндром");
}
    

// завдання 2

let price = prompt("Вкажи суму покупки");
let finalPrice = 0;
 if (price < 200) {
     finalPrice = price;
 } else if (price < 300) {
     finalPrice = price - (price * 0.03);
 } else if (price < 500) {
     finalPrice = price - (price * 0.05);
 } else if (price > 500) {
     finalPrice = price - (price * 0.07);
 }
alert(`Сума до сплати зі знижкою ${finalPrice}`);
 

// завдання 3

let userInput = "-1, -2, 0, 1, 2, 3, 4, 5";//prompt("Вкажи 10 чисел через кому");
let numbers = userInput.split(',');
let odd = 0;
let even = 0;
let zeros = 0;
let positive = 0;
let negative = 0;

for (i = 0; i < numbers.length; i++) {
    let parsedNumber = Number(numbers[i]);
    if (parsedNumber === 0) {
        zeros++
    } else {
        if ((parsedNumber % 2) === 0) {
            odd++
        } else if ((parsedNumber % 2) !== 0) {
            even++
        }
        if (parsedNumber > 0) {
            positive++
        } else {
            negative++
        }
    }
}
console.log(`парних ${odd}, непарних ${even}, нулів ${zeros}, додатніх ${positive}, від’ємних ${negative}`);


// завдання 4

//  let days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];

// let i = 0;
// while (i < days.length) {
//   alert(`${days[i]}. Хочеш побачити наступний день?` );
//     i++;
//     if (i === days.length) {
//         i = 0;
//    }
// }
