import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import VasitiLogo from '../../img/Logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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
  button: {
    background: '#EE3C24',
    textDecoration: 'none',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
  },
  '@media(max-width:768px)': {
    navlinks: {
      marginLeft: theme.spacing(0),
    },
    link: {
      marginLeft: theme.spacing(4),
    },
  },
  '@media (max-width:414px)': {
    link: {
      display: 'none',
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        style={{ background: '#fff', fontFamily: 'Inter' }}>
        <CssBaseline />
        <Container>
          <Toolbar>
            <Typography
              variant='h4'
              className={classes.logo}>
              <img src={VasitiLogo} alt='Vasiti logo' />
            </Typography>
            <div className={classes.navlinks}>
              <Link to='/about' className={classes.link}>
                ABOUT US
              </Link>
              <Link to='/stories' className={classes.link}>
                STORIES
              </Link>
              <Link to='/contact' className={classes.link}>
                CONTACT
              </Link>
              <Link to='/login' className={classes.link}>
                LOGIN
              </Link>
              <Button className={classes.link}>
                <Link
                  to='/sign-up'
                  className={classes.button}>
                  SIGN UP
                </Link>
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navbar;
