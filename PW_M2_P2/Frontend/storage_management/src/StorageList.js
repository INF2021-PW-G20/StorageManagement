import {List, TextField, Datagrid, NumberField, EditButton} from "react-admin";

export const StorageList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <NumberField source="id" /> */}
            <NumberField source="corridor" />
            <NumberField source="shelf" />
            <NumberField source="box" />
            <TextField source="name" />
            <EditButton/>
        </Datagrid>
    </List>
);