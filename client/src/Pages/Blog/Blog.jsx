import React, { useEffect, useRef } from "react";
import { Container } from "../../Components";
import { Blogs } from "../../constant";
import ReactToPdf from "react-to-pdf";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ref = useRef();
  return (
    <div>
      <Container>
        <h1 className="text-center py-8 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          Blog
        </h1>
        <div ref={ref} className="py-8 max-w-3xl mx-auto space-y-4">
          {Blogs.map((blog) => (
            <div key={blog.id} className="space-y-1">
              <h2 className="text-gray-800 text-lg font-medium">
                <span className="font-bold">Question:</span> {blog.id}. {""}
                {blog.question}
              </h2>
              <h3 className="text-gray-800 text-sm">
                <span className="font-semibold text-base">Answer:</span>{" "}
                {blog.answer}
              </h3>
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <div className="text-center">
          <ReactToPdf targetRef={ref} filename="blog.pdf">
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className="bg-pink-500 text-white font-medium transition-all py-2 px-4 rounded hover:bg-pink-600"
              >
                Download The Blog
              </button>
            )}
          </ReactToPdf>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
