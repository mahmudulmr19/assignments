import React, { useEffect, useState } from "react";
import { Card } from "../../components";
const Blog = ({
  setTime,
  time,
  bookmark,
  setBookmark,
  bookmarkCount,
  setBookmarkCount,
}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mt-7 grid grid-cols-1 gap-8 lg:col-span-2">
      {data.map((item) => (
        <Card
          setTime={setTime}
          time={time}
          key={item.id}
          authorImage={item.authorImage}
          authorName={item.authorName}
          coverImage={item.coverImage}
          publishIn={item.publishIn}
          readTime={item.readTime}
          title={item.title}
          publishInNum={item.publishInNum}
          bookmark={bookmark}
          setBookmark={setBookmark}
          bookmarkCount={bookmarkCount}
          setBookmarkCount={setBookmarkCount}
        />
      ))}
    </div>
  );
};

export default Blog;
