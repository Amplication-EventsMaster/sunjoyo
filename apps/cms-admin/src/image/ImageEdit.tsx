import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ContentTitle } from "../content/ContentTitle";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
