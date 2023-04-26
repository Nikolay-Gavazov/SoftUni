function oscars(input) {
    let index = 0;
    let name = input[index];
    index++;
    let pointsFromAcademy = Number(input[index]);
    index++;
    let n = Number(input[index]);
    index++;
    
    let jury = "";
    let pointsCounter = 0;
    let pointsFromJury = 0;
    let totalPoints = 0;
    for(let i=0; i<n; i++){
      jury = input[index];
      index++;
        pointsFromJury = input[index];
      index++;
      pointsCounter += (jury.length * pointsFromJury) / 2;
      totalPoints = pointsCounter + pointsFromAcademy;
      if(totalPoints >= 1250.5){
      console.log(`Congratulations, ${name} got a nominee for leading role with ${totalPoints.toFixed(1)}!`)
                  break;
      }
    }
    let diff = 1250.5 - totalPoints;
    if(totalPoints < 1250.5){
    console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`)
    }
  }
  oscars(["Zahari Baharov",

  "205",
  
  "4",
  
  "Johnny Depp",
  
  "45",
  
  "Will Smith",
  
  "29",
  
  "Jet Lee",
  
  "10",
  
  "Matthew Mcconaughey",
  
  "39"])