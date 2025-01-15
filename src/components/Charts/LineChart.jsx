/* eslint-disable no-unused-vars */
import React from "react";
import ReactApexChart from "react-apexcharts";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
import ChartsHeader from "../ChartsHeader";

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <div>
      <ChartsHeader category="Line" title="Forms Numbers in Month" />
      <div id="chart" className="overflow-hidden justify-center">
        <ReactApexChart
          options={{
            chart: {
              id: "basic-line",
            },
            xaxis: LinePrimaryXAxis,
            yaxis: LinePrimaryYAxis,
            background: currentMode === "Dark" ? "#33373E" : "#fff",
          }}
          series={lineCustomSeries.map((series) => ({
            name: series.name,
            data: series.dataSource.map((item) => item.y),
          }))}
          type="line"
          height={300}
        />
      </div>
    </div>
  );
};

export default LineChart;
