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
  FunctionField,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import { useMediaQuery } from '@material-ui/core';
// import { ReferenceManyToManyField } from '@react-admin/ra-relationships';

// const useStyles = makeStyles({
//   button: {
//     fontWeight: 'bold',
//     fontStyle: 'italic',
//     backgroundColor: 'Lavender',
//     // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
//     '& svg': { color: 'black' },
//   },
// });

// const MyEditButton = (props) => {
//   const classes = useStyles();
//   return <EditButton className={classes.button} {...props} />;
// };

export const StorageList = (props) => {
  const isSmall = useMediaQuery('(max-width:600px)');

  const divMobileResponsiveTable = (label, value) => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h3>{label}</h3>
        <span>{value}</span>
      </div>
    );
  };

  return (
    <List {...props}>
      {isSmall ? (
        <Datagrid style={{ margin: '15px' }}>
          <FunctionField
            source="corridor"
            render={(value) =>
              divMobileResponsiveTable('Corridor', value.corridor)
            }
          />

          <FunctionField
            source="box"
            render={(value) => divMobileResponsiveTable('Box', value.box)}
          />
          <FunctionField
            source="shelf"
            render={(value) => divMobileResponsiveTable('Shelf', value.shelf)}
          />
          <FunctionField
            source="name"
            render={(value) => divMobileResponsiveTable('Name', value.name)}
          />
          <ShowButton />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      ) : (
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
          <EditButton />
          <DeleteButton />
        </Datagrid>
      )}
    </List>
  );
};
