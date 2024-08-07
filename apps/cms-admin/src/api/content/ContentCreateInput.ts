import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type ContentCreateInput = {
  body?: string | null;
  image?: ImageWhereUniqueInput | null;
  title?: string | null;
};
