import React from "react";

const E = () => {
  return (
    <div>
      {/* Common classNames */}
      <div className="text-center p-4">Common classNames</div>

      {/* Conditional classNames based on screen size */}
      <div className="text-center p-4 md:text-center lg:text-right">
        Conditional classNames based on screen size
      </div>
    </div>
  );
};

export default E;
