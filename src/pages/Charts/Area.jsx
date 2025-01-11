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
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg  rounded-3xl">
      <ChartsHeader category="Area" />
      <div id="chart" className="w-ful">
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
          height={350}
        />
      </div>
      <div id="html-dist" className="w-full"></div>
    </div>
  );
}

export default Area;
