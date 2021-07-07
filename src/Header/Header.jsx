import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppRoutes from '../routes';
import Typography from '@material-ui/core/Typography';
import './Header.pcss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { isLoggedIn } = props;
  const history = useHistory();
  const handleOpen = () => {
    !isLoggedIn && history.push('/signin');
  };
  return (
    <React.Fragment>
      {/**
       * Below code is a nav bar without leveraging material UI
            <nav className="nav__container">
              {AppRoutes.map((eachRoute) => {
                return (
                  !eachRoute.hide && (
                    <NavLink
                      to={eachRoute.routePath}
                      key={eachRoute.uid}
                      activeClassName="active-page"
                      exact
                    >
                      {eachRoute.displayLabel}
                    </NavLink>
                  )
                );
              })}
            </nav>
         */}
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {AppRoutes.map((eachRoute) => {
                return (
                  !eachRoute.hide && (
                    <NavLink
                      to={eachRoute.routePath}
                      key={eachRoute.uid}
                      className="nav__link"
                      activeClassName="active-page"
                      exact
                    >
                      {eachRoute.displayLabel}
                    </NavLink>
                  )
                );
              })}
            </Typography>
            <Button color="inherit" onClick={handleOpen}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
};

Header.defaultProps = {
  isLoggedIn: false,
};

export default Header;
