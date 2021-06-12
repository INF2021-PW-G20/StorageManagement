import { Edit, SimpleForm, TextInput, NumberInput} from "react-admin";

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            {/* <NumberInput source="id" /> */}
            <TextInput source="name" />
            <TextInput source="type" />
            <NumberInput source="uprice" />
            <NumberInput source="stock" />
        </SimpleForm>
    </Edit>
);