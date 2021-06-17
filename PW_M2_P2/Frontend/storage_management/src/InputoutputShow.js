import {
  TextField,
  NumberField,
  DateField,
  ReferenceField,
  SimpleShowLayout,
  Show,
  Button,
} from 'react-admin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const InputoutputShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <DateField source="date_time" showTime />
      <NumberField source="quantity" />
      <NumberField source="operation" />
      <ReferenceField linkType="show" source="storage_id" reference="storages">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField linkType="show" source="product_id" reference="products">
        <TextField source="name" />
      </ReferenceField>
      <Button
        href="/#/inputoutputs"
        label="Back"
        style={{
          display: 'flex',
          maxWidth: 'max-content',
          marginLeft: 'auto',
        }}
      >
        <ArrowBackIcon />
      </Button>
    </SimpleShowLayout>
  </Show>
);
