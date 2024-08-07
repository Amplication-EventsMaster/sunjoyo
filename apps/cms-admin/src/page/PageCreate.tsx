import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const PageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="body" multiline source="body" />
        <BooleanInput label="Published" source="published" />
        <TextInput label="slug" source="slug" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
