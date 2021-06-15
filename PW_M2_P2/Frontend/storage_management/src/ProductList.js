import {List, TextField, Datagrid, NumberField, DeleteButton, EditButton, CreateButton} from "react-admin";

export const ProductList = props => (
    <List {...props}>
        <Datagrid>
            {/* <NumberField source="id" /> */}
            <TextField source="name" />
            <TextField source="type" />
            <NumberField source="uprice" />
            <NumberField source="stock" />
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);