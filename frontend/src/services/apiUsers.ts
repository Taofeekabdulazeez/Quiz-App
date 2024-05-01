import { User } from "../interfaces/interface";

export async function getAllUsers(): Promise<User[]> {
  const response = await fetch(`http://127.0.0.1:3000/api/users`);
  const data = await response.json();
  console.log(data);

  return data;
}

export async function getUser(id: number): Promise<User> {
  const response = await fetch(`http://127.0.0.1:3000/api/users/${id}`);
  const data = await response.json();

  console.log(data);

  return data;
}

export async function deleteUser(id: number) {
  await fetch(`http://127.0.0.1:3000/api/users/${id}`, {
    method: "DELETE",
  });
  console.log("deleted");
}
