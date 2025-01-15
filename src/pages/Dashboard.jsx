/* eslint-disable no-unused-vars */
import React from "react";
import { LineChart, Pie } from "../components/";
import { earningData } from "../data/dummy";
import { Area, Bar } from "../pages";

function Dashboard() {
  return (
    <div className="mt-24 overflow-x-auto mx-auto">
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
      <div className="flex">
        <div className="bg-gray-500 grid  lg:grid-cols-2 sm:grid-cols-1 place-self-center dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl lg:w-full overflow-hidden">
          <div className="flex justify-center">
            <div className="bg-white flex justify-center rounded-lg w-[400px] h-full items-center align-center">
              <LineChart />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white flex justify-center items-center align-center rounded-lg w-[400px] h-full  mt-2">
              <Pie />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white flex justify-center rounded-lg w-[400px] h-full items-center align-center mt-4">
              <Bar />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white flex justify-center rounded-lg w-[400px] h-full items-center align-center mt-6">
              <Area />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
