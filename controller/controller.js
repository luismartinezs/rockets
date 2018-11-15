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

// for (let i in rockets) {
//     rockets[i].accelerate().accelerate().accelerate();
// }

// rockets[0].deccelerate().deccelerate().deccelerate().deccelerate().deccelerate();
// rockets[1].accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate();

// for (let i=0; i<15; i++) {
//     rockets[0].accelerate();
//     rockets[1].accelerate();
// }

rockets.forEach( (rocket) => {
    let rocketElem = document.createElement('div');
    let propellerLi = rocket.propellers.map( (propeller) => {
        return `<li>Max power = ${propeller.maxPower}</li>`;
    });
    rocketElem.classList.add('col');
    rocketElem.innerHTML = `<div class='col'>
    <div id='rocket${rockets.indexOf(rocket)}' class='card'>
        <h2 class='card-header'>Rocket ${rockets.indexOf(rocket)}</h2>
        <div class='card-body'>
            <p class='card-text'>Code: ${rocket.code}</p>
            <p class='card-text'># Propellers: ${rocket.getPropellerNum()}</p>
            <ol>
                ${propellerLi.join('')}
            </ol>
            <p class='card-text'>Current speed: ${rocket.getSpeed()}</p>
        </div>
    </div>
    </div>`;

    rocketContainer.appendChild(rocketElem);
})

