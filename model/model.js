'use strict';

class Rocket {
    constructor(code) {
        this._code = code;
        this._propellers = [];
    }

    get code() {
        return this._code;
    }

    getPropellerNum() {
        return this._propellers.length;
    }

    addPropeller(maxPower) {
        this._propellers.push(new Propeller(maxPower));
    }

    get propellers() {
        return this._propellers;
    }

    getSpeed() {
        return this.propellers.reduce((sum, elem) => {return sum += elem.currentPower}, 0);
    }

    accelerate() {
        this._propellers.forEach( (propeller) => {
            propeller.accelerate();
        })
    }

    deccelerate() {
        this._propellers.forEach( (propeller) => {
            propeller.deccelerate();
        })
    }

}

class Propeller {
    constructor(maxPower) {
        this._maxPower = maxPower;
        this._currentPower = 0;
    }

    get maxPower() {
        return this._maxPower;
    }

    get currentPower() {
        return this._currentPower;
    }

    accelerate() {
        this._currentPower += 10;
        if (this._currentPower > this._maxPower) {
            this._currentPower = this._maxPower;
        }
    }

    deccelerate() {
        this._currentPower -= 10;
        if (this._currentPower < 0) {
            this._currentPower = 0;
        }
    }
}