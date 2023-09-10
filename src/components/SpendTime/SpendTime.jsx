import React from "react";

const SpendTime = ({ time }) => {
  return (
    <div className="border border-[#6047EC] py-5 rounded-lg font-bold text-lg px-6 text-center text-[#6047EC] bg-[#6047ec1a]">
      Spent time on read : {time} min
    </div>
  );
};

export default SpendTime;
