import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  Button,
} from 'react-admin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const StorageCreate = (props) => (
  <Create {...props}>
    <SimpleForm redirect="list">
      {/* <NumberInput source="id" /> */}
      <NumberInput min={1} source="corridor" />
      <NumberInput min={1} source="shelf" />
      <NumberInput min={1} source="box" />
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
  </Create>
);
