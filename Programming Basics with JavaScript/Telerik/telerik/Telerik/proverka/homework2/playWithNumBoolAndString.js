const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("close", function() {
    process.exit(0);
});

 console.log(`Please choose a type:	
 1 --> number	
 2 --> boolean	
 3 --> string`)
 
 let input = [
    `1`
];

  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let x = +gets();


  switch(x)
{
    case 1: "number"
    rl.question("Please enter a number: ", function(number) {
            number++;
            console.log(`${number}`);
            rl.close();
    });
        break;

    case 2: "boolean"
        // Please enter a boolean: true, false
        rl.question("Please enter a boolean: true, false:", function(boolean) {
            console.log(`${boolean}`);
            rl.close();
        });
        break;
        

    case 3: "string"
        // Please enter a string:
        rl.question("Please enter a string: ", function(string) {
            console.log(`${string}*`);
            rl.close();
        });
        break;

    default:
        console.log("Looking for bugs?")
}
 