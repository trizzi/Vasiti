import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { CardHeader, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { CardActions } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  greenButton: {
    background: '#049A01',
    color: '#049A01',
  },
  blueButton: {
    background: '#0D019A',
    color: '#0D019A',
  },
}));

const GridoneItems = ({ data }) => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <Grid columns={4}>
        <Grid>
          <Card elevation={0}>
            <CardMedia
              style={{
                width: '30px',
                borderRadius: '50%',
                padding: '2rem',
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
                <Button
                  size='small'
                  color={
                    data.occupation === 'customer'
                      ? classes.blueButton
                      : classes.greenButton
                  }>
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
