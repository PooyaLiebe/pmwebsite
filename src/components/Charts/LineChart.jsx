import React from "react";
import ReactApexChart from "react-apexcharts";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 dark:text-white rounded-3xl">
      <div id="chart" className="w-full ">
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
          height={350}
        />
      </div>
      <div id="html-dist" className="w-full"></div>
    </div>
  );
};

export default LineChart;
