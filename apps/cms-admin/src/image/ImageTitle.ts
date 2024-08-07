import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "altText";

export const ImageTitle = (record: TImage): string => {
  return record.altText?.toString() || String(record.id);
};
