import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const dailyUrl = "https://disease.sh/v3/covid-19/all";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(dailyUrl);
    const modifiedData = {
      todayCases: data.todayCases,
      todayRecovered: data.todayRecovered,
      todayDeaths: data.todayDeaths,
    };
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};
