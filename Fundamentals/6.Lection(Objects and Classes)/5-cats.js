function cats(arr){

    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }


    for(let line of arr){
        let cats = line.split(' ');
        let name = cats[0];
        let age = cats[1];

        let cat = new Cat(name, age)
        cat.meow();
    }

}
cats(['Mellow 2', 'Tom 5'])