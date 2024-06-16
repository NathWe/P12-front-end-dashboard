import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import { UserActivity } from "../../../Models/user/UserActivity";
import { TooltipContainer, GraphTitle } from "./BarChart.style"; // Assurez-vous d'importer les styles

interface ActivityBarChartProps {
  userActivity: UserActivity;
}

interface TooltipPayloadItem {
  value: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        <p className="tooltipData">{`${payload[0].value} kg`}</p>
        <p className="tooltipData">{`${payload[1].value} Kcal`}</p>
      </TooltipContainer>
    );
  }
  return null;
};

const customTickDay = (day: string): string => {
  return day.slice(8);
};

const ActivityBarChart: React.FC<ActivityBarChartProps> = ({
  userActivity,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={userActivity.sessions}
        margin={{
          top: 80,
          right: 50,
          left: 45,
          bottom: 20,
        }}
        barSize={7}
        barGap={6}
      >
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis
          dataKey="day"
          axisLine={false}
          domain={["dataMin + 1", "dataMax + 1"]}
          tickLine={false}
          tickFormatter={customTickDay}
        />
        <YAxis hide={true} />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="top"
          align="right"
          iconType={"circle"}
          iconSize={8}
          wrapperStyle={{ top: 35, right: 26 }}
          formatter={(value) => (
            <span style={{ color: "#74798C", fontSize: 14, fontWeight: 500 }}>
              {value}
            </span>
          )}
        />
        <Bar
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282D30"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          radius={[4, 4, 0, 0]}
        />
        <GraphTitle
          x="5%"
          y="15%"
          width={147}
          height={48}
          textAnchor="start"
          dominantBaseline="middle"
        >
          Activité quotidienne
        </GraphTitle>
      </BarChart>
    </ResponsiveContainer>
  );
};

ActivityBarChart.propTypes = {
  userActivity: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default ActivityBarChart;
