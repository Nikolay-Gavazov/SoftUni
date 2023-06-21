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
    id: number,
    getUserName: () => string;
}

class AnotherUserClass implements AnotherUser{
    lastName: string;
    id: number;
    getUserName () {
        return this.lastName;
    }
}

const userList = [
    {lastName: 'Ivanov', id: 1},
    {lastName: 'Petrov', id: 2},
    {lastName: 'Dimitrov', id: 3},
] as AnotherUser[];

userList.forEach(({lastName, id}) => {
    console.log(`${id}: ${lastName}`);
    
});

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


function getIdentity<T>(id: T){
    console.log(id);
}
getIdentity<string>('123');
getIdentity<number>(123);

enum TransactionStatus{
    Initiated,
    Pending,
    Successful,
    Failed,
    Rejected
}

