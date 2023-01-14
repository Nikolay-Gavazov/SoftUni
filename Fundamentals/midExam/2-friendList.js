function friendList(input) {

    let nameList = input.shift().split(', ');
    let lines = input.shift().split(' ');
    let blackListedCounter = 0;
    let lostCounter = 0;
    while (lines != 'Report') {
        let comand = lines[0];

        switch (comand) {
            case 'Blacklist':
                let name = lines[1];
                let index = nameList.indexOf(name);
                if (index > -1) {
                    nameList[index] = 'Blacklisted';
                    console.log(`${name} was blacklisted.`);
                    blackListedCounter++
                } else {
                    console.log(`${name} was not found.`);
                }
                break;
            case 'Error':
                let errorIndex = Number(lines[1]);
                if (errorIndex >= 0 && errorIndex < nameList.length) {
                    if (nameList[errorIndex] != 'Blacklisted' && nameList[errorIndex] != 'Lost') {
                        console.log(`${nameList[errorIndex]} was lost due to an error.`);
                        nameList[errorIndex] = 'Lost';
                        lostCounter++;

                    }
                }
                break;
            case 'Change':
                let changeIndex = Number(lines[1]);
                let newName = lines[2];
                if (changeIndex >= 0 && changeIndex < nameList.length) {
                    console.log(`${nameList[changeIndex]} changed his username to ${newName}.`);
                    nameList[changeIndex] = newName;
                }
        }
        lines = input.shift().split(' ');
    }

    console.log(`Blacklisted names: ${blackListedCounter}`);
    console.log(`Lost names: ${lostCounter}`);
    console.log(nameList.join(' '));

}
friendList(["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Report"])
