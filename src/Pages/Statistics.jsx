import React from "react";
import { Footer, Header, PageTitle } from "../Components";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const data = [
    { name: "A 1", mark: 60 },
    { name: "A 2", mark: 60 },
    { name: "A 3", mark: 60 },
    { name: "A 4", mark: 59 },
    { name: "A 5", mark: 60 },
    { name: "A 6", mark: 60 },
    { name: "A 7", mark: 60 },
    { name: "A 8", mark: 60 },
  ];
  const yTicks = [0, 10, 20, 30, 40, 50, 60];

  return (
    <div>
      <div className="bg-other">
        <div className="container mx-auto relative py-5 px-4 md:px-6 lg:px-8">
          <Header />
          <PageTitle PageTitle="Statistics" />
        </div>
      </div>
      <div className="container mx-auto relative py-5 px-4 md:px-6 lg:px-8 mt-12">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart syncId="area" data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis ticks={yTicks} />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="mark"
              stroke="#7E90FE"
              fill="#7E90FE"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Statistics;
