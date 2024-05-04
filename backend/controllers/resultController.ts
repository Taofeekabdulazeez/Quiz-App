import Result from "../models/resultModel";
import { Request, Response } from "express";

export async function saveResult(request: Request, response: Response) {
  try {
    const userResult = await Result.create({
      student_id: "6635f85c91234a86450e1712",
      startTime: "7pm",
      endTime: "7:15pm",
      course: "GNS112",
      score: 20,
      total: 30,
      pass: true,
      status: "completed",
    });

    response.status(200).json(userResult);
  } catch (error) {
    console.log(error);
  }
}
