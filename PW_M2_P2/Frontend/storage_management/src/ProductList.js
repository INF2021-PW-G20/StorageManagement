import { useMediaQuery } from '@material-ui/core';
import {
  List,
  TextField,
  Datagrid,
  NumberField,
  DeleteButton,
  EditButton,
  ShowButton,
  FunctionField,
  Filter,
  SearchInput,
} from 'react-admin';

const PostFilter = (props) => (
  <Filter {...props}>
    <SearchInput title="Name" placeholder="Name" source="name" alwaysOn />
    <SearchInput title="Type" placeholder="Type" source="type" />
  </Filter>
);

export const ProductList = (props) => {
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
    <List filters={<PostFilter />} {...props}>
      {isSmall ? (
        <Datagrid style={{ margin: '15px' }}>
          <FunctionField
            source="name"
            render={(value) => divMobileResponsiveTable('Name', value.name)}
          />

          <FunctionField
            source="type"
            render={(value) => divMobileResponsiveTable('Type', value.type)}
          />
          <FunctionField
            source="uprice"
            render={(value) => divMobileResponsiveTable('Price', value.uprice)}
          />
          <FunctionField
            source="stock"
            render={(value) => divMobileResponsiveTable('Stock', value.stock)}
          />
          <ShowButton />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      ) : (
        <Datagrid>
          <TextField source="name" />
          <TextField source="type" />
          <NumberField source="uprice" />
          <NumberField source="stock" />
          <ShowButton />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      )}
    </List>
  );
};
