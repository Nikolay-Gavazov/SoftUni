let input = [
    '754',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = Number(gets());
let firstNumber = 0;
let firstWord = "";
let secondNumber = 0;
let secondWord = "";
let thirdNumber = 0;
let thirdWord = "";

if (number < 20) {

    switch (number) {
        case 0:
            print("Zero");
            break;
        case 1:
            print("One");
            break;
        case 2:
            print("Two");
            break;
        case 3:
            print("Three");
            break;
        case 4:
            print("Four");
            break;
        case 5:
            print("Five");
            break;
        case 6:
            print("Six");
            break;
        case 7:
            print("Seven");
            break;
        case 8:
            print("Eight");
            break;
        case 9:
            print("Nine");
            break;
        case 10:
            print("Ten");
            break;
        case 11:
            print("Eleven");
            break;
        case 12:
            print("Twelve");
            break;
        case 13:
            print("Thirteen");
            break;
        case 14:
            print("Fourteen");
            break;
        case 15:
            print("Fifteen");
            break;
        case 16:
            print("Sixteen");
            break;
        case 17:
            print("Seventeen");
            break;
        case 18:
            print("Eighteen");
            break;
        case 19:
            print("Nineteen");
    }

} else if (number < 100) {

    firstNumber = Math.floor(number / 10);
    secondNumber = number % 10;

    switch (firstNumber) {
        case 2:
            firstWord = "Twenty";
            break;
        case 3:
            firstWord = "Thirty";
            break;
        case 4:
            firstWord = "Forty";
            break;
        case 5:
            firstWord = "Fifty";
            break;
        case 6:
            firstWord = "Sixty";
            break;
        case 7:
            firstWord = "Seventy";
            break;
        case 8:
            firstWord = "Eighty";
            break;
        case 9:
            firstWord = "Ninety";
            break;
    }

    switch (secondNumber) {
        case 1:
            secondWord = "one";
            break;
        case 2:
            secondWord = "two";
            break;
        case 3:
            secondWord = "three";
            break;
        case 4:
            secondWord = "four";
            break;
        case 5:
            secondWord = "five";
            break;
        case 6:
            secondWord = "six";
            break;
        case 7:
            secondWord = "seven";
            break;
        case 8:
            secondWord = "eight";
            break;
        case 9:
            secondWord = "nine";
            break;
    }

    if (secondNumber === 0) {
        print(firstWord);
    } else {
        print(firstWord + " " + secondWord);
    }
} else {
    firstNumber = Math.floor(number / 100);
    secondNumber = Math.floor( number / 10) % 10;
    thirdNumber = number % 10;

    switch (firstNumber) {
        case 1:
            firstWord = "One";
            break;
        case 2:
            firstWord = "Two";
            break;
        case 3:
            firstWord = "Three";
            break;
        case 4:
            firstWord = "Four";
            break;
        case 5:
            firstWord = "Five";
            break;
        case 6:
            firstWord = "Six";
            break;
        case 7:
            firstWord = "Seven";
            break;
        case 8:
            firstWord = "Eight";
            break;
        case 9:
            firstWord = "Nine";
            break;
    }

    if (secondNumber === 1) {
        let ending = number % 100;
        let endingWord = '';

        switch (ending) {
            case 10:
                endingWord = "ten";
                break;
            case 11:
                endingWord = "eleven";
                break;
            case 12:
                endingWord = "twelve";
                break;
            case 13:
                endingWord= "thirteen";
                break;
            case 14:
                endingWord= "fourteen";
                break;
            case 15:
                endingWord= "fifteen";
                break;
            case 16:
                endingWord= "sixteen";
                break;
            case 17:
                endingWord= "seventeen";
                break;
            case 18:
                endingWord= "eighteen";
                break;
            case 19:
                endingWord= "nineteen";
        }
        print(`${firstWord} hundred and ${endingWord}`);

    } else {
        switch (secondNumber) {
            case 2:
                secondWord = "twenty";
                break;
            case 3:
                secondWord = "thirty";
                break;
            case 4:
                secondWord = "forty";
                break;
            case 5:
                secondWord = "fifty";
                break;
            case 6:
                secondWord = "sixty";
                break;
            case 7:
                secondWord = "seventy";
                break;
            case 8:
                secondWord = "eighty";
                break;
            case 9:
                secondWord = "ninety";
                break;

        }

        switch (thirdNumber) {
            case 1:
                thirdWord = "one";
                break;
            case 2:
                thirdWord = "two";
                break;
            case 3:
                thirdWord = "three";
                break;
            case 4:
                thirdWord = "four";
                break;
            case 5:
                thirdWord = "five";
                break;
            case 6:
                thirdWord = "six";
                break;
            case 7:
                thirdWord = "seven";
                break;
            case 8:
                thirdWord = "eight";
                break;
            case 9:
                thirdWord = "nine";
                break;
        }

        if (thirdNumber === 0 && secondNumber === 0) {
            print(`${firstWord} hundred`);
        } else if (thirdNumber === 0) {
            print(`${firstWord} hundred and ${secondWord}`);
        } else  if (secondNumber === 0) {
            print(`${firstWord} hundred and ${thirdWord}`);
        } else {
            print(`${firstWord} hundred and ${secondWord} ${thirdWord}`);
        }
    }

}


