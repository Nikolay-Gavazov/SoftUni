function charactersInRange(firstChar, secondChar){

    let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let rangeEnd = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let result = [];

    for(let i = rangeStart + 1; i < rangeEnd; i++){
        let currentChar = String.fromCharCode(i);
        result.push(currentChar);
    }

    console.log(result.join(' '));

}
charactersInRange('#',':')