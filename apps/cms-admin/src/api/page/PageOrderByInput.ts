import { SortOrder } from "../../util/SortOrder";

export type PageOrderByInput = {
  author?: SortOrder;
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  published?: SortOrder;
  slug?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
