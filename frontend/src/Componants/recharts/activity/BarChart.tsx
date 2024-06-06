// src/Componants/recharts/radars/RadarChart.tsx
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { PerformanceData } from "../../../Models/performances/PerformanceData";

interface ActivityRadarChartProps {
  data: PerformanceData[];
  kind: { [key: number]: string };
}

const ActivityRadarChart: React.FC<ActivityRadarChartProps> = ({
  data,
  kind,
}) => {
  // Transform the data to match the expected format of the RadarChart component
  const transformedData = data.map((item) => ({
    ...item,
    kind: kind[item.kind],
  }));

  return (
    <RadarChart
      outerRadius={90}
      width={730}
      height={250}
      data={transformedData}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar
        name="Performance"
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};

export default ActivityRadarChart;
