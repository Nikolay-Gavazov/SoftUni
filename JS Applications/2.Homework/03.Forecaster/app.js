async function attachEvents() {
  const input = document.getElementById("location");
  const button = document.getElementById("submit");
  button.addEventListener("click", submit);
  const forecast = document.getElementById("forecast");
  const currentWeather = document.getElementById("current");
  const upcomingWeather = document.getElementById("upcoming");

  const condition = {
    Sunny: "&#x2600;", // ☀
    "Partly sunny": "&#x26C5;", // ⛅
    Overcast: "&#x2601;", // ☁
    Rain: "&#x2614;", // ☂
    Degrees: "&#176;", // °
  };

  async function submit() {
    let cityCode = "";
    try {
      const responce = await fetch(
        `http://localhost:3030/jsonstore/forecaster/locations`
      );
      if (responce.ok == false) throw Error;
      const data = await responce.json();
      const cityIndex = data.findIndex((el) => el.name == input.value);
      forecast.style.display = "block";
      if (cityIndex == -1) throw Error();

      cityCode = data[cityIndex].code;
    } catch (error) {}

    try {
      const responce = await fetch(
        `http://localhost:3030/jsonstore/forecaster/today/${cityCode}`
      );
      if (responce.ok == false) throw Error;
      const data = await responce.json();

      const div = document.createElement("div");
      div.className = "forecasts";
      div.innerHTML = `
            <span class='condition symbol'>${
              condition[data.forecast.condition]
            }</span>
            <span class='condition'>
            <span class='forecast-data'>${data.name}</span>
            <span class='forecast-data'>${data.forecast.low}&#176;/${
        data.forecast.high
      }&#176;</span>
            <span class='forecast-data'>${data.forecast.condition}</span>
            </span>
            `;
      currentWeather.appendChild(div);
    } catch (error) {}

    try {
      const responce = await fetch(
        `http://localhost:3030/jsonstore/forecaster/upcoming/${cityCode}`
      );
      if (responce.ok == false) throw Error;
      const data = await responce.json();
      const div = document.createElement("div");
      div.className = "forecast-info";

      const upcomingData = Object.values(data.forecast);
      for (const el of upcomingData) {
        const span = document.createElement("span");
        span.className = "upcoming";
        span.innerHTML = `
                <span class='symbol'>${condition[el.condition]}</span>
                <span class='forecast-data'>${el.low}&#176;/${
          el.high
        }&#176;</span>
                <span class='forecast-data'>${el.condition}</span>
                `;
        div.appendChild(span);
      }

      upcomingWeather.appendChild(div);
    } catch (error) {}
  }
}

attachEvents();
