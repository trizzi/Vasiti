import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { CardHeader, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import { CardActions } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  media: {
    borderRadius: '50%',
  },
}));

const GridtwoItems = ({ data }) => {
  const classes = useStyles();
  return (
    <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box>
              <Card>
                <CardMedia>{data.image}</CardMedia>
                <CardHeader
                  title={data.name}
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '700',
                  }}
                />

                <CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                      {data.occupation}
                    </Button>
                  </CardActions>
                  {/* <Typography size='small' color='primary'>
                    {data.occupation}
                  </Typography> */}
                  <Typography
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: '400',
                    }}>
                    {data.text}
                  </Typography>
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
