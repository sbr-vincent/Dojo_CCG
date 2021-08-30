class Card {
    constructor(name,cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name,cost, power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }

    attack( target ){
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play( target ){
        console.log(this.stat);
        if(Object.keys(this.stat) == "resilience"){
            console.log("Banna");
            target.res += this.stat.resilience * this.magnitude;
        }
        else{
            console.log("Peanut Butter");

            target.power += this.stat.power * this.magnitude;
        }
    }
}

const red = new Unit('Red_Belt_Ninja', 3, 3,4);
const black = new Unit('Black_Belt_Ninja', 4, 5,4);
const hard = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", {"resilience": 1}, 3);
const unhandled = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", {"resilience": -1}, 2);
const programming = new Effect("Pair Programming", 3, "increase target's power by 2", {"power": -1}, 2);



console.log(red);
hard.play(red);
console.log(red);

unhandled.play(red);
console.log(red);

programming.play(red);
console.log(red);

console.log(black);
red.attack(black)
console.log(black);




