import axios from "axios";

export const fetchData = async () => {
  const url = "https://covid19.mathdro.id/api";

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
