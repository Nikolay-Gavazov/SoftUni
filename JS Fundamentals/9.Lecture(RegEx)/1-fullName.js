function fullName(input) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let validNames = input.match(pattern);

    console.log(validNames.join(' '));



}
fullName("ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov")