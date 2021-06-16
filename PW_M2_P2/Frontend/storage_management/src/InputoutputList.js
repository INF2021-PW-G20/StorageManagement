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

export const InputoutputList = (props) => (
  <List {...props}>
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
  </List>
);
