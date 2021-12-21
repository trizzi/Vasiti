import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import VasitiLogo from '../../img/Logo.svg';

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
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar
      position='static'
      style={{ background: '#fff' }}>
      <CssBaseline />
      <Container>
        <Toolbar>
          <Typography variant='h4' className={classes.logo}>
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
            <Link
              to='/sign-up'
              style={{
                background: '#EE3C24',
                color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
              }}
              className={classes.link}>
              SIGN UP
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
