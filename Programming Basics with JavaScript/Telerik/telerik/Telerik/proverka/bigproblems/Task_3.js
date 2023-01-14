let arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1]
let i,
        temp,
        streak,
        length = arr.length,
        highestStreak = 0;
    for(i = 0; i < length; i++) {
        // check the value of the current entry against the last
        if(temp != '' && temp == arr[i]) {
            // it's a match
            streak++;
        } else {
            // it's not a match, start streak from 1
            streak = 1;
        }
        // set current letter for next time
        temp = arr[i];
        // set the master streak var
        if(streak > highestStreak) {
            highestStreak = streak;
        }
    }
console.log(highestStreak);