function solution() {
  class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.tasks = [];
    }
    work() {
      const currentTask = this.tasks.shift();
      console.log(this.name + currentTask);
      this.tasks.push(currentTask);
    }

    collectSalary() {
      console.log(`${this.name} recived ${this.getSalary()} this month.`);
    }
    getSalary() {
      return this.salary;
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push(` is working on simple task.`);
    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push(` is working on a complicated task.`);
      this.tasks.push(` is taking time off work.`);
      this.tasks.push(` is supervising junior workers.`);
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.dividend = 0;
      this.tasks.push(` scheduled a meeting.`);
      this.tasks.push(` is preparing a quarterly report.`);
    }

    getSalary() {
      return this.salary + this.dividend;
    }
  }

  return {
    Junior,
    Senior,
    Manager,
  };
}

const classes = solution();

const junior = new classes.Junior("Ivan", 25);

junior.work();

junior.work();

junior.salary = 5811;

junior.collectSalary();

const sinior = new classes.Senior("Alex", 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();
sinior.salary = 12050;
sinior.collectSalary();
const manager = new classes.Manager("Tom", 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
