import Question from "../models/questionModel";
import { Request, Response } from "express";

export async function createQuestion(request: Request, response: Response) {
  try {
    const newQuestion = await Question.create({
      question: "What is your name?",
      options: ["Yusuf", "Muhammed", "Taofeek", "Basheer"],
      correctOption: 2,
    });

    return response.status(200).json(newQuestion);
  } catch (error) {
    console.log(error);
  }
}
