import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  ReferenceField,
  EditButton,
  DeleteButton,
  ShowButton,
  FunctionField,
} from 'react-admin';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import { useMediaQuery } from '@material-ui/core';

export const InputoutputList = (props) => {
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
            source="date_time"
            render={(value) =>
              divMobileResponsiveTable('Date, Time', value.date_time)
            }
          />

          <FunctionField
            source="quantity"
            render={(value) =>
              divMobileResponsiveTable('Quantity', value.quantity)
            }
          />
          <FunctionField
            source="operation"
            render={(value) =>
              divMobileResponsiveTable(
                'Operation',
                value.operation ? (
                  <CheckCircleRoundedIcon style={{ color: '#55C937' }} />
                ) : (
                  <CancelRoundedIcon style={{ color: '#F70C37' }} />
                ),
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
          <ShowButton />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      ) : (
        <Datagrid rowClick="edit">
          {/* <NumberField source="id" /> */}
          <DateField source="date_time" showTime />
          <NumberField source="quantity" />
          <FunctionField
            source="operation"
            render={(inputoutput) =>
              inputoutput.operation ? (
                <CheckCircleRoundedIcon style={{ color: '#55C937' }} />
              ) : (
                <CancelRoundedIcon style={{ color: '#F70C37' }} />
              )
            }
          />
          <ReferenceField source="storage_id" reference="storages">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="product_id" reference="products">
            <TextField source="name" />
          </ReferenceField>
          <EditButton />
          <DeleteButton />
          <ShowButton />
        </Datagrid>
      )}
    </List>
  );
};
