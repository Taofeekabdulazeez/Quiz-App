import { ObjectId } from "mongodb";
import Question from "../models/questionModel";
import { Request, Response } from "express";

export async function createQuestion(req: Request, res: Response) {
  try {
    const newQuestion = await Question.create(req.body);

    return res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

export async function getAllQuestions(req: Request, res: Response) {
  try {
    const questions = await Question.find();

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
}

export async function getQuestion(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const question = await Question.findOne({ _id: new ObjectId(id) });

    res.status(200).json({
      status: true,
      question,
    });
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
