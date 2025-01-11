import React from "react";
import { LineChart, Pie } from "../components";
import { earningData } from "../data/dummy";
import { Area, Bar } from "../components";
function Dashboard() {
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-gray-200 dark:text-gray-200 dark:bg-secondary-dark-bg h-44 md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 m-4 justify-center">
        <div className="bg-gray-200 dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-full flex flex-col lg:flex-row justify-center items-center overflow-auto">
          <div className="flex-1 flex flex-col items-center">
            <div className="flex justify-between items-center gap-2 mb-10 w-full">
              <p className="text-xl font-semibold">Forms Overview</p>
            </div>
            <div className="w-full h-72 flex justify-center items-center">
              <LineChart />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center mt-10 lg:mt-0">
            <div className="w-full h-72 flex justify-center items-center">
              <Pie />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center mt-10 lg:mt-0">
            <div className="w-full h-72 flex justify-center items-center">
              <Bar />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center mt-10 lg:mt-0">
            <div className="w-full h-72 flex justify-center items-center">
              <Area />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
