import {List, Datagrid, TextField, ReferenceField, ShowButton} from "react-admin";

export const ProductstorageList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            {/* <NumberField source="id" /> */}
            <ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
            <ReferenceField source="storage_id" reference="storages"><TextField source="name" /></ReferenceField>
            <ShowButton/>
        </Datagrid>
    </List>
);