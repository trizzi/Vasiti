import React from 'react';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { CardHeader, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { CardActions } from '@material-ui/core';
import { Button } from '@material-ui/core';

const GridoneItems = ({ data }) => {
  return (
    <Container maxWidth='lg'>
      <Grid columns={4}>
        <Grid>
          <Card elevation={0}>
            <CardMedia
              style={{
                width: '60px',
                height: '100px',
                borderRadius: '50%',
                padding: '2rem 9rem 1rem ',
              }}>
              <img src={data.image} alt='user-pictures' />
            </CardMedia>
            <CardHeader
              title={data.name}
              style={{
                color: '#000',
                fontFamily: 'Inter',
                fontWeight: '700',
              }}
            />
            <CardContent>
              <CardActions>
                <Button size='small' color='textSecondary'>
                  {data.locaton}
                </Button>
                <Button size='small' color='primary'>
                  {data.occupation}
                </Button>
              </CardActions>
              <Typography
                style={{
                  fontFamily: 'Inter',
                  fontWeight: '400',
                }}>
                {data.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GridoneItems;
