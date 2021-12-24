import React from 'react';
import GridoneItems from './GridoneItems';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import data from './data.json';

const GridOne = () => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        style={{ padding: '3rem 0' }}>
        {data.map((data) => (
          <Grid item key={data.id} xs={12} md={6} lg={4}>
            <GridoneItems data={data} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GridOne;
