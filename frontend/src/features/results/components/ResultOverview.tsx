import { HiSpeakerWave } from "react-icons/hi2";
import { LuAlarmClock } from "react-icons/lu";
import {
  MdAccessTime,
  MdOutlineCalendarMonth,
  MdOutlineCheckBox,
  MdOutlineSpeed,
  MdOutlineSummarize,
} from "react-icons/md";
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

const Container = styled.div`
  background-color: var(--bg-layer-2);
  border-radius: 13px;
`;

const Grid = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* gap: 6rem; */
  background-color: var(--color-layer-1);
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-blue-50);
  padding: 1.2rem 2.4rem;
`;

const H2 = styled.h2`
  font-weight: 500;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  background: none;
  border: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--color-gray-700);
`;

const TableContainer = styled.div`
  overflow: hidden;
  /* border-radius: 13px; */
  width: 100%;
  border: 1px solid var(--color-gray-200);
`;

const Thead = styled.thead`
  /* background-color: var(--color-blue-50); */
`;

const Table = styled.table`
  --table-padding: 1.2rem;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;

const Tbody = styled.tbody`
  background-color: var(--bg-layer-1);
  border-collapse: collapse;
`;

const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: var(--bg-base);
  }
  &:not(:last-child) {
    /* border-bottom: 1px solid var(--color-gray-200); */
  }
`;

const Th = styled.th`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: capitalize;
  font-size: var(--font-size-xxs);
  padding: var(--table-padding);
  font-weight: 500;
  /* & svg {
    stroke: var(--color-blue-900);
    color: var(--color-blue-1000);
  } */
`;

const Td = styled.td`
  padding: var(--table-padding);
  font-weight: 500;
  font-weight: 600;
`;

function ResultOverview() {
  return (
    <Container>
      <Header>
        <H2>
          <Flex>
            Summary <HiSpeakerWave size={24} />
          </Flex>
        </H2>
        <Button>Back</Button>
      </Header>
      <Grid>
        <div>
          <PieChart width={200} height={200}>
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

          <PieChart width={200} height={200}>
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
        </div>
        <TableContainer>
          <Table>
            <Tr>
              <Th>
                <MdOutlineSummarize size={20} />
                Total Score
              </Th>
              <Td>23/40</Td>
            </Tr>
            <Tr>
              <Th>
                <MdAccessTime size={20} />
                Time spent
              </Th>
              <Td>30mins</Td>
            </Tr>
            <Tr>
              <Th>
                <MdOutlineSpeed size={20} />
                Speed
              </Th>
              <Td>0</Td>
            </Tr>
            <Tr>
              <Th>
                <MdOutlineCheckBox size={20} />
                Attempted Questions
              </Th>
              <Td>29</Td>
            </Tr>
            <Tr>
              <Th>
                <MdOutlineCalendarMonth size={20} />
                Date
              </Th>
              <Td>29/04/2024</Td>
            </Tr>
            <Tr>
              <Th>
                <LuAlarmClock size={20} />
                Time
              </Th>
              <Td>9:30am</Td>
            </Tr>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
}

export default ResultOverview;
