import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Pages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="author" source="author" />
        <TextField label="body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Published" source="published" />
        <TextField label="slug" source="slug" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
