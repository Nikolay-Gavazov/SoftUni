function matrix(number){

    let result = '';

    function rows(){
        for(let i = 0; i < number; i++){
            result += `${number} `;
        }
        return result;
    }
    result = rows();

        for(let k = 0; k < number; k++){
            console.log(result);
        }

}
matrix(5)