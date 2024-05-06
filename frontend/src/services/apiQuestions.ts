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
