import axios from "axios";
import { Question } from "../interfaces/interface";

const API_URL = `http://127.0.0.1:3000/api/questions`;

export async function getQuestions(): Promise<Question[]> {
  const { data } = await axios.get(API_URL);
  return data;
}

export async function getQuestion(id: string): Promise<Question> {
  const { data } = await axios.get(`${API_URL}/${id}`);

  return data;
}

export async function editQuestion(
  id: string,
  data: Question
): Promise<Question> {
  const { data: question } = await axios.put(`${API_URL}/${id}`, data);

  return question;
}

export async function deleteQuestion(id: string): Promise<null> {
  await axios.delete(`${API_URL}/${id}`);

  return null;
}

export async function uploadQuestion(data: {
  question: string;
  options: string[];
  correctOption: number;
}) {
  await axios.post(API_URL, data);
}
