function salary(input){
    let index = 0;
    let n = input[index];
    index++;
    let salary = input[index];
    index++;
    let tab = '';
    let fine = 0;

    for(let i = 0; i <= n; i++){
        tab = input[index];
        index++;
        switch(tab){
            case 'Facebook':
                fine += 150;
                break;
            case 'Instagram':
                fine += 100;
                break;
            case 'Reddit':
                fine += 50;
                break;
        }
        if(fine >= salary){
            console.log('You have lost your salary.');
            break;
        }
    }
    let diff = salary - fine;
    if(salary > fine){
        console.log(diff.toFixed(0));
    }
}
salary(["7",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"])