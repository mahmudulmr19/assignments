import React from "react";

const PageTitle = ({ PageTitle }) => {
  return (
    <div className="my-14">
      <h1 className="text-3xl lg:text-4xl text-center font-bold text-[#1A1919]">
        {PageTitle}
      </h1>
    </div>
  );
};

export default PageTitle;
