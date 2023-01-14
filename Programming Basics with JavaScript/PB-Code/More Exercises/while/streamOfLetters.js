function streamOfLetters(input) {
    let index = 0;
    let comand = input[index];
    index++;

    let output = '';

    let c = 0;
    let o = 0;
    let n = 0;

    while (comand !== 'End') {
        if(comand === 'A','a','B','b','C','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m','N','O','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z'){
           output += comand; 
        }else if(comand === 'c'){
            c++;
        }else if(comand === 'o'){
            o++;
        }else if(comand === 'n'){
            n++;
        }
        if(c > 0 && o > 0 && n > 0){
            output += ' ';
        }
        if(comand === 'c' && c > 0){
            output+= comand;
        }else if(comand === 'o' && o > 0){
            output+= comand;
        }else if(comand === 'n' && n > 0){
            output+= comand;
        }
        comand = input[index];
        index++;
    }
}streamOfLetters(['H',
    'n',
    'e',
    'l',
    'l',
    'o',
    'o',
    'c',
    't',
    'c',
    'h',
    'o',
    'e',
    'r',
    'e',
    'n',
    'e',
    'End'
    ])