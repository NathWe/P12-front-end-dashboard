import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import { PerformanceData } from "../../../Models/performances/PerformanceData";

interface ActivityRadarChartProps {
  data: PerformanceData[];
  kind: { [key: number]: string };
}

function perFormence(kind: number): string {
  switch (kind) {
    case 1:
      return "cardio";
    case 2:
      return "energy";
    case 3:
      return "endurance";
    case 4:
      return "strength";
    case 5:
      return "speed";
    case 6:
      return "intensity";
    default:
      return "";
  }
}

const ActivityRadarChart: React.FC<ActivityRadarChartProps> = ({ data }) => {
  const transformedData = data.map((item) => ({
    ...item,
    kind: perFormence(item.kind),
  }));

  return (
    <ResponsiveContainer>
      <RadarChart
        margin={{ top: 30, right: 30, bottom: 30, left: 70 }}
        style={{ backgroundColor: "#282D30", borderRadius: "5px" }}
        data={transformedData}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          axisLine={false}
          dy={5}
          stroke="#FFF"
          tick={{ fill: "#FFFFFF", fontSize: 12 }}
        />
        <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

ActivityRadarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  kind: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default ActivityRadarChart;
