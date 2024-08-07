import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ContentTitle } from "../content/ContentTitle";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="altText" source="altText" />
        <ReferenceArrayInput
          source="contents"
          reference="Content"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContentTitle} />
        </ReferenceArrayInput>
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
