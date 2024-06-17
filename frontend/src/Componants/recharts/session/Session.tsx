import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
} from "recharts";
import PropTypes from "prop-types";

interface SessionData {
  day: number;
  sessionLength: number;
}

interface ActivitySessionProps {
  userSessions: SessionData[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
}

/**
 * @function CustomTooltip
 * @description Custom tooltip component for the session line chart.
 * @param {CustomTooltipProps} props - Props for the custom tooltip.
 * @param {boolean} [props.active] - Whether the tooltip is active.
 * @param {{ value: number }[]} [props.payload] - The payload data.
 * @returns {JSX.Element | null} The custom tooltip component.
 */
const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="customTooltipSession">
        <p className="tooltipDataSession">{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

interface CustomCursorProps {
  points?: { x: number }[];
}

/**
 * @function CustomCursor
 * @description Custom cursor component for the session line chart.
 * @param {CustomCursorProps} props - Props for the custom cursor.
 * @param {{ x: number }[]} [props.points] - The cursor points.
 * @returns {JSX.Element | null} The custom cursor component.
 */
const CustomCursor: React.FC<CustomCursorProps> = ({ points }) => {
  if (points && points.length > 1) {
    return (
      <Rectangle
        fill="#000000"
        opacity={0.2}
        x={points[1].x}
        width={1000}
        height={300}
      />
    );
  }
  return null;
};

/**
 * @function daySemaine
 * @description Converts the day number to a string representation.
 * @param {number} day - The day number.
 * @returns {string} The day string.
 */
function daySemaine(day: number): string {
  switch (day) {
    case 1:
      return "  L";
    case 2:
      return "M";
    case 3:
      return "M";
    case 4:
      return "J";
    case 5:
      return "V";
    case 6:
      return "S";
    case 7:
      return "D  ";
    default:
      throw new Error("Numéro du jour incorrect");
  }
}

/**
 * @function ActivitySession
 * @description Line chart component for user session data.
 * @param {ActivitySessionProps} props - Props for the line chart.
 * @param {SessionData[]} props.userSessions - The user's session data.
 * @returns {JSX.Element} The line chart component.
 */
const ActivitySession: React.FC<ActivitySessionProps> = ({ userSessions }) => {
  return (
    <ResponsiveContainer>
      <LineChart
        style={{ backgroundColor: "#FF0000", borderRadius: "5px" }}
        data={userSessions}
        margin={{ top: 50, right: -5, left: -60, bottom: 10 }}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis
          dataKey="day"
          tickFormatter={daySemaine}
          tick={{ fill: "#FFFFFF", style: { opacity: 0.5 } }}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          interval="preserveStartEnd"
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={false}
          domain={["dataMin - 5", "dataMax + 5"]}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={<CustomCursor />}
          wrapperStyle={{
            background: "#FFFFFF",
            textAlign: "center",
            color: "#000000",
            width: "55px",
            height: "25px",
            outline: "none",
            marginTop: "15",
          }}
        />
        <Line
          type="natural"
          dataKey="sessionLength"
          dot={false}
          activeDot={{ stroke: "red", strokeWidth: 2, r: 5 }}
          stroke={"#FFF"}
        />
        <text
          className="graphTitle"
          x="8%"
          y="12%"
          width={147}
          height={48}
          fill="#FFFFFF"
          style={{ fontWeight: 500, opacity: 0.5 }}
        >
          Durée moyenne des
        </text>
        <text
          className="graphTitle"
          x="8%"
          y="20%"
          width={147}
          height={48}
          fill="#FFFFFF"
          style={{ fontWeight: 500, opacity: 0.5 }}
        >
          sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
};

ActivitySession.propTypes = {
  userSessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default ActivitySession;
