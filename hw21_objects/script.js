// мінімум

let car = {
  brand: "Fiat",
  model: "Abarth 595",
  manufactureYear: "2020",
  speedAvg: "150",
  fuelVolume: "35",
  fuelConsumptionAvg: "7.1",
  drivers: ["Alex"],

  //    Виводить на екран інформацію про автомобіль.

  displayInfo() {
    console.log(`Виробник: ${this.brand}`);
    console.log(`Модель: ${this.model}`);
    console.log(`Рік випуску: ${this.manufactureYear}`);
    console.log(`Середня швидкість: ${this.speedAvg} км/год`);
    console.log(`Обсяг паливного баку: ${this.fuelVolume} л`);
    console.log(
      `Середня витрата палива: ${this.fuelConsumptionAvg} л на 100 км`
    );
    console.log(`Водії: ${this.drivers}`);
  },

  // Додавання ім’я водія у список

  addDrivers(newDriver) {
    if (!this.drivers.includes(newDriver)) {
      this.drivers.push(newDriver);
      console.log(`${newDriver} доданий до списку водіїв.`);
    } else {
      console.log(`${newDriver} вже є у списку.`);
    }
  },

  // Перевірка водія на наявність у списку

  checkDrivers(newDriver) {
    if (this.drivers.includes(newDriver)) {
      console.log(`${newDriver} вже є у списку водіїв.`);
    } else {
      console.log(`${newDriver} немає у списку водіїв.`);
    }
  },

  // Підрахунок необхідного часу та кількості палива

  tripCalculation(distance) {
    timeWithoutRest = Number(distance / car.speedAvg);
    countOfRestings = Math.floor(timeWithoutRest / 4);
    generalTimeOfTrip = timeWithoutRest + countOfRestings;
    fuelNeeded = Number((distance / 100) * car.fuelConsumptionAvg);
    console.log(
      `Для подолання відстані ${distance} (в км) необхідно ${fuelNeeded.toFixed(
        1
      )} літрів палива, поїздка займе ${generalTimeOfTrip.toFixed(
        1
      )} год з них відпочинок ${countOfRestings} год.`
    );
  },
};

car.displayInfo();

car.addDrivers("Andrii");
car.addDrivers("Mariia");
car.addDrivers("Mariia");
car.addDrivers("Alex");

car.checkDrivers("Alex");
car.checkDrivers("Max");
car.checkDrivers("Mariia");

car.tripCalculation(200);
car.tripCalculation(700);
car.tripCalculation(750);
car.tripCalculation(1500);

//норма

const today = new Date();

function displayTime(day) {
  hours = day.getHours();
  minutes = day.getMinutes();
  seconds = day.getSeconds();
  console.log(
    `Поточний час ${hours} годин, ${minutes} хвилин і ${seconds} секунд. `
  );
}

function changeHours(hoursToAdd) {
  today.setHours(today.getHours() + hoursToAdd);
}

function changeMinutes(minutesToAdd) {
  today.setMinutes(today.getMinutes() + minutesToAdd);
}

function changeSeconds(secondsToAdd) {
  today.setSeconds(today.getSeconds() + secondsToAdd);
}

displayTime(today);
changeHours(2);
changeMinutes(30);
changeSeconds(75);
console.log(today);
