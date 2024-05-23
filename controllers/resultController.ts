import Result from "../models/resultModel";
import { Request, Response } from "express";

export async function saveResult(request: Request, response: Response) {
  try {
    const {
      student_id,
      startTime,
      endTime,
      course,
      score,
      total,
      pass,
      status,
    } = request.body;
    const userResult = await Result.create({
      student_id,
      startTime,
      endTime,
      course,
      score,
      total,
      pass,
      status,
    });

    response.status(201).json({
      message: "Result posted Successfully!",
      userResult,
    });
  } catch (error) {
    console.log(error);
  }
}
