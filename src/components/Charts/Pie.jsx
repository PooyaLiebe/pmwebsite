import React from "react";
import ReactApexChart from "react-apexcharts";
import { ChartsHeader } from "..";
import { useStateContext } from "../../contexts/ContextProvider";
import { pieChartData } from "../../data/dummy"; // Importing the data

function PieChart() {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10  mt-24 p-10 rounded-3xl">
      <ChartsHeader category="Pie" title="Forms Numbers in Month" />
      <div id="chart" className="w-full">
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
          height={350}
        />
      </div>
      <div id="html-dist" className="w-full text-white"></div>
    </div>
  );
}

export default PieChart;
