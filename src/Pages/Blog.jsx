import React from "react";
import { Footer, Header, PageTitle } from "../Components";
import BlogItem from "../Components/BlogItem";

const Blog = () => {
  return (
    <div>
      <div className="bg-other">
        <div className="container mx-auto relative py-5 px-4 md:px-6 lg:px-8">
          <Header />
          <PageTitle PageTitle="Blog" />
        </div>
      </div>

      {/* main content */}
      <div className="container mx-auto relative py-5 px-4 md:px-6 lg:px-8">
        <div className="space-y-4">
          <BlogItem
            question="1. When should you use context API?"
            answer="You should use the Context API in React when you need to share state or data across multiple components, especially when passing props through many levels of nested components becomes cumbersome. It's useful for scenarios where you need to pass data down to deeply nested child components or avoid prop drilling."
          />

          <BlogItem
            question="2. What is a custom hook?"
            answer="A custom hook in React is a JavaScript function that follows the rules of the Hooks API, starts with the prefix 'use', and can be used to extract reusable logic from components. It helps in making code modular, reusable, and easier to maintain."
          />

          <BlogItem
            question="3. What is useRef?"
            answer="useRef is a React hook that returns a mutable ref object, which can be used to reference a DOM element, store a value that persists across renders, or hold a reference to any other value that needs to be accessed by a component without triggering a re-render."
          />

          <BlogItem
            question="4. What is useMemo?"
            answer="useMemo is a React hook that memoizes the result of a function, allowing you to cache the value and avoid unnecessary re-calculations. It is useful when you have a function that takes a long time to compute and you want to optimize performance by only re-computing the value when its dependencies change."
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
