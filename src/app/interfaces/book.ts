import { Author } from "./author";

export interface Book {
  id: string;
  title: string;
  description: string;
  price: number;
  author: Author;
}
