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
          <Card>
            <CardMedia
              style={{
                height: '150px',
                borderRadius: '50%',
              }}
              image={data.image}
            />
            <CardHeader
              title={data.name}
              style={{ color: '#000' }}
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
              <Typography>{data.text}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GridoneItems;
