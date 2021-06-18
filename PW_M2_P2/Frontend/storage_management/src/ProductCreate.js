import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  Button,
} from 'react-admin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm redirect="list">
      {/* <NumberInput source="id" /> */}
      <TextInput source="name" />
      <TextInput source="type" />
      <NumberInput source="uprice" />
      {/* <NumberInput source="stock" /> */}
      <Button
        href="/#/products"
        label="Back"
        style={{
          display: 'flex',
          maxWidth: 'max-content',
          marginLeft: 'auto',
        }}
      >
        <ArrowBackIcon />
      </Button>
    </SimpleForm>
  </Create>
);
