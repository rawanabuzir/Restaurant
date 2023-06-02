'use strict';

function Food(id, name, type, price) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
}

Food.prototype.render = function () {
    const table = document.getElementById('foodTable');
    const row = document.createElement('tr');
    const idCell = document.createElement('td');
    idCell.textContent = this.id;
    row.appendChild(idCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = this.name;
    row.appendChild(nameCell);

    const typeCell = document.createElement('td');
    typeCell.textContent = this.type;
    row.appendChild(typeCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = this.price;
    row.appendChild(priceCell);

    table.appendChild(row);
};

function renderData() {

    const localData = JSON.parse(localStorage.getItem('foodData')) || [];
    for (const foodData of localData) {
        const food = new Food(foodData.id, foodData.name, foodData.type, foodData.price);
        food.render();

    }
}
document.addEventListener('DOMContentLoaded', function () {
    renderData();
});
