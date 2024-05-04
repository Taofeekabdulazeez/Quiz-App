import styled from "styled-components";

const TableContainer = styled.table`
  overflow: hidden;
  border-radius: 13px;
  width: 100%;
  border: 1px solid var(--color-gray-200);
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
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-200);
  }
`;

const Th = styled.th`
  text-transform: uppercase;
  font-size: var(--font-size-xxs);
  padding: var(--table-padding);
`;

const Td = styled.td`
  padding: var(--table-padding);
`;

function ResultList() {
  return (
    <TableContainer>
      <Table>
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Course</Th>
            <Th>Status</Th>
            <Th>Start Time</Th>
            <Th>End Time</Th>
            <Th>Score</Th>
          </Tr>
        </thead>
        <Tbody>
          <Tr>
            <Td>Taofeek</Td>
            <Td>English</Td>
            <Td>completed</Td>
            <Td>23/04/2024</Td>
            <Td>23/05/2024</Td>
            <Td>21/40</Td>
          </Tr>
          <Tr>
            <Td>Taofeek</Td>
            <Td>English</Td>
            <Td>completed</Td>
            <Td>23/04/2024</Td>
            <Td>23/05/2024</Td>
            <Td>32/40</Td>
          </Tr>
          <Tr>
            <Td>Taofeek</Td>
            <Td>English</Td>
            <Td>completed</Td>
            <Td>23/04/2024</Td>
            <Td>23/05/2024</Td>
            <Td>7/40</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default ResultList;
