import {List, Datagrid, TextField, ReferenceField} from "react-admin";

export const ProductstorageList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <NumberField source="id" /> */}
            <ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
            <ReferenceField source="storage_id" reference="storages"><TextField source="name" /></ReferenceField>
        </Datagrid>
    </List>
);