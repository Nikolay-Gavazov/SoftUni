function chat(input) {

    let massage = input.shift();
    let line = input.shift().split(':|:');

    while (line != 'Reveal') {
        let comand = line[0];

        switch (comand) {
            case 'InsertSpace':
                {
                    let index = Number(line[1]);
                    let firstHalf = massage.substring(index, 0);
                    let secondHalf = massage.substring(index);
                    massage = `${firstHalf} ${secondHalf}`
                    console.log(massage);
                }
                break;
            case 'Reverse':
                {
                    let string = line[1];
                    let reverse = string.split('').reverse().join('');

                    if (massage.includes(string)) {
                        massage = massage.replace(string, '').concat(reverse);
                        console.log(massage);
                    } else {
                        console.log('error');
                    }
                }
                break;
            case 'ChangeAll':
                {
                    let substring = line[1];
                    let replacement = line[2];
                    while (massage.includes(substring)) {
                        massage = massage.replace(substring, replacement);
                    }
                    console.log(massage);
                }
                break;
        }
        line = input.shift().split(':|:');
    }

    console.log(`You have a new text message: ${massage}`);
}
chat([ 'heVVodar!gniV', 
  
    'ChangeAll:|:V:|:l', 
  
    'Reverse:|:!gnil', 
  
    'InsertSpace:|:5', 
  
    'Reveal' ])