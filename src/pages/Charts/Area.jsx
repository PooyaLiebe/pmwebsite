/* eslint-disable no-unused-vars */
import React from "react";
import ReactApexChart from "react-apexcharts";
import { ChartsHeader } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";

function Area() {
  const { currentMode } = useStateContext();

  return (
    <div>
      <ChartsHeader category="Area" />
      <div id="chart">
        <ReactApexChart
          options={{
            chart: {
              id: "basic-area",
            },
            xaxis: areaPrimaryXAxis,
            yaxis: areaPrimaryYAxis,
            background: currentMode === "Dark" ? "#33373E" : "#fff",
          }}
          series={areaCustomSeries.map((series, index) => ({
            name: series.name,
            data: series.dataSource.map((item) => item.y),
          }))}
          type="area"
          height={300}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default Area;
