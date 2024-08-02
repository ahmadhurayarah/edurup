import React from "react";
import { N } from "./components/N";

import B from "./components/B";
import C from "./components/C";
import D from "./components/D";
import { F } from "./components/F";
import G from "./components/G";

const page = () => {
  return (
    <div className="h-full dark:bg-dark">
      <N />
      <B />
      <C />
      <D />
      <G/>
      <F />
    </div>
  );
};

export default page;
