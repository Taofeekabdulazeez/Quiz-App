import { PieChart, Pie, Cell } from "recharts";
import styled from "styled-components";

const data = [
  { name: "Group A", value: 15 },
  { name: "Group B", value: 85 },
];

const time = [
  { name: "Group A", value: 35 },
  { name: "Group B", value: 65 },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderScore = ({ cx, cy }: any) => {
  return (
    <>
      <text
        x={cx}
        y={cy}
        dy={8}
        fontSize={24}
        fontWeight={400}
        fill="var(--color-gray-800)"
        textAnchor="middle"
      >
        {`${85}%`}
      </text>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderTime = ({ cx, cy }: any) => {
  return (
    <>
      <text
        x={cx}
        y={cy}
        dy={8}
        fontSize={24}
        fontWeight={400}
        fill="var(--color-gray-800)"
        textAnchor="middle"
      >
        {`${65}%`}
      </text>
    </>
  );
};

const Grid = styled.div`
  display: flex;
  /* gap: 6rem; */
  background-color: var(--color-layer-1);
`;

function ResultOverview() {
  return (
    <Grid>
      <PieChart width={200} height={400}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          innerRadius={50}
          outerRadius={65}
          paddingAngle={0}
          dataKey="value"
          activeIndex={0}
          activeShape={renderScore}
        >
          <Cell fill="var(--color-gray-600)" />
          <Cell fill="var(--color-green-600)" />
        </Pie>
      </PieChart>

      <PieChart width={200} height={400}>
        <Pie
          data={time}
          cx={100}
          cy={100}
          innerRadius={50}
          outerRadius={65}
          paddingAngle={5}
          dataKey="value"
          activeIndex={0}
          activeShape={renderTime}
        >
          <Cell fill="var(--color-gray-600)" />
          <Cell fill="var(--color-blue-600)" />
        </Pie>
      </PieChart>
    </Grid>
  );
}

export default ResultOverview;
