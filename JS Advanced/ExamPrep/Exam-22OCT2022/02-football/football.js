class footballTeam {
  constructor(name, country) {
    this.name = name;
    this.country = country;
    this.invitedPlayers = [];
    this.invited = [];
  }
  newAdditions(footballPlayers) {
    footballPlayers.forEach((el) => {
      let [name, age, value] = el.split("/");
      age = Number(age);
      value = Number(value);
      if (!this.invitedPlayers.find((e) => e.name == name)) {
        this.invited.push(name);
        this.invitedPlayers.push({ name, age, value });
      }
      for (const el of this.invitedPlayers) {
        if (el.name == name) {
          if (el.value < value) {
            el.value = value;
          }
        }
      }
    });
    return `You successfully invite ${this.invited.join(", ")}.`;
  }

  signContract(selectedPlayer) {
    let [selectedName, offer] = selectedPlayer.split("/");
    offer = Number(offer);

    if (!this.invited.includes(selectedName)) {
      throw Error(`${selectedName} is not invited to the selection list!`);
    }

    for (const el of this.invitedPlayers) {
      if (el.name == selectedName) {
        if (el.value > offer) {
          const priceDifference = el.value - offer;
          throw Error(
            `The manager's offer is not enough to sign a contract with ${selectedName}, ${priceDifference} million more are needed to sign the contract!`
          );
        } else {
          el.value = "Bought";
        }
      }
    }
    return `Congratulations! You sign a contract with ${selectedName} for ${offer} million dollars.`;
  }

  ageLimit(name, age) {
    if (!this.invited.includes(name)) {
      throw Error(`${selectedName} is not invited to the selection list!`);
    }

    for (const el of this.invitedPlayers) {
      if (el.name == name) {
        const diff = age - el.age;
        if (diff <= 0) {
          return `${name} is above age limit!`;
        } else if (diff < 5) {
          return `${name} will sign a contract for ${diff} years with ${this.name} in ${this.country}!`;
        } else {
          return `${name} will sign a full 5 years contract for ${this.name} in ${this.country}!`;
        }
      }
    }
  }

  transferWindowResult() {
    const result = [];
    result.push("Players list:");
    for (let el of this.invitedPlayers) {
      result.push(`Player ${el.name}-${el.value}`);
    }

    return result.join("\n");
  }
}

let fTeam = new footballTeam("Barcelona", "Spain");

console.log(
  fTeam.newAdditions([
    "Kylian Mbappé/23/160",
    "Lionel Messi/35/50",
    "Pau Torres/25/52",
  ])
);

console.log(fTeam.ageLimit("Lionel Messi", 33));

console.log(fTeam.ageLimit("Kylian Mbappé", 30));

console.log(fTeam.ageLimit("Pau Torres", 26));

console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.transferWindowResult());
