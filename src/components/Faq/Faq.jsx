import React from "react";

const Faq = () => {
  return (
    <div>
      <h1 className="text-center  text-2xl font-semibold text-[#111111]">
        Question And Answer
      </h1>
      {/* you can also use grid grid-cols-1 lg:grid-cols-2 */}
      <div className="mt-6 flex flex-col gap-5">
        {/* first question */}
        <div className="text-[#111111] space-y-2">
          <h1 className="text-xl font-medium">1. Props vs state?</h1>
          <p>
            <span className="text-[#6047ec] font-medium">Answer: </span>
            Props are read-only inputs passed from a parent component to a child
            component, while state is used to manage internal data that can be
            changed by the component itself. Use props for passing data down the
            component tree and state for managing internal data that changes
            over time.
          </p>
        </div>

        {/* second question */}
        <div className="text-[#111111] space-y-2">
          <h1 className="text-xl font-medium">2. How does useState work?</h1>
          <p>
            <span className="text-[#6047ec] font-medium">Answer: </span>
            <span className="font-semibold">useState</span> is a Hook function
            in React that returns an array with two elements. The first element
            is the current state value, and the second element is a function
            that can be used to update the state value. When the state is
            updated, React will re-render the component with the new state
            value. You can use <span className="font-semibold">useState</span>{" "}
            multiple times in a single component to manage multiple state
            values.
          </p>
        </div>

        {/* third question */}
        <div className="text-[#111111] space-y-2">
          <h1 className="text-xl font-medium">
            3. Purpose of useEffect other than fetching data.
          </h1>
          <p>
            <span className="text-[#6047ec] font-medium">Answer: </span>
            The useEffect in react js allows you to perform side effects in your
            components. The react useEffect examples of side effects include
            retrieving data, direct DOM updates, and timers. The second argument
            is optional
          </p>
        </div>

        {/* fourth question */}
        <div className="text-[#111111] space-y-2">
          <h1 className="text-xl font-medium">4. How Does React work?.</h1>
          <p>
            <span className="text-[#6047ec] font-medium">Answer: </span>
            React is a JavaScript library that allows developers to create user
            interfaces with reusable code components. It works by using a
            virtual DOM to efficiently update and render changes to the user
            interface, minimizing the amount of actual DOM manipulation
            required. When changes occur, React only updates the affected
            components, improving performance and reducing load times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
