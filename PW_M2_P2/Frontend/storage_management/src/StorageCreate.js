import { Create, SimpleForm, TextInput,
    NumberInput}
    from "react-admin";

export const StorageCreate = props => (
    <Create {...props}>
        <SimpleForm>
            {/* <NumberInput source="id" /> */}
            <NumberInput source="corridor" />
            <NumberInput source="shelf" />
            <NumberInput source="box" />
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);