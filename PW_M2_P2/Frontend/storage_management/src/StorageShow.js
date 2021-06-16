import React, { useState } from 'react';
import {
  Show,
  List,
  SimpleShowLayout,
  TextField,
  NumberField,
  Button,
  useDataProvider,
  Datagrid,
} from 'react-admin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useParams } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
];

export const StorageShow = (props) => {
  const { id } = useParams();
  const dataProvider = useDataProvider();
  const [prods, setProds] = React.useState([]);
  console.log(id);
  console.log(dataProvider);

  async function storeProducts() {
    const res = await dataProvider.getManyReference('productstorages', {
      target: 'storage_id',
      id: id,
    });
    setProds(res.data);
    console.log(res);
  }

  React.useEffect(() => {
    storeProducts();
  }, []);

  return (
    <div>
      <Show {...props}>
        <SimpleShowLayout>
          {/* <NumberField source="id" /> */}
          <NumberField source="corridor" />
          <NumberField source="shelf" />
          <NumberField source="box" />
          <TextField source="name" />
          <Button href="/#/storages" label="Back" icon={ArrowBackIcon} />
        </SimpleShowLayout>
      </Show>
    </div>
  );
};

{
  /* <ReferenceManyField reference="books" target="author_id"><SingleFieldList><ChipField source="title" /></SingleFieldList></ReferenceManyField> */
}
// export const StorageList = (props) => {
//   console.log(props);
//   return (
//     <List {...props}>
//       <Datagrid>
//         {/* <NumberField source="id" /> */}
//         <NumberField source="corridor" />
//         <NumberField source="shelf" />
//         <NumberField source="box" />
//         <TextField source="name" />
//         {/* <ReferenceManyToManyField
//             reference="products"
//             through="productstorages"
//             using="product_id,storage_id"
//           >
//             <Datagrid>
//               <TextField source="name" />
//               <TextField source="stock" />
//             </Datagrid>
//           </ReferenceManyToManyField> */}
//         <ShowButton />
//         <MyEditButton />
//         <DeleteButton />
//       </Datagrid>
//     </List>
//   );
// };
