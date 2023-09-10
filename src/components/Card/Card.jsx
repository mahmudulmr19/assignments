import React from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
const Card = ({
  authorName,
  title,
  coverImage,
  authorImage,
  readTime,
  publishIn,
  setTime,
  publishInNum,
  time,
  bookmark,
  setBookmark,
  bookmarkCount,
  setBookmarkCount,
}) => {
  const handleBookmark = (bookmarkName) => {
    if (bookmark.find((element) => element === undefined)) {
      setBookmarkCount(bookmarkCount + 1);
      setBookmark([...bookmark, bookmarkName]);
    } else if (bookmark.find((element) => element === bookmarkName)) {
      return toast.error("You Have Already Bookmarked This Blog");
    } else {
      setBookmarkCount(bookmarkCount + 1);
      setBookmark([...bookmark, bookmarkName]);
    }
  };
  return (
    <div className="max-w-full">
      {/* top */}
      <img
        src={coverImage}
        alt={title}
        className="rounded-lg md:h-[450px] w-full object-cover"
      />
      {/* middle */}
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center gap-5">
          <img src={authorImage} alt={authorName} />
          <div className="flex flex-col ">
            <h3 className="text-base sm:text-xl font-bold text-[#111111]">
              {authorName}
            </h3>
            <h5 className="text-sm sm:text-base font-semibold text-[#11111199]">
              {publishIn}
            </h5>
          </div>
        </div>
        <div className="text-[#11111199] font-medium flex items-center gap-1">
          {readTime}{" "}
          <BookmarkIcon
            onClick={() => handleBookmark(title)}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      </div>

      {/* bottom */}
      <div className="mt-5">
        <h2 className="text-2xl font-bold text-[#111111] md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <h5
          onClick={() => setTime(time + publishInNum)}
          className="text-[#6047EC] text-xl underline cursor-pointer mt-3.5"
        >
          Mark as read
        </h5>
      </div>
      {/* end */}
      <div className="border border-[#1111111a] mt-8" />
    </div>
  );
};

export default Card;
