import styled, { css } from "styled-components";
import Menus from "../../../components/Menus";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TableContainer = styled.div`
  overflow: hidden;
  border-radius: 13px;
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
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-200);
  }
`;

const Th = styled.th`
  text-transform: uppercase;
  font-size: var(--font-size-xxs);
  padding: var(--table-padding);
  font-weight: 550;
`;

const Td = styled.td`
  padding: var(--table-padding);
  font-weight: 500;
`;

const FlexCol = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0rem;
`;
const Name = styled.span`
  font-weight: 500;
`;

const Email = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
`;

const Time = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
`;

const ID = styled.span`
  font-weight: 500;
  color: var(--color-blue-1300);
`;

const Pass = styled.span`
  font-weight: 500;
  color: var(--color-green-600);
`;
const Fail = styled.span`
  font-weight: 500;
  color: var(--color-red-900);
`;

const Tag = styled.span<{ $type: string }>`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  ${(props) =>
    props.$type === "completed" &&
    css`
      background-color: var(--color-green-100);
      color: var(--color-green-900);
    `}

  ${(props) =>
    props.$type === "pending" &&
    css`
      background-color: var(--color-red-100);
      color: var(--color-red-900);
    `}

    ${(props) =>
    props.$type === "active" &&
    css`
      background-color: var(--color-blue-100);
      color: var(--color-blue-900);
    `}
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 0;
  background: none;
  width: 100%;
  padding: 1rem 2rem;
  font-weight: 500;
  color: var(--color-gray-700);

  &:hover {
    background-color: var(--bg-base);
    cursor: pointer;
  }
`;

function ResultList() {
  const navigate = useNavigate();
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Exam ID</Th>
            <Th>Course</Th>
            <Th>Status</Th>
            <Th>Date</Th>
            <Th>Score</Th>
            <Th>Pass/Fail</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <FlexCol>
                <Name>Taofeek</Name>
                <Email>tao@gmail.com</Email>
              </FlexCol>
            </Td>
            <Td>
              <ID>84656753535</ID>
            </Td>
            <Td>GNS112</Td>
            <Td>
              <Tag $type="completed">Completed</Tag>
            </Td>
            <Td>
              <FlexCol>
                <Name>23/02/2024</Name>
                <Time>9:30am → 9:55am</Time>
              </FlexCol>
            </Td>
            <Td>21/40</Td>
            <Td>
              <Pass>Pass</Pass>
            </Td>
            <Td>
              <Menus>
                <Menus.Toggle id="me" />
                <Menus.List id="me">
                  <li>
                    <Button onClick={() => navigate("008308e0e8")}>
                      <IoMdEye size={18} color="var(--color-gray-500)" /> See
                      details
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <MdDelete size={18} color="var(--color-gray-500)" />
                      Delete
                    </Button>
                  </li>
                </Menus.List>
              </Menus>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default ResultList;
