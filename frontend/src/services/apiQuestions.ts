import axios from "axios";
import { Question } from "../interfaces/interface";

const API_URL = `http://127.0.0.1:3000/api/questions`;

export async function getQuestions(): Promise<Question[]> {
  const { data } = await axios.get(API_URL);
  console.log(data);
  return data;
}
