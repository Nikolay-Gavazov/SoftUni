class Company{
    constructor(){
        this.departments = [];
    }
    addEmployee(name, salary, position, department){
        if(!name || !salary || !position || !department){
            throw new Error('Invalid input!');
        }else{
            if(!this.departments[department]){
                let totalSalary = 0;
                this.departments[department] = [];
                this.departments[department].push(totalSalary);
            }
            
            this.departments[department].push({name,salary,position});
            this.departments[department][0] += salary
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment(){
        const avgDep = {};
        Object.keys(this.departments).forEach(key => {
            const avg = this.departments[key].reduce((acc, curr) => acc + curr.salary, 0) / this.departments[key].length;
            avgDep[key] = avg;
        });
    }

}



let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());