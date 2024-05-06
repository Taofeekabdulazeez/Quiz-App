export interface User {
  _id: string;
  name: string;
  age: number;
}

export interface Question {
  _id: string;
  question: string;
  options: Array<string>;
  correctOption: number;
  points?: number;
}
