import {List, TextField, Datagrid, NumberField} from "react-admin";

export const ProductList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <NumberField source="id" /> */}
            <TextField source="name" />
            <TextField source="type" />
            <NumberField source="uprice" />
            <NumberField source="stock" />
        </Datagrid>
    </List>
);