// Мінімум
let nameSurname;
let fullName;
let displayName;
let full_name;

// example of incorrect name:
/*  
let Full Name;
let 1name+lastname;
let повне ім'я;  
*/

/*
Naming Conventions:
camelCase, PascalCase, snake_case 
*/


// Норма
let userName = prompt("Вкажи своє ім'я");
alert(`Привіт, ${userName}`);

let userAge = prompt("Вкажи свій рік народження");
const currentYear = 2024;
alert(`Тобі зараз ${currentYear - userAge}`);

let squareSide = prompt("Вкажи довжину сторони квадрату в см");
alert(`Периметр цього квадрата ${squareSide * 4} см`);


// Максимум
alert(`Розрахуємо площу окружності:`)
let radius = prompt("Вкажи радіус кола");
const numberPi = 3.14;
alert(`Площа такої окружності ${numberPi * radius * radius}`);

alert(`Далі порахуємо швидкість, з якою необхідно рухатися, щоб встигнути вчасно.`);
let distance = prompt("Вкажи в кілометрах відстань між двома містами");
let time = prompt("За скільки годин плануєш дістатися");
alert(`Необхідно рухатися зі швидкістю ${distance / time} км/год`);

alert(`Тепер конвертуємо долари в євро:`);
let dollars = prompt("Вкажи сумму в доларах");
const exchangeRate = 0.93;
alert(`Отримаєш ${dollars * exchangeRate} євро`);
