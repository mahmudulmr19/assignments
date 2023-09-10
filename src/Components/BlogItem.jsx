import React from "react";

const BlogItem = ({ question, answer }) => {
  return (
    <div className="space-y-2">
      <h1 className="text-[#474747] text-2xl">{question}</h1>
      <p className="text-[#474747] font-medium">
        <span className="text-gradient font-bold text-lg">Answer:</span>{" "}
        {answer}
      </p>
    </div>
  );
};

export default BlogItem;
