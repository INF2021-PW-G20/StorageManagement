import {
  Edit,
  SimpleForm,
  NumberInput,
  FunctionField,
  Button,
} from 'react-admin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const InputoutputEdit = (props) => {
  const dateNow = new Date().toISOString();
  return (
    <Edit {...props}>
      <SimpleForm>
        {/* <NumberInput source="id" /> */}
        <FunctionField
          source="date_time"
          render={(io) => (io.date_time = dateNow)}
          hidden={true}
          label={dateNow}
        />
        <NumberInput source="quantity" />
        {/* <NumberInput source="operation" /> */}
        {/* <ReferenceInput source="storage_id" reference="storages">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput source="product_id" reference="products">
          <SelectInput optionText="name" />
        </ReferenceInput> */}
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
      </SimpleForm>
    </Edit>
  );
};
