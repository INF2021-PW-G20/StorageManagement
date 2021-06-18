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
  ReferenceManyField,
  ResourceContextProvider,
  SimpleList,
  ShowButton,
} from 'react-admin';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useParams } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableHead } from '@material-ui/core';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

{
  /* 
PRODUCT

id: 96
​​
name: "Variador SMD Lenze AC Tech"
​​
stock: 7
​​
type: " Lenze AC Tech"
​​
uprice: 35

params.getValue(params.id, 'uprice') || '',
*/
}

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'stock', headerName: 'Stock', width: 150 },
  { field: 'type', headerName: 'Type', width: 200 },
  { field: 'uprice', headerName: 'Price', width: 150 },
];

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
//   },
// ];

export const StorageShow = (props) => {
  const { id } = useParams();
  const dataProvider = useDataProvider();
  const [prods, setProds] = React.useState([]);
  // console.log(id);
  // console.log(dataProvider);

  async function storeProducts() {
    const res = await fetch(`http://localhost:3000/storages/${id}/products`, {
      method: 'GET',
    });

    const json = await res.json();
    console.log(json);
    console.log(res);

    setProds(json);

    // const res = await dataProvider.getManyReference('productstorages', {
    //   target: 'storage_id',
    //   id: id,
    // });
    // setProds(res.data);
    // console.log(res);
    // console.log(props);
  }

  React.useEffect(() => {
    storeProducts();
  }, []);

  // React.useEffect(() => {
  //   console.log(prods);
  // }, [prods]);

  return (
    <div>
      <Show {...props}>
        <SimpleShowLayout>
          <NumberField source="id" />
          <NumberField source="corridor" />
          <NumberField source="shelf" />
          <NumberField source="box" />
          <TextField source="name" />
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
        </SimpleShowLayout>

        {/* <ReferenceManyField
          addLabel={false}
          reference="products"
          target="product_id"
        >
          <Datagrid>
            <DateField source="created_at" />
            <TextField source="body" />
            <ShowButton source="action" />
          </Datagrid>
        </ReferenceManyField> */}
      </Show>

      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prods.map((product) => (
              <TableRow key={product.id}>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.type}</TableCell>
                <TableCell align="center">{product.stock}</TableCell>
                <TableCell align="center">{product.uprice}</TableCell>
                {/* <TableCell align="center">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <Link
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '5px 15px',
                        backgroundColor: 'Lavender',
                        maxWidth: '67px',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        borderRadius: '3px',
                      }}
                      to={`products/${product.id}`}
                    >
                      <EditIcon
                        style={{ marginRight: '5px', marginTop: '5px' }}
                      />
                      Edit
                    </Link>

                    <Link
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '5px 15px',
                        backgroundColor: 'Lavender',
                        maxWidth: '67px',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        borderRadius: '3px',
                      }}
                      to={`products/${product.id}`}
                    >
                      <VisibilityIcon
                        style={{ marginRight: '5px', marginTop: '5px' }}
                      />
                      Show
                    </Link>
                  </div>
                </TableCell> */}
                <TableCell style={{ padding: '12px' }} align="center">
                  <Button
                    href={`/#/products/${product.id}`}
                    label="Edit"
                    style={{
                      display: 'flex',
                      maxWidth: 'max-content',
                      marginLeft: 'auto',
                      padding: '0',
                    }}
                  >
                    <EditIcon />
                  </Button>
                </TableCell>
                <TableCell style={{ padding: '12px' }} align="center">
                  <Button
                    href={`/#/products/${product.id}/show`}
                    label="Show"
                    style={{
                      display: 'flex',
                      maxWidth: 'max-content',
                      marginLeft: 'auto',
                      padding: '0',
                    }}
                  >
                    <VisibilityIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <DataGrid rows={prods} columns={columns} pageSize={5} checkboxSelection /> */}
      {/* <List
        hasShow
        resource="productstorages"
        basePath="/productstorages"
        hasCreate={false}
        record={prods}
      >
        <Datagrid>
          <NumberField source="product_id" />
          <NumberField source="storage_id" />
        </Datagrid>
      </List>{' '}
    
      {prods.map((item) => {
        return <p>{item.name}</p>;
      })} */}
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
