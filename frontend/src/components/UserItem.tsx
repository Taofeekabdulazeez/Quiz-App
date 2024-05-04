import { useNavigate } from "react-router-dom";
import { User } from "../interfaces/interface";
import { useDeleteUser } from "../hooks/useDeleteUser";
import { FormEvent, useState } from "react";
import { useEditUser } from "../hooks/useEditUser";
import ActionButton from "../ui/ActionButton";
import FlexRow from "../ui/FlexRow";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit, FiEye } from "react-icons/fi";
import Heading from "../ui/Heading";
import { HiDotsVertical } from "react-icons/hi";

type UserItemProps = {
  user: User;
};

function UserItem({ user }: UserItemProps) {
  const navigate = useNavigate();
  const { isDeleting, deleteUser } = useDeleteUser();
  const { isEditing, editUser } = useEditUser();
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState(user.name);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    editUser({ id: user._id, data: { name: newName } });
    setShowForm(false);
  };

  return (
    <>
      <FlexRow as="li" $gap="6rem">
        <Heading>{user.name}</Heading>
        <FlexRow>
          <ActionButton
            $type="edit"
            disabled={isEditing}
            onClick={() => setShowForm((show) => !show)}
          >
            <FiEdit size={16} />
            {isEditing ? "Updating" : `${showForm ? "Cancel" : "Edit"}`}
          </ActionButton>
          <ActionButton $type="delete" onClick={() => deleteUser(user._id)}>
            <RiDeleteBinLine size={16} />
            {isDeleting ? <span className="loader"></span> : "Delete"}
          </ActionButton>
          <ActionButton
            $type="view"
            onClick={() => navigate(`/users/${user._id}`)}
          >
            <FiEye size={16} />
            View
          </ActionButton>
          <ActionButton>
            <HiDotsVertical size={16} />
          </ActionButton>
        </FlexRow>
      </FlexRow>
      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={newName}
              onChange={(event) => setNewName(event.target.value)}
            />
          </div>
          <button disabled={isEditing}>done</button>
        </form>
      )}
    </>
  );
}

export default UserItem;
