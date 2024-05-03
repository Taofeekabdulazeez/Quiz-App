import { useNavigate } from "react-router-dom";
import { User } from "../interfaces/interface";
import { useDeleteUser } from "../hooks/useDeleteUser";
import { FormEvent, useState } from "react";
import { useEditUser } from "../hooks/useEditUser";

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
      <li className="user">
        <span>{user.name}</span>
        <div>
          <button
            disabled={isEditing}
            onClick={() => setShowForm((show) => !show)}
          >
            {isEditing ? "updating" : `${showForm ? "cancel" : "edit"}`}
          </button>
          <button onClick={() => deleteUser(user._id)}>
            {isDeleting ? <span className="loader"></span> : "delete"}
          </button>
          <button onClick={() => navigate(`/users/${user._id}`)}>View</button>
        </div>
      </li>
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
