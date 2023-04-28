function worldTour(input) {

    let destinations = input.shift()
    let tempString = ''

    let line = input.shift().split(':');

    while (line != 'Travel') {
        const comand = line[0];

        switch (comand) {
            case 'Add Stop':
                let index = line[1];
                let string = line[2];
                if (index >= 0 && index < destinations.length) {
                    let fistHalf = destinations.substring(index, 0);
                    let secondHalf = destinations.substring(index);
                    destinations = tempString.concat(fistHalf, string, secondHalf);
                }
                console.log(destinations);
                break;
            case 'Remove Stop':
                let startIndex = Number(line[1]);
                let endIndex = Number(line[2]);
                if (startIndex >= 0 && startIndex < destinations.length && endIndex >= 0 && endIndex < destinations.length) {
                    tempString = destinations.substring(startIndex, (endIndex + 1));
                    destinations = destinations.replace(tempString, '')
                }
                console.log(destinations);
                break;
            case 'Switch':
                let oldString = line[1];
                let newString = line[2];
                if(destinations.includes(oldString)){
                    destinations = destinations.replace(oldString,newString);
                }
                console.log(destinations);
                
        }
        line = input.shift().split(':');
    }

    console.log(`Ready for world tour! Planned stops: ${destinations}`);

}
worldTour(["Albania:Bulgaria:Cyprus:Deuchland:Albania:gosho:Albania", 

"Add Stop::Nigeria", 

"Remove Stop:0:1", 

"Switch:Albania: Azərbaycan", 

"Travel"])