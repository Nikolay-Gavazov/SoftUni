const isOpen: boolean = true;
const age: number = 21;
const firstName: string = 'Ivan';
const users: object = {id: 12};
const numbers: number[] = [1, 2, 3];

type User = {
    name: string;
    age: number
}

const ivanUser = {
    name: 'Ivan',
    age: 30,
} as User

interface AnotherUser{
    lastName: string,
    id: number
}

const userList = [
    {lastName: 'Ivanov', id: 1},
    {lastName: 'Petrov', id: 2},
    {lastName: 'Dimitrov', id: 3},
] as AnotherUser[];

class Human {
    speack(){
        console.log('Hello there!');
        
    }
}

class Person extends Human {
    private name: string;
    age: number;

    constructor(name: string, age: number){
        super();
        this.name = name;
        this.age = age;
    }
}


const personMitko = new Person('Mitko', 20);
personMitko.speack();