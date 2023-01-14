function number100200(input) {
    
    let num = Number(input[0]);

    if (num < 100) {
        console.log("Less than 100");
    }

    if (num >= 100 && num <=200) {
        console.log("Between 100 and 200")
    }
    if (num > 200) {
        console.log("Greater than 200");
    }
}
number100200(["201"])