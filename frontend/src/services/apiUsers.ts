import axios from "axios";
import { User } from "../interfaces/interface";

const API_URL = `http://127.0.0.1:3000/api/users`;

export async function getAllUsers(): Promise<User[]> {
  const { data } = await axios.get(API_URL);

  return data;
}

export async function getUser(id: string): Promise<User> {
  const { data } = await axios.get(`${API_URL}/${id}`);

  return data;
}

export async function deleteUser(id: string) {
  await axios.delete(`${API_URL}/${id}`);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createUser(data: any) {
  const response = await axios.post(API_URL, data);

  return response.data;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function updateUser(id: string, data: any) {
  const response = await axios.patch(`${API_URL}/${id}`, data);

  return response.data;
}
