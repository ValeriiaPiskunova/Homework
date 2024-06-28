class Marker {
  constructor(color, inkPercentage) {
    this.color = color;
    this.inkPercentage = inkPercentage;
  }

  print(text) {
    let printableText = "";
    for (let char of text) {
      if (char !== " ") {
        if (this.inkPercentage >= 0.5) {
          printableText += char;
          this.inkPercentage -= 0.5;
        } else {
          break;
        }
      } else {
        printableText += char;
      }
    }
    console.log(`%c${printableText}`, `color: ${this.color}`);
  }
}

class RefillableMarker extends Marker {
  refill(inkAmount) {
    this.inkPercentage += inkAmount;
    if (this.inkPercentage > 100) {
      this.inkPercentage = 100;
    }
  }
}

const myMarker = new RefillableMarker("red", 10);
myMarker.print("Hello, World!");
myMarker.print("More text to print");
console.log(`Remaining ink: ${myMarker.inkPercentage}`);

myMarker.refill(20);
console.log(`Ink after refill: ${myMarker.inkPercentage}`);
myMarker.print(
  "Just some text to print and test refill functionality"
);
console.log(`Remaining ink: ${myMarker.inkPercentage}`);

const refillableMarker = new RefillableMarker("blue", 15);
refillableMarker.print("New refilled marker");
refillableMarker.refill(5);
console.log(`Ink after refill: ${refillableMarker.inkPercentage}`);
