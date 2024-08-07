import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const PageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="body" multiline source="body" />
        <BooleanInput label="Published" source="published" />
        <TextInput label="slug" source="slug" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
