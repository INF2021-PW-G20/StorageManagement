import React from 'react';
import {
  Create,
  SimpleForm,
  NumberInput,
  FunctionField,
  useDataProvider,
  Button,
  ReferenceInput,
  SelectInput,
  RadioButtonGroupInput,
} from 'react-admin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { useHistory } from 'react-router-dom';

export const InputoutputCreate = (props) => {
  const dataProvider = useDataProvider();
  const dateNow = new Date().toISOString();
  // const [quant, setQuant] = React.useState(1);
  // const [stor, setStor] = React.useState([]);
  // const [prod, setProd] = React.useState([]);
  // const [oper, setOper] = React.useState(1);
  const [operationStor, setOperationStor] = React.useState({
    data: { storages: [], products: [] },
  });

  async function spList() {
    const storagesData = await dataProvider.getList('storages', {});
    const productsData = await dataProvider.getList('products', {});

    setOperationStor({
      ...operationStor,
      data: { storages: storagesData.data, products: productsData.data },
    });
  }
  React.useEffect(() => {
    spList();
  }, []);

  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <FunctionField
          source="date_time"
          render={(io) => (io.date_time = dateNow)}
          hidden={true}
          label={dateNow}
        />
        <NumberInput min={1} source="quantity" />
        <RadioButtonGroupInput
          source="operation"
          choices={[
            {
              id: 0,
              name: 'Saída',
            },
            { id: 1, name: 'Entrada' },
          ]}
        />
        <ReferenceInput
          label="Storage"
          source="storage_id"
          reference="storages"
          perPage={1000}
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput
          label="Product"
          source="product_id"
          reference="products"
          perPage={1000}
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        {/* <FunctionField
          source="product_id"
          render={(io) => {
            return (
              <select
                onChange={({ target }) => {
                  io.product_id = +target.value;
                }}
                style={{
                  background: 'unset',
                  border: '1px solid #333',
                  padding: '5px',
                  borderRadius: '3px',
                }}
              >
                <option value="" disabled hidden>
                  Products
                </option>
                {operationStor.data.products.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            );
          }}
        /> */}
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
    </Create>
  );
};
