import {
  TextField,
  ReferenceField,
  SimpleShowLayout,
  Show,
  Button,
} from 'react-admin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const ProductstorageShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <ReferenceField source="storage_id" reference="storages">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="product_id" reference="products">
        <TextField source="name" />
      </ReferenceField>
      <Button
        href="/#/productstorages"
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
