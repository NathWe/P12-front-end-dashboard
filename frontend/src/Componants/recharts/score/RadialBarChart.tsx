// src/Componants/recharts/score/RadialBarChart.tsx
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import PropTypes from "prop-types";

interface ActivityRadialBarChartProps {
  score: number;
}

/**
 * @function ActivityRadialBarChart
 * @description Radial bar chart component for user score.
 * @param {ActivityRadialBarChartProps} props - Props for the radial bar chart.
 * @param {number} props.score - The user's score.
 * @returns {JSX.Element} The radial bar chart component.
 */
const ActivityRadialBarChart: React.FC<ActivityRadialBarChartProps> = ({
  score,
}) => {
  const data = [
    {
      uv: score * 100,
      fill: "#E60000",
    },
  ];

  return (
    <ResponsiveContainer>
      <RadialBarChart
        cx="50%"
        cy="50%"
        style={{ backgroundColor: "var(--gris)", borderRadius: "5px" }}
        innerRadius={70}
        barSize={10}
        data={data}
        startAngle={80}
        endAngle={450}
      >
        <circle cx="50%" cy="50%" fill="white" r="70" />
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={1}
          tick={false}
        />
        <RadialBar
          background
          dataKey="uv"
          angleAxisId={1}
          fill="var(--red)"
          cornerRadius={10}
        />
        <text
          fontWeight="700"
          fontSize={26}
          fill="#282D30"
          x="50%"
          y="45%"
          textAnchor="middle"
        >{`${score * 100}%`}</text>
        <text
          fontWeight="500"
          fill="#74798C"
          x="50%"
          y="55%"
          textAnchor="middle"
        >
          de votre
        </text>
        <text
          fontWeight="500"
          fill="#74798C"
          x="50%"
          y="65%"
          textAnchor="middle"
        >
          objectif
        </text>
        <text
          x="8%"
          y="15%"
          width={147}
          height={48}
          dominantBaseline="middle"
          fill="#20253A"
          style={{ fontWeight: 500 }}
        >
          Score
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

ActivityRadialBarChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ActivityRadialBarChart;
