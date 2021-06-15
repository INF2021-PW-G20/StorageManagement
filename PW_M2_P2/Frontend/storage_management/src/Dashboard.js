import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import inout from "@material-ui/icons/SyncAlt";
import Typography from '@material-ui/core/Typography';
import {TextField, DateField, ShowButton, FormDataConsumer, SelectInput, NumberField, Show, Resource, SimpleShowLayout, Admin } from "react-admin";

const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};


export default () => (
        <Card style={cardStyle}>
            <CardHeader
                title="HELLO"
                icon={inout}
            />
            <CardContent>
                
                <NumberField basePath="`http://[::1]:3000/products/count`"></NumberField>
            </CardContent>
            <CardActions style={{ textAlign: 'right' }}>
                <ShowButton color="primary" size="small" resource="products" href="/#/products" />
            </CardActions>
        </Card>
    )