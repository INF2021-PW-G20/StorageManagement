import React from 'react';
import {
  Create,
  SimpleForm,
  NumberInput,
  FunctionField,
  useDataProvider,
  Button,
} from 'react-admin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const InputoutputCreate = (props) => {
  const dataProvider = useDataProvider();
  const dateNow = new Date().toISOString();
  //   const [oper, setOper] = useState(0);
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
      <SimpleForm>
        {/* <NumberInput source="id" /> */}
        {/* <TextField value={dateNow} source="date_time" /> */}
        <FunctionField
          source="date_time"
          render={(io) => (io.date_time = dateNow)}
          hidden={true}
          label={dateNow}
        />
        <NumberInput source="quantity" />
        {/*  <SelectInput source="operation" label="qasd" />*/}

        <FunctionField
          source="operation"
          render={(io) => {
            return (
              <select
                onChange={({ target }) => {
                  io.operation = +target.value;
                }}
                style={{
                  background: 'unset',
                  border: '1px solid #333',
                  padding: '5px',
                  borderRadius: '3px',
                }}
              >
                <option value={0}>Saída</option>
                <option value={1}>Entrada</option>
              </select>
            );
          }}
        />

        {/* <NumberInput source="storage_id" />  */}

        {/* <ReferenceInput
          label="Storage"
          source="storage_id"
          reference="storages"
        >
          <SelectField optionText="name" />
        </ReferenceInput> */}
        <FunctionField
          source="storage_id"
          render={(io) => {
            return (
              <select
                onChange={({ target }) => {
                  io.storage_id = +target.value;
                }}
                style={{
                  background: 'unset',
                  border: '1px solid #333',
                  padding: '5px',
                  borderRadius: '3px',
                }}
              >
                <option value="" disabled hidden>
                  Storages
                </option>
                {operationStor.data.storages.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            );
          }}
        />
        <FunctionField
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
        />
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
