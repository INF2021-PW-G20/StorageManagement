import React from 'react';
import { useState } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateTimeInput,
  DateInput,
  FunctionField,
  TextField,
  AutocompleteInput,
  useDataProvider,
} from 'react-admin';

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
        />
        <NumberInput source="quantity" />
        <FunctionField
          source="operation"
          render={(io) => (
            <select
              onChange={({ target }) => {
                io.operation = +target.value;
              }}
            >
              <option value={0}>Saída</option>
              <option value={1}>Entrada</option>
            </select>
          )}
        />
        {/* <NumberInput source="storage_id" /> */}
        <FunctionField
          source="storage_id"
          render={(io) => {
            return (
              <select
                onChange={({ target }) => {
                  io.storage_id = +target.value;
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
      </SimpleForm>
    </Create>
  );
};
