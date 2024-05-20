// ---мінімум---

// Напиши всі можливі варіанти створення функцій.

// Оголошення функції
// function sum(a, b) {
//   return a + b;
// }

// // Функціональний вираз
// let sum = function (a, b) {
//   return a + b;
// };

// // Cтрілкова функція
// let sum = (a, b) => a + b;

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function displayArguments(...arg) {
  console.log(`Кількість аргументів ${arg.length}`);
}

displayArguments();
displayArguments(1, 2, 3, 4, 5);

// Напиши функцію, яка приймає 2 числа і повертає значення
const compareNumbers = (a, b) => {
  return a < b ? -1 : a > b ? 1 : 0;
};

console.log(compareNumbers(1, 0));
console.log(compareNumbers(2, 10));
console.log(compareNumbers(3, 3));

// Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorialize(num) {
  if (num < 0) {
    console.log(
      "Oops... Factorial for negative number does not exist."
    );
  } else if (num == 0 || num === 1) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

console.log(factorialize(-5));
console.log(factorialize(0));
console.log(factorialize(5));
console.log(factorialize(6));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число
function sumNumber(...num) {
  console.log(Number(num.join("")));
  console.log(typeof Number(num.join("")));
}

sumNumber(5, 6, 3);
sumNumber(11, 15, 88);

//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.

function getArea(a, b) {
  return !b ? a * a : a * b;
}
console.log(getArea(2));
console.log(getArea(2, 3));

// -----норма-----

//  Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
function checkPerfectNumber(n) {
  if (n <= 0) {
    return false;
  }

  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum === n;
}

console.log(checkPerfectNumber(-5));
console.log(checkPerfectNumber(25));
console.log(checkPerfectNumber(6));

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими.
function displayPerfectNumbers(min, max) {
  let perfectNumbers = [];
  for (i = min; i <= max; i++) {
    if (checkPerfectNumber(i)) {
      perfectNumbers.push(i);
    }
  }
  return perfectNumbers;
}
console.log(displayPerfectNumbers(1, 10000));
