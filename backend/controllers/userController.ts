import { Request, Response } from "express";
import User from "../models/userModel";
import { ObjectId } from "mongodb";

export async function getAllUsers(request: Request, response: Response) {
  try {
    const users = await User.find();
    response.status(200).json(users);
  } catch (error: any) {
    console.log(error);
  }
}

export async function getUser(request: Request, response: Response) {
  try {
    const { id } = request.params;
    const user = await User.findOne({ _id: new ObjectId(id) });

    response.status(200).json(user);
  } catch (error: any) {
    console.log(error);
  }
}

export async function deleteUser(request: Request, response: Response) {
  try {
    const id = request.params.id;
    await User.findByIdAndDelete(id);

    response.status(204).json(null);
  } catch (error: any) {
    console.log(error);
  }
}

export async function createUser(request: Request, response: Response) {
  try {
    const newUser = await User.create(request.body);

    return response.status(200).json(newUser);
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(request: Request, resposne: Response) {
  const { id } = request.params;
  try {
    const user = await User.findOneAndUpdate({ _id: id }, request.body, {
      new: true,
    });

    return resposne.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
}
