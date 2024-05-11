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
            <Cols>
              <li>
                <C $color="var(--color-celery-600)" />
                <Grade>A</Grade>
              </li>
              <li>
                <C $color="var(--color-green-600)" />
                <Grade>B</Grade>
              </li>
              <li>
                <C $color="var(--color-yellow-300)" />
                <Grade>C</Grade>
              </li>
              <li>
                <C $color="var(--color-orange-600)" />
                <Grade>D</Grade>
              </li>
              <li>
                <C $color="var(--color-red-600)" />
                <Grade>E</Grade>
              </li>
              <li>
                <C $color="var(--color-red-900)" />
                <Grade>F</Grade>
              </li>
            </Cols>
            <PieChart width={400} height={250}>
              <Pie
                data={data}
                dataKey="noOfStudents"
                nameKey="grade"
                cx="50%"
                cy="50%"
                // innerRadius={60}
                outerRadius={80}
                fill="red"
                stroke="var(--bg-layer-1)"
                label
                paddingAngle={2}
              >
                <Cell fill="var(--color-green-600)" />
                <Cell fill="var(--color-cyan-600)" />
                <Cell fill="var(--color-yellow-300)" />
                <Cell fill="var(--color-orange-600)" />
                <Cell fill="var(--color-red-600)" />
                <Cell fill="var(--color-red-900)" />
              </Pie>
            </PieChart>
            <Cols>
              <li>
                <Grade>32%</Grade>
              </li>
              <li>
                <Grade>41%</Grade>
              </li>
              <li>
                <Grade>23%</Grade>
              </li>
              <li>
                <Grade>13%</Grade>
              </li>
              <li>
                <Grade>5%</Grade>
              </li>
              <li>
                <Grade>2%</Grade>
              </li>
            </Cols>
          </Flex>
        </Box>
        <Box></Box>
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
