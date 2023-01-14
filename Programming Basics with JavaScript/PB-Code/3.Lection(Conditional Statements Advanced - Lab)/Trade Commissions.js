function tradeCommissions(input){
    let  city = input[0];
    let sales = Number(input[1]);

    switch(city){
        case 'Sofia':
            if (0 <= sales && sales <= 500){
                let comm = sales * 0.05;
                console.log(comm.toFixed(2));
            }else if(500 < sales && sales <= 1000){
                let comm = sales * 0.07;
                console.log(comm.toFixed(2));
            }else if(1000 < sales && sales <= 10000){
                let comm = sales * 0.08;
                console.log(comm.toFixed(2));
            }else if (sales > 10000){
                let comm = sales * 0.12;
                console.log(comm.toFixed(2));
            }else if (sales < 0){
                console.log('error');
            
            }break;
        case 'Varna':
            if (0 <= sales && sales <= 500){
                let comm = sales * 0.045;
                console.log(comm.toFixed(2));
            }else if(500 < sales && sales <= 1000){
                let comm = sales * 0.075;
                console.log(comm.toFixed(2));
            }else if(1000 < sales && sales <= 10000){
                let comm = sales * 0.1;
                console.log(comm.toFixed(2));
            }else if (sales > 10000){
                let comm = sales * 0.13;
                console.log(comm.toFixed(2));
            }else if (sales < 0){
                console.log('error');
            }break;
        case 'Plovdiv':
            if (0 <= sales && sales <= 500){
                let comm = sales * 0.055;
                console.log(comm.toFixed(2));
            }else if(500 < sales && sales <= 1000){
                let comm = sales * 0.08;
                console.log(comm.toFixed(2));
            }else if(1000 < sales && sales <= 10000){
                let comm = sales * 0.12;
                console.log(comm.toFixed(2));
            }else if (sales > 10000){
                let comm = sales * 0.145;
                console.log(comm.toFixed(2));
            }else if (sales < 0){
                console.log('error');
            }break;
        default:
            console.log('error');
    }
}
tradeCommissions(["Kaspichan", "-50"])