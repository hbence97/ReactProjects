import React from "react";
import { CardsDaily, CardsTotal } from "./components";
import styles from "./App.module.css";
import { fetchDailyData, fetchData } from "./api";

export default class App extends React.Component {
  state = {
    data: {},
    dailyData: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    const fetchedDailyData = await fetchDailyData();
    this.setState({
      data: fetchedData,
      dailyData: fetchedDailyData,
    });
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1>Total Stats</h1>
          <CardsTotal data={this.state.data} />
        </div>

        <div className={styles.container}>
          <h1>Daily stats</h1>
          <CardsDaily data={this.state.dailyData} />
        </div>
      </div>
    );
  }
}
