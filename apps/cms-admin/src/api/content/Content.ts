import { Image } from "../image/Image";

export type Content = {
  body: string | null;
  createdAt: Date;
  id: string;
  image?: Image | null;
  title: string | null;
  updatedAt: Date;
};
