import {List, TextField, Datagrid, NumberField, EditButton, DeleteButton, ShowButton} from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';


const useStyles = makeStyles({
    button: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        backgroundColor: 'Lavender',
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        '& svg': { color: 'black' }
    },
});

const MyEditButton = props => {
    const classes = useStyles();
    return <EditButton className={classes.button} {...props} />;
};

export const StorageList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <NumberField source="id" /> */}
            <NumberField source="corridor" />
            <NumberField source="shelf" />
            <NumberField source="box" />
            <TextField source="name" />
            <ShowButton/>
            <MyEditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);