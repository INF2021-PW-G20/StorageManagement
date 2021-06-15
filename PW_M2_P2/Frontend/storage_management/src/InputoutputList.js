import {List, Datagrid, TextField, NumberField, DateField,
    ReferenceField, EditButton, DeleteButton, ShowButton} from "react-admin";

    export const InputoutputList = props => (
        <List {...props}>
            <Datagrid>
                {/* <NumberField source="id" /> */}
                <DateField source="date_time" showTime/>
                <NumberField source="quantity" />
                <NumberField source="operation" />
                <ReferenceField source="storage_id" reference="storages"><TextField source="name" /></ReferenceField>
                <ReferenceField source="product_id" reference="products"><TextField source="name" /></ReferenceField>
                <EditButton/>
                <DeleteButton/>
                <ShowButton/>

            </Datagrid>
        </List>
    );