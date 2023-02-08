class List{
    constructor(){
        this.arr = [];
        this.size = this.arr.length;
    }

    add(element){
        this.arr.push(element);
        this.arr = this.arr.sort((a,b) => a-b);
        this.size = this.arr.length;
    }
    remove(index){
        if(this.arr.indexOf(index)){
            this.arr = this.arr.splice(index, 1);
        }
        this.size = this.arr.length;
    }
    get(index){
        if(this.arr.indexOf(index)){
            return this.arr[index]
        }
    }
    size(){
        return this.size;
    }
}

let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));
list.remove(1); 
console.log(list.get(1));
console.log(list.size);