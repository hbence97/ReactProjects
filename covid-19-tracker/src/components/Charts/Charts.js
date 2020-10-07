/*
import React, { useState, useEffect } from "react";
//import { Line } from "react-chartjs-2";
import { fetchDailyData } from "../../api";

//import styles from "./Charts.module.css";

const Charts = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const initialDailyData = await fetchDailyData();
      setDailyData(initialDailyData);
    };

    //console.log(dailyData);
    fetchAPI();
  });

    const lineChart = (
    <Line
      data={{
        labels: dailyData,
        datasets: [
          {
            data: dailyData.confirmed,
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.deaths,
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  );

    const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(data => data.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(data => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  

  //lineChart();
  return <h1>Chart</h1>;
};

export default Charts;
*/
