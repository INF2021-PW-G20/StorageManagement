import { Edit, SimpleForm, TextInput, NumberInput, Button } from 'react-admin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
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
  </Edit>
);
