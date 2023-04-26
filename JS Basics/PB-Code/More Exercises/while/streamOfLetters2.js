function streamOfLetters2(input) {
    let index = 0;
    let comand = input[index];
    index++;

    let output = '';

    let c = 0;
    let o = 0;
    let n = 0;
    let result = '';

    while (comand !== 'End') {
        switch (comand) {
            case 'A':
                output += comand;
                break;
            case 'a':
                output += comand;
                break;
            case 'B':
                output += comand;
                break;
            case 'b':
                output += comand;
                break;
            case 'C':
                output += comand;
                break;
            case 'D':
                output += comand;
                break;
            case 'd':
                output += comand;
                break;
            case 'E':
                output += comand;
                break;
            case 'e':
                output += comand;
                break;
            case 'F':
                output += comand;
                break;
            case 'f':
                output += comand;
                break;
            case 'G':
                output += comand;
                break;
            case 'g':
                output += comand;
                break;
            case 'H':
                output += comand;
                break;
            case 'h':
                output += comand;
                break;
            case 'I':
                output += comand;
                break;
            case 'i':
                output += comand;
                break;
            case 'J':
                output += comand;
                break;
            case 'j':
                output += comand;
                break;
            case 'K':
                output += comand;
                break;
            case 'k':
                output += comand;
                break;
            case 'L':
                output += comand;
                break;
            case 'l':
                output += comand;
                break;
            case 'M':
                output += comand;
                break;
            case 'm':
                output += comand;
                break;
            case 'N':
                output += comand;
                break;
            case 'O':
                output += comand;
                break;
            case 'P':
                output += comand;
                break;
            case 'p':
                output += comand;
                break;
            case 'Q':
                output += comand;
                break;
            case 'q':
                output += comand;
                break;
            case 'R':
                output += comand;
                break;
            case 'r':
                output += comand;
                break;
            case 'S':
                output += comand;
                break;
            case 's':
                output += comand;
                break;
            case 'T':
                output += comand;
                break;
            case 't':
                output += comand;
                break;
            case 'U':
                output += comand;
                break;
            case 'u':
                output += comand;
                break;
            case 'V':
                output += comand;
                break;
            case 'v':
                output += comand;
                break;
            case 'W':
                output += comand;
                break;
            case 'w':
                output += comand;
                break;
            case 'X':
                output += comand;
                break;
            case 'x':
                output += comand;
                break;
            case 'Y':
                output += comand;
                break;
            case 'y':
                output += comand;
                break;
                case 'Z':
                    output += comand;
                    break;
                    case 'z':
                        output += comand;
                        break;
            case 'c':
                c++;
                break;
            case 'o':
                o++;
                break;
            case 'n':
                n++;
                break;
        }
        
        if(c >= 1 && o >= 1 && n >= 1){
            output += ' ';
            result += output;
            c = 0;
            o = 0;
            n = 0;
            output = '';
        }
        if(comand === 'c' && c === 2){
            output += comand;
        }else if(comand === 'o' && o === 2){
            output += comand;
        }else if(comand === 'n' && n === 2){
            output += comand;
        }
        comand = input[index];
        index++;
    }
    console.log(result);
}
streamOfLetters2(['H',
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
