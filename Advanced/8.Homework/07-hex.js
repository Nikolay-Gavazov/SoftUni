class Hex{
    constructor(value){
        this.value = value
    }

    toString(){`0X${this.num.toString(16).toUpperCase()}`}
    valueOf(){
        return this.value
    }
    plus(number){
        this.value += number;
    }
    minus(number){
        this.value += number;
    }
}

let FF = new Hex(255);

console.log(FF.toString());

FF.valueOf() + 1 == 256;

let a = new Hex(10);

let b = new Hex(5);

console.log(a.plus(b).toString());

console.log(a.plus(b).toString()==='0xF');

console.log(FF.parse('AAA'));