import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardHeader, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';

const GridtwoItems = ({ data }) => {
  return (
    <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box>
              <Card>
                <CardMedia>{data.image}</CardMedia>
                <CardHeader title={data.name} />
                <CardContent>
                  <Typography
                    variant='subtitle1'
                    color='textSecondary'>
                    {data.occupation}
                  </Typography>
                  <Typography>{data.text}</Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GridtwoItems;
