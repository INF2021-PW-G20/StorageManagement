import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  ShowButton,
  FunctionField,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

export const ProductstorageList = (props) => {
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
            source="product_id"
            render={() =>
              divMobileResponsiveTable(
                'Product',
                <ReferenceField source="product_id" reference="products">
                  <TextField source="name" />
                </ReferenceField>,
              )
            }
          />
          <FunctionField
            source="storage_id"
            render={() =>
              divMobileResponsiveTable(
                'Storage',
                <ReferenceField source="storage_id" reference="storages">
                  <TextField source="name" />
                </ReferenceField>,
              )
            }
          />
        </Datagrid>
      ) : (
        <Datagrid rowClick="show">
          {/* <NumberField source="id" /> */}
          <ReferenceField source="product_id" reference="products">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="storage_id" reference="storages">
            <TextField source="name" />
          </ReferenceField>
          <ShowButton />
        </Datagrid>
      )}
    </List>
  );
};
