import { useUsers } from "../hooks/useUsers";
import styled, { css } from "styled-components";
import ActionButton from "../../../ui/ActionButton";
import { BiDotsVerticalRounded } from "react-icons/bi";
import TableLoader from "../../../ui/TableLoader";

export default UserList;

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
  font-weight: 550;
`;

const Td = styled.td`
  padding: var(--table-padding);
  font-weight: 500;
`;

const Name = styled.span`
  font-weight: 500;
`;

const ID = styled.span`
  font-weight: 500;
  color: var(--color-blue-1300);
`;

const Tag = styled.span<{ $type: string }>`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  ${(props) =>
    props.$type === "verified" &&
    css`
      background-color: var(--color-green-100);
      color: var(--color-green-900);
    `}

  ${(props) =>
    props.$type === "unverified" &&
    css`
      background-color: var(--color-red-100);
      color: var(--color-red-900);
    `}
`;

function UserList() {
  const { isLoading, users, error } = useUsers();

  if (isLoading) return <TableLoader />;

  if (error) return <strong>Couldn't get users</strong>;
  return (
    <TableContainer>
      <Table>
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Student ID</Th>
            <Th>email</Th>
            <Th>Status</Th>
            <Th></Th>
          </Tr>
        </thead>
        <Tbody>
          {users?.map((user) => (
            <Tr key={user._id}>
              <Td>
                <Name>{user.name}</Name>
              </Td>
              <Td>
                <ID>{user._id}</ID>
              </Td>
              <Td>tao@gmail.com</Td>
              <Td>
                <Tag $type="verified">Verified</Tag>
              </Td>
              <Td>
                <ActionButton>
                  <BiDotsVerticalRounded size={20} />
                </ActionButton>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
