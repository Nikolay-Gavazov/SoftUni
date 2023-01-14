function trekkingMania(input) {
    let index = 0;
    let groups = Number(input[index]);
    index++;
    let people = 0;
    
    let musala = 0;
    let montblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    
    for(let i=0; i<groups; i++){
      people += Number(input[index]);
        let group = Number(input[index]);
        index++;
        if(group <= 5){
          musala += group;
        }else if(group > 5 && group <= 12){
        montblan += group;
        }else if(group > 12 && group <= 25){
        kilimanjaro += group;
        }else if(group > 25 && group <= 40){
        k2 += group;
        }else{
          everest += group;
        }
      }
        let procentMusala = (musala / people) * 100;
        let procentMontblan = (montblan / people) * 100;
        let procentKilimanjaro = (kilimanjaro / people) * 100;
        let procentK2 = (k2 / people) * 100;
        let procentEverest = (everest / people) * 100;
                           
        console.log(`${procentMusala.toFixed(2)}%`);
        console.log(`${procentMontblan.toFixed(2)}%`);
        console.log(`${procentKilimanjaro.toFixed(2)}%`);
        console.log(`${procentK2.toFixed(2)}%`);
        console.log(`${procentEverest.toFixed(2)}%`);
  }
  trekkingMania(["5",

  "25",
  
  "41",
  
  "31",
  
  "250",
  
  "6"])