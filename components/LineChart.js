"use client";

import React from "react";
import {
  BarChart,
  LineChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan",
    pv: 2400,
  },
  {
    name: "Feb",
    pv: 1398,
  },
  {
    name: "Mar",
    pv: 9800,
  },
  {
    name: "Apr",
    pv: 3908,
  },
  {
    name: "May",
    pv: 4800,
  },
  {
    name: "June",
    pv: 3800,
  },
  {
    name: "July",
    pv: 4300,
  },
  {
    name: "Aug",
    pv: 4300,
  },
  {
    name: "Sep",
    pv: 4300,
  },
  {
    name: "Oct",
    pv: 4300,
  },
  {
    name: "Nov",
    pv: 4300,
  },
  {
    name: "Dec",
    pv: 4300,
  },
];

function Example() {
  return (
    <LineChart data={data} width={500} height={300} className=" py-3">
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 6 }}
      />
    </LineChart>
  );
}

export default Example;
