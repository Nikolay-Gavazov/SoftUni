class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (!this.goals.hasOwnProperty(peak)) {
      this.goals[peak] = altitude;
      return `You have successfully added a new goal - ${peak}`;
    }
    return `${peak} has already been added to your goals`;
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals.hasOwnProperty(peak)) {
      throw Error(`${peak} is not in your current goals`);
    }
    if (this.resources == 0) {
      throw Error("You don't have enough resources to start the hike");
    }
    const resource = time * 10;
    const diff = this.resources - resource;
    if (diff < 0) {
      return "You don't have enough resources to complete the hike";
    }

    this.listOfHikes.push({ peak, time, difficultyLevel });
    this.resources -= resource;
    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    this.resources += time * 10;
    if (this.resources >= 100) {
      this.resources = 100;
      return "Your resources are fully recharged. Time for hiking!";
    }
    return `You have rested for ${time} hours and gained ${
      time * 10
    }% resources`;
  }

  showRecord(criteria) {
    if (this.listOfHikes.length == 0) {
      return `${this.username} has not done any hiking yet`;
    }
    if (criteria == "hard") {
      const find = this.listOfHikes.filter((e) => e.difficultyLevel == "hard");
      if (find.length == 0) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }
      find.sort((a, b) => a.time - b.time);
      return `${this.username}'s best ${criteria} hike is ${find[0].peak} peak, for ${find[0].time} hours`;
    } else if (criteria == "easy") {
      const findEasy = this.listOfHikes.filter(
        (e) => e.difficultyLevel == "easy"
      );
      if (findEasy.length == 0) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }
      findEasy.sort((a, b) => a.time - b.time);
      return `${this.username}'s best ${criteria} hike is ${findEasy[0].peak} peak, for ${findEasy[0].time} hours`;
    } else {
      if (this.listOfHikes.length == 0) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }
      const result = [];
      result.push("All hiking records:");
      this.listOfHikes.forEach((el) => {
        result.push(`${this.username} hiked ${el.peak} for ${el.time} hours`);
      });
      return result.join("\n");
    }
  }
}

const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");

console.log(user.showRecord("easy"));

user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");

console.log(user.showRecord("hard"));

user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
