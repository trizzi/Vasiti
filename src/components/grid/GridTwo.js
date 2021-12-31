import React from 'react';
import GridtwoItems from './GridtwoItems';
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
        {secondData.map((seconddata) => (
          <Grid item xs={12} md={6} lg={4}>
            <GridtwoItems
              key={seconddata.id}
              data={seconddata}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GridTwo;
