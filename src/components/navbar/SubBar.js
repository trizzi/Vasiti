import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(2),
  },
  logo: {
    flexGrow: '1',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    fontSize: '10px',
    marginLeft: theme.spacing(10),
    '&:hover': {
      color: '#EE3C24',
      borderBottom: '1px solid white',
    },
  },
  '@media (max-width:414px)': {
    link: {
      display: 'none',
    },
  },
}));

const SubBar = () => {
  const classes = useStyles();
  return (
    <AppBar
      position='static'
      style={{ background: '#fff', fontFamily: 'Inter' }}>
      <CssBaseline />
      <Container>
        <Toolbar>
          <div className={classes.navlinks}>
            <Link
              to='/market-place'
              className={classes.link}>
              MARKETPLACE
            </Link>
            <Link
              to='/wholesale-center'
              className={classes.link}>
              WHOLESALE CENTER
            </Link>
            <Link
              to='/seller-center'
              className={classes.link}>
              SELLER CENTER
            </Link>
            <Link to='/services' className={classes.link}>
              SERVICES
            </Link>
            <Link
              to='/internships'
              className={classes.link}>
              INTERNSHIPS
            </Link>
            <Link to='/events' className={classes.link}>
              EVENTS
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default SubBar;
