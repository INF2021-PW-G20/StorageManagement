import { Create, SimpleForm, TextInput,
    NumberInput, DateTimeInput}
    from "react-admin";

export const InputoutputCreate = props => (
    <Create {...props}>
        <SimpleForm>
            {/* <NumberInput source="id" /> */}
            <DateTimeInput source="datetime" />
            <NumberInput source="quantity" />
            <TextInput source="operation" />
            <NumberInput source="storage_id" />
            <NumberInput source="product_id" />
        </SimpleForm>
    </Create>
);