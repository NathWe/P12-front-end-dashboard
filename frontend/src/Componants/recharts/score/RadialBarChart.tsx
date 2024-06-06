import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

interface ActivityRadialBarChartProps {
  score: number;
}

interface RadialBarData {
  uv: number;
  fill: string;
}

const ActivityRadialBarChart: React.FC<ActivityRadialBarChartProps> = ({
  score,
}) => {
  const uvValue = score > 0 ? score : 0;
  const data: RadialBarData[] = [
    {
      uv: uvValue,
      fill: "#E60000",
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius={70}
        barSize={10}
        data={data}
        startAngle={80}
        endAngle={450}
      >
        <RadialBar dataKey="uv" background fill="#E60000" cornerRadius={10} />
        <PolarAngleAxis type="number" tick={false} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default ActivityRadialBarChart;
