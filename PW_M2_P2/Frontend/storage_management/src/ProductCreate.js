import { Create, SimpleForm, TextInput,
    NumberInput}
    from "react-admin";

export const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm>
            {/* <NumberInput source="id" /> */}
            <TextInput source="name" />
            <TextInput source="type" />
            <NumberInput source="uprice" />
            <NumberInput source="stock" />
        </SimpleForm>
    </Create>
);