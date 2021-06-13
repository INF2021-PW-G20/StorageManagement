import { Edit, SimpleForm, NumberInput, ReferenceInput, SelectInput, TextInput} from "react-admin";

export const InputoutputEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput type="datetime-local" source="date_time"/>
            <NumberInput source="quantity" />
            <NumberInput source="operation" />
            <ReferenceInput source="storage_id" reference="storages"><SelectInput optionText="name" /></ReferenceInput>
            <ReferenceInput source="product_id" reference="products"><SelectInput optionText="name" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);