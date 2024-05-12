import { GrCompliance } from "react-icons/gr";
import { LuUsers } from "react-icons/lu";
import { PiMedal } from "react-icons/pi";
import { TbReload } from "react-icons/tb";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";

const data = [
  {
    grade: "A",
    noOfStudents: 30,
  },
  {
    grade: "B",
    noOfStudents: 40,
  },
  {
    grade: "C",
    noOfStudents: 24,
  },
  {
    grade: "D",
    noOfStudents: 13,
  },
  {
    grade: "E",
    noOfStudents: 9,
  },
  {
    grade: "F",
    noOfStudents: 3,
  },
];

const rateData = [
  { performance: "Good", rate: 39 },
  { performance: "Average", rate: 36 },
  { performance: "Good", rate: 15 },
];

const Heading = styled.h2`
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6rem;
  margin-bottom: 3rem;
`;

const GridItem = styled.div`
  background-color: var(--bg-layer-1);
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); */
  padding: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  border-radius: 9px;
`;

const IconBox = styled.div<{ $bgColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  height: 7.2rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: ${(props) => `var(--color-${props.$bgColor}-100)`};

  & > svg {
    stroke: ${(props) => `var(--color-${props.$bgColor}-900)`};
    color: ${(props) => `var(--color-${props.$bgColor}-900)`};
  }
`;

const H4 = styled.h4`
  margin-bottom: 1.2rem;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-gray-600);
  font-size: 1.2rem;
  font-weight: 500;
`;

const Span = styled.span`
  font-weight: 500;
  font-size: var(--font-size-md);
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 6rem;
`;

const Box = styled.div`
  padding: 1.6rem;
  background-color: var(--bg-layer-2);
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const C = styled.span<{ $color: string }>`
  display: inline-block;
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`;

const Cols = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & li {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
`;

const Grade = styled.span`
  font-weight: 500;
`;

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Dashboard() {
  return (
    <div>
      <Heading>Dashboard</Heading>
      <Grid>
        <GridItem>
          <IconBox $bgColor="blue">
            <LuUsers size={32} />
          </IconBox>
          <FlexCol>
            <Text>Students</Text>
            <Span>102</Span>
          </FlexCol>
        </GridItem>
        <GridItem>
          <IconBox $bgColor="green">
            <GrCompliance size={32} />
          </IconBox>
          <FlexCol>
            <Text>Submissions</Text>
            <Span>91</Span>
          </FlexCol>
        </GridItem>
        <GridItem>
          <IconBox $bgColor="red">
            <TbReload size={32} />
          </IconBox>
          <FlexCol>
            <Text>Retakes</Text>
            <Span>12</Span>
          </FlexCol>
        </GridItem>

        <GridItem>
          <IconBox $bgColor="seafoam">
            <PiMedal size={32} />
          </IconBox>
          <FlexCol>
            <Text>Highscore</Text>
            <Span>95</Span>
          </FlexCol>
        </GridItem>
      </Grid>
      <Container>
        <Box>
          <H4>Performance</H4>
          <Flex>
            <PieChart width={300} height={250}>
              <Pie
                data={rateData}
                dataKey="rate"
                nameKey="performance"
                cx="50%"
                cy="50%"
                // innerRadius={60}
                outerRadius={80}
                fill="red"
                stroke="var(--bg-layer-1)"
                label={renderCustomizedLabel}
                labelLine={false}
                paddingAngle={2}
              >
                <Legend />
                <Cell fill="var(--color-green-500)" />
                <Cell fill="var(--color-orange-500)" />
                <Cell fill="var(--color-red-700)" />
              </Pie>
            </PieChart>
            <Cols>
              <li>
                <C $color="var(--color-green-500)" />
                <Grade>Good</Grade>
              </li>
              <li>
                <C $color="var(--color-orange-500)" />
                <Grade>Average</Grade>
              </li>
              <li>
                <C $color="var(--color-red-700)" />
                <Grade>Poor</Grade>
              </li>
            </Cols>
          </Flex>
        </Box>
        <Box>
          <H4>Leaderboards</H4>
        </Box>
      </Container>
      <Box>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--color-cyan-400)"
            fill="var(--color-blue-50)"
            fillOpacity={0.3}
          />
          <XAxis dataKey="grade" stroke="var(--color-cyan-900)" />
          <YAxis stroke="var(--color-cyan-900)" />
          <Tooltip
            wrapperStyle={{ backgroundColor: "red" }}
            contentStyle={{
              backgroundColor: "var(--color-cyan-100)",
              border: 0,
            }}
          />
          <Legend />
          <Bar dataKey="noOfStudents" fill="var(--color-cyan-700)" />
        </BarChart>
      </Box>
    </div>
  );
}

export default Dashboard;
