// мінімум

function Car(
  brand,
  model,
  manufactureYear,
  speedAvg,
  fuelVolume,
  fuelConsumptionAvg,
  drivers
) {
  this.brand = brand;
  this.model = model;
  this.manufactureYear = manufactureYear;
  this.speedAvg = speedAvg;
  this.fuelVolume = fuelVolume;
  this.fuelConsumptionAvg = fuelConsumptionAvg;
  this.drivers = drivers;

  //    Виводить на екран інформацію про автомобіль.
  this.displayInfo = () => {
    console.log(`Виробник: ${this.brand}`);
    console.log(`Модель: ${this.model}`);
    console.log(`Рік випуску: ${this.manufactureYear}`);
    console.log(`Середня швидкість: ${this.speedAvg} км/год`);
    console.log(`Обсяг паливного баку: ${this.fuelVolume} л`);
    console.log(
      `Середня витрата палива: ${this.fuelConsumptionAvg} л на 100 км`
    );
    console.log(`Водії: ${this.drivers}`);
  };

  // Додавання ім’я водія у список
  this.addDrivers = (newDriver) => {
    if (!this.drivers.includes(newDriver)) {
      this.drivers.push(newDriver);
      console.log(`${newDriver} доданий до списку водіїв.`);
    } else {
      console.log(`${newDriver} вже є у списку.`);
    }
  };

  // Перевірка водія на наявність у списку
  this.checkDrivers = (newDriver) => {
    if (this.drivers.includes(newDriver)) {
      console.log(`${newDriver} вже є у списку водіїв.`);
    } else {
      console.log(`${newDriver} немає у списку водіїв.`);
    }
  };

  // Підрахунок необхідного часу та кількості палива
  this.tripCalculation = (distance) => {
    timeWithoutRest = Number(distance / this.speedAvg);
    countOfRestings = Math.floor(timeWithoutRest / 4);
    generalTimeOfTrip = timeWithoutRest + countOfRestings;
    fuelNeeded = Number((distance / 100) * this.fuelConsumptionAvg);
    console.log(
      `Для подолання відстані ${distance} (в км) необхідно ${fuelNeeded.toFixed(
        1
      )} літрів палива, поїздка займе ${generalTimeOfTrip.toFixed(
        1
      )} год з них відпочинок ${countOfRestings} год.`
    );
  };
}

let abarth = new Car(
  "Fiat",
  "Abarth 595",
  "2020",
  "150",
  "35",
  "7.1",
  ["Alex"]
);

abarth.displayInfo();

abarth.addDrivers("Andrii");
abarth.addDrivers("Mariia");
abarth.addDrivers("Mariia");
abarth.addDrivers("Alex");

abarth.checkDrivers("Alex");
abarth.checkDrivers("Max");
abarth.checkDrivers("Mariia");

abarth.tripCalculation(200);
abarth.tripCalculation(700);
abarth.tripCalculation(750);
abarth.tripCalculation(1500);

// норма

function DateHelper(date) {
  this.date = date;

  this.displayTime = () => {
    hours = this.date.getHours();
    minutes = this.date.getMinutes();
    seconds = this.date.getSeconds();
    console.log(
      `Поточний час ${hours} годин, ${minutes} хвилин і ${seconds} секунд.`
    );
  };

  this.changeHours = (hoursToAdd) => {
    this.date.setHours(this.date.getHours() + hoursToAdd);
  };

  this.changeMinutes = (minutesToAdd) => {
    this.date.setMinutes(this.date.getMinutes() + minutesToAdd);
  };

  this.changeSeconds = (secondsToAdd) => {
    this.date.setSeconds(this.date.getSeconds() + secondsToAdd);
  };
}

const dateTimeNow = new Date();
let dateHelper = new DateHelper(dateTimeNow);

dateHelper.displayTime();

dateHelper.changeHours(2);
dateHelper.changeMinutes(30);
dateHelper.changeSeconds(75);

console.log(dateTimeNow);
