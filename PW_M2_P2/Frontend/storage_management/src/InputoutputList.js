import {List, Datagrid, TextField, NumberField, DateField,
    ReferenceField} from "react-admin";

    export const InputoutputList = props => (
        <List {...props}>
            <Datagrid rowClick="edit">
                {/* <NumberField source="id" /> */}
                <DateField source="date_time" />
                <NumberField source="quantity" />
                <NumberField source="operation" />
                <ReferenceField source="storage_id" reference="storages"><TextField source="name" /></ReferenceField>
                <ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
            </Datagrid>
        </List>
    );