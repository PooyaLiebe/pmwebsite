/* eslint-disable no-unused-vars */
import React from "react";
import ReactApexChart from "react-apexcharts";
import { ChartsHeader } from "..";
import { useStateContext } from "../../contexts/ContextProvider";
import { pieChartData } from "../../data/dummy"; // Importing the data

function PieChart() {
  const { currentMode } = useStateContext();

  return (
    <div>
      <ChartsHeader category="Pie" title="Forms Numbers in Month" />
      <div id="chart" className="overflow-hidden">
        <ReactApexChart
          options={{
            legend: {
              display: false,
            },
            chart: {
              id: "basic-pie",
            },
            background: currentMode === "Dark" ? "#33373E" : "#fff",
            labels: pieChartData.map((item) => item.x), // Adding labels for the pie chart
          }}
          series={pieChartData.map((item) => item.y)} // Using the imported data
          type="pie"
          height={300}
        />
      </div>
      <div id="html-dist" className="w-full text-white"></div>
    </div>
  );
}

export default PieChart;
