import "./marker.js";
import "./employee.js";

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value;
  }

  get diameter() {
    return this._radius * 2;
  }

  area() {
    return Math.PI * Math.pow(this._radius, 2);
  }

  circumference() {
    return 2 * Math.PI * this._radius;
  }
}

const circle = new Circle(4);
console.log(`Радіус кола: ${circle.radius}`);
console.log(`Діаметр кола: ${circle.diameter}`);
console.log(`Площа кола: ${circle.area().toFixed(2)}`);
console.log(`Довжина кола: ${circle.circumference().toFixed(2)}`);

circle.radius = 5;
console.log(`Новий радіус кола: ${circle.radius}`);
console.log(`Новий діаметр кола: ${circle.diameter}`);
console.log(`Нова площа кола: ${circle.area().toFixed(2)}`);
console.log(
  `Нова довжина кола: ${circle.circumference().toFixed(2)}`
);
