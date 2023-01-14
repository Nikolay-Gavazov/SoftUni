function rightPlace(first, char, second){

    let fixed = first.replace('_', char);
    let output = fixed === second? 'Matched' : 'Not Matched';
    console.log(output);

}
rightPlace('Str_ng', 'I',

'Strong')