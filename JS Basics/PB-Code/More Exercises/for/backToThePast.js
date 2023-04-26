function backToThePast(input){
    let money = Number(input[0]);
    let year = Number(input[1]);
    let yearsOfIvancho = 18;
    let spentMoney = 0;
    
    for(let i=1800; i<= year; i++){
      
      if(i % 2 === 0){
      spentMoney += 12000;
      }else{
      spentMoney += (12000 + (yearsOfIvancho * 50));  
      }
      yearsOfIvancho++
    }
    if(money >= spentMoney){
      let diff = money - spentMoney;
    console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`);
    }else{
    let diff = spentMoney - money;
    console.log(`He will need ${diff.toFixed(2)} dollars to survive.`)
    }
    
  }
  backToThePast([100000.15,
    1808
    ])