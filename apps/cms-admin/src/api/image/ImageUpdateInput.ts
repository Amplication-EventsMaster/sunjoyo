import { ContentUpdateManyWithoutImagesInput } from "./ContentUpdateManyWithoutImagesInput";

export type ImageUpdateInput = {
  altText?: string | null;
  contents?: ContentUpdateManyWithoutImagesInput;
  url?: string | null;
};
