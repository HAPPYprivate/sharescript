
export interface Script {
  id: string;
  title: string;
  description: string;
  author: string;
  content: string;
  language: string;
  tags: string[];
  dateAdded: Date;
  likes: number;
  downloads: number;
}
