import React from 'react';
import GridtwoItems from './GridoneItems';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import secondData from './secondData.json';

const GridTwo = () => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        style={{ padding: '3rem 0' }}>
        {secondData.map((data) => (
          <Grid item xs={12} md={6} lg={4}>
            <GridtwoItems key={data.id} data={data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GridTwo;
