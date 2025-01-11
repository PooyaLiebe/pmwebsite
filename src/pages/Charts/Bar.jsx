/* eslint-disable no-unused-vars */
import React from "react";
import ReactApexChart from "react-apexcharts";
import { ChartsHeader } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

function BarsChartStacked() {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg  rounded-3xl">
      <ChartsHeader category="Bar" title="Forms Numbers in Month" />
      <div id="chart" className="w-ful">
        <ReactApexChart
          options={{
            chart: {
              id: "basic-bar",
            },
            xaxis: barPrimaryXAxis,
            yaxis: barPrimaryYAxis,
            background: currentMode === "Dark" ? "#33373E" : "#fff",
          }}
          series={barCustomSeries.map((series, index) => ({
            name: series.name,
            data: series.dataSource.map((item) => item.y),
          }))}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist" className="w-full"></div>
    </div>
  );
}

export default BarsChartStacked;
