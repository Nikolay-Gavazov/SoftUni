function houseParty(array){

    let comand = [];
    let length = array.length;
    let name = '';
    let list = [];

    for(let i = 0; i < length; i++){
        comand = array.slice(i, i+1).join(' ').split(' ');
        name = comand[0];
        if(comand.length < 4){
            if(!list.includes(name)){
                list.push(name);
            }else{
                console.log(`${name} is already in the list!`);
            }
        }else{
            if(list.includes(name)){
                let index = list.indexOf(name);
                list.splice(index, index+1);
            }else{
                console.log(`${name} is not in the list!`);
            }
        }
        
        comand = [];
    }

    console.log(list.join(`\n`));
}
houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])