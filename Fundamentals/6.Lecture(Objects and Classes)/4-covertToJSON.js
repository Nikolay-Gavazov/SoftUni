function covertToJSON(firstName, lastName, hair){

    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hair,
    }

    console.log(JSON.stringify(person));

}

covertToJSON('George', 'Jones',

'Brown')