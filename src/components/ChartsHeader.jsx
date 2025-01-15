/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ChartsHeader = ({ category }) => (
  <div className=" mb-10">
    <div>
      <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900">
        {category}
      </p>
    </div>
  </div>
);

export default ChartsHeader;
