function passwordGuess(input) {
    let pass = (input[0]);
    let password = ("s3cr3t!P@ssw0rd");

    if (pass == password) {
        console.log('Welcome');
    } 

    else {
        console.log('Wrong password!');
    }

}
passwordGuess(["s3cr3t!P@ssw0rd"])