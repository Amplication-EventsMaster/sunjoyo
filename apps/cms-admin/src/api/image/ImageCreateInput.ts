import { ContentCreateNestedManyWithoutImagesInput } from "./ContentCreateNestedManyWithoutImagesInput";

export type ImageCreateInput = {
  altText?: string | null;
  contents?: ContentCreateNestedManyWithoutImagesInput;
  url?: string | null;
};
