class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        target.res -= this.power;
        return this;
    }
}

class Effect extends Card {
    constructor(name, cost, buff, stat, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.buff = buff;
        this.magnitude = magnitude;
        this.text = `${this.buff} the targets ${this.stat} by ${this.magnitude}`
    }

    play(target) {
        if (target instanceof Unit) {
            if (this.buff == "Raise") {
                if(this.stat == "power"){
                    target.power += this.magnitude;
                    return this;
                }
                target.res += this.magnitude;
                return this;
            }
            if(this.stat =="power"){
                target.power -= this.magnitude;
                return this;
            }
            target.res -= this.magnitude;
            return this;
        }else{
            throw new Error("Target must be a unit!")
        }
    }
}

const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
const unit2 = new Unit("Black Belt Ninja", 4,5,4);
const effect1 = new Effect("Hard Algorithm",2,"Raise","res",3);
const effect2 = new Effect("Unhadled Promise Rejection",1,"Lower", "res",2);
const effect3 = new Effect("Pair programming",3,"Raise","power",2);

console.log(unit1);
effect1.play(unit1);
console.log(unit1);
effect2.play(unit1);
console.log(unit1);
effect3.play(unit1);
console.log(unit1);
console.log(unit2);
unit1.attack(unit2);
console.log(unit2);