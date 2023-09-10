import React from "react";
import ReactDOM from "react-dom/client";
import {
  AppliedJobs,
  Blog,
  Home,
  JobDetails,
  NotFound,
  Statistics,
} from "./Pages";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => fetch("/JobData.json"),
  },
  {
    path: "/statistics",
    element: <Statistics />,
  },
  {
    path: "/applied-jobs",
    element: <AppliedJobs />,
    loader: () => fetch("/JobData.json"),
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    errorElement: <NotFound />,
    path: "/job/:id",
    element: <JobDetails />,
    loader: () => fetch("/JobData.json"),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <RouterProvider router={router} />
  </React.StrictMode>
);
