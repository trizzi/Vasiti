import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardHeader, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

const GridoneItems = ({ data }) => {
  return (
    <Card>
      <CardMedia>{data.image}</CardMedia>
      <CardHeader title={data.name} />
      <CardContent>
        <Typography
          variant='subtitle1'
          color='textSecondary'>
          {data.locaton}
        </Typography>
        <Typography
          variant='subtitle1'
          color='textSecondary'>
          {data.occupation}
        </Typography>
        <Typography>{data.text}</Typography>
      </CardContent>
    </Card>
  );
};

export default GridoneItems;
