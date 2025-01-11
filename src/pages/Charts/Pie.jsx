import React from "react";

import { ChartsHeader, Pie } from "../../components";

const Line = () => (
  <div className="m-4 md:m-10 mt-24 p-10 rounded-3xl">
    <ChartsHeader category="Line" title="Inflation Rate" />
    <div className="w-full">
      <Pie/>
    </div>
  </div>
);

export default Line;
