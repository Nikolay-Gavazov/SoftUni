function extensibleObject(){
     function ExtensibleObject(){}
     ExtensibleObject.prototype.extend = function(temp){
        Object.entries(temp).forEach(([key, value])=> {
            if(value instanceof Function){
                Object.getPrototypeOf(this)[key] = value;
            }else{
                this[key] = value;
            }
        });
    }
    return new ExtensibleObject();
}

const myObj = extensibleObject();
console.log(myObj);

const temp = {
    extensionMethod : function(){

    },
    extensionProperty: 'asd'
}
myObj.extend(temp);
console.log(myObj);