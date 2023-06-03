'use strict';

function Food(id, name, type, price) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
}

Food.prototype.generateId = function () {
    let randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return randomNumber;
};

document.getElementById('foodForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const localData = JSON.parse(localStorage.getItem('foodData')) || [];
    const foodId = new Food().generateId();
    const foodName = event.target.foodName.value;
    const foodType = document.getElementById('foodType').value;
    const foodPrice = parseFloat(document.getElementById('price').value);
    const food = new Food(foodId, foodName, foodType, foodPrice);

    localData.push(food);
    localStorage.setItem('foodData', JSON.stringify(localData)); //+++ JSON.stringify() method converts a JavaScript object or array into a JSON string

    event.target.foodName.value = '';
    event.target.foodPrice.value = '';
});

document.getElementById('clearButton').addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.removeItem('foodData');
});
