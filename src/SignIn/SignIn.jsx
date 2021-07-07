import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  dialogBody: {
    'margin-left': theme.spacing(2),
  },
}));

const SignIn = (props) => {
  const { isLoggedIn, handleLogIn } = props;
  const history = useHistory();
  const { rd } = useParams();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    console.log(history);
    setOpen(false);
    if (rd && isLoggedIn) {
      history.push('/about/editJobs');
      return;
    }
    if (isLoggedIn) {
      history.push('/');
    } else {
      history.goBack();
    }
  };
  const handleChange = (e) => {
    handleLogIn(e);
  };
  const classes = useStyles();

  return (
    <Dialog onClose={handleClose} aria-labelledby="login-title" open={open}>
      <DialogTitle id="login-title">
        Sign In:
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogBody}>
        <input
          type="checkbox"
          id="logInBox"
          name="siginingBox"
          checked={isLoggedIn}
          onChange={handleChange}
        />
        <label htmlFor="logInBox"> I'm authenticated</label>
      </DialogContent>
    </Dialog>
  );
};

SignIn.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogIn: PropTypes.func.isRequired,
};

export default SignIn;
