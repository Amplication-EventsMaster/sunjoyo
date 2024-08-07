import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type ContentWhereInput = {
  body?: StringNullableFilter;
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
  title?: StringNullableFilter;
};
