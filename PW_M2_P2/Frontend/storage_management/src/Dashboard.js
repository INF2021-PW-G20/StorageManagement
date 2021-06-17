import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import inout from '@material-ui/icons/SyncAlt';
import Typography from '@material-ui/core/Typography';
import {
  TextField,
  DateField,
  ShowButton,
  FormDataConsumer,
  SelectInput,
  NumberField,
  Show,
  Resource,
  SimpleShowLayout,
  Admin,
} from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import style from './Dashboard.module.css';
import { Link } from 'react-router-dom';

export default () => {
  const [dataProduct, setDataProduct] = React.useState([]);
  const [stockNumber, setStockNumber] = React.useState(0);
  const [dataSelect, setDataSelect] = React.useState({
    prodStock: '',
    prodNoStock: '',
  });

  async function productsData() {
    const res = await fetch(`http://localhost:3000/products`, {
      method: 'GET',
    });

    const json = await res.json();

    setDataProduct(json);
    setStockNumber(json.filter((item) => item.stock > 0).length);
  }
  React.useEffect(() => {
    productsData();
  }, []); //Usado para renderizar só a primeira vez
  React.useEffect(() => {
    console.log('novo!');
    console.log(dataSelect);
  }, [dataSelect]);
  return (
    <div className={style.gridDashboard}>
      <Card className={style.cardStyle}>
        <CardHeader title="PRODUCTS" icon={inout} subheader="Has stock" />
        <CardContent>
          <p>{dataProduct.length ? stockNumber : 'A carregar produtos...'}</p>
          <select
            value={dataSelect.prodStock}
            onChange={(e) => {
              console.log('antigo!');
              console.log(dataSelect);
              setDataSelect({ ...dataSelect, prodStock: e.target.value });
            }}
          >
            <option value="" disabled hidden>
              Products
            </option>
            {dataProduct
              .filter((item) => item.stock > 0)
              .map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </CardContent>
        <CardActions style={{ textAlign: 'right' }}>
          {dataSelect.prodStock ? (
            <Link to={`/products/${dataSelect.prodStock}/show`}>
              Show details
            </Link>
          ) : (
            'Select a product to show details'
          )}
        </CardActions>
      </Card>

      <Card className={style.cardStyle}>
        <CardHeader title="PRODUCTS" icon={inout} subheader="No stock" />
        <CardContent>
          <p>
            {dataProduct.length
              ? dataProduct.length - stockNumber
              : 'A carregar produtos...'}
          </p>
          <select
            value={dataSelect.prodNoStock}
            onChange={({ target }) =>
              setDataSelect({ ...dataSelect, prodNoStock: target.value })
            }
          >
            <option value="" disabled hidden>
              Products
            </option>
            {dataProduct
              .filter((item) => item.stock === 0)
              .map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </CardContent>
        <CardActions style={{ justifyContent: 'end', marginBottom: 0 }}>
          {dataSelect.prodNoStock ? (
            <Link to={`/products/${dataSelect.prodNoStock}/show`}>
              Show details
            </Link>
          ) : (
            'Select a product to show details'
          )}
        </CardActions>
      </Card>
    </div>
  );
};
