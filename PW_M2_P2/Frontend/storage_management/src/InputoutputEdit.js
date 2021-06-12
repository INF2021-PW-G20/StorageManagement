import { Edit, SimpleForm, NumberInput, DateTimeInput, ReferenceInput, SelectInput} from "react-admin";

export const InputoutputEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <DateTimeInput source="date_time"/>
            <NumberInput source="quantity" />
            <NumberInput source="operation" />
            <ReferenceInput source="storage_id" reference="storages"><SelectInput optionText="name" /></ReferenceInput>
            <ReferenceInput source="product_id" reference="products"><SelectInput optionText="name" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);