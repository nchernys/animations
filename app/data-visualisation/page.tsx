import React from "react";
import BarChart from "./charts/barChart";
import PieChart from "./charts/pieChart";
import styles from "./chart.module.css";
import ScatterChart from "./charts/scatterChart";
import ReturnHome from "../components/return-home/returnHome";

const Chart = () => {
  return (
    <>
      <div className={styles.container}>
        <ReturnHome color={"#ffffff4d"} />
        <h1>Data Visualization</h1>
        <div className={styles.chartsWrapper}>
          <div className={styles.barchart}>
            <BarChart />
          </div>
          <div className={styles.piechart}>
            <PieChart />
          </div>
          <div className={styles.scatterchart}>
            <ScatterChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
