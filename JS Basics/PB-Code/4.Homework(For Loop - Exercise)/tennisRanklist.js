function tennisRanklist(input) {
    let index = 0;
    let turnirs = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let stage = "";
    let points = 0;
    let wins = 0;
    
    for(let i=0; i< turnirs; i++){
      stage = input[index];
      index++
      switch(stage){
        case "W":
          wins++;
          points += 2000;
          break;
        case "F":
          points += 1200;
          break;
        case "SF":
          points += 720;
          break;
      }
    }
    
    
    let totalPoints = startPoints + points;
    let averagePoints = Math.floor(points / turnirs);
    let averageWins = (wins/ turnirs) * 100;
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${averageWins.toFixed(2)}%`)
  }
  tennisRanklist(["4",

  "750",
  
  "SF",
  
  "W",
  
  "SF",
  
  "W"])