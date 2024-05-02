import { FormEvent, useState } from "react";
import { useCreateUser } from "../hooks/useCreateUser";

function CreateForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const { isCreating, createUser } = useCreateUser();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !age) return;

    createUser({ name, age: Number(age) });

    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </div>
      <button disabled={isCreating}>
        {isCreating ? "Adding user" : "Add user"}
      </button>
    </form>
  );
}

export default CreateForm;
