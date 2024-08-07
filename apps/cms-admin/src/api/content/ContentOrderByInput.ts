import { SortOrder } from "../../util/SortOrder";

export type ContentOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
