import React from "react";
import Container from "../../Components/shared/Container";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        className="py-2 px-3 border  rounded shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        className="py-2 px-3 border  rounded shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-400"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="py-2 px-3 border  rounded shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-400"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="py-2 px-3 border  rounded shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-400"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                    </div>
                    <div className="mt-1">
                      <textarea
                        rows={5}
                        type="text"
                        name="subject"
                        id="subject"
                        className="py-2 px-3 border resize-none rounded shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <button className="px-4 py-2 bg-pink-500 rounded text-white">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
