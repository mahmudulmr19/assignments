import React from "react";

const Bookmark = ({ bookmarkCount, bookmark }) => {
  return (
    <div className="mt-4 px-8 py-7 bg-[#1111110d] rounded-lg text-lg font-bold">
      <h1>Bookmarked Blogs : {bookmarkCount}</h1>
      <div className="flex flex-col gap-4 mt-4">
        {bookmark.map((bookmark, index) => (
          <div
            key={index}
            className="font-semibold text-lg p-5 bg-white rounded-lg text-[#111111] "
          >
            {bookmark}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
