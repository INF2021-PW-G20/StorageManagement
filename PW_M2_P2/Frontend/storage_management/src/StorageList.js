import {
  List,
  TextField,
  Datagrid,
  NumberField,
  EditButton,
  DeleteButton,
  ShowButton,
  SingleFieldList,
  ChipField,
  Pagination,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
// import { ReferenceManyToManyField } from '@react-admin/ra-relationships';

const useStyles = makeStyles({
  button: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    backgroundColor: 'Lavender',
    // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
    '& svg': { color: 'black' },
  },
});

const MyEditButton = (props) => {
  const classes = useStyles();
  return <EditButton className={classes.button} {...props} />;
};

export const StorageList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        {/* <NumberField source="id" /> */}
        <NumberField source="corridor" />
        <NumberField source="shelf" />
        <NumberField source="box" />
        <TextField source="name" />
        {/* <ReferenceManyToManyField
          reference="products"
          through="productstorages"
          using="product_id,storage_id"
        >
          <Datagrid>
            <TextField source="name" />
            <TextField source="stock" />
          </Datagrid>
        </ReferenceManyToManyField> */}
        <ShowButton />
        <MyEditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
