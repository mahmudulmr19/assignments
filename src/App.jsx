import React, { useState } from "react";
import { Blog, Bookmark, Faq, Header, SpendTime } from "./components";

function App() {
  const [time, setTime] = useState(0);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [bookmark, setBookmark] = useState([]);
  return (
    <div className="container mx-auto px-4 py-2.5">
      <Header />
      <div className="lg:grid lg:grid-cols-3 lg:gap-5">
        <Blog
          setTime={setTime}
          time={time}
          bookmark={bookmark}
          setBookmark={setBookmark}
          bookmarkCount={bookmarkCount}
          setBookmarkCount={setBookmarkCount}
        />
        <div className="mt-7">
          <SpendTime time={time} />
          <Bookmark bookmark={bookmark} bookmarkCount={bookmarkCount} />
        </div>
      </div>
      <div className="mt-6">
        <Faq />
      </div>
    </div>
  );
}

export default App;
