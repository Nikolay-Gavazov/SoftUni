function vacation (people, group, day){

    let price = 0;

    let totalPrice = 0;

    switch(group){
        case 'Students':
            switch(day){
                case 'Friday':
                    price = 8.45;
                    break;
                case 'Saturday':
                    price = 9.8;
                    break;
                case 'Sunday':
                    price = 10.46;
                    break;
            }
            if(people >= 30){
                totalPrice = (price * people) * 0.85;
            }else{
                totalPrice = price * people;
            }
            break;
        
        case 'Business':
            switch(day){
                case 'Friday':
                    price = 10.9;
                    break;
                case 'Saturday':
                    price = 15.6;
                    break;
                case 'Sunday':
                    price = 16;
                    break;
            }
            if(people >= 100){
                people -= 10;
                totalPrice = price * people
            }else{
                totalPrice = price * people;
            }
            break;

        case 'Regular':
            switch(day){
                case 'Friday':
                    price = 15;
                    break;
                case 'Saturday':
                    price = 20;
                    break;
                case 'Sunday':
                    price = 22.5;
                    break;
            }
            if(people >= 10 && people <= 20){
                totalPrice = (price * people) * 0.95;
            }else{
                totalPrice = price * people;
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation(30,

    "Students",
    
    "Sunday")