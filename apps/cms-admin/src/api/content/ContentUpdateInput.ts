import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type ContentUpdateInput = {
  body?: string | null;
  image?: ImageWhereUniqueInput | null;
  title?: string | null;
};
