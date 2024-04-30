import { Request, Response } from "express";

export async function getAllUsers(request: Request, response: Response) {
  response.status(200).json({
    status: "success",
    results: 10,
    data: { name: "Taofeek", age: 23 },
  });
  // response.send("Hello");
}

export async function getUser(request: Request, response: Response) {}
