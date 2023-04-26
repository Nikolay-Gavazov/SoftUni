function listProcessor(input) {
    let result = [];
    const comands = {
        add: (str) => result.push(str),
        remove: (str) => result = result.filter(function(item){return item !=str}),
        print: () => console.log(result.join(','))
    }
    input.forEach(el => {
        const [command, str] = el.split(' ');
        
    });
}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])