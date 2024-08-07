import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ImageTitle } from "../image/ImageTitle";

export const ContentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="body" multiline source="body" />
        <ReferenceInput source="image.id" reference="Image" label="image">
          <SelectInput optionText={ImageTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
