'use strict'

let rockets = [];

rockets[0] = new Rocket('32WESSDS');
rockets[1] = new Rocket('LDSFJA32');

for (let i of [10, 30, 80]) {
    rockets[0].addPropeller(i);
}

for (let i of [30, 40, 50, 50, 30, 10]) {
    rockets[1].addPropeller(i);
}

console.log(rockets[0].getSpeed());

let rocketContainer = document.querySelector('#rocketContainer');

let rocketCollection = [];

function createRocket(index) {
    let rocket = rockets[index];

    let rocketBtn = document.querySelector(`#rocket${index + 1}-btn`);
    rocketBtn.classList.add('disabled');

    if ( document.querySelector(`#rocket${index + 1}`) ) {
        return;
    }

    let rocketElem = document.createElement('div');
    let propellerLi = rocket.propellers.map((propeller) => {
        return `<li>Max power = ${propeller.maxPower}</li>`;
    });
    let style = `order-${index + 1}`
    rocketElem.classList.add('col-12', 'col-sm-6', 'mb-2', 'mx-0' , style);
    rocketElem.innerHTML = `<div>
    <div id='rocket${index + 1}' class='card'>
        <h2 class='card-header'><i class="fas fa-rocket"></i> Rocket ${index + 1}</h2>
        <div class='card-body'>
            <p class='card-text'>Code: ${rocket.code}</p>
            <p class='card-text'># Propellers: ${rocket.getPropellerNum()}</p>
            <ol>
                ${propellerLi.join('')}
            </ol>
            <p id='rocket${index + 1}Speed' class='card-text'>Current speed: ${rocket.getSpeed()}</p>
                <button class='btn btn-secondary mb-1' role='button' onclick='accelerateRocket(${index})'>Accelerate</button>
                <button class='btn btn-secondary mb-1' role='button' onclick='deccelerateRocket(${index})'>Deccelerate</button>
        </div>
    </div>
    </div>`;

    rocketContainer.appendChild(rocketElem);
}

function accelerateRocket(index) {
    let rocket = rockets[index];

    rocket.accelerate();

    let rocketElem = document.querySelector(`#rocket${index + 1}`);

    rocketElem.querySelector(`#rocket${index + 1}Speed`).textContent = `Current speed: ${rocket.getSpeed()}`;

}

function deccelerateRocket(index) {
    let rocket = rockets[index];

    rocket.deccelerate();

    let rocketElem = document.querySelector(`#rocket${index + 1}`);

    rocketElem.querySelector(`#rocket${index + 1}Speed`).textContent = `Current speed: ${rocket.getSpeed()}`;

}