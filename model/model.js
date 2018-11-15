'use strict'

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
        return this.propellers.reduce((sum, elem) => {return sum += elem.currentPower}, 0)
    }

    accelerate() {
        this._propellers.forEach( (propeller) => {
            propeller.accelerate();
        })
        return this;
    }

    deccelerate() {
        this._propellers.forEach( (propeller) => {
            propeller.deccelerate();
        })
        return this;
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
        if (this._currentPower < this._maxPower - 10) {
            this._currentPower += 10;
        } else {
            this._currentPower = this._maxPower;
        }
    }

    deccelerate() {
        if (this._currentPower > 10) {
            this._currentPower -= 10;
        } else {
            this._currentPower = 0;
        }
    }
}