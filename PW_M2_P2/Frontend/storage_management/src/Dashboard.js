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
import { PieChart } from 'react-minimal-pie-chart';
import { Button } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

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
        <CardHeader
          title="PRODUCTS"
          subheader={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>Has Stock</span>
              <h2>
                {dataProduct.length ? stockNumber : 'A carregar produtos...'}
              </h2>
            </div>
          }
        />
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '-25px',
          }}
        >
          <PieChart
            style={{ maxWidth: '300px', marginBottom: '20px' }}
            animate
            animationDuration={500}
            animationEasing="ease-out"
            data={[{ value: stockNumber, color: '#55C937' }]}
            totalValue={dataProduct.length}
            lineWidth={20}
            label={({ dataEntry }) =>
              ((dataEntry.value * 100) / dataProduct.length).toFixed(1) + '%'
            }
            labelStyle={{
              fontSize: '20px',
              fontFamily: 'sans-serif',
              fill: '#55C937',
            }}
            labelPosition={0}
          />
          <select
            style={{
              background: 'unset',
              border: '1px solid #333',
              padding: '5px',
              borderRadius: '3px',
            }}
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
        <CardActions style={{ justifyContent: 'end', marginBottom: 0 }}>
          {dataSelect.prodStock ? (
            <Button
              href={`/#/products/${dataSelect.prodStock}/show`}
              label="Show"
              style={{
                display: 'flex',
                maxWidth: 'max-content',
                marginLeft: 'auto',
              }}
            >
              <VisibilityIcon style={{ color: '#55C937' }} />
            </Button>
          ) : (
            // <Link to={`/products/${dataSelect.prodStock}/show`}>
            //   Show details
            // </Link>
            'Select a product to show details'
          )}
        </CardActions>
      </Card>
      <Card className={style.cardStyle}>
        <CardHeader
          title="PRODUCTS"
          icon={inout}
          subheader={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>No Stock</span>
              <h2>
                {dataProduct.length
                  ? dataProduct.length - stockNumber
                  : 'A carregar produtos...'}
              </h2>
            </div>
          }
        />
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '-25px',
          }}
        >
          <PieChart
            style={{ maxWidth: '300px', marginBottom: '20px' }}
            animate
            animationDuration={500}
            animationEasing="ease-out"
            data={[
              { value: dataProduct.length - stockNumber, color: '#C90000' },
            ]}
            totalValue={dataProduct.length}
            lineWidth={20}
            label={({ dataEntry }) =>
              ((dataEntry.value * 100) / dataProduct.length).toFixed(1) + '%'
            }
            labelStyle={{
              fontSize: '20px',
              fontFamily: 'sans-serif',
              fill: '#C90000',
            }}
            labelPosition={0}
          />
          <select
            style={{
              background: 'unset',
              border: '1px solid #333',
              padding: '5px',
              borderRadius: '3px',
            }}
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
            <Button
              href={`/#/products/${dataSelect.prodNoStock}/show`}
              label="Show"
              style={{
                display: 'flex',
                maxWidth: 'max-content',
                marginLeft: 'auto',
              }}
            >
              <VisibilityIcon style={{ color: '#C90000' }} />
            </Button>
          ) : (
            // <Link to={`/products/${dataSelect.prodNoStock}/show`}>
            //   Show details
            // </Link>
            'Select a product to show details'
          )}
        </CardActions>
      </Card>
    </div>
  );
};
