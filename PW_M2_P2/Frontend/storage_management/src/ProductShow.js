import {
  TextField,
  NumberField,
  SimpleShowLayout,
  Show,
  Button,
} from 'react-admin';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useEffect, useState } from 'react';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableHead } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

export const ProductShow = (props) => {
  const { id } = useParams();
  const [storages, setStorages] = useState([]);

  async function dataStorages() {
    const res = await fetch(`http://localhost:3000/products/${id}/storages`, {
      method: 'GET',
    });

    const json = await res.json();
    setStorages(json);
  }

  React.useEffect(() => {
    dataStorages();
  }, []);

  return (
    <div>
      <Show {...props}>
        <SimpleShowLayout>
          {/* <NumberField source="id" /> */}
          <TextField source="name" />
          <TextField source="type" />
          <NumberField source="uprice" />
          <NumberField source="stock" />
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
          {/* <Link
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '5px 15px',
              backgroundColor: 'Lavender',
              maxWidth: '67px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '3px',
              marginLeft: 'auto',
            }}
            to={`/products`}
          >
            <ArrowBackIcon style={{ marginRight: '5px', marginTop: '5px' }} />
            Back
          </Link> */}
        </SimpleShowLayout>
      </Show>
      {storages.length ? (
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Corridor</TableCell>
                <TableCell align="center">Box</TableCell>
                <TableCell align="center">Shelf</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {storages.map((store) => (
                <TableRow key={store.id}>
                  <TableCell style={{ padding: '12px' }} align="center">
                    {store.corridor}
                  </TableCell>
                  <TableCell style={{ padding: '12px' }} align="center">
                    {store.box}
                  </TableCell>
                  <TableCell style={{ padding: '12px' }} align="center">
                    {store.shelf}
                  </TableCell>
                  <TableCell style={{ padding: '12px' }} align="center">
                    {store.name}
                  </TableCell>
                  <TableCell style={{ padding: '12px' }} align="center">
                    <Button
                      href={`/#/storages/${store.id}`}
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
                      href={`/#/storages/${store.id}/show`}
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
      ) : (
        ''
      )}
    </div>
  );
};
