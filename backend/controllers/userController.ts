import { Request, Response } from "express";
import User from "../models/userModel";

export async function getAllUsers(request: Request, response: Response) {
  try {
    const users = await User.find();
    // console.log(users);
    response.status(200).json(users);
  } catch (error: any) {
    console.log(error);
  }
}

export async function getUser(request: Request, response: Response) {
  try {
    const id = Number(request.params.id);
    const user = await User.findOne({ id });

    response.status(200).json(user);
  } catch (error: any) {
    console.log(error);
  }
}

// export async function deleteUser(request: Request, response: Response) {
//   try {
//     const { id } = request.params;
//     users.filter((user) => user.id !== Number(id));

//     response.status(204).json(null);
//   } catch (error: any) {
//     console.log(error);
//   }
// }
