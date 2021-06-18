import { Edit, SimpleForm, Button, TextInput } from 'react-admin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const StorageEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      {/* <NumberInput source="id" /> */}
      {/* <NumberInput source="corridor" />
      <NumberInput source="shelf" />
      <NumberInput source="box" /> */}
      <TextInput source="name" />
      <Button
        href="/#/storages"
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
