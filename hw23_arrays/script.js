// ---мінімум---

// Створи масив «Список покупок».
function Product(productName, amount, isBought, priceForOne) {
  this.productName = productName;
  this.amount = amount;
  this.isBought = isBought;
  this.priceForOne = priceForOne;
  this.sum = this.priceForOne * amount;
}

let bread = new Product("Bread", 2, true, 30);
let showerGel = new Product("Shower gel", 1, false, 80);
let shampoo = new Product("Shampoo", 1, false, 120);
let butter = new Product("Butter", 2, false, 90);
let iceCream = new Product("Ice cream", 5, true, 20);

let anotherIceCream = new Product("Ice cream", 3, true, 20);
let cocaCola = new Product("Coca Cola", 3, true, 23);

let shoppingList = [bread, showerGel, shampoo, butter, iceCream];

// Функція виводить весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
function displayProducts(productList) {
  return productList.sort((a, b) => a.isBought - b.isBought);
}
console.log(displayProducts(shoppingList));

// Функція приймає назву продукту і відзначає його як придбаний.
function buyProduct(productList, productName) {
  return productList.map((product) => {
    if (product.productName === productName) {
      product.isBought = true;
    }
    return product;
  });
}
console.log(buyProduct(shoppingList, "Butter"));

// ---норма---

// Видалення продукту зі списку
function removeProduct(productList, productName) {
  return productList.filter(
    (prod) => prod.productName !== productName
  );
}
shoppingList = removeProduct(shoppingList, "Shampoo");
console.log(shoppingList);

// Додавання покупки в список.
function addProduct(productList, product) {
  let productFound = productList.find(
    (prod) => prod.productName === product.productName
  );

  if (productFound) {
    productFound.amount += product.amount;
    productFound.sum += product.sum;
  } else {
    productList.push(product);
  }
  return productList;
}
console.log(addProduct(shoppingList, anotherIceCream));
console.log(addProduct(shoppingList, cocaCola));
