import { Edit, SimpleForm, TextInput,
    NumberInput}
    from "react-admin";

export const StorageEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            {/* <NumberInput source="id" /> */}
            <NumberInput source="corridor" />
            <NumberInput source="shelf" />
            <NumberInput source="box" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);