import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PageWhereInput = {
  author?: StringNullableFilter;
  body?: StringNullableFilter;
  id?: StringFilter;
  published?: BooleanNullableFilter;
  slug?: StringNullableFilter;
  title?: StringNullableFilter;
};
