import { useUsers } from "../hooks/useUsers";
import styled, { css } from "styled-components";
import TableLoader from "../../../ui/TableLoader";
import Menus from "../../../components/Menus";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdEye } from "react-icons/io";

export default UserList;

const TableContainer = styled.div`
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

const Button = styled.button`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
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
                <Menus>
                  <Menus.Toggle id={user._id} />
                  <Menus.List id={user._id}>
                    <li>
                      <Button>
                        <IoMdEye size={18} color="var(--color-gray-500)" /> View
                      </Button>
                    </li>
                    <li>
                      <Button>
                        <MdEdit size={18} color="var(--color-gray-500)" /> Edit
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
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
