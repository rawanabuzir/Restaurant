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

document.getElementById('foodForm').addEventListener('submit',
    function (event) {
        event.preventDefault();

        const foodId = new Food().generateId();
        const foodName = document.getElementById('foodName').value;
        const foodType = document.getElementById('foodType').value;
        // const foodPrice = document.getElementById('price').value;
        // const foodPrice = parseInt(document.getElementById('price').value);
        const foodPrice = parseFloat(document.getElementById('price').value);



        const food = new Food(foodId, foodName, foodType, foodPrice);


        food.render();
    });
