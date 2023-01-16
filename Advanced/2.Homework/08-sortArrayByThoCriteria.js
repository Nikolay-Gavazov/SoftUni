function sortArrayByThoCriteria(array){

    array.sort((a, b) => a.length - b.length || a.localeCompare(b))
    console.log(array.join('\n'));

}
sortArrayByThoCriteria(['Isacc', 'Theodor','Jack', 'Harrison', 'George'])