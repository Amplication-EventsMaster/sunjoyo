import { Content } from "../content/Content";

export type Image = {
  altText: string | null;
  contents?: Array<Content>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  url: string | null;
};
