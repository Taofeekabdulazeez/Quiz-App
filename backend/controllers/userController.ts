import { Request, Response } from "express";
import { users } from "../data/data";
import fs from "fs";

fs.readFile("./users.json", "utf-8", (error, data) => {
  console.log(data);
});

export async function getAllUsers(request: Request, response: Response) {
  try {
    response.status(200).json(users);
  } catch (error: any) {
    console.log(error);
  }
}

export async function getUser(request: Request, response: Response) {
  try {
    const { id } = request.params;
    const user = users.find((user) => user.id === Number(id));

    response.status(200).json(user);
  } catch (error: any) {
    console.log(error);
  }
}

export async function deleteUser(request: Request, response: Response) {
  try {
    const { id } = request.params;
    users.filter((user) => user.id !== Number(id));

    response.status(204).json(null);
  } catch (error: any) {
    console.log(error);
  }
}
