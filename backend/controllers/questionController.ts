import { ObjectId } from "mongodb";
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

export async function getAllQuestions(request: Request, response: Response) {
  try {
    const questions = await Question.find();

    response.status(200).json(questions);
  } catch (error) {
    console.log(error);
  }
}

export async function getQuestion(request: Request, response: Response) {
  try {
    const { id } = request.params;
    const question = await Question.findOne({ _id: new ObjectId(id) });

    response.status(200).json(question);
  } catch (error) {
    console.log(error);
  }
}

export async function editQuestion(request: Request, response: Response) {
  try {
    const { id } = request.params;
    const question = await Question.findByIdAndUpdate(id, request.body);
    response.status(200).json(question);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteQuestion(request: Request, response: Response) {
  try {
    const { id } = request.params;
    await Question.findByIdAndDelete(id);
    response.status(204).json(null);
  } catch (error) {
    console.log(error);
  }
}
