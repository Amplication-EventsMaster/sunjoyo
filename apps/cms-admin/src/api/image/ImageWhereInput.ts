import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContentListRelationFilter } from "../content/ContentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ImageWhereInput = {
  altText?: StringNullableFilter;
  contents?: ContentListRelationFilter;
  id?: StringFilter;
  url?: StringNullableFilter;
};
