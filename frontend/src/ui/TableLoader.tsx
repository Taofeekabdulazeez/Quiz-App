import styled from "styled-components";

const TableContainer = styled.table`
  overflow: hidden;
  border-radius: 13px;
  width: 100%;
  border-radius: 21px;
`;

const Thead = styled.thead`
  padding: 2rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(
        90deg,
        transparent,
        var(--loader-gray) 50%,
        transparent 100%
      ),
      linear-gradient(var(--color-gray-200) 50px, transparent 0);
    background-repeat: no-repeat;
    background-position: -200px 0, center 0;
    animation: animloader 1s linear infinite;
  }
`;

const Table = styled.table`
  width: 100%;
  /* border-collapse: collapse; */
`;

const Tbody = styled.tbody`
  background-color: var(--bg-layer-1);
  border-collapse: collapse;
`;

const Tr = styled.tr``;

const Th = styled.th`
  padding: 2.4rem;
`;

const Td = styled.td`
  padding: 2rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* background-image: linear-gradient(
        90deg,
        transparent,
        var(--loader-gray) 50%,
        transparent 100%
      ),
      linear-gradient(var(--color-gray-200) 50px, transparent 0); */
    background: linear-gradient(
        0.25turn,
        transparent,
        var(--loader-gray),
        transparent
      ),
      linear-gradient(var(--color-gray-200), var(--color-gray-200)),
      radial-gradient(
        38px circle at 19px 19px,
        var(--color-gray-200) 50%,
        transparent 51%
      ),
      linear-gradient(var(--color-gray-200), var(--color-gray-200));
    background-color: var(--loader-gray);
    background-repeat: no-repeat;
    background-position: -185px 0, center 0;
    animation: animloader 1s linear infinite;
  }
`;

type Props = {
  rows?: number;
  columns?: number;
};

function TableLoader({ columns = 5, rows = 4 }: Props) {
  const dataRows = Array.from({ length: rows }, (_, i) => i);
  const dataCols = Array.from({ length: columns }, (_, i) => i);
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            {dataCols.map((row) => (
              <Th key={row}></Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {dataRows.map((row) => (
            <Tr key={row}>
              {dataCols.map((col) => (
                <Td key={col}></Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TableLoader;
